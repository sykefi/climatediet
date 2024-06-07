<template>
  <DialogBase>
    <form
      id="base"
      ref="form"
      @keydown.enter="proceed"
      @submit.prevent="proceed"
    >
      <button
        type="button"
        id="close-button"
        @click.prevent="cancel"
        aria-label="Close"
      >
        X
      </button>
      <h3>{{ $t('$login') }}</h3>
      <div v-if="!emailSent">
        <p>{{ $t('$loginGuide') }}</p>
        <p>
          {{ $t('$acceptRegistryDescription') }}
          <a href="#">{{ $t('$acceptRegistryDescription2') }}</a>
        </p>
        <label id="email-block">
          <span>{{ $t('$email') }}</span>
          <input type="email" required v-model="email" ref="emailField" />
        </label>
        <div class="error-container" v-if="error">
          <p>{{ error }}</p>
        </div>
        <input
          id="sendMail"
          :disabled="globalStateStore.busy"
          type="submit"
          class="button-primary"
          :value="$t('$sendLoginMail')"
        />
      </div>
      <div v-else>
        <p>
          {{
            $t('$emailSentGuide', {
              address: globalStateStore.userEmailWaitingForCode,
            })
          }}
        </p>
        <label>
          {{ $t('$token') }}
          <input
            maxlength="5"
            minlength="5"
            v-model="token"
            pattern="\d+"
            required
            ref="tokenField"
          />
        </label>
        <input
          id="validateToken"
          :disabled="globalStateStore.busy"
          type="submit"
          class="button-primary"
          :value="$t('$validateToken')"
        />
      </div>
    </form>
  </DialogBase>
</template>

<style lang="scss" scoped>
#close-button {
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
  height: auto;
  padding: 0.5em 0.5em;
}

.error-container {
  padding: 1em;
  margin-top: 2em;
  margin-bottom: 2em;
  max-width: fit-content;
  background-color: #f4cece;
}

#email-block {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & span {
    margin-right: 1em;
  }
  & input {
    max-width: 30em;
    flex: 1 1 0%;
  }
}
.button-primary {
  display: block;
  margin-left: 0;
}
</style>

<script lang="ts">
import DialogBase from '@/components/DialogBase.vue'
import i18n from '@/locale/i18n'
import { useGlobalStateStore } from '@/stores/global/store'
import { validateForm } from '@/utilities/utils'
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useResultsComparisonStore } from '@/stores/results/store'

export default defineComponent({
  components: {
    DialogBase,
  },
  computed: {
    ...mapStores(useGlobalStateStore, useResultsComparisonStore),
    emailSent(): boolean {
      return !!this.globalStateStore.userEmailWaitingForCode
    },
  },
  data() {
    return {
      token: '',
      email: '',
      error: '',
    }
  },
  methods: {
    cancel() {
      this.globalStateStore.setLoginVisible(false)
    },
    async proceed() {
      if (this.globalStateStore.busy) {
        return
      }
      const form = this.$refs.form as HTMLFormElement
      const isValid = validateForm(form)
      if (isValid) {
        this.error = ''
        if (!this.emailSent) {
          try {
            await this.globalStateStore.sendVerificationEmail({
              email: this.email,
              locale: i18n.global.locale,
            })
            this.emailSent = true
            this.$nextTick(() => (this.$refs.tokenField as any).focus())
          } catch (error) {
            if (
              error === this.$t('$networkError') ||
              error === this.$t('$loginActiveError')
            ) {
              this.error = error as string
            } else {
              this.error = this.$t('$emailSendError').toString()
            }
          }
        } else {
          try {
            await this.globalStateStore.verifyUser({
              token: this.token,
            })
            if (this.globalStateStore.testInstanceId > 0) {
              await this.globalStateStore.associateUserWithTest()
            }
            this.resultsComparisonStore.setUserHistory()
            this.globalStateStore.setLoginVisible(false)
          } catch (error) {
            if (error !== this.$t('$networkError')) {
              this.error = this.$t('$tokenVerifyError').toString()
            } else {
              this.error = error as string
            }
            this.globalStateStore.setError(error as string)
            this.globalStateStore.removeUserInfo()
          }
        }
      }
    },
  },
  mounted() {
    try {
      ;(this.$refs.emailField as any).focus()
    } catch (error) {
      ;(this.$refs.tokenField as any).focus()
    }
  },
})
</script>

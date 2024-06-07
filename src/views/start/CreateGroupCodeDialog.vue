<template>
  <DialogBase>
    <form ref="form" @keydown.enter="submitForm">
      <button
        type="button"
        id="close-button"
        @click="closeGroupCodeCreation"
        aria-label="Close"
      >
        X
      </button>

      <div v-if="!response">
        <h3>{{ $t('$createNewGroupCode') }}</h3>

        <div class="input-block">
          <label for="group-code">{{ $t('$newGroupCode') }}*</label>
          <div class="input-container">
            <input
              id="group-code"
              class="text-input"
              type="text"
              required
              v-model="code"
              :placeholder="$t('$groupCodeInstruction')"
              minlength="4"
              maxlength="50"
            />
          </div>
        </div>

        <div class="input-block">
          <label for="date">{{ $t('$validityPeriod') }}*</label>
          <div class="input-container">
            <input id="date" type="date" required v-model="expires" />
          </div>
        </div>

        <div class="input-block">
          <label for="email">{{ $t('$email') }}*</label>
          <div class="input-container">
            <!-- in addition to default email validation by input type,
            pattern argument validates email to be in format username@domain.domain_extension 
            to have same pattern validation as used at the backend -->
            <input
              class="text-input"
              id="email"
              type="email"
              pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
              required
              v-model="contact"
            />
          </div>
        </div>

        <div class="input-block">
          <label for="note">{{ $t('$note') }}</label>
          <div class="input-container">
            <textarea
              id="note"
              class="text-input"
              v-model="note"
              :placeholder="$t('$noteInstruction')"
              maxlength="500"
            ></textarea>
          </div>
        </div>

        <p class="mt-0 mb-2">{{ $t('$requiredFieldInfo') }}</p>

        <div v-if="error" class="info-block error-bg-color">
          <p>
            <b>{{ $t('$codeCreationFail') }}</b>
          </p>
          <p>{{ error }}</p>
        </div>

        <input
          type="submit"
          @click.prevent="submitForm"
          class="button-primary"
          :class="{ 'bg-color-grey': cannotSubmit }"
          :value="$t('$submitForm')"
          :disabled="globalStateStore.busy"
        />
      </div>

      <div v-if="response">
        <h3>
          {{ $t('$codeCreationSuccessful') }}
        </h3>
        <p>
          {{ $t('$createdCodeInfo') }}
          <b>{{ response }}.</b>
        </p>
        <p>
          {{ $t('$expiresInfo') }} {{ expiresDate }}
          {{ $t('$expiresTimePrefix') }} {{ expiresTime }}.
        </p>
        <p>{{ $t('$emailSentInfo') }} {{ contact }}.</p>
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

.button-primary {
  display: block;
  margin-left: 0;
}

.button-primary.bg-color-grey {
  background-color: #808080;
}

.input-block {
  padding: 0.5em 0;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  align-items: center;
  & .input-container {
    /* make parent elements of input fields have same the length 
    regardless of how wide the input elements are & all labels have same length
    -> all input elements wrap below labels at the same time*/
    min-width: 20em;
    max-width: 30em;
    flex: 1 1 0%;
    text-align: left;
    margin-bottom: 1em; /*need to have same margin as labels to keep aligned with them*/
    display: flex; // allow flexible sizing of child elements
  }
  & label {
    flex: 1 1 0%;
    min-width: 10em;
    max-width: 16em;
    margin-right: 1em;
    margin-bottom: 1em; /*keeps space between label & input field if stacked on top of each other*/
  }
}

.text-input {
  min-width: 20em;
  max-width: 27em;
  flex: 1 1 0%;
}

textarea {
  height: 8em;
  /* have same styling as input elements */
  font-family: 'Open Sans', sans-serif;
  font-size: 1em;
  border: 1px solid #e1e1e1;
  padding: 0.3em;
  margin-right: 0.5em;
}

.mb-2 {
  margin-bottom: 2em;
}

.mt-0 {
  margin-top: 0;
}

.info-block {
  padding: 1em;
  margin-top: 2em;
  margin-bottom: 2em;
  max-width: fit-content;
}

.error-bg-color {
  background-color: #f4cece;
}
</style>

<script lang="ts">
import DialogBase from '@/components/DialogBase.vue'
import { validateForm } from '@/utilities/utils'
import { useGlobalStateStore } from '@/stores/global/store'
import { mapStores } from 'pinia'
import { defineComponent } from 'vue'
import api from '@/utilities/api'
import i18n from '@/locale/i18n'

export default defineComponent({
  components: {
    DialogBase,
  },
  computed: {
    ...mapStores(useGlobalStateStore),
    cannotSubmit(): boolean {
      // make submit button grey when required fiels are empty
      // button is not disabled because clicking the button shows hints to the user when inputs are no valid
      return this.code == '' || this.expires == '' || this.contact == ''
    },
  },
  data() {
    return {
      minDate: '',
      maxDate: '',
      code: '',
      expires: '',
      expiresDate: '',
      expiresTime: '',
      contact: '',
      note: '',
      response: '', // available after succesful code creation
      locale: i18n.global.locale,
      error: '',
    }
  },
  mounted() {
    /* Add date constraints to calendar selection of expiration date. */
    this.minDate = this.getAllowedDate(0, 5) // add 5 days to current date
    this.maxDate = this.getAllowedDate(2, 0) // add 2 months to current date

    const expirationDate = <HTMLInputElement>document.getElementById('date')
    if (expirationDate) expirationDate.min = this.minDate
    if (expirationDate) expirationDate.max = this.maxDate
  },
  methods: {
    closeGroupCodeCreation() {
      this.globalStateStore.setCreateGroupCodeVisible(false)
    },
    getAllowedDate(monthsToAdd: number, daysToAdd: number) {
      const allowedDate = new Date()

      // get min/ max date in Date format
      allowedDate.setDate(allowedDate.getDate() + daysToAdd)
      allowedDate.setMonth(allowedDate.getMonth() + monthsToAdd)

      // Format using 'sv-SE' locale to get YYYY-MM-DD format
      const allowedDateF = allowedDate.toLocaleDateString('sv-SE')
      return allowedDateF
    },
    async submitForm() {
      const form = this.$refs.form as HTMLFormElement
      const isValid = validateForm(form)
      if (isValid) {
        // remove possible error info box
        this.error = ''

        // expiration time is set to 12.00 UTC at the backend
        const expiresHour = '12'
        const expiresMinutes = '00'

        const expiresDateTime = this.expires // API takes only date

        // make formatted date and time for informing the user
        this.expiresDate = this.expires.split('-').reverse().join('.') // to format dd.mm.yyyy
        this.expiresTime = expiresHour + '.' + expiresMinutes // to format HH.MM

        // API request payload data
        const data = {
          code: this.code,
          expires: expiresDateTime,
          contact: this.contact,
          note: this.note,
          language: this.locale,
        }

        try {
          this.globalStateStore.setBusy(true)
          this.response = await api.post('groupcode', data, '')
          return this.response
        } catch (error: any) {
          this.response = ''
          this.error = error
          console.error('Failed to create group code: ' + error)
        } finally {
          this.globalStateStore.setBusy(false)
        }
      }
    },
  },
})
</script>

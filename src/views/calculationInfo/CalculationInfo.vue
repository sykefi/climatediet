<template>
  <main>
    <button id="return-button" @click="goBack">
      {{ $t('$goBack') }}
    </button>
    <h1>{{ $t('$calculationInfoTitle') }}</h1>
    <a
      :href="documentationUrl + 'Laskentaperusteet.pdf'"
      rel="noopener noreferrer"
      target="_blank"
    >
      Linkki koko dokumentaatioon (pdf, versio 14.3.2019)
    </a>
    <a
      :href="documentationUrl + 'Berakningsgrunder.pdf'"
      rel="noopener noreferrer"
      target="_blank"
    >
      Länk till fullständig dokumentation (pdf, version 14.3.2019)
    </a>
    <a
      :href="documentationUrl + 'CalculationInfo.pdf'"
      rel="noopener noreferrer"
      target="_blank"
    >
      Link to the documentation (pdf, 14 March 2019)
    </a>
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/style.scss' as *;
main {
  padding: 0 20px;
  position: relative;
  white-space: pre-line;
}

h1 {
  clear: both;
}

a {
  display: block;
}

#return-button {
  margin-bottom: 0;
  margin-left: 0;
  float: left;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      documentationUrl: import.meta.env.VITE_APP_SERVER_ROOT + 'documentation/',
    }
  },
  methods: {
    goBack() {
      window.history.back()
    },
  },
  mounted() {
    const anchor = this.$route.hash
    this.$nextTick(() => {
      if (anchor && this.$el.querySelector(anchor).value) {
        location.href = anchor
      }
    })
  },
})
</script>

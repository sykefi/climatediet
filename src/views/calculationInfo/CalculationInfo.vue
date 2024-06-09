<template>
  <main>
    <button id="return-button" @click="goBack">
      {{ $t('$goBack') }}
    </button>
    <h1>{{ $t('$calculationInfoTitle') }}</h1>
    <a
      :href="
        documentationUrl +
        ($i18n.locale == 'fi'
          ? 'Laskentaperusteet.pdf'
          : $i18n.locale == 'sv'
            ? 'Berakningsgrunder.pdf'
            : 'CalculationInfo.pdf')
      "
      rel="noopener noreferrer"
      target="_blank"
    >
      {{ $t('$linkToDocumentation') }}
    </a>
    <section v-for="section in sections" :key="section">
      <h2 :id="section" @click="toggleSection(section)">
        {{ $t('$' + section + 'Title') }}
      </h2>
      <div v-if="visibleSections.indexOf(section) > -1">
        <p class="section-content" v-html="$t('$' + section + 'Content')" />
        <div v-for="subSection in subSections[section]" :key="subSection">
          <h3 :id="section + subSection" @click="toggleSubSection(subSection)">
            {{ $t('$' + section + subSection + 'Title') }}
          </h3>
          <p
            class="subsection-content"
            v-if="visibleSubSections.indexOf(subSection) > -1"
            v-html="$t('$' + section + subSection + 'Content')"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
main {
  padding: 0 20px;
  position: relative;
  white-space: pre-line;
}

h1 {
  clear: both;
}

section {
  border-bottom: 1px solid $line-light;
  text-align: left;

  & h2,
  h3 {
    cursor: pointer;
    color: $link-dark;
    margin: 0;
    user-select: none;
  }

  & h2 {
    font-size: $font-size-m;
    font-weight: bold;
    padding: 5px 0px;
  }

  & h3 {
    margin-left: 20px;
    font-size: $font-size-m;
    font-weight: $semi-bold;
    padding: 3px 0px;
  }
  .section-content {
    margin-left: 20px;
  }
  .subsection-content {
    margin-left: 40px;
  }
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
      sections: [
        'introduction',
        'baseData',
        'housing',
        'secondaryHouse',
        'transport',
        'food',
        'goodsAndServices',
        'waste',
        'emissionCredits',
        'results',
        'analysis',
        'sources',
      ],
      subSections: {
        housing: ['Electricity', 'Heating', 'Purchases'],
        transport: [
          'Car',
          'PublicTransport',
          'MotorcyclesBoats',
          'Travel',
          'WalkingCycling',
        ],
      },
      visibleSections: [''],
      visibleSubSections: [''],
    }
  },
  methods: {
    goBack() {
      window.history.back()
    },
    toggleSection(key: string) {
      const index = this.visibleSections.indexOf(key)
      if (index > -1) {
        this.visibleSections.splice(index, 1)
      } else {
        this.visibleSections.push(key)
      }
    },
    toggleSubSection(key: string) {
      const index = this.visibleSubSections.indexOf(key)
      if (index > -1) {
        this.visibleSubSections.splice(index, 1)
      } else {
        this.visibleSubSections.push(key)
      }
    },
  },
  mounted() {
    const anchor = this.$route.hash
    this.visibleSections.push(anchor.substr(1))
    this.$nextTick(() => {
      if (anchor && this.$el.querySelector(anchor).value) {
        location.href = anchor
      }
    })
  },
})
</script>

<template>
  <div id="service-description" class="full-page-text">
    <p class="wrapped-text" v-html="$t('$serviceDescriptionContent')" />
    <div v-for="link in links" :key="link">
      <a :href="$t(link + 'Url')" target="_blank" rel="noopener noreferrer">
        {{ $t(link + 'LinkText') }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      links: [
        '$hinku',
        '$climatePledge',
        '$sitra100Ways',
        '$dietAsEducation',
        '$ekokoti',
      ],
    }
  },
})
</script>

<template>
  <div class="details-button-wrapper">
    <button
      type="button"
      @click.prevent="shown = true"
      @mouseover="shown = true"
      @mouseleave="shown = false"
      aria-label="show details"
    >
      ?
    </button>
    <div v-if="shown" id="text" class="wrapped-text" @click="shown = false">
      {{ $t(this.contentKey) }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return { shown: false, rightOverFlow: false }
  },
  props: { contentKey: { type: String, required: true } },
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/style.scss' as *;
.details-button-wrapper {
  display: inline;
  position: relative;
}
button {
  height: 2em;
  width: 2em;
  padding: 0;
  border-radius: 30px;
  color: white;
  background: #ec9a1e;
  font-size: $font-size-s;
  &:disabled {
    background: $disabled;
    pointer-events: none;
  }
}
#text {
  display: block;
  border: 1px solid $highlight;
  background: white;
  font-size: $font-size-m;
  font-weight: normal;
  text-transform: none;
  text-align: center;
  padding: 1em;
  color: $text-dark;
  position: absolute;
  z-index: 995;
  max-width: 400px;
  min-width: 250px;
  user-select: none;
}
</style>

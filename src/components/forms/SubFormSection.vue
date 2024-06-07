<template>
  <section
    class="sub-form-section"
    :class="{ 'no-border': noBorder }"
    :aria-label="title"
  >
    <label
      v-if="title"
      class="section-title"
      :class="{ 'lower-case': lowerCase }"
      :for="titleFor"
    >
      {{ title }}
      <DetailsButton
        :content-key="detailsContentKey"
        v-if="detailsContentKey"
      />
    </label>
    <fieldset>
      <slot />
    </fieldset>
    <footer v-if="footer">
      {{ footer }}
    </footer>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    detailsContentKey: {
      type: String,
      required: false,
    },
    footer: {
      type: String,
      required: false,
    },
    lowerCase: {
      type: Boolean,
      required: false,
    },
    noBorder: {
      type: Boolean,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    titleFor: {
      type: String,
      required: false,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.sub-form-section {
  padding: 1.5em 0;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  align-items: center;
  border-bottom: 1px solid $line-light;
  &.no-border {
    border-bottom: none;
  }
  & fieldset {
    flex: 1 1 0%;
    padding: 0;
    min-width: 200px;
    text-align: left;
    display: inline-block;
    border: 0;
    padding: 0;
    & label {
      display: inline-block;
      font-size: $font-size-s;
    }
  }
  & footer {
    margin-top: 0.5em;
    flex-basis: 100%;
    font-size: $font-size-s;
    color: $text-semidark;
  }
}

.field-unit {
  font-size: $font-size-s;
}
</style>

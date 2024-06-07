<template>
  <section class="sub-form-section">
    <label v-if="title" class="section-title">
      {{ title }}
      <DetailsButton
        :content-key="detailsContentKey"
        v-if="detailsContentKey"
      />
    </label>
    <div id="options" role="radiogroup" :aria-label="title">
      <slot />
    </div>
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
    title: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.input-selection {
  display: flex;
  text-align: left;
  flex-wrap: wrap;
  padding: 1em;
  margin: 0 1em;
  border-bottom: 1px solid $line-light;
  align-items: center;
  &.active {
    background: $form-section-inactive; //TODO: color
  }
  & .radio-item {
    flex: 1 1 0%;
  }
  & .amount {
    flex: 2 1 0%;
    display: inline-block;
  }
  & .extra {
    flex: 1 1 100%;
    display: flex;
    align-items: center;
    margin-top: 0.5em;
    & .extra-label {
      flex: 1 1 0%;
    }
    & .extra-content {
      flex: 2 1 0%;
    }
  }
}

.section-title {
  float: left;
  max-width: 100%;
  min-width: $label-min-width;
  width: unset;
}

#options {
  clear: both;
}
</style>

<template>
  <div class="number-input-wrapper">
    <input
      type="number"
      pattern="\d*"
      required
      :min="min"
      :step="step"
      :max="max"
      :value="modelValue"
      :disabled="disabled"
      @input="input(($event.target as HTMLInputElement).value)"
    />
    <span class="field-unit">{{ unit }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    input(value: string) {
      if (value !== '') {
        this.$emit('update:modelValue', (+value).toFixed(0))
      }
    },
  },
  emits: ['update:modelValue'],
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    min: {
      type: Number,
      required: false,
      default: 0,
    },
    max: {
      type: Number,
      required: true,
    },
    step: {
      type: Number,
      required: false,
      default: 1,
    },
    unit: {
      type: String,
      required: false,
    },
    modelValue: {
      type: Number,
      required: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.number-input-wrapper {
  display: inline-block;
}
</style>

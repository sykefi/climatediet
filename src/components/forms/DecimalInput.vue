<template>
  <div class="number-input-wrapper">
    <input
      type="number"
      required
      :min="min"
      :step="isOldIE() ? 'any' : '0.' + decimals"
      :max="max"
      :value="modelValue"
      :disabled="disabled"
      @input="input(($event.target as HTMLInputElement).value)"
    />
    <span class="field-unit">{{ unit }}</span>
  </div>
</template>

<script lang="ts">
import { isOldInternetExplorer } from '@/utilities/utils'
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    input(value: string) {
      if (value !== '') {
        this.$emit('update:modelValue', (+value).toFixed(this.decimals))
      }
    },
    isOldIE() {
      return isOldInternetExplorer()
    },
  },
  emits: ['update:modelValue'],
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    decimals: {
      type: Number,
      required: false,
      default: 1,
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

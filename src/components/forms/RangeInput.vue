<template>
  <div class="range-item">
    <label class="range-label" v-if="name" :for="name">
      {{ $t('$' + name) }}
    </label>
    <div class="range-contents" role="group" :aria-label="name + ' inputs'">
      <input
        type="range"
        :min="exponential ? 0 : min"
        :step="exponential ? 1 : step"
        :max="exponential ? 100 : max"
        :value="valueToPosition"
        :aria-label="name + ' slider'"
        @change="updateFromRange(($event.target as HTMLInputElement).value)"
        @input="updateFromRange(($event.target as HTMLInputElement).value)"
      />
      <div>
        <IntegerInput
          :id="name"
          :min="min"
          :step="step"
          :max="max"
          :modelValue="modelValue"
          @update:modelValue="updateFromInput"
          :unit="unit"
        />
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    valueToPosition(): number | undefined {
      if (!this.exponential) {
        return this.modelValue
      }
      const value = (1 / this.normalizationConstant) * (this.modelValue ?? 0)
      const pow = 1 / this.exponent
      return value ** pow
    },
    normalizationConstant(): number {
      return this.max / 100 ** this.exponent
    },
  },
  data() {
    return {
      exponent: 3,
    }
  },
  methods: {
    updateFromRange(value: string) {
      let numberValue = parseInt(value)
      if (this.exponential) {
        numberValue = Math.round(this.positionToValue(numberValue))
      }
      this.$emit('update:modelValue', numberValue)
    },
    updateFromInput(value: number) {
      this.$emit('update:modelValue', value)
    },
    positionToValue(position: number): number {
      if (!this.exponential) {
        return position
      }
      return this.normalizationConstant * position ** this.exponent
    },
  },
  props: {
    name: {
      type: String,
      required: true,
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
    exponential: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.range-contents {
  flex: 1 1 0%;
}
</style>

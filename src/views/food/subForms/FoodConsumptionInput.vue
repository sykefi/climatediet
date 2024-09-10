<template>
  <div class="range-item">
    <label class="range-label" :for="props.inputName">
      {{ $t('$' + props.inputName) }}
    </label>
    <input
      :id="props.inputName"
      type="range"
      min="0"
      :max="maxValue"
      v-model="model"
    />
    <span class="field-unit">
      <input
        :id="props.inputName"
        type="number"
        min="0"
        :max="props.maxValue"
        v-model.number="model"
      />
      {{
        (props.unit == '$piecesShort' ? $t(props.unit) + '/ ' : props.unit) +
        $t('$weekLong')
      }}
    </span>
  </div>
</template>

<script setup lang="ts">
const [model, modifiers] = defineModel({ required: true })
console.log('model: ', model)
console.log('modifiers: ', modifiers)

const props = defineProps({
  inputName: {
    type: String,
    required: true,
  },
  maxValue: {
    type: String,
    required: false,
    default: '5000',
  },
  unit: {
    type: String,
    required: false,
    default: 'g/ ',
  },
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<template>
  <div class="range-item">
    <label class="range-label" :for="props.inputName">
      {{ $t('$' + props.inputName) }}
      <span v-if="props.inputDescription != ''" class="range-label-description">
        {{ $t('$' + props.inputDescription) }}
      </span>
    </label>
    <input
      :id="props.inputName"
      type="range"
      min="0"
      :step="props.step"
      :max="maxValue"
      v-model="model"
    />
    <span class="field-unit">
      <input
        :id="props.inputName"
        type="number"
        min="0"
        :step="props.step"
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [model, _modifiers] = defineModel({ required: true })

const props = defineProps({
  inputName: {
    type: String,
    required: true,
  },
  inputDescription: {
    type: String,
    required: false,
    default: '',
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
  step: {
    type: String,
    required: false,
    default: '1',
  },
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

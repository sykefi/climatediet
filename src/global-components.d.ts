import SubForm from '@/components/forms/SubForm.vue'
import SubFormSection from '@/components/forms/SubFormSection.vue'
import IntegerInput from '@/components/forms/IntegerInput.vue'
import DecimalInput from '@/components/forms/DecimalInput.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SubForm: typeof SubForm
    SubFormSection: typeof SubFormSection
    IntegerInput: typeof IntegerInput
    DecimalInput: typeof DecimalInput
  }
}

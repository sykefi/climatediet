import i18n from '@/locale/i18n'
import router from '@/router'
import HousingView from '@/views/housing/HousingView.vue'
import { mount } from '@vue/test-utils'
import { assert, describe, expect, it } from 'vitest'
import { fakeApi, isDisabled } from '../testutils'
import SubForm from '@/components/forms/SubForm.vue'
import SubFormSection from '@/components/forms/SubFormSection.vue'
import SubFormRadioSection from '@/components/forms/SubFormRadioSection.vue'
import DecimalInput from '@/components/forms/DecimalInput.vue'
import IntegerInput from '@/components/forms/IntegerInput.vue'
import RangeInput from '@/components/forms/RangeInput.vue'
import DetailsButton from '@/components/forms/DetailsButton.vue'
import { createPinia } from 'pinia'
import { useHousingStore } from '@/stores/housing/store'
import { useBaseDataStore } from '@/stores/startView/store'
import { HeatingModes, HouseTypes, Sections } from '@/stores/housing/types'
import { useGlobalStateStore } from '@/stores/global/store'

describe('HousingView', () => {
  const vm = mount(HousingView, {
    global: {
      components: {
        SubForm,
        SubFormSection,
        DecimalInput,
        IntegerInput,
        RangeInput,
        SubFormRadioSection,
        DetailsButton,
      },
      plugins: [createPinia(), router, i18n],
    },
  })
  const housingStore = useHousingStore()
  it('loads properly', () => {
    expect(HousingView).toBeTruthy()
  })
  it('has all sections disabled before base data has been submitted', () => {
    const sections = vm.findAll('h3')
    assert.isTrue(sections.length > 0, 'Sections not found')
    Array.from(sections).forEach((section) => {
      assert.isTrue(section.element.outerHTML.includes('disabled="true"'))
    })
  })
  // Disabled attribute is set to <h3> element which is not allowed and does not work anymore.
  // The following 3 tests need to be re-written when the feature is fixed.
  it.todo(
    'has some sections enabled after base data has been submitted',
    async () => {
      const baseDataStore = useBaseDataStore()
      const enabledIds = [
        'primaryBasics',
        'secondaryBasics',
        'primaryPurchases',
      ]
      await baseDataStore.setSubmitted(true)
      const sections = vm.findAll('h3')
      assert.isTrue(sections.length > 0, 'Sections not found')
      for (const sect of sections) {
        const section = sect.element
        const index = enabledIds.indexOf(section.id)
        if (index === -1) {
          assert.isTrue(
            isDisabled(section),
            'Should be disabled: ' + section.id
          )
        } else {
          assert.isFalse(
            isDisabled(section),
            'Should be enabled: ' + section.id
          )
          enabledIds.splice(index, 1)
        }
      }
      assert.isEmpty(
        enabledIds,
        'Not all the required headers were enabled: ' + enabledIds.join(',')
      )
    }
  )
  it.todo('enables heating section when house type is set', async () => {
    const sect = vm.find('[id=primaryHeating]').element
    assert.isTrue(isDisabled(sect), 'was not initially disabled')

    await housingStore.setType([true, HouseTypes.Flat])
    assert.isFalse(isDisabled(sect), 'was not enabled ')
  })
  it.todo('enables electricity section when heating mode is set', async () => {
    const sect = vm.find('[id=primaryElectricity]').element
    assert.isTrue(isDisabled(sect), 'was not initially disabled')
    await housingStore.setMainHeat([true, HeatingModes.District])
    assert.isFalse(isDisabled(sect), 'was not enabled')
  })
  it('has secondary house sections hidden when active section is not for secondary house', async () => {
    const secondaryIds = [
      'secondaryHeating',
      'secondaryElectricity',
      'secondaryPurchases',
    ]
    await housingStore.setActiveSection(Sections.Base)
    for (const id of secondaryIds) {
      expect(vm.find('#' + id).exists()).toBe(false)
    }
    expect(vm.find('#primaryBasics')).toBeTruthy()
  })
  it('has secondary house sections hidden before user has set the secondary house data', async () => {
    const secondaryIds = [
      'secondaryHeating',
      'secondaryElectricity',
      'secondaryPurchases',
    ]
    await housingStore.setActiveSection(Sections.SecondaryBase)
    for (const id of secondaryIds) {
      expect(vm.find('#' + id).exists()).toBe(false)
    }
  })
  it('selected secondary house sections become enabled after secondary house has been enabled', async () => {
    const enabledIds = ['secondaryPurchases']
    await housingStore.setActiveSection(Sections.SecondaryBase)
    await housingStore.setSecondHouse(true)
    for (const id of enabledIds) {
      const elem = vm.find('#' + id).element
      assert.isFalse(
        isDisabled(elem),
        'Was disabled: ' + (elem ? elem.outerHTML : 'null')
      )
    }
  })
  it('shows the correct total value in purchases view', async () => {
    await housingStore.setActiveSection(Sections.Purchases)
    await housingStore.setPurchAppliances([true, 100])
    await housingStore.setPurhCleaning([true, 100])
    await housingStore.setPurhFurniture([true, 120])
    await housingStore.setPurchMisc([true, 100])
    await housingStore.setPurchRenovations([true, 101])
    let sum = 0
    const wrappers = vm.findAll('input[type="number"]')
    for (const wrapper of wrappers) {
      expect(wrapper).toBeTruthy()
      const inp = wrapper.element as HTMLInputElement
      sum += +inp.value
    }
    assert.equal(521, sum, 'sum did not match')
    const sumElem = vm.find('#purchase-sum').element
    expect(sumElem).toBeTruthy()
    const sumVal = sumElem.innerHTML.match(/\d+/g)
    if (sumVal == null) {
      assert.fail('Sub element did not contain numbers')
    } else {
      assert.equal(sumVal.join(''), sum + '', 'Sum element mismatch')
    }
  })
  it('handles the returned results correctly', async () => {
    const globalStore = useGlobalStateStore()

    housingStore.setSecondHouse(false)
    const house = housingStore.primaryHouse
    assert.equal(house.buildingResult, 0)
    assert.equal(house.electricityResult, 0)
    assert.equal(house.heatingResult, 0)
    assert.equal(house.purchaseResult, 0)
    assert.equal(house.totalResult, 0)

    fakeApi.onPost('/housing/' + globalStore.testInstanceId).reply(200, {
      // only the relevant fields here
      id: 1,
      result: {
        electricity: 200,
        heating: 1000,
        infrastructure: 300,
        purchases: 1000,
        total: 2500,
      },
    })

    await housingStore.submit()
    assert.equal(house.electricityResult, 200, 'Elect. result mismatch')
    assert.equal(house.heatingResult, 1000, 'Heating result mismatch')
    assert.equal(house.buildingResult, 300, 'Building result mismatch')
    assert.equal(house.purchaseResult, 1000, 'Purchase result mismatch')
    assert.equal(house.totalResult, 2500, 'Total result mismatch')
  })
  it('succesfully handles district heating estimate', async () => {
    const heat = housingStore.primaryHouse.heating
    assert.equal(heat.districtEstimate, 0, 'Initial estimate mismatch')
    assert.equal(heat.districtConsumption, 0, 'Initial consumption mismatch')

    fakeApi.onGet('/housing/districtheatestimate/1').reply(200, 1900)

    await housingStore.districtEstimate([true, true])
    assert.equal(heat.districtEstimate, 1900, 'Estimate mismatch')
    assert.equal(heat.districtConsumption, 1900, 'Consumption mismatch')
  })
  it('succesfully handles heating oil estimate', async () => {
    const heat = housingStore.primaryHouse.heating
    assert.equal(heat.oilEstimate, 0, 'Initial estimate mismatch')
    assert.equal(heat.oilConsumption, 0, 'Initial consumption mismatch')

    fakeApi.onGet('/housing/heatingoilestimate/1').reply(200, 1900)

    await housingStore.oilEstimate([true, true])
    assert.equal(heat.oilEstimate, 1900, 'Estimate mismatch')
    assert.equal(heat.oilConsumption, 1900, 'Consumption mismatch')
  })
  it('succesfully handles electricity estimate', async () => {
    const el = housingStore.primaryHouse.electricity
    assert.equal(el.estimate, 0, 'Initial estimate mismatch')
    assert.equal(el.consumption, 0, 'Initial consumption mismatch')

    fakeApi.onGet('/housing/electricityestimate/1').reply(200, 1900)

    await housingStore.electricityEstimate([true, true])
    assert.equal(el.estimate, 1900, 'Estimate mismatch')
    assert.equal(el.consumption, 1900, 'Consumption mismatch')
  })
})

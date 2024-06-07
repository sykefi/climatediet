import StartView from '@/views/start/StartView.vue'
import FoodView from './views/food/FoodView.vue'
import ConsumptionView from './views/consumption/ConsumptionView.vue'
import HousingView from './views/housing/HousingView.vue'
import ResultsView from './views/results/ResultsView.vue'
import TransportView from './views/transport/TransportView.vue'
import WasteView from './views/waste/WasteView.vue'
import CalculationInfo from './views/calculationInfo/CalculationInfo.vue'
import ActionsView from './views/actions/ActionsView.vue'
import ServiceDescription from './views/common/ServiceDescription.vue'
import AccessibilityNotice from './views/common/AccessibilityNotice.vue'
import PrivacyNotice from './views/common/PrivacyNotice.vue'
import TermsOfUse from './views/common/TermsOfUse.vue'
import NotFound from './views/common/NotFound.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartView,
    },
    {
      path: '/consumption',
      name: 'consumption',
      component: ConsumptionView,
    },
    {
      path: '/food',
      name: 'food',
      component: FoodView,
    },
    {
      path: '/housing',
      name: 'housing',
      component: HousingView,
    },
    {
      path: '/results',
      name: 'results',
      component: ResultsView,
    },
    {
      path: '/transport',
      name: 'transport',
      component: TransportView,
    },
    {
      path: '/waste',
      name: 'waste',
      component: WasteView,
    },
    {
      path: '/calculationinfo',
      name: 'calculationInfo',
      component: CalculationInfo,
    },
    {
      path: '/actions',
      name: 'actions',
      component: ActionsView,
    },
    {
      path: '/serviceDescription',
      name: 'serviceDescription',
      component: ServiceDescription,
    },
    {
      path: '/accessibility',
      name: 'accessibilityNotice',
      component: AccessibilityNotice,
    },
    {
      path: '/privacyNotice',
      name: 'privacyNotice',
      component: PrivacyNotice,
    },
    {
      path: '/termsOfUse',
      name: 'termsOfUse',
      component: TermsOfUse,
    },
    { path: '/:pathMatch(.*)', component: NotFound },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
    return { top: 0 }
  },
})

import accessibility from './accessibility'
import actionsView from './actionsView'
import calculationInfo from './calculationInfo'
import consumption from './consumption'
import createGroupCode from './createGroupCode'
import errors from './errors'
import food from './food'
import footer from './footer'
import global from './global'
import header from './header'
import housing from './housing'
import login from './login'
import navigation from './navigation'
import privacyNotice from './privacyNotice'
import results from './results'
import serviceDescription from './serviceDescription'
import start from './start'
import termsOfUse from './termsOfUse'
import transport from './transport'
import waste from './waste'

export default {
  ...actionsView,
  ...consumption,
  ...createGroupCode,
  ...errors,
  ...food,
  ...footer,
  ...global,
  ...header,
  ...housing,
  ...login,
  ...navigation,
  ...results,
  ...start,
  ...waste,
  ...transport,
  ...serviceDescription,
  ...privacyNotice,
  ...termsOfUse,
  ...calculationInfo,
  ...accessibility,
}

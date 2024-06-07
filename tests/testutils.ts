import { serv } from '@/utilities/api'
import MockAdapter from 'axios-mock-adapter'
function isDisabled(elem: Element | null) {
  if (elem == null) {
    throw new Error('Element was null')
  }
  return elem.outerHTML.includes('disabled="disabled"')
}

const fakeApi = new MockAdapter(serv)
export { isDisabled, fakeApi }

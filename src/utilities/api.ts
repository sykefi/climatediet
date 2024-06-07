import i18n from '@/locale/i18n'
import axios from 'axios'

const apiURL = import.meta.env.VITE_APP_API_ROOT
export const serv = axios.create({
  baseURL: apiURL,
})

export interface IRequestParam {
  parameterName: string
  value: any
}

export default {
  async get(url: string, id: number) {
    url += '/' + id
    console.info('GET from ' + url)
    try {
      const start = Date.now()
      const response = await serv.get(url)
      console.info('GET Response took ' + (Date.now() - start) + 'ms')
      console.info(response.data)
      return Promise.resolve(response.data)
    } catch (error) {
      return Promise.reject(parseErrorData(error))
    }
  },
  async getWithParams(url: string, params: IRequestParam[]) {
    if (params) {
      url += '?' + params[0].parameterName + '=' + params[0].value
      params.splice(0, 1)
      for (const param of params) {
        url += '&' + param.parameterName + '=' + param.value
      }
    }
    console.info('GET from ' + url)
    try {
      const start = Date.now()
      const response = await serv.get(url)
      console.info('GET Response took ' + (Date.now() - start) + 'ms')
      console.info(response.data)
      return Promise.resolve(response.data)
    } catch (error) {
      return Promise.reject(parseErrorData(error))
    }
  },
  async post(url: string, payload: any, sessionId: string) {
    console.info('POST to ' + url)
    console.info(payload)
    try {
      const start = Date.now()
      const response = await serv.post(url, payload, {
        headers: { 'X-Ilmastodieetti-Session-Id': sessionId },
      })
      console.info('POST Response took ' + (Date.now() - start) + 'ms')
      console.info(response.data)
      return Promise.resolve(response.data)
    } catch (error) {
      return Promise.reject(parseErrorData(error))
    }
  },
  async postWithFullResponse(url: string, payload: any, sessionId: string) {
    console.info('POST to ' + url)
    console.info(payload)
    try {
      const start = Date.now()
      const response = await serv.post(url, payload, {
        headers: { 'X-Ilmastodieetti-Session-Id': sessionId },
      })
      console.info('POST Response took ' + (Date.now() - start) + 'ms')
      console.info(response)
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(parseErrorData(error))
    }
  },
  /** For Web Api simple values */
  async postWithParams(
    url: string,
    params: IRequestParam[],
    sessionId: string
  ) {
    if (params) {
      url += '?' + params[0].parameterName + '=' + params[0].value
      params.splice(0, 1)
      for (const param of params) {
        url += '&' + param.parameterName + '=' + param.value
      }
    }
    console.info('POST to ' + url)
    try {
      const start = Date.now()
      const response = await serv.post(url, undefined, {
        headers: { 'X-Ilmastodieetti-Session-Id': sessionId },
      })
      console.info('POST Response took ' + (Date.now() - start) + 'ms')
      console.info(response.data)
      return Promise.resolve(response.data)
    } catch (error) {
      return Promise.reject(parseErrorData(error))
    }
  },

  async put(url: string, payload: any, sessionId: string) {
    console.info('PUT to ' + url)
    console.info(payload)
    try {
      const start = Date.now()
      const response = await serv.put(url, payload, {
        headers: { 'X-Ilmastodieetti-Session-Id': sessionId },
      })
      console.info('PUT Response took ' + (Date.now() - start) + 'ms')
      console.info(response.data)
      return Promise.resolve(response.data)
    } catch (error) {
      return Promise.reject(parseErrorData(error))
    }
  },
}

function parseErrorData(error: any) {
  console.log(error.response)
  if (error.response) {
    const data = error.response.data
    if (data) {
      if (data.ModelState) {
        let fieldErrors = ''
        for (const model in data.ModelState) {
          if (data.ModelState.hasOwnProperty(model)) {
            const message = data.ModelState[model]
            fieldErrors = fieldErrors + message[0] + '\r\n'
          }
        }
        console.log(fieldErrors)

        return i18n.global.t('$inputError')
      }
      if (data.Message) {
        console.error(data.Message)
      }

      if (
        data
          .toString()
          .startsWith(
            'A new login token was requested while the previous was still active for this email'
          )
      ) {
        return i18n.global.t('$loginActiveError')
      }

      if (data.detail.startsWith('Duplicate group codes were found')) {
        return i18n.global.t('$dublicateCodeError')
      }

      return i18n.global.t('$saveFailedError')
    }
  }
  if (error.message === 'Network Error') {
    return i18n.global.t('$networkError')
  }
  return i18n.global.t('$saveFailedError')
}

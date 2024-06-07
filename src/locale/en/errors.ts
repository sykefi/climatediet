/* tslint:disable:max-line-length */
import { IErrorTranslations } from '../interfaces'

const en: IErrorTranslations = {
  $inputError: 'Invalid inputs. Check your answers and try again.', // TODO: field names
  $networkError: 'Network error. Try again',
  $saveFailedError: 'Save failed. Try again',
  $emailSendError: 'Sending the email failed. Check the address and try again',
  $tokenVerifyError:
    'The login token could not be verified. Check that the code matches the email and that it has not expired, and try again',
  $loginActiveError:
    'The previous login attempt for this email is still active, and a new one cannot be created. Wait for the previous code to expire before trying again.',
  $dublicateCodeError:
    'The group code you selected is already in use. Try another code.',
}

export default en

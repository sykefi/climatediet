/* tslint:disable:max-line-length */
import { IErrorTranslations } from '../interfaces'

const fi: IErrorTranslations = {
  $inputError: 'Virheellisiä arvoja. Tarkasta vastauksesi ja yritä uudelleen', // TODO: field names
  $networkError: 'Yhteysvirhe. Yritä uudelleen',
  $saveFailedError: 'Tallennus epäonnistui. Yritä uudelleen.',
  $emailSendError:
    'Sähköpostin lähettäminen epäonnistui. Tarkista osoite ja yritä uudelleen.',
  $tokenVerifyError:
    'Kirjautumiskoodia ei voitu varmistaa. Tarkista että koodi vastaa sähköpostia ja että koodi ei ole vanhentunut. Yritä sitten uudestaan.',
  $loginActiveError:
    'Uutta kirjautumista tälle sähköpostille ei voida tehdä, sillä edellinen on vielä voimassa. Odota että edellinen koodi vanhenee ennen uutta yritystä.',
  $dublicateCodeError:
    'Valitsemasi ryhmäkoodi on jo käytössä. Kokeile toista koodia.',
}

export default fi

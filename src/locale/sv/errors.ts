/* tslint:disable:max-line-length */
import { IErrorTranslations } from '../interfaces'
const sv: IErrorTranslations = {
  $inputError: 'Felaktiga värden. Kontrollera dina svar och försök igen', // TODO: field names
  $networkError: 'Anslutningsfel. Försök igen',
  $saveFailedError: 'Misslyckades med att spara. Försök igen.',
  $emailSendError:
    'Sändning av e-postmeddelandet misslyckades. Kontrollera adressen och försök igen.',
  $tokenVerifyError:
    'Inloggningskoden kunde inte bekräftas. Kontrollera att koden motsvarar e-posten och att koden inte har förfallit. Försök sedan igen.',
  $loginActiveError:
    'Det går inte att göra en ny inloggning för den här e-postadressen, eftersom den föregående fortfarande gäller. Vänta tills den gamla koden gått ut innan du försöker igen.',
  $dublicateCodeError:
    'Den gruppkod du valt är redan i bruk. Försök med en annan kod.',
}
export default sv

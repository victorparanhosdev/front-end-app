import { parsePhoneNumberFromString } from 'libphonenumber-js';

export function formatPhoneNumberWithCountry(phone: string): string {


const phoneNumber = parsePhoneNumberFromString(phone, 'BR'); // Substitua 'BR' por 'US', 'IN', etc.


if(!phoneNumber){
    return phone
}

return phoneNumber.formatInternational();



}


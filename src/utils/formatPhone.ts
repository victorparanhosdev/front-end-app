import { parsePhoneNumberFromString } from "libphonenumber-js";

export function formatPhoneCustom(phoneNumber: string) {
  phoneNumber = String(phoneNumber);

  if (!phoneNumber.startsWith("+")) {
    phoneNumber = "+" + phoneNumber;
  }

  try {
    const parsedNumber = parsePhoneNumberFromString(phoneNumber);

    if (!parsedNumber) {
      return "Número inválido";
    }

    const countryCode = parsedNumber.countryCallingCode;
    const nationalNumber = parsedNumber.nationalNumber;

    if (countryCode === "55" && nationalNumber.length === 11) {
      const areaCode = nationalNumber.substring(0, 2);
      const firstPart = nationalNumber.substring(2, 7);
      const secondPart = nationalNumber.substring(7);

      return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
    }

    return `+${countryCode} (${nationalNumber.substring(
      0,
      2
    )}) ${nationalNumber.substring(2, 7)}-${nationalNumber.substring(7)}`;
  } catch (error) {
    if (phoneNumber.length >= 13) {
      const countryCode = phoneNumber.substring(0, 3).replace("+", "");
      const areaCode = phoneNumber.substring(3, 5);
      const firstPart = phoneNumber.substring(5, 10);
      const secondPart = phoneNumber.substring(10, 13);

      return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
    }

    return "Formato de número inválido";
  }
}

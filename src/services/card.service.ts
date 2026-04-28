export function validateCardNumber(cardNumber: string): boolean {
  const digits = cardNumber.replace(/\s+/g, "");

  if (!/^\d{13,16}$/.test(digits)) {
    return false;
  }

  let sum = 0;
  let doubleDigit = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = Number(digits[i]);

    if (doubleDigit) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    doubleDigit = !doubleDigit;
  }

  return sum % 10 === 0;
}
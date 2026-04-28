export function validateCardNumber(cardNumber: string): boolean {
  const digits = cardNumber.replace(/\s+/g, "");

  // Check if the card number consists of 13 to 16 digits and contains only numbers
  const cardNumberPattern = /^\d{13,16}$/;
  if (!cardNumberPattern.test(digits)) {
    return false;
  }

  let sum = 0;
  let digitToDouble = false;

  //Loop through the digits from right to left and apply the Luhn algorithm
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = Number(digits[i]);

    if (digitToDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    digitToDouble = !digitToDouble;
  }

  return sum % 10 === 0;
}
export function validateCardNumber(cardNumber: string): boolean {
  const cardDigits = cardNumber.replace(/\s+/g, "");

  if (!/^\d+$/.test(cardDigits) || cardDigits.length < 13 || cardDigits.length > 19) {
    return false;
  }

  let sum = 0;
  let shouldDouble = false; 

  for (let i = cardDigits.length - 1; i >= 0; i--) {
    let digit = parseInt(cardDigits[i], 10); 

    if (shouldDouble) { 
      digit *= 2;
      if (digit > 9) digit -= 9; //
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}
import { Request, Response } from "express"; 
import { validateCardNumber } from "../services/card.service";

export function validateCard(req: Request, res: Response): void {
  const { cardNumber } = req.body;

  if (!cardNumber || typeof cardNumber !== "string") {
    res.status(400).json({
      valid: false,
      message: "Invalid card number",
    });
    return;
  }

  const isValid = validateCardNumber(cardNumber);

  res.status(200).json({
    valid: isValid,
    message: isValid ? "Card number is valid" : "Card number is invalid",
  });
}
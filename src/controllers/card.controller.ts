import { Request, Response } from "express";
import { validateCardNumber } from "../services/card.service";

export const validateCard = (req: Request, res: Response) => {
  try {
    const { cardNumber } = req.body;

    // Check if cardNumber is provided by the client and is a non-empty string
    if (typeof cardNumber !== "string" || !cardNumber.trim()) {
      return res.status(400).json({
        valid: false,
        message: "Card number is required",
      });
    }

    // 
    const isValid = validateCardNumber(cardNumber);
    
    if (!isValid) {
      return res.status(400).json({
        valid: false,
        message: "Invalid card number",
      });
    }

    return res.status(200).json({
      valid: true,
      message: "Card number is valid",
    });

  } catch (error) {
    return res.status(500).json({
      valid: false,
      message: "Internal server error",
    });
  }
};
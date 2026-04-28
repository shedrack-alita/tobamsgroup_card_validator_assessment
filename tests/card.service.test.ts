import { describe, expect, it } from "@jest/globals";
import { validateCardNumber } from "../src/services/card.service";

describe("validateCardNumber", () => {
	it("returns true for a valid Visa card number", () => {
		expect(validateCardNumber("4111111111111111")).toBe(true);
	});

	it("returns true for valid numbers containing spaces", () => {
		expect(validateCardNumber("4111 1111 1111 1111")).toBe(true);
	});

	it("returns false for numbers that fail the Luhn check", () => {
		expect(validateCardNumber("4111111111111112")).toBe(false);
	});

	it("returns false for numbers with non-digit characters", () => {
		expect(validateCardNumber("4111-1111-1111-1111")).toBe(false);
		expect(validateCardNumber("4111abcd11111111")).toBe(false);
	});

	it("returns false for numbers shorter than 13 digits", () => {
		expect(validateCardNumber("411111111111")).toBe(false);
	});

	it("returns false for numbers longer than 16 digits", () => {
		expect(validateCardNumber("41111111111111112")).toBe(false);
	});
});

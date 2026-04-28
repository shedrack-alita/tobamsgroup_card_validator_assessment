# Card Validator API

This is REST API that validates card numbers using the Luhn algorithm.

## Setup

```bash
npm install
npm start
```

## How to Test the Endpoint on Postman or any platform of your choice

**HTTP Method:** `POST`  
**URL:** `http://localhost:4000/card/validate`

###Required Request body:
```json
{ 
    "cardNumber": "4532015112830366" 
}
```

### Expected Success Response (200)
```json
{ 
    "valid": true, 
    "message": "Card number is valid" 
}
```

### Invalid Input Response (400)
```json
{ 
    "valid": false, 
    "message": "Card number is required" 
}
```

### Invalid Card Number Response (400)
```json
{ 
    "valid": false, 
    "message": "Invalid card number" 
}
```

## How to Run Tests
```bash
npm test
```

## Decisions
- I chose Express.js over NestJS because this assessment requires a single endpoint and Express keeps the implementation lightweight.
- I used the Luhn algorithm because it is the industry standard for card number checksum validation.
- I used a modular folder structure to separate concerns and keep the code easy to maintain.
- I added unit tests to validate the core card validation logic.
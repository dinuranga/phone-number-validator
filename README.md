# Sri Lanka Phone Number Validator API

This repository contains an Express.js API for validating Sri Lanka phone numbers and email addresses.

## Overview

The Sri Lanka Phone Number Validator API allows users to validate phone numbers and email addresses specific to Sri Lanka. It provides endpoints for validating both phone numbers and email addresses.

The API is currently deployed on Vercel and can be accessed at [https://phone-validator.vercel.app/](https://phone-validator.vercel.app/).

## Endpoints

### Validate Phone Number

- **Endpoint:** `/validate/phone`
- **Method:** POST
- **Request Body:** 
  ```json
  {
    "phoneNumber": "+94712345678"
  }

### Validate Email Address

- **Endpoint:** `/validate/email`
- **Method:** POST
- **Request Body:** 
  ```json
  {
    "emailAddress": "example@email.com"
  }


### Support

If you encounter any issues or have questions, feel free to open an issue in the repository. I am here to help!
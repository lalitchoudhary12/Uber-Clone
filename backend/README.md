# Backend API Documentation

## Endpoint
`/users/register`

## Description
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns an authentication token along with the user details.

## HTTP Method 
`POST`

## Request Body
The request body should be a JSON object with the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string with at least 3 characters (required)
- `email`: A string representing a valid email address (required)
- `password`: A string with at least 6 characters (required)

## Example Response:
- `user`
    {
    - "fullname": {
      - "firstname": "John",
      - "lastname": "Doe"
      },
    - "email": "john.doe@example.com",
    - "password": "password123"
    }
- `token`(String) : JWT Token
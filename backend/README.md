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

## Endpoint
`/users/login`

## Description
This endpoint is used to authenticate a user. It validates the input data, checks the email and password against the database, and returns an authentication token along with the user details if the credentials are valid.

## HTTP Method 
`POST`

## Request Body
The request body should be a JSON object with the following fields:
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

## Endpoint
`/users/profile`

## Description
This endpoint is used to retrieve the profile of the authenticated user. It requires a valid authentication token.

## HTTP Method 
`GET`

## Request Headers
- `Authorization`: Bearer token (required)

## Example Response:
- `user`
    {
    - "fullname": {
      - "firstname": "John",
      - "lastname": "Doe"
      },
    - "email": "john.doe@example.com"
    }

## Endpoint
`/users/logout`

## Description
This endpoint is used to log out the authenticated user. It clears the authentication token and blacklists it to prevent further use.

## HTTP Method 
`GET`

## Request Headers
- `Authorization`: Bearer token (required)

## Example Response:
- `message`: "Logged out successfully"
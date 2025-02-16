# Backend API Documentation

## Users Routes
## `/users/register` Endpoint

### Description
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns an authentication token along with the user details.

### HTTP Method 
`POST`

### Request Body
The request body should be a JSON object with the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string with at least 3 characters 
- `email`: A string representing a valid email address (required)
- `password`: A string with at least 6 characters (required)

### Example Response:
```json
{ 
  "token": "JWT Token (string)",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }
}
```

## `/users/login` Endpoint

### Description
This endpoint is used to authenticate a user. It validates the input data, checks the email and password against the database, and returns an authentication token along with the user details if the credentials are valid.

### HTTP Method 
`POST`

### Request Body
The request body should be a JSON object with the following fields:
- `email`: A string representing a valid email address (required)
- `password`: A string with at least 6 characters (required)

### Example Response:
```json
{ 
  "token": "JWT Token (string)",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }
}
```

## `/users/profile` Endpoint

### Description
This endpoint is used to retrieve the profile of the authenticated user. It requires a valid authentication token.

### HTTP Method 
`GET`

### Request Headers
- `Authorization`: Bearer token 

### Example Response:
```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
  }
}
```

## `/users/logout` Endpoint

### Description
This endpoint is used to log out the authenticated user. It clears the authentication token and blacklists it to prevent further use.

### HTTP Method 
`GET`

### Request Headers
- `Authorization`: Bearer token

### Example Response:
```json
{
  "message": "Logged out successfully"
}
```

## Captains routes
## `/captains/register` Endpoint

### Description
This endpoint is used to register a new captain. It validates the input data, hashes the password, creates a new captain in the database, and returns the captain details.

### HTTP Method 
`POST`

### Request Body
The request body should be a JSON object with the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string with at least 3 characters
- `email`: A string representing a valid email address (required)
- `password`: A string with at least 5 characters (required)
- `status` : Active or Inactive (default inactive)
- `vehicle`: An object containing:
  - `color`: A string with at least 3 characters (required)
  - `plate`: A string with at least 3 characters (required)
  - `capacity`: An integer with a minimum value of 1 (required)
  - `vehicleType`: A string that must be one of the following values: "car", "motorcycle", "auto" (required)

### Example Response:
```json
{
  "token": "JWT Token (string)",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123",
    "status": "inactive",
    "vehicle": {
      "color": "red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

## `/captains/login` Endpoint

### Description
This endpoint is used to authenticate a captain. It validates the input data, checks the email and password against the database, and returns an authentication token along with the captain details if the credentials are valid.

### HTTP Method 
`POST`

### Request Body
The request body should be a JSON object with the following fields:
- `email`: A string representing a valid email address (required)
- `password`: A string with at least 5 characters (required)

### Example Response:
```json
{ 
  "token": "JWT Token (string)",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123",
    "status": "inactive",
    "vehicle": {
      "color": "red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

## `/captains/profile` Endpoint

### Description
This endpoint is used to retrieve the profile of the authenticated captain. It requires a valid authentication token.

### HTTP Method 
`GET`

### Request Headers
- `Authorization`: Bearer token

### Example Response:
```json
{
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

## `/captains/logout` Endpoint

### Description
This endpoint is used to log out the authenticated captain. It clears the authentication token and blacklists it to prevent further use.

### HTTP Method 
`GET`

### Request Headers
- `Authorization`: Bearer token

### Example Response:
```json
{
  "message": "Logged out successfully"
}
```
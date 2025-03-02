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

## Captains Routes
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

## Maps Routes
## `/maps/get-coordinates` Endpoint

### Description
This endpoint is used to get the coordinates (latitude and longitude) of a given address.

### HTTP Method 
`GET`

### Query Parameters
- `address`: A string representing the address to get coordinates for (required, minimum length 3 characters)

### Request Headers
- `Authorization`: Bearer token 

### Example Response:
```json
{
  "lat": 37.774929,
  "lng": -122.419416
}
```

## `/maps/get-distance-time` Endpoint

### Description
This endpoint is used to get the distance and travel time between an origin and a destination.

### HTTP Method 
`GET`

### Query Parameters
- `origin`: A string representing the starting address (required, minimum length 3 characters)
- `destination`: A string representing the destination address (required, minimum length 3 characters)

### Request Headers
- `Authorization`: Bearer token 

### Example Response:
```json
{
  "distance": {
    "text": "5.3 km",
    "value": 5300
  },
  "duration": {
    "text": "15 mins",
    "value": 900
  }
}
```

## `/maps/get-suggestions` Endpoint

### Description
This endpoint is used to get autocomplete suggestions for a given input.

### HTTP Method 
`GET`

### Query Parameters
- `input`: A string representing the input to get suggestions for (required, minimum length 3 characters)

### Request Headers
- `Authorization`: Bearer token 

### Example Response:
```json
[
  {
    "description": "San Francisco, CA, USA",
    "place_id": "ChIJIQBpAG2ahYAR_6128GcTUEo"
  },
  {
    "description": "San Jose, CA, USA",
    "place_id": "ChIJ9T_5iuTKj4ARe3GfygqMnbk"
  }
]
```

## Rides Routes
## `/rides/create` Endpoint

### Description
This endpoint is used to create a new ride. It validates the input data, calculates the fare based on the distance and duration between the pickup and destination, and creates a new ride in the database.

### HTTP Method 
`POST`

### Request Body
The request body should be a JSON object with the following fields:
- `pickup`: A string representing the pickup address (required, minimum length 3 characters)
- `destination`: A string representing the destination address (required, minimum length 3 characters)
- `vehicleType`: A string that must be one of the following values: "auto", "moto", "car" (required)

### Request Headers
- `Authorization`: Bearer token (required)

### Example Response:
```json
{
  "_id": "60c72b2f9b1e8b001c8e4e1a",
  "user": "60c72b2f9b1e8b001c8e4e19",
  "pickup": "123 Main St",
  "destination": "456 Elm St",
  "fare": 75,
  "status": "pending",
  "otp": "123456",
  "__v": 0
}
```

## `/rides/get-fare` Endpoint

### Description
This endpoint is used to calculate the fare for a ride based on the pickup and destination addresses. It requires a valid authentication token.

### HTTP Method 
`GET`

### Request Headers
- `Authorization`: Bearer token

### Query Parameters
- `pickup`: A string representing the pickup address (required)
- `destination`: A string representing the destination address (required)

### Example Response:
```json
{
  "auto": 50.0,
  "car": 75.0,
  "moto": 35.0
}
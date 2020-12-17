# APIRest

## Endpois
### GET /games
This Endpoint is responsible for returning the list of all games registered in the database.
#### Params
None
### Responses
##### OK 200
if this answer happens you will receive the total listing.
Response Example:
```
[
  {
    "id": 23,
    "title": "Call of Duty Black Ops",
    "year": 2010,
    "price": 60
  },
  {
    "id": 15,
    "title": "Lineage II: Revolution",
    "year": 2016,
    "price": 40
  },
  {
    "id": 2,
    "title": "FIFA Online",
    "year": 2010,
    "price": 25
  }
]

```
##### Authentication failure
If this response happens, this means that there was a failure during the request authentication process.
Reasons: Token invalid; Expired token.
Response Example:

```
{
  "err": "Invalid Token!"
}

```

### POST /auth
Endpoint responsible for the login process.
#### Params
email: user email.
password: password registered in the system.
Exemple
```
{
  "email": "user@email.com",
  "password": "userpassword"
}

```
### Responses
##### OK 200
if this answer happens you will receive the tokent JWT for access the endpoints protected with auth props.
Response Example:
```
{
  "token": "token generated with JWT"
}

```
##### Authentication failure
If this response happens, this means that there was a failure during the request authentication process.
Reasons: incorrect email or password.
Response Example:

```
{
  "err": "Invalid Credentials"
}

```

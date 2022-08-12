# Movie Service

Movie Service is a microservice that provides a REST API for movies.

### Dependencies

- [NodeJS](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

### Installation

```bash
git clone https://github.com/buraksaraloglu/movie-service.git
cd movie-service
npm install
```

### Development

```bash
npm dev
```

### Deployment

```bash
npm run build
```

### Usage

```bash
npm start
```

### Testing

```bash
npm test
```

## Example Requests

**Get All Movies**

```bash
# GET /movie

curl --location --request GET '<service-uri>/movie' \
  --header 'user: <userId>' \
```

**Get Movie by ID**

```bash
# GET /movie/:movieId

curl --location --request GET '<service-uri>/movie/:movieId' \
  --header 'user: <userId>' \
```

**Create Movie**

```bash
# POST /movie

curl --location --request POST '<service-uri>/movie' \
  --header 'Content-Type: application/json' \
  --header 'user: <userId>' \
  --data-raw '{
    "name": "Titanic",
    "releaseDate": "1997-12-19"
  }'
```

**Update Movie**

```bash
# PUT /movie

curl --location --request PUT '<service-uri>/movie' \
  --header 'Content-Type: application/json' \
  --header 'user: <userId>' \
  --data-raw '{
    "name": "Titanic",
    "releaseDate": "2022-12-19"
  }'
```

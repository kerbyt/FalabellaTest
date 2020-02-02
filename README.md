# FalabellaTest
App test de Falabella seguros

# Instalacion Local

```
npm install
npm run start
or
npm run dev

Host: http://localhost:3001
Postman Collection: Incluido en el directorio del proyeto FalabellaSegurosTest.postman_collection.json
```

# Instalacion Docker

```
sudo docker build -t <your_name>/falabella:1.0 .
sudo docker run -p 49160:3001 <your_name>/falabella:1.0

Host: http://localhost:49160

Postman Collection: Incluido en el directorio del proyeto FalabellaSegurosTest.postman_collection.json

```

# Test

```
 npm test
 npm test -- --coverage

```


## REF - https://www.youtube.com/watch?v=Ld4OGwpQ2Yk

1. Crear un proyecto de node                  -   Escribir en consola:  npm init 

npm i - para crear package.json

Jalar las referencias

2. Instalar los paquetes requeridos       -   npm install express firebase cors body-parser mongoose nodemon

3. Crear la estructura del proyecto
    index, db, config.js   , .env     - archivos
    controllers, routes, models, helpers, firebase, (test)   - carpetas

4. Crear variables de entorno y la bd en firebase    - Escribir dentro de .env:
    API_PORT = 3000     (PORT:3003     HOST:localhost      HOST_URL:http://localhost:3003)

    - Crear una app en firebase (y configurar dentro de .env la API)

5. Crear el servidor con express
    info dentro de originalIndex.mb (L7-antes del CRUD) - escribirlo dentro de index.js

6. Conectar la BD
    info dentro de Firebase-index.js - igual escribirlo dentro

7. Añadir funcionabilidad 
    info dentro de Models-movie-model.js          - Creando el esquema para la BD
    info dentro de Controllers-index.js           - Creando el CRUD's
    info dentro de Routes-index.js                - Creando las rutas para el CRUD

8. Arrancar la app                          - Escribir en consola: npm start

    - dentro de package.json añadir despues de "main"

    "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "swagger-autogen": "node swagger.js"
  },

    - despues de "licences" añadir
    "dependencies": {
    "and": "^0.0.3",
    "body-parser": "^1.20.0",
    "cors": "^2.8.5",
    "express": "^4.18.1",
    "firebase-admin": "^11.1.0",
    "jest": "^29.2.1",
    "mongoose": "^6.6.4",
    "nodemon": "^2.0.20",
    "swagger-autogen": "^2.22.0",
    "swagger-ui-express": "^4.5.0"
  }

9. Hacer pruebas del CRUD con Postman

    CREATE - post localhost:3003/api/create-movie
    Body-raw  (según Models)
    {
    "name": "El kakaro",
    "time": "18:00",
    "author": "Tontin",
    "rating": "9"
    }

    SHOW - get localhost:3003/api/show-movies

    UPDATE - put localhost:3003/api/update-movie

    DELETE - delete localhost:3003/api/delete-movie/W8uezD6EmhchOgxPZmWL

    - Ir checando en Firebase y Postman que vaya corriendo bien


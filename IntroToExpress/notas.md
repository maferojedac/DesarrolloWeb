## lunes 3/oct/2022

index.js - Punto de entrada de la App

Instalamos en la carpeta del proyecto: (npm install express body-parse ... nodemon)
1. express- framework, nos permite aceptar requests
2. body-parse - serializar y deserializar objetos (archivos binarios, no se manda estructura ni texto, "info encriptada") interpreta la info que recibe
para definir cómo mandaremos el cuerpo
3. cors - para evitar problemas de crossorigin
cuando hosteemos a nuestro propia app, que no nos de problemas al llamar del mismo dominio nuestra propia app
4. mongoose- nos permite conectarnos con mongodb
5. nodemon- recarga la app cuando 

Instalamos de Google
1. Postman.com - para hacer pruebas locales de nuestra API

package.json
L7 - cuando comienza a correr el programa, se ejecuta


Express funciona sobre un mismo hilo, no crea uno diferente
Mongo deja meterse lo que sea, solo que sean objetos de JSON


Una vez terminado el index.js usamos la app de Postman y pusimos "localhost:3003/" (GET - body)

ctrl + click sobre 


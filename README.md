# Sprint7

## Resumen
Sprint7 es un proyecto que tiene como objetivo la creación de un chat en tiempo real. Este repositorio contiene el código de la aplicación, estructurado en varios componentes que incluyen controladores, base de datos, frontend, middleware, modelos, rutas, socket, src y utils.

## Tecnologías Utilizadas
- JavaScript
- TypeScript
- React
- Express
- Socket.io
- Jason Web Tokens (jwt)

## Estructura del Proyecto
- controllers/: Contiene los controladores de la aplicación.
- database/: Configuraciones y migraciones de la base de datos.
- frontend/: Código frontend de la aplicación.
- middleware/: Middleware utilizado en la aplicación.
- models/: Modelos de la base de datos.
- routes/: Rutas de la API.
- socket/: Configuraciones y manejadores de socket.
- src/: Archivos fuente.
- utils/: Funciones y ayudantes utilitarios.

## Instalación

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
    ```sh
    git clone https://github.com/Jordinky/Sprint7.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd Sprint7
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

4. Instala typescrypt:
    ```sh
    npm tsc
    ```
   
## Uso

Para iniciar el entorno de javascript, ejecuta:
```sh
npm run build
```
Para arrancar el backend, ejecuta:
```sh
npm run dev
```

Si quieres utilizar tu propia base de datos de mongoDB compass tienes que crear un fichero .env en el directorio raíz del proyecto, para poder utilizarlo tienes que instalar la dependencia "dotenv", el fichero tiene que tener una estructura como esta:
```sh
MONGO_URL=...
SECRET_KEY=...
```
En la web de https://cloud.mongodb.com/v2/6687b2a13a0bfa78a1af710b#/clusters/connect?clusterId=Cluster0 encontrasás las instrucciones para obtener la cadena de conexión, que añadirás a la variable MONGO_URL

![imagen](https://github.com/user-attachments/assets/e2ff73bb-9953-468d-9fb4-25a523a8709b)

Para obtener el SECRET_KEY tienes que utilizar el siguiente comando (en entorno Linux, en mi caso Mac)
```sh
openssl -rand base64 32
```

El frontend se encuentra en el directorio:
```sh
cd frontend
```
Para instalar el frontend ejecuta:
```sh
npm install
```
Y para arrancarlo ejecuta:
```sh
npm run dev
```

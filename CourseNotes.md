LECCION 1
Paso 1: Vamos a clonar el repositorio desde github.com/midudev/curso-platzi-react-avanzado usando git clone URL_DEL_REPO en nuestra consola.
Paso 2: Vamos a instalar webpack y webpack-cli como dependencias de desarrollo con: npm i webpack wepack-cli --save-dev.
Paso 3: Crearemos una carpeta llama src y dentro de ella un archivo index.js en el cual colocaremos solo un console.log('Empezamos el curso!').
Paso 4: Crearemos en el root de nuestro proyecto un archivo webpack.config.js el cual tendrá toda la configuración de webpack
Paso 5: Instalaremos html-webpack-plugin con: npm i html-webpack-plugin --save-dev.
Paso 6: Agregamos lo siguiente al archivo webpack.config.js:
    const HtmlWebpackPlugin = require('html-webpack-plugin');
        module.exports = {
            output: {
                filename: 'app.bundle.js'
            },
        plugins: [
            new HtmlWebpackPlugin()
        ]
    }
Paso 7: Instalaremos webpack-dev-server con: npm i webpack-dev-server --save-dev.
Paso 8: Añadiremos un nuevo script llamado dev: "dev": "webpack-dev-server".
Paso 9: Correr el proyecto con npm run dev y abrir en el navegador localhost:8080 (o puerto indicado que corre)

LECCION 2


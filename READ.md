Fuyu

Fuyu es una plantilla inicial para aplicaciones web basadas en Express.js, diseñada para facilitar el desarrollo de proyectos robustos con una estructura clara y herramientas modernas como Pug y Tailwind CSS.

Tabla de Contenidos
Características
Requisitos
Instalación
Estructura del Proyecto
Uso
Comandos Disponibles
Contribuciones
Licencia
Características
Configuración inicial optimizada para Express.js.
Pug como motor de plantillas.
Tailwind CSS para un diseño ágil y responsivo.
Estructura modular que facilita la escalabilidad.
Scripts de configuración inicial automática.
Configuración sencilla mediante variables de entorno.
Requisitos
Antes de usar Fuyu, asegúrate de tener instalado:

Node.js (v16 o superior)
npm (v8 o superior)
Instalación
Instala el paquete globalmente desde npm:

bash
Copiar código
npm install -g fuyu
Crea un nuevo proyecto con Fuyu:

bash
Copiar código
fuyu init my-project
cd my-project
Instala las dependencias:

bash
Copiar código
npm install
Inicia el servidor de desarrollo:

bash
Copiar código
npm start
El proyecto estará disponible en http://localhost:3000 de forma predeterminada.

Estructura del Proyecto
Fuyu organiza los archivos de la siguiente manera:

bash
Copiar código
/app
/views # Plantillas Pug
/routes # Archivos de rutas
/controllers # Lógica de controladores (opcional)
/public
/css # Archivos de estilo
/js # Scripts estáticos
/config
config.js # Configuración global
server.js # Punto de entrada principal
package.json # Configuración de dependencias y scripts
Uso
Configuración
Configura las variables de entorno en un archivo .env:

env
Copiar código
APP_NAME=Fuyu
PORT=3000
DB_HOST=localhost
Rutas
Las rutas principales se definen en app/routes/web.js. Puedes agregar nuevas rutas como esta:

javascript
Copiar código
router.get("/about", (req, res) => {
res.render("about", { title: "Sobre Nosotros" });
});
Estilos
Fuyu utiliza Tailwind CSS. Agrega tus estilos personalizados en public/css/main.css.

Comandos Disponibles
npm start
Inicia el servidor de desarrollo.

npm run build
Compila y optimiza los archivos CSS (si aplicable).

npm test
Ejecuta las pruebas automatizadas (pendiente de implementación).

Contribuciones
¡Las contribuciones son bienvenidas! Sigue estos pasos para colaborar:

Haz un fork del repositorio.
Crea una rama nueva para tu funcionalidad: git checkout -b feature/nueva-funcionalidad.
Realiza tus cambios y crea un commit: git commit -m 'Agrego nueva funcionalidad'.
Envía tu rama: git push origin feature/nueva-funcionalidad.
Abre un pull request en el repositorio principal.
Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.


### Arquitectura de la aplicacion
  - Hexagonal
  
## Instalaciones y Recomendaciones Necesarias

### Antes de Iniciar
Antes de comenzar, asegúrate de tener lo siguiente:
- Node.js versión 16 o superior instalado en tu sistema.
- NPM (Node Package Manager) instalado en tu sistema.

### Instalaciones del Proyecto
Para instalar las dependencias del proyecto, sigue estos pasos:
1. Abre una terminal.
2. Navega hasta el directorio raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las bibliotecas necesarias:
    ```bash
    npm install
    ```
4. Iniciar el Proyecto en Desarrollo
 - Para ejecutar el proyecto en modo de desarrollo, sigue estos pasos:
    ```bash
    npm run dev
    ```
## Deploy en aws
 - Asegurate de tener configurado tu aws settings
 - Ejecutar cualquiera de los siguientes comandos
    - para deployar
    ```bash
        npm run deploy
    ```

## Checklist 
- [x] Implementación de una API en Node.js utilizando el framework Serverless para su despliegue en AWS.
- [x] Adaptación y transformación de los modelos de la API de SWAPI a español
- [x] Diseño y creación de un modelo personalizado a través de endpoints para la insercion y lectura de la base de datos.
- [x] Uso de un framework (NestJs)

## Puntos
- [x] Mínimo 2 endpoints
- [x] Integración con un DynamoDB
- [x] Integración con SWAPI
- [x] Traducción de atributos de inglés a español
- [x] Uso de Serverless Framework
- [x] Uso de Node.js
- [x] Respeto de las buenas prácticas de desarrollo

## Bonus
- [x] Pruebas Unitarias
- [x] Uso de TypeScript
- [x] Deploy sin errores
- [x] Trabajar en capas y por dominio
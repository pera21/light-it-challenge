# 🏥 Challenge Light-it

## 📌 Descripción

Este proyecto consiste en la creación de un sistema de registro de pacientes a través de una API.

## 🛠 Tecnologías Utilizadas

- **Docker**: Para la contenedorización del proyecto.
- **JavaScript**: Lenguaje principal del backend.
- **Express.js**: Framework utilizado para la API.
- **MySQL**: Base de datos utilizada.
- **Swagger**: Documentación de la API.

## ⚙️ Configuración

1. Clonar el repositorio:
   ```sh
   git clone light-it-challenge
   cd light-it-challenge
   ```
2. Levantar los contenedores con Docker:

   ```sh
   docker-compose up
   ```

   - La API estará disponible en `http://localhost:3000`.
   - La base de datos MySQL está configurada en el puerto `3307`.

3. Para modificar configuraciones, revisar el archivo `docker-compose.yml`.

## 🚀 Uso de la API

- **Registro de pacientes:**
  ```sh
  POST http://localhost:3000/light-it/register
  ```
- **Documentación de la API con Swagger:**
  ```sh
  GET http://localhost:3000/light-it/docs
  ```

---

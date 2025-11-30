# 🚀 OpenKanban

![PHP](https://img.shields.io/badge/PHP-8.5-blue)
![Laravel](https://img.shields.io/badge/Laravel-12-red)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue)

> **Gestión ágil de proyectos personales mediante tableros visuales.**

OpenKanban es una herramienta de productividad moderna y de código abierto diseñada para simplificar la **gestión de tareas**. Inspirada en soluciones como Trello y Wekan, esta aplicación ofrece una experiencia fluida para organizar flujos de trabajo mediante la **metodología Kanban**. El proyecto está estructurado como un **Monorepo**, combinando la robustez de PHP con la interactividad del frontend moderno.

## 🛡️ Licencia

Este proyecto está licenciado bajo la Licencia MIT, lo que permite usar, copiar, modificar y distribuir libremente, siempre citando al autor.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 👥 Integrantes del Equipo

Este proyecto fue desarrollado por:

* **Manuel Casique**
* **Geyser Velasquez**
* **Guillermo García**
* **Leonel Cazorla**

---

## 📦 Stack tecnológico
- **Backend:** Laravel 12 (PHP 8.5)  
- **Frontend:** Next.js 14 (React + Tailwind CSS)  
- **Base de datos:** MySQL  
- **Servidor recomendado:** Laragon (Windows)  
- **Gestión de dependencias:** Composer (backend), npm/yarn (frontend)

---

## 🧰 Requisitos previos
Antes de instalar, asegúrate de tener instalado: 
- Laragon (con PHP, MySQL y Composer)  
- Node.js v20+  
- Git  
- Navegador moderno (Chrome, Edge, Firefox)

---

## 🚀 Instalación y Despliegue

Para poner en marcha OpenKanban en tu entorno local, sigue estos pasos para la instalación manual:

### 1️⃣ Clonar repositorio
```bash
cd C:\laragon\www
git clone https://github.com/GeyserVelasquez/OpenKanban
```
### 2️⃣ Backend (Laravel)
```bash
cd OpenKanban/backend
composer install
copy .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```
* Laravel estará disponible en http://127.0.0.1:8000

**Notas importantes:**

* Asegúrate de que la carpeta bootstrap/cache sea escribible por PHP.
* Verifica que las credenciales de la base de datos en .env sean correctas.
* Si aparece algún warning de PDO::MYSQL_ATTR_SSL_CA, puedes ignorarlo en entorno local.

### 3️⃣ Frontend (Next.js)

* Ingresa a la carpeta del frontend:
```cmd
cd OpenKanban/frontend
```

* Instala las dependencias de Node.js:
```cmd
npm install
```

* Crea archivo de variables de entorno .env.local:
```Block de Notas
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

Inicia el servidor frontend:
```cmd
npm run dev
```

* El frontend estará disponible en: http://localhost:3000

**Notas importantes:**

* Node.js debe ser v20 superior.
* Advertencias de dependencias obsoletas (deprecated) se pueden ignorar.
* Asegúrate de que el backend esté corriendo antes de iniciar el frontend para que la aplicación funcione correctamente.

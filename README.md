# Guía de Paises

Aplicación web que consume la API pública de [RestCountries](https://restcountries.com/) para explorar información de países del mundo.

## Funcionalidades

- Listado de todos los países con nombre, capital y región
- Búsqueda de países por nombre en tiempo real
- Filtro por región (África, América, Asia, Europa, Oceanía)
- Modal con detalle del país: población, moneda(s) e idioma(s)
- Bandera de cada país
- Skeleton loading mientras cargan los datos
- Manejo de errores con opción de reintentar
- Diseño responsivo para móvil y desktop

## Tecnologías

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.com/)
- [RestCountries API](https://restcountries.com/)

## Instalación y uso

1. Clona el repositorio

\`\`\`bash
git clone https://github.com/BryanTorres20/PruebaTecnicaPaises.git
\`\`\`

2. Entra a la carpeta del proyecto

\`\`\`bash
cd PruebaTecnicaPaises/prueba_tecnica
\`\`\`

3. Instala las dependencias

\`\`\`bash
npm install
\`\`\`

4. Corre el proyecto

\`\`\`bash
npm run dev
\`\`\`

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## Demo
https://prueba-tecnica-paises.vercel.app/

## Variables de entorno

Si deseas configurarlas crea un archivo `.env.local` en la carpeta `prueba_tecnica` con:


NEXT_PUBLIC_BASE_URL=https://restcountries.com/v3.1
NEXT_PUBLIC_FIELDS=name,capital,region,population,currencies,languages,flags


## Autor

**Bryan Torres**
- GitHub: [@BryanTorres20](https://github.com/BryanTorres20)

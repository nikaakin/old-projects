<div style="display:flex; align-items: center">
  <h1 style="position:relative; top: -6px" >Countries</h1>
</div>

---

Api heavy project for displaying countries and their details.

### Live version: https://countries-nikaakin.vercel.app/

#

### Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Project Structure](#project-structure)
- [Recources](#recources)

#

### Prerequisites

- *npm@9.5 and up*
- _nodejs@16 and up_

#

### Tech Stack

- [Reactjs@18.x](https://react.dev/) - The library for web and native user interfaces

- [Typescript](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types

- [Tailwind](https://tailwindcss.com/) - Package for styling

- [TanStack Query](https://tanstack.com/query/v3/) - Powerful asynchronous state management for TS/JS, React, Solid, Vue and Svelte

- [mui](https://mui.com/) - React components for faster and easier web development

- [react-router-dom](https://reactrouter.com/) - Declarative routing for React

#

### Getting Started

1\. First of all you need to clone repository from github:

```sh
git clone git@github.com:nikaakin/countries.git .
```

2\. Install dependencies

```sh
npm install
```

### Development

For running application locally use:

```sh
  npm run dev
```

#

### Project Structure

```bash
├─── public
├─── components
|   ├─── App
|   ├─── Airports
|   ├─── CountryInfo
|   ├─── CountryInfoField
|   ├─── Currency
|   ├─── Dropdown
|   ├─── ErroPage
├─── helpers
├─── hooks
├─── services
├─── types
- index.html
- main.tsx
- index.css
- routes.tsx
- .env
- .env.example
- .eslintrc.json
- postcss.config.js
- README.md
- tailwind.config.js
- tsconfig.json
- package.json
```

#

### Recources

- [Google geocoding API](https://developers.google.com/maps/documentation/geocoding/requests-reverse-geocoding)
- [Countries API](https://restcountries.com/)
- [Currency API](https://exchangerate.host/)
- [Airports API](https://api-ninjas.com/api/airports)

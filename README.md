# Biblioteca Virtual

Aplicacion web para gestionar lectura de libros con una metodologia Document Driven Development (DDD) y trabajo por fases.

## Estado del proyecto

Fase actual: Fase 2 - Migracion a React + TypeScript.

Estado: Base documental creada, migracion a React completada y conexion inicial a Open Library en progreso.

## Decisiones tecnicas

- Stack objetivo: React, TypeScript y Firebase.
- Fuente publica de catalogo: Open Library, sin API key.
- Fase 1 ejecutada con HTML y CSS puros, sin framework frontend.
- Fase 2 usa Vite, React + TypeScript y componentes organizados por carpeta.
- Fase 2 conecta una API publica de libros para busqueda y para agregar resultados a la coleccion local.
- La documentacion central vive en `/docs` y este README se mantiene como indice de estado.
- La futura arquitectura seguira folder-by-component.

## Documentacion centralizada

- [Alcance del proyecto](docs/alcance_del_proyecto.md)
- [Sistema de diseno](docs/sistema_de_diseño.md)
- [Tech stack](docs/tech_stack.md)
- [Arquitectura del proyecto](docs/arquitectura_del_proyecto.md)
- [Roadmap](docs/roadmap.md)

## Vista actual

- `index.html`: entrada Vite para montar la aplicacion React.
- `src/main.tsx`: punto de arranque de la aplicacion.
- `src/components/`: componentes organizados por carpeta.
- `src/api/`: integraciones con APIs publicas.
- `src/styles/global.css`: estilos globales de base.

## Proximas fases

- Fase 2: completar migracion a React + TypeScript con interactividad local.
- Fase 2: conectar la API publica de Open Library para busqueda remota y alta local de libros.
- Fase 3: integracion con Firebase para persistencia de libros.
# Biblioteca Virtual

Aplicacion web para gestionar lectura de libros con una metodologia Document Driven Development (DDD) y trabajo por fases.

## Estado del proyecto

Fase actual: Fase 1 - Documentacion + Maquetacion HTML/CSS.

Estado: Base documental creada y maqueta estatica inicial preparada sin React.

## Decisiones tecnicas

- Stack objetivo: React, TypeScript y Firebase.
- Fase 1 ejecutada con HTML y CSS puros, sin framework frontend.
- La documentacion central vive en `/docs` y este README se mantiene como indice de estado.
- La futura arquitectura seguira folder-by-component.

## Documentacion centralizada

- [Alcance del proyecto](docs/alcance_del_proyecto.md)
- [Sistema de diseno](docs/sistema_de_diseño.md)
- [Tech stack](docs/tech_stack.md)
- [Arquitectura del proyecto](docs/arquitectura_del_proyecto.md)
- [Roadmap](docs/roadmap.md)

## Vista actual

- `index.html`: maqueta estatica principal de la biblioteca virtual.
- `styles.css`: estilos base del layout y componentes visuales.

## Proximas fases

- Fase 2: migracion a React + TypeScript con componentes por carpeta.
- Fase 3: integracion con Firebase para persistencia de libros.
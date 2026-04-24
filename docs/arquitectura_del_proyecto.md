# Arquitectura del proyecto

## Fase 1

La arquitectura inicial vive en HTML y CSS con una sola vista principal de referencia.

## Fase 2 prevista

Se migra a una estructura folder-by-component bajo `src/components` con la siguiente convencion:

- `ComponentName.types.ts`
- `ComponentName.tsx`
- `ComponentName.css`
- `ComponentName.test.ts`

## Implementacion actual

- `src/components/LibraryApp`: composicion principal de la pantalla.
- `src/components/Header`: barra superior y navegacion.
- `src/components/Hero`: bloque de presentacion con llamadas a la accion.
- `src/components/StatsPanel`: resumen de lectura y estado del proyecto.
- `src/components/BookShelf`: galeria filtrable de libros.
- `src/components/BookCard`: tarjeta individual de libro con estado y valoracion.
- `src/components/BookForm`: formulario para agregar libros.

## Capas logicas previstas

- Presentacion: componentes visuales y layouts.
- Dominio UI: estados visuales de libros, filtros y acciones.
- Datos: integracion futura con Firebase.

## Criterios de escalabilidad

- Props tipadas para cada componente.
- CSS encapsulado por componente.
- Componentes funcionales y reutilizables.
- Preparacion para pruebas unitarias por componente.
# Arquitectura del proyecto

## Fase 1

La arquitectura inicial vive en HTML y CSS con una sola vista principal de referencia.

## Fase 2 prevista

Se migrara a una estructura folder-by-component bajo `src/components` con la siguiente convencion:

- `ComponentName.types.ts`
- `ComponentName.tsx`
- `ComponentName.css`
- `ComponentName.test.ts`

## Capas logicas previstas

- Presentacion: componentes visuales y layouts.
- Dominio UI: estados visuales de libros, filtros y acciones.
- Datos: integracion futura con Firebase.

## Criterios de escalabilidad

- Props tipadas para cada componente.
- CSS encapsulado por componente.
- Componentes funcionales y reutilizables.
- Preparacion para pruebas unitarias por componente.
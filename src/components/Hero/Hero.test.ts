import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders the main title and calls to action', () => {
    render(
      <Hero
        eyebrow="Gestion de lectura"
        title="Organiza tu biblioteca digital"
        description="Base visual lista para evolucionar."
      />
    );

    expect(screen.getByText('Organiza tu biblioteca digital')).toBeTruthy();
    expect(screen.getByText('Agregar libro')).toBeTruthy();
  });
});
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LibraryApp } from './LibraryApp';

describe('LibraryApp', () => {
  it('renders the main library interface', () => {
    render(<LibraryApp phaseLabel="Fase 2" />);

    expect(screen.getByText('Biblioteca Virtual')).toBeTruthy();
    expect(screen.getByText('Vista tipo biblioteca virtual')).toBeTruthy();
  });
});
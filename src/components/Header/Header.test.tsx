import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Header } from './Header';

describe('Header', () => {
  it('shows the current phase label', () => {
    render(<Header phaseLabel="Fase 2" />);

    expect(screen.getByText('DDD / Fase 2')).toBeTruthy();
  });
});
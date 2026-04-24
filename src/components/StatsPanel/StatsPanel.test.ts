import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { StatsPanel } from './StatsPanel';

describe('StatsPanel', () => {
  it('renders the provided stats', () => {
    render(
      <StatsPanel
        stats={{
          total: 4,
          pending: 2,
          read: 2,
          averageRating: 4.5
        }}
      />
    );

    expect(screen.getByText('4')).toBeTruthy();
    expect(screen.getByText('4.5 / 5')).toBeTruthy();
  });
});
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BookCard } from './BookCard';

describe('BookCard', () => {
  it('renders the book title and rating controls', () => {
    render(
      <BookCard
        book={{
          id: 'book-1',
          title: 'Clean Architecture',
          author: 'Robert C. Martin',
          pages: 412,
          status: 'por_leer',
          rating: 4,
          coverTone: 'amber'
        }}
        onToggleStatus={() => undefined}
        onRateBook={() => undefined}
      />
    );

    expect(screen.getByText('Clean Architecture')).toBeTruthy();
    expect(screen.getByLabelText('5 estrellas')).toBeTruthy();
  });
});
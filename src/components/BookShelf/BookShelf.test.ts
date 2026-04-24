import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BookShelf } from './BookShelf';

describe('BookShelf', () => {
  it('renders the book list and filter buttons', () => {
    render(
      <BookShelf
        books={[
          {
            id: 'book-1',
            title: 'Clean Architecture',
            author: 'Robert C. Martin',
            pages: 412,
            status: 'por_leer',
            rating: 4,
            coverTone: 'amber'
          }
        ]}
        activeFilter="todos"
        onFilterChange={() => undefined}
        onToggleStatus={() => undefined}
        onRateBook={() => undefined}
      />
    );

    expect(screen.getByText('Clean Architecture')).toBeTruthy();
    expect(screen.getByText('Todos')).toBeTruthy();
  });
});
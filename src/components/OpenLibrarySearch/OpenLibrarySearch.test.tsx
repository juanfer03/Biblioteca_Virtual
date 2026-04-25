import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { OpenLibrarySearch } from './OpenLibrarySearch';

describe('OpenLibrarySearch', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('searches books from Open Library and renders the results', async () => {
    const handleAddBook = vi.fn();

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          docs: [
            {
              key: '/works/OL1W',
              title: 'Clean Architecture',
              author_name: ['Robert C. Martin'],
              first_publish_year: 2017,
              cover_i: 123,
              edition_count: 42,
              number_of_pages_median: 432
            }
          ]
        })
      })
    );

    render(<OpenLibrarySearch defaultQuery="clean architecture" onAddBook={handleAddBook} />);

    fireEvent.click(screen.getByRole('button', { name: 'Buscar' }));

    await waitFor(() => {
      expect(screen.getByText('Clean Architecture')).toBeTruthy();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Agregar a mi lista' }));

    expect(handleAddBook).toHaveBeenCalledWith({
      title: 'Clean Architecture',
      author: 'Robert C. Martin',
      pages: '432',
      status: 'por_leer',
      rating: 4,
      coverUrl: 'https://covers.openlibrary.org/b/id/123-M.jpg'
    });
  });
});
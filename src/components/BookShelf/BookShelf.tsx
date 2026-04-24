import { BOOK_STATUS_LABELS, BookFilter } from '../../types/library';
import { BookCard } from '../BookCard/BookCard';
import { BookShelfProps } from './BookShelf.types';
import './BookShelf.css';

const FILTERS: BookFilter[] = ['todos', 'por_leer', 'leido'];

export function BookShelf({
  books,
  activeFilter,
  onFilterChange,
  onToggleStatus,
  onRateBook
}: BookShelfProps) {
  const filteredBooks =
    activeFilter === 'todos' ? books : books.filter((book) => book.status === activeFilter);

  return (
    <section className="book-shelf" id="coleccion">
      <div className="book-shelf__header">
        <div>
          <p className="book-shelf__eyebrow">Coleccion</p>
          <h2 className="book-shelf__title">Vista tipo biblioteca virtual</h2>
        </div>

        <div className="book-shelf__filters" aria-label="Filtros de libros">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`book-shelf__filter ${activeFilter === filter ? 'book-shelf__filter--active' : ''}`}
              onClick={() => onFilterChange(filter)}
            >
              {filter === 'todos' ? 'Todos' : BOOK_STATUS_LABELS[filter]}
            </button>
          ))}
        </div>
      </div>

      {filteredBooks.length > 0 ? (
        <div className="book-shelf__grid">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onToggleStatus={onToggleStatus}
              onRateBook={onRateBook}
            />
          ))}
        </div>
      ) : (
        <p className="book-shelf__empty">No hay libros para el filtro seleccionado.</p>
      )}
    </section>
  );
}
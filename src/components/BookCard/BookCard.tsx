import { BOOK_STATUS_LABELS } from '../../types/library';
import { BookCardProps } from './BookCard.types';
import './BookCard.css';

const STAR_LEVELS = [1, 2, 3, 4, 5];

export function BookCard({ book, onToggleStatus, onRateBook }: BookCardProps) {
  const nextStatusLabel = BOOK_STATUS_LABELS[book.status === 'por_leer' ? 'leido' : 'por_leer'];

  return (
    <article className="book-card">
      <div className={`book-card__cover book-card__cover--${book.coverTone}`} aria-hidden="true" />

      <div className="book-card__body">
        <p className={`book-card__status book-card__status--${book.status}`}>
          {BOOK_STATUS_LABELS[book.status]}
        </p>
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__author">{book.author}</p>

        <div className="book-card__meta">
          <span>{book.pages > 0 ? `${book.pages} paginas` : 'Paginas no disponibles'}</span>
          <span>{book.rating} / 5 estrellas</span>
        </div>

        <div className="book-card__actions">
          <button
            className="book-card__button"
            type="button"
            onClick={() => onToggleStatus(book.id)}
          >
            Mover a {nextStatusLabel}
          </button>

          <div className="book-card__stars" aria-label={`Calificacion de ${book.title}`}>
            {STAR_LEVELS.map((level) => (
              <button
                key={level}
                className={`book-card__star ${level <= book.rating ? 'book-card__star--active' : ''}`}
                type="button"
                aria-label={`${level} estrellas`}
                aria-pressed={level === book.rating}
                onClick={() => onRateBook(book.id, level)}
              >
                {level <= book.rating ? '★' : '☆'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
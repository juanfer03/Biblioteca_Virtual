import { useState } from 'react';
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import { StatsPanel } from '../StatsPanel/StatsPanel';
import { BookShelf } from '../BookShelf/BookShelf';
import { BookForm } from '../BookForm/BookForm';
import { initialBooks } from '../../data/initialBooks';
import { Book, BookDraft, BookFilter, BookStats } from '../../types/library';
import { LibraryAppProps } from './LibraryApp.types';
import './LibraryApp.css';

const COVER_TONES: Book['coverTone'][] = ['amber', 'teal', 'plum', 'cocoa'];

function getCoverTone(index: number): Book['coverTone'] {
  return COVER_TONES[index % COVER_TONES.length];
}

function createBookId() {
  return globalThis.crypto?.randomUUID?.() ?? `book-${Date.now()}`;
}

export function LibraryApp({ phaseLabel = 'Fase 2' }: LibraryAppProps) {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [activeFilter, setActiveFilter] = useState<BookFilter>('todos');

  function handleAddBook(bookDraft: BookDraft) {
    setBooks((currentBooks) => [
      {
        id: createBookId(),
        title: bookDraft.title,
        author: bookDraft.author,
        pages: Number(bookDraft.pages),
        status: bookDraft.status,
        rating: bookDraft.rating,
        coverTone: getCoverTone(currentBooks.length)
      },
      ...currentBooks
    ]);
  }

  function handleToggleStatus(bookId: string) {
    setBooks((currentBooks) =>
      currentBooks.map((book) =>
        book.id === bookId
          ? {
              ...book,
              status: book.status === 'por_leer' ? 'leido' : 'por_leer'
            }
          : book
      )
    );
  }

  function handleRateBook(bookId: string, rating: number) {
    setBooks((currentBooks) =>
      currentBooks.map((book) => (book.id === bookId ? { ...book, rating } : book))
    );
  }

  function calculateStats(currentBooks: Book[]): BookStats {
    const total = currentBooks.length;
    const pending = currentBooks.filter((book) => book.status === 'por_leer').length;
    const read = total - pending;
    const ratingSum = currentBooks.reduce((sum, book) => sum + book.rating, 0);

    return {
      total,
      pending,
      read,
      averageRating: total > 0 ? Number((ratingSum / total).toFixed(1)) : 0
    };
  }

  const stats = calculateStats(books);

  return (
    <div className="library-app">
      <Header phaseLabel={phaseLabel} />

      <div className="library-app__hero-grid">
        <Hero
          eyebrow="Gestion de lectura"
          title="Organiza tu biblioteca digital con una vista clara y editable."
          description="La Fase 2 convierte la maqueta en una aplicacion React + TypeScript con componentes reutilizables, filtros por estado, valoracion por estrellas y registro local de libros."
        />
        <StatsPanel stats={stats} />
      </div>

      <BookShelf
        books={books}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        onToggleStatus={handleToggleStatus}
        onRateBook={handleRateBook}
      />

      <div className="library-app__form-grid">
        <BookForm onSubmit={handleAddBook} />
        <section className="library-app__phase-note">
          <p className="library-app__phase-note-eyebrow">Estado de fase</p>
          <h2 className="library-app__phase-note-title">Migracion activa a React</h2>
          <p className="library-app__phase-note-text">
            La base visual ya esta integrada con componentes por carpeta, tipado de props y
            comportamiento local listo para la siguiente expansion con Firebase.
          </p>
        </section>
      </div>
    </div>
  );
}
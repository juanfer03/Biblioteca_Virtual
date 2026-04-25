import { FormEvent, useState } from 'react';
import { getOpenLibraryCoverUrl, searchOpenLibraryBooks } from '../../api/openLibrary';
import { OpenLibraryBookPreview } from '../../types/library';
import { OpenLibrarySearchProps } from './OpenLibrarySearch.types';
import './OpenLibrarySearch.css';

const INITIAL_QUERY = 'react';

export function OpenLibrarySearch({ defaultQuery = INITIAL_QUERY, onAddBook }: OpenLibrarySearchProps) {
  const [query, setQuery] = useState(defaultQuery);
  const [submittedQuery, setSubmittedQuery] = useState('');
  const [results, setResults] = useState<OpenLibraryBookPreview[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [addedKeys, setAddedKeys] = useState<string[]>([]);

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setResults([]);
      setSubmittedQuery('');
      setErrorMessage('');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      const books = await searchOpenLibraryBooks(trimmedQuery);
      setResults(books);
      setSubmittedQuery(trimmedQuery);
      setAddedKeys([]);
    } catch {
      setResults([]);
      setErrorMessage('No se pudo cargar la busqueda de Open Library. Intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleAddBook(book: OpenLibraryBookPreview) {
    onAddBook({
      title: book.title,
      author: book.author,
      pages: String(book.pageCount ?? 0),
      status: 'por_leer',
      rating: 4
    });
    setAddedKeys((currentKeys) => [...currentKeys, book.key]);
  }

  return (
    <section className="open-library-search" aria-labelledby="open-library-search-title">
      <div className="open-library-search__header">
        <div>
          <p className="open-library-search__eyebrow">API externa</p>
          <h2 className="open-library-search__title" id="open-library-search-title">
            Busqueda en Open Library
          </h2>
        </div>
        <p className="open-library-search__description">
          Consulta catalogo gratuito en tiempo real y visualiza libros disponibles sin tocar Firebase.
        </p>
      </div>

      <form className="open-library-search__form" onSubmit={handleSearch}>
        <label className="open-library-search__field">
          <span>Buscar libro o autor</span>
          <input
            type="search"
            placeholder="Ej. clean architecture o james clear"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <button className="open-library-search__submit" type="submit" disabled={isLoading}>
          {isLoading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      <div className="open-library-search__status" aria-live="polite">
        {errorMessage ? <p className="open-library-search__error">{errorMessage}</p> : null}
        {!errorMessage && submittedQuery ? (
          <p className="open-library-search__summary">
            Resultados para <strong>{submittedQuery}</strong>.
          </p>
        ) : null}
      </div>

      {results.length > 0 ? (
        <div className="open-library-search__results">
          {results.map((book) => (
            <article className="open-library-search__card" key={book.key}>
              <div className="open-library-search__cover-wrap">
                {book.coverId ? (
                  <img
                    className="open-library-search__cover"
                    src={getOpenLibraryCoverUrl(book.coverId)}
                    alt={`Portada de ${book.title}`}
                    loading="lazy"
                  />
                ) : (
                  <div className="open-library-search__cover open-library-search__cover--fallback" aria-hidden="true">
                    <span>OL</span>
                  </div>
                )}
              </div>

              <div className="open-library-search__card-body">
                <p className="open-library-search__card-eyebrow">Catalogo publico</p>
                <h3 className="open-library-search__card-title">{book.title}</h3>
                <p className="open-library-search__card-author">{book.author}</p>

                <div className="open-library-search__meta">
                  {book.firstPublishYear ? <span>{book.firstPublishYear}</span> : null}
                  {book.editionCount ? <span>{book.editionCount} ediciones</span> : null}
                </div>

                <button
                  className="open-library-search__add"
                  type="button"
                  onClick={() => handleAddBook(book)}
                  disabled={addedKeys.includes(book.key)}
                >
                  {addedKeys.includes(book.key) ? 'Agregado a tu lista' : 'Agregar a mi lista'}
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : null}

      {!isLoading && !errorMessage && submittedQuery && results.length === 0 ? (
        <p className="open-library-search__empty">No se encontraron resultados para esa busqueda.</p>
      ) : null}
    </section>
  );
}
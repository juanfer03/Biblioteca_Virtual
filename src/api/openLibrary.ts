import { OpenLibraryBookPreview } from '../types/library';

interface OpenLibrarySearchDoc {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
  edition_count?: number;
  number_of_pages_median?: number;
}

interface OpenLibrarySearchResponse {
  docs?: OpenLibrarySearchDoc[];
}

function buildCoverUrl(coverId: number) {
  return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
}

export function buildOpenLibraryBookUrl(key: string) {
  return `https://openlibrary.org${key}`;
}

export async function searchOpenLibraryBooks(query: string, limit = 6): Promise<OpenLibraryBookPreview[]> {
  const normalizedQuery = query.trim();

  if (!normalizedQuery) {
    return [];
  }

  const searchUrl = new URL('https://openlibrary.org/search.json');
  searchUrl.searchParams.set('q', normalizedQuery);
  searchUrl.searchParams.set(
    'fields',
    'key,title,author_name,first_publish_year,cover_i,edition_count,number_of_pages_median'
  );
  searchUrl.searchParams.set('limit', String(limit));
  searchUrl.searchParams.set('lang', 'es');

  const response = await fetch(searchUrl.toString());

  if (!response.ok) {
    throw new Error('No se pudo consultar Open Library.');
  }

  const payload = (await response.json()) as OpenLibrarySearchResponse;

  return (payload.docs ?? []).map((doc) => ({
    key: doc.key,
    title: doc.title,
    author: doc.author_name?.[0] ?? 'Autor desconocido',
    firstPublishYear: doc.first_publish_year,
    coverId: doc.cover_i,
    editionCount: doc.edition_count,
    pageCount: doc.number_of_pages_median
  }));
}

export function getOpenLibraryCoverUrl(coverId?: number) {
  return coverId ? buildCoverUrl(coverId) : '';
}
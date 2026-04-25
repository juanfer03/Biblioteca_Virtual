export type BookStatus = 'por_leer' | 'leido';

export type BookFilter = 'todos' | BookStatus;

export type CoverTone = 'amber' | 'teal' | 'plum' | 'cocoa';

export interface Book {
  id: string;
  title: string;
  author: string;
  pages: number;
  status: BookStatus;
  rating: number;
  coverTone: CoverTone;
  coverUrl?: string;
}

export interface BookDraft {
  title: string;
  author: string;
  pages: string;
  status: BookStatus;
  rating: number;
  coverUrl?: string;
}

export interface BookStats {
  total: number;
  pending: number;
  read: number;
  averageRating: number;
}

export interface OpenLibraryBookPreview {
  key: string;
  title: string;
  author: string;
  firstPublishYear?: number;
  coverId?: number;
  editionCount?: number;
  pageCount?: number;
}

export const BOOK_STATUS_LABELS: Record<BookStatus, string> = {
  por_leer: 'Por leer',
  leido: 'Leido'
};
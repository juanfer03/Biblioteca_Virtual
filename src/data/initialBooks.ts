import { Book } from '../types/library';

export const initialBooks: Book[] = [
  {
    id: 'book-1',
    title: 'Clean Architecture',
    author: 'Robert C. Martin',
    pages: 412,
    status: 'por_leer',
    rating: 4,
    coverTone: 'amber'
  },
  {
    id: 'book-2',
    title: 'Atomic Habits',
    author: 'James Clear',
    pages: 320,
    status: 'leido',
    rating: 5,
    coverTone: 'teal'
  },
  {
    id: 'book-3',
    title: 'El nombre del viento',
    author: 'Patrick Rothfuss',
    pages: 662,
    status: 'leido',
    rating: 5,
    coverTone: 'plum'
  },
  {
    id: 'book-4',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt y David Thomas',
    pages: 352,
    status: 'por_leer',
    rating: 4,
    coverTone: 'cocoa'
  }
];
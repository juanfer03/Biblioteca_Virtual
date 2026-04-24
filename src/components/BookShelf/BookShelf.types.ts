import { Book, BookFilter } from '../../types/library';

export interface BookShelfProps {
  books: Book[];
  activeFilter: BookFilter;
  onFilterChange: (filter: BookFilter) => void;
  onToggleStatus: (bookId: string) => void;
  onRateBook: (bookId: string, rating: number) => void;
}
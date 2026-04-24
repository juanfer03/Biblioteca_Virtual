import { Book } from '../../types/library';

export interface BookCardProps {
  book: Book;
  onToggleStatus: (bookId: string) => void;
  onRateBook: (bookId: string, rating: number) => void;
}
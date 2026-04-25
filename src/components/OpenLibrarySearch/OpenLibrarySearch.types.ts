import { BookDraft } from '../../types/library';

export interface OpenLibrarySearchProps {
  defaultQuery?: string;
  onAddBook: (book: BookDraft) => void;
}
import { BookDraft } from '../../types/library';

export interface BookFormProps {
  onSubmit: (book: BookDraft) => void;
}
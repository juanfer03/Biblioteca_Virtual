import { FormEvent, useState } from 'react';
import { BookFormProps } from './BookForm.types';
import './BookForm.css';

const initialFormState = {
  title: '',
  author: '',
  pages: '',
  status: 'por_leer' as const,
  rating: 4
};

export function BookForm({ onSubmit }: BookFormProps) {
  const [formState, setFormState] = useState(initialFormState);

  function updateField(field: keyof typeof initialFormState, value: string | number) {
    setFormState((currentState) => ({
      ...currentState,
      [field]: value
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formState.title.trim() || !formState.author.trim() || !formState.pages.trim()) {
      return;
    }

    onSubmit({
      title: formState.title.trim(),
      author: formState.author.trim(),
      pages: formState.pages.trim(),
      status: formState.status,
      rating: formState.rating
    });

    setFormState(initialFormState);
  }

  return (
    <section className="book-form" id="registro">
      <p className="book-form__eyebrow">Registro</p>
      <h2 className="book-form__title">Agregar nuevo libro</h2>

      <form className="book-form__form" onSubmit={handleSubmit}>
        <label className="book-form__field">
          <span>Titulo</span>
          <input
            type="text"
            placeholder="Nombre del libro"
            value={formState.title}
            onChange={(event) => updateField('title', event.target.value)}
          />
        </label>

        <label className="book-form__field">
          <span>Autor</span>
          <input
            type="text"
            placeholder="Nombre del autor"
            value={formState.author}
            onChange={(event) => updateField('author', event.target.value)}
          />
        </label>

        <label className="book-form__field">
          <span>Paginas</span>
          <input
            type="number"
            min="1"
            placeholder="320"
            value={formState.pages}
            onChange={(event) => updateField('pages', event.target.value)}
          />
        </label>

        <label className="book-form__field">
          <span>Estado</span>
          <select
            value={formState.status}
            onChange={(event) => updateField('status', event.target.value as typeof initialFormState.status)}
          >
            <option value="por_leer">Por leer</option>
            <option value="leido">Leido</option>
          </select>
        </label>

        <label className="book-form__field">
          <span>Calificacion</span>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={formState.rating}
            onChange={(event) => updateField('rating', Number(event.target.value))}
          />
        </label>

        <button className="book-form__submit" type="submit">
          Guardar libro
        </button>
      </form>
    </section>
  );
}
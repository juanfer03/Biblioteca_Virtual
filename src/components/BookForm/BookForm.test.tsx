import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { BookForm } from './BookForm';

describe('BookForm', () => {
  it('submits the entered book data', () => {
    const handleSubmit = vi.fn();
    render(<BookForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByPlaceholderText('Nombre del libro'), {
      target: { value: 'Dune' }
    });
    fireEvent.change(screen.getByPlaceholderText('Nombre del autor'), {
      target: { value: 'Frank Herbert' }
    });
    fireEvent.change(screen.getByPlaceholderText('320'), {
      target: { value: '544' }
    });
    fireEvent.click(screen.getByText('Guardar libro'));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
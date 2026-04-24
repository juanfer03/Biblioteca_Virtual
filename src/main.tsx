import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LibraryApp } from './components/LibraryApp/LibraryApp';
import './styles/global.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <LibraryApp />
  </StrictMode>
);
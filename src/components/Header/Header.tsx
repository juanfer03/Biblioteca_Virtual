import { HeaderProps } from './Header.types';
import './Header.css';

export function Header({ phaseLabel }: HeaderProps) {
  return (
    <header className="header">
      <div>
        <p className="header__eyebrow">DDD / {phaseLabel}</p>
        <h1 className="header__title">Biblioteca Virtual</h1>
      </div>
      <nav className="header__nav" aria-label="Navegacion principal">
        <a href="#coleccion">Coleccion</a>
        <a href="#registro">Registrar libro</a>
        <a href="#estado">Estado</a>
      </nav>
    </header>
  );
}
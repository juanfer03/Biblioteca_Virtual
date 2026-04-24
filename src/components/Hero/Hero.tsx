import { HeroProps } from './Hero.types';
import './Hero.css';

export function Hero({ eyebrow, title, description }: HeroProps) {
  return (
    <section className="hero-card">
      <p className="hero-card__eyebrow">{eyebrow}</p>
      <h2 className="hero-card__title">{title}</h2>
      <p className="hero-card__description">{description}</p>
      <div className="hero-card__actions">
        <a className="hero-card__button hero-card__button--primary" href="#registro">
          Agregar libro
        </a>
        <a className="hero-card__button hero-card__button--secondary" href="#coleccion">
          Ver coleccion
        </a>
      </div>
    </section>
  );
}
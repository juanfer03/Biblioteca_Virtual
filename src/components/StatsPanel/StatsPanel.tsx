import { StatsPanelProps } from './StatsPanel.types';
import './StatsPanel.css';

export function StatsPanel({ stats }: StatsPanelProps) {
  return (
    <section className="stats-panel" id="estado">
      <p className="stats-panel__eyebrow">Estado</p>
      <h2 className="stats-panel__title">Resumen de lectura</h2>

      <div className="stats-panel__grid">
        <article className="stats-panel__metric stats-panel__metric--accent">
          <span>Total libros</span>
          <strong>{stats.total}</strong>
        </article>
        <article className="stats-panel__metric">
          <span>Por leer</span>
          <strong>{stats.pending}</strong>
        </article>
        <article className="stats-panel__metric">
          <span>Leidos</span>
          <strong>{stats.read}</strong>
        </article>
      </div>

      <div className="stats-panel__footer">
        <span>Valoracion promedio</span>
        <strong>{stats.averageRating.toFixed(1)} / 5</strong>
      </div>
      <ul className="stats-panel__notes">
        <li>Interfaz lista para persistencia futura con Firebase.</li>
        <li>El sistema visual mantiene la identidad de biblioteca virtual definida en Fase 1.</li>
      </ul>
    </section>
  );
}
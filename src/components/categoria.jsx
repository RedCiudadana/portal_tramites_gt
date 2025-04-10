// src/components/Categoria.jsx
import { useParams, Link } from 'react-router-dom';
import tramites from '../data/tramites.json';

export default function Categoria() {
  const { categoria } = useParams();
  const filtrados = tramites.filter(tramite => tramite.categoria === categoria && tramite.categoria === categoria);

  if (filtrados.length === 0) {
    return <div>No se encontraron trámites en esta categoría.</div>;
  }

  return (
    <div>
        <h1>Categoría: {categoria}</h1>
        <ul>
            {filtrados.map(tramite => (
            <li key={tramite.id}>
                <Link to={`/categoria/${tramite.categoria}/tramite/${tramite.id}`}>{tramite.nombre}</Link>
            </li>
            ))}
        </ul>
    </div>
  );
}

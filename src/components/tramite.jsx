import { useParams } from 'react-router-dom';
import tramites from '../data/tramites.json';

const Tramite = () => {
  const { id } = useParams();
  const pagina = tramites.find(item => item.id === Number(id));

  if (!pagina) {
    return <div>No se encontró la página.</div>;
  }

  return (
    <div className="tramite">
      <h1>{pagina.nombre}</h1>
      <p>{pagina.descripcion}</p>
    </div>
  );
};

export default Tramite;

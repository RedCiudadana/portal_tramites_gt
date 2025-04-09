// src/pages/Servicios.jsx
import { useEffect } from 'react';

export default function Servicios() {
    useEffect(() => {
        document.title = 'Servicios | Trámites de Guatemala';
      }, []);
    return (
        <>
            <div>
                Estos son los servicios
            </div>
        </>
    );
}

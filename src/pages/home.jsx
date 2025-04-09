// src/pages/Home.jsx
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        document.title = 'Inicio | Trámites de Guatemala';
      }, []);
    
    return (
        <>
            <div>
                Este es el home
            </div>
        </>
    );
  }
  
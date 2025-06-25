// App.jsx
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import ScrollToTop from './components/scrolltotop';
import GoToTopButton from './components/gototop';
import Layout from './components/layout';
import Home from './pages/home';
import Servicios from './pages/servicios';
import Instituciones from './pages/instituciones';
import Observatorio from './pages/observatorio';

import ChatBot from './components/chatbot';
import Loader from './components/loader';
import FeedbackButton from './components/feedbackButton';

const Tramite = lazy(() => import('./components/tramite'));
const Categoria = lazy(() => import('./components/categoria'));
const Institucion = lazy(() => import('./components/institucion'));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'visible';
    }, 1000); // puedes ajustar este tiempo según necesidad

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <ScrollToTop />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/categoria/:categoria/tramite/:id" element={<Tramite />} />
                <Route path="/categoria/:categoria" element={<Categoria />} />
                <Route path="/instituciones" element={<Instituciones />} />
                <Route path="/institucion/:nombre" element={<Institucion />} />
                <Route path="/" element={<Home />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/observatorio" element={<Observatorio />} />
              </Route>
            </Routes>
            <GoToTopButton />
            <ChatBot />
            <FeedbackButton />
          </Suspense>
        </>
      )}
    </Router>
  );
}
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import ScrollToTop from './components/scrolltotop';
import GoToTopButton from './components/gototop';
import Layout from './components/layout';
import Home from './pages/home';
import Servicios from './pages/servicios';
import ChatBot from './components/chatbot';

const Tramite = lazy(() => import('./components/tramite'));
const Categoria = lazy(() => import('./components/categoria'));
const Institucion = lazy(() => import('./components/institucion'));

export default function App() {
  return (
    <Router>
		<ScrollToTop />
		<Suspense fallback={<div>Cargando...</div>}>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/categoria/:categoria/tramite/:id" element={<Tramite />} />
					<Route path="/categoria/:categoria" element={<Categoria />} />
					<Route path="/institucion/:nombre" element={<Institucion />} />
					<Route path="/" element={<Home />} />
					<Route path="/servicios" element={<Servicios />} />
				</Route>
			</Routes>
			<GoToTopButton />
			<ChatBot />
		</Suspense >
    </Router>
  );
}

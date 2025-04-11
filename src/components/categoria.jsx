import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import tramites from '../data/tramites.json';

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Pagination,
} from '@mui/material';

export default function Categoria() {
	const { categoria } = useParams();
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');
	const itemsPerPage = 9;

	// Normalizar texto para búsqueda
	const normalizeText = (text) =>
		text
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '');

	// Trámites filtrados por categoría
	const tramitesEnCategoria = tramites.filter(
		(tramite) => tramite.categoria === categoria
	);

	// Trámites filtrados por búsqueda dentro de la categoría
	const filtrados = tramitesEnCategoria.filter((tramite) =>
		normalizeText(tramite.nombre).includes(normalizeText(search))
	);

	const totalPages = Math.ceil(filtrados.length / itemsPerPage);
	const currentItems = filtrados.slice(
		(page - 1) * itemsPerPage,
		page * itemsPerPage
	);

	const handleSearchChange = (e) => {
		setSearch(e.target.value);
		setPage(1); 
	};

	useEffect(() => {
		setPage(1); 
		setSearch('');
	}, [categoria]);

	return (
		<Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
			<Typography variant="h4" fontWeight="bold" gutterBottom>
				Categoría: {categoria}
			</Typography>
			<Typography variant="body1" color="text.secondary" mb={3}>
				Mostrando los trámites disponibles de esta categoría.
			</Typography>

			<TextField
				fullWidth
				label="Buscar trámite en esta categoría"
				variant="outlined"
				value={search}
				onChange={handleSearchChange}
				sx={{ mb: 4 }}
			/>

			{filtrados.length === 0 ? (
				<Typography variant="body1" color="error">
				No se encontraron trámites en esta categoría con ese criterio de búsqueda.
				</Typography>
			) : (
				<Grid container spacing={3}>
				{currentItems.map(({ id, nombre, descripcion }) => (
					<Grid item xs={12} sm={6} md={4} key={id}>
						<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
							<CardContent sx={{ flexGrow: 1 }}>
								<Typography variant="h6" fontWeight="bold" gutterBottom>
									{nombre}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{descripcion?.slice(0, 120) || 'Descripción no disponible.'}
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									size="small"
									component={Link}
									to={`/categoria/${categoria}/tramite/${id}`}
								>
									Ver trámite
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
				</Grid>
			)}

			{totalPages > 1 && (
				<Pagination
				count={totalPages}
				page={page}
				onChange={(e, value) => setPage(value)}
				sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}
				/>
			)}
		</Container>
	);
}

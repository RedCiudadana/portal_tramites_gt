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
	Box 
} from '@mui/material';

import iconMap from '../utils/iconosPorCategoria';

export default function Categoria() {
	const { categoria } = useParams();
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');
	const itemsPerPage = 10;

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

			<>
				<Box
						sx={{
								width: "100%",
								backgroundColor: "#d9e4ed",
								color: "white",
								pt: { xs: 8, md: 12 },
								textAlign: "center",
								px: 2,
						}}
				>
					<Container maxWidth="xl">
							<Container maxWidth="lg">
									<Typography
											variant="h3"
											component="h1"
											gutterBottom
											sx={{ fontWeight: "bold", pb: 10 }}
									>
											{categoria}
									</Typography>
							</Container>
					</Container>
				</Box>
					
				<Box sx={{ backgroundColor: "#fff", p: 4}}>
					<Container maxWidth="xl" sx={{ mt: 4, mb: 6, backgroundColor: "#fff" }}>
						<Grid container spacing={3}>
							{/* Left Column: Title and Search Bar */}
							<Grid size={{ xs: 12, md: 4 }} sx={{ marginBlock: 6, padding: '25px', border: "1px solid #ccc" }}>
								{iconMap[categoria] && (
									<Box sx={{ display: 'flex', mb: 2 }}>
										<img
											src={iconMap[categoria]}
											alt={`Ícono de ${categoria}`}
											style={{ maxWidth: '120px', height: 'auto' }}
										/>
									</Box>
								)}

								{/* Title */}
								<Typography variant="h4" fontWeight="bold" gutterBottom>
									Categoría: {categoria}
								</Typography>
								<div style={{ backgroundColor: "#088cdc", width: "120px", height: "5px", marginTop: "15px", marginBottom: "40px" }}></div>
								{/* Search Bar */}
								<TextField
									fullWidth
									label="Buscar trámite en esta categoría"
									variant="outlined"
									value={search}
									onChange={handleSearchChange}
									sx={{ mb: 4 }}
								/>
								<Typography variant="body1" color="#02324f" mb={3}>
									Mostrando los trámites disponibles de esta categoría.
								</Typography>
							</Grid>

							{/* Right Column: Trámites List */}
							<Grid size={{ xs: 12, md: 8 }} sx={{ marginBlock: 6 }}>
								{filtrados.length === 0 ? (
									<Typography variant="body1" color="error">
										No se encontraron trámites en esta categoría con ese criterio de búsqueda.
									</Typography>
								) : (
									<Grid container spacing={3}>
										{currentItems.map(({ id, nombre, descripcion }) => (
											<Grid size={{ xs: 6, sm: 12, md: 6 }} key={id}>
												<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', padding: 2 }}>
													<CardContent sx={{ flexGrow: 1 }}>
														<Typography variant="h6" fontWeight="bold" gutterBottom>
															{nombre}
														</Typography>
														<Typography variant="body2" color="#02324f">
															{descripcion?.slice(0, 120) || 'Descripción no disponible.'}
														</Typography>
													</CardContent>
													<CardActions>
														<Button
															size="small"
															component={Link}
															variant="contained"
															sx={{
																textTransform: 'none',
																borderRadius: '15px',
																padding: '8px 20px',
																fontWeight: 500,
																boxShadow: 'none',
																bgcolor: '#0089df',
																'&:hover': { boxShadow: 'none' }
															}}
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
							</Grid>
						</Grid>
					</Container>
				</Box>
			</>
	);
}

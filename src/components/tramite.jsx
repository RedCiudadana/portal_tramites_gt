import { useParams } from 'react-router-dom';
import tramites from '../data/tramites.json';
import {
  Container,
  Typography,
  Button,
  Paper,
  Box,
  Divider,
  Link as MuiLink,
} from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

import Icono1 from '../assets/iconos/tramite/ICONOS-44.png';
import Icono2 from '../assets/iconos/tramite/ICONOS-45.png';
import Icono3 from '../assets/iconos/tramite/ICONOS-47.png';
import Icono4 from '../assets/iconos/tramite/ICONOS-48.png';
import Icono5 from '../assets/iconos/tramite/ICONOS-49.png';

import Icono6 from '../assets/iconos/tramite/ICONOS-46.png';

const Tramite = () => {
	const { id } = useParams();
	const tramite = tramites.find((item) => item.id === Number(id));

	if (!tramite) {
		return (
		<Container sx={{ mt: 6 }}>
			<Typography variant="h5" color="error">
			No se encontró la página del trámite solicitado.
			</Typography>
		</Container>
		);
	}

	return (
		<Container maxWidth="xl" sx={{ mt: 6, mb: 6 }}>
			<Typography variant="h4" fontWeight="bold" gutterBottom>
				{tramite.nombre}
			</Typography>
			<Typography variant="subtitle1" color="#02324f" gutterBottom>
				{tramite.institución}
			</Typography>

			<Divider sx={{ my: 3 }} />

			<Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
				{/* Columna izquierda */}
				
				<Paper elevation={2} sx={{
				p: 3,
				flexBasis: { xs: '100%', md: '70%' },
				flexShrink: 0,
				flexGrow: 0,
				}}>
					<Typography variant="h6" gutterBottom>Descripción</Typography>
					<div style={{ backgroundColor: "#088cdc", width: "120px", height: "5px", marginTop: "7px", marginBottom: "15px" }}></div>
					<Typography variant="body2" color="#02324f">
					{tramite.descripcion}
					</Typography>

					<Box mt={3}>
					<Typography variant="h6" gutterBottom>Instrucciones</Typography>
					<Box
						component="div"
						dangerouslySetInnerHTML={{ __html: tramite.instrucciones }}
						sx={{ color: '#02324f', fontSize: '0.9rem' }}
					/>
					</Box>

					<Box mt={3}>
						<Typography variant="h6" gutterBottom>Requisitos</Typography>
						<Typography variant="body2" color="#02324f" whiteSpace="pre-line">
							{tramite.requisitos}
						</Typography>
					</Box>
				</Paper>
				

				{/* Columna derecha */}
				
				<Paper
					elevation={2}
					sx={{
						p: 3,
						flexBasis: { xs: '100%', md: '30%' },
						flexShrink: 0,
						flexGrow: 0,
					}}
				>
					<Typography variant="h6" gutterBottom>
						Detalles
					</Typography>

					{/* Categoría */}
					<Box display="flex" alignItems="center" mb={2}>
						<Box
							component="img"
							src={Icono1}
							alt="Icono categoría"
							sx={{ width: 24, height: 24, mr: 1 }}
						/>
						<Typography variant="body2" color="#02324f">
							<strong>Categoría:</strong> {tramite.categoria}
						</Typography>
					</Box>

					{/* Subcategoría */}
					<Box display="flex" alignItems="center" mb={2}>
						<Box
							component="img"
							src={Icono2}
							alt="Icono subcategoría"
							sx={{ width: 24, height: 24, mr: 1 }}
						/>
						<Typography variant="body2" color="#02324f">
							<strong>Subcategoría:</strong> {tramite.subcategoria}
						</Typography>
					</Box>

					{/* Costo */}
					<Box display="flex" alignItems="center" mb={2}>
						<Box
							component="img"
							src={Icono3}
							alt="Icono costo"
							sx={{ width: 24, height: 24, mr: 1 }}
						/>
						<Typography variant="body2" color="#02324f">
							<strong>Costo:</strong> {tramite.costo}{' '}
							{tramite.codigo_moneda}
						</Typography>
					</Box>

					{/* Tiempo de respuesta */}
					<Box display="flex" alignItems="center" mb={2}>
						<Box
							component="img"
							src={Icono4}
							alt="Icono tiempo"
							sx={{ width: 24, height: 24, mr: 1 }}
						/>
						<Typography variant="body2" color="#02324f">
							<strong>Tiempo de respuesta:</strong>{' '}
							{tramite.tiempo_de_respuesta}
						</Typography>
					</Box>

					{/* Documento obtenible */}
					<Box display="flex" alignItems="center" mb={2}>
						<Box
							component="img"
							src={Icono5}
							alt="Icono documento"
							sx={{ width: 24, height: 24, mr: 1 }}
						/>
						<Typography variant="body2" color="#02324f">
							<strong>Documento obtenible:</strong>{' '}
							{tramite.documento_obtenible}
						</Typography>
					</Box>
					
					{/* Repaldo Legal */}
					<Box mt={2}>
						<Typography variant="h6" gutterBottom sx={{ mb: -2 }}>
							Respaldo legal
						</Typography>
						<Box
							component="span"
							dangerouslySetInnerHTML={{ __html: tramite.respaldo_legal }}
							sx={{ ml: 0.5, '& p': { margin: 0 } }}
						/>
					</Box>

					{/* Enlace oficial */}
					<Box mt={2}>
						<Typography variant="h6" gutterBottom>
							Enlace Oficial
						</Typography>

						<Button
								variant="contained"
								size="small"
								component={RouterLink}
								endIcon={<img src={Icono6} alt="Icono enlace" style={{ width: 20, height: 20 }} />}
								to={tramite.enlace}
								target="_blank"
								sx={{
										textTransform: 'none',
										borderRadius: '15px',
										padding: '8px 20px',
										fontWeight: 500,
										boxShadow: 'none',
										bgcolor: '#0089df',
										'&:hover': { boxShadow: 'none' }
								}}
						>
								Ver sitio oficial
						</Button>
					</Box>

					{/* Fecha de actualización */}
					<Box mt={2}>
						<Typography variant="caption" color="text.disabled">
							Última actualización:{' '}
							{new Date(tramite.fecha_actualizado).toLocaleDateString()}
						</Typography>
					</Box>
				</Paper>

				
			</Box>
		</Container>
	);
};

export default Tramite;

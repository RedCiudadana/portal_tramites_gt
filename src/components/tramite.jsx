import { useParams } from 'react-router-dom';
import tramites from '../data/tramites.json';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  Divider,
  Link as MuiLink,
} from '@mui/material';

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
		<Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
			<Typography variant="h4" fontWeight="bold" gutterBottom>
				{tramite.nombre}
			</Typography>
			<Typography variant="subtitle1" color="text.secondary" gutterBottom>
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
					<Typography variant="body2" color="text.secondary">
					{tramite.descripcion}
					</Typography>

					<Box mt={3}>
					<Typography variant="h6" gutterBottom>Instrucciones</Typography>
					<Box
						component="div"
						dangerouslySetInnerHTML={{ __html: tramite.instrucciones }}
						sx={{ color: 'text.secondary', fontSize: '0.9rem' }}
					/>
					</Box>

					<Box mt={3}>
						<Typography variant="h6" gutterBottom>Requisitos</Typography>
						<Typography variant="body2" color="text.secondary" whiteSpace="pre-line">
							{tramite.requisitos}
						</Typography>
					</Box>
				</Paper>
				

				{/* Columna derecha */}
				
				<Paper elevation={2} sx={{
				p: 3,
				flexBasis: { xs: '100%', md: '30%' },
				flexShrink: 0,
				flexGrow: 0,
				}}>
					<Typography variant="h6" gutterBottom>Detalles</Typography>
					<Typography variant="body2" color="text.secondary"><strong>Categoría:</strong> {tramite.categoria}</Typography>
					<Typography variant="body2" color="text.secondary"><strong>Subcategoría:</strong> {tramite.subcategoria}</Typography>
					<Typography variant="body2" color="text.secondary" mt={1}>
					<strong>Costo:</strong> {tramite.costo} {tramite.codigo_moneda}
					</Typography>
					<Typography variant="body2" color="text.secondary">
					<strong>Tiempo de respuesta:</strong> {tramite.tiempo_de_respuesta}
					</Typography>
					<Typography variant="body2" color="text.secondary">
					<strong>Documento obtenible:</strong> {tramite.documento_obtenible}
					</Typography>

					<Box mt={2}>
					<Typography variant="h6" gutterBottom>Respaldo Legal</Typography>
					<Box
						component="div"
						dangerouslySetInnerHTML={{ __html: tramite.respaldo_legal }}
						sx={{ color: 'text.secondary', fontSize: '0.9rem' }}
					/>
					</Box>

					<Box mt={2}>
						<Typography variant="h6" gutterBottom>Enlace Oficial</Typography>
						<MuiLink href={tramite.enlace} target="_blank" rel="noopener" underline="hover">
							Ver sitio del trámite
						</MuiLink>
					</Box>

					<Box mt={2}>
						<Typography variant="caption" color="text.disabled">
							Última actualización: {new Date(tramite.fecha_actualizado).toLocaleDateString()}
						</Typography>
					</Box>
				</Paper>
				
			</Box>
		</Container>
	);
};

export default Tramite;

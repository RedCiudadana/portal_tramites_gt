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

import InstitucionImg from "../assets/iconos/ICONOS-50.png";

export default function Institucion() {
    const { nombre } = useParams();
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const itemsPerPage = 9;

    const normalizeText = (text) =>
        text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const tramitesDeInstitucion = tramites.filter(
        (tramite) => tramite.institucion === nombre
    );

    const filtrados = tramitesDeInstitucion.filter((tramite) =>
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
    }, [nombre]);

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
                        <img width={80} mb={2} src={InstitucionImg} />
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{ fontWeight: "bold", pb: 10 }}
                        >
                            {nombre}
                        </Typography>
                    </Container>
                </Container>
            </Box>
            <Container maxWidth="xl" sx={{ mt: 4, mb: 6 }}>
                <Typography variant="body1" color="#02324f" mb={3}>
                    Mostrando los trámites disponibles de esta institución.
                </Typography>

                <TextField
                    fullWidth
                    label="Buscar trámite en esta institución"
                    variant="outlined"
                    value={search}
                    onChange={handleSearchChange}
                    sx={{ mb: 4 }}
                />

                {filtrados.length === 0 ? (
                    <Typography variant="body1" color="error">
                        No se encontraron trámites…
                    </Typography>
                ) : (
                    <Box
                        display="grid"
                        gap={3}
                        gridTemplateColumns={{
                        xs: '1fr',
                        sm: 'repeat(3, 1fr)',
                        md: 'repeat(3, 1fr)'
                        }}
                    >
                        {currentItems.map(({ id, nombre, descripcion, categoria }) => (
                            <Card
                                variant="outlined"
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    borderColor: "grey.300",
                                    borderRadius: 2,
                                    bgcolor: "common.white",
                                    transition: "transform 0.2s",
                                    '&:hover': { transform: 'translateY(-4px)' }
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        gutterBottom
                                        color="#02324f"
                                        sx={{ lineHeight: 1.2 }}
                                        marginTop={1}
                                    >
                                        {nombre}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="#02324f"
                                        sx={{ lineHeight: 1.5 }}
                                    >
                                        {descripcion?.slice(0, 120) + (descripcion?.length > 120 ? '…' : '')}
                                    </Typography>
                                </CardContent>

                                <CardActions sx={{ p: 2 }}>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        component={Link}
                                        to={`/categoria/${categoria}/tramite/${id}`}
                                        sx={{
                                            textTransform: 'none',
                                            borderRadius: '15px',
                                            padding: '8px 20px',
                                            fontWeight: 500,
                                            boxShadow: 'none',
                                            bgcolor: '#0089df',
                                            marginBottom: 2,
                                            '&:hover': { boxShadow: 'none' }
                                        }}
                                    >
                                        Ver trámite
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Box>
                )}

                {totalPages > 1 && (
                    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                        <Pagination
                            count={totalPages}
                            page={page}
                            onChange={(e, value) => setPage(value)}
                        />
                    </Box>
                )}
            </Container>
        </>
    );
}

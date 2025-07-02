import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import tramites from "../data/tramites.json";

import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Pagination,
  Box
} from "@mui/material";

export default function Servicios() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const itemsPerPage = 9;

  useEffect(() => {
    document.title = "Servicios | Trámites de Guatemala";
  }, []);

  const normalizeText = (text) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const filteredTramites = tramites.filter((t) =>
    normalizeText(t.nombre).includes(normalizeText(search))
  );

  const totalPages = Math.ceil(filteredTramites.length / itemsPerPage);
  const currentItems = filteredTramites.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryParam = params.get("query") || "";
    setSearch(queryParam);
  }, [location.search]);

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Lista de Servicios Disponibles
      </Typography>
      <Typography variant="body1" color="#02324f" mb={3}>
        Estos son todos los trámites disponibles actualmente en la plataforma.
      </Typography>

      {/* Buscador */}
      <TextField
        fullWidth
        label="Buscar trámite por nombre"
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
        sx={{ mb: 4 }}
      />

      {/* Lista de servicios o mensaje de no encontrados */}
      {filteredTramites.length === 0 ? (
        <Typography variant="body1" color="error">
          No se encontraron trámites con ese criterio de búsqueda.
        </Typography>
      ) : (
        <>
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
                key={id}
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

          {/* Paginación */}
          {totalPages > 1 && (
            <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(e, value) => setPage(value)}
              />
            </Box>
          )}
        </>
      )}
    </Container>
  );
}
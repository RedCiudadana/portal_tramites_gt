import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  TextField,
  Button
} from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export default function FeedbackButton() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <>
      {/* Botón lateral vertical */}
      <Box
        sx={{
          position: 'fixed',
          top: '30%',
          right: 50,
          zIndex: 1300,
          transform: 'translateY(-50%)',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Box
          onClick={toggleDrawer(true)}
          sx={{
            bgcolor: 'white',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            boxShadow: 3,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            transform: 'rotate(-90deg)',
            transformOrigin: 'right top',
            height: 48,
            px: 2,
            color: '#0089df',
          }}
        >
          <ArrowCircleDownIcon sx={{ fontSize: 20 }} />
          <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>
            Ayúdanos a mejorar
          </Typography>
        </Box>
      </Box>

      {/* Drawer lateral */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 320, p: 3 }}>
          <Typography variant="h6" gutterBottom>
            ¿Cómo podemos mejorar?
          </Typography>
          <TextField
            label="Tu sugerencia"
            placeholder="Escribe tus ideas o comentarios..."
            multiline
            rows={6}
            variant="outlined"
            fullWidth
          />
          <Button
            variant="contained"
            sx={{ mt: 2, bgcolor: '#0089df', '&:hover': { bgcolor: '#034063' } }}
            fullWidth
            onClick={toggleDrawer(false)} // Esto cierra al enviar
          >
            Enviar
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

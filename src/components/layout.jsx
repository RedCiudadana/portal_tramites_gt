// src/components/Layout.jsx
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export default function Layout() {
  return (
    <>
      <Header />
      <Box component="main" sx={{ minHeight: '70vh', py: 4 }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

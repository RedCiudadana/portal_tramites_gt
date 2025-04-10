// src/components/Layout.jsx
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export default function Layout() {
  return (
    <>
      <Header />
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

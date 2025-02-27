import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Container, Box, Typography } from '@mui/material';
import './App.css';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Home />
        <Typography variant="h4" sx={{ mt: 6, mb: 2 }}>
          Mis Proyectos
        </Typography>
        <div id="projects">
          <ProjectList />
        </div>
        <Contact />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
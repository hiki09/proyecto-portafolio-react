import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box, Typography, Button } from '@mui/material';
import Header from './components/Header';
import Home from './components/Home';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
          <Button onClick={toggleDarkMode} variant="contained" sx={{ mb: 2 }}>
            {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
          </Button>
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
    </ThemeProvider>
  );
}

export default App;
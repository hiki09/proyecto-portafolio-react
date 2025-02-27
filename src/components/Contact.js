import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  Snackbar,
  Alert,
  Divider,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Limpiar el error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado:', formData);
      setOpenSnackbar(true);
      // Reiniciar el formulario
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="lg" id="contact">
      <Paper elevation={3} sx={{ p: 4, mb: 4, mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Contacto
        </Typography>
        <Divider sx={{ mb: 4 }} />

        <Grid container spacing={4}>
          {/* Formulario de Contacto */}
          <Grid item xs={12} md={7}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nombre"
                    name="name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Mensaje"
                    name="message"
                    variant="outlined"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    multiline
                    rows={6}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    endIcon={<SendIcon />}
                    size="large"
                  >
                    Enviar Mensaje
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>

          {/* Información de Contacto */}
          <Grid item xs={12} md={5}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                Información de Contacto
              </Typography>
              <Typography variant="body1" paragraph>
                ¿Tienes alguna pregunta o propuesta? No dudes en ponerte en contacto conmigo.
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                <Typography variant="body1">
                  tucorreo@ejemplo.com
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LinkedInIcon sx={{ mr: 2, color: 'primary.main' }} />
                <Typography variant="body1">
                  <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    linkedin.com/in/tu-perfil
                  </a>
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <GitHubIcon sx={{ mr: 2, color: 'primary.main' }} />
                <Typography variant="body1">
                  <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    github.com/tu-usuario
                  </a>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          ¡Mensaje enviado correctamente! Me pondré en contacto contigo pronto.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact; 
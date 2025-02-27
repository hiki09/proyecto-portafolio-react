import React from "react";
import {
    Box,
    Typography,
    Container,
    Grid,
    Paper,
    Avatar,
    Chip,
    Divider,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";

const Home = () => {
    // Lista de habilidades tecnicas
    const skills = [
        { name: 'JavaScript', category: 'frontend'},
        { name: 'React', category: 'frontend' },
        { name: 'HTML/CSS', category: 'frontend' },
        { name: 'Node.js', category: 'backend' },
        { name: 'Python', category: 'backend' },
        { name: 'SQL', category: 'backend' },
        { name: 'Git', category: 'tools' },
        { name: 'Docker', category: 'tools' },
    ];

    return (
        <Container maxWidth="lg">
            {/* Hero Section */ }
            <Box
                id="home"
                sx={{
                    pt:8,
                    pb:6,
                    textAlign: 'center',
                }}
            >
                <Avatar
                    sx={{
                        width: 150,
                        height: 150,
                        margin: '0 auto',
                        mb: 2,
                        bgcolor: 'primary.main',
                    }}
                    alt="Matías Cárdenas"
                    src="/path-to-your-photo.jpg"
                >
                    MC
                </Avatar>
                <Typography
                    component="h1"
                    variant="h2"
                    color="text.primary"
                    gutterBottom
                >
                    Matías Cárdenas
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                    Desarrollador Web | Especialista en JavaScript y Python
                </Typography>
            </Box>

            {/* About Me Section */}
            <Paper id="about" elevation={3} sx={{ p: 4, mb: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Sobre Mí
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" paragraph>
                    Soy un desarrollador apasionado por crear soluciones tecnológicas que
                    resuelvan problemas reales. Con experiencia en desarrollo web full
                    stack, me especializo en JavaScript y Python.                    
                </Typography>
                <Typography variant="body1">
                    Mi objetivo es combinar mis habilidades técnicas con mi creatividad
                    para desarrollar aplicaciones web elegantes y funcionales. Me encanta
                    aprender nuevas tecnologías y enfrentar desafíos complejos.
                </Typography>
            </Paper>

            {/* Skills Section */}
            <Paper id="skills" elevation={3} sx={{ p: 4, mb: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Mis Habilidades
                </Typography>
                <Divider sx={{ mb: 3 }} />

                <Grid container spacing={2}>
                    {/* Frontend Skills */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center', mb: 2 }}>
                            <WebIcon fontSize="large" color="primary" />
                            <Typography variant="h6">Frontend</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 1,
                                justifyContent: 'center',
                            }}
                        >
                            {skills
                                .filter((skill) => skill.category === 'frontend')
                                .map((skill) => (
                                    <Chip
                                        key={skill.name}
                                        label={skill.name}
                                        color="primary"
                                        variant="outlined"
                                    />
                                ))}
                        </Box>
                    </Grid>

                    {/* Backend Skills */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center', mb: 2 }}>
                            <StorageIcon fontSize="large" color="secondary" />
                            <Typography variant="h6">Backend</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 1,
                                justifyContent: 'center',
                            }}
                        >
                            {skills
                                .filter((skill) => skill.category === 'backend')
                                .map((skill) => (
                                    <Chip
                                        key={skill.name}
                                        label={skill.name}
                                        color="secondary"
                                        variant="outlined"
                                    />
                                ))}
                        </Box>
                    </Grid>

                    {/* Tools and Others */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center', mb: 2 }}>
                            <CodeIcon fontSize="large" color="success" />
                            <Typography variant="h6">Herramientas</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 1,
                                justifyContent: 'center',
                            }}
                        >
                            {skills
                                .filter((skill) => skill.category === 'tools')
                                .map((skill) => (
                                    <Chip
                                        key={skill.name}
                                        label={skill.name}
                                        color="success"
                                        variant="outlined"
                                    />
                                ))}
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Home;
import React from 'react';
import { Card, CardContent, Typography, Grow, CardMedia, CardActions, Button } from '@mui/material';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción del proyecto 1',
    image: '/path-to-image1.jpg',
    link: 'https://enlace-proyecto1.com',
    technologies: 'React, Node.js, AWS'
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del proyecto 2',
    image: '/path-to-image2.jpg',
    link: 'https://enlace-proyecto2.com',
    technologies: 'Python, Django, PostgreSQL'
  },
  // Agrega más proyectos aquí
];

const ProjectList = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <Grow in={true} timeout={500} key={index}>
          <Card sx={{ marginBottom: 2 }}>
            <CardMedia
              component="img"
              height="140"
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Tecnologías: {project.technologies}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href={project.link} target="_blank">
                Ver Proyecto
              </Button>
            </CardActions>
          </Card>
        </Grow>
      ))}
    </div>
  );
};

export default ProjectList;
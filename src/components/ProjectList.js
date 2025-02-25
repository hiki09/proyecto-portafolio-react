import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const projects = [
  { title: 'Proyecto 1', description: 'Descripción del proyecto 1' },
  { title: 'Proyecto 2', description: 'Descripción del proyecto 2' },
  // Agrega más proyectos aquí
];

const ProjectList = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <Card key={index} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectList;
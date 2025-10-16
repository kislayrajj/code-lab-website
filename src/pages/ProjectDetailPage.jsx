import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import { ThemeProvider } from '../components/ThemeProvider';

function ProjectDetailPage() {
  return (
    <ThemeProvider>
      <ProjectDetail />
    </ThemeProvider>
  );
}

export default ProjectDetailPage;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard';
import projects from '../constants/projects';
import useWindowPosition from '../hook/windowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}));
export default function Projects() {
  const classes = useStyles();
  const checked = useWindowPosition('landing');

  return (
    <div className={classes.root} id='projects'>
      <ProjectCard project={projects[0]} checked={checked} />
      <ProjectCard project={projects[1]} checked={checked} />
      <ProjectCard project={projects[2]} checked={checked} />
    </div>
  );
}

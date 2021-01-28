import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: 350,
    background: 'rgba(0,0,0,0.3)',
    margin: '20px',
  },
  media: {
    height: 300,
  },
  title: {
    fontFamily: 'Titillium Web',
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: 'royalblue',
    textShadow: '0 0 0 0',
  },
  desc: {
    fontFamily: 'Titillium Web',
    fontSize: '1rem',
    color: 'white',
  },
});

export default function ProjectCard({ project, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1300 } : {})}>
      <Card className={classes.root} raised={true}>
        <CardMedia
          component='img'
          className={classes.media}
          image={project.imageUrl}
          title={project.title}
        />
        <CardContent>
          <Typography
            disableElevation
            gutterBottom
            component='h2'
            className={classes.title}
          >
            {project.title}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            className={classes.desc}
          >
            {project.desc}
            {project.title === 'Pokemon Picker' && (
              <StyledLink
                target='_blank'
                href='https://www.npmjs.com/package/react-particles-js'
              >
                react-particles-js
              </StyledLink>
            )}
            .
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            href='https://poke-picker-redux.vercel.app/'
            target='_blank'
            variant='contained'
            size='medium'
            color='primary'
            disableElevation
          >
            Visit
          </Button>
        </CardActions>
      </Card>
    </Collapse>
  );
}

const StyledLink = styled.a`
  text-decoration: underline;
  color: white;
`;

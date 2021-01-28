import React from 'react';
import { Link as Scroll } from 'react-scroll';

import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ProjectCard from './ProjectCard';
import projects from '../constants/projects';
import useWindowPosition from '../hooks/windowPositionPROJECTS';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  arrowroot: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function Projects() {
  const classes = useStyles();
  const checked = useWindowPosition('about');

  return (
    <div id='projects' className={classes.wrapper}>
      <StyledTitle>
        <h2>
          <span>My</span> Projects
        </h2>
      </StyledTitle>
      <div className={classes.root}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} checked={checked} />
        ))}
      </div>
      <div className={classes.arrowroot}>
        <Scroll to='contact' smooth={true}>
          <StyledArrow>
            <span>
              <IconButton disableRipple={true}>
                <ExpandMoreIcon className='downarrow' />
              </IconButton>
            </span>
          </StyledArrow>
        </Scroll>
      </div>
    </div>
  );
}

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 20vh;

  h2 {
    text-align: center;
    font-family: 'Titillium Web';
    font-size: 2.7rem;
    font-weight: bold;
    color: white;
  }
  span {
    color: royalblue;
  }
`;

const StyledArrow = styled.div`
  .downarrow {
    color: white;
    font-size: 3rem;
  }
  .downarrow:hover {
    color: royalblue;
  }

  @keyframes bounce {
    0%,
    100%,
    20%,
    50%,
    80% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-18px);
    }
  }

  span {
    animation-duration: 0.7s;
    animation-fill-mode: both;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  span:hover {
    cursor: pointer;
    animation-name: bounce;
  }
`;

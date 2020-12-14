/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link as Scroll } from 'react-scroll';
import styled from 'styled-components';
// import useWindowPosition from '../hooks/windowPositionCONTACTS';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    color: 'white',
    fontFamily: 'Titillium Web',
  },
  contactTitle: {
    fontSize: '2.7rem',
  },
  links: {
    color: 'white',
    fontSize: '5rem',
  },
  linkswrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
}));

export default function Contact() {
  const classes = useStyles();
  // const checked = useWindowPosition('projects');

  return (
    <div className={classes.root} id='contact'>
      {/* <Fade in={checked} timeout={2500}> */}
      <StyledContent className={classes.contactTitle}>
        <h2>
          Find <span>Me</span> @
        </h2>
      </StyledContent>
      {/* </Fade> */}
      <div className={classes.linkswrapper}>
        {/* <Fade in={checked} timeout={2500}> */}
        <IconButton
          aria-label='Github Profile'
          onClick={() => window.open('https://github.com/JusticeMatthew')}
        >
          <GitHubIcon className={classes.links}></GitHubIcon>
        </IconButton>
        {/* </Fade> */}
        {/* <Fade in={checked} timeout={2500}> */}
        <IconButton
          aria-label='Linked-In Profile'
          onClick={() =>
            window.open('https://www.linkedin.com/in/justicematthew/')
          }
        >
          <LinkedInIcon className={classes.links}></LinkedInIcon>
        </IconButton>
        {/* </Fade> */}
      </div>
      <div>
        <Scroll to='landing' smooth={true}>
          <StyledArrow>
            <span>
              <IconButton disableRipple={true}>
                <VerticalAlignTopIcon className='downarrow' />
              </IconButton>
            </span>
          </StyledArrow>
        </Scroll>
      </div>
    </div>
  );
}

const StyledContent = styled.div`
  padding: 10px;
  min-width: 100%;
  text-align: center;

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

  span {
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
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }

  span {
    animation-duration: 0.8s;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  span:hover {
    cursor: pointer;
    animation-name: bounce;
  }
`;

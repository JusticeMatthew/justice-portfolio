/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { IconButton, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import styled from 'styled-components';
import useWindowPosition from '../hooks/windowPositionABOUT';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    color: 'white',
    fontFamily: 'Titillium Web',
  },
  aboutTitle: {
    fontSize: '2.7rem',
  },
  content: {
    fontSize: '1.2rem',
  },
}));

export default function About() {
  const classes = useStyles();
  const checked = useWindowPosition('landing');

  return (
    <div className={classes.root} id='about'>
      <Collapse in={checked} {...(checked ? { timeout: 1300 } : {})}>
        <StyledContent>
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt*/}
          <img
            src='https://i.imgur.com/c1BDBk5.jpg'
            alt='Placeholder until I get a better photo'
          ></img>
          <h2 className={classes.aboutTitle}>
            About <span>Me</span>
          </h2>
          <p className={classes.content}>
            Hello, I am <span>Matthew</span>. I am currently a full-stack web
            development student at
            <span> Lambda School</span>.
            <br />I am passionate about <span>computers</span> and{' '}
            <span>technology</span>.<br />
            Every day that passion is spreading rapidly to
            <span> coding</span> as I learn more and more.
            <br />
            Please enjoy this small sample of my work.
          </p>
        </StyledContent>
      </Collapse>
      <Scroll to='projects' smooth={true}>
        <StyledArrow>
          <span>
            <IconButton disableRipple={true}>
              <ExpandMoreIcon className='downarrow' />
            </IconButton>
          </span>
        </StyledArrow>
      </Scroll>
    </div>
  );
}

const StyledContent = styled.div`
  padding: 10px;
  width: 100%;
  text-align: center;

  span {
    color: royalblue;
  }

  img {
    width: 20%;
    border-radius: 500px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
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

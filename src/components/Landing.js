import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Fade, IconButton, Toolbar } from '@material-ui/core';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import TopMenu from './Menu';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '100vh',
  },
  AppBar: {
    background: 'none',
    fontFamily: 'Titillium Web',
  },
  AppBarTitle: {
    flexGrow: '1',
  },
}));

export default function Landing() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id='landing'>
      <AppBar className={classes.AppBar} elevation={0}>
        <StyledToolBar>
          <Toolbar>
            <h1 className={classes.AppBarTitle}>
              <span className='colortext'>M</span>Justice
            </h1>
            <TopMenu />
          </Toolbar>
        </StyledToolBar>
      </AppBar>
      <Fade in={checked} timeout={3000}>
        <StyledWelcome>
          <span className='welcome'>W</span>
          <span className='welcome'>e</span>
          <span className='welcome'>l</span>
          <span className='welcome'>c</span>
          <span className='welcome'>o</span>
          <span className='welcome'>m</span>
          <span className='welcome'>e</span>
        </StyledWelcome>
      </Fade>
      <Scroll to='about' smooth={true}>
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

const StyledToolBar = styled.div`
  .MuiToolbar-root {
    width: 80%;
    margin: 0 auto;
    cursor: default;
  }
  .colortext {
    color: royalblue;
  }
`;

const StyledWelcome = styled.h1`
  font-family: 'Titillium Web', sans-serif;
  color: White;
  font-size: 6vw;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  span {
    transition: 0.3s;
    cursor: default;
  }

  .welcome:hover {
    color: royalblue;
  }

  @media (max-width: 500px) {
    font-size: 15vw;
  }
  @media (max-width: 800px) {
    font-size: 13vw;
  }
  @media (max-width: 1000px) {
    font-size: 11vw;
  }
  @media (max-width: 1200px) {
    font-size: 9vw;
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

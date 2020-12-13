import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Fade, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

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
  MenuIcon: {
    color: 'white',
    fontSize: '3rem',
  },
}));

export default function Landing() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
    setChecked(true);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root} id='landing'>
      <AppBar className={classes.AppBar} elevation={0}>
        <StyledToolBar>
          <Toolbar>
            <h1 className={classes.AppBarTitle}>
              <span className='colortext'>M</span>Justice
            </h1>
            <IconButton
              aria-controls='simple-menu'
              aria-haspopup='true'
              onClick={handleClick}
            >
              <MenuIcon className={classes.MenuIcon} />
            </IconButton>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </StyledToolBar>
      </AppBar>
      <Fade in={checked} timeout={3000}>
        <StyledWelcome>
          <span className='w'>W</span>
          <span className='e'>e</span>
          <span className='l'>l</span>
          <span className='c'>c</span>
          <span className='o'>o</span>
          <span className='m'>m</span>
          <span className='e'>e</span>
        </StyledWelcome>
      </Fade>
      <Scroll to='projects' smooth={true}>
        <StyledArrow>
          <span>
            <IconButton>
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
  border-radius: 10px;
  text-shadow: 0px 0px 20px black;

  span {
    transition: 0.3s;
    cursor: default;
  }

  .w:hover {
    color: royalblue;
  }
  .e:hover {
    color: royalblue;
  }
  .l:hover {
    color: royalblue;
  }
  .c:hover {
    color: royalblue;
  }
  .o:hover {
    color: royalblue;
  }
  .m:hover {
    color: royalblue;
  }
  .e:hover {
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

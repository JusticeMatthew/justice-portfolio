import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles(() => ({
  MenuIcon: {
    color: 'white',
    fontSize: '3rem',
  },

  MenuItem: {
    fontWeight: 'bold',
    fontFamily: 'Titillium Web',
  },

  links: {
    color: 'royalblue',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontFamily: 'Titillium Web',
  },
}));

export default function TopMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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
        <Scroll to='landing' smooth={true}>
          <MenuItem className={classes.MenuItem} onClick={handleClose}>
            Home
          </MenuItem>
        </Scroll>
        <MenuItem onClick={handleClose}>
          <a
            className={classes.links}
            href='https://docs.google.com/document/d/1XSTyd6zWcjnw9IMolWHHrZOU9A4LkUAu6DNpRCtfxvA/edit?usp=sharing'
            target='blank'
          >
            Resume
          </a>
        </MenuItem>
        <Scroll to='projects' smooth={true}>
          <MenuItem className={classes.MenuItem} onClick={handleClose}>
            Projects
          </MenuItem>
        </Scroll>
        <MenuItem className={classes.MenuItem} onClick={handleClose}>
          Contact
        </MenuItem>
      </Menu>
    </div>
  );
}

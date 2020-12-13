/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { IconButton, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import { Link as Scroll } from 'react-scroll';
import styled from 'styled-components';
import useWindowPosition from '../hooks/windowPositionABOUT';

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
}));

export default function Contact() {
  const classes = useStyles();
  const checked = useWindowPosition('landing');

  return (
    <div className={classes.root} id='about'>
      <Collapse in={checked} {...(checked ? { timeout: 1300 } : {})}>
        <StyledContent>
          <h2 className={classes.contactTitle}>
            Contact <span>Me</span>
          </h2>
        </StyledContent>
      </Collapse>
      <div>
        <Scroll to='landing' smooth={true}>
          <StyledArrow>
            <span>
              <IconButton>
                <VerticalAlignTopIcon className='downarrow' />
              </IconButton>
            </span>
            <br />
            Back to <span>Top</span>
          </StyledArrow>
        </Scroll>
      </div>
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

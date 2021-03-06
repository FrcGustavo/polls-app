import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Nav } from './styles';

const Header: FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <Nav>
          <Button component={Link} to="/" variant="contained">
            Todas
          </Button>
          <Button component={Link} to="/polls/new" variant="contained">
            Nueva encuesta
          </Button>
        </Nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

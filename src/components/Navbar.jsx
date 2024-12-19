import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Alfred Marshall Dsouza - Music Portfolio</Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          <ListItem button component="a" href="#about">
            <ListItemText primary="About Me" />
          </ListItem>
          <ListItem button component="a" href="#contact">
            <ListItemText primary="Contact Me" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;

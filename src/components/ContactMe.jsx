import React from 'react';
import { Typography, Box } from '@mui/material';

function ContactMe() {
  return (
    <Box id="contact" style={{ margin: '2rem 0' }}>
      <Typography variant="h4" color="primary">Contact Me</Typography>
      <Typography>
        Mobile Number: +91 - 9900272747<br />
        Email: alfreddsouza97@gmail.com<br />
        GitHub: <a href="https://github.com/alfreddsouza97" target="_blank" rel="noopener noreferrer">GitHub</a><br />
        LinkedIn: <a href="https://www.linkedin.com/in/alfred-d-92957988/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </Typography>
    </Box>
  );
}

export default ContactMe;

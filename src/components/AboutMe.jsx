import React from 'react';
import { Typography, Box } from '@mui/material';

function AboutMe() {
  return (
    <Box id="about" style={{ margin: '2rem 0' }}>
      <Typography variant="h4" color="primary">About Me</Typography>
      <Typography paragraph>
        I am Alfred Marshall Dsouza. I am curious about music, computers, programming, and management things like equity research.
      </Typography>
      <Typography paragraph>
        All the songs that are sung on this website are not mixed or mastered. So, please use earphones.
      </Typography>
    </Box>
  );
}

export default AboutMe;

// import React from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Navbar from './components/Navbar';
// import AboutMe from './components/AboutMe';
// import ContactMe from './components/ContactMe';
// import VideoGrid from './components/VideoGrid';
// import songs from './data/songs';

// const theme = createTheme();

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Navbar />
//       <AboutMe />
//       <ContactMe />
//       <VideoGrid title="New Songs Sung by Me" videos={songs.new} />
//       <VideoGrid title="Old Songs Sung by Me" videos={songs.old} />
//       <VideoGrid title="Recomposed Songs" videos={songs.recomposed} />
//     </ThemeProvider>
//   );
// }

// export default App;

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import './App.css'; // Add extra custom styling if needed

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const songs = {
  new: [
    { title: "Alvida – Life in a Metro – KK’s Song", url: "https://www.youtube.com/embed/qDj_95FgmsQ" },
    { title: "Hero - Enrique Iglesias Song", url: "https://www.youtube.com/embed/Gv2370hH-aw" },
    { title: "Bheege Hont Tere – Murder – Kunal Ganjawala’s song", url: "https://www.youtube.com/embed/wgudSegjSTY" },
    { title: "Mungaru Maleye Part 1 – Sonu Nigam’s song from Mungaru Male movie", url: "https://www.youtube.com/embed/-OfMAnzFpic" },
    { title: "Mungaru Maleye Part 2 – Sonu Nigam’s song from Mungaru Male movie", url: "https://www.youtube.com/embed/nFEvdvGRTsc" }
  ],
  old: [
    { title: "Hale Dil – Harshit Saxena’s song from Murder 2 Movie", url: "https://www.youtube.com/embed/BZ1Y7gw8DTo" },
    { title: "Hua Main Part 1 – Raghav Chaitanya’s Song from Animal Movie", url: "https://www.youtube.com/embed/_6-6_4ge6wo" },
    { title: "Hua Main Part 2 – Raghav Chaitanya’s Song from Animal Movie", url: "https://www.youtube.com/embed/x14aQ58OEFQ" },
    { title: "Pal – Pyaar ke Pal – KK’s song", url: "https://www.youtube.com/embed/TqsLi_6iepQ" },
    { title: "Main Agar Kahoon – Sonu Nigam’s Song from Om Shanti Om Movie", url: "https://www.youtube.com/embed/f3RZyzzuFu0" },
    { title: "Aankhon Mein Teri – Ajab Si – KK’s song from Om Shanti Om Movie", url: "https://www.youtube.com/embed/xOSTjndegh0" },
    { title: "Kaise Hua – Vishal Mishra’s song from Kabir Singh Movie", url: "https://www.youtube.com/embed/e8C2KKs_BUU" },
    { title: "Labon Ko – KK’s song from Bhool Bhulaiya Movie", url: "https://www.youtube.com/embed/a0-H1ZZLuTY" },
    { title: "Milne Hai Mujhse Aayi – Arijit Singh’s song from Aashiqui 2 Movie", url: "https://www.youtube.com/embed/7IseC8A2RLU" }
  ],
  recomposed: [
    { title: "Woh Lamhe – Atif Aslam’s song from Zeher Movie", url: "https://www.youtube.com/embed/66mP8rQoF9w" }
  ]
};

function App() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [visibleSection, setVisibleSection] = useState('home');
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:960px) and (min-width:600px)');

  const handleVideoPlay = (url) => {
    if (activeVideo && activeVideo !== url) {
      const iframe = document.querySelector(`iframe[src="${activeVideo}"]`);
      if (iframe) {
        iframe.contentWindow.postMessage(JSON.stringify({ event: "command", func: "stopVideo" }), "*");
      }
    }
    setActiveVideo(url);
  };

  const renderVideos = (category, videos) => (
    <div style={{ marginBottom: '2rem' }}>
      <Typography variant="h4" component="h2" gutterBottom color="primary">
        {category}
      </Typography>
      <Grid container spacing={isMobile ? 2 : 3}>
        {videos.map((video, index) => (
          <Grid item xs={12} sm={isMobile ? 12 : 6} md={isTablet ? 6 : 4} key={index}>
            <Card>
              <CardMedia
                component="iframe"
                height="200"
                src={`${video.url}?enablejsapi=1`}
                title={video.title}
                onClick={() => handleVideoPlay(video.url)}
              />
              <CardContent>
                <Typography variant="h6" component="p">
                  {video.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Alfred Marshall Dsouza - Music Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          <ListItem button onClick={() => { setDrawerOpen(false); setVisibleSection('home'); }}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => { setDrawerOpen(false); setVisibleSection('about'); }}>
            <ListItemText primary="About Me" />
          </ListItem>
          <ListItem button onClick={() => { setDrawerOpen(false); setVisibleSection('contact'); }}>
            <ListItemText primary="Contact Me" />
          </ListItem>
        </List>
      </Drawer>
      <Container style={{ marginTop: '2rem' }}>
        {visibleSection === 'about' && (
          <Box id="about" style={{ marginBottom: '2rem' }}>
            <Typography variant="h6" component="h2" gutterBottom color="primary">
              This Website Code is written by me. Website Developed by ALFRED MARSHALL DSOUZA.
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              About Me
            </Typography>
            <Typography variant="body1" paragraph>
              I am Alfred Marshall Dsouza. I am curious about music, computers, programming, and management things like equity research.
            </Typography>
            <Typography variant="body1" paragraph>
              All the songs that are sung on this website are not mixed or mastered. So, please use earphones.
            </Typography>
            <Typography variant="body1" paragraph>
              I am looking for opportunities. Please connect with me on:
            </Typography>
            <Typography variant="body1" paragraph>
              Mobile Number: +91 - 9900272747<br />
              Email: alfreddsouza97@gmail.com<br />
              GitHub: <a href="https://github.com/alfreddsouza97" target="_blank" rel="noopener noreferrer">https://github.com/alfreddsouza97</a><br />
              LinkedIn: <a href="https://www.linkedin.com/in/alfred-d-92957988/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/alfred-d-92957988/</a><br/>
              Instagram: <a href="https://instagram.com/alfaman747/" target="_blank" rel="noopener noreferrer">https://instagram.com/alfaman747</a><br />
              Youtube: <a href="https://www.youtube.com/@AlfaMAN747/" target="_blank" rel="noopener noreferrer">https://www.youtube.com/@AlfaMAN747</a>
            </Typography>
          </Box>
        )}
        {visibleSection === 'contact' && (
          <Box id="contact" style={{ marginBottom: '2rem' }}>
            <Typography variant="h4" component="h2" gutterBottom color="primary">
              Contact Me
            </Typography>
            <Typography variant="body1" paragraph>
              Mobile Number: +91 - 9900272747<br />
              Email: alfreddsouza97@gmail.com<br />
              GitHub: <a href="https://github.com/alfreddsouza97" target="_blank" rel="noopener noreferrer">https://github.com/alfreddsouza97</a><br />
              LinkedIn: <a href="https://www.linkedin.com/in/alfred-d-92957988/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/alfred-d-92957988/</a><br/>
              Instagram: <a href="https://instagram.com/alfaman747/" target="_blank" rel="noopener noreferrer">https://instagram.com/alfaman747</a><br />
              Youtube: <a href="https://www.youtube.com/@AlfaMAN747/" target="_blank" rel="noopener noreferrer">https://www.youtube.com/@AlfaMAN747</a>
            </Typography>
          </Box>
        )}
        {visibleSection === 'home' && (
          <>
            {renderVideos('New Songs Sung by Me', songs.new)}
            {renderVideos('Old Songs Sung by Me', songs.old)}
            {renderVideos('Recomposed Songs by Me and Sung by Me', songs.recomposed)}
          </>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;



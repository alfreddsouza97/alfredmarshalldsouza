import React from 'react';
import { Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

function VideoGrid({ title, videos }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <Typography variant="h4" color="primary">{title}</Typography>
      <Grid container spacing={3}>
        {videos.map((video, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia component="iframe" height="200" src={`${video.url}?enablejsapi=1`} />
              <CardContent>
                <Typography>{video.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default VideoGrid;

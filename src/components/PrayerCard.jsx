import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function PrayerCard({name,time,image}) {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        sx={{ height: 120 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <h2>
          {name}
        </h2>
        <Typography variant="h2" sx={{ color: 'text.secondary' }}>
          {time}
        </Typography>
      </CardContent>
    </Card>
  );
}

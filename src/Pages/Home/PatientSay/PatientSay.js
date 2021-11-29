import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const PatientSay = (props) => {
    const {testiText,personName,country,tImg} = props.testimonial;
    return (
      
        <Card sx={{ maxWidth: 333,margin:2 }}>
       
        <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{textAlign:'justify'}}>
            {testiText}
          </Typography>
        </CardContent>
        <CardActions>
        <CardMedia
          component="img"
          alt="green iguana"
          sx={{width:"20%", paddingRight:2}}
          image={tImg}
        />
          <Typography variant="body2" color="text.secondary">
            {personName}
          <br/>
          {country}

          </Typography>
        </CardActions>
      </Card>
    );
};

export default PatientSay;
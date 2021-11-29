import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
const bannerBg={
    background: `url(${bg})`,
}
const verticleCenter={
    display:'flex',
    alignItems: 'center',
    height: 400
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item style={{...verticleCenter,textAlign:'left'}} xs={12} md={6}>
           <Box>
           <Typography variant="h3">
               Your New  Smile <br /> Starts  Here
           </Typography>
           <Typography variant="h6" sx={{my:5,fontSize:13,fontWeight:300,color:'gray'}}>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, totam suscipit animi quas libero culpa ipsum eum nobis minus. Cupiditate exercitationem beatae tempora eius nemo doloribus magnam dolor inventore error?
           </Typography>
           <Button variant="contained" sx={{backgroundColor:'#5CE7ED'}}>Get Appointment</Button>
           </Box>
          </Grid>
          <Grid item xs={12} md={6} style={verticleCenter}>
            <img style={{width: '400px'}} src={chair} alt="chair" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Banner;
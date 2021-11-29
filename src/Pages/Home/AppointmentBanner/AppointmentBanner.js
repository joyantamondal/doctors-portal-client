import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { darken } from '@mui/system';
import { Button } from '@mui/material';
const appointmentBanner ={
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img 
          style={{width:400, marginTop: '-110px'}}
          src={doctor} alt="doctor" />
        </Grid>
        <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'flex-start',alignItems:'center', textAlign:'left'}}>
          <Box>
          <Typography variant="h6" sx={{mb:5}} style={{color:'#5CE7ED'}}>
            Appointment
          </Typography>
          <Typography variant="h4" style={{color:'white'}}>
            Make an Appointment Today
          </Typography>
          <Typography variant="h4" sx={{my:5}} style={{color:'white', fontSize:14, fontWeight:300}}>
           It is a long established fact that a reader will be distractedby the readable content of a page when looking at its
          </Typography>
          <Button variant="contained" sx={{backgroundColor:'#5CE7ED'}}>Learn More</Button>
          </Box>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png'
const ExceptionalCare = () => {
    return (
        <Box sx={{ flexGrow: 1 ,marginBottom:10}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img 
          style={{width:400}}
          src={treatment} alt="doctor" />
        </Grid>
        <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'flex-start',alignItems:'center', textAlign:'left'}}>
          <Box>
          <Typography variant="h4" >
            Exceptional Detal <br/> Care, on Your Terms
          </Typography>
          <Typography variant="h4" sx={{my:5}} style={{ color:'gray', fontSize:14, fontWeight:300}}>
           It is a long established fact that a reader will be distractedby <br/> the readable content of a page when looking at its <br/> layout.
           It is a long established fact that a reader will be distractedby <br/> the readable content of a page when looking at its <br/> layout.
           It is a long established fact that a reader will be distractedby <br/> the readable content of a page when looking at its <br/> layout.
          </Typography>
          <Button variant="contained" sx={{backgroundColor:'#5CE7ED'}}>Learn More</Button>
          </Box>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default ExceptionalCare;
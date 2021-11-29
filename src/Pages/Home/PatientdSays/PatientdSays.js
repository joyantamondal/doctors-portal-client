import React from 'react';
import firstImg from '../../../images/people-2.png';
import secondImg from '../../../images/people-1.png';
import thirdImg from '../../../images/people-1.png';
import { Box } from '@mui/system';
import { Container, Grid, Typography } from '@mui/material';
import PatientSay from '../PatientSay/PatientSay';
const testimonials =[
    {
        testiText: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
        personName: 'Winson Herry',
        country: 'California',
        tImg:firstImg
    },
    {
        testiText: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
        personName: 'Joyanta Mondal',
        country: 'Bangladesh',
        tImg: secondImg
    },
    {
        testiText: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
        personName: 'Reek Jacky',
        country: 'USA',
        tImg:thirdImg
    }]
const PatientdSays = () => {
    return (
        <Box sx={{ flexGrow: 1 , marginBottom:10, marginTop:10}}>
        <Container>
       <Box sx={{textAlign:'left', marginLeft:2}}>
       <Typography sx={{fontWeight:500,color: 'success.main'}} variant="h6" component="div">
            Testimonial
          </Typography>
        <Typography sx={{fontWeight:600, paddingBottom:5}} variant="h4" component="div">
            What's Our Patient Says
          </Typography>
       </Box>
        <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            testimonials.map(testimonial=><PatientSay 
                key={testimonial.testiText}
                 testimonial={testimonial}>
                 </PatientSay>)
          }
        </Grid>
        </Container>
      </Box>
    );
};

export default PatientdSays;
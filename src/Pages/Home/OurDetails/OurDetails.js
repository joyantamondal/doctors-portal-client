import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import OurDetail from '../OurDetail/OurDetail';
import { BsFillClockFill,BsGeoAltFill,BsTelephoneOutbound} from "react-icons/bs";

const img1 = <BsFillClockFill />
const img2 = <BsGeoAltFill />
const img3 = <BsTelephoneOutbound />
const details =[
    {
        title:'Opening Hours',
        ourDetails:'Everyday 10am Except Friday',
        img: img1
},
    {
        title:'Visit Our Location',
        ourDetails:'Mirpur 10, JM Plaza, Dhaka',
        img: img2
},
    {
        title:'Contact Us Now',
        ourDetails:'+8801714900069',
        img: img3
},
]
const OurDetails = () => {
    return (
        <Box sx={{ flexGrow: 1 ,marginBottom:10}}>
      <Container sx={{marginTop: -4}}>
        
      <Grid  container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 10, md: 4 }}>
        
          {
            details.map(detail=><OurDetail
            key={detail.title}
            detail={detail}
            ></OurDetail>)

            
          }
        
      </Grid>
 
      </Container>
      </Box>
    );
};

export default OurDetails;
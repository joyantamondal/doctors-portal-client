import { Container, Grid } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { margin } from "@mui/system";

const OurDetail = (props) => {
    const {title,ourDetails,img} = props.detail;
  return (
    <div>
     <Container>
     <Grid item xs={4} sm={10} md={4}>
        <Card sx={{minWidth:300 , minHeight:100, display:'flex', p:2, backgroundColor:'#5CE7ED', color:'white'}}>
        <Typography variant="h2" gutterBottom  sx={{display:'flex', alignItems:'center', fontSize:60}}>
        {img}
      </Typography>
          
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="white"
                component="div"
              >
                {ourDetails}
              </Typography>
            </CardContent>

        </Card>
      </Grid>
     </Container>
    </div>
  );
};

export default OurDetail;

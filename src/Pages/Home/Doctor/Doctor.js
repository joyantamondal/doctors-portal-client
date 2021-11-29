import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({doctor}) => {
    const {name,image} = doctor;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <img style={{width: '250px', height:'250px'}} src={`data:image/png;base64,${image}`} alt="doctor" />
            <h3>{name}</h3>
        </Grid>
    );
};

export default Doctor;
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import ExceptionalCare from '../ExceptionalCare/ExceptionalCare';
import OurDetails from '../OurDetails/OurDetails';
import PatientdSays from '../PatientdSays/PatientdSays';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <OurDetails></OurDetails>
            <Services></Services>
            <ExceptionalCare></ExceptionalCare>
            <AppointmentBanner></AppointmentBanner>
            <PatientdSays></PatientdSays>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;
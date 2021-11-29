import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JwLhgCSevOor93RQ49LCjpJ8kCzypESVN5ZDB3Ftul2KGq8jpfKWPZkEYxQEhPRFCjWhLmePl1KgSNhCIEgwb6q00UHsLgVhh');
const Payment = () => {
    const {appointmentId}= useParams();
    const [appointment,setAppointment] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
        .then(res=>res.json())
        .then(data=>setAppointment(data));
    },[appointmentId]);
    return (
        <div>
            <h2><span style={{color:'green'}}>{appointment.patientName}</span> Payment for <span style={{color:'green'}}> {appointment.serviceName}</span> </h2>
            <h4>Pay: <span style={{color:'green'}}>${appointment.price}</span></h4>
           {appointment?.price && 
           <Elements stripe={stripePromise}>
      <CheckoutForm
      appointment={appointment}
      />
    </Elements>}
        </div>
    );
};

export default Payment;

/*
1. install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout form
--------------------

5. create payment method
6. server create payment intent api
7.Load client secret
8. confirmcard payment
9.handle user error
*/
import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail]= useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit =e=>{
       
        if(!image){
            alert('Please Upload Doctor Image...');
            return;
        }
        const formData= new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('http://localhost:5000/doctors', {
  method: 'POST',
  body: formData
})
.then(res => res.json())
.then(data => {
  if(data.insertedId){
     setSuccess('Doctor Added Successfully');
  }
})
.catch(error => {
  console.error('Error:', error);
});
e.preventDefault(); }
    return (
        <div>

            <h2>Add A Doctor</h2>
            <form onSubmit={handleSubmit}>
            <TextField 
             sx={{width:'50%'}}
             label="Doctor Name" 
             required
             onChange={e=>setName(e.target.value)}
             variant="standard" />
             <br/>
            <TextField 
             sx={{width:'50%', marginBottom:2}}
             label="Email" 
             type="email"
             required
             onChange={e=>setEmail(e.target.value)}
             variant="standard" />
             <br/>
             <Input
             sx={{marginBottom:2}}
              accept="image/*" 
              type="file"
              onChange={e=>setImage(e.target.files[0])}
              />
              
             <br/>
            <Button variant="contained" type="submit">
             Add Doctor
            </Button>

            </form>
            {success && <p style={{color:'green'}}>{success}</p>}
        </div>
    );
};

export default AddDoctor;
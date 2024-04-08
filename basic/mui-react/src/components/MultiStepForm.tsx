import React, { useState } from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Typography variant="h5" gutterBottom>
              Step 1: Personal Information
            </Typography>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleNextStep}>
              Next
            </Button>
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h5" gutterBottom>
              Step 2: Contact Information
            </Typography>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handlePreviousStep}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNextStep}>
              Next
            </Button>
          </>
        );
      case 3:
        return (
          <>
            <Typography variant="h5" gutterBottom>
              Step 3: Confirmation
            </Typography>
            <Typography variant="subtitle1">
              First Name: {formData.firstName}
              <br />
              Last Name: {formData.lastName}
              <br />
              Email: {formData.email}
              <br />
              Phone: {formData.phone}
            </Typography>
            <Button variant="contained" color="primary" onClick={handlePreviousStep}>
              Back
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={10} md={8} lg={6}>
        <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
          <form onSubmit={handleSubmit}>
            {renderStep()}
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MultiStepForm;

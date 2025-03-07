/**
 * TODO:
 * Fields to be divided in Grids for better look
 * Add types to the fields such as number 
 * Fix inconsistencies with the font
 */

import * as React from 'react';
import { Box, Stepper, Step, StepLabel, Button, Typography, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { stepperStyles } from './styles';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const steps = [
  'Personal Information',
  'Loan Information',
  'Last Data'
];

const ApplicationStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    loanAmount: '',
    loanPeriod: dayjs(),
    idSerial: '',
    address: '',
    termsAccepted: false
  });

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Date Change
  const handleDateChange = (newDate) => {
    setFormData({ ...formData, loanPeriod: newDate });
  };

  // Handle Checkbox Change
  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, termsAccepted: e.target.checked });
  };

  // Navigation Functions
  const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

  return (
    <Box sx={{ margin: 4, padding: 3 }}>

      {/* Stepper Navigation */}
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Step Content */}
      <Box sx={{ marginTop: 5 }}>
        {activeStep === 0 && (
          <Box>
            <Typography variant="default"  sx={stepperStyles.textHeaders}>Personal Information</Typography>
            <TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} sx={{ mt: 2 }} />
            <TextField fullWidth label="Middle Name" name="middleName" value={formData.middleName} onChange={handleInputChange} sx={{ mt: 2 }} />
            <TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} sx={{ mt: 2 }} />
            <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} sx={{ mt: 2 }} />
            <TextField fullWidth label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} sx={{ mt: 2 }} />
          </Box>
        )}

        {activeStep === 1 && (
          <Box>
            <Typography variant="default"  sx={stepperStyles.textHeaders}>Loan Information</Typography>
            <TextField fullWidth label="Loan Amount" name="loanAmount" type="number" value={formData.loanAmount} onChange={handleInputChange} sx={{ mt: 2 }} />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Loan Period"
                value={formData.loanPeriod}
                onChange={handleDateChange}
                renderInput={(params) => <TextField fullWidth {...params} sx={{ mt: 2}} />}
              />
            </LocalizationProvider>
          </Box>
        )}

        {activeStep === 2 && (
          <Box>
            <Typography variant="default"  sx={stepperStyles.textHeaders}>Last Data</Typography>
            <TextField fullWidth label="ID Serial Number" name="idSerial" value={formData.idSerial} onChange={handleInputChange} sx={{ mt: 2 }} />
            <TextField fullWidth label="Address" name="address" value={formData.address} onChange={handleInputChange} sx={{ mt: 2 }} />
            <FormControlLabel
              control={<Checkbox checked={formData.termsAccepted} onChange={handleCheckboxChange} />}
              label="I agree to the Terms and Conditions"
              sx={{ mt: 2 }}
            />
          </Box>
        )}

        {activeStep === steps.length && (
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Typography variant="h5" color="primary">🎉 Congratulations!</Typography>
            <Typography variant="body1">Your loan application has been submitted successfully.</Typography>
          </Box>
        )}
      </Box>

      {/* Navigation Buttons */}
      {activeStep < steps.length && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ApplicationStepper;

/**
 * TODO:
 * Fields to be divided in Grids for better look
 * Add types to the fields such as number 
 * Fix inconsistencies with the font
 * Add a step with information about the user's financial history like salary, other credits and other
 */

import * as React from 'react';
import { Box, Stepper, Step, StepLabel, Button, Typography, TextField, Checkbox, FormControlLabel } from '@mui/material';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';
import { stepperStyles } from './styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const steps = [
  'Лична информация',
  'Информация за адрес',
  'Информация за доходи и разходи',
  'Документ за самоличност',
  'Информация за кредит'
];

const ApplicationStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    firstName: '',
    middleName: '',
    lastName: '',
    egn: '',
    address: '',
    email: '',
    phone: '',
    city: '',
    streetOrNeighbourhood: '',
    strNumber: '',
    postcode:'',
    income: '',
    expenses: '',
    employmentType: '',
    idNumber:'',
    dateStart: null,
    dateEnd: null,
    idMVR:'',
    loanAmount: '',
    loanPeriod: '',
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

      {/* Stepper Navigation
        * Add styling
        */}
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
          <Box sx={{margin: '0 30%'}}>
            <Typography variant="default" sx={stepperStyles.textHeaders}>{steps[activeStep]}</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField fullWidth label="Име" name="firstName" value={formData.firstName} onChange={handleInputChange} sx={{ mt: 2}} required />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField fullWidth label="Бащино име" name="middleName" value={formData.middleName} onChange={handleInputChange} sx={{ mt: 2 }} required />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField fullWidth label="Фамилно име" name="lastName" value={formData.lastName} onChange={handleInputChange} sx={{ mt: 2 }} required />
              </Grid>
            </Grid>
            <TextField fullWidth label="ЕГН" name="egn" value={formData.egn} onChange={handleInputChange} sx={{ mt: 2 }} required />
            <TextField fullWidth label="Адрес" name="address" value={formData.address} onChange={handleInputChange} sx={{ mt: 2 }} required />
            <TextField fullWidth label="Имейл" name="email" type="email" value={formData.email} onChange={handleInputChange} sx={{ mt: 2 }} required />
            <TextField fullWidth label="Телефонен номер" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} sx={{ mt: 2 }} required />
          </Box>
        )}

        {activeStep === 1 && (
          <Box sx={{margin: '0 30%'}}>
            <Typography variant="default" sx={stepperStyles.textHeaders}>{steps[activeStep]}</Typography>
            <TextField fullWidth label="Град" name="city" value={formData.city} onChange={handleInputChange} sx={{ mt: 2 }} required />
            <TextField fullWidth label="Улица/Квартал" name="streetOrNeighbourhood" value={formData.streetOrNeighbourhood} onChange={handleInputChange} sx={{ mt: 2 }} required />
            <TextField fullWidth label="Номер" name="strNumber" type='number' value={formData.strNumber} onChange={handleInputChange} sx={{ mt: 2 }} required />
            <TextField fullWidth label="Пощенски код" name="postcode" value={formData.postcode} onChange={handleInputChange} sx={{ mt: 2 }} required />
          </Box>
        )}

        {activeStep === 2 && (
          <Box sx={{margin: '0 30%'}}>
            <Typography variant="default"  sx={stepperStyles.textHeaders}>{steps[activeStep]}</Typography>
            <TextField fullWidth label="Размер на месечни доходи" name="income" type="number" value={formData.income} onChange={handleInputChange} sx={{ mt: 2 }} required />
            <TextField fullWidth label="Размер на месечни разходи" name="expenses" type="number" value={formData.expenses} onChange={handleInputChange} sx={{ mt: 2 }} required />
            <TextField fullWidth label="Тип заетост" name="employmentType" value={formData.employmentType} onChange={handleInputChange} sx={{ mt: 2 }} required />
{/*             <TextField fullWidth label="Loan Amount" name="loanAmount" type="number" value={formData.loanAmount} onChange={handleInputChange} sx={{ mt: 2 }} />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Loan Period"
                value={formData.loanPeriod}
                onChange={handleDateChange}
                renderInput={(params) => <TextField fullWidth {...params} sx={{ mt: 2}} />}
              />
            </LocalizationProvider> */}
          </Box>
        )}

        {activeStep === 3 && (
          <Box sx={{margin: '0 30%'}}>
            <Typography variant="default"  sx={stepperStyles.textHeaders}>{steps[activeStep]}</Typography>
            <TextField fullWidth label="Номер на лична карта" name="idNumber" value={formData.idNumber} onChange={handleInputChange} sx={{ mt: 2 }} required />
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker fullWidth 
                  label="Дата на издаване" 
                  name="dateStart" 
                  value={formData.dateStart} 
                  onChange={handleDateChange} renderInput={(params) => <TextField fullWidth {...params} sx={{ mt: 2}} />} 
                  required
                  sx={{ mt: 2}} />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker fullWidth 
                    label="Дата на изтичане" 
                    name="dateEnd" 
                    value={formData.dateEnd} 
                    onChange={handleDateChange} 
                    renderInput={(params) => <TextField fullWidth {...params} sx={{ mt: 2}} />} 
                    required
                    sx={{ mt: 2, ml: 2}}
                  />
              </LocalizationProvider>
            <TextField fullWidth label="Издадена от МВР, град" name="idMVR" value={formData.idMVR} onChange={handleInputChange} sx={{ mt: 2 }} required />
          </Box>
        )}

        {activeStep === 4 && (
          <Box sx={{margin: '0 30%'}}>
            <Typography variant="default"  sx={stepperStyles.textHeaders}>{steps[activeStep]}</Typography>
            <TextField fullWidth label="Сума на кредит" name="loanAmount" type="number" value={formData.loanAmount} onChange={handleInputChange} sx={{ mt: 2 }} required />
            <TextField fullWidth label="Период на кредит (месеци)" name="loanPeriod" type="number" value={formData.loanPeriod} onChange={handleInputChange} sx={{ mt: 2 }} required />
            {/*         <FormControlLabel
              control={<Checkbox checked={formData.termsAccepted} onChange={handleCheckboxChange} />}
              label="I agree to the Terms and Conditions"
              sx={{ mt: 2 }}
            /> */}
          </Box>
        )}

        {activeStep === steps.length && (
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Typography variant="h5" color="primary">🎉 Поздравления!</Typography>
            <Typography variant="body1">Формата за кандидастване е изпратена успешно.</Typography>
          </Box>
        )}
      </Box>

      {/* Navigation Buttons */}
      {activeStep < steps.length && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3, margin: '2em 30%' }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>Назад</Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Изпрати' : 'Продължи'}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ApplicationStepper;

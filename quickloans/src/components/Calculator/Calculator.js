/**
 * TODO:
 * create styles.js for Calculator
 * 
 */
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
//import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { calculatorStyles } from './styles';

export default function Calculator() {
  const navigate = useNavigate();

  // Loan Amount State
  const [loanAmount, setLoanAmount] = React.useState(500);
  const handleLoanAmountChange = (event, newValue) => {
    setLoanAmount(newValue);
  };

  // Loan Period State
  const [loanPeriod, setLoanPeriod] = React.useState(5);
  const handleLoanPeriodChange = (event, newValue) => {
    setLoanPeriod(newValue);
  };


  const monthlyInstallment = loanAmount / loanPeriod;
  const totalMoneyToGiveBack = loanAmount * (1 + (loanPeriod / 12) * 0.06); //TODO: make the 0.06 a variable
  
  const handleApplyClick = () => {
    navigate('/apply-form'); // Redirects to the application form page
  };

  return (
    <Box sx={calculatorStyles.boxMain}>
      {/* Loan Amount Row */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <Typography variant="default" sx={calculatorStyles.text}>Сума (лв)</Typography>
        </Grid>
        <Grid item xs={8}>
          <Slider
            value={loanAmount}
            onChange={handleLoanAmountChange}
            min={300}
            max={5000}
            step={100}
            valueLabelDisplay="on"
            sx={calculatorStyles.slider}
          />  
        </Grid>
      </Grid>

      {/* Loan Period Row */}
      <Grid container spacing={2} alignItems="center" sx={calculatorStyles.grid}>
        <Grid item xs={4}>
          <Typography variant="default"  sx={calculatorStyles.text}>Период </Typography>
        </Grid>
        <Grid item xs={8}>
          <Slider
            value={loanPeriod}
            onChange={handleLoanPeriodChange}
            min={3}
            max={36}
            step={1}
            valueLabelDisplay="on"
            sx={calculatorStyles.slider}
          />
        </Grid>
      </Grid>
      
      {/* Monthly Installment Display */}
      <Box sx={calculatorStyles.box}>
        <Typography variant="default" sx={calculatorStyles.text}>
          Месечна вноска (лв.): <strong>{monthlyInstallment.toFixed(2)}</strong>
        </Typography>
      </Box>
      <Box sx={calculatorStyles.box}>
        <Typography variant="default" sx={calculatorStyles.text}>
          Сума за връщане (лв.): <strong>{totalMoneyToGiveBack.toFixed(2)}</strong>
        </Typography>
      </Box>

      <Box sx={calculatorStyles.boxButton}>
        <Button
          variant="contained"
          onClick={handleApplyClick}
          sx={calculatorStyles.button}
        >
          Кандидатствай
        </Button>
      </Box>
    </Box>
  );
}

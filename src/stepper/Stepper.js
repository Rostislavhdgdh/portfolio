import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Modal } from '@mui/material';


const steps = [
  {
    label: 'Programming languages/ markup',
    description: (
      <ul className='ul' style={{ listStyleType: 'none' }}>
       <li >HTML (Advanced)</li>
        <li>CSS (Advanced)</li>
        <li>JS (Advanced)</li>
        <li>C# (Advanced)</li>
        <li>C++ (Advanced)</li>
        <li>PHP (Advanced)</li>
      </ul>
    ),
  },
  {
    label: 'Frameworks',
    description: (
        <ul className='ul' style={{ listStyleType: 'none' }}>
          <li >React</li>
          <li>MUI CORE</li>
          <li>Vite</li>
          <li>Laravel</li>
          <li>ASP.NET Core</li>
          <li>ASP.NET MVC</li>
          <li>Unity</li>
          <li>NEON EVM <br></br>(SMART CONTRACT)</li>
        </ul>
      ),
  },
  {
    label: 'Technology',
    description: (
        <ul className='ul' style={{ listStyleType: 'none' }}>
          <li >Docker</li>
          <li>.GIT</li>
          <li>MySQL</li>
          <li>Prometheus</li>
          <li>Joomla</li>
          
        </ul>
      ),
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
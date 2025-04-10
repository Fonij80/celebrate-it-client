import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  TemplateSelection,
  Customization,
  CelebrationType,
  Recipients,
} from "../../components/organisms";

const steps = [
  "Choose Celebration",
  "Select Recipients",
  "Pick Template",
  "Customize",
];

export const CelebrationFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [celebrationData, setCelebrationData] = useState({
    type: "",
    recipients: [],
    template: null,
    customization: {},
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const updateCelebrationData = (data: any) => {
    setCelebrationData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <CelebrationType
            onSelect={(type) => updateCelebrationData({ type })}
          />
        );
      case 1:
        return (
          <Recipients
            onSelect={(recipients) => updateCelebrationData({ recipients })}
          />
        );
      case 2:
        return (
          <TemplateSelection
            onSelect={(template) => updateCelebrationData({ template })}
          />
        );
      case 3:
        return (
          <Customization
            template={celebrationData.template}
            onCustomize={(customization) =>
              updateCelebrationData({ customization })
            }
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Create Your Celebration
            </Typography>
            <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {renderStepContent(activeStep)}
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={
                  activeStep === steps.length - 1
                    ? () => console.log("Submit:", celebrationData)
                    : handleNext
                }
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
};

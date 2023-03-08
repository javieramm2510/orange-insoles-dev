import React from "react";
import Box from "@mui/material/Box";
interface ProgressStepsProps {
  currentStep: number;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep }) => {
  return (
    <>
      <Box
        sx={{
          background: "rgba(230, 138, 63, 0.22)",
          borderRadius: "100px",
          display: "flex",
          alignItems: "center",
          height: "27px",
          width: "101px",
          textAlign: "center",
          justifyContent: "center",
          typography: "body1",
          color: "primary.main",
          fontWeight: "700",
        }}
      >
        Step {currentStep}
      </Box>
    </>
  );
};

export default ProgressSteps;

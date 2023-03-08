import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import RightArrowIcon from "../icons/RightArrowCustomIcon";
import LeftArrowCustomIcon from "../icons/LeftArrowCustomIcon";

interface ProgressButtonsProps {
  onNext: () => void;
  onPrevious: () => void;
  currentStep: number;
  isSubmtting: boolean;
}

const ProgressButtons: React.FC<ProgressButtonsProps> = ({
  onNext,
  onPrevious,
  currentStep,
  isSubmtting,
}) => {
  return (
    <Box
      sx={{
        width: currentStep !== 1 ? "520px" : "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        maxWidth: "100%",
        justifyContent: {
          xs: "center",
          md: "initial",
        }
      }}
    >
      {currentStep !== 1 && (
        <Button
          onClick={onPrevious}
          variant="outlined"
          startIcon={<LeftArrowCustomIcon sx={{ marginRight: "12px" }}/>}
          sx={{
            borderRadius: "15px",
            height: "54px",
            width: "249px",
            color: "color.primary",
            border: "2px solid rgba(230, 138, 63, 1) !important",
            justifyContent: "flex-start",
          }}
        >
          Back
        </Button>
      )}
      <Button
        variant="contained"
        disabled={isSubmtting}
        onClick={onNext}
        endIcon={<RightArrowIcon sx={{ marginLeft: "12px" }} />}
        sx={{
          borderRadius: "15px",
          height: "54px",
          width: "249px",
          color: "#fff",
          justifyContent: "flex-end",
          marginLeft: "auto",
          margin: {
            xs: "0 auto",
            md: "0 0 0 auto",
          }
        }}
        className="next-step"
      >
        {currentStep === 3 ? "Checkout" : "Next"}
      </Button>
    </Box>
  );
};

export default ProgressButtons;

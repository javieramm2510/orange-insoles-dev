import React from "react";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

interface DisplayErrorsProps {
  message: string;
}

const DisplayErrors: React.FC<DisplayErrorsProps> = ({ message }) => {
  return (
    <Box sx={{ width: "516px", maxWidth: "100%", padding: "0 0 20px" }}>
      <Alert severity="error">{message}</Alert>
    </Box>
  );
};

export default DisplayErrors;

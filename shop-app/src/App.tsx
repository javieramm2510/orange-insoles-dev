import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import MultiStepForm from "./pages/MultiStepForm";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(230, 138, 63, 1)",
      contrastText: '#fff',
    },
    text: {
      primary: "rgba(58, 58, 58, 1)",
      secondary: "rgba(48, 48, 48, 1)",
    },
    background: {
      paper: "rgba(230, 138, 63, 1)",
    }
  },
  typography: {
    fontFamily: "Lato, sans-serif",
    body1: {
      color: "rgba(58, 58, 58, 1)",
      fontSize: "17px",
    },
    body2: {
      fontSize: "21px",
    },
    h1: {
      fontWeight: "bold",
      fontSize: "51px",
    },
    button: {
      fontWeight: "bold",
      fontSize: "21px",
      color: "white",
      borderRadius: "15px",
      textTransform: "capitalize",
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MultiStepForm />
    </ThemeProvider>
  );
};

export default App;

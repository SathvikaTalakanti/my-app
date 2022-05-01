import { ThemeProvider } from "@material-ui/core";
import React from "react"
import { ReactDOM } from "react"
import { createTheme} from "@material-ui/core";
import { purple } from '@mui/material/colors';

//import Themedemo from "./Themedemo"
import App from "../App";

const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
    },
  });


const rootElement =docyment.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme ={theme}>
           <App></App>
        </ThemeProvider>
    </React.StrictMode>
)
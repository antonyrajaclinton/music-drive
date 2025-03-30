import { createTheme, responsiveFontSizes } from "@mui/material";

// declare module '@mui/material/styles' {
//     interface Theme {
//       status: {
//         danger: string;
//       };
//     }

//     interface ThemeOptions {
//       status?: {
//         danger?: string;
//       };
//     }
//   }



const theme = createTheme({

    palette: {
        primary: {
            main: '#3b00b3',
            light: '#5200f9',
            dark: '#22045f',
            contrastText: '#fff',
        }

    }
});


export default responsiveFontSizes(theme);
import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffe0b6',
    },
    secondary: {
      main: '#ff0000',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme

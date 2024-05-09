import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff8c00',
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

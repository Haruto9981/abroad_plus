import { AppBar, Box, Button, Container } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="lg" sx={{ px: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Link href="/">
              <Image src="/logo.png" width={100} height={100} alt="logo" />
            </Link>
          </Box>
          <Box>
            <Button
              color="warning"
              variant="contained"
              sx={{
                color: 'white',
                textTransform: 'none',
                fontSize: 16,
                borderRadius: 2,
                boxShadow: 'none',
              }}
            >
              Sign in
            </Button>
            <Button
              color="warning"
              variant="outlined"
              sx={{
                textTransform: 'none',
                fontSize: 16,
                borderRadius: 2,
                boxShadow: 'none',
                border: '1.5px solid #f5a500',
                ml: 2,
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Header

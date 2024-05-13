import ArticleIcon from '@mui/icons-material/Article'
import HomeIcon from '@mui/icons-material/Home'
import Logout from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
} from '@mui/material'
import Tabs from '@mui/material/Tabs'
import axios, { AxiosResponse, AxiosError } from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import LinkTab from './LinkTab'
import { useUserState } from '@/hooks/useGlobalState'

type Props = {
  pageUrl?: string
}
const Header: React.FC<Props> = ({ pageUrl }: Props) => {
  const [user] = useUserState()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const router = useRouter()

  const hideHeaderPathnames = ['/current/diaries/edit/[id]']
  if (hideHeaderPathnames.includes(router.pathname)) return <></>

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const addNewArticle = () => {
    const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/current/diaries'

    const headers = {
      'Content-Type': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      client: localStorage.getItem('client'),
      uid: localStorage.getItem('uid'),
    }

    axios({ method: 'POST', url: url, headers: headers })
      .then((res: AxiosResponse) => {
        router.push('/current/diaries/edit/' + res.data.id)
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log(e.message)
      })
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        height: 88,
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
          <Box sx={{ display: 'flex', textAlign: 'center' }}>
            <Link href="/">
              <Image src="/logo.png" width={85} height={85} alt="logo" />
            </Link>

            <Tabs
              sx={{ mt: 5, ml: 4, display: { xs: 'none', sm: 'block' } }}
              value={pageUrl || false}
            >
              <LinkTab label="Home" href="/" value="/" />
              <LinkTab
                label="Diary"
                href="/current/diaries"
                value="/current/diaries"
              />
            </Tabs>
          </Box>
          {user.isFetched && (
            <>
              {!user.isSignedIn && (
                <Box>
                  <Link href="/sign_in">
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
                  </Link>
                  <Link href="/sign_up">
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
                  </Link>
                </Box>
              )}
              {user.isSignedIn && (
                <Box sx={{ display: 'flex' }}>
                  <IconButton onClick={handleClick} sx={{ p: 0 }}>
                    {user.image.url ? (
                      <Avatar
                        src={user.image.url}
                        sx={{ width: 50, height: 50 }}
                      ></Avatar>
                    ) : (
                      <Avatar sx={{ width: 50, height: 50 }}>
                        <PersonIcon />
                      </Avatar>
                    )}
                  </IconButton>
                  <Box sx={{ ml: 2 }}>
                    <Button
                      color="warning"
                      variant="contained"
                      sx={{
                        color: 'white',
                        textTransform: 'none',
                        fontSize: 14,
                        borderRadius: 2,
                        width: 100,
                        height: 50,
                        boxShadow: 'none',
                      }}
                      onClick={addNewArticle}
                    >
                      New Diary
                    </Button>
                  </Box>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                  >
                    <Box sx={{ pl: 2, py: 1 }}>
                      <Typography sx={{ fontWeight: 'bold' }}>
                        {user.name}
                      </Typography>
                    </Box>
                    <Divider />
                    <Link href="/">
                      <MenuItem sx={{ display: { sm: 'none' } }}>
                        <ListItemIcon>
                          <HomeIcon fontSize="small" />
                        </ListItemIcon>
                        Home
                      </MenuItem>
                    </Link>
                    <Link href="/current/diaries">
                      <MenuItem sx={{ display: { sm: 'none' } }}>
                        <ListItemIcon>
                          <ArticleIcon fontSize="small" />
                        </ListItemIcon>
                        Diary
                      </MenuItem>
                    </Link>
                    <Link href="/profile">
                      <MenuItem>
                        <ListItemIcon>
                          <PersonIcon fontSize="small" />
                        </ListItemIcon>
                        Profile
                      </MenuItem>
                    </Link>
                    <Link href="/sign_out">
                      <MenuItem>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Sigh out
                      </MenuItem>
                    </Link>
                  </Menu>
                </Box>
              )}
            </>
          )}
        </Box>
      </Container>
    </AppBar>
  )
}

export default Header

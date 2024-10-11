import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import EditIcon from '@mui/icons-material/Edit'
import { LoadingButton } from '@mui/lab'
import {
  Avatar,
  Box,
  Container,
  Typography,
  Button,
  Modal,
  Tooltip,
  IconButton,
  Card,
  CardContent,
} from '@mui/material'
import axios, { AxiosError } from 'axios'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useSWR from 'swr'
import Comment from '@/components/Comment'
import CurrentUserDiary from '@/components/CurrentDiary'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { useUserState, useSnackbarState } from '@/hooks/useGlobalState'
import { useRequireSignedIn } from '@/hooks/useRequireSignedIn'
import { styles } from '@/styles'
import { fetcher } from '@/utils'

type CurrentDiaryProps = {
  id: string
  title: string
  content: string
  status: string
  image: {
    url: string
  }
  wordCount: number
  day: string
  monthName: string
  year: string
  date: string
  wDay: string
  favorites: { user_id: number }[]
  diaryComments: Array<object>
}

const CurrentDiaryDetail: NextPage = () => {
  useRequireSignedIn()
  const [user, setUser] = useUserState()
  const router = useRouter()
  const [, setSnackbar] = useSnackbarState()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/current/diaries/'
  const { id } = router.query

  const { data, error } = useSWR(
    user.isSignedIn && id ? url + id : null,
    fetcher,
  )
  if (error) return <Error />
  if (!data) return <Loading />

  const diary: CurrentDiaryProps = camelcaseKeys(data)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteDiary = () => {
    setIsLoading(true)
    const deleteUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL + '/current/diaries/' + id

    const headers = {
      'Content-Type': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      client: localStorage.getItem('client'),
      uid: localStorage.getItem('uid'),
    }

    axios({
      method: 'DELETE',
      url: deleteUrl,
      headers: headers,
    })
      .then(() => {
        setUser({
          ...user,
          isFetched: false,
        })
        setSnackbar({
          message: 'Diary deleted',
          severity: 'success',
          pathname: '/current/diaries',
        })
        router.push('/current/diaries')
      })
      .catch((err: AxiosError<{ error: string }>) => {
        console.log(err.message)
        setSnackbar({
          message: 'Failed to delete diary',
          severity: 'error',
          pathname: '/current/diaries',
        })
      })
    setIsLoading(false)
  }

  return (
    <Box
      css={styles.pageMinHeight}
      sx={{
        backgroundColor: '#ffe0b6',
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ maxWidth: 840, m: 'auto', pt: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
            <Box sx={{ width: 40, height: 40 }}>
              <Link href={'/current/diaries'}>
                <Avatar>
                  <Tooltip title="Back">
                    <IconButton sx={{ backgroundColor: 'white' }}>
                      <ChevronLeftIcon sx={{ color: '#99AAB6' }} />
                    </IconButton>
                  </Tooltip>
                </Avatar>
              </Link>
            </Box>
            <Box>
              <Link href={'/current/diaries/edit/' + diary.id}>
                <Avatar>
                  <Tooltip title="Edit">
                    <IconButton sx={{ backgroundColor: 'white' }}>
                      <EditIcon sx={{ color: '#99AAB6' }} />
                    </IconButton>
                  </Tooltip>
                </Avatar>
              </Link>
            </Box>
          </Box>
          <Card sx={{ borderRadius: 2 }}>
            
              <CurrentUserDiary
                id={diary.id}
                title={diary.title}
                content={diary.content}
                status={diary.status}
                image={diary.image.url}
                wordCount={diary.wordCount}
                day={diary.day}
                month={diary.monthName}
                year={diary.year}
                wDay={diary.wDay}
                favorites={diary.favorites}
                diaryComments={diary.diaryComments}
              />
           
          </Card>

          {diary.status === 'shared' && (
            <Box sx={{ my: 4 }}>
              <Comment id={diary.id} />
            </Box>
          )}
          <Box sx={{ mt: 4, textAlign: 'right' }}>
            <LoadingButton
              color="warning"
              variant="contained"
              loading={isLoading}
              sx={{
                color: 'white',
                textTransform: 'none',
                fontSize: 16,
                borderRadius: 2,
                width: 80,
                height: 40,
                boxShadow: 'none',
              }}
              onClick={handleOpen}
            >
              Delete
            </LoadingButton>
            <Modal open={open} onClose={handleClose}>
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 400,
                  bgcolor: 'background.paper',
                  border: '0.5px solid #000',
                  boxShadow: 24,
                  p: 4,
                  borderRadius: 2,
                }}
              >
                <Typography sx={{ mb: 4 }}>
                  Do you really want to delete it?
                </Typography>
                <Button
                  onClick={handleClose}
                  variant="outlined"
                  sx={{ marginRight: 2 }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={deleteDiary}
                >
                  OK
                </Button>
              </Box>
            </Modal>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default CurrentDiaryDetail

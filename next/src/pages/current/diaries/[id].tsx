import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { LoadingButton } from '@mui/lab'
import {
  Avatar,
  Box,
  Container,
  Typography,
  Card,
  Button,
  Modal,
  Tooltip,
  IconButton,
} from '@mui/material'
import axios, { AxiosError } from 'axios'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useSWR from 'swr'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { useUserState, useSnackbarState } from '@/hooks/useGlobalState'
import { useRequireSignedIn } from '@/hooks/useRequireSignedIn'
import { styles } from '@/styles'
import { fetcher } from '@/utils'

type CurrentDiaryProps = {
  id: number
  title: string
  content: string
  imageUrl: string
  wordCount: number
  createdAt: string
  fromToday: string
  user: {
    name: string
  }
}

const CurrentDiaryDetail: NextPage = () => {
  useRequireSignedIn()
  const [user] = useUserState()
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
        setSnackbar({
          message: '日記を削除しました',
          severity: 'success',
          pathname: '/current/diaries',
        })
        router.push('/current/diaries')
      })
      .catch((err: AxiosError<{ error: string }>) => {
        console.log(err.message)
        setSnackbar({
          message: '日記の削除に失敗しました',
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
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 840, m: 'auto', pt: 6, pb: 3 }}>
          <Box sx={{ width: 40, height: 40 }}>
            <Link href={'/current/diaries'}>
              <Avatar>
                <Tooltip title="日記一覧に戻る">
                  <IconButton sx={{ backgroundColor: 'white' }}>
                    <ChevronLeftIcon sx={{ color: '#99AAB6' }} />
                  </IconButton>
                </Tooltip>
              </Avatar>
            </Link>
          </Box>
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: 21, sm: 25 },
                fontWeight: 'bold',
                lineHeight: '40px',
              }}
            >
              {diary.title}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography
              component="h3"
              sx={{
                fontSize: { xs: 15, sm: 18 },
              }}
            >
              {diary.wordCount} words
            </Typography>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Card
              sx={{
                boxShadow: 'none',
                borderRadius: '12px',
                maxWidth: 840,
                m: '0 auto',
              }}
            >
              <Box
                sx={{
                  padding: { xs: '0 24px 24px 24px', sm: '0 40px 40px 40px' },
                  marginTop: { xs: '24px', sm: '40px' },
                }}
              >
                <Typography>{diary.content}</Typography>
              </Box>
            </Card>
          </Box>
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
                  本当に削除してもよろしいですか?
                </Typography>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  sx={{ marginRight: 2 }}
                >
                  キャンセル
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

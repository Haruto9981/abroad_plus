import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import {
  Avatar,
  Box,
  Container,
  Typography,
  Card,
  Tooltip,
  IconButton,
} from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { useUserState } from '@/hooks/useGlobalState'
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
  const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/current/diaries/'
  const { id } = router.query

  const { data, error } = useSWR(
    user.isSignedIn && id ? url + id : null,
    fetcher,
  )
  if (error) return <Error />
  if (!data) return <Loading />

  const diary: CurrentDiaryProps = camelcaseKeys(data)

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
        </Box>
        <Box sx={{ display: 'flex', gap: '0 24px' }}>
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
        </Box>
      </Container>
    </Box>
  )
}

export default CurrentDiaryDetail

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import {
  Avatar,
  Box,
  Container,
  Tooltip,
  IconButton,
  Card,
  CardContent,
} from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Comment from '@/components/Comment'
import DiaryCard from '@/components/DiaryCard'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { styles } from '@/styles'
import { fetcher } from '@/utils'

type DiaryProps = {
  id: number
  title: string
  content: string
  image: {
    url: string
  }
  wordCount: number
  day: string
  monthName: string
  year: string
  wDay: string
  user: {
    id: number
    name: string
    first_name: string
    last_name: string
    country: string
    uni: string
    startDate: string
    endDate: string
    bio: string
    image: {
      url: string
    }
  }
  favorites: { user_id: number }[]
  diaryComments: Array<object>
}

const DiaryDetail: NextPage = () => {
  const router = useRouter()
  const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/diaries/'
  const { id } = router.query

  const { data, error } = useSWR(id ? url + id : null, fetcher)
  if (error) return <Error />
  if (!data) return <Loading />

  const diary: DiaryProps = camelcaseKeys(data)

  return (
    <Box
      css={styles.pageMinHeight}
      sx={{
        backgroundColor: '#ffe0b6',
        pb: 6,
      }}
    >
      <Container maxWidth="sm" sx={{ pt: 1 }}>
        <Box sx={{ width: 40, height: 40, my: 2 }}>
          <Link href={'/'}>
            <Avatar>
              <Tooltip title="Back">
                <IconButton sx={{ backgroundColor: 'white' }}>
                  <ChevronLeftIcon sx={{ color: '#99AAB6' }} />
                </IconButton>
              </Tooltip>
            </Avatar>
          </Link>
        </Box>
        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <DiaryCard
              id={diary.id}
              title={diary.title}
              content={diary.content}
              image={diary.image.url}
              wordCount={diary.wordCount}
              day={diary.day}
              month={diary.monthName}
              year={diary.year}
              wDay={diary.wDay}
              userId={diary.user.id}
              userName={diary.user.name}
              userFirstName={diary.user.first_name}
              userLastName={diary.user.last_name}
              userCountry={diary.user.country}
              userUni={diary.user.uni}
              userBio={diary.user.bio}
              userImage={diary.user.image.url}
              favorites={diary.favorites}
              diaryComments={diary.diaryComments}
            />
          </CardContent>
        </Card>
        <Box sx={{ my: 4 }}>
          <Comment id={diary.id} />
        </Box>
      </Container>
    </Box>
  )
}

export default DiaryDetail

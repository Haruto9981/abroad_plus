import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { Avatar, Box, Container, Tooltip, IconButton } from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'
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
  month: string
  year: string
  wDay: string
  user: {
    name: string
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
        <DiaryCard
          id={diary.id}
          title={diary.title}
          content={diary.content}
          image={diary.image.url}
          wordCount={diary.wordCount}
          day={diary.day}
          month={diary.month}
          year={diary.year}
          wDay={diary.wDay}
          userName={diary.user.name}
          userCountry={diary.user.country}
          userUni={diary.user.uni}
          userStartDate={diary.user.startDate}
          userEndDate={diary.user.endDate}
          userBio={diary.user.bio}
          userImage={diary.user.image.url}
          favorites={diary.favorites}
        />
      </Container>
    </Box>
  )
}

export default DiaryDetail

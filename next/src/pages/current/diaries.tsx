import { Box, Grid, Container } from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import Link from 'next/link'
import useSWR from 'swr'
import CurrentUserDiaryCard from '@/components/CurrentDiaryCard'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { Calendar } from '@/components/MuiCalendar'
import { useUserState } from '@/hooks/useGlobalState'
import { useRequireSignedIn } from '@/hooks/useRequireSignedIn'
import { styles } from '@/styles'
import { fetcher } from '@/utils'

type CurrentDiaryProps = {
  id: number
  title: string
  content: string
  status: string
  image: {
    url: string
  }
  wordCount: number
  day: string
  month: string
  year: string
  wDay: string
  favorites: { user_id: number }[]
}

const CurrentDiaries: NextPage = () => {
  useRequireSignedIn()
  const [user] = useUserState()

  const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/current/diaries'
  const { data, error } = useSWR(user.isSignedIn ? url : null, fetcher)

  if (error) return <Error />
  if (!data) return <Loading />

  const diaries: CurrentDiaryProps[] = camelcaseKeys(data)

  return (
    <Box
      css={styles.pageMinHeight}
      sx={{ backgroundColor: '#ffe0b6', display: 'flex' }}
    >
      <Container maxWidth="sm" sx={{ pt: 6 }}>
        <Grid container spacing={2}>
          {diaries.map((diary: CurrentDiaryProps, i: number) => (
            <Grid key={i} item xs={12} md={12}>
              <Link href={'/current/diaries/' + diary.id}>
                <CurrentUserDiaryCard
                  id={diary.id}
                  title={diary.title}
                  content={diary.content}
                  status={diary.status}
                  image={diary.image.url}
                  wordCount={diary.wordCount}
                  day={diary.day}
                  month={diary.month}
                  year={diary.year}
                  wDay={diary.wDay}
                  favorites={diary.favorites}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container
        maxWidth="sm"
        sx={{ pt: 6, display: { xs: 'none', lg: 'block' } }}
      >
        <Calendar />
      </Container>
    </Box>
  )
}

export default CurrentDiaries

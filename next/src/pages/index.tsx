import { Box, Grid, Container, Pagination } from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import DiaryCard from '@/components/DiaryCard'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import ProfileCard from '@/components/ProfileCard'
import { useUserState } from '@/hooks/useGlobalState'
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
  month: string
  year: string
  wDay: string
  user: {
    id: number
    name: string
    country: string
    uni: string
    bio: string
    image: {
      url: string
    }
  }
  favorites: { user_id: number }[]
  diaryComments: Array<object>
}

const Index: NextPage = () => {
  const router = useRouter()
  const [user] = useUserState()
  const page = 'page' in router.query ? Number(router.query.page) : 1
  const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/diaries/?page=' + page
  const { data, error } = useSWR(url, fetcher)
  if (error) return <Error />
  if (!data) return <Loading />

  const diaries = camelcaseKeys(data.diaries)

  const meta = camelcaseKeys(data.meta)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) =>
    router.push('/?page=' + value)

  return (
    <Box
      css={styles.pageMinHeight}
      sx={{ backgroundColor: '#ffe0b6', display: 'flex' }}
    >
      <Container
        maxWidth="xs"
        sx={{ pt: 6, display: { xs: 'none', lg: 'block' } }}
      >
        <ProfileCard
          id={user.id}
          name={user.name}
          country={user.country}
          uni={user.uni}
          bio={user.bio}
          startDate={user.start_date}
          endDate={user.end_date}
          image={user.image.url}
        />
      </Container>
      <Container maxWidth="sm" sx={{ pt: 6 }}>
        <Grid container spacing={2}>
          {diaries.map((diary: DiaryProps, i: number) => (
            <Grid key={i} item xs={12} md={12}>
              <Link href={'/diaries/' + diary.id}>
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
                  userCountry={diary.user.country}
                  userUni={diary.user.uni}
                  userBio={diary.user.bio}
                  userImage={diary.user.image.url}
                  favorites={diary.favorites}
                  diaryComments={diary.diaryComments}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
          <Pagination
            count={meta.totalPages}
            page={meta.currentPage}
            onChange={handleChange}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default Index

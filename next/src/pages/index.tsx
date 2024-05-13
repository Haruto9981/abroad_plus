import { Box, Grid, Container, Pagination } from '@mui/material'
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
  monthName: string
  month: string
  year: string
  wDay: string
  user: {
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
  const page = 'page' in router.query ? Number(router.query.page) : 1
  const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/diaries/?page=' + page
  const { data, error } = useSWR(url, fetcher)
  if (error) return <Error />
  if (!data) return <Loading />

  const diaries = camelcaseKeys(data.diaries)

  console.log(diaries)

  const meta = camelcaseKeys(data.meta)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) =>
    router.push('/?page=' + value)

  // const getDateDifference = (date1: Date, date2: Date) => {
  //   const d1 = new Date(date1)
  //   const d2 = new Date(date2)

  //   const diffTime = d2.getTime() - d1.getTime()
  //   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  //   return diffDays
  // }

  // const currentDate = new Date()
  // const startDate = new Date(user.start_date)
  // const endDate = new Date(user.end_date)
  // const startDateDifference = getDateDifference(currentDate, startDate)
  // const endDateDifference = getDateDifference(currentDate, endDate)

  return (
    <Box
      css={styles.pageMinHeight}
      sx={{ backgroundColor: '#ffe0b6', display: 'flex' }}
    >
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
      {/* <Container
        maxWidth="sm"
        sx={{ pt: 6, display: { xs: 'none', lg: 'block' } }}
      >
        {startDateDifference <= 0 && endDateDifference > 0 && (
          <Typography component="h2" sx={{ fontSize: 28, textAlign: 'left' }}>
            <span
              style={{ fontWeight: 'bold', color: '#ed1c24', fontSize: 36 }}
            >
              {endDateDifference}
            </span>{' '}
            days left to the end of your SA
          </Typography>
        )}
        {endDateDifference <= 0 && (
          <Typography component="h2" sx={{ fontSize: 28, textAlign: 'left' }}>
            Your SA is already over
          </Typography>
        )}
        {startDateDifference > 0 && (
          <Typography component="h2" sx={{ fontSize: 28, textAlign: 'left' }}>
            <span
              style={{ fontWeight: 'bold', color: '#ed1c24', fontSize: 36 }}
            >
              {startDateDifference}
            </span>{' '}
            days to the start of your SA
          </Typography>
        )}
      </Container> */}
    </Box>
  )
}

export default Index

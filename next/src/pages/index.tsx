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
  date: string
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
}

const Index: NextPage = () => {
  const router = useRouter()
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
    <Box css={styles.pageMinHeight} sx={{ backgroundColor: '#ffe0b6' }}>
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
                  date={diary.date}
                  wDay={diary.wDay}
                  userName={diary.user.name}
                  userCountry={diary.user.country}
                  userUni={diary.user.uni}
                  userStartDate={diary.user.startDate}
                  userEndDate={diary.user.endDate}
                  userBio={diary.user.bio}
                  userImage={diary.user.image.url}
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

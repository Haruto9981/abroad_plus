import { Box, Grid, Pagination, Divider } from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import DiaryCard from '@/components/DiaryCard'
import Error from '@/components/Error'
import Layout from '@/components/HomeLayout'
import Loading from '@/components/Loading'
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
  diaries: Diary[]
  favorites: { user_id: number }[]
  diaryComments: object[]
}

type Diary = {
  id: string
  title: string
  content: string
  image: { url: string }
  wordCount: number
  day: number
  monthName: string
  year: number
  wDay: string
  user: {
    id: string
    name: string
    country: string
    uni: string
    bio: string
    image: { url: string }
  }
  status: string
  favorites: number
  diaryComments: number
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
    <Layout pageUrl={'/'}>
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
            <Divider sx={{ my: 2 }} />
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
    </Layout>
  )
}

export default Index

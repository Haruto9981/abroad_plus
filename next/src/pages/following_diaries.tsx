import { Box, Grid, Pagination, Divider, Typography } from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Diary from '@/components/Diary'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { useRequireSignedIn } from '@/hooks/useRequireSignedIn'
import Layout from '@/layout/homeLayout'
import { fetcher } from '@/utils'

type DiaryProps = {
  id: string
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
    first_name: string
    last_name: string
    country: string
    uni: string
    bio: string
    image: {
      url: string
    }
  }
  favorites: { user_id: number }[]
  diaryComments: object[]
}

const Index: NextPage = () => {
  useRequireSignedIn()
  const router = useRouter()
  const page = 'page' in router.query ? Number(router.query.page) : 1
  const url =
    process.env.NEXT_PUBLIC_API_BASE_URL +
    '/current/following_diaries?page=' +
    page
  const { data, error } = useSWR(url, fetcher)

  if (error) return <Error />
  if (!data)
    return (
      <Layout pageUrl="/following_diaries">
        <Loading />
      </Layout>
    )

  const diaries = camelcaseKeys(data.diaries)
  const meta = camelcaseKeys(data.meta)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) =>
    router.push('/following_diaries?page=' + value)

  return (
    <Layout pageUrl={'/following_diaries'}>
      {diaries.length === 0 && (
        <Typography sx={{ textAlign: 'center', color: 'gray', mt: 4, mb: 2 }}>
          No posts
        </Typography>
      )}
      <Grid container>
        {diaries.map((diary: DiaryProps, i: number) => (
          <Grid key={i} item xs={12} md={12}>
            <Link href={'/diaries/' + diary.id}>
              <Diary
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
            </Link>
            <Divider sx={{ my: 2 }} />
          </Grid>
        ))}
      </Grid>
      {diaries.length !== 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
          <Pagination
            count={meta.totalPages}
            page={meta.currentPage}
            onChange={handleChange}
          />
        </Box>
      )}
    </Layout>
  )
}

export default Index

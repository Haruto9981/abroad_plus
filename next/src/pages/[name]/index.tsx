import {
  Box,
  Grid,
  Typography,
  Pagination,
  Card,
  Divider,
  CardContent,
} from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import DiaryCard from '@/components/DiaryCard'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import Layout from '@/components/ProfileLayout'
import { fetcher } from '@/utils'

type DiaryProps = {
  id: number
  title: string
  content: string
  image: {
    url: string
  }
  word_count: number
  day: string
  month_name: string
  month: string
  year: string
  w_day: string
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
  diary_comments: Array<object>
}

const UserProfile: NextPage = () => {
  const router = useRouter()
  const page = 'page' in router.query ? Number(router.query.page) : 1
  const url =
    process.env.NEXT_PUBLIC_API_BASE_URL +
    '/users/' +
    router.query.name +
    '/?page=' +
    page

  const { data, error } = useSWR(url, fetcher)
  if (error) return <Error />
  if (!data) return <Loading />

  const profile = camelcaseKeys(data.profile)
  const meta = camelcaseKeys(data.meta)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) =>
    router.push('/' + router.query.name + '/?page=' + value)

  return (
    <Layout>
      <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20, mb: 2 }}>Diaries</Typography>
          <Divider sx={{ my: 2 }} />
          <Grid container>
            {profile.diaries.map((diary: DiaryProps, i: number) => (
              <Grid key={i} item xs={12} md={12}>
                <Link href={'/diaries/' + diary.id}>
                  <DiaryCard
                    id={diary.id}
                    title={diary.title}
                    content={diary.content}
                    image={diary.image.url}
                    wordCount={diary.word_count}
                    day={diary.day}
                    month={diary.month_name}
                    year={diary.year}
                    wDay={diary.w_day}
                    userName={profile.name}
                    userCountry={profile.country}
                    userUni={profile.uni}
                    userBio={profile.bio}
                    userImage={profile.image.url}
                    favorites={diary.favorites}
                    diaryComments={diary.diary_comments}
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
        </CardContent>
      </Card>
    </Layout>
  )
}

export default UserProfile

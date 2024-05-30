import { Box, Container, Card, Divider, CardContent } from '@mui/material'
import Tabs from '@mui/material/Tabs'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import LinkTab from './HomeLinkTab'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import ProfileCard from '@/components/ProfileCard'
import { useUserState } from '@/hooks/useGlobalState'
import { styles } from '@/styles'
import { fetcher } from '@/utils'

type Props = {
  children: React.ReactNode
  pageUrl: string
}

const Layout = ({ children, pageUrl }: Props) => {
  const router = useRouter()
  const [user] = useUserState()
  const page = 'page' in router.query ? Number(router.query.page) : 1
  const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/diaries/?page=' + page
  const { data, error } = useSWR(url, fetcher)
  if (error) return <Error />
  if (!data) return <Loading />

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
          firstName={user.first_name}
          lastName={user.last_name}
          country={user.country}
          uni={user.uni}
          bio={user.bio}
          startDate={user.start_date}
          endDate={user.end_date}
          image={user.image.url}
          diaries={user.diaries}
          totalDiariesCount={user.total_diaries_count}
          totalLikesCount={user.total_likes_count}
          following={user.following}
          followers={user.followers}
        />
      </Container>
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <Tabs value={pageUrl || false} centered>
              <LinkTab label="All" href="/" value="/" />
              <LinkTab
                label="Following"
                href="/following_diaries"
                value="/following_diaries"
              />
            </Tabs>
            <Divider sx={{ mb: 2 }} />
            <Box>{children}</Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default Layout

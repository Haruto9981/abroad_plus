import { Box, Container, Card, CardContent } from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import ProfileCard from '@/components/ProfileCard'
import { styles } from '@/styles'
import { fetcher } from '@/utils'

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const url =
    process.env.NEXT_PUBLIC_API_BASE_URL + '/users/' + router.query.name
  const { data, error } = useSWR(url, fetcher)

  if (error) return <Error />
  if (!data) return <Loading />

  const profile = camelcaseKeys(data)

  return (
    <Box
      css={styles.pageMinHeight}
      sx={{ backgroundColor: '#ffe0b6', display: { lg: 'flex' } }}
    >
      <Container maxWidth="sm" sx={{ pt: 6 }}>
        <ProfileCard
          id={profile.id}
          name={profile.name}
          firstName={profile.firstName}
          lastName={profile.lastName}
          country={profile.country}
          uni={profile.uni}
          bio={profile.bio}
          startDate={profile.startDate}
          endDate={profile.endDate}
          image={profile.image.url}
          totalDiariesCount={profile.totalDiariesCount}
          totalLikesCount={profile.totalLikesCount}
          following={profile.following}
          followers={profile.followers}
        />
      </Container>
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Card sx={{ borderRadius: 2 }}>
          <CardContent>{children}</CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default Layout

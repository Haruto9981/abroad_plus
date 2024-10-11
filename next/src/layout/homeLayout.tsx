import { Box, Container, Card, Divider } from '@mui/material'
import Tabs from '@mui/material/Tabs'
import LinkTab from '@/components/HomeLinkTab'
import ProfileCard from '@/components/ProfileCard'
import RecommendedUser from '@/components/RecommendedUser'
import { useUserState } from '@/hooks/useGlobalState'
import { styles } from '@/styles'

type LayoutProps = {
  children: React.ReactNode
  pageUrl: string
}

const Layout = ({ children, pageUrl }: LayoutProps) => {
  const [user] = useUserState()

  const getDateDifference = (currentDate: Date, targetDate: Date) => {
    const diffTime = targetDate.getTime() - currentDate.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  // 留学開始まであと何日か
  const startDateDifference = user.start_date
    ? getDateDifference(new Date(), new Date(user.start_date))
    : undefined

  // 留学終了まであと何日か
  const endDateDifference = user.end_date
    ? getDateDifference(new Date(), new Date(user.end_date))
    : undefined

  return (
    <Box
      css={styles.pageMinHeight}
      sx={{ backgroundColor: '#ffe0b6', display: 'flex' }}
    >
      <Container
        sx={{ width: '400px', pt: 4, display: { xs: 'none', lg: 'block' } }}
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
          totalDiariesCount={user.total_diaries_count}
          totalLikesCount={user.total_likes_count}
          following={user.following}
          followers={user.followers}
          startDateDifference={startDateDifference}
          endDateDifference={endDateDifference}
        />
      </Container>
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Card sx={{ borderRadius: 2 }}>
          <Tabs value={pageUrl || false} centered>
            <LinkTab label="All" href="/" value="/" />
            <LinkTab
              label="Following"
              href="/following_diaries"
              value="/following_diaries"
            />
          </Tabs>
          <Divider />
          <Box>{children}</Box>
        </Card>
      </Container>
      <Container
        sx={{ width: '400px', py: 4, display: { xs: 'none', xl: 'block' } }}
      >
        <Card>
          <RecommendedUser />
        </Card>
      </Container>
    </Box>
  )
}

export default Layout

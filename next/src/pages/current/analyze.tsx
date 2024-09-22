import { Box, Container, Card, CardContent } from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import useSWR from 'swr'
import { ChartBar } from '@/components/ChartBar'
import Error from '@/components/Error'
import { FrequentVocab } from '@/components/FrequentVocab'
import Loading from '@/components/Loading'
import { Sentiment } from '@/components/Sentiment'
import { useUserState } from '@/hooks/useGlobalState'
import { useRequireSignedIn } from '@/hooks/useRequireSignedIn'
import { styles } from '@/styles'
import { fetcher } from '@/utils'

const Analyze: NextPage = () => {
  useRequireSignedIn()
  const [user] = useUserState()

  const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/current/diaries'
  const { data, error } = useSWR(user.isSignedIn ? url : null, fetcher)

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <Box
      css={styles.pageMinHeight}
      sx={{ backgroundColor: '#ffe0b6', display: 'flex' }}
    >
      <Container sx={{ py: 6 }}>
        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <ChartBar diaries={camelcaseKeys(data)} />
            <FrequentVocab></FrequentVocab>
            <Sentiment />
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default Analyze

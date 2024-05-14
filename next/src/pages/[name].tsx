import { Box, Typography, Container } from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { styles } from '@/styles'
import { fetcher } from '@/utils'

const UserProfile: NextPage = () => {
  const router = useRouter()
  console.log(router)
  // const url =
  //   process.env.NEXT_PUBLIC_API_BASE_URL + '/users/' + router.query.userId
  // const { data, error } = useSWR(url, fetcher)
  // if (error) return <Error />
  // if (!data) return <Loading />
  return (
    <Box
      css={styles.pageMinHeight}
      sx={{ backgroundColor: '#ffe0b6', display: 'flex' }}
    >
      <Container maxWidth="sm" sx={{ pt: 6 }}>
        <Typography>Hello</Typography>
        <Typography>{router.query.name}</Typography>
      </Container>
    </Box>
  )
}

export default UserProfile

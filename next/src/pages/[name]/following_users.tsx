import { css } from '@emotion/react'
import PersonIcon from '@mui/icons-material/Person'
import {
  Box,
  IconButton,
  Typography,
  Avatar,
  Divider,
  Button,
  Card,
  CardContent,
} from '@mui/material'
import axios, { AxiosError } from 'axios'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import Layout from '@/components/ProfileLayout'
import { useUserState } from '@/hooks/useGlobalState'
import { fetcher } from '@/utils'

const imageCss = css({ marginTop: '4px' })

interface Following {
  id: number
  name: string
  image: {
    url: string
  }
  country: string
  uni: string
  bio: string
}

const Following: NextPage = () => {
  const [user, setUser] = useUserState()
  const router = useRouter()
  const url =
    process.env.NEXT_PUBLIC_API_BASE_URL + '/users/' + router.query.name

  const { data, error } = useSWR(url, fetcher)
  if (error) return <Error />
  if (!data) return <Loading />

  const getUserFollowingIdArray = (userFollowing: object[]): number[] => {
    const array = []
    for (let i = 0; i < userFollowing.length; i++) {
      array.push(user.following[i].id)
    }

    return array
  }

  const urlForFollow =
    process.env.NEXT_PUBLIC_API_BASE_URL + '/current/relationships'

  const headers = {
    'Content-Type': 'application/json',
    'access-token': localStorage.getItem('access-token'),
    client: localStorage.getItem('client'),
    uid: localStorage.getItem('uid'),
  }

  const handleFollowChange = (id: number) => {
    const data = { followed_id: id }
    axios({ method: 'POST', url: urlForFollow, data: data, headers: headers })
      .then(() => {
        setUser({
          ...user,
          following: [...user.following, { id: id }],
        })
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log(e.message)
      })
  }

  const handleUnfollowChange = (id: number) => {
    const data = { followed_id: id }
    axios({ method: 'DELETE', url: urlForFollow, data: data, headers: headers })
      .then(() => {
        setUser({
          ...user,
          following: user.following.filter((following) => following.id !== id),
        })
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log(e.message)
      })
  }

  return (
    <Layout>
      <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20, mb: 2 }}>Following</Typography>
          {data.profile.following.length === 0 && (
            <Typography sx={{ textAlign: 'center', color: 'gray', my: 2 }}>
              No following users
            </Typography>
          )}
          {data.profile.following.map((following: Following, i: number) => (
            <>
              <Divider sx={{ mt: 2 }} />
              <Box key={i} sx={{ display: 'flex', mt: 1 }}>
                <Link href={`/${following.name}`}>
                  <IconButton>
                    {following.image.url ? (
                      <Avatar
                        src={following.image.url}
                        sx={{ width: 50, height: 50 }}
                      ></Avatar>
                    ) : (
                      <Avatar sx={{ width: 50, height: 50 }}>
                        <PersonIcon />
                      </Avatar>
                    )}
                  </IconButton>
                </Link>
                <Box sx={{ width: '100%', mt: 1 }}>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Box sx={{ display: 'flex' }}>
                      <Link href={`/${following.name}`}>
                        <Typography
                          sx={{
                            mr: 1,
                            fontSize: 16,
                            fontWeight: 'bold',
                            '&:hover': {
                              textDecoration: 'underline',
                            },
                          }}
                        >
                          {following.name}
                        </Typography>
                      </Link>
                      {following.country && (
                        <Image
                          css={imageCss}
                          src={`/${following.country.toLowerCase()}.png`}
                          height={15}
                          width={30}
                          alt="国旗"
                        />
                      )}
                      {following.uni && (
                        <Typography
                          sx={{
                            color: 'white',
                            ml: 1,
                            backgroundColor: 'orange',
                            p: 0.3,
                            fontSize: 11,
                            fontWeight: 'bold',
                            borderRadius: 0.5,
                          }}
                        >
                          {following.uni}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  <Box>
                    <Typography>{following.bio}</Typography>
                  </Box>
                </Box>
                {user.id !== following.id &&
                  (!getUserFollowingIdArray(user.following).includes(
                    following.id,
                  ) ? (
                    <Button
                      onClick={() => handleFollowChange(following.id)}
                      variant="contained"
                      color="warning"
                      type="submit"
                      sx={{
                        fontWeight: 'bold',
                        color: 'white',
                        textTransform: 'none',
                        width: '25%',
                        my: 2,
                      }}
                    >
                      follow
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleUnfollowChange(following.id)}
                      variant="outlined"
                      color="warning"
                      type="submit"
                      sx={{
                        fontWeight: 'bold',
                        textTransform: 'none',
                        boxShadow: 'none',
                        border: '1.5px solid #f5a500',
                        width: '25%',
                        height: '25%',
                        my: 2,
                      }}
                    >
                      unfollow
                    </Button>
                  ))}
              </Box>
            </>
          ))}
        </CardContent>
      </Card>
    </Layout>
  )
}

export default Following

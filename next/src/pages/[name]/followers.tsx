import { css } from '@emotion/react'
import PersonIcon from '@mui/icons-material/Person'
import {
  Box,
  IconButton,
  Typography,
  Avatar,
  Pagination,
  Divider,
  Button,
  Tooltip,
} from '@mui/material'
import axios, { AxiosError } from 'axios'
import camelcaseKeys from 'camelcase-keys'
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
}

interface User {
  following: Following[]
}

type Followers = {
  id: number
  name: string
  image: {
    url: string
  }
  country: string
  uni: string
  bio: string
}

const Followers: NextPage = () => {
  const router = useRouter()
  const [user, setUser] = useUserState()
  const page = 'page' in router.query ? Number(router.query.page) : 1
  const url =
    process.env.NEXT_PUBLIC_API_BASE_URL +
    '/users/' +
    router.query.name +
    '/followers?page=' +
    page

  const { data, error } = useSWR(url, fetcher)
  if (error)
    return (
      <Layout>
        <Error />
      </Layout>
    )
  if (!data)
    return (
      <Layout>
        <Loading />
      </Layout>
    )

  const followers = camelcaseKeys(data.users)
  const meta = camelcaseKeys(data.meta)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) =>
    router.push('/' + router.query.name + '/followers?page=' + value)

  const getUserFollowingIdArray = (user: User): number[] => {
    const array = []
    for (let i = 0; i < user.following.length; i++) {
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
      <Typography sx={{ fontSize: 20, mb: 2 }}>Followers</Typography>
      {followers.length === 0 && (
        <Typography sx={{ textAlign: 'center', color: 'gray', my: 2 }}>
          No followers
        </Typography>
      )}
      {followers.map((follower: Followers, i: number) => (
        <>
          <Divider sx={{ mt: 2 }} />
          <Box key={i} sx={{ display: 'flex', mt: 1 }}>
            <Link href={`/${follower.name}`}>
              <IconButton>
                {follower.image.url ? (
                  <Avatar
                    src={follower.image.url}
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
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex' }}>
                  <Link href={`/${follower.name}`}>
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
                      @{follower.name}
                    </Typography>
                  </Link>
                  {follower.country && (
                    <Tooltip title={follower.country}>
                      <Image
                        css={imageCss}
                        src={`/${follower.country.toLowerCase()}.png`}
                        height={15}
                        width={30}
                        alt="国旗"
                      />
                    </Tooltip>
                  )}
                  {follower.uni && (
                    <Box sx={{ mx: 1 }}>
                      <Tooltip title={follower.uni}>
                        <Image
                          src={`/${follower.uni.toLowerCase()}.png`}
                          height={22}
                          width={22}
                          alt="Uni flag"
                        />
                      </Tooltip>
                    </Box>
                  )}
                </Box>
              </Box>
              <Box>
                <Typography>{follower.bio}</Typography>
              </Box>
            </Box>
            {user.id !== follower.id &&
              (!getUserFollowingIdArray(user).includes(follower.id) ? (
                <Button
                  onClick={() => handleFollowChange(follower.id)}
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
                  onClick={() => handleUnfollowChange(follower.id)}
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
      {followers.length !== 0 && (
        <>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
            <Pagination
              count={meta.totalPages}
              page={meta.currentPage}
              onChange={handleChange}
            />
          </Box>
        </>
      )}
    </Layout>
  )
}

export default Followers

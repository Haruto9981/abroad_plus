import { css } from '@emotion/react'
import PersonIcon from '@mui/icons-material/Person'
import {
  Box,
  IconButton,
  Typography,
  Avatar,
  Divider,
  Pagination,
  Button,
  Tooltip,
} from '@mui/material'
import axios, { AxiosError } from 'axios'
import camelcaseKeys from 'camelcase-keys'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { useUserState } from '@/hooks/useGlobalState'
import { fetcher } from '@/utils'

const imageCss = css({ marginTop: '4px' })

type diaryIdProps = {
  id: string
}

interface Favorite {
  user: {
    id: number
    name: string
    image: {
      url: string
    }
    country: string
    uni: string
  }
}

const LikesModal = (props: diaryIdProps) => {
  const [user, setUser] = useUserState()
  const router = useRouter()
  const page = 'page' in router.query ? Number(router.query.page) : 1
  const url =
    process.env.NEXT_PUBLIC_API_BASE_URL +
    '/diaries/' +
    props.id +
    '/favorites?page=' +
    page

  const { data, error } = useSWR(url, fetcher)
  if (error) return <Error />
  if (!data) return <Loading />

  const favorites = camelcaseKeys(data.favorites)
  const meta = camelcaseKeys(data.meta)

  console.log(favorites)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) =>
    router.push('/diaries/' + props.id + '/favorites?page=' + value)

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

  const handleFollowChange = (id: number, e: React.MouseEvent) => {
    e.preventDefault()
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

  const handleUnfollowChange = (id: number, e: React.MouseEvent) => {
    e.preventDefault()
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
    <Box>
      <Typography sx={{ fontSize: 20, mb: 2 }}>Likes</Typography>
      {favorites.length === 0 && (
        <Typography sx={{ textAlign: 'center', color: 'gray', my: 2 }}>
          No likes
        </Typography>
      )}
      {favorites.map((favorite: Favorite, i: number) => (
        <>
          <Divider sx={{ mt: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box key={i} sx={{ display: 'flex', mt: 1 }}>
              <Link href={`/${favorite.user.name}`}>
                <IconButton>
                  {favorite.user.image.url ? (
                    <Avatar
                      src={favorite.user.image.url}
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
                <Box sx={{ display: { sm: 'flex' } }}>
                  <Link href={`/${favorite.user.name}`}>
                    <Typography
                      sx={{
                        mr: 1,
                        fontSize: { xs: 14, sm: 16 },
                        fontWeight: 'bold',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      @{favorite.user.name}
                    </Typography>
                  </Link>
                  <Box sx={{ display: 'flex' }}>
                    {favorite.user.country && (
                      <Tooltip title={favorite.user.country}>
                        <Image
                          css={imageCss}
                          src={`/${favorite.user.country.toLowerCase()}.png`}
                          height={15}
                          width={30}
                          alt="国旗"
                        />
                      </Tooltip>
                    )}
                    {favorite.user.uni && (
                      <Box sx={{ mx: 1 }}>
                        <Tooltip title={favorite.user.uni}>
                          <Image
                            src={`/${favorite.user.uni.toLowerCase()}.png`}
                            height={22}
                            width={22}
                            alt="Uni flag"
                          />
                        </Tooltip>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
            {user.id !== favorite.user.id &&
              (!getUserFollowingIdArray(user.following).includes(
                favorite.user.id,
              ) ? (
                <Button
                  onClick={(e) => handleFollowChange(favorite.user.id, e)}
                  variant="contained"
                  color="warning"
                  type="submit"
                  sx={{
                    fontWeight: 'bold',
                    color: 'white',
                    textTransform: 'none',
                    width: 100,
                    height: 40,
                    my: 2,
                  }}
                >
                  follow
                </Button>
              ) : (
                <Button
                  onClick={(e) => handleUnfollowChange(favorite.user.id, e)}
                  variant="outlined"
                  color="warning"
                  type="submit"
                  sx={{
                    fontWeight: 'bold',
                    textTransform: 'none',
                    boxShadow: 'none',
                    border: '1.5px solid #f5a500',
                    width: 100,
                    height: 40,
                    my: 2,
                  }}
                >
                  unfollow
                </Button>
              ))}
          </Box>
        </>
      ))}
      {favorites.length !== 0 && (
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
    </Box>
  )
}

export default LikesModal

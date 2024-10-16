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
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { useUserState } from '@/hooks/useGlobalState'
import { useRequireSignedIn } from '@/hooks/useRequireSignedIn'
import Layout from '@/layout/profileLayout'
import { fetcher } from '@/utils'
import {
  handleFollowChange,
  handleUnfollowChange,
  getUserFollowingIdArray,
} from '@/utils/follow'

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
  useRequireSignedIn()
  const [user, setUser] = useUserState()
  const router = useRouter()
  const page = 'page' in router.query ? Number(router.query.page) : 1
  const url =
    process.env.NEXT_PUBLIC_API_BASE_URL +
    '/users/' +
    router.query.name +
    '/following?page=' +
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

  const following_users = camelcaseKeys(data.users)
  const meta = camelcaseKeys(data.meta)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) =>
    router.push('/' + router.query.name + '/following_users?page=' + value)

  return (
    <Layout>
      <Typography sx={{ fontSize: 20, p: 2 }}>Following</Typography>
      <Divider />
      {following_users.length === 0 && (
        <Typography sx={{ textAlign: 'center', color: 'gray', my: 2 }}>
          No following users
        </Typography>
      )}
      {following_users.map((following_user: Following, i: number) => (
        <Link href={`/${following_user.name}`} key={i}>
          <Box
            sx={{
              display: 'flex',
              p: 1,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
              },
            }}
          >
            <IconButton>
              {following_user.image.url ? (
                <Avatar
                  src={following_user.image.url}
                  sx={{ width: 50, height: 50 }}
                ></Avatar>
              ) : (
                <Avatar sx={{ width: 50, height: 50 }}>
                  <PersonIcon />
                </Avatar>
              )}
            </IconButton>

            <Box sx={{ width: '100%', mt: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex' }}>
                  <Link href={`/${following_user.name}`}>
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
                      @{following_user.name}
                    </Typography>
                  </Link>
                  {following_user.country && (
                    <Tooltip title={following_user.country}>
                      <Image
                        css={imageCss}
                        src={`/${following_user.country.toLowerCase()}.png`}
                        height={15}
                        width={30}
                        alt="国旗"
                      />
                    </Tooltip>
                  )}
                  {following_user.uni && (
                    <Box sx={{ mx: 1 }}>
                      <Tooltip title={following_user.uni}>
                        <Image
                          src={`/${following_user.uni.toLowerCase()}.png`}
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
                <Typography>{following_user.bio}</Typography>
              </Box>
            </Box>
            {user.id !== following_user.id &&
              (!getUserFollowingIdArray(user.following, user).includes(
                following_user.id,
              ) ? (
                <Button
                  onClick={(e) =>
                    handleFollowChange(following_user.id, e, user, setUser)
                  }
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
                  onClick={(e) =>
                    handleUnfollowChange(following_user.id, e, user, setUser)
                  }
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
        </Link>
      ))}
      {following_users.length !== 0 && (
        <>
          <Divider />
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
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

export default Following

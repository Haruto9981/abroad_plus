import { css } from '@emotion/react'
import PersonIcon from '@mui/icons-material/Person'
import {
  Typography,
  Divider,
  Button,
  Box,
  IconButton,
  Avatar,
  Tooltip,
} from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { useUserState } from '@/hooks/useGlobalState'
import { fetcher } from '@/utils'
import {
  handleFollowChange,
  handleUnfollowChange,
  getUserFollowingIdArray,
} from '@/utils/follow'

const imageCss = css({ marginTop: '4px' })

type RecommendedUsers = {
  id: number
  name: string
  image: {
    url: string
  }
  country: string
  uni: string
}

const RecommendedUser = () => {
  const [user, setUser] = useUserState()
  const url =
    process.env.NEXT_PUBLIC_API_BASE_URL + '/current/recommended_users'

  const { data, error } = useSWR(url, fetcher)
  if (error) return <Error />
  if (!data) return <Loading />

  const recommendedUsers = camelcaseKeys(data)

  return (
    <Box>
      <Typography sx={{ fontSize: 18, m: 2 }}>Who to follow</Typography>
      <Divider sx={{ mt: 2 }} />
      {recommendedUsers.length === 0 && (
        <Typography sx={{ textAlign: 'center', color: 'gray', mt: 4, mb: 2 }}>
          No users
        </Typography>
      )}
      {recommendedUsers.map((recommendedUser: RecommendedUsers, i: number) => (
        <Link href={`/${recommendedUser.name}`} key={i}>
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
              {recommendedUser.image.url ? (
                <Avatar
                  src={recommendedUser.image.url}
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
                <Box>
                  <Link href={`/${recommendedUser.name}`}>
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
                      @{recommendedUser.name}
                    </Typography>
                  </Link>
                  <Box sx={{ display: 'flex' }}>
                    {recommendedUser.country && (
                      <Tooltip title={recommendedUser.country}>
                        <Image
                          css={imageCss}
                          src={`/${recommendedUser.country.toLowerCase()}.png`}
                          height={15}
                          width={30}
                          alt="国旗"
                        />
                      </Tooltip>
                    )}
                    {recommendedUser.uni && (
                      <Box sx={{ mx: 1 }}>
                        <Tooltip title={recommendedUser.uni}>
                          <Image
                            src={`/${recommendedUser.uni.toLowerCase()}.png`}
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
            {user.id !== recommendedUser.id &&
              (!getUserFollowingIdArray(user.following, user).includes(
                recommendedUser.id,
              ) ? (
                <Button
                  onClick={(e) =>
                    handleFollowChange(recommendedUser.id, e, user, setUser)
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
                    handleUnfollowChange(recommendedUser.id, e, user, setUser)
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
    </Box>
  )
}

export default RecommendedUser

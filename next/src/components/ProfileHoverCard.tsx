import { css } from '@emotion/react'
import PersonIcon from '@mui/icons-material/Person'
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Avatar,
  Tooltip,
  Button,
  Typography,
} from '@mui/material'
import axios, { AxiosError } from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useUserState } from '@/hooks/useGlobalState'

type ProfileHoverCardProps = {
  userId: number
  userName: string
  userFirstName: string
  userLastName: string
  userCountry: string
  userUni: string
  userBio: string
  userImage: string
  handleClose: React.MouseEventHandler<HTMLDivElement>
}
const imageCss = css({ marginTop: '4px' })

const ProfileHoverCard = (props: ProfileHoverCardProps) => {
  const [user, setUser] = useUserState()

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
    <Box onMouseLeave={props.handleClose}>
      <Card sx={{ borderRadius: 2, width: 400 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Link href={`/${props.userName}`}>
                <IconButton sx={{ p: 0 }}>
                  {props.userImage ? (
                    <Avatar
                      src={props.userImage}
                      sx={{ width: 50, height: 50 }}
                    ></Avatar>
                  ) : (
                    <Avatar sx={{ width: 50, height: 50 }}>
                      <PersonIcon />
                    </Avatar>
                  )}
                </IconButton>
              </Link>
              <Box>
                <Box sx={{ display: 'flex' }}>
                  <Box>
                    <Link href={`/${props.userName}`}>
                      <Box sx={{ display: 'flex', mt: 1 }}>
                        <Typography
                          sx={{
                            fontSize: 15,
                            mr: 1,
                            fontWeight: 'bold',
                            color: 'black',
                            '&:hover': {
                              textDecoration: 'underline',
                            },
                          }}
                        >
                          {props.userFirstName} {props.userLastName}
                        </Typography>
                        {props.userCountry &&
                          (props.userFirstName || props.userLastName) && (
                            <Tooltip title={props.userCountry}>
                              <Image
                                css={imageCss}
                                src={`/${props.userCountry.toLowerCase()}.png`}
                                height={15}
                                width={30}
                                alt="国旗"
                              />
                            </Tooltip>
                          )}
                        {props.userUni &&
                          (props.userFirstName || props.userLastName) && (
                            <Box sx={{ mx: 1 }}>
                              <Tooltip title={props.userUni}>
                                <Image
                                  src={`/${props.userUni.toLowerCase()}.png`}
                                  height={22}
                                  width={22}
                                  alt="Uni flag"
                                />
                              </Tooltip>
                            </Box>
                          )}
                      </Box>
                      {props.userFirstName || props.userLastName ? (
                        <Typography
                          sx={{
                            mr: 1,
                            fontSize: 15,
                            color: 'gray',
                            '&:hover': {
                              textDecoration: 'underline',
                            },
                          }}
                        >
                          @{props.userName}
                        </Typography>
                      ) : (
                        <Typography
                          sx={{
                            mr: 1,
                            fontSize: 15,
                            fontWeight: 'bold',
                            '&:hover': {
                              textDecoration: 'underline',
                            },
                          }}
                        >
                          @{props.userName}
                        </Typography>
                      )}
                    </Link>
                  </Box>
                  {!(props.userFirstName || props.userLastName) && (
                    <Box sx={{ display: 'flex', mt: 1 }}>
                      {props.userCountry && (
                        <Tooltip title={props.userCountry}>
                          <Image
                            css={imageCss}
                            src={`/${props.userCountry.toLowerCase()}.png`}
                            height={15}
                            width={30}
                            alt="国旗"
                          />
                        </Tooltip>
                      )}
                      {props.userUni && (
                        <Box sx={{ mx: 1 }}>
                          <Tooltip title={props.userUni}>
                            <Image
                              src={`/${props.userUni.toLowerCase()}.png`}
                              height={22}
                              width={22}
                              alt="Uni flag"
                            />
                          </Tooltip>
                        </Box>
                      )}
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
            <Box>
              {user.id !== props.userId &&
                (!getUserFollowingIdArray(user.following).includes(
                  props.userId,
                ) ? (
                  <Button
                    onClick={(e) => handleFollowChange(props.userId, e)}
                    variant="contained"
                    color="warning"
                    type="submit"
                    sx={{
                      fontWeight: 'bold',
                      color: 'white',
                      textTransform: 'none',
                      width: 100,
                      height: 40,
                    }}
                  >
                    follow
                  </Button>
                ) : (
                  <Button
                    onClick={(e) => handleUnfollowChange(props.userId, e)}
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
                    }}
                  >
                    unfollow
                  </Button>
                ))}
            </Box>
          </Box>
          <Box sx={{ mt: 1 }}>
            <Typography>{props.userBio}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default ProfileHoverCard

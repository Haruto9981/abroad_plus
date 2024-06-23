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
import Image from 'next/image'
import Link from 'next/link'
import { useUserState } from '@/hooks/useGlobalState'
import {
  handleFollowChange,
  handleUnfollowChange,
  getUserFollowingIdArray,
} from '@/utils/follow'

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
                (!getUserFollowingIdArray(user.following, user).includes(
                  props.userId,
                ) ? (
                  <Button
                    onClick={(e) =>
                      handleFollowChange(props.userId, e, user, setUser)
                    }
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
                    onClick={(e) =>
                      handleUnfollowChange(props.userId, e, user, setUser)
                    }
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
            <Typography sx={{ overflowWrap: 'break-word' }}>
              {props.userBio}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default ProfileHoverCard

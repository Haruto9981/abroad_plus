import PersonIcon from '@mui/icons-material/Person'
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Avatar,
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

type profileCardProps = {
  id: number
  name: string
  firstName: string
  lastName: string
  country: string
  uni: string
  bio: string
  startDate: string
  endDate: string
  image: string
  totalDiariesCount: number
  totalLikesCount: number
  following: object[]
  followers: object[]
  startDateDifference?: number | undefined
  endDateDifference?: number | undefined
}

const ProfileCard = ({
  id,
  name,
  firstName,
  lastName,
  country,
  uni,
  bio,
  startDate,
  endDate,
  image,
  totalDiariesCount,
  totalLikesCount,
  following,
  followers,
  startDateDifference,
  endDateDifference,
}: profileCardProps) => {
  const [user, setUser] = useUserState()

  return (
    <Link href={`/${name}`}>
      <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton sx={{ p: 0 }}>
              {image ? (
                <Avatar src={image} sx={{ width: 100, height: 100 }}></Avatar>
              ) : (
                <Avatar sx={{ width: 100, height: 100 }}>
                  <PersonIcon />
                </Avatar>
              )}
            </IconButton>
          </Box>
          <Link href={`/${name}`}>
            <Typography
              sx={{
                display: 'flex',
                justifyContent: 'center',
                my: 1,
                fontSize: 18,
                fontWeight: 'bold',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
          </Link>
          <Link href={`/${name}`}>
            {firstName || lastName ? (
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  my: 1,
                  fontSize: 18,
                  color: 'gray',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                @{name}
              </Typography>
            ) : (
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  my: 1,
                  fontSize: 18,
                  fontWeight: 'bold',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                @{name}
              </Typography>
            )}
          </Link>
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
            {country && (
              <Box sx={{ mx: 1 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Image
                    src={`/${country.toLowerCase()}.png`}
                    height={25}
                    width={40}
                    alt="国旗"
                  />
                </Box>
                <Typography sx={{ textAlign: 'center', mt: 1 }}>
                  {country}
                </Typography>
              </Box>
            )}
            {uni && (
              <Box sx={{ mx: 1 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Image
                    src={`/${uni.toLowerCase()}.png`}
                    height={25}
                    width={25}
                    alt="Uni flag"
                  />
                </Box>
                <Typography sx={{ textAlign: 'center', mt: 1 }}>
                  {uni}
                </Typography>
              </Box>
            )}
          </Box>

          <Box>
            {startDate && endDate && (
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                {startDate} ~ {endDate}
              </Box>
            )}
            {/* currentUserのHome画面のみで表示 */}
            {startDateDifference && endDateDifference && (
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                {startDateDifference <= 0 && endDateDifference > 0 && (
                  <Typography component="h2">
                    <span
                      style={{
                        fontWeight: 'bold',
                        color: '#ed1c24',
                        fontSize: 20,
                      }}
                    >
                      {endDateDifference}
                    </span>{' '}
                    days left to the end of your SA
                  </Typography>
                )}
                {startDateDifference > 0 && (
                  <Typography component="h2">
                    <span
                      style={{
                        fontWeight: 'bold',
                        color: '#ed1c24',
                        fontSize: 20,
                      }}
                    >
                      {startDateDifference}
                    </span>{' '}
                    days to the start of your SA
                  </Typography>
                )}
              </Box>
            )}
          </Box>
          <Box sx={{ borderTop: 1, borderColor: 'gray' }}>
            <Typography
              sx={{ textAlign: 'center', my: 2, overflowWrap: 'break-word' }}
            >
              {bio}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ px: 2, borderRight: 1, borderColor: 'gray' }}>
                <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                  {totalDiariesCount}
                </Typography>
                <Link href={`/${name}`}>
                  <Typography
                    sx={{
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Diary
                  </Typography>
                </Link>
              </Box>
              <Box sx={{ px: 2, borderRight: 1, borderColor: 'gray' }}>
                <Link href={`/${name}/following_users`}>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}
                  >
                    {following.length}
                  </Typography>
                  <Typography
                    sx={{
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Follow
                  </Typography>
                </Link>
              </Box>
              <Box sx={{ px: 2, borderRight: 1, borderColor: 'gray' }}>
                <Link href={`/${name}/followers`}>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}
                  >
                    {followers.length}
                  </Typography>
                  <Typography
                    sx={{
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Follower
                  </Typography>
                </Link>
              </Box>
              <Box sx={{ px: 2, borderRight: 1, borderColor: 'gray' }}>
                <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                  {totalLikesCount}
                </Typography>
                <Typography>Like</Typography>
              </Box>
            </Box>
          </Box>

          {id === user.id && (
            <Link href="/profile">
              <Button
                variant="contained"
                color="warning"
                type="submit"
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                  textTransform: 'none',
                  width: '100%',
                  my: 2,
                }}
              >
                Change your profile
              </Button>
            </Link>
          )}
          {id !== user.id &&
            (!getUserFollowingIdArray(user.following, user).includes(id) ? (
              <Button
                onClick={(e) => handleFollowChange(id, e, user, setUser)}
                variant="contained"
                color="warning"
                type="submit"
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                  textTransform: 'none',
                  width: '100%',
                  my: 2,
                }}
              >
                follow
              </Button>
            ) : (
              <Button
                onClick={(e) => handleUnfollowChange(id, e, user, setUser)}
                variant="outlined"
                color="warning"
                type="submit"
                sx={{
                  fontWeight: 'bold',
                  textTransform: 'none',
                  boxShadow: 'none',
                  border: '1.5px solid #f5a500',
                  width: '100%',
                  my: 2,
                }}
              >
                unfollow
              </Button>
            ))}
        </CardContent>
      </Card>
    </Link>
  )
}

export default ProfileCard

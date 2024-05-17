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

type profileCardProps = {
  id: number
  name: string
  country: string | null
  uni: string | null
  bio: string | null
  startDate: string | null
  endDate: string | null
  image: string | null
}

const ProfileCard = (props: profileCardProps) => {
  const [user] = useUserState()

  const getDateDifference = (date1: Date, date2: Date) => {
    const d1 = new Date(date1)
    const d2 = new Date(date2)

    const diffTime = d2.getTime() - d1.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    return diffDays
  }

  const currentDate = new Date()
  const startDate = new Date(user.start_date)
  const endDate = new Date(user.end_date)
  const startDateDifference = getDateDifference(currentDate, startDate)
  const endDateDifference = getDateDifference(currentDate, endDate)

  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton sx={{ p: 0 }}>
            {props.image ? (
              <Avatar
                src={props.image}
                sx={{ width: 100, height: 100 }}
              ></Avatar>
            ) : (
              <Avatar sx={{ width: 100, height: 100 }}>
                <PersonIcon />
              </Avatar>
            )}
          </IconButton>
        </Box>
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            my: 2,
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          {props.name}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          {props.country && (
            <Box sx={{ mx: 1 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Image
                  src={`/${props.country.toLowerCase()}.png`}
                  height={25}
                  width={40}
                  alt="国旗"
                />
              </Box>
              <Typography sx={{ textAlign: 'center', mt: 1 }}>
                {props.country}
              </Typography>
            </Box>
          )}
          {props.uni && (
            <Box sx={{ mx: 1 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Image
                  src={`/${props.uni.toLowerCase()}.png`}
                  height={25}
                  width={25}
                  alt="Uni flag"
                />
              </Box>
              <Typography sx={{ textAlign: 'center', mt: 1 }}>
                {props.uni}
              </Typography>
            </Box>
          )}
        </Box>
        {props.startDate && props.endDate && (
          <Box>
            <Typography
              sx={{ display: 'flex', justifyContent: 'center', my: 2 }}
            >
              {props.startDate} ~ {props.endDate}
            </Typography>
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
          </Box>
        )}
        <Box sx={{ borderTop: 1, borderColor: 'gray' }}>
          <Typography sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
            {props.bio}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ px: 2, borderRight: 1, borderColor: 'gray' }}>
              <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                122
              </Typography>
              <Typography>Diary</Typography>
            </Box>
            <Box sx={{ px: 2, borderRight: 1, borderColor: 'gray' }}>
              <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                33
              </Typography>
              <Typography>Follow</Typography>
            </Box>
            <Box sx={{ px: 2, borderRight: 1, borderColor: 'gray' }}>
              <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                24
              </Typography>
              <Typography>Follower</Typography>
            </Box>
            <Box sx={{ px: 2, borderRight: 1, borderColor: 'gray' }}>
              <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                112
              </Typography>
              <Typography>Likes</Typography>
            </Box>
          </Box>
        </Box>

        {props.id === user.id && (
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
        {props.id !== user.id && (
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
            follow
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

export default ProfileCard
import { css } from '@emotion/react'
import CommentIcon from '@mui/icons-material/Comment'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PersonIcon from '@mui/icons-material/Person'
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Avatar,
  Typography,
} from '@mui/material'
import Image from 'next/image'

type diaryCardProps = {
  id: number
  title: string
  content: string
  image: string
  wordCount: number
  date: string
  wDay: string
  userName: string
  userCountry: string
  userUni: string
  userStartDate: string
  userEndDate: string
  userBio: string
  userImage: string
}

const imageCss = css({ marginTop: '4px' })

const omit = (text: string) => (len: number) => (ellipsis: string) =>
  text.length >= len ? text.slice(0, len - ellipsis.length) + ellipsis : text

const DiaryCard = (props: diaryCardProps) => {
  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex' }}>
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
          <Box>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ fontSize: 15, mx: 1, fontWeight: 'bold' }}>
                {props.userName}
              </Typography>
              {props.userCountry === 'USA' && (
                <Image
                  css={imageCss}
                  src="/usa.png"
                  height={15}
                  width={30}
                  alt="国旗"
                />
              )}
              {props.userCountry === 'UK' && (
                <Image
                  css={imageCss}
                  src="/uk.png"
                  height={15}
                  width={30}
                  alt="国旗"
                />
              )}
              {props.userCountry === 'Australia' && (
                <Image
                  css={imageCss}
                  src="/australia.png"
                  height={15}
                  width={30}
                  alt="国旗"
                />
              )}
              {props.userCountry === 'Canada' && (
                <Image
                  css={imageCss}
                  src="/canada.png"
                  height={15}
                  width={30}
                  alt="国旗"
                />
              )}
              {props.userCountry === 'NewZealand' && (
                <Image
                  css={imageCss}
                  src="/newzealand.png"
                  height={15}
                  width={30}
                  alt="国旗"
                />
              )}
              {props.userUni && (
                <Typography
                  sx={{
                    color: 'white',
                    mx: 1,
                    backgroundColor: 'orange',
                    p: 0.3,
                    fontSize: 11,
                    fontWeight: 'bold',
                    borderRadius: 0.5,
                  }}
                >
                  {props.userUni}
                </Typography>
              )}
            </Box>
            <Box sx={{ display: 'flex', mx: 1, color: 'gray' }}>
              <Typography sx={{ fontSize: 15, mr: 1 }}>{props.date}</Typography>
              <Typography sx={{ fontSize: 15, mr: 1 }}>{props.wDay}</Typography>
            </Box>
          </Box>
        </Box>
        <Typography
          component="h3"
          sx={{
            my: 1,
            fontSize: 20,
            fontWeight: 'bold',
            lineHeight: 1.5,
          }}
        >
          {omit(props.title)(40)('...')}
        </Typography>
        <Typography>
          {omit(props.content)(200)('...')} ({props.wordCount} words)
        </Typography>
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton>
          <CommentIcon />
        </IconButton>
      </CardContent>
    </Card>
  )
}

export default DiaryCard

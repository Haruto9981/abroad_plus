import { css } from '@emotion/react'
import CommentIcon from '@mui/icons-material/Comment'
import FavoriteIcon from '@mui/icons-material/Favorite'
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
import axios, { AxiosError } from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect, MouseEventHandler } from 'react'
import { useUserState } from '@/hooks/useGlobalState'

type diaryCardProps = {
  id: number
  title: string
  content: string
  image: string
  wordCount: number
  day: string
  month: string
  year: string
  wDay: string
  userName: string
  userCountry: string
  userUni: string
  userStartDate: string
  userEndDate: string
  userBio: string
  userImage: string
  favorites: { user_id: number }[]
}

const imageCss = css({ marginTop: '4px' })

const omit = (text: string) => (len: number) => (ellipsis: string) =>
  text.length >= len ? text.slice(0, len - ellipsis.length) + ellipsis : text

const DiaryCard = (props: diaryCardProps) => {
  const router = useRouter()
  const [user] = useUserState()
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [LikedCount, setLikedCount] = useState<number>(0)

  useEffect(() => {
    const favorites = props.favorites
    const liked: boolean = favorites.some(
      (favorite) => favorite.user_id === user.id,
    )
    setIsLiked(liked)
    setLikedCount(favorites.length)
  }, [user.id, props.favorites])

  const url =
    process.env.NEXT_PUBLIC_API_BASE_URL + '/diaries/' + props.id + '/favorites'

  const headers = {
    'Content-Type': 'application/json',
    'access-token': localStorage.getItem('access-token'),
    client: localStorage.getItem('client'),
    uid: localStorage.getItem('uid'),
  }

  const handleLikedChange: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    axios({ method: 'POST', url: url, headers: headers })
      .then(() => {
        setIsLiked(!isLiked)
        setLikedCount(LikedCount + 1)
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log(e.message)
      })
  }

  const handleDislikedChange: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    axios({ method: 'DELETE', url: url, headers: headers })
      .then(() => {
        setIsLiked(!isLiked)
        setLikedCount(LikedCount - 1)
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log(e.message)
      })
  }

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
              {props.userCountry && (
                <Image
                  css={imageCss}
                  src={`/${props.userCountry.toLowerCase()}.png`}
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
              <Typography sx={{ fontSize: 15, mr: 1 }}>{props.day}</Typography>
              <Typography sx={{ fontSize: 15, mr: 1 }}>
                {props.month}
              </Typography>
              <Typography sx={{ fontSize: 15, mr: 1 }}>{props.year}</Typography>
              <Typography sx={{ fontSize: 15, mr: 1 }}>{props.wDay}</Typography>
            </Box>
          </Box>
        </Box>
        {props.image && (
          <Box
            sx={{
              my: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* なぜかImageだとうまく画像を読み込めない。nextのpublicから探してるっぽい。style.cssからレスポンシブデザイン適応 */}
            <img // eslint-disable-line
              alt="日記画像"
              src={props.image}
              className="image"
            />
          </Box>
        )}
        <Typography
          component="h3"
          sx={{
            my: 1,
            fontSize: 20,
            fontWeight: 'bold',
            lineHeight: 1.5,
          }}
        >
          {router.pathname === '/' && omit(props.title)(40)('...')}{' '}
          {router.pathname !== '/' && props.title}
        </Typography>
        <Typography>
          {router.pathname === '/' && omit(props.content)(305)('...')}{' '}
          {router.pathname !== '/' && props.content} ({props.wordCount} words)
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Box>
            {!isLiked && (
              <IconButton onClick={handleLikedChange}>
                <FavoriteBorderIcon />
              </IconButton>
            )}
            {isLiked && (
              <IconButton onClick={handleDislikedChange}>
                <FavoriteIcon color="secondary" />
              </IconButton>
            )}
          </Box>
          <Typography sx={{ mt: 1 }}>{LikedCount}</Typography>
          <IconButton>
            <CommentIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  )
}

export default DiaryCard

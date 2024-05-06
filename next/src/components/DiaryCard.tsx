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
import camelcaseKeys from 'camelcase-keys'
import Image from 'next/image'
import { useState, useEffect, MouseEventHandler } from 'react'
import useSWR from 'swr'
import { useUserState } from '@/hooks/useGlobalState'
import { fetcher } from '@/utils'

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

type favoriteType = {
  userId: number
  diaryId: number
}

const imageCss = css({ marginTop: '4px' })

const omit = (text: string) => (len: number) => (ellipsis: string) =>
  text.length >= len ? text.slice(0, len - ellipsis.length) + ellipsis : text

const DiaryCard = (props: diaryCardProps) => {
  const [user] = useUserState()
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [LikedCount, setLikedCount] = useState<number>(0)

  const url =
    process.env.NEXT_PUBLIC_API_BASE_URL + '/diaries/' + props.id + '/favorites'
  const { data } = useSWR(url, fetcher)

  useEffect(() => {
    if (data) {
      const favorites: favoriteType[] = camelcaseKeys(data)
      const liked: boolean = favorites.some(
        (favorite) => favorite.userId === user.id,
      )
      setIsLiked(liked)
      setLikedCount(favorites.length)
    }
  }, [data, user.id])

  const handleLikedChange: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setLikedCount(LikedCount + 1)
    const url =
      process.env.NEXT_PUBLIC_API_BASE_URL +
      '/diaries/' +
      props.id +
      '/favorites'

    const headers = {
      'Content-Type': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      client: localStorage.getItem('client'),
      uid: localStorage.getItem('uid'),
    }

    axios({ method: 'POST', url: url, headers: headers })
      .then(() => {
        setIsLiked(!isLiked)
        console.log('sent Liked!')
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log(e.message)
      })
  }

  const handleDislikedChange: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setLikedCount(LikedCount - 1)
    const url =
      process.env.NEXT_PUBLIC_API_BASE_URL +
      '/diaries/' +
      props.id +
      '/favorites'

    const headers = {
      'Content-Type': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      client: localStorage.getItem('client'),
      uid: localStorage.getItem('uid'),
    }

    axios({ method: 'DELETE', url: url, headers: headers })
      .then(() => {
        setIsLiked(!isLiked)
        console.log('sent DisLiked!')
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
          {omit(props.title)(40)('...')}
        </Typography>
        <Typography>
          {omit(props.content)(305)('...')} ({props.wordCount} words)
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

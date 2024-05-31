import { css } from '@emotion/react'
import CommentIcon from '@mui/icons-material/Comment'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PersonIcon from '@mui/icons-material/Person'
import { Box, IconButton, Avatar, Typography } from '@mui/material'
import axios, { AxiosError } from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect, MouseEventHandler, useRef } from 'react'
import ProfileHoverCard from '@/components/ProfileHoverCard'
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
  userId: number
  userName: string
  userFirstName: string
  userLastName: string
  userCountry: string
  userUni: string
  userBio: string
  userImage: string
  favorites: { user_id: number }[]
  diaryComments: Array<object>
}

const imageCss = css({ marginTop: '4px' })

const omit = (text: string) => (len: number) => (ellipsis: string) =>
  text.length >= len ? text.slice(0, len - ellipsis.length) + ellipsis : text

const DiaryCard = (props: diaryCardProps) => {
  const router = useRouter()
  const [user] = useUserState()
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [LikedCount, setLikedCount] = useState<number>(0)
  const [displayCard, setDisplayCard] = useState<boolean>(false)
  const timer = useRef<NodeJS.Timeout | null>(null)

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

  const handleMouseEnterText: React.MouseEventHandler<HTMLSpanElement> = () => {
    timer.current = setTimeout(() => {
      setDisplayCard(true)
    }, 200)
  }

  const handleMouseLeaveText: React.MouseEventHandler<HTMLSpanElement> = () => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    setDisplayCard(false)
  }

  const handleMouseEnterCard = () => {
    setDisplayCard(true)
  }

  const handleMouseLeaveCard = () => {
    setDisplayCard(false)
  }

  return (
    <>
      <Box sx={{ display: 'flex' }}>
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
            <Box sx={{ position: 'relative' }}>
              <Link href={`/${props.userName}`}>
                <Typography
                  sx={{
                    fontSize: 15,
                    mx: 1,
                    fontWeight: 'bold',
                    color: 'black',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                  onMouseEnter={handleMouseEnterText}
                  onMouseLeave={handleMouseLeaveText}
                >
                  @{props.userName}
                </Typography>
              </Link>
              {displayCard && (
                <Box style={{ position: 'absolute', top: '-20px', left: '0' }}>
                  <Link href={`/${props.userName}`}>
                    <ProfileHoverCard
                      userId={props.userId}
                      userName={props.userName}
                      userFirstName={props.userFirstName}
                      userLastName={props.userLastName}
                      userCountry={props.userCountry}
                      userUni={props.userUni}
                      userBio={props.userBio}
                      userImage={props.userImage}
                      handleMouseEnterCard={handleMouseEnterCard}
                      handleMouseLeaveCard={handleMouseLeaveCard}
                    />
                  </Link>
                </Box>
              )}
            </Box>
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
              <Box sx={{ mx: 1 }}>
                <Image
                  src={`/${props.userUni.toLowerCase()}.png`}
                  height={22}
                  width={22}
                  alt="Uni flag"
                />
              </Box>
            )}
          </Box>
          <Box sx={{ display: 'flex', mx: 1, color: 'gray' }}>
            <Typography sx={{ fontSize: 15, mr: 0.5 }}>{props.day}</Typography>
            <Typography sx={{ fontSize: 15, mr: 0.5 }}>
              {props.month}
            </Typography>
            <Typography sx={{ fontSize: 15, mr: 0.5 }}>{props.year}</Typography>
            <Typography sx={{ fontSize: 15 }}>{props.wDay}</Typography>
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          my: 1,
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontSize: 20,
            fontWeight: 'bold',
            lineHeight: 1.5,
          }}
        >
          {(router.pathname === '/' ||
            router.pathname === '/following_diaries') &&
            omit(props.title)(40)('...')}{' '}
          {router.pathname !== '/' &&
            router.pathname !== '/following_diaries' &&
            props.title}
        </Typography>
        <Typography sx={{ fontSize: 18 }}>({props.wordCount} words)</Typography>
      </Box>
      <Typography>
        {(router.pathname === '/' ||
          router.pathname === '/following_diaries') &&
          omit(props.content)(295)('...')}{' '}
        {router.pathname !== '/' &&
          router.pathname !== '/following_diaries' &&
          props.content}{' '}
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
        <Typography sx={{ mt: 1 }}>{props.diaryComments.length}</Typography>
      </Box>
    </>
  )
}

export default DiaryCard

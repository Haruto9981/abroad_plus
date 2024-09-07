import { css } from '@emotion/react'
import CommentIcon from '@mui/icons-material/Comment'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PersonIcon from '@mui/icons-material/Person'
import {
  Box,
  IconButton,
  Avatar,
  Typography,
  Tooltip,
  Modal,
  Button,
} from '@mui/material'
import Popover from '@mui/material/Popover'
import axios, { AxiosError } from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useLayoutEffect, MouseEventHandler } from 'react'
import LikesModal from '@/components/LikesModal'
import ProfileHoverCard from '@/components/ProfileHoverCard'
import { useUserState } from '@/hooks/useGlobalState'

type diaryProps = {
  id: string
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

const Diary = ({
  id,
  title,
  content,
  image,
  wordCount,
  day,
  month,
  year,
  wDay,
  userId,
  userName,
  userFirstName,
  userLastName,
  userCountry,
  userUni,
  userBio,
  userImage,
  favorites,
  diaryComments,
}: diaryProps) => {
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)
  const [user] = useUserState()
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [translatedText, setTranslatedText] = useState('')
  const [LikedCount, setLikedCount] = useState<number>(0)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

  useLayoutEffect(() => {
    const liked: boolean = favorites.some(
      (favorite) => favorite.user_id === user.id,
    )
    setIsLiked(liked)
    setLikedCount(favorites.length)
  }, [user.id, favorites])

  const url =
    process.env.NEXT_PUBLIC_API_BASE_URL + '/diaries/' + id + '/favorites'

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

  const handleModalOpen: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setOpen(true)
  }

  const handleModalClose: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setOpen(false)
  }

  const handleHover = (event: React.MouseEvent<HTMLButtonElement>) => {
    const timeout = setTimeout(() => {
      setAnchorEl(event.currentTarget ?? event.target)
    }, 500)
    setHoverTimeout(timeout)
  }

  const handleHoverEnd = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleTranslation = (text: string) => {
    const url = 'https://api-free.deepl.com/v2/translate'
    const params = {
      auth_key: process.env.NEXT_PUBLIC_DEEPL_KEY,
      target_lang: 'JA',
      text: text,
    }
    axios({ method: 'GET', url: url, params: params })
      .then((res) => {
        setTranslatedText(res.data.translations[0].text)
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log(e.message)
      })
  }

  const isTopPage =
    router.pathname === '/' || router.pathname === '/following_diaries'

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Link href={`/${userName}`}>
          <IconButton
            sx={{ p: 0 }}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverEnd}
          >
            {userImage ? (
              <Avatar src={userImage} sx={{ width: 50, height: 50 }}></Avatar>
            ) : (
              <Avatar sx={{ width: 50, height: 50 }}>
                <PersonIcon />
              </Avatar>
            )}
          </IconButton>
        </Link>
        <Box>
          <Box sx={{ display: 'flex' }}>
            <Link href={`/${userName}`}>
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
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverEnd}
              >
                @{userName}
              </Typography>
            </Link>
            {userCountry && (
              <Tooltip title={userCountry}>
                <Image
                  css={imageCss}
                  src={`/${userCountry.toLowerCase()}.png`}
                  height={15}
                  width={30}
                  alt="国旗"
                />
              </Tooltip>
            )}
            {userUni && (
              <Box sx={{ mx: 1 }}>
                <Tooltip title={userUni}>
                  <Image
                    src={`/${userUni.toLowerCase()}.png`}
                    height={22}
                    width={22}
                    alt="Uni flag"
                  />
                </Tooltip>
              </Box>
            )}
          </Box>
          <Box sx={{ display: 'flex', mx: 1, color: 'gray' }}>
            <Typography sx={{ fontSize: 15, mr: 0.5 }}>{day}</Typography>
            <Typography sx={{ fontSize: 15, mr: 0.5 }}>{month}</Typography>
            <Typography sx={{ fontSize: 15, mr: 0.5 }}>{year}</Typography>
            <Typography sx={{ fontSize: 15 }}>{wDay}</Typography>
          </Box>
        </Box>
      </Box>
      {image && (
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
            src={image}
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
          {isTopPage && omit(title)(40)('...')} {!isTopPage && title}
        </Typography>
        <Typography sx={{ fontSize: 18 }}>({wordCount} words)</Typography>
      </Box>
      <Typography>
        {isTopPage && omit(content)(295)('...')}{' '}
        {!isTopPage && !translatedText && content}{' '}
        {translatedText && translatedText}
      </Typography>
      {!isTopPage && (
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <Button
            sx={{ color: 'gray', textTransform: 'none', fontSize: 14 }}
            onClick={() => {
              handleTranslation(content)
            }}
          >
            see tralslation
          </Button>
        </Box>
      )}
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
        <Tooltip title="Who likes">
          <Typography sx={{ mt: 1, mr: 1.5 }} onClick={handleModalOpen}>
            {LikedCount}
          </Typography>
        </Tooltip>
        <IconButton>
          <CommentIcon />
        </IconButton>
        <Typography sx={{ mt: 1 }}>{diaryComments.length}</Typography>
      </Box>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handleClose}
        disableAutoFocus={true}
      >
        <ProfileHoverCard
          userId={userId}
          userName={userName}
          userFirstName={userFirstName}
          userLastName={userLastName}
          userCountry={userCountry}
          userUni={userUni}
          userBio={userBio}
          userImage={userImage}
          handleClose={handleClose}
        />
      </Popover>
      <Modal open={open} onClose={handleModalClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: 365, sm: 540 },
            maxHeight: '60vh',
            overflowY: 'auto',
            bgcolor: 'background.paper',
            border: '0.5px solid #000',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <LikesModal id={id} />
        </Box>
      </Modal>
    </>
  )
}

export default Diary

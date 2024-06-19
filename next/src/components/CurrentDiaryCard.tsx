import CommentIcon from '@mui/icons-material/Comment'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
  Tooltip,
  Modal,
} from '@mui/material'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useState, useEffect, MouseEventHandler } from 'react'
import LikesModal from '@/components/LikesModal'
import { useUserState } from '@/hooks/useGlobalState'

type CurrentDiaryProps = {
  id: string
  title: string
  content: string
  status: string
  image: string
  wordCount: number
  day: string
  month: string
  year: string
  wDay: string
  favorites: { user_id: number }[]
  diaryComments: Array<object>
}

const omit = (text: string) => (len: number) => (ellipsis: string) =>
  text.length >= len ? text.slice(0, len - ellipsis.length) + ellipsis : text

const CurrentUserDiaryCard = (props: CurrentDiaryProps) => {
  const router = useRouter()
  const [user] = useUserState()
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [LikedCount, setLikedCount] = useState<number>(0)
  const [open, setOpen] = useState<boolean>(false)

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

  const handleModalOpen: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setOpen(true)
  }

  const handleModalClose: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setOpen(false)
  }

  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex' }}>
            <Box>
              <Typography
                sx={{
                  fontSize: 40,
                  mr: 1,
                  fontWeight: 'bold',
                  color: '#f15922',
                }}
              >
                {props.day}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 16, mr: 1 }}>
                {props.month}
              </Typography>
              <Typography sx={{ fontSize: 16, mr: 1 }}>
                {props.year} {props.wDay}
              </Typography>
            </Box>
          </Box>
          {props.status === 'personal' && (
            <Box
              sx={{
                display: 'inline',
                fontSize: 15,
                textAlign: 'center',
                border: '1px solid #f15922',
                pt: 1,
                px: 1,
                borderRadius: 1,
                color: '#f15922',
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              {props.status}
            </Box>
          )}

          {props.status === 'shared' && (
            <Box
              sx={{
                display: 'inline',
                fontSize: 15,
                textAlign: 'center',
                border: '1px solid #f15922',
                pt: 1,
                px: 1,
                borderRadius: 1,
                color: '#f15922',
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              {props.status}
            </Box>
          )}
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
              alt="!!!!"
              src={props.image}
              className="image"
            />
          </Box>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>
          <Typography
            component="h3"
            sx={{
              fontSize: 20,
              fontWeight: 'bold',
              lineHeight: 1.5,
            }}
          >
            {router.pathname === '/current/diaries' &&
              omit(props.title)(40)('...')}{' '}
            {router.pathname !== '/current/diaries' && props.title}
          </Typography>
          <Typography>({props.wordCount} words)</Typography>
        </Box>
        <Typography>
          {router.pathname === '/current/diaries' &&
            omit(props.content)(295)('...')}{' '}
          {router.pathname !== '/current/diaries' && props.content}
        </Typography>
        {props.status === 'shared' && (
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
            <Typography sx={{ mt: 1 }}>{props.diaryComments.length}</Typography>
          </Box>
        )}
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
            <LikesModal id={props.id} />
          </Box>
        </Modal>
      </CardContent>
    </Card>
  )
}

export default CurrentUserDiaryCard

import { css } from '@emotion/react'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PersonIcon from '@mui/icons-material/Person'
import {
  Box,
  Button,
  Modal,
  Card,
  CardContent,
  IconButton,
  Divider,
  TextField,
  Avatar,
  Typography,
  Tooltip,
  Stack,
} from '@mui/material'
import Popover from '@mui/material/Popover'
import axios, { AxiosResponse, AxiosError } from 'axios'
import camelcaseKeys from 'camelcase-keys'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import useSWR from 'swr'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import ProfileHoverCard from '@/components/ProfileHoverCard'
import { useUserState, useSnackbarState } from '@/hooks/useGlobalState'
import { fetcher } from '@/utils'
import CommentCard from '@/components/CommentCard'

type diaryIdProps = {
  id: string
}

type CommentProps = {
  id: number
  comment: string
  userId: number
  fromToday: string
  user: {
    id: number
    name: string
    first_name: string
    last_name: string
    country: string
    uni: string
    bio: string
    image: {
      url: string
    }
  }
}

type CommentFormData = {
  comment: string
}

const imageCss = css({ marginTop: '4px' })

const Comment = (props: diaryIdProps) => {
  const [user] = useUserState()
  const router = useRouter()
  const [, setSnackbar] = useSnackbarState()
  const [open, setOpen] = useState<boolean>(false)
  const [commentId, setCommentId] = useState<number>(0)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)
  const url =
    process.env.NEXT_PUBLIC_API_BASE_URL +
    '/diaries/' +
    props.id +
    '/diary_comments'
  const { data, error, mutate: mutateComments } = useSWR(url, fetcher)
  const { handleSubmit, control, reset } = useForm<CommentFormData>({
    defaultValues: { comment: '' },
  })

  const comments = camelcaseKeys(data)

  const pathname = router.pathname

  const validationRules = {
    comment: {
      required: 'Write in something',
    },
  }

  const onSubmit: SubmitHandler<CommentFormData> = (data) => {
    const url =
      process.env.NEXT_PUBLIC_API_BASE_URL +
      '/diaries/' +
      props.id +
      '/diary_comments'

    const headers = {
      'Content-Type': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      client: localStorage.getItem('client'),
      uid: localStorage.getItem('uid'),
    }

    axios({ method: 'POST', url: url, data: data, headers: headers })
      .then((res: AxiosResponse) => {
        localStorage.setItem('access-token', res.headers['access-token'])
        localStorage.setItem('client', res.headers['client'])
        localStorage.setItem('uid', res.headers['uid'])
        setSnackbar({
          message: 'Successfully posted!',
          severity: 'success',
          pathname: pathname,
        })
        mutateComments()
        reset()
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log(e.message)
        setSnackbar({
          message: 'Try again',
          severity: 'error',
          pathname: pathname,
        })
      })
  }

  const handleDeleteChange = (commentId: number) => {
    setOpen(false)
    const url =
      process.env.NEXT_PUBLIC_API_BASE_URL +
      '/diaries/' +
      props.id +
      '/diary_comments/' +
      commentId

    const headers = {
      'Content-Type': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      client: localStorage.getItem('client'),
      uid: localStorage.getItem('uid'),
    }

    axios({ method: 'DELETE', url: url, data: data, headers: headers })
      .then((res: AxiosResponse) => {
        localStorage.setItem('access-token', res.headers['access-token'])
        localStorage.setItem('client', res.headers['client'])
        localStorage.setItem('uid', res.headers['uid'])
        setSnackbar({
          message: 'Comment deleted',
          severity: 'success',
          pathname: pathname,
        })
        mutateComments()
        setCommentId(0)
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log(e.message)
        setSnackbar({
          message: 'Failed to delete comment',
          severity: 'error',
          pathname: pathname,
        })
      })
  }

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20, my: 1 }}>Comments</Typography>
        <Divider sx={{ mt: 2 }} />
        <Stack
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          spacing={4}
        >
          <Controller
            name="comment"
            control={control}
            rules={validationRules.comment}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                multiline
                type="text"
                label="Post your comment"
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                sx={{ backgroundColor: 'white' }}
              />
            )}
          />
          <Button
            variant="contained"
            type="submit"
            color="warning"
            sx={{ fontWeight: 'bold', color: 'white', textTransform: 'none' }}
          >
            Post
          </Button>
        </Stack>
        {comments.map((comment: CommentProps, i: number) => (
          <CommentCard
           id={comment.id}
           comment={comment.comment}
           userId={comment.userId}
           fromToday={comment.fromToday}
           user={comment.user}
           onDelete={handleDeleteChange}
           />    
        ))}
      </CardContent>
    </Card>
  )
}

export default Comment

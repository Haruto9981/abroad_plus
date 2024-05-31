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
  Stack,
} from '@mui/material'
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
import { useUserState, useSnackbarState } from '@/hooks/useGlobalState'
import { fetcher } from '@/utils'

type diaryIdProps = {
  id: number
}

type CommentProps = {
  id: number
  comment: string
  userId: number
  fromToday: string
  user: {
    name: string
    country: string
    uni: string
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
  const url =
    process.env.NEXT_PUBLIC_API_BASE_URL +
    '/diaries/' +
    props.id +
    '/diary_comments'
  const { data, error, mutate: mutateComments } = useSWR(url, fetcher)
  const { handleSubmit, control } = useForm<CommentFormData>({
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

  const handleOpen = (id: number) => {
    setOpen(true)
    setCommentId(id)
  }

  const handleClose = () => {
    setOpen(false)
    setCommentId(0)
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
          <>
            <Divider sx={{ mt: 2 }} />
            <Box key={i} sx={{ display: 'flex', mt: 1 }}>
              <Link href={`/${comment.user.name}`}>
                <IconButton>
                  {comment.user.image.url ? (
                    <Avatar
                      src={comment.user.image.url}
                      sx={{ width: 40, height: 40 }}
                    ></Avatar>
                  ) : (
                    <Avatar sx={{ width: 40, height: 40 }}>
                      <PersonIcon />
                    </Avatar>
                  )}
                </IconButton>
              </Link>
              <Box sx={{ width: '100%', mt: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex' }}>
                    <Link href={`/${comment.user.name}`}>
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
                        @{comment.user.name}
                      </Typography>
                    </Link>
                    {comment.user.country && (
                      <Image
                        css={imageCss}
                        src={`/${comment.user.country.toLowerCase()}.png`}
                        height={15}
                        width={30}
                        alt="国旗"
                      />
                    )}
                    {comment.user.uni && (
                      <Box sx={{ mx: 1 }}>
                        <Image
                          src={`/${comment.user.uni.toLowerCase()}.png`}
                          height={22}
                          width={22}
                          alt="Uni flag"
                        />
                      </Box>
                    )}
                  </Box>
                </Box>
                <Box>
                  <Typography sx={{ color: 'gray', fontSize: 12 }}>
                    {comment.fromToday}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Typography sx={{ ml: 1 }}>{comment.comment}</Typography>
            <Box sx={{ display: 'flex' }}>
              <Box>
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
              </Box>
              {comment.userId === user.id && (
                <>
                  <IconButton onClick={() => handleOpen(comment.id)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              )}
            </Box>
          </>
        ))}
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '0.5px solid #000',
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography sx={{ mb: 4 }}>
              Do you really want to delete it?
            </Typography>
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{ marginRight: 2 }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() => handleDeleteChange(commentId)}
            >
              OK
            </Button>
          </Box>
        </Modal>
      </CardContent>
    </Card>
  )
}

export default Comment

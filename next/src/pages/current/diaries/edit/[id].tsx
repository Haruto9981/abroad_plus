import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import CloseIcon from '@mui/icons-material/Close'
import { LoadingButton } from '@mui/lab'
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Switch,
  TextField,
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
} from '@mui/material'
import axios, { AxiosError } from 'axios'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState, useMemo, ChangeEvent } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import useSWR from 'swr'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { useUserState, useSnackbarState } from '@/hooks/useGlobalState'
import { useRequireSignedIn } from '@/hooks/useRequireSignedIn'
import { fetcher } from '@/utils'

type DiaryProps = {
  title: string
  content: string
  status: string
  wordCount: number
  day: string
  month: string
  year: string
  wDay: string
}

type DiaryFormData = {
  title: string
  content: string
  image: string
}

const CurrentDiariesEdit: NextPage = () => {
  useRequireSignedIn()
  const router = useRouter()
  const [user] = useUserState()
  const [, setSnackbar] = useSnackbarState()
  const [statusChecked, setStatusChecked] = useState<boolean>(false)
  const [isFetched, setIsFetched] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [inputLength, setInputLength] = useState<number>(0)
  const [selectedFile, setSelectedFile] = useState<File>()
  const [previewUrl, setPreviewUrl] = useState('')
  const [isExistImageDeleted, setIsExistImageDeleted] = useState<boolean>(false)

  const handleChangeStatusChecked = () => {
    setStatusChecked(!statusChecked)
  }

  const handleInputLengthChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    let count = 0

    const split = e.target.value.split(' ')

    for (let i = 0; i < split.length; i++) {
      if (split[i] != '') {
        count += 1
      }
    }

    setInputLength(count)

    const inputLengthElement = document.getElementById('inputlength')
    if (inputLengthElement) {
      inputLengthElement.innerHTML = count.toString()
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    console.log(file)

    if (file) {
      setSelectedFile(file)

      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result
        if (typeof result === 'string') {
          setPreviewUrl(result)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDeleteChange = () => {
    setSelectedFile(undefined)
  }

  const handleExistImageDeleteChange = () => {
    setIsExistImageDeleted(true)
  }

  const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/current/diaries/'
  const { id } = router.query
  const { data, error } = useSWR(
    user.isSignedIn && id ? url + id : null,
    fetcher,
  )

  const diary: DiaryProps = useMemo(() => {
    if (!data) {
      return {
        title: '',
        content: '',
        status: false,
        wordCount: 0,
        day: '',
        month: '',
        year: '',
        wDay: '',
      }
    }
    return {
      title: data.title == null ? '' : data.title,
      content: data.content == null ? '' : data.content,
      status: data.status,
      wordCount: data.word_count,
      day: data.day,
      month: data.month,
      year: data.year,
      wDay: data.w_day,
    }
  }, [data])

  const { handleSubmit, control, reset } = useForm<DiaryFormData>({
    defaultValues: diary,
  })

  useEffect(() => {
    if (data) {
      reset(diary)
      setStatusChecked(diary.status == 'shared')
      setIsFetched(true)
    }
  }, [data, diary, reset])

  // useSWRでfetchしてきたdataとこのdataは別物。
  const onSubmit: SubmitHandler<DiaryFormData> = (data) => {
    if (data.title == '') {
      return setSnackbar({
        message: '日記の保存にはタイトルが必要です',
        severity: 'error',
        pathname: '/current/diaries/edit/[id]',
      })
    }

    if (data.content == '') {
      return setSnackbar({
        message: '日記の保存には本文が必要です',
        severity: 'error',
        pathname: '/current/diaries/edit/[id]',
      })
    }

    setIsLoading(true)

    const patchUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL + '/current/diaries/' + id

    const headers = {
      'Content-Type': 'multipart/form-data',
      'access-token': localStorage.getItem('access-token'),
      client: localStorage.getItem('client'),
      uid: localStorage.getItem('uid'),
    }

    const status = statusChecked ? 'shared' : 'personal'

    const wordCount = inputLength !== 0 ? inputLength : diary.wordCount

    const formData = new FormData()

    formData.append('diary[title]', data.title)
    formData.append('diary[content]', data.content)
    formData.append('diary[status', status)
    formData.append('diary[word_count]', wordCount.toString())
    if (selectedFile || isExistImageDeleted) {
      formData.append('diary[image]', selectedFile || '')
    }

    axios({
      method: 'PATCH',
      url: patchUrl,
      data: formData,
      headers: headers,
    })
      .then(() => {
        setSnackbar({
          message: '日記を保存しました',
          severity: 'success',
          pathname: '/current/diaries/edit/[id]',
        })
      })
      .catch((err: AxiosError<{ error: string }>) => {
        console.log(err.message)
        setSnackbar({
          message: '日記の保存に失敗しました',
          severity: 'error',
          pathname: '/current/diaries/edit/[id]',
        })
      })
    setIsLoading(false)
  }

  if (error) return <Error />
  if (!data || !isFetched) return <Loading />

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ backgroundColor: '#ffe0b6', minHeight: '100vh' }}
    >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#ffffff',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ width: 50 }}>
            <Link
              href={
                diary.status === 'unsaved'
                  ? '/current/diaries'
                  : '/current/diaries/' + id
              }
            >
              <Typography
                sx={{ fontSize: { xs: 12, sm: 15 }, color: '#2f4f4f' }}
              >
                Back
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: { xs: '0 16px', sm: '0 24px' },
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 20 },
                  fontWeight: 'bold',
                  mt: 1,
                  color: '#FF6600',
                }}
                id="inputlength"
              >
                {diary.wordCount}
              </Typography>
              <Typography sx={{ fontSize: { xs: 12, sm: 15 } }}>
                Word Count
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Switch
                checked={statusChecked}
                onChange={handleChangeStatusChecked}
                color="warning"
              />
              <Typography sx={{ fontSize: { xs: 12, sm: 15 } }}>
                Personal / Shared
              </Typography>
            </Box>
            <LoadingButton
              variant="contained"
              color="warning"
              type="submit"
              loading={isLoading}
              sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: { xs: 12, sm: 16 },
                textTransform: 'none',
              }}
            >
              Save
            </LoadingButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="lg"
        sx={{ pt: 11, pb: 3, display: 'flex', justifyContent: 'center' }}
      >
        <Box sx={{ width: 840 }}>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: { xs: 20, sm: 30 }, my: 2 }}>
              {diary.day} {diary.month} {diary.year} {diary.wDay}
            </Typography>
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <Tooltip title="サムネイルを追加する">
                  <Avatar sx={{ my: 2, mr: 4 }}>
                    <label htmlFor="image-upload">
                      <IconButton
                        sx={{ backgroundColor: '#F1F5FA' }}
                        component="span"
                      >
                        <AddPhotoAlternateIcon sx={{ color: '#99AAB6' }} />
                      </IconButton>
                    </label>
                    <input
                      {...field}
                      id="image-upload"
                      type="file"
                      style={{ display: 'none' }}
                      onChange={(e) => {
                        field.onChange(e)
                        handleFileChange(e)
                      }}
                    />
                  </Avatar>
                </Tooltip>
              )}
            />
            {!selectedFile && data.image.url && !isExistImageDeleted && (
              <Box
                sx={{
                  mb: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* なぜかImageだとうまく画像を読み込めない。nextのpublicから探してるっぽい。 */}
                <Box css={{ position: 'relative' }}>
                  <img // eslint-disable-line
                    alt="プレビュー"
                    src={data.image.url}
                    width={360}
                    height={260}
                  />
                  <Tooltip title="サムネイルを削除する">
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -8,
                        right: -8,
                      }}
                    >
                      <Avatar>
                        <IconButton
                          sx={{ backgroundColor: '#F1F5FA' }}
                          onClick={handleExistImageDeleteChange}
                        >
                          <CloseIcon sx={{ color: '#99AAB6' }} />
                        </IconButton>
                      </Avatar>
                    </Box>
                  </Tooltip>
                </Box>
              </Box>
            )}
            {selectedFile && (
              <Box
                sx={{
                  mb: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box css={{ position: 'relative' }}>
                  <Image
                    alt="プレビュー"
                    src={previewUrl}
                    width={360}
                    height={260}
                  />
                  <Tooltip title="サムネイルを削除する">
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -8,
                        right: -8,
                      }}
                    >
                      <Avatar>
                        <IconButton
                          sx={{ backgroundColor: '#F1F5FA' }}
                          onClick={handleDeleteChange}
                        >
                          <CloseIcon sx={{ color: '#99AAB6' }} />
                        </IconButton>
                      </Avatar>
                    </Box>
                  </Tooltip>
                </Box>
              </Box>
            )}

            <Controller
              name="title"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="text"
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  placeholder="Title"
                  fullWidth
                  sx={{
                    backgroundColor: 'white',
                    fontWeight: 'bold',
                    '& input': {
                      fontWeight: 'bold',
                      fontSize: '1.25rem',
                    },
                  }}
                />
              )}
            />
          </Box>
          <Box>
            <Controller
              name="content"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="textarea"
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  multiline
                  fullWidth
                  placeholder="Write in Text"
                  rows={25}
                  sx={{ backgroundColor: 'white' }}
                  onChange={(e) => {
                    field.onChange(e)
                    handleInputLengthChange(e)
                  }}
                />
              )}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default CurrentDiariesEdit

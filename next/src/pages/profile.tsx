import { LoadingButton } from '@mui/lab'
import {
  Box,
  Container,
  TextField,
  Typography,
  Stack,
  FormHelperText,
  MenuItem,
  FormControl,
  Avatar,
  Button,
  SelectChangeEvent,
} from '@mui/material'
import Select from '@mui/material/Select'
import axios, { AxiosError } from 'axios'
import type { NextPage } from 'next'
import { useEffect, useState, useMemo, ChangeEvent } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import useSWR from 'swr'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { useUserState, useSnackbarState } from '@/hooks/useGlobalState'
import { styles } from '@/styles'
import { fetcher } from '@/utils'

type profileProps = {
  name: string
  country: string
  uni: string
  start_date: string
  end_date: string
  bio: string
}

type profileFormData = {
  name: string
  country: string
  uni: string
  start_date: string
  end_date: string
  bio: string
  image: string
  profile: profileProps
}

const Profile: NextPage = () => {
  const [user, setUser] = useUserState()
  const [, setSnackbar] = useSnackbarState()
  const [isFetched, setIsFetched] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedFile, setSelectedFile] = useState<File>()
  const [previewUrl, setPreviewUrl] = useState('')
  const [country, setCountry] = useState('')

  const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/current/user'
  const { data, error } = useSWR(user.isSignedIn ? url : null, fetcher)

  const profile: profileProps = useMemo(() => {
    if (!data) {
      return {
        name: '',
        country: '',
        uni: '',
        start_date: '',
        end_date: '',
        bio: '',
      }
    }
    return {
      name: data.name == null ? '' : data.name,
      country: data.country == null ? '' : data.country,
      uni: data.uni == null ? '' : data.uni,
      start_date: data.start_date == null ? '' : data.start_date,
      end_date: data.end_date == null ? '' : data.end_date,
      bio: data.bio == null ? '' : data.bio,
    }
  }, [data])

  const { handleSubmit, control, reset } = useForm<profileFormData>({
    defaultValues: { profile },
  })

  const handleCountryChange = (e: SelectChangeEvent<string>) => {
    setCountry(e.target.value)
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

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

  useEffect(() => {
    if (data) {
      reset(profile)
      setIsFetched(true)
    }
  }, [data, profile, reset])

  const onSubmit: SubmitHandler<profileFormData> = (data) => {
    if (data.name == '') {
      return setSnackbar({
        message: '名前を入力してください',
        severity: 'error',
        pathname: '/profile',
      })
    }

    setIsLoading(true)

    const patchUrl = process.env.NEXT_PUBLIC_API_BASE_URL + '/current/user'

    const headers = {
      'Content-Type': 'multipart/form-data',
      'access-token': localStorage.getItem('access-token'),
      client: localStorage.getItem('client'),
      uid: localStorage.getItem('uid'),
    }

    const formData = new FormData()

    formData.append('user[name]', data.name)
    formData.append('user[country]', data.country)
    formData.append('user[uni]', data.uni)
    formData.append('user[start_date]', data.start_date)
    formData.append('user[end_date]', data.end_date)
    formData.append('user[bio]', data.bio)
    if (selectedFile) {
      formData.append('user[image]', selectedFile)
    }

    axios({
      method: 'PATCH',
      url: patchUrl,
      data: formData,
      headers: headers,
    })
      .then(() => {
        setUser({ ...user, isFetched: false })
        setSnackbar({
          message: 'プロフィールを更新しました',
          severity: 'success',
          pathname: '/profile',
        })
      })
      .catch((err: AxiosError<{ error: string }>) => {
        console.log(err.message)
        setSnackbar({
          message: 'プロフィールの更新に失敗しました',
          severity: 'error',
          pathname: '/profile',
        })
      })
    setIsLoading(false)
  }

  if (error) return <Error />
  if (!data || !isFetched) return <Loading />

  return (
    <Box
      css={styles.pageMinHeight}
      sx={{
        backgroundColor: '#ffe0b6',
        pb: 10,
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ mb: 4, pt: 4 }}>
          <Typography
            component="h2"
            sx={{ fontSize: 28, color: 'black', fontWeight: 'bold' }}
          >
            プロフィール
          </Typography>
        </Box>
        <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {!selectedFile && (
              <>
                {data.image.url ? (
                  <Avatar
                    sx={{ width: 175, height: 175, mb: 2 }}
                    alt="プレビュー"
                    src={data.image.url}
                  />
                ) : (
                  <Avatar
                    sx={{ width: 175, height: 175, mb: 2 }}
                    alt="プレビュー"
                  />
                )}
              </>
            )}
            {selectedFile && (
              <Avatar
                sx={{ width: 175, height: 175, mb: 2 }}
                alt="プレビュー"
                src={previewUrl}
              />
            )}
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <Button variant="contained" component="label" color="warning">
                  画像を選択
                  <input
                    {...field}
                    type="file"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      field.onChange(e)
                      handleFileChange(e)
                    }}
                  />
                </Button>
              )}
            />
          </Box>
          <Typography sx={{ mb: 1 }}>名前</Typography>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="text"
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                onChange={(e) => {
                  field.onChange(e)
                }}
                sx={{ backgroundColor: 'white' }}
              />
            )}
          />
          <Typography sx={{ mt: 3, mb: 1 }}>留学先の国</Typography>
          <Controller
            name="country"
            control={control}
            render={({ field, fieldState }) => (
              <FormControl error={fieldState.invalid}>
                <Select
                  {...field}
                  sx={{ backgroundColor: 'white' }}
                  displayEmpty
                  onChange={(e) => {
                    field.onChange(e)
                    handleCountryChange(e)
                  }}
                >
                  <MenuItem value="">
                    <em>選択してください</em>
                  </MenuItem>
                  <MenuItem value="USA">アメリカ合衆国</MenuItem>
                  <MenuItem value="UK">イギリス</MenuItem>
                  <MenuItem value="Australia">オーストラリア</MenuItem>
                  <MenuItem value="Canada">カナダ</MenuItem>
                  <MenuItem value="NewZealand">ニュージーランド</MenuItem>
                </Select>
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              </FormControl>
            )}
          />
          <Typography sx={{ mt: 3, mb: 1 }}>留学先の大学</Typography>
          <Controller
            name="uni"
            control={control}
            render={({ field }) => (
              <Select {...field} sx={{ backgroundColor: 'white' }} displayEmpty>
                <MenuItem value="">
                  <em>選択してください</em>
                </MenuItem>
                {!country && [
                  <MenuItem key="csumb" value="CSUMB">
                    カリフォルニア州立大学モントレーベイ校
                  </MenuItem>,
                  <MenuItem key="kansas" value="Kansas">
                    カンザス大学
                  </MenuItem>,
                  <MenuItem key="utah" value="Utah">
                    ユタ大学
                  </MenuItem>,
                  <MenuItem key="aston" value="Aston">
                    アストン大学
                  </MenuItem>,
                  <MenuItem key="cccu" value="Canterbury">
                    カンタベリー・クライスト・チャーチ大学
                  </MenuItem>,
                  <MenuItem key="queensland" value="Queensland">
                    クイーンズランド大学
                  </MenuItem>,
                  <MenuItem key="southerncross" value="SouthernCross">
                    サザンクロス大学
                  </MenuItem>,
                  <MenuItem key="alberta" value="Alberta">
                    アルバータ
                  </MenuItem>,
                  <MenuItem key="otago" value="Otago">
                    オタゴ大学
                  </MenuItem>,
                  <MenuItem key="auckland" value="Auckland">
                    オークランド大学
                  </MenuItem>,
                ]}
                {country === 'USA' && [
                  <MenuItem key="csumb" value="CSUMB">
                    カリフォルニア州立大学モントレーベイ校
                  </MenuItem>,
                  <MenuItem key="kansas" value="Kansas">
                    カンザス大学
                  </MenuItem>,
                  <MenuItem key="utah" value="Utah">
                    ユタ大学
                  </MenuItem>,
                ]}
                {country === 'UK' && [
                  <MenuItem key="aston" value="Aston">
                    アストン大学
                  </MenuItem>,
                  <MenuItem key="cccu" value="Canterbury">
                    カンタベリー・クライスト・チャーチ大学
                  </MenuItem>,
                ]}
                {country === 'Australia' && [
                  <MenuItem key="queensland" value="Queensland">
                    クイーンズランド大学
                  </MenuItem>,
                  <MenuItem key="southerncross" value="SouthernCross">
                    サザンクロス大学
                  </MenuItem>,
                ]}
                {country === 'Canada' && [
                  <MenuItem key="alberta" value="Alberta">
                    アルバータ
                  </MenuItem>,
                ]}
                {country === 'NewZealand' && [
                  <MenuItem key="otago" value="Otago">
                    オタゴ大学
                  </MenuItem>,
                  <MenuItem key="auckland" value="Auckland">
                    オークランド大学
                  </MenuItem>,
                ]}
              </Select>
            )}
          />
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ mr: 4 }}>
              <Typography sx={{ mt: 3, mb: 1 }}>留学開始日</Typography>
              <Controller
                name="start_date"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    type="date"
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    sx={{ backgroundColor: 'white' }}
                  />
                )}
              />
            </Box>
            <Box>
              <Typography sx={{ mt: 3, mb: 1 }}>留学終了日</Typography>
              <Controller
                name="end_date"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    type="date"
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    sx={{ backgroundColor: 'white' }}
                  />
                )}
              />
            </Box>
          </Box>
          <Typography sx={{ mt: 3, mb: 1 }}>自己紹介</Typography>
          <Controller
            name="bio"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                multiline
                rows={4}
                {...field}
                type="text"
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                sx={{ backgroundColor: 'white' }}
              />
            )}
          />
          <LoadingButton
            variant="contained"
            type="submit"
            color="warning"
            loading={isLoading}
            sx={{ mt: 3, fontWeight: 'bold', color: 'white' }}
          >
            更新する
          </LoadingButton>
        </Stack>
      </Container>
    </Box>
  )
}

export default Profile
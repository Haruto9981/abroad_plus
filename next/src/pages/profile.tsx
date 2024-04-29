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
} from '@mui/material'
import Select from '@mui/material/Select'
import axios, { AxiosError } from 'axios'
import type { NextPage } from 'next'
import { useEffect, useState, useMemo } from 'react'
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
  start_date: Date
  end_date: Date
  bio: string
}

type profileFormData = {
  name: string
  country: string
  uni: string
  start_date: Date
  end_date: Date
  bio: string
}

const Profile: NextPage = () => {
  const [user] = useUserState()
  const [, setSnackbar] = useSnackbarState()
  const [isFetched, setIsFetched] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/current/user'
  const { data, error } = useSWR(user.isSignedIn ? url : null, fetcher)

  const profile: profileProps = useMemo(() => {
    if (!data) {
      return {
        name: '',
        country: '',
        uni: '',
        start_date: null,
        end_date: null,
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
      'Content-Type': 'application/json',
      'access-token': localStorage.getItem('access-token'),
      client: localStorage.getItem('client'),
      uid: localStorage.getItem('uid'),
    }

    const patchData = { ...data }

    axios({
      method: 'PATCH',
      url: patchUrl,
      data: patchData,
      headers: headers,
    })
      .then(() => {
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
                <MenuItem key="csumb" value="CSUMB">
                  カリフォルニア州立大学モントレーベイ校
                </MenuItem>
                <MenuItem key="kansas" value="Kansas">
                  カンザス大学
                </MenuItem>
                <MenuItem key="utah" value="Utah">
                  ユタ大学
                </MenuItem>
                <MenuItem key="aston" value="Aston">
                  アストン大学
                </MenuItem>
                <MenuItem key="cccu" value="Canterbury Christ Church">
                  カンタベリー・クライスト・チャーチ大学
                </MenuItem>
                <MenuItem key="queensland" value="Queensland">
                  クイーンズランド大学
                </MenuItem>
                <MenuItem key="southerncross" value="SouthernCross">
                  サザンクロス大学
                </MenuItem>
                <MenuItem key="alberta" value="Alberta">
                  アルバータ
                </MenuItem>
                <MenuItem key="otago" value="Otago">
                  オタゴ大学
                </MenuItem>
                <MenuItem key="auckland" value="Auckland">
                  オークランド大学
                </MenuItem>
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

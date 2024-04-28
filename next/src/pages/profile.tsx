import { LoadingButton } from '@mui/lab'
import {
  Box,
  Container,
  TextField,
  Typography,
  Stack,
  FormControl,
  MenuItem,
} from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import axios, { AxiosResponse, AxiosError } from 'axios'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useSnackbarState } from '@/hooks/useGlobalState'
import { styles } from '@/styles'

type SignUpFormData = {
  email: string
  password: string
  name: string
  bio: string
  start_date: Date
  end_date: Date
}

const SignUp: NextPage = () => {
  const router = useRouter()
  const [, setSnackbar] = useSnackbarState()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedUni, setSelectedUni] = useState('')

  const { handleSubmit, control } = useForm<SignUpFormData>({
    defaultValues: { email: '', password: '' },
  })

  const handleChangeForCountry = (event: SelectChangeEvent) => {
    setSelectedCountry(event.target.value)
  }

  const handleChangeForUni = (event: SelectChangeEvent) => {
    setSelectedUni(event.target.value)
  }

  const validationRules = {
    email: {
      required: 'メールアドレスを入力してください。',
      pattern: {
        value:
          /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
        message: '正しい形式のメールアドレスを入力してください。',
      },
    },
    password: {
      required: 'パスワードを入力してください。',
    },
    name: {
      required: 'ユーザー名を入力してください。',
    },
  }

  const onSubmit: SubmitHandler<SignUpFormData> = (data) => {
    const SignUp = async (data: SignUpFormData) => {
      setIsLoading(true)
      const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/auth'
      const headers = { 'Content-Type': 'application/json' }
      const confirmSuccessUrl =
        process.env.NEXT_PUBLIC_FRONT_BASE_URL + '/sign_in'

      await axios({
        method: 'POST',
        url: url,
        data: { ...data, confirm_success_url: confirmSuccessUrl },
        headers: headers,
      })
        .then((res: AxiosResponse) => {
          localStorage.setItem(
            'access-token',
            res.headers['access-token'] || '',
          )
          localStorage.setItem('client', res.headers['client'] || '')
          localStorage.setItem('uid', res.headers['uid'] || '')
          setSnackbar({
            message: '認証メールをご確認ください',
            severity: 'success',
            pathname: '/',
          })
          router.push('/')
        })
        .catch((e: AxiosError<{ error: string }>) => {
          console.log(e.message)
          setSnackbar({
            message: '不正なユーザー情報です',
            severity: 'error',
            pathname: '/sign_up',
          })
          setIsLoading(false)
        })
    }
    SignUp(data)
  }

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
            rules={validationRules.name}
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
          <FormControl>
            <Select
              name="country"
              value={selectedCountry}
              onChange={handleChangeForCountry}
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
          </FormControl>
          <Typography sx={{ mt: 3, mb: 1 }}>留学先の大学</Typography>
          <FormControl>
            <Select
              name="uni"
              value={selectedUni}
              onChange={handleChangeForUni}
              sx={{ backgroundColor: 'white' }}
              displayEmpty
            >
              <MenuItem value="">
                <em>選択してください</em>
              </MenuItem>
              {selectedCountry == 'USA' && [
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
              {selectedCountry == 'UK' && [
                <MenuItem key="aston" value="Aston">
                  アストン大学
                </MenuItem>,
                <MenuItem key="cccu" value="CCCU">
                  カンタベリー・クライスト・チャーチ大学
                </MenuItem>,
              ]}
              {selectedCountry == 'Australia' && [
                <MenuItem key="queensland" value="Queensland">
                  クイーンズランド大学
                </MenuItem>,
                <MenuItem key="southerncross" value="SouthernCross">
                  サザンクロス大学
                </MenuItem>,
              ]}
              {selectedCountry == 'Canada' && [
                <MenuItem key="alberta" value="Alberta">
                  アルバータ
                </MenuItem>,
              ]}
              {selectedCountry == 'NewZealand' && [
                <MenuItem key="otago" value="Otago">
                  オタゴ大学
                </MenuItem>,
                <MenuItem key="auckland" value="Auckland">
                  オークランド大学
                </MenuItem>,
              ]}
            </Select>
          </FormControl>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ mr: 4 }}>
              <Typography sx={{ mt: 3, mb: 1 }}>留学開始日</Typography>
              <Controller
                name="start_date"
                control={control}
                rules={validationRules.name}
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
                rules={validationRules.name}
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
            rules={validationRules.name}
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

export default SignUp

import { LoadingButton } from '@mui/lab'
import { Box, Container, TextField, Typography, Stack } from '@mui/material'
import axios, { AxiosResponse, AxiosError } from 'axios'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useUserState, useSnackbarState } from '@/hooks/useGlobalState'

type SignInFormData = {
  email: string
  password: string
  time_zone: string
}

const SignIn: NextPage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useUserState()
  const [, setSnackbar] = useSnackbarState()

  const { handleSubmit, control } = useForm<SignInFormData>({
    defaultValues: { email: '', password: '' },
  })

  const validationRules = {
    email: {
      required: 'Enter your email address',
      pattern: {
        value:
          /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
        message: 'Enter your email address in the correct format',
      },
    },
    password: {
      required: 'Enter your password',
    },
  }

  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    setIsLoading(true)
    const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/auth/sign_in'
    const headers = { 'Content-Type': 'application/json' }

    axios({
      method: 'POST',
      url: url,
      data: {
        ...data,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      headers: headers,
    })
      .then((res: AxiosResponse) => {
        localStorage.setItem('access-token', res.headers['access-token'])
        localStorage.setItem('client', res.headers['client'])
        localStorage.setItem('uid', res.headers['uid'])
        setUser({
          ...user,
          isFetched: false,
        })
        setSnackbar({
          message: 'You have successfully signed in',
          severity: 'success',
          pathname: '/',
        })
        router.push('/')
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log(e.message)
        setSnackbar({
          message: 'Registered user not found',
          severity: 'error',
          pathname: '/sign_in',
        })
        setIsLoading(false)
      })
  }

  return (
    <Box
      sx={{
        backgroundColor: '#ffe0b6',
        minHeight: 'calc(100vh - 57px)',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ mb: 4, pt: 4 }}>
          <Typography
            component="h2"
            sx={{ fontSize: 32, color: 'black', fontWeight: 'bold' }}
          >
            Sign in
          </Typography>
        </Box>
        <Stack component="form" onSubmit={handleSubmit(onSubmit)} spacing={4}>
          <Controller
            name="email"
            control={control}
            rules={validationRules.email}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="text"
                label="E-mail"
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                sx={{ backgroundColor: 'white' }}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={validationRules.password}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="password"
                label="Password"
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                sx={{ backgroundColor: 'white' }}
              />
            )}
          />
          <LoadingButton
            variant="contained"
            color="warning"
            type="submit"
            loading={isLoading}
            sx={{ fontWeight: 'bold', color: 'white', textTransform: 'none' }}
          >
            Send
          </LoadingButton>
        </Stack>
      </Container>
    </Box>
  )
}

export default SignIn

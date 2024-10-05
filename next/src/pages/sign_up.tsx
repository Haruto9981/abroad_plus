import { LoadingButton } from '@mui/lab'
import { Box, Container, TextField, Typography, Stack } from '@mui/material'
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
}

const SignUp: NextPage = () => {
  const router = useRouter()
  const [, setSnackbar] = useSnackbarState()
  const [isLoading, setIsLoading] = useState(false)

  const { handleSubmit, control } = useForm<SignUpFormData>({
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
    name: {
      required: 'Enter your username',
      minLength: {
        value: 3,
        message: 'Your username must be at least 3 characters long.',
      },
      maxLength: {
        value: 20,
        message: 'Your username cannot exceed 20 characters.',
      },
      pattern: {
        value: /^\w+$/,
        message:
          'Your username can only contain alphabet letters, numbers, and underscores. Please enter a valid username.',
      },
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
        data: {
          ...data,
          confirm_success_url: confirmSuccessUrl,
          time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
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
            message: 'Please check your authentication email',
            severity: 'success',
            pathname: '/',
          })
          router.push('/')
        })
        .catch((e: AxiosError<{ error: string }>) => {
          console.log(e.message)
          setSnackbar({
            message: 'Invalid user information',
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
      <Container maxWidth="sm">
        <Box sx={{ mb: 4, pt: 4 }}>
          <Typography
            component="h2"
            sx={{ fontSize: 32, color: 'black', fontWeight: 'bold' }}
          >
            Sign Up
          </Typography>
        </Box>
        <Stack
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          spacing={4}
        >
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
          <Controller
            name="name"
            control={control}
            rules={validationRules.name}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="text"
                label="User Name"
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
            sx={{ fontWeight: 'bold', color: 'white', textTransform: 'none' }}
          >
            Send
          </LoadingButton>
        </Stack>
      </Container>
    </Box>
  )
}

export default SignUp

import CloseIcon from '@mui/icons-material/Close'
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
  IconButton,
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
import { useRequireSignedIn } from '@/hooks/useRequireSignedIn'
import { styles } from '@/styles'
import { fetcher } from '@/utils'

type profileProps = {
  first_name: string
  last_name: string
  country: string
  uni: string
  start_date: string
  end_date: string
  bio: string
}

type profileFormData = {
  first_name: string
  last_name: string
  country: string
  uni: string
  start_date: string
  end_date: string
  bio: string
  image: string
  profile: profileProps
}

const Profile: NextPage = () => {
  useRequireSignedIn()
  const [user, setUser] = useUserState()
  const [, setSnackbar] = useSnackbarState()
  const [isFetched, setIsFetched] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedFile, setSelectedFile] = useState<File>()
  const [previewUrl, setPreviewUrl] = useState('')
  const [country, setCountry] = useState('')
  const [isExistImageDeleted, setIsExistImageDeleted] = useState<boolean>(false)

  const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/current/user'
  const { data, error } = useSWR(user.isSignedIn ? url : null, fetcher)

  console.log(data)

  const profile: profileProps = useMemo(() => {
    if (!data) {
      return {
        first_name: '',
        last_name: '',
        country: '',
        uni: '',
        start_date: null,
        end_date: null,
        bio: '',
      }
    }
    return {
      first_name: data.first_name == '' ? '' : data.first_name,
      last_name: data.last_name == '' ? '' : data.last_name,
      country: data.country == '' ? '' : data.country,
      uni: data.uni == '' ? '' : data.uni,
      start_date: data.start_date == null ? '' : data.start_date,
      end_date: data.end_date == null ? '' : data.end_date,
      bio: data.bio == '' ? '' : data.bio,
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

  const handleDeleteChange = () => {
    setSelectedFile(undefined)
  }

  const handleExistImageDeleteChange = () => {
    setIsExistImageDeleted(true)
  }

  const validationRules = {
    first_name: {
      maxLength: {
        value: 15,
        message: 'Your first name cannot exceed 15 characters.',
      },
      pattern: {
        value: /^[a-zA-Z]*$/,
        message:
          'Your name can only contain alphabet letters. Please enter a valid name.',
      },
    },

    last_name: {
      maxLength: {
        value: 15,
        message: 'Your first name cannot exceed 15 characters.',
      },
      pattern: {
        value: /^[a-zA-Z]*$/,
        message:
          'Your name can only contain alphabet letters. Please enter a valid name.',
      },
    },

    bio: {
      maxLength: {
        value: 600,
        message: 'Your bio cannot exceed 600 characters.',
      },
    },
  }

  const onSubmit: SubmitHandler<profileFormData> = (data) => {
    // start_date, end_dateが両方入力された場合は、start_dateとend_dateが同じ日付、あるいは日付が論理的に誤っている場合弾く。
    if (data.start_date && data.end_date && data.start_date >= data.end_date) {
      return setSnackbar({
        message: 'Invaid SA period',
        severity: 'error',
        pathname: '/profile',
      })
    }
    if (data.country && data.uni) {
      switch (data.country) {
        case 'USA':
          if (
            !(
              data.uni === 'CSUMB' ||
              data.uni === 'Kansas' ||
              data.uni === 'Utah'
            )
          ) {
            return setSnackbar({
              message: 'The country and the university do not match',
              severity: 'error',
              pathname: '/profile',
            })
          }
          break
        case 'UK':
          if (!(data.uni === 'Aston' || data.uni === 'Canterbury')) {
            return setSnackbar({
              message: 'The country and the university do not match',
              severity: 'error',
              pathname: '/profile',
            })
          }
          break
        case 'Australia':
          if (!(data.uni === 'Queensland' || data.uni === 'SouthernCross')) {
            return setSnackbar({
              message: 'The country and the university do not match',
              severity: 'error',
              pathname: '/profile',
            })
          }
          break
        case 'Canada':
          if (data.uni !== 'Alberta') {
            return setSnackbar({
              message: 'The country and the university do not match',
              severity: 'error',
              pathname: '/profile',
            })
          }
          break
        case 'NewZealand':
          if (!(data.uni === 'Otago' || data.uni === 'Auckland')) {
            return setSnackbar({
              message: 'The country and the university do not match',
              severity: 'error',
              pathname: '/profile',
            })
          }
          break
      }
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

    formData.append('user[first_name]', data.first_name)
    formData.append('user[last_name]', data.last_name)
    formData.append('user[country]', data.country)
    formData.append('user[uni]', data.uni)
    formData.append('user[start_date]', data.start_date)
    formData.append('user[end_date]', data.end_date)
    formData.append('user[bio]', data.bio)
    if (selectedFile || isExistImageDeleted) {
      formData.append('user[image]', selectedFile || '')
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
          message: 'Profile updated!',
          severity: 'success',
          pathname: '/profile',
        })
      })
      .catch((err: AxiosError<{ error: string }>) => {
        console.log(err.message)
        setSnackbar({
          message: 'Failed to update profile',
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
          <Typography component="h2" sx={{ fontSize: 28, color: 'black' }}>
            Profile
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
                {data.image.url && !isExistImageDeleted ? (
                  <Box css={{ position: 'relative' }}>
                    <Avatar
                      sx={{ width: 175, height: 175, mb: 2 }}
                      alt="プレビュー"
                      src={data.image.url}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -12,
                        right: -12,
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
                  </Box>
                ) : (
                  <Avatar
                    sx={{ width: 175, height: 175, mb: 2 }}
                    alt="プレビュー"
                  />
                )}
              </>
            )}
            {selectedFile && (
              <Box css={{ position: 'relative' }}>
                <Avatar
                  sx={{ width: 175, height: 175, mb: 2 }}
                  alt="プレビュー"
                  src={previewUrl}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: -12,
                    right: -12,
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
              </Box>
            )}
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <Button
                  variant="contained"
                  component="label"
                  color="warning"
                  sx={{ textTransform: 'none' }}
                >
                  Choose your avator
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
          <Typography sx={{ mb: 1 }}>Name</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Controller
              name="first_name"
              control={control}
              rules={validationRules.first_name}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="text"
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  placeholder="First name"
                  onChange={(e) => {
                    field.onChange(e)
                  }}
                  sx={{ backgroundColor: 'white', width: '100%', mr: 1 }}
                />
              )}
            />
            <Controller
              name="last_name"
              control={control}
              rules={validationRules.last_name}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="text"
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  placeholder="Last name"
                  onChange={(e) => {
                    field.onChange(e)
                  }}
                  sx={{ backgroundColor: 'white', width: '100%', ml: 1 }}
                />
              )}
            />
          </Box>
          <Typography sx={{ mt: 3, mb: 1 }}>The Country of your SA</Typography>
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
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="UK">UK</MenuItem>
                  <MenuItem value="Australia">Australia</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="NewZealand">NewZealand</MenuItem>
                </Select>
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              </FormControl>
            )}
          />
          <Typography sx={{ mt: 3, mb: 1 }}>The Uni of your SA</Typography>
          <Controller
            name="uni"
            control={control}
            render={({ field }) => (
              <Select {...field} sx={{ backgroundColor: 'white' }} displayEmpty>
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                {!country && [
                  <MenuItem key="csumb" value="CSUMB">
                    California State University Monterey Bay
                  </MenuItem>,
                  <MenuItem key="kansas" value="Kansas">
                    The University of Kansas
                  </MenuItem>,
                  <MenuItem key="utah" value="Utah">
                    The University of Utah
                  </MenuItem>,
                  <MenuItem key="aston" value="Aston">
                    Aston University
                  </MenuItem>,
                  <MenuItem key="cccu" value="Canterbury">
                    Canterbury Christ Church University
                  </MenuItem>,
                  <MenuItem key="queensland" value="Queensland">
                    The University of Queensland
                  </MenuItem>,
                  <MenuItem key="southerncross" value="SouthernCross">
                    Southern Cross University
                  </MenuItem>,
                  <MenuItem key="alberta" value="Alberta">
                    The University of Alberta
                  </MenuItem>,
                  <MenuItem key="otago" value="Otago">
                    The University of Otago
                  </MenuItem>,
                  <MenuItem key="auckland" value="Auckland">
                    The University of Auckland
                  </MenuItem>,
                ]}
                {country === 'USA' && [
                  <MenuItem key="csumb" value="CSUMB">
                    California State University Monterey Bay
                  </MenuItem>,
                  <MenuItem key="kansas" value="Kansas">
                    The University of Kansas
                  </MenuItem>,
                  <MenuItem key="utah" value="Utah">
                    The University of Utah
                  </MenuItem>,
                ]}
                {country === 'UK' && [
                  <MenuItem key="aston" value="Aston">
                    Aston University
                  </MenuItem>,
                  <MenuItem key="cccu" value="Canterbury">
                    Canterbury Christ Church University
                  </MenuItem>,
                ]}
                {country === 'Australia' && [
                  <MenuItem key="queensland" value="Queensland">
                    The University of Queensland
                  </MenuItem>,
                  <MenuItem key="southerncross" value="SouthernCross">
                    Southern Cross University
                  </MenuItem>,
                ]}
                {country === 'Canada' && [
                  <MenuItem key="alberta" value="Alberta">
                    The University of Alberta
                  </MenuItem>,
                ]}
                {country === 'NewZealand' && [
                  <MenuItem key="otago" value="Otago">
                    The University of Otago
                  </MenuItem>,
                  <MenuItem key="auckland" value="Auckland">
                    The University of Auckland
                  </MenuItem>,
                ]}
              </Select>
            )}
          />
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ mr: 4 }}>
              <Typography sx={{ mt: 3, mb: 1 }}>
                Start date of your SA
              </Typography>
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
              <Typography sx={{ mt: 3, mb: 1 }}>End date of your SA</Typography>
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
          <Typography sx={{ mt: 3, mb: 1 }}>Bio</Typography>
          <Controller
            rules={validationRules.bio}
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
            sx={{
              mt: 3,
              fontWeight: 'bold',
              color: 'white',
              textTransform: 'none',
            }}
          >
            Save
          </LoadingButton>
        </Stack>
      </Container>
    </Box>
  )
}

export default Profile

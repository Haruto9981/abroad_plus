import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useUserState, useSnackbarState } from '@/hooks/useGlobalState'

const SignOut: NextPage = () => {
  const router = useRouter()
  const [, setUser] = useUserState()
  const [, setSnackbar] = useSnackbarState()

  useEffect(() => {
    localStorage.clear()
    setUser({
      id: 0,
      name: '',
      email: '',
      start_date: '',
      end_date: '',
      image: {
        url: '',
      },
      isSignedIn: false,
      isFetched: true,
      country: '',
      uni: '',
      bio: '',
      total_likes_count: 0,
      diaries: [],
      following: [],
      followers: [],
    })
    setSnackbar({
      message: 'You have successfully signed out',
      severity: 'success',
      pathname: '/',
    })
    router.push('/')
  }, [router, setUser, setSnackbar])

  return <></>
}

export default SignOut

import useSWR from 'swr'

export const useUserState = () => {
  type userStateType = {
    id: number
    name: string
    email: string
    country: string
    uni: string
    start_date: string
    end_date: string
    bio: string
    image: {
      url: string
    }
    following: following[]
    followers: followers[]
    isSignedIn: boolean
    isFetched: boolean
  }

  type following = {
    id: number
  }

  type followers = {
    id: number
  }

  const fallbackData: userStateType = {
    id: 0,
    name: '',
    email: '',
    country: '',
    uni: '',
    bio: '',
    start_date: '',
    end_date: '',
    image: {
      url: '',
    },
    following: [],
    followers: [],
    isSignedIn: false,
    isFetched: false,
  }

  const { data: state, mutate: setState } = useSWR('user', null, {
    fallbackData: fallbackData,
  })
  return [state, setState] as [userStateType, (value: userStateType) => void]
}

export const useSnackbarState = () => {
  type snackbarStateType = {
    message: null | string
    severity: null | 'success' | 'error'
    pathname: null | string
  }

  const fallbackData: snackbarStateType = {
    message: null,
    severity: null,
    pathname: null,
  }
  const { data: state, mutate: setState } = useSWR('snackbar', null, {
    fallbackData: fallbackData,
  })
  return [state, setState] as [
    snackbarStateType,
    (value: snackbarStateType) => void,
  ]
}

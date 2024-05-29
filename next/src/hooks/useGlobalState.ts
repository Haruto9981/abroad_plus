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
    total_likes_count: number
    total_diaries_count: number
    diaries: Diary[]
    following: following[]
    followers: followers[]
    isSignedIn: boolean
    isFetched: boolean
  }

  type Diary = {
    id: string
    title: string
    content: string
    image: { url: string }
    wordCount: number
    day: number
    monthName: string
    year: number
    wDay: string
    user: {
      id: string
      name: string
      country: string
      uni: string
      bio: string
      image: { url: string }
    }
    status: string
    favorites: number
    diaryComments: number
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
    total_likes_count: 0,
    total_diaries_count: 0,
    diaries: [],
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

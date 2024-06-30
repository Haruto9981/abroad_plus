import axios, { AxiosError } from 'axios'

type userStateType = {
  id: number
  name: string
  first_name: string
  last_name: string
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

const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/current/relationships'

export const handleFollowChange = (
  id: number,
  e: React.MouseEvent,
  user: userStateType,
  setUser: (value: userStateType) => void,
) => {
  e.preventDefault()
  const headers = {
    'Content-Type': 'application/json',
    'access-token': localStorage.getItem('access-token'),
    client: localStorage.getItem('client'),
    uid: localStorage.getItem('uid'),
  }
  const data = { followed_id: id }
  axios({
    method: 'POST',
    url: url,
    data: data,
    headers: headers,
  })
    .then(() => {
      setUser({
        ...user,
        following: [...user.following, { id: id }],
      })
    })
    .catch((e: AxiosError<{ error: string }>) => {
      console.log(e.message)
    })
}

export const handleUnfollowChange = (
  id: number,
  e: React.MouseEvent,
  user: userStateType,
  setUser: (value: userStateType) => void,
) => {
  e.preventDefault()
  const headers = {
    'Content-Type': 'application/json',
    'access-token': localStorage.getItem('access-token'),
    client: localStorage.getItem('client'),
    uid: localStorage.getItem('uid'),
  }
  const data = { followed_id: id }
  axios({ method: 'DELETE', url: url, data: data, headers: headers })
    .then(() => {
      setUser({
        ...user,
        following: user.following.filter((following) => following.id !== id),
      })
    })
    .catch((e: AxiosError<{ error: string }>) => {
      console.log(e.message)
    })
}

export const getUserFollowingIdArray = (
  userFollowing: object[],
  user: userStateType,
): number[] => {
  const array = []
  for (let i = 0; i < userFollowing.length; i++) {
    array.push(user.following[i].id)
  }

  return array
}

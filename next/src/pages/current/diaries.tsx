import {
  Box,
  Grid,
  Container,
  Typography,
  Card,
  CardContent,
  Divider,
} from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay'
import camelcaseKeys from 'camelcase-keys'
import dayjs, { Dayjs } from 'dayjs'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import useSWR from 'swr'
import CurrentUserDiaryCard from '@/components/CurrentDiaryCard'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { useUserState } from '@/hooks/useGlobalState'
import { useRequireSignedIn } from '@/hooks/useRequireSignedIn'
import { styles } from '@/styles'
import { fetcher } from '@/utils'

type CurrentDiaryProps = {
  id: string
  title: string
  content: string
  status: string
  image: {
    url: string
  }
  wordCount: number
  day: string
  monthName: string
  month: string
  year: string
  created_at: string
  wDay: string
  favorites: { user_id: number }[]
  diaryComments: object[]
}

interface Item {
  created_at: string
}

const CurrentDiaries: NextPage = () => {
  useRequireSignedIn()
  const [user] = useUserState()
  const [diaryWrittenDates, setDiaryWrittenDates] = useState<Dayjs[]>([])
  const [diaryCounter, setDiaryCounter] = useState<number>()
  const [daysInSelectedMonth, setDaysInSelectedMonth] = useState<number>()
  const [diariesInSpecificMonth, setDiariesInSpecificMonth] =
    useState<CurrentDiaryProps[]>()
  const [diariesInSpecificDay, setDiariesInSpecificDay] =
    useState<CurrentDiaryProps[]>()
  const [clickedDate, setClickedDate] = useState<Dayjs | null>(null)
  const [yearMonth, setYearMonth] = useState('')
  const [yearMonthDay, setYearMonthDay] = useState('')

  const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/current/diaries'
  const { data, error } = useSWR(user.isSignedIn ? url : null, fetcher)

  useEffect(() => {
    if (data) {
      const diaryWrittenDates = extractCreatedAt(data)
      const currentYear = new Date().getFullYear()
      const currentMonth = new Date().getMonth() + 1
      const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth)
      const diaryCount = writtenDiaryInMonth(
        currentYear,
        currentMonth,
        diaryWrittenDates,
      )
      setDiaryCounter(diaryCount)
      setDaysInSelectedMonth(daysInCurrentMonth)
      setDiaryWrittenDates(diaryWrittenDates)
    }
  }, [data])

  function handleCellClick(date: Dayjs) {
    setClickedDate(date)
  }

  const writtenDiaryInMonth = (
    year: number,
    month: number,
    diaryWrittenDates: dayjs.Dayjs[],
  ) => {
    let diaryCount = 0

    for (let i = 0; i < diaryWrittenDates.length; i++) {
      if (
        diaryWrittenDates[i].year() === year &&
        diaryWrittenDates[i].month() + 1 === month
      ) {
        diaryCount += 1
      }
    }
    return diaryCount
  }

  const extractCreatedAt = (array: Item[]) => {
    const createdAtSet = new Set(array.map((item: Item) => item.created_at))
    const uniqueCreatedAtArrayWithDayjs = Array.from(createdAtSet).map(
      (dateString) => dayjs(dateString),
    )
    return uniqueCreatedAtArrayWithDayjs
  }

  const diaryWrittenDay = (props: PickersDayProps<Date>) => {
    const { day } = props // eslint-disable-line

    if (!diaryWrittenDates) {
      return <PickersDay {...props} style={{ backgroundColor: 'white' }} />
    }

    const isSpecificDay = diaryWrittenDates.some((date) =>
      dayjs(day).isSame(date, 'day'),
    )

    const isClicked = clickedDate && dayjs(day).isSame(clickedDate, 'day')

    const cellStyle = {
      backgroundColor: isSpecificDay ? '#f15922' : '#f5f5f5',
      border: '1px solid transparent',
      cursor: 'pointer',
      ...(isClicked && { borderColor: 'black' }),
    }

    return (
      <PickersDay
        {...props}
        style={cellStyle}
        onClick={() => handleCellClick(dayjs(day))}
      />
    )
  }

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate()
  }

  const getDiariesInSpecificMonth = (year: number, month: number) => {
    const diariesList = []
    for (let i = 0; i < diaries.length; i++) {
      if (
        Number(diaries[i].year) === year &&
        Number(diaries[i].month) === month
      )
        diariesList.push(diaries[i])
    }

    return diariesList
  }

  const getDiariesInSpecificDay = (
    year: number,
    month: number,
    day: number,
  ) => {
    const diariesList = []
    for (let i = 0; i < diaries.length; i++) {
      if (
        Number(diaries[i].year) === year &&
        Number(diaries[i].month) === month &&
        Number(diaries[i].day) === day
      )
        diariesList.push(diaries[i])
    }

    return diariesList
  }

  const getMonthName = (month: number) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    return months[month - 1]
  }

  const handleMonthChange = (e: Date | null) => {
    if (e !== null) {
      const selectedYear = e.getFullYear()
      const selectedMonth = e.getMonth() + 1
      const daysInSelectedMonth = getDaysInMonth(selectedYear, selectedMonth)
      setDaysInSelectedMonth(daysInSelectedMonth)

      const diaryCount = writtenDiaryInMonth(
        selectedYear,
        selectedMonth,
        diaryWrittenDates,
      )
      setDiaryCounter(diaryCount)

      const diariesInSpecificMonth = getDiariesInSpecificMonth(
        selectedYear,
        selectedMonth,
      )
      setDiariesInSpecificDay(undefined)
      setDiariesInSpecificMonth(diariesInSpecificMonth)
      setYearMonth(`${getMonthName(selectedMonth)} ${selectedYear}`)
    }
  }

  const handleDayChange = (e: Date | null) => {
    if (e !== null) {
      const selectedYear = e.getFullYear()
      const selectedMonth = e.getMonth() + 1
      const selectedDay = e.getDate()
      const diariesInSpecificDay = getDiariesInSpecificDay(
        selectedYear,
        selectedMonth,
        selectedDay,
      )
      setDiariesInSpecificMonth(undefined)
      setDiariesInSpecificDay(diariesInSpecificDay)
      setYearMonthDay(
        `${selectedDay} ${getMonthName(selectedMonth)} ${selectedYear}`,
      )
    }
  }

  if (error) return <Error />
  if (!data) return <Loading />

  // この位置にあればfetchが間に合う。しかしバグの温床となるだろう。リファクタリング必須。
  const diaries: CurrentDiaryProps[] = camelcaseKeys(data)
  const firstThirty = diaries.slice(0, 30)

  return (
    <Box
      css={styles.pageMinHeight}
      sx={{ backgroundColor: '#ffe0b6', display: 'flex' }}
    >
      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Container maxWidth="sm" sx={{ display: { lg: 'none' } }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Card sx={{ borderRadius: 2, mb: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between  ' }}
                >
                  <Typography sx={{ mt: 2, fontSize: 12 }}>
                    Diary Calender
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, textAlign: 'right', mr: 4, my: 1 }}
                  >
                    Diary Records:{' '}
                    <span
                      style={{
                        fontWeight: 'bold',
                        color: '#ed1c24',
                        fontSize: 18,
                      }}
                    >
                      {diaryCounter}
                    </span>{' '}
                    / {daysInSelectedMonth} days
                  </Typography>
                </Box>
                <DateCalendar
                  onChange={handleDayChange}
                  onMonthChange={handleMonthChange}
                  views={['day']}
                  slots={{
                    day: diaryWrittenDay,
                  }}
                  sx={{
                    '& .MuiDayCalendar-header': {
                      // Needed for weekday (ie S M T W T F S )adjustments (and padding if wanted)
                      // Adjusts spacing between

                      width: '100%',
                      overflow: 'hidden',
                      justifyContent: 'space-between',
                      paddingLeft: '1em',
                      paddingRight: '1em',
                      // paddingTop: '1em',
                      // paddingBottom: "1em",
                    },
                    '& .MuiDayCalendar-weekContainer': {
                      // Adjusts spacing between days (ie 1, 2, 3.. 27, 28)
                      justifyContent: 'center',
                      overflow: 'hidden',
                      width: '100%',
                      margin: 0,
                    },
                    '& .MuiPickersDay-dayWithMargin': {
                      // Grows width/height of day buttons
                      width: 'calc(100% - 4px)',
                      height: 'calc(100% - 4px)',
                      aspectRatio: '1',
                      // height: 'auto',

                      fontSize: '1.0em',
                    },
                    '& .MuiBadge-root': {
                      // Parent of button management
                      aspectRatio: 1,
                      width: '10%',
                      display: 'flex',
                      alignContent: 'center',
                      justifyContent: 'center',
                    },
                    '& .MuiDayCalendar-weekDayLabel': {
                      // Manages size of weekday labels
                      aspectRatio: 1,
                      width: 'calc(10% - 4px)', // deals with margin
                      fontSize: '1.2em',
                    },
                    '& .MuiPickersCalendarHeader-root': {
                      paddingLeft: 0,
                    },
                    '& .MuiPickersCalendarHeader-label': {
                      // Manages month/year size
                      fontSize: '1.3em',
                    },
                    '& .MuiDayCalendar-monthContainer': {
                      // Not sure if needed, currently works tho
                      width: '100%',
                    },
                    '& .MuiPickersFadeTransitionGroup-root-MuiDateCalendar-viewTransitionContainer':
                      {
                        // Handles size of week row parent, 1.6 aspect is good for now
                        aspectRatio: '1.6',
                        overflow: 'hidden',
                      },
                    '& .MuiDayCalendar-slideTransition': {
                      // Handles size of week row parent, 1.6 aspect is good for now
                      // 1.2がベスト。1.6だとカレンダー下部が切れる。
                      aspectRatio: 1.2,
                      width: '100%',
                      overflow: 'hidden',
                    },

                    width: '100%',
                    maxHeight: '500%',
                  }}
                />
              </CardContent>
            </Card>
          </LocalizationProvider>
        </Container>
        <Grid container spacing={2}>
          <Container maxWidth="sm">
            {!diariesInSpecificMonth && !diariesInSpecificDay && (
              <Card sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Box>
                    <Typography sx={{ fontSize: 24, ml: 2 }}>
                      Recent Diaries
                    </Typography>
                  </Box>
                  <Divider sx={{ mt: 2, mb: 2 }} />
                  {firstThirty.length === 0 ? (
                    <Typography
                      sx={{ textAlign: 'center', color: 'gray', mt: 2 }}
                    >
                      No diaries
                    </Typography>
                  ) : (
                    <>
                      {firstThirty.map(
                        (diary: CurrentDiaryProps, i: number) => (
                          <Grid key={i} item xs={12} md={12}>
                            <Link href={'/current/diaries/' + diary.id}>
                              <CurrentUserDiaryCard
                                id={diary.id}
                                title={diary.title}
                                content={diary.content}
                                status={diary.status}
                                image={diary.image.url}
                                wordCount={diary.wordCount}
                                day={diary.day}
                                month={diary.monthName}
                                year={diary.year}
                                wDay={diary.wDay}
                                favorites={diary.favorites}
                                diaryComments={diary.diaryComments}
                              />
                            </Link>
                            <Divider sx={{ mt: 2, mb: 2 }} />
                          </Grid>
                        ),
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            )}
            {diariesInSpecificMonth && (
              <Card sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography sx={{ fontSize: 24 }}>Diaries</Typography>
                    <Typography
                      sx={{
                        fontSize: 24,
                        ml: 2,
                        display: { xs: 'none', lg: 'block' },
                      }}
                    >
                      {yearMonth}
                    </Typography>
                  </Box>
                  <Divider sx={{ mt: 2, mb: 2 }} />
                  {diariesInSpecificMonth.length === 0 ? (
                    <Typography
                      sx={{ textAlign: 'center', color: 'gray', mt: 2 }}
                    >
                      No diaries
                    </Typography>
                  ) : (
                    <>
                      {diariesInSpecificMonth.map(
                        (diary: CurrentDiaryProps, i: number) => (
                          <Grid key={i} item xs={12} md={12}>
                            <Link href={'/current/diaries/' + diary.id}>
                              <CurrentUserDiaryCard
                                id={diary.id}
                                title={diary.title}
                                content={diary.content}
                                status={diary.status}
                                image={diary.image.url}
                                wordCount={diary.wordCount}
                                day={diary.day}
                                month={diary.monthName}
                                year={diary.year}
                                wDay={diary.wDay}
                                favorites={diary.favorites}
                                diaryComments={diary.diaryComments}
                              />
                            </Link>
                            <Divider sx={{ mt: 2, mb: 2 }} />
                          </Grid>
                        ),
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            )}
            {diariesInSpecificDay && (
              <Card sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography sx={{ fontSize: 24 }}>Diaries</Typography>
                    <Typography
                      sx={{
                        fontSize: 24,
                        ml: 2,
                        display: { xs: 'none', lg: 'block' },
                      }}
                    >
                      {yearMonthDay}
                    </Typography>
                  </Box>
                  <Divider sx={{ mt: 2, mb: 2 }} />

                  {diariesInSpecificDay.length === 0 ? (
                    <Typography
                      sx={{ textAlign: 'center', color: 'gray', mt: 2 }}
                    >
                      No diaries
                    </Typography>
                  ) : (
                    <>
                      {diariesInSpecificDay.map(
                        (diary: CurrentDiaryProps, i: number) => (
                          <Grid key={i} item xs={12} md={12}>
                            <Link href={'/current/diaries/' + diary.id}>
                              <CurrentUserDiaryCard
                                id={diary.id}
                                title={diary.title}
                                content={diary.content}
                                status={diary.status}
                                image={diary.image.url}
                                wordCount={diary.wordCount}
                                day={diary.day}
                                month={diary.monthName}
                                year={diary.year}
                                wDay={diary.wDay}
                                favorites={diary.favorites}
                                diaryComments={diary.diaryComments}
                              />
                            </Link>
                            <Divider sx={{ mt: 2, mb: 2 }} />
                          </Grid>
                        ),
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            )}
          </Container>
        </Grid>
      </Container>
      <Container
        maxWidth="sm"
        sx={{ mt: 4, display: { xs: 'none', lg: 'block' } }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Card sx={{ borderRadius: 2 }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between  ' }}>
                <Typography sx={{ mt: 2, fontSize: 20 }}>
                  Diary Calender
                </Typography>
                <Typography
                  sx={{ fontSize: 20, textAlign: 'right', mr: 4, my: 1 }}
                >
                  Diary Records:{' '}
                  <span
                    style={{
                      fontWeight: 'bold',
                      color: '#ed1c24',
                      fontSize: 30,
                    }}
                  >
                    {diaryCounter}
                  </span>{' '}
                  / {daysInSelectedMonth} days
                </Typography>
              </Box>

              <DateCalendar
                onChange={handleDayChange}
                onMonthChange={handleMonthChange}
                views={['day']}
                slots={{
                  day: diaryWrittenDay,
                }}
                sx={{
                  '& .MuiDayCalendar-header': {
                    // Needed for weekday (ie S M T W T F S )adjustments (and padding if wanted)
                    // Adjusts spacing between

                    width: '100%',
                    overflow: 'hidden',
                    justifyContent: 'space-between',
                    paddingLeft: '1em',
                    paddingRight: '1em',
                    // paddingTop: '1em',
                    // paddingBottom: "1em",
                  },
                  '& .MuiDayCalendar-weekContainer': {
                    // Adjusts spacing between days (ie 1, 2, 3.. 27, 28)
                    justifyContent: 'center',
                    overflow: 'hidden',
                    width: '100%',
                    margin: 0,
                  },
                  '& .MuiPickersDay-dayWithMargin': {
                    // Grows width/height of day buttons
                    width: 'calc(100% - 4px)',
                    height: 'calc(100% - 4px)',
                    aspectRatio: '1',
                    // height: 'auto',

                    fontSize: '1.0em',
                  },
                  '& .MuiBadge-root': {
                    // Parent of button management
                    aspectRatio: 1,
                    width: '10%',
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                  },
                  '& .MuiDayCalendar-weekDayLabel': {
                    // Manages size of weekday labels
                    aspectRatio: 1,
                    width: 'calc(10% - 4px)', // deals with margin
                    fontSize: '1.2em',
                  },
                  '& .MuiPickersCalendarHeader-root': {
                    paddingLeft: 0,
                  },
                  '& .MuiPickersCalendarHeader-label': {
                    // Manages month/year size
                    fontSize: '1.3em',
                  },
                  '& .MuiDayCalendar-monthContainer': {
                    // Not sure if needed, currently works tho
                    width: '100%',
                  },
                  '& .MuiPickersFadeTransitionGroup-root-MuiDateCalendar-viewTransitionContainer':
                    {
                      // Handles size of week row parent, 1.6 aspect is good for now
                      aspectRatio: '1.6',
                      overflow: 'hidden',
                    },
                  '& .MuiDayCalendar-slideTransition': {
                    // Handles size of week row parent, 1.6 aspect is good for now
                    // 1.2がベスト。1.6だとカレンダー下部が切れる。
                    aspectRatio: 1.2,
                    width: '100%',
                    overflow: 'hidden',
                  },

                  width: '100%',
                  maxHeight: '500%',
                }}
              />
            </CardContent>
          </Card>
        </LocalizationProvider>
      </Container>
    </Box>
  )
}

export default CurrentDiaries

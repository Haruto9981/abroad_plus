import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay'
import dayjs, { Dayjs } from 'dayjs'
import * as React from 'react'
import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { useUserState } from '@/hooks/useGlobalState'
import { useRequireSignedIn } from '@/hooks/useRequireSignedIn'
import { fetcher } from '@/utils'

interface Item {
  updated_at: string
}

export const Calendar: React.FC = () => {
  useRequireSignedIn()
  const [user] = useUserState()
  const [diaryWrittenDates, setDiaryWrittenDates] = useState<Dayjs[]>([])

  const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/current/diaries'
  const { data } = useSWR(user.isSignedIn ? url : null, fetcher)

  useEffect(() => {
    if (data) {
      const diaryWrittenDates = extractUpdatedAt(data)
      setDiaryWrittenDates(diaryWrittenDates)
    }
  }, [data])

  function extractUpdatedAt(array: Item[]) {
    const updatedAtSet = new Set(array.map((item: Item) => item.updated_at))
    const uniqueUpdatedAtArrayWithDayjs = Array.from(updatedAtSet).map(
      (dateString) => dayjs(dateString),
    )
    return uniqueUpdatedAtArrayWithDayjs
  }

  function diaryWrittenDay(props: PickersDayProps<Dayjs>) {
    const { day } = props

    if (!diaryWrittenDates) {
      return <PickersDay {...props} style={{ backgroundColor: 'white' }} />
    }

    const isSpecificDay = diaryWrittenDates.some((date) =>
      dayjs(day).isSame(date, 'day'),
    )

    const cellStyle = {
      backgroundColor: isSpecificDay ? '#f15922' : 'white',
    }

    return <PickersDay {...props} style={cellStyle} />
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateCalendar
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
    </LocalizationProvider>
  )
}

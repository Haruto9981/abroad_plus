import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay'
import dayjs, { Dayjs } from 'dayjs'
import * as React from 'react'

export const Calendar: React.FC = () => {
  const specificDates = [dayjs('2024-05-02'), dayjs('2024-05-03')]

  function SpecificDay(props: PickersDayProps<Dayjs>) {
    const { day } = props
    const isSpecificDay = specificDates.some((date) =>
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
          day: SpecificDay,
        }}
        sx={{
          '& .MuiBadge-badge': {
            // Adjustment for recordMade badge
            fontSize: '0.7em',
            paddingTop: '4px',
          },
          // '& .MuiPickersBasePicker-pickerView': {
          //     maxHeight: '800px',
          //   },

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
            aspectRatio: 1.4,
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

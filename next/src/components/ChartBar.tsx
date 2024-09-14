import { Button, Box, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js'
import dayjs from 'dayjs'
import { useState } from 'react'
import { Bar } from 'react-chartjs-2'

export const ChartBar = ({ diaries }) => {
  const today = new Date()
  const initialStartDate = new Date(today.getTime())
  initialStartDate.setDate(today.getDate() - 7)

  const [startDate, setStartDate] = useState(initialStartDate)
  const [endDate, setEndDate] = useState(today)

  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  }

  const formatDate = (date: Date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }
  const getDates = (startDate: Date, endDate: Date) => {
    const dateArray = []
    const currentDate = new Date(startDate.getTime())

    while (currentDate <= endDate) {
      dateArray.push(formatDate(currentDate))
      currentDate.setDate(currentDate.getDate() + 1)
    }

    return dateArray
  }

  const getDiaryWrittenDates = () => {
    const dates = diaries.map((diary) => diary.createdAt)
    const uniqueDates: Date[] = Array.from(new Set(dates))
    const stringDates = uniqueDates.map((date) => date.toString())

    return stringDates
  }

  const labels = getDates(startDate, endDate)
  const diaryWrittenDates = getDiaryWrittenDates()

  const getDateWordCount = (date: string) => {
    let wordCount = 0

    const targetDiaries = diaries.filter((diary) => {
      return diary.createdAt.toString() === date
    })

    targetDiaries.forEach((diary) => {
      wordCount += diary.wordCount
    })

    return wordCount
  }

  const getWordCount = (labels: string[], dates: string[]) => {
    const wordCount: number[] = []
    labels.forEach((label) => {
      if (dates.includes(label)) {
        wordCount.push(getDateWordCount(label))
      } else {
        wordCount.push(0)
      }
    })
    return wordCount
  }

  const wordCount = getWordCount(labels, diaryWrittenDates)

  const data = {
    labels,
    datasets: [
      {
        label: 'Diary Word Count',
        data: wordCount,
        backgroundColor: 'rgba(255, 170, 0, 0.2)',
        borderColor: 'rgba(255, 170, 0, 1)',
        borderWidth: 1,
      },
    ],
  }

  const handleChange = (type: string) => {
    const today = new Date()
    let startDate

    switch (type) {
      case '1w':
        startDate = new Date(today.getTime())
        startDate.setDate(today.getDate() - 7)
        break
      case '1m':
        startDate = new Date(today.getTime())
        startDate.setDate(today.getDate() - 30)
        break
      case '3m':
        startDate = new Date(today.getTime())
        startDate.setDate(today.getDate() - 90)
        break
      case '6m':
        startDate = new Date(today.getTime())
        startDate.setDate(today.getDate() - 180)
        break
      case '1y':
        startDate = new Date(today.getTime())
        startDate.setDate(today.getDate() - 365)
        break
      default:
        return
    }

    setStartDate(startDate)
    setEndDate(today)
  }

  const handleFromChange = (value: dayjs.Dayjs | null) => {
    if (value) {
      setStartDate(value.toDate())
    }
  }

  const handleToChange = (value: dayjs.Dayjs | null) => {
    if (value) {
      setEndDate(value.toDate())
    }
  }
  return (
    <>
      <Typography sx={{ fontSize: 20, mt: 1, ml: 2 }}>Word Count</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              format="YYYY-MM-DD"
              label="From"
              value={dayjs(startDate)}
              sx={{ mx: 1 }}
              onChange={(value) => {
                handleFromChange(value)
              }}
              slotProps={{
                day: {
                  sx: {
                    '&.MuiPickersDay-root.Mui-selected': {
                      backgroundColor: '#FF6600',
                    },
                  },
                },
                desktopPaper: {
                  sx: {
                    '.MuiPickersYear-yearButton.Mui-selected': {
                      backgroundColor: '#FF6600',
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              format="YYYY-MM-DD"
              label="To"
              value={dayjs(endDate)}
              sx={{ mx: 1 }}
              onChange={(value) => {
                handleToChange(value)
              }}
              slotProps={{
                day: {
                  sx: {
                    '&.MuiPickersDay-root.Mui-selected': {
                      backgroundColor: '#FF6600',
                    },
                  },
                },
                desktopPaper: {
                  sx: {
                    '.MuiPickersYear-yearButton.Mui-selected': {
                      backgroundColor: '#FF6600',
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>
        </Box>
        <Box sx={{ mt: 1, ml: 4 }}>
          <Button
            color="warning"
            variant="outlined"
            sx={{
              color: 'black',
              borderColor: '#c0c0c0',
              textTransform: 'none',
              borderRadius: 2,
              boxShadow: 'none',
              mr: 1,
            }}
            onClick={() => {
              handleChange('1w')
            }}
          >
            a week
          </Button>
          <Button
            color="warning"
            variant="outlined"
            sx={{
              color: 'black',
              borderColor: '#c0c0c0',
              textTransform: 'none',

              borderRadius: 2,
              boxShadow: 'none',
              mr: 1,
            }}
            onClick={() => {
              handleChange('1m')
            }}
          >
            a month
          </Button>
          <Button
            color="warning"
            variant="outlined"
            sx={{
              color: 'black',
              borderColor: '#c0c0c0',
              textTransform: 'none',

              borderRadius: 2,
              boxShadow: 'none',
              mr: 1,
            }}
            onClick={() => {
              handleChange('3m')
            }}
          >
            3 months
          </Button>
          <Button
            color="warning"
            variant="outlined"
            sx={{
              color: 'black',
              borderColor: '#c0c0c0',
              textTransform: 'none',
              borderRadius: 2,
              boxShadow: 'none',
              mr: 1,
            }}
            onClick={() => {
              handleChange('6m')
            }}
          >
            6 months
          </Button>
          <Button
            color="warning"
            variant="outlined"
            sx={{
              color: 'black',
              borderColor: '#c0c0c0',
              textTransform: 'none',
              borderRadius: 2,
              boxShadow: 'none',
              mr: 1,
            }}
            onClick={() => {
              handleChange('1y')
            }}
          >
            a year
          </Button>
        </Box>
      </Box>

      <Bar options={options} data={data} sx={{ width: 'auto' }} />
    </>
  )
}

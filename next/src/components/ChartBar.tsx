import { Button, Box, Typography } from '@mui/material'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { useState } from 'react'
import { Bar } from 'react-chartjs-2'

export const ChartBar = ({ diaries }) => {
  const [range, setRange] = useState(7)
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
    const currentDate = startDate

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

  const startDate = new Date(new Date().setDate(new Date().getDate() - range))
  const endDate = new Date()
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
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  }

  const handleChange = (type: string) => {
    switch (type) {
      case '1w':
        setRange(7)
        break
      case '1m':
        setRange(30)
        break
      case '3m':
        setRange(90)
        break
      case '6m':
        setRange(180)
        break
      case '1y':
        setRange(365)
        break
    }
  }
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
        <Typography sx={{ fontSize: 28 }}>Word Count</Typography>
        <Box>
          <Button
            color="warning"
            variant="outlined"
            sx={{
              textTransform: 'none',
              fontSize: 14,
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
              textTransform: 'none',
              fontSize: 14,
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
              textTransform: 'none',
              fontSize: 14,
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
              textTransform: 'none',
              fontSize: 14,
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
              textTransform: 'none',
              fontSize: 14,
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

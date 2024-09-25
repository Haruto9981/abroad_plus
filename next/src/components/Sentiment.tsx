import { Button, Box, Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import {
  ChartOptions,
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import dayjs from 'dayjs'
import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import useSWR from 'swr'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { fetcher } from '@/utils'

type SentimentData = {
  date: string
  sentiment: number
}

export const Sentiment = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  )
  const url =
    process.env.NEXT_PUBLIC_API_BASE_URL + '/current/analyze/sentiment'
  const { data, error } = useSWR(url, fetcher)
  const [, setFilteredData] = useState(data)
  const [startDate, setStartDate] = useState(() => {
    const date = new Date()
    date.setMonth(date.getMonth() - 1)
    return date
  })
  const [endDate, setEndDate] = useState(new Date())

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  }

  if (error) return <Error />
  if (!data) return <Loading />

  const filterData = (
    data: SentimentData[],
    startDate: Date,
    endDate: Date,
  ) => {
    return data
      .filter((item) => {
        const itemDate = new Date(item.date)
        return (
          (!startDate || itemDate >= new Date(startDate)) &&
          (!endDate || itemDate <= new Date(endDate))
        )
      })
      .sort(
        (a: SentimentData, b: SentimentData) =>
          new Date(a.date).getTime() - new Date(b.date).getTime(),
      )
  }

  const filterDataByPreset = (data: SentimentData[], range: string) => {
    const now = new Date()
    let startDate

    switch (range) {
      case 'week':
        startDate = new Date(now.setDate(now.getDate() - 7))
        break
      case 'a month':
        startDate = new Date(now.setMonth(now.getMonth() - 1))
        break
      case '3 months':
        startDate = new Date(now.setMonth(now.getMonth() - 3))
        break
      case '6 months':
        startDate = new Date(now.setMonth(now.getMonth() - 6))
        break
      case 'a year':
        startDate = new Date(now.setFullYear(now.getFullYear() - 1))
        break
      default:
        startDate = new Date(0)
    }
    setStartDate(startDate)
    setEndDate(new Date())
    return filterData(data, startDate, endDate)
  }

  const handlePresetFilter = (range: string) => {
    const newData = filterDataByPreset(data, range)
    setFilteredData(newData)
  }

  const handleFilter = (startDate: Date, endDate: Date) => {
    setStartDate(startDate)
    setEndDate(endDate)
    const newData = filterData(data, startDate, endDate)
    setFilteredData(newData)
  }

  const labels = filterData(data, startDate, endDate)?.map((obj) => obj.date)
  const sentiment = filterData(data, startDate, endDate)?.map(
    (obj) => obj.sentiment,
  )

  const sentimentData = {
    labels: labels,
    datasets: [
      {
        label: 'Sentiment',
        data: sentiment,
        borderColor: sentiment?.map((value: number) =>
          value > 0 ? 'rgba(255, 182, 193, 1)' : 'rgba(173, 216, 230, 1)',
        ),
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        segment: {
          borderColor: (ctx: { p1: { parsed: { y: number } } }) =>
            ctx.p1.parsed.y > 0
              ? 'rgba(255, 182, 193, 1)'
              : 'rgba(173, 216, 230, 1)',
        },
      },
    ],
  }

  return (
    <>
      <Typography sx={{ fontSize: 20, mt: 5, ml: 2 }}>Sentiment</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              format="YYYY-MM-DD"
              label="From"
              value={dayjs(startDate)}
              sx={{ mx: 1 }}
              onChange={(value) => {
                if (value) {
                  handleFilter(value.toDate(), endDate)
                }
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
                if (value) {
                  handleFilter(startDate, value.toDate())
                }
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
            onClick={() => handlePresetFilter('a week')}
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
            onClick={() => handlePresetFilter('a month')}
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
            onClick={() => handlePresetFilter('3 months')}
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
            onClick={() => handlePresetFilter('6 months')}
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
            onClick={() => handlePresetFilter('a year')}
          >
            a year
          </Button>
        </Box>
      </Box>

      <Line options={options} data={sentimentData} />
    </>
  )
}

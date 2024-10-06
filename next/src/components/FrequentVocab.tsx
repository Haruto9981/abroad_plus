import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import { FrequentVocabBar } from './FrequentVocabBar'

export const FrequentVocab = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const formattedDate = `${year}-${month}`
  const [targetMonth, setTargetMonth] = useState(formattedDate)

  function getNextMonth(dateString: string) {
    const [year, month] = dateString.split('-').map(Number)

    const nextMonthDate = new Date(year, month)
    const nextYear = nextMonthDate.getFullYear()
    const nextMonth = String(nextMonthDate.getMonth() + 1).padStart(2, '0')

    return `${nextYear}-${nextMonth}`
  }

  function getPreviousMonth(dateString: string) {
    const [year, month] = dateString.split('-').map(Number)
    const prevMonthDate = new Date(year, month - 2)
    const prevYear = prevMonthDate.getFullYear()
    const prevMonth = String(prevMonthDate.getMonth() + 1).padStart(2, '0')

    return `${prevYear}-${prevMonth}`
  }
  return (
    <>
      <Box sx={{ display: {sm: 'flex', xs: 'block'}, justifyContent: 'space-between', mt: 5 }}>
        <Box>
          <Typography sx={{ fontSize: 20, mt: 1, ml: 2 }}>
            Word Frequency
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', mt: 1 }}>
          <Typography sx={{ fontSize: 20, mt: 0.5, ml: 2, mr: 2 }}>
            {targetMonth}
          </Typography>
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
              setTargetMonth(getPreviousMonth(targetMonth))
            }}
          >
            Previous
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
              setTargetMonth(getNextMonth(targetMonth))
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
      <FrequentVocabBar targetMonth={targetMonth} />
    </>
  )
}

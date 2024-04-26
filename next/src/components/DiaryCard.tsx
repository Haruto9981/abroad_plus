import { Box, Card, CardContent, Typography } from '@mui/material'

type diaryCardProps = {
  id: number
  title: string
  content: string
  imageUrl: string
  wordCount: number
  fromToday: string
  userName: string
}

const omit = (text: string) => (len: number) => (ellipsis: string) =>
  text.length >= len ? text.slice(0, len - ellipsis.length) + ellipsis : text

const DiaryCard = (props: diaryCardProps) => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            component="h3"
            sx={{
              mb: 2,
              fontSize: 20,
              fontWeight: 'bold',
              lineHeight: 1.5,
            }}
          >
            {omit(props.title)(40)('...')}
          </Typography>
          <Typography sx={{ fontSize: 16 }}>{props.wordCount} words</Typography>
        </Box>
        <Typography sx={{ mb: 2 }}>
          {omit(props.content)(200)('...')}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: 12 }}>{props.userName}</Typography>
          <Typography sx={{ fontSize: 12 }}>{props.fromToday}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default DiaryCard

import { Box } from '@mui/material'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import useSWR from 'swr'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
import { fetcher } from '@/utils'

export const FrequentVocabBar = (props: { targetMonth: string }) => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)
  const url =
    process.env.NEXT_PUBLIC_API_BASE_URL +
    '/current/analyze/frequent_vocab?target-month=' +
    props.targetMonth
  const { data, error } = useSWR(url, fetcher)

  if (error) return <Error />
  if (!data) return <Loading />

  const nounsLabel = data.nouns?.map((obj) => obj.lemmatized)
  const nounsCount = data.nouns?.map((obj) => obj.count)
  const verbsLabel = data.verbs?.map((obj) => obj.lemmatized)
  const verbsCount = data.verbs?.map((obj) => obj.count)
  const adjectivesLabel = data.adjectives?.map((obj) => obj.lemmatized)
  const adjectivesCount = data.adjectives?.map((obj) => obj.count)
  const adverbsLabel = data.adverbs?.map((obj) => obj.lemmatized)
  const adverbsCount = data.adverbs?.map((obj) => obj.count)

  const nounsData = {
    labels: nounsLabel,
    datasets: [
      {
        label: 'Nouns Frequency',
        data: nounsCount,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const verbsData = {
    labels: verbsLabel,
    datasets: [
      {
        label: 'Verbs Frequency',
        data: verbsCount,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const adjectivesData = {
    labels: adjectivesLabel,
    datasets: [
      {
        label: 'Adjectives Frequency',
        data: adjectivesCount,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const adverbsData = {
    labels: adverbsLabel,
    datasets: [
      {
        label: 'Adverbs Frequency',
        data: adverbsCount,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Box sx={{ flex: 1, minWidth: 0, maxWidth: '100%' }}>
          <Bar options={options} data={nounsData} sx={{ width: '100%' }} />
          <Bar options={options} data={verbsData} sx={{ width: '100%' }} />
        </Box>
        <Box sx={{ flex: 1, minWidth: 0, maxWidth: '100%' }}>
          <Bar options={options} data={adjectivesData} sx={{ width: '100%' }} />
          <Bar options={options} data={adverbsData} sx={{ width: '100%' }} />
        </Box>
      </Box>
    </>
  )
}

"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, Title)

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const balances = accounts.map((a) => a.currentBalance)
  const accountNames = accounts.map((a) => a.name)
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: balances,
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
      }
    ],
    labels: accountNames
   }

  return (
    <Doughnut data={[]} />
  )
}

export default DoughnutChart
import { TDoughnutChartData } from '../types'

export const doughnutChartData: TDoughnutChartData = {
  labels: ['纯文本', '视频类', '图文类'],
  datasets: [
    {
      label: 'Population (millions)',
      backgroundColor: ['teal', 'info', 'primary'],
      data: [2478, 5267, 734],
    },
  ],
}

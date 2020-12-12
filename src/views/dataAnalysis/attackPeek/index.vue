<template>
  <div class="app-container">
    <div
      :id="id"
      :class="className"
      :style="{ height: height, width: width }"
    />
  </div>
</template>

<script>
import * as echarts from 'echarts'
import chartConfig from './config'
import { parseTime } from '@/utils/index'
export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '90vh'
    }
  },
  data() {
    return {
      chart: null,
      endDate: Date.now()
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption(chartConfig)
      this.refreshData()
    },
    refreshData() {
      const dataX = []
      const dataY = []
      const testData = this.createTestData(30)
      testData.forEach(v => {
        dataX.push(v.time)
        dataY.push(v.count)
      })

      this.chart.setOption({
        xAxis: {
          data: dataX
        },
        series: [
          {
            name: '入侵次数',
            data: dataY
          }
        ]
      })
    },
    createTestData(count) {
      const res = []
      const oneDay = 1000 * 60 * 60 * 24
      while (count >= 0) {
        res.push({
          time: parseTime(new Date(this.endDate - oneDay * count), '{y}-{m}-{d}'),
          count: Math.round((Math.random() * 100000 * (count + 1)) % 10000)
        })
        count--
      }
      return res
    }
  }
}
</script>

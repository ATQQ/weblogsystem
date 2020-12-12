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
require('echarts/theme/macarons') // echarts theme
import chartConfig from './config'

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
      default: '50vh'
    }
  },
  data() {
    return {
      chart: null
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
      const testData = this.createTestData(10)
      testData.forEach(v => {
        const { count, name } = v
        dataX.push(name)
        dataY.push({ value: count, name })
      })

      this.chart.setOption({
        series: [
          {
            name: '访问来源',
            data: dataY
          }
        ],
        legend: {
          data: dataX
        }
      })
    },
    createTestData(count) {
      const res = []
      const location = ['局域网', '美国', '日本', '广东省', '荷兰', '香港', '北京', '四川']
      location.forEach(v => {
        res.push({
          count: Math.round((Math.random() * 100000) + 1000),
          name: v
        })
      })
      return res
    }
  }
}
</script>

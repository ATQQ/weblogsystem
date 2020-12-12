<template>
  <div>
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
      const testData = this.createTestData()
      testData.sort((a, b) => b.counts - a.counts)
      testData.forEach(v => {
        dataX.push(v.method)
        dataY.push(v.counts)
      })

      this.chart.setOption({
        xAxis: {
          data: dataX
        },
        series: [
          {
            name: '攻击次数',
            data: dataY
          }
        ]
      })
    },
    createTestData() {
      const res = []
      const methods = ['SQL 注入', 'XSS', '账号密码错误', 'CSRF', '中间人']
      methods.forEach((method, i) => {
        const counts = Math.round(
          (Math.random() * 100000) % (1000 * Math.random())
        )
        res.push({
          method,
          counts
        })
      })
      return res
    }
  }
}
</script>

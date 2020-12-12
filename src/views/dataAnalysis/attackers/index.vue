<template>
  <div class="">
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
      const testData = this.createTestData(10)
      testData.sort((a, b) => b.counts - a.counts)
      testData.forEach(v => {
        dataX.push(v.visitorIp)
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
    createTestData(count) {
      const res = []
      while (count >= 0) {
        res.push({
          visitorId: count,
          visitorIp: `192.168.${count}.${Math.round(
            (Math.random() * 1000) % 100
          )}`,
          counts: Math.round(((Math.random() * 100000) % 10000) * (count + 1))
        })
        count--
      }
      return res
    }
  }
}
</script>

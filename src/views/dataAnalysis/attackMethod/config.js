export default {
  backgroundColor: '#344b58',
  title: {
    text: '入侵方式',
    x: '20',
    top: '20',
    left: '10',
    textStyle: {
      color: '#fff',
      fontSize: '22'
    }
  },
  tooltip: {},
  xAxis: {
    name: '入侵方式',
    data: [],
    axisLine: {
      lineStyle: {
        color: '#90979c'
      }
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitArea: {
      show: false
    },
    axisLabel: {
      interval: 0
    }
  },
  yAxis: {
    name: '入侵次数',
    type: 'value',
    splitLine: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: '#90979c'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      interval: 0
    },
    splitArea: {
      show: false
    }
  },
  series: [{
    name: '攻击次数',
    type: 'bar',
    data: [],
    itemStyle: {
      normal: {
        // 每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
        color: function(params) {
          var colorList = ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
          return colorList[params.dataIndex % colorList.length]
        }
      },
      // 鼠标悬停时：
      emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }]
}

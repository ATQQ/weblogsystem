export default {
  backgroundColor: '#344b58',
  title: {
    text: '入侵峰值',
    x: '20',
    top: '20',
    textStyle: {
      color: '#fff',
      fontSize: '22'
    },
    subtextStyle: {
      color: '#90979c',
      fontSize: '16'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      textStyle: {
        color: '#fff'
      }
    }
  },
  grid: {
    left: '5%',
    right: '5%',
    borderWidth: 0,
    top: 150,
    bottom: 95,
    textStyle: {
      color: '#fff'
    }
  },
  legend: {
    x: '5%',
    top: '10%',
    textStyle: {
      color: '#90979c'
    },
    data: ['入侵次数']
  },
  calculable: true,
  xAxis: [{
    type: 'category',
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

    },
    data: []
  }],
  yAxis: [{
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
  }],
  dataZoom: [{
    show: true,
    height: 30,
    xAxisIndex: [
      0
    ],
    bottom: 30,
    start: 10,
    end: 80,
    handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
    handleSize: '110%',
    handleStyle: {
      color: '#d3dee5'

    },
    textStyle: {
      color: '#fff' },
    borderColor: '#90979c'

  }, {
    type: 'inside',
    show: true,
    height: 15,
    start: 1,
    end: 35
  }],
  series: [
    {
      name: '入侵次数',
      type: 'line',
      stack: 'total',
      symbolSize: 10,
      symbol: 'circle',
      itemStyle: {
        normal: {
          color: 'rgba(252,230,48,1)',
          barBorderRadius: 0,
          label: {
            show: true,
            position: 'top',
            formatter(p) {
              return p.value > 0 ? p.value : ''
            }
          }
        }
      },
      data: []
    }
  ]
}

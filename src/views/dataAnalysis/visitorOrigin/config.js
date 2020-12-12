export default {
  title: {
    text: '访问来源',
    x: '20',
    top: '20',
    subtextStyle: {
      color: '#90979c',
      fontSize: '16'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    left: 'center',
    bottom: '10',
    data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      roseType: 'radius',
      radius: [15, 95],
      center: ['50%', '50%'],
      data: [
        { value: 320, name: 'Industries' },
        { value: 240, name: 'Technology' },
        { value: 149, name: 'Forex' },
        { value: 100, name: 'Gold' },
        { value: 59, name: 'Forecasts' }
      ],
      animationEasing: 'cubicInOut',
      animationDuration: 2600
    }
  ]
}

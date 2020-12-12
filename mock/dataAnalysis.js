function createTestData(count) {
  const res = []
  while (count >= 0) {
    res.push({
      visitorId: count,
      visitorIp: `192.168.${count}.${Math.round(
        (Math.random() * 1000) % 100
      )}`,
      counts: Math.round((Math.random() * 100000 * (count + 1)) % 10000),
      note: `详细${count}`,
      count: Math.round((Math.random() * 1000) % 100)
    })
    count--
  }
  return res
}
module.exports = [
  // 前10攻击者
  {
    url: '/api/dataAnalysis/attackers',
    type: 'get',
    response: () => {
      return {
        code: 0,
        data: createTestData(10)
      }
    }
  }
]


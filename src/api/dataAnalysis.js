import request from '@/utils/request'

/**
 * 获取前10攻击者数据
 */
export function getAttackers() {
  return request({
    url: '/api/dataAnalysis/attackers',
    method: 'get'
  })
}

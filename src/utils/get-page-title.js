import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Web日志挖掘系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}

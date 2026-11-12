/*
 * @Author: 谭洁莹
 * @Date: 2026-11-04 14:08:23
 * @LastEditTime: 2026-11-12 16:43:24
 * @FilePath: /plugins/legacy-link-bridge.client.ts
 * @Description: 版本过渡方案，劫持指定链接的Nuxt更改为普通加载
 */
const newVersionPaths = new Set([
  '/contact-us',
  '/cataract/multifocal-lens',
  '/cataract/light-adjustable-lens',
  '/cataract/extended-depth-of-focus-lenses',
  '/medical-service/cataract',
  '/medical-service/maculopathy',
  '/medical-service/conjunctivitis',
  '/medical-service/Retinal-tear-and-detachment',
  '/medical-service/diabetic-retinopathy',
  '/eyecmer-ct',
])

// 统一路径格式，兼容末尾斜杠和大小写
const normalizePath = (path: string) => {
  return path.replace(/\/+$/, '').toLowerCase() || '/'
}

// 去掉语言前缀
const getBasePath = (path: string) => {
  return normalizePath(path.replace(/^\/(en|cn)(?=\/|$)/i, ''))
}

export default defineNuxtPlugin(() => {
  const handleClick = (event: MouseEvent) => {
    // 只处理鼠标左键普通点击
    if (
      event.button !== 0 ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }

    const target = event.target

    if (!(target instanceof Element)) return

    const link = target.closest('a[href]') as HTMLAnchorElement | null

    if (!link) return

    // 保留下载、锚点和新窗口行为
    if (
      link.hasAttribute('download') ||
      link.getAttribute('target') &&
      link.getAttribute('target') !== '_self' ||
      link.getAttribute('href')?.startsWith('#')
    ) {
      return
    }

    const url = new URL(link.href, window.location.href)

    // 只处理本站链接
    if (url.origin !== window.location.origin) return

    const path = getBasePath(url.pathname)

    // 不在新版白名单内，保持 NuxtLink 原有行为
    if (!newVersionPaths.has(path)) return

    // 阻止事件继续传递给 NuxtLink 的 Vue Router 点击处理器
    // 不调用 preventDefault，保留浏览器原生链接导航
    event.stopPropagation()
  }

  // 使用捕获阶段，确保早于 NuxtLink 自身的点击处理
  document.addEventListener('click', handleClick, true)
})
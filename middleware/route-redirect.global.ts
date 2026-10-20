/*
 * @Author: 谭洁莹
 * @Date: 2026-10-20 09:45:43
 * @LastEditTime: 2026-10-20 09:59:35
 * @FilePath: /middleware/route-redirect.global.ts
 * @Description: 路由中间件，统一对已启用新版的页面取消NuxtLink以做过渡
 */
export default defineNuxtRouteMiddleware((to) => {
  const newVersionPaths = ['/contact-us']
  if (process.client) {
    if (newVersionPaths.includes(to.path)) {
      window.location.href = to.fullPath
      return abortNavigation()
    }
  }
})

export default defineNuxtPlugin(() => {
  if (process.client) {
    // 禁用复制
    document.addEventListener('copy', (e) => {
      e.preventDefault()
    })
    const triggerDebugger = () => {
      // debugger
    }

    const checkDevTools = () => {
      const devToolsOpened = () => {
        // 判断依据可以根据实际情况调整阈值
        const widthThreshold = window.outerWidth - window.innerWidth > 160
        const heightThreshold = window.outerHeight - window.innerHeight > 160
        return widthThreshold || heightThreshold
      }

      if (devToolsOpened()) {
        triggerDebugger() // 如果检测到开发者工具被打开，则触发断点
        setTimeout(checkDevTools, 100) // 每隔100毫秒再次检查
      } else {
        setTimeout(checkDevTools, 100) // 即使开发者工具未打开，也定期检查
      }
    }

    // 页面加载时开始检测
    checkDevTools()

    // 监听 F12 键盘事件尝试阻止并触发断点
    document.addEventListener(
      'keydown',
      function (event) {
        if (event.key === 'F12') {
          event.preventDefault() // 尝试阻止默认行为
          triggerDebugger() // 触发断点
        }
      },
      { capture: false }
    )
  }
})

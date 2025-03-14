import { defineNuxtPlugin } from '#app'

interface MenuItem {
  name: string
  action: string
  id: string // 添加id字段
  iconHtml: string // 直接添加完整的图标HTML字符串
}

// 原有的menuItems
const menuItems: MenuItem[] = [
  {
    name: '致電預約',
    action: 'tel:85239562025',
    id: 'call-appointment',
    iconHtml: '<i class="fas fa-phone"></i>',
  },
  {
    name: 'WhatsApp 查询',
    action:
      'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2',
    id: 'whatsapp-query',
    iconHtml: '<i class="fas fa-phone-volume"></i>',
  },
  {
    name: '線上對话',
    action:
      'https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&cid=149cdac9b31444cd81512a1ce54d1ae9&lng=big5&sid=6ac3c6650aef4b099f1018a3cd8a7887&p=https//www.hkcmereye.com/&rf1=&rf2=&msg=&e=www.hkcmereye.com[youce-goutong]&d=1692675682853&r=&rf1=&rf2=/',
    id: 'online-chat',
    iconHtml: '<i class="fas fa-comments"></i>',
  },
  {
    name: '診所地址',
    action: '/contact-us',
    id: 'clinic-address',
    iconHtml: '<i class="fas fa-map-marker-alt"></i>',
  },
]

export default defineNuxtPlugin((nuxtApp) => {
  // 确保只在客户端运行
  if (process.client) {
    const createCustomMenu = () => {
      const customMenu = document.createElement('div')
      customMenu.id = 'customContextMenu'
      customMenu.style.display = 'none' // 初始状态下隐藏

      // 添加顶部的四个功能按钮
      const topButtons = document.createElement('div')
      topButtons.className = 'top-buttons'
      topButtons.innerHTML = `
        <button onclick="history.back()" title="向前"><i class="fas fa-arrow-left"></i></button>
        <button onclick="history.forward()" title="向后"><i class="fas fa-arrow-right"></i></button>
        <button onclick="location.reload()" title="刷新"><i class="fas fa-sync-alt"></i></button>
        <button onclick="window.scrollTo({ top: 0, behavior: 'smooth' });" title="回到顶部"><i class="fas fa-arrow-up"></i></button>
      `
      customMenu.appendChild(topButtons)

      menuItems.forEach((item) => {
        const menuItem = document.createElement('div')
        menuItem.className = 'menuItem'
        menuItem.innerHTML = `${item.iconHtml} ${item.name}`
        menuItem.onclick = () => handleMenuItemClick(item.action, item.name)
        customMenu.appendChild(menuItem)
      })

      document.body.appendChild(customMenu)
      window.addEventListener('scroll', () => {
        customMenu.style.display = 'none'
      })
      window.addEventListener('contextmenu', (event: MouseEvent) => {
        event.preventDefault()
        const menuWidth = customMenu.offsetWidth;
        const menuHeight = customMenu.offsetHeight;
        
        // 使用 clientX 和 clientY 并加上页面滚动的距离
        let x = event.clientX + window.scrollX;
        let y = event.clientY + window.scrollY;
        
        // 防止菜单超出屏幕边界
        if (x + menuWidth > window.innerWidth) {
          x -= menuWidth;
        }
        if (y + menuHeight > window.innerHeight) {
          y -= menuHeight;
        }
        
        customMenu.style.left = `${x}px`;
        customMenu.style.top = `${y}px`;
        customMenu.style.display = 'block';
      })
      window.addEventListener('click', (event) => {
        let shouldHideMenu = true // 默认情况下点击会隐藏菜单

        // 检查点击是否发生在右键菜单内或者特定的菜单项上
        if (event.target instanceof HTMLElement) {
          if (customMenu.contains(event.target)) {
            shouldHideMenu = false // 如果点击在右键菜单内部，不隐藏菜单
          } else if (event.target.closest('.menuItem')) {
            // 检查是否点击了菜单项
          }
        }

        if (shouldHideMenu) {
          customMenu.style.display = 'none'
        }
      })

      // 修改handleMenuItemClick方法以传递菜单位置
      function handleMenuItemClick(action: string, name: string): void {
        if (name === '致電預約') {
          //   const menuRect = customMenu.getBoundingClientRect() // 获取右键菜单的位置
          showPhoneNumberTip(action)
          customMenu.style.display = 'block '
        } else if (action.startsWith('https://') || action.startsWith('/')) {
          window.open(action, '_blank')?.focus()
          customMenu.style.display = 'none'
        }
      }

      function showPhoneNumberTip(phoneNumber: string): void {
        const phone = phoneNumber.replace('tel:', '')
        const tooltip = document.createElement('div')
        tooltip.className = 'tooltip'
        tooltip.textContent = `電話號碼: ${phone}`

        // 计算相对于右键菜单的位置
        const rect = customMenu.getBoundingClientRect()
        tooltip.style.position = 'absolute' // 使用绝对定位相对于最近的定位祖先（这里是customContextMenu）
        tooltip.style.left = `${rect.width + 10}px` // 在菜单右边留一点空隙
        tooltip.style.top = '15px' // 与菜单顶部对齐
        tooltip.style.height = '40px' // 与菜单顶部对齐

        customMenu.appendChild(tooltip) // 将tooltip添加到自定义菜单内，而不是body

        setTimeout(() => {
          tooltip.remove()
        }, 3000) // 显示3秒后自动消失
      }

      // 添加一些基础样式并提升层级
      const style = document.createElement('style')
      style.innerHTML = `
        #customContextMenu {
            padding: 10px 0;
          position: absolute;
          background-color: white;
          border: 1px solid #ccc;
    
          display: none;
           box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    filter: drop-shadow(0 10px 8px rgba(0, 0, 0, .04)) drop-shadow(0 4px 3px rgba(0, 0, 0, .1));
          animation: fadeIn .3s;
          z-index: 10000; /* 提升层级 */
        }
          .tooltip {

  position: absolute; /* 改为绝对定位 */
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 5px;
  opacity: 0.8;
  font-size: 14px;
  z-index: 10001;
  white-space: nowrap; /* 防止文本换行 */
}
        .top-buttons {
            width: 90%;
    margin: 0 auto;
            margin-bottom: 10px;
          display: flex;
          justify-content: space-around;
          text-align: center;
          padding: 5px 0 15px 0;
          border-bottom: 1px dashed lightgray;
        }
        .top-buttons button {
          margin: 0 8px;
          cursor: pointer;
        }
        .menuItem {
         padding: 12px 50px 12px 25px;
          cursor: pointer;
          display: flex;
          align-items: center; /* 对齐图标和文字 */
          
        }
        .menuItem i {
          margin-right: 8px; /* 调整图标与文字之间的间距 */
              width: 20px;
              text-align: center;
        }
        .menuItem:hover {
          background-color: #f0f0f0;
        }
        .tooltip {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background-color: black;
          color: white;
          padding: 10px;
          border-radius: 5px;
          opacity: 0.8;
          font-size: 14px;
          z-index: 10001;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `
      document.head.appendChild(style)
    }

    nuxtApp.hook('app:mounted', () => {
      createCustomMenu()
    })
  }
})

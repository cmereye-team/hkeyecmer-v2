<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
import { AppSetup } from './utils/app'
import { ITheme } from './utils/theme'
AppSetup()
const theme = useState<ITheme>('theme.current')
const locale = useState<string>('locale.setting')
const app = useAppConfig() as AppConfigInput
const { t } = useLang()
useHead({
  title: app.name,
  titleTemplate: `%s - ${t('app.title')}`,
  meta() {
    return [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        property: 'og:image',
        content: 'https://www.hkeyecmer.com/favicon.ico',
      },
    ]
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: 'https://www.hkeyecmer.com/favicon.ico',
    },
  ],
  script: [
    {
      type: 'text/javascript',
      src: 'https://statichk.cmermedical.com/publicjs/xuehua.js',
    },
  ],
})
let cookieBoxShow = ref(false)
const handleSetCookie = () => {
  cookieBoxShow.value = false
  localStorage.setItem('userCookie', '1')
}

onMounted(() => {
  if (window.location.pathname.includes('/en/')) {
    locale.value = 'en'
  }
  try {
    // let getCookie = localStorage.getItem('userCookie');
    // if(!getCookie){
    //   cookieBoxShow.value = true
    // }
  } catch (e) {}
})

interface Flake {
  x: number
  y: number
  size: number
  speed: number
  velY: number
  velX: number
  stepSize: number
  step: number
  opacity: number
}
const flakes = ref<Flake[]>([]);

const createdSnowfall = () => {
  ;(function () {
    // Define variables
    flakes.value // Snowflake array
    let canvas = document.createElement('canvas'), // Create canvas
      ctx = canvas.getContext('2d'), // Get canvas context
      flakeCount = 200, // Number of snowflakes
      mX = -100, // Mouse X coordinate
      mY = -100 // Mouse Y coordinate

    // Set canvas properties
    canvas.setAttribute('id', 'snowfall')
    canvas.style.position = 'fixed'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.zIndex = '999999'
    canvas.style.pointerEvents = 'none'

    // Append the canvas to body
    document.body.appendChild(canvas)

    // Set canvas width and height
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Create snowflake image object
    const snowImg = new Image()
    snowImg.src = 'https://static.cmereye.com/imgs/2024/12/9e8a48e3ac6fbc27.png'

    // Snowfall animation function
    function snow() {
      // Clear the canvas
      ctx?.clearRect(0, 0, canvas.width, canvas.height)

      // Loop through the snowflake array
      for (let i = 0; i < flakeCount; i++) {
        const flake = flakes.value[i] // Get current snowflake
        const x = mX,
          y = mY,
          minDist = 100,
          x2 = flake.x,
          y2 = flake.y

        // Calculate distance and direction
        const dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y))
        const dx = x2 - x
        const dy = y2 - y

        // If distance is less than minimum distance, update snowflake velocity
        if (dist < minDist) {
          const force = (minDist * 2) / (dist * dist) // Calculate force
          const xcomp = (x - x2) / dist
          const ycomp = (y - y2) / dist
          const deltaV = force / 2

          // Update snowflake velocity
          flake.velX -= deltaV * xcomp
          flake.velY -= deltaV * ycomp
        } else {
          // If distance is greater than or equal to minimum distance
          flake.velX *= 0.98
          if (flake.velY <= flake.speed) {
            flake.velY = flake.speed
          }
          flake.velX += Math.cos((flake.step += 0.25)) * flake.stepSize
        }

        // Update snowflake position
        flake.y += flake.velY
        flake.x += flake.velX

        // If snowflake goes off-screen, reset it
        if (flake.y >= canvas.height || flake.y <= 0) {
          reset(flake)
        }
        if (flake.x >= canvas.width || flake.x <= 0) {
          reset(flake)
        }

        // Draw snowflake image
        ctx?.drawImage(snowImg, flake.x, flake.y, flake.size, flake.size)
      }

      // Loop the animation
      requestAnimationFrame(snow)
    }

    // Reset snowflake function
    function reset(flake:any) {
      flake.x = Math.floor(Math.random() * canvas.width)
      flake.y = 0
      flake.size = Math.random() * 20 + 10
      flake.speed = Math.random() * 1 + 0.5
      flake.velY = flake.speed
      flake.velX = 0
      flake.opacity = Math.random() * 0.5 + 0.3
    }

    // Initialize snowflakes
    function init() {
      for (let i = 0; i < flakeCount; i++) {
        const x = Math.floor(Math.random() * canvas.width)
        const y = Math.floor(Math.random() * canvas.height)
        const size = Math.random() * 20 + 10
        const speed = Math.random() * 1 + 0.5
        const opacity = Math.random() * 0.5 + 0.3

        // Push snowflake object to array
        flakes.value.push({
          speed,
          velY: speed,
          velX: 0,
          x,
          y,
          size,
          stepSize: Math.random() / 30,
          step: 0,
          opacity,
        })
      }

      // Start snow animation
      snow()
    }

    // Mouse move event listener
    document.addEventListener('mousemove', (e) => {
      mX = e.clientX
      mY = e.clientY
    })

    // Resize event listener for canvas resizing
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    })

    // Initialize snowflakes
    init()
  })()
}

// onBeforeUnmount(() => {
//   const canvas = document.getElementById('snowfall')
//   if (canvas) {
//     canvas.remove() // Remove the canvas element
//   }
// })
</script>

<template>
  <Html class="light" :lang="locale">
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 overscroll-y-none"
    >
      <!-- <loading-page /> -->
      <NuxtLayout>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
        <!-- <div v-if="cookieBoxShow" :class="['cookieBox']" @click="handleSetCookie">
          <div>我們使用 Cookies 和其他形式的網站導航信息為您提供更好的瀏覽體驗、分析網站流量、個性化內容並提供有針對性的廣告。 在我們的隱私政策中閱讀有關我們如何使用
                Cookies的信息。如果您繼續使用本網站，即表示您同意我們使用 Cookies。</div>
          <div>全部接受</div>
          <div>X</div>
        </div> -->
      </NuxtLayout>
    </Body>
  </Html>
</template>
<style lang="scss">
body {
  overflow-x: hidden !important;
}

::-webkit-scrollbar {
  width: 5px;
  background-color: #ffffff;
}

/*定义滚动条轨道：内阴影+圆角*/
::-webkit-scrollbar-track {
  background-color: #cacaca;
}

/*定义滑块：内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: #ffffff;
}

.cookieBox {
  width: calc(100% - 60px);
  max-width: 880px;
  margin: 0 auto;
  height: auto;
  border-radius: 15px;
  background: #fff;
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  padding: 20px;
  display: flex;
  align-items: center;
  opacity: 0.9;
  transition: 0.5s;
  & > div {
    &:nth-of-type(1) {
      font-size: 16px;
    }
    &:nth-of-type(2) {
      min-width: 100px;
      margin: 0 0 0 20px;
      color: #fff;
      background: #1b407a;
      text-align: center;
      height: 50px;
      line-height: 50px;
      border-radius: 25px;
      cursor: pointer;
      font-size: 16px;
    }
    &:nth-of-type(3) {
      position: absolute;
      right: 10px;
      top: 10px;
      font-family: '正体';
      transform: scaleX(1.2);
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 768px) {
  .cookieBox {
    flex-direction: column;
    padding: 10px;
    & > div {
      &:nth-of-type(1) {
        font-size: 12px;
      }
      &:nth-of-type(2) {
        font-size: 16px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        margin-left: 0;
        margin-top: 10px;
      }
      &:nth-of-type(3) {
        bottom: 10px;
        top: auto;
      }
    }
  }
}
</style>

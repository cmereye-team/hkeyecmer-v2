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
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no',
      },
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
const flakes = ref<Flake[]>([])
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

#snowfall {
  display: none !important;
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

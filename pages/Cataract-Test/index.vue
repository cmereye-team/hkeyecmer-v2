<!--
 * @Author: 谭洁莹
 * @Date: 2026-07-15 16:47:53
 * @LastEditTime: 2026-07-15 18:00:22
 * @FilePath: /pages/Cataract-Test/index.vue
 * @Description: 白内障第二版
-->
<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: t('tdk.cataract.title'),
  meta() {
    return [
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          t('tdk.cataract.key'),
      },
      {
        hid: 'description',
        name: 'description',
        content: t('tdk.cataract.desc'),
      },
    ]
  },
}))
// --- 1. 响应式状态 & 基础配置 ---
const windowWidth = ref(1024)
const currentIndex = ref(0)
const steps = [
  { title: '局部麻醉', desc: '採用局部點眼藥水式麻醉法', blur: 8, img: 'https://statichk.cmermedical.com/hkcmereye/cataract/cataract-step-01-v1.png' },
  { title: '摘除混濁晶體', desc: '利用微細超聲波儀器切除混濁的晶體', blur: 4, img: 'https://statichk.cmermedical.com/hkcmereye/cataract/cataract-step-02-v1.png' },
  { title: '置入人工晶體', desc: '置入人工晶體，並好好固定住術後傷口一般毋須縫線', blur: 0, img: 'https://statichk.cmermedical.com/hkcmereye/cataract/cataract-step-03-v1.png' }
]

// 医生与诊所数字滚动目标
const counterValues = ref({
  doctors: 0,
  clinics: 0
})

// 自动播放步骤定时器
let autoPlayTimer: NodeJS.Timeout | null = null
let resumeTimer: NodeJS.Timeout | null = null

// --- 2. 核心函数 ---
const updateWidth = () => {
  if (process.client) {
    windowWidth.value = window.innerWidth
  }
}

// 模拟对焦步骤切换
const goToStep = (index: number) => {
  currentIndex.value = index
  
  // 使用 GSAP 平滑过渡图片滤镜
  const imgElement = document.getElementById('view-sim')
  if (imgElement && typeof window !== 'undefined') {
    const { $gsap } = useNuxtApp() as any
    const gsapInstance = $gsap || (window as any).gsap
    if (gsapInstance) {
      gsapInstance.to(imgElement, {
        filter: `blur(${steps[index].blur}px)`,
        duration: 0.5,
        ease: 'power2.out'
      })
    }
  }
}

const startAutoPlay = () => {
  stopAutoPlay()
  autoPlayTimer = setInterval(() => {
    const nextIndex = (currentIndex.value + 1) % steps.length
    goToStep(nextIndex)
  }, 3000)
}

const stopAutoPlay = () => {
  if (autoPlayTimer) clearInterval(autoPlayTimer)
}

const handleUserInterruption = (index: number) => {
  goToStep(index)
  stopAutoPlay()
  if (resumeTimer) clearTimeout(resumeTimer)
  resumeTimer = setTimeout(() => {
    startAutoPlay()
  }, 8000)
}

// --- 3. 生命周期挂载 ---
onMounted(() => {
  updateWidth()
  window.addEventListener('resize', updateWidth)
  
  // 步骤条自动对焦初始化
  startAutoPlay()

  // 依赖 Client 端的 GSAP & ScrollTrigger 初始化
  const { $gsap } = useNuxtApp() as any
  const gsapInstance = $gsap || (window as any).gsap
  
  if (gsapInstance) {
    // 动态注册 ScrollTrigger
    if (typeof window !== 'undefined' && (window as any).ScrollTrigger) {
      gsapInstance.registerPlugin((window as any).ScrollTrigger)
    }

    // 香港数字千分位格式化
    const formatNumber = (num: number) => {
      return num.toLocaleString('zh-HK', { maximumFractionDigits: 0 })
    }

    // 针对医生数的滚动动画
    gsapInstance.to(counterValues.value, {
      doctors: 25,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#counter-section',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })

    // 针对诊所数的滚动动画
    gsapInstance.to(counterValues.value, {
      clinics: 10,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#counter-section',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
  stopAutoPlay()
  if (resumeTimer) clearTimeout(resumeTimer)
})
</script>

<template>
  <div>
    <!-- banner Section -->
    <section id="banner" class="banner bg-[#D7E7EA] pt-[60px] pb-4 lg:pt-24 px-3 xl:px-0">
      <div class="max-w-6xl mx-auto grid gap-12 items-center">
        <div class="w-full grid grid-cols-1 gap-3 md:gap-y-8">
          <div class="space-y-4">
            <h1 class="banner-title">
              白內障毋須等到<br class="block lg:hidden" />「熟透」才治療
            </h1>
            <p class="banner-subtitle">
              微創白內障手術<br class="block lg:hidden" /><span class="hidden lg:inline">&nbsp;</span>重拾清楚視力
            </p>
          </div>
          
          <ul class="md:space-y-1 lg:space-y-4 text-lg" role="list">
            <li class="flex items-center gap-3">
              <span class="medical-icon-box w-6 h-6 lg:h-10 lg:w-10 rounded-full center text-primary">
                <svg class="w-4 h-4" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="m731.733 294.4-281.6 337.067-134.4-134.4L262.4 550.4l194.133 194.133 332.8-398.933zM512 992C247.467 992 32 776.533 32 512S247.467 32 512 32s480 215.467 480 480-215.467 480-480 480" fill="currentColor"/></svg>
              </span>
              <span class="text-secondary-700 font-medium">即日出院</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="medical-icon-box w-6 h-6 lg:h-10 lg:w-10 rounded-full center text-primary">
                <svg class="w-4 h-4" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="m731.733 294.4-281.6 337.067-134.4-134.4L262.4 550.4l194.133 194.133 332.8-398.933zM512 992C247.467 992 32 776.533 32 512S247.467 32 512 32s480 215.467 480 480-215.467 480-480 480" fill="currentColor"/></svg>
              </span>
              <span class="text-secondary-700 font-medium">術程最快 20 分鐘</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="medical-icon-box w-6 h-6 lg:h-10 lg:w-10 rounded-full center text-primary">
                <svg class="w-4 h-4" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="m731.733 294.4-281.6 337.067-134.4-134.4L262.4 550.4l194.133 194.133 332.8-398.933zM512 992C247.467 992 32 776.533 32 512S247.467 32 512 32s480 215.467 480 480-215.467 480-480 480" fill="currentColor"/></svg>
              </span>
              <span class="text-secondary-700 font-medium">多款品牌人工晶體選擇</span>
            </li>
          </ul>

          <div class="flex flex-wrap gap-4">
            <a href="tel:+85239562026"
              class="btn-interactive text-[clamp(10px,3.88vw,16px)] animate-cta-breathe btn-primary-grad text-white font-bold py-3 px-4 lg:px-8 rounded-full shadow-lg transition-all hover:-translate-y-0.5 inline-flex items-center gap-2">
              <i class="iconfont icon-phone-o text-xl" aria-hidden="true"></i>
              <span>立即致電預約</span>
            </a>
            <a href="https://api.whatsapp.com/send?phone=85260629611&text=白內障專線查詢" target="_blank"
              rel="noopener noreferrer"
              class="btn-interactive text-[clamp(10px,3.88vw,16px)] btn-whatsapp text-white font-bold py-3 px-4 lg:px-8 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              aria-label="透過 WhatsApp 聯絡我們">
              <i class="iconfont icon-whatsapp text-xl" aria-hidden="true"></i>
              <span>白內障WhatsApp專線</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why CMER Section (具有滚动数字跃升特效) -->
    <section id="why-cmer" class="gradient-section-why-cmer pt-5 lg:pt-10 px-3 xl:px-0 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-3 lg:mb-12">
          <h2 class="text-2xl font-bold text-primary mb-2">為何選擇希瑪眼科？</h2>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 max-w-6xl mx-auto" id="counter-section">
          <div class="bg-[#F8F9FF] center flex-col p-3 lg:p-8 rounded-xl shadow-sm border border-secondary-100 text-center">
            <div class="text-2xl md:text-4xl font-bold lg:mb-2 text-primary">
              <span>第 1 間</span>
            </div>
            <div class="text-text-info font-medium">香港上市眼科中心</div>
          </div>
          <div class="bg-[#F8F9FF] center flex-col p-3 lg:p-8 rounded-xl shadow-sm border border-secondary-100 text-center">
            <div class="text-2xl md:text-4xl font-bold lg:mb-2 text-primary">
              <span>{{ Math.floor(counterValues.doctors) }} 位</span>
            </div>
            <div class="text-text-info font-medium">眼科專科醫生</div>
          </div>
          <div class="bg-[#F8F9FF] center flex-col p-3 lg:p-8 rounded-xl shadow-sm border border-secondary-100 text-center">
            <div class="text-2xl md:text-4xl font-bold lg:mb-2 text-primary">
              <span>{{ Math.floor(counterValues.clinics) }} 間</span>
            </div>
            <div class="text-text-info font-medium">眼科診所</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Real Customers Video Swiper (Nuxt-Swiper & YouTube Embed) -->
    <section id="testimonials" class="gradient-section-testimonials py-10 px-3 xl:px-0">
      <div class="max-w-3xl mx-auto">
        <h2 class="cataract-title mb-5 lg:mb-12 text-center text-2xl font-bold text-primary">
          白內障<span class="hl-text">真實客戶分享</span>
        </h2>
        <div class="rounded-2xl p-3 xl:p-0">
          <div class="video-swiper overflow-hidden relative">
            <!-- 统一使用 nuxt-swiper 组件 -->
            <swiper
              :space-between="40"
              :slides-per-view="1"
              :loop="true"
              :navigation="true"
              :pagination="{ clickable: true }"
              class="ccSwiper"
            >
              <swiper-slide class="ccSwiper-slide">
                <div class="aspect-video w-full">
                  <iframe class="w-full h-full rounded-lg" src="https://www.youtube.com/embed/Yzj9HtlRLwM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="text-text-info text-xl font-bold mt-6">
                  <p class="text-center">“術後重拾視力，更找回同家人幸福嘅相處時光！”</p>
                </div>
              </swiper-slide>
              <swiper-slide class="ccSwiper-slide">
                <div class="aspect-video w-full">
                  <iframe class="w-full h-full rounded-lg" src="https://www.youtube.com/embed/h6H16bsZRAE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="text-text-info text-xl font-bold mt-6">
                  <p class="text-center">“終於重見光明！一直以來從未試過睇得咁清楚！”</p>
                </div>
              </swiper-slide>
              <swiper-slide class="ccSwiper-slide">
                <div class="aspect-video w-full">
                  <iframe class="w-full h-full rounded-lg" src="https://www.youtube.com/embed/fDo35wPIcBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="text-text-info text-xl font-bold mt-6">
                  <p class="text-center">“做白內障手術係人生最啱決定，視界煥然一新！”</p>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </section>

    <!-- Symptoms Section -->
    <section id="symptoms" class="px-3 xl:px-0 py-10">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-3 lg:mb-12">
          <h2 class="cataract-title lg:mb-4 text-2xl font-bold text-primary">您有否出現以下情況？</h2>
          <p class="text-lg lg:text-2xl text-secondary-500 font-medium">可能是<span class="hl-text">白內障徵兆</span></p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-5 lg:mb-12">
          <div class="bg-white p-4 lg:p-8 rounded-xl shadow-sm border border-secondary-100 flex flex-col items-center justify-center text-center group hover:shadow-md transition-shadow cursor-default">
            <div class="symptom-icon w-10 h-10 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-primary text-2xl mb-2 lg:mb-4">
              <i class="iconfont icon-shili text-4xl lg:text-6xl" aria-hidden="true"></i>
            </div>
            <h4 class="text-[clamp(14px,4.5vw,24px)] lg:text-2xl font-bold text-primary mb-0">視力模糊、顔色變暗淡</h4>
          </div>
          <div class="bg-white p-4 lg:p-8 rounded-xl shadow-sm border border-secondary-100 flex flex-col items-center justify-center text-center group hover:shadow-md transition-shadow cursor-default">
            <div class="symptom-icon w-10 h-10 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-primary text-2xl mb-2 lg:mb-4">
              <i class="iconfont icon-yejianmoshi text-4xl lg:text-6xl" aria-hidden="true"></i>
            </div>
            <h4 class="text-[clamp(14px,4.5vw,24px)] lg:text-2xl font-bold text-primary mb-0">出現眩光、重影、畏光</h4>
          </div>
          <div class="bg-white p-4 lg:p-8 rounded-xl shadow-sm border border-secondary-100 flex flex-col items-center justify-center text-center group hover:shadow-md transition-shadow cursor-default">
            <div class="symptom-icon w-10 h-10 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-primary text-2xl mb-2 lg:mb-4">
              <i class="iconfont icon-yanse text-4xl lg:text-6xl" aria-hidden="true"></i>
            </div>
            <h4 class="text-[clamp(14px,4.5vw,24px)] lg:text-2xl font-bold text-primary mb-0">閲讀時感到光線不足</h4>
          </div>
          <div class="bg-white p-4 lg:p-8 rounded-xl shadow-sm border border-secondary-100 flex flex-col items-center justify-center text-center group hover:shadow-md transition-shadow cursor-default">
            <div class="symptom-icon w-10 h-10 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-primary text-2xl mb-2 lg:mb-4">
              <i class="iconfont icon-yanjing text-4xl lg:text-6xl" aria-hidden="true"></i>
            </div>
            <h4 class="text-[clamp(14px,4.5vw,24px)] lg:text-2xl font-bold text-primary mb-0">經常更換眼鏡度數</h4>
          </div>
        </div>
        <div class="alert-grad rounded-2xl p-4 lg:p-8 max-w-3xl mx-auto text-center bg-[#FFF0AC]">
          <p class="text-xl font-bold mb-4 text-[#977C00]">懷疑有白內障？<br />及早檢查，把握治療時機</p>
          <a href="tel:+85239562026"
            class="cta-btn btn-interactive animate-cta-breathe btn-primary-grad text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 shadow-md">
            <i class="iconfont icon-phone-o" aria-hidden="true"></i>
            <span>立即預約檢查</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Operation Steps (结合响应式对焦 Blur 过渡特效) -->
    <section class="py-10 px-3 xl:px-0">
      <div class="max-w-5xl mx-auto">
        <h2 class="cataract-title mb-5 lg:mb-12">白內障<span class="hl-text">唯一有效治療方法</span><br class="block lg:hidden" />是手術！</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12 items-center mb-5 lg:mb-12">
          <!-- 左侧步骤 -->
          <div class="space-y-4 text-shadow-md lg:text-shadow-none text-shadow-white" id="steps-container">
            <div
              v-for="(step, index) in steps"
              :key="index"
              @click="handleUserInterruption(index)"
              :class="[
                'step-connector flex lg:gap-4 flex-col lg:flex-row lg:h-38 p-3 lg:p-5 border-l-4 rounded-r-xl cursor-pointer relative transition-all duration-300',
                currentIndex === index ? 'bg-[rgba(2,132,199,0.08)] border-[#0284c7]' : 'bg-[#f8fafc] border-secondary-300'
              ]"
            >
              <div class="flex items-start gap-2 xs:gap-4 lg:w-45">
                <span
                  :class="[
                    'step-number flex-shrink-0 w-5 h-5 lg:w-8 lg:h-8 rounded-full text-white flex items-center justify-center font-bold text-xs lg:text-sm transition-colors duration-300',
                    currentIndex === index ? 'bg-[#0284c7]' : 'bg-secondary-300'
                  ]"
                >{{ index + 1 }}</span>
                <div>
                  <h4 :class="['step-title font-bold text-[clamp(10px,3.88vw,18px)] lg:text-lg transition-colors duration-300', currentIndex === index ? 'text-[#0284c7]' : 'text-secondary-700']">
                    {{ step.title }}
                  </h4>
                  <img :src="step.img" class="size-13 lg:size-22 object-contain object-left mt-1" :alt="step.title">
                </div>
              </div>
              <p 
                :class="[
                  'step-desc text-sm lg:text-lg lg:flex-1 lg:pt-1 transition-all duration-300',
                  (windowWidth > 1024 || currentIndex === index) ? 'opacity-100 block' : 'opacity-0 hidden lg:block'
                ]"
              >
                {{ step.desc }}
              </p>
            </div>
          </div>
          <!-- 右侧模糊变化图片 -->
          <div class="relative">
            <div class="image-context-glow">
              <div class="relative bg-secondary-900 rounded-2xl overflow-hidden shadow-xl">
                <img id="view-sim"
                  src="https://statichk.cmermedical.com/newopd/services/cataract/cataract-text-01@1x.jpg"
                  alt="白內障患者的視覺" loading="lazy" class="w-full object-cover max-h-[500px]" />
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4 text-center text-base lg:text-2xl font-bold">
          <div class="tag-grad text-white rounded-full font-medium shadow-sm">现代微创技术</div>
          <div class="tag-grad text-white rounded-full font-medium shadow-sm">快速恢复</div>
          <div class="tag-grad text-white rounded-full font-medium shadow-sm">手术时间短</div>
        </div>
      </div>
    </section>

    <!-- Lens Comparison Table -->
    <section id="lens-comp" class="px-3 xl:px-0 py-10">
      <div class="max-w-[1366px] mx-auto">
        <div class="text-center mb-5 lg:mb-12 text-primary">
          <h2 class="text-2xl font-bold mb-2">多款人工晶體選擇</h2>
          <p class="text-2xl font-bold"><span class="hl-text">度身訂造</span>您的視力方案</p>
        </div>
        <div class="lens-table pb-5 overflow-x-auto lg:mb-12 text-center">
          <table class="w-full border-collapse">
            <thead>
              <tr>
                <th class="lens-table-subtitle">特點</th>
                <th class="bg-[#F6E75B] lens-table-th">
                  <div class="flex justify-center items-center gap-1 flex-col">
                    <div class="w-12 h-6 lg:w-[108px] lg:h-[60px]">
                      <img src="https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-table-edof-v1.svg" alt="擴展景深人工晶體圖標" class="w-full" />
                    </div>
                    <span class="lens-table-title text-outline text-[#EC8836]">擴展景深人工晶體</span>
                  </div>
                </th>
                <th class="bg-[#55D1F0] lens-table-th">
                  <div class="flex justify-center items-center gap-1 flex-col">
                    <div class="w-12 h-6 lg:w-[108px] lg:h-[60px]">
                      <img src="https://statichk.cmermedical.com/hkcmereye/cataract/table-lal-v5.svg" alt="光調節人工晶體圖標" class="w-full" />
                    </div>
                    <span class="lens-table-title text-outline text-[#4886CE]">光調節人工晶體</span>
                  </div>
                </th>
                <th class="bg-[#F2F7FB] lens-table-th">
                  <div class="flex justify-center items-center gap-1 lg:flex-col">
                    <div class="w-12 h-6 lg:w-[108px] lg:h-[60px]">
                      <img src="https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-table-multifocal-v1.svg" alt="多焦點人工晶體圖標" class="w-full lens-icon-normal" />
                    </div>
                    <span class="lens-table-title text-primary">多焦點<br class="block lg:hidden" />人工晶體</span>
                  </div>
                </th>
                <th class="bg-[#F2FFFE] lens-table-th">
                  <div class="flex justify-center items-center gap-1 lg:flex-col">
                    <div class="w-12 h-6 lg:w-[108px] lg:h-[60px]">
                      <img src="https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-table-monofocal-v1.svg" alt="單焦點人工晶體圖標" class="w-full lens-icon-normal" />
                    </div>
                    <span class="lens-table-title text-primary">單焦點<br class="block lg:hidden" />人工晶體</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="text-[3.0769vw] md:text-xl 2xl:text-2xl text-text-info font-bold lg:font-medium leading-[1.5] tracking-widest whitespace-nowrap">
              <!-- Row 1 -->
              <tr class="lens-table-bb">
                <td class="bg-[#fcfcfc]"><div class="lens-table-subtitle">焦距</div></td>
                <td class="lens-table-td">適用於中<br class="block lg:hidden" />至遠距離</td>
                <td class="lens-table-td">適用於遠、<br class="block lg:hidden" />中、近距離</td>
                <td class="lens-table-td">適用於遠、<br class="block lg:hidden" />中、近距離</td>
                <td class="lens-table-td">焦距大多<br class="block" />適用於遠距離</td>
              </tr>
              <!-- Row 2 -->
              <tr class="lens-table-bb">
                <td class="bg-[#fcfcfc]"><div class="lens-table-subtitle">優點</div></td>
                <td class="lens-table-td">焦距清楚<br />可擴展景深<br />較小眩光</td>
                <td class="lens-table-td">術後可根據個人<br class="block lg:hidden" />用眼<br class="hidden lg:block" />需求調節度數</td>
                <td class="lens-table-td">提供良好遠，中，近<br />視力，可不依賴眼鏡</td>
                <td class="lens-table-td">提供良好<br class="block lg:hidden" />視力質素</td>
              </tr>
              <!-- Row 3 -->
              <tr class="lens-table-bb">
                <td class="bg-[#fcfcfc]"><div class="lens-table-subtitle">術後<br class="block lg:hidden" />眼鏡<br />使用性</div></td>
                <td class="lens-table-td">大部份患者於<br class="block lg:hidden" />術後康<br class="hidden lg:block" />復後，<br class="block md:hidden" />生活或工作時<br />減少眼鏡倚賴性</td>
                <td class="lens-table-td">減少依賴眼鏡，通過<br class="block lg:hidden" />雙眼<br class="hidden lg:block" />互補，增加術後<br class="block lg:hidden" />不用眼鏡<br class="hidden lg:block" />便能達到<br class="block lg:hidden" />20/20視力的比例</td>
                <td class="lens-table-td">日常比較小<br class="hidden lg:block" />需<br class="block lg:hidden" />要配戴眼鏡</td>
                <td class="lens-table-td">近距離閱讀時可能<br />需要配戴眼鏡</td>
              </tr>
              <!-- Row 4 -->
              <tr>
                <td class="bg-[#fcfcfc]"><div class="lens-table-subtitle">適合<br class="block lg:hidden" />人群</div></td>
                <td class="lens-table-td relative">
                  <span>適合患有<br class="block lg:hidden" />白內障且希望 <br /> 減少眼鏡<br class="block lg:hidden" />依賴的患者</span>
                  <a href="/Cataract/extended-depth-of-focus-lenses" class="absolute-horizon whitespace-nowrap -bottom-2 z-10">
                    <div class="relative">
                      <img src="https://statichk.cmermedical.com/hkcmereye/cataract/lens/lens-table-more-01-v1.webp" alt="了解更多" class="absolute left-0 bottom-0 w-[52px] lg:w-[108px] rounded-bl-xl lg:rounded-bl-[44px]" />
                      <div class="lens-table-more edof text-[#F99D2C] pl-[60px] lg:pl-[108px] pr-1 lg:pr-2 py-1 lg:py-2 bg-white rounded-xl lg:rounded-[44px]">
                        <span>按此<br class="block lg:hidden" />了解更多</span>
                      </div>
                    </div>
                  </a>
                </td>
                <td class="lens-table-td relative">
                  <span class="block w-fit mx-auto">
                    <ul class="list-disc pl-4 text-left">
                      <li>不介意佩戴眼鏡</li>
                      <li>經濟較充裕</li>
                      <li>無其他嚴重眼病</li>
                      <li>追求更精準度數</li>
                    </ul>
                  </span>
                </td>
                <td class="lens-table-td relative text-justify">
                  <span class="block w-fit mx-auto">
                    <ul class="list-disc pl-4 text-left">
                      <li>不想配戴眼鏡</li>
                      <li>經濟能力較好</li>
                      <li>無其他嚴重眼病</li>
                      <li>夜間駕駛需求低</li>
                    </ul>
                  </span>
                </td>
                <td class="lens-table-td relative text-justify">
                  <span class="block w-fit mx-auto">
                    <ul class="list-disc pl-4 text-left">
                      <li>可配合戴眼鏡</li>
                      <li>要求更好視力質素</li>
                      <li>有經濟考慮</li>
                    </ul>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-10 lg:mb-15 px-3 xl:px-0">
      <div class="max-w-4xl mx-auto">
        <h2 class="cataract-title mb-5 lg:mb-12 text-center text-2xl font-bold text-primary"><span class="hl-text">常見問題</span> FAQ</h2>
        <div class="space-y-4">
          <details class="group bg-[#F8F9FF] rounded-xl shadow-sm border border-secondary-100 overflow-hidden hover:border-primary/30 transition-colors">
            <summary class="w-full p-6 text-left font-bold text-lg flex justify-between items-center text-secondary-800 hover:text-primary cursor-pointer list-none">
              <span class="faq-indicator flex items-center gap-4 text-xl lg:text-2xl">
                <i class="iconfont icon-wenti text-primary text-xl" aria-hidden="true"></i>
                <span>白內障幾時需要做手術？什麼時候是手術最佳時機？</span>
              </span>
            </summary>
            <div class="faq-content text-base lg:text-xl px-5 pb-5 text-text-info leading-relaxed">
              <p>白內障並沒有固定要等到「成熟」才需要做手術。若白內障開始影響日常生活，例如閱讀、駕駛、工作等，便應盡快接受眼科專科醫生檢查。</p>
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- Download Section -->
    <section class="space-y-10 md:space-y-25 xl:space-y-35 mb-10 lg:mb-15">
      <a href="https://hkcmereye.com/static/pdf/cataract1.pdf" download="如何選擇合適自己的人工晶體.pdf"
        class="flex items-center gap-4 lg:gap-10 bg-primary text-white w-9/10 lg:w-3/5 max-w-7xl py-4 lg:py-8 pl-[10%] lg:pl-[25%]">
        <img src="https://statichk.cmermedical.com/newopd/icon/icon-pdf.webp" class="w-12 lg:w-30 aspect-[59/67]" alt="PDF Icon">
        <div class="lg:text-2xl">
          <p class="mb-2 lg:mb-5">如何選擇合適自己的人工晶體</p>
          <p class="font-bold">下載小冊子</p>
        </div>
      </a>
      <a href="https://hkcmereye.com/static/pdf/cataract2.pdf" download="白內障小冊子.pdf"
        class="flex items-center gap-4 lg:gap-10 bg-primary text-white w-9/10 lg:w-3/5 max-w-7xl py-4 lg:py-8 pl-[10%] lg:pl-[25%]">
        <img src="https://statichk.cmermedical.com/newopd/icon/icon-pdf.webp" class="w-12 lg:w-30 aspect-[59/67]" alt="PDF Icon">
        <div class="lg:text-2xl">
          <p class="mb-2 lg:mb-5">白內障小冊子.pdf</p>
          <p class="font-bold">下載小冊子</p>
        </div>
      </a>
    </section>
    <PageFooterMenu />
  </div>
</template>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cataract-title {
  color: #2958a3;
}

.hl-text {
  color: #2958a3;
  background: linear-gradient(120deg, #ffb800 0%, #ffc947 50%, #ffb800 100%) 0 0 / 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  padding: 0 4px;
  font-weight: 700;
  position: relative;
}

.btn-interactive {
  position: relative;
  overflow: hidden;
}

.btn-primary-grad {
  background: linear-gradient(135deg, #5b8dcf, #2958a3, #1e3f78);
  color: #fff;
  background-size: 200% 200%;
  transition: all .3s;
}

.btn-whatsapp {
  background: #00B306;
  color: #fff;
  transition: all .3s;
}

.tag-grad {
  background: linear-gradient(135deg, #2958a3, #1e3f78);
  aspect-ratio: 1/1;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1024px) {
    width: 180px;
  }
}

.medical-icon-box {
  background: linear-gradient(135deg, rgba(41, 88, 163, 0.08), rgba(41, 88, 163, 0.03));
  border: 1px solid rgba(41, 88, 163, 0.12);
}

.banner {
  .banner-title {
    font-weight: bold;
    color: #2958a3;
    font-size: clamp(30px,10vw,40px);
    line-height: 1.25;
  }
  .banner-subtitle {
    font-weight: bold;
    color: #977c00;
    font-size: clamp(24px,8.3vw,36px);
    line-height: 1.25;
  }
}

@keyframes cta-breathe {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 10px 30px -5px rgba(41, 88, 163, 0.4);
  }
  50% {
    transform: scale(1.04);
    box-shadow: 0 20px 40px -5px rgba(41, 88, 163, 0.6);
  }
}

.animate-cta-breathe {
  animation: 3s ease-in-out infinite cta-breathe;
}

/* 晶体对照表格定制样式 */
.lens-table {
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .lens-table-th {
    border-radius: 6px 6px 0 0;
    padding: 4px 6px;
  }
  .lens-table-title {
    font-size: clamp(14px, 3.33vw, 30px);
    font-weight: 700;
    letter-spacing: 0.1em;
  }
  .lens-table-bb {
    border-bottom: 0.6px solid #cbc6c6;
  }
  .lens-table-subtitle {
    color: #2958a3;
    font-weight: 700;
    font-size: 3.33vw;
    line-height: 4.1vw;
    width: 15.1vw;
    text-align: center;
  }
  .lens-table-td {
    padding: 12px;
    border: none;
  }
}
@media screen and (min-width: 768px) {
  .lens-table .lens-table-subtitle {
    text-shadow: -3px -3px 0 #fff, 3px -3px 0 #fff, -3px 3px 0 #fff, 3px 3px 0 #fff;
    width: min(170px, 8.85vw);
    font-size: min(24px, 2vw);
  }
}
</style>
<!--
 * @Author: 谭洁莹
 * @Date: 2026-07-15 16:47:53
 * @LastEditTime: 2026-07-16 16:28:40
 * @FilePath: /pages/Cataract-Test/index.vue
 * @Description: 白内障第二版
-->
<script lang="ts" setup>
import { Pagination, Navigation } from 'swiper'
definePageMeta({
  layout: 'page',
})
const { t, tm } = useLang()
useHead(() => ({
  title: t('tdk.cataract.title'),
  meta() {
    return [
      {
        hid: 'keywords',
        name: 'keywords',
        content: t('tdk.cataract.key'),
      },
      {
        hid: 'description',
        name: 'description',
        content: t('tdk.cataract.desc'),
      },
    ]
  },
}))
const a3List = tm('pages.medical_service.cataract.faq.a3_list') as string[]
// --- 1. 响应式状态 & 基础配置 ---
const windowWidth = ref(1024)
const currentIndex = ref(0)
const steps = [
  {
    title: '局部麻醉',
    desc: '採用局部點眼藥水式麻醉法',
    blur: 8,
    img: 'https://statichk.cmermedical.com/hkcmereye/cataract/cataract-step-01-v1.png',
  },
  {
    title: '摘除混濁晶體',
    desc: '利用微細超聲波儀器切除混濁的晶體',
    blur: 4,
    img: 'https://statichk.cmermedical.com/hkcmereye/cataract/cataract-step-02-v1.png',
  },
  {
    title: '置入人工晶體',
    desc: '置入人工晶體，並好好固定住術後傷口一般毋須縫線',
    blur: 0,
    img: 'https://statichk.cmermedical.com/hkcmereye/cataract/cataract-step-03-v1.png',
  },
]
const currentBlur = ref(steps[0].blur)
const videoSwiperRef = ref<any>(null)
const videos = [
  {
    id: 'Yzj9HtlRLwM',
    say: t('pages.medical_service.cataract.video.v1'),
  },
  {
    id: 'h6H16bsZRAE',
    say: t('pages.medical_service.cataract.video.v2'),
  },
  {
    id: 'fDo35wPIcBw',
    say: t('pages.medical_service.cataract.video.v3'),
  },
  {
    id: '8ip-wGoPqmQ',
    say: t('pages.medical_service.cataract.video.v4'),
  },
  {
    id: 'zbYpdLZtL0c',
    say: t('pages.medical_service.cataract.video.v5'),
  },
  {
    id: 'F5fdrLskDdc',
    say: t('pages.medical_service.cataract.video.v6'),
  },
  {
    id: 'Jt0fmKmfiIU',
    say: t('pages.medical_service.cataract.video.v7'),
  },
  {
    id: 'Ds5NBkrQLXo',
    say: t('pages.medical_service.cataract.video.v8'),
  },
]
// 医生与诊所数字滚动目标
const counterValues = ref({
  doctors: 25,
  clinics: 10,
})

// 自动播放步骤定时器
let autoPlayTimer: NodeJS.Timeout | null = null
let resumeTimer: NodeJS.Timeout | null = null
let gsapCachedInstance: any = null

// --- 2. 核心函数 ---
const updateWidth = () => {
  if (process.client) {
    windowWidth.value = window.innerWidth
  }
}

// 模拟对焦步骤切换
const goToStep = (index: number) => {
  currentIndex.value = index
  currentBlur.value = steps[index].blur
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

  // GSAP 初始化
  try {
    const { $gsap } = useNuxtApp() as any
    gsapCachedInstance = $gsap || (window as any).gsap
  } catch (e) {
    gsapCachedInstance = (window as any).gsap
  }

  // 数字跃升 ScrollTrigger 动画 - 从0开始计数
  if (gsapCachedInstance) {
    if (typeof window !== 'undefined' && (window as any).ScrollTrigger) {
      gsapCachedInstance.registerPlugin((window as any).ScrollTrigger)
    }

    gsapCachedInstance.to(counterValues.value, {
      doctors: 25,
      clinics: 10,
      duration: 2.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#counter-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse', // 支持反向
      },
    })
  }

  // 初始化自动对焦播放
  startAutoPlay()
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
    <section
      id="banner"
      class="banner bg-[#D7E7EA] pt-[60px] pb-4 lg:pt-24 px-3 xl:px-0"
    >
      <div class="max-w-6xl mx-auto grid gap-12 items-center">
        <div class="w-full grid grid-cols-1 gap-3 md:gap-y-8">
          <div class="space-y-4">
            <h1 class="banner-title">
              白內障毋須等到<br class="block lg:hidden" />「熟透」才治療
            </h1>
            <p class="banner-subtitle">
              微創白內障手術<br class="block lg:hidden" /><span
                class="hidden lg:inline"
                >&nbsp;</span
              >重拾清楚視力
            </p>
          </div>

          <ul class="md:space-y-1 lg:space-y-4 text-lg" role="list">
            <li class="flex items-center gap-3">
              <span
                class="medical-icon-box w-6 h-6 lg:h-10 lg:w-10 rounded-full center text-primary"
              >
                <svg
                  class="w-4 h-4"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m731.733 294.4-281.6 337.067-134.4-134.4L262.4 550.4l194.133 194.133 332.8-398.933zM512 992C247.467 992 32 776.533 32 512S247.467 32 512 32s480 215.467 480 480-215.467 480-480 480"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span class="text-secondary-700 font-medium">即日出院</span>
            </li>
            <li class="flex items-center gap-3">
              <span
                class="medical-icon-box w-6 h-6 lg:h-10 lg:w-10 rounded-full center text-primary"
              >
                <svg
                  class="w-4 h-4"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m731.733 294.4-281.6 337.067-134.4-134.4L262.4 550.4l194.133 194.133 332.8-398.933zM512 992C247.467 992 32 776.533 32 512S247.467 32 512 32s480 215.467 480 480-215.467 480-480 480"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span class="text-secondary-700 font-medium"
                >術程最快 20 分鐘</span
              >
            </li>
            <li class="flex items-center gap-3">
              <span
                class="medical-icon-box w-6 h-6 lg:h-10 lg:w-10 rounded-full center text-primary"
              >
                <svg
                  class="w-4 h-4"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m731.733 294.4-281.6 337.067-134.4-134.4L262.4 550.4l194.133 194.133 332.8-398.933zM512 992C247.467 992 32 776.533 32 512S247.467 32 512 32s480 215.467 480 480-215.467 480-480 480"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span class="text-secondary-700 font-medium"
                >多款品牌人工晶體選擇</span
              >
            </li>
          </ul>

          <div class="flex flex-wrap gap-4">
            <a
              href="tel:+85239562026"
              class="btn-interactive text-[clamp(10px,3.88vw,16px)] animate-cta-breathe btn-primary-grad text-white font-bold py-3 px-4 lg:px-8 rounded-full shadow-lg transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <i class="iconfont icon-phone-o text-xl" aria-hidden="true"></i>
              <span>立即致電預約</span>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=85260629611&text=白內障專線查詢"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-interactive text-[clamp(10px,3.88vw,16px)] btn-whatsapp text-white font-bold py-3 px-4 lg:px-8 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              aria-label="透過 WhatsApp 聯絡我們"
            >
              <i class="iconfont icon-whatsapp text-xl" aria-hidden="true"></i>
              <span>白內障WhatsApp專線</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why CMER Section (具有滚动数字跃升特效) -->
    <section
      id="why-cmer"
      class="gradient-section-why-cmer pt-5 lg:pt-10 px-3 xl:px-0 bg-white"
    >
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-3 lg:mb-12">
          <h2 class="text-2xl font-bold text-primary mb-2">
            為何選擇希瑪眼科？
          </h2>
        </div>
        <div
          class="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 max-w-6xl mx-auto"
          id="counter-section"
        >
          <div
            class="bg-[#F8F9FF] center flex-col p-3 lg:p-8 rounded-xl shadow-sm border border-secondary-100 text-center"
          >
            <div class="text-2xl md:text-4xl font-bold lg:mb-2 text-primary">
              <span>第 1 間</span>
            </div>
            <div class="text-text-info font-medium">香港上市眼科中心</div>
          </div>
          <div
            class="bg-[#F8F9FF] center flex-col p-3 lg:p-8 rounded-xl shadow-sm border border-secondary-100 text-center"
          >
            <div class="text-2xl md:text-4xl font-bold lg:mb-2 text-primary">
              <span>{{ Math.floor(counterValues.doctors) }} 位</span>
            </div>
            <div class="text-text-info font-medium">眼科專科醫生</div>
          </div>
          <div
            class="bg-[#F8F9FF] center flex-col p-3 lg:p-8 rounded-xl shadow-sm border border-secondary-100 text-center"
          >
            <div class="text-2xl md:text-4xl font-bold lg:mb-2 text-primary">
              <span>{{ Math.floor(counterValues.clinics) }} 間</span>
            </div>
            <div class="text-text-info font-medium">眼科診所</div>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" class="gradient-section-testimonials py-10">
      <div class="max-w-3xl mx-auto">
        <h2
          class="cataract-title mb-5 lg:mb-12 text-center text-2xl font-bold text-primary"
        >
          白內障<span class="hl-text">真實客戶分享</span>
        </h2>
        <div class="rounded-2xl relative">
          <div class="video-swiper overflow-hidden px-3 lg:px-10">
            <swiper
              ref="videoSwiperRef"
              :space-between="40"
              :slides-per-view="1"
              :loop="true"
              :navigation="true"
              :pagination="{ clickable: true }"
              :modules="[Pagination, Navigation]"
              class="ccSwiper"
            >
              <swiper-slide
                class="ccSwiper-slide"
                v-for="video in videos"
                :key="video.id"
              >
                <div class="aspect-video w-full">
                  <iframe
                    class="w-full h-full rounded-lg"
                    :src="`https://www.youtube.com/embed/${video.id}`"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div class="text-text-info text-xl font-bold mt-8">
                  <p class="text-center">
                    {{ video.say }}
                  </p>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <!-- <div
            class="video-pagination flex justify-center absolute gap-2 bottom-15 lg:bottom-7"
          ></div> -->
        </div>
      </div>
    </section>

    <!-- Symptoms Section -->
    <section id="symptoms" class="px-3 xl:px-0 py-10">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-3 lg:mb-12">
          <h2 class="cataract-title lg:mb-4 text-2xl font-bold text-primary">
            您有否出現以下情況？
          </h2>
          <p class="text-lg lg:text-2xl text-secondary-500 font-medium">
            可能是<span class="hl-text">白內障徵兆</span>
          </p>
        </div>
        <div
          class="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-5 lg:mb-12"
        >
          <div
            class="bg-white p-3 lg:p-6 rounded-xl shadow-sm border border-secondary-100 flex flex-col items-center justify-center text-center group hover:shadow-md transition-shadow cursor-default"
          >
            <div
              class="symptom-icon w-10 h-10 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-primary text-2xl mb-2 lg:mb-4"
            >
              <svg
                class="w-8 h-8 lg:w-13 lg:h-13"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7"
                  stroke="#2958a3"
                  stroke-width="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="#2958a3"
                  stroke-width="2"
                  stroke-dasharray="4 2"
                />
                <path
                  d="M19 10a8 8 0 0 1 0 4m2-5a10 10 0 0 1 0 6"
                  stroke="#a7c4e0"
                  stroke-width="2"
                />
                <path
                  d="M23 8a12 12 0 0 1 0 8"
                  stroke="#a7c4e0"
                  stroke-width="1.5"
                  opacity=".6"
                />
              </svg>
            </div>
            <h4 class="symptom-title font-bold text-primary mb-0">
              視力模糊、顔色<br />變暗淡
            </h4>
          </div>
          <div
            class="bg-white p-3 lg:p-6 rounded-xl shadow-sm border border-secondary-100 flex flex-col items-center justify-center text-center group hover:shadow-md transition-shadow cursor-default"
          >
            <div
              class="symptom-icon w-10 h-10 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-primary text-2xl mb-2 lg:mb-4"
            >
              <svg
                class="w-8 h-8 lg:w-13 lg:h-13"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7"
                  stroke="#2958a3"
                  stroke-width="2"
                />
                <circle
                  cx="10"
                  cy="12"
                  r="3"
                  stroke="#2958a3"
                  stroke-width="2"
                />
                <circle
                  cx="14"
                  cy="12"
                  r="3"
                  stroke="#a7c4e0"
                  stroke-width="2"
                />
                <path
                  d="M12 2v2m0 16v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M2 12h2m16 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                  stroke="#a7c4e0"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <h4 class="symptom-title font-bold text-primary mb-0">
              出現眩光、重影、<br />畏光
            </h4>
          </div>
          <div
            class="bg-white p-3 lg:p-6 rounded-xl shadow-sm border border-secondary-100 flex flex-col items-center justify-center text-center group hover:shadow-md transition-shadow cursor-default"
          >
            <div
              class="symptom-icon w-10 h-10 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-primary text-2xl mb-2 lg:mb-4"
            >
              <svg
                class="w-8 h-8 lg:w-13 lg:h-13"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M12 20V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2zm0 0V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2zm0-14.5v14"
                  stroke="#2958a3"
                  stroke-width="2"
                />
                <path
                  d="M5 9h4m-4 4h4m6-4h4m-4 4h4"
                  stroke="#2958a3"
                  stroke-width="1.5"
                  opacity=".6"
                />
                <path
                  d="M12 1.5v1m-3.5 0 .7.7m6.3-.7-.7.7"
                  stroke="#a7c4e0"
                  stroke-width="2"
                />
              </svg>
            </div>
            <h4 class="symptom-title font-bold text-primary mb-0">
              閲讀時感到光線<br class="block lg:hidden" />不足
            </h4>
          </div>
          <div
            class="bg-white p-3 lg:p-6 rounded-xl shadow-sm border border-secondary-100 flex flex-col items-center justify-center text-center group hover:shadow-md transition-shadow cursor-default"
          >
            <div
              class="symptom-icon w-10 h-10 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-primary text-2xl mb-2 lg:mb-4"
            >
              <svg
                class="w-8 h-8 lg:w-13 lg:h-13"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M232.747 464.597c58.965 0 112.939 22.4 153.941 59.264a238.5 238.5 0 0 1 78.763 177.771c0 130.901-104.192 237.035-232.704 237.035S0 832.533 0 701.632c0-130.923 104.192-237.035 232.747-237.035m0 94.806c-77.141 0-139.648 63.68-139.648 142.229s62.507 142.23 139.627 142.23 139.648-63.68 139.648-142.23c0-42.475-18.24-80.555-47.296-106.667a137.5 137.5 0 0 0-92.352-35.562zm558.507-94.806C919.808 464.597 1024 570.71 1024 701.611c0 130.944-104.192 237.056-232.746 237.056-128.512 0-232.704-106.134-232.704-237.035 0-70.805 30.528-134.4 78.762-177.77a229.6 229.6 0 0 1 153.963-59.265zm0 94.806a137.5 137.5 0 0 0-92.331 35.541 142.9 142.9 0 0 0-47.296 106.667c0 78.57 62.507 142.25 139.648 142.25 77.12 0 139.627-63.68 139.627-142.229s-62.507-142.23-139.627-142.23z"
                  fill="#2958a3"
                />
                <path
                  d="M351.638 172.181a47.957 47.957 0 0 0 12.906-65.728 46.037 46.037 0 0 0-64.554-13.162l-86.656 58.88a236.54 236.54 0 0 0-91.52 121.749L9.387 614.912A165.4 165.4 0 0 0 0 670.037c0 3.328.342 6.571.982 9.707 8.32-92.544 68.864-169.707 151.38-200.64l57.686-174.997a141.93 141.93 0 0 1 54.912-73.067zm94.442 434.646A237.46 237.46 0 0 0 372.395 512h279.21a236.1 236.1 0 0 0-73.685 94.827zm576.939 72.917c.64-3.136.981-6.4.981-9.707 0-19.285-3.285-37.888-9.386-55.125L902.187 273.92a236.54 236.54 0 0 0-91.52-121.77L724.01 93.29a46.037 46.037 0 0 0-64.555 13.163 47.957 47.957 0 0 0 12.907 65.728l86.677 58.88a141.93 141.93 0 0 1 54.912 73.046l57.686 174.997c82.517 30.933 143.06 108.096 151.38 200.64"
                  fill="#a7c4e0"
                />
              </svg>
            </div>
            <h4 class="symptom-title font-bold text-primary mb-0">
              經常更換眼鏡度數
            </h4>
          </div>
        </div>
        <div
          class="alert-grad rounded-2xl p-4 lg:p-8 max-w-3xl mx-auto text-center bg-[#FFF0AC]"
        >
          <p class="text-xl font-bold mb-4 text-[#977C00]">
            懷疑有白內障？<br />及早檢查，把握治療時機
          </p>
          <a
            href="tel:+85239562026"
            class="cta-btn btn-interactive animate-cta-breathe btn-primary-grad text-white font-bold py-3 px-8 rounded-full inline-flex items-center gap-2 shadow-md"
          >
            <i class="iconfont icon-phone-o" aria-hidden="true"></i>
            <span>立即預約檢查</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Operation Steps (结合响应式对焦 Blur 过渡特效) -->
    <section class="py-10 px-3 xl:px-0">
      <div class="max-w-5xl mx-auto">
        <h2 class="cataract-title mb-5 lg:mb-12">
          白內障<span class="hl-text">唯一有效治療方法</span
          ><br class="block lg:hidden" />是手術！
        </h2>
        <div
          class="grid grid-cols-2 gap-5 lg:gap-12 items-center mb-5 lg:mb-12"
        >
          <!-- 左侧步骤 -->
          <div
            class="space-y-4 text-shadow-md lg:text-shadow-none text-shadow-white"
            id="steps-container"
          >
            <div
              v-for="(step, index) in steps"
              :key="index"
              @click="handleUserInterruption(index)"
              :class="[
                'step-connector min-h-25 flex lg:gap-4 flex-col lg:flex-row lg:h-38 p-3 lg:p-5 border-l-4 rounded-r-xl cursor-pointer relative transition-all duration-300',
                currentIndex === index
                  ? 'bg-[rgba(2,132,199,0.08)] border-[#0284c7]'
                  : 'bg-[#f8fafc] border-[#cbd5e1]',
              ]"
            >
              <div class="flex items-start gap-2 xs:gap-4 lg:w-45">
                <span
                  :class="[
                    'step-number flex-shrink-0 w-5 h-5 lg:w-8 lg:h-8 rounded-full text-white flex items-center justify-center font-bold text-xs lg:text-sm transition-colors duration-300',
                    currentIndex === index ? 'bg-[#0284c7]' : 'bg-[#cbd5e1]',
                  ]"
                  >{{ index + 1 }}</span
                >
                <div>
                  <h4
                    :class="[
                      'step-title font-bold text-[clamp(10px,3.88vw,18px)] lg:text-lg transition-colors duration-300',
                      currentIndex === index
                        ? 'text-[#0284c7]'
                        : 'text-[#4d4d4d]',
                    ]"
                  >
                    {{ step.title }}
                  </h4>
                  <img
                    :src="step.img"
                    class="w-13 h-13 lg:w-22 lg:h-22 object-contain object-left mt-1 absolute lg:relative z-[1] opacity-75"
                    :alt="step.title"
                  />
                </div>
              </div>
              <p
                :class="[
                  'step-desc text-sm lg:text-lg lg:flex-1 lg:pt-1 transition-all duration-300 z-[2]',
                  windowWidth > 1024 || currentIndex === index
                    ? 'opacity-100 block'
                    : 'opacity-0 hidden lg:block',
                ]"
              >
                {{ step.desc }}
              </p>
            </div>
          </div>
          <!-- 右侧模糊变化图片 -->
          <div class="relative">
            <div class="image-context-glow">
              <div
                class="relative bg-secondary-900 rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  id="view-sim"
                  src="https://statichk.cmermedical.com/newopd/services/cataract/cataract-text-01@1x.jpg"
                  alt="白內障患者的視覺"
                  loading="lazy"
                  class="w-full object-cover max-h-[500px] blur-transition"
                  :style="{ filter: `blur(${currentBlur}px)` }"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="grid grid-cols-3 gap-4 text-center text-base lg:text-2xl font-bold"
        >
          <div class="tag-grad text-white rounded-full font-medium shadow-sm">
            现代微创技术
          </div>
          <div class="tag-grad text-white rounded-full font-medium shadow-sm">
            快速恢复
          </div>
          <div class="tag-grad text-white rounded-full font-medium shadow-sm">
            手术时间短
          </div>
        </div>
      </div>
    </section>

    <!-- Lens Comparison Table -->
    <section id="lens-comp" class="px-3 xl:px-0 py-10">
      <div class="max-w-[1366px] mx-auto">
        <div class="text-center mb-5 lg:mb-12 text-primary">
          <h2 class="text-2xl font-bold mb-2">多款人工晶體選擇</h2>
          <p class="text-2xl font-bold">
            <span class="hl-text">度身訂造</span>您的視力方案
          </p>
        </div>
        <PageCataractLens />
      </div>
    </section>
    <!-- FAQ Section -->
    <section id="faq" class="py-10 lg:mb-15 px-3 xl:px-0">
      <div class="max-w-4xl mx-auto">
        <h2
          class="cataract-title mb-5 lg:mb-12 text-center text-2xl font-bold text-primary"
        >
          <span class="hl-text">常見問題</span> FAQ
        </h2>
        <div class="space-y-4 faq-list">
          <details
            class="faq-item group bg-[#F8F9FF] rounded-xl shadow-sm border border-secondary-100 overflow-hidden hover:border-primary/30 transition-colors"
          >
            <summary
              class="w-full p-3 lg:p-6 text-left font-bold text-lg flex justify-between items-center text-secondary-800 hover:text-primary cursor-pointer list-none"
            >
              <span
                class="faq-indicator w-full flex justify-between items-center gap-2 lg:gap-4"
              >
                <div class="flex gap-2 lg:gap-4 items-center flex-1">
                  <svg
                    class="w-5 h-5 lg:w-8 lg:h-8"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M580.267 768a42.67 42.67 0 0 1-11.947 29.44 42.667 42.667 0 0 1-61.44 0 42.667 42.667 0 0 1 0-59.307 42.667 42.667 0 0 1 61.44 0A42.67 42.67 0 0 1 580.267 768m-162.56-390.4a34.133 34.133 0 1 1-66.987-12.8 173.65 173.65 0 0 1 58.453-104.533 170.67 170.67 0 0 1 112.214-38.4 201.8 201.8 0 0 1 62.293 9.386 154.9 154.9 0 0 1 54.187 29.867 147.6 147.6 0 0 1 37.12 49.493 154 154 0 0 1 14.08 66.134 170.7 170.7 0 0 1-6.4 49.92 143 143 0 0 1-17.494 38.826 159.2 159.2 0 0 1-26.026 30.294l-26.454 23.04q-13.226 10.666-22.186 19.2a60.2 60.2 0 0 0-10.24 12.8 45.7 45.7 0 0 0-5.12 13.653 123.7 123.7 0 0 0 0 24.747v42.666a34.133 34.133 0 1 1-68.267 0v-42.666a189 189 0 0 1 3.413-38.827 113.5 113.5 0 0 1 12.8-33.707 128 128 0 0 1 22.187-27.733c7.253-7.253 16.213-14.933 26.027-23.04l23.893-20.907a91 91 0 0 0 14.933-17.493 75.1 75.1 0 0 0 8.96-20.48 105 105 0 0 0 3.414-29.013 85.3 85.3 0 0 0-8.96-36.694 79.8 79.8 0 0 0-20.054-26.88 85.3 85.3 0 0 0-30.72-16.64 133.6 133.6 0 0 0-42.666-6.4 102.83 102.83 0 0 0-68.694 22.614 105.8 105.8 0 0 0-33.706 63.573M512 913.067A401.067 401.067 0 1 0 110.933 512 401.067 401.067 0 0 0 512 913.067m0 68.266A469.333 469.333 0 1 1 981.333 512 469.333 469.333 0 0 1 512 981.333"
                      fill="currentColor"
                    />
                  </svg>
                  <h3 class="text-lg lg:text-2xl flex-1">
                    {{ t('pages.medical_service.cataract.faq.q1') }}
                  </h3>
                </div>
                <svg
                  class="w-5 h-5 lg:w-8 lg:h-8 close"
                  viewBox="0 0 1050 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                >
                  <path
                    d="M513.617 1020.066c282.786 0 512-228.352 512-510.033S796.403 0 513.617 0c-282.732 0-512 228.352-512 510.033s229.241 510.033 512 510.033"
                    fill="#2958a3"
                  />
                  <path
                    d="M486.67 805.322a54.06 54.06 0 0 1-38.104-15.71 53.57 53.57 0 0 1-15.764-37.97V590.58H271.117c-14.282 0-28.025-5.66-38.13-15.738a53.57 53.57 0 0 1-15.764-37.942v-53.733a53.5 53.5 0 0 1 15.764-37.942 54 54 0 0 1 38.104-15.737h161.684V268.45c0-14.229 5.686-27.89 15.79-37.97a54 54 0 0 1 38.131-15.71h53.895a54.06 54.06 0 0 1 38.104 15.71 53.57 53.57 0 0 1 15.764 37.97v161.064h161.684c14.31 0 28.025 5.66 38.13 15.737a53.5 53.5 0 0 1 15.765 37.942V536.9a53.5 53.5 0 0 1-15.764 37.942 54 54 0 0 1-38.13 15.738H594.458v161.064a53.62 53.62 0 0 1-15.764 37.969 54 54 0 0 1-38.13 15.71z"
                    fill="#fefffd"
                  />
                </svg>
                <svg
                  class="w-5 h-5 lg:w-8 lg:h-8 open"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                >
                  <path
                    d="M512.027 0c282.759 0 512 228.352 512 510.033s-229.241 510.033-512 510.06C229.268 1020.093 0 791.713 0 510.033S229.268 0 512.027 0M267.884 421.996c-29.777 0-53.895 24.01-53.895 53.652v53.706c0 29.642 24.118 53.68 53.895 53.68h485.052c29.75 0 53.895-24.038 53.895-53.68v-53.733c0-29.642-24.145-53.68-53.895-53.68z"
                    fill="#2958a3"
                  />
                </svg>
              </span>
            </summary>
            <div
              class="faq-content text-base lg:text-xl px-5 pb-5 text-text-info leading-relaxed"
            >
              <p>{{ t('pages.medical_service.cataract.faq.a1') }}</p>
            </div>
          </details>
          <details
            class="faq-item group bg-[#F8F9FF] rounded-xl shadow-sm border border-secondary-100 overflow-hidden hover:border-primary/30 transition-colors"
          >
            <summary
              class="w-full p-3 lg:p-6 text-left font-bold text-lg flex justify-between items-center text-secondary-800 hover:text-primary cursor-pointer list-none"
            >
              <span
                class="faq-indicator w-full flex justify-between items-center gap-2 lg:gap-4"
              >
                <div class="flex gap-2 lg:gap-4 items-center flex-1">
                  <svg
                    class="w-5 h-5 lg:w-8 lg:h-8"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M580.267 768a42.67 42.67 0 0 1-11.947 29.44 42.667 42.667 0 0 1-61.44 0 42.667 42.667 0 0 1 0-59.307 42.667 42.667 0 0 1 61.44 0A42.67 42.67 0 0 1 580.267 768m-162.56-390.4a34.133 34.133 0 1 1-66.987-12.8 173.65 173.65 0 0 1 58.453-104.533 170.67 170.67 0 0 1 112.214-38.4 201.8 201.8 0 0 1 62.293 9.386 154.9 154.9 0 0 1 54.187 29.867 147.6 147.6 0 0 1 37.12 49.493 154 154 0 0 1 14.08 66.134 170.7 170.7 0 0 1-6.4 49.92 143 143 0 0 1-17.494 38.826 159.2 159.2 0 0 1-26.026 30.294l-26.454 23.04q-13.226 10.666-22.186 19.2a60.2 60.2 0 0 0-10.24 12.8 45.7 45.7 0 0 0-5.12 13.653 123.7 123.7 0 0 0 0 24.747v42.666a34.133 34.133 0 1 1-68.267 0v-42.666a189 189 0 0 1 3.413-38.827 113.5 113.5 0 0 1 12.8-33.707 128 128 0 0 1 22.187-27.733c7.253-7.253 16.213-14.933 26.027-23.04l23.893-20.907a91 91 0 0 0 14.933-17.493 75.1 75.1 0 0 0 8.96-20.48 105 105 0 0 0 3.414-29.013 85.3 85.3 0 0 0-8.96-36.694 79.8 79.8 0 0 0-20.054-26.88 85.3 85.3 0 0 0-30.72-16.64 133.6 133.6 0 0 0-42.666-6.4 102.83 102.83 0 0 0-68.694 22.614 105.8 105.8 0 0 0-33.706 63.573M512 913.067A401.067 401.067 0 1 0 110.933 512 401.067 401.067 0 0 0 512 913.067m0 68.266A469.333 469.333 0 1 1 981.333 512 469.333 469.333 0 0 1 512 981.333"
                      fill="currentColor"
                    />
                  </svg>
                  <h3 class="text-lg lg:text-2xl flex-1">
                    {{ t('pages.medical_service.cataract.faq.q2') }}
                  </h3>
                </div>
                <svg
                  class="w-5 h-5 lg:w-8 lg:h-8 close"
                  viewBox="0 0 1050 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                >
                  <path
                    d="M513.617 1020.066c282.786 0 512-228.352 512-510.033S796.403 0 513.617 0c-282.732 0-512 228.352-512 510.033s229.241 510.033 512 510.033"
                    fill="#2958a3"
                  />
                  <path
                    d="M486.67 805.322a54.06 54.06 0 0 1-38.104-15.71 53.57 53.57 0 0 1-15.764-37.97V590.58H271.117c-14.282 0-28.025-5.66-38.13-15.738a53.57 53.57 0 0 1-15.764-37.942v-53.733a53.5 53.5 0 0 1 15.764-37.942 54 54 0 0 1 38.104-15.737h161.684V268.45c0-14.229 5.686-27.89 15.79-37.97a54 54 0 0 1 38.131-15.71h53.895a54.06 54.06 0 0 1 38.104 15.71 53.57 53.57 0 0 1 15.764 37.97v161.064h161.684c14.31 0 28.025 5.66 38.13 15.737a53.5 53.5 0 0 1 15.765 37.942V536.9a53.5 53.5 0 0 1-15.764 37.942 54 54 0 0 1-38.13 15.738H594.458v161.064a53.62 53.62 0 0 1-15.764 37.969 54 54 0 0 1-38.13 15.71z"
                    fill="#fefffd"
                  />
                </svg>
                <svg
                  class="w-5 h-5 lg:w-8 lg:h-8 open"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                >
                  <path
                    d="M512.027 0c282.759 0 512 228.352 512 510.033s-229.241 510.033-512 510.06C229.268 1020.093 0 791.713 0 510.033S229.268 0 512.027 0M267.884 421.996c-29.777 0-53.895 24.01-53.895 53.652v53.706c0 29.642 24.118 53.68 53.895 53.68h485.052c29.75 0 53.895-24.038 53.895-53.68v-53.733c0-29.642-24.145-53.68-53.895-53.68z"
                    fill="#2958a3"
                  />
                </svg>
              </span>
            </summary>
            <div
              class="faq-content text-base lg:text-xl px-5 pb-5 text-text-info leading-relaxed"
            >
              <p>{{ t('pages.medical_service.cataract.faq.a2') }}</p>
            </div>
          </details>
          <details
            class="faq-item group bg-[#F8F9FF] rounded-xl shadow-sm border border-secondary-100 overflow-hidden hover:border-primary/30 transition-colors"
          >
            <summary
              class="w-full p-3 lg:p-6 text-left font-bold text-lg flex justify-between items-center text-secondary-800 hover:text-primary cursor-pointer list-none"
            >
              <span
                class="faq-indicator w-full flex justify-between items-center gap-2 lg:gap-4"
              >
                <div class="flex gap-2 lg:gap-4 items-center flex-1">
                  <svg
                    class="w-5 h-5 lg:w-8 lg:h-8"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M580.267 768a42.67 42.67 0 0 1-11.947 29.44 42.667 42.667 0 0 1-61.44 0 42.667 42.667 0 0 1 0-59.307 42.667 42.667 0 0 1 61.44 0A42.67 42.67 0 0 1 580.267 768m-162.56-390.4a34.133 34.133 0 1 1-66.987-12.8 173.65 173.65 0 0 1 58.453-104.533 170.67 170.67 0 0 1 112.214-38.4 201.8 201.8 0 0 1 62.293 9.386 154.9 154.9 0 0 1 54.187 29.867 147.6 147.6 0 0 1 37.12 49.493 154 154 0 0 1 14.08 66.134 170.7 170.7 0 0 1-6.4 49.92 143 143 0 0 1-17.494 38.826 159.2 159.2 0 0 1-26.026 30.294l-26.454 23.04q-13.226 10.666-22.186 19.2a60.2 60.2 0 0 0-10.24 12.8 45.7 45.7 0 0 0-5.12 13.653 123.7 123.7 0 0 0 0 24.747v42.666a34.133 34.133 0 1 1-68.267 0v-42.666a189 189 0 0 1 3.413-38.827 113.5 113.5 0 0 1 12.8-33.707 128 128 0 0 1 22.187-27.733c7.253-7.253 16.213-14.933 26.027-23.04l23.893-20.907a91 91 0 0 0 14.933-17.493 75.1 75.1 0 0 0 8.96-20.48 105 105 0 0 0 3.414-29.013 85.3 85.3 0 0 0-8.96-36.694 79.8 79.8 0 0 0-20.054-26.88 85.3 85.3 0 0 0-30.72-16.64 133.6 133.6 0 0 0-42.666-6.4 102.83 102.83 0 0 0-68.694 22.614 105.8 105.8 0 0 0-33.706 63.573M512 913.067A401.067 401.067 0 1 0 110.933 512 401.067 401.067 0 0 0 512 913.067m0 68.266A469.333 469.333 0 1 1 981.333 512 469.333 469.333 0 0 1 512 981.333"
                      fill="currentColor"
                    />
                  </svg>
                  <h3 class="text-lg lg:text-2xl flex-1">
                    {{ t('pages.medical_service.cataract.faq.q3') }}
                  </h3>
                </div>
                <svg
                  class="w-5 h-5 lg:w-8 lg:h-8 close"
                  viewBox="0 0 1050 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                >
                  <path
                    d="M513.617 1020.066c282.786 0 512-228.352 512-510.033S796.403 0 513.617 0c-282.732 0-512 228.352-512 510.033s229.241 510.033 512 510.033"
                    fill="#2958a3"
                  />
                  <path
                    d="M486.67 805.322a54.06 54.06 0 0 1-38.104-15.71 53.57 53.57 0 0 1-15.764-37.97V590.58H271.117c-14.282 0-28.025-5.66-38.13-15.738a53.57 53.57 0 0 1-15.764-37.942v-53.733a53.5 53.5 0 0 1 15.764-37.942 54 54 0 0 1 38.104-15.737h161.684V268.45c0-14.229 5.686-27.89 15.79-37.97a54 54 0 0 1 38.131-15.71h53.895a54.06 54.06 0 0 1 38.104 15.71 53.57 53.57 0 0 1 15.764 37.97v161.064h161.684c14.31 0 28.025 5.66 38.13 15.737a53.5 53.5 0 0 1 15.765 37.942V536.9a53.5 53.5 0 0 1-15.764 37.942 54 54 0 0 1-38.13 15.738H594.458v161.064a53.62 53.62 0 0 1-15.764 37.969 54 54 0 0 1-38.13 15.71z"
                    fill="#fefffd"
                  />
                </svg>
                <svg
                  class="w-5 h-5 lg:w-8 lg:h-8 open"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                >
                  <path
                    d="M512.027 0c282.759 0 512 228.352 512 510.033s-229.241 510.033-512 510.06C229.268 1020.093 0 791.713 0 510.033S229.268 0 512.027 0M267.884 421.996c-29.777 0-53.895 24.01-53.895 53.652v53.706c0 29.642 24.118 53.68 53.895 53.68h485.052c29.75 0 53.895-24.038 53.895-53.68v-53.733c0-29.642-24.145-53.68-53.895-53.68z"
                    fill="#2958a3"
                  />
                </svg>
              </span>
            </summary>
            <div
              class="faq-content text-base lg:text-xl px-5 pb-5 text-text-info leading-relaxed"
            >
              <p>{{ t('pages.medical_service.cataract.faq.a3') }}</p>
              <ul class="list-decimal list-inside">
                <i18n-t
                  v-for="(_, index) in a3List"
                  :key="index"
                  :keypath="`pages.medical_service.cataract.faq.a3_list[${index}]`"
                  tag="li"
                  scope="global"
                >
                </i18n-t>
              </ul>
            </div>
          </details>
          <details
            class="faq-item group bg-[#F8F9FF] rounded-xl shadow-sm border border-secondary-100 overflow-hidden hover:border-primary/30 transition-colors"
          >
            <summary
              class="w-full p-3 lg:p-6 text-left font-bold text-lg flex justify-between items-center text-secondary-800 hover:text-primary cursor-pointer list-none"
            >
              <span
                class="faq-indicator w-full flex justify-between items-center gap-2 lg:gap-4"
              >
                <div class="flex gap-2 lg:gap-4 items-center flex-1">
                  <svg
                    class="w-5 h-5 lg:w-8 lg:h-8"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M580.267 768a42.67 42.67 0 0 1-11.947 29.44 42.667 42.667 0 0 1-61.44 0 42.667 42.667 0 0 1 0-59.307 42.667 42.667 0 0 1 61.44 0A42.67 42.67 0 0 1 580.267 768m-162.56-390.4a34.133 34.133 0 1 1-66.987-12.8 173.65 173.65 0 0 1 58.453-104.533 170.67 170.67 0 0 1 112.214-38.4 201.8 201.8 0 0 1 62.293 9.386 154.9 154.9 0 0 1 54.187 29.867 147.6 147.6 0 0 1 37.12 49.493 154 154 0 0 1 14.08 66.134 170.7 170.7 0 0 1-6.4 49.92 143 143 0 0 1-17.494 38.826 159.2 159.2 0 0 1-26.026 30.294l-26.454 23.04q-13.226 10.666-22.186 19.2a60.2 60.2 0 0 0-10.24 12.8 45.7 45.7 0 0 0-5.12 13.653 123.7 123.7 0 0 0 0 24.747v42.666a34.133 34.133 0 1 1-68.267 0v-42.666a189 189 0 0 1 3.413-38.827 113.5 113.5 0 0 1 12.8-33.707 128 128 0 0 1 22.187-27.733c7.253-7.253 16.213-14.933 26.027-23.04l23.893-20.907a91 91 0 0 0 14.933-17.493 75.1 75.1 0 0 0 8.96-20.48 105 105 0 0 0 3.414-29.013 85.3 85.3 0 0 0-8.96-36.694 79.8 79.8 0 0 0-20.054-26.88 85.3 85.3 0 0 0-30.72-16.64 133.6 133.6 0 0 0-42.666-6.4 102.83 102.83 0 0 0-68.694 22.614 105.8 105.8 0 0 0-33.706 63.573M512 913.067A401.067 401.067 0 1 0 110.933 512 401.067 401.067 0 0 0 512 913.067m0 68.266A469.333 469.333 0 1 1 981.333 512 469.333 469.333 0 0 1 512 981.333"
                      fill="currentColor"
                    />
                  </svg>
                  <h3 class="text-lg lg:text-2xl flex-1">
                    {{ t('pages.medical_service.cataract.faq.q4') }}
                  </h3>
                </div>
                <svg
                  class="w-5 h-5 lg:w-8 lg:h-8 close"
                  viewBox="0 0 1050 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                >
                  <path
                    d="M513.617 1020.066c282.786 0 512-228.352 512-510.033S796.403 0 513.617 0c-282.732 0-512 228.352-512 510.033s229.241 510.033 512 510.033"
                    fill="#2958a3"
                  />
                  <path
                    d="M486.67 805.322a54.06 54.06 0 0 1-38.104-15.71 53.57 53.57 0 0 1-15.764-37.97V590.58H271.117c-14.282 0-28.025-5.66-38.13-15.738a53.57 53.57 0 0 1-15.764-37.942v-53.733a53.5 53.5 0 0 1 15.764-37.942 54 54 0 0 1 38.104-15.737h161.684V268.45c0-14.229 5.686-27.89 15.79-37.97a54 54 0 0 1 38.131-15.71h53.895a54.06 54.06 0 0 1 38.104 15.71 53.57 53.57 0 0 1 15.764 37.97v161.064h161.684c14.31 0 28.025 5.66 38.13 15.737a53.5 53.5 0 0 1 15.765 37.942V536.9a53.5 53.5 0 0 1-15.764 37.942 54 54 0 0 1-38.13 15.738H594.458v161.064a53.62 53.62 0 0 1-15.764 37.969 54 54 0 0 1-38.13 15.71z"
                    fill="#fefffd"
                  />
                </svg>
                <svg
                  class="w-5 h-5 lg:w-8 lg:h-8 open"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                >
                  <path
                    d="M512.027 0c282.759 0 512 228.352 512 510.033s-229.241 510.033-512 510.06C229.268 1020.093 0 791.713 0 510.033S229.268 0 512.027 0M267.884 421.996c-29.777 0-53.895 24.01-53.895 53.652v53.706c0 29.642 24.118 53.68 53.895 53.68h485.052c29.75 0 53.895-24.038 53.895-53.68v-53.733c0-29.642-24.145-53.68-53.895-53.68z"
                    fill="#2958a3"
                  />
                </svg>
              </span>
            </summary>
            <div
              class="faq-content text-base lg:text-xl px-5 pb-5 text-text-info leading-relaxed"
            >
              <p>{{ t('pages.medical_service.cataract.faq.a4') }}</p>
            </div>
          </details>
          <details
            class="faq-item group bg-[#F8F9FF] rounded-xl shadow-sm border border-secondary-100 overflow-hidden hover:border-primary/30 transition-colors"
          >
            <summary
              class="w-full p-3 lg:p-6 text-left font-bold text-lg flex justify-between items-center text-secondary-800 hover:text-primary cursor-pointer list-none"
            >
              <span
                class="faq-indicator w-full flex justify-between items-center gap-2 lg:gap-4"
              >
                <div class="flex gap-2 lg:gap-4 items-center flex-1">
                  <svg
                    class="w-5 h-5 lg:w-8 lg:h-8"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M580.267 768a42.67 42.67 0 0 1-11.947 29.44 42.667 42.667 0 0 1-61.44 0 42.667 42.667 0 0 1 0-59.307 42.667 42.667 0 0 1 61.44 0A42.67 42.67 0 0 1 580.267 768m-162.56-390.4a34.133 34.133 0 1 1-66.987-12.8 173.65 173.65 0 0 1 58.453-104.533 170.67 170.67 0 0 1 112.214-38.4 201.8 201.8 0 0 1 62.293 9.386 154.9 154.9 0 0 1 54.187 29.867 147.6 147.6 0 0 1 37.12 49.493 154 154 0 0 1 14.08 66.134 170.7 170.7 0 0 1-6.4 49.92 143 143 0 0 1-17.494 38.826 159.2 159.2 0 0 1-26.026 30.294l-26.454 23.04q-13.226 10.666-22.186 19.2a60.2 60.2 0 0 0-10.24 12.8 45.7 45.7 0 0 0-5.12 13.653 123.7 123.7 0 0 0 0 24.747v42.666a34.133 34.133 0 1 1-68.267 0v-42.666a189 189 0 0 1 3.413-38.827 113.5 113.5 0 0 1 12.8-33.707 128 128 0 0 1 22.187-27.733c7.253-7.253 16.213-14.933 26.027-23.04l23.893-20.907a91 91 0 0 0 14.933-17.493 75.1 75.1 0 0 0 8.96-20.48 105 105 0 0 0 3.414-29.013 85.3 85.3 0 0 0-8.96-36.694 79.8 79.8 0 0 0-20.054-26.88 85.3 85.3 0 0 0-30.72-16.64 133.6 133.6 0 0 0-42.666-6.4 102.83 102.83 0 0 0-68.694 22.614 105.8 105.8 0 0 0-33.706 63.573M512 913.067A401.067 401.067 0 1 0 110.933 512 401.067 401.067 0 0 0 512 913.067m0 68.266A469.333 469.333 0 1 1 981.333 512 469.333 469.333 0 0 1 512 981.333"
                      fill="currentColor"
                    />
                  </svg>
                  <h3 class="text-lg lg:text-2xl flex-1">
                    {{ t('pages.medical_service.cataract.faq.q5') }}
                  </h3>
                </div>
                <svg
                  class="w-5 h-5 lg:w-8 lg:h-8 close"
                  viewBox="0 0 1050 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                >
                  <path
                    d="M513.617 1020.066c282.786 0 512-228.352 512-510.033S796.403 0 513.617 0c-282.732 0-512 228.352-512 510.033s229.241 510.033 512 510.033"
                    fill="#2958a3"
                  />
                  <path
                    d="M486.67 805.322a54.06 54.06 0 0 1-38.104-15.71 53.57 53.57 0 0 1-15.764-37.97V590.58H271.117c-14.282 0-28.025-5.66-38.13-15.738a53.57 53.57 0 0 1-15.764-37.942v-53.733a53.5 53.5 0 0 1 15.764-37.942 54 54 0 0 1 38.104-15.737h161.684V268.45c0-14.229 5.686-27.89 15.79-37.97a54 54 0 0 1 38.131-15.71h53.895a54.06 54.06 0 0 1 38.104 15.71 53.57 53.57 0 0 1 15.764 37.97v161.064h161.684c14.31 0 28.025 5.66 38.13 15.737a53.5 53.5 0 0 1 15.765 37.942V536.9a53.5 53.5 0 0 1-15.764 37.942 54 54 0 0 1-38.13 15.738H594.458v161.064a53.62 53.62 0 0 1-15.764 37.969 54 54 0 0 1-38.13 15.71z"
                    fill="#fefffd"
                  />
                </svg>
                <svg
                  class="w-5 h-5 lg:w-8 lg:h-8 open"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                >
                  <path
                    d="M512.027 0c282.759 0 512 228.352 512 510.033s-229.241 510.033-512 510.06C229.268 1020.093 0 791.713 0 510.033S229.268 0 512.027 0M267.884 421.996c-29.777 0-53.895 24.01-53.895 53.652v53.706c0 29.642 24.118 53.68 53.895 53.68h485.052c29.75 0 53.895-24.038 53.895-53.68v-53.733c0-29.642-24.145-53.68-53.895-53.68z"
                    fill="#2958a3"
                  />
                </svg>
              </span>
            </summary>
            <div
              class="faq-content text-base lg:text-xl px-5 pb-5 text-text-info leading-relaxed"
            >
              <p>{{ t('pages.medical_service.cataract.faq.a5') }}</p>
              <i18n-t
                keypath="pages.medical_service.cataract.faq.a5_cmer"
                tag="span"
                scope="global"
              >
                <template #num>
                  <strong class="text-[#FF6B2C] font-bold">{{
                    t('pages.medical_service.cataract.faq.a5_num')
                  }}</strong>
                </template>
                <template #doctor>
                  <nuxt-link
                    to="/csp-doctor"
                    class="bg-primary text-white px-2 py-1 rounded-lg ml-1"
                    >{{
                      t('pages.medical_service.cataract.faq.a5_doctor')
                    }}</nuxt-link
                  >
                </template>
              </i18n-t>
              <p>{{ t('pages.medical_service.cataract.faq.a5_apply') }}</p>
              <ul class="list-decimal list-inside">
                <li>
                  {{ t('pages.medical_service.cataract.faq.tel')
                  }}<a href="tel:+852 3956 2026" class="text-primary"
                    >3956 2026</a
                  >
                  /
                  <a href="tel:+852 3956 2025" class="text-primary"
                    >3956 2025</a
                  >
                </li>
                <li>
                  <a
                    href="https://rebrand.ly/耀眼行動計劃查詢"
                    target="_blank"
                    class="text-primary"
                    >{{ t('pages.medical_service.cataract.faq.whatsapp') }} 6062
                    9611</a
                  >
                </li>
              </ul>
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- Download Section -->
    <section class="space-y-10 md:space-y-25 xl:space-y-35 mb-10 lg:mb-15">
      <a
        href="https://hkcmereye.com/static/pdf/cataract1.pdf"
        download="如何選擇合適自己的人工晶體.pdf"
        class="flex items-center gap-4 lg:gap-10 bg-primary text-white w-9/10 lg:w-3/5 max-w-7xl py-4 lg:py-8 pl-[10%] lg:pl-[25%]"
      >
        <img
          src="https://statichk.cmermedical.com/newopd/icon/icon-pdf.webp"
          class="w-12 lg:w-30 aspect-[59/67]"
          alt="PDF Icon"
        />
        <div class="lg:text-2xl">
          <p class="mb-2 lg:mb-5">如何選擇合適自己的人工晶體</p>
          <p class="font-bold">下載小冊子</p>
        </div>
      </a>
      <a
        href="https://hkcmereye.com/static/pdf/cataract2.pdf"
        download="白內障小冊子.pdf"
        class="flex items-center gap-4 lg:gap-10 bg-primary text-white w-9/10 lg:w-3/5 max-w-7xl py-4 lg:py-8 pl-[10%] lg:pl-[25%]"
      >
        <img
          src="https://statichk.cmermedical.com/newopd/icon/icon-pdf.webp"
          class="w-12 lg:w-30 aspect-[59/67]"
          alt="PDF Icon"
        />
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
.video-swiper :deep(.swiper-pagination) {
  bottom: 60px;
  @media screen and (min-width: 1024px) {
    bottom: 28px;
  }
}
.video-swiper :deep(.swiper-button-prev),.video-swiper :deep(.swiper-button-next) {
  top: 35%;
  @media screen and (min-width: 1024px) {
    top: 45%;
  }
}
.video-swiper-prev,
.video-swiper-next {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.video-swiper-prev:hover,
.video-swiper-next:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}
.ccSwiper-slide iframe {
  pointer-events: auto;
}
.blur-transition {
  transition: filter 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: filter;
}
.symptom-title {
  font-size: clamp(14px, 4.5vw, 24px);
}
.step-desc {
  z-index: 2;
  text-shadow: 1px 1px 0 white;
}
.faq-item {
  .open {
    display: none;
  }
  .close {
    display: block;
  }
  &[open] {
    .open {
      display: block;
    }
    .close {
      display: none;
    }
  }
  .faq-content {
    line-height: 1.75;
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cataract-title {
  color: #2958a3;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.hl-text {
  color: #2958a3;
  background: linear-gradient(120deg, #ffb800 0%, #ffc947 50%, #ffb800 100%) 0 0 /
    200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  padding: 0 4px;
  font-weight: 700;
  // animation: 3s ease-in-out infinite hl-shimmer;
  position: relative;
  &::after {
    content: '';
    z-index: -1;
    background: linear-gradient(
        120deg,
        #ffb80059 0%,
        #ffc94773 50%,
        #ffb80059 100%
      )
      0 0 / 200% 100%;
    border-radius: 4px;
    height: 50%;
    // animation: 3s ease-in-out infinite hl-shimmer;
    position: absolute;
    top: 50%;
    left: -4px;
    right: -4px;
    transform: translateY(-50%);
  }
}

.btn-interactive {
  position: relative;
  overflow: hidden;
}

.btn-primary-grad {
  background: linear-gradient(135deg, #5b8dcf, #2958a3, #1e3f78);
  color: #fff;
  background-size: 200% 200%;
  transition: all 0.3s;
}

.btn-whatsapp {
  background: #00b306;
  color: #fff;
  transition: all 0.3s;
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
  background: linear-gradient(
    135deg,
    rgba(41, 88, 163, 0.08),
    rgba(41, 88, 163, 0.03)
  );
  border: 1px solid rgba(41, 88, 163, 0.12);
}

.banner {
  .banner-title {
    font-weight: bold;
    color: #2958a3;
    font-size: clamp(30px, 10vw, 40px);
    line-height: 1.25;
  }
  .banner-subtitle {
    font-weight: bold;
    color: #977c00;
    font-size: clamp(24px, 8.3vw, 36px);
    line-height: 1.25;
  }
}

@keyframes cta-breathe {
  0%,
  100% {
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
    text-shadow: -3px -3px 0 #fff, 3px -3px 0 #fff, -3px 3px 0 #fff,
      3px 3px 0 #fff;
    width: min(170px, 8.85vw);
    font-size: min(24px, 2vw);
  }
}
</style>

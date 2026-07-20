<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})

const { t } = useLang()
useHead({
  title: t('tdk.urgent.title'),
  meta: [
    {
      name: 'description',
      content: t('tdk.urgent.desc'),
    },
    {
      name: 'keywords',
      content: t('tdk.urgent.key'),
    },
    { property: 'og:title', content: t('tdk.urgent.title') },
    {
      property: 'og:description',
      content: t('tdk.urgent.desc'),
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'zh_HK' },
  ],
})

interface ClinicPhoto {
  avif?: string
  webp?: string
  fallback: string
  alt: string
}

interface Clinic {
  id: number
  name: string
  region: 'hk' | 'kln' | 'nt'
  address: string
  fullAddress: string
  hours: string
  hoursSat: string
  hoursSun: string
  phone: string
  lat: number
  lng: number
  mapsLink: string
  photos: ClinicPhoto[]
  distance?: number
}
// Clinic data
const clinicsData: Clinic[] = [
  {
    id: 1,
    name: '希瑪眼科中心 (中環-中建大廈)',
    region: 'hk',
    address: '中環畢打街1-3號中建大廈1515室',
    fullAddress: '中環畢打街1-3號中建大廈1515室',
    hours: '星期一至五 09:30–13:30 / 14:30–19:00',
    hoursSat: '星期六 09:30–18:00',
    hoursSun: '',
    phone: '+852 3956 2026',
    lat: 22.2813,
    lng: 114.1583,
    mapsLink: 'https://goo.gl/maps/8GnSZHx69s4PgPif6',
    photos: [
      {
        avif: 'https://statichk.cmermedical.com/newopd/common/cmer-hongkong-01.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/common/cmer-hongkong-01.jpg',
        alt: '香港中環中建大廈診所實拍圖第一張',
      },
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/Central1-2.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/Central1-2.png',
        alt: '香港中環中建大廈診所實拍圖第二張',
      },
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/Central1-3.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/Central1-3.png',
        alt: '香港中環中建大廈診所實拍圖第三張',
      },
    ],
  },
  {
    id: 2,
    name: '希瑪眼科中心 (中環-萬邦行)',
    region: 'hk',
    address: '中環皇后大道33號萬邦行1908室',
    fullAddress: '中環皇后大道33號萬邦行1908室',
    hours: '星期一至五 10:00–13:00 / 15:00–18:00',
    hoursSat: '',
    hoursSun: '',
    phone: '+852 3956 2026',
    lat: 22.2816,
    lng: 114.157,
    mapsLink: 'https://goo.gl/maps/cTtPrK89qYcgNVcT8',
    photos: [
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/Central2-1.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/Central2-1.png',
        alt: '香港中環萬邦行診所實拍圖第一張',
      },
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/Central2-2.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/Central2-2.png',
        alt: '香港中環萬邦行診所實拍圖第二張',
      },
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/Central2-3.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/Central2-3.png',
        alt: '香港中環萬邦行診所實拍圖第三張',
      },
    ],
  },
  {
    id: 3,
    name: '希瑪眼科中心 (旺角)',
    region: 'kln',
    address: '旺角彌敦道625及639號雅蘭中心一期1208室及1725B室',
    fullAddress: '旺角彌敦道625及639號雅蘭中心一期1208室及1725B室',
    hours: '星期一至五 09:30–13:30 / 14:30–19:00',
    hoursSat: '星期六\n09:30-13:30（1208室）\n09:30-18:00（1725室）',
    hoursSun: '',
    phone: '+852 3956 2026',
    lat: 22.3192,
    lng: 114.1694,
    mapsLink: 'https://goo.gl/maps/CqwrB3htjnM7b8XEA',
    photos: [
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/MongKok-1.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/MongKok-1.png',
        alt: '香港九龍旺角診所實拍圖第一張',
      },
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/MongKok-2.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/MongKok-2.png',
        alt: '香港九龍旺角診所實拍圖第二張',
      },
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/MongKok-3.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/MongKok-3.png',
        alt: '香港九龍旺角診所實拍圖第三張',
      },
    ],
  },
  {
    id: 4,
    name: '希瑪眼科中心 (銅鑼灣)',
    region: 'hk',
    address: '銅鑼灣百德新街2-20號恒隆中心1614-15室',
    fullAddress: '銅鑼灣百德新街2-20號恒隆中心1614-15室',
    hours: '星期一至五 09:30–13:30 / 14:30–19:00',
    hoursSat: '星期六 09:30–13:30',
    hoursSun: '',
    phone: '+852 3956 2026',
    lat: 22.2801,
    lng: 114.1848,
    mapsLink: 'https://goo.gl/maps/DUouFYZSJ9z4cpKx9',
    photos: [
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/CausewayBay-1.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/CausewayBay-1.png',
        alt: '香港銅鑼灣診所實拍圖第一張',
      },
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/CausewayBay-2.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/CausewayBay-2.png',
        alt: '香港銅鑼灣診所實拍圖第二張',
      },
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/CausewayBay-3.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/CausewayBay-3.png',
        alt: '香港銅鑼灣診所實拍圖第三張',
      },
    ],
  },
  {
    id: 5,
    name: '希瑪眼科中心 (觀塘)',
    region: 'kln',
    address: '觀塘開源道79號鱷魚恤中心16樓1601室',
    fullAddress: '觀塘開源道79號鱷魚恤中心16樓1601室',
    hours: '星期一至五 09:30–13:30 / 14:30–19:00',
    hoursSat: '星期六 09:30–13:30',
    hoursSun: '',
    phone: '+852 3956 2026',
    lat: 22.3118,
    lng: 114.2264,
    mapsLink: 'https://goo.gl/maps/wwwesw4YnXwr7NtL8',
    photos: [
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/KwunTong-1.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/KwunTong-1.png',
        alt: '香港九龍觀塘診所實拍圖第一張',
      },
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/KwunTong-2.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/KwunTong-2.png',
        alt: '香港九龍觀塘診所實拍圖第二張',
      },
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/KwunTong-3.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/KwunTong-3.png',
        alt: '香港九龍觀塘診所實拍圖第三張',
      },
    ],
  },
  {
    id: 6,
    name: '希瑪眼科中心 (沙田)',
    region: 'nt',
    address: '沙田正街11-17號偉華中心2樓5A,5B及1C-1E號鋪',
    fullAddress: '沙田正街11-17號偉華中心2樓5A,5B及1C-1E號鋪',
    hours: '星期一至五 09:30–13:30 / 14:30–19:00',
    hoursSat: '星期六 09:30–13:30',
    hoursSun: '',
    phone: '+852 3956 2026',
    lat: 22.3818,
    lng: 114.1884,
    mapsLink: 'https://goo.gl/maps/7zAGzUVwRMzQ78av7',
    photos: [
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/Shatin-1.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/Shatin-1.png',
        alt: '香港新界沙田診所實拍圖第一張',
      },
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/Shatin-2.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/Shatin-2.png',
        alt: '香港新界沙田診所實拍圖第二張',
      },
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/Shatin-3.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/Shatin-3.png',
        alt: '香港新界沙田診所實拍圖第三張',
      },
    ],
  },
  {
    id: 7,
    name: '希瑪眼科中心 (元朗)',
    region: 'nt',
    address: '元朗青山公路45及47號誠信商業大廈地鋪',
    fullAddress: '元朗青山公路45及47號誠信商業大廈地鋪',
    hours: '星期一至五 09:30–13:30 / 14:30–19:00',
    hoursSat: '星期六 09:30–13:30',
    hoursSun: '',
    phone: '+852 3956 2026',
    lat: 22.4445,
    lng: 114.0222,
    mapsLink: 'https://goo.gl/maps/Nfh4nebSBo5zTHycA',
    photos: [
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/YuenLong-1.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/YuenLong-1.png',
        alt: '香港新界元朗診所實拍圖第一張',
      },
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/YuenLong-2.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/YuenLong-2.png',
        alt: '香港新界元朗診所實拍圖第二張',
      },
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/YuenLong-3.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/YuenLong-3.png',
        alt: '香港新界元朗診所實拍圖第三張',
      },
    ],
  },
  {
    id: 8,
    name: '希瑪眼科中心 (荃灣)',
    region: 'nt',
    address: '荃灣沙咀道255號思源樓地下',
    fullAddress: '荃灣沙咀道255號思源樓地下',
    hours: '星期一至五 09:30–13:30 / 14:30–19:00',
    hoursSat: '星期六 09:30–13:30',
    hoursSun: '',
    phone: '+852 3956 2026',
    lat: 22.3715,
    lng: 114.1173,
    mapsLink: 'https://goo.gl/maps/FukN8ZhA4jCUe7qV9',
    photos: [
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/TsuenWan-1.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/TsuenWan-1.png',
        alt: '香港新界荃灣診所實拍圖第一張',
      },
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/TsuenWan-2.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/TsuenWan-2.png',
        alt: '香港新界荃灣診所實拍圖第二張',
      },
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/TsuenWan-3.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/TsuenWan-3.png',
        alt: '香港新界荃灣診所實拍圖第三張',
      },
    ],
  },
  {
    id: 9,
    name: '希瑪眼科中心 (將軍澳)',
    region: 'nt',
    address: '將軍澳運亨路1號新都城中心一期地下55-56號鋪',
    fullAddress: '將軍澳運亨路1號新都城中心一期地下55-56號鋪',
    hours: '星期一至五 09:30–13:30 / 14:30–19:00',
    hoursSat: '星期六 09:30–13:30',
    hoursSun: '',
    phone: '+852 3956 2026',
    lat: 22.3235,
    lng: 114.2616,
    mapsLink: 'https://goo.gl/maps/o4DpCAr4F52L12Vu8',
    photos: [
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/TseungKwanO-1.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/TseungKwanO-1.png',
        alt: '香港新界將軍澳診所實拍圖第一張',
      },
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/TseungKwanO-2.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/TseungKwanO-2.png',
        alt: '香港新界將軍澳診所實拍圖第二張',
      },
      {
        avif: 'https://statichk.cmermedical.com/newopd/about/contact/TseungKwanO-3.avif',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/TseungKwanO-3.png',
        alt: '香港新界將軍澳診所實拍圖第三張',
      },
    ],
  },
]

const userCoords = ref<{ lat: number; lng: number } | null>(null)
const currentFilter = ref<'all' | 'hk' | 'kln' | 'nt'>('all')
const gpsDenied = ref(false)
const showGpsModal = ref(false)
const modalMessage = ref('')

// 核心修复：使用 watch + forceUpdate 确保排序生效
const displayedClinics = computed(() => {
  let list = [...clinicsData]

  if (userCoords.value) {
    list = list
      .map((clinic) => ({
        ...clinic,
        distance: getDistance(
          userCoords.value!.lat,
          userCoords.value!.lng,
          clinic.lat,
          clinic.lng
        ),
      }))
      .sort((a, b) => (a.distance || 9999) - (b.distance || 9999))
  }

  if (currentFilter.value !== 'all') {
    list = list.filter((c) => c.region === currentFilter.value)
  }

  return list
})
function getDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}
function deg2rad(deg: number) {
  return deg * (Math.PI / 180)
}

// GPS 主函数（优化版）
async function handleGpsTracking() {
  if (!navigator.geolocation) {
    showModal('您的瀏覽器不支援定位功能')
    return
  }

  if (gpsDenied.value) {
    showDeniedHelp()
    return
  }

  try {
    // 1. 使用 Promise 配合 await 阻塞等待定位结果，并显式声明类型 GeolocationPosition
    const res = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      })
    })

    // 2. 此时 res 拥有完整的类型推导，可以直接安全地访问 coords
    userCoords.value = {
      lat: res.coords.latitude,
      lng: res.coords.longitude,
    }

    // 3. 成功后自动滚动到诊所列表
    // setTimeout(() => {
    //   document
    //     .getElementById('clinic-list')
    //     ?.scrollIntoView({ behavior: 'smooth' })
    // }, 300)
  } catch (error: any) {
    // 4. 无论是超时还是拒绝，getCurrentPosition 的错误都会被 catch 捕获
    switch (error.code) {
      case error.POSITION_UNAVAILABLE:
        showModal('暫時無法取得您的位置資訊，請確認已開啟定位服務')
        break

      case error.TIMEOUT:
        showModal('取得位置資訊逾時，請稍後再試')
        break

      default:
        showModal('定位失敗，請檢查網絡連線及定位設定後重試')
        break
    }
  }
}

function filterRegion(region: 'all' | 'hk' | 'kln' | 'nt') {
  currentFilter.value = region
}

// Modal functions
function showModal(msg: string) {
  modalMessage.value = msg
  showGpsModal.value = true
}

function closeModal() {
  showGpsModal.value = false
}

function showDeniedHelp() {
  modalMessage.value = `
    <div class="text-left">
      <div class="text-lg font-bold mb-3">需要開啟位置權限</div>
      <div class="text-sm">請在瀏覽器/裝置設定中允許定位，然後重新整理頁面。</div>
    </div>
  `
  showGpsModal.value = true
}

// 页面加载后自动尝试获取位置（与原 HTML 一致）
onMounted(() => {
  if (process.client) {
    setTimeout(() => {
      handleGpsTracking()
    }, 800)
  }
})
</script>

<template>
  <!-- Hero Section -->
  <section
    class="sticky top-[30px] md:top-0 z-10 bg-[#FDFBF7] md:relative md:bg-transparent pt-10 pb-2 text-center"
  >
    <div class="max-w-5xl mx-auto px-3 pt-3">
      <h1
        class="font-serif text-lg xs:text-2xl md:text-5xl font-bold text-[#16437E] tracking-wide leading-tight mb-2"
      >
        Urgent Care Assistance
      </h1>
      <p
        class="font-serif text-base xs:text-2xl md:text-5xl font-bold text-[#16437E] tracking-wide leading-tight mb-2 xs:mb-4"
      >
        緊急醫療服務 盡快即時支援
      </p>

      <div
        class="flex items-center justify-center gap-3 md:gap-6 text-left w-fit mx-auto whitespace-nowrap"
      >
        <p
          class="urgent-intro font-serif font-bold text-[#E63A2E] leading-tight"
        >
          特設急症應診:<br />週末｜中環・旺角・沙田<br />週末及公眾假期｜中環・旺角
        </p>

        <a
          href="tel:+85239562026"
          class="urgent-button animate-pulseSoft whitespace-nowrap inline-flex flex-col items-center bg-[#E63A2E] text-white px-6 py-3 rounded-full text-base xl:text-xl font-bold xl:font-medium hover:brightness-110 transition-all"
        >
          <span class="flex items-center gap-2 text-xs md:text-base lg:text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 -960 960 960"
            >
              <path
                d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"
              />
            </svg>
            急症熱線
          </span>
          <span class="text-xs md:text-base lg:text-xl">19:00-22:00</span>
          <span class="text-xs md:text-base lg:text-xl">+852 3956 2026</span>
        </a>
      </div>
    </div>
  </section>

  <main class="max-w-5xl mx-auto px-3 pb-20">
    <!-- Symptoms Section -->
    <section>
      <div
        class="flex items-center gap-4 font-bold text-[#16437E] tracking-widest text-lg xs:text-xl md:text-3xl mt-12 mb-4 md:mb-8"
      >
        <span
          class="flex-1 h-px bg-gradient-to-r from-transparent via-[#D6CFC3] to-transparent"
        ></span>
        眼科急症服務
        <span
          class="flex-1 h-px bg-gradient-to-r from-transparent via-[#D6CFC3] to-transparent"
        ></span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <!-- Symptom cards - repeat pattern for all 4 -->
        <div
          class="group bg-white border border-[#EDE8DF] rounded-3xl p-3 md:p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <div class="flex gap-4 items-center">
            <svg
              class="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#1f1f1f"
            >
              <path
                d="M106-386q-6-6-6-14t6-14q6-6 14-6t14 6q6 6 6 14t-6 14q-6 6-14 6t-14-6Zm0-160q-6-6-6-14t6-14q6-6 14-6t14 6q6 6 6 14t-6 14q-6 6-14 6t-14-6Zm105.5 334.5Q200-223 200-240t11.5-28.5Q223-280 240-280t28.5 11.5Q280-257 280-240t-11.5 28.5Q257-200 240-200t-28.5-11.5Zm0-160Q200-383 200-400t11.5-28.5Q223-440 240-440t28.5 11.5Q280-417 280-400t-11.5 28.5Q257-360 240-360t-28.5-11.5Zm0-160Q200-543 200-560t11.5-28.5Q223-600 240-600t28.5 11.5Q280-577 280-560t-11.5 28.5Q257-520 240-520t-28.5-11.5Zm0-160Q200-703 200-720t11.5-28.5Q223-760 240-760t28.5 11.5Q280-737 280-720t-11.5 28.5Q257-680 240-680t-28.5-11.5Zm146 334Q340-375 340-400t17.5-42.5Q375-460 400-460t42.5 17.5Q460-425 460-400t-17.5 42.5Q425-340 400-340t-42.5-17.5Zm0-160Q340-535 340-560t17.5-42.5Q375-620 400-620t42.5 17.5Q460-585 460-560t-17.5 42.5Q425-500 400-500t-42.5-17.5Zm14 306Q360-223 360-240t11.5-28.5Q383-280 400-280t28.5 11.5Q440-257 440-240t-11.5 28.5Q417-200 400-200t-28.5-11.5Zm0-480Q360-703 360-720t11.5-28.5Q383-760 400-760t28.5 11.5Q440-737 440-720t-11.5 28.5Q417-680 400-680t-28.5-11.5ZM386-106q-6-6-6-14t6-14q6-6 14-6t14 6q6 6 6 14t-6 14q-6 6-14 6t-14-6Zm0-720q-6-6-6-14t6-14q6-6 14-6t14 6q6 6 6 14t-6 14q-6 6-14 6t-14-6Zm131.5 468.5Q500-375 500-400t17.5-42.5Q535-460 560-460t42.5 17.5Q620-425 620-400t-17.5 42.5Q585-340 560-340t-42.5-17.5Zm0-160Q500-535 500-560t17.5-42.5Q535-620 560-620t42.5 17.5Q620-585 620-560t-17.5 42.5Q585-500 560-500t-42.5-17.5Zm14 306Q520-223 520-240t11.5-28.5Q543-280 560-280t28.5 11.5Q600-257 600-240t-11.5 28.5Q577-200 560-200t-28.5-11.5Zm0-480Q520-703 520-720t11.5-28.5Q543-760 560-760t28.5 11.5Q600-737 600-720t-11.5 28.5Q577-680 560-680t-28.5-11.5ZM546-106q-6-6-6-14t6-14q6-6 14-6t14 6q6 6 6 14t-6 14q-6 6-14 6t-14-6Zm0-720q-6-6-6-14t6-14q6-6 14-6t14 6q6 6 6 14t-6 14q-6 6-14 6t-14-6Zm145.5 614.5Q680-223 680-240t11.5-28.5Q703-280 720-280t28.5 11.5Q760-257 760-240t-11.5 28.5Q737-200 720-200t-28.5-11.5Zm0-160Q680-383 680-400t11.5-28.5Q703-440 720-440t28.5 11.5Q760-417 760-400t-11.5 28.5Q737-360 720-360t-28.5-11.5Zm0-160Q680-543 680-560t11.5-28.5Q703-600 720-600t28.5 11.5Q760-577 760-560t-11.5 28.5Q737-520 720-520t-28.5-11.5Zm0-160Q680-703 680-720t11.5-28.5Q703-760 720-760t28.5 11.5Q760-737 760-720t-11.5 28.5Q737-680 720-680t-28.5-11.5ZM826-386q-6-6-6-14t6-14q6-6 14-6t14 6q6 6 6 14t-6 14q-6 6-14 6t-14-6Zm0-160q-6-6-6-14t6-14q6-6 14-6t14 6q6 6 6 14t-6 14q-6 6-14 6t-14-6Z"
              ></path>
            </svg>
            <div>
              <div class="font-bold text-sm xs:text-base md:text-lg leading-tight mb-2">
                突發視力缺失、缺損及視力快速下降
              </div>
              <div
                class="inline-block bg-[#F8F5F0] text-[#3D3428] px-4 py-1 rounded-2xl text-sm font-medium"
              >
                懷疑：視網膜脫落
              </div>
            </div>
          </div>
        </div>
        <div
          class="group bg-white border border-[#EDE8DF] rounded-3xl p-3 md:p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <div class="flex gap-4 items-center">
            <svg
              class="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#1f1f1f"
            >
              <path
                d="m280-80 160-300-320-40 480-460h80L520-580l320 40L360-80h-80Zm222-247 161-154-269-34 63-117-160 154 268 33-63 118Zm-22-153Z"
              ></path>
            </svg>
            <div>
              <div class="font-bold text-sm xs:text-base md:text-lg leading-tight mb-2">
                眼前突現大量飛蚊、黑影、伴有閃光
              </div>
              <div
                class="inline-block bg-[#F8F5F0] text-[#3D3428] px-4 py-1 rounded-2xl text-sm font-medium"
              >
                懷疑：視網膜脫落
              </div>
            </div>
          </div>
        </div>
        <div
          class="group bg-white border border-[#EDE8DF] rounded-3xl p-3 md:p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <div class="flex gap-4 items-center">
            <svg
              class="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#1f1f1f"
            >
              <path
                d="M87-556q26-140 135.5-232T480-880q74 0 139.5 24T737-788q-14 26-22.5 44.5T703-709q-44-42-101-66.5T480-800q-101 0-181 56.5T183-599q-27-1-52.5 10T87-556ZM480-80q-148 0-257.5-92T87-404q17 22 42.5 33.5T183-360q36 88 116 144t181 56q133 0 226.5-93.5T800-480q0-17-1.5-34t-5.5-34q11 4 22.5 6t24.5 2q9 0 18-1t17-3q2 16 3.5 31.5T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM336-496l84-84-85-85-42 42 43 42-43 43 43 42Zm447.5-127.5Q760-647 760-680q0-27 15-57.5T840-840q50 72 65 102.5t15 57.5q0 33-23.5 56.5T840-600q-33 0-56.5-23.5ZM625-495l43-43-43-43 42-42-42-42-85 85 85 85Zm-145 75q-26 0-50.5 6T383-397l-143-83q0-16-8-30t-22-22q-22-12-45.5-5.5T128-510q-12 22-5.5 45.5T150-428q14 8 30 8t30-8l119 69q-17 17-30.5 36.5T276-280h66q21-36 57-58t81-22q45 0 81 22t57 58h66q-24-62-78.5-101T480-420Zm0-60Z"
              ></path>
            </svg>
            <div>
              <div class="font-bold text-sm xs:text-base md:text-lg leading-tight mb-2">
                眼睛劇烈疼痛、畏光、頭痛和作嘔
              </div>
              <div
                class="inline-block bg-[#F8F5F0] text-[#3D3428] px-4 py-1 rounded-2xl text-sm font-medium"
              >
                懷疑：急性青光眼
              </div>
            </div>
          </div>
        </div>
        <div
          class="group bg-white border border-[#EDE8DF] rounded-3xl p-3 md:p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <div class="flex gap-4 items-center">
            <svg
              class="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="#1f1f1f"
            >
              <path
                d="M479-500Zm1 300q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-6 15-12.5 29T893-444l-63-59q-51-100-144.5-158.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q11 0 21.5-.5T523-283q-4 20-4 41t4 41q-11 1-21.5 1H480Zm0-120q-75 0-127.5-52.5T300-500q0-75 52.5-127.5T480-680q75 0 127.5 52.5T660-500q0 7-.5 13.5T658-473l-62 57q-19 19-34 40.5T537-330q-14 5-28 7.5t-29 2.5Zm76.5-103.5Q588-455 588-500t-31.5-76.5Q525-608 480-608t-76.5 31.5Q372-545 372-500t31.5 76.5Q435-392 480-392t76.5-31.5ZM760-80q-67 0-113.5-47T599-241q0-33 14-63t38-53l109-103 108 103q24 23 37.5 52.5T920-242q0 68-47 115T760-80Zm0-80q33 0 56.5-24t22.5-58q0-17-7.5-32T812-300l-52-50-53 50q-12 11-20 26.5t-7 32.5q0 34 23 57.5t57 23.5Zm0-95Z"
              ></path>
            </svg>
            <div>
              <div class="font-bold text-sm xs:text-base md:text-lg leading-tight">
                手術後出現眼睛不適
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Warning -->
    <section
      class="bg-[#FFF5F3] border border-[#E8786A]/20 rounded-3xl px-3 py-4 text-center mb-8 md:mb-12"
    >
      <p class="text-[#E8786A] font-bold text-lg tracking-wide">
        ⚠️ 如有以上情況，建議立即求診
      </p>
    </section>

    <!-- GPS Button -->
    <section>
      <button
        @click="handleGpsTracking"
        class="block w-full max-w-md mx-auto bg-[#16437E] text-white rounded-3xl p-3 mb-3 md:mb-5 shadow-xl hover:brightness-110 transition-all text-left"
      >
        <div class="flex justify-center items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 md:w-10 md:h-10"
            fill="white"
            viewBox="0 -960 960 960"
          >
            <path
              d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"
            />
          </svg>
          <span class="text-lg font-bold">使用我的位置，尋找附近診所</span>
        </div>
      </button>
    </section>

    <!-- Region Tabs -->
    <section class="mb-8">
      <div class="flex justify-center gap-3 flex-wrap mb-3">
        <button
          v-for="tab in ['all', 'hk', 'kln', 'nt']"
          :key="tab"
          @click="filterRegion(tab as any)"
          :class="[
            'px-4 py-2 rounded-full border font-medium transition-all',
            currentFilter === tab
              ? 'bg-[#16437E] text-white border-[#16437E]'
              : 'bg-white border-[#16437E] text-[#16437E] hover:bg-[#16437E] hover:text-white',
          ]"
        >
          {{
            tab === 'all'
              ? '全部'
              : tab === 'hk'
              ? '香港'
              : tab === 'kln'
              ? '九龍'
              : '新界'
          }}
        </button>
      </div>
      <p class="text-[#FFB300] text-sm lg:text-base text-center">
        （請留意：各診所預約情況會隨時變動，建議先致電診所查詢及預約）
      </p>
    </section>

    <!-- Clinic List -->
    <section class="space-y-6" id="clinic-list">
      <div
        v-for="(clinic, index) in displayedClinics"
        :key="clinic.id"
        class="bg-white border border-[#EDE8DF] rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
      >
        <!-- Nearest clinic highlight logic -->
        <div
          v-if="userCoords && index === 0 && currentFilter === 'all'"
          class="bg-[#16437E] text-white text-center py-3 font-bold text-lg"
        >
          最近診所 • {{ clinic.distance?.toFixed(1) }} km
        </div>

        <div class="p-4 md:p-6">
          <a
            :href="clinic.mapsLink"
            target="_blank"
            class="block text-[#16437E] hover:text-[#E8786A] font-bold text-lg md:text-xl mb-4 flex items-start gap-3"
          >
            <span>{{ clinic.fullAddress }}</span>
          </a>

          <div class="flex flex-col md:flex-row gap-6 md:items-center">
            <div class="flex-1 text-sm md:text-lg text-[#6B6158] md:space-y-1">
              <p>{{ clinic.hours }}</p>
              <p class="whitespace-pre-line">
                {{ clinic.hoursSat }}
              </p>
              <p>{{ clinic.hoursSun }}</p>
            </div>
            <div class="hidden md:block md:w-3/5">
              <div
                class="flex gap-2 overflow-x-auto pb-2 md:flex-nowrap md:overflow-visible"
              >
                <picture
                  v-for="(photo, pIndex) in clinic.photos"
                  :key="pIndex"
                  class="max-w-[40%] md:max-w-none md:flex-1 shrink-0"
                >
                  <source :srcset="photo.avif" type="image/avif" />
                  <img
                    :src="photo.fallback"
                    :alt="photo.alt"
                    loading="lazy"
                    class="w-full h-32 md:h-40 object-cover rounded-xl"
                  />
                </picture>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between mt-6">
            <a
              :href="clinic.mapsLink"
              target="_blank"
              class="inline-flex items-center gap-2 bg-white border px-5 py-2.5 rounded-2xl hover:bg-[#F8F5F0] transition-colors"
            >
              <img
                src="https://statichk.cmermedical.com/newopd/icon/icon-google-map.svg"
                alt=""
                loading="lazy"
                class="w-5 h-7"
              />
              <span class="font-medium">Google 地圖</span>
            </a>
            <span
              v-if="clinic.distance"
              class="text-2xl font-black text-[#E8786A]"
              >{{ clinic.distance.toFixed(1)
              }}<span class="text-sm align-super ml-1">km</span></span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Buttons -->
    <section class="grid grid-cols-2 gap-4 max-w-md mx-auto my-12">
      <a
        href="https://api.whatsapp.com/send?phone=85293451508&text=你好，我需要緊急醫療服務，盡快即時支援"
        target="_blank"
        class="flex items-center justify-center gap-3 py-3 border-2 border-primary text-primary rounded-3xl font-bold hover:bg-[#F8F5F0]"
      >
        <svg
          t="1781746358242"
          class="w-5"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M511.872427 0h0.256C794.45376 0 1024.000427 229.674667 1024.000427 512s-229.589333 512-511.872 512c-104.106667 0-200.704-31.018667-281.6-84.565333L33.707093 1002.325333l63.786667-190.250666A508.245333 508.245333 0 0 1 0.000427 512C0.000427 229.674667 229.58976 0 511.872427 0zM365.39776 281.429333c-9.770667-23.338667-17.194667-24.234667-32-24.832A285.525333 285.525333 0 0 0 316.50176 256c-19.285333 0-39.424 5.632-51.626667 18.048C250.155093 289.109333 213.33376 324.266667 213.33376 396.501333c0 72.149333 52.778667 141.952 59.861333 151.722667 7.424 9.728 102.912 160 251.093334 221.226667 115.925333 47.914667 150.314667 43.477333 176.725333 37.845333 38.528-8.277333 86.826667-36.693333 98.986667-70.954667 12.16-34.346667 12.16-63.616 8.618666-69.845333-3.584-6.186667-13.354667-9.728-28.16-17.152-14.848-7.381333-86.869333-42.88-100.522666-47.616-13.354667-4.992-26.069333-3.242667-36.138667 10.965333-14.250667 19.797333-28.16 39.936-39.466667 52.053334-8.874667 9.472-23.424 10.666667-35.541333 5.632-16.298667-6.826667-61.952-22.784-118.314667-72.789334-43.562667-38.741333-73.216-86.954667-81.792-101.418666-8.618667-14.805333-0.896-23.381333 5.930667-31.36 7.381333-9.173333 14.506667-15.658667 21.930667-24.234667 7.424-8.576 11.52-13.013333 16.298666-23.082667 5.034667-9.770667 1.493333-19.84-2.090666-27.221333-3.541333-7.381333-33.194667-79.573333-45.354667-108.8z"
            fill="#25D366"
            p-id="4826"
          ></path>
        </svg>
        <span>緊急線上查詢</span>
      </a>
      <a
        href="tel:+85239562026"
        class="flex items-center justify-center gap-3 py-3 bg-[#E8786A] text-white rounded-3xl font-bold shadow-lg hover:brightness-110"
      >
        <svg
          class="w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M13.003 9.904a1.106 1.106 0 0 0-1.561 0l-.78.78c-.442.443-1.873 0-3.124-1.248-1.252-1.25-1.69-2.686-1.248-3.129l.78-.78a1.106 1.106 0 0 0 0-1.56L3.634.537a1.106 1.106 0 0 0-1.56 0l-.781.78A3.77 3.77 0 0 0 .248 3.573 7 7 0 0 0 .544 6.41a15.06 15.06 0 0 0 3.872 6.15 15.1 15.1 0 0 0 6.15 3.873 7.7 7.7 0 0 0 2.157.338q.345 0 .687-.042a3.77 3.77 0 0 0 2.255-1.045l.781-.78a1.106 1.106 0 0 0 0-1.561zm2.812 4.376-.781.78c-.881.882-2.382 1.065-4.226.527a14.2 14.2 0 0 1-5.77-3.65 14.2 14.2 0 0 1-3.647-5.776c-.542-1.844-.355-3.345.526-4.226l.78-.78a.22.22 0 0 1 .313 0l3.43 3.429a.22.22 0 0 1 0 .312l-.78.78a1.95 1.95 0 0 0-.26 2.069 6.2 6.2 0 0 0 1.508 2.306 6.2 6.2 0 0 0 2.31 1.51c.3.105.617.162.936.167a1.55 1.55 0 0 0 1.13-.426l.781-.78a.22.22 0 0 1 .313 0l3.43 3.43a.22.22 0 0 1 0 .311z"
            fill="#fff"
            stroke="#fff"
            stroke-width=".422"
          />
          <path
            d="M10.56 16.428A16.42 16.42 0 0 1 .542 6.41a7 7 0 0 1-.295-2.84 3.77 3.77 0 0 1 1.044-2.257l.782-.78a1.105 1.105 0 0 1 1.561 0l3.436 3.43a1.107 1.107 0 0 1 0 1.562l-.78.78c-.443.442 0 1.872 1.25 3.123s2.681 1.691 3.124 1.25l.781-.78a1.105 1.105 0 0 1 1.562 0l3.435 3.43a1.106 1.106 0 0 1 0 1.561l-.781.782a3.76 3.76 0 0 1-2.256 1.044 6 6 0 0 1-.687.043 7.7 7.7 0 0 1-2.159-.332ZM2.697 1.154l-.782.78c-.88.884-1.065 2.386-.526 4.227a15.55 15.55 0 0 0 9.419 9.42c1.844.541 3.345.354 4.226-.528l.781-.782a.2.2 0 0 0 .065-.155.22.22 0 0 0-.066-.156l-3.43-3.436a.224.224 0 0 0-.313 0l-.78.782a1.55 1.55 0 0 1-1.131.426 3 3 0 0 1-.937-.168A6.73 6.73 0 0 1 5.41 7.752a1.95 1.95 0 0 1 .258-2.069l.781-.78a.22.22 0 0 0 0-.314L3.013 1.16a.22.22 0 0 0-.154-.065.22.22 0 0 0-.161.058z"
            fill="#fff"
            stroke="#fff"
            stroke-width=".422"
          />
        </svg>
        <span>急症支援熱線</span>
      </a>
    </section>
  </main>

  <!-- GPS Modal -->
  <Teleport to="body">
    <div
      v-if="showGpsModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-90 p-4"
      @click.self="closeModal"
    >
      <div class="bg-white rounded-3xl p-8 max-w-sm w-full text-center">
        <div v-html="modalMessage" class="mb-8"></div>
        <button
          @click="closeModal"
          class="w-full bg-[#16437E] text-white py-3 rounded-2xl font-bold text-lg"
        >
          確定
        </button>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
:deep(.backtop-mb-enter) {
  display: none;
}
.urgent-intro {
  font-size: 12px;
  line-height: 1.5;
  @media screen and (min-width: 360px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
}
.urgent-button {
  text-shadow: 0 0 0.5px #fff, 0 0 1px #fff, 0 0 8px #fff;
  box-shadow: 0 0 2px #e63a2eb8, 0 0 6px #e63a2eb8, 0 0 12px #e63a2eb8,
    0 0 18px #e63a2eb8;
}

/* Custom animations & fine-tuning */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-pulseSoft {
  animation: pulseSoft 2.5s ease-in-out infinite;
}
@keyframes pulseSoft {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.04);
  }
}

section {
  animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
</style>

<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})

// SEO-friendly page title/description (set in layout or useHead)
useHead({
  title: '眼科急症服務 | 希瑪眼科中心 C-MER Eye Center',
  meta: [
    {
      name: 'description',
      content:
        '香港希瑪眼科中心提供眼科急症服務，包括視網膜脫落、急性青光眼等緊急情況。週末及公眾假期支援中環、旺角等診所。立即致電 +852 3956 2026',
    },
    {
      name: 'keywords',
      content:
        '眼科急症, 視網膜脫落, 急性青光眼, 希瑪眼科, 香港眼科, 緊急眼科服務',
    },
    { property: 'og:title', content: '眼科急症服務 | 希瑪眼科中心' },
    {
      property: 'og:description',
      content: '專業眼科急症支援，快速診斷與治療。',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'zh_HK' },
  ],
})

const { t } = useLang()
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
    hoursSun: '（星期日及公眾假期休息）',
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
    hoursSat: '（星期六、星期日及公眾假期休息）',
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
    hoursSun: '（星期日及公眾假期休息）',
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
    hoursSun: '（星期日及公眾假期休息）',
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
    hoursSun: '（星期日及公眾假期休息）',
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
    address: '沙田正街11-17號偉華中心2樓5A及1C—1E號鋪',
    fullAddress: '沙田正街11-17號偉華中心2樓5A及1C—1E號鋪',
    hours: '星期一至五 09:30–13:30 / 14:30–19:00',
    hoursSat: '星期六 09:30–13:30',
    hoursSun: '（星期日及公眾假期休息）',
    phone: '+852 3956 2026',
    lat: 22.3818,
    lng: 114.1884,
    mapsLink: 'https://goo.gl/maps/7zAGzUVwRMzQ78av7',
    photos: [
      {
        webp: 'https://statichk.cmermedical.com/newopd/about/contact/Shatin-01.webp',
        fallback:
          'https://statichk.cmermedical.com/newopd/about/contact/Shatin-01.jpg',
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
    hoursSun: '（星期日及公眾假期休息）',
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
    hoursSun: '（星期日及公眾假期休息）',
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
    hoursSun: '（星期日及公眾假期休息）',
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
const gpsResolved = ref(false)

// Computed filtered and sorted clinics
const displayedClinics = computed(() => {
  let list = [...clinicsData] as Clinic[]

  if (userCoords.value) {
    // 计算距离并排序
    list = list
      .map(clinic => ({
        ...clinic,
        distance: getDistance(
          userCoords.value!.lat,
          userCoords.value!.lng,
          clinic.lat,
          clinic.lng
        )
      }))
      .sort((a, b) => (a.distance || 0) - (b.distance || 0))
  }

  if (currentFilter.value !== 'all') {
    list = list.filter(c => c.region === currentFilter.value)
  }

  return list
})

// Haversine distance
function getDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180)
}

// GPS Handling
async function handleGpsTracking() {
  if (!navigator.geolocation) {
    showModal('您的瀏覽器不支援定位功能')
    return
  }

  if (gpsDenied.value) {
    showDeniedHelp()
    return
  }

  gpsResolved.value = false

  try {
    const position = await new Promise<GeolocationPosition>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 8000,
          maximumAge: 60000,
        })
      }
    )

    userCoords.value = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    }
  } catch (error: any) {
    if (error.code === error.PERMISSION_DENIED) {
      gpsDenied.value = true
      showDeniedHelp()
    } else {
      showModal('無法取得您的位置，請稍後再試')
    }
  }
}

function filterRegion(region: 'all' | 'hk' | 'kln' | 'nt') {
  currentFilter.value = region
}

// Modal
const showGpsModal = ref(false)
const modalMessage = ref('')

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
      <div class="text-lg font-bold text-[#1a1a2e] mb-3">需要開啟位置權限</div>
      <div class="text-sm text-[#6B6158]">請在裝置設定中開啟定位權限，然後重新載入頁面。</div>
    </div>
  `
  showGpsModal.value = true
}

// Photo grid helper (can be a component)
const photoGrid = (photos: any[]) => {
  if (!photos?.length) return ''
  return photos
    .map(
      (p) => `
    <picture class="max-w-[40%] md:max-w-none md:flex-1">
      <source srcset="${p.avif}" type="image/avif">
      <img src="${p.fallback}" alt="${p.alt}" loading="lazy" class="h-full w-full object-cover rounded">
    </picture>
  `
    )
    .join('')
}
</script>

<template>
  <!-- Hero Section -->
  <section
    class="sticky top-[30px] md:top-0 z-45 bg-[#FDFBF7] md:relative md:bg-transparent pt-10 pb-2 text-center"
  >
    <div class="max-w-5xl mx-auto px-4 md:px-5">
      <h1
        class="font-serif text-3xl md:text-5xl font-bold text-[#16437E] tracking-wide leading-tight mb-2"
      >
        Urgent Care Assistance
      </h1>
      <p
        class="font-serif text-3xl md:text-5xl font-bold text-[#16437E] tracking-wide leading-tight mb-4"
      >
        緊急醫療服務 盡快即時支援
      </p>

      <div
        class="flex flex-col md:flex-row items-center justify-center gap-6 text-left max-w-md mx-auto"
      >
        <p
          class="font-serif text-sm md:text-xl font-bold text-[#E63A2E] leading-tight"
        >
          特設急症應診:<br />週末｜中環・旺角・沙田<br />週末及公眾假期｜中環・旺角
        </p>

        <a
          href="tel:+85239562026"
          class="urgent-button inline-flex flex-col items-center bg-[#E63A2E] text-white px-6 py-3 rounded-full text-lg font-bold hover:brightness-110 transition-all shadow-lg"
        >
          <span class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 -960 960 960"
            >
              <path
                d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"
              />
            </svg>
            急症熱線
          </span>
          <span class="text-xl">+852 3956 2026</span>
        </a>
      </div>
    </div>
  </section>

  <main class="max-w-5xl mx-auto px-4 md:px-5 pb-20">
    <!-- Symptoms Section -->
    <section>
      <div
        class="flex items-center gap-4 font-bold text-[#16437E] tracking-widest text-3xl my-12"
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
          class="group bg-white border border-[#EDE8DF] rounded-3xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <div class="flex gap-4">
            <div class="text-3xl flex-shrink-0">👁️</div>
            <div>
              <div class="font-bold text-xl leading-tight mb-2">
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

        <!-- Add remaining 3 symptom cards similarly with optimized Tailwind classes -->
      </div>
    </section>

    <!-- Warning -->
    <section
      class="bg-[#FFF5F3] border border-[#E8786A]/20 rounded-3xl px-8 py-6 text-center mb-12"
    >
      <p class="text-[#E8786A] font-bold text-xl tracking-wide">
        ⚠️ 如有以上情況，建議立即求診
      </p>
    </section>

    <!-- GPS Button -->
    <section>
      <button
        @click="handleGpsTracking"
        class="block w-full max-w-md mx-auto bg-[#16437E] text-white rounded-3xl p-8 mb-8 shadow-xl hover:brightness-110 transition-all text-left"
      >
        <div class="flex items-center gap-4 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10"
            fill="white"
            viewBox="0 -960 960 960"
          >
            <path
              d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"
            />
          </svg>
          <span class="text-2xl font-bold">使用我的位置，尋找附近診所</span>
        </div>
        <p class="text-[#FFB300] text-sm">
          （請留意：各診所預約情況會隨時變動，建議先致電診所查詢及預約）
        </p>
      </button>
    </section>

    <!-- Region Tabs -->
    <section class="flex justify-center gap-3 flex-wrap mb-8">
      <button
        v-for="tab in ['all', 'hk', 'kln', 'nt']"
        :key="tab"
        @click="filterRegion(tab as any)"
        :class="[
          'px-6 py-3 rounded-full border font-medium transition-all',
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

        <div class="p-6">
          <a
            :href="clinic.mapsLink"
            target="_blank"
            class="block text-[#16437E] hover:text-[#E8786A] font-bold text-xl mb-4 flex items-start gap-3"
          >
            <span class="mt-1">📍</span>
            <span>{{ clinic.fullAddress }}</span>
          </a>

          <div class="flex flex-col md:flex-row gap-6">
            <div class="flex-1">
              <p class="text-sm text-[#6B6158]">{{ clinic.hours }}</p>
              <p class="text-sm text-[#6B6158] whitespace-pre-line">
                {{ clinic.hoursSat }}
              </p>
              <p class="text-sm text-[#6B6158]">{{ clinic.hoursSun }}</p>
            </div>

            <div class="md:w-2/5">
              <!-- Photo grid -->
              <div
                class="flex gap-2 overflow-x-auto pb-2 md:flex-nowrap md:overflow-visible"
                v-html="photoGrid(clinic.photos)"
              ></div>
            </div>
          </div>

          <div class="flex items-center justify-between mt-6">
            <a
              :href="clinic.mapsLink"
              target="_blank"
              class="inline-flex items-center gap-2 bg-white border px-5 py-2.5 rounded-2xl hover:bg-[#F8F5F0] transition-colors"
            >
              <span>🗺️</span>
              <span class="font-semibold">Google 地圖</span>
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
        class="flex items-center justify-center gap-3 py-5 border-2 border-[#16437E] rounded-3xl font-bold hover:bg-[#F8F5F0]"
      >
        💬 緊急線上查詢
      </a>
      <a
        href="tel:+85239562026"
        class="flex items-center justify-center gap-3 py-5 bg-[#E8786A] text-white rounded-3xl font-bold shadow-lg hover:brightness-110"
      >
        📞 急症支援熱線
      </a>
    </section>
  </main>

  <!-- GPS Modal -->
  <Teleport to="body">
    <div
      v-if="showGpsModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-[2000] p-4"
      @click.self="closeModal"
    >
      <div class="bg-white rounded-3xl p-8 max-w-sm w-full text-center">
        <div v-html="modalMessage" class="mb-8"></div>
        <button
          @click="closeModal"
          class="w-full bg-[#16437E] text-white py-4 rounded-2xl font-bold text-lg"
        >
          確定
        </button>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.urgent-button {
  text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 8px #fff;
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

section {
  animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
</style>

<!--
 * @Author: 谭洁莹
 * @Date: 2026-01-12 18:00:41
 * @LastEditTime: 2026-02-13 17:36:43
 * @FilePath: /pages/csp-doctor/index.vue
 * @Description: 耀眼行动医生列表页
-->
<script lang="ts" setup>
import '~/assets/plugins/iconfont/iconfont.css'
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')
useHead(() => ({
  title: t('tdk.csp.title_doctor'),
  meta: [
    {
      name: 'description',
      content: t('tdk.csp.desc'),
    },
    {
      name: 'keywords',
      content: t('tdk.csp.key'),
    },
  ],
}))

type TabKey = 'hk' | 'kl' | 'nt'
const tabs = [
  { id: 'hk' as const },
  { id: 'kl' as const },
  { id: 'nt' as const },
] as const
const activeTab = ref<TabKey>(tabs[0].id)
const changeTab = (id: TabKey) => {
  activeTab.value = id
}
interface Doctor {
  id: number
  name: string
  enName: string
  avatar: string
  area: TabKey
  regions: string
  clinic: Array<string>
}
const allDoctors = ref<Doctor[]>([
  {
    id: 1,
    name: '陳偉樂',
    enName: 'Dr. Leo Chan',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-017-cover.webp',
    area: 'hk',
    regions: '香港',
    clinic: [
      '中環畢打街1-3號中建大廈1515室',
      '銅鑼灣百德新街2-20號恒隆中心1614-15室',
    ],
  },
  {
    id: 2,
    name: '陳偉樂',
    enName: 'Dr. Leo Chan',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-017-cover.webp',
    area: 'kl',
    regions: '九龍',
    clinic: [
      '旺角彌敦道625及639號雅蘭中心一期1208室',
      '觀塘開源道79號鱷魚恤中心16樓1601室',
    ],
  },
  {
    id: 3,
    name: '陳偉樂',
    enName: 'Dr. Leo Chan',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-017-cover.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A及1C—1E號鋪',
      '荃灣沙咀道255號思源樓地下',
      '將軍澳運亨路1號新都城中心一期地下55-56號鋪',
    ],
  },
  {
    id: 4,
    name: '張瀞之',
    enName: 'Dr. Janice Cheung',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-013-cover.webp',
    area: 'hk',
    regions: '香港',
    clinic: ['中環畢打街1-3號中建大廈1515室'],
  },
  {
    id: 5,
    name: '張瀞之',
    enName: 'Dr. Janice Cheung',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-013-cover.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室及1725B室'],
  },
  {
    id: 6,
    name: '張瀞之',
    enName: 'Dr. Janice Cheung',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-013-cover.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A及1C—1E號鋪',
      '元朗青山公路45及47號誠信商業大廈地鋪',
      '荃灣沙咀道255號思源樓地下',
    ],
  },
  {
    id: 7,
    name: '熊健慧',
    enName: 'Dr. Jennifer Hung',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-022-cover.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室'],
  },
  {
    id: 8,
    name: '熊健慧',
    enName: 'Dr. Jennifer Hung',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-022-cover.webp',
    area: 'nt',
    regions: '新界',
    clinic: ['沙田正街11-17號偉華中心2樓1C—1E號鋪'],
  },
  {
    id: 9,
    name: '高德全',
    enName: 'Dr. Simon Ko',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-023-cover.webp',
    area: 'hk',
    regions: '香港',
    clinic: ['中環畢打街1-3號中建大廈1515室'],
  },
  {
    id: 10,
    name: '高德全',
    enName: 'Dr. Simon Ko',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-023-cover.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室'],
  },
  {
    id: 11,
    name: '黎浩樺',
    enName: 'Dr. Kenny Lai',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-010-cover.webp',
    area: 'hk',
    regions: '香港',
    clinic: ['中環畢打街1-3號中建大廈1515室'],
  },
  {
    id: 12,
    name: '黎浩樺',
    enName: 'Dr. Kenny Lai',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-010-cover.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室及1725B室'],
  },
  {
    id: 13,
    name: '黎浩樺',
    enName: 'Dr. Kenny Lai',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-010-cover.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A及1C—1E號鋪',
      '元朗青山公路45及47號誠信商業大廈地鋪',
    ],
  },
  {
    id: 14,
    name: '林己明',
    enName: 'Dr. Jasmine Lam',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-015-cover.webp',
    area: 'hk',
    regions: '香港',
    clinic: ['中環畢打街1-3號中建大廈1515室'],
  },
  {
    id: 15,
    name: '林己明',
    enName: 'Dr. Jasmine Lam',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-015-cover.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室及1725B室'],
  },
  {
    id: 16,
    name: '林己明',
    enName: 'Dr. Jasmine Lam',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-015-cover.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A及1C—1E號鋪',
      '元朗青山公路45及47號誠信商業大廈地鋪',
      '荃灣沙咀道255號思源樓地下',
    ],
  },
  {
    id: 17,
    name: '林寶生',
    enName: 'Dr. Carol Lam',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-014-cover.webp',
    area: 'hk',
    regions: '香港',
    clinic: ['中環畢打街1-3號中建大廈1515室'],
  },
  {
    id: 18,
    name: '林寶生',
    enName: 'Dr. Carol Lam',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-014-cover.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室及1725B室'],
  },
  {
    id: 19,
    name: '林寶生',
    enName: 'Dr. Carol Lam',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-014-cover.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A及1C—1E號鋪',
      '元朗青山公路45及47號誠信商業大廈地鋪',
      '荃灣沙咀道255號思源樓地下',
    ],
  },
  {
    id: 20,
    name: '林峯',
    enName: 'Dr. Robert Lam',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-025-cover.webp',
    area: 'hk',
    regions: '香港',
    clinic: [
      '中環畢打街1-3號中建大廈1515室',
      '銅鑼灣百德新街2-20號恒隆中心1614-15室',
    ],
  },
  {
    id: 21,
    name: '林峯',
    enName: 'Dr. Robert Lam',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-025-cover.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室'],
  },
  {
    id: 22,
    name: '李煒業',
    enName: 'Dr. Jacky Lee',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-005-cover.webp',
    area: 'hk',
    regions: '香港',
    clinic: ['中環畢打街1-3號中建大廈1515室'],
  },
  {
    id: 23,
    name: '李煒業',
    enName: 'Dr. Jacky Lee',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-005-cover.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室'],
  },
  {
    id: 24,
    name: '李煒業',
    enName: 'Dr. Jacky Lee',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-005-cover.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A及1C—1E號鋪',
      '元朗青山公路45及47號誠信商業大廈地鋪',
    ],
  },
  {
    id: 25,
    name: '李佑榮',
    enName: 'Dr. Vincent Lee',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-001-cover.webp',
    area: 'hk',
    regions: '香港',
    clinic: [
      '中環畢打街1-3號中建大廈1515室',
      '銅鑼灣百德新街2-20號恒隆中心1614-15室',
    ],
  },
  {
    id: 26,
    name: '李佑榮',
    enName: 'Dr. Vincent Lee',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-001-cover.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室'],
  },
  {
    id: 27,
    name: '梁苑珊',
    enName: 'Dr. Gloria Leung',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-018-cover.webp',
    area: 'hk',
    regions: '香港',
    clinic: [
      '中環畢打街1-3號中建大廈1515室',
      '銅鑼灣百德新街2-20號恒隆中心1614-15室',
    ],
  },
  {
    id: 28,
    name: '梁苑珊',
    enName: 'Dr. Gloria Leung',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-018-cover.webp',
    area: 'kl',
    regions: '九龍',
    clinic: [
      '旺角彌敦道625及639號雅蘭中心一期1208室及1725B室',
      '觀塘開源道79號鱷魚恤中心16樓1601室',
    ],
  },
  {
    id: 29,
    name: '梁苑珊',
    enName: 'Dr. Gloria Leung',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-018-cover.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A及1C—1E號鋪',
      '元朗青山公路45及47號誠信商業大廈地鋪',
      '荃灣沙咀道255號思源樓地下',
    ],
  },
  {
    id: 30,
    name: '李德倫',
    enName: 'Dr. Stephen Li',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-011-cover.webp',
    area: 'hk',
    regions: '香港',
    clinic: ['中環畢打街1-3號中建大廈1515室'],
  },
  {
    id: 31,
    name: '李德倫',
    enName: 'Dr. Stephen Li',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-011-cover.webp',
    area: 'kl',
    regions: '九龍',
    clinic: [
      '旺角彌敦道625及639號雅蘭中心一期1208室及1725B室',
      '觀塘開源道79號鱷魚恤中心16樓1601室',
    ],
  },
  {
    id: 32,
    name: '李德倫',
    enName: 'Dr. Stephen Li',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-011-cover.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A及1C—1E號鋪',
      '元朗青山公路45及47號誠信商業大廈地鋪',
      '將軍澳運亨路1號新都城中心一期地下55-56號鋪',
    ],
  },
  {
    id: 33,
    name: '吳兆駿',
    enName: 'Dr. Danny Ng',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-024-cover.webp',
    area: 'hk',
    regions: '香港',
    clinic: [
      '中環畢打街1-3號中建大廈1515室',
      '銅鑼灣百德新街2-20號恒隆中心1614-15室',
    ],
  },
  {
    id: 34,
    name: '吳兆駿',
    enName: 'Dr. Danny Ng',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-024-cover.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室'],
  },
  {
    id: 35,
    name: '吳兆駿',
    enName: 'Dr. Danny Ng',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-024-cover.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '元朗青山公路45及47號誠信商業大廈地鋪',
      '將軍澳運亨路1號新都城中心一期地下55-56號鋪',
    ],
  },
  {
    id: 36,
    name: '尹浩柟',
    enName: 'Dr. Kelvin Wan',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-020-cover.webp',
    area: 'hk',
    regions: '香港',
    clinic: [
      '中環畢打街1-3號中建大廈1515室',
      '銅鑼灣百德新街2-20號恒隆中心1614-15室',
    ],
  },
  {
    id: 37,
    name: '尹浩柟',
    enName: 'Dr. Kelvin Wan',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-020-cover.webp',
    area: 'kl',
    regions: '九龍',
    clinic: [
      '旺角彌敦道625及639號雅蘭中心一期1208室及1725B室',
      '觀塘開源道79號鱷魚恤中心16樓1601室',
    ],
  },
  {
    id: 38,
    name: '尹浩柟',
    enName: 'Dr. Kelvin Wan',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-020-cover.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A及1C—1E號鋪',
      '元朗青山公路45及47號誠信商業大廈地鋪',
      '荃灣沙咀道255號思源樓地下',
      '將軍澳運亨路1號新都城中心一期地下55-56號鋪',
    ],
  },
  {
    id: 39,
    name: '黃俊華',
    enName: 'Dr. Alex Wong',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-003-cover.webp',
    area: 'hk',
    regions: '香港',
    clinic: ['中環畢打街1-3號中建大廈1515室'],
  },
  {
    id: 40,
    name: '黃俊華',
    enName: 'Dr. Alex Wong',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-003-cover.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室'],
  },
  {
    id: 41,
    name: '黃俊華',
    enName: 'Dr. Alex Wong',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-003-cover.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A號鋪',
      '元朗青山公路45及47號誠信商業大廈地鋪',
    ],
  },
  {
    id: 42,
    name: '邱俊源',
    enName: 'Dr. Jackey Yau',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-006-cover.webp',
    area: 'hk',
    regions: '香港',
    clinic: [
      '中環畢打街1-3號中建大廈1515室',
      '銅鑼灣百德新街2-20號恒隆中心1614-15室',
    ],
  },
  {
    id: 43,
    name: '邱俊源',
    enName: 'Dr. Jackey Yau',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-006-cover.webp',
    area: 'kl',
    regions: '九龍',
    clinic: [
      '旺角彌敦道625及639號雅蘭中心一期1208室',
      '觀塘開源道79號鱷魚恤中心16樓1601室',
    ],
  },
  {
    id: 44,
    name: '邱俊源',
    enName: 'Dr. Jackey Yau',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-006-cover.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A號鋪',
      '元朗青山公路45及47號誠信商業大廈地鋪',
      '荃灣沙咀道255號思源樓地下',
    ],
  },
])
const searchKeyword = ref('')
const itemsPerPage = 10
const currentPage = ref<number>(1)
watch([activeTab, searchKeyword], () => {
  currentPage.value = 1
})
// 過濾後的完整列表（搜尋 + 地區）
const displayedDoctors = computed(() => {
  return allDoctors.value.filter((doctor) => {
    // 搜尋名稱
    if (searchKeyword.value.trim()) {
      const kw = searchKeyword.value.trim().toLowerCase()
      if (!doctor.name.toLowerCase().includes(kw)) return false
    }
    // 地區篩選
    return doctor.area === activeTab.value
  })
})
const paginatedDoctors = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return displayedDoctors.value.slice(start, start + itemsPerPage)
})
const totalPages = computed(() =>
  Math.ceil(displayedDoctors.value.length / itemsPerPage)
)
watch(totalPages, (newTotal) => {
  if (currentPage.value > newTotal && newTotal > 0) {
    currentPage.value = newTotal
  }
})
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
const setPage = (page: number) => {
  if (page < 1) page = 1
  if (page > totalPages.value) page = totalPages.value

  currentPage.value = page
  scrollToTop()
}
const navItems = [
  { id: 'intro', path: '/csp-programme', label: 'csp.nav.intro' },
  { id: 'doctor', path: '/csp-doctor', label: 'csp.nav.doctor' },
  { id: 'question', path: '/csp-question', label: 'csp.nav.question' },
]
const doctorFixed = ref<HTMLElement | null>(null)
const PC_MIN_WIDTH = 1024
let lastScroll = 0
let peakScroll = 0
let scrollListener: (() => void) | null = null

const threshold = 300 // 向上滾多少 px 才顯示
const hideStartHeight = 312 // 超過這個高度才允許隱藏

const debounce = (fn: Function, delay = 300) => {
  let timer: ReturnType<typeof setTimeout> | null = null
  return (...args: any[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

const setupMobileNavHide = async () => {
  await nextTick() // 確保 DOM 已渲染

  const el = doctorFixed.value
  if (!el) return

  const isMobile = window.innerWidth < PC_MIN_WIDTH

  // 非移動端 → 強制顯示並移除監聽
  if (!isMobile) {
    if (scrollListener) {
      window.removeEventListener('scroll', scrollListener)
      scrollListener = null
    }
    el.classList.remove('transform-top')
    return
  }

  // 移動端：如果已綁定，直接返回（避免重複）
  if (scrollListener) return

  lastScroll = window.scrollY
  peakScroll = window.scrollY

  scrollListener = () => {
    const current = window.scrollY

    // 更新峰值（向下滾時持續刷新）
    if (current > peakScroll) {
      peakScroll = current
    }
    if (current <= hideStartHeight) {
      // 1. 回到近頂部區域 → 強制顯示 + 重置峰值（優先級最高）
      el.classList.remove('transform-top')
      peakScroll = current
    } else if (current > lastScroll) {
      // 2. 向下滾 → 隱藏
      el.classList.add('transform-top')
    } else if (current < peakScroll - threshold) {
      // 3. 向上滾且距離足夠 → 顯示 + 重置峰值
      el.classList.remove('transform-top')
      peakScroll = current
    }

    lastScroll = current
  }

  window.addEventListener('scroll', scrollListener)
  scrollListener() // 初始立即執行一次
}

// 初始掛載 + resize 處理
onMounted(() => {
  setupMobileNavHide()

  window.addEventListener(
    'resize',
    debounce(() => {
      setupMobileNavHide()
    }, 300)
  )
})

onUnmounted(() => {
  if (scrollListener) {
    window.removeEventListener('scroll', scrollListener)
  }
  window.removeEventListener(
    'resize',
    debounce(() => {})
  )
})
</script>
<template>
  <main class="doctor">
    <CspBanner active="doctor" />
    <section ref="doctorFixed" class="doctor-wrapper lg:static z-10">
      <div
        class="doctor-nav bg-[#ECF3FD] text-[#4B4B4B] flex justify-center gap-6 lg:gap-[9.792vw] py-4 lg:px-8 text-lg lg:text-3xl font-bold lg:static z-10"
      >
        <nuxt-link
          v-for="item in navItems"
          :key="item.id"
          :to="item.path"
          :class="
            item.id === 'doctor'
              ? '!text-[#2958A3] relative before:absolute before:w-full before:h-1 before:-bottom-1 before:bg-[#2958A3]'
              : ''
          "
        >
          {{ t(item.label) }}
        </nuxt-link>
      </div>
      <div class="container max-w-5xl mx-auto px-3 xl:px-0">
        <div
          class="flex flex-col lg:flex-row lg:justify-between pb-2 lg:pb-0 mb-2 lg:mb-18 gap-3 sticky top-[calc(12.6vw+72.5px)] lg:static bg-white pt-3 lg:pt-22"
        >
          <div
            class="search order-1 lg:order-2 border-2 lg:border-3 border-[#C7C5C5] rounded-2xl lg:rounded-3xl flex items-center gap-2 lg:gap-3 py-1 pl-3 pr-2 lg:py-2 lg:px-6"
          >
            <i class="iconfont icon-csp-search !text-2xl lg:!text-4xl"></i>
            <input
              v-model="searchKeyword"
              type="search"
              :placeholder="t('csp.doctor.search')"
              class="size-full focus:outline-[#2958A3] p-2 rounded-2xl lg:rounded-3xl text-xl lg:text-3xl"
            />
          </div>
          <div
            class="doctor-tabs text-xl lg:text-2xl lg:leading-[56px] order-2 lg:order-1 text-[#1B407A] text-center flex items-center justify-between lg:justify-start lg:gap-[3vw]"
          >
            <div
              v-for="tab in tabs"
              :key="tab.id"
              class="tab w-3/10 lg:w-[132px] rounded-md lg:rounded-lg"
              :class="{ active: activeTab === tab.id }"
              @click="changeTab(tab.id)"
            >
              {{ t(`csp.doctor.tab_${tab.id}`) }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <CspDoctor :list="paginatedDoctors" />
      <div
        v-if="displayedDoctors.length > 0"
        class="pagination flex items-center justify-center gap-4 mt-10 mb-20"
      >
        <div
          v-if="currentPage > 1"
          class="page prev cursor-pointer"
          @click="setPage(currentPage - 1)"
        >
          <i class="iconfont icon-arrow-left !text-xs lg:!text-base"></i>
        </div>
        <div
          v-if="currentPage > 1"
          class="page cursor-pointer"
          @click="setPage(currentPage - 1)"
        >
          {{ currentPage - 1 }}
        </div>
        <div class="page active">
          {{ currentPage }}
        </div>
        <span v-if="currentPage + 1 < totalPages">...</span>
        <div
          v-if="currentPage < totalPages"
          class="page cursor-pointer"
          @click="setPage(totalPages)"
        >
          {{ totalPages }}
        </div>
        <div
          v-if="currentPage < totalPages"
          class="page next cursor-pointer"
          @click="setPage(currentPage + 1)"
        >
          <i class="iconfont icon-arrow-right !text-xs lg:!text-base"></i>
        </div>
      </div>
    </section>
    <CspButton clinic />
    <PageFooterMenu />
  </main>
</template>
<style lang="scss" scoped>
.transform-top {
  transform: translateY(-300px);
  transition: transform 0.3s ease-in-out;
}
.doctor {
  .doctor-wrapper,
  .doctor-nav {
    position: sticky;
    top: 74px;
  }
  .tab {
    border: 1px solid #1b407a;
    padding: 8px 0;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover,
    &.active {
      background-color: #1b407a;
      color: white;
    }
  }
}
.pagination {
  .page {
    border: 0.6px solid #c7c5c5;
    background-color: #fff;
    width: 36px;
    height: 36px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.active {
      background-color: #e3eaf4;
      font-weight: bold;
    }
  }
}
@media screen and (min-width: 769px) {
  .doctor {
    .doctor-wrapper,
    .doctor-nav {
      top: 0;
    }
  }
}
@media screen and (min-width: 1024px) {
  .pagination {
    .page {
      border-width: 1px;
      width: 60px;
      height: 60px;
      border-radius: 12px;
    }
  }
}
</style>

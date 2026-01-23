<!--
 * @Author: 谭洁莹
 * @Date: 2026-01-12 18:00:41
 * @LastEditTime: 2026-01-23 19:00:32
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
  meta() {
    return [
      {
        hid: 'description',
        name: 'description',
        content: t('tdk.csp.desc'),
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: t('tdk.csp.key'),
      },
    ]
  },
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
      'https://statichk.cmermedical.com/newopd/doctor/doctor-017-full.webp',
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
      'https://statichk.cmermedical.com/newopd/doctor/doctor-017-full.webp',
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
      'https://statichk.cmermedical.com/newopd/doctor/doctor-017-full.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A及1C—1F號鋪',
      '荃灣沙咀道255號思源樓地下',
      '將軍澳運亨路1號新都城中心一期地下55-56號鋪',
    ],
  },
  {
    id: 4,
    name: '張瀞之',
    enName: 'Dr. Janice Cheung',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-013-full.webp',
    area: 'hk',
    regions: '香港',
    clinic: ['中環畢打街1-3號中建大廈1515室'],
  },
  {
    id: 5,
    name: '張瀞之',
    enName: 'Dr. Janice Cheung',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-013-full.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室及1725B室'],
  },
  {
    id: 6,
    name: '張瀞之',
    enName: 'Dr. Janice Cheung',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-013-full.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A及1C—1F號鋪',
      '元朗青山公路45及47號誠信商業大廈地鋪',
      '荃灣沙咀道255號思源樓地下',
    ],
  },
  {
    id: 7,
    name: '熊健慧',
    enName: 'Dr. Jennifer Hung',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-022-full.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室'],
  },
  {
    id: 8,
    name: '熊健慧',
    enName: 'Dr. Jennifer Hung',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-022-full.webp',
    area: 'nt',
    regions: '新界',
    clinic: ['沙田正街11-17號偉華中心2樓1C—1F號鋪'],
  },
  {
    id: 9,
    name: '高德全',
    enName: 'Dr. Simon Ko',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-023-full.webp',
    area: 'hk',
    regions: '香港',
    clinic: ['中環畢打街1-3號中建大廈1515室'],
  },
  {
    id: 10,
    name: '高德全',
    enName: 'Dr. Simon Ko',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-023-full.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室'],
  },
  {
    id: 11,
    name: '黎浩樺',
    enName: 'Dr. Kenny Lai',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-010-full.webp',
    area: 'hk',
    regions: '香港',
    clinic: ['中環畢打街1-3號中建大廈1515室'],
  },
  {
    id: 12,
    name: '黎浩樺',
    enName: 'Dr. Kenny Lai',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-010-full.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室及1725B室'],
  },
  {
    id: 13,
    name: '黎浩樺',
    enName: 'Dr. Kenny Lai',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-010-full.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A及1C—1F號鋪',
      '元朗青山公路45及47號誠信商業大廈地鋪',
    ],
  },
  {
    id: 14,
    name: '林己明',
    enName: 'Dr. Jasmine Lam',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-015-full.webp',
    area: 'hk',
    regions: '香港',
    clinic: ['中環畢打街1-3號中建大廈1515室'],
  },
  {
    id: 15,
    name: '林己明',
    enName: 'Dr. Jasmine Lam',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-015-full.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室及1725B室'],
  },
  {
    id: 16,
    name: '林己明',
    enName: 'Dr. Jasmine Lam',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-015-full.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A及1C—1F號鋪',
      '元朗青山公路45及47號誠信商業大廈地鋪',
      '荃灣沙咀道255號思源樓地下',
    ],
  },
  {
    id: 17,
    name: '林寶生',
    enName: 'Dr. Carol Lam',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-014-full.webp',
    area: 'hk',
    regions: '香港',
    clinic: ['中環畢打街1-3號中建大廈1515室'],
  },
  {
    id: 18,
    name: '林寶生',
    enName: 'Dr. Carol Lam',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-014-full.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室及1725B室'],
  },
  {
    id: 19,
    name: '林寶生',
    enName: 'Dr. Carol Lam',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-014-full.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A及1C—1F號鋪',
      '元朗青山公路45及47號誠信商業大廈地鋪',
      '荃灣沙咀道255號思源樓地下',
    ],
  },
  {
    id: 20,
    name: '林峯',
    enName: 'Dr. Robert Lam',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-025-full.webp',
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
      'https://statichk.cmermedical.com/newopd/doctor/doctor-025-full.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室'],
  },
  {
    id: 22,
    name: '李煒業',
    enName: 'Dr. Jacky Lee',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-005-full.webp',
    area: 'hk',
    regions: '香港',
    clinic: ['中環畢打街1-3號中建大廈1515室'],
  },
  {
    id: 23,
    name: '李煒業',
    enName: 'Dr. Jacky Lee',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-005-full.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室'],
  },
  {
    id: 24,
    name: '李煒業',
    enName: 'Dr. Jacky Lee',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-005-full.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A及1C—1F號鋪',
      '元朗青山公路45及47號誠信商業大廈地鋪',
    ],
  },
  {
    id: 25,
    name: '李佑榮',
    enName: 'Dr. Vincent Lee',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-001-full.webp',
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
      'https://statichk.cmermedical.com/newopd/doctor/doctor-001-full.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室'],
  },
  {
    id: 27,
    name: '梁苑珊',
    enName: 'Dr. Gloria Leung',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-018-full.webp',
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
      'https://statichk.cmermedical.com/newopd/doctor/doctor-018-full.webp',
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
      'https://statichk.cmermedical.com/newopd/doctor/doctor-018-full.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A及1C—1F號鋪',
      '元朗青山公路45及47號誠信商業大廈地鋪',
      '荃灣沙咀道255號思源樓地下',
    ],
  },
  {
    id: 30,
    name: '李德倫',
    enName: 'Dr. Stephen Li',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-011-full.webp',
    area: 'hk',
    regions: '香港',
    clinic: ['中環畢打街1-3號中建大廈1515室'],
  },
  {
    id: 31,
    name: '李德倫',
    enName: 'Dr. Stephen Li',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-011-full.webp',
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
      'https://statichk.cmermedical.com/newopd/doctor/doctor-011-full.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A及1C—1F號鋪',
      '元朗青山公路45及47號誠信商業大廈地鋪',
      '將軍澳運亨路1號新都城中心一期地下55-56號鋪',
    ],
  },
  {
    id: 33,
    name: '吳兆駿',
    enName: 'Dr. Danny Ng',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-024-full.webp',
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
      'https://statichk.cmermedical.com/newopd/doctor/doctor-024-full.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室'],
  },
  {
    id: 35,
    name: '吳兆駿',
    enName: 'Dr. Danny Ng',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-024-full.webp',
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
      'https://statichk.cmermedical.com/newopd/doctor/doctor-020-full.webp',
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
      'https://statichk.cmermedical.com/newopd/doctor/doctor-020-full.webp',
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
      'https://statichk.cmermedical.com/newopd/doctor/doctor-020-full.webp',
    area: 'nt',
    regions: '新界',
    clinic: [
      '沙田正街11-17號偉華中心2樓5A及1C—1F號鋪',
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
      'https://statichk.cmermedical.com/newopd/doctor/doctor-003-full.webp',
    area: 'hk',
    regions: '香港',
    clinic: ['中環畢打街1-3號中建大廈1515室'],
  },
  {
    id: 40,
    name: '黃俊華',
    enName: 'Dr. Alex Wong',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-003-full.webp',
    area: 'kl',
    regions: '九龍',
    clinic: ['旺角彌敦道625及639號雅蘭中心一期1208室'],
  },
  {
    id: 41,
    name: '黃俊華',
    enName: 'Dr. Alex Wong',
    avatar:
      'https://statichk.cmermedical.com/newopd/doctor/doctor-003-full.webp',
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
      'https://statichk.cmermedical.com/newopd/doctor/doctor-006-full.webp',
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
      'https://statichk.cmermedical.com/newopd/doctor/doctor-006-full.webp',
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
      'https://statichk.cmermedical.com/newopd/doctor/doctor-006-full.webp',
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
</script>
<template>
  <main class="doctor">
    <CspBanner active="doctor" />
    <section
      class="container max-w-5xl mx-auto px-3 xl:px-0 sticky top-[150px] lg:static"
    >
      <div
        class="flex flex-col lg:flex-row lg:justify-between pb-2 lg:pb-0 mb-5 lg:mb-18 gap-6 sticky top-[calc(12.6vw+72.5px)] lg:static bg-white pt-7 lg:pt-22"
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
.doctor {
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

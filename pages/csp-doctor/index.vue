<!--
 * @Author: 谭洁莹
 * @Date: 2026-01-12 18:00:41
 * @LastEditTime: 2026-01-13 11:55:10
 * @FilePath: /pages/csp-doctor/index.vue
 * @Description: 耀眼行动医生列表页
-->
<script lang="ts" setup>
import '~/assets/sass/iconfont.css'
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')
useHead(() => ({
  title: '「耀眼行動」白內障手術政府資助計劃 | 申請資格及費用 | 希瑪眼科中心',
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
interface Doctor {
  id: number
  name: string
  regions: string
  districts?: string
  tel: string
  clinic: Array<string>
  surgical: Array<string>
}
const DoctorList = ref<Doctor[]>([
  {
    id: 1,
    name: '陳偉樂',
    regions: '香港',
    districts: '中西區',
    tel: '3997 3566',
    clinic: ['中環畢打街 1-3 號中建大廈 15 樓 1515 室'],
    surgical: [
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
    ],
  },
  {
    id: 2,
    name: '陳偉樂',
    regions: '九龍',
    districts: '觀塘區',
    tel: '3997 3566',
    clinic: ['觀塘開源道79號鱷魚恤中心 16樓1601室'],
    surgical: [
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
    ],
  },
])
</script>
<template>
  <main>
    <CspBanner active="doctor" />
    <section class="container mx-auto px-3 xl:px-0">
      <div
        class="flex flex-col lg:flex-row lg:justify-between mb-7 lg:mb-18 gap-6 sticky top-[calc(12.6vw+72.5px)] lg:static bg-white pt-7 lg:pt-22"
      >
        <div
          class="search order-1 lg:order-2 border-2 lg:border-3 border-[#C7C5C5] rounded-2xl lg:rounded-3xl flex items-center gap-2 lg:gap-3 py-1 pl-3 pr-2 lg:py-2 lg:px-6"
        >
          <i class="iconfont icon-csp-search !text-2xl lg:!text-4xl"></i>
          <input
            id="search-input"
            type="search"
            placeholder="搜尋醫生名稱"
            class="size-full focus:outline-[#2958A3] p-2 rounded-2xl lg:rounded-3xl text-xl lg:text-3xl"
          />
        </div>
        <div
          class="doctor-tabs text-xl lg:text-2xl lg:leading-[56px] order-2 lg:order-1 text-[#1B407A] text-center flex items-center justify-between lg:justify-start lg:gap-[5vw]"
        >
          <input id="tab-hk" type="radio" name="area" hidden checked />
          <input id="tab-kl" type="radio" name="area" hidden />
          <input id="tab-nt" type="radio" name="area" hidden />
          <label
            for="tab-hk"
            class="tab w-3/10 lg:w-[132px] rounded-md lg:rounded-lg"
            >香港</label
          >
          <label
            for="tab-kl"
            class="tab w-3/10 lg:w-[132px] rounded-md lg:rounded-lg"
            >九龍</label
          >
          <label
            for="tab-nt"
            class="tab w-3/10 lg:w-[132px] rounded-md lg:rounded-lg"
            >新界</label
          >
        </div>
      </div>
    </section>
    <section>
      <CspDoctor :list="DoctorList" />
      <div class="doctor-page"></div>
    </section>
    <CspButton clinic />
    <PageFooterMenu />
  </main>
</template>
<style lang="scss" scoped></style>

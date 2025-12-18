<script setup lang="ts">
import { Autoplay, Pagination } from 'swiper'

definePageMeta({
  layout: 'page',
})

useHead({
  title: '希瑪眼科健康大使 鄭裕玲小姐 | 希瑪眼科中心',
  meta: [
    {
      name: 'keywords',
      content:
        '希瑪眼科,鄭裕玲,Do姐,眼科健康大使,眼科檢查,白內障,黃斑病變,青光眼,香港眼科中心',
    },
    {
      name: 'description',
      content:
        '鄭裕玲小姐（Do姐）擔任希瑪眼科健康大使，呼籲大眾關注視力健康。希瑪眼科中心提供安全、準確、可靠的眼科專科醫療服務。',
    },
  ],
})

const modules = [Autoplay, Pagination]

// 優勢輪播圖
const advantageSlides = [
  {
    img: 'intro-swiper-04',
    title: '上市集團 信心保證',
    link: '/cmereyecentre-introduction/',
    stock: true,
  },
  {
    img: 'intro-swiper-03',
    title: '國際認證 醫療技術',
    link: '/medical-equipment/',
  },
  { img: 'intro-swiper-06', title: '香港眼科 專科中心', link: '/contact/' },
  {
    img: 'intro-swiper-05',
    title: '先進尖端 醫療設備',
    link: '/medical-equipment/',
  },
  {
    img: 'intro-swiper-01',
    title: '醫療團隊 全程跟進',
    link: '/medical-team/',
  },
  { img: 'intro-swiper-07', title: '九大眼科 醫療服務', link: '/service/' },
  {
    img: 'intro-swiper-02',
    title: '以人為本 精益精進',
    link: '/cmereyecentre-introduction/',
  },
]

// 客戶評價（ratings swiper）
const ratings = [
  {
    name: 'R Lee',
    date: '2025-08-23',
    text: '林峯醫生\n解釋清楚，檢查詳細',
    avatar: 'ratings-avatar-04',
  },
  {
    name: 'Cecily Ngan',
    date: '2025-08-22',
    text: '高德全醫生專業細心，講解清晰，做手術好仔細，令視力改善了很多。',
    avatar: 'ratings-avatar-02',
  },
  {
    name: 'Ip Shrimp',
    date: '2025-08-15',
    text: '林己明醫生細心治療觀察\n樂於與病人互動及回答疑問',
    avatar: 'ratings-avatar-03',
  },
  {
    name: 'Chan Vicky',
    date: '2025-08-09',
    text: '劉凱珊醫生態度好，講解清晰，非常滿意劉醫生服務。',
    avatar: 'ratings-avatar-05',
  },
  {
    name: 'Marcella Chiu',
    date: '2025-08-08',
    text: '高德全醫生很professional, caring and supportive, 檢查及診斷都很準確，聆聽病人需要👍🏻',
    avatar: 'ratings-avatar-06',
  },
  {
    name: 'Wai Man Leung',
    date: '2025-08-07',
    text: '李佑榮醫生幫我做既手術相當成功, 而且醫生講解好細心及好負責任。',
    avatar: 'ratings-avatar-07',
  },
  {
    name: 'Ivar Ng',
    date: '2025-08-07',
    text: '姑娘服務好好，價錢便宜些就更好，好滿意李佑榮醫生。',
    avatar: 'ratings-avatar-08',
  },
  {
    name: 'justin chan',
    date: '2025-08-06',
    text: '李佑榮醫生各方面都很好, 會關心病人',
    avatar: 'ratings-avatar-09',
  },
]

const baseImg = 'https://statichk.cmermedical.com/newopd/about/carolcheng/'
const baseRatings = 'https://statichk.cmermedical.com/newopd/about/us/'

interface Clinic {
  name: string
  img: string
  avif?: string
  link: string
}
interface Region {
  id: 'hk' | 'kl' | 'nt'
  label: string
  clinics: Clinic[]
}
const regions: Region[] = [
  {
    id: 'kl',
    label: '九龍',
    clinics: [
      {
        name: '旺角雅蘭中心',
        img: 'https://statichk.cmermedical.com/newopd/about/carolcheng/clinic-kl-01.png',
        avif: 'https://statichk.cmermedical.com/newopd/about/carolcheng/clinic-kl-01.avif',
        link: '/eyecmer-mk',
      },
      {
        name: '觀塘鱷魚恤中心',
        img: 'https://statichk.cmermedical.com/newopd/about/carolcheng/clinic-kl-02.png',
        avif: 'https://statichk.cmermedical.com/newopd/about/carolcheng/clinic-kl-02.avif',
        link: '/eyecmer-kt',
      },
    ],
  },
  {
    id: 'hk',
    label: '香港',
    clinics: [
      {
        name: '中環中建大廈',
        img: 'https://statichk.cmermedical.com/newopd/about/carolcheng/clinic-hk-01.png',
        avif: 'https://statichk.cmermedical.com/newopd/about/carolcheng/clinic-hk-01.avif',
        link: '/eyecmer-ct',
      },
      {
        name: '中環萬邦行',
        img: 'https://statichk.cmermedical.com/newopd/about/carolcheng/clinic-hk-02.png',
        avif: 'https://statichk.cmermedical.com/newopd/about/carolcheng/clinic-hk-02.avif',
        link: '/eyecmer-kt',
      },
      {
        name: '銅鑼灣恒隆中心',
        img: 'https://statichk.cmermedical.com/newopd/about/carolcheng/clinic-hk-03.png',
        avif: 'https://statichk.cmermedical.com/newopd/about/carolcheng/clinic-hk-03.avif',
        link: '/eyecmer-cwb',
      },
    ],
  },
  {
    id: 'nt',
    label: '新界',
    clinics: [
      {
        name: '沙田偉華中心',
        img: 'https://statichk.cmermedical.com/newopd/about/carolcheng/clinic-nt-01.png',
        avif: 'https://statichk.cmermedical.com/newopd/about/carolcheng/clinic-nt-01.avif',
        link: '/eyecmer-st',
      },
      {
        name: '元朗誠信大廈',
        img: 'https://statichk.cmermedical.com/newopd/about/carolcheng/clinic-nt-02.png',
        avif: 'https://statichk.cmermedical.com/newopd/about/carolcheng/clinic-nt-02.avif',
        link: '/eyecmer-yl',
      },
      {
        name: '荃灣思源樓',
        img: 'https://statichk.cmermedical.com/newopd/about/carolcheng/clinic-nt-03.png',
        avif: 'https://statichk.cmermedical.com/newopd/about/carolcheng/clinic-nt-03.avif',
        link: '/eyecmer-tw',
      },
      {
        name: '將軍澳新都城中心',
        img: 'https://statichk.cmermedical.com/newopd/about/carolcheng/clinic-nt-04.png',
        avif: 'https://statichk.cmermedical.com/newopd/about/carolcheng/clinic-nt-04.avif',
        link: '/eyecmer-tko',
      },
    ],
  },
]
const currentRegion = ref<'hk' | 'kl' | 'nt'>('hk')
const currentClinics = computed(() => {
  return regions.find((r) => r.id === currentRegion.value)?.clinics || []
})
</script>

<template>
  <div class="relative">
    <!-- 頂部裝飾偽元素 -->
    <div
      class="relative lg:before:content-[''] lg:before:absolute lg:before:bg-[ur[(https://statichk.cmermedical.com/newopd/about/carolcheng/intro-round-pc-left.svg)] lg:before:bg-no-repeat lg:before:h-4/5 lg:before:w-[40%] lg:before:left-0 lg:before:bottom-0 lg:before:bg-contain lg:before:pointer-events-none lg:after:content-[''] lg:after:absolute lg:after:bg-[ur[](https://statichk.cmermedical.com/newopd/about/carolcheng/intro-round-pc-right.svg)] lg:after:bg-no-repeat lg:after:h-4/5 lg:after:w-[40%] lg:after:right-0 lg:after:-bottom-10 lg:after:bg-contain lg:after:bg-right lg:after:pointer-events-none"
    >
      <!-- 首屏視頻 -->
      <section class="mt-15 md:mt-23 lg:mt-0 lg:-z-1">
        <div
          class="flex justify-center bg-gradient-to-br from-[#E0E6F0] via-[#E7EDF3] to-[#D7E8F2]"
        >
          <div class="relative aspect-video w-full xl:h-[680px] xl:w-[1210px]">
            <video
              id="my-player"
              class="w-full h-full object-cover"
              preload="auto"
              autoplay
              muted
              playsinline
              loop
              controls
              controlsList="nodownload"
              src="https://statichk.cmermedical.com/hkcmereye/video/video-vueFgSecCMM.mp4"
            />
          </div>
        </div>
      </section>

      <!-- Do姐介紹 -->
      <section
        class="container mx-auto px-3 xl:px-0 pb-15 lg:pb-30 relative before:content-[''] before:absolute before:w-full before:h-1/2 before:top-0 before:left-0 before:bg-[ur[(https://statichk.cmermedical.com/newopd/about/carolcheng/intro-round-m-01.svg)] before:bg-no-repeat before:bg-[position:0_-40px] before:-z-1 after:content-[''] after:absolute after:w-full after:h-3/5 after:bottom-0 after:right-0 after:bg-[ur[](https://statichk.cmermedical.com/newopd/about/carolcheng/intro-round-m-02.svg)] after:bg-no-repeat after:bg-[position:100%_0] after:-z-1 lg:before:hidden lg:after:hidden"
      >
        <div class="grid intro-do">
          <div class="grid-area-title">
            <img
              src="https://statichk.cmermedical.com/newopd/about/carolcheng/intro-title-01.svg"
              alt="希瑪眼科健康大使"
              class="w-3/4 mt-2 mx-auto lg:w-[95%] lg:ml-0"
            />
            <img
              src="https://statichk.cmermedical.com/newopd/about/carolcheng/intro-title-02.svg"
              alt="鄭裕玲小姐"
              class="w-3/5 mr-[10%] ml-auto lg:mr-0 lg:w-4/5 -mb-5 lg:mb-0"
            />
          </div>
          <picture class="grid-area-img">
            <source
              srcset="
                https://statichk.cmermedical.com/newopd/about/carolcheng/intro-person.avif
              "
              type="image/avif"
            />
            <img
              src="https://statichk.cmermedical.com/newopd/about/carolcheng/intro-person.png"
              alt="鄭裕玲小姐"
              loading="lazy"
              class="w-[51.282vw] max-h-[652px] object-contain mx-auto -mb-2 lg:mb-0 lg:pt-[10%]"
            />
          </picture>
          <div
            class="grid-area-desc text-base lg:text-3xl font-bold lg:font-medium tracking-wide lg:tracking-widest leading-8 lg:leading-[1.35] space-y-12 lg:space-y-10"
          >
            <p>
              <span class="text-[#E6A446]">鄭裕玲小姐（Do姐）</span
              >一向以健康正面的形象、親和幽默的魅力，深受大眾喜愛。作為備受敬重的演藝界前輩，她以自律生活和敬業態度，成為許多人心中的榜樣。
            </p>
            <p>
              如今，<span class="text-[#E6A446]">鄭裕玲小姐</span
              >希望透過自身影響力，呼籲大眾關注視力健康，關心自己，關心家人，共同守護清楚視界，珍惜生活中每一個美好瞬間。
            </p>
          </div>
        </div>
      </section>

      <!-- 優勢輪播 + 按鈕 -->
      <section class="mb-13 lg:mb-35">
        <p
          class="text-[#2958A3] text-center text-xl lg:text-5xl font-bold tracking-widest leading-[1.5] lg:leading-[1.35] mb-[20px] lg:mb-[48px]"
        >
          <span>以守護大眾視力為目標</span><br />
          <span>提供安全、準確、可靠的眼科</span><br class="block lg:hidden" />
          <span>專科醫療服務</span>
        </p>

        <div
          class="intro-swiper overflow-hidden relative pb-20 max-w-[1840px] mx-auto"
        >
          <Swiper
            :modules="modules"
            :loop="true"
            :autoplay="{ delay: 3000 }"
            :pagination="{ clickable: true, el: '.intro-swiper-pagination' }"
            :slides-per-view="1"
            :space-between="20"
            :breakpoints="{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }"
          >
            <SwiperSlide v-for="slide in advantageSlides" :key="slide.img">
              <a :href="slide.link" target="_blank" class="relative block">
                <picture>
                  <source
                    :srcset="`${baseImg}${slide.img}.avif`"
                    type="image/avif"
                  />
                  <img
                    :src="`${baseImg}${slide.img}.png`"
                    :alt="slide.title"
                    loading="lazy"
                    class="w-full"
                  />
                </picture>
                <span
                  v-if="slide.stock"
                  class="absolute bottom-[3%] left-1/2 -translate-x-1/2 text-[#FA7E20] text-[1vw] font-bold [text-shadow:-1px_-1px_0_#fff,1px_-1px_0_#fff,-1px_1px_0_#fff,1px_1px_0_#fff]"
                >
                  <i class="iconfont icon-line-chart mr-1" /> 上市編號03309.HK
                </span>
              </a>
            </SwiperSlide>
          </Swiper>
          <div
            class="intro-swiper-pagination absolute bottom-7 left-1/2 -translate-x-1/2 w-fit whitespace-nowrap"
          />
        </div>

        <div
          class="flex justify-center gap-6 lg:gap-35 text-base lg:text-4xl font-bold tracking-widest"
        >
          <a
            href="/service/"
            target="_blank"
            class="flex items-center justify-center rounded-2xl lg:rounded-4xl bg-gradient-to-b from-[#E8FDFD] to-[#B3DBFB] shadow-[0_0_6.3px_1.7px_rgba(8,173,255,0.29)] lg:shadow-[0_0_15px_4px_rgba(8,173,255,0.29)] h-10 w-44 lg:h-22 lg:w-96"
          >
            <img
              src="https://statichk.cmermedical.com/newopd/about/carolcheng/icon-eye.svg"
              alt=""
              class="w-7 h-4 lg:w-16 lg:h-9"
            />
            <span class="text-[#4299EB] pl-[4px] lg:pl-[20px]">醫療服務</span>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2"
            target="_blank"
            class="flex items-center justify-center rounded-2xl lg:rounded-4xl bg-gradient-to-b from-[#E8FDFD] to-[#ACECE4] shadow-[0_0_6.3px_1.7px_rgba(8,173,255,0.29)] lg:shadow-[0_0_15px_4px_rgba(8,173,255,0.29)] h-10 w-44 lg:h-22 lg:w-96"
          >
            <img
              src="https://statichk.cmermedical.com/newopd/about/carolcheng/icon-whatsapp.svg"
              alt=""
              class="w-5 :h-5 lg:w-11 lg:h-11"
            />
            <span class="text-[#1DC48C] pl-[4px] lg:pl-[20px]"
              >WhatsApp查詢</span
            >
          </a>
        </div>
      </section>
    </div>
    <section
      class="cmer bg-cover bg-center bg-no-repeat lg:pt-12 lg:pb-50 mb-4 lg:mb-14"
    >
      <div class="cmer-main lg:mx-auto mb-4 lg:mb-14">
        <h2
          class="text-[#5B97D0] text-xl lg:text-5xl font-bold text-center tracking-widest mb-4 lg:mb-18"
        >
          希瑪眼科中心
        </h2>
        <div
          class="flex flex-col lg:flex-row lg:items-center container w-fit mx-auto"
        >
          <ul
            class="cmer-vision lg:flex-1 whitespace-nowrap container mx-auto px-3 lg:!px-0 text-[#515151] space-y-5 lg:space-y-15 w-fit pb-[60px] lg:py-0 relative before:absolute before:w-full before:aspect-square before:content-[''] lg:before:w-3/4"
          >
            <li class="flex gap-3 lg:gap-7 items-center">
              <strong
                class="font-black text-3xl lg:text-6xl w-8 :h-8 lg:w-16 lg:h-16 text-center text-[#5B97D0]"
                >C</strong
              >
              <p
                class="flex flex-col text-base lg:text-2xl font-bold relative before:absolute before:h-1/2 lg:before:h-full before:w-[2px] lg:before:w-0 before:bg-[#515151] before:-left-2 lg:before:-left-4 before:top-3/10 lg:before:top-1/10 before:rotate-10"
              >
                <span>優質臨床服務</span
                ><span>(High-quality Clinical Services)</span>
              </p>
            </li>
            <li class="flex gap-3 lg:gap-7 items-center">
              <strong
                class="font-black text-3xl lg:text-6xl w-8 :h-8 lg:w-16 lg:h-16 text-center text-[#5B97D0]"
                >M</strong
              >
              <p
                class="flex flex-col text-base lg:text-2xl font-bold relative before:absolute before:h-1/2 lg:before:h-full before:w-[2px] lg:before:w-0 before:bg-[#515151] before:-left-2 lg:before:-left-4 before:top-3/10 lg:before:top-1/10 before:rotate-10"
              >
                <span>現代化管理</span><span>(Modern Management)</span>
              </p>
            </li>
            <li class="flex gap-3 lg:gap-7 items-center">
              <strong
                class="font-black text-3xl lg:text-6xl w-8 :h-8 lg:w-16 lg:h-16 text-center text-[#5B97D0]"
                >E</strong
              >
              <p
                class="flex flex-col text-base lg:text-2xl font-bold relative before:absolute before:h-1/2 lg:before:h-full before:w-[2px] lg:before:w-0 before:bg-[#515151] before:-left-2 lg:before:-left-4 before:top-3/10 lg:before:top-1/10 before:rotate-10"
              >
                <span>優質教育</span><span>(Quality Education)</span>
              </p>
            </li>
            <li class="flex gap-3 lg:gap-7 items-center">
              <strong
                class="font-black text-3xl lg:text-6xl w-8 :h-8 lg:w-16 lg:h-16 text-center text-[#5B97D0]"
                >R</strong
              >
              <p
                class="flex flex-col text-base lg:text-2xl font-bold relative before:absolute before:h-1/2 lg:before:h-full before:w-[2px] lg:before:w-0 before:bg-[#515151] before:-left-2 lg:before:-left-4 before:top-3/10 lg:before:top-1/10 before:rotate-10"
              >
                <span>開創性科研</span><span>(Pioneering Research)</span>
              </p>
            </li>
          </ul>
          <div
            class="clinic lg:flex-1 bg-cover bg-center bg-no-repeat lg:bg-none container mx-auto px-3 lg:px-0 flex flex-col justify-between items-center lg:flex-row gap-8 lg:gap-5 xl:gap-25 pt-4 pb-15 lg:py-0 lg:h-[680px]"
          >
            <input
              v-for="region in regions"
              :id="'clinic-' + region.id"
              :key="region.id"
              v-model="currentRegion"
              type="radio"
              name="clinic-region"
              class="hidden"
              :class="'peer/' + region.id"
              :value="region.id"
            />
            <div
              class="order-1 clinic-tabs w-full lg:w-1/2 whitespace-nowrap flex justify-around lg:flex-col text-[#5B97D0] border-[#5B97D0] border-b-1 lg:border-l-2 lg:border-b-0 pb-[16px] lg:pb-0 lg:pl-[36px] tracking-widest leading-6 lg:leading-15 font-bold relative lg:h-[660px] lg:my-auto lg:justify-center lg:gap-[20%]"
            >
              <label
                v-for="region in regions"
                :key="region.id"
                :for="'clinic-' + region.id"
                class="cursor-pointer relative transition-all duration-300 ease"
              >
                {{ region.label }}
              </label>
            </div>
            <div class="order-2 w-4/5 lg:my-auto mx-auto">
              <div
                v-for="clinic in currentClinics"
                :key="clinic.name"
                class="clinic-item relative"
              >
                <nuxt-link :to="clinic.link">
                  <picture>
                    <source
                      v-if="clinic.avif"
                      :srcset="clinic.avif"
                      type="image/avif"
                    />
                    <img
                      :src="clinic.img"
                      :alt="clinic.name"
                      loading="lazy"
                      class="w-full lg:scale-120 lg:translate-x-7"
                    />
                  </picture>
                  <div class="clinic-name">
                    {{ clinic.name }}<i class="iconfont icon-arrow-right"></i>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 客戶評價輪播 -->
    <section class="mb-13 lg:mb-15 text-[#5B97D0]">
      <div class="text-center mb-9 lg:mb-13">
        <h2 class="text-xl lg:text-5xl font-bold mb-[8px] lg:mb-[24px]">
          客戶評分
        </h2>
        <p
          class="text-[clamp(0.75rem,-0.964rem_+_8.57vw,1.125rem)] font-bold lg:font-light"
        >
          來自GOOGLE平台的真實體驗分享
        </p>
      </div>
      <Swiper
        :modules="[Autoplay]"
        :loop="true"
        :autoplay="{ delay: 0, disableOnInteraction: false }"
        :speed="6000"
        :free-mode="true"
        :slides-per-view="1.2"
        :space-between="20"
        :breakpoints="{
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 4 },
        }"
        class="ratings-swiper"
      >
        <SwiperSlide v-for="item in ratings" :key="item.name" class="!h-auto">
          <article class="h-full rounded-md shadow-sm bg-white p-4 space-y-4">
            <div class="flex items-center">
              <img
                :src="`${baseRatings}${item.avatar}.avif`"
                :alt="item.name"
                class="w-12 h-12 mr-3 rounded-full"
                loading="lazy"
              />
              <div>
                <h3 class="text-lg font-medium text-[#212529]">
                  {{ item.name }}
                </h3>
                <time class="text-sm text-gray-500">{{ item.date }}</time>
              </div>
            </div>
            <div class="flex text-[#ffc107]">
              <i v-for="n in 5" :key="n" class="iconfont icon-star" />
            </div>
            <p class="text-base text-gray-700 whitespace-pre-line">
              {{ item.text }}
            </p>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>

    <!-- 表單區域（使用項目現有組件） -->
    <FormFooterInfo
      :bg="`background:#64bcd1;background:-webkit-linear-gradient(to right, #83cdd3, #64bcd1);background:linear-gradient(to right, #83cdd3, #64bcd1);`"
      :co="`color:#64bcd1;`"
    />
    <PageFooterMenu />
  </div>
</template>

<style lang="scss" scoped>
main {
  font-family: 'Noto Sans HK', sans-serif;
}
/* 移动端视频画中画固定 */
.pip-fixed {
  position: fixed;
  right: 24px;
  bottom: 100px;
  width: 60%;
  max-width: 220px;
  height: auto;
  aspect-ratio: 16 / 9;
  z-index: 60;
  border-radius: 12px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  @media (min-width: 768px) and (max-width: 1024px) {
    bottom: 12px;
  }
  @media (min-width: 1024px) {
    display: none; // PC 端关闭画中画
  }
  @media (min-width: 1025px) {
    right: 280px;
  }
}
/* 优势轮播 - 非活跃 slide 缩放 */
.intro-swiper {
  .swiper-slide {
    pointer-events: none;
    transition: transform 0.3s ease;

    &:not(.swiper-slide-active) {
      transform: scale(0.8);
    }
  }
}
/* 分页圆点样式 */
.intro-swiper-pagination {
  .swiper-pagination-bullet {
    width: 10.5px;
    height: 10.5px;
    margin: 0 8px !important;
    background: white;
    opacity: 1;

    &-active {
      background: #febd62;
    }
  }
}
.grid-area-title {
  grid-area: 'title';
}
.grid-area-img {
  grid-area: 'img';
}
.grid-area-desc {
  grid-area: 'desc';
}
.intro-do {
  grid-template-areas: 'title' 'img' 'desc';
  @media (min-width: 1024px) {
    grid-template-areas: 'title img' 'desc img';
  }
}
.cmer {
  @media (min-width: 1024px) {
    background-image: url('https://statichk.cmermedical.com/newopd/about/carolcheng/center-bg-pc.png');
  }
  .cmer-main {
    @media (min-width: 1024px) {
      width: fit-content;
    }
  }
  .cmer-vision {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(182, 219, 255, 0.82) 0%,
      rgba(200, 227, 255, 0) 100%
    );
  }
}
.clinic {
  @media (max-width: 1023px) {
    background-image: url('https://statichk.cmermedical.com/newopd/about/carolcheng/center-bg-m.png');
  }

  .clinic-item:nth-child(odd) .clinic-name {
    right: 2%;
    bottom: 0;
  }

  .clinic-item:nth-child(even) .clinic-name {
    left: 2%;
    bottom: 5%;
  }

  /* 诊所 Tab 装饰点 */
  .clinic-tabs {
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      background-color: #5b97d0;
    }

    @media (max-width: 1023px) {
      &::before {
        left: -2px;
        bottom: -2px;
      }
      &::after {
        right: -2px;
        bottom: -2px;
      }
      &::before,
      &::after {
        width: 4px;
        height: 4px;
      }
    }

    @media (min-width: 1024px) {
      &::before {
        top: -4px;
        left: -5px;
      }
      &::after {
        bottom: -4px;
        left: -5px;
      }
      &::before,
      &::after {
        width: 8px;
        height: 8px;
      }
    }

    label {
      position: relative;
      font-size: 20px;
      cursor: pointer;

      &::before {
        content: '';
        position: absolute;
        border-radius: 50%;
        background-color: #5b97d0;
        transition: all 0.3s ease;
      }

      @media (max-width: 1023px) {
        font-size: 20px;

        &::before {
          width: 8px;
          height: 8px;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
        }
      }

      @media (min-width: 1024px) {
        font-size: 40px;

        &::before {
          width: 16px;
          height: 16px;
          left: -46px;
          bottom: 50%;
          transform: translateY(50%);
        }
      }
    }
  }
  /* 诊所名称悬浮文字 */
  .clinic-name {
    position: absolute;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      #b6dbff 53.85%,
      rgba(251, 253, 255, 0) 100%
    );
    color: #515151;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
      1px 1px 0 #fff;

    @media (max-width: 1023px) {
      font-size: 20px;
    }

    @media (min-width: 1024px) {
      font-size: 24px;
    }
  }

  /* Tab 选中状态 */
  #clinic-kl:checked ~ .clinic-tabs label[for='clinic-kl'],
  #clinic-hk:checked ~ .clinic-tabs label[for='clinic-hk'],
  #clinic-nt:checked ~ .clinic-tabs label[for='clinic-nt'] {
    color: #febd62;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-decoration: underline;
    text-underline-offset: 8px;
    text-decoration-thickness: 2px;
    transform: translateY(-8px);

    @media (min-width: 1024px) {
      font-size: 60px;
      text-decoration-thickness: 3px;
    }

    &::before {
      background-color: #febd62;

      @media (max-width: 1023px) {
        width: 12px;
        height: 12px;
        bottom: -30px;
      }

      @media (min-width: 1024px) {
        width: 28px;
        height: 28px;
        left: -50px;
      }
    }
  }
}

/* 提交按钮 */
.submit {
  font-weight: 900;
  letter-spacing: 0.2em;

  @media (max-width: 1023px) {
    background-color: #ffbe40;
    color: #ffffff;
    font-size: 20px;
    border-radius: 52px;
    padding: 8px 32px;
    border: 2px solid #fffcfc;
    box-shadow: inset 0 3.8px 3.8px 0 rgba(230, 156, 45, 0.61),
      0 1px 8px 0 rgba(255, 122, 0, 0.65);
  }

  @media (min-width: 1024px) {
    color: #2958a3;
    font-size: 30px;
    background-color: #fff;
    border: 3px solid #fffcfc;
    border-radius: 76px;
    box-shadow: 0 4px 4px 0 rgba(47, 126, 252, 0.25);
    padding: 16px 84px;
  }
}
</style>

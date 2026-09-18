<script lang="ts" setup>
import { Autoplay, Navigation, Pagination, Thumbs, Grid } from 'swiper'

definePageMeta({
  layout: 'page',
})

const { t } = useLang()

useHead(() => ({
  title: t('tdk.reviews.title'),
  meta: [
    {
      hid: 'reviewsDesc',
      name: 'description',
      content:
        t('tdk.reviews.desc'),
    },
    {
      hid: 'pdtKey',
      name: 'keywords',
      content: t('tdk.reviews.key'),
    },
  ],
}))

/** 真實客戶分享影片 */
const videoList = [
  {
    id: 'awIratLWirM',
    title: '【真實客戶分享｜與其默默忍受，不如及早行動💪】',
    thumb: 'https://statichk.cmermedical.com/newopd/video/awIratLWirM.webp',
  },
  {
    id: 'X4y9Rc9D0Rs',
    title: '【真實客戶分享｜讓美好重新被看見🌹👀】',
    thumb: 'https://statichk.cmermedical.com/newopd/video/X4y9Rc9D0Rs.webp',
  },
  {
    id: 'Yzj9HtlRLwM',
    title: '【真實客戶分享｜重拾視力，找回家庭歡笑 ✨】',
    thumb: 'https://statichk.cmermedical.com/newopd/video/Yzj9HtlRLwM-v2.webp',
  },
  {
    id: '0Hscxb-v_Ig',
    title: '【「銀」色浪漫】真實客戶分享｜活出睛彩人生👁️✨',
    thumb: 'https://statichk.cmermedical.com/newopd/video/0Hscxb-v_Ig.webp',
  },
  {
    id: 'F5fdrLskDdc',
    title: '【「銀」色浪漫】真實客戶分享｜術後重拾清楚視界👁️',
    thumb: 'https://statichk.cmermedical.com/newopd/video/F5fdrLskDdc.webp',
  },
  {
    id: 'Jt0fmKmfiIU',
    title: '【「銀」色浪漫】真實客戶分享：重見色彩人生',
    thumb: 'https://statichk.cmermedical.com/newopd/video/Jt0fmKmfiIU.webp',
  },
  {
    id: 'fDo35wPIcBw',
    title: '【光明傳遞愛2025】真實客戶見證｜盡享前所未有清楚視界👁️✨',
    thumb: 'https://statichk.cmermedical.com/newopd/video/fDo35wPIcBw.webp',
  },
  {
    id: '8ip-wGoPqmQ',
    title: '【光明傳遞愛2025】真實客戶分享｜擁抱摯親笑容',
    thumb: 'https://statichk.cmermedical.com/newopd/video/8ip-wGoPqmQ.webp',
  },
  {
    id: 'h6H16bsZRAE',
    title: '【光明傳遞愛2025】真實客戶見證｜難以言喻的幸福',
    thumb: 'https://statichk.cmermedical.com/newopd/video/h6H16bsZRAE.webp',
  },
  {
    id: 'zbYpdLZtL0c',
    title: '【「銀」色浪漫】真實客戶分享｜清楚見證人生重要時刻💍✨',
    thumb: 'https://statichk.cmermedical.com/newopd/video/zbYpdLZtL0c.webp',
  },
  {
    id: 'Ds5NBkrQLXo',
    title: '【「銀」色浪漫】真實客戶見證：術後一切如常，迅速康復！',
    thumb: 'https://statichk.cmermedical.com/newopd/video/Ds5NBkrQLXo.webp',
  },
]

/** Facebook 好評截圖 */
const facebookReviews = Array.from({ length: 24 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0')
  const ver = i + 1 === 8 ? 'v2' : 'v1'
  const alts = [
    '最欣賞係希瑪可以有一條龍服務，由檢查手術都可以完全到，診所姑娘細心關懷術前後注意事項，鄒醫生都好專業',
    '黎醫生非常細心，願意聆聽病人意見，感謝黎醫生照料。',
    '梁醫生 好多謝你幫我daddy做咗手術 非常之感激你',
    'Dr. Lam is good and explain very clear about my 2 year old girl\'s eyes condition.',
    '尹醫生有問必答，對病人友善有禮及細心。',
    '黄醫生好细心，會好清楚咁講解治療嘅好同壞處，亦都非常有耐性解答我嘅疑慮。',
    '尹醫生診症解釋非常清楚，特別為我揀選合適的手術方案，手術過程清楚指引每個步驟，手勢非常專業，術後好快睇嘢好清楚，手術室姑娘術前準備服務也非常好。',
    '林醫生及黃醫生手術好仔細，術前有請楚講解，因為工作關係比較難約，但都盡量配合到我手術時間及地點，收費亦非常透明。👍',
    '林醫生應診細心，會提出合適方案幫我治療，多謝林醫生。',
    '鄒醫生好細心，講解清楚，待人接物很好，同埋好決斷，非常幫到我。',
    '李醫生親切友善，會關心病人需要，問題有問必答。',
    '林醫生非常專業細心，感謝佢嘅診冶',
    '李醫生，多謝你親切嘅解釋及醫治，繼續努力💪',
    '李醫生好細心，會關懷病人。祝李醫生身體健康，服務更多有需要的病人。',
    '張醫生好有耐性解答我的疑問，細心診症',
    '黃醫生診症服務整體不錯，醫護人員服務都好好👍',
    '尹醫生令我感到放心，願意聆聽及解釋眼睛狀況讓我知道，安撫不安情绪',
    '尹醫生好Nice，要keep on going，繼續加油，多谢醫生嘅悉心照题！',
    '梁醫生好年青，視力好，而且好有手術經驗，手術進行中可以安撫到我𫟽嘅情绪，手術都做得非常好。',
    '尹醫生解釋清楚明白',
    '張醫生好細心，會關懷病人，清楚了解我嘅需要。',
    '李醫生能夠解答到問題，診症細心，和藹可親。',
    '梁醫生好nice好親切，好細心，比好多好好嘅advice我~',
    '尹醫生好细心，講解非常詳细，令病人感覺舒服同安心👍🏻',
  ]
  return {
    src: `https://statichk.cmermedical.com/newopd/about/rating/facebook/reviews-facebook-${n}-${ver}.webp`,
    alt: alts[i] || `Facebook 客戶好評 ${i + 1}`,
  }
})

/** Google 好評截圖 */
const googleReviews = [
  {
    src: 'https://statichk.cmermedical.com/newopd/about/rating/google/reviews-google-001-v1.webp',
    alt: '家人行動不便，但診所同事都好照顧佢，張醫生好細心慢慢解釋，會繼續支持',
  },
  {
    src: 'https://statichk.cmermedical.com/newopd/about/rating/google/reviews-google-002-v1.webp',
    alt: '李醫生專業，對李醫生好有信心，服務很好。',
  },
  {
    src: 'https://statichk.cmermedical.com/newopd/about/rating/google/reviews-google-003-v1.webp',
    alt: '李醫生講解清楚，有圖有片，令我更明白眼睛情況。有醫德，不會貿然做手術。',
  },
  {
    src: 'https://statichk.cmermedical.com/newopd/about/rating/google/reviews-google-004-v1.webp',
    alt: '陳醫生各方面都好好，服務好，手術做得好及細心。',
  },
  {
    src: 'https://statichk.cmermedical.com/newopd/about/rating/google/reviews-google-005-v1.webp',
    alt: 'Dr. Lau 每次都好細心檢查眼睛，都會繼續支持',
  },
  {
    src: 'https://statichk.cmermedical.com/newopd/about/rating/google/reviews-google-006-v1.webp',
    alt: '李醫生術前術後都跟進得好好，講解好清楚，亦提醒注意事項。',
  },
  {
    src: 'https://statichk.cmermedical.com/newopd/about/rating/google/reviews-google-007-v1.webp',
    alt: '一直睇開陳醫生，好細心、有耐心而且好專業。',
  },
  {
    src: 'https://statichk.cmermedical.com/newopd/about/rating/google/reviews-google-008-v1.webp',
    alt: '林醫生很細心，解釋手術詳細，減低手術緊張感，很安全放心，覆診跟進也很好，檢查仔細，診所服務也很好。',
  },
  {
    src: 'https://statichk.cmermedical.com/newopd/about/rating/google/reviews-google-009-v1.webp',
    alt: '多謝李醫生一直以來的細心及耐心的醫治，講解又十分詳細，又肯照顧我的感受。',
  },
  {
    src: 'https://statichk.cmermedical.com/newopd/about/rating/google/reviews-google-010-v1.webp',
    alt: '李醫生細心問症，了解病人所需，提供識切醫療建議及治療。',
  },
  {
    src: 'https://statichk.cmermedical.com/newopd/about/rating/google/reviews-google-011-v3.webp',
    alt: '梁醫生細心專業，我家人都一直睇開梁醫生 服務好好',
  },
  {
    src: 'https://statichk.cmermedical.com/newopd/about/rating/google/reviews-google-012-v1.webp',
    alt: '劉醫生診症認真，希望可以繼續保持對患者的耐性及良好態度。',
  },
  {
    src: 'https://statichk.cmermedical.com/newopd/about/rating/google/reviews-google-013-v1.webp',
    alt: '尹醫生能夠對症下藥，提出問題根源並提供適切準確的治療，令到我安心又開心返。',
  },
  {
    src: 'https://statichk.cmermedical.com/newopd/about/rating/google/reviews-google-014-v1.webp',
    alt: '中心好新淨、宽敞舒適。林醫生好有耐性講解比老人家聽，明碼實價收費好清楚',
  },
  {
    src: 'https://statichk.cmermedical.com/newopd/about/rating/google/reviews-google-015-v2.webp',
    alt: '上次陪媽媽檢查，環境幾好，d姑娘都好nice',
  },
  {
    src: 'https://statichk.cmermedical.com/newopd/about/rating/google/reviews-google-016-v2.webp',
    alt: '幫我檢查眼睛的Poon檢查師非常細心，我眼睛比較敏感，每次測試眼壓時都很難同埋辛苦。但係Poon檢查師非常細心耐心，讓我非常放鬆，同埋有信心。很感謝！',
  },
  {
    src: 'https://statichk.cmermedical.com/newopd/about/rating/google/reviews-google-017-v2.webp',
    alt: '銅鑼灣診所姑娘態度好，安排妥當',
  },
]

const videoModules = [Autoplay, Navigation, Thumbs]
const thumbModules = [Autoplay, Navigation]
const reviewModules = [Autoplay, Navigation, Pagination, Grid]

/** Swiper 实例（通过 @swiper 回调拿到，比 ref.$el.swiper 更可靠） */
let videoInst: any = null
let thumbInst: any = null
/** 防止双向 slideTo 互相触发死循环 */
let syncing = false

const isDesktop = ref(false)

const pauseAllVideos = () => {
  document.querySelectorAll('.video-swiper iframe').forEach((iframe) => {
    const el = iframe as HTMLIFrameElement
    el.contentWindow?.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      '*',
    )
  })
}

/** 主轮播 ↔ 缩略图 双向同步 */
const bindThumbs = () => {
  if (!videoInst || !thumbInst) return

  // Thumbs 模块正式绑定
  if (videoInst.thumbs) {
    videoInst.thumbs.swiper = thumbInst
    videoInst.thumbs.init()
    videoInst.thumbs.update(true)
  }

  // 兜底：手动同步（nuxt-swiper / 时机问题导致 thumbs 失效时仍可用）
  videoInst.off('slideChange', onVideoSlideChange)
  thumbInst.off('slideChange', onThumbSlideChange)
  videoInst.on('slideChange', onVideoSlideChange)
  thumbInst.on('slideChange', onThumbSlideChange)
}

const onVideoSlideChange = () => {
  pauseAllVideos()
  if (syncing || !thumbInst || !videoInst) return
  const idx = videoInst.realIndex ?? videoInst.activeIndex
  if (thumbInst.activeIndex !== idx) {
    syncing = true
    thumbInst.slideTo(idx)
    syncing = false
  }
}

const onThumbSlideChange = () => {
  if (syncing || !videoInst || !thumbInst) return
  const idx = thumbInst.realIndex ?? thumbInst.activeIndex
  if (videoInst.activeIndex !== idx) {
    syncing = true
    videoInst.slideTo(idx)
    syncing = false
  }
}

const onVideoSwiper = (swiper: any) => {
  videoInst = swiper
  bindThumbs()
  nextTick(syncAutoplay)
}

const onThumbSwiper = (swiper: any) => {
  thumbInst = swiper
  bindThumbs()
  nextTick(syncAutoplay)
}

const syncAutoplay = () => {
  if (typeof window === 'undefined') return
  isDesktop.value = window.innerWidth >= 1024
  if (!videoInst || !thumbInst) return
  if (isDesktop.value) {
    thumbInst.autoplay?.stop()
    videoInst.autoplay?.start()
  } else {
    videoInst.autoplay?.stop()
    thumbInst.autoplay?.start()
  }
}

let resizeTimer: ReturnType<typeof setTimeout> | null = null
const onResize = () => {
  if (resizeTimer) clearTimeout(resizeTimer)
  resizeTimer = setTimeout(syncAutoplay, 200)
}

onMounted(() => {
  window.addEventListener('resize', onResize)
  // 延迟再绑一次，确保两个 Swiper 都已挂载
  nextTick(() => {
    bindThumbs()
    syncAutoplay()
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  if (resizeTimer) clearTimeout(resizeTimer)
  videoInst?.off?.('slideChange', onVideoSlideChange)
  thumbInst?.off?.('slideChange', onThumbSlideChange)
  videoInst = null
  thumbInst = null
})
</script>

<template>
  <main id="main-content">
    <!-- Banner -->
    <section class="banner" aria-labelledby="banner-title">
      <h1 id="banner-title" class="banner-title">
        客戶評價及
        <br />
        真實分享
      </h1>
    </section>

    <!-- 介紹 -->
    <section class="info wrapper" aria-labelledby="info-heading">
      <h2 id="info-heading" class="sr-only">中心評價概覽</h2>
      <img
        src="https://statichk.cmermedical.com/newopd/about/rating/reviews-info-cover.webp"
        alt="希瑪眼科中心客戶評價概覽"
        class="info-cover"
        width="480"
        height="360"
        loading="lazy"
      />
      <div class="info-text">
        <p>
          希瑪眼科中心於
          <strong>Facebook</strong>
          獲得
          <strong>96%</strong>
          的客戶推薦率，各區分店於
          <strong>Google</strong>
          亦保持
          <strong>3.0至4.7</strong>
          星的滿意度評價。中心隸屬於
          <strong>香港主板上市「希瑪醫療控股有限公司」</strong>
          （股份代號：03309）
        </p>
        <p>
          由擁有
          <strong>逾30年眼科臨床經驗的林順潮醫生</strong>
          於 2012 年創立。現於本港設有
          <strong>10 間分店</strong>
          ，醫療團隊由
          <strong>27 名眼科專科醫生</strong>
          組成。以下透過真實客戶分享影片，以及Facebook、Google客戶好評，呈現患者對希瑪眼科中心就診體驗的整體評價。
        </p>
      </div>
    </section>

    <!-- 真實客戶分享影片 -->
    <section class="video" aria-labelledby="video-title">
      <div class="wrapper">
        <h2 id="video-title" class="title-normal">真實客戶分享</h2>
        <p class="intro-normal">
          希瑪眼科中心真實客戶普遍分享白內障手術後重拾清楚視力，生活質素顯著改善，
          <br class="intro-br" />
          患者特別稱讚醫生診症細心、手術講解詳盡。
        </p>

        <div class="video-main">
          <!-- 主影片輪播（thumbs 在 @swiper 回调里绑定，避免初始化时 thumb 尚未就绪） -->
          <Swiper
            class="video-swiper"
            :modules="videoModules"
            :slides-per-view="1"
            :space-between="10"
            :allow-touch-move="true"
            :navigation="{
              nextEl: '.video-next',
              prevEl: '.video-prev',
            }"
            :breakpoints="{
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
                autoplay: {
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                },
              },
            }"
            @swiper="onVideoSwiper"
          >
            <SwiperSlide
              v-for="item in videoList"
              :key="item.id"
              :title="item.title"
            >
              <div class="yt-wrap">
                <iframe
                  :src="`https://www.youtube-nocookie.com/embed/${item.id}?enablejsapi=1&rel=0`"
                  :title="item.title"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="yt-iframe"
                />
              </div>
            </SwiperSlide>
          </Swiper>

          <!-- 桌面左右箭頭 -->
          <div class="nav-desktop" aria-hidden="false">
            <button type="button" class="nav-btn video-prev" aria-label="上一個影片">
              <img
                src="https://statichk.cmermedical.com/newopd/about/rating/review-icon-prev.svg"
                alt=""
                width="48"
                height="48"
              />
            </button>
            <button type="button" class="nav-btn video-next" aria-label="下一個影片">
              <img
                src="https://statichk.cmermedical.com/newopd/about/rating/review-icon-next.svg"
                alt=""
                width="48"
                height="48"
              />
            </button>
          </div>

          <!-- 手機縮圖輪播：点击 / 滑动会同步上方主视频 -->
          <div class="thumb-wrap">
            <Swiper
              class="thumb-swiper"
              :modules="thumbModules"
              :slides-per-view="2"
              :space-between="12"
              :watch-slides-progress="true"
              :slide-to-clicked-slide="true"
              :allow-touch-move="true"
              :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }"
              :navigation="{
                nextEl: '.thumb-next',
                prevEl: '.thumb-prev',
              }"
              @swiper="onThumbSwiper"
            >
              <SwiperSlide
                v-for="item in videoList"
                :key="'t-' + item.id"
                :title="item.title"
              >
                <img
                  :src="item.thumb"
                  :alt="item.title"
                  loading="lazy"
                  class="thumb-img"
                  width="320"
                  height="180"
                />
              </SwiperSlide>
            </Swiper>
            <button type="button" class="nav-btn thumb-prev" aria-label="上一個縮圖">
              <img
                src="https://statichk.cmermedical.com/newopd/about/rating/review-icon-prev.svg"
                alt=""
                width="16"
                height="16"
              />
            </button>
            <button type="button" class="nav-btn thumb-next" aria-label="下一個縮圖">
              <img
                src="https://statichk.cmermedical.com/newopd/about/rating/review-icon-next.svg"
                alt=""
                width="16"
                height="16"
              />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Facebook 好評 -->
    <section class="facebook" aria-labelledby="fb-title">
      <div class="wrapper review-wrap facebook-wrap">
        <div class="review-head">
          <img
            src="https://statichk.cmermedical.com/newopd/about/rating/review-icon-facebook.svg"
            alt=""
            width="72"
            height="72"
            loading="lazy"
            class="review-icon"
          />
          <h2 id="fb-title" class="title-normal">Facebook 客戶好評</h2>
        </div>
        <p class="intro-normal">
          希瑪眼科中心的Facebook專頁客戶推薦率達 96%，累積超過 700 個評論，
          <br class="intro-br" />
          評價主要圍繞醫生診斷精準細心醫生解答詳盡、手術安排流暢及跟進服務貼心。
        </p>

        <div class="review-main">
          <Swiper
            class="facebook-swiper"
            :modules="reviewModules"
            :slides-per-view="1"
            :space-between="8"
            :loop="true"
            :watch-slides-progress="true"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }"
            :grid="{ rows: 5, fill: 'row' }"
            :navigation="{
              nextEl: '.fb-next',
              prevEl: '.fb-prev',
            }"
            :pagination="{
              el: '.facebook-pagination',
              clickable: true,
            }"
            :breakpoints="{
              1024: {
                slidesPerView: 4,
                spaceBetween: 16,
                grid: { rows: 2, fill: 'row' },
              },
            }"
          >
            <SwiperSlide v-for="(item, i) in facebookReviews" :key="'fb-' + i">
              <img
                :src="item.src"
                :alt="item.alt"
                :title="item.alt"
                loading="lazy"
                class="review-img"
              />
            </SwiperSlide>
          </Swiper>
          <button type="button" class="nav-btn fb-prev media-prev" aria-label="上一頁 Facebook 評價">
            <img
              src="https://statichk.cmermedical.com/newopd/about/rating/review-icon-prev.svg"
              alt=""
              width="48"
              height="48"
            />
          </button>
          <button type="button" class="nav-btn fb-next media-next" aria-label="下一頁 Facebook 評價">
            <img
              src="https://statichk.cmermedical.com/newopd/about/rating/review-icon-next.svg"
              alt=""
              width="48"
              height="48"
            />
          </button>
          <div class="facebook-pagination review-pagination" />
        </div>
      </div>
    </section>

    <!-- Google 好評 -->
    <section class="google" aria-labelledby="gg-title">
      <div class="wrapper review-wrap google-wrap">
        <div class="review-head">
          <img
            src="https://statichk.cmermedical.com/newopd/about/rating/review-icon-google.svg"
            alt=""
            width="72"
            height="72"
            loading="lazy"
            class="review-icon"
          />
          <h2 id="gg-title" class="title-normal">Google 客戶好評</h2>
        </div>
        <p class="intro-normal">
          希瑪眼科中心在各區分店的Google評價普遍落在 3.0 至 4.7 星（滿分 5 星）
          <br class="intro-br" />
          之間，評價主要圍繞醫生解答詳盡、態度親切。
        </p>

        <div class="review-main">
          <Swiper
            class="google-swiper"
            :modules="reviewModules"
            :slides-per-view="1"
            :space-between="8"
            :loop="true"
            :watch-slides-progress="true"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }"
            :grid="{ rows: 4, fill: 'row' }"
            :navigation="{
              nextEl: '.gg-next',
              prevEl: '.gg-prev',
            }"
            :pagination="{
              el: '.google-pagination',
              clickable: true,
            }"
            :breakpoints="{
              1024: {
                slidesPerView: 4,
                spaceBetween: 16,
                grid: { rows: 2, fill: 'row' },
              },
            }"
          >
            <SwiperSlide v-for="(item, i) in googleReviews" :key="'gg-' + i">
              <img
                :src="item.src"
                :alt="item.alt"
                :title="item.alt"
                loading="lazy"
                class="review-img"
              />
            </SwiperSlide>
          </Swiper>
          <button type="button" class="nav-btn gg-prev media-prev" aria-label="上一頁 Google 評價">
            <img
              src="https://statichk.cmermedical.com/newopd/about/rating/review-icon-prev.svg"
              alt=""
              width="48"
              height="48"
            />
          </button>
          <button type="button" class="nav-btn gg-next media-next" aria-label="下一頁 Google 評價">
            <img
              src="https://statichk.cmermedical.com/newopd/about/rating/review-icon-next.svg"
              alt=""
              width="48"
              height="48"
            />
          </button>
          <div class="google-pagination review-pagination" />
        </div>
      </div>
    </section>

    <!-- 關於希瑪 -->
    <section class="about" aria-labelledby="about-title">
      <div class="wrapper about-main">
        <h2 id="about-title" class="title-normal about-title">關於希瑪眼科中心</h2>
        <div class="intro-normal about-text">
          <p>
            希瑪眼科中心醫療團隊由經驗豐富的眼科專科醫生、註冊視光師及醫療護理人員組成，涵蓋白內障、黃斑病變、視網膜脫落、青光眼、眼矯形及眼眶疾病、兒童斜弱視，以及屈光矯視等專科範疇。
          </p>
          <p>
            各中心嚴格遵守香港及國際醫療技術及操作規範，設有符合國際標準的無菌手術室，配備先進尖端的眼科醫療儀器，並秉持「度身訂造」的原則，由眼科專科醫生根據患者的眼睛狀況及個人需要制定合適的檢查及治療方案。
          </p>
        </div>
        <div class="about-video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/DGqcAToyn-Y?rel=0"
            title="【香港希瑪眼科】C-MER品牌介紹｜專業眼科服務及真實客戶分享治療體驗"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="yt-iframe"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.wrapper {
  padding-left: 12px;
  padding-right: 12px;
  margin-left: auto;
  margin-right: auto;
  max-width: 72rem;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.title-normal {
  font-size: 24px;
  font-weight: 500;
  color: #4e86db;
  letter-spacing: 0.1em;
  text-align: center;
}

.intro-normal {
  font-size: 14px;
  color: #656565;
  font-weight: 300;
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 1.6;
}

.intro-br {
  display: none;
}

/* ===== Banner ===== */
.banner {
  margin-bottom: 0.5rem;
  min-height: 220px;
  background: url('https://statichk.cmermedical.com/newopd/about/rating/reviews-banner-mb-v1.webp')
    no-repeat center / cover;
}

.banner-title {
  font-size: 30px;
  color: #4e86db;
  font-weight: 500;
  letter-spacing: 0.3em;
  padding-top: 88px;
  padding-left: 16px;
}

/* ===== Info ===== */
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.25rem;
}

.info-cover {
  width: 90%;
  max-width: 20rem;
  margin: 0 auto;
  height: auto;
}

.info-text {
  flex: 1;
  text-align: center;
  color: #656565;
  font-size: 0.875rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  line-height: 1.8;

  p + p {
    margin-top: 1rem;
  }

  strong {
    color: #ed8936;
    font-weight: 700;
  }
}

/* ===== Video ===== */
.video {
  margin-bottom: 1.25rem;
  padding-top: 1rem;
  padding-bottom: 2.25rem;
  background: url('https://statichk.cmermedical.com/newopd/about/rating/reviews-video-bg-mb.webp')
    no-repeat center / cover;
}

.video .title-normal {
  margin-bottom: 0.75rem;
}

.video .intro-normal {
  margin-bottom: 1.5rem;
}

.video-main {
  position: relative;
}

.video-swiper {
  overflow: hidden;
}

.yt-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  background: #000;
}

.yt-iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  line-height: 0;

  img {
    display: block;
    width: 1rem;
    height: auto;
  }
}

.nav-desktop {
  display: none;
}

.video-prev,
.thumb-prev,
.media-prev,
.fb-prev,
.gg-prev {
  left: 0;
}

.video-next,
.thumb-next,
.media-next,
.fb-next,
.gg-next {
  right: 0;
}

.thumb-wrap {
  position: relative;
  margin-top: 1.25rem;
  padding: 0 1.75rem;
}

.thumb-swiper {
  overflow: hidden;
}

.thumb-img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 6px;
  display: block;
}

:deep(.thumb-swiper .swiper-slide) {
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.25s;
}

:deep(.thumb-swiper .swiper-slide-thumb-active),
:deep(.thumb-swiper .swiper-slide-active) {
  opacity: 1;
}

/* ===== Facebook / Google ===== */
.facebook,
.google {
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 2.25rem;
}

.review-wrap {
  position: relative;
  width: 100%;
  margin: 0 auto;
  border-radius: 16px;
  padding: 12px 8px 28px;
}

.facebook-wrap {
  background-color: #effbff;
}

.google-wrap {
  background-color: #fffbf0;
}

.review-head {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 1.25rem;
}

.review-icon {
  width: 2.25rem;
  height: 2.25rem;
}

.review-main {
  position: relative;
}

.facebook-swiper,
.google-swiper {
  padding-bottom: 28px;
  width: calc(100% - 40px);
  margin: 0 auto;
  overflow: hidden;
}

.facebook-swiper {
  height: 448px;
}

.google-swiper {
  height: 540px;
}

:deep(.facebook-swiper .swiper-slide),
:deep(.google-swiper .swiper-slide) {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  height: auto !important;
}

.review-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.review-pagination {
  text-align: center;
  position: absolute;
  bottom: -12px !important;
  left: 0;
  right: 0;
  width: 100%;
}

:deep(.facebook-pagination .swiper-pagination-bullet-active),
:deep(.google-pagination .swiper-pagination-bullet-active) {
  background-color: #4e86db;
}

/* ===== About ===== */
.about {
  padding: 24px 12px 140px;
  background: url('https://statichk.cmermedical.com/newopd/about/rating/reviews-about-bg-mb.webp')
    no-repeat center / cover;
}

.about-main {
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 19.8px -8px #77c4ff;
  padding: 1.25rem 12px;
}

.about-title {
  letter-spacing: 0.5em;
  margin-bottom: 0.75rem;
}

.about-text {
  text-align: left;
  margin-bottom: 1rem;

  p + p {
    margin-top: 0.75rem;
  }
}

.about-video {
  position: relative;
  width: 75%;
  max-width: 36rem;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  background: #000;
}

/* ===== ≥768px ===== */
@media (min-width: 768px) {
  .banner {
    min-height: 352px;
    background: url('https://statichk.cmermedical.com/newopd/about/rating/reviews-banner-pc-v1.webp')
      no-repeat center / cover;
    margin-bottom: 2.5rem;
  }

  .banner-title {
    font-size: 64px;
    padding-top: 92px;
    padding-left: max(48px, calc((100vw - 1536px) / 2 + 10%));
    width: fit-content;
    text-align: center;
  }

  .info {
    flex-direction: row;
    gap: 2.5rem;
    margin-bottom: 5rem;
  }

  .info-cover {
    order: 2;
    max-width: 36rem;
    width: 40%;
  }

  .info-text {
    order: 1;
    text-align: justify;
    font-size: 1.5rem;

    p + p {
      margin-top: 1.5rem;
    }
  }
}

/* ===== ≥1024px ===== */
@media (min-width: 1024px) {
  .title-normal {
    font-size: 46px;
  }

  .intro-normal {
    font-size: 24px;
    line-height: 1.5;
  }

  .intro-br {
    display: block;
  }

  .video {
    margin-bottom: 1.75rem;
    padding-bottom: 5rem;
    background: url('https://statichk.cmermedical.com/newopd/about/rating/reviews-video-bg-pc.webp')
      no-repeat center / cover;
  }

  .video .title-normal {
    margin-bottom: 1.75rem;
  }

  .video .intro-normal {
    margin-bottom: 2.5rem;
  }

  .video-swiper {
    width: calc(100% - 160px);
    margin: 0 auto;
  }

  .nav-desktop {
    display: block;
  }

  .nav-desktop .nav-btn img {
    width: 3rem;
  }

  .thumb-wrap {
    display: none;
  }

  .facebook,
  .google {
    margin-bottom: 3.25rem;
  }

  .review-wrap {
    border-radius: 36px;
    padding: 1.75rem 1.25rem 5rem;
  }

  .review-head {
    gap: 12px;
    margin-bottom: 1.75rem;
  }

  .review-icon {
    width: 4.5rem;
    height: 4.5rem;
  }

  .facebook-swiper,
  .google-swiper {
    width: calc(100% - 160px);
  }

  .facebook-swiper {
    height: 320px;
  }

  .google-swiper {
    height: 380px;
  }

  .facebook-swiper,
  .google-swiper {
    padding-bottom: 20px;
  }

  .review-pagination {
    bottom: -40px !important;
  }

  :deep(.facebook-pagination .swiper-pagination-bullet),
  :deep(.google-pagination .swiper-pagination-bullet) {
    width: 16px;
    height: 16px;
    margin: 0 12px !important;
  }

  .nav-btn img {
    width: 3rem;
  }

  .about {
    padding: 40px 12px 80px;
    background: url('https://statichk.cmermedical.com/newopd/about/rating/reviews-about-bg-pc.webp')
      no-repeat center / cover;
  }

  .about-main {
    border-radius: 48px;
    box-shadow: 0 4px 22.8px 8px #77c4ff;
    padding: 1.25rem 3rem 3rem;
  }

  .about-title {
    font-weight: 700;
    margin-bottom: 1.25rem;
  }

  .about-text {
    margin-bottom: 2.5rem;

    p + p {
      margin-top: 1.5rem;
    }
  }
}
</style>
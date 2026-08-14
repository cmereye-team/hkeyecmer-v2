<script lang="ts" setup>
import { Pagination, Autoplay } from 'swiper'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
//  import { useWindowSize } from '@vueuse/core'
//  const { width } = useWindowSize()
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: t('tdk.index.title'),
  meta() {
    return [
      {
        name: 'keywords',
        content: t('tdk.index.key'),
      },
      {
        name: 'description',
        content: t('tdk.index.desc'),
      },
    ]
  },
}))
const locale = useState<string>('locale.setting')
// 跳转Whatsapp
const goWhatsApp = () => {
  window.open(
    'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2',
    '_blank'
  )
}

const homeBannerLists = [
  {
    pc_hk_img:
      'https://statichk.cmermedical.com/imgs/2024/06/c21309fb1746b2ed.webp',
    mb_hk_img:
      'https://statichk.cmermedical.com/imgs/2024/06/b75132e9db62f42f.webp',
    pc_en_img: '',
    mb_en_img: '',
    link: '/medical-team',
    img_alt: '袁文傑護眼大使',
    img_title: '袁文傑護眼大使',
  },
  {
    pc_hk_img:
      'https://statichk.cmermedical.com/imgs/2024/08/90138811a647e874.png',
    mb_hk_img:
      'https://statichk.cmermedical.com/imgs/2024/08/a1df47719f25d671.png',
    pc_en_img: '',
    mb_en_img: '',
    link: '/about-us',
    img_alt: '香港上市公司10間眼科診所',
    img_title: '香港上市公司10間眼科診所',
  },
  {
    pc_hk_img:
      'https://statichk.cmermedical.com/imgs/2024/06/e5c3faed23c63db2.webp',
    mb_hk_img:
      'https://statichk.cmermedical.com/imgs/2024/06/723daa4d6700dba9.webp',
    pc_en_img: '',
    mb_en_img: '',
    link: '/medical-service',
    img_alt: '九大眼科醫療服務',
    img_title: '九大眼科醫療服務',
  },
  {
    pc_hk_img:
      'https://statichk.cmermedical.com/imgs/2024/06/2679a29efe1ee93f.webp',
    mb_hk_img:
      'https://statichk.cmermedical.com/imgs/2024/06/2011288656773946.webp',
    pc_en_img: '',
    mb_en_img: '',
    link: '/about-us#corporate',
    img_alt: '以人爲本以可人為中心',
    img_title: '以人爲本以可人為中心',
  },
  {
    pc_hk_img:
      'https://statichk.cmermedical.com/imgs/2024/06/d68f277d4f9430ab.webp',
    mb_hk_img:
      'https://statichk.cmermedical.com/imgs/2024/06/55dbd4799f65bd88.webp',
    pc_en_img: '',
    mb_en_img: '',
    link: '/about-us#medicalEquipment',
    img_alt: '國際認可先進眼科醫療技術',
    img_title: '國際認可先進眼科醫療技術',
  },
  {
    pc_hk_img:
      'https://statichk.cmermedical.com/imgs/2024/06/742c10d7f1f29fc4.webp',
    mb_hk_img:
      'https://statichk.cmermedical.com/imgs/2024/06/223bb8126133c307.webp',
    pc_en_img: '',
    mb_en_img: '',
    link: '/medical-service',
    img_alt: '全心全意守護每雙眼睛',
    img_title: '全心全意守護每雙眼睛',
  },
]

const bannerConfig: any = ref([])
// let banner_type = ref(1)
const getBanner = async () => {
  try {
    const _res: any = await useFetch(
      `https://hkcmereye.com/api.php/cms/slide/gid/4`,
      {
        method: 'post',
      }
    )
    let res = JSON.parse(_res.data.value) || null
    if (res) {
      let _data = res.data
      bannerConfig.value = _data.map((item: any) => {
        return {
          pc_hk_img:
            (item.pic.indexOf('/static/upload/') !== -1
              ? `https://hkcmereye.com${item.pic}`
              : item.pic) || '',
          mb_hk_img:
            (item.mpic.indexOf('/static/upload/') !== -1
              ? `https://hkcmereye.com${item.mpic}`
              : item.mpic) || '',
          // pc_hk_img:`https://hkcmereye.com${item.pic}`,
          // mb_hk_img:`https://hkcmereye.com${item.mpic}`,
          link: item.link || '',
          img_title: item.title || '',
          img_alt: item.subtitle === '' ? item.title : item.subtitle,
          img_entitle: item.entitle || '',
          img_enalt: item.ensubtitle === '' ? item.entitle : item.ensubtitle,
        }
      })
    }
  } catch (e) {
    console.log(e)
  }
}

onMounted(() => {
  // banner_type.value = width.value>768?1:2
  setTimeout(() => {
    getBanner()
  }, 0)
  gsap.registerPlugin(ScrollTrigger)
  gsap.from('.homePage-pageNav', {
    opacity: 0,
    y: 50,
    duration: 1,
  })

  for (var a = 0; a < 9; a++) {
    gsap.from(`.cmer-fadeIn-${a}`, {
      scrollTrigger: `.cmer-fadeIn-${a}`,
      opacity: 0,
      x: a >= 3 && a < 6 ? 100 : -100,
      duration: 2,
      delay: 0.5,
    })
  }
  gsap.from('.cmer-bounceIn', {
    scrollTrigger: '.cmer-bounceIn',
    opacity: 0,
    scale: 0,
    duration: 1,
    delay: 2.5,
  })
  for (var i = 1; i <= 3; i++) {
    gsap.from(`.cmer-fadeInLeft-${i}`, {
      scrollTrigger: `.cmer-fadeInLeft-${i}`,
      opacity: 0,
      x: -50,
      duration: 2,
      delay: 0.5,
    })
  }
  for (var j = 1; j <= 3; j++) {
    gsap.from(`.cmer-fadeInRight-${j}`, {
      scrollTrigger: `.cmer-fadeInRight-${j}`,
      opacity: 0,
      x: 50,
      duration: 2,
      delay: 0.5,
    })
  }
  for (var k = 1; k <= 12; k++) {
    gsap.from(`.cmer-fadeInUp-${k}`, {
      scrollTrigger: `.cmer-fadeInUp-${k}`,
      opacity: 0,
      y: 50,
      duration: 2,
      delay: 0.5,
    })
  }
})
// 拨打电话
const callTel = () => {
  location.href = 'tel: +852 3956 2025'
}

const toLink = (a: string) => {
  location.href = a
}

const serviceLists = [
  {
    i: '01',
    imgUrl:
      'https://statichk.cmermedical.com/imgs/hkcmereye-newstyle/service/ser1.png',
    des: 'pages.medical_service.cataract.cataract_title',
    link: '/medical-service/cataract',
    alt: t('pages.serviceLists.item_alt1'),
    title: t('pages.serviceLists.item_title1'),
  },
  {
    i: '02',
    imgUrl:
      'https://statichk.cmermedical.com/imgs/hkcmereye-newstyle/service/ser6.png',
    des: 'pages.medical_service.maculopathy',
    link: '/medical-service/maculopathy',
    alt: t('pages.serviceLists.item_alt2'),
    title: t('pages.serviceLists.item_title2'),
  },
  {
    i: '04',
    imgUrl:
      'https://statichk.cmermedical.com/imgs/hkcmereye-newstyle/service/ser9.png',
    des: 'pages.medical_service.amotioRetinae',
    link: '/medical-service/amotioRetinae',
    alt: t('pages.serviceLists.item_alt3'),
    title: t('pages.serviceLists.item_title3'),
  },
  {
    i: '05',
    imgUrl:
      'https://statichk.cmermedical.com/imgs/hkcmereye-newstyle/service/ser2.png',
    des: 'pages.medical_service.glaucoma',
    link: '/medical-service/glaucoma',
    alt: t('pages.serviceLists.item_alt4'),
    title: t('pages.serviceLists.item_title4'),
  },
  {
    i: '08',
    imgUrl:
      'https://statichk.cmermedical.com/imgs/hkcmereye-newstyle/service/ser8.png',
    des: 'pages.medical_service.ocularSurfaceDiseases',
    link: '/medical-service/ocularSurfaceDiseases',
    alt: t('pages.serviceLists.item_alt5'),
    title: t('pages.serviceLists.item_title5'),
  },
  {
    i: '09',
    imgUrl:
      'https://statichk.cmermedical.com/imgs/hkcmereye-newstyle/service/ser7.png',
    des: 'pages.medical_service.strabismusAmblyopia',
    link: '/medical-service/strabismusAmblyopia',
    alt: t('pages.serviceLists.item_alt6'),
    title: t('pages.serviceLists.item_title6'),
  },
  {
    i: '11',
    imgUrl:
      'https://statichk.cmermedical.com/imgs/hkcmereye-newstyle/service/ser10.png',
    des: 'pages.medical_service.eyeOrthopaedicDisease',
    link: '/medical-service/eyeOrthopaedicDisease',
    alt: t('pages.serviceLists.item_alt7'),
    title: t('pages.serviceLists.item_title7'),
  },
  {
    i: '12',
    imgUrl:
      'https://statichk.cmermedical.com/imgs/hkcmereye-newstyle/service/ser11.png',
    des: 'pages.medical_service.medicalOptometry',
    link: '/medical-service/medicalOptometry',

    alt: t('pages.serviceLists.item_alt8'),
    title: t('pages.serviceLists.item_title8'),
  },
  {
    i: '13',
    imgUrl:
      'https://statichk.cmermedical.com/imgs/hkcmereye-newstyle/service/ser12.png',
    des: 'pages.medical_service.smileHk',
    link: 'https://smile.hkcmereye.com/',
    alt: t('pages.serviceLists.item_alt9'),
    title: t('pages.serviceLists.item_title9'),
  },
]
const pageNav = ref([
  {
    name: 'pages.process_cost.process_cost',
    link: '/process-and-cost',
  },
  {
    name: 'pages.medical_team.medical_team',
    link: '/medical-team',
  },
  {
    name: 'pages.about_us.about_us',
    link: '/about-us',
  },
  {
    name: 'pages.contact_us.contact_us',
    link: '/contact-us',
  },
])
</script>

<template>
  <div class="homePage">
    <CommonNotice text="由於目前網絡系統正進行緊急維護，我們的 WhatsApp 訊息接收可能會出現延遲或暫時無法連線的情況。建議閣下改用電話查詢、線上對話功能、官方社交平台Inbox或電子預約表格聯絡我們。如有不便之處，敬請見諒。" />
    <div class="mbHomeSwiper">
      <swiper
        :loop="true"
        :slides-per-view="1"
        :autoplay="{ delay: 3000 }"
        :pagination="{ clickable: true }"
        :modules="[Pagination, Autoplay]"
      >
        <swiper-slide
          class="slideBox"
          v-for="(swiperItem, swiperIndex) in bannerConfig"
          :key="swiperIndex"
        >
          <nuxt-link :to="swiperItem.link">
            <img
              :srcset="`${swiperItem.mb_hk_img} 768w,${swiperItem.pc_hk_img}`"
              :src="swiperItem.mb_hk_img"
              :title="
                locale === 'en' ? swiperItem.img_enalt : swiperItem.img_alt
              "
              :alt="
                locale === 'en' ? swiperItem.img_entitle : swiperItem.img_title
              "
            />
          </nuxt-link>
        </swiper-slide>
      </swiper>
    </div>
    <div class="home-mbContent">
      <!-- <div class="home-mbContent-banner"> -->
      <!-- <img src="https://statichk.cmermedical.com/imgs/2024/03/c0416b68d7049a83.png" alt=""> -->
      <!-- <video autoplay loop muted playsinline x5-playsinline="true" webkit-playsinline="true"
        src="https://statichk.cmermedical.com/static/loffee/video/eyecenter_web_v2.mp4" poster="https://statichk.cmermedical.com/imgs/2024/01/c765e1d6022ddd41.jpg">
         </video>
         <div class="text">
           <span>Professional</span>
           <span>Clinical</span>
           <span>Service</span>
         </div> -->
      <!-- </div> -->
      <div class="homePage-pageNav">
        <nuxt-link
          :to="navItem.link"
          class="homePage-pageNav-in"
          v-for="(navItem, navIndex) in pageNav"
          :key="navIndex"
        >
          <span>{{ $t(navItem.name) }}</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
            >
              <circle cx="9.97073" cy="9.46756" r="9.40835" fill="#2958A3" />
              <path
                d="M4.93054 8.9696C4.65548 8.9696 4.43249 9.19259 4.43249 9.46765C4.43249 9.74272 4.65548 9.9657 4.93054 9.9657V8.9696ZM14.3551 9.81983C14.5496 9.62533 14.5496 9.30998 14.3551 9.11548L11.1855 5.94591C10.991 5.75141 10.6756 5.75141 10.4811 5.94591C10.2866 6.14041 10.2866 6.45575 10.4811 6.65026L13.2985 9.46765L10.4811 12.285C10.2866 12.4795 10.2866 12.7949 10.4811 12.9894C10.6756 13.1839 10.991 13.1839 11.1855 12.9894L14.3551 9.81983ZM4.93054 9.9657H14.0029V8.9696H4.93054V9.9657Z"
                fill="white"
              />
            </svg>
          </span>
        </nuxt-link>
      </div>
      <div class="home-mbContent-nav">
        <div class="home-mbContent-nav-title">
          <!-- 醫療服務 -->
          {{ $t('pages.index.contentnav.title') }}
        </div>
        <!-- <div class="home-mbContent-nav-context"> -->
        <!-- 點擊以下圖示，了解更多醫療資訊 -->
        <!-- {{$t("pages.index.contentnav.context")}} -->
        <!-- </div> -->
        <div class="home-mbContent-nav-content">
          <a
            :href="service.link"
            v-for="(service, index) in serviceLists"
            :key="index"
            :class="`cmer-fadeIn-${index}`"
          >
            <img
              :src="service.imgUrl"
              :alt="service.alt"
              :title="service.title"
            />
            <span>{{ $t(service.des) }}</span>
          </a>
        </div>
      </div>
      <div
        class="home-mbContent-box"
        :class="{ 'home-mbContent-box-en': locale === 'en' }"
      >
        <div class="partTwo">
          <div class="partTwo-in">
            <div class="partTwo-in-image">
              <img
                src="https://statichk.cmermedical.com/opd/imgs/r8d5z0m2nq1x.jpg"
                :title="
                  locale === 'en'
                    ? 'Cmer Eye Center-Hong Kong Ophthalmology Clinic'
                    : '希瑪眼科中心_上市眼科中心'
                "
                :alt="
                  locale === 'en'
                    ? 'Reception area of Cmer Eye Center | Hong Kong Leading Ophthalmology Clinic'
                    : '希瑪眼科中心_上市眼科中心'
                "
                class="cmer-fadeInLeft-1"
              />
            </div>
            <div class="partTwo-in-text">
              <div class="cmer-fadeInUp-1">
                {{ $t('pages.index.contentBox.s1_1') }}
              </div>
              <div class="cmer-fadeInUp-2">
                {{ $t('pages.index.contentBox.s1_2') }}
              </div>
            </div>
          </div>
          <div class="partTwo-in">
            <div class="partTwo-in-image">
              <img
                src="https://statichk.cmermedical.com/opd/imgs/q3f9a7k2.webp"
                :title="
                  locale === 'en'
                    ? 'Experienced Ophthalmologists-Cmer Eye Center'
                    : '希瑪眼科中心_眼科醫生團隊'
                "
                :alt="
                  locale === 'en'
                    ? 'Cmer Eye Center Ophthalmologists explaining eye anatomy to a patient using a model'
                    : '希瑪眼科中心_眼科醫生團隊'
                "
                class="cmer-fadeInRight-1"
              />
            </div>
            <div class="partTwo-in-text">
              <div class="cmer-fadeInUp-3">
                {{ $t('pages.index.contentBox.s2_1') }}
              </div>
              <div class="cmer-fadeInUp-4">
                {{ $t('pages.index.contentBox.s2_2') }}
              </div>
            </div>
          </div>
          <div class="partTwo-in">
            <div class="partTwo-in-image">
              <img
                src="https://statichk.cmermedical.com/imgs/2023/11/10e2463581fde672.png"
                title="希瑪眼科中心_眼科診所"
                alt="希瑪眼科中心_眼科診所"
                class="cmer-fadeInLeft-2"
              />
              <img
                src="https://statichk.cmermedical.com/imgs/2023/11/b1571356e3fdc9b3.png"
                :title="
                  locale === 'en'
                    ? 'Cmer Eye Center Locations-Hong Kong'
                    : '希瑪眼科中心_眼科診所'
                "
                :alt="
                  locale === 'en'
                    ? 'Map displaying the multiple convenient locations of Cmer Eye Center across Hong Kong'
                    : '希瑪眼科中心_眼科診所'
                "
                class="cmer-bounceIn"
              />
            </div>
            <div class="partTwo-in-text">
              <div class="cmer-fadeInUp-5" data-wow-delay="1s">
                {{ $t('pages.index.contentBox.s3_1') }}
              </div>
              <div class="cmer-fadeInUp-6" data-wow-delay="1s">
                {{ $t('pages.index.contentBox.s3_2') }}
              </div>
            </div>
          </div>
          <div class="partTwo-in">
            <div class="partTwo-in-image">
              <img
                src="https://statichk.cmermedical.com/imgs/2023/11/d5832f9c20130912.jpg"
                :title="
                  locale === 'en'
                    ? 'Eye Care Customer Service-Cmer Eye Center'
                    : '希瑪眼科中心_眼科診所推薦'
                "
                :alt="
                  locale === 'en'
                    ? 'Cmer Eye Center representatives providing friendly eye care customer service'
                    : '希瑪眼科中心_眼科診所推薦'
                "
                class="cmer-fadeInRight-2"
                data-wow-delay=".5s"
              />
            </div>
            <div class="partTwo-in-text">
              <div class="cmer-fadeInUp-7" data-wow-delay="1s">
                {{ $t('pages.index.contentBox.s4_1') }}
              </div>
              <div class="cmer-fadeInUp-8" data-wow-delay="1s">
                {{ $t('pages.index.contentBox.s4_2') }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="rating bg-[#8ad8dd] pt-5 lg:pt-12">
        <h2 class="rating-title text-center text-white text-xl lg:text-3xl font-bold">客戶評價</h2>
        <div class="person_box">
          <PageUserRatings />
        </div>
      </section>
      <div
        class="home-mbContent-box"
        :class="{ 'home-mbContent-box-en': locale === 'en' }"
      >
        <div>
          <div class="indexContext_1">
            <div class="indexContext_1-image cmer-fadeInRight-3">
              <img
                src="https://statichk.cmermedical.com/imgs/2023/11/d9ed93444cd110d2.jpg"
                :title="
                  locale === 'en'
                    ? 'Advanced Eye Exam Technology-Cmer Eye Center'
                    : '希瑪眼科中心_國際醫療技術'
                "
                :alt="
                  locale === 'en'
                    ? 'Close-up of advanced eye exam technology used at Cmer Eye Center'
                    : '希瑪眼科中心_國際醫療技術'
                "
              />
            </div>
            <div class="indexContext_1-text cmer-fadeInUp-9">
              <h2>
                {{ $t('pages.index.contentBox.h2_1') }}
              </h2>
              <p>
                {{ $t('pages.index.contentBox.p1') }}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="indexContext_2">
            <div class="indexContext_2-image cmer-fadeInLeft-3">
              <img
                src="https://statichk.cmermedical.com/imgs/2023/11/f82b7514325c896f.jpg"
                :title="
                  locale === 'en'
                    ? 'Hong Kong Cmer Eye Care Holdings Limited'
                    : '香港希瑪國際眼科醫療集團'
                "
                :alt="
                  locale === 'en'
                    ? 'Spectacular view of the Hong Kong skyline'
                    : '香港希瑪國際眼科醫療集團'
                "
              />
            </div>
            <div class="indexContext_2-text">
              <h2 class="cmer-fadeInUp">
                {{ $t('pages.index.contentBox.h2_2') }}
              </h2>
              <p class="cmer-fadeInUp">
                {{ $t('pages.index.contentBox.p2') }}
              </p>
              <div class="indexContext_2-text-in cmer-fadeInUp-10">
                <div>
                  <!-- prettier-ignore -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="67" viewBox="0 0 70 67" fill="none"><mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="70" height="67" fill="#000"><path fill="#fff" d="M0 0h70v67H0z"/><path d="M54.389 37.73v-.27l5.166-3.708c.54-.386.733-1.12.463-1.738l-2.583-5.792 2.583-5.792a1.44 1.44 0 0 0-.462-1.738l-5.128-3.707-.656-6.333A1.474 1.474 0 0 0 52.5 7.377l-6.323-.656-3.702-5.136a1.43 1.43 0 0 0-1.735-.464L34.957 3.71l-5.784-2.59a1.43 1.43 0 0 0-1.735.464L23.737 6.72l-6.323.656a1.474 1.474 0 0 0-1.273 1.275l-.655 6.333-5.128 3.707a1.44 1.44 0 0 0-.463 1.738l2.584 5.792-2.584 5.792a1.44 1.44 0 0 0 .463 1.738l5.128 3.707v.27L1.413 51.864a1.48 1.48 0 0 0-.347 1.468c.193.502.617.888 1.157.965l9.484 1.159 1.157 9.46c.077.541.424 1.005.964 1.16.154.038.309.076.463.076a1.4 1.4 0 0 0 1.002-.424L30.176 50.82l4.82-2.163 4.819 2.163 14.882 14.906a1.4 1.4 0 0 0 1.003.424c.154 0 .308 0 .463-.077.5-.193.886-.618.963-1.158l1.157-9.461 9.485-1.159c.54-.077 1.002-.425 1.157-.965.192-.502.038-1.082-.347-1.468L54.466 37.73zM15.332 61.672l-.926-7.685a1.395 1.395 0 0 0-1.233-1.235L5.5 51.825l10.41-10.427.232 2.394a1.474 1.474 0 0 0 1.272 1.275l6.323.656 3.162 4.403L15.332 61.71zm20.203-15.833s-.385-.116-.578-.116q-.29 0-.579.116l-5.32 2.394-3.432-4.71a1.36 1.36 0 0 0-1.002-.58l-5.784-.58-.578-5.792a1.5 1.5 0 0 0-.578-1.004L12.98 32.13l2.39-5.329a1.5 1.5 0 0 0 0-1.158l-2.39-5.33 4.704-3.436c.347-.232.54-.618.578-1.004l.578-5.793 5.784-.579c.385-.039.77-.27 1.002-.58l3.432-4.71 5.32 2.394a1.5 1.5 0 0 0 1.157 0l5.32-2.394 3.432 4.71c.232.348.617.541 1.003.58l5.783.58.578 5.792c.04.386.27.772.579 1.004l4.704 3.437-2.39 5.329a1.5 1.5 0 0 0 0 1.158l2.39 5.33-4.704 3.436c-.347.232-.54.618-.578 1.004l-.579 5.793-5.783.579c-.386.039-.771.27-1.003.58l-3.431 4.71zm21.244 6.913a1.395 1.395 0 0 0-1.233 1.235l-.926 7.685-11.566-11.585 3.161-4.402 6.323-.657a1.474 1.474 0 0 0 1.273-1.274l.231-2.394 10.41 10.426-7.673.927z"/></mask><path d="M54.389 37.73v-.27l5.166-3.708c.54-.386.733-1.12.463-1.738l-2.583-5.792 2.583-5.792a1.44 1.44 0 0 0-.462-1.738l-5.128-3.707-.656-6.333A1.474 1.474 0 0 0 52.5 7.377l-6.323-.656-3.702-5.136a1.43 1.43 0 0 0-1.735-.464L34.957 3.71l-5.784-2.59a1.43 1.43 0 0 0-1.735.464L23.737 6.72l-6.323.656a1.474 1.474 0 0 0-1.273 1.275l-.655 6.333-5.128 3.707a1.44 1.44 0 0 0-.463 1.738l2.584 5.792-2.584 5.792a1.44 1.44 0 0 0 .463 1.738l5.128 3.707v.27L1.413 51.864a1.48 1.48 0 0 0-.347 1.468c.193.502.617.888 1.157.965l9.484 1.159 1.157 9.46c.077.541.424 1.005.964 1.16.154.038.309.076.463.076a1.4 1.4 0 0 0 1.002-.424L30.176 50.82l4.82-2.163 4.819 2.163 14.882 14.906a1.4 1.4 0 0 0 1.003.424c.154 0 .308 0 .463-.077.5-.193.886-.618.963-1.158l1.157-9.461 9.485-1.159c.54-.077 1.002-.425 1.157-.965.192-.502.038-1.082-.347-1.468L54.466 37.73zM15.332 61.672l-.926-7.685a1.395 1.395 0 0 0-1.233-1.235L5.5 51.825l10.41-10.427.232 2.394a1.474 1.474 0 0 0 1.272 1.275l6.323.656 3.162 4.403L15.332 61.71zm20.203-15.833s-.385-.116-.578-.116q-.29 0-.579.116l-5.32 2.394-3.432-4.71a1.36 1.36 0 0 0-1.002-.58l-5.784-.58-.578-5.792a1.5 1.5 0 0 0-.578-1.004L12.98 32.13l2.39-5.329a1.5 1.5 0 0 0 0-1.158l-2.39-5.33 4.704-3.436c.347-.232.54-.618.578-1.004l.578-5.793 5.784-.579c.385-.039.77-.27 1.002-.58l3.432-4.71 5.32 2.394a1.5 1.5 0 0 0 1.157 0l5.32-2.394 3.432 4.71c.232.348.617.541 1.003.58l5.783.58.578 5.792c.04.386.27.772.579 1.004l4.704 3.437-2.39 5.329a1.5 1.5 0 0 0 0 1.158l2.39 5.33-4.704 3.436c-.347.232-.54.618-.578 1.004l-.579 5.793-5.783.579c-.386.039-.771.27-1.003.58l-3.431 4.71zm21.244 6.913a1.395 1.395 0 0 0-1.233 1.235l-.926 7.685-11.566-11.585 3.161-4.402 6.323-.657a1.474 1.474 0 0 0 1.273-1.274l.231-2.394 10.41 10.426-7.673.927z" fill="#8ad8dd"/><path d="M54.389 37.73v-.27l5.166-3.708c.54-.386.733-1.12.463-1.738l-2.583-5.792 2.583-5.792a1.44 1.44 0 0 0-.462-1.738l-5.128-3.707-.656-6.333A1.474 1.474 0 0 0 52.5 7.377l-6.323-.656-3.702-5.136a1.43 1.43 0 0 0-1.735-.464L34.957 3.71l-5.784-2.59a1.43 1.43 0 0 0-1.735.464L23.737 6.72l-6.323.656a1.474 1.474 0 0 0-1.273 1.275l-.655 6.333-5.128 3.707a1.44 1.44 0 0 0-.463 1.738l2.584 5.792-2.584 5.792a1.44 1.44 0 0 0 .463 1.738l5.128 3.707v.27L1.413 51.864a1.48 1.48 0 0 0-.347 1.468c.193.502.617.888 1.157.965l9.484 1.159 1.157 9.46c.077.541.424 1.005.964 1.16.154.038.309.076.463.076a1.4 1.4 0 0 0 1.002-.424L30.176 50.82l4.82-2.163 4.819 2.163 14.882 14.906a1.4 1.4 0 0 0 1.003.424c.154 0 .308 0 .463-.077.5-.193.886-.618.963-1.158l1.157-9.461 9.485-1.159c.54-.077 1.002-.425 1.157-.965.192-.502.038-1.082-.347-1.468L54.466 37.73zM15.332 61.672l-.926-7.685a1.395 1.395 0 0 0-1.233-1.235L5.5 51.825l10.41-10.427.232 2.394a1.474 1.474 0 0 0 1.272 1.275l6.323.656 3.162 4.403L15.332 61.71zm20.203-15.833s-.385-.116-.578-.116q-.29 0-.579.116l-5.32 2.394-3.432-4.71a1.36 1.36 0 0 0-1.002-.58l-5.784-.58-.578-5.792a1.5 1.5 0 0 0-.578-1.004L12.98 32.13l2.39-5.329a1.5 1.5 0 0 0 0-1.158l-2.39-5.33 4.704-3.436c.347-.232.54-.618.578-1.004l.578-5.793 5.784-.579c.385-.039.77-.27 1.002-.58l3.432-4.71 5.32 2.394a1.5 1.5 0 0 0 1.157 0l5.32-2.394 3.432 4.71c.232.348.617.541 1.003.58l5.783.58.578 5.792c.04.386.27.772.579 1.004l4.704 3.437-2.39 5.329a1.5 1.5 0 0 0 0 1.158l2.39 5.33-4.704 3.436c-.347.232-.54.618-.578 1.004l-.579 5.793-5.783.579c-.386.039-.771.27-1.003.58l-3.431 4.71zm21.244 6.913a1.395 1.395 0 0 0-1.233 1.235l-.926 7.685-11.566-11.585 3.161-4.402 6.323-.657a1.474 1.474 0 0 0 1.273-1.274l.231-2.394 10.41 10.426-7.673.927z" stroke="#8ad8dd" mask="url(#a)"/><path d="M48.47 26.222c0-7.475-6.05-13.534-13.513-13.534-7.464 0-13.513 6.06-13.513 13.534s6.049 13.534 13.513 13.534 13.513-6.06 13.513-13.534ZM34.957 36.398c-5.607 0-10.16-4.56-10.16-10.176s4.553-10.176 10.16-10.176c5.606 0 10.16 4.56 10.16 10.176s-4.554 10.176-10.16 10.176Z" fill="#8ad8dd" stroke="#8ad8dd" stroke-width=".5"/></svg>
                </div>
                <span
                  >{{ $t('pages.index.contentBox.span1_1') }}<br />{{
                    $t('pages.index.contentBox.span1_2')
                  }}</span
                >
              </div>
              <div class="indexContext_2-text-in cmer-fadeInUp-11">
                <div>
                  <!-- prettier-ignore -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="74" viewBox="0 0 52 74" fill="none"><path d="M50.915 18.897a1.65 1.65 0 0 0-1.303-1.113v-.006l-15.358-2.225-6.888-13.948v-.001c-.282-.584-.898-.854-1.479-.854-.58 0-1.197.27-1.477.853v.002l-6.89 13.948-15.358 2.225.036.247-.036-.247c-.634.09-1.12.542-1.337 1.108l-.003.008-.002.008c-.18.587 0 1.247.395 1.686l.005.006.006.005L12.33 31.46 9.696 46.766l-.001.007c-.087.611.13 1.246.678 1.612a1.73 1.73 0 0 0 1.725.133l.01-.005 5.396-2.828c.137 1.927.224 4.834-.09 7.914-.33 3.244-1.103 6.654-2.714 9.31h-4.682a3.315 3.315 0 0 0-3.325 3.33v3.231a3.315 3.315 0 0 0 3.325 3.33h31.7a3.315 3.315 0 0 0 3.326-3.33v-3.23a3.315 3.315 0 0 0-3.325-3.33h-4.682c-1.61-2.655-2.384-6.065-2.715-9.31-.314-3.079-.226-5.986-.09-7.913l5.39 2.824c.242.144.518.184.768.184.352 0 .67-.09.98-.313h.002a1.7 1.7 0 0 0 .67-1.607l-.001-.007-2.635-15.309L50.51 20.6l.002-.002c.44-.44.625-1.07.402-1.7Zm-18.04-.168 12.9 1.866-9.356 9.115-.44.429h.188a1.7 1.7 0 0 0-.162 1.045v.001l2.193 12.886-11.543-6.073c-.242-.144-.518-.184-.768-.184s-.525.04-.767.184L13.577 44.07l2.193-12.886a1.68 1.68 0 0 0-.487-1.473l-.003-.003-9.356-9.114 12.9-1.866.005-.001a1.71 1.71 0 0 0 1.242-.888l.004-.009L25.85 6.12l5.772 11.71c.232.507.73.813 1.248.899zm3.263 47.494h5.56a1 1 0 0 1 .074.052v3.137a1 1 0 0 1-.052.075H10.116a1 1 0 0 1-.075-.052v-3.137a1 1 0 0 1 .052-.075zM20.912 52.11a50 50 0 0 0-.186-8.086l5.161-2.711 5.162 2.711a50 50 0 0 0-.186 8.086c.207 3.476.845 7.414 2.412 10.8H18.5c1.567-3.386 2.205-7.324 2.412-10.8Z" fill="#8ad8dd" stroke="#8ad8dd" stroke-width=".5"/></svg>
                </div>
                <span>{{ $t('pages.index.contentBox.span2') }}</span>
              </div>
              <div class="indexContext_2-text-in cmer-fadeInUp-12">
                <div>
                  <img
                    src="https://statichk.cmermedical.com/imgs/2023/11/7999fef5f2ba4028.png"
                    alt=""
                  />
                </div>
                <span>
                  {{ $t('pages.index.contentBox.span3_1') }}<br />{{
                    $t('pages.index.contentBox.span3_2')
                  }}<br />{{ $t('pages.index.contentBox.span3_3') }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutChildCompsAwards />
    </div>
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
:deep(.ratings-wrapper) {
  padding-top: 40px;
}
@media screen and (max-width: 768px) {
  .homePage {
    width: 100%;
    overflow: hidden;
  }
  .home-bottom {
    display: block;
  }
  .mbHomeSwiper {
    width: 100%;
    // margin-top: 78px;
    display: block;
    .slideBox {
      img {
        width: 100%;
      }
    }
  }
  .home-mbContent {
    display: block;
    margin-top: 20px;
    &-banner {
      display: none;
    }
    &-nav {
      &-title {
        color: #2958a2;
        text-align: center;
        font-size: 21.597px;
        font-style: normal;
        font-weight: 700;
        line-height: 31.127px;
        letter-spacing: 4.535px;
        position: relative;
        padding-bottom: 10px;
        &::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 45px;
          height: 2px;
          background: #2958a2;
        }
      }
      &-context {
        color: #2958a2;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 31.127px; /* 247.043% */
        letter-spacing: 2.646px;
        margin-top: 10px;
      }
      &-content {
        width: 100%;
        max-width: 390px;
        margin: 20px auto;
        padding: 0 18px;
        display: flex;
        flex-wrap: wrap;
        & > a {
          width: calc((100% / 3) - 12px);
          padding: 20px 0 15px;
          margin: 0 6px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          // height: 112px;
          border-radius: 11.419px;
          background: #fafdff;
          box-shadow: 0.84581px 2.11454px 1.69163px 0px rgba(0, 0, 0, 0.1);
          margin-bottom: 36px;
          img {
            max-width: 50%;
          }
          span {
            color: #515151;
            text-align: center;
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: 18.566px; /* 154.717% */
            letter-spacing: 0.6px;
            margin-top: 10px;
          }
        }
      }
    }
    &-box {
      .partTwo {
        width: 100%;
        max-width: 1331px;
        margin: 0 auto;
        overflow: hidden;
      }
      .partTwo-in {
        display: flex;
        align-items: center;
        margin-bottom: 56px;
        position: relative;
      }
      .partTwo-in:nth-of-type(even) {
        flex-direction: row-reverse;
      }
      .partTwo-in:nth-of-type(even) > .partTwo-in-text > div:nth-of-type(1) {
        text-align: left;
      }
      .partTwo-in:nth-of-type(even) > .partTwo-in-image::after {
        left: auto;
        right: -20px;
      }
      .partTwo-in:nth-of-type(even) > .partTwo-in-image {
        display: flex;
        justify-content: flex-end;
      }
      .partTwo-in:nth-of-type(even) > .partTwo-in-text {
        left: 0;
        right: auto;
      }
      .partTwo-in:nth-of-type(3) > .partTwo-in-image {
        position: relative;
      }
      .partTwo-in:nth-of-type(3) > .partTwo-in-image > img:nth-of-type(2) {
        position: absolute;
        width: calc((316 / 390) * 100%);
        height: 100%;
        display: block;
        top: 0;
        left: 0;
      }
      .partTwo-in:nth-of-type(3) > .partTwo-in-image::after {
        display: none;
      }
      .partTwo-in-image {
        max-width: 820px;
        position: relative;
        width: 100%;
      }
      .partTwo-in-image img {
        position: relative;
        z-index: 2;
        width: calc((316 / 390) * 100%);
      }
      .partTwo-in-image::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: -20px;
        width: 75%;
        height: 50%;
        background: #d9d9d9;
        z-index: 1;
      }
      .partTwo-in-text {
        flex: 1;
        max-width: 511px;
        position: absolute;
        z-index: 3;
        right: 0;
        bottom: -16px;
      }
      .partTwo-in-text > div:nth-of-type(1) {
        color: #8ad8dd;
        font-style: normal;
        font-weight: 900;
        letter-spacing: 4.217px;
        text-transform: uppercase;
        font-size: 35px;
        line-height: 30px;
        padding: 0 10px;
        margin-bottom: 10px;
        text-align: right;
        filter: drop-shadow(2px 0 0 #fff) drop-shadow(-2px 0 0 #fff)
          drop-shadow(0 2px 0 #fff) drop-shadow(0 -2px 0 #fff);
      }
      .partTwo-in-text > div:nth-of-type(2) {
        text-align: center;
        color: #fff;
        text-align: center;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 2.4px;
        text-transform: uppercase;
        width: 100%;
        background: #8ad8dd;
        font-size: 16.278px;
        height: 28px;
        line-height: 28px;
        padding: 0 43px;
      }
      .indexContext_1 {
        width: auto;
        display: flex;
        align-items: center;
        padding: 0;
        margin-top: 0px;
        flex-direction: column;
      }

      .indexContext_1-image {
        width: auto;
        padding-right: 2rem;
        order: 1;
        z-index: 1;
        margin-left: 0;
      }

      .indexContext_1-image img {
        width: 100%;
      }

      .indexContext_1-text {
        width: 100%;
        order: 2;
        z-index: 2;
        padding: 0 2rem;
      }

      .indexContext_1-text h2 {
        color: #8ad8dd;
        font-family: Metropolis;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 1px;
        margin-top: 1rem;
      }

      .indexContext_1-text p {
        color: #515151;
        text-align: justify;
        font-family: Noto Sans HK;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-top: 10px;
      }

      .indexContext_2 {
        width: auto;
        display: flex;
        // align-items: center;
        align-items: flex-start;
        margin-top: 40px;
        // margin-bottom: 200px;
        padding: 0;
        flex-direction: column;
      }

      .indexContext_2-image {
        width: auto;
        padding-left: 2rem;
      }

      .indexContext_2-image img {
        width: 100%;
      }

      .indexContext_2-text {
        width: 100%;
        margin-left: 0;
        padding: 0 2rem;
      }

      .indexContext_2-text h2 {
        color: #8ad8dd;
        font-family: Metropolis;
        font-size: 20px;
        font-weight: 700;
        line-height: 35px;
        letter-spacing: 1.6px;
        margin-top: 1rem;
        text-align: center;
      }

      .indexContext_2-text p {
        color: #515151;
        text-align: justify;
        font-family: Noto Sans HK;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 24.7px;
        letter-spacing: 1.04px;
        text-transform: uppercase;
        margin-top: 10px;
        width: 100%;
      }

      .indexContext_2-text-in {
        margin-left: 0;
        margin-top: 30px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0 1rem;
      }

      .indexContext_2-text-in > div {
        width: 100px;
        min-width: 100px;
        display: flex;
        justify-content: center;
        transform: scale(0.7);
      }

      .indexContext_2-text-in > span {
        text-align: center;
        flex: 1;
        font-weight: 400;
        line-height: 18.176px;
        letter-spacing: 0.969px;
        font-size: 12px;
      }
      &.home-mbContent-box-en {
        .partTwo-in-text > div:nth-of-type(2) {
          height: auto;
          padding: 5px 10px;
          line-height: 1.2;
          white-space: pre-wrap;
        }
        .partTwo-in:nth-of-type(1) > .partTwo-in-text {
          bottom: -40px;
        }
        .indexContext_1-text {
          padding: 0;
        }
        .indexContext_1-text h2 {
          text-align: center;
          white-space: pre-wrap;
        }
        .indexContext_1-text p {
          letter-spacing: 0.5px;
          padding: 0 2rem;
        }
        .indexContext_2-text p {
          letter-spacing: 0.9px;
        }
      }
    }
  }
  .homePage-pageNav {
    display: none;
  }
}
@media (min-width: 768px) {
  .mbHomeSwiper {
    // display: none;

    // margin-top: 78px;
    // display: block;
    width: 100%;
    margin: 0 auto;
    .slideBox {
      img {
        width: 100%;
        max-width: 1080px;
        margin: 0 auto;
      }
    }
  }
  .home-mbContent {
    width: 100%;
    // max-width: 1920px;
    // margin: 0 auto;
    &-banner {
      // max-width: 1080px;
      // margin: 0 auto;
      width: 100%;
      position: relative;
      video,
      img {
        width: 100%;
        max-width: 1080px;
        margin: 0 auto;
      }
      .text {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        width: 217px;
        font-family: Metropolis;
        font-size: 24.095px;
        font-style: normal;
        font-weight: 700;
        line-height: 27.558px; /* 114.374% */
        letter-spacing: 2.409px;
        text-transform: uppercase;
        span {
          display: block;
          width: 100%;
          &:not(:last-child) {
            margin-bottom: 10px;
          }
          &:nth-of-type(1) {
            letter-spacing: 2.7px;
          }
          &:nth-of-type(2) {
            letter-spacing: 15px;
          }
          &:nth-of-type(3) {
            letter-spacing: 19.1px;
          }
        }
      }
      &::after {
        content: '';
        background: #ebebeb;
        width: 100%;
        height: calc(290 / 1080 * 100%);
        position: absolute;
        bottom: calc(100 / 1080 * 100%);
        left: 0;
        z-index: -1;
      }
    }
    &-nav {
      margin: 0 auto;
      width: 100%;
      max-width: 1080px;
      &-title {
        color: #515151;
        font-size: 34.692px;
        font-style: normal;
        font-weight: 700;
        line-height: 50px; /* 144.127% */
        letter-spacing: 10.061px;
        margin-bottom: 50px;
        &::after {
          content: '> Medical Services';
          display: block;
          color: #8ad8dd;
          font-family: Metropolis;
          font-size: 16.774px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px; /* 298.077% */
          letter-spacing: 1.677px;
          text-transform: uppercase;
        }
      }
      &-context {
        display: none;
      }
      &-content {
        display: grid;
        grid-template-columns: auto auto auto;
        a {
          width: 100%;
          margin: 0 auto calc(88 / 371 * 100%);
          max-width: 250px;
          border-radius: 27px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #fafdff;
          box-shadow: 2px 5px 4px 0px rgba(0, 0, 0, 0.1);
          padding: 27px 0 19px;
          overflow: hidden;
          position: relative;
          transition: all 0.3s;
          img {
            border-radius: 50%;
            transition: all 0.3s;
          }
          span {
            color: #515151;
            text-align: center;
            font-family: 'Noto Sans HK';
            font-size: 20.56px;
            font-style: normal;
            font-weight: 700;
            line-height: 43.901px; /* 213.526% */
            letter-spacing: 1.028px;
            margin-top: 12px;
            transition: all 0.3s;
          }
          &::before {
            content: '';
            width: 40px;
            height: 130%;
            background: rgba(255, 255, 255, 0.5);
            position: absolute;
            left: -50%;
            top: 50%;
            transition: all 1s;
            transform: translateY(-50%) rotate(30deg);
          }
          &:hover {
            box-shadow: 2px 5px 4px 0px rgba(0, 0, 0, 0),
              1px 5px 4px rgba(81, 81, 81, 0.3) inset;
            img {
              box-shadow: 1px 5px 4px rgba(81, 81, 81, 0.4);
            }
            span {
              text-shadow: 1px 5px 3px rgba(81, 81, 81, 0.5);
            }
            &::before {
              left: 150%;
            }
          }
        }
      }
    }
    &-box {
      max-width: 1920px;
      margin: 0 auto;
      .partTwo {
        width: 100%;
        max-width: 1080px;
        margin: 0 auto;
      }
      .partTwo-in {
        display: flex;
        align-items: center;
        margin-bottom: calc(130 / 1331 * 100%);
        position: relative;
      }
      .partTwo-in:nth-of-type(even) {
        flex-direction: row-reverse;
      }
      .partTwo-in:nth-of-type(even) > .partTwo-in-text > div:nth-of-type(1) {
        text-align: right;
      }
      .partTwo-in:nth-of-type(even) > .partTwo-in-image::after {
        left: auto;
        right: -20px;
      }
      .partTwo-in:nth-of-type(3) > .partTwo-in-image {
        position: relative;
      }
      .partTwo-in:nth-of-type(3) > .partTwo-in-image > img:nth-of-type(2) {
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        top: 0;
        left: 0;
      }
      .partTwo-in:nth-of-type(3) > .partTwo-in-image::after {
        display: none;
      }
      .partTwo-in-image {
        width: auto;
        // max-width: 820px;
        width: calc(820 / 1331 * 100%);
        position: relative;
      }
      .partTwo-in-image img {
        position: relative;
        z-index: 2;
        aspect-ratio: 9 / 4;
        object-fit: cover;
      }
      .partTwo-in-image::after {
        content: '';
        position: absolute;
        bottom: -20px;
        left: -20px;
        width: 75%;
        height: 50%;
        background: #d9d9d9;
        z-index: 1;
      }
      .partTwo-in-text {
        flex: 1;
        max-width: 511px;
      }
      .partTwo-in-text > div:nth-of-type(1) {
        color: #8ad8dd;
        font-family: Noto Sans HK;
        font-size: 70.28px;
        font-style: normal;
        font-weight: 700;
        line-height: 61.651px;
        /* 87.722% */
        letter-spacing: 4.217px;
        text-transform: uppercase;
        margin-bottom: 20px;
        padding: 0 20px;
      }
      .partTwo-in-text > div:nth-of-type(2) {
        text-align: center;
        color: #fff;
        text-align: center;
        font-family: Noto Sans HK;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 67px;
        /* 155% */
        letter-spacing: 2.4px;
        text-transform: uppercase;
        width: 100%;
        height: 67px;
        background: #8ad8dd;
      }
      .indexContext_1 {
        width: auto;
        max-width: 1920px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        // padding: 0 3rem;
      }
      .indexContext_1-image {
        width: 100%;
        order: 2;
        z-index: 1;
        display: flex;
        justify-content: flex-end;
        // margin-left: -10%;
        // padding-left: 30px;
      }
      .indexContext_1-image img {
        width: calc(1146 / 1920 * 100%);
        height: auto;
        margin-right: calc(30 / 1920 * 100%);
      }
      .indexContext_1-text {
        width: 100%;
        order: 1;
        z-index: 2;
        position: absolute;
        max-width: 1080px;
        left: 50%;
        transform: translateX(-50%);
        // padding-left: 3%;
      }
      .indexContext_1-text h2 {
        color: #8ad8dd;
        font-family: Metropolis;
        font-size: 36px;
        font-weight: 700;
        line-height: 65px;
        letter-spacing: 4.8px;
        width: 75%;
      }
      .indexContext_1-text p {
        color: #515151;
        text-align: justify;
        font-family: Noto Sans HK;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 40px;
        letter-spacing: 1.6px;
        text-transform: uppercase;
        // margin-top: 18px;
        width: 75%;
      }
      .indexContext_2 {
        width: auto;
        display: flex;
        align-items: center;
        /* margin-top: 264px; */
        /* margin-bottom: 200px; */
        // padding: 0 3rem;
        max-width: 1920px;
        margin: calc(264 / 1920 * 100%) auto 100px;
        position: relative;
      }
      .indexContext_2-image {
        // width: 70%;
        width: calc(1000 / 1920 * 100%);
        height: auto;
        margin-left: calc(30 / 1920 * 100%);
        z-index: 1;
      }
      .indexContext_2-image img {
        width: 100%;
      }
      .indexContext_2-text {
        width: 100%;
        max-width: 1080px;
        // margin-left: -15%;
        z-index: 2;
        position: absolute;
        // left: calc(1200 / 1920 * 100%);
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
      .indexContext_2-text h2 {
        color: #8ad8dd;
        font-family: Metropolis;
        font-size: 36px;
        font-weight: 700;
        line-height: 1.6;
        letter-spacing: 4.8px;
        width: calc(670 / 1080 * 100%);
      }
      .indexContext_2-text p {
        color: #515151;
        text-align: justify;
        font-family: Noto Sans HK;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 1.6px;
        text-transform: uppercase;
        // margin-top: 18px;
        // width: 75%;
        width: calc(670 / 1080 * 100%);
      }
      .indexContext_2-text-in {
        margin-left: 30%;
        margin-top: calc(56 / 1080 * 100%);
        display: flex;
        align-items: center;
        // width: 45%;
        width: calc(470 / 1080 * 100%);
      }
      .indexContext_2-text-in > div {
        width: 100px;
        min-width: 100px;
        display: flex;
        justify-content: center;
      }
      .indexContext_2-text-in > span {
        text-align: center;
        flex: 1;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 1.6px;
        font-size: 20px;
      }
      &.home-mbContent-box-en {
        .partTwo-in-text > div:nth-of-type(2) {
          height: auto;
          font-size: 34px;
          line-height: 1.2;
          padding: 5px 10px;
          white-space: pre-wrap;
        }
      }
    }
  }
  .homePage-pageNav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 1080px;
    margin: 30px auto calc(83 / 1920 * 100%);
    &-in {
      border: 1px solid #d9d9d9;
      width: calc(314 / 1442 * 100%);
      height: 99px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 calc(20 / 1442 * 100%);
      transition: all 0.3s;
      position: relative;
      span {
        color: #2958a3;
        text-align: center;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 1.2px;
        transition: all 0.3s;
        position: relative;
        z-index: 1;
        &:nth-of-type(2) {
          margin-top: 3px;
        }
      }
      &::before {
        content: '';
        width: 0;
        height: 100%;
        background: #2958a3;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.3s ease-out;
        z-index: 0;
      }
      &:hover {
        span {
          color: #fff;
          svg {
            circle {
              fill: #fff;
            }
            path {
              fill: #2958a3;
            }
          }
        }
        &::before {
          width: 100%;
        }
      }
    }
  }
}
@media screen and (min-width: 820px) and (max-width: 1023px) {
  .home-mbContent-box {
    .indexContext_2 {
      padding-top: 24px;
    }
  }
}
@media screen and (min-width: 1024px) {
  .home-mbContent-box {
    .indexContext_1-text,
    .indexContext_2-text {
      h2 {
        font-size: 48px;
      }
      p {
        margin-top: 18px;
      }
    }
  }
}
</style>

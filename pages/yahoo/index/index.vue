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
  title: t('pages.index.title'),
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

const bannerConfig: any = ref([])
// let banner_type = ref(1)
const getBanner = async () => {
  try {
    const _res: any = await useFetch(
      "https://hkcmereye.com/api.php/cms/slide/gid/4",
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
          link: item.link || '',
          img_title: item.title || '',
          img_alt: item.subtitle === '' ? item.title : item.subtitle,
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
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser1.png',
    des: 'pages.medical_service.cataract.cataract',
    link: '/yahoo/medical-service/cataract',
    alt: '眼科服務_白內障',
  },
  {
    i: '02',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser6.png',
    des: 'pages.medical_service.maculopathy',
    link: '/yahoo/medical-service/maculopathy',
    alt: '眼科服務_黃斑病變',
  },
  {
    i: '04',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser9.png',
    des: 'pages.medical_service.amotioRetinae',
    link: '/yahoo/medical-service/amotioRetinae',
    alt: '眼科服務_視網膜脫落',
  },
  {
    i: '05',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser2.png',
    des: 'pages.medical_service.glaucoma',
    link: '/yahoo/medical-service/glaucoma',
    alt: '眼科服務_青光眼',
  },
  {
    i: '08',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser8.png',
    des: 'pages.medical_service.ocularSurfaceDiseases',
    link: '/yahoo/medical-service/ocularSurfaceDiseases',
    alt: '眼科服務_眼角膜疾病',
  },
  {
    i: '09',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser7.png',
    des: 'pages.medical_service.strabismusAmblyopia',
    link: '/yahoo/medical-service/strabismusAmblyopia',
    alt: '眼科服務_兒童斜視_兒童弱視',
  },
  {
    i: '11',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser10.png',
    des: 'pages.medical_service.eyeOrthopaedicDisease',
    link: '/yahoo/medical-service/eyeOrthopaedicDisease',
    alt: '眼科服務_眼整形_眼眶病',
  },
  {
    i: '12',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser11.png',
    des: 'pages.medical_service.medicalOptometry',
    link: '/yahoo/medical-service/medicalOptometry',
    alt: '眼科服務_兒童近視控制_眼睛檢查',
  },
  {
    i: '13',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser12.png',
    des: 'pages.medical_service.smileHk',
    link: 'https://smile.hkcmereye.com/',
    alt: '眼科服務_激光矯視_smile矯視',
  },
]
const pageNav = ref([
  {
    name: 'pages.process_cost.process_cost',
    link: '/yahoo/process-and-cost',
  },
  {
    name: 'pages.medical_team.medical_team',
    link: '/yahoo/medical-team',
  },
  {
    name: 'pages.about_us.about_us',
    link: '/yahoo/about-us',
  },
  {
    name: 'pages.contact_us.contact_us',
    link: '/yahoo/contact-us',
  },
])
</script>

<template>
  <div class="homePage">
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
              :alt="swiperItem.img_alt"
              :title="swiperItem.img_title"
            />
          </nuxt-link>
        </swiper-slide>
      </swiper>
    </div>
    <div class="home-mbContent">
      <!-- <div class="home-mbContent-banner"> -->
      <!-- <img src="https://static.cmereye.com/imgs/2024/03/c0416b68d7049a83.png" alt=""> -->
      <!-- <video autoplay loop muted playsinline x5-playsinline="true" webkit-playsinline="true"
        src="https://static.cmereye.com/static/loffee/video/eyecenter_web_v2.mp4" poster="https://static.cmereye.com/imgs/2024/01/c765e1d6022ddd41.jpg">
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
              :title="service.alt"
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
                src="https://static.cmereye.com/imgs/2023/11/4f0397cca2473c61.jpg"
                title="希瑪眼科中心_上市眼科中心"
                alt="希瑪眼科中心_上市眼科中心"
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
                src="https://static.cmereye.com/imgs/2023/11/b727a18986eee34a.jpg"
                title="希瑪眼科中心_眼科醫生團隊"
                alt="希瑪眼科中心_眼科醫生團隊"
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
                src="https://static.cmereye.com/imgs/2023/11/10e2463581fde672.png"
                title="希瑪眼科中心_眼科診所"
                alt="希瑪眼科中心_眼科診所"
                class="cmer-fadeInLeft-2"
              />
              <img
                src="https://static.cmereye.com/imgs/2023/11/b1571356e3fdc9b3.png"
                title="希瑪眼科中心_眼科診所"
                alt="希瑪眼科中心_眼科診所"
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
                src="https://static.cmereye.com/imgs/2023/11/d5832f9c20130912.jpg"
                title="希瑪眼科中心_眼科診所推薦"
                alt="希瑪眼科中心_眼科診所推薦"
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
      <div
        class="home-mbContent-box"
        :class="{ 'home-mbContent-box-en': locale === 'en' }"
      >
        <div>
          <div class="indexContext_1">
            <div class="indexContext_1-image cmer-fadeInRight-3">
              <img
                src="https://static.cmereye.com/imgs/2023/11/d9ed93444cd110d2.jpg"
                alt="希瑪眼科中心_國際醫療技術"
                title="希瑪眼科中心_國際醫療技術"
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
                src="https://static.cmereye.com/imgs/2023/11/f82b7514325c896f.jpg"
                alt="香港希瑪國際眼科醫療集團"
                title="香港希瑪國際眼科醫療集團"
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="67"
                    viewBox="0 0 70 67"
                    fill="none"
                  >
                    <mask
                      id="path-1-outside-1_5260_3216"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="70"
                      height="67"
                      fill="black"
                    >
                      <rect fill="white" width="70" height="67" />
                      <path
                        d="M54.389 37.7297V37.4594L59.5555 33.7522C60.0953 33.3661 60.288 32.6324 60.0181 32.0145L57.4349 26.222L60.0181 20.4296C60.288 19.8117 60.0953 19.078 59.5555 18.6918L54.4275 14.9846L53.7721 8.65152C53.695 7.99504 53.1552 7.45441 52.4997 7.37718L46.1766 6.72069L42.4752 1.58471C42.0896 1.04408 41.3571 0.850991 40.7402 1.12131L34.9568 3.70861L29.1734 1.12131C28.5565 0.850991 27.8239 1.04408 27.4384 1.58471L23.737 6.72069L17.4138 7.37718C16.7584 7.45441 16.2186 7.99504 16.1415 8.65152L15.486 14.9846L10.3581 18.6918C9.8183 19.078 9.62552 19.8117 9.89541 20.4296L12.4787 26.222L9.89541 32.0145C9.62552 32.6324 9.8183 33.3661 10.3581 33.7522L15.486 37.4594V37.7297L1.4131 51.8634C1.02754 52.2495 0.911872 52.8288 1.0661 53.3308C1.25888 53.8328 1.68299 54.219 2.22277 54.2962L11.7075 55.4547L12.8642 64.9158C12.9413 65.4564 13.2883 65.9198 13.8281 66.0742C13.9823 66.1129 14.1366 66.1515 14.2908 66.1515C14.6763 66.1515 15.0233 65.997 15.2932 65.7267L30.1758 50.8207L34.9953 48.6582L39.8148 50.8207L54.6974 65.7267C54.9673 65.997 55.3143 66.1515 55.6999 66.1515C55.8541 66.1515 56.0083 66.1515 56.1626 66.0742C56.6638 65.8812 57.0493 65.4564 57.1264 64.9158L58.2831 55.4547L67.7679 54.2962C68.3077 54.219 68.7703 53.8714 68.9246 53.3308C69.1174 52.8288 68.9631 52.2495 68.5776 51.8634L54.4661 37.7297H54.389ZM15.3318 61.672L14.4065 53.9873C14.3293 53.3308 13.8281 52.8288 13.1727 52.7516L5.50003 51.8247L15.9101 41.3983L16.1415 43.7925C16.2186 44.449 16.7584 44.9896 17.4138 45.0669L23.737 45.7234L26.8986 50.1256L15.3318 61.7106V61.672ZM35.5351 45.8392C35.5351 45.8392 35.1496 45.7234 34.9568 45.7234C34.764 45.7234 34.5712 45.762 34.3784 45.8392L29.0577 48.2334L25.6262 43.5222C25.3949 43.1747 25.0093 42.9816 24.6238 42.943L18.8404 42.3637L18.2621 36.5712C18.2235 36.1851 17.9922 35.7989 17.6837 35.5672L12.9799 32.1303L15.3704 26.8013C15.5246 26.4151 15.5246 25.9903 15.3704 25.6428L12.9799 20.3137L17.6837 16.8768C18.0307 16.6451 18.2235 16.259 18.2621 15.8728L18.8404 10.0803L24.6238 9.50108C25.0093 9.46247 25.3949 9.23078 25.6262 8.92185L29.0577 4.21063L34.3784 6.60485C34.764 6.75931 35.1881 6.75931 35.5351 6.60485L40.8558 4.21063L44.2873 8.92185C44.5187 9.26939 44.9042 9.46247 45.2898 9.50108L51.0732 10.0803L51.6515 15.8728C51.6901 16.259 51.9214 16.6451 52.2298 16.8768L56.9337 20.3137L54.5432 25.6428C54.389 26.0289 54.389 26.4537 54.5432 26.8013L56.9337 32.1303L52.2298 35.5672C51.8828 35.7989 51.6901 36.1851 51.6515 36.5712L51.0732 42.3637L45.2898 42.943C44.9042 42.9816 44.5187 43.2133 44.2873 43.5222L40.8558 48.2334L35.5351 45.8392ZM56.7794 52.7516C56.124 52.8288 55.6228 53.3308 55.5457 53.9873L54.6203 61.672L43.0535 50.087L46.2151 45.6847L52.5383 45.0283C53.1937 44.951 53.7335 44.4104 53.8106 43.7539L54.042 41.3597L64.4521 51.7861L56.7794 52.7129V52.7516Z"
                      />
                    </mask>
                    <path
                      d="M54.389 37.7297V37.4594L59.5555 33.7522C60.0953 33.3661 60.288 32.6324 60.0181 32.0145L57.4349 26.222L60.0181 20.4296C60.288 19.8117 60.0953 19.078 59.5555 18.6918L54.4275 14.9846L53.7721 8.65152C53.695 7.99504 53.1552 7.45441 52.4997 7.37718L46.1766 6.72069L42.4752 1.58471C42.0896 1.04408 41.3571 0.850991 40.7402 1.12131L34.9568 3.70861L29.1734 1.12131C28.5565 0.850991 27.8239 1.04408 27.4384 1.58471L23.737 6.72069L17.4138 7.37718C16.7584 7.45441 16.2186 7.99504 16.1415 8.65152L15.486 14.9846L10.3581 18.6918C9.8183 19.078 9.62552 19.8117 9.89541 20.4296L12.4787 26.222L9.89541 32.0145C9.62552 32.6324 9.8183 33.3661 10.3581 33.7522L15.486 37.4594V37.7297L1.4131 51.8634C1.02754 52.2495 0.911872 52.8288 1.0661 53.3308C1.25888 53.8328 1.68299 54.219 2.22277 54.2962L11.7075 55.4547L12.8642 64.9158C12.9413 65.4564 13.2883 65.9198 13.8281 66.0742C13.9823 66.1129 14.1366 66.1515 14.2908 66.1515C14.6763 66.1515 15.0233 65.997 15.2932 65.7267L30.1758 50.8207L34.9953 48.6582L39.8148 50.8207L54.6974 65.7267C54.9673 65.997 55.3143 66.1515 55.6999 66.1515C55.8541 66.1515 56.0083 66.1515 56.1626 66.0742C56.6638 65.8812 57.0493 65.4564 57.1264 64.9158L58.2831 55.4547L67.7679 54.2962C68.3077 54.219 68.7703 53.8714 68.9246 53.3308C69.1174 52.8288 68.9631 52.2495 68.5776 51.8634L54.4661 37.7297H54.389ZM15.3318 61.672L14.4065 53.9873C14.3293 53.3308 13.8281 52.8288 13.1727 52.7516L5.50003 51.8247L15.9101 41.3983L16.1415 43.7925C16.2186 44.449 16.7584 44.9896 17.4138 45.0669L23.737 45.7234L26.8986 50.1256L15.3318 61.7106V61.672ZM35.5351 45.8392C35.5351 45.8392 35.1496 45.7234 34.9568 45.7234C34.764 45.7234 34.5712 45.762 34.3784 45.8392L29.0577 48.2334L25.6262 43.5222C25.3949 43.1747 25.0093 42.9816 24.6238 42.943L18.8404 42.3637L18.2621 36.5712C18.2235 36.1851 17.9922 35.7989 17.6837 35.5672L12.9799 32.1303L15.3704 26.8013C15.5246 26.4151 15.5246 25.9903 15.3704 25.6428L12.9799 20.3137L17.6837 16.8768C18.0307 16.6451 18.2235 16.259 18.2621 15.8728L18.8404 10.0803L24.6238 9.50108C25.0093 9.46247 25.3949 9.23078 25.6262 8.92185L29.0577 4.21063L34.3784 6.60485C34.764 6.75931 35.1881 6.75931 35.5351 6.60485L40.8558 4.21063L44.2873 8.92185C44.5187 9.26939 44.9042 9.46247 45.2898 9.50108L51.0732 10.0803L51.6515 15.8728C51.6901 16.259 51.9214 16.6451 52.2298 16.8768L56.9337 20.3137L54.5432 25.6428C54.389 26.0289 54.389 26.4537 54.5432 26.8013L56.9337 32.1303L52.2298 35.5672C51.8828 35.7989 51.6901 36.1851 51.6515 36.5712L51.0732 42.3637L45.2898 42.943C44.9042 42.9816 44.5187 43.2133 44.2873 43.5222L40.8558 48.2334L35.5351 45.8392ZM56.7794 52.7516C56.124 52.8288 55.6228 53.3308 55.5457 53.9873L54.6203 61.672L43.0535 50.087L46.2151 45.6847L52.5383 45.0283C53.1937 44.951 53.7335 44.4104 53.8106 43.7539L54.042 41.3597L64.4521 51.7861L56.7794 52.7129V52.7516Z"
                      fill="#8AD8DD"
                    />
                    <path
                      d="M54.389 37.7297V37.4594L59.5555 33.7522C60.0953 33.3661 60.288 32.6324 60.0181 32.0145L57.4349 26.222L60.0181 20.4296C60.288 19.8117 60.0953 19.078 59.5555 18.6918L54.4275 14.9846L53.7721 8.65152C53.695 7.99504 53.1552 7.45441 52.4997 7.37718L46.1766 6.72069L42.4752 1.58471C42.0896 1.04408 41.3571 0.850991 40.7402 1.12131L34.9568 3.70861L29.1734 1.12131C28.5565 0.850991 27.8239 1.04408 27.4384 1.58471L23.737 6.72069L17.4138 7.37718C16.7584 7.45441 16.2186 7.99504 16.1415 8.65152L15.486 14.9846L10.3581 18.6918C9.8183 19.078 9.62552 19.8117 9.89541 20.4296L12.4787 26.222L9.89541 32.0145C9.62552 32.6324 9.8183 33.3661 10.3581 33.7522L15.486 37.4594V37.7297L1.4131 51.8634C1.02754 52.2495 0.911872 52.8288 1.0661 53.3308C1.25888 53.8328 1.68299 54.219 2.22277 54.2962L11.7075 55.4547L12.8642 64.9158C12.9413 65.4564 13.2883 65.9198 13.8281 66.0742C13.9823 66.1129 14.1366 66.1515 14.2908 66.1515C14.6763 66.1515 15.0233 65.997 15.2932 65.7267L30.1758 50.8207L34.9953 48.6582L39.8148 50.8207L54.6974 65.7267C54.9673 65.997 55.3143 66.1515 55.6999 66.1515C55.8541 66.1515 56.0083 66.1515 56.1626 66.0742C56.6638 65.8812 57.0493 65.4564 57.1264 64.9158L58.2831 55.4547L67.7679 54.2962C68.3077 54.219 68.7703 53.8714 68.9246 53.3308C69.1174 52.8288 68.9631 52.2495 68.5776 51.8634L54.4661 37.7297H54.389ZM15.3318 61.672L14.4065 53.9873C14.3293 53.3308 13.8281 52.8288 13.1727 52.7516L5.50003 51.8247L15.9101 41.3983L16.1415 43.7925C16.2186 44.449 16.7584 44.9896 17.4138 45.0669L23.737 45.7234L26.8986 50.1256L15.3318 61.7106V61.672ZM35.5351 45.8392C35.5351 45.8392 35.1496 45.7234 34.9568 45.7234C34.764 45.7234 34.5712 45.762 34.3784 45.8392L29.0577 48.2334L25.6262 43.5222C25.3949 43.1747 25.0093 42.9816 24.6238 42.943L18.8404 42.3637L18.2621 36.5712C18.2235 36.1851 17.9922 35.7989 17.6837 35.5672L12.9799 32.1303L15.3704 26.8013C15.5246 26.4151 15.5246 25.9903 15.3704 25.6428L12.9799 20.3137L17.6837 16.8768C18.0307 16.6451 18.2235 16.259 18.2621 15.8728L18.8404 10.0803L24.6238 9.50108C25.0093 9.46247 25.3949 9.23078 25.6262 8.92185L29.0577 4.21063L34.3784 6.60485C34.764 6.75931 35.1881 6.75931 35.5351 6.60485L40.8558 4.21063L44.2873 8.92185C44.5187 9.26939 44.9042 9.46247 45.2898 9.50108L51.0732 10.0803L51.6515 15.8728C51.6901 16.259 51.9214 16.6451 52.2298 16.8768L56.9337 20.3137L54.5432 25.6428C54.389 26.0289 54.389 26.4537 54.5432 26.8013L56.9337 32.1303L52.2298 35.5672C51.8828 35.7989 51.6901 36.1851 51.6515 36.5712L51.0732 42.3637L45.2898 42.943C44.9042 42.9816 44.5187 43.2133 44.2873 43.5222L40.8558 48.2334L35.5351 45.8392ZM56.7794 52.7516C56.124 52.8288 55.6228 53.3308 55.5457 53.9873L54.6203 61.672L43.0535 50.087L46.2151 45.6847L52.5383 45.0283C53.1937 44.951 53.7335 44.4104 53.8106 43.7539L54.042 41.3597L64.4521 51.7861L56.7794 52.7129V52.7516Z"
                      stroke="#8AD8DD"
                      mask="url(#path-1-outside-1_5260_3216)"
                    />
                    <path
                      d="M48.47 26.2221C48.47 18.7472 42.4209 12.688 34.9568 12.688C27.4927 12.688 21.4435 18.7472 21.4435 26.2221C21.4435 33.6969 27.4927 39.7561 34.9568 39.7561C42.4209 39.7561 48.47 33.6969 48.47 26.2221ZM34.9568 36.3985C29.3504 36.3985 24.7967 31.8382 24.7967 26.2221C24.7967 20.6059 29.3504 16.0456 34.9568 16.0456C40.5632 16.0456 45.1169 20.6059 45.1169 26.2221C45.1169 31.8382 40.5632 36.3985 34.9568 36.3985Z"
                      fill="#8AD8DD"
                      stroke="#8AD8DD"
                      stroke-width="0.5"
                    />
                  </svg>
                </div>
                <span
                  >{{ $t('pages.index.contentBox.span1_1') }}<br />{{
                    $t('pages.index.contentBox.span1_2')
                  }}</span
                >
              </div>
              <div class="indexContext_2-text-in cmer-fadeInUp-11">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="74"
                    viewBox="0 0 52 74"
                    fill="none"
                  >
                    <path
                      d="M50.9153 18.8969C50.7358 18.3204 50.2171 17.8846 49.6125 17.7835L49.6129 17.7777L34.2536 15.5532L27.3657 1.6049C27.3655 1.60445 27.3653 1.60401 27.3651 1.60356C27.0844 1.01961 26.4675 0.75 25.8874 0.75C25.3074 0.75 24.6905 1.01957 24.4099 1.60343C24.4096 1.60392 24.4094 1.60441 24.4092 1.6049L17.5212 15.5532L2.16239 17.7777L2.1978 18.0251L2.16196 17.7777L2.16209 17.7777C1.52829 17.8685 1.04288 18.32 0.825478 18.8861L0.822403 18.8941L0.819884 18.9023C0.639691 19.4889 0.820305 20.1489 1.2146 20.5877L1.22 20.5937L1.22577 20.5994L12.3313 31.4584L9.69611 46.7667L9.69601 46.7667L9.695 46.7738C9.60779 47.3852 9.82481 48.0198 10.3731 48.3859C10.9019 48.7389 11.5258 48.7833 12.0975 48.519L12.0976 48.5193L12.1086 48.5135L17.5043 45.6862C17.6408 47.6128 17.7283 50.5204 17.4147 53.5996C17.0843 56.8437 16.3108 60.2542 14.7 62.9093H10.0184C8.17158 62.9093 6.69332 64.3905 6.69332 66.2393V69.4713C6.69332 71.3201 8.17158 72.8012 10.0184 72.8012H41.7185C43.5653 72.8012 45.0436 71.3201 45.0436 69.4713V66.2393C45.0436 64.3905 43.5653 62.9093 41.7185 62.9093H37.0369C35.4261 60.2542 34.6526 56.8437 34.3222 53.5996C34.0085 50.5204 34.0961 47.6128 34.2326 45.6862L39.6222 48.5103C39.8643 48.6535 40.1402 48.6942 40.3897 48.6942C40.7424 48.6942 41.0597 48.6036 41.3704 48.3813L41.3721 48.3801C41.8654 48.0208 42.1308 47.3967 42.0419 46.7738L42.042 46.7738L42.0408 46.7667L39.4056 31.4584L50.5112 20.5994L50.5133 20.5973C50.9532 20.1567 51.1378 19.527 50.9153 18.8969ZM32.875 18.7288L45.7744 20.5954L36.4189 29.7095L35.9784 30.1386H36.1671C36.0028 30.4581 35.9465 30.8327 36.005 31.1844L36.0052 31.1853L38.1982 44.0709L26.6551 37.9976C26.413 37.8543 26.137 37.8137 25.8874 37.8137C25.6379 37.8137 25.3618 37.8543 25.1197 37.9976L13.5767 44.0709L15.7697 31.1853L15.7698 31.1844C15.8597 30.6444 15.6781 30.1081 15.2825 29.7119L15.2801 29.7095L5.92447 20.5954L18.8239 18.7288L18.8239 18.7289L18.8293 18.728C19.3606 18.6393 19.8061 18.3264 20.0707 17.8405L20.0709 17.8406L20.0754 17.8315L25.8495 6.11874L31.6219 17.8281C31.8542 18.3359 32.3522 18.6416 32.8696 18.728L32.8696 18.7281L32.875 18.7288ZM36.1378 66.2231H41.6973C41.7121 66.2314 41.7284 66.2414 41.7439 66.2525C41.7563 66.2614 41.7656 66.2691 41.7722 66.2753V69.4123C41.7639 69.4272 41.7538 69.4436 41.7427 69.4592C41.7339 69.4716 41.7262 69.4808 41.7201 69.4875H10.1155C10.1007 69.4791 10.0844 69.4692 10.069 69.4581C10.0566 69.4492 10.0472 69.4415 10.0406 69.4353V66.2982C10.049 66.2833 10.059 66.2669 10.0701 66.2514C10.0789 66.239 10.0866 66.2297 10.0927 66.2231H36.1378ZM20.9122 52.1093C21.1192 48.6357 20.896 45.6073 20.7257 44.0234L25.8874 41.3119L31.0492 44.0234C30.8789 45.6073 30.6557 48.6357 30.8627 52.1093C31.0698 55.5847 31.7084 59.5235 33.2745 62.9093H18.5004C20.0665 59.5235 20.7051 55.5847 20.9122 52.1093Z"
                      fill="#8AD8DD"
                      stroke="#8AD8DD"
                      stroke-width="0.5"
                    />
                  </svg>
                </div>
                <span>{{ $t('pages.index.contentBox.span2') }}</span>
              </div>
              <div class="indexContext_2-text-in cmer-fadeInUp-12">
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/11/7999fef5f2ba4028.png"
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
      <yahooAboutChildCompsAwards />
    </div>
    <yahooPageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
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
        font-size: 48px;
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
        margin-top: 18px;
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
        font-size: 48px;
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
        margin-top: 18px;
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
    margin-top: 78px;
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
        align-items: center;
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
</style>

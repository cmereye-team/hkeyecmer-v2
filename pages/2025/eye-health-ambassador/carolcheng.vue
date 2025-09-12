<!--
 * @Author: 谭洁莹
 * @Date: 2025-09-11 08:47:28
 * @LastEditTime: 2025-09-12 14:37:55
 * @FilePath: /pages/2025/eye-health-ambassado/carolcheng.vue
 * @Description: 眼睛健康大使
-->
<script setup lang="ts">
import { Autoplay } from 'swiper'
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '眼睛健康大使 | 希瑪眼科中心',
  meta() {
    return [
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '眼科醫生 眼科 眼科專科 眼科醫生 眼科診所 眼科中心 希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 香港希瑪眼科 香港希瑪 希瑪 希瑪眼科全面眼科檢查 希瑪眼科香港 希瑪林順潮眼科中心 林順潮眼科中心 林順潮眼科醫生 林順潮眼科診所 眼科希瑪 眼睛疾病 香港眼科 眼科醫院 眼睛診所 眼科中心 眼科診所 眼科專科診所 眼科專科中心 眼科診所地址 眼科檢查 全面眼科檢查 全面眼睛檢查 眼科服務 醫療服務 眼睛健康 視力健康 驗眼',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '鄭裕玲小姐為希瑪眼科中心的眼睛健康大使，向公眾宣揚對視力保健的認識和重視。希瑪眼科中心提供九大眼科專科服務及全面眼科檢查，醫療團隊由26名經驗豐富的眼科專科醫生組成。建議40歲或以上人士定期進行眼睛檢查，預防眼睛疾病，遠離視力問題，立即查詢及預約。',
      },
    ]
  },
}))
const examinationList = [
  {
    webp: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/e1.webp',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/e1.png',
    title: '預防眼疾',
    text: '定期驗眼有助及早發現潛在眼疾，\n如白內障、黃斑病變等，守護視力健康',
  },
  {
    webp: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/e2.webp',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/e2.png',
    title: '精準配鏡',
    text: '驗眼提供準確數據，確保配鏡體驗更舒適，\n避免因度數不符而影響日常生活',
  },
  {
    webp: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/e3.webp',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/e3.png',
    title: '守護家人視力',
    text: '定期為家人安排驗眼，\n關心其眼睛健康狀況',
  },
]
const swiperList = [
  {
    avif: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper01.avif',
    webp: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper01.webp',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper01.jpg',
  },
  {
    avif: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper02.avif',
    webp: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper02.webp',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper02.jpg',
  },
  {
    avif: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper03.avif',
    webp: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper03.webp',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper03.jpg',
  },
  {
    avif: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper04.avif',
    webp: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper04.webp',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper04.jpg',
  },
  {
    avif: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper05.avif',
    webp: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper05.webp',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper05.jpg',
  },
  {
    avif: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper06.avif',
    webp: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper06.webp',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper06.jpg',
  },
  {
    avif: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper07.avif',
    webp: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper07.webp',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper07.jpg',
  },
  {
    avif: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper08.avif',
    webp: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper08.webp',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/swiper08.jpg',
  },
]
const servicesList = [
  {
    name: '白內障',
    href: '/medical-service/cataract',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/s01.png',
  },
  {
    name: '黃斑病變',
    href: '/medical-service/maculopathy',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/s02.png',
  },
  {
    name: '視網膜脫落及疾病',
    href: '/medical-service/amotioRetinae',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/s03.png',
  },
  {
    name: '青光眼',
    href: '/medical-service/glaucoma',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/s04.png',
  },
  {
    name: '乾眼症',
    href: '/medical-service/xerophthalmia',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/s05.png',
  },
  {
    name: '飛蚊症',
    href: '/medical-service/muscaeVolitantes',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/s06.png',
  },
  {
    name: '結膜炎(紅眼症)',
    href: '/medical-service/conjunctivitis',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/s07.png',
  },
  {
    name: '眼表及角膜疾病',
    href: '/medical-service/ocularSurfaceDiseases',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/s08.png',
  },
  {
    name: '眼矯形及眼眶疾病',
    href: '/medical-service/eyeOrthopaedicDisease',
    img: 'https://statichk.cmermedical.com/hkcmereye/carolcheng/s09.png',
  },
]
const ratingsList = [
  {
    id: 1,
    name: 'R Lee',
    date: '2025-08-23',
    rate: 5,
    text: '林峯醫生\n解釋清楚，檢查詳細',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocIt4_wvnPPFVMiNNgyDHPS5Y_5RlyejbXjbmHN1gqz2GqQM3A=w40-h40-c-rp-mo-br100',
  },
  {
    id: 2,
    name: 'Cecily Ngan',
    date: '2025-08-22',
    rate: 5,
    text: '高德全醫生專業細心，講解清晰，做手術好仔細，令視力改善了很多。',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocKKN4MUN3GOKIQVtRoua1kTML411kT0jGgGHIhLldRogH5RpQ=w40-h40-c-rp-mo-br100',
  },
  {
    id: 3,
    name: 'Ip Shrimp',
    date: '2025-08-15',
    rate: 5,
    text: '林己明醫生細心治療觀察\n樂於與病人互動及回答疑問',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocIt4_wvnPPFVMiNNgyDHPS5Y_5RlyejbXjbmHN1gqz2GqQM3A=w40-h40-c-rp-mo-br100',
  },
  {
    id: 4,
    name: 'Chan Vicky',
    date: '2025-08-09',
    rate: 5,
    text: '劉凱珊醫生態度好，講解清晰，非常滿意劉醫生服務。',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocIb71bqLfCLST3cirYn5E_76fjAtJu6BF_Yj-X-KG1p1qkL2A=w40-h40-c-rp-mo-br100',
  },
  {
    id: 5,
    name: 'Marcella Chiu',
    date: '2025-08-08',
    rate: 5,
    text: '高德全醫生很professional, caring and supportive, 檢查及診斷都很準確，聆聽病人需要👍🏻',
    img: 'https://cdn.trustindex.io/assets/default-avatar/noprofile-08.svg',
  },
  {
    id: 6,
    name: 'Wai Man Leung',
    date: '2025-08-07',
    rate: 5,
    text: '李佑榮醫生幫我做既手術相當成功, 而且醫生講解好細心及好負責任。',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocKqkYiTKSUIEoAzycvZLsOd0rwOItTd4GSzT-YIysVZO4E0Aw=w40-h40-c-rp-mo-br100',
  },
  {
    id: 7,
    name: 'Deb Yuen',
    date: '2025-08-07',
    rate: 5,
    text: '李佑榮醫生診症時很細心，好專業，令我好放心。',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocJhw7wCVoG23O3ZgbZ_4JF05DO8DZv3rhE1y5wY4uSEhFynwA=w40-h40-c-rp-mo-br100',
  },
  {
    id: 8,
    name: 'Ivar Ng',
    date: '2025-08-07',
    rate: 5,
    text: '姑娘服務好好，價錢便宜些就更好，好滿意李佑榮醫生。',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocIX5DPRa2JxAGMqzK96AzkmXkVmPe2GhcImnEH9azwwa62tUw=w40-h40-c-rp-mo-br100',
  },
  {
    id: 9,
    name: 'justin chan',
    date: '2025-08-06',
    rate: 5,
    text: '李佑榮醫生各方面都很好, 會關心病人',
    img: 'tps://lh3.googleusercontent.com/a-/ALV-UjWSaKIuSwDnWbzB8sYBUEfNho1-4RKIYyHn4Lnc9uJKOOinLMw=w40-h40-c-rp-mo-br100',
  },
]
// 頁腳背景色
const backgd = [
  '#64bcd1;',
  '-webkit-linear-gradient(to right, #83cdd3, #64bcd1);',
  'linear-gradient(to right, #83cdd3, #64bcd1);',
]
// const bannerData = {
//   pcSrc: 'https://statichk.cmermedical.com/hkcmereye/promotion/banner.jpg',
//   mbSrc: 'https://cdn.nodeimage.com/i/xQUkffjeDi1N58wxAjY0B7siuXg4Za45.jpg',
// }
const windowW = ref(0)
const getWindowW = () => {
  windowW.value = window.innerWidth
}
onMounted(() => {
  getWindowW()
  window.addEventListener('resize', getWindowW)
})
</script>
<template>
  <div class="main">
    <!-- <PageServiceBanner :bannerData="bannerData" /> -->
    <section class="banner">
      <picture>
        <source
          media="(max-width: 767px)"
          type="image/avif"
          srcset="
            https://statichk.cmermedical.com/hkcmereye/carolcheng/banner-m.avif
          "
        />
        <source
          media="(min-width: 768px)"
          type="image/avif"
          srcset="
            https://statichk.cmermedical.com/hkcmereye/carolcheng/banner-pc.avif
          "
        />
        <source
          media="(max-width: 767px)"
          type="image/jpeg"
          srcset="
            https://statichk.cmermedical.com/hkcmereye/carolcheng/banner-m.jpg
          "
        />
        <img
          class="banner-img"
          src="https://statichk.cmermedical.com/hkcmereye/carolcheng/banner-pc.jpg"
          alt="希瑪眼科中心"
        />
      </picture>
    </section>
    <section class="video bg-[#F8F9FA]">
      <div
        class="wrap flex flex-col lg:flex-row gap-4 justify-center items-center"
      >
        <div class="video-info mb-4 flex-[1]">
          <div class="video-info-main">
            <iframe
              src="https://www.youtube.com/embed/Z5ut-9tIhmo"
              frameborder="0"
            ></iframe>
          </div>
        </div>
        <div class="video-intro flex-[1]">
          <h2 class="video-intro-title section-title">
            守護眼睛健康，從定期驗眼開始！
          </h2>
          <div class="video-intro-text">
            <p>
              眼睛是「靈魂之窗」，隨著現代生活習慣改變，眼睛面臨更多挑戰。眼疾初期往往難以察覺，一旦視力受損，可能已錯過最佳治療時機。
            </p>
            <p>透過定期眼科檢查，有助及早發現潛在問題，並及早對症下藥。</p>
            <p>
              關心自己，關心家人。若發現有眼部問題，立即尋找信譽良好的眼科中心預約檢查，為自己及家人送上一份安心！
            </p>
          </div>
          <div class="video-intro-button text-center">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=85293451508&amp;text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2"
              class="button-wrap"
            >
              <button class="button-more">
                <div class="button-more-arr2">
                  <svg
                    viewBox="0 0 24 24"
                    class="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                  </svg>
                </div>
                <span class="text">立即預約驗眼</span>
                <span class="circle"></span>
                <div class="button-more-arr1">
                  <svg
                    viewBox="0 0 24 24"
                    class="arr-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                  </svg>
                </div></button
            ></a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              style="display: block; height: 0; width: 0"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  ></feGaussianBlur>
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="goo"
                  ></feColorMatrix>
                  <feBlend in="SourceGraphic" in2="goo"></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
    <section class="examination pt-[25px] md:pt-[80px]">
      <div class="wrap">
        <h2 class="section-title text-center">驗眼的重要性</h2>
        <div class="examination-list flex gap-[30px] flex-col md:flex-row">
          <div
            class="examination-item flex-[1]"
            v-for="(item, index) in examinationList"
            :key="index"
          >
            <picture>
              <source type="image/webp" :srcset="item.webp" />
              <img
                class="examination-item-icon"
                :src="item.img"
                :alt="'希瑪眼科中心_' + item.title"
              />
            </picture>
            <h3 class="examination-item-title">{{ item.title }}</h3>
            <p class="examination-item-text">{{ item.text }}</p>
          </div>
        </div>
        <div class="button-online">免費線上初步驗眼</div>
      </div>
    </section>
    <section class="cmer">
      <div class="wrap">
        <h2 class="cmer-title text-center">希瑪眼科中心</h2>
        <div class="cmer-main">
          <div class="cmer-intro">
            <p>
              希瑪眼科中心擁有龐大規模眼科醫療網絡，設有10間眼科診所，遍佈港、九、新界。由從事眼科臨床30多年林順潮醫生帶領，加上26名經驗豐富的眼科專科醫生，以及多名註冊視光師及醫護人員組成，為市民提供全面眼科專科醫療服務。
            </p>
            <p>
              希瑪眼科中心嚴格遵守香港及國際醫療技術操作規範，設有多間符合國際標準的無菌手術室，配備先進尖端的眼科醫療儀器，秉持「度身訂造」原則，為病人提供安全、準確、可靠的眼科檢查及治療。
            </p>
            <nuxt-link to="/contact-us" class="button-wrap mb-4"
              ><div class="button-contact">
                <span class="transition"></span><span class="gradient"></span
                ><span class="label">診所地址及電話</span>
              </div></nuxt-link
            >
          </div>
          <div class="cmer-swiper">
            <swiper loop>
              <swiper-slide v-for="(item, index) in swiperList" :key="index">
                <div class="cmer-swiper-wrap">
                  <picture>
                    <source type="image/avif" :srcset="item.avif" />
                    <source type="image/webp" :srcset="item.webp" />
                    <img :src="item.img" alt="希瑪眼科中心_眼科診所_眼科醫生" />
                  </picture>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </section>
    <section class="services">
      <div class="wrap">
        <h2 class="section-title text-center">醫療服務</h2>
        <div class="services-list">
          <div v-for="(item, index) in servicesList" :key="index">
            <nuxt-link :to="item.href" class="services-item">
              <img
                class="services-img"
                :src="item.img"
                :alt="item.name"
                :title="item.name"
              />
              <p class="services-name">{{ item.name }}</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="ratings bg-[#F8F9FA] mt-5 py-5">
      <div class="ratings-title text-center mb-2 lg:mb-4">
        <h2 class="font-blod text-primary mb-2">客戶評分</h2>
        <p class="text-gray-600">來自 Google 平台的真實體驗分享</p>
      </div>
      <swiper
        class="ratings-list flex gap-[30px]"
        loop
        :space-between="windowW > 767 ? 40 : 10"
        :slides-per-view="windowW > 767 ? 4 : 1.5"
        :modules="[Autoplay]"
        :autoplay="{ delay: 0 }"
        :speed="1500"
      >
        <swiper-slide v-for="item in ratingsList" :key="item.id">
          <div class="ratings-item bg-white p-3">
            <div class="info flex items-center mb-4">
              <div class="img mr-3">
                <img
                  class="w-10 h-10 rounded-[50%]"
                  :src="item.img"
                  :alt="item.name"
                  :title="item.name"
                />
              </div>
              <div class="user">
                <h3 class="ratings-item-title font-medius mb-0">
                  {{ item.name }}
                </h3>
                <p class="text-sm text-gray-500">{{ item.date }}</p>
              </div>
            </div>
            <el-rate v-model="item.rate" disabled class="mb-3"></el-rate>
            <p class="text-gray-700 whitespace-pre-line">{{ item.text }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </section>
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#64bcd1;'}`"
    />
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
// 公共部分
.wrap {
  margin: 0 auto;
}
.section {
  &-title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 25px;
    color: #2958a3;
  }
}
@keyframes tagHighlight {
  0% {
    transform: translateY(0);
    box-shadow: none;
  }
  5.555% {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  }
  11.111% {
    transform: translateY(0);
    box-shadow: none;
  }
  11.112%,
  100% {
    transform: translateY(0);
    box-shadow: none;
  }
}
// 视频
.video {
  padding: 20px 0;
  &-intro {
    padding: 30px;
    border-radius: 15px;
    font-size: 16px;
    height: 100%;
    box-shadow: 0 5px 20px rgba($color: #000000, $alpha: 0.1);
    &-text {
      p {
        line-height: 1.6;
        font-weight: 400;
        margin-bottom: 20px;
      }
    }
  }
}
// 验眼的重要性
.examination {
  margin-bottom: 80px;
  &-item {
    text-align: center;
    &-icon {
      width: 80px;
      margin: 0 auto 20px;
      border-radius: 50%;
      background: linear-gradient(135deg, #2958a3, #4a7bc8);
      img {
        max-width: 70px;
      }
    }
    &-title {
      font-size: 1.4rem;
      font-weight: 600;
      color: #2958a3;
      margin-bottom: 15px;
    }
    &-text {
      white-space: pre-line;
    }
  }
}
.cmer {
  .wrap {
    box-shadow: 0 2px 32px 0 rgba(0, 0, 0, 0.15);
    position: relative;
  }
  &-title {
    background-color: #1b407a;
    color: #fff;
    font-size: 30px;
    border-radius: 20px 0;
    padding: 15px;
    font-weight: 600;
  }
  &-main {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  &-intro {
    padding: 15px 15px 30px 15px;
  }
  &-swiper {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      border-radius: 30px;
    }
  }
}
.services {
  &-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }
  &-item {
    font-weight: 500;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 0.9em;
    background: linear-gradient(135deg, #1b407a, #005ff5);
    animation: tagHighlight 9s infinite linear;
    animation-fill-mode: both;
    transition: all 0.3s ease-out;
    &:hover {
      transform: translateY(-3px);
      color: #ffffff;
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
      background: linear-gradient(90deg, #1b407a, #005ff5);
      color: #ffd700;
    }
  }
  &-img {
    width: 30px;
    margin-right: 10px;
  }
}
.button-wrap {
  display: flex;
  justify-content: center;

  &:hover {
    color: #fff;
  }
}

// 立即預約驗眼
.button-more {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 16px 42px;
  border: 2px solid #e55f53;
  font-size: 16px;
  background-color: inherit;
  border-radius: 100px;
  font-weight: 600;
  color: #e55f53;
  box-shadow: 0 0 0 2px #e55f53;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

  &-arr2,
  &-arr1 {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 24px;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .button-more-arr2 {
    background-color: #e55f53;
    right: 16px;

    svg {
      fill: #fff;
    }
  }

  .button-more-arr1 {
    background-color: #fff;
    left: -25%;

    svg {
      fill: #e55f53;
    }
  }

  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: #e55f53;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover {
    box-shadow: 0 0 0 12px transparent;
    color: #fff;
    border-radius: 12px;

    .button-more-arr2 {
      right: -25%;
    }

    .button-more-arr1 {
      left: 16px;
    }

    .text {
      transform: translateX(12px);
    }

    .circle {
      width: 220px;
      height: 220px;
      opacity: 1;
    }
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 0 4px #e55f53;
  }
}

// 免費線上初步驗眼
.button-online {
  padding: 12px 24px;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  z-index: 0;
  color: #e55f53;
  border: 2px solid #e55f53;
  transition: color 0.15s ease 0.25s;
  font-weight: bold;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: #e55f53;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease-in-out;
    z-index: -1;
  }

  &:hover {
    color: #fff;

    &::before {
      transform: scaleX(1);
    }
  }
}

// 診所地址及電話
.button-contact {
  font-size: 17px;
  padding: 1em 2.7em;
  font-weight: 500;
  background-color: #e55f53;
  color: white;
  border: none;
  position: relative;
  overflow: hidden;
  border-radius: 2.7em;
  cursor: pointer;

  .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 0.6em;
    margin-top: -0.25em;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.3)
    );
  }

  .label {
    position: relative;
    top: -1px;
  }

  .transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: #fea851;
    border-radius: 9999px;
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    color: #fff;

    .transition {
      width: 14em;
      height: 14em;
    }
  }

  &:active {
    transform: scale(0.97);
  }
}
@media screen and (max-width: 767px) {
  .main {
    padding-top: 76px;
  }
}
// 平板和电脑
@media screen and (min-width: 768px) {
  .section {
    &-title {
      font-size: 2rem;
    }
  }
  .video {
    padding: 80px;
  }
  .examination {
    margin-bottom: 150px;
  }
  .cmer {
    &-title {
      font-size: 45px;
      border-radius: 0 35px 0 0;
    }
    &-intro {
      padding: 30px 35px;
      text-align: justify;
      width: 55%;
    }
    &-swiper {
      position: absolute;
      left: -30%;
      top: -8%;
      width: 68%;
    }
  }
  .services {
    &-list {
      padding: 1rem;
      text-align: center;
    }
    &-item {
      font-size: 1em;
      flex-flow: column;
      justify-content: center;
      padding: 30px 10px;
      border-radius: 15px;
      flex: 0 0 calc((100% - (5 - 1) * 15px) / 5);
      background: none;
    }
    &-img {
      margin-right: 0;
      margin-bottom: 10px;
      width: auto;
      max-width: 100px;
    }
  }
}
@media screen and (min-width: 1200px) {
  .wrap {
    max-width: 1200px;
  }
}
</style>

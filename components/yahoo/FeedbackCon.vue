<script lang="ts" setup>
import { Grid, Navigation } from 'swiper'
defineProps({
  str: {
    type: String,
    default: '',
  },
})
let windowWidth = ref(1920)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
let swiperRef: any = {
  slideNext: () => {},
  slidePrev: () => {},
}
const setSwiperRef = (swiper: any) => {
  swiperRef = swiper
}
const handleSwiper = (type: string) => {
  swiperRef[`slide${type}`]()
}
onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})
</script>

<template>
  <div class="feedback" id="feedback">
    <div class="feedback-in">
      <div class="feedback-in-title">
        <yahooAboutTitle
          :zh-title="'pages.about_us.feedback'"
          :en-ttitle="'FEEDBACK'"
          class="title"
        />
      </div>
    </div>
    <div class="feedback-swiper">
      <swiper
        class="feedbackSwiper"
        @swiper="setSwiperRef"
        v-if="windowWidth > 768"
      >
        <!-- <swiper-slide v-for="feedback in 18" :key="feedback">
              <img :src="`https://static.cmereye.com/static/hkcmereye/imgs/${feedback>=10? feedback: '0'+String(feedback)}.jpg`" alt="">
            </swiper-slide> -->
        <swiper-slide class="feedbackSwiperSlide">
          <!-- <div v-for="feedback in 6" :key="feedback">
                <img :src="`https://static.cmereye.com/static/hkcmereye/imgs/${'0'+String(feedback)}.jpg`" alt="">
              </div> -->
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/01.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_五星評價截圖"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/02.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_五星評價截圖一"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/03.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_四星評價截圖"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/04.jpg`"
              title="希瑪眼科中心_中環眼科醫生推薦"
              alt="希瑪眼科中心_中環眼科醫生推薦__客戶體驗_四星評價截圖"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/05.jpg`"
              title="希瑪眼科中心_眼科診所推薦_眼科醫生推薦"
              alt="希瑪眼科中心_眼科診所推薦_眼科醫生推薦__客戶體驗_五星評價截圖"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/06.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_四星評價截圖一"
            />
          </div>
        </swiper-slide>
        <swiper-slide class="feedbackSwiperSlide">
          <!-- <div v-for="feedback in 6" :key="feedback">
                <img :src="`https://static.cmereye.com/static/hkcmereye/imgs/${feedback>=4? 6+feedback: '0'+String(6+feedback)}.jpg`" alt="">
              </div> -->
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/07.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_四星評價截圖二"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/08.jpg`"
              title="希瑪眼科中心_眼科診所推薦_眼科醫生推薦"
              alt="希瑪眼科中心_眼科診所推薦_眼科醫生推薦_客戶體驗_四星評價截圖"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/09.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_四星評價截圖三"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/10.jpg`"
              title="希瑪眼科中心_眼科醫生推薦"
              alt="希瑪眼科中心_眼科醫生推薦_客戶體驗_五星評價截圖"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/11.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_五星評價截圖二"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/12.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_五星評價截圖三"
            />
          </div>
        </swiper-slide>
        <swiper-slide class="feedbackSwiperSlide">
          <!-- <div v-for="feedback in 6" :key="feedback">
                <img :src="`https://static.cmereye.com/static/hkcmereye/imgs/${12+feedback}.jpg`" alt="">
              </div> -->
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/13.jpg`"
              title="希瑪眼科中心_眼科醫生推薦"
              alt="希瑪眼科中心_眼科醫生推薦_客戶體驗_五星評價截圖一"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/14.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_五星評價截圖四"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/15.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_四星評價截圖四"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/16.jpg`"
              title="希瑪眼科中心_眼科醫生推薦"
              alt="希瑪眼科中心_眼科醫生推薦_客戶體驗_四星評價截圖"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/17.jpg`"
              title="希瑪眼科中心_眼科醫生推薦"
              alt="希瑪眼科中心_眼科醫生推薦_客戶體驗_五星評價截圖二"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/18.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_四星評價截圖五"
            />
          </div>
        </swiper-slide>
      </swiper>
      <swiper class="feedbackSwiper" @swiper="setSwiperRef" v-else>
        <!-- <swiper-slide class="feedbackSwiperSlide" v-for="(item,index) in 11" :key="index">
              <div v-for="feedback in 2" :key="`${index}${feedback}`">
                <img :src="`https://static.cmereye.com/static/hkcmereye/imgs/${(2*index + feedback)<10?'0'+String(2*index + feedback):2*index + feedback}.jpg`" alt="">
              </div>
            </swiper-slide> -->
        <swiper-slide class="feedbackSwiperSlide">
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/01.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_五星評價截圖"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/02.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_五星評價截圖一"
            />
          </div>
        </swiper-slide>
        <swiper-slide class="feedbackSwiperSlide">
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/03.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_四星評價截圖"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/04.jpg`"
              title="希瑪眼科中心_中環眼科醫生推薦"
              alt="希瑪眼科中心_中環眼科醫生推薦__客戶體驗_四星評價截圖"
            />
          </div>
        </swiper-slide>
        <swiper-slide class="feedbackSwiperSlide">
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/05.jpg`"
              title="希瑪眼科中心_眼科診所推薦_眼科醫生推薦"
              alt="希瑪眼科中心_眼科診所推薦_眼科醫生推薦__客戶體驗_五星評價截圖"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/06.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_四星評價截圖一"
            />
          </div>
        </swiper-slide>
        <swiper-slide class="feedbackSwiperSlide">
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/07.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_四星評價截圖二"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/08.jpg`"
              title="希瑪眼科中心_眼科診所推薦_眼科醫生推薦"
              alt="希瑪眼科中心_眼科診所推薦_眼科醫生推薦_客戶體驗_四星評價截圖"
            />
          </div>
        </swiper-slide>
        <swiper-slide class="feedbackSwiperSlide">
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/09.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_四星評價截圖三"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/10.jpg`"
              title="希瑪眼科中心_眼科醫生推薦"
              alt="希瑪眼科中心_眼科醫生推薦_客戶體驗_五星評價截圖"
            />
          </div>
        </swiper-slide>
        <swiper-slide class="feedbackSwiperSlide">
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/11.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_五星評價截圖二"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/12.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_五星評價截圖三"
            />
          </div>
        </swiper-slide>
        <swiper-slide class="feedbackSwiperSlide">
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/13.jpg`"
              title="希瑪眼科中心_眼科醫生推薦"
              alt="希瑪眼科中心_眼科醫生推薦_客戶體驗_五星評價截圖一"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/14.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_五星評價截圖四"
            />
          </div>
        </swiper-slide>
        <swiper-slide class="feedbackSwiperSlide">
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/15.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_客戶體驗_四星評價截圖四"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/16.jpg`"
              title="希瑪眼科中心_眼科醫生推薦"
              alt="希瑪眼科中心_眼科醫生推薦_客戶體驗_四星評價截圖"
            />
          </div>
        </swiper-slide>
        <swiper-slide class="feedbackSwiperSlide">
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/17.jpg`"
              title="希瑪眼科中心_眼科醫生推薦"
              alt="希瑪眼科中心_眼科醫生推薦_客戶體驗_五星評價截圖二"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/18.jpg`"
              title="希瑪眼科中心_眼科診所推薦"
              alt="希瑪眼科中心_眼科診所推薦_四星評價截圖五"
            />
          </div>
        </swiper-slide>
        <swiper-slide class="feedbackSwiperSlide">
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/19.jpg`"
            />
          </div>
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/20.jpg`"
            />
          </div>
        </swiper-slide>
        <swiper-slide class="feedbackSwiperSlide">
          <div>
            <img
              :src="`https://static.cmereye.com/static/hkcmereye/imgs/21.jpg`"
            />
          </div>
        </swiper-slide>
      </swiper>
      <div class="btn-prev" @click="handleSwiper('Prev')">
        <img
          src="https://static.cmereye.com/imgs/2023/08/00f5b218523dd5d1.jpg"
          alt=""
        />
      </div>
      <div class="btn-next" @click="handleSwiper('Next')">
        <img
          src="https://static.cmereye.com/imgs/2023/08/71e502b74ad9853c.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.feedback {
  width: 100%;
  max-width: 960px;
  margin: 93px auto 0;
  &-in {
    &-title {
      :deep(h1) {
        width: max-content !important;
      }
    }
    margin-bottom: 65px;
  }
  &-swiper {
    position: relative;
    padding: 0 70px;
    .feedbackSwiperSlide {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      & > div {
        width: calc(100% / 3);
        padding: 15px;
      }
    }
    :deep(.swiper-wrapper) {
      flex-direction: row !important;
    }
    :deep(.swiper-slide) {
      margin-top: 0px !important;
      margin-bottom: 30px !important;
    }
    .btn-prev {
      position: absolute;
      left: 0;
      top: 40%;
      cursor: pointer;
    }
    .btn-next {
      position: absolute;
      right: 0;
      top: 40%;
      cursor: pointer;
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
}
@media screen and (max-width: 768px) {
  .feedback {
    margin: 0 auto;
    padding-top: 93px;
    &-in {
      &-title {
        padding-left: 30px;
      }
      margin-bottom: 30px;
    }
    &-swiper {
      padding: 0 30px;
      .feedbackSwiperSlide {
        & > div {
          width: calc(100% / 2);
          padding: 10px;
        }
      }
      .btn-prev {
        position: absolute;
        left: 0;
        top: 29%;
        cursor: pointer;
        width: 30px;
      }
      .btn-next {
        position: absolute;
        right: 0;
        top: 29%;
        cursor: pointer;
        width: 30px;
      }
    }
  }
}
</style>

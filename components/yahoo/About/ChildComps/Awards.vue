<script setup lang="ts">
import { Autoplay } from 'swiper'
const awardsList = [
  {
    imgUrl: 'https://hkcmereye.com/static/images/honor/easy2024.avif',
    year: 'pages.about_us.awards.awards_year_14',
    des: 'pages.about_us.awards.awards_des_17',
    link: 'https://01market.hk01.com/?popup=healtheasyawards2024',
    alt: '「健康Easy卓越大獎2024」',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/08/575b1d5c0bb92c28.png',
    year: 'pages.about_us.awards.awards_year_14',
    des: 'pages.about_us.awards.awards_des_12',
    link: 'https://www.hkbrand.org/tc/event/2/page/3/brand/877?activePage=1&tab=153',
    alt: '希瑪眼科中心_香港服務名牌2024',
  },
  {
    imgUrl: 'https://hkcmereye.com/template/default/images/j1.png',
    year: 'pages.about_us.awards.awards_year_14',
    des: 'pages.about_us.awards.awards_des_16',
    link: 'https://iet2.hket.com/event/hket_excellence_awards/zh/2024-winner-list.html#',
    alt: '香港經濟日報企業大獎 2024',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2024/01/4c50e32c22889c0a.jpg',
    year: 'pages.about_us.awards.awards_year_13',
    des: 'pages.about_us.awards.awards_des_15',
    link: 'https://www.esgpledge.org.hk/',
    alt: '希瑪眼科中心_ESG約章行動',
  },
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards6.jpg',
    year: 'pages.about_us.awards.awards_year_13',
    des: 'pages.about_us.awards.awards_des_6',
    link: 'https://www.hkbrand.org/tc/event/2/page/3/brand/877?activePage=1&tab=153',
    alt: '希瑪眼科中心_香港服務名牌2023',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/11/883a77f4cfc02fc3.png',
    year: 'pages.about_us.awards.awards_year_13',
    des: 'pages.about_us.awards.awards_des_14',
    link: 'https://www.commchest.org/tc/news/press-release/detail/1057',
    alt: '希瑪眼科中心_香港公益金_公益卓越獎',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/08/2952335675aaf8b0.jpg',
    year: 'pages.about_us.awards.awards_year_13',
    des: 'pages.about_us.awards.awards_des_13',
    link: 'https://hkct-awards.com/articles/59',
    alt: '希瑪眼科中心_HKCT企業大獎',
  },

  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/08/575b1d5c0bb92c28.png',
    year: 'pages.about_us.awards.awards_year_12',
    des: 'pages.about_us.awards.awards_des_12',
    link: '',
    alt: '希瑪眼科中心_香港卓越服務名牌2022',
  },

  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards6.jpg',
    year: 'pages.about_us.awards.awards_year_12',
    des: 'pages.about_us.awards.awards_des_6',
    link: 'https://www.hkbrand.org/tc/event/2/page/3/brand/877?activePage=1&tab=153',
    alt: '希瑪眼科中心_香港服務名牌2022',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/08/cdd4f2920141fa33.png',
    year: 'pages.about_us.awards.awards_year_11',
    des: 'pages.about_us.awards.awards_des_11',
    link: 'https://features.hkej.com/template/features/html/2022_sc/winners.html',
    alt: '希瑪眼科中心_社會資本動力獎2022',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/08/3593bc6113653a80.png',
    year: 'pages.about_us.awards.awards_year_10',
    des: 'pages.about_us.awards.awards_des_10',
    link: '',
    alt: '希瑪眼科中心_香港最有價值品牌大獎2022',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/08/ebde2962cbd42e60.png',
    year: 'pages.about_us.awards.awards_year_9',
    des: 'pages.about_us.awards.awards_des_9',
    link: '',
    alt: '希瑪眼科中心_開心工作間2022',
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/08/f4273176866baf9c.png',
    year: 'pages.about_us.awards.awards_year_8',
    des: 'pages.about_us.awards.awards_des_8',
    link: '',
    alt: '希瑪眼科中心_大灣區企業傑出獎2022',
  },
  // {
  //   imgUrl:
  //     'https://static.cmereye.com/imgs/2023/01/3b9de76f932cbe48.png',
  //   year: 'pages.about_us.awards.awards_year_7',
  //   des: 'pages.about_us.awards.awards_des_7',
  //   link: 'https://corphub.asia/awards/?route=events&id=1'
  // }
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards6.jpg',
    year: 'pages.about_us.awards.awards_year_6',
    des: 'pages.about_us.awards.awards_des_6',
    link: 'https://www.hkbrand.org/tc/event/2/page/3/brand/877?activePage=1&tab=153',
    alt: '希瑪眼科中心_香港服務名牌2021',
  },
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards1.jpg',
    year: 'pages.about_us.awards.awards_year_1',
    des: 'pages.about_us.awards.awards_des_1',
    link: 'https://www.hkbrand.org/tc/event/2/page/3/brand/877?activePage=1&tab=153',
    alt: '希瑪眼科中心_香港星級品牌企業獎2020-2021',
  },
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards5.jpg',
    year: 'pages.about_us.awards.awards_year_5',
    des: 'pages.about_us.awards.awards_des_5',
    link: 'https://corphub.asia/awards/?route=events&id=1',
    alt: '希瑪眼科中心_香港最優秀企業大獎2020',
  },
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards4.jpg',
    year: 'pages.about_us.awards.awards_year_4',
    des: 'pages.about_us.awards.awards_des_4',
    link: '',
    alt: '希瑪眼科中心_香港旅遊業十優推介2020',
  },
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards3.jpg',
    year: 'pages.about_us.awards.awards_year_3',
    des: 'pages.about_us.awards.awards_des_3',
    link: 'https://www.youtube.com/watch?v=7k0FhEoCXus',
    alt: '希瑪眼科中心_亞洲最佳價值服務大獎2020',
  },

  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards2.jpg',
    year: 'pages.about_us.awards.awards_year_2',
    des: 'pages.about_us.awards.awards_des_2',
    link: 'https://www.caringcompany.org.hk/b5_index.php',
    alt: '希瑪眼科中心_商界展關懷2020/2021',
  },
]

const handleSlide = (_data: any) => {
  if (_data.link) {
    location.href = _data.link
  }
}

let windowWidth = ref(1920)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})
</script>
<template>
  <div id="awards">
    <div class="awards-title">
      <AboutTitle
        :zh-title="$t('pages.about_us.awards.awards')"
        :en-ttitle="'awards'"
        class="title"
      />
    </div>
    <div v-if="awardsList.length" class="awardslide">
      <swiper
        :space-between="40"
        :slides-per-view="windowWidth > 768 ? 4 : 3"
        :modules="[Autoplay]"
        :loop="true"
        :autoplay="{ delay: 0 }"
        :speed="3000"
        class="ccSwiper"
      >
        <!-- 数组反转方法 -->
        <swiper-slide
          v-for="(item, index) in awardsList.reverse()"
          :key="index"
          class="ccSwiper-slide"
        >
          <div class="brand" @click="handleSlide(item)">
            <div>
              <img
                :class="`brandImg${index}`"
                :src="item.imgUrl"
                :alt="`${item.alt}標章`"
                :title="item.alt"
              />
            </div>
            <div>
              <div>{{ $t(item.year) }}</div>
              <div>{{ $t(item.des) }}</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style scoped lang="scss">
#awards {
  width: 100%;
  max-width: 1080px;
  margin: 115px auto 160px;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  .awards-title {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    :deep(h1) {
      text-align: left;
    }
  }

  & > .awardslide {
    width: 100%;
    // overflow: hidden;
  }

  .brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: 100%;
    & > div:nth-child(1) {
      // width: 224px;
      height: 224px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        max-height: 80%;
        &.brandImg4 {
          // max-height: 50%;
        }
      }
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;

      & > div:nth-child(1) {
        font-family: 'Metropolis';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        /* identical to box height, or 133% */

        letter-spacing: 0.05em;
        text-transform: uppercase;

        color: #8ad8dd;
      }

      & > div:nth-child(2) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        letter-spacing: 0.1em;
        color: #515151;
      }
    }
  }
}

:deep(.ccSwiper > .swiper-wrapper) {
  transition-timing-function: linear;
}

@media screen and (max-width: 768px) {
  #awards {
    margin: 0 auto;
    padding: 100px 0;
    .awards-title {
      width: calc(100% - 60px);
    }
    .brand {
      & > div:nth-child(1) {
        height: 170px;
      }
    }
  }
}
</style>

<script lang="ts" setup>
import { Anchor } from '~~/.nuxt/components'
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: '希瑪小劇場｜眼科資訊 | 香港希瑪眼科中心',
  meta: [
    {
      name: 'description',
      content:
        '希瑪眼科中心提供希瑪小劇場，小劇場拍攝的內容有關眼科知識的動畫影片，透過有趣的動畫內容，向觀眾介紹各種眼科知識和疾病，令觀眾對眼疾有更深的認識。這些動畫影片內容豐富多彩，既有較為深入的眼科知識，也有一些實用的小貼士和小技巧。透過這些有趣的動畫內容，觀眾可以在輕鬆愉快的氛圍中學習眼科知識，增加對眼睛健康的關注和重視。',
    },
    {
      name: 'keywords',
      content:
        '希瑪眼科中心 香港希瑪眼科 眼科專科診所 眼科專科中心 香港希瑪眼科林順潮眼科醫生 眼科醫生 香港眼科 眼科醫生 眼科診所 希瑪眼科 希瑪小劇場 眼科資訊 眼科知識 眼疾 動畫影片 希瑪動畫 眼睛健康 眼科疾病 眼科診所 希瑪醫療集團 希瑪醫療 眼科保健 希瑪小劇場影片 希瑪影片 眼科健康 眼睛保健 眼科服務',
    },
  ],
}))
// 视频列表
const videoList = [
  {
    img: 'https://statichk.cmermedical.com/imgs/2023/05/72ff84195ac84ec5.png',
    title:
      'pages.ophthalmic_information.ophthalmic_little_theatre_text.little_theatre_videoList.videoList1_title',
    text: [
      'pages.ophthalmic_information.ophthalmic_little_theatre_text.little_theatre_videoList.videoList1_text_1',
      'pages.ophthalmic_information.ophthalmic_little_theatre_text.little_theatre_videoList.videoList1_text_2',
    ],
    link: 'https://youtu.be/oYTtMkqVK4w',
  },
  {
    img: 'https://statichk.cmermedical.com/imgs/2023/08/34b9b04d95b61a4c.jpg',
    title:
      '母親必看！如果你有呢種仔女',
    text: [
      '今年5月14日就喺母親節喇！👩平日媽媽為屋企人辛苦打理家務，🎁身為子女嘅你又準備咗送咩禮物慰勞媽媽呢？',
      '但如果子女準備嘅驚喜禮物令你有驚無喜，你又會點？一齊睇到影片最尾，😉睇吓希瑪仔到底準備咗咩「驚喜」畀媽媽啦~',
    ],
    link: 'https://www.youtube.com/watch?v=qNF78pbRx6c',
  },
]
</script>

<template>
  <div class="currentpage">
    <div class="theatre">
      <div>
        <div>
          <img data-cfsrc="https://statichk.cmermedical.com/imgs/2023/06/d038f9bf53fdb0d9.png" 
          srcset="https://statichk.cmermedical.com/imgs/2023/07/755d969719a32368.jpg 768w, https://statichk.cmermedical.com/imgs/2023/06/d038f9bf53fdb0d9.png"  
          alt="希碼小劇場" 
          src="https://statichk.cmermedical.com/imgs/2023/06/d038f9bf53fdb0d9.png"/>
          <div>
            <svg
              width="9"
              height="144"
              viewBox="0 0 9 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-v-1d8b93bf=""
              data-v-a125a221=""
            >
              <path
                d="M1 1V143L7.5 130.5"
                stroke="#2958A3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                data-v-1d8b93bf=""
                data-v-a125a221=""
              ></path>
            </svg>
          </div>
        </div>
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_little_theatre_text.little_theatre_text1'
                )
              }}
            </div>
            <div>c-MEr theater</div>
          </div>
          <div>
            <p>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_little_theatre_text.little_theatre_p1'
                )
              }}
            </p>
            <p>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_little_theatre_text.little_theatre_p2'
                )
              }}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div v-for="(item, index) in videoList" :key="index">
          <div>
            <img :src="item.img" :alt="item.title" srcset="" />
          </div>
          <div>
            <div>{{ $t(item.title) }}</div>
            <div v-if="Array.isArray(item.text)">
              <div v-for="(ele, i) in item.text" :key="i">{{ $t(ele) }}</div>
            </div>
            <div>
              <a :href="item.link" target="_blank" rel="noopener noreferrer">{{
                $t(
                  'pages.ophthalmic_information.ophthalmic_little_theatre_text.little_theatre_a1'
                )
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <EnInformation />
    </div>
    <div class="footerMenuPom">
      <EnFooterMenu />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footerMenuPom{
  margin-bottom: 50px;
}
.theatre {
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    &::before{
      content: '';
      background:#f1f1f1;
      position: absolute;
      top: 70px;
      left: 0;
      height: 800px;
      width: calc( (100vw - 1490px )/2 + 1300px);
    }
    & > div:nth-child(1) {
      width: 100%;
      max-width: 1490px;
      margin: 150px auto 0;
      & > img {
        width: 100%;
        z-index: 5;
        position: relative;
      }

      & > div:nth-child(2) {
        z-index: 6;
        position: absolute;
        left: 50%;
        bottom: -60px;
      }
    }

    & > div:nth-child(1)::after {
      content: '';
      background: #f2f2f2;
      height: 858px;
      display: inline-block;
      position: absolute;
      top: 0;
      z-index: 1;
    }

    & > div:nth-child(2) {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 160px;
      z-index: 5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 49.14px;
        line-height: 46px;
        text-align: center;
        letter-spacing: 0.2em;
        color: #ffffff;
        & > div:nth-child(2) {
          font-family: 'Metropolis';
          font-style: normal;
          font-weight: 500;
          font-size: 25.64px;
          line-height: 44px;
          text-align: center;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #8ad8dd;
        }
      }
      & > div:nth-child(2) {
        margin-top: 42px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        text-align: center;
        letter-spacing: 0.3em;
        color: #ffffff;
      }
    }
  }

  & > div:nth-child(2) {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    min-height: 900px;
    margin-top: 150px;
    & > div {
      display: flex;
      &:not(:last-child){
          margin-bottom: 94px;
        }
      & > div:nth-child(1) {
        margin-right: 72px;
        width: 518px;
        height: 308px;
        background: #f2f2f2;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      & > div:nth-child(2) {
        width: 518px;
        position: relative;
        & > div:nth-child(1) {
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 400;
          font-size: 24.608px;
          letter-spacing: 0.05em;
          padding-bottom: 8px;
          color: #515151;
          position: relative;
        }
        & > div:nth-child(1)::after {
          content: '';
          width: 65.04px;
          border-bottom: 1.75771px solid #8ad8dd;
          display: inline-block;
          position: absolute;
          left: 0;
          bottom: 0;
        }
        & > div:nth-child(2) {
          margin-top: 34.3px;
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 350;
          font-size: 13.1828px;
          line-height: 26px;
          text-align: justify;
          letter-spacing: 0.1em;
          text-indent: 30px;
          text-transform: uppercase;
          color: #232323;
          & > div:nth-child(1) {
            margin-bottom: 40px;
          }
        }
        & > div:nth-child(3) {
          position: absolute;
          bottom: 15px;
          right: 0;
          width: 95px;
          height: 37.27px;
          background: #8ad8dd;
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 26px;
          text-align: center;
          letter-spacing: 0.1em;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .theatre{
    & > div:nth-child(1) {
      margin-top: 78px;
      &::before{
        width: calc(100% - 20px);
        height: 300px;
        top: 0;
      }
      & > div:nth-child(1) {
        margin: 0 auto;
        & > div:nth-child(2) {
          bottom: -90px;
          transform: scale(.5);
        }
      }
      & > div:nth-child(2) {
        bottom: 20px;
        & > div:nth-child(1) {
          font-size: 28px;
          line-height: 120%;
          & > div:nth-child(2) {
            font-size: 12px;
            line-height: 120%;
          }
        }
        & > div:nth-child(2) {
          font-size: 14px;
        }
      }
    }
    & > div:nth-child(2) {
      margin-top: 120px;
      width: calc(100% - 60px);
      &>div{
        flex-direction: column-reverse;
        margin-bottom: 94px;
        & > div:nth-child(1) {
          width: 100%;
          padding: 15px;
          height: auto;
        }
        & > div:nth-child(2) {
          width: 100%;
          margin-bottom: 90px;
          & > div:nth-child(1) {
            font-size: 20px;
            padding-bottom: 5px;
          }
          & > div:nth-child(2) {
            margin-top: 25px;
            & > div:nth-child(1) {
              margin-bottom: 20px;
            }
          }
          & > div:nth-child(3) {
            bottom: -60px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
}
</style>

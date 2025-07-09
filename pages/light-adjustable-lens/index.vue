<script lang="ts" setup>
import { Pagination, Autoplay } from 'swiper'
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')
useHead(() => ({
  title: '光調節人工晶狀體（LAL） | 白內障手術治療 | 希瑪眼科中心',
  meta() {
    return [
      {
        hid: 'description',
        name: 'description',
        content:
          'Light Adjustable Lens™（光調節人工晶狀體，LAL）是香港眼科領先的白內障治療選擇，術後透過紫外線光照治療調節人工晶體度數。相比傳統單焦距人工晶體，LAL 減少對眼鏡依賴，實現個性化視力矯正。希瑪眼科屬全港首間引入 LAL 人工晶體植入手術，為白內障患者提供精準及個體化定制的白內障手術後視力效果。',
      },
      {
        hid: 'Keywords',
        name: 'Keywords',
        content:
          'LAL 白內障 白內障晶體 白內障手術 白內障治療 白內障手術過程 白內障眼鏡 白內障術後保養 人工晶體 人工晶體種類 人工水晶體 人工晶狀體 Light Adjustable Lens 光調節人工晶狀體 可調節人工晶體 調節型人工晶體 單焦點人工晶體 單焦距人工晶體 晶體植入 晶體混濁 光照治療 紫外線 防紫外線眼鏡 眼科檢查 眼睛檢查 眼睛疾病 眼科醫生 香港眼科 眼科醫院 眼科診所 眼科中心',
      },
    ]
  },
}))

// 折叠问答 t('pages.medical_team.medical_team_header_title'),
const meetArr = [
  {
    title: 'pages.Light_Adjustable_Lens.Light_faq_text.Light_faq_text_q1',
    agree: ['pages.Light_Adjustable_Lens.Light_faq_text.Light_faq_text_a1'],
  },
  {
    title: 'pages.Light_Adjustable_Lens.Light_faq_text.Light_faq_text_q2',
    agree: 'pages.Light_Adjustable_Lens.Light_faq_text.Light_faq_text_a2',
  },
  {
    title: 'pages.Light_Adjustable_Lens.Light_faq_text.Light_faq_text_q3',
    agree: 'pages.Light_Adjustable_Lens.Light_faq_text.Light_faq_text_a3',
  },
  {
    title: 'pages.Light_Adjustable_Lens.Light_faq_text.Light_faq_text_q4',
    agree: 'pages.Light_Adjustable_Lens.Light_faq_text.Light_faq_text_a4',
  },
]
let windowWidth = ref(1920)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
onMounted(() => {
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})

const open = ref(false)
const openBox = () => {
  open.value = !open.value
}
</script>

<template>
   <div></div>
</template>
<style lang="scss" scoped>
.about {
  padding-bottom: 50px;
  overflow: hidden;
}

@keyframes textbgAnim {
  0% {
    left: 100%;
    transform: translateX(0);
  }
  100% {
    left: 0;
    transform: translateX(-100%);
  }
}
@media screen and (min-width: 768px) {
  .mbShow {
    display: none !important;
  }
  .light-banner {
    max-width: 1496px;
    margin: 160px auto 80px;
    position: relative;
    & > img {
      width: 100%;
      height: 100%;
    }
    .light-text {
      position: absolute;
      bottom: 77px;
      left: 63px;
      & > div:nth-child(1) {
        width: 339px;
        height: 110px;
        & > svg {
          width: 100%;
          height: 100%;
        }
      }
      & > div:nth-child(2) {
        p {
          color: #833c75;
          text-shadow: -1.829px 0.61px 2.439px rgba(0, 0, 0, 0.25);
          font-family: 'Noto Sans HK';
          font-size: 40px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 10.4px;
        }
        p:nth-child(2) {
          letter-spacing: -0.4px;
        }
      }
    }
    .en_light-text {
      & > div:nth-child(2) {
        p {
          letter-spacing: 1.4px;
          font-weight: 500;
          font-size: 24px;
        }
      }
    }
  }
  .downloadpdfs {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 48px;
  }

  .downloadpdf {
    background: white;
    color: #833c75;
    border-radius: 17.272px;
    border: 2.159px solid #833c75;
    font-size: clamp(20px, 1.45vw, 28px) !important;
    font-weight: 700;
    min-width: 213px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 13px;
    padding-right: 36px;
  }
  .en_downloadpdf {
    letter-spacing: 1px;
    box-sizing: border-box;
    padding: 0 28px;
    min-width: max-content;
    border: 2.159px solid #833c75;
    font-size: clamp(12px, 1.45vw, 14px) !important;
  }
  .btn-info:hover {
    background-color: white !important;
    color: #833c75;
    border: 2.159px solid #833c75;
  }

  .downloadpdfbox {
    max-width: 330px;
    margin: 0 115px;
    display: flex;
    justify-content: space-around;
    /* flex-flow: column; */
    align-items: center;
    margin-bottom: 27px;
  }

  .downloadpdfbox img {
    width: 41.532px;
    height: 55.102px;
  }

  .downloadIcon {
    right: -17px;
    top: 50%;
    transform: translateY(-50%);
  }
  .faq-container {
    max-width: 55vw;
    margin: 100px auto;
    & > div:nth-child(1) {
      margin-bottom: 80px;
      color: #833c75;
      text-align: center;
      font-family: 'Noto Sans HK';
      font-size: clamp(26px, 1.5625vw, 30px);
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      display: flex;
      align-items: center;
      justify-content: center;
      & > div:nth-child(2) {
        margin: 0 20px;
      }
    }
    & > div:nth-child(2) {
      :deep(.el-collapse) {
        .cataract1 {
          filter: hue-rotate(78deg) saturate(0.5);
        }
        .cataract2 {
          filter: hue-rotate(78deg) saturate(0.5);
        }
      }
    }
  }
  .what-light-adjustable {
    max-width: 1380px;
    display: flex;
    margin: 0 auto 32.29vw;
    width: 70vw;
    position: relative;
    & > div:nth-child(1) {
      flex: 3;
      max-width: 390px;
      min-height: 330px;
      width: 20.3125vw;
      height: 17.1875vw;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: rotateAnimation 1s infinite alternate;
      & > img {
        width: 100%;
        height: 100%;
      }
    }
    & > div:nth-child(2) {
      flex: 7;
      & > div:nth-child(1),
      & > div:nth-child(2) {
        color: #833c75;
        font-family: 'Noto Sans HK';
        font-size: clamp(22.537px, 2.35vw, 45px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position: relative;
        width: fit-content;
      }
      & > div:nth-child(1)::after {
        content: '';
        background: url('https://statichk.cmermedical.com/hkcmereye/LAL/isLALicon.webp')
          no-repeat;
        width: 115px;
        height: 104px;
        position: absolute;
        right: -45%;
        bottom: 10px;
        background-size: cover;
        z-index: -1;
      }
      & > div:nth-child(3) {
        margin-top: 20px;
        color: #4d4d4d;
        text-align: justify;
        font-family: 'Noto Sans HK';
        font-size: clamp(15px, 1.04vw, 20px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        span {
          color: #833c75;
          font-weight: 900;
        }
      }
    }
  }
  .what-light-adjustable-theory {
    max-width: 1140px;
    display: flex;
    margin: 115px auto 0;
    width: 70vw;
    flex-direction: column;
    position: relative;
    & > div:nth-child(1) {
      color: #474648;
      font-family: 'Noto Sans TC';
      font-size: clamp(25px, 2.4375vw, 45px);
      font-style: normal;
      font-weight: 900;
      line-height: normal;
    }
    & > div:nth-child(2) {
      margin-top: 20px;
      & > div {
        display: flex;
        & > div:nth-child(1) {
          flex: 4.2;
        }
        & > div:nth-child(2) {
          flex: 5.8;
          justify-content: center;
        }
      }
      & > div:nth-child(1) {
        padding-left: 27px;
        border-left: 3px solid #ce88bb;
        color: #833c75;
        text-align: justify;
        font-family: 'Noto Sans TC';
        font-size: clamp(15px, 1.04vw, 20px);
        font-style: normal;
        font-weight: 700;
        margin-bottom: 20px;
        max-width: 510px;
        & > div:nth-child(1) {
          max-width: 25vw;
        }
        & > div:nth-child(2) {
          position: absolute;
          right: 10%;
          top: 0;
          max-width: 420px;
        }
      }
      & > div:nth-child(2) {
        margin-top: 40px;
        & > div:nth-child(1) {
          color: #474648;
          text-align: justify;
          font-family: 'Noto Sans HK';
          font-size: clamp(15px, 1.0416vw, 20px);
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          max-width: 510px;
        }
        & > div:nth-child(2) {
          display: flex;
          gap: 0 50px;
          & > div {
            border-radius: 30.588px;
            background: #ebd4e7;
            color: #833c75;
            text-align: center;
            font-family: 'Noto Sans HK';
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            box-sizing: border-box;
            padding: 20px 40px;
            line-height: 120%;
            height: fit-content;
            width: fit-content;
          }
        }
      }
    }
  }
  .btn-box {
    width: fit-content;
    margin-top: 40px;
    & > div:nth-child(1) {
      color: #474648;
      text-align: justify;
      font-family: 'Noto Sans HK';
      font-size: clamp(15px, 1.04vw, 20px);
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    & > div:nth-child(2) {
      background: #5f91cc;
      border-radius: 15px;
      box-sizing: border-box;
      padding: 5px 18px;
      color: #fff;
      width: fit-content;
      margin: 20px 0;
      cursor: pointer;
    }
  }
  .box-show {
    position: fixed;
    background: #474648ed;
    inset: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    & > iframe {
      width: 960px;
      height: 560px;
    }
  }
  .unique-bg {
    background: linear-gradient(
      359deg,
      rgba(248, 190, 236, 0.14) -5.78%,
      rgba(232, 197, 246, 0.13) 12.26%,
      rgba(170, 206, 215, 0.13) 30.31%,
      rgba(164, 219, 221, 0.13) 35.46%,
      rgba(178, 224, 226, 0.11) 48.35%,
      rgba(255, 255, 255, 0) 102.49%
    );
    box-sizing: border-box;
    padding: 20px 0;
  }
  .what-light-adjustable-btn {
    border-radius: 46px;
    padding: 16px 35px;
    margin: 40px auto;
    cursor: pointer;
    color: #833c75 !important;
    text-align: center;
    font-family: 'Noto Sans HK';
    font-size: clamp(14px, 1.66vw, 32px);
    font-style: normal;
    font-weight: 900;
    letter-spacing: 3.2px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #d3f3f4 0%, #ffedfb 100%);
    width: fit-content;
    animation: btnGrow 2s infinite alternate;
  }
  .what-light-adjustable-unique {
    max-width: 1040px;
    display: flex;
    margin: 115px auto 0;
    width: 70vw;
    & > div:nth-child(1) {
      max-width: 448.906px;
      width: 448.906px;
      flex: 3;
      & > img {
        width: 100%;
        height: 100%;
      }
    }
    & > div:nth-child(2) {
      margin-left: 80px;
      flex: 6;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px 0;
      & > div:nth-child(1) {
        color: #833c75;
        font-family: 'Noto Sans HK';
        font-size: clamp(25px, 2.4375vw, 45px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      & > div:nth-child(2) {
        margin-top: 27px;
        color: #474648;
        text-align: justify;
        font-family: 'Noto Sans HK';
        font-size: clamp(15px, 1.04vw, 20px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        & > span {
          color: #833c75;
          font-weight: 900;
        }
      }
    }
  }
  .adjustable-video {
    position: absolute;
    bottom: -28.64vw;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 50vw;
    height: 29.165vw;
  }
  .lalWithIol {
    box-sizing: border-box;
    padding: 85px 0 125px;
    // max-width: 1080px;
    // margin: 0 auto;
    position: relative;
    & > div:nth-child(1) {
      font-family: 'Noto Sans HK';
      font-style: normal;
      line-height: normal;
      font-weight: 700;
      text-align: center;
      color: #474648;
      font-size: clamp(18px, 1.8229vw, 35px);
      & > span:nth-child(1) {
        color: #833c75;
        font-size: clamp(25px, 2.4375vw, 45px);
      }
      & > span:nth-child(2) {
        color: #833c75;
        font-size: clamp(16.179px, 1.5625vw, 30px);
        margin: 0 18px;
      }
    }
  }
  .lalWithIol::after {
    content: '';
    position: absolute;
    background: url('https://statichk.cmermedical.com/hkcmereye/LAL/LeftLAL.webp')
      no-repeat;
    left: 0;
    top: 140px;
    z-index: 10;
    width: 171px;
    height: 341px;
  }
  .lalWithIol::before {
    content: '';
    position: absolute;
    background: url('https://statichk.cmermedical.com/hkcmereye/LAL/rightLAL.webp')
      no-repeat;
    right: 0;
    bottom: 140px;
    z-index: 10;
    width: 171px;
    height: 341px;
  }

  .table_lal {
    max-width: 1080px;
    margin: 0 auto;
    margin-top: clamp(70px, 16.5vw, 240px);
    display: grid;
    grid-template-columns: 1fr 5fr 4fr;
    position: relative;
    & > div {
      border: 1px solid #dee2e6;
    }
    & > div:nth-child(1),
    & > div:nth-child(2),
    & > div:nth-child(3),
    & > div:nth-child(6),
    & > div:nth-child(4) {
      border: none !important;
    }
    & > div:nth-child(1),
    & > div:nth-child(2),
    & > div:nth-child(3) {
      position: absolute;
      top: -12%;
    }
    & > div:nth-child(2) {
      left: 32%;
      animation: glow 2s infinite alternate;
    }
    & > div:nth-child(3) {
      top: -8%;
      left: 75%;
    }
    & > div:not(:nth-child(-n + 6)):nth-child(3n + 8) {
      border-left: 4px solid #9b4c90;
      border-right: 4px solid #ce88bb;
      height: 6.89vw;
      background: #fef2f7;
      span {
        color: #833c75;
      }
      color: #474648;
      text-align: center;
      font-family: 'Noto Sans HK';
      font-size: 11.591px;
      font-style: normal;
      letter-spacing: 1.159px;
      font-size: clamp(12px, 1.45vw, 28px);
      font-weight: 700;
      letter-spacing: 2.8px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 436px;
      & > div {
        color: #474648;
        text-align: center;
        font-family: 'Noto Sans HK';
        font-size: 11.591px;
        font-style: normal;
        letter-spacing: 1.159px;
        font-size: clamp(12px, 1.45vw, 28px);
        font-weight: 700;
        letter-spacing: 2.8px;
      }
    }
    & > div:not(:nth-child(-n + 6)):nth-child(3n + 9) {
      background-color: rgba(167, 220, 221, 0.1);
      color: #474648;
      text-align: center;
      font-family: 'Noto Sans HK';
      font-size: clamp(12px, 1.09vw, 20px);
      font-style: normal;
      font-weight: 500;
      letter-spacing: 2.3px;
      display: flex;
      align-items: center;
      justify-content: center;
      & > div {
        color: #474648;
        text-align: center;
        font-family: 'Noto Sans HK';
        font-size: clamp(12px, 1.19vw, 23px);
        font-style: normal;
        font-weight: 500;
        letter-spacing: 2.3px;
      }
    }
    & > div:nth-child(5) {
      background: linear-gradient(
        90deg,
        #9b4c90 0%,
        #6d2e61 33%,
        #833c75 50%,
        #924c83 63%,
        #bc75aa 90%,
        #ce88bb 100%
      );
      color: #fff;
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 900;
      border-radius: 30px 30px 0 0;
      font-size: clamp(10px, 1.66vw, 32px);
      letter-spacing: 3.2px;
      line-height: 1.23;
      padding-bottom: 12.7px;
    }

    & > div:nth-child(6) {
      font-weight: 700;
      line-height: 1.88;
      color: #474648;
      text-align: center;
      font-family: 'Noto Sans HK';
      font-size: clamp(10px, 1.66vw, 32px);
      letter-spacing: 3.2px;
      padding-bottom: 0;
      & > div {
        width: 100%;
        height: 4.5vw;
        background: linear-gradient(
          90deg,
          #a5dbdd 0%,
          #b6dbdd 41%,
          #c5dcdd 67%
        );
        box-sizing: border-box;
        padding-top: 15px;
      }
    }
    & > div:nth-child(5),
    & > div:nth-child(6) {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      letter-spacing: 1.2px !important;
    }
    & > div:nth-child(3n + 1) {
      background: #f4f4f5;
      font-size: clamp(12px, 1.302vw, 25px);
      font-weight: 700;
      letter-spacing: 2.5px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-width: 80.168px;
      height: 6.89vw;
      max-width: 206px;
      width: 10.72vw;
    }
    & > div:nth-last-child(2) {
      position: relative;
    }
    & > div:nth-last-child(2)::after {
      content: '';
      height: 5px;
      background: linear-gradient(
        90deg,
        #9b4c90 0%,
        #6d2e61 33%,
        #833c75 50%,
        #924c83 63%,
        #bc75aa 90%,
        #ce88bb 100%
      );
      display: inline-block;
      width: 100%;
      position: absolute;
      bottom: 0;
      right: 0;
    }
    & > div:nth-child(1),
    & > div:nth-child(4) {
      background: transparent;
      border-top: none;
    }
    & > div:nth-child(2) {
      max-width: 184.133px;
      max-height: 183.645px;
      width: 9.53vw;
      height: 9.53vw;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 5px solid #fff !important;
      background: linear-gradient(
        90deg,
        #9b4c90 0%,
        #6d2e61 33%,
        #833c75 50%,
        #924c83 63%,
        #bc75aa 90%,
        #ce88bb 100%
      );
      svg {
        max-width: 100.059px;
        max-height: 105.026px;
        width: 5.2vw;
        height: 5.46vw;
      }
    }
    & > div:nth-child(3) {
      max-width: 154.747px;
      max-height: 154.337px;
      width: 8.02vw;
      height: 8.02vw;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 3px solid #fff !important;
      background: linear-gradient(90deg, #a5dbdd 0%, #b6dbdd 41%, #c5dcdd 67%);
      svg {
        width: 61.687px;
        height: 84.609px;
      }
    }
  }
  .en_table_lal {
    & > div:not(:nth-child(-n + 6)):nth-child(3n + 8) {
      height: 8.89vw;
      font-size: clamp(10px, 1.002vw, 18px);
      font-weight: 600;
      letter-spacing: 1.5px;
      & > div {
        font-size: clamp(10px, 1.002vw, 18px);
        font-weight: 600;
        letter-spacing: 1.5px;
      }
    }
    & > div:not(:nth-child(-n + 6)):nth-child(3n + 9) {
      font-size: clamp(10px, 1.002vw, 18px);
      font-weight: 600;
      letter-spacing: 1.5px;
      & > div {
        font-size: clamp(10px, 1.002vw, 18px);
        font-weight: 600;
        letter-spacing: 1.5px;
      }
    }
    & > div:nth-child(2) {
      top: -6% !important;
    }
    & > div:nth-child(3) {
      top: -4% !important;
    }
    & > div:nth-child(5) {
      line-height: 1.08;
    }
    & > div:nth-child(6) {
      line-height: 1.08;
      font-size: clamp(10px, 1.66vw, 24px);
    }
    & > div:nth-child(3n + 1) {
      height: 8.89vw;
      font-size: clamp(10px, 1.002vw, 16px);
      font-weight: 500;
      letter-spacing: 1.5px;
    }
  }
  .option_lal {
    margin-top: 100px;
    position: relative;
    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      & > div:nth-child(1) {
        width: 73.005px;
        height: 76.628px;
        margin-right: 20px;
        & > svg {
          width: 100%;
          height: 100%;
        }
      }
      & > div:nth-child(2) {
        color: #833c75;
        font-family: 'Noto Sans HK';
        font-size: clamp(25px, 1.5625vw, 30px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    & > div:nth-child(2) {
      margin-top: 71px;
      text-align: center;
      color: #4d4d4d;
      font-family: 'Noto Sans HK';
      font-size: clamp(15px, 1.04vw, 20px);
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    & > div:nth-child(3) {
      gap: 37px;
      padding-top: 80px;
      width: 64.74vw;
      max-width: 1243px;
      margin: 0 auto;
      display: flex;
    }
    .bg_optionlal_card_left {
      max-width: 425px;
      width: 22.135vw;
      height: 41.09vw;
      max-height: 789.75px;
      border-radius: 46px;
      padding: 36px 35px 0 30px;
      background: url(https://statichk.cmermedical.com/hkcmereye/LAL/optionLAL1.webp)
        no-repeat #f4f3f3;
      background-size: contain;
      background-position: bottom;
    }
    .optionlal_card_right {
      display: flex;
      flex-direction: column;
      & > div {
        border-radius: 46px;
        padding: 27px 35px 0 32px;
      }
      .bg_optionlal_card_right_one {
        background: url(https://statichk.cmermedical.com/hkcmereye/LAL/optionLAL2.webp)
          no-repeat #f4f3f3;
        background-size: contain;
        background-position: bottom;
        margin-bottom: 23px;
        max-width: 781px;
        width: 40.67vw;
        height: 17.08vw;
        max-height: 328.065px;
      }
      .bg_optionlal_card_right_two {
        background: url(https://statichk.cmermedical.com/hkcmereye/LAL/optionLAL3.webp)
          no-repeat #f4f3f3;
        background-size: contain;
        max-width: 781px;
        width: 40.67vw;
        max-height: 328.065px;
        height: 17.08vw;
        margin-bottom: 18px;
        & > div:nth-child(3) {
          max-width: 299px;
          width: 17vw;
        }
      }
      .bg_optionlal_card_right_three {
        cursor: pointer;
        color: #833c75 !important;
        text-align: center;
        font-family: 'Noto Sans HK';
        font-size: clamp(14px, 1.66vw, 32px);
        font-style: normal;
        font-weight: 900;
        letter-spacing: 3.2px;
        max-width: 781px;
        width: 40.67vw;
        max-height: 93px;
        height: 4.84vw;
        border-radius: 37px;
        background: linear-gradient(180deg, #d3f3f4 0%, #ffedfb 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        animation: btnGrow 2s infinite alternate;
      }
      .en_bg_optionlal_card_right_three {
        font-size: clamp(12px, 1.66vw, 24px);
        font-weight: 700;
        letter-spacing: 1.5px;
      }
    }
  }
  .option_lal::after {
    content: '';
    position: absolute;
    background: url('https://statichk.cmermedical.com/hkcmereye/LAL/LeftLAL.webp')
      no-repeat;
    left: 0;
    bottom: -140px;
    z-index: 10;
    width: 171px;
    height: 341px;
  }
  .card_title {
    color: #833c75;
    font-family: 'Noto Sans HK';
    font-size: clamp(20px, 1.5625vw, 30px);
    font-style: normal;
    font-weight: 900;
    line-height: 1.45;
    letter-spacing: 3px;
    margin-bottom: 11px;
  }
  .en_card_title {
    font-size: clamp(16px, 1.5625vw, 22px);
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: 0.8px;
  }
  .card_text {
    color: #474648;
    text-align: justify;
    font-family: 'Noto Sans HK';
    font-size: clamp(15px, 1.0416vw, 20px);
    font-style: normal;
    font-weight: 700;
    line-height: 1.63;
    letter-spacing: 2px;
  }
  .en_card_text {
    font-size: clamp(12px, 1.0416vw, 19px);
    font-weight: 500;
    line-height: 1.53;
    letter-spacing: 0.8px;
  }
}
@keyframes btnGrow {
  0% {
    transform: translateX(-10px);
    box-shadow: 0px 0px 5px 0px rgba(230, 11, 221, 0.29);
  }
  50% {
    box-shadow: 0px 0px 8px 1px rgba(230, 11, 221, 0.29),
      0px 0px 12px 2px rgba(230, 11, 221, 0.29),
      0px 0px 15px 4px rgba(230, 11, 221, 0.29);
  }
  100% {
    transform: translateX(10px);
    box-shadow: 0px 0px 5px 0px rgba(230, 11, 221, 0.29);
  }
}
@keyframes glow {
  0% {
    transform: rotate(-25deg);
    box-shadow: 0px 1px 3px rgba(230, 11, 221, 0.84);
  }

  50% {
    box-shadow: 0px 1px 8px #e60bdd, 0px 1px 10px #e60bdd, 0px 1px 12px #e60bdd;
  }
  100% {
    transform: rotate(45deg);
    box-shadow: 0px 1px 3px rgba(230, 11, 221, 0.84);
  }
}
@keyframes rotateAnimation {
  0% {
    transform: rotate(-25deg);
  }
  100% {
    transform: rotate(25deg);
  }
}
@media screen and (min-width: 992px) {
  .downloadpdfs {
    padding-bottom: 120px;
    padding-top: 73px;
  }

  .downloadpdfbox {
    justify-content: center;
    flex-flow: column;
  }

  .downloadpdf {
    max-width: 306px;
    height: 56px;
    padding-right: 28px;
    margin-left: 0;
  }

  .downloadpdfbox img {
    width: 83.881px;
    height: 111.288px;
    margin-bottom: 34px;
  }

  .downloadIcon {
    right: -24px;
    position: absolute;
  }
}
@media screen and (max-width: 768px) {
  .light-banner {
    position: relative;
  }
  .light-text {
    position: absolute;
    bottom: 12px;
    left: 26px;
    & > div:nth-child(1) {
      max-width: 159px;
      width: 159px;
      height: 49px;
      & > svg {
        width: 100%;
        height: 100%;
      }
    }
    & > div:nth-child(2) {
      p {
        color: #833c75;
        text-shadow: -0.854px 0.285px 1.138px rgba(0, 0, 0, 0.25);
        font-family: 'Noto Sans HK';
        font-size: 24.441px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      p:nth-child(1) {
        span {
          display: none;
        }
      }
    }
  }
  .what-light-adjustable {
    box-sizing: border-box;
    padding: 30px 20px;
    & > div:nth-child(1) {
      display: none;
    }
    & > div:nth-child(2) {
      padding-top: 20px;
      & > div:nth-child(1),
      & > div:nth-child(2) {
        color: #833c75;
        font-family: 'Noto Sans HK';
        font-size: clamp(22.537px, 2.35vw, 45px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position: relative;
        width: fit-content;
      }
      & > div:nth-child(1)::before {
        content: '';
        position: absolute;
        background: url(https://statichk.cmermedical.com/hkcmereye/LAL/isLALicon.webp)
          no-repeat;
        width: 57.595px;
        height: 52.086px;
        background-size: cover;
        top: -28px;
        right: -32px;
      }
      & > div:nth-child(3) {
        margin-top: 16px;
        color: #4d4d4d;
        text-align: justify;
        font-family: 'Noto Sans HK';
        font-size: clamp(15px, 1.04vw, 20px);
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        span {
          color: #833c75;
        }
      }
    }
  }
  .adjustable-video {
    max-width: 326px;
    max-height: 175px;
    height: 175px;
    margin-top: 47px;
    background-color: #d9d9d9;
  }
  .what-light-adjustable-theory {
    box-sizing: border-box;
    padding: 30px 20px;
    & > div:nth-child(1) {
      color: #474648;
      font-family: 'Noto Sans TC';
      font-size: clamp(25px, 2.4375vw, 45px);
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      margin-bottom: 10px;
    }
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          color: #833c75;
          text-align: justify;
          font-family: 'Noto Sans TC';
          font-size: clamp(15px, 1.04vw, 20px);
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          margin-top: 22px;
          padding-left: 11px;
          border-left: 3px solid #ce88bb;
        }
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        & > div:nth-child(1) {
          color: #474648;
          text-align: justify;
          font-family: 'Noto Sans HK';
          font-size: clamp(15px, 1.0416vw, 20px);
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          margin-top: 30px;
        }
        & > div:nth-child(2) {
          display: flex;
          gap: 0 30px;
          & > div {
            border-radius: 19.268px;
            background: #ebd4e7;
            color: #833c75;
            text-align: center;
            font-family: 'Noto Sans HK';
            font-size: 15px;
            font-style: normal;
            font-weight: 700;
            box-sizing: border-box;
            padding: 8px 16px;
          }
        }
      }
    }
  }
  .btn-box {
    margin-top: 20px;
    & > div:nth-child(1) {
      color: #474648;
      text-align: justify;
      font-family: 'Noto Sans HK';
      font-size: clamp(15px, 1.04vw, 20px);
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    & > div:nth-child(2) {
      background: #5f91cc;
      border-radius: 15px;
      box-sizing: border-box;
      padding: 5px 18px;
      color: #fff;
      width: fit-content;
      margin: 20px 0;
      cursor: pointer;
    }
  }
  .box-show {
    position: fixed;
    background: #474648ed;
    inset: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    & > iframe {
      width: 92vw;
      height: 50.665vw;
    }
  }
  .unique-bg {
    background: linear-gradient(
      359deg,
      rgba(248, 190, 236, 0.14) -5.78%,
      rgba(232, 197, 246, 0.13) 5.26%,
      rgba(170, 206, 215, 0.13) 40.31%,
      rgba(214, 238, 239, 0.06) 75.42%,
      rgba(255, 255, 255, 0) 102.49%
    );
    padding-bottom: 30px;
  }
  .what-light-adjustable-unique {
    box-sizing: border-box;
    padding: 30px 20px;
    & > div:nth-child(1) {
      max-width: 252.444px;
      max-height: 187.731px;
      width: 252.444px;
      height: 187.731px;
      margin: 0 auto;
      & > img {
        width: 100%;
        height: 100%;
      }
    }
    & > div:nth-child(2) {
      color: #474648;
      text-align: justify;
      font-family: 'Noto Sans HK';
      font-size: clamp(15px, 1.04vw, 20px);
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-top: 33px;
      & > span {
        color: #833c75;
      }
    }
  }
  .what-light-adjustable-btn {
    border-radius: 35px;
    padding: 10px 22px;
    margin: 10px auto 20px;
    cursor: pointer;
    color: #833c75 !important;
    text-align: center;
    font-family: 'Noto Sans HK';
    font-size: clamp(10px, 1.26vw, 22px);
    font-style: normal;
    font-weight: 700;
    letter-spacing: 1.2px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #d3f3f4 0%, #ffedfb 100%);
    width: fit-content;
    animation: btnGrow 2s infinite alternate;
  }
  .lalWithIol {
    box-sizing: border-box;
    padding: 40px 15px;
    position: relative;
    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Noto Sans HK';
      font-style: normal;
      line-height: normal;
      font-weight: 700;
      color: #474648;
      font-size: clamp(18px, 1.8229vw, 35px);
      & > span:nth-child(1) {
        color: #833c75;
        font-size: clamp(25px, 2.4375vw, 45px);
      }
      & > span:nth-child(2) {
        color: #833c75;
        font-size: clamp(16.179px, 1.5625vw, 30px);
        margin: 0 12px;
      }
    }
  }
  .lalWithIol::after {
    content: '';
    position: absolute;
    background: url('https://statichk.cmermedical.com/hkcmereye/LAL/LeftLAL.webp')
      no-repeat;
    left: 0;
    top: 80px;
    z-index: 10;
    width: 68px;
    height: 136px;
    background-size: cover;
  }
  .table_lal {
    max-width: 500px;
    overflow-x: scroll;
    margin-top: clamp(50px, 12.5vw, 200px);
    display: grid;
    grid-template-columns: 2fr 4fr 4fr;
    position: relative;
    box-sizing: border-box;
    padding: 50px 0 10px;
    & > div {
      border: 1px solid #dee2e6;
    }
    & > div:nth-child(1),
    & > div:nth-child(2),
    & > div:nth-child(3),
    & > div:nth-child(6),
    & > div:nth-child(4) {
      border: none !important;
    }
    & > div:nth-child(1),
    & > div:nth-child(2),
    & > div:nth-child(3) {
      position: absolute;
      top: 5%;
    }
    & > div:nth-child(2) {
      left: 50%;
      animation: glow 1s infinite alternate;
      width: 51.48px;
      height: 51.344px;
    }
    & > div:nth-child(3) {
      top: 8%;
      left: 115%;
      width: 42.909px;
      height: 42.795px;
    }
    & > div:not(:nth-child(-n + 6)):nth-child(3n + 8) {
      border-left: 1.2px solid #9b4c90;
      border-right: 1.2px solid #ce88bb;
      // height: 6.89vw;
      background: #fef2f7;
      span {
        color: #833c75;
      }
      color: #474648;
      text-align: center;
      font-family: 'Noto Sans HK';
      font-size: 11.591px;
      font-style: normal;
      letter-spacing: 1.159px;
      font-size: clamp(10px, 0.95vw, 14px);
      font-weight: 500;
      letter-spacing: 1.2px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 186px;
      & > div {
        color: #474648;
        text-align: center;
        font-family: 'Noto Sans HK';
        font-size: 11.591px;
        font-style: normal;
        letter-spacing: 1.159px;
        font-size: clamp(8px, 0.85vw, 14px);
        font-weight: 700;
        letter-spacing: 1.2px;
      }
    }
    & > div:not(:nth-child(-n + 6)):nth-child(3n + 9) {
      background-color: rgba(167, 220, 221, 0.1);
      color: #474648;
      text-align: center;
      font-family: 'Noto Sans HK';
      font-size: clamp(8px, 0.89vw, 16px);
      font-style: normal;
      font-weight: 500;
      letter-spacing: 1.4px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 186px;
      & > div {
        color: #474648;
        text-align: center;
        font-family: 'Noto Sans HK';
        font-size: clamp(8px, 0.89vw, 15px);
        font-style: normal;
        font-weight: 500;
        letter-spacing: 1.3px;
      }
    }
    & > div:nth-child(5) {
      background: linear-gradient(
        90deg,
        #9b4c90 0%,
        #6d2e61 33%,
        #833c75 50%,
        #924c83 63%,
        #bc75aa 90%,
        #ce88bb 100%
      );
      color: #fff;
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 900;
      border-radius: 15px 15px 0 0;
      font-size: clamp(8px, 0.76vw, 18px);
      letter-spacing: 1.4px;
      line-height: 1.23;
      padding-bottom: 5.7px;
    }

    & > div:nth-child(6) {
      font-weight: 700;
      line-height: 1.28;
      color: #474648;
      text-align: center;
      font-family: 'Noto Sans HK';
      font-size: clamp(8px, 0.86vw, 18px);
      letter-spacing: 1.6px;
      padding-bottom: 0;
      & > div {
        width: 100%;
        height: 10vw;
        background: linear-gradient(
          90deg,
          #a5dbdd 0%,
          #b6dbdd 41%,
          #c5dcdd 67%
        );
        box-sizing: border-box;
        padding-top: 17px;
      }
    }
    & > div:nth-child(5),
    & > div:nth-child(6) {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      letter-spacing: 1.2px !important;
    }
    & > div:nth-child(3n + 1) {
      background: #f4f4f5;
      font-size: clamp(8px, 0.702vw, 15px);
      font-weight: 700;
      letter-spacing: 2.5px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-width: 70.168px;
      min-height: 16vw;
      // height: 6.89vw;
      // max-width: 206px;
      // width: 10.72vw;
    }
    & > div:nth-last-child(2) {
      position: relative;
    }
    & > div:nth-last-child(2)::after {
      content: '';
      height: 2px;
      background: linear-gradient(
        90deg,
        #9b4c90 0%,
        #6d2e61 33%,
        #833c75 50%,
        #924c83 63%,
        #bc75aa 90%,
        #ce88bb 100%
      );
      display: inline-block;
      width: 100%;
      position: absolute;
      bottom: 0;
      right: 0;
    }
    & > div:nth-child(1),
    & > div:nth-child(4) {
      background: transparent;
      border-top: none;
    }
    & > div:nth-child(2) {
      // max-width: 184.133px;
      // max-height: 183.645px;
      // width: 9.53vw;
      // height: 9.53vw;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #fff !important;
      background: linear-gradient(
        90deg,
        #9b4c90 0%,
        #6d2e61 33%,
        #833c75 50%,
        #924c83 63%,
        #bc75aa 90%,
        #ce88bb 100%
      );
      svg {
        max-width: 100.059px;
        max-height: 105.026px;
        width: 5.2vw;
        height: 5.46vw;
      }
    }
    & > div:nth-child(3) {
      // max-width: 154.747px;
      // max-height: 154.337px;
      // width: 8.02vw;
      // height: 8.02vw;
      width: 42.909px;
      height: 42.795px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 3px solid #fff !important;
      background: linear-gradient(90deg, #a5dbdd 0%, #b6dbdd 41%, #c5dcdd 67%);
      svg {
        width: 5.2vw;
        height: 5.46vw;
      }
    }
  }
  .en_table_lal {
    & > div:nth-child(2) {
      left: 42% !important;
    }
    & > div:nth-child(3n + 1) {
      min-height: 24vw;
      min-width: 30vw;
      font-size: clamp(12px, 0.902vw, 15px);
    }
    & > div:not(:nth-child(-n + 6)):nth-child(3n + 8) {
      min-width: 220px;
      font-size: clamp(12px, 0.95vw, 15px);
      font-weight: 700;
      letter-spacing: 1.159px;
      letter-spacing: 0.3px;
      & > div {
        font-size: clamp(12px, 0.95vw, 15px);
        font-weight: 700;
        letter-spacing: 1.159px;
        letter-spacing: 0.3px;
      }
    }

    & > div:not(:nth-child(-n + 6)):nth-child(3n + 9) {
      min-width: 220px;
      font-size: clamp(12px, 0.95vw, 15px);
      font-weight: 700;
      letter-spacing: 1.159px;
      letter-spacing: 0.3px;
      & > div {
        font-size: clamp(12px, 0.95vw, 15px);
        font-weight: 700;
        letter-spacing: 1.159px;
        letter-spacing: 0.3px;
      }
    }
  }
  .table_lal::-webkit-scrollbar {
    display: none;
  }
  .option_lal {
    box-sizing: border-box;
    padding: 0 15px;
    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      & > div:nth-child(1) {
        width: 43.025px;
        height: 45.16px;
        margin-right: 21px;
        & > svg {
          width: 100%;
          height: 100%;
        }
      }
      & > div:nth-child(2) {
        color: #833c75;
        font-family: 'Noto Sans HK';
        font-size: clamp(25px, 1.5625vw, 30px);
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    & > div:nth-child(2) {
      color: #4d4d4d;
      text-align: justify;
      font-family: 'Noto Sans HK';
      font-size: clamp(15px, 1.04vw, 20px);
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-top: 41px;
    }
  }
  .bg_optionlal_card_left {
    background: url(https://statichk.cmermedical.com/hkcmereye/LAL/optionLALPhone1.webp)
      no-repeat #f4f3f3;
    background-size: contain;
    background-position: right;
    border-radius: 27px;
    margin-top: 22px;
    padding: 10px 0 15px 17px;
    max-width: 368px;
  }
  .bg_optionlal_card_right_one {
    background: url(https://statichk.cmermedical.com/hkcmereye/LAL/optionLALPhone2.webp)
      no-repeat #f4f3f3;
    background-size: contain;
    background-position: right;
    border-radius: 27px;
    margin-top: 22px;
    padding: 10px 0 15px 17px;
    max-width: 368px;
  }
  .bg_optionlal_card_right_two {
    background: url(https://statichk.cmermedical.com/hkcmereye/LAL/optionLALPhone3.webp)
      no-repeat #f4f3f3;
    background-size: contain;
    background-position: right;
    border-radius: 27px;
    margin-top: 22px;
    padding: 10px 0 15px 17px;
    max-width: 368px;
  }
  .bg_optionlal_card_right_three {
    margin-top: 40px;
    display: flex;
    box-sizing: border-box;
    padding: 5px 10px;
    // margin-top: 72px;
    // max-width: 358px;
    // height: 42.467px;
    // flex-shrink: 0;
    justify-content: center;
    gap: 0 10px;
    border-radius: 16.895px;
    background: linear-gradient(180deg, #d3f3f4 0%, #ffedfb 100%);
    color: #833c75 !important;
    text-align: center;
    font-family: 'Noto Sans HK';
    font-size: 3.07vw;
    font-style: normal;
    font-weight: 700;
    line-height: 18.913px;
    letter-spacing: 1.261px;
    position: relative;
    animation: btnGrowPhone 2s infinite alternate;
    align-items: center;
    & > .card_text {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 9px;
      height: 13px;
      & > svg {
        width: 100%;
        height: 100%;
      }
    }
  }
  .card_title {
    color: #833c75;
    font-family: 'Noto Sans HK';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.28;
    letter-spacing: 1.2px;
    margin-bottom: 10px;
  }
  .en_card_title {
  }
  .card_text {
    color: #474648;
    text-align: justify;
    font-family: 'Noto Sans HK';
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 20.6px;
    letter-spacing: 1.2px;
    max-width: 50%;
  }
  .en_card_text {
    font-size: 12px;
    line-height: 14.5px;
    letter-spacing: 1px;
    text-align: start;
  }
  .downloadpdfs {
    flex-flow: column;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;
  }
  .downloadpdfbox {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    & > img {
      width: 41.532px;
      height: 55.102px;
    }
    & > a {
      background: white;
      color: #833c75;
      border-radius: 17.272px;
      border: 2.159px solid #833c75;
      font-size: clamp(20px, 1.45vw, 28px) !important;
      font-weight: 500;
      box-sizing: border-box;
      padding: 0px 12px;
      min-width: 185px;
      // height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      // margin-left: 20px;
      position: relative;
    }
    .en_downloadpdf {
      font-size: clamp(12px, 1.45vw, 28px) !important;
      padding: 5px 12px;
      min-width: 55vw;
    }
  }
  .downloadIcon {
    position: absolute;
    right: -13px;
    top: 50%;
    transform: translateY(-50%);
    width: 25px;
    height: 25px;
    & > svg {
      width: 100%;
      height: 100%;
    }
  }
  .faq-container {
    max-width: 85vw;
    margin: 25px auto;
    & > div:nth-child(1) {
      margin-bottom: 25px;
      color: #833c75;
      text-align: center;
      font-family: 'Noto Sans HK';
      font-size: clamp(12px, 1.5625vw, 24px);
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      display: flex;
      align-items: center;
      justify-content: center;
      & > div:nth-child(2) {
        margin: 0 20px;
      }
    }
    & > div:nth-child(2) {
      :deep(.el-collapse) {
        .cataract1 {
          filter: hue-rotate(78deg) saturate(0.5);
        }
        .cataract2 {
          filter: hue-rotate(78deg) saturate(0.5);
        }
      }
    }
  }
}
</style>

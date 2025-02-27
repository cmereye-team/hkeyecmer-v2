

<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})

const eyesightLists = [
  {
    id: '08',
    title: '白內障測試',
    icon: 'https://static.cmereye.com/imgs/2023/06/0517140842702146.png',
    bgColor: '#2BB6D7, #D5F2F9',
  },
  {
    id: '04',
    title: '黃斑病變',
    icon: 'https://static.cmereye.com/imgs/2023/06/eef8ae8c445a9865.png',
    bgColor: '#F3BB42, #FFEDC6',
  },
  {
    id: '07',
    title: '乾眼症測試',
    icon: 'https://static.cmereye.com/imgs/2023/06/4203c20d5ceb403a.png',
    bgColor: '#8F88E1, #E8E7FC',
  },
  {
    id: '01',
    title: '色盲測試',
    icon: 'https://static.cmereye.com/imgs/2023/06/82321915f3211446.png',
    bgColor: '#FAA276, #FCDCCD',
  },
  {
    id: '02',
    title: '散光測試',
    icon: 'https://static.cmereye.com/imgs/2023/06/9343743d3ae245d5.png',
    bgColor: '#65D2C5, #BDF6F3',
  },
  {
    id: '03',
    title: '近視遠視',
    icon: 'https://static.cmereye.com/imgs/2023/06/3746c070f927624c.png',
    bgColor: '#42ABEB, #C9E8FF',
  },
  {
    id: '05',
    title: '眼鏡檢查',
    icon: 'https://static.cmereye.com/imgs/2023/06/eace652fbc4d063e.png',
    bgColor: '#3DAAD9, #DBF2FF',
  },
  {
    id: '06',
    title: '調節功能',
    icon: 'https://static.cmereye.com/imgs/2023/06/0dcf2c16da63a000.png',
    bgColor: '#52C0D3, #E7FAFD',
  },
  {
    id: '09',
    title: '視神經測試',
    icon: 'https://static.cmereye.com/imgs/2023/06/60a1c82ff1e5436e.png',
    bgColor: '#D99959, #FCEDDE',
  },
  {
    id: '10',
    title: '視覺敏感度',
    icon: 'https://static.cmereye.com/imgs/2023/06/da00d03c272d0728.png',
    bgColor: '#F3A999, #FFD9D2',
  },
  {
    id: '11',
    title: '對比敏感度',
    icon: 'https://static.cmereye.com/imgs/2023/06/ced99148aa67acc3.png',
    bgColor: '#A6A6E4, #EEEEFF',
  },
  {
    id: '12',
    title: '中心視力',
    icon: 'https://static.cmereye.com/imgs/2023/06/667502d2fe2be290.png',
    bgColor: '#A3D64F, #E1F8BC',
  },
]

const toTestPage = (_id: string) => {
  if (['06', '07', '08'].includes(_id)) {
    location.href = `/yahoo/vision-health-test/qa?id=${_id}`
  } else {
    location.href = `/yahoo/vision-health-test?id=${_id}`
  }
}
</script>

<template>
  <div>
    <div class="eyesight">
      <div class="eyesight-title">
        <div class="eyesight-title-in">視力測試</div>
      </div>
      <div class="eyesight-content">
        <div
          class="eyesight-content-in"
          v-for="(item, index) in eyesightLists"
          :key="index"
        >
          <div
            :style="{ background: `linear-gradient(0deg, ${item.bgColor})` }"
            @click="toTestPage(item.id)"
          >
            <img :src="item.icon" alt="" />
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
      <div class="eyesight-remark">
        <!-- 本網站提供的視力測試只是初步評估測試者的視力，如果您有任何眼睛不適的症狀，應盡快尋求眼科專科醫生檢查及治療。 -->
        <div class="eyesight-remark-in">
          <img
            srcset="
              https://static.cmereye.com/imgs/2024/04/76decfbf3c0b2ade.png 768w,
              https://static.cmereye.com/imgs/2024/04/914738d8159c2150.png
            "
            src="https://static.cmereye.com/imgs/2024/04/914738d8159c2150.png"
            alt=""
          />
          本網站提供的視力測試只是初步評估測試者的視力，<br />如果您有任何眼睛不適的症狀，<br />應盡快尋求眼科專科醫生檢查及治療。
        </div>
      </div>
    </div>
    <div class="footerMenuPom">
      <yahooPageFooterMenu />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footerMenuPom {
  margin-bottom: 50px;
}
.eyesight {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  min-height: 100vh;
  &-title {
    width: 100%;
    max-width: 968px;
    margin: 134px auto 0;
    &-in {
      color: #515151;
      writing-mode: vertical-lr;
      font-size: 40.143px;
      line-height: 46.286px;
      letter-spacing: 2.007px;
      margin-left: 20px;
      position: relative;
      &::before {
        content: 'vision test';
        position: absolute;
        left: -40px;
        bottom: 0;
        color: #8ad8dd;
        text-align: center;
        font-size: 23.017px;
        font-family: 'Metropolis';
        font-weight: 500;
        line-height: 54.887px;
        letter-spacing: 2.302px;
        text-transform: uppercase;
      }
    }
  }
  &-content {
    margin-top: 58px;
    display: flex;
    flex-wrap: wrap;
    & > div {
      width: 33.33%;
      display: flex;
      justify-content: center;
      margin-bottom: 100px;
      & > div {
        width: 256px;
        height: 256px;
        border-radius: 25px;
        box-shadow: 9px 10px 12px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.3s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
          margin-top: 15px;
          color: #fff;
          text-shadow: 0px 4px 4px rgba(54, 33, 33, 0.25);
          font-size: 28px;
          transition: all 0.3s;
        }
        img {
          transition: all 0.3s;
        }
        &:hover {
          transform: translateY(-10px);
          border-radius: 5px;
          box-shadow: 5px 20px 12px rgba(0, 0, 0, 0.1);
          span {
            text-shadow: 0px 6px 6px rgba(107, 53, 53, 0.5);
          }
          img {
            filter: drop-shadow(0px 6px 6px rgba(107, 53, 53, 0.4));
          }
        }
      }
    }
  }
  &-remark {
    width: 100%;
    max-width: 968px;
    margin: 50px auto;
    color: #515151;
    font-size: 20px;
    margin-bottom: 300px;
    line-height: 180%;
    display: flex;
    justify-content: center;
    &-in {
      border: 4px solid #6dc4e2;
      border-radius: 70px;
      display: inline-block;
      text-align: center;
      padding: 10px 50px 10px 110px;
      position: relative;
      & > img {
        position: absolute;
        left: -80px;
        bottom: -15px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .eyesight {
    &-title {
      &-in {
        writing-mode: initial;
        font-size: 30px;
        margin-left: 30px;
        &::before {
          left: 0;
          bottom: -20px;
          font-size: 18px;
          line-height: 1.6;
          letter-spacing: 0.03em;
        }
      }
    }
    &-content {
      width: calc(100% - 60px);
      margin: 45px auto 0;
      & > div {
        margin-bottom: 40px;
        & > div {
          border-radius: 10px;
          width: 90px;
          height: 90px;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
          span {
            margin-top: 7px;
            font-size: 12px;
          }
          img {
            max-width: 60%;
            max-height: 60%;
          }
          &:hover {
            transform: translateY(-5px);
            border-radius: 5px;
            box-shadow: 5px 10px 5px rgba(0, 0, 0, 0.1);
            span {
              text-shadow: 0px 6px 6px rgba(107, 53, 53, 0.5);
            }
            img {
              filter: drop-shadow(0px 6px 6px rgba(107, 53, 53, 0.4));
            }
          }
        }
        &:nth-of-type(3n) {
          justify-content: flex-end;
        }
        &:nth-of-type(3n-2) {
          justify-content: flex-start;
        }
      }
    }
    &-remark {
      width: calc(100% - 60px);
      font-size: 12px;
      margin-top: 200px;
      line-height: 1.4;
      &-in {
        border: 2px solid #6dc4e2;
        padding: 5px 20px;
        & > img {
          left: 50%;
          transform: translateX(-50%);
          bottom: 100%;
          z-index: 0;
        }
      }
    }
  }
}
</style>

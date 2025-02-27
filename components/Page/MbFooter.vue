<script lang="ts" setup>
const route: any = useRoute()
const toTop = () => {
  let top = document.documentElement.scrollTop || document.body.scrollTop
  const timeTop = setInterval(() => {
    document.body.scrollTop = document.documentElement.scrollTop = top -= 50
    if (top <= 0) {
      clearInterval(timeTop)
    }
  }, 10)
}
const handleScroll = () => {
  const scrollHeight = document.documentElement.scrollTop
  if (scrollHeight >= 900) {
    isShowTopBtn.value = true
  } else {
    isShowTopBtn.value = false
  }
}

const isShow = ref(false)
const touch_btn_whatsApp = () => {
  isShow.value = !isShow.value
}
const isShowTopBtn = ref(false)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
const rt = ref(route)
</script>

<template>
  <div class="mbFooter">
    <div class="mbFooter-in">
      <a class="btn_whatsApp ga-mb-bottom-WhatsApp">
        <div @click="touch_btn_whatsApp()">
          <div class="ga-mb-bottom-WhatsApp">
            <img
              class="ga-mb-bottom-WhatsApp"
              src="https://static.cmereye.com/imgs/2023/07/25871528f005d41a.png"
              alt=""
            />
          </div>
          <div class="ga-mb-bottom-WhatsApp">WhatsApp</div>
        </div>
        <div class="touch_btn_whatsApp" v-if="isShow">
          <a
            href="https://api.whatsapp.com/send?phone=85260629611&text=白內障專線查詢"
            target="_blank"
          >
            <div class="ga-mb-bottom-ljzd">
              <img
                src="https://static.cmereye.com/imgs/2024/06/3f25805941048474.png"
                alt=""
              />
            </div>
            <div>白內障專線</div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=85293451508&text=你好，我想查詢"
            target="_blank"
          >
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/06/8a5b747961631fa0.png"
                alt=""
              />
            </div>
            <div>一般咨詢</div>
          </a>
        </div>
      </a>
      <!-- <a  v-else id="ga-mb-bottom-WhatsApp" class="ga-mb-bottom-WhatsApp" href='https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'>
        <div class="ga-mb-bottom-WhatsApp"><img class="ga-mb-bottom-WhatsApp" src="https://static.cmereye.com/imgs/2023/07/25871528f005d41a.png" alt=""></div>
        <div class="ga-mb-bottom-WhatsApp">WhatsApp</div>
      </a> -->
      <a
        href="tel: +852 3956 2025"
        id="ga-mb-bottom-ljzd"
        class="ga-mb-bottom-ljzd"
      >
        <div class="ga-mb-bottom-ljzd">
          <img
            class="ga-mb-bottom-ljzd"
            src="https://static.cmereye.com/imgs/2023/07/8bb225b21f8baa35.png"
            alt=""
          />
        </div>
        <div class="ga-mb-bottom-ljzd">
          {{ $t('components.content.onlinContact.callNow') }}{{ '\n' }}(852)
          3956 2025
        </div>
      </a>
      <a
        href="https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&lng=big5"
        id="ga-mb-bottom-xsdh"
        class="ga-mb-bottom-xsdh"
      >
        <div class="ga-mb-bottom-xsdh">
          <img
            class="ga-mb-bottom-xsdh"
            src="https://static.cmereye.com/imgs/2023/07/9c9ca82dbc0545a7.png"
            alt=""
          />
        </div>
        <div class="ga-mb-bottom-xsdh">
          {{ $t('components.content.onlinContact.chatNow2') }}
        </div>
      </a>
    </div>
    <div
      v-if="route.name !== 'index'"
      id="mbFooterTop"
      class="mbFooter-top"
      @click="toTop"
    >
      <img
        src="https://static.cmereye.com/imgs/2023/07/3a2e901023d9c537.png"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mbFooter {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 20px 0;
  background: rgba(41, 88, 163, 1);
  display: block;
  z-index: 1000;
  &-in {
    display: flex;
    & > a {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      &:not(:last-child) {
        border-right: 1px solid #fff;
      }
      & > div:nth-of-type(1) {
        width: 25px;
        margin-right: 5px;
        img {
          width: 100%;
        }
      }
      & > div:nth-of-type(2) {
        white-space: pre-wrap;
        color: #fff;
        font-size: 3.61vw;
      }
      &:nth-of-type(2) {
        flex: 1.3;
      }
    }
    .btn_whatsApp{
      position: relative;
      & > div:nth-child(1) {
        border-right: none !important;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        &:not(:last-child) {
          border-right: 1px solid #fff;
        }
        & > div:nth-of-type(1) {
          width: 6.65vw;
          img {
            width: 100%;
            margin-right: 1.33vw;
          }
        }
        & > div:nth-of-type(2) {
          white-space: pre-wrap;
          color: #fff;
          font-size: 3.61vw;
        }
        &:nth-of-type(2) {
          flex: 1.5;
        }
      }
      & > div:nth-child(2) {
        position: absolute;
        bottom: calc(100% + 20px);
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // background: rgba(41, 88, 163, 1);
        color: #fff;
        font-size: 3.61vw;
        & > a {
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: space-around;
        }
        & > a:nth-child(1) {
          background: #e13540;
          gap: 0 7px;
          padding: 11px 5px 8px;
          & > div:nth-child(1) {
            width: 25%;
          }
          font-size: 3.2vw;
        }
        & > a:nth-child(2) {
          background: rgba(41, 88, 163, 1);
          gap: 0 7px;
          padding: 11px 5px 8px;
          & > div:nth-child(1) {
            width: 25%;
          }
          font-size: 3.2vw;
        }
      }
    }
    // & > a:nth-child(1) {
    //   position: relative;
    //   & > div:nth-child(1) {
    //     border-right: none !important;
    //     display: flex;
    //     flex: 1;
    //     justify-content: center;
    //     align-items: center;
    //     &:not(:last-child) {
    //       border-right: 1px solid #fff;
    //     }
    //     & > div:nth-of-type(1) {
    //       width: 6.65vw;
    //       img {
    //         width: 100%;
    //         margin-right: 1.33vw;
    //       }
    //     }
    //     & > div:nth-of-type(2) {
    //       white-space: pre-wrap;
    //       color: #fff;
    //       font-size: 3.61vw;
    //     }
    //     &:nth-of-type(2) {
    //       flex: 1.5;
    //     }
    //   }
    //   & > div:nth-child(2) {
    //     position: absolute;
    //     bottom: calc(100% + 20px);
    //     left: 0;
    //     width: 100%;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     align-items: center;
    //     // background: rgba(41, 88, 163, 1);
    //     color: #fff;
    //     font-size: 3.61vw;
    //     & > a {
    //       display: flex;
    //       align-items: center;
    //       width: 100%;
    //       justify-content: space-around;
    //     }
    //     & > a:nth-child(1) {
    //       background: #e13540;
    //       gap: 0 7px;
    //       padding: 11px 5px 8px;
    //       & > div:nth-child(1) {
    //         width: 25%;
    //       }
    //       font-size: 3.2vw;
    //     }
    //     & > a:nth-child(2) {
    //       background: rgba(41, 88, 163, 1);
    //       gap: 0 7px;
    //       padding: 11px 5px 8px;
    //       & > div:nth-child(1) {
    //         width: 25%;
    //       }
    //       font-size: 3.2vw;
    //     }
    //   }
    // }
    .btn_whatsApp::after {
      content: '';
      background: url(https://static.cmereye.com/imgs/2024/06/39bf14ea24209bbc.png)
        no-repeat;
      background-size: 100%;
      width: 11px;
      height: 7px;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
      z-index: 4;
      display: inline-block;
      animation: topDownCircle 2s linear infinite;
    }
    // & > a:nth-child(1)::after {
    //   content: '';
    //   background: url(https://static.cmereye.com/imgs/2024/06/39bf14ea24209bbc.png)
    //     no-repeat;
    //   background-size: 100%;
    //   width: 11px;
    //   height: 7px;
    //   right: 0;
    //   top: 50%;
    //   transform: translateY(-50%);
    //   position: absolute;
    //   z-index: 4;
    //   display: inline-block;
    //   animation: topDownCircle 2s linear infinite;
    // }
  }
  &-top {
    position: absolute;
    right: 20px;
    top: -150px;
  }
}
@keyframes topDownCircle {
  0% {
    transform: translateY(-80%);
  }
  25% {
    transform: translateY(-50%);
  }

  75% {
    transform: translateY(-20%);
  }
  100% {
    transform: translateY(-50%);
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
}
@media screen and (min-width: 768px) {
  .mbFooter {
    display: none;
  }
}
@media screen and (max-width: 768px) {
}
</style>

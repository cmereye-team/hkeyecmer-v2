<script lang="ts" setup>
import { useRoute } from 'vue-router'
const router = useRoute()
definePageMeta({
  layout: 'page',
})

const locale = useState<string>('locale.setting')

function chat(p?: string): void {
  var host = window.location.host
  p = p ? p : host
}

const route = useRoute()
const rt = ref(route)
</script>

<template>
  <div
    class="onlinContact"
    :class="[
      rt.name === 'medical-service-eyeOrthopaedicDisease'
        ? 'onlinContact_top'
        : 'onlinContact',
    ]"
  >
    <div>
      <a
        class="topitem ga-pc-right-ljyy"
        id="ga-pc-right-ljyy"
        href="https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&cid=7f3c58ea65c34d9d82c1f6455384212f&lng=big5&sid=cd5457bae7eb4c9db0534553310cb509&p=https%3A//hkcmereye.com/&rf1=&rf2=&msg=&e=hkcmereye.com[youce-goutong]&d=1692676040714"
      >
        <img
          class="ga-pc-right-ljyy"
          v-if="locale !== 'en'"
          id="ga-pc-right-ljyy"
          src="https://static.cmereye.com/imgs/2024/06/347ac843c913da6d.png"
          alt="希瑪眼科中心_立即預約眼科服務"
          title="希瑪眼科中心_立即預約眼科服務"
        />
        <img
          class="ga-pc-right-ljyy"
          v-if="locale === 'en'"
          id="ga-pc-right-ljyy"
          src="https://static.cmereye.com/imgs/2024/06/347ac843c913da6d.png"
          alt="希瑪眼科中心_立即預約眼科服務"
          title="希瑪眼科中心_立即預約眼科服務"
        />
      </a>
      <a
        class="ocitem ga-pc-right-zxcx"
        id="ga-pc-right-zxcx"
        href="https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&cid=149cdac9b31444cd81512a1ce54d1ae9&lng=big5&sid=6ac3c6650aef4b099f1018a3cd8a7887&p=https//www.hkcmereye.com/&rf1=&rf2=&msg=&e=www.hkcmereye.com[youce-goutong]&d=1692675682853"
      >
        <div class="ga-pc-right-zxcx">
          <div class="ga-pc-right-zxcx">
            <div class="ga-pc-right-zxcx">
              {{ $t('components.content.onlinContact.chatNow') }}
            </div>
            <div class="ga-pc-right-zxcx">
              {{ $t('components.content.onlinContact.chatNow3') }}
            </div>
          </div>
          <div class="ga-pc-right-zxcx">
            <img
              class="ga-pc-right-zxcx"
              src="https://static.cmereye.com/static/hkeyecmer/svg/icon_1001.svg"
              alt=""
            />
          </div>
        </div>
      </a>
      <a
        class="ocitem ga-pc-right-WhatsApp"
        id="ga-pc-right-WhatsApp"
        href="https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2"
        target="_blank"
      >
        <div class="ga-pc-right-WhatsApp">
          <div class="ga-pc-right-WhatsApp">
            <div class="ga-pc-right-WhatsApp">WhatsApp</div>
            <div class="ga-pc-right-WhatsApp">9345 1508</div>
          </div>
          <div class="ga-pc-right-WhatsApp">
            <img
              class="ga-pc-right-WhatsApp"
              src="https://static.cmereye.com/static/hkeyecmer/svg/icon_1002.svg"
              alt=""
            />
          </div>
        </div>
      </a>
      <a
        href="tel: +852 3956 2025"
        class="ocitem ga-pc-right-ljzd"
        id="ga-pc-right-ljzd"
      >
        <div class="ga-pc-right-ljzd">
          <div class="ga-pc-right-ljzd">
            <div class="ga-pc-right-ljzd">
              {{ $t('components.content.onlinContact.callNow') }}
            </div>
            <div class="ga-pc-right-ljzd">(852) 3956 2025</div>
          </div>
          <div class="ga-pc-right-ljzd">
            <img
              class="ga-pc-right-ljzd"
              src="https://static.cmereye.com/static/hkeyecmer/svg/icon_1003.svg"
              alt=""
            />
          </div>
        </div>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=85260629611&text=白內障專線查詢"
        class="cataract_btn ga-pc-right-cataract_btn"
        id="ga-pc-right-cataract_btn"
      >
        <div>
          <img
            src="https://static.cmereye.com/imgs/2024/06/f747a3559095f38e.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2024/06/012f428c7e43ad79.png"
            alt=""
          />
        </div>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.onlinContact {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 83px;
  bottom: 150px;
  & > div {
    .topitem {
      width: 160px;
      display: block;
      img {
        width: 100%;
        cursor: pointer;
        transform-origin: bottom center;
        transition: all 0.3s;
        &:hover {
          transform-origin: bottom center;
          transform: scale(1.05);
        }
      }
    }
    .ocitem {
      width: 160px;
      height: 38px;
      border: 2px solid #5595df;
      margin-top: 20px;
      border-radius: 5px;
      cursor: pointer;
      overflow: hidden;
      transition: all 0.3s;
      background: #fff;
      display: block;
      & > div {
        display: flex;
        height: 100%;
        transition: all 0.3s;
        & > div:nth-of-type(1) {
          text-align: center;
          flex: 1;
          height: 34px;
          position: relative;
          transition: all 0.3s;
          & > div {
            position: relative;
            z-index: 2;
            font-size: 20px;
            line-height: 32px;
            color: #5595df;
            transition: all 0.3s;
            height: 110%;
            font-weight: bold;
            &:nth-of-type(2) {
              color: #fff;
              background: #5595df;
            }
            &::after {
              content: '';
              width: 1px;
              height: calc(100% - 2px);
              position: absolute;
              bottom: 1px;
              right: -1px;
              background: #2958a3;
              z-index: 1;
              transition: all 0.3s;
            }
          }
        }
        & > div:nth-of-type(2) {
          width: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-left: 1px solid #5595df;
          position: relative;
          transition: all 0.3s;
          &::before {
            content: '';
            width: 100%;
            height: 51%;
            position: absolute;
            top: 0;
            left: 0;
            background: #80c8f1;
            z-index: 1;
          }
          &::after {
            content: '';
            width: 100%;
            height: 51%;
            position: absolute;
            bottom: 0;
            left: 0;
            background: #5595df;
            z-index: 1;
          }
          img {
            position: relative;
            z-index: 2;
          }
        }
      }
      &:nth-of-type(2) {
        & > div {
          & > div:nth-of-type(1) {
            & > div:nth-of-type(2) {
              font-size: 16px;
            }
          }
        }
      }
      &:nth-of-type(4) {
        & > div {
          & > div:nth-of-type(1) {
            & > div:nth-of-type(2) {
              font-size: 14px;
            }
          }
        }
      }
      &:hover {
        box-shadow: 0 3px 10px rgba(128, 200, 241, 0.7);
        & > div {
          & > div:nth-of-type(1) {
            & > div {
              transform: translateY(-100%);
            }
          }
        }
      }
    }
    .cataract_btn {
      margin-top: 20px;
      display: flex;
      position: relative;
      & > div:nth-child(2) {
        position: absolute;
        top: -5px;
        left: -30%;
        animation: identifier 2s linear infinite;
      }
    }
  }
}
@keyframes identifier {
  0% {
    transform: scale(1);
  }

  20% {
    transform: scale(1.2);
  }
  25% {
    transform: scale(1.2) rotate(10deg);
  }
  30% {
    transform: scale(1.2) rotate(-10deg);
  }
  35% {
    transform: scale(1.2) rotate(10deg);
  }
  40% {
    transform: scale(1.2) rotate(-10deg);
  }
  60% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .onlinContact {
    bottom: 100px;
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .onlinContact {
    // top: 700px;
    right: 12%;
  }
}
</style>

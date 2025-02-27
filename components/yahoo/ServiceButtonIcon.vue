<script lang="ts" setup>
import { defineProps } from "vue";
const locale = useState<string>('locale.setting')
defineProps({
  str:{
    type: String,
    default: '即按為你解決煩惱'
  },
  link:{
    type: String,
    default: 'https://api.whatsapp.com/send?phone=85265767817&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'
  },
  type: {
    type: String,
    default: '1',
  },
  pageName: {
    type: String,
    default: 'cataract',
  },
  textLine: {
    type: String,
    default: '1',
  }
})
</script>

<template>
  <a :href="link" class="service-button" :class="{'service-button-en': locale === 'en'}">
    <div class="service-button-in" :class="pageName">
      <div class="service-button-in-icon" :class="pageName" v-if="type === '1'">
        <svg xmlns="http://www.w3.org/2000/svg" width="78" height="71" viewBox="0 0 78 71" fill="none">
          <g filter="url(#filter0_d_5729_439)">
            <path d="M66.4462 0.191406H25.2353C21.4136 0.191406 18.3143 3.3246 18.3143 7.18798V9.96271H13.2187C8.33331 9.96271 4.36719 13.9721 4.36719 18.9109V42.0248C4.36719 46.9636 8.33331 50.973 13.2187 50.973H16.6727V60.2531C16.6727 61.0762 17.1717 61.8064 17.9334 62.0852C18.1567 62.1648 18.3799 62.2047 18.6032 62.2047C19.1548 62.2047 19.7064 61.9657 20.0741 61.5143L28.9256 50.973H54.4296C59.315 50.973 63.2812 46.9636 63.2812 42.0248V37.2985H66.4462C70.2678 37.2985 73.3672 34.1653 73.3672 30.3019V7.18798C73.3672 3.3246 70.2678 0.191406 66.4462 0.191406ZM45.8407 15.5653C47.5743 15.5653 48.9795 16.9858 48.9795 18.7383C48.9795 20.4908 47.5743 21.9113 45.8407 21.9113C44.1072 21.9113 42.702 20.4908 42.702 18.7383C42.702 16.9858 44.1072 15.5653 45.8407 15.5653ZM31.4734 15.5653C33.2069 15.5653 34.6121 16.9858 34.6121 18.7383C34.6121 20.4908 33.2069 21.9113 31.4734 21.9113C29.7399 21.9113 28.3346 20.4908 28.3346 18.7383C28.3346 16.9858 29.7399 15.5653 31.4734 15.5653ZM59.4201 42.0115C59.4201 44.7863 57.1875 47.0565 54.4296 47.0565H28.0326C27.4679 47.0565 26.9294 47.3087 26.5617 47.7469L20.5337 54.916V49.0081C20.5337 47.9327 19.667 47.0565 18.6032 47.0565H13.2187C10.474 47.0565 8.22825 44.7995 8.22825 42.0115V18.8976C8.22825 16.1229 10.4608 13.8526 13.2187 13.8526H18.3143V30.2886C18.3143 34.152 21.4136 37.2852 25.2353 37.2852H59.4201V42.0115ZM60.2081 21.9113C58.4745 21.9113 57.0693 20.4908 57.0693 18.7383C57.0693 16.9858 58.4745 15.5653 60.2081 15.5653C61.9416 15.5653 63.3468 16.9858 63.3468 18.7383C63.3468 20.4908 61.9416 21.9113 60.2081 21.9113Z" fill="white"/>
          </g>
          <defs>
            <filter id="filter0_d_5729_439" x="0.367188" y="0.191406" width="77" height="70.0137" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5729_439"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5729_439" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div class="service-button-in-icon" :class="pageName" v-else-if="type === '2'">
        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="76" viewBox="0 0 81 76" fill="none">
          <g filter="url(#filter0_d_5729_463)">
            <path d="M47.6542 62.4309C51.6744 58.4073 51.6744 51.8837 47.6542 47.8601C43.634 43.8364 37.1159 43.8364 33.0957 47.8601C29.0754 51.8837 29.0754 58.4073 33.0957 62.4309C37.1159 66.4546 43.634 66.4546 47.6542 62.4309Z" fill="white"/>
            <path d="M58.2452 25.6724C58.2452 2.59486 40.3787 4.41977 40.3787 4.41977C40.3787 4.41977 22.5122 2.59486 22.5122 25.6724C22.5122 40.9814 11.4707 46.0887 11.4707 46.0887L16.3457 52.8434H64.437L69.312 46.0887C69.312 46.0887 58.2705 40.9814 58.2705 25.6724H58.2452Z" fill="white"/>
            <path d="M40.3796 52.8436H64.4253L69.3003 46.0889H11.459L16.334 52.8436H40.3796Z" fill="white"/>
            <path d="M8.16709 37.2942C6.45768 33.1121 5.58398 28.6765 5.58398 24.1143C5.58398 15.7501 8.58495 7.66468 14.0297 1.35352L16.6255 3.59664C11.7252 9.28683 9.01546 16.5738 9.01546 24.1143C9.01546 28.233 9.80052 32.225 11.3453 36.0016L8.16709 37.3069V37.2942Z" fill="white"/>
            <path d="M72.883 36.559L69.6795 35.3297C71.047 31.7559 71.7434 27.9793 71.7434 24.1014C71.7434 16.2821 68.8564 8.7797 63.6016 3.0008L66.1467 0.681641C71.9713 7.09419 75.1876 15.4204 75.1876 24.1014C75.1876 28.3849 74.4152 32.5796 72.8957 36.559H72.883Z" fill="white"/>
            <path d="M14.8779 31.8704C14.1181 29.3611 13.7383 26.7505 13.7383 24.1145C13.7383 19.2607 15.0552 14.5084 17.537 10.377L19.7909 11.733C17.5496 15.4588 16.372 19.7423 16.372 24.1145C16.372 26.497 16.7139 28.8542 17.3977 31.11L14.8779 31.8704Z" fill="white"/>
            <path d="M66.35 30.1209L63.7922 29.5253C64.1974 27.7511 64.4 25.9388 64.4 24.1013C64.4 18.5885 62.488 13.1898 59.0059 8.93165L61.0445 7.27148C64.9065 12.0112 67.0211 17.9929 67.0211 24.1139C67.0211 26.1416 66.7932 28.1693 66.3373 30.1209H66.35Z" fill="white"/>
          </g>
          <defs>
            <filter id="filter0_d_5729_463" x="0.507787" y="0.681641" width="79.7559" height="74.919" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="5.0762"/>
              <feGaussianBlur stdDeviation="2.5381"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5729_463"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5729_463" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div class="service-button-in-icon" :class="pageName" v-else-if="type === '3'">
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="88" viewBox="0 0 90 88" fill="none">
          <g filter="url(#filter0_d_5734_618)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9991 44.9672C28.6327 40.732 20.9081 32.4706 22.7609 26.2223C23.6743 23.1374 27.1452 22.2223 28.7892 19.6864C31.1379 16.0525 28.8936 11.3466 26.9625 8.07868C25.1879 5.04603 22.6566 0.392485 18.6116 0.523203C14.384 0.680064 10.1563 4.47088 7.07695 7.0068C1.15305 11.6603 3.97147 31.9739 21.2995 53.6992C38.6015 75.4244 57.7564 82.6139 63.6803 77.8296C66.6814 75.3983 70.9612 72.9931 71.9528 68.967C73.2838 63.503 68.1428 59.0847 64.5414 55.8952C62.8713 54.4312 60.8618 52.8103 58.4871 53.0717C55.0423 53.4377 53.0851 57.2024 49.7186 57.9083C42.6465 59.3984 35.6265 49.5162 32.0252 44.9934L31.9991 44.9672Z" fill="white"/>
          </g>
          <g filter="url(#filter1_d_5734_618)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M66.2117 0.523438C55.747 0.523438 47.2656 6.79789 47.2656 14.5102C47.2656 18.301 49.3273 21.7258 52.6415 24.2618L47.2656 32.8107L58.4871 27.2683C60.8619 28.0526 63.4715 28.497 66.2117 28.497C76.6764 28.497 85.1838 22.2487 85.1838 14.5102C85.1838 6.77174 76.7025 0.523438 66.2117 0.523438ZM56.7908 16.8631C55.5904 16.8631 54.4944 15.7651 54.4944 14.5364C54.4944 13.2031 55.5904 12.105 56.7908 12.105C58.0957 12.105 59.2178 13.2031 59.2178 14.5364C59.2178 15.739 58.1218 16.8631 56.7908 16.8631ZM66.6814 16.8631C65.481 16.8631 64.3849 15.7651 64.3849 14.5364C64.3849 13.2031 65.481 12.105 66.6814 12.105C68.0123 12.105 69.1084 13.2031 69.1084 14.5364C69.1084 15.739 68.0123 16.8631 66.6814 16.8631ZM76.572 16.8631C75.3715 16.8631 74.2755 15.7651 74.2755 14.5364C74.2755 13.2031 75.3715 12.105 76.572 12.105C77.8768 12.105 78.999 13.2031 78.999 14.5364C78.999 15.739 77.9029 16.8631 76.572 16.8631Z" fill="white"/>
          </g>
          <defs>
            <filter id="filter0_d_5734_618" x="0.259766" y="0.520508" width="75.9082" height="86.7227" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5734_618"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5734_618" result="shape"/>
            </filter>
            <filter id="filter1_d_5734_618" x="43.2656" y="0.523438" width="45.918" height="40.2871" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5734_618"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5734_618" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div class="service-button-in-icon" :class="pageName" v-else>
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="97" viewBox="0 0 96 97" fill="none">
          <g filter="url(#filter0_d_5734_627)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M68.7278 52.8533C67.6585 52.2672 62.3738 49.4192 61.3867 49.0182C60.3997 48.6172 59.6697 48.4116 58.8986 49.4706C58.1275 50.5399 55.9375 52.9253 55.2794 53.6244C54.6111 54.3338 53.9737 54.3955 52.8941 53.8095C51.8248 53.2234 48.3393 51.9279 44.2987 48.0518C41.1525 45.029 39.0962 41.3687 38.4998 40.248C37.9035 39.1273 38.4998 38.5618 39.0653 38.0375C39.5794 37.5645 40.2066 36.7934 40.7823 36.1765C41.3478 35.5596 41.5535 35.1072 41.9442 34.3978C42.3349 33.678 42.1806 33.0406 41.9236 32.4751C41.6666 31.9199 39.6822 26.4501 38.8597 24.2292C38.0269 22.0084 37.1015 22.3374 36.4641 22.3066C35.8266 22.286 35.0966 22.1626 34.3666 22.1421C33.6366 22.1112 32.4337 22.3477 31.3952 23.3964C30.3465 24.4554 27.4265 26.995 27.2209 32.3826C27.0152 37.7701 30.7475 43.1166 31.2616 43.8671C31.7859 44.6177 38.3764 56.2873 49.3367 61.0889C60.2969 65.8904 60.3586 64.4304 62.3635 64.3173C64.3787 64.2145 68.9334 61.9114 69.9513 59.3924C70.9589 56.8734 71.0412 54.6834 70.7841 54.2105C70.5271 53.7478 69.8074 53.4393 68.7381 52.8533H68.7278ZM48.6272 78.8041C41.3787 78.8041 34.6339 76.6347 28.9996 72.9025L15.2839 77.2927L19.7461 64.0397C15.469 58.1586 12.95 50.9306 12.95 43.1166C12.95 23.4375 28.9585 7.42905 48.6375 7.42905C68.3166 7.42905 84.3251 23.4375 84.3251 43.1166C84.3251 62.7956 68.3166 78.8041 48.6375 78.8041H48.6272ZM48.6272 0.242188C24.9486 0.242188 5.75283 19.438 5.75283 43.1166C5.75283 51.2185 8.00451 58.7961 11.9012 65.2529L4.15918 88.2529L27.8995 80.6548C34.0479 84.0477 41.1011 85.991 48.617 85.991C72.2955 85.991 91.4913 66.7952 91.4913 43.1166C91.4913 19.438 72.3058 0.242188 48.6272 0.242188Z" fill="white"/>
          </g>
          <defs>
            <filter id="filter0_d_5734_627" x="0.15918" y="0.242188" width="95.332" height="96.0107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5734_627"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5734_627" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div class="service-button-in-text inText_2" :class="[pageName,`textLine${textLine}`]">
        <span>{{str}}</span>
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.service-button{
  display: inline-block;
  position: relative;
  &-in{
    // overflow: hidden;
    border-radius: 50px;
    // -webkit-backface-visibility: hidden;
    // -webkit-transform: translate3d(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s;
    filter: drop-shadow(0 3px 0 #fff)
            drop-shadow(3px 0 0 #fff)
            drop-shadow(0 -3px 0 #fff)
            drop-shadow(-3px 0 0 #fff)
            drop-shadow(0px 4px 3px rgba($color: #000000, $alpha: .5));
    -webkit-filter: drop-shadow(0 3px 0 #fff)
            drop-shadow(3px 0 0 #fff)
            drop-shadow(0 -3px 0 #fff)
            drop-shadow(-3px 0 0 #fff)
            drop-shadow(0px 4px 3px rgba($color: #000000, $alpha: .5));
    &-icon{
      padding: 30px 25px 20px;
      border-radius: 50%;
      background: #F6F291;
      z-index: 2;
      transition: all .3s;
      svg{
        animation: iconAnim 3s infinite linear alternate;
        width: 95px;
        height: 95px;
      }
      &.muscaeVolitantes{
        background: #FAF8BE;
      }
      &.maculopathy{
        background: #D8EAEB;
      }
      &.glaucoma{
        background: #F9E5CA;
      }
      &.atropine{
        background: #B2D46A;
      }
      &.strabismusAmblyopia{
        background: #ABD9C3;
      }
      &.conjunctivitis{
        background: #E3F0EC;
      }
      &.amotioRetinae{
        background: #B3A2F5;
      }
      &.xerophthalmia{
        background: #62AAEB;
      }
      &.eyeOrthopaedicDisease{
        background: #8BCCE1;
      }
      &.ocularSurfaceDiseases{
        background: #FFD2D8;
      }
    }
    &-text{
      &.inText_2{
        border-radius: 0 100px 100px 0;
        margin-left: -30px;
      }
      white-space: pre-wrap;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      min-height: 80px;
      padding: 0 40px;
      transition: all .3s;
      background: linear-gradient(45deg,  #F6F291 20%, #F4D94A 100%);
      span{
        color: #FFF;
        text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 120%;
        transition: all .3s;
        text-align: center;
        padding: 10px 0 14px;
        
      }
      // &.textLine1{
      //   span{
      //     line-height: 140%;
      //   }
      // }
      // &.textLine2{
      //   span{
      //     line-height: 120%;
      //   }
      // }
      // &.textLine3{
      //   span{
      //     line-height: 120%;
      //   }
      // }
      &.muscaeVolitantes{
        background: linear-gradient(45deg,  #FAF8BE 20%, #FFE769 100%);
      }
      &.maculopathy{
        background: linear-gradient(45deg,  #D8EAEB 20%, #65B6E2 100%);
      }
      &.glaucoma{
        background: linear-gradient(45deg,  #F9E5CA 20%, #F7BECE 100%);
      }
      &.atropine{
        background: linear-gradient(45deg,  #B2D46A 20%, #AFDCD1 100%);
      }
      &.strabismusAmblyopia{
        background: linear-gradient(45deg,  #ABD9C3 20%, #2CBCED 100%);
      }
      &.conjunctivitis{
        background: linear-gradient(45deg,  #E3F0EC 20%, #4EABDF 100%);
      }
      &.amotioRetinae{
        background: linear-gradient(45deg,  #B3A2F5 20%, #EDEAFF 100%);
      }
      &.xerophthalmia{
        background: linear-gradient(45deg,  #62AAEB 20%, #EFF8FF 100%);
      }
      &.eyeOrthopaedicDisease{
        background: linear-gradient(45deg,  #8BCCE1 20%, #BAD8C7 100%);
      }
      &.ocularSurfaceDiseases{
        background: linear-gradient(45deg,  #FFD2D8 20%, #B8DDFF 100%);
      }
    }
    &:hover{
      .service-button-in-icon{
        box-shadow: 3px 2px 3px 0px rgba(0,0,0,.3) inset;
      }
      .service-button-in-text{
        box-shadow: 2px 4px 3px rgba(0,0,0,.2) inset;
        span{
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
  &.service-button-en{
    display: flex;
    justify-content: center;
    width: 100%;
    .service-button-in{
      max-width: 45%;
      &.maculopathy,&.atropine,&.amotioRetinae,&.xerophthalmia,&.ocularSurfaceDiseases{
        max-width: 100%;
      }
      // &.ocularSurfaceDiseases{
      //   max-width: 60%;
      // }
      &-text{
        padding: 0px 30px;
        span{
          font-size: 28px;
          text-align: center;
          line-height: 1.4;
          padding: 5px 0 10px;
        }
      }
    }
  }
}
@keyframes iconAnim{
  0%{
    transform: scale(1);
  }
  20%{
    transform: scale(1.2);
  }
  25%{
    transform: scale(1.2) rotate(10deg);
  }
  30%{
    transform: scale(1.2) rotate(-10deg);
  }
  35%{
    transform: scale(1.2) rotate(10deg);
  }
  40%{
    transform: scale(1.2) rotate(-10deg);
  }
  60%{
    transform: scale(1);
  }
  100%{
    transform: scale(1);
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .service-button{
    &-in{
      filter: drop-shadow(0 3px 0 #fff)
            drop-shadow(3px 0 0 #fff)
            drop-shadow(0 -3px 0 #fff)
            drop-shadow(-3px 0 0 #fff)
            drop-shadow(0px 3px 2px rgba(0,0,0,.3));
      -webkit-filter:drop-shadow(0 3px 0 #fff)
            drop-shadow(3px 0 0 #fff)
            drop-shadow(0 -3px 0 #fff)
            drop-shadow(-3px 0 0 #fff)
            drop-shadow(0px 3px 2px rgba(0,0,0,.3));
      // background: linear-gradient(45deg,  #F6F291 20%, #F4D94A 100%);
      // &.muscaeVolitantes{
      //   background: linear-gradient(45deg,  #FAF8BE 20%, #FFE769 100%);
      // }
      // &.maculopathy{
      //   background: linear-gradient(45deg,  #D8EAEB 20%, #65B6E2 100%);
      // }
      border-radius: 15px;
      &-icon{
        padding: 10px 8px 5px;
        // transform: scale(.7);
        // background: none !important;
        svg{
          width: 70px;
          height: 70px;
        }
      }
      &-text{
        padding: 0 30px;
        min-height: 45px;
        // background: none !important;
        &.inText_2{
          // border-radius: 0 30px 30px 0;
          margin-left: -30px;
        }
        span{
          font-size: 18px;
          line-height: 120%;
          padding: 5px 0;
        }
        &.maculopathy,&.atropine2{
          white-space: initial;
        }
        &.amotioRetinae{
          padding: 0 30px 0 40px;
        }
        &.eyeOrthopaedicDisease{
          padding: 0 20px 0 30px;
        }
        &.amotioRetinae2{
          white-space: initial;
        }
        &.ocularSurfaceDiseasesLong{
          padding: 0 10px 0 30px;
        }
      }
    }
    &.service-button-en{
      .service-button-in{
        max-width: 100%;
        background: linear-gradient(45deg,  #F6F291 0%, #F4D94A 100%);
        &.muscaeVolitantes{
          background: linear-gradient(45deg,  #FAF8BE 0%, #FFE769 100%);
        }
        &.maculopathy{
          background: linear-gradient(45deg,  #D8EAEB 0%, #65B6E2 100%);
        }
        &.glaucoma{
          background: linear-gradient(45deg,  #F9E5CA 0%, #F7BECE 100%);
        }
        &.atropine{
          background: linear-gradient(45deg,  #B2D46A 0%, #AFDCD1 100%);
        }
        &.strabismusAmblyopia{
          background: linear-gradient(45deg,  #ABD9C3 0%, #2CBCED 100%);
        }
        &.conjunctivitis{
          background: linear-gradient(45deg,  #E3F0EC 0%, #4EABDF 100%);
        }
        &.amotioRetinae{
          background: linear-gradient(45deg,  #B3A2F5 0%, #EDEAFF 100%);
        }
        &.xerophthalmia{
          background: linear-gradient(45deg,  #62AAEB 0%, #EFF8FF 100%);
        }
        &.eyeOrthopaedicDisease{
          background: linear-gradient(45deg,  #8BCCE1 0%, #BAD8C7 100%);
        }
        &.ocularSurfaceDiseases{
          background: linear-gradient(45deg,  #FFD2D8 0%, #B8DDFF 100%);
        }
        &-icon{
          background: none !important;
        }
        &-text{
          padding: 0px 25px;
          background: none !important;
          span{
            font-size: 20px;
            text-align: center;
            line-height: 1.4;
            padding: 5px 0 10px;
          }
        }
      }
    }
    &:hover{
      .service-button-in-icon{
        box-shadow: none;
      }
      .service-button-in-text{
        box-shadow: none;
        span{
          text-shadow: none;
        }
      }
    }
  }
  @keyframes iconAnim{
    0%{
      transform: scale(.7);
    }
    20%{
      transform: scale(0.9);
    }
    25%{
      transform: scale(0.9) rotate(10deg);
    }
    30%{
      transform: scale(0.9) rotate(-10deg);
    }
    35%{
      transform: scale(0.9) rotate(10deg);
    }
    40%{
      transform: scale(0.9) rotate(-10deg);
    }
    60%{
      transform: scale(.7);
    }
    100%{
      transform: scale(.7);
    }
  }
}
</style>
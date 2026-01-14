<!--
 * @Author: 谭洁莹
 * @Date: 2025-09-11 08:19:38
 * @LastEditTime: 2026-01-14 16:34:24
 * @FilePath: /pages/csp-programme/index.vue
 * @Description: 耀眼行动计划简介
-->
<script lang="ts" setup>
import '~/assets/sass/iconfont.css'
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')
useHead(() => ({
  title: '「耀眼行動」白內障手術政府資助計劃 | 申請資格及費用 | 希瑪眼科中心',
  meta() {
    return [
      {
        hid: 'description',
        name: 'description',
        content: t('tdk.csp.desc'),
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: t('tdk.csp.key'),
      },
    ]
  },
}))
// 传递背景色
const backgd = [
  '#64bcd1;',
  '-webkit-linear-gradient(to right, #83cdd3, #64bcd1);',
  'linear-gradient(to right, #83cdd3, #64bcd1);',
]
</script>
<template>
  <main
    class="text-[#66696F] text-base lg:text-3xl leading-[28px] lg:leading-[48px] font-medium pb-[24px] lg:pb-[72px]"
  >
    <CspBanner active="intro" />
    <input id="showmore" type="checkbox" class="peer" hidden />
    <section
      class="content-init container mx-auto px-[12px] xl:px-0 pt-7 lg:pt-[88px]"
    >
      <div class="space-y-9 lg:space-y-25">
        <div
          class="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[8%]"
        >
          <picture class="lg:w-[45%]">
            <source
              srcset="
                https://statichk.cmermedical.com/newopd/services/csp/csp-intro-cover-01.avif
              "
              type="image/avif"
            />
            <img
              src="https://statichk.cmermedical.com/newopd/services/csp/csp-intro-cover-01.jpg"
              alt="長者白內障資助_白內障手術_希瑪眼科中心"
              title="長者白內障資助_白內障手術_希瑪眼科中心"
              loading="lazy"
            />
          </picture>
          <div class="lg:flex-1 justify-between text-justify">
            <h2 class="title-normal">合資格人士</h2>
            <ol class="!mb-0 !list-decimal">
              <li>
                醫管局轄下醫院的白內障手術輪候名單上輪候18個月或以上；而等候最長時間的病人將優先獲邀請；及
              </li>
              <li>適合接受局部麻醉手術；及</li>
              <li>
                一般輪候個案（至於緊急或前期個案，因此類病人需得到優先處理，醫管局會持續為他們安排手術）
              </li>
            </ol>
            <p>*病人不需另行前往私家醫療機構</p>
          </div>
        </div>
        <div
          class="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[8%]"
        >
          <picture class="order-1 lg:order-2 lg:w-[45%]">
            <source
              srcset="
                https://statichk.cmermedical.com/newopd/services/csp/csp-intro-cover-02.avif
              "
              type="image/avif"
            />
            <img
              src="https://statichk.cmermedical.com/newopd/services/csp/csp-intro-cover-02.jpg"
              alt="長者白內障資助_白內障手術_希瑪眼科中心"
              title="長者白內障資助_白內障手術_希瑪眼科中心"
              loading="lazy"
            />
          </picture>
          <div class="order-2 lg:order-1 lg:flex-1">
            <h2 class="title-normal">計劃收費</h2>
            <div class="text-justify">
              <p class="text-[#FF6B2C] font-black">
                病人自付的費用不多於8,000港元的自付額
              </p>
              <p>*如選用非單焦距人工晶體鏡片，需支付額外費用</p>
              <p>*受邀請的病人不能使用長者醫療券支付此計劃的自付額</p>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[8%]"
        >
          <picture class="lg:w-[45%]">
            <source
              srcset="
                https://statichk.cmermedical.com/newopd/services/csp/csp-intro-cover-03.avif
              "
              type="image/avif"
            />
            <img
              src="https://statichk.cmermedical.com/newopd/services/csp/csp-intro-cover-03.jpg"
              alt="長者白內障資助_白內障手術_希瑪眼科中心"
              title="長者白內障資助_白內障手術_希瑪眼科中心"
              loading="lazy"
            />
          </picture>
          <div class="lg:flex-1">
            <h2 class="title-normal">希瑪眼科參加計劃的醫生</h2>
            <div class="text-justify">
              <p>
                希瑪眼科有<strong class="text-[#FF6B2C] font-black"
                  >超過10位醫生</strong
                >為「耀眼行動」參與醫生
              </p>
              <p>
                歡迎收到醫管局附有資助到期日的邀請信的病人，透過以下途徑預約：
              </p>
              <ul class="!mb-0 !list-decimal">
                <li>
                  致電
                  <a
                    href="tel:+852 3956 2026"
                    class="!text-[#2958a3] !underline underline-offset-4"
                    >3956 2026</a
                  >
                  /
                  <a
                    href="tel:+852 3956 2025"
                    class="!text-[#2958a3] !underline underline-offset-4"
                    >3956 2025</a
                  >
                </li>
                <li>
                  <a
                    href="https://rebrand.ly/耀眼行動計劃查詢"
                    target="_blank"
                    class="!text-[#2958a3] !underline underline-offset-4"
                    >白內障WhatsApp專線：6062 9611</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CspButton />
      <label for="showmore" class="!flex justify-center cursor-pointer">
        <div
          class="bg-[#FFA231] text-white flex justify-center items-center gap-4 lg:gap-8 py-[12px] px-[40px] lg:py-[20px] lg:px-[80px] rounded-full text-xl lg:text-4xl leading-[1.25] tracking-[0.3em]"
        >
          <span>了解更多</span>
          <span>隱藏</span>
          <i
            class="iconfont icon-arrow-down-o text-xs lg:text-2xl duration-300 transition-all"
          ></i>
        </div>
      </label>
    </section>
    <div
      class="content-more hidden peer-checked:block space-y-7 space-y-17 transition-all duration-300 ease-in-out"
    >
      <section class="container mx-auto px-[12px] xl:px-0">
        <picture>
          <source
            srcset="
              https://statichk.cmermedical.com/newopd/services/csp/csp-icon.avif
            "
            type="image/avif"
          />
          <img
            src="https://statichk.cmermedical.com/newopd/services/csp/csp-icon.jpg"
            alt="耀眼行動_白內障手術_希瑪眼科中心"
            title="耀眼行動_白內障手術_希瑪眼科中心"
            loading="lazy"
            class="w-[44%] max-w-[400px] mx-auto pt-[40px] pb-[32px] lg:py-[40px]"
          />
        </picture>
        <h2 class="title-normal text-center lg:!mb-[64px]">耀眼行動</h2>
        <div class="flex flex-col gap-6 lg:gap-24">
          <p>
            由於人口老齡化，香港公立醫院的白內障患者數量持續上升，輪候白內障手術的時間不斷延長。為此，香港特區政府於2007年撥款推出首個公私營協作計劃
            - 「耀眼行動」白內障手術計劃。
          </p>
          <p>
            該計劃於2008年2月啟動，醫管局轄下醫院輪候名單上的適合局部麻醉手術的白內障患者，會被優先邀請參與該計劃。參與計劃的患者可選擇計劃下的私家眼科醫生進行手術，
            <strong class="text-[#FF6B2C]">病人自付額最高8,000港元。</strong>
          </p>
          <p>
            該計劃旨在通過公私營合作模式提供更多白內障手術，滿足不斷增加的服務需求，縮短公立醫院的白內障手術輪候時間，有效利用私營醫療界別的資源，紓緩公私營醫療服務的失衡。
          </p>
        </div>
      </section>
      <section class="container mx-auto px-[12px] xl:px-0">
        <h2 class="title-normal text-center">私家醫生提供治療方案</h2>
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 lg:justify-between pt-5 lg:pt-7"
        >
          <div class="flex flex-col items-center text-center gap-2">
            <img
              src="https://static.cmereye.com/imgs/2024/07/4d7813cdebf4d8ae.png"
              alt="手術前評估"
              title="術前評估"
              loading="lazy"
              class="w-16 lg:w-auto lg:h-27"
            />
            <h3 class="text-lg lg:text-4xl font-black leading-[1.6]">
              一次手術前評估
            </h3>
          </div>
          <div class="flex flex-col items-center text-center gap-2">
            <img
              src="https://static.cmereye.com/imgs/2024/07/fc16cb318b375354.png"
              alt="白內障手術及治療"
              title="白內障手術治療"
              loading="lazy"
              class="w-23 lg:w-auto lg:h-27"
            />
            <div>
              <h3 class="text-lg lg:text-4xl font-black leading-[1.6]">
                白內障手術
              </h3>
              <p class="text-sm lg:text-3xl leading-[1.6]">
                （包含單焦距人工晶體鏡片<i
                  class="iconfont icon-lens !text-sm lg:!text-3xl"
                ></i
                >）
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center text-center gap-2">
            <img
              src="https://static.cmereye.com/imgs/2024/07/6528cdccb6c59532.png"
              alt="術後追蹤"
              title="術後檢查"
              loading="lazy"
              class="w-20 lg:w-auto lg:h-27"
            />
            <h3 class="text-lg lg:text-4xl font-black leading-[1.6]">
              兩次手術後檢查
            </h3>
          </div>
        </div>
        <p>* 如客人選擇非單焦距人工晶體鏡片，需支付額外費用</p>
      </section>
      <section class="container mx-auto px-[12px] xl:px-0">
        <h2>補充資料︰</h2>
        <ul>
          <li>
            <a
              href="https://www4.ha.org.hk/ppp/ppp-programmes/csp/programme-intro"
              target="_blank"
              class="text-[#2958a3] underline underline-offset-4"
              >醫院管理局 - 耀眼行動計劃</a
            >
          </li>
          <li>
            <a
              href="https://www.ha.org.hk/visitor/sopc_waiting_time.asp?id=2&lang=CHIB5"
              target="_blank"
              class="text-[#2958a3] underline underline-offset-4"
              >公營眼科門診新症輪候時間</a
            >
          </li>
        </ul>
        <CspButton />
      </section>
    </div>
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#64bcd1;'}`"
      class="mt-10 lg:mt-20"
    />
    <PageFooterMenu />
  </main>
</template>
<style lang="scss" scoped>
ul,
ol {
  list-style-position: inside;
}
.title-normal {
  font-size: 24px;
  font-weight: bold;
  color: #2958a3;
}
.content-more {
  .title-normal {
    margin-bottom: 12px;
  }
}
label[for='showmore'] {
  span {
    &:nth-child(1) {
      display: block;
    }
    &:nth-child(2) {
      display: none;
    }
  }
}
#showmore {
  display: none; // 隐藏原始 checkbox

  &:checked {
    ~ .content-init {
      label[for='showmore'] {
        span {
          &:nth-child(1) {
            display: none;
          }
          &:nth-child(2) {
            display: block;
          }
        }
        i {
          transform: rotate(180deg);
          transform-origin: center center;
          transition: transform 0.3s;
        }
      }
    }
    ~ .content-more {
      display: block;
    }
  }
}
@media screen and (min-width: 1024px) {
  .title-normal {
    font-size: 48px;
  }
  .content-more {
    .title-normal {
      margin-bottom: 28px;
    }
  }
}
</style>

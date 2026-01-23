<!--
 * @Author: 谭洁莹
 * @Date: 2025-09-11 08:19:38
 * @LastEditTime: 2026-01-15 12:05:58
 * @FilePath: /pages/csp-programme/index.vue
 * @Description: 耀眼行动计划简介
-->
<script lang="ts" setup>
import '~/assets/plugins/iconfont/iconfont.css'
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')
useHead(() => ({
  title: t('tdk.csp.title'),
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
              :alt="t('csp.alt1')"
              :title="t('csp.alt1')"
              loading="lazy"
            />
          </picture>
          <div class="lg:flex-1 justify-between text-justify">
            <h2 class="title-normal">{{ t('csp.intro.part1.title') }}</h2>
            <ol class="!mb-0 !list-decimal">
              <li>{{ t('csp.intro.part1.li1') }}</li>
              <li>{{ t('csp.intro.part1.li2') }}</li>
              <li>{{ t('csp.intro.part1.li3') }}</li>
            </ol>
            <p>{{ t('csp.intro.part1.p1') }}</p>
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
              :alt="t('csp.alt1')"
              :title="t('csp.alt1')"
              loading="lazy"
            />
          </picture>
          <div class="order-2 lg:order-1 lg:flex-1">
            <h2 class="title-normal">{{ t('csp.intro.part2.title') }}</h2>
            <div class="text-justify">
              <p class="text-[#FF6B2C] font-black">
                {{ t('csp.intro.part2.p1') }}
              </p>
              <p>{{ t('csp.intro.part2.p2') }}</p>
              <p>{{ t('csp.intro.part2.p3') }}</p>
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
              :alt="t('csp.alt1')"
              :title="t('csp.alt1')"
              loading="lazy"
            />
          </picture>
          <div class="lg:flex-1">
            <h2 class="title-normal">{{ t('csp.intro.part3.title') }}</h2>
            <div class="text-justify">
              <p>
                <i18n-t keypath="csp.intro.part3.p1">
                  <template #strong>
                    <strong class="text-[#FF6B2C] font-black">
                      {{ $t('csp.intro.part3.strong') }}
                    </strong>
                  </template>
                </i18n-t>
              </p>
              <p>{{ t('csp.intro.part3.p2') }}</p>
              <ul class="!mb-0 !list-decimal">
                <li>
                  {{ t('csp.intro.part3.tel') }}
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
                    >{{ t('csp.intro.part3.whatsapp') }}6062 9611</a
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
          <span>{{ t('csp.intro.showmore') }}</span>
          <span>{{ t('csp.intro.showless') }}</span>
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
            :alt="t('csp.alt2')"
            :title="t('csp.alt2')"
            loading="lazy"
            class="w-[44%] max-w-[400px] mx-auto pt-[40px] pb-[32px] lg:py-[40px]"
          />
        </picture>
        <h2 class="title-normal text-center lg:!mb-[64px]">
          {{ t('csp.intro.part4.title') }}
        </h2>
        <div class="flex flex-col gap-6 lg:gap-24">
          <p>{{ t('csp.intro.part4.p1') }}</p>
          <p>
            <i18n-t keypath="csp.intro.part4.p2">
              <template #strong>
                <strong class="text-[#FF6B2C] font-black">
                  {{ $t('csp.intro.part4.strong') }}
                </strong>
              </template>
            </i18n-t>
          </p>
          <p>{{ t('csp.intro.part4.p3') }}</p>
        </div>
      </section>
      <section class="container mx-auto px-[12px] xl:px-0">
        <h2 class="title-normal text-center">
          {{ t('csp.intro.part5.title') }}
        </h2>
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 lg:justify-between pt-5 lg:pt-7"
        >
          <div class="flex flex-col items-center text-center gap-2">
            <img
              src="https://static.cmereye.com/imgs/2024/07/4d7813cdebf4d8ae.png"
              :alt="t('csp.intro.part5.item1.alt')"
              :title="t('csp.intro.part5.item1.title')"
              loading="lazy"
              class="w-16 lg:w-auto lg:h-27"
            />
            <h3 class="text-lg lg:text-4xl font-black leading-[1.6]">
              {{ t('csp.intro.part5.item1.text') }}
            </h3>
          </div>
          <div class="flex flex-col items-center text-center gap-2">
            <img
              src="https://static.cmereye.com/imgs/2024/07/fc16cb318b375354.png"
              :alt="t('csp.intro.part5.item2.alt')"
              :title="t('csp.intro.part5.item2.title')"
              loading="lazy"
              class="w-23 lg:w-auto lg:h-27"
            />
            <div>
              <h3 class="text-lg lg:text-4xl font-black leading-[1.6]">
                {{ t('csp.intro.part5.item2.text') }}
              </h3>
              <p class="text-sm lg:text-3xl leading-[1.6]">
                （{{ t('csp.intro.part5.p1') }}
                <i class="iconfont icon-lens !text-sm lg:!text-3xl"></i>）
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center text-center gap-2">
            <img
              src="https://static.cmereye.com/imgs/2024/07/6528cdccb6c59532.png"
              :alt="t('csp.intro.part5.item3.alt')"
              :title="t('csp.intro.part5.item3.title')"
              loading="lazy"
              class="w-20 lg:w-auto lg:h-27"
            />
            <h3 class="text-lg lg:text-4xl font-black leading-[1.6]">
              {{ t('csp.intro.part5.item3.text') }}
            </h3>
          </div>
        </div>
        <p>{{ t('csp.intro.part5.p2') }}</p>
      </section>
      <section class="container mx-auto px-[12px] xl:px-0">
        <h2>{{ t('csp.intro.part6.title') }}</h2>
        <ul>
          <li>
            <a
              href="https://www4.ha.org.hk/ppp/ppp-programmes/csp/programme-intro"
              target="_blank"
              class="text-[#2958a3] underline underline-offset-4"
              >{{ t('csp.intro.part6.p1') }}</a
            >
          </li>
          <li>
            <a
              href="https://www.ha.org.hk/visitor/sopc_waiting_time.asp?id=2&lang=CHIB5"
              target="_blank"
              class="text-[#2958a3] underline underline-offset-4"
              >{{ t('csp.intro.part6.p2') }}</a
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

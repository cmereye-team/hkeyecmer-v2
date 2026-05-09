<!--
 * @Author: 谭洁莹
 * @Date: 2026-05-07 11:47:30
 * @LastEditTime: 2026-05-08 16:40:12
 * @FilePath: /pages/glaucoma-ppp/index.vue
 * @Description: 计划简介
-->
<script lang="ts" setup>
import '~/assets/plugins/iconfont/iconfont.css'
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')
const isEn = computed(() => locale.value.startsWith('en'))
useHead(() => ({
  title: t('tdk.csp.title'),
  meta: [
    {
      name: 'description',
      content: t('tdk.csp.desc'),
    },
    {
      name: 'keywords',
      content: t('tdk.csp.key'),
    },
  ],
}))
const navList = [
  { id: 'intro', path: '/glaucoma-ppp', label: 'ppp.glaucoma.nav.intro' },
  { id: 'doctor', path: '/glaucoma-doctor', label: 'ppp.glaucoma.nav.doctor' },
  { id: 'question', path: '/glaucoma-faq', label: 'ppp.glaucoma.nav.question' },
]
const glaucomapppLink = computed(() => {
  return isEn.value
    ? 'https://www4.ha.org.hk/ppp/en/ppp-programmes/glaucomappp/programme-intro'
    : 'https://www4.ha.org.hk/ppp/ppp-programmes/glaucomappp/programme-intro'
})
const buttonList = [
  {
    id: 'tel',
    gtm: 'gtm-glaucomappp-tel',
    text: 'ppp.glaucoma.button.tel',
    link: 'tel:+85239562025',
  },
  {
    id: 'whatsapp',
    gtm: 'gtm-glaucomappp-whatsapp',
    text: 'ppp.glaucoma.button.whatsapp',
    link: 'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2%E9%9D%92%E5%85%89%E7%9C%BC%E6%B2%BB%E7%99%82%E5%8D%94%E4%BD%9C%E8%A8%88%E5%8A%83',
  },
]
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
    <PPPBanner programme="glaucoma" active="intro" :navList="navList" />
    <input id="showmore" type="checkbox" class="peer" hidden />
    <section
      class="content-init container mx-auto px-[12px] xl:px-0 pt-7 lg:pt-[88px]"
    >
      <div class="space-y-9 lg:space-y-25">
        <div
          class="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[8%]"
        >
          <picture class="lg:w-[45%]">
            <img
              src="https://statichk.cmermedical.com/newopd/services/glaucomappp/glaucomappp-intro-cover-01-v1.webp"
              :alt="t('ppp.glaucoma.alt')"
              :title="t('ppp.glaucoma.alt')"
              loading="lazy"
            />
          </picture>
          <div class="lg:flex-1 justify-between text-justify">
            <h2 class="title-normal">{{ t('ppp.csp.intro.part1.title') }}</h2>
            <ol class="!mb-0 !list-decimal">
              <li>{{ t('ppp.glaucoma.intro.part1.li1') }}</li>
              <li>{{ t('ppp.glaucoma.intro.part1.li2') }}</li>
              <li>{{ t('ppp.glaucoma.intro.part1.li3') }}</li>
            </ol>
            <p>{{ t('ppp.glaucoma.intro.part1.p1') }}</p>
          </div>
        </div>
        <div
          class="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[8%]"
        >
          <picture class="order-1 lg:order-2 lg:w-[45%]">
            <img
              src="https://statichk.cmermedical.com/newopd/services/glaucomappp/glaucomappp-intro-cover-02-v1.webp"
              :alt="t('ppp.csp.alt1')"
              :title="t('ppp.csp.alt1')"
              loading="lazy"
            />
          </picture>
          <div class="order-2 lg:order-1 lg:flex-1">
            <h2 class="title-normal">
              {{ t('ppp.glaucoma.intro.part2.title') }}
            </h2>
            <div class="text-justify">
              <i18n-t keypath="ppp.glaucoma.intro.part2.p1">
                <template #strong>
                  <strong class="text-[#FF6B2C] font-black">
                    {{ $t('ppp.glaucoma.intro.part2.strong') }}
                  </strong>
                </template>
              </i18n-t>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[8%]"
        >
          <picture class="lg:w-[45%]">
            <img
              src="https://statichk.cmermedical.com/newopd/services/glaucomappp/glaucomappp-intro-cover-03-v1.webp"
              :alt="t('ppp.csp.alt1')"
              :title="t('ppp.csp.alt1')"
              loading="lazy"
            />
          </picture>
          <div class="lg:flex-1">
            <h2 class="title-normal">
              {{ t('ppp.glaucoma.intro.part3.title') }}
            </h2>
            <div class="text-justify">
              <p class="text-[#FF6B2C] font-black">
                {{ t('ppp.glaucoma.intro.part3.p1') }}
              </p>
              <p>{{ t('ppp.glaucoma.intro.part3.p2') }}</p>
              <p>{{ t('ppp.glaucoma.intro.part3.p3') }}</p>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[8%]"
        >
          <picture class="order-1 lg:order-2 lg:w-[45%]">
            <img
              src="https://statichk.cmermedical.com/newopd/services/glaucomappp/glaucomappp-intro-cover-04-v1.webp"
              :alt="t('ppp.csp.alt1')"
              :title="t('ppp.csp.alt1')"
              loading="lazy"
            />
          </picture>
          <div class="order-2 lg:order-1 lg:flex-1">
            <h2 class="title-normal">
              {{ t('ppp.glaucoma.intro.part4.title') }}
            </h2>
            <div class="text-justify">
              <p>
                <i18n-t keypath="ppp.glaucoma.intro.part4.p1">
                  <template #strong>
                    <strong class="text-[#FF6B2C] font-black">
                      {{ $t('ppp.glaucoma.intro.part4.strong') }}
                    </strong>
                  </template>
                </i18n-t>
                <nuxt-link
                  to="/glaucoma-doctor"
                  class="bg-primary text-white py-1 px-2 rounded-lg block w-fit"
                >
                  {{ $t('ppp.link_doctor') }}
                </nuxt-link>
              </p>
              <p>{{ t('ppp.glaucoma.intro.part4.p2') }}</p>
              <ul class="!mb-0 !list-decimal">
                <li>
                  {{ t('ppp.tel') }}
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
                    href="https://api.whatsapp.com/send?phone=85293451508&text=你好，我想查詢青光眼治療協作計劃"
                    target="_blank"
                    class="!text-[#2958a3] !underline underline-offset-4"
                    >{{ t('ppp.whatsapp_check') }}9345 1508</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto px-[12px] xl:px-0 mt-7 lg:mt-15">
      <h2>{{ t('ppp.glaucoma.intro.information.title') }}</h2>
      <ul>
        <li>
          <a
            :href="glaucomapppLink"
            target="_blank"
            class="text-[#2958a3] underline underline-offset-4"
            >{{ t('ppp.glaucoma.intro.information.glaucomappp') }}</a
          >
        </li>
      </ul>
      <PPPButton :buttonList="buttonList" />
    </section>
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#64bcd1;'}`"
      class="mt-10 lg:mt-20"
    />
    <PageFooterMenu />
  </main>
</template>
<style lang="scss" scoped>
:deep(.footerMenu-in-t .t-in-b > div a) {
  height: 26px;
}
ul,
ol {
  list-style-position: inside;
}
.w-fit {
  width: fit-content;
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

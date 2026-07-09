<!--
 * @Author: 谭洁莹
 * @Date: 2026-04-15 15:30:27
 * @LastEditTime: 2026-06-10 16:59:19
 * @FilePath: /pages/cataract/extended-depth-of-focus-lenses.vue
 * @Description: 扩展景深人工晶体
-->
<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')
useHead(() => ({
  title: t('tdk.edof.title'),
  meta: [
    {
      name: 'description',
      content: t('tdk.edof.desc'),
    },
    {
      name: 'keywords',
      content: t('tdk.edof.key'),
    },
  ],
}))
const advantages = [
  {
    icon: 'clear',
    title: 'pages.medical_service.edof.advantage.clear.title',
    intro: 'pages.medical_service.edof.advantage.clear.intro',
  },
  {
    icon: 'glare',
    title: 'pages.medical_service.edof.advantage.glare.title',
    intro: 'pages.medical_service.edof.advantage.glare.intro',
  },
  {
    icon: 'lowlight',
    title: 'pages.medical_service.edof.advantage.lowlight.title',
    intro: 'pages.medical_service.edof.advantage.lowlight.intro',
  },
  {
    icon: 'reading',
    title: 'pages.medical_service.edof.advantage.reading.title',
    intro: 'pages.medical_service.edof.advantage.reading.intro',
  },
  {
    icon: 'glasses',
    title: 'pages.medical_service.edof.advantage.glasses.title',
    intro: 'pages.medical_service.edof.advantage.glasses.intro',
  },
]
const faqs = [
  {
    title: 'pages.medical_service.edof.faq.q1',
    agree: 'pages.medical_service.edof.faq.a1',
  },
  {
    title: 'pages.medical_service.edof.faq.q2',
    agree: 'pages.medical_service.edof.faq.a2',
  },
  {
    title: 'pages.medical_service.edof.faq.q3',
    agree: 'pages.medical_service.edof.faq.a3',
  },
  {
    title: 'pages.medical_service.edof.faq.q4',
    agree: 'pages.medical_service.edof.faq.a4',
  },
  {
    title: 'pages.medical_service.edof.faq.q5',
    agree: 'pages.medical_service.edof.faq.a5',
  },
]
</script>
<template>
  <div>
    <section
      class="banner mb-6 lg:mb-[112px] flex flex-col lg:items-center lg:justify-center"
    >
      <div class="text-primary font-medium pt-30 pl-6 lg:p-0">
        <h1
          class="max-w-[168px] sm:max-w-none lg:text-center text-3xl lg:text-5xl leading-[1.2] lg:leading-[1.5] tracking-[0.4em]"
        >
          {{ t('pages.medical_service.edof.abbr') }}
        </h1>
        <p class="text-base lg:text-3xl">Extended Depth of Focus (EDOF)</p>
      </div>
    </section>
    <section class="wrapper intro text-primary mb-5 lg:mb-25">
      <div class="flex items-center mb-8 lg:mb-[60px]">
        <div class="flex-1">
          <div class="intro-title pl-4 lg:pl-11">
            <h2 class="text-lg lg:text-4xl font-bold tracking-widest mb-6">
              {{ t('pages.medical_service.edof.abbr') }}
              <span class="block text-sm lg:text-xl"
                >(EDOF - Extended Depth of Focus)</span
              >
            </h2>
          </div>
          <p
            :class="[
              'flex-1 text-base lg:text-2xl text-primary font-medium tracking-widest',
              locale === 'en'
                ? 'leading-[1.6]'
                : 'leading-[1.6] lg:leading-[2] text-justify',
            ]"
          >
            {{ t('pages.medical_service.edof.intro') }}
          </p>
        </div>
        <picture class="lg:w-1/3">
          <source
            srcset="
              https://statichk.cmermedical.com/hkcmereye/cataract/edof/edof-intro-cover-v1.webp
            "
            type="image/webp"
          />
          <img
            src="https://statichk.cmermedical.com/hkcmereye/cataract/edof/edof-intro-cover-v1.png"
            alt=""
            class="hidden lg:block -rotate-[10deg]"
          />
        </picture>
      </div>
      <div
        :class="[
          'intro-desc text-white text-sm lg:text-2xl font-bold leading-[1.85] lg:leading-[2] tracking-widest py-4 px-6 lg:py-8 lg:px-[72px] rounded-xl',
          locale === 'en' ? '' : 'text-justify',
        ]"
      >
        <p>{{ t('pages.medical_service.edof.desc') }}</p>
      </div>
    </section>
    <section class="lens-table-wrap pt-5 lg:pt-0">
      <div class="wrapper">
        <h2 class="title-normal mb-9 lg:mb-11">
          <i18n-t
            keypath="pages.medical_service.edof.table.title"
            tag="span"
            scope="global"
          >
            <template #mbr><br class="block md:hidden" /></template>
          </i18n-t>
        </h2>
        <div class="lens-table pb-5 overflow-x-auto mb-3 lg:mb-20 text-center">
          <table class="w-full border-collapse">
            <thead>
              <tr>
                <th>
                  <div class="lens-table-subtitle">
                    {{ t('pages.medical_service.edof.table.name.title') }}
                  </div>
                </th>
                <th class="bg-[#F6E75B] lens-table-th">
                  <div class="flex justify-center items-center gap-1 flex-col">
                    <div class="w-12 h-6 lg:w-[108px] lg:h-[60px]">
                      <img
                        src="https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-table-edof-v1.svg"
                        alt="擴展景深人工晶體圖標"
                        class="w-full"
                      />
                    </div>
                    <i18n-t
                      keypath="pages.medical_service.edof.table.name.edof"
                      tag="span"
                      scope="global"
                      class="lens-table-title special text-[#EC8836]"
                    >
                      <template #br><br /></template>
                    </i18n-t>
                  </div>
                </th>
                <th class="bg-[#55D1F0] lens-table-th">
                  <div class="flex justify-center items-center gap-1 flex-col">
                    <div class="w-12 h-6 lg:w-[108px] lg:h-[60px]">
                      <img
                        src="https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-table-monofocal-v1.svg"
                        alt="單焦點人工晶體圖標"
                        class="w-full"
                      />
                    </div>
                    <span class="lens-table-title special text-primary">
                      {{ t('pages.medical_service.edof.table.name.monofocal') }}
                    </span>
                  </div>
                </th>
                <th class="bg-[#F2F7FB] lens-table-th">
                  <div
                    class="flex justify-center items-center gap-1 lg:flex-col"
                  >
                    <div class="w-12 h-6 lg:w-[108px] lg:h-[60px]">
                      <img
                        src="https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-table-multifocal-v1.svg"
                        alt="多焦點人工晶體圖標"
                        class="w-full lens-icon-normal"
                      />
                    </div>
                    <i18n-t
                      keypath="pages.medical_service.edof.table.name.multifocal"
                      tag="span"
                      scope="global"
                      class="lens-table-title text-[#4886CE]"
                    >
                      <template #mbr><br class="block md:hidden" /></template>
                    </i18n-t>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody
              :class="[
                'text-[3.0769vw] md:text-lg xl:text-2xl text-[#66696f] font-bold lg:font-medium leading-[1.5] tracking-widest',
                { 'whitespace-nowrap': locale !== 'en' },
              ]"
            >
              <tr class="lens-table-bb">
                <td class="bg-[#fcfcfc]">
                  <div class="lens-table-subtitle">
                    {{ t('pages.medical_service.edof.table.type.title') }}
                  </div>
                </td>
                <i18n-t
                  keypath="pages.medical_service.edof.table.type.edof"
                  tag="td"
                  scope="global"
                  class="lens-table-td"
                >
                  <template #br><br /></template>
                </i18n-t>
                <i18n-t
                  keypath="pages.medical_service.edof.table.type.monofocal"
                  tag="td"
                  scope="global"
                  class="lens-table-td"
                >
                  <template #br><br /></template>
                </i18n-t>
                <i18n-t
                  keypath="pages.medical_service.edof.table.type.multifocal"
                  tag="td"
                  scope="global"
                  class="lens-table-td"
                >
                  <template #br><br /></template>
                </i18n-t>
              </tr>
              <tr class="lens-table-bb">
                <td class="bg-[#fcfcfc]">
                  <div class="lens-table-subtitle">
                    {{ t('pages.medical_service.edof.table.focal.title') }}
                  </div>
                </td>
                <i18n-t
                  keypath="pages.medical_service.edof.table.focal.edof"
                  tag="td"
                  scope="global"
                  class="lens-table-td"
                >
                  <template #br><br /></template>
                  <template #mbr><br class="block md:hidden" /></template>
                  <template #pcbr><br class="hidden md:block" /></template>
                </i18n-t>
                <i18n-t
                  keypath="pages.medical_service.edof.table.focal.monofocal"
                  tag="td"
                  scope="global"
                  class="lens-table-td"
                >
                  <template #br><br /></template>
                  <template #mbr><br class="block md:hidden" /></template>
                </i18n-t>
                <i18n-t
                  keypath="pages.medical_service.edof.table.focal.multifocal"
                  tag="td"
                  scope="global"
                  class="lens-table-td"
                >
                  <template #br><br /></template>
                  <template #mbr><br class="block md:hidden" /></template>
                </i18n-t>
              </tr>
              <tr class="lens-table-bb">
                <td class="bg-[#fcfcfc]">
                  <i18n-t
                    keypath="pages.medical_service.edof.table.contrast.title"
                    tag="div"
                    scope="global"
                    class="lens-table-subtitle"
                  >
                    <template #br><br /></template>
                  </i18n-t>
                </td>
                <i18n-t
                  keypath="pages.medical_service.edof.table.contrast.edof"
                  tag="td"
                  scope="global"
                  class="lens-table-td"
                >
                  <template #br><br /></template>
                  <template #mbr><br class="block lg:hidden" /></template>
                </i18n-t>
                <td class="lens-table-td">
                  {{ t('pages.medical_service.edof.table.contrast.monofocal') }}
                </td>
                <i18n-t
                  keypath="pages.medical_service.edof.table.contrast.multifocal"
                  tag="td"
                  scope="global"
                  class="lens-table-td"
                >
                  <template #br><br /></template>
                  <template #mbr><br class="block lg:hidden" /></template>
                  <template #pcbr><br class="hidden lg:block" /></template>
                </i18n-t>
              </tr>
              <tr class="lens-table-bb">
                <td class="bg-[#fcfcfc]">
                  <div class="lens-table-subtitle">
                    {{ t('pages.medical_service.edof.table.advantages.title') }}
                  </div>
                </td>
                <i18n-t
                  keypath="pages.medical_service.edof.table.advantages.edof"
                  tag="td"
                  scope="global"
                  class="lens-table-td"
                >
                  <template #br><br /></template>
                  <template #mbr><br class="block lg:hidden" /></template>
                </i18n-t>
                <td class="lens-table-td">
                  {{
                    t('pages.medical_service.edof.table.advantages.monofocal')
                  }}
                </td>
                <i18n-t
                  keypath="pages.medical_service.edof.table.advantages.multifocal"
                  tag="td"
                  scope="global"
                  class="lens-table-td"
                >
                  <template #mbr><br class="block lg:hidden" /></template>
                </i18n-t>
              </tr>
              <tr class="lens-table-bb">
                <td class="bg-[#fcfcfc]">
                  <div class="lens-table-subtitle">
                    <i18n-t
                      keypath="pages.medical_service.edof.table.glasses.title"
                      tag="div"
                      scope="global"
                      class="lens-table-subtitle"
                    >
                      <template #br><br /></template>
                      <template #mbr><br class="block md:hidden" /></template>
                    </i18n-t>
                  </div>
                </td>
                <i18n-t
                  keypath="pages.medical_service.edof.table.glasses.edof"
                  tag="td"
                  scope="global"
                  class="lens-table-td"
                >
                  <template #br><br /></template>
                </i18n-t>
                <i18n-t
                  keypath="pages.medical_service.edof.table.glasses.monofocal"
                  tag="td"
                  scope="global"
                  class="lens-table-td"
                >
                  <template #br><br /></template>
                </i18n-t>
                <i18n-t
                  keypath="pages.medical_service.edof.table.glasses.multifocal"
                  tag="td"
                  scope="global"
                  class="lens-table-td"
                >
                  <template #br><br /></template>
                </i18n-t>
              </tr>
              <tr>
                <td class="bg-[#fcfcfc]">
                  <div class="lens-table-subtitle">
                    <i18n-t
                      keypath="pages.medical_service.edof.table.suitable.title"
                      tag="div"
                      scope="global"
                      class="lens-table-subtitle"
                    >
                      <template #mbr><br class="block md:hidden" /></template>
                    </i18n-t>
                  </div>
                </td>
                <i18n-t
                  keypath="pages.medical_service.edof.table.suitable.edof"
                  tag="td"
                  scope="global"
                  class="lens-table-td relative"
                >
                  <template #mbr><br class="block md:hidden" /></template>
                  <template #pcbr><br class="hidden md:block" /></template>
                </i18n-t>
                <td class="lens-table-td relative">
                  {{ t('pages.medical_service.edof.table.suitable.monofocal') }}
                </td>
                <td class="lens-table-td lg:min-h-[232px] relative">
                  {{
                    t('pages.medical_service.edof.table.suitable.multifocal')
                  }}
                  <nuxt-link
                    to="/cataract/multifocal-lens"
                    class="absolute-horizon -bottom-4 z-10"
                  >
                    <div class="relative">
                      <img
                        src="https://statichk.cmermedical.com/hkcmereye/cataract/lens/lens-table-more-01-v1.webp"
                        alt="了解更多多焦點人工晶體"
                        class="absolute left-0 bottom-0 w-[52px] lg:w-[108px] rounded-bl-xl lg:rounded-bl-[44px]"
                      />
                      <div
                        class="lens-table-more multifocal text-[#4886CE] pl-[60px] lg:pl-[108px] pr-1 lg:pr-2 py-1 lg:py-2 bg-white rounded-xl lg:rounded-[44px]"
                      >
                        <i18n-t
                          keypath="pages.medical_service.edof.table.more"
                          tag="span"
                          scope="global"
                        >
                          <template #mbr
                            ><br class="block md:hidden"
                          /></template>
                        </i18n-t>
                      </div>
                    </div>
                  </nuxt-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex flex-col lg:hidden text-center mb-4 lg:mb-25">
          <svg
            class="w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 301 12"
            fill="none"
          >
            <path
              d="m0 5.773 10 5.774V0zm301 0L291 0v11.547zm-292 0v1h283v-2H9z"
              fill="#3a5fb2"
            />
          </svg>
          <div class="text-primary text-sm font-bold tracking-widest">
            {{ t('pages.medical_service.edof.table.swiper') }}
          </div>
        </div>
        <p
          class="text-sm lg:text-2xl text-primary leading-[1.2] tracking-widest font-bold mb-8 lg:mb-12"
        >
          {{ t('pages.medical_service.edof.table.intro') }}
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=85260629611&text=白內障專線查詢"
          target="_blank"
          class="button-ws rounded-full text-white font-black relative"
        >
          {{ t('pages.medical_service.edof.table.button') }}
        </a>
      </div>
    </section>
    <section class="wrapper max-w-[1200px] advantage mb-[64px] lg:mb-[112px]">
      <div class="py-8 lg:pt-[68px] lg:pb-[128px] advantage-title">
        <i18n-t
          keypath="pages.medical_service.edof.advantage.title"
          tag="h2"
          scope="global"
          class="title-normal mb-5 lg:mb-8"
        >
          <template #mbr><br class="block lg:hidden" /></template>
        </i18n-t>
        <p
          :class="[
            'text-base lg:text-2xl text-primary leading-[1.6] lg:leading-[2] font-medium tracking-widest mx-auto md:w-4/5 lg:w-9/10',
            locale === 'en' ? '' : 'text-justify ',
          ]"
        >
          {{ t('pages.medical_service.edof.advantage.intro') }}
        </p>
      </div>
      <div
        class="advantage-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 py-3 lg:py-0 lg:px-3 border-l lg:border-l-0 lg:border-t border-primary"
      >
        <div
          v-for="(item, index) in advantages"
          :key="index"
          class="advantage-item transition-transform duration-300 ease text-primary hover:bg-primary hover:text-white pl-5 pr-3 pt-6 pb-4 lg:pt-8 lg:pb-5 lg:px-3"
        >
          <div
            class="flex lg:flex-col justify-between items-center lg:items-start lg:justify-center lg:gap-4 mb-2"
          >
            <i18n-t
              :keypath="item.title"
              tag="h3"
              scope="global"
              :class="[
                'advantage-subtitle flex-1 pl-5 order-1 lg:order-2 text-lg font-bold whitespace-nowrap lg:min-h-[64px] flex items-center',
                locale === 'en' ? 'lg:text-xl' : 'lg:text-2xl',
              ]"
            >
              <template #br><br /></template>
            </i18n-t>
            <div
              class="order-2 lg:order-1 advantage-icon w-[52px] h-12 lg:w-3/5 mx-auto lg:h-[128px] flex justify-end lg:justify-center items-center"
            >
              <PageIconSvg :name="item.icon" />
            </div>
          </div>
          <p
            :class="[
              'text-base font-medium leading-[1.85]',
              locale === 'en' ? 'lg:text-xl' : 'text-justify lg:text-xl',
            ]"
          >
            {{ t(item.intro) }}
          </p>
        </div>
      </div>
    </section>
    <section class="faq wrapper mb-40">
      <h2 class="title-normal mb-12 lg:mb-22">
        {{ t('pages.medical_service.edof.faq.title') }}
      </h2>
      <PageCollapse
        :answer="faqs"
        downarr="edof"
        :style="{ '--subassembly-color': '#2958a3' }"
      />
    </section>
  </div>
</template>
<style lang="scss" scoped>
html[lang=en] {
  .button-ws {
    letter-spacing: 0.1em;
    font-size: 3.2vw;
  }
  .lens-table-subtitle,.lens-table .lens-table-title {
    white-space: normal;
  }
  .lens-table-th {
    min-width: 124px;
    max-width: 312px;
  }
  .lens-table .lens-table-subtitle {
    min-width: 88px;
  }
}
%advantage-circle {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: #2958a3;
}
:deep(.el-collapse-item__header) {
  font-weight: 700;
}
:deep(.el-collapse-item__content) {
  font-weight: 500;
}
.absolute-horizon {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.lens-table-wrap {
  background: url(https://statichk.cmermedical.com/imgs/2024/03/cc6eb4fe0d7bb9b5.png) no-repeat top,url(https://statichk.cmermedical.com/imgs/2024/03/b34e0a520ed9c467.png) no-repeat bottom;
  background-size: cover;
}
.lens-table {
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .lens-table-th {
    border-radius: 6px 6px 0 0;
    padding: 4px 6px;
  }
  .lens-table-title {
    font-size: clamp(14px, 3.3333vw, 30px);
    font-weight: 700;
    letter-spacing: 0.1em;
    text-align: center;
    white-space: nowrap;
    &.special {
      text-shadow: rgb(255, 255, 255) 3px 0px 0px,
        rgb(255, 255, 255) 2.83333px 0.983333px 0px,
        rgb(255, 255, 255) 2.35px 1.85px 0px,
        rgb(255, 255, 255) 1.61667px 2.51667px 0px,
        rgb(255, 255, 255) 0.7px 2.91667px 0px,
        rgb(255, 255, 255) -0.283333px 2.98333px 0px,
        rgb(255, 255, 255) -1.25px 2.73333px 0px,
        rgb(255, 255, 255) -2.06667px 2.16667px 0px,
        rgb(255, 255, 255) -2.66667px 1.36667px 0px,
        rgb(255, 255, 255) -2.96667px 0.416667px 0px,
        rgb(255, 255, 255) -2.95px -0.566667px 0px,
        rgb(255, 255, 255) -2.6px -1.5px 0px,
        rgb(255, 255, 255) -1.96667px -2.26667px 0px,
        rgb(255, 255, 255) -1.11667px -2.78333px 0px,
        rgb(255, 255, 255) -0.133333px -3px 0px,
        rgb(255, 255, 255) 0.85px -2.88333px 0px,
        rgb(255, 255, 255) 1.75px -2.43333px 0px,
        rgb(255, 255, 255) 2.45px -1.73333px 0px,
        rgb(255, 255, 255) 2.88333px -0.833333px 0px;
    }
  }
  .lens-table-bb {
    border-bottom: 0.6px solid #cbc6c6;
  }
  .lens-table-td {
    padding: 12px;
    border: none;
    --ring-w: 3px;
    &:nth-child(2) {
      --ring-color: #f6e75b;
      z-index: 10;
    }
    &:nth-child(3) {
      --ring-color: #55d1f0;
      z-index: 10;
    }
    &:nth-child(4) {
      --ring-color: #f2f7fb;
    }
    &:nth-child(5) {
      --ring-color: #f2fffe;
    }
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
      box-shadow: inset var(--ring-w) 0 0 0 var(--ring-color),
        inset calc(-1 * var(--ring-w)) 0 0 0 var(--ring-color);
    }
  }
  tr {
    &:last-child {
      .lens-table-td {
        border-radius: 0 0 6px 6px;
        box-shadow: inset var(--ring-w) 0 0 0 var(--ring-color),
          inset calc(-1 * var(--ring-w)) 0 0 0 var(--ring-color),
          inset 0 calc(-1 * var(--ring-w)) 0 0 var(--ring-color);
        padding-top: 24px;
        padding-bottom: 36px;
      }
    }
  }
  .lens-table-more {
    display: flex;
    flex-direction: column;
    &.edof {
      box-shadow: 0 0 12.293px rgba(255, 167, 4, 0.86);
    }
    &.multifocal {
      box-shadow: 0 0 12.293px rgba(72, 134, 206, 0.86);
    }
  }
  .lens-table-subtitle {
    color: #2958a3;
    font-weight: 700;
    font-size: 3.3333vw;
    letter-spacing: 0.1em;
    text-shadow: 1px 1px 2px #fff;
    line-height: 4.1026vw;
    width: 15.128vw;
    white-space: nowrap;
    text-align: center;
    min-width: 60px;
    width: 100%;
  }
}
.button-ws {
  display: block;
  width: fit-content;
  background: linear-gradient(180deg, #f0cf8f 4%, rgba(255, 168, 0, 0.84));
  border: 1.0256vw solid #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-size: 5.1282vw;
  letter-spacing: 0.9744vw;
  line-height: 6.1538vw;
  margin: 3.8462vw auto 0;
  padding: 5.128vw 2.564vw;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
  &:hover {
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
    font-size: 5.1282vw;
    text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.4);
    transform: translateY(-5px);
  }
}
.wrapper {
  padding-left: 12px;
  padding-right: 12px;
  margin-left: auto;
  margin-right: auto;
  max-width: 72rem;
}
.title-normal {
  color: #2958a3;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0.1em;
  text-align: center;
}
.banner {
  height: 248px;
  background-image: url('https://statichk.cmermedical.com/hkcmereye/cataract/edof/edof-banner-m-v1.webp');
  background-size: cover;
  background-repeat: no-repeat;
}
.intro {
  .intro-title {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 8px;
      height: 100%;
      background-color: #2958a3;
    }
  }
  .intro-desc {
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background: url('https://statichk.cmermedical.com/hkcmereye/cataract/edof/edof-intro-desc-m-v1.webp')
      no-repeat center / cover;
  }
}
.advantage {
  .advantage-title {
    background: url('https://statichk.cmermedical.com/hkcmereye/cataract/edof/edof-advantages-title-v1.svg')
      no-repeat top / 44%;
  }
  .advantage-list {
    position: relative;
    &::before {
      @extend %advantage-circle;
      width: 4px;
      height: 4px;
      top: 0;
      left: -2px;
    }
    &::after {
      @extend %advantage-circle;
      width: 4px;
      height: 4px;
      bottom: 0;
      left: -2px;
    }
  }
  .advantage-item {
    border: solid #2958a3;
    border-width: 0 1px 1px 0;
    &:first-child {
      border-width: 1px 1px 1px 0;
    }
    &:hover {
      transform: translateX(-5%);
      + .advantage-item {
        border-top-width: 1px;
      }
    }
  }
  .advantage-subtitle {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 8px;
      height: 100%;
      background-color: #2958a3;
      left: 0;
      top: 0;
    }
    &:hover {
      &::before {
        background-color: #fff;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .faq :deep(.el-collapse-item:nth-child(4) .el-collapse-item__header) {
    height: 120px;
  }
}
@media screen and (min-width: 768px) {
  html[lang=en] {
    .button-ws {
      letter-spacing: 0.1em;
      font-size: min(42px,2.2vw);
    }
    .lens-table-subtitle {
      width: 212px;
    }
  }
  .button-ws {
    border: min(9px, 0.4688vw) solid #fff;
    font-size: min(52px, 2.7083vw);
    letter-spacing: min(9.85px, 0.5146vw);
    line-height: min(64px, 3.3333vw);
    margin: min(50px, 2.604vw) auto 0;
    padding: min(41px, 2.135vw) min(29.2px, 1.5208vw);
    &:hover {
      font-size: 48px;
    }
  }
  .lens-table {
    tr {
      &:last-child {
        .lens-table-td {
          &:not(:first-child) {
            padding-bottom: 40px;
            }
            &:last-child {
              padding-bottom: 80px;
          }
        }
      }
    }
    .lens-table-subtitle {
      text-shadow: -3px -3px 0 #fff, 3px -3px 0 #fff, -3px 3px 0 #fff,
        3px 3px 0 #fff;
      width: min(170px, 8.854vw);
      font-size: min(24px, 2vw);
      letter-spacing: min(2.4px, 0.125vw);
      line-height: min(40px, 2.083vw);
      min-height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 212px;
    }
  }
}
@media screen and (max-width: 1023px) {
  .lens-table {
    .lens-icon-normal {
      rotate: 90deg;
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .advantage-item {
    &:nth-child(2) {
      border-top-width: 1px;
    }
  }
}
@media screen and (min-width: 1024px) {
  .title-normal {
    font-size: 36px;
    line-height: 1.65;
  }
  .banner {
    height: 316px;
    background-image: url('https://statichk.cmermedical.com/hkcmereye/cataract/edof/edof-banner-pc-v1.webp');
  }
  .intro {
    .intro-title {
      &::before {
        width: 16px;
      }
    }
    .intro-desc {
      background-image: url('https://statichk.cmermedical.com/hkcmereye/cataract/edof/edof-intro-desc-pc-v1.webp');
    }
  }
  .lens-table-wrap {
    background: none;
  }
  .lens-table {
    .lens-table-th {
      padding: 12px 24px;
    }
    .lens-table-title {
      font-size: min(29px, 1.51vw);
    }
    .lens-table-td {
      --ring-w: 5px;
      padding: 12px 20px;
      width: 100%;
      height: 100%;
    }
    .lens-table-bb {
      border-bottom-width: 1px;
    }
    .lens-table-more {
      flex-direction: row;
    }
  }
  .advantage {
    .advantage-title {
      background-position: center;
    }
    .advantage-list {
      position: relative;
      &::before {
        @extend %advantage-circle;
        width: 8px;
        height: 8px;
        top: -4px;
        left: -4px;
      }
      &::after {
        @extend %advantage-circle;
        width: 8px;
        height: 8px;
        top: -4px;
        left: unset;
        right: -4px;
      }
    }
    .advantage-item {
      border: solid #2958a3;
      border-width: 0 1px 1px 0;
      &:first-child {
        border-width: 0 1px 1px 1px;
      }
      &:hover {
        transform: translate(0, -8%);

        + .advantage-item {
          border-left-width: 1px;
        }
      }
    }
  }
}
@media screen and (min-width: 1280px) {
  html[lang=en] {
    .lens-table .lens-table-td:nth-child(2) {
      width: 360px;
      min-width: 360px;
    }
    .lens-table .lens-table-td:nth-child(3),.lens-table .lens-table-td:nth-child(4) {
      width: 290px;
      min-width: 290px;
    }
  }
}
@media screen and (min-width: 1536px) {
  .wrapper {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>

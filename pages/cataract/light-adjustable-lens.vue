<!--
 * @Author: 谭洁莹
 * @Date: 2026-07-30 14:16:45
 * @LastEditTime: 2026-09-02 10:46:13
 * @FilePath: /pages/cataract/light-adjustable-lens.vue
 * @Description: 光调节人工晶体
-->
<script lang="ts" setup>
import { Pagination } from 'swiper'
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')
useHead({
  title: t('tdk.lal.title'),
  meta: [
    {
      name: 'description',
      content: t('tdk.lal.desc'),
    },
    {
      name: 'keywords',
      content: t('tdk.lal.key'),
    },
    { property: 'og:title', content: t('tdk.lal.title') },
    {
      property: 'og:description',
      content: t('tdk.lal.desc'),
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'zh_HK' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@id': '#cmer-org',
            '@type': 'MedicalOrganization',
            name: '香港希瑪眼科醫療中心',
            url: 'https://www.hkeyecmer.com/',
            logo: 'https://statichk.cmermedical.com/newopd/common/logo.svg',
            medicalSpecialty: [
              'https://schema.org/Optometric',
              'https://schema.org/Ophthalmologic',
            ],
            telephone: '+852 3956 2026',
            address: {
              '@type': 'PostalAddress',
              postalCode: '000000',
              streetAddress: '畢打街1-3號中建大廈1515室',
              addressLocality: '中環',
              addressRegion: '香港島',
              addressCountry: 'HK',
            },
          },
          {
            '@type': 'MedicalWebPage',
            '@id':
              'https://www.hkeyecmer.com/cataract/light-adjustable-lens/#webpage',
            name: 'Light Adjustable Lens™ 光調節人工晶體 (LAL)',
            description: t('pages.medical_service.lal.what.intro_origin'),
            url: 'https://www.hkeyecmer.com/cataract/light-adjustable-lens/',
            inLanguage: 'zh-HK',
            provider: { '@id': '#cmer-org' },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: '首頁',
                  item: 'https://www.hkeyecmer.com/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: '白內障',
                  item: 'https://www.hkeyecmer.com/medical-service/cataract',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: '光調節人工晶體 (LAL)',
                  item: 'https://www.hkeyecmer.com/cataract/light-adjustable-lens/',
                },
              ],
            },
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: t('pages.medical_service.lal.faq.q1'),
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: t('pages.medical_service.lal.faq.a1'),
                },
              },
              {
                '@type': 'Question',
                name: t('pages.medical_service.lal.faq.q2'),
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: t('pages.medical_service.lal.faq.a2'),
                },
              },
              {
                '@type': 'Question',
                name: t('pages.medical_service.lal.faq.q3'),
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: t('pages.medical_service.lal.faq.a3'),
                },
              },
              {
                '@type': 'Question',
                name: t('pages.medical_service.lal.faq.q4'),
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: t('pages.medical_service.lal.faq.a4'),
                },
              },
            ],
          },
        ],
      }),
    },
  ],
})
const modules = [Pagination]
const videoPopupOpen = ref(false)
const whatsappUrl =
  'https://api.whatsapp.com/send?phone=85260629611&text=%E7%99%BD%E5%85%A7%E9%9A%9C%E5%B0%88%E7%B7%9A%E6%9F%A5%E8%A9%A2'

const comparisonKeys = [
  'adjustability',
  'personalize',
  'astigmatism',
  'vision',
  'process',
  'care',
  'suitable',
] as const

type ComparisonKey = typeof comparisonKeys[number]

const comparisonRows = computed(() =>
  comparisonKeys.map((key) => ({
    key,
    label: t(`pages.medical_service.lal.table.rows.${key}.label`),
    other: t(`pages.medical_service.lal.table.rows.${key}.other`),
    // 需高亮的行：用 i18n-t + slot；其餘直接整段文案
    hasHighlight: ['adjustability', 'personalize', 'vision', 'care'].includes(
      key
    ),
    // 無高亮行的 LAL 文案
    lal: t(`pages.medical_service.lal.table.rows.${key}.lal`),
  }))
)

const whyItems = computed(() => [
  {
    key: 'personalize',
    title: t('pages.medical_service.lal.why.items.personalize.title'),
    desc: t('pages.medical_service.lal.why.items.personalize.desc'),
  },
  {
    key: 'technology',
    title: t('pages.medical_service.lal.why.items.technology.title'),
    desc: t('pages.medical_service.lal.why.items.technology.desc'),
  },
  {
    key: 'glasses',
    title: t('pages.medical_service.lal.why.items.glasses.title'),
    titleLine1: t('pages.medical_service.lal.why.items.glasses.title_line1'),
    titleLine2: t('pages.medical_service.lal.why.items.glasses.title_line2'),
    desc: t('pages.medical_service.lal.why.items.glasses.desc'),
    source: t('pages.medical_service.lal.why.items.glasses.source'),
  },
])
const faqList = [
  {
    title: 'pages.medical_service.lal.faq.q1',
    agree: ['pages.medical_service.lal.faq.a1'],
  },
  {
    title: 'pages.medical_service.lal.faq.q2',
    agree: ['pages.medical_service.lal.faq.a2'],
  },
  {
    title: 'pages.medical_service.lal.faq.q3',
    agree: ['pages.medical_service.lal.faq.a3'],
  },
  {
    title: 'pages.medical_service.lal.faq.q4',
    agree: ['pages.medical_service.lal.faq.a4'],
  },
]
</script>
<template>
  <div>
    <div class="lal-bg overflow-hidden mb-10 lg:mb-20 text-base lg:text-xl">
      <!-- Banner -->
      <section class="banner wrapper">
        <div
          class="banner-wrap aspect-[195/248] md:aspect-[187/97] max-h-[500px] md:max-h-[776px] md:rounded-b-none overflow-hidden relative before:content-[''] before:absolute before:bottom-0 before:h-58 before:w-full before:pointer-events-none before:bg-[linear-gradient(to_bottom,transparent,#ffffff47,#ffffff94)]"
        >
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="
                https://statichk.cmermedical.com/newopd/banner/banner-lal-pc-v1.webp
              "
            />
            <img
              src="https://statichk.cmermedical.com/newopd/banner/banner-lal-mb-v1.webp"
              alt="白內障人工晶體種類Banner"
              width="780"
              height="474"
              class="banner-cover w-full aspect-[195/248] md:aspect-[187/97]"
              fetchpriority="high"
            />
          </picture>
          <div
            class="banner-main absolute bottom-3 left-6 lg:bottom-20 lg:left-15"
          >
            <img
              src="https://statichk.cmermedical.com/newopd/services/lens/lal-logo.webp"
              class="w-28 lg:w-85"
              alt="RXSIGHT"
            />
            <div
              class="text-lal text-3xl lg:text-[40px] font-bold tracking-[0.25em] text-shadow-[-1.3px_0.4px_1.7px_rgba(0,0,0,0.25)] lg:text-shadow-[-1.8px_0.6px_2.4px_rgba(0,0,0,0.25)]"
            >
              <h1>{{ t('pages.medical_service.lal.banner.title') }}</h1>
              <p class="hidden lg:block">
                {{ t('pages.medical_service.lal.banner.intro') }}
              </p>
              <p class="text-2xl lg:text-4xl tracking-normal">
                Light Adjustable Lens™
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- What is LAL -->
      <section class="wrapper pt-13 lg:pt-25 mb-9 md:mb-15 lg:mb-28">
        <div class="flex lg:gap-5 lg:gap-12 2xl:gap-20">
          <div class="hidden lg:block animate-rotateImage">
            <img
              src="https://statichk.cmermedical.com/hkcmereye/LAL/isLALbg.webp"
              class="h-104 w-58 object-cover"
              alt="LAL Icon"
            />
          </div>
          <div class="flex-1">
            <div class="mb-12 lg:mb-30">
              <h2
                class="flex flex-col text-lal text-[clamp(18px,5.5vw,24px)] lg:text-5xl font-bold leading-normal mb-4 lg:mb-8"
              >
                <span class="relative w-fit lal-what-icon">{{
                  t('pages.medical_service.lal.what.title')
                }}</span>
                <span>Light Adjustable Lens™(LAL)？</span>
              </h2>
              <p class="intro-default">
                <i18n-t
                  keypath="pages.medical_service.lal.what.intro"
                  scope="global"
                  tag="span"
                >
                  <template #strong>
                    <strong class="text-lal font-black">{{
                      t('pages.medical_service.lal.what.strong')
                    }}</strong>
                  </template>
                </i18n-t>
              </p>
            </div>
            <div class="aspect-video max-w-3xl">
              <video
                src="https://r2.cmermedical.com/lal.mp4"
                controls
                controlsList="nodownload"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- LAL vs Traditional -->
      <section
        class="lal-bg-deco relative before:-left-16 lg:before:top-35 lg:before:-left-40"
      >
        <div class="wrapper">
          <h2 class="text-center font-bold text-lal mb-7 lg:mb-29">
            <span class="text-2xl lg:text-5xl">LAL</span>
            <span class="lg:text-3xl">{{
              t('pages.medical_service.lal.table.title.and')
            }}</span>
            <span class="text-lg lg:text-4xl text-lal-text">{{
              t('pages.medical_service.lal.table.title.other')
            }}</span>
          </h2>
          <div
            class="lal-table mb-5 text-xs lg:text-xl text-center text-text-info font-bold tracking-widest whitespace-nowrap overflow-x-auto pt-13 lg:pt-41"
          >
            <table class="border-collapse mx-auto">
              <thead class="text-[9px] lg:text-2xl leading-[1.2]">
                <tr>
                  <th></th>
                  <th
                    class="lens-lal border-none relative text-white pt-3 px-3 lg:pt-0"
                  >
                    Light Adjustable Lens™<br class="block md:hidden" />(LAL)
                  </th>
                  <th
                    class="lens-other border-none relative flex pt-[10%] lg:pt-[15%] justify-center"
                  >
                    {{ t('pages.medical_service.lal.table.name.other') }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in comparisonRows" :key="row.key">
                  <td>
                    <i18n-t
                      :keypath="`pages.medical_service.lal.table.rows.${row.key}.label`"
                      scope="global"
                      tag="span"
                    >
                      <template #br><br /></template>
                    </i18n-t>
                  </td>
                  <td>
                    <!-- 高亮行：用 slot 包裹紫色關鍵詞，便於中英獨立翻譯 -->
                    <template v-if="row.key === 'adjustability'">
                      <i18n-t
                        keypath="pages.medical_service.lal.table.rows.adjustability.lal"
                        scope="global"
                        tag="span"
                      >
                        <template #post>
                          <span class="text-lal">{{
                            t(
                              'pages.medical_service.lal.table.rows.adjustability.post'
                            )
                          }}</span>
                        </template>
                        <template #light>
                          <span class="text-lal">{{
                            t(
                              'pages.medical_service.lal.table.rows.adjustability.light'
                            )
                          }}</span>
                        </template>
                        <template #br><br /></template>
                      </i18n-t>
                    </template>
                    <template v-else-if="row.key === 'personalize'">
                      <i18n-t
                        keypath="pages.medical_service.lal.table.rows.personalize.lal"
                        scope="global"
                        tag="span"
                      >
                        <template #hl>
                          <span class="text-lal">{{
                            t(
                              'pages.medical_service.lal.table.rows.personalize.hl'
                            )
                          }}</span>
                        </template>
                        <template #br><br /></template>
                      </i18n-t>
                    </template>
                    <template v-else-if="row.key === 'vision'">
                      <i18n-t
                        keypath="pages.medical_service.lal.table.rows.vision.lal"
                        scope="global"
                        tag="span"
                      >
                        <template #hl>
                          <span class="text-lal">{{
                            t('pages.medical_service.lal.table.rows.vision.hl')
                          }}</span>
                        </template>
                        <template #br><br /></template>
                      </i18n-t>
                    </template>
                    <template v-else-if="row.key === 'care'">
                      <i18n-t
                        keypath="pages.medical_service.lal.table.rows.care.lal"
                        scope="global"
                        tag="span"
                      >
                        <template #hl>
                          <span class="text-lal">{{
                            t('pages.medical_service.lal.table.rows.care.hl')
                          }}</span>
                        </template>
                        <template #br><br /></template>
                      </i18n-t>
                    </template>
                    <template v-else>
                      <i18n-t
                        :keypath="`pages.medical_service.lal.table.rows.${row.key}.lal`"
                        scope="global"
                        tag="span"
                      >
                        <template #br><br /></template>
                      </i18n-t>
                    </template>
                  </td>
                  <td>
                    <i18n-t
                      :keypath="`pages.medical_service.lal.table.rows.${row.key}.other`"
                      scope="global"
                      tag="span"
                    >
                      <template #br><br /></template>
                      <template #br2><br /></template>
                    </i18n-t>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener"
            class="optionLALBtn lal-button mx-auto"
          >
            <span class="text-lal font-bold">{{
              t('pages.medical_service.lal.table.button')
            }}</span>
            <!-- prettier-ignore -->
            <svg class="w-2 lg:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.992 11.953 6.976 6.95c.436-.437.436-1.117 0-1.603L1.992.397C1.556-.087.927-.137.492.3L.299.492c-.337.388-.436.825-.05 1.216C1.462 2.92 2.67 4.131 3.927 5.396c.436.387.436 1.117 0 1.55C2.67 8.16 1.457 9.416.249 10.632c-.386.342-.287.824.05 1.211l.193.194c.435.437 1.064.338 1.5-.095z" fill="#833c75"/></svg>
          </a>
        </div>
      </section>

      <!-- Principle & Innovation -->
      <section
        class="lal-bg-deco relative before:hidden lg:before:block lg:before:top-0 lg:before:-right-42 pt-12 lg:pt-25 mb-9 lg:mb-22"
      >
        <div class="wrapper max-w-7xl">
          <div class="mb-11 lg:mb-22">
            <h2 class="text-2xl lg:text-5xl font-black text-lal-text mb-5">
              {{ t('pages.medical_service.lal.principle.title') }}
            </h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 intro-default">
              <div
                class="order-1 text-lal pl-3 lg:pl-7 border-l-3 border-lal h-fit lg:mb-5"
              >
                <p>{{ t('pages.medical_service.lal.principle.intro') }}</p>
              </div>
              <div
                class="order-2 lg:order-3 lg:col-start-2 lg:row-start-1 lg:row-span-3"
              >
                <picture>
                  <source
                    srcset="
                      https://statichk.cmermedical.com/newopd/services/cataract/lal-schematic-v1.webp
                    "
                    type="image/webp"
                  />
                  <img
                    src="https://statichk.cmermedical.com/newopd/services/cataract/lal-schematic-v1.png"
                    class="w-full max-h-60 object-cover"
                    :alt="t('pages.medical_service.lal.principle.alt')"
                  />
                </picture>
                <div
                  class="flex justify-around items-center text-lal mb-12 lg:mb-0"
                >
                  <span
                    class="bg-[#EBD4E7] w-32 h-9 lg:w-52 lg:h-13 rounded-full center"
                    >{{ t('pages.medical_service.lal.principle.uv') }}</span
                  >
                  <span
                    class="bg-[#EBD4E7] w-32 h-9 lg:w-52 lg:h-13 rounded-full center"
                    >{{
                      t('pages.medical_service.lal.principle.modified')
                    }}</span
                  >
                </div>
              </div>
              <div
                class="order-3 lg:order-2 lg:col-start-1 lg:row-start-2 lg:row-span-2 flex flex-col items-center lg:items-start gap-3"
              >
                <p>{{ t('pages.medical_service.lal.principle.desc') }}</p>
                <p class="text-lal">
                  {{ t('pages.medical_service.lal.principle.more') }}
                </p>
                <button
                  type="button"
                  class="bg-primary-index text-white center gap-2 rounded-md cursor-pointer py-2 px-5"
                  @click="videoPopupOpen = true"
                >
                  <!-- prettier-ignore -->
                  <svg class="video-icon-play" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M507.456 64C262.528 64 64 262.752 64 507.904c0 245.12 198.528 443.872 443.456 443.872 244.896 0 443.456-198.752 443.456-443.872C950.912 262.752 752.352 64 507.456 64m0 843.408c-220.432 0-399.136-178.88-399.136-399.504 0-220.704 178.72-399.536 399.136-399.536 220.432 0 399.136 178.88 399.136 399.536 0 220.624-178.704 399.504-399.136 399.504m201.28-430.96C639.76 429.44 514.656 359.072 443.36 315.52c-29.232-18.496-53.776-11.088-56.144 21.504-1.728 87.248 0 255.52 0 344.32 1.44 33.04 30.592 37.408 55.92 24.08L708.16 544.736c-.496-.272 54.272-30.464.592-68.288z" fill="currentColor"/></svg>
                  <span class="text-lg lg:text-2xl font-bold">{{
                    t('pages.medical_service.lal.principle.video')
                  }}</span>
                </button>
              </div>
            </div>
          </div>
          <div
            class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-x-25 lg:gap-y-7"
          >
            <h2
              class="text-2xl lg:text-5xl font-black text-lal-text lg:col-start-2 lg:row-start-1"
            >
              {{ t('pages.medical_service.lal.innovation.title') }}
            </h2>
            <img
              src="https://statichk.cmermedical.com/hkcmereye/LAL/creatLAL.webp"
              alt="LAL技术"
              class="w-full h-auto object-cover rounded-lg lg:col-start-1 lg:row-start-1 lg:row-span-2 max-w-lg lg:max-w-none mx-auto"
            />
            <p class="intro-default lg:col-start-2 lg:row-start-2">
              <i18n-t
                keypath="pages.medical_service.lal.innovation.intro"
                scope="global"
                tag="span"
              >
                <template #strong>
                  <span class="text-lal">{{
                    t('pages.medical_service.lal.innovation.strong')
                  }}</span>
                </template>
              </i18n-t>
            </p>
          </div>
        </div>

        <Teleport to="body">
          <div
            v-if="videoPopupOpen"
            class="flex justify-center items-center fixed top-0 left-0 z-70 size-full bg-[#323232A6]"
            @click.self="videoPopupOpen = false"
          >
            <div class="w-9/10 lg:w-3/5">
              <button
                type="button"
                class="bg-white w-fit text-text-info text-lg lg:text-2xl font-bold p-2 block mb-4 ml-auto mr-0 cursor-pointer"
                @click="videoPopupOpen = false"
              >
                {{ t('pages.medical_service.lal.principle.close') }}
              </button>
              <video
                src="https://r2.cmermedical.com/lal.mp4"
                controls
                controlsList="nodownload"
                autoplay
              />
            </div>
          </div>
        </Teleport>
      </section>

      <!-- Why choose LAL -->
      <section
        class="lal-bg-deco why relative before:hidden lg:before:block lg:before:bottom-6 lg:before:-left-37 pb-12 lg:pb-35"
      >
        <div class="wrapper max-w-7xl">
          <div class="center gap-3 lg:gap-5 mb-10 lg:mb-18">
            <!-- prettier-ignore -->
            <svg class="title-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 77" fill="none"><path d="M1.368 20.648c1.247 6.633 3.904 12.827 7.946 18.498h.001a47.6 47.6 0 0 0 9.124 9.614q.426.337.858.664a44.4 44.4 0 0 1-5.071-4.313l-.03-.029-.089-.09q-.119-.121-.338-.35a54 54 0 0 1-1.189-1.285c-.969-1.08-2.219-2.558-3.353-4.152C4.735 32.906 2.45 26.4 1.368 20.648Zm0 0ZM1.336 2.326A2.195 2.195 0 0 1 3.866.531q.222.04.43.114l.138.054.087.04V.74c.856.401 1.317 1.29 1.144 2.318-.122.713-.473 1.204-1.116 1.551C2.089 5.938.558 8.556.545 11.427q-.018 4.246.658 8.289C-.04 12.332.661 6.32 1.086 3.806z" stroke="#833c75"/><path d="M37.434 61.584c12.94 0 23.43-10.463 23.43-23.369s-10.49-23.368-23.43-23.368-23.43 10.463-23.43 23.368c0 12.906 10.49 23.369 23.43 23.369Z" stroke="#833c75" stroke-width="3.8" stroke-miterlimit="10"/><path d="M37.435 57.07c10.44 0 18.904-8.441 18.904-18.855s-8.464-18.854-18.904-18.854c-10.441 0-18.905 8.441-18.905 18.854 0 10.414 8.464 18.855 18.905 18.855Z" stroke="#833c75" stroke-width="1.26" stroke-miterlimit="10"/><path d="M56.125 27.96a43 43 0 0 1 3.558 3.289v.001l.002.002.005.006.02.022.088.093q.115.123.327.357c.281.31.68.76 1.148 1.311.82.967 1.85 2.245 2.833 3.645l.418.606c9.547 14.191 8.28 29.092 7.349 34.625l-.179.978-.29 1.47a2.19 2.19 0 0 1-2.577 1.72h.001a3 3 0 0 1-.43-.124l-.138-.059-.086-.04c-.848-.425-1.285-1.326-1.082-2.346.142-.708.508-1.188 1.16-1.516v-.001c2.499-1.265 4.094-3.838 4.19-6.702v-.001c.323-10.162-2.373-19.566-8.008-27.946a47.4 47.4 0 0 0-8.309-9.39Z" stroke="#833c75"/></svg>
            <h2 class="text-2xl lg:text-3xl text-lal font-bold">
              {{ t('pages.medical_service.lal.why.title') }}
            </h2>
          </div>
          <p class="mb-5 lg:mb-20 intro-default text-center">
            {{ t('pages.medical_service.lal.why.intro') }}
          </p>

          <div class="why-swiper mb-10 lg:mb-20">
            <!-- Mobile Swiper -->
            <div class="lg:hidden relative pb-3 relative">
              <Swiper
                :modules="modules"
                :pagination="{ clickable: true, el: '.why-pagination' }"
                :slides-per-view="1"
                :space-between="16"
                class="why-swiper"
              >
                <SwiperSlide
                  v-for="(item, index) in whyItems"
                  :key="index"
                  class="why-slide flex flex-col justify-between"
                >
                  <div class="relative z-[1]">
                    <h3 class="text-xl font-bold text-lal mb-4">
                      <template v-if="item.key === 'glasses'">
                        {{ item.titleLine1 }}<br />{{ item.titleLine2 }}
                      </template>
                      <template v-else>{{ item.title }}</template>
                    </h3>
                    <p
                      class="text-text-info font-bold leading-[1.2] tracking-widest pr-[40%]"
                    >
                      {{ item.desc }}
                    </p>
                    <p
                      v-if="item.key === 'glasses' && item.source"
                      class="text-xs text-gray-500 mt-2"
                    >
                      {{ item.source }}
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div
                class="why-pagination absolute -bottom-5 left-1/2 -translate-x-1/2 space-x-3 whitespace-nowrap"
              />
            </div>

            <!-- Desktop Grid -->
            <div class="hidden lg:grid lg:grid-cols-3 lg:gap-x-9 lg:gap-y-6">
              <div
                class="why-slide flex flex-col justify-between lg:row-span-4"
              >
                <div class="z-10">
                  <h3 class="text-3xl font-bold text-lal mb-2">
                    {{ whyItems[0].title }}
                  </h3>
                  <p
                    class="text-xl text-text-info font-bold leading-[1.75] tracking-widest"
                  >
                    {{ whyItems[0].desc }}
                  </p>
                </div>
              </div>
              <div
                class="why-slide lg:min-h-[328px] lg:col-span-2 lg:row-span-2 flex flex-col lg:flex-row justify-between items-center gap-4"
              >
                <div class="flex-1 z-10">
                  <h3 class="text-3xl font-bold text-lal mb-2">
                    {{ whyItems[1].title }}
                  </h3>
                  <p
                    class="text-xl text-text-info font-bold leading-[1.75] tracking-widest"
                  >
                    {{ whyItems[1].desc }}
                  </p>
                </div>
              </div>
              <div
                class="why-slide lg:min-h-[328px] lg:col-span-2 lg:row-span-2 flex flex-col lg:flex-row justify-between items-center gap-4"
              >
                <div class="flex-1 relative z-10">
                  <h3 class="text-3xl font-bold text-lal mb-2">
                    {{ whyItems[2].title }}
                  </h3>
                  <p
                    class="text-xl text-text-info font-bold leading-[1.75] tracking-widest pr-[35%]"
                  >
                    {{ whyItems[2].desc }}
                  </p>
                  <p
                    v-if="whyItems[2].source"
                    class="text-xs text-gray-500 mt-2"
                  >
                    {{ whyItems[2].source }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex flex-col lg:flex-row items-center gap-5 lg:gap-20 mb-8 lg:mb-18">
              <iframe
                src="https://www.youtube.com/embed/rEw9ZZ_vMeU"
                title="【白內障手術：固定和可調節人工晶體】香港希瑪眼科中心 | 光調節人工晶體介紹"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                class="w-full lg:w-1/2 aspect-video"
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/xpcUExIvFjk"
                title="【Testimonial Video - Patient Becky Davies】香港希瑪眼科中心 | 光調節人工晶體真實用家分享"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                class="w-full lg:w-1/2 aspect-video"
              ></iframe>
            </div>
            <div class="w-fit mx-auto">
              <a
                :href="whatsappUrl"
                target="_blank"
                rel="noopener"
                class="lal-button !w-full"
              >
                <span class="tracking-wide">{{
                  t('pages.medical_service.lal.why.button')
                }}</span>
                <!-- prettier-ignore -->
                <svg class="ml-4" xmlns="http://www.w3.org/2000/svg" width="16" height="27" viewBox="0 0 16 27" fill="none"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="m4.366 26.171 10.916-10.955c.954-.957.954-2.446 0-3.511L4.366.868C3.412-.197 2.036-.306 1.082.65l-.423.424C-.08 1.923-.295 2.879.55 3.737c2.655 2.653 5.3 5.306 8.054 8.076.954.849.954 2.446 0 3.393C5.85 17.868 3.196 20.62.55 23.282c-.846.75-.63 1.805.108 2.653l.423.424c.954.956 2.33.74 3.284-.207z" fill="#833c75"/></g><defs><clipPath id="a"><path fill="#fff" d="M16 0v27H0V0z"/></clipPath></defs></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- FAQ -->
    <section
      id="question"
      class="scroll-mt-17 lg:scroll-mt-50 wrapper text-lal mb-25 lg:mb-50"
    >
      <div class="center mb-9 lg:mb-25 gap-5 lg:gap-3">
        <!-- prettier-ignore -->
        <svg class="w-17 lg:w-23" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93 17" fill="none"><path d="M90.125 16.822v-2.104h2.12v2.104zm-5.302 0v-2.104h2.121v2.104zm-5.3 0v-2.104h2.12v2.104zm-5.302 0v-2.104h2.12v2.104zm-5.301 0v-2.104h2.12v2.104zm-5.302 0v-2.104h2.121v2.104zm26.51-7.36V7.357h2.12V9.46zm-5.301 0V7.357h2.12V9.46zm-5.302 0V7.357h2.12V9.46zm-5.3 0V7.357h2.12V9.46zm-5.302 0V7.357h2.12V9.46zm-5.301 0V7.357h2.12V9.46zm-5.302 0V7.357h2.12V9.46zm-5.3 0V7.357h2.12V9.46zm-5.302 0V7.357h2.12V9.46zm-5.302 0V7.357h2.121V9.46zm-5.3 0V7.357h2.12V9.46zm-5.302 0V7.357h2.12V9.46zm58.317-7.359V0h2.12v2.103zm-5.301 0V0h2.12v2.103zm-5.301 0V0h2.12v2.103zm-5.302 0V0h2.12v2.103zm-5.3 0V0h2.12v2.103zm-5.302 0V0h2.12v2.103zm-5.301 0V0h2.12v2.103zm-5.302 0V0h2.12v2.103zm-5.301 0V0h2.12v2.103zm-5.301 0V0h2.12v2.103zm-5.302 0V0h2.12v2.103zm-5.3 0V0h2.12v2.103zm-5.302 0V0h2.12v2.103zm-5.301 0V0h2.12v2.103zm-5.311 0V0h2.12v2.103zm-5.302 0V0h2.121v2.103zm-5.3 0V0h2.12v2.103zM0 2.103V0h2.12v2.103z" fill="#833c75"/></svg>
        <h2 class="text-xl xs:text-2xl lg:text-4xl text-lal font-bold">
          <span>{{ t('pages.medical_service.lal.faq.title') }}</span>
        </h2>
        <!-- prettier-ignore -->
        <svg class="w-17 lg:w-23" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93 17" fill="none"><path d="M2.127 16.822v-2.104H.007v2.104zm5.301 0v-2.104h-2.12v2.104zm5.301 0v-2.104h-2.12v2.104zm5.302 0v-2.104h-2.12v2.104zm5.301 0v-2.104h-2.12v2.104zm5.301 0v-2.104h-2.12v2.104zm-26.51-7.36V7.357H.004V9.46zm5.302 0V7.357h-2.12V9.46zm5.301 0V7.357h-2.12V9.46zm5.301 0V7.357h-2.12V9.46zm5.302 0V7.357h-2.12V9.46zm5.301 0V7.357h-2.12V9.46zm5.301 0V7.357h-2.12V9.46zm5.302 0V7.357h-2.12V9.46zm5.3 0V7.357h-2.12V9.46zm5.302 0V7.357h-2.12V9.46zm5.301 0V7.357h-2.12V9.46zm5.302 0V7.357h-2.12V9.46zM2.12 2.102V0H0v2.103zm5.3 0V0H5.3v2.103zm5.302 0V0h-2.12v2.103zm5.301 0V0h-2.12v2.103zm5.302 0V0h-2.12v2.103zm5.3 0V0h-2.12v2.103zm5.302 0V0h-2.12v2.103zm5.302 0V0h-2.121v2.103zm5.3 0V0h-2.12v2.103zm5.302 0V0h-2.12v2.103zm5.301 0V0h-2.12v2.103zm5.302 0V0h-2.121v2.103zm5.3 0V0h-2.12v2.103zm5.302 0V0h-2.12v2.103zm5.31 0V0h-2.12v2.103zm5.302 0V0h-2.12v2.103zm5.301 0V0h-2.12v2.103zm5.302 0V0h-2.12v2.103z" fill="#833c75"/></svg>
      </div>
      <PageCollapse
        :answer="faqList"
        downarr="lal"
        :style="{ '--lal-color': '#833c75' }"
      />
    </section>

    <!-- Downloads -->
    <section
      id="download"
      class="download mb-35 lg:mb-50 text-base lg:text-[42px] text-white whitespace-nowrap flex flex-col gap-10 lg:gap-20 2xl:gap-40"
    >
      <a
        href="https://hkcmereye.com/template/default/pdf/%E9%98%B2%E7%B4%AB%E5%A4%96%E7%B7%9A%E7%9C%BC%E9%8F%A1%E6%89%8B%E5%86%8A.pdf"
        download="防紫外綫眼鏡手冊.pdf"
        title="下載希瑪眼科中心防紫外綫眼鏡手冊"
        class="bg-lal down-item lg:pl-[calc(50vw-576px)] w-4/5 2xl:w-[calc(50vw-576px+800px)] flex py-5 lg:py-8 pl-5 gap-5 lg:gap-[10%]"
      >
        <img
          src="https://statichk.cmermedical.com/newopd/icon/icon-pdf.webp"
          alt="PDF Icon"
          class="w-13 lg:w-[120px]"
        />
        <div class="text-center flex flex-col justify-center lg:gap-3">
          <span>{{ t('pages.medical_service.lal.down.glasses') }}</span>
          <span>{{ t('pages.medical_service.lal.down.title') }}</span>
        </div>
      </a>
      <a
        href="https://hkcmereye.com/template/default/pdf/LAL患者手册.pdf"
        download="LAL患者手冊.pdf"
        title="下載希瑪眼科LAL患者手冊"
        class="bg-lal down-item lg:pl-[calc(50vw-576px)] w-3/5 2xl:w-[calc(50vw-576px+600px)] max-w-7xl flex py-5 lg:py-8 pl-5 gap-5 lg:gap-[10%]"
      >
        <img
          src="https://statichk.cmermedical.com/newopd/icon/icon-pdf.webp"
          alt="PDF Icon"
          class="w-13 lg:w-[120px]"
        />
        <div class="text-center flex flex-col justify-center lg:gap-3">
          <span>{{ t('pages.medical_service.lal.down.patient') }}</span>
          <span>{{ t('pages.medical_service.lal.down.title') }}</span>
        </div>
      </a>
    </section>
  </div>
</template>
<style lang="scss" scoped>
html[lang='en'] {
  .why-swiper,
  .intro-default {
    text-align: left;
  }
  @media screen and (min-width: 1024px) {
    .download {
      font-size: 36px;
    }
  }
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px; // 横向滚动条高度
}

::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background-color: #00000026;
  border-radius: 10px;
  border: 2px solid transparent;
  background-clip: content-box;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #00000059;
  }
}
* {
  scrollbar-width: thin; // 细滚动条
  scrollbar-color: #00000026 transparent;
}
.wrapper {
  max-width: 1152px;
  padding-left: 12px;
  padding-right: 12px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 1280px) {
    padding-left: 0;
    padding-right: 0;
  }
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.w-fit {
  width: fit-content;
}
.-translate-x-1\/2 {
  transform: translateX(-50%);
}
.size-full {
  width: 100%;
  height: 100%;
}
.text-lal {
  color: #833c75;
}
.bg-lal {
  background-color: #833c75;
}
.why-swiper {
  text-align: justify;
}
.intro-default {
  text-align: justify;
  color: #4d4d4d;
  font-weight: bold;
}
.why {
  .title-icon {
    width: 44px;
    height: 44px;
    @media screen and (min-width: 1024px) {
      width: 84px;
      height: 84px;
    }
  }
}
.video-icon-play {
  width: 20px;
  height: 20px;
  @media screen and (min-width: 1024px) {
    width: 28px;
    height: 28px;
  }
}
@keyframes rotateImage {
  0% {
    rotate: -25deg;
  }
  100% {
    rotate: 25deg;
  }
}

@keyframes buttonGrow {
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

@keyframes lensGrow {
  0% {
    transform: translateX(-50%) rotate(-25deg);
    box-shadow: 0px 1px 3px rgba(230, 11, 221, 0.84);
  }
  50% {
    box-shadow: 0px 1px 8px #e60bdd, 0px 1px 10px #e60bdd, 0px 1px 12px #e60bdd;
  }
  100% {
    transform: translateX(-50%) rotate(45deg);
    box-shadow: 0px 1px 3px rgba(230, 11, 221, 0.84);
  }
}

.animate-rotateImage {
  animation: rotateImage 1s infinite alternate;
}

.lal-bg {
  background: linear-gradient(
    359deg,
    rgba(252, 225, 244, 0.14) -26.41%,
    rgba(248, 190, 236, 0.14) -5.78%,
    rgba(232, 197, 246, 0.13) 12.26%,
    rgba(170, 206, 215, 0.13) 30.31%,
    rgba(164, 219, 221, 0.13) 35.46%,
    rgba(178, 224, 226, 0.11) 48.35%,
    rgba(214, 238, 239, 0.06) 75.42%,
    rgba(255, 255, 255, 0) 102.49%
  );
}

.lal-bg-deco::before {
  content: '';
  position: absolute;
  background-image: url('https://statichk.cmermedical.com/newopd/services/cataract/lal-bg-deco-v1.svg');
  background-repeat: no-repeat;
  width: 140px;
  height: 140px;
  z-index: -1;
}

.lal-what-icon::before {
  content: '';
  position: absolute;
  width: 58px;
  height: 52px;
  background-image: url('https://statichk.cmermedical.com/newopd/services/cataract/lal-what-title-v1.svg');
  background-repeat: no-repeat;
  background-size: contain;
  top: -28px;
  right: -36px;
}

.lal-button {
  border-radius: 16px;
  background: linear-gradient(180deg, #d3f3f4 0%, #ffedfb 100%);
  font-size: 14px;
  font-weight: 900;
  color: var(--color-lal, #833c75);
  text-align: center;
  line-height: 1.4;
  letter-spacing: 0.1em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  width: fit-content;
  animation: buttonGrow 2s infinite alternate;
}

.lal-table {
  tr {
    border-bottom: 0.5px solid #6b6b6b;
  }

  .lens-lal {
    &::after {
      content: '';
      position: absolute;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDEiIGhlaWdodD0iMTA2IiB2aWV3Qm94PSIwIDAgMTAxIDEwNiIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTM4LjkxOCA3NS41MzJjLTUuMDE1LTIuMDk0LTEyLjYyNi02LjAxNi0xOS45MDMtMTMuMjE3IDAgMC0zLjc3Ny0zLjc2LTYuOTI4LTguMTg0Qy0yLjU4IDMzLjU1OC0uMjUzIDExLjQwMi44MTMgNS4xMDJsLjM0Mi0yLjAzQTMuNjk0IDMuNjk0IDAgMCAxIDUuNDEyLjA1M2MuMzE4LjA1Ny42MzUuMTQ3LjkzNi4yNzdsLjEzOS4wNjRjMS40NzMuNjkgMi4yMzggMi4yMjUgMS45NTMgMy45MTQtLjIwMyAxLjE4NS0uODE0IDIuMDM4LTEuODggMi42MTQtMy4xNDIgMS42OTctNS4xMTIgNS4wNS01LjEyOCA4Ljc0NC0uMDU3IDEzLjc5NCAzLjk0IDI2LjQzNCAxMS44OTMgMzcuNTlhNjQuNSA2NC41IDAgMCAwIDEyLjM3MyAxMy4wMzggNjUgNjUgMCAwIDAgOS44NzQgNi40NDZsMy4zNDYgMi44MDF6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTUxLjMwNyA4NC40MDZjMTcuNzM2IDAgMzIuMTE0LTE0LjM0IDMyLjExNC0zMi4wMjkgMC0xNy42ODgtMTQuMzc4LTMyLjAyOC0zMi4xMTQtMzIuMDI4UzE5LjE5NCAzNC42OSAxOS4xOTQgNTIuMzc3YzAgMTcuNjkgMTQuMzc4IDMyLjAyOSAzMi4xMTMgMzIuMDI5WiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMuOCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PHBhdGggZD0iTTUxLjMwNyA3OC4yMmMxNC4zMSAwIDI1LjkxLTExLjU3IDI1LjkxLTI1Ljg0MiAwLTE0LjI3My0xMS42LTI1Ljg0Mi0yNS45MS0yNS44NDJzLTI1LjkxIDExLjU3LTI1LjkxIDI1Ljg0MWMwIDE0LjI3MyAxMS42IDI1Ljg0MiAyNS45MSAyNS44NDJaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS4yNiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PHBhdGggZD0iTTYzLjE3NiAyOS4wODVjNC44NiAyLjEzNSAxMi4yMDIgNi4wOTcgMTkuMTIxIDEzLjI3NCAwIDAgMy42NDcgMy44MzIgNi43MDggOC4zNyAxNC4xMDcgMjAuOTcgMTEuMTY4IDQzLjA0NiA5LjkzIDQ5LjMxM2wtLjM5OCAyLjAxNGEzLjY5IDMuNjkgMCAwIDEtNC4zMzkgMi44OTggNC4zIDQuMyAwIDAgMS0uOTI4LS4zbC0uMTM4LS4wNjVjLTEuNDU3LS43MzEtMi4xODItMi4yODItMS44NDgtMy45NjIuMjM2LTEuMTc3Ljg3LTIuMDE0IDEuOTUzLTIuNTU4IDMuMTkyLTEuNjE1IDUuMjQzLTQuOTExIDUuMzY1LTguNTk3LjQ0LTEzLjc4Ni0zLjIxNS0yNi41MzItMTAuODYtMzcuODk4YTY0LjIgNjQuMiAwIDAgMC0xMi4wMTQtMTMuMzcyIDY0LjQgNjQuNCAwIDAgMC05LjY5NS02LjcxNCA4ODggODg4IDAgMCAxLTIuODUtMi40MTF6IiBmaWxsPSIjZmZmIi8+PC9zdmc+'),
        linear-gradient(
          90deg,
          #3b0f35 0%,
          #6d2e61 33%,
          #833c75 50%,
          #924c83 63%,
          #bc75aa 90%,
          #ce88bb 100%
        );
      background-repeat: no-repeat;
      background-size: 28px 30px, 100% 100%;
      background-position: center;
      top: -40px;
      left: 50%;
      border: 2px solid #fff;
      animation: lensGrow 2s infinite alternate;
    }

    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: calc(100% + 2px);
      bottom: 0;
      right: -1px;
      background: linear-gradient(
        90deg,
        #3b0f35 0%,
        #6d2e61 33%,
        #833c75 50%,
        #924c83 63%,
        #bc75aa 90%,
        #ce88bb 100%
      );
      z-index: -1;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }
  }

  .lens-other {
    &::after {
      content: '';
      position: absolute;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background-image: url('https://statichk.cmermedical.com/newopd/services/cataract/lal-icon-other-v1.svg');
      background-repeat: no-repeat;
      background-size: contain;
      top: -24px;
      left: 50%;
      transform: translateX(-50%);
    }

    &::before {
      content: '';
      position: absolute;
      height: 40px;
      width: calc(100% + 24px);
      bottom: 0;
      right: -0.8px;
      background: linear-gradient(90deg, #a5dbdd 0%, #b6dbdd 41%, #c5dcdd 67%);
      z-index: -2;
    }
  }

  tbody {
    td {
      padding-left: 4px;
      padding-right: 4px;
    }

    tr {
      td:first-child {
        background-color: #f4f4f5;
        border-left: 0.8px solid #6b6b6b;
        padding-left: 12px;
        padding-right: 12px;
      }

      td:nth-child(2) {
        background-color: #fef2f7;
        border-left: 2px solid #3b0f35;
        border-right: 2px solid #ce88bb;
      }

      td:nth-child(3) {
        background-color: #f3fafb;
        border-right: 0.8px solid #6b6b6b;
      }
    }
  }
}

.why-slide {
  background-color: #f4f3f3;
  padding: 16px;
  border-radius: 28px;
  position: relative;
  overflow: hidden;
  min-height: 228px;
  height: auto;

  &::before {
    content: '';
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 0;
    pointer-events: none;
  }

  &:nth-child(1)::before {
    background-image: url('https://statichk.cmermedical.com/newopd/services/cataract/lal-why-01-v1.webp');
    width: 50%;
    height: 100%;
    right: 0;
    bottom: 0;
    background-position: right;
  }

  &:nth-child(2)::before {
    background-image: url('https://statichk.cmermedical.com/newopd/services/cataract/lal-why-02-v1.webp');
    width: 50%;
    height: 100%;
    right: 0;
    bottom: 0;
    background-position: right;
    rotate: 84deg;
  }

  &:nth-child(3)::before {
    background-image: url('https://statichk.cmermedical.com/newopd/services/cataract/lal-why-03-mb-v1.webp');
    width: 50%;
    height: 120%;
    right: 0;
    bottom: -20px;
    background-position: left;
    background-size: cover;
  }
}

@media screen and (max-width: 359px) {
  .lal-button {
    font-size: 12px;
  }
}

@media screen and (max-width: 1023px) {
  .lal-table {
    th {
      height: 42px;
    }
    td {
      height: 56px;
    }
    tbody tr:last-child td {
      height: 100px;
    }
  }
}

@media screen and (min-width: 1024px) {
  .lal-what-icon::before {
    width: 116px;
    height: 104px;
    top: -52px;
    right: -72px;
  }

  .lal-bg-deco::before {
    width: 340px;
    height: 340px;
  }

  .lal-table {
    tr {
      border-bottom-width: 0.8px;
    }
    th {
      height: 116px;
    }
    td {
      height: 132px;
    }
    .lens-lal {
      border-left-width: 4px;
      border-right-width: 4px;
      &::after {
        width: 184px;
        height: 184px;
        top: -152px;
        border-width: 5px;
        background-size: 100px 105px, 100% 100%;
      }
      &::before {
        width: calc(100% + 4px);
        right: -2px;
        border-top-left-radius: 32px;
        border-top-right-radius: 32px;
      }
    }
    .lens-other {
      &::after {
        width: 148px;
        height: 148px;
        top: -100px;
      }
      &::before {
        height: 96px;
      }
    }
    tbody {
      tr:last-child td {
        height: 240px;
      }
      tr td:first-child {
        padding-left: 40px;
        padding-right: 40px;
      }
      tr td:nth-child(2) {
        border-left-width: 4px;
        border-right-width: 4px;
      }
      tr:last-child td:nth-child(2)::before {
        height: 4px;
      }
    }
  }

  .lal-button {
    padding: 24px;
    font-size: 30px;
    border-radius: 36px;
    box-shadow: 0 0 15px 4px #e60bdd4a;
  }

  .why-slide {
    padding: 36px;
    width: 100% !important;
    min-height: auto;

    &:nth-child(2),
    &:nth-child(3) {
      min-height: 300px;
    }

    &:nth-child(1)::before {
      width: 564px;
      height: 572px;
      bottom: -120px;
      left: -20px;
      right: auto;
      rotate: 0deg;
      background-position: left bottom;
      z-index: 1;
    }

    &:nth-child(2)::before {
      width: 500px;
      height: 280px;
      rotate: -49deg;
      bottom: -40px;
      right: 20px;
      background-position: right;
      z-index: 1;
    }

    &:nth-child(3)::before {
      background-image: url('https://statichk.cmermedical.com/newopd/services/cataract/lal-why-03-v1.webp');
      width: 100%;
      height: 100%;
      bottom: 0;
      right: 0;
      background-position: right;
      background-size: contain;
      z-index: 1;
    }
  }
}
</style>

<!--
 * @Author: 谭洁莹
 * @Date: 2026-04-15 15:30:43
 * @LastEditTime: 2026-04-17 21:05:19
 * @FilePath: /pages/cataract/intraocular-lens-types.vue
 * @Description: 人工晶体比较表
-->
<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
interface lensItem {
  title: string
  titleEn?: string
  icon: string
  iconPC?: string
  desc: string
  src: string
  alt?: string
  webp?: string
  avif?: string
}
const lensList: lensItem[] = [
  {
    title: '擴展景深人工晶體',
    titleEn: 'EDOF - Extended Depth of Focus',
    icon: 'https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-lens-edof-m-v2.svg',
    iconPC:
      'https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-lens-edof-pc-v1.svg',
    src: 'https://statichk.cmermedical.com/hkcmereye/cataract/lens/lens-type-01-v1.jpg',
    webp: 'https://statichk.cmermedical.com/hkcmereye/cataract/lens/lens-type-01-v1.webp',
    avif: 'https://statichk.cmermedical.com/hkcmereye/cataract/lens/lens-type-01-v1.avif',
    desc: '擴展景深人工晶體 ，主要透過光學原理將入射光線聚焦在擴展的平面上，不但延伸視覺距離，提供無縫連續視覺，而且提供更大範圍的連續視野及將光暈和眩光發生的情況改善。這項技術能幫助白內障患者減少對眼鏡的依賴，提高術後視覺品質，改善生活品質。',
  },
  {
    title: '多焦點人工晶體',
    icon: 'https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-lens-multifocal-m-v1.svg',
    iconPC:
      'https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-lens-multifocal-pc-v2.svg',
    src: 'https://statichk.cmermedical.com/hkcmereye/cataract/lens/lens-type-02-v1.jpg',
    webp: 'https://statichk.cmermedical.com/hkcmereye/cataract/lens/lens-type-02-v1.webp',
    avif: 'https://statichk.cmermedical.com/hkcmereye/cataract/lens/lens-type-02-v1.avif',
    desc: '多焦點人工晶體相較於只針對單一焦距的單焦點人工晶體，多焦點人工晶體提供多個焦點區域，讓患者享受不同距離的清楚視野，可省去了更換眼鏡或隱形眼鏡的麻煩，為生活帶來便利，進行日常活動時更輕鬆自如。',
  },
  {
    title: '單焦點人工晶體',
    icon: 'https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-lens-monofocal-m-v1.svg',
    iconPC:
      'https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-lens-monofocal-pc-v1.svg',
    src: 'https://statichk.cmermedical.com/hkcmereye/cataract/lens/lens-type-03-v1.jpg',
    webp: 'https://statichk.cmermedical.com/hkcmereye/cataract/lens/lens-type-03-v1.webp',
    avif: 'https://statichk.cmermedical.com/hkcmereye/cataract/lens/lens-type-03-v1.avif',
    desc: '單焦點人工晶體是可以提供單一焦點，比較多用於遠距離視力。於看電腦、手機或閱讀等中近距離活動時，可能需求眼鏡配合，整體比較適合生活習慣較為簡單，或預算有限的患者。',
  },
  {
    title: '散光矯正型人工晶體',
    icon: 'https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-lens-astigmatism-m-v1.svg',
    iconPC:
      'https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-lens-astigmatism-pc-v2.svg',
    src: 'https://statichk.cmermedical.com/hkcmereye/cataract/lens/lens-type-04-v1.jpg',
    webp: 'https://statichk.cmermedical.com/hkcmereye/cataract/lens/lens-type-04-v1.webp',
    avif: 'https://statichk.cmermedical.com/hkcmereye/cataract/lens/lens-type-04-v1.avif',
    desc: '散光矯正型人工晶體是一種植入在白內障手術中，用以替換病患混濁晶狀體的人工鏡片，它能夠同時矯正白內障和角膜上的散光問題，從而減少或擺脫散光眼鏡的依賴。',
  },
]
</script>
<template>
  <div>
    <section class="banner flex items-center lg:justify-center mb-4 lg:mb-9">
      <h1
        class="pl-2 pt-1/5 lg:p-0 lg:text-center text-primary text-3xl lg:text-6xl font-medium tracking-widest !leading-normal"
      >
        白內障<br />人工晶體種類
      </h1>
    </section>
    <section
      class="intro max-w-6xl px-3 mx-auto lg:rounded-[92px] flex justify-center items-center flex-col lg:flex-row lg:gap-5 lg:py-5 lg:pl-11 lg:pr-[60px] mb-8 lg:mb-20"
    >
      <div class="intro-icon rounded-full p-2 lg:p-0 z-10 bg-white">
        <svg
          class="w-12 h-12 lg:w-[100px] lg:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 101 92"
          fill="none"
        >
          <g clip-path="url(#a)">
            <path
              d="M87.18 19.362A46.45 46.45 0 0 0 71.232 5.344 45.9 45.9 0 0 0 49.737 0C37.457 0 25.913 4.784 17.23 13.473 8.546 22.16 3.765 33.713 3.765 46c0 4.862.755 9.648 2.241 14.23l.436 1.142 2.96-1.136-.392-1.025a42.8 42.8 0 0 1-2.075-13.209c0-11.44 4.453-22.195 12.536-30.283C27.555 7.63 38.304 3.174 49.737 3.174a42.74 42.74 0 0 1 20.006 4.973A43.26 43.26 0 0 1 84.716 21.37l.124.177.169.136c8.267 6.754 12.82 15.39 12.82 24.317s-4.553 17.563-12.82 24.317l-.169.136-.124.177a43.3 43.3 0 0 1-14.973 13.223 42.74 42.74 0 0 1-20.006 4.973c-9.385 0-18.294-2.982-25.762-8.623-.466-.351-1.185-.968-1.958-1.642a29 29 0 0 1 3.341-.373c.965-.053 1.938.224 2.822.805a39.43 39.43 0 0 0 21.692 6.47 39.5 39.5 0 0 0 20.02-5.437 39.9 39.9 0 0 0 14.207-14.264l2.031-4.076c3.169-2.519 5.291-8.516 5.291-15.878s-2.017-13.053-5.053-15.678l-2.237-4.213-.03-.056a39.77 39.77 0 0 0-15.799-15.158c-6.834-3.609-14.568-5.116-22.37-4.362-18.29 1.77-33.17 16.28-35.386 34.502-.674 5.548-.226 11.024 1.335 16.276.288.968.262 1.938-.077 2.806a28.4 28.4 0 0 1-9.882 12.763l-1.92 1.384 1.853 2.573 1.92-1.383a31.57 31.57 0 0 0 10.984-14.185c.596-1.533.653-3.214.162-4.864-1.436-4.832-1.849-9.876-1.226-14.988C15.732 24.47 29.42 11.127 46.24 9.5c7.18-.696 14.3.692 20.584 4.01a36.5 36.5 0 0 1 6.19 4.128c1.954 3.95 2.88 12.043 2.955 17.033-1.248 2.957-1.982 6.81-1.982 11.136s.736 8.185 1.984 11.14c-.06 4.882-.95 12.873-2.842 16.938a36.5 36.5 0 0 1-4.84 3.406 36.35 36.35 0 0 1-18.413 4.998 36.3 36.3 0 0 1-19.954-5.95c-1.455-.953-3.092-1.411-4.736-1.318a33 33 0 0 0-6.167.93l-.07-.06-.083.097C13.558 77.34 9.91 79.69 8.325 80.865l-2.497 1.897 1.92 2.524 2.364-1.8.099-.073c1.27-.942 4.022-2.727 8.017-3.958q.412.358.823.72c1.173 1.029 2.28 2.002 3.014 2.556 8.023 6.059 17.592 9.263 27.672 9.263 7.488 0 14.92-1.848 21.494-5.344a46.5 46.5 0 0 0 15.95-14.018C96.094 65.284 101 55.832 101 45.994s-4.906-19.29-13.82-26.638zm-9.343 49.82c.528-2.565.878-5.317 1.082-7.798.932.839 1.964 1.366 3.064 1.529l-.646 1.299a36.5 36.5 0 0 1-3.5 4.97M88.254 45.81c0 8.006-2.93 13.988-5.549 13.988-1.212 0-2.56-1.36-3.602-3.636-1.255-2.739-1.946-6.415-1.946-10.352 0-8.007 2.929-13.989 5.548-13.989 1.213 0 2.56 1.36 3.603 3.637 1.254 2.738 1.946 6.414 1.946 10.352m-6.906-18.373.672 1.265c-1.118.157-2.166.688-3.111 1.543-.21-2.506-.571-5.278-1.11-7.852a37 37 0 0 1 3.547 5.042z"
              fill="url(#b)"
            />
            <path
              d="M32.83 74.423a33.2 33.2 0 0 0 17.367 4.887v-3.172c-3.307 0-6.567-.545-9.66-1.59l1.805-6.867-2.267-.715-2.388 6.454a30 30 0 0 1-3.2-1.7 20.8 20.8 0 0 0-15.785-2.508 21 21 0 0 0 1.667-3.456 20.4 20.4 0 0 0 .652-12.247 30 30 0 0 1-.66-3.405l7.203-1.437-.357-2.352-7.106.742q-.019-.527-.02-1.053l-.004-.115c-.006-.075-.499-7.517 2.85-11.677l-2.47-1.99c-4 4.97-3.602 12.983-3.546 13.837.004 2.79.355 5.56 1.04 8.239 1.784 6.963-.99 14.422-6.901 18.56l-7.871 5.51 1.817 2.6 8.628-6.04c5.68-3.975 13.22-4.171 19.21-.501z"
              fill="url(#c)"
            />
          </g>
          <defs>
            <linearGradient
              id="b"
              x1="0"
              y1="46"
              x2="101"
              y2="46"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#a0dbe8" />
              <stop offset="1" stop-color="#1c75bc" />
            </linearGradient>
            <linearGradient
              id="c"
              x1="3.175"
              y1="56.59"
              x2="50.199"
              y2="56.59"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#a0dbe8" />
              <stop offset="1" stop-color="#1c75bc" />
            </linearGradient>
            <clipPath id="a"><path fill="#fff" d="M0 0h101v92H0z" /></clipPath>
          </defs>
        </svg>
      </div>
      <div
        class="intro-desc text-primary-main rounded-4xl text-base lg:text-2xl text-justify font-medium tracking-widest leading-[1.6] p-4 lg:p-0"
      >
        <p>
          當白內障讓您的世界變得模糊、色彩不再鮮明時，接受手術無疑是重見清楚視力的最佳選擇。而現今白內障手術除了移除混濁的晶體，更有不同人工晶體選擇滿足患者不同需求，包括:
          單焦點人工晶體、單焦點EDOF人工晶體、多焦點人工晶體、散光人工晶體。
        </p>
      </div>
    </section>
    <section class="mb-8 lg:mb-20 lens-table-wrap py-10 lg:pb-12 lg:pt-25">
      <div class="px-3 xl:px-0 mx-auto max-w-[1340px]">
        <h2
          class="text-primary-main text-center text-3xl lg:text-6xl font-bold tracking-widest mb-6 lg:mb-10 !leading-[1.2]"
        >
          白內障人工晶體<br />比較表
        </h2>
        <div class="lens-table pb-5 overflow-x-auto mb-3 lg:mb-20 text-center">
          <table class="w-full border-collapse">
            <thead>
              <tr>
                <th></th>
                <th class="bg-[#F6E75B] lens-table-th">
                  <div class="flex justify-center items-center gap-1 flex-col">
                    <div class="w-12 h-6 lg:w-[108px] lg:h-[60px]">
                      <img
                        src="https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-table-edof-v1.svg"
                        alt="擴展景深人工晶體圖標"
                        class="w-full"
                      />
                    </div>
                    <span class="lens-table-title special text-[#EC8836]">
                      擴展景深人工晶體
                    </span>
                  </div>
                </th>
                <th class="bg-[#55D1F0] lens-table-th">
                  <div class="flex justify-center items-center gap-1 flex-col">
                    <div class="w-12 h-6 lg:w-[108px] lg:h-[60px]">
                      <img
                        src="https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-table-multifocal-v1.svg"
                        alt="多焦點人工晶體圖標"
                        class="w-full"
                      />
                    </div>
                    <span class="lens-table-title special text-[#4886CE]">
                      多焦點人工晶體
                    </span>
                  </div>
                </th>
                <th class="bg-[#F2F7FB] lens-table-th">
                  <div
                    class="flex justify-center items-center gap-1 lg:flex-col"
                  >
                    <div class="w-12 h-6 lg:w-[108px] lg:h-[60px]">
                      <img
                        src="https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-table-monofocal-v1.svg"
                        alt="單焦點人工晶體圖標"
                        class="w-full lens-icon-normal"
                      />
                    </div>
                    <span class="lens-table-title text-primary-main">
                      單焦點<br class="block md:hidden" />人工晶體
                    </span>
                  </div>
                </th>
                <th class="bg-[#F2FFFE] lens-table-th">
                  <div
                    class="flex justify-center items-center gap-1 lg:flex-col"
                  >
                    <div class="w-12 h-6 lg:w-[108px] lg:h-[60px]">
                      <img
                        src="https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-table-astigmatism-v1.svg"
                        alt="散光型人工晶體圖標"
                        class="w-full lens-icon-normal"
                      />
                    </div>
                    <span class="lens-table-title text-primary-main">
                      散光型<br class="block md:hidden" />人工晶體
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody
              class="text-[3.0769vw] md:text-2xl text-[#66696f] font-bold lg:font-medium leading-[1.5] tracking-widest whitespace-nowrap"
            >
              <tr class="lens-table-bb">
                <td class="bg-[#fcfcfc]">
                  <div class="lens-table-subtitle">焦距</div>
                </td>
                <td class="lens-table-td">
                  一般適用於<br class="block lg:hidden" />中至遠距離
                </td>
                <td class="lens-table-td">
                  適用於<br class="block lg:hidden" />遠、中、近距離
                </td>
                <td class="lens-table-td">
                  焦距適用於<br class="block lg:hidden" />單一距離
                </td>
                <td class="lens-table-td">
                  取決於其<br class="block lg:hidden" />基礎類型
                </td>
              </tr>
              <tr class="lens-table-bb">
                <td class="bg-[#fcfcfc]">
                  <div class="lens-table-subtitle">優點</div>
                </td>
                <td class="lens-table-td">
                  焦距清楚<br />可擴展景深<br />較小眩光
                </td>
                <td class="lens-table-td">
                  提供良好遠，中，近<br />視力，可不依賴眼鏡
                </td>
                <td class="lens-table-td">
                  提供良好<br class="block lg:hidden" />視力質素
                </td>
                <td class="lens-table-td">精準矯正散光</td>
              </tr>
              <tr class="lens-table-bb">
                <td class="bg-[#fcfcfc]">
                  <div class="lens-table-subtitle">
                    術後<br class="block md:hidden" />眼鏡<br />使用性
                  </div>
                </td>
                <td class="lens-table-td">
                  大部份患者於<br class="block lg:hidden" />術後康復<br
                    class="hidden lg:block"
                  />後，<br
                    class="block lg:hidden"
                  />生活或工作時<br />減少眼倚賴性
                </td>
                <td class="lens-table-td">日常比較小<br />需要配戴眼鏡</td>
                <td class="lens-table-td">
                  近距離閱讀時可能<br class="hidden lg:block" />需<br
                    class="block lg:hidden"
                  />要配戴眼鏡<br />近距離閲讀或<br
                    class="hidden lg:block"
                  />需要<br class="block lg:hidden" />眼鏡配合
                </td>
                <td class="lens-table-td">
                  取決於其<br class="block lg:hidden" />基礎類型
                </td>
              </tr>
              <tr>
                <td class="bg-[#fcfcfc]">
                  <div class="lens-table-subtitle">適合人群</div>
                </td>
                <td class="lens-table-td relative">
                  適合患有<br
                    class="block lg:hidden"
                  />白內障且希望<br />減少眼鏡<br
                    class="block lg:hidden"
                  />依賴的患者
                  <div class="absolute-horizon -bottom-2 z-10">
                    <div class="relative">
                      <img
                        src="https://statichk.cmermedical.com/hkcmereye/cataract/lens/lens-table-more-01-v1.webp"
                        alt="了解更多擴展景深人工晶體"
                        class="absolute left-0 bottom-0 w-[52px] lg:w-[108px]"
                      />
                      <div
                        class="lens-table-more edof text-[#F99D2C] pl-[60px] lg:pl-[108px] pr-1 lg:pr-2 py-1 lg:py-2 bg-white rounded-[12px] lg:rounded-[44px]"
                      >
                        <span>按此</span>
                        <span>了解更多</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td
                  class="lens-table-td text-justify lg:min-h-[232px] relative"
                >
                  <ul class="list-disc list-inside">
                    <li>不想配戴眼鏡</li>
                    <li>經濟能力較好</li>
                    <li>無其他嚴重眼病</li>
                    <li>夜間駕駛需求低</li>
                  </ul>
                  <nuxt-link
                    to="/cataract/multifocal-lens"
                    class="absolute-horizon -bottom-2 z-10"
                  >
                    <div class="relative">
                      <img
                        src="https://statichk.cmermedical.com/hkcmereye/cataract/lens/lens-table-more-01-v1.webp"
                        alt="了解更多多焦點人工晶體"
                        class="absolute left-0 bottom-0 w-[52px] lg:w-[108px]"
                      />
                      <div
                        class="lens-table-more multifocal text-[#4886CE] pl-[60px] lg:pl-[108px] pr-1 lg:pr-2 py-1 lg:py-2 bg-white rounded-[12px] lg:rounded-[44px]"
                      >
                        <span>按此</span>
                        <span>了解更多</span>
                      </div>
                    </div>
                  </nuxt-link>
                </td>
                <td class="lens-table-td text-justify relative">
                  <ul class="list-disc list-inside">
                    <li>可配合戴眼鏡</li>
                    <li>要求更好視力質素</li>
                    <li>有經濟考慮</li>
                  </ul>
                </td>
                <td class="lens-table-td">
                  <ul class="list-disc list-inside">
                    <li>散光患者</li>
                  </ul>
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
          <div class="text-primary-main text-sm font-bold tracking-widest">
            左右滑動以觀看表格
          </div>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=85260629611&text=白內障專線查詢"
          target="_blank"
          class="button-ws rounded-full text-white font-black relative"
        >
          哪一款人工晶體適合你？
        </a>
      </div>
    </section>
    <section class="px-11 xl:px-0 max-w-6xl mx-auto mb-25 lg:mb-40">
      <h2
        class="types-title text-2xl lg:text-4xl text-center text-primary-main font-bold mt-2 lg:mt-7 mb-12 lg:mb-[140px]"
      >
        白內障人工晶體
      </h2>
      <div class="space-y-10 lg:space-y-[92px] text-primary-main">
        <div
          v-for="(lens, index) in lensList"
          :key="index"
          class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-12 xl:gap-x-[72px]"
        >
          <div
            class="order-1 flex items-center gap-3 lg:gap-8 mb-4 lg:mb-0 lg:row-start-2"
            :class="index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'"
          >
            <picture class="flex-shrink-0">
              <source :srcset="lens.iconPC" media="(min-width: 1024px)" />
              <img
                :src="lens.icon"
                class="object-contain"
                :class="
                  index === 0
                    ? 'w-[52px] h-12 lg:w-[112px] lg:h-[120px]'
                    : 'w-[60px] h-8 lg:w-[136px] lg:h-[72px]'
                "
                alt="icon"
              />
            </picture>
            <div class="flex flex-col">
              <h3
                class="text-lg lg:text-4xl tracking-wide font-bold leading-tight"
              >
                {{ lens.title }}
              </h3>
              <p
                v-if="lens.titleEn"
                class="text-sm lg:text-xl tracking-wide font-bold opacity-90"
              >
                ({{ lens.titleEn }})
              </p>
            </div>
          </div>
          <div
            class="order-2 mb-6 lg:mb-0 lg:row-start-1 lg:row-span-4"
            :class="index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'"
          >
            <picture>
              <source v-if="lens.avif" :srcset="lens.avif" type="image/avif" />
              <source v-if="lens.webp" :srcset="lens.webp" type="image/webp" />
              <img
                :src="lens.src"
                :alt="lens.alt"
                class="w-full h-auto rounded-sm shadow-sm object-cover"
              />
            </picture>
          </div>
          <div
            class="order-3 lg:row-start-3"
            :class="[
              index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1',
              index === 0 ? 'lg:mt-2' : 'lg:mt-10',
            ]"
          >
            <p
              class="text-base lg:text-2xl font-medium leading-[1.4] lg:leading-[1.8] tracking-widest"
            >
              {{ lens.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.text-primary-main {
  color: #3a5fb2;
}
.absolute-horizon {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.wrapper {
  padding-left: 12px;
  padding-right: 12px;
  margin-left: auto;
  margin-right: auto;
  max-width: 72rem;
}
.banner {
  background-image: url('https://statichk.cmermedical.com/hkcmereye/cataract/depth/depth-banner-m-v1.webp');
  background-size: cover;
  background-repeat: no-repeat;
}
.lens-table-wrap {
  background: url(https://static.cmereye.com/imgs/2024/03/cc6eb4fe0d7bb9b5.png) no-repeat top,url(https://static.cmereye.com/imgs/2024/03/b34e0a520ed9c467.png) no-repeat bottom;
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
  .lens-table-more{
    display: flex;
    flex-direction: column;
    &.edof {
      box-shadow: 0 0 12.293px rgba(255, 167, 4, 0.86);
    }
    &.multifocal {
      box-shadow: 0 0 12.293px rgba(72, 134, 206, 0.86);
    }
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
  margin: 3.8462vw auto 10.2564vw;
  padding: 5.128vw 2.564vw;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
  &:hover {
    box-shadow: 0px 4px 9px rgba(0,0,0,.25);
    font-size: 5.1282vw;
    text-shadow: 0px 4px 7px rgba(0,0,0,.4);
    transform: translateY(-5px);
  }
}
.types-title {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 52px;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMTAiIGhlaWdodD0iMTEyIiB2aWV3Qm94PSIwIDAgMjEwIDExMiIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTYuMjk2IDU0LjcyNkE4Mi4zIDgyLjMgMCAwIDAgMjQuMjMyIDgxLjU3YzE0Ljk2NiAxNC45NjcgMzQuODE3IDIzLjUyNiA1NS45OCAyNC4xNjZhNTUuNCA1NS40IDAgMCAwIDI0Ljc5IDUuODJjMzAuNzU3IDAgNTUuNzgtMjUuMDIzIDU1Ljc4LTU1Ljc4IDAtOC43NTctMi4wMy0xNy4wNS01LjY0My0yNC40MjggNi4xNTIgMy4wMTggMTEuNzQ2IDcuMDMgMTYuNzA1IDExLjk4NCA5LjUwMyA5LjUwMyAxNS40MzQgMjEuMTA2IDE3LjYzNiAzNC40ODUuMTM2LjgzMy0uMTM1IDEuNjUzLS42OTMgMi4wOTItMy4yNDggMi41MzktNS4wMzYgNi4yMDYtNS4wMzYgMTAuMzIgMCA2LjExOSA0LjA5NyAxMS4zNjUgOS45NjYgMTIuNzU1IDQuMDA3Ljk0OCA4LjEyNS4wNTMgMTEuMjk2LTIuNDUzQTEzLjA1IDEzLjA1IDAgMCAwIDIxMCA5MC4yMzN2LTIuMzFhODIuMyA4Mi4zIDAgMCAwLTYuMy0zMS42NjMgODIuMyA4Mi4zIDAgMCAwLTE3LjkzNi0yNi44NDRjLTE1LjMxLTE1LjMxMS0zNS42MTMtMjMuODg3LTU3LjI0OC0yNC4yMTFBNTUuNSA1NS41IDAgMCAwIDEwNS4wMDIgMGMtMzAuNzU3IDAtNTUuNzggMjUuMDIzLTU1Ljc4IDU1Ljc4YTU1LjQ1IDU1LjQ1IDAgMCAwIDUuMjg3IDIzLjY4NmMtNi4wMTctMy4wMDItMTEuNDk3LTYuOTUyLTE2LjM1My0xMS44MTItOS41MDMtOS41MDMtMTUuNDM0LTIxLjEwNi0xNy42MzYtMzQuNDg1LS4xMzYtLjgzMy4xMzUtMS42NTMuNjkzLTIuMDkyIDMuMjQ4LTIuNTM5IDUuMDM3LTYuMjA2IDUuMDM3LTEwLjMyIDAtNi4xMTktNC4wOTgtMTEuMzY1LTkuOTY3LTEyLjc1NWExMy44IDEzLjggMCAwIDAtMy4xNS0uMzdjLTIuOTQ5IDAtNS44MDguOTczLTguMTQ2IDIuODI3QTEzLjA1IDEzLjA1IDAgMCAwIDAgMjAuNzU4djIuMzA5QTgyLjMgODIuMyAwIDAgMCA2LjMgNTQuNzN6bTE3NC44My0yMC42NjdhNzUuOSA3NS45IDAgMCAxIDE2LjUxMiAyNC43MTUgNzUuOCA3NS44IDAgMCAxIDUuOCAyOS4xNTR2Mi4zMDlhNi41NCA2LjU0IDAgMCAxLTIuNDk4IDUuMTUxYy0xLjYxMiAxLjI3Ni0zLjY0MiAxLjcwNi01LjcxNCAxLjIxNC0yLjk0LS42OTctNC45MTMtMy4yNTYtNC45MTMtNi4zNjUgMC0yLjExMy44NDktMy44NDcgMi41MTgtNS4xNTIgMi40NTctMS45MiAzLjY1NS01LjExIDMuMTI2LTguMzIyLTIuNDI5LTE0Ljc2LTguOTc5LTI3LjU2Ni0xOS40Ny0zOC4wNjFhNjkuNzUgNjkuNzUgMCAwIDAtMjcuMjE0LTE2LjgwOCA1Ni4zIDU2LjMgMCAwIDAtOC42MDktOC45NjZjMTUuMjU0IDIuNjk0IDI5LjI5NyA5Ljk3IDQwLjQ2MiAyMS4xMzV6TTEwNS4wMDIgNi41NjJjMjcuMTQgMCA0OS4yMTggMjIuMDc5IDQ5LjIxOCA0OS4yMThzLTIyLjA3OCA0OS4yMTgtNDkuMjE4IDQ5LjIxOFM1NS43ODQgODIuOTIgNTUuNzg0IDU1Ljc4IDc3Ljg2MyA2LjU2MiAxMDUuMDAyIDYuNTYyTTYuNTU4IDIwLjc1OGMwLTIuMDE4LjkxLTMuODk3IDIuNDk4LTUuMTUyIDEuNjEyLTEuMjc1IDMuNjQyLTEuNzA2IDUuNzEzLTEuMjE0IDIuOTQxLjY5NyA0LjkxNCAzLjI1NyA0LjkxNCA2LjM3IDAgMi4xMTItLjg0OSAzLjg0My0yLjUxOCA1LjE1MS0yLjQ1NyAxLjkyLTMuNjU1IDUuMTEtMy4xMjYgOC4zMjIgMi40MjkgMTQuNzYxIDguOTc4IDI3LjU2NiAxOS40NyAzOC4wNjIgNy41OTIgNy41OTIgMTYuNTU0IDEzLjE3NCAyNi42NDMgMTYuNjE5YTU2IDU2IDAgMCAwIDguMjk4IDguOTdjLTE0LjkyNi0yLjgyMi0yOC42NjYtMTAuMDQtMzkuNTgtMjAuOTU0YTc1LjggNzUuOCAwIDAgMS0xNi41MTItMjQuNzE2IDc1LjggNzUuOCAwIDAgMS01LjgtMjkuMTUzdi0yLjMxeiIgZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMTUiLz48cGF0aCBkPSJNNjMuMzggNTUuNDQ2YzAgMjIuOTg3IDE4LjYzNSA0MS42MjIgNDEuNjIyIDQxLjYyMnM0MS42MjItMTguNjM1IDQxLjYyMi00MS42MjItMTguNjM1LTQxLjYyMS00MS42MjItNDEuNjIxUzYzLjM4IDMyLjQ1OSA2My4zOCA1NS40NDZaIiBzdHJva2U9InVybCgjYikiIHN0cm9rZS1vcGFjaXR5PSIuMTUiIHN0cm9rZS13aWR0aD0iMS45MzEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxwYXRoIGQ9Ik03My42NyA1NC41MzNjMCAxNy4yMSAxMy45NSAzMS4xNiAzMS4xNjEgMzEuMTYgMTcuMjEgMCAzMS4xNjEtMTMuOTUgMzEuMTYxLTMxLjE2UzEyMi4wNDEgMjMuMzcgMTA0LjgzMSAyMy4zNyA3My42NjkgMzcuMzIzIDczLjY2OSA1NC41MzNaIiBzdHJva2U9InVybCgjYykiIHN0cm9rZS1vcGFjaXR5PSIuMTUiIHN0cm9rZS13aWR0aD0iMS45MzEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxwYXRoIGQ9Ik04My40MDcgNTQuNTMyYzAgMTEuODMyIDkuNTkyIDIxLjQyMyAyMS40MjMgMjEuNDIzIDExLjgzMiAwIDIxLjQyNC05LjU5MSAyMS40MjQtMjEuNDIzcy05LjU5Mi0yMS40MjQtMjEuNDI0LTIxLjQyNFM4My40MDcgNDIuNyA4My40MDcgNTQuNTMyWiIgc3Ryb2tlPSJ1cmwoI2QpIiBzdHJva2Utb3BhY2l0eT0iLjE1IiBzdHJva2Utd2lkdGg9IjEuOTMxIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48cGF0aCBkPSJNOTMuNzcgNTUuNDQ2YzAgNi4yMDQgNS4wMjkgMTEuMjM0IDExLjIzMyAxMS4yMzRzMTEuMjM0LTUuMDMgMTEuMjM0LTExLjIzNC01LjAyOS0xMS4yMzQtMTEuMjM0LTExLjIzNGMtNi4yMDQgMC0xMS4yMzQgNS4wMy0xMS4yMzQgMTEuMjM0WiIgc3Ryb2tlPSJ1cmwoI2UpIiBzdHJva2Utb3BhY2l0eT0iLjE1IiBzdHJva2Utd2lkdGg9IjEuOTMxIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIyMTAiIHkxPSI1NS43OCIgeDI9Ii0uMDA0IiB5Mj0iNTUuNzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjYTBkYmU4Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMWM3NWJjIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIxMDUuMDAyIiB5MT0iMTEuNTY5IiB4Mj0iMTA1LjAwMiIgeTI9Ijk5LjMyNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNhMGRiZTgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxYzc1YmMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjEwNC44MzEiIHkxPSIyMC43MTIiIHgyPSIxMDQuODMxIiB5Mj0iODguMzUzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2EwZGJlOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFjNzViYyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJkIiB4MT0iMTA0LjgzIiB5MT0iMzEuMjgiIHgyPSIxMDQuODMiIHkyPSI3Ny43ODQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjYTBkYmU4Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMWM3NWJjIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImUiIHgxPSIxMDUuMDAzIiB5MT0iNDEuOTU2IiB4Mj0iMTA1LjAwMyIgeTI9IjY4Ljk0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2EwZGJlOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFjNzViYyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
}
.lens-table-subtitle {
  color: #3a5fb2;
  font-weight: 700;
  font-size: 3.3333vw;
  letter-spacing: 0.1em;
  text-shadow: 1px 1px 2px #fff;
  line-height: 4.1026vw;
  width: 15.128vw;
  white-space: nowrap;
  text-align: center;
}
@media screen and (min-width: 768px) {
  .button-ws {
    border: min(9px, 0.4688vw) solid #fff;
    font-size: min(52px, 2.7083vw);
    letter-spacing: min(9.85px, 0.5146vw);
    line-height: min(64px, 3.3333vw);
    margin: min(50px, 2.604vw) auto;
    padding: min(41px, 2.135vw) min(29.2px, 1.5208vw);
    &:hover {
      font-size: 48px;
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
  }
  .lens-table {
    tr {
      &:last-child {
        .lens-table-td:not(:first-child) {
          padding-bottom: 80px;
        }
      }
    }
  }
}
@media screen and (max-width: 1023px) {
  .banner {
    aspect-ratio: 103 / 59;
  }
  .intro {
    .intro-icon {
      box-shadow: -1px 0 4px 0 rgba(0, 0, 0, 0.25);
    }
    .intro-desc {
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);
      transform: translateY(-12px);
    }
  }
  .lens-table {
    .lens-icon-normal {
      rotate: 90deg;
    }
  }
}
@media screen and (min-width: 1024px) {
  .banner {
    height: 316px;
    background-image: url('https://statichk.cmermedical.com/hkcmereye/cataract/depth/depth-banner-pc-v1.webp');
  }
  .intro {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);
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
  .types-title {
    &::before {
      width: 212px;
      height: 112px;
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

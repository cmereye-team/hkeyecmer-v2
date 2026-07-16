<script lang="ts" setup>
const { t } = useLang()
const locale = useState<string>('locale.setting')
</script>
<template>
  <div>
    <div class="lens-table pb-5 overflow-x-auto mb-3 lg:mb-20 text-center">
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th class="lens-table-subtitle">
              {{ t('pages.medical_service.intraocular.table.feature.title') }}
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
                  keypath="pages.medical_service.intraocular.table.feature.edof"
                  tag="span"
                  scope="global"
                  class="lens-table-title text-outline text-[#EC8836]"
                >
                  <template #br><br /></template>
                  <template #mbr><br class="block md:hidden" /></template>
                </i18n-t>
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
                <span class="lens-table-title text-outline text-[#4886CE]">
                  {{
                    t(
                      'pages.medical_service.intraocular.table.feature.multifocal'
                    )
                  }}
                </span>
              </div>
            </th>
            <th class="bg-[#F2F7FB] lens-table-th">
              <div class="flex justify-center items-center gap-1 lg:flex-col">
                <div class="w-12 h-6 lg:w-[108px] lg:h-[60px]">
                  <img
                    src="https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-table-monofocal-v1.svg"
                    alt="單焦點人工晶體圖標"
                    class="w-full lens-icon-normal"
                  />
                </div>
                <i18n-t
                  keypath="pages.medical_service.intraocular.table.feature.monofocal"
                  tag="span"
                  scope="global"
                  class="lens-table-title text-primary"
                >
                  <template #mbr><br class="block md:hidden" /></template>
                </i18n-t>
              </div>
            </th>
            <th class="bg-[#F2FFFE] lens-table-th">
              <div class="flex justify-center items-center gap-1 lg:flex-col">
                <div class="w-12 h-6 lg:w-[108px] lg:h-[60px]">
                  <img
                    src="https://statichk.cmermedical.com/hkcmereye/cataract/lens/icon-table-astigmatism-v1.svg"
                    alt="散光型人工晶體圖標"
                    class="w-full lens-icon-normal"
                  />
                </div>
                <i18n-t
                  keypath="pages.medical_service.intraocular.table.feature.astigmatism"
                  tag="span"
                  scope="global"
                  class="lens-table-title text-primary"
                >
                  <template #mbr><br class="block md:hidden" /></template>
                </i18n-t>
              </div>
            </th>
          </tr>
        </thead>
        <tbody
          :class="[
            'text-[3.0769vw] md:text-2xl text-[#66696f] font-bold lg:font-medium leading-[1.5] tracking-widest',
            { 'whitespace-nowrap': locale !== 'en' },
          ]"
        >
          <tr class="lens-table-bb">
            <td class="bg-[#fcfcfc]">
              <div class="lens-table-subtitle">
                {{ t('pages.medical_service.intraocular.table.focal.title') }}
              </div>
            </td>
            <i18n-t
              keypath="pages.medical_service.intraocular.table.focal.edof"
              tag="td"
              scope="global"
              class="lens-table-td"
            >
              <template #mbr><br class="block md:hidden" /></template>
            </i18n-t>
            <i18n-t
              keypath="pages.medical_service.intraocular.table.focal.multifocal"
              tag="td"
              scope="global"
              class="lens-table-td"
            >
              <template #mbr><br class="block md:hidden" /></template>
            </i18n-t>
            <i18n-t
              keypath="pages.medical_service.intraocular.table.focal.monofocal"
              tag="td"
              scope="global"
              class="lens-table-td"
            >
              <template #mbr><br class="block md:hidden" /></template>
            </i18n-t>
            <i18n-t
              keypath="pages.medical_service.intraocular.table.focal.astigmatism"
              tag="td"
              scope="global"
              class="lens-table-td"
            >
              <template #mbr><br class="block md:hidden" /></template>
            </i18n-t>
          </tr>
          <tr class="lens-table-bb">
            <td class="bg-[#fcfcfc]">
              <div class="lens-table-subtitle">
                {{
                  t('pages.medical_service.intraocular.table.benefits.title')
                }}
              </div>
            </td>
            <i18n-t
              keypath="pages.medical_service.intraocular.table.benefits.edof"
              tag="td"
              scope="global"
              class="lens-table-td"
            >
              <template #br><br /></template>
            </i18n-t>
            <i18n-t
              keypath="pages.medical_service.intraocular.table.benefits.multifocal"
              tag="td"
              scope="global"
              class="lens-table-td"
            >
              <template #br><br /></template>
            </i18n-t>
            <i18n-t
              keypath="pages.medical_service.intraocular.table.benefits.monofocal"
              tag="td"
              scope="global"
              class="lens-table-td"
            >
              <template #br><br /></template>
            </i18n-t>
            <i18n-t
              keypath="pages.medical_service.intraocular.table.benefits.astigmatism"
              tag="td"
              scope="global"
              class="lens-table-td"
            >
              <template #br><br /></template>
            </i18n-t>
          </tr>
          <tr class="lens-table-bb">
            <td class="bg-[#fcfcfc]">
              <i18n-t
                keypath="pages.medical_service.intraocular.table.glasses.title"
                tag="div"
                scope="global"
                class="lens-table-subtitle"
              >
                <template #br><br /></template>
                <template #mbr><br class="block md:hidden" /></template>
              </i18n-t>
            </td>
            <i18n-t
              keypath="pages.medical_service.intraocular.table.glasses.edof"
              tag="td"
              scope="global"
              class="lens-table-td"
            >
              <template #br><br /></template>
              <template #mbr><br class="block md:hidden" /></template>
              <template #pcbr><br class="hidden md:block" /></template>
            </i18n-t>
            <i18n-t
              keypath="pages.medical_service.intraocular.table.glasses.multifocal"
              tag="td"
              scope="global"
              class="lens-table-td"
            >
              <template #br><br /></template>
            </i18n-t>
            <i18n-t
              keypath="pages.medical_service.intraocular.table.glasses.monofocal"
              tag="td"
              scope="global"
              class="lens-table-td"
            >
              <template #br><br /></template>
              <template #mbr><br class="block md:hidden" /></template>
              <template #pcbr><br class="hidden md:block" /></template>
            </i18n-t>
            <i18n-t
              keypath="pages.medical_service.intraocular.table.glasses.astigmatism"
              tag="td"
              scope="global"
              class="lens-table-td"
            >
              <template #mbr><br class="block md:hidden" /></template>
            </i18n-t>
          </tr>
          <tr>
            <td class="bg-[#fcfcfc]">
              <div class="lens-table-subtitle">
                {{
                  t('pages.medical_service.intraocular.table.suitable.title')
                }}
              </div>
            </td>
            <td class="lens-table-td relative">
              <i18n-t
                keypath="pages.medical_service.intraocular.table.suitable.edof"
                tag="span"
                scope="global"
              >
                <template #br><br /></template>
                <template #mbr><br class="block md:hidden" /></template>
                <template #pcbr><br class="hidden md:block" /></template>
              </i18n-t>
              <nuxt-link
                to="/Cataract/extended-depth-of-focus-lenses"
                class="absolute-horizon -bottom-2 z-10"
              >
                <div class="relative">
                  <img
                    src="https://statichk.cmermedical.com/hkcmereye/cataract/lens/lens-table-more-01-v1.webp"
                    alt="了解更多擴展景深人工晶體"
                    class="absolute left-0 bottom-0 w-[52px] lg:w-[108px] rounded-bl-xl lg:rounded-bl-[44px]"
                  />
                  <div
                    class="lens-table-more edof text-[#F99D2C] pl-[60px] lg:pl-[108px] pr-1 lg:pr-2 py-1 lg:py-2 bg-white rounded-xl lg:rounded-[44px]"
                  >
                    <i18n-t
                      keypath="pages.medical_service.intraocular.table.more"
                      tag="span"
                      scope="global"
                    >
                      <template #mbr><br class="block md:hidden" /></template>
                    </i18n-t>
                  </div>
                </div>
              </nuxt-link>
            </td>
            <td
              :class="[
                'lens-table-td lg:min-h-[232px] relative',
                locale === 'en' ? 'text-center' : 'text-justify',
              ]"
            >
              <i18n-t
                keypath="pages.medical_service.intraocular.table.suitable.multifocal"
                tag="span"
                scope="global"
              >
                <template #br><br /></template>
                <template #mbr><br class="block md:hidden" /></template>
                <template #pcbr><br class="hidden md:block" /></template>
              </i18n-t>
              <nuxt-link
                to="/cataract/multifocal-lens"
                class="absolute-horizon -bottom-2 z-10"
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
                      keypath="pages.medical_service.intraocular.table.more"
                      tag="span"
                      scope="global"
                    >
                      <template #mbr><br class="block md:hidden" /></template>
                    </i18n-t>
                  </div>
                </div>
              </nuxt-link>
            </td>
            <td
              :class="[
                'lens-table-td relative',
                locale === 'en' ? 'text-center' : 'text-justify',
              ]"
            >
              <i18n-t
                keypath="pages.medical_service.intraocular.table.suitable.monofocal"
                tag="span"
                scope="global"
              >
                <template #br><br /></template>
                <template #mbr><br class="block md:hidden" /></template>
                <template #pcbr><br class="hidden md:block" /></template>
              </i18n-t>
            </td>
            <td class="lens-table-td">
              {{
                t(
                  'pages.medical_service.intraocular.table.suitable.astigmatism'
                )
              }}
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
          fill="#2958a3"
        />
      </svg>
      <div class="text-primary text-sm font-bold tracking-widest">
        {{ t('pages.medical_service.intraocular.table.swiper') }}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
html[lang=en] {
  .lens-table .lens-table-subtitle {
    white-space: normal;
  }
  .lens-table .lens-table-subtitle {
    min-width: 92px;
  }
  .button-ws {
    font-size: 4.8vw;
    letter-spacing: 0.1em;
  }
  @media screen and (min-width: 768px) {
    .button-ws {
      font-size: min(52px, 2.7vw);
    }
  }
}
.absolute-horizon {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.text-outline {
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
  }
}
@media screen and (min-width: 768px) {
  .lens-table {
    tr {
      &:last-child {
        .lens-table-td:not(:first-child) {
          padding-bottom: 80px;
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
@media screen and (min-width: 1024px) {

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
</style>

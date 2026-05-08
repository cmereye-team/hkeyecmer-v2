<!--
 * @Author: 谭洁莹
 * @Date: 2026-01-13 10:44:23
 * @LastEditTime: 2026-05-08 10:00:05
 * @FilePath: /components/Csp/Banner.vue
 * @Description: 顶部
-->
<script setup lang="ts">
const { t } = useLang()
const locale = useState<string>('locale.setting')
interface navItem {
  id: string
  path: string
  label: string
}
interface Props {
  active?: string
  navList?: navItem[]
}
const defaultNavConfigs: navItem[] = [
  { id: 'intro', path: '/csp-programme', label: 'ppp.csp.nav.intro' },
  { id: 'doctor', path: '/csp-doctor', label: 'ppp.csp.nav.doctor' },
  { id: 'question', path: '/csp-question', label: 'ppp.csp.nav.question' },
]
const props = withDefaults(defineProps<Props>(), {
  active: 'intro',
  navList: () => []
})
const resolvedNavList = computed(() => {
  // 如果父组件传了 navList 且不为空，则使用父组件的
  const rawList = (props.navList && props.navList.length > 0) 
    ? props.navList 
    : defaultNavConfigs

  // 映射数组，将 label key 转换为实际的翻译文字
  return rawList.map(item => ({
    ...item,
    translatedLabel: t(item.label) 
  }))
})
const isEn = computed(() => locale.value.startsWith('en'))
const activeClass =
  "!text-[#2958A3] relative before:content-[''] before:absolute before:w-full before:h-1 before:-bottom-1 before:bg-[#2958A3]"
</script>
<template>
  <template v-if="props.active === 'doctor'">
    <section class="banner pt-[76px] lg:pt-16">
      <div
        class="flex justify-center items-center gap-6 lg:gap-[9.792vw] mb-5 lg:mb-10"
      >
        <picture class="order-1 lg:order-2">
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
            class="max-w-[100px] lg:max-w-[260px]"
          />
        </picture>
        <h1
          class="banner-title order-2 lg:order-1 bg-[#fff2d5] text-2xl lg:text-5xl text-primary font-medium leading-none p-4 lg:py-[60px] lg:px-12"
        >
          <i18n-t keypath="ppp.csp.title" tag="span" scope="global">
            <template #br><br /></template>
          </i18n-t>
        </h1>
      </div>
    </section>
  </template>
  <template v-else>
    <section class="banner pt-[76px] lg:pt-16">
      <div
        class="flex justify-center items-center gap-6 lg:gap-[9.792vw] mb-5 lg:mb-10"
      >
        <picture class="order-1 lg:order-2">
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
            class="max-w-[100px] lg:max-w-[260px]"
          />
        </picture>
        <h1
          class="banner-title order-2 lg:order-1 bg-[#fff2d5] text-2xl lg:text-5xl text-primary font-medium leading-none p-4 lg:py-[60px] lg:px-12"
        >
          <i18n-t keypath="ppp.csp.title" tag="span" scope="global">
            <template #br><br /></template>
          </i18n-t>
        </h1>
      </div>
      <div
        :class="[
          'doctor-nav bg-[#ECF3FD] text-[#4B4B4B] flex justify-center items-center lg:gap-[9.792vw] py-4 lg:px-8 font-bold z-10',
          isEn ? 'gap-3 px-3 text-sm lg:text-3xl' : 'gap-6 text-lg lg:text-3xl',
        ]"
      >
        <nuxt-link
          v-for="item in resolvedNavList"
          :key="item.id"
          :to="item.path"
          :class="props.active === item.id ? activeClass : ''"
        >
          {{ t(item.label) }}
        </nuxt-link>
      </div>
    </section>
  </template>
</template>
<style lang="scss" scoped>
.banner-title {
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
</style>

<!--
 * @Author: 谭洁莹
 * @Date: 2026-01-13 10:44:23
 * @LastEditTime: 2026-05-09 10:54:35
 * @FilePath: /components/PPP/Banner.vue
 * @Description: 顶部
-->
<script setup lang="ts">
const { t } = useLang()
const locale = useState<string>('locale.setting')

// 1. 定义项目配置表：集中管理不同计划的图片和 Alt
const PROGRAMME_MAP: Record<string, { img: string; avif: string; alt: string, title: string, name: string }> = {
  csp: {
    img: 'https://statichk.cmermedical.com/newopd/services/csp/csp-icon.jpg',
    avif: 'https://statichk.cmermedical.com/newopd/services/csp/csp-icon.avif',
    alt: t('ppp.csp.alt1'),
    title: t('ppp.csp.alt2'),
    name: 'ppp.csp.title'
  },
  glaucoma: {
    img: 'https://statichk.cmermedical.com/newopd/services/ppp/glaucomappp-logo.png',
    avif: 'https://statichk.cmermedical.com/newopd/services/ppp/glaucomappp-logo.avif',
    alt: t('ppp.glaucoma.alt1'),
    title: t('ppp.csp.alt2'),
    name: 'ppp.glaucoma.title'
  },
}

interface navItem {
  id: string
  path: string
  label: string
}

interface Props {
  active?: string        // 当前高亮 ID
  programme?: string     // 计划类型，如 'csp'
  navList?: navItem[]    // 可选：外部传入导航列表
}

const props = withDefaults(defineProps<Props>(), {
  active: 'intro',
  programme: 'csp',
  navList: () => [],
})

// 默认导航配置
const defaultNavConfigs: navItem[] = [
  { id: 'intro', path: '/csp-programme', label: 'ppp.csp.nav.intro' },
  { id: 'doctor', path: '/csp-doctor', label: 'ppp.csp.nav.doctor' },
  { id: 'question', path: '/csp-question', label: 'ppp.csp.nav.question' },
]

// 2. 这里的逻辑保留：支持外部传参，否则使用默认
const resolvedNavList = computed(() => {
  const rawList = props.navList && props.navList.length > 0
    ? props.navList
    : defaultNavConfigs
    
  return rawList.map((item) => ({
    ...item,
    translatedLabel: t(item.label),
  }))
})

// 3. 获取当前项目的图片配置
const currentConfig = computed(() => PROGRAMME_MAP[props.programme] || PROGRAMME_MAP.csp)

const isEn = computed(() => locale.value.startsWith('en'))
const activeClass =
  "!text-[#2958A3] relative before:content-[''] before:absolute before:w-full before:h-1 before:-bottom-1 before:bg-[#2958A3]"
</script>

<template>
  <section class="banner pt-[76px] lg:pt-16">
    <div class="flex justify-center items-center gap-6 lg:gap-[9.792vw] mb-5 lg:mb-10 px-2 lg:px-0">
      <picture>
        <source :srcset="currentConfig.avif" type="image/avif" />
        <img
          :src="currentConfig.img"
          :alt="currentConfig.alt"
          :title="currentConfig.alt"
          loading="lazy"
          class="max-w-[100px] lg:max-w-[260px]"
        />
      </picture>
      <h1
        class="banner-title bg-[#fff2d5] text-primary text-center font-medium leading-normal p-4 lg:py-[60px] lg:px-12" :class="isEn? 'text-xl lg:text-4xl': 'text-2xl lg:text-5xl'"
      >
        <i18n-t :keypath="`${currentConfig.name}`" tag="span" scope="global">
          <template #br><br /></template>
        </i18n-t>
      </h1>
    </div>
    <div
      v-if="props.active !== 'doctor'"
      :class="[
        'doctor-nav bg-[#ECF3FD] text-[#4B4B4B] flex justify-center items-center lg:gap-[9.792vw] py-4 lg:px-8 font-bold z-10',
        isEn ? 'gap-3 px-3 text-sm lg:text-3xl' : 'gap-6 text-lg lg:text-3xl',
      ]"
    >
      <nuxt-link
        v-for="item in resolvedNavList"
        :key="item.id"
        :to="item.path"
        :class="{ [activeClass]: props.active === item.id }"
      >
        {{ t(item.label) }}
      </nuxt-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
/* 保持原有的 text-shadow 样式不变 */
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
<!--
 * @Author: 谭洁莹
 * @Date: 2026-07-03 14:36:32
 * @LastEditTime: 2026-07-03 15:58:31
 * @FilePath: /components/Page/UserRatings.vue
 * @Description: 用户评价列表
-->
<script lang="ts" setup>
import { Autoplay } from 'swiper'

// 1. 定义数据接口
interface RatingItem {
  name: string
  date: string
  content: string
  position: string
}

interface ApiResponse {
  code: number
  data: RatingItem[]
  msg?: string
}

// 2. 异步获取 JSON 数据 (服务端渲染支持)
const { data: ratingRes } = await useFetch<ApiResponse>(
  'https://statichk.cmermedical.com/newopd/about/rating/rating-list.json'
)

const ratingList = computed(() => ratingRes.value?.data || [])

// 3. 辅助函数：日期格式化
const formatISODate = (dateStr: string): string => {
  const months: Record<string, string> = {
    一月: '01',
    二月: '02',
    三月: '03',
    四月: '04',
    五月: '05',
    六月: '06',
    七月: '07',
    八月: '08',
    九月: '09',
    十月: '10',
    十一月: '11',
    十二月: '12',
  }

  const parts = dateStr.match(/(\d+)\s+([^\s]+)\s+(\d+)/)
  if (!parts) return dateStr

  const day = parts[1].padStart(2, '0')
  const month = months[parts[2]] || '01'
  const year = parts[3]

  return `${year}-${month}-${day}`
}

// 4. 辅助函数：将雪碧图定位转换为 Tailwind 动态类
// const toBgPositionClass = (position: string): string => {
//   return `bg-position-[${position.replace(/\s+/g, '_')}]`
// }

// 5. Swiper 配置项（沿用 main.js 里的无缝匀速滚动配置）
const swiperModules = [Autoplay]
const swiperBreakpoints = {
  768: { slidesPerView: 2, spaceBetween: 20 },
  1024: { slidesPerView: 3, spaceBetween: 30 },
  1536: { slidesPerView: 4, spaceBetween: 40 },
  1920: { slidesPerView: 5.5, spaceBetween: 40 },
}
</script>

<template>
  <div class="ratings-wrapper w-full max-w-[1920px] mx-auto py-25">
    <swiper
      v-if="ratingList.length > 0"
      :modules="swiperModules"
      :loop="true"
      :loop-add-blank-slides="true"
      :slides-per-view="1.2"
      :space-between="20"
      :speed="5000"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
        waitForTransition: true,
      }"
      :breakpoints="swiperBreakpoints"
      class="ratings-swiper"
    >
      <swiper-slide
        v-for="(item, index) in ratingList"
        :key="index"
        class="rating-item"
      >
        <article
          class="bg-white rounded-md shadow-sm space-y-4 p-4 border border-gray-100 h-full flex flex-col justify-between"
        >
          <div>
            <div
              class="info flex items-center"
            >
              <div
                class="avatar bg-no-repeat bg-size-[100%] w-10 h-10 mr-3 rounded-full shrink-0"
                :style="{backgroundPosition: item.position}"
              ></div>
              <div class="flex-1 min-w-0">
                <h3 class="font-bold truncate text-gray-900">
                  {{ item.name }}
                </h3>
                <time
                  :datetime="formatISODate(item.date)"
                  class="text-sm text-gray-400 block"
                  >{{ item.date }}</time
                >
              </div>
            </div>
            <div
              role="img"
              aria-label="5星评价"
              class="text-[#ffc107] flex gap-0.5 mt-3"
            >
              <i v-for="star in 5" :key="star" class="iconfont icon-star"></i>
            </div>

            <div
              class="text-base text-gray-700 max-h-[96px] overflow-y-auto mt-3"
            >
              <p class="whitespace-pre-line">{{ item.content }}</p>
            </div>
          </div>
        </article>
      </swiper-slide>
    </swiper>

    <div v-else class="p-4 text-center text-gray-500">
      <p>无法加载评价内容</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rating-item {
  height: auto !important;
}
.info {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    right: 0;
    background-image: url('https://statichk.cmermedical.com/newopd/about/rating/google.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .avatar {
    background-image: url('https://statichk.cmermedical.com/newopd/about/rating/reviewsicon.webp');
  }
}
/* 保持匀速流滚动的关键 CSS 定制（配合 delay: 0 和 speed: 5000） */
:deep(.swiper-wrapper) {
  -webkit-transition-timing-function: linear !important;
  -o-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
}

/* 如果有自定义的隐藏滚动条需求 */
.overflow-y-auto {
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e5e7eb;
    border-radius: 2px;
  }
}
</style>

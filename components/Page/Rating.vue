<!--
 * @Author: 谭洁莹
 * @Date: 2026-03-09 16:57:42
 * @LastEditTime: 2026-03-10 17:40:27
 * @FilePath: /components/Page/Rating.vue
 * @Description: 评论列表
-->
<template>
  <div id="feedback" class="rating">
    <div v-if="hasTitle" class="rating-title pl-8 lg:pl-0">
      <AboutTitle
        :zh-title="'pages.about_us.feedback'"
        :en-ttitle="'FEEDBACK'"
        class="title"
      />
    </div>
    <div class="rating-wrapper overflow-hidden pt-5 pb-9 lg:py-18">
      <swiper
        v-if="ratingList.length"
        :modules="[Autoplay]"
        :loop="true"
        :slides-per-view="1.5"
        :space-between="20"
        :speed="5000"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
          waitForTransition: true,
        }"
        :breakpoints="{
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1536: { slidesPerView: 4, spaceBetween: 40 },
          1920: { slidesPerView: 5.5, spaceBetween: 40 },
        }"
        class="ratings-swiper w-full"
      >
        <swiper-slide
          v-for="(item, index) in ratingList"
          :key="index"
          class="h-auto!"
        >
          <article
            class="h-full bg-white rounded-md shadow-sm space-y-4 p-4 border border-gray-100 flex flex-col"
          >
            <div class="info google flex items-center relative">
              <div
                class="avatar mr-3 rounded-full bg-no-repeat bg-[size:100%]"
                :style="{
                  backgroundImage: `url(${item.avatar})`,
                  backgroundPosition: `${item.position}`,
                }"
              ></div>
              <div class="flex-1">
                <h3 class="font-bold text-gray-900 text-sm lg:text-base">
                  {{ item.name }}
                </h3>
                <time
                  :datetime="formatISODate(item.date)"
                  class="text-xs text-gray-400 block"
                >
                  {{ item.date }}
                </time>
              </div>
            </div>
            <div
              class="flex gap-0.5 text-[#ffc107]"
              role="img"
              :aria-label="`${item.stars}星评价`"
            >
              <i
                v-for="s in item.stars"
                :key="s"
                class="iconfont icon-star text-sm"
              ></i>
            </div>
            <div
              class="text-sm lg:text-base text-gray-700 leading-relaxed overflow-hidden line-clamp-4"
            >
              <p>{{ item.content }}</p>
            </div>
          </article>
        </swiper-slide>
      </swiper>

      <div v-else-if="pending" class="py-10 text-center text-gray-400">
        Loading...
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Autoplay } from 'swiper'

// 1. 数据接口定义
interface RatingItem {
  avatar: string
  position: string
  name: string
  date: string
  stars: number
  content: string
}

interface Props {
  hasTitle?: boolean
}
const props = defineProps<Props>()

// 2. 获取数据
const { data: ratingRes, pending } = await useFetch<{ data: RatingItem[] }>(
  'https://statichk.cmermedical.com/newopd/about/rating/rating-list.json'
)

const ratingList = computed(() => ratingRes.value?.data || [])

// 3. 工具函数：中文日期转 ISO 格式 (10 三月 2026 -> 2026-03-10)
const formatISODate = (dateStr: string) => {
  const monthMap: Record<string, string> = {
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
  const parts = dateStr.split(' ')
  if (parts.length === 3) {
    const day = parts[0].padStart(2, '0')
    const month = monthMap[parts[1]] || '01'
    const year = parts[2]
    return `${year}-${month}-${day}`
  }
  return dateStr
}
</script>

<style lang="scss" scoped>
.rating-title {
  width: 100%;
  max-width: 960px;
  margin: 92px auto 0;
  :deep(h1) {
    text-align: left;
  }
}
.rating-wrapper {
  :deep(.swiper-wrapper) {
    // 强制线性滑动，配合 speed 达到跑马灯效果
    transition-timing-function: linear !important;
  }
  :deep(.swiper-slide) {
    height: auto;
  }
}
.info {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  &.google {
    &::before {
      background-image: url('https://statichk.cmermedical.com/newopd/about/rating/google.svg');
    }
  }
}
.avatar {
  width: 40px;
  height: 40px;
}
</style>

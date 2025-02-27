<script lang="ts" setup>
import { Pagination, Navigation } from 'swiper'
const props = defineProps({
  eyeDisease: {
    type: [Array, Object, String],
    default: () => ({}),
  },
})
const goYoutube = (link: string) => {
  window.open(link, '_blank')
}
</script>

<template>
  <swiper
    :slides-per-view="2"
    :space-between="30"
    :centered-slides="false"
    :navigation="true"
    :modules="[Pagination, Navigation]"
    class="mySwiper"
  >
    <swiper-slide
      v-for="(item, index) in props.eyeDisease || eyeDisease"
      :key="index"
    >
      <div class="videoList" @click="goYoutube(item.link)">
        <div>
          <img :src="item.img" :alt="item.img_alt" :title="item.img_title" />
        </div>
        <div>{{ $t(item.title) }}</div>
        <div class="text">
          <p v-for="(t, i) in item.text" :key="i">{{ t }}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<style lang="scss" scoped>
.videoList {
  cursor: pointer;
  width: 440px;
  min-height: 430px;

  & > div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f2f2f2;
    padding: 13px 9px 8px;
    img {
      width: 100%;
    }
  }

  & > div:nth-child(2) {
    margin-top: 17px;
    font-family: 'NotoSansHK';
    font-style: normal;
    font-weight: 400;
    font-size: 24.608px;
    line-height: 35px;
    letter-spacing: 0.05em;
    color: #515151;
  }

  & > div:nth-child(3) {
    margin-right: 10px;
    margin-top: 9px;
    font-family: 'Noto Sans HK';
    font-style: normal;
    font-weight: 350;
    font-size: 13.1828px;
    line-height: 26px;
    /* or 200% */

    text-align: justify;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #232323;
  }
  .text {
    p {
      margin-bottom: 5px;
    }
  }
}

:deep(.swiper-button-prev) {
  left: var(--swiper-navigation-sides-offset, 0px);
  width: calc(var(--swiper-navigation-size) / 44 * 40);
  background: url('https://static.cmereye.com/imgs/2023/06/28f4bf2d89a3d3b0.png')
    no-repeat;
  background-size: auto 100%;
}

:deep(.swiper-button-next) {
  right: var(--swiper-navigation-sides-offset, 0px);
  width: calc(var(--swiper-navigation-size) / 44 * 40);
  background: url('https://static.cmereye.com/imgs/2023/06/e27f1fa3facd9c57.png')
    no-repeat;
  background-size: auto 100%;
}

:deep(.swiper-button-prev)::after {
  content: '';
}

:deep(.swiper-button-next)::after {
  content: '';
}
</style>

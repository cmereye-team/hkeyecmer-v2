<!--
 * @Author: 谭洁莹
 * @Date: 2026-08-14 17:01:19
 * @LastEditTime: 2026-08-14 17:28:14
 * @FilePath: /components/Common/Notice.vue
 * @Description: 通知组件
-->
<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 200,
  },
})
const marqueeStyle = computed(() => ({
  animationDuration: `${props.duration}s`
}))
</script>
<template>
  <div class="notice" v-if="text">
    <div class="marquee" :style="marqueeStyle">
      <span v-for="i in 9" :key="i">{{ text }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.notice {
  background-color: #e6a23c;
  color: #fff;
  padding: 8px 0;
  overflow: hidden;
  font-weight: 700;
  margin-top: 74px;
  .marquee {
    display: inline-flex;
    white-space: nowrap;
    will-change: transform;
    animation: marquee linear infinite;
    span {
      padding-right: 20vw;
    }
  }
  @media screen and (min-width: 769px) {
    margin-top: 0;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
}
@keyframes marquee {
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>

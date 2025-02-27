<script lang="ts" setup>
const toTop = () => {
  let top = document.documentElement.scrollTop || document.body.scrollTop
  // 实现滚动效果
  const timeTop = setInterval(() => {
    document.body.scrollTop = document.documentElement.scrollTop = top -= 50
    if (top <= 0) {
      clearInterval(timeTop)
    }
  }, 10)
}
const handleScroll = () => {
  const scrollHeight = document.documentElement.scrollTop
  if (scrollHeight >= 900) {
    isShowTopBtn.value = true
  } else {
    isShowTopBtn.value = false
  }
}
const isShowTopBtn = ref(false)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <!-- 返回頂部 -->
    <a v-show="isShowTopBtn" href="javascript:;" class="backTop" @click="toTop">
      <svg
        width="29"
        height="26"
        viewBox="0 0 29 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 23.875L27 23.875L2 23.875Z" fill="#2958A3" />
        <path
          d="M2 23.875L27 23.875"
          stroke="#2958A3"
          stroke-width="2.53372"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M14.5 2.00024L27 23.8752L14.5 2.00024Z" fill="#2958A3" />
        <path
          d="M14.5 2.00024L27 23.8752"
          stroke="#2958A3"
          stroke-width="2.53372"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M14.5 2L2 23.875L14.5 2Z" fill="#2958A3" />
        <path
          d="M14.5 2L2 23.875"
          stroke="#2958A3"
          stroke-width="2.53372"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span class="textTop text-2xl">TOP</span>
    </a>
  </div>
</template>
<style lang="scss" scoped>
.backTop {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 150px;
  left: 100px;
  color: #2958a3;
  writing-mode: vertical-lr;
}

.textTop {
  margin-top: 7px;
  font-family: 'Noto Sans HK';
  font-style: normal;
  font-weight: 400;
  font-size: 34.6916px;
  line-height: 50px;
  text-align: center;
  letter-spacing: 0.05em;

  color: #2958a3;
}
</style>

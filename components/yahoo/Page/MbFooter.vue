<script lang="ts" setup>
const route:any = useRoute()
const toTop = () => {
  let top = document.documentElement.scrollTop || document.body.scrollTop
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
  <div class="mbFooter">
    <div class="mbFooter-in">
      <a href='https://api.whatsapp.com/send?phone=85265767817&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2' id="ga-mb-bottom-WhatsApp" class="ga-mb-bottom-WhatsApp">
        <div class="ga-mb-bottom-WhatsApp"><img class="ga-mb-bottom-WhatsApp" src="https://static.cmereye.com/imgs/2023/07/25871528f005d41a.png" alt=""></div>
        <div class="ga-mb-bottom-WhatsApp">WhatsApp</div>
      </a>
      <a href='tel: +852 3956 2025' id="ga-mb-bottom-ljzd" class="ga-mb-bottom-ljzd">
        <div class="ga-mb-bottom-ljzd"><img class="ga-mb-bottom-ljzd" src="https://static.cmereye.com/imgs/2023/07/8bb225b21f8baa35.png" alt=""></div>
        <div class="ga-mb-bottom-ljzd">{{$t('components.content.onlinContact.callNow')}}{{'\n'}}(852) 3956 2025</div>
      </a>
      <a href='https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&lng=big5' id="ga-mb-bottom-xsdh" class="ga-mb-bottom-xsdh">
        <div class="ga-mb-bottom-xsdh"><img class="ga-mb-bottom-xsdh" src="https://static.cmereye.com/imgs/2023/07/9c9ca82dbc0545a7.png" alt=""></div>
        <div class="ga-mb-bottom-xsdh">{{$t('components.content.onlinContact.chatNow2')}}</div>
      </a>
    </div>
    <div v-if="route.name !== 'index'" id="mbFooterTop" class="mbFooter-top" @click="toTop">
      <img src="https://static.cmereye.com/imgs/2023/07/3a2e901023d9c537.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mbFooter{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 20px 0;
  background: rgba(41, 88, 163, 1);
  display: block;
  z-index: 1000;
  &-in{
    display: flex;
    &>a{
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      &:not(:last-child){
        border-right: 1px solid #fff;
      }
      &>div:nth-of-type(1){
        width: 25px;
        margin-right: 5px;
        img{
          width: 100%;
        }
      }
      &>div:nth-of-type(2){
        white-space: pre-wrap;
        color: #FFF;
        font-size: 4.01vw;
      }
      &:nth-of-type(2){
        flex: 1.5;
      }
    }
  }
  &-top{
    position: absolute;
    right: 20px;
    top: -150px;
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
}
@media screen and (min-width: 768px) {
  .mbFooter{
    display: none;
  }
}
@media screen and (max-width: 768px) {
}
</style>

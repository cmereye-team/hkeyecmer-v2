<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  str:{
    type: String,
    default: ''
  }
})
let pageLoading = ref(true)

onMounted(()=>{
  setTimeout(()=>{
    pageLoading.value = false
  },1000)
  // console.log('------------------------>onMounted')
  // window.addEventListener('load', function() {  
  //   // 页面已加载完成  
  //   console.log('------------------------>load',document.readyState)
  //   if (document.readyState === 'complete') {  
  // //   // 页面已加载完成  
  //     pageLoading.value = false
  //   }
    
  // });
})
</script>

<template>
  <div class="loading" :class="{'is-page-loading': !pageLoading}">
    <div class="loading-in">
      <span v-for="(loadinItem,loadingIndex) in ['L','O','A','D','I','N','G']" :key="loadingIndex">{{loadinItem}}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 1;
  background: #fff;
  z-index: 99999999999;
  overflow: hidden;
  background: linear-gradient(-45deg,rgba(114, 158, 230, 1),rgba(76, 209, 179, 1),rgba(76, 127, 209, 1));
  // animation: eyeShow 1s forwards;
  // animation-delay: 4s;
  &-in{
    width: 50%;
    height: 0;
    color: rgba(41, 88, 163,1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    letter-spacing: 10px;
    background: radial-gradient(#fff,transparent 70%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    // animation: eyeAnima 4s forwards ease-in;
    // overflow: hidden;
    // transition: all 3s ease;
    span{
      animation: loadingItemAnim 2s infinite;
      &:nth-of-type(1){
        animation-delay: .2s;
      }
      &:nth-of-type(2){
        animation-delay: .4s;
      }
      &:nth-of-type(3){
        animation-delay: .6s;
      }
      &:nth-of-type(4){
        animation-delay: .8s;
      }
      &:nth-of-type(5){
        animation-delay: 1s;
      }
      &:nth-of-type(6){
        animation-delay: 1.2s;
      }
      &:nth-of-type(7){
        animation-delay: 1.4s;
      }
    }
  }
  &.is-page-loading{
    animation: eyeShow 1s forwards;
    animation-delay: 2s;
    .loading-in{
      // width: 200%;
      // height: 200%;
      animation: eyeAnima 2s forwards ease-in;
    }
  }
}
@keyframes eyeAnima{
  0%{
    border-radius: 0;
    height: 0;
  }
  24%{
    border-radius: 100%;
    height: 20vh;
  }
  48%{
    border-radius: 0;
    height: 0;
  }
  72%{
    width: 50%;
    height: 50vh;
    border-radius: 100%;
    background: radial-gradient(#fff,transparent 70%);
  }
  100%{
    width: 200%;
    height: 200%;
    background: radial-gradient(#fff,transparent 200%);
  }
}
@keyframes eyeShow {
  100%{
    opacity: 0;
    display: none;
  }
}
@keyframes loadingItemAnim{
  0%{
    transform: none;
  }
  25%{
    transform: translateY(-10px);
  }
  50%{
    transform: none;
  }
  100%{
    transform: none;
  }
}

@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {}
</style>
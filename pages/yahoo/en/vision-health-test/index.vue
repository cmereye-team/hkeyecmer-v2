<script lang="ts" setup>
 import { Pagination, Mousewheel, Keyboard } from 'swiper';
definePageMeta({
  layout: 'page',
})
const route = useRoute()
let testId:any = route.query.id

var  w = [ 
{
    url: 'https://static.cmereye.com/imgs/2023/06/228956d09e6aba26.png',
    ct: "測前摘下您的眼鏡"
}, {
    url: 'https://static.cmereye.com/imgs/2023/06/cf9644e08f56693a.png',
    ct: "持手機一臂距離，平視屏幕"
}, {
    url: 'https://static.cmereye.com/imgs/2023/06/71d0ad080f99a25a.png',
    ct: null
} ], 
j =[ {
    url: 'https://static.cmereye.com/imgs/2023/06/a7ae6cd2578a2a87.png',
    ct: "測前戴上您的眼鏡"
}, {
    url: 'https://static.cmereye.com/imgs/2023/06/cf9644e08f56693a.png',
    ct: "持手機一臂距離，平視屏幕"
}, {
    url: 'https://static.cmereye.com/imgs/2023/06/71d0ad080f99a25a.png',
    ct: null
} ], 
O = [ {
    url: 'https://static.cmereye.com/imgs/2023/06/cf9644e08f56693a.png',
    ct: "持手機一臂距離，平視屏幕"
}, {
    url: 'https://static.cmereye.com/imgs/2023/06/71d0ad080f99a25a.png',
    ct: null
} ], 
N = [ {
    url: 'https://static.cmereye.com/imgs/2023/06/228956d09e6aba26.png',
    ct: "若摘下眼鏡測試的是裸眼中心視力"
}, {
    url: 'https://static.cmereye.com/imgs/2023/06/a7ae6cd2578a2a87.png',
    ct: "若戴上眼鏡測試的是配鏡后中心視力"
}, {
    url: 'https://static.cmereye.com/imgs/2023/06/cf9644e08f56693a.png',
    ct: "持手機25cm距離，平視屏幕"
}, {
    url: 'https://static.cmereye.com/imgs/2023/06/71d0ad080f99a25a.png',
    ct: null
} ];
const list = [
  {
    id: "01",
    title: "色盲色弱測試",
    ct: "請您仔細查看即將出現的圖形或數字",
    imageUrl: O
  }, 
  {
    id: "02",
    title: "散光測試",
    ct: "請您觀各方向綫條的粗細",
    imageUrl: w
  }, 
  {
    id: "03",
    title: "近視遠視(雙色敏度)測試 ",
    ct: "請您判斷紅綠背景中哪個字符更清楚",
    imageUrl: w
  },
  {
    id: "04",
    title: "黃斑病變(中央視力)測試",
    ct: "請凝視圖中央的小圓點",
    imageUrl: O
  }, 
  {
    id: "05",
    title: "眼鏡檢查",
    ct: "辨別物體清晰還是模糊",
    imageUrl: j
  }, 
  {
    id: "06",
    title: "調節功能測試",
    ct: "",
    imageUrl: []
  }, 
  {
    id: "07",
    title: "乾眼症測試",
    ct: "",
    imageUrl: []
  }, 
  {
    id: "08",
    title: "白內障測試",
    ct: "",
    imageUrl: []
  }, 
  {
    id: "09",
    title: "視神經(去飽和紅色)測試",
    ct: "請對比兩張圖中的紅色",
    imageUrl: O
  }, 
  {
    id: "10",
    title: "視覺敏感度測試",
    ct: "請判斷圖形的方向",
    imageUrl: w
  }, 
  {
    id: "11",
    title: "對比敏感度測試",
    ct: "請判斷圖形的方向",
    imageUrl: w
  }, 
  {
    id: "12",
    title: "中心視力測試",
    ct: "選擇E的方向",
    imageUrl: N
  } 
]

let testTitle = ref('')

let cnum = ref(0)
const handleNext = () => {
  if(cnum.value < _l.value){
    cnum.value++
    testSwiperRef.slideNext()
  }else if(cnum.value === _l.value){
    let url = '';
    if(testId == '12'){
      url = '/vision-health-test/center';
    }else{
      url = '/vision-health-test/pictest?id='+testId;
    }
    location.href = url;
  }
}

let testPageSwipers = ref([
  {
    url: '',
    ct: ''
  }
])
var list_item:any = list.find(item => item.id == testId)
testTitle.value = list_item.title
list_item.imageUrl.forEach((item:any) => {
  if(item.ct === null){
    item.ct = list_item.ct
  }
})
testPageSwipers.value = list_item.imageUrl || []
let _l = ref(testPageSwipers.value.length - 1)
const toEyesight = () =>{
  location.href = '/ophthalmic-information/eyesight'
}

let testSwiperRef = {
  slideNext: ()=>{}
}
const setTestSwiperRef = (swiper:any) => {
  testSwiperRef = swiper;
}

</script>

<template>
  <div class="testPage">
    <div class="testPage-header">
      <div @click="toEyesight">
        <svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3409">
          <path d="M936.462295 431.272397 527.130605 75.79629c-10.373255-9.013281-25.819039-8.928347-36.096103 0.192382L87.317695 434.286034c-8.499581 7.53972-11.449773 19.549242-7.417947 30.173207 4.03592 10.624988 14.214746 17.645892 25.577538 17.645892l56.722886 0 0 281.699824c-1.035586 9.969049-2.885723 45.906539 20.129456 72.411193 10.503215 12.097526 30.205952 26.51591 64.440661 26.51591l511.043209 0c0.968048 0.046049 2.316765 0.092098 3.994987 0.092098 12.30628 0 42.129516-2.466168 65.668629-24.232914 13.087063-12.101619 28.687366-34.756595 28.687366-73.975828l0-283.527448 63.139016-1.812275c11.271718-0.326435 21.185508-7.526417 24.979928-18.143219C948.07989 450.516694 944.969039 438.660668 936.462295 431.272397zM440.610066 620.364033c0.029676-0.116657 0.075725-0.275269 0.138146-0.466628 0.409322-1.278109 1.390673-3.294023 3.722788-5.669116 4.755304-4.830005 20.634969-16.067954 65.323774-16.067954 38.529525 0 55.135738 8.79941 61.607126 14.042831 5.735631 4.646833 6.703679 8.866948 6.854105 9.864672l0 185.949063L440.610066 808.016901 440.610066 620.364033z" fill="#272636" p-id="3410">
          </path>
        </svg>
      </div>
      <div>{{testTitle}}</div>
    </div>
    <div class="testPage-content">
      <swiper
      :cssMode="true"
      :pagination="true"
      :mousewheel="true"
      :keyboard="true"
      :modules="[Pagination, Mousewheel, Keyboard]"
      class="testPage-swiper"
      @swiper="setTestSwiperRef"
      >
        <swiper-slide
          v-for="(item, index) in testPageSwipers"
          :key="index"
          class="testPage-swiper-slide"
        >
          <div class="testPage-in">
            <div><img :src="item.url" /></div>
            <div>{{ item.ct || '' }}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div :class="['testPage-nextBtn','bg-blue-900']" @click="handleNext">
      {{cnum === _l ? '開始' : '下一步'}}
    </div>
  </div>
</template>


<style lang="scss" scoped>
.testPage{
  width: 100%;
  max-width: 1080px;
  margin: 100px auto;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-header{
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    div:first-child{
      position: absolute;
      top: 0;
      left: 0;
      font-size: 25px;
      border-bottom: 1px solid #1b407a;
      cursor: pointer;
    }
    div:last-child{
      font-size: 28px;
      color: #1b407a;
    }
  }
  &-content{
    width: 100%;
    .testPage-swiper{
      width: 100%;
      .testPage-in{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 50px;
        div{
          width: 100%;
          text-align: center;
          font-size: 28px;
          img{
            width: 50%;
            margin: 0 auto;
          }
        }
      }
    }
    :deep(.swiper-pagination-bullet){
      width: var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,20px));
      height: var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,20px));
    }
  }
  &-nextBtn{
    cursor: pointer;
    width: 40%;
    font-size: 2.5rem;
    height: 80px;
    line-height: 80px;
    border-radius: 20px;
    border: 0;
    color: white;
    max-width: 32rem;
    display: block;
    margin: 50px auto;
    text-align: center;
  }
}
@media screen and (max-width: 768px) {
  .testPage{
    &-header{
      div:first-child{
        left: 20px;
      }
      div:last-child{
        font-size: 24px;
      }
    }
    &-content{
      .testPage-swiper{
        .testPage-in{
          padding-bottom: 50px;
          div{
            font-size: 22px;
            img{
              width: calc(100% - 40px);
              margin: 0 auto;
            }
          }
        }
      }
    }
    &-nextBtn{
      width: calc(100% - 40px);
      height: 50px;
      line-height: 50px;
      font-size: 22px;
      border-radius: 10px;
    }
  }
}
</style>
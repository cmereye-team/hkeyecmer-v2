<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const route = useRoute()
let testId:any = route.query.id
var list = [ {
    id: "06",
    title: "調節功能測試",
    questions: [ "1/9. 看書、作業或用電腦時，注意力很難集中嗎？", "2/9. 看書、玩手機或用電腦時，很快就感覺眼睛疲勞嗎？", "3/9. 您的視力經常會起伏波動嗎？", "4/9. 平常會出現視力模糊或者重影嗎？", "5/9. 您的額頭出現過疼痛嗎？", "6/9. 您的眼睛出現過疼痛嗎？", "7/9. 您的眼睛裏面經常有紅血絲嗎？", "8/9. 長時間工作後，您的視力會突然下降嗎？", "9/9. 您會在沒有特殊原因的情況下，莫名流淚嗎？" ]
}, {
    id: "07",
    title: "乾眼症測試",
    questions: [ "1/9. 您的眼睛有血絲或發紅的頻率嗎？", "2/9. 您的眼睛出現過疼痛嗎？", "3/9. 您眼睛裏有灼熱或灼燒的感覺嗎？", "4/9. 您的眼睛面對風、電腦螢幕或加熱器時很敏感嗎？", "5/9. 您的眼睛非常怕光嗎？", "6/9. 您經常通過用力眨眼來舒緩眼睛嗎？", "7/9. 您感覺眼睛裏面有異物嗎？", "8/9. 您感覺眼睛非常幹澀，不濕潤嗎？", "9/9. 看書、玩手機或用電腦時，很快就感覺眼睛疲勞嗎？" ]
}, {
    id: "08",
    title: "白內障測試",
    questions: [ "1/9. 您超過50歲了嗎？", "2/9. 您看遠處是不是沒有以前更清楚了？", "3/9. 您閱讀的時候是不是需要更亮的燈光？", "4/9. 你看東西時是不是顏色比以前暗淡或者發黃？", "5/9. 您有沒有出現視力模糊？", "6/9. 您有一只眼睛或兩只眼睛都出現複視嗎？", "7/9. 您有親屬得過白內障的嗎？", "8/9. 您的玻璃體上出現一點混濁了嗎？", "9/9. 您看向燈光的時候，周圍出現光暈嗎？" ]
} 
]
var qaData:any = list.find(item => item.id == testId)
let qaTitle = ref('')
qaTitle.value = qaData.title
let _data = qaData.questions
let sumNum = ref(0)
let _loading = ref(false)
const handleBtn = (_num:number) =>{
  if(_loading.value) return
  _loading.value = true
  sumNum.value += _num
  if(acQuestions.value < qaData.questions.length - 1){
    acQuestions.value++
    _loading.value = false
  }else{
    location.href = '/vision-health-test/result?id=' + testId + '&sum=' + sumNum.value
  }
}
let acQuestions = ref(0)

const toEyesight = () =>{
  location.href = '/ophthalmic-information/eyesight'
}
</script>
<template>
  <div class="qaPage">
    <div class="qaPage-header">
      <div @click="toEyesight">
        <svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3409">
          <path d="M936.462295 431.272397 527.130605 75.79629c-10.373255-9.013281-25.819039-8.928347-36.096103 0.192382L87.317695 434.286034c-8.499581 7.53972-11.449773 19.549242-7.417947 30.173207 4.03592 10.624988 14.214746 17.645892 25.577538 17.645892l56.722886 0 0 281.699824c-1.035586 9.969049-2.885723 45.906539 20.129456 72.411193 10.503215 12.097526 30.205952 26.51591 64.440661 26.51591l511.043209 0c0.968048 0.046049 2.316765 0.092098 3.994987 0.092098 12.30628 0 42.129516-2.466168 65.668629-24.232914 13.087063-12.101619 28.687366-34.756595 28.687366-73.975828l0-283.527448 63.139016-1.812275c11.271718-0.326435 21.185508-7.526417 24.979928-18.143219C948.07989 450.516694 944.969039 438.660668 936.462295 431.272397zM440.610066 620.364033c0.029676-0.116657 0.075725-0.275269 0.138146-0.466628 0.409322-1.278109 1.390673-3.294023 3.722788-5.669116 4.755304-4.830005 20.634969-16.067954 65.323774-16.067954 38.529525 0 55.135738 8.79941 61.607126 14.042831 5.735631 4.646833 6.703679 8.866948 6.854105 9.864672l0 185.949063L440.610066 808.016901 440.610066 620.364033z" fill="#272636" p-id="3410">
          </path>
        </svg>
      </div>
      <div>{{qaTitle}}</div>
    </div>
    <div class="qaPage-content">
      <div>
        <div>
          {{qaData.questions[acQuestions]}}
        </div>
        <div v-if="['06','07'].includes(testId)">
          <div @click.stop="handleBtn(0)">從不</div>
          <div @click.stop="handleBtn(1)">很少</div>
          <div @click.stop="handleBtn(2)">偶爾</div>
          <div @click.stop="handleBtn(3)">經常</div>
        </div>
        <div v-else>
          <div @click.stop="handleBtn(0)">否</div>
          <div @click.stop="handleBtn(1)">是</div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.qaPage{
  width: 100%;
  max-width: 1080px;
  margin: 100px auto;
  min-height: 100vh;
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
    margin-top: 200px;
    width: 100%;
    &>div{
      width: 100%;
      &>div:first-child{
        color: #1b407a;
        text-align: center;
        font-size: 2rem;
      }
      &>div:last-child{
        &>div{
          height: 50px;
          line-height: 50px;
          font-size: 25px;
          color: #fff;
          background: #1b407a;
          text-align: center;
          border-radius: 10px;
          cursor: pointer;
          transition: all .3s;
          width: 50%;
          margin: 50px auto 0;
          &:active{
            background: #7f9bc9;
            color: color
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .qaPage{
    &-header{
      div:first-child{
        left: 20px;
      }
      div:last-child{
        font-size: 24px;
      }
    }
    &-content{
      margin-top: 100px;
      &>div{
        &>div:first-child{
          font-size: 20px;
          padding: 0 20px;
        }
        &>div:last-child{
          &>div{
            width: 90%;
            font-size: 22px;
          }
        }
      }
    }
  }
}
</style>
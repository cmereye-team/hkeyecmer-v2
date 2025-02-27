<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})

const route = useRoute()
let testId:any = route.query.id
let testSum:any = route.query.sum
let leftSum:any = route.query.leftSum || 0
let rightSum:any = route.query.rightSum || 0

var list = [
  [ 
    {
      id: "01",
      title: "恭喜！",
      ct: "您雙眼的調節能力正常。",
      img: 'https://static.cmereye.com/imgs/2023/06/77446435d01c015a.png'
    }, {
      id: "02",
      title: "注意！",
      ct: "您雙眼的調節能力一般。",
      img: 'https://static.cmereye.com/imgs/2023/06/d49a3d2b3054e119.png'
    }, {
      id: "03",
      title: "抱歉！",
      ct: "您雙眼的調節能力不佳。",
      img: 'https://static.cmereye.com/imgs/2023/06/7c8b60c0b2f1ed1c.png'
    }
  ], [ 
    {
      id: "01",
      title: "恭喜！",
      ct: "您有乾眼症的可能性很低。",
      img: 'https://static.cmereye.com/imgs/2023/06/77446435d01c015a.png'
    }, {
      id: "02",
      title: "注意！",
      ct: "您有乾眼症的可能性中等。",
      img: 'https://static.cmereye.com/imgs/2023/06/d49a3d2b3054e119.png'
    }, {
      id: "03",
      title: "抱歉！",
      ct: "您有乾眼症的可能性很高。",
      img: 'https://static.cmereye.com/imgs/2023/06/7c8b60c0b2f1ed1c.png'
    } 
  ], [ 
    {
      id: "01",
      title: "恭喜！",
      ct: "您患有白內障的可能性很低。",
      img: 'https://static.cmereye.com/imgs/2023/06/77446435d01c015a.png'
    }, {
      id: "02",
      title: "注意！",
      ct: "您患有白內障的可能性中等。",
      img: 'https://static.cmereye.com/imgs/2023/06/d49a3d2b3054e119.png'
    }, {
      id: "03",
      title: "抱歉！",
      ct: "您患有白內障的可能性很高。",
      img: 'https://static.cmereye.com/imgs/2023/06/7c8b60c0b2f1ed1c.png'
    } 
  ], [ 
    {
      id: "01",
      title: "恭喜！",
      ct: "測試顯示您色覺正常！",
      img: 'https://static.cmereye.com/imgs/2023/06/77446435d01c015a.png'
    }, {
      id: "03",
      title: "抱歉！",
      ct: "測試顯示您有色盲症狀！",
      img: 'https://static.cmereye.com/imgs/2023/06/7c8b60c0b2f1ed1c.png'
    } 
  ], [ 
    {
      id: "01",
      title: "抱歉！",
      ct: "您的眼鏡近視眼矯正不足，遠視眼矯正偏高。",
      img: 'https://static.cmereye.com/imgs/2023/06/7c8b60c0b2f1ed1c.png'
    }, {
      id: "02",
      title: "抱歉！",
      ct: "您的眼鏡近視眼矯正偏高，遠視眼矯正不足。",
      img: 'https://static.cmereye.com/imgs/2023/06/7c8b60c0b2f1ed1c.png'
    }, {
        id: "03",
      title: "恭喜！",
      ct: "您的眼鏡为您提供了最佳的視力狀態！",
      img: 'https://static.cmereye.com/imgs/2023/06/77446435d01c015a.png'
    }, {
      id: "04",
      title: "注意！",
      ct: "請您重新測試",
      img: 'https://static.cmereye.com/imgs/2023/06/d49a3d2b3054e119.png'
    } 
  ],
  [
    {
        id: "01",
        title: "恭喜！",
        ct: "您的左眼沒有散光症狀。",
        img: 'https://static.cmereye.com/imgs/2023/06/77446435d01c015a.png'
    }, {
        id: "02",
        title: "注意！",
        ct: "您的左眼有散光症狀。",
        img: 'https://static.cmereye.com/imgs/2023/06/d49a3d2b3054e119.png'
    }, {
        id: "03",
        title: "恭喜！",
        ct: "您的右眼沒有散光症狀。",
        img: 'https://static.cmereye.com/imgs/2023/06/77446435d01c015a.png'
    }, {
        id: "04",
        title: "注意！",
        ct: "您的右眼有散光症狀。",
        img: 'https://static.cmereye.com/imgs/2023/06/d49a3d2b3054e119.png'
  } ],
  [ {
        id: "01",
        title: "抱歉！",
        ct: "您左眼有近視症狀！",
        img: 'https://static.cmereye.com/imgs/2023/06/d49a3d2b3054e119.png'
    }, {
        id: "02",
        title: "抱歉！",
        ct: "您左眼有遠視症狀！",
        img: 'https://static.cmereye.com/imgs/2023/06/d49a3d2b3054e119.png'
    }, {
        id: "03",
        title: "恭喜！",
        ct: "您左眼沒有近視或遠視症狀！",
        img: 'https://static.cmereye.com/imgs/2023/06/77446435d01c015a.png'
    }, {
        id: "04",
        title: "抱歉！",
        ct: "您右眼有近視症狀！",
        img: 'https://static.cmereye.com/imgs/2023/06/d49a3d2b3054e119.png'
    }, {
        id: "05",
        title: "抱歉！",
        ct: "您右眼有遠視症狀！",
        img: 'https://static.cmereye.com/imgs/2023/06/d49a3d2b3054e119.png'
    }, {
        id: "06",
        title: "恭喜！",
        ct: "您右眼沒有近視或遠視症狀！",
        img: 'https://static.cmereye.com/imgs/2023/06/77446435d01c015a.png'
    }, {
        id: "07",
        title: "注意！",
        ct: "請您重新測試！",
        img: 'https://static.cmereye.com/imgs/2023/06/d49a3d2b3054e119.png'
    } 
  ],[  {
        id: "01",
        title: "恭喜！",
        ct: "您的左眼沒有黃斑病變症狀",
        img: 'https://static.cmereye.com/imgs/2023/06/77446435d01c015a.png'
    }, {
        id: "02",
        title: "抱歉！",
        ct: "您的左眼有黃斑病變症狀",
        img: 'https://static.cmereye.com/imgs/2023/06/d49a3d2b3054e119.png'
    }, {
        id: "03",
        title: "恭喜！",
        ct: "您的右眼沒有黃斑病變症狀",
        img: 'https://static.cmereye.com/imgs/2023/06/77446435d01c015a.png'
    }, {
        id: "04",
        title: "抱歉！",
        ct: "您的右眼有黃斑病變症狀",
        img: 'https://static.cmereye.com/imgs/2023/06/d49a3d2b3054e119.png'
     } 
  ], [ {
        id: "01",
        title: "恭喜！",
        ct: "您的左眼視力正常",
        img: 'https://static.cmereye.com/imgs/2023/06/77446435d01c015a.png'
    }, {
        id: "02",
        title: "抱歉！",
        ct: "您的左眼有視神經疾病的症狀",
        img: 'https://static.cmereye.com/imgs/2023/06/d49a3d2b3054e119.png'
    }, {
        id: "03",
        title: "恭喜！",
        ct: "您的右眼視力正常",
        img: 'https://static.cmereye.com/imgs/2023/06/77446435d01c015a.png'
    }, {
        id: "04",
        title: "抱歉！",
        ct: "您的右眼有視神經疾病的症狀",
        img: 'https://static.cmereye.com/imgs/2023/06/d49a3d2b3054e119.png'
    } 
  ], [ {
        id: "01",
        title: "",
        ct: "您的左眼的視覺敏感度为",
        img: 'https://static.cmereye.com/imgs/2023/06/77446435d01c015a.png'
    }, 
    {
        id: "02",
        title: "",
        ct: "您的左眼的視覺敏感度为",
        img: 'https://static.cmereye.com/imgs/2023/06/d49a3d2b3054e119.png'
    },
    {
        id: "03",
        title: "",
        ct: "您的右眼的視覺敏感度为",
        img: 'https://static.cmereye.com/imgs/2023/06/77446435d01c015a.png'
    }, 
    {
        id: "04",
        title: "",
        ct: "您的右眼的視覺敏感度为",
        img: 'https://static.cmereye.com/imgs/2023/06/d49a3d2b3054e119.png'
    }
  ], [ {
        id: "01",
        title: "",
        ct: "您的左眼的對比敏感度为",
        img: 'https://static.cmereye.com/imgs/2023/06/77446435d01c015a.png'
    },
    {
        id: "02",
        title: "",
        ct: "您的左眼的對比敏感度为",
        img: 'https://static.cmereye.com/imgs/2023/06/d49a3d2b3054e119.png'
    },
     {
        id: "03",
        title: "",
        ct: "您的右眼的對比敏感度为",
        img: 'https://static.cmereye.com/imgs/2023/06/77446435d01c015a.png'
      },
      {
        id: "04",
        title: "",
        ct: "您的右眼的對比敏感度为",
        img: 'https://static.cmereye.com/imgs/2023/06/d49a3d2b3054e119.png'
      } 
  ]
]

let resultTitle = ref('')
let datalist = ref({
  id: '',
  title: '',
  ct: '',
  img: ''
})
let rightDataList = ref({
  id: '',
  title: '',
  ct: '',
  img: ''
})

let ShowBool = ref(false)
onMounted(()=>{
if(!['01','05','06','07','08'].includes(testId)){
  ShowBool.value = true
}
if(testId == '01'){
    resultTitle.value = '色盲色弱測試';
    if(testSum > 0){datalist.value = list[3][1];}
    if(testSum == 0){datalist.value = list[3][0];}
}
if(testId == '05'){
    resultTitle.value = '眼鏡測試';
    if(testSum == 3 || testSum == 12  || testSum == 102){datalist.value = list[4][0];}
    else if(testSum == 30 || testSum == 21  || testSum == 120){datalist.value = list[4][1];}
    else if(testSum == 300 || testSum == 201  || testSum == 210){datalist.value = list[4][2];}
    else{datalist.value = list[4][3];}
}
if(testId == '06'){
    resultTitle.value = '調節功能測試';
    if(testSum <= 9 ){datalist.value = list[0][0];}
    else if(testSum >= 10 && testSum <= 18){datalist.value = list[0][1];}
    else{datalist.value = list[0][2];}
}
if(testId == '07'){
    resultTitle.value = '乾眼症測試';
    if(testSum <= 9 ){datalist.value = list[1][0];}
    else if(testSum >= 10 && testSum <= 18){datalist.value = list[1][1];}
    else{datalist.value = list[1][2];}
}
if(testId == '08'){
    resultTitle.value = '白內障測試';
    if(testSum <= 1 ){datalist.value = list[2][0];}
    else if(testSum >= 2 && testSum <= 3){datalist.value = list[2][1];}
    else{datalist.value = list[2][2];}
}
if(testId == '02'){
  resultTitle.value = '散光測試';
  datalist.value = (leftSum > 0) ? list[5][1] : list[5][0];
  rightDataList.value = (rightSum > 0) ? list[5][3] : list[5][2];
}
if(testId == '03'){
  resultTitle.value = '近視遠視';
  if(leftSum == 3 || leftSum == 12 || leftSum == 102){datalist.value = list[6][0];}
  else if(leftSum == 30 || leftSum == 21 || leftSum == 120){datalist.value = list[6][1];}
  else if(leftSum == 300 || leftSum == 201 || leftSum == 210){datalist.value = list[6][2];}
  else{datalist.value = list[6][6];}
  if(rightSum == 3 || rightSum == 12 || rightSum == 102){rightDataList.value = list[6][0];}
  else if(rightSum == 30 || rightSum == 21 || rightSum == 120){rightDataList.value = list[6][1];}
  else if(rightSum == 300 || rightSum == 201 || rightSum == 210){rightDataList.value = list[6][2];}
  else{rightDataList.value = list[6][6];}
}
if(testId == '04'){
    resultTitle.value = '黃斑病變';
    datalist.value = (leftSum > 0) ? list[7][1] : list[7][0];
    rightDataList.value = (rightSum > 0) ? list[7][3] : list[7][2];
}
if(testId == '09'){
  resultTitle.value = '視神經測試';
  datalist.value = leftSum == 0 ? list[8][0] : list[8][1];
  rightDataList.value = rightSum == 0 ? list[8][2] : list[8][3];
}
if(testId == '10'){
  resultTitle.value = '視覺敏感度測試';
  datalist.value = (leftSum >= 3) ? list[9][1] : list[9][0];
  rightDataList.value = (rightSum >=3) ? list[9][3] : list[9][2];
}
if(testId == '11'){
  resultTitle.value = '對比敏感度測試';
  datalist.value = (leftSum >= 4) ? list[10][1] : list[10][0];
  rightDataList.value = (rightSum >=4) ? list[10][3] : list[10][2];
}
if(testId == '10'){
  let l_per = 100 - leftSum * 10;
  let r_per = 100 - rightSum * 10; 
  datalist.value.ct += l_per + "%";
  rightDataList.value.ct += r_per + "%";
}
if(testId == '11'){
  let l_per:any = Number(((13 - leftSum) / 13).toFixed(4)) * 100;
  let r_per:any = Number(((13 - rightSum) / 13).toFixed(4)) * 100; 
  datalist.value.ct += l_per + "%";
  rightDataList.value.ct += r_per + "%";
}
})
const toEyesight = () =>{
  location.href = '/ophthalmic-information/eyesight'
}
</script>

<template>
  <div class="resultPage">
    <div class="resultPage-header">
      <div @click="toEyesight">
        <svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3409">
          <path d="M936.462295 431.272397 527.130605 75.79629c-10.373255-9.013281-25.819039-8.928347-36.096103 0.192382L87.317695 434.286034c-8.499581 7.53972-11.449773 19.549242-7.417947 30.173207 4.03592 10.624988 14.214746 17.645892 25.577538 17.645892l56.722886 0 0 281.699824c-1.035586 9.969049-2.885723 45.906539 20.129456 72.411193 10.503215 12.097526 30.205952 26.51591 64.440661 26.51591l511.043209 0c0.968048 0.046049 2.316765 0.092098 3.994987 0.092098 12.30628 0 42.129516-2.466168 65.668629-24.232914 13.087063-12.101619 28.687366-34.756595 28.687366-73.975828l0-283.527448 63.139016-1.812275c11.271718-0.326435 21.185508-7.526417 24.979928-18.143219C948.07989 450.516694 944.969039 438.660668 936.462295 431.272397zM440.610066 620.364033c0.029676-0.116657 0.075725-0.275269 0.138146-0.466628 0.409322-1.278109 1.390673-3.294023 3.722788-5.669116 4.755304-4.830005 20.634969-16.067954 65.323774-16.067954 38.529525 0 55.135738 8.79941 61.607126 14.042831 5.735631 4.646833 6.703679 8.866948 6.854105 9.864672l0 185.949063L440.610066 808.016901 440.610066 620.364033z" fill="#272636" p-id="3410">
          </path>
        </svg>
      </div>
      <div>{{resultTitle}}</div>
    </div>
    <div class="resultPage-content">
      <div>
        <div>{{datalist.title}}</div>
        <div><img :src="datalist.img" alt=""></div>
        <div>{{datalist.ct}}</div>
      </div>
      <div v-if="ShowBool">
        <div>{{rightDataList.title}}</div>
        <div><img :src="rightDataList.img" alt=""></div>
        <div>{{rightDataList.ct}}</div>
      </div>
    </div>
    <div class="resultPage-btn">
      <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.hkcmereye.com%2F/result01&amp;src=sdkpreparse" target="_block"><div>分享</div></a>
      <a href="tel: +852 3956 2025"><div>立即預約眼睛檢查</div></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resultPage{
  width: 100%;
  max-width: 1080px;
  margin: 100px auto;
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
    display: flex;
    justify-content: center;
    &>div{
      flex: 1;
      max-width: 50%;
      text-align: center;
      font-size: 25px;
      margin-top: 100px;
      &>div{
        width: 100%;
        img{
          width: 50%;
          margin: 0 auto;
        }
      }
    }
  }
  &-btn{
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
    div{
      text-align: center;
      width: 350px;
      height: 50px;
      line-height: 50px;
      font-size: 25px;
      background: #1b407a;
      color: #fff;
      border-radius: 10px;
    }
  }
}
@media screen and (max-width: 768px) {
  .resultPage{
    &-header{
      div:first-child{
        left: 20px;
      }
      div:last-child{
        font-size: 24px;
      }
    }
    &-content{
      flex-direction: column;
      align-items: center;
      &>div{
        margin-top: 50px;
        width: calc(100% - 40px);
        max-width: 100%;
        font-size: 22px;
        &>div{
          margin-top: 20px;
        }
      }
    }
    &-btn{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      div{
        margin-bottom: 20px;
        font-size: 22px;
      }
    }
  }
}
</style>
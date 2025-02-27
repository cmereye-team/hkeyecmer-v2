<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const route:any = useRoute()
let pageId = ref(0)
let pageDetail = ref({
  sortname: '',
  title: '',
  content: '',
  visits: '',
  update_time: '',
  author: '',
  ext_paperRecoFrom: '',
  source: ''
})
pageId.value = route.query.id
let contentLoading = ref(false)
const getDetail = async () => {
  contentLoading.value = true
  const {data}:any = await useFetch(`https://hkcmereye.com/api.php/content/${pageId.value}`)
  let res = JSON.parse(data.value)
  pageDetail.value = {
    sortname: res.data.sortname,
    title: res.data.title,
    content: res.data.content,
    visits: res.data.visits,
    update_time: res.data.update_time,
    author: res.data.ext_paperRecoDoctor,
    ext_paperRecoFrom: res.data.ext_paperRecoFrom,
    source: res.data.source
  }
  setTimeout(()=>{
    contentLoading.value = false
  },2000)
}

onMounted(()=>{
  setTimeout(()=>{
    getDetail()
  },0)
})

const toWhatsapp = () =>{
  window.open('https://api.whatsapp.com/send?phone=85265767817&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2')
}

const goLink = (_data:any) => {
  if(_data === '-1'){
    history.go(-1)
  }else{
    location.href = _data
  }
}
</script>

<template>
  <div class="healthInfoDetail">
    <div class="healthInfoDetail-title">
      <div>
        {{pageDetail.sortname}}
      </div>
      <div>
        {{pageDetail.title}}
      </div>
    </div>
    <div class="healthInfoDetail-content" v-loading="contentLoading" v-html="pageDetail.content"></div>
    <div class="healthInfoDetail-btn healthInfoDetailBtnGA4">
      <div class="healthInfoDetail-btn-anim healthInfoDetailBtnGA4" @click="toWhatsapp">
        <div class="healthInfoDetail-btn-line healthInfoDetailBtnGA4"></div>
        <div class="healthInfoDetail-btn-line2 healthInfoDetailBtnGA4"></div>
        <div class="healthInfoDetail-btn-in healthInfoDetailBtnGA4">
          <span class="healthInfoDetailBtnGA4">立即WhatsApp預約眼科醫生</span>
          <svg class="healthInfoDetailBtnGA4" xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
            <path d="M20.5423 39.9999C16.9142 40.0021 13.351 39.0605 10.2196 37.272L0.690929 39.8211L3.74498 31.533C1.1798 27.9818 -0.131163 23.7118 0.0103659 19.3687C0.151895 15.0256 1.73821 10.8455 4.52942 7.46066C7.32063 4.07578 11.165 1.67012 15.4811 0.607451C19.7972 -0.455221 24.3505 -0.117116 28.4523 1.57064C30.8911 2.57546 33.1098 4.02778 34.9879 5.84884C36.8939 7.70803 38.4059 9.91564 39.4375 12.3455C40.469 14.7754 41 17.3799 41 20.0101C41 22.6404 40.469 25.2449 39.4375 27.6748C38.4059 30.1047 36.8939 32.3123 34.9879 34.1715C33.1143 35.9909 30.901 37.4432 28.4676 38.4497C25.9588 39.4792 23.2637 40.0063 20.5423 39.9999ZM10.5555 34.7081L10.9984 34.9764C14.8338 37.3031 19.4213 38.147 23.8613 37.3428C28.3012 36.5386 32.2732 34.1442 34.9983 30.6292C37.7234 27.1142 39.005 22.7322 38.5917 18.3425C38.1785 13.9528 36.1003 9.87218 32.7646 6.90085C29.429 3.92952 25.0764 2.28186 20.5607 2.28099C16.045 2.28013 11.6919 3.92613 8.35505 6.89618C5.01817 9.86623 2.93827 13.9461 2.52329 18.3356C2.10831 22.7251 3.38817 27.1076 6.11186 30.6237L6.5089 31.1454L4.61535 36.3627L10.5555 34.7081Z" fill="white"/>
            <path d="M12.7952 9.08986C13.0119 9.01224 13.2417 8.98443 13.4693 9.00828C13.6969 9.03214 13.9171 9.10712 14.1152 9.22821C14.3437 9.37871 14.5492 9.56535 14.7245 9.78164L17.6256 12.8562C17.9334 13.1773 18.1104 13.6132 18.1188 14.0707C18.1185 14.4414 18.0178 14.8042 17.8287 15.1161C17.7078 15.2975 17.5666 15.4627 17.408 15.608L15.9574 17.1453C16.088 17.4528 16.2621 17.7295 16.4216 18.0369C16.5721 18.3326 16.7367 18.6199 16.9148 18.8978C17.5204 19.9377 18.2466 20.8932 19.0762 21.7418C19.846 22.5544 20.7085 23.2619 21.6437 23.8479C22.1659 24.2169 22.7317 24.5397 23.2974 24.8625L24.8785 23.1715C25.077 22.967 25.3144 22.8098 25.5748 22.7103C25.7741 22.6194 25.9888 22.5725 26.2058 22.5725C26.4228 22.5725 26.6375 22.6194 26.8368 22.7103C27.1269 22.8824 27.387 23.106 27.6056 23.3714L30.5068 26.446C30.8083 26.7715 30.9842 27.2046 31 27.6604C30.9802 27.9264 30.9163 28.1866 30.8114 28.4291C30.5552 28.8261 30.253 29.1877 29.9121 29.5052C29.7795 29.6589 29.6283 29.7933 29.4624 29.9049C28.9913 30.2734 28.4672 30.5589 27.9103 30.7504C27.6499 30.8437 27.3832 30.9156 27.1124 30.9656C26.8142 31.0115 26.5113 31.0115 26.2131 30.9656C25.8335 30.9551 25.4553 30.914 25.0816 30.8426C24.748 30.8426 24.4289 30.6889 24.0952 30.612C23.7616 30.5352 23.4424 30.4276 23.1233 30.2892C22.7235 30.148 22.3313 29.9837 21.9483 29.7973L20.9039 29.2592C20.4252 28.9671 19.932 28.675 19.4533 28.3368C18.8958 27.9584 18.3583 27.5478 17.8432 27.107C17.2518 26.6274 16.6852 26.1142 16.146 25.5697C15.6383 25.0778 15.1741 24.5397 14.6954 24.0324C13.2854 22.5045 12.0754 20.7827 11.098 18.9132C10.6277 17.947 10.2999 16.9101 10.1261 15.8386C9.99542 15.0936 9.96611 14.3326 10.0391 13.5788C10.108 12.5272 10.4605 11.5187 11.0545 10.6733C11.0946 10.5813 11.1432 10.4938 11.1995 10.4119L11.9394 9.62791C12.1781 9.37612 12.4722 9.19122 12.7952 9.08986Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="healthInfoDetail-bottom">
      <div class="healthInfoDetail-bottom-info">
        <span class="ext_paperRecoFrom" v-if="pageDetail.ext_paperRecoFrom">新聞來源︰{{pageDetail.ext_paperRecoFrom}}</span>
        <span class="Bowtie" v-if="pageDetail.ext_paperRecoFrom === 'Bowtie'" @click="goLink('https://www.bowtie.com.hk')">合作醫療夥伴︰Bowtie</span>
        <span class="author" v-if="pageDetail.author">作者︰{{pageDetail.author}}</span>
        <span class="source" v-if="pageDetail.source" @click="goLink(pageDetail.source)">資料來源︰原文鏈接</span>
        <span v-if="pageDetail.visits">瀏覽次數︰{{pageDetail.visits}}</span>
        <span v-if="pageDetail.update_time">更新時間︰{{pageDetail.update_time}}</span>
      </div>
      <div class="healthInfoDetail-bottom-btn">
        <span @click="goLink('-1')">回到所有文章目錄</span>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.healthInfoDetail{
  width: 100%;
  max-width: 1080px;
  margin: 150px auto 0;
  .goBack{
    text-align: right;
    a{
      border-bottom: 1px solid #1b407a;
      font-size: 25px;
    }
  }
  &-title{
    border-bottom: 1px solid #1b407a;
    &>div:first-child{
      color: #1b407a;
      font-size: 30px;
      margin: 20px 0;
      border-left: 10px solid #1b407a;
      padding-left: 20px;
      height: 50px;
      line-height: 50px;
    }
    &>div:last-child{
      font-size: 25px;
      color: #1b407a;
    }
  }
  &-content{
    margin-top: 50px;
    max-width: 700px;
    min-height: 50vh;
  }
  &-bottom{
    border-top: 1px dashed #1b407a;
    padding-top: 30px;
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
    &-info{
      &>span{
        display: block;
        font-size: 18px;
        color: #6c757d;
        margin-bottom: 5px;
        &.ext_paperRecoFrom{
          color: #4d4d4d;
        }
        &.Bowtie{
          cursor: pointer;
          color: #4d4d4d;
          &:hover{
            color: #1b407a;
          }
        }
        &.author{
          color: #4d4d4d;
        }
        &.source{
          cursor: pointer;
          &:hover{
            color: #1b407a;
          }
        }
      }
    }
    &-btn{
      span{
        display: inline-block;
        border-radius: 5px;
        padding: 5px 10px;
        background: #17a2b8;
        color: #fff;
        text-align: center;
        cursor: pointer;
        &:nth-of-type(2){
          margin-left: 50px;
        }
        &:nth-of-type(3){
          margin-left: 10px;
        }
      }
    }
  }
  &-btn{
    margin-top: 130px;
    max-width: 1080px;
    display: flex;
    justify-content: center;
    &-anim{
      overflow: hidden;
      padding: 4px;
      border-radius: 22px;
      position: relative;
      background: linear-gradient(180deg, #CAF5A2 0%, #00DD8B 50%, #00A07E 100%);
      cursor: pointer;
      transition: all .3s;
      &:hover{
        box-shadow: 0px 4px 10px rgba($color: #00DD8B, $alpha: .7);
        .healthInfoDetail-btn-in{
          span{
            text-shadow: 0px 0px 3px rgba($color: #fff, $alpha: .5);
          }
        }
      }
    }
    &-line{
      position: absolute;
      z-index: 1;
      width: 50%;
      height: 80%;
      top: 10%;
      left: 0;
      background: linear-gradient(180deg, #90FF92 60%,transparent);
      animation: btnAnim 3s linear infinite;
      transform-origin: 100% 50%;
    }
    &-line2{
      position: absolute;
      z-index: 1;
      width: 50%;
      height: 80%;
      bottom: 10%;
      right: 0;
      background: linear-gradient(0, #90FF92 60%,transparent);
      animation: btnAnim2 3s linear infinite;
      transform-origin: 0 50%;
    }
    &-in{
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      background: linear-gradient(180deg, #CAF5A2 0%, #00DD8B 50%, #00A07E 100%);
      border-radius: 22px;
      padding: 0 20px;
      span{
        color: #fff;
        height: 91px;
        font-size: 31.59px;
        font-style: normal;
        font-weight: 700;
        line-height: 91px;
        display: inline-block;
        padding-right: 13px;
        transition: all .3s;
      }
    }
  }
}
@keyframes btnAnim {
  0%{
    left: -25%;
  }
  50%{
    left: 25%;
  }
  100%{
    transform: rotate(360deg);
    left: -25%;
  }
}
@keyframes btnAnim2 {
  0%{
    right: -25%;
  }
  50%{
    right: 25%;
  }
  100%{
    transform: rotate(360deg);
    right: -25%;
  }
}
@media screen and (max-width: 768px) {
  .healthInfoDetail{
    width: auto;
    margin: 100px 20px 150px;
    .goBack{
      a{
        font-size: 20px;
      }
    }
    &-title{
      &>div:first-child{
        font-size: 24px;
        margin: 20px 0;
        border-left: 6px solid #1b407a;
        padding-left: 10px;
        height: 35px;
        line-height: 35px;
      }
      &>div:last-child{
        font-size: 22px;
      }
    }
    &-content{
      margin-top: 30px;
    }
    &-bottom{
      flex-direction: column;
      margin-bottom: 100px;
      &-btn{
        margin-top: 30px;
      }
    }
    &-btn{
      padding: 0 20px;
      margin-top: 50px;
      &-anim{
        animation: btnMbAnima 5s linear infinite;
      }
      &-in{
        span{
          height: 61px;
          line-height: 61px;
          font-size: 22px;
        }
      }
    }
  }
}
@keyframes btnMbAnima {
  0%{
    box-shadow: none;
  }
  50%{
    box-shadow: 0px 3px 10px 3px rgba(0, 221, 139, 0.7);
  }
  100%{
    box-shadow: none;
  }
}
</style>
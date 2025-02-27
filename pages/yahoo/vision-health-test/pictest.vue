<script lang="ts" setup>
import pictestList from '@/assets/js/pictest'
definePageMeta({
  layout: 'page',
})
const route = useRoute()
let testId: any = route.query.id
const list = [
  {
    id: '01',
    title: '色盲色弱測試',
    questions: [
      {
        type: 'image',
        question: '請問您看到了什麽？',
        image: 'https://static.cmereye.com/imgs/2023/06/afe062ee9f2bcb30.jpg',
      },
      {
        type: 'question',
        question: '請問您看到了什麽？',
        options: ['75', '73', '14', '26'],
        answer: '73',
        score: [1, 0, 1, 1],
      },
      {
        type: 'image',
        question: '請問您看到了什麽？',
        image: 'https://static.cmereye.com/imgs/2023/06/bb324faaa50d58e2.jpg',
      },
      {
        type: 'question',
        question: '請問您看到了什麽？',
        options: ['12', '17', '18', '21'],
        answer: '12',
        score: [0, 1, 1, 1],
      },
      {
        type: 'image',
        question: '請問您看到了什麽？',
        image: 'https://static.cmereye.com/imgs/2023/06/01e3e79295cd13a5.jpg',
      },
      {
        type: 'question',
        question: '請問您看到了什麽？',
        options: [
          '上半部分有一條紫色的曲綫',
          '下半部分有一條紅色的曲綫',
          '一條紫色曲綫和一條紅色曲綫',
          '什麽都沒有',
        ],
        answer: '一條紫色曲綫和一條紅色曲綫',
        score: [1, 1, 0, 1],
      },
      {
        type: 'image',
        question: '請問您看到了什麽？',
        image: 'https://static.cmereye.com/imgs/2023/06/74b0f092e710d3f1.jpg',
      },
      {
        type: 'question',
        question: '請問您看到了什麽？',
        options: ['2', '6', '26', '92'],
        answer: '26',
        score: [1, 1, 0, 1],
      },
    ],
  },
  {
    id: '05',
    title: '眼鏡檢查',
    questions: [
      {
        type: 'image',
        question: '請問哪個背景中的字符更清晰明亮？',
        image: 'https://static.cmereye.com/imgs/2023/06/34ffe189f740b93c.jpg',
      },
      {
        type: 'question',
        question: '請問哪個背景中的字符更清晰明亮？',
        options: ['紅區字符', '綠區字符', '完全一樣'],
        answer: '',
        score: [1, 10, 100],
      },
      {
        type: 'image',
        question: '請問哪個背景中的字符更清晰明亮？',
        image: 'https://static.cmereye.com/imgs/2023/06/943e456bc741befb.jpg',
      },
      {
        type: 'question',
        question: '請問哪個背景中的字符更清晰明亮？',
        options: ['紅區字符', '綠區字符', '完全一樣'],
        answer: '',
        score: [1, 10, 100],
      },
      {
        type: 'image',
        question: '請問哪個背景中的字符更清晰明亮？',
        image: 'https://static.cmereye.com/imgs/2023/06/ef523bd0c1f7788d.jpg',
      },
      {
        type: 'question',
        question: '請問哪個背景中的字符更清晰明亮？',
        options: ['紅區字符', '綠區字符', '完全一樣'],
        answer: '',
        score: [1, 10, 100],
      },
    ],
  },
]
let _data: any = ref({
  id: '',
  title: '',
  questions: [],
})
let _l = ref(0)
const idTypeArr = ['01', '05']
const pageConfig = [
  {
    id: '01',
    idx: 0,
  },
  {
    id: '02',
    idx: 0,
  },
  {
    id: '03',
    idx: 1,
  },
  {
    id: '04',
    idx: 2,
  },
  {
    id: '05',
    idx: 1,
  },
  {
    id: '09',
    idx: 3,
  },
  {
    id: '10',
    idx: 4,
  },
  {
    id: '11',
    idx: 5,
  },
]
let _idxs = pageConfig.find((item) => item.id === testId)
if (_idxs) {
  _data.value = idTypeArr.includes(testId)
    ? list[_idxs.idx]
    : pictestList[_idxs.idx]
  _l.value = _data.value.questions.length
}
let acQuestions = ref(0)
let pictestTitle = ref('')
pictestTitle.value = _data.value.title
const toEyesight = () => {
  location.href = '/yahoo/ophthalmic-information/eyesight'
}
let sumNum = ref(0)
let leftSum = ref(0)
let rightSum = ref(0)
let _loading = ref(false)
const handleBtn = (_num: any, _Itemdata: any) => {
  if (_loading.value) return
  _loading.value = true
  if (_Itemdata.whicheye && _Itemdata.whicheye === 'leftEyeScore') {
    if (_Itemdata.type === 'picQuestion') {
      leftSum.value += _Itemdata.answer === _num ? 0 : 1
    } else {
      leftSum.value += _num
    }
  } else if (_Itemdata.whicheye && _Itemdata.whicheye === 'rightEyeScore') {
    if (_Itemdata.type === 'picQuestion') {
      rightSum.value += _Itemdata.answer === _num ? 0 : 1
    } else {
      rightSum.value += _num
    }
  } else {
    sumNum.value += _num
  }
  if (acQuestions.value < _data.value.questions.length - 1) {
    acQuestions.value++
    _loading.value = false
    checkAcItem()
  } else {
    if (idTypeArr.includes(testId)) {
      location.href =
        '/yahoo/vision-health-test/result?id=' + testId + '&sum=' + sumNum.value
    } else {
      location.href =
        '/yahoo/vision-health-test/result?id=' +
        testId +
        '&sum=' +
        sumNum.value +
        '&leftSum=' +
        leftSum.value +
        '&rightSum=' +
        rightSum.value
    }
  }
}
const handleNextBtn = () => {
  _loading.value = true
  acQuestions.value++
  _loading.value = false
  checkAcItem()
}
let timeNum = ref(3)
const checkAcItem = () => {
  if (_data.value.questions[acQuestions.value].type === 'image') {
    let timer = setInterval(() => {
      timeNum.value--
    }, 1000)
    setTimeout(() => {
      clearInterval(timer)
      acQuestions.value++
      timeNum.value = 3
      _loading.value = false
      checkAcItem()
    }, 3000)
  }
}
checkAcItem()
</script>

<template>
  <div class="pictestPage">
    <div class="pictestPage-header">
      <div @click="toEyesight">
        <svg
          class="icon"
          style="
            width: 1em;
            height: 1em;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
          "
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3409"
        >
          <path
            d="M936.462295 431.272397 527.130605 75.79629c-10.373255-9.013281-25.819039-8.928347-36.096103 0.192382L87.317695 434.286034c-8.499581 7.53972-11.449773 19.549242-7.417947 30.173207 4.03592 10.624988 14.214746 17.645892 25.577538 17.645892l56.722886 0 0 281.699824c-1.035586 9.969049-2.885723 45.906539 20.129456 72.411193 10.503215 12.097526 30.205952 26.51591 64.440661 26.51591l511.043209 0c0.968048 0.046049 2.316765 0.092098 3.994987 0.092098 12.30628 0 42.129516-2.466168 65.668629-24.232914 13.087063-12.101619 28.687366-34.756595 28.687366-73.975828l0-283.527448 63.139016-1.812275c11.271718-0.326435 21.185508-7.526417 24.979928-18.143219C948.07989 450.516694 944.969039 438.660668 936.462295 431.272397zM440.610066 620.364033c0.029676-0.116657 0.075725-0.275269 0.138146-0.466628 0.409322-1.278109 1.390673-3.294023 3.722788-5.669116 4.755304-4.830005 20.634969-16.067954 65.323774-16.067954 38.529525 0 55.135738 8.79941 61.607126 14.042831 5.735631 4.646833 6.703679 8.866948 6.854105 9.864672l0 185.949063L440.610066 808.016901 440.610066 620.364033z"
            fill="#272636"
            p-id="3410"
          ></path>
        </svg>
      </div>
      <div>{{ pictestTitle }}</div>
    </div>
    <div class="pictestPage-content">
      <div
        class="pictestPage-content-image"
        v-if="_data.questions[acQuestions].type === 'image'"
      >
        <div>倒計時：{{ timeNum }}s</div>
        <div>{{ _data.questions[acQuestions].question }}</div>
        <div>
          <img :src="_data.questions[acQuestions].image" alt="" />
        </div>
      </div>
      <div
        class="pictestPage-content-closeeye"
        v-else-if="_data.questions[acQuestions].type === 'closeeye'"
      >
        <div><img :src="_data.questions[acQuestions].image" alt="" /></div>
        <div>{{ _data.questions[acQuestions].remind }}</div>
        <div>
          <div @click.stop="handleNextBtn">下一步</div>
        </div>
      </div>
      <div
        class="pictestPage-content-picQuestion"
        v-else-if="_data.questions[acQuestions].type === 'picQuestion'"
      >
        <div>
          {{ _data.questions[acQuestions].question }}
        </div>
        <div>
          <div
            v-for="(item, index) in _data.questions[acQuestions].options"
            :key="index"
            @click.stop="
              handleBtn(
                _data.questions[acQuestions].imageOptions[index],
                _data.questions[acQuestions]
              )
            "
          >
            <img :src="item" alt="" />
          </div>
        </div>
      </div>
      <div class="pictestPage-content-question" v-else>
        <div>
          {{ _data.questions[acQuestions].question }}
        </div>
        <div>
          <div
            v-for="(item, index) in _data.questions[acQuestions].options"
            :key="index"
            @click.stop="
              handleBtn(
                _data.questions[acQuestions].score[index],
                _data.questions[acQuestions]
              )
            "
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.pictestPage {
  width: 100%;
  max-width: 1080px;
  margin: 100px auto;
  &-header {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    div:first-child {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 25px;
      border-bottom: 1px solid #1b407a;
      cursor: pointer;
    }
    div:last-child {
      font-size: 28px;
      color: #1b407a;
    }
  }
  &-content {
    margin-top: 50px;
    width: 100%;
    &-closeeye {
      & > div:nth-of-type(1) {
        width: 100%;
        img {
          width: 50%;
          margin: 0 auto;
        }
      }
      & > div:nth-of-type(2) {
        font-size: 25px;
        color: #1b407a;
        text-align: center;
      }
      & > div:nth-of-type(3) {
        & > div {
          height: 50px;
          line-height: 50px;
          font-size: 25px;
          color: #fff;
          background: #1b407a;
          text-align: center;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s;
          width: 50%;
          margin: 50px auto 0;
          &:active {
            background: #7f9bc9;
            color: color;
          }
        }
      }
    }
    &-image {
      & > div:nth-of-type(1) {
        display: flex;
        justify-content: flex-end;
        font-size: 25px;
        color: #1b407a;
      }
      & > div:nth-of-type(2) {
        text-align: center;
        font-size: 28px;
        color: #1b407a;
      }
      & > div:nth-of-type(3) {
        img {
          width: 60%;
          margin: 0 auto;
        }
      }
    }
    &-picQuestion {
      width: 100%;
      & > div:first-child {
        color: #1b407a;
        text-align: center;
        font-size: 2rem;
      }
      & > div:last-child {
        margin: 50px auto;
        width: 70%;
        display: flex;
        flex-wrap: wrap;
        & > div {
          width: 50%;
          cursor: pointer;
          position: relative;
          img {
            width: 100%;
          }
          &:active {
            &::after {
              content: '';
              position: absolute;
              background: rgba($color: #000000, $alpha: 0.1);
              width: 100%;
              height: 100%;
              left: 0;
              top: 0;
            }
          }
          &:hover {
            &::after {
              content: '';
              position: absolute;
              background: rgba($color: #000000, $alpha: 0.1);
              width: 100%;
              height: 100%;
              left: 0;
              top: 0;
            }
          }
        }
      }
    }
    &-question {
      width: 100%;
      & > div:first-child {
        color: #1b407a;
        text-align: center;
        font-size: 2rem;
      }
      & > div:last-child {
        & > div {
          height: 50px;
          line-height: 50px;
          font-size: 25px;
          color: #fff;
          background: #1b407a;
          text-align: center;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s;
          width: 50%;
          margin: 50px auto 0;
          &:active {
            background: #7f9bc9;
            color: color;
          }
          &:hover {
            background: #7f9bc9;
            color: color;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .pictestPage {
    &-header {
      div:first-child {
        left: 20px;
      }
      div:last-child {
        font-size: 24px;
      }
    }
    &-content {
      &-closeeye {
        & > div:nth-of-type(1) {
          img {
            width: calc(100% - 40px);
          }
        }
        & > div:nth-of-type(2) {
          font-size: 22px;
        }
        & > div:nth-of-type(3) {
          & > div {
            width: calc(100% - 40px);
            font-size: 22px;
          }
        }
      }
      &-image {
        & > div:nth-of-type(1) {
          font-size: 22px;
        }
        & > div:nth-of-type(2) {
          font-size: 24px;
        }
        & > div:nth-of-type(3) {
          img {
            width: calc(100% - 40px);
          }
        }
      }
      &-picQuestion {
        & > div:first-child {
          font-size: 24px;
        }
        & > div:last-child {
          width: calc(100% - 40px);
        }
      }
      &-question {
        & > div:first-child {
          font-size: 24px;
          padding-bottom: 30px;
        }
        & > div:last-child {
          & > div {
            width: calc(100% - 40px);
            font-size: 22px;
            margin: 30px auto 0;
          }
        }
      }
    }
  }
}
</style>
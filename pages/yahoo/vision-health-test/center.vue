<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
let centerTitle = ref('中心視力')
const toEyesight = () => {
  location.href = '/yahoo/ophthalmic-information/eyesight'
}

const getDevicePixelRatio2 = () => {
  var mediaQuery
  var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
  if (window.devicePixelRatio !== undefined && !is_firefox) {
    return window.devicePixelRatio
  } else if (window.matchMedia) {
    mediaQuery =
      '(-webkit-min-device-pixel-ratio: 1.5),\
          (min--moz-device-pixel-ratio: 1.5),\
          (-o-min-device-pixel-ratio: 3/2),\
          (min-resolution: 1.5dppx)'
    if (window.matchMedia(mediaQuery).matches) {
      return 1.5
    }
    mediaQuery =
      '(-webkit-min-device-pixel-ratio: 2),\
          (min--moz-device-pixel-ratio: 2),\
          (-o-min-device-pixel-ratio: 2/1),\
          (min-resolution: 2dppx)'
    if (window.matchMedia(mediaQuery).matches) {
      return 2
    }
    mediaQuery =
      '(-webkit-min-device-pixel-ratio: 0.75),\
          (min--moz-device-pixel-ratio: 0.75),\
          (-o-min-device-pixel-ratio: 3/4),\
          (min-resolution: 0.75dppx)'
    if (window.matchMedia(mediaQuery).matches) {
      return 0.7
    }
  } else {
    return 1
  }
}

const viewwindow = () => {
  var w = window.innerWidth
  var h = window.innerHeight
  if (typeof w != 'number') {
    if (document.compatMode == 'CSS1Compat') {
      w = document.documentElement.clientWidth
      h = document.documentElement.clientHeight
    } else {
      w = document.body.clientWidth
      h = document.body.clientHeight
    }
  }
  var view = {
    width: w,
    height: h,
  }
  return view
}

let rrCurrent = ref(0)
let ELeftText = ref(0)
let ERightText = ref(0)
let yes = ref(0)
let err = ref(0)
let flag = ref(0)
let dif = ref(-1)

const ClearDrawArea = () => {
  let c: any = document.getElementById('canvas')
  let cxt = c.getContext('2d')
  if (cxt != null) {
    c.height = c.height
  }
}

const Random = (min: any, max: any) => {
  return min + (Math.round(Math.random() * 1000) % (max - min))
}

const RandomOrientation = () => {
  var rand = Random(0, 4)
  switch (rand) {
    case 0:
      return 0
    case 1:
      return 1
    case 2:
      return 2
    case 3:
      return 3
    default:
      return -1
  }
}

const GetRotationValue = () => {
  dif.value = RandomOrientation()
  let rotate = (dif.value * Math.PI) / 2
  return rotate
}

const DrawEChar = () => {
  let s = 11.194 * ceitems[rrCurrent.value].millimeter
  var Ewidth = s / (getDevicePixelRatio2() || 0)
  ELeftText.value = ceitems[rrCurrent.value].smail
  ERightText.value = ceitems[rrCurrent.value].big
  let c: any = document.getElementById('canvas')
  let cxt = c.getContext('2d')
  c.style.width = Ewidth * 1 + 'px'
  cxt.translate(150, 75)
  cxt.strokeStyle = '#000000'
  cxt.lineWidth = 20
  cxt.rotate(GetRotationValue())
  cxt.beginPath()
  var unit = 10
  cxt.moveTo(-4 * unit, -5 * unit)
  cxt.lineTo(-4 * unit, 4 * unit)
  cxt.lineTo(4 * unit, 4 * unit)
  cxt.lineTo(4 * unit, -5 * unit)
  cxt.moveTo(0, -5 * unit)
  cxt.lineTo(0, 4 * unit)
  cxt.stroke()
}

let showBool = ref(false)
let isResult = ref(false)
let isRight = ref(false)
const handleNextBtn = () => {
  showBool.value = true
  nextTick(() => {
    ClearDrawArea()
    DrawEChar()
  })
}

var ceitems = [
  {
    id: 'a',
    big: 3,
    smail: 0.01,
    millimeter: 46,
    stand: 36.359985,
    index: '0',
  },
  {
    id: 'b',
    big: 3.1,
    smail: 0.012,
    millimeter: 42,
    stand: 28.879974,
    index: '1',
  },
  {
    id: 'c',
    big: 3.2,
    smail: 0.015,
    millimeter: 36.359985,
    stand: 22.939972,
    index: '2',
  },
  {
    id: 'd',
    big: 3.3,
    smail: 0.02,
    millimeter: 28.879974,
    stand: 18.21997,
    index: '3',
  },
  {
    id: 'e',
    big: 3.4,
    smail: 0.025,
    millimeter: 22.939972,
    stand: 14.47998,
    index: '4',
  },
  {
    id: 'f',
    big: 3.5,
    smail: 0.03,
    millimeter: 18.21997,
    stand: 11.5,
    index: '5',
  },
  {
    id: 'g',
    big: 3.6,
    smail: 0.04,
    millimeter: 14.47998,
    stand: 9.129974,
    index: '6',
  },
  {
    id: 'h',
    big: 3.7,
    smail: 0.05,
    millimeter: 11.5,
    stand: 7.2599792,
    index: '7',
  },
  {
    id: 'i',
    big: 3.8,
    smail: 0.06,
    millimeter: 9.129974,
    stand: 5.7599792,
    index: '8',
  },
  {
    id: 'j',
    big: 3.9,
    smail: 0.08,
    millimeter: 7.2599792,
    stand: 4.5799866,
    index: '9',
  },
  {
    id: 'k',
    big: 4,
    smail: 0.1,
    millimeter: 5.7599792,
    stand: 3.6399841,
    index: '10',
  },
  {
    id: 'l',
    big: 4.1,
    smail: 0.12,
    millimeter: 4.5799866,
    stand: 2.8899841,
    index: '11',
  },
  {
    id: 'm',
    big: 4.2,
    smail: 0.15,
    millimeter: 3.6399841,
    stand: 2.2999878,
    index: '12',
  },
  {
    id: 'n',
    big: 4.3,
    smail: 0.2,
    millimeter: 2.8899841,
    stand: 1.8199768,
    index: '12',
  },
  {
    id: 'o',
    big: 4.4,
    smail: 0.25,
    millimeter: 2.2999878,
    stand: 1.4499817,
    index: '13',
  },
  {
    id: 'p',
    big: 4.5,
    smail: 0.3,
    millimeter: 1.8199768,
    stand: 1.1499939,
    index: '14',
  },
  {
    id: 'q',
    big: 4.6,
    smail: 0.4,
    millimeter: 1.4499817,
    stand: 0.9100001,
    index: '15',
  },
  {
    id: 'r',
    big: 4.7,
    smail: 0.5,
    millimeter: 1.1499939,
    stand: 0.73,
    index: '16',
  },
  {
    id: 's',
    big: 4.8,
    smail: 0.6,
    millimeter: 0.9100001,
    stand: 0.58000004,
    index: '17',
  },
  {
    id: 't',
    big: 4.9,
    smail: 0.8,
    millimeter: 0.73,
    stand: 0.46000004,
    index: '18',
  },
  {
    id: 'u',
    big: 5,
    smail: 1,
    millimeter: 0.58000004,
    stand: 0.36,
    index: '19',
  },
  {
    id: 'v',
    big: 5.1,
    smail: 1.2,
    millimeter: 0.46000004,
    stand: 0.28999996,
    index: '20',
  },
  {
    id: 'w',
    big: 5.2,
    smail: 1.5,
    millimeter: 0.36,
    stand: 0.23000002,
    index: '21',
  },
]

onMounted(() => {
  var lastTouchEnd = 0
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  })
  document.addEventListener(
    'touchend',
    function (event) {
      var now = new Date().getTime()
      if (now - lastTouchEnd <= 300) {
        event.preventDefault()
      }
      lastTouchEnd = now
    },
    false
  )
  document.addEventListener('gesturestart', function (event) {
    event.preventDefault()
  })
})

const handleBtn = (_num: any) => {
  if (yes.value >= 3) {
    flag.value = 1
  }
  if (_num === dif.value) {
    if (yes.value >= 3) {
      if (rrCurrent.value < ceitems.length - 1) {
        yes.value = 0
        err.value = 0
        rrCurrent.value++
        ClearDrawArea()
        DrawEChar()
      } else {
        updateScore(ceitems[rrCurrent.value].smail)
        isalready()
        flag.value = 0
      }
    } else {
      yes.value += 1
      ClearDrawArea()
      DrawEChar()
    }
  } else {
    if (flag) {
      if (err.value >= 4) {
        var l = ceitems[rrCurrent.value].smail
        updateScore(l)
        isalready()
      } else {
        err.value += 1
        ClearDrawArea()
        DrawEChar()
      }
    } else {
      if (err.value >= 4) {
        if (rrCurrent.value > 0) {
          err.value = 0
          yes.value = 0
          rrCurrent.value--
          ClearDrawArea()
          DrawEChar()
        } else {
          updateScore(3)
          isalready()
        }
      } else {
        err.value += 1
        ClearDrawArea()
        DrawEChar()
      }
    }
  }
}

const updateScore = (e: any) => {
  if (!isRight.value) {
    leftResult.value.text += e
  } else {
    rightResult.value.text += e
  }
}

const isalready = () => {
  yes.value = 0
  err.value = 0
  flag.value = 0
  ClearDrawArea()
  if (!isRight.value) {
    isRight.value = true
    rrCurrent.value = 10
    showBool.value = false
    yes.value = 0
    err.value = 0
  } else {
    isResult.value = true
    let goodstr = '恭喜!'
    let errstr = '注意!'
    let goodimg = 'https://e.yiyantong.vip/images/result-no1.png'
    let errimg = 'https://e.yiyantong.vip/images/result-no2.png'
    let left_str = ''
    let right_str = ''
    let left_img = ''
    let right_img = ''
    if (leftResult.value.text * 1 >= 1) {
      left_str = goodstr
      left_img = goodimg
    } else {
      left_str = errstr
      left_img = errimg
    }
    if (rightResult.value.text * 1 >= 1) {
      right_str = goodstr
      right_img = goodimg
    } else {
      right_str = errstr
      right_img = errimg
    }
    leftResult.value.title = left_str
    leftResult.value.img = left_img
    rightResult.value.title = right_str
    rightResult.value.img = right_img
  }
}

let leftResult = ref({
  title: '',
  text: 0,
  img: '',
})
let rightResult = ref({
  title: '',
  text: 0,
  img: '',
})
</script>

<template>
  <div class="centerPage">
    <div class="centerPage-header">
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
      <div>
        {{ centerTitle }}
      </div>
    </div>
    <div class="centerPage-content" v-if="!isResult">
      <div class="centerPage-content-closeeye" v-if="!showBool">
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/06/077bf9231ccccf15.png"
            alt=""
          />
        </div>
        <div>{{ isRight ? '请闭上您的左眼' : '请闭上您的右眼' }}</div>
        <div>
          <div @click.stop="handleNextBtn">开始测试</div>
        </div>
      </div>
      <div class="centerPage-content-canvas" v-if="showBool">
        <div>{{ ELeftText }}</div>
        <canvas id="canvas"></canvas>
        <div>{{ ERightText }}</div>
      </div>
      <div class="centerPage-content-btn" v-if="showBool">
        <div>
          <div @click.stop="handleBtn(3)">左</div>
        </div>
        <div>
          <div @click.stop="handleBtn(0)">上</div>
          <div @click.stop="handleBtn(-1)">看不清</div>
          <div @click.stop="handleBtn(2)">下</div>
        </div>
        <div>
          <div @click.stop="handleBtn(1)">右</div>
        </div>
      </div>
    </div>
    <div class="centerPage-result" v-if="isResult">
      <div class="result">
        <div>{{ leftResult.title }}</div>
        <div>
          <img :src="leftResult.img" alt="" />
        </div>
        <div>左眼视力测试结果:{{ leftResult.text }}</div>
      </div>
      <div class="result">
        <div>{{ leftResult.title }}</div>
        <div>
          <img :src="leftResult.img" alt="" />
        </div>
        <div>右眼视力测试结果:{{ leftResult.text }}</div>
      </div>
    </div>
    <div class="centerPage-btn" v-if="isResult">
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.hkcmereye.com%2F/result01&amp;src=sdkpreparse"
        target="_block"
        ><div>分享</div></a
      >
      <a href="tel: +852 3956 2025"><div>立即預約眼睛檢查</div></a>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.centerPage {
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
    width: 100%;
    &-closeeye {
      & > div:nth-of-type(1) {
        width: 100%;
        img {
          width: 40%;
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
    &-canvas {
      height: 300px;
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > div:last-child,
      & > div:first-child {
        width: 40px;
        text-align: center;
      }
    }
    &-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 100px;
      & > div {
        div {
          width: 150px;
          height: 90px;
          color: #fff;
          background: green;
          line-height: 90px;
          font-size: 28px;
          text-align: center;
          cursor: pointer;
        }
        &:nth-of-type(2) {
          margin: 0 20px;
          div {
            &:nth-of-type(2) {
              margin: 20px 0;
            }
          }
        }
      }
    }
  }
  &-result {
    display: flex;
    & > div {
      flex: 1;
      text-align: center;
      font-size: 25px;
      margin-top: 100px;
      & > div {
        width: 100%;
        img {
          width: 50%;
          margin: 0 auto;
        }
      }
    }
  }
  &-btn {
    display: flex;
    justify-content: space-around;
    margin-top: 200px;
    div {
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
  .centerPage {
    margin: 100px auto;
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
            height: 40px;
            line-height: 40px;
            font-size: 22px;
            width: calc(100% - 40px);
            margin: 30px auto 0;
          }
        }
      }
      &-canvas {
        margin-top: 50px;
      }
      &-btn {
        margin-top: 0px;
        & > div {
          div {
            width: 100px;
            height: 50px;
            line-height: 50px;
            font-size: 25px;
          }
        }
      }
    }
    &-result {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > div {
        font-size: 22px;
        margin-top: 50px;
        & > div {
          width: 100%;
          img {
            width: 80%;
            margin: 0 auto;
          }
        }
      }
    }
    &-btn {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
      div {
        width: calc(100vw - 40px);
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
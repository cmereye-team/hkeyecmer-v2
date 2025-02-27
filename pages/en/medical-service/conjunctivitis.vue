<script lang="ts" setup>
import { getPdf } from '@/assets/js/common'
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: t('pages.medical_service.conjunctivitis_head'),
  meta() {
    return [
      {
        hid: 'conjunctivitisDesc',
        name: 'description',
        content: t('tdk.conjunctivitis.desc'),
      },
      {
        hid: 'conjunctivitisKey',
        name: 'keywords',
        content: t('tdk.conjunctivitis.key'),
      },
    ]
  },
}))
const locale = useState<string>('locale.setting')
// 传递背景色
const backgd = [
  '#c0c0e6;',
  '-webkit-linear-gradient(to right, #c0c0e6, #dedef3);',
  'linear-gradient(to right, #c0c0e6, #dedef3);',
]
// 結膜炎症狀
const symptom = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/49f77c5d99a7780b.png',
    text: 'pages.medical_service.conjunctivitis_con.symptom.text1',
    img_alt: '結膜充血為結膜炎症狀',
    img_title: '結膜炎症狀_結膜充血',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/d926dc7d76ec029f.png',
    text: 'pages.medical_service.conjunctivitis_con.symptom.text2',
    img_alt: '眼瞼紅腫為結膜炎症狀',
    img_title: '結膜炎症狀_眼瞼紅腫',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/850716323d310472.png',
    text: 'pages.medical_service.conjunctivitis_con.symptom.text3',
    img_alt: '眼睛痕癢為結膜炎症狀',
    img_title: '結膜炎症狀_眼睛痕癢',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/bcda02c1c5bf937d.png',
    text: 'pages.medical_service.conjunctivitis_con.symptom.text4',
    img_alt: '眼睛異物感為結膜炎症狀',
    img_title: '結膜炎症狀_眼睛異物感',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/ccacc25f729b2461.png',
    text: 'pages.medical_service.conjunctivitis_con.symptom.text5',
    img_alt: '流眼水為結膜炎症狀',
    img_title: '結膜炎症狀_流眼水',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/d329a39c077ff928.png',
    text: 'pages.medical_service.conjunctivitis_con.symptom.text6',
    img_alt: '眼睛分泌物為結膜炎症狀',
    img_title: '結膜炎症狀_眼睛分泌物',
  },
]
const kind = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/748e5bcb92254caf.png',
    title: 'pages.medical_service.conjunctivitis_con.kind.title1',
    text: 'pages.medical_service.conjunctivitis_con.kind.text1',
    img_alt: '病毒性結膜炎為結膜炎種類',
    img_title: '毒性結膜炎',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/701397f097eef96c.png',
    title: 'pages.medical_service.conjunctivitis_con.kind.title2',
    text: 'pages.medical_service.conjunctivitis_con.kind.text2',
    img_alt: '細菌性結膜炎為結膜炎種類',
    img_title: '細菌性結膜炎',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/ef14a865c31942b9.png',
    title: 'pages.medical_service.conjunctivitis_con.kind.title3',
    text: 'pages.medical_service.conjunctivitis_con.kind.text3',
    detail: [
      'pages.medical_service.conjunctivitis_con.kind.detail.context',
      {
        caption:
          'pages.medical_service.conjunctivitis_con.kind.detail.caption1',
        content:
          'pages.medical_service.conjunctivitis_con.kind.detail.content1',
      },
      {
        caption:
          'pages.medical_service.conjunctivitis_con.kind.detail.caption2',
        content:
          'pages.medical_service.conjunctivitis_con.kind.detail.content2',
      },
      {
        caption:
          'pages.medical_service.conjunctivitis_con.kind.detail.caption3',
        content:
          'pages.medical_service.conjunctivitis_con.kind.detail.content3',
      },
    ],
    img_alt: '過敏性結膜炎為結膜炎種類',
    img_title: '過敏性結膜炎',
  },
]
// 傳播途徑
const approach = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/0d05a89369200317.png',
    text: 'pages.medical_service.conjunctivitis_con.approach.text1',
    img_title: '紅眼症傳染途徑_接觸',
    img_alt: '女患者接觸眼睛為紅眼症傳染途徑',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/f0bec1c3ab794f68.png',
    text: 'pages.medical_service.conjunctivitis_con.approach.text2',
    img_title: '紅眼症傳染途徑_交叉感染',
    img_alt: '毛巾的交叉感染為紅眼症傳染途徑',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/4d61a6761a07123c.png',
    text: 'pages.medical_service.conjunctivitis_con.approach.text3',
    img_title: '紅眼症傳染途徑',
    img_alt: '泳池為紅眼症傳染途徑',
  },
]
// 高危人士
const highRisk = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/1a586d997866355f.png',
    text: 'pages.medical_service.conjunctivitis_con.highRisk.text1',
    img_title: '紅眼症高危一族_兒童',
    img_alt: '兒童為紅眼症高危一族',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/044719c0b3767bdf.png',
    text: 'pages.medical_service.conjunctivitis_con.highRisk.text2',
    img_title: '紅眼症高危一族_眼敏感',
    img_alt: '眼敏感的女患者為紅眼症高危一族',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/9210325662456759.png',
    text: 'pages.medical_service.conjunctivitis_con.highRisk.text3',
    img_title: '紅眼症高危一族_抵抗力差',
    img_alt: '抵抗力差的女患者為紅眼症高危一族',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/0820acef48ffd428.png',
    text: 'pages.medical_service.conjunctivitis_con.highRisk.text4',
    img_title: '紅眼症高危一族_揉眼睛',
    img_alt: '揉眼睛的女患者為紅眼症高危一族',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/42fba00cccac8fd8.png',
    text: 'pages.medical_service.conjunctivitis_con.highRisk.text5',
    img_title: '紅眼症高危一族_隱形眼鏡',
    img_alt: '長期配戴隱形眼鏡為紅眼症高危一族',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/d4a7e8890a9e4e9d.png',
    text: 'pages.medical_service.conjunctivitis_con.highRisk.text6',
    img_title: '紅眼症高危一族_長期使用電子產品',
    img_alt: '長期使用電子產品的女患者為紅眼症高危一族',
  },
]
// 預防結膜炎
const prevent = [
  {
    title: 'pages.medical_service.conjunctivitis_con.prevent.title1',
    img: 'https://static.cmereye.com/imgs/2023/05/6f78b53bc80256f1.png',
    text: 'pages.medical_service.conjunctivitis_con.prevent.text1',
    img_title: '預防紅眼症',
    img_alt: '避免共用物品以預防紅眼症',
  },
  {
    title: 'pages.medical_service.conjunctivitis_con.prevent.title2',
    img: 'https://static.cmereye.com/imgs/2023/05/477c1cc938e1c255.png',
    text: 'pages.medical_service.conjunctivitis_con.prevent.text2',
    img_title: '預防紅眼症',
    img_alt: '注意個人衛生以預防紅眼症',
  },
  {
    title: 'pages.medical_service.conjunctivitis_con.prevent.title3',
    img: 'https://static.cmereye.com/imgs/2023/05/9bdb93a2e7d6cdda.png',
    text: 'pages.medical_service.conjunctivitis_con.prevent.text3',
    img_title: '預防紅眼症',
    img_alt: '避免使用公共設施以預防紅眼症',
  },
  {
    title: 'pages.medical_service.conjunctivitis_con.prevent.title4',
    img: 'https://static.cmereye.com/imgs/2023/05/f72bd496b4dd4560.png',
    text: 'pages.medical_service.conjunctivitis_con.prevent.text4',
    img_title: '預防紅眼症_隱形眼鏡',
    img_alt: '保持隱形眼鏡清潔以預防紅眼症',
  },
  {
    title: 'pages.medical_service.conjunctivitis_con.prevent.title5',
    img: 'https://static.cmereye.com/imgs/2023/05/324f7391c1f7706f.png',
    text: 'pages.medical_service.conjunctivitis_con.prevent.text5',
    img_title: '預防紅眼症',
    img_alt: '避免接觸過敏原以預防紅眼症',
  },
]
// 内部导航
const serviceNavigation = [
  {
    anchorName: 'pages.medical_service.conjunctivitis_con.navLists.name1',
    anchorLink: '/medical-service/conjunctivitis#conjunctivitisInfo',
  },
  {
    anchorName: 'pages.medical_service.conjunctivitis_con.navLists.name2',
    anchorLink: '/medical-service/conjunctivitis#symptom',
  },
  {
    anchorName: 'pages.medical_service.conjunctivitis_con.navLists.name3',
    anchorLink: '/medical-service/conjunctivitis#kind',
  },
  {
    anchorName: 'pages.medical_service.conjunctivitis_con.navLists.name4',
    anchorLink: '/medical-service/conjunctivitis#approach',
  },
  {
    anchorName: 'pages.medical_service.conjunctivitis_con.navLists.name5',
    anchorLink: '/medical-service/conjunctivitis#highRisk',
  },
  {
    anchorName: 'pages.medical_service.conjunctivitis_con.navLists.name6',
    anchorLink: '/medical-service/conjunctivitis#means',
  },
  {
    anchorName: 'pages.medical_service.conjunctivitis_con.navLists.name7',
    anchorLink: '/medical-service/conjunctivitis#prevent',
  },
]
// 跳转Whatsapp
const goWhatsApp = () => {
  window.open(
    'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2',
    '_blank'
  )
}
// 拨打电话
const callTel = () => {
  location.href = 'tel: +852 3956 2025'
}

const bannerData = {
  pcSrc: 'https://static.cmereye.com/static/hkcmereye/bannerzip/結膜炎1.png',
  mbSrc: 'https://static.cmereye.com/static/hkcmereye/bannerzip/結膜炎2.png',
  cnName: '結膜炎(紅眼症)',
  enName: 'CONJUNCTIVITIS',
  textColor: '#C0C0E6',
  pageName: 'conjunctivitis',
}
</script>

<template>
  <div class="conjunctivitis">
    <PageServiceBanner :bannerData="bannerData" />
    <serviceNav :arrData="serviceNavigation" :pageName="'conjunctivitis'" />
    <!-- 結膜炎 -->
    <div
      class="conjunctivitis_nav"
      :class="{ 'conjunctivitis-en': locale === 'en' }"
    >
      <!-- 什麼是結膜炎？ -->
      <div id="conjunctivitisInfo">
        <div>
          <div>
            {{
              $t(
                'pages.medical_service.conjunctivitis_con.conjunctivitisInfo.name'
              )
            }}
          </div>
          <div>
            {{
              $t(
                'pages.medical_service.conjunctivitis_con.conjunctivitisInfo.context'
              )
            }}
          </div>
        </div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/3ce6dbff76e16a32.png"
            title="結膜炎症狀_紅眼症症狀"
            alt="女患者揉眼睛為結膜炎或紅眼症症狀表現"
          />
        </div>
      </div>
      <!-- 結膜炎症狀 -->
      <div id="symptom">
        <div class="conjun_text_color">
          {{ $t('pages.medical_service.conjunctivitis_con.symptom.name') }}
        </div>
        <div>
          <div v-for="(item, index) in symptom" :key="index">
            <div>
              <img
                :src="item.img"
                :alt="item.img_alt"
                :title="item.img_title"
              />
            </div>
            <div>
              <div>{{ $t(item.text) }}</div>
            </div>
          </div>
        </div>
        <!-- <div class="conjun_button_bg_color" @click="callTel()">
          <p>{{$t('pages.medical_service.conjunctivitis_con.btn.name1_1')}}</p>
          <p>{{$t('pages.medical_service.conjunctivitis_con.btn.name1_2')}}</p>
        </div> -->
        <div class="serviceBtnStyle">
          <service-button-icon
            :str="
              $t('pages.medical_service.conjunctivitis_con.btn.name1_1') +
              '\n' +
              $t('pages.medical_service.conjunctivitis_con.btn.name1_2')
            "
            :link="'tel: +852 3956 2025'"
            :type="'4'"
            :pageName="'conjunctivitis'"
          />
        </div>
      </div>
      <!-- 結膜炎種類 -->
      <div id="kind">
        <div class="conjun_text_color">
          {{ $t('pages.medical_service.conjunctivitis_con.kind.name') }}
        </div>
        <div>
          <div v-for="(item, index) in kind" :key="index">
            <div>
              <div>
                <img
                  :src="item.img"
                  :alt="item.img_alt"
                  :title="item.img_title"
                />
              </div>
              <div>
                <div>{{ $t(item.title) }}</div>
              </div>
            </div>
            <div>
              <div>{{ $t(item.text) }}</div>
              <div v-for="(ele, i) in item.detail" :key="i">
                <div v-if="typeof ele === 'string'">{{ $t(ele) }}</div>
                <div v-else>
                  <div v-for="(el, index) in ele" :key="index">
                    {{ $t(el) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="conjun_button_bg_color" @click="goWhatsApp()">
          <p>{{$t('pages.medical_service.conjunctivitis_con.btn.name2_1')}}</p>
          <p>{{$t('pages.medical_service.conjunctivitis_con.btn.name2_2')}}</p>
        </div> -->
        <div class="serviceBtnStyle">
          <service-button-icon
            :str="
              $t('pages.medical_service.conjunctivitis_con.btn.name2_1') +
              '\n' +
              $t('pages.medical_service.conjunctivitis_con.btn.name2_2')
            "
            :link="'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'"
            :type="'2'"
            :pageName="'conjunctivitis'"
          />
        </div>
      </div>
      <!-- 傳播途徑 -->
      <div id="approach">
        <div class="conjun_text_color">
          {{ $t('pages.medical_service.conjunctivitis_con.approach.name') }}
        </div>
        <div>
          {{ $t('pages.medical_service.conjunctivitis_con.approach.context') }}
        </div>
        <div>
          <div>
            {{ $t('pages.medical_service.conjunctivitis_con.approach.name1') }}
          </div>
          <div>
            <div v-for="(item, index) in approach" :key="index">
              <div>
                <img
                  :src="item.img"
                  :alt="item.img_alt"
                  :title="item.img_title"
                />
              </div>
              <div>{{ $t(item.text) }}</div>
            </div>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="68px"
            height="68px"
          >
            <image
              x="0px"
              y="0px"
              width="68px"
              height="68px"
              xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACWFBMVEX///9rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5rcJ5scZ+IjLGqrcfGx9nc3ejt7vP4+Pr///9scZ6Pk7bExtjz8/duc6CkqMTq6vGdob/u7vTu7/Seob9+g6vY2eaanb329vmbnr26vNJtcp/Jy9zZ2uaVmLlzd6OUl7nX2OW5vNG9wNS5u9Hg4evd3umbn7729/mgpMGdoL97gKl6f6ifosBwdKGprMeAhKyGiq+Slrecn77q6/GOkrWrrsi4utDExtnFx9ny8/fh4uz19fiFia/6+/yDiK67vdLGyNrs7fPW1+Ts7PL3+Prx8vb09Ph4fKb8/P24u9HR0uHBxNfo6fBtcqDHydrv7/SChq1yd6OZnbyWmbrAwtaTl7hxdqL5+fv9/f79/f29v9RwdaGYm7v6+vzKzNy0ts5vdKHr7PJ8gam2uc+oq8a8v9N1eqWYnLx0eaTa3Of+/v7DxdiKjrJ8gKmpq8acoL7b3Oekp8OlqMSmqcT19fmKjrOEVK2WAAAAUnRSTlMAASlei7DR5fMKVqTqM541Qb7BKrcHg/n6hCLLVPF6/o6Nh3hwU/AGzM2AJPe2PDKdmAv07qWg4ihdYIyyzt/s4OuhNLg9JYEjj3uF+0JDV1/dqIVWhgAAAAFiS0dEAIgFHUgAAAAHdElNRQfnBRAQITt+3gbCAAAEDklEQVRYw62Yd1sTQRDGNzQjAiqIIBasWLAiVhCsKDb0ECJLiQVFqmBBsBBQEI0VK2IDe++9YNevZS5b7rI3e0cenb/29p38nrvd2dmZICQzW0BgUHBIL7ui2HuFBAcFBtiQn9Y7tE+YIlhYn9DefiDCI+wKaPaIvj1E9OuvmFhkvx4gogYoFjYgygIRPTDGiqEosYOizRhxg60Rqg2OkzOGDNV7Zq/LyXWsz8M4b70jN2ddtl4bOkTGGBaveeUXFBZhHysqLMjX9PhhIMI2XHNxbtiIAdu4wan5jICCT8fYtBlLrHiL5jXSyBjFxa0l2MRKtnLH0SJjDF+PbaXY1ErL+LoIqxuXwBa0HFtaOVvgBJ+dHjuOTldUWjMwrqyg7uPH6iAT2HsUiv5V26uV6podwmwhe5cJGiNxIp3bKTJ2UWG3ML+Tzk9M5JBJdKpMZNTyMN0jKHXsNDLGZLa39SJkL9/OfYJSz3Z6svAixvjYzyEHDPFChUmEEU4fG4zboDssBq2BClO8kKnkwVVshGhHxWXQil1EmaYykqaTh0YgIJo45KBRbCRKspqhQmmIQOf2EIc0G8UW+rFq8M8gw8MAA7dyyBFALSDSTE8aoffLUQiSyyE7ANVNpFkIzaZfcwyCHOeQE4B6jH5PIppDBichBj7FTloTKJ8k4lyUQgY5oBc+TSGbQDWHiCNQMBnkwhAWUW2geoaIqWgeGThgSBuFVIGqg4jzUBoZnIUh5yikHlTPEzENpZPBBRhykZ5vWG0najqKkZwvapdk8apaB/ltjBWkxqtetoDQz8mTQEjgX7H4HPOFxVe96jVYpAs732KLcZUqXu+ARb7FNNg6JZAuVbwhETtZsJmHPcY3PeIticbDPtDsAHrstke8I9H4ATRNBer33L136z4saanAtoCM3Nhv05ISS48FMte8ogcShabHhbpE3QL5PXzkSfiPn9RCmj5RsysD2p+nNN1ffybfG++VgSLIg6vL6PecpdgXLw2az+WFFlFH4Bp9xRP1a4PGkl44uYwX00fjha4VwG9EiV3oiy1LC61SfCsovLRYwgoU1ljUiZAjjPFOjMU64UUQypCVWx3vyfyHj4LAy60MoPBzC86fPnc7lS9fxarDzQqXpfoSdDyd9LcE9Wl8tGK4zZrRxovhZUKrw8vyZquy/BvzjDc0PboG4bsZ47u27aOMbUYmF/N/dMkQXT+0WjATapo0iuL8CTdNv3RNUybcsS/3ad/c7b6EdrdP+7YcScy3kazobvU2kh2/XzrOtP6p0GvyRtLTKfS0pc1AJha9ItYasXKFaXON/kubr9qqSDNE5OoeIFTr++9/faiWlAX9CZOV5AfCa7aANUGpIWuTY2OT14akpqwx+TvoL12m6v8/XtS4AAAAAElFTkSuQmCC"
            />
          </svg>
          <div>
            {{
              $t('pages.medical_service.conjunctivitis_con.approach.context1')
            }}
          </div>
        </div>
        <!-- <div class="conjun_button_bg_color" @click="callTel()">
          <p>{{$t('pages.medical_service.conjunctivitis_con.btn.name3_1')}}</p>
          <p>{{$t('pages.medical_service.conjunctivitis_con.btn.name3_2')}}</p>
        </div> -->
        <div class="serviceBtnStyle">
          <service-button
            :str="
              $t('pages.medical_service.conjunctivitis_con.btn.name3_1') +
              '\n' +
              $t('pages.medical_service.conjunctivitis_con.btn.name3_2')
            "
            :link="'tel: +852 3956 2025'"
            :pageName="'conjunctivitis'"
          />
        </div>
      </div>
      <!-- 高危人士 -->
      <div id="highRisk">
        <div class="conjun_text_color">
          {{ $t('pages.medical_service.conjunctivitis_con.highRisk.name') }}
        </div>
        <div>
          <div>
            {{
              $t('pages.medical_service.conjunctivitis_con.highRisk.context')
            }}
          </div>
          <div>
            <div v-for="(item, index) in highRisk" :key="index">
              <div>
                <img
                  :src="item.img"
                  :alt="item.img_alt"
                  :title="item.img_title"
                />
              </div>
              <div>{{ $t(item.text) }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 結膜炎治療 -->
      <div id="means">
        <div class="conjun_text_color">
          {{ $t('pages.medical_service.conjunctivitis_con.means.name') }}
        </div>
        <div>
          <div>
            <div>
              {{ $t('pages.medical_service.conjunctivitis_con.means.title1') }}
            </div>
            <div>
              {{ $t('pages.medical_service.conjunctivitis_con.means.text1') }}
            </div>
          </div>
          <div>
            <div>
              {{ $t('pages.medical_service.conjunctivitis_con.means.title2') }}
            </div>
            <div>
              {{ $t('pages.medical_service.conjunctivitis_con.means.text2') }}
            </div>
          </div>
          <div>
            <div>
              {{ $t('pages.medical_service.conjunctivitis_con.means.title3') }}
            </div>
            <div>
              {{ $t('pages.medical_service.conjunctivitis_con.means.text3') }}
            </div>
          </div>
        </div>
      </div>
      <!-- 預防結膜炎 -->
      <div id="prevent">
        <div class="conjun_text_color">
          {{ $t('pages.medical_service.conjunctivitis_con.prevent.name') }}
        </div>
        <div>
          <div v-for="(item, i) in prevent" :key="i">
            <div>{{ $t(item.title) }}</div>
            <div>
              <img
                :src="item.img"
                :alt="item.img_alt"
                :title="item.img_title"
              />
            </div>
            <div>{{ $t(item.text) }}</div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
    <!-- 下载 -->
    <div class="dow">
      <div>
        <div>
          <a
            href="https://www.hkeyecmer.com/pdf/conjunctivitis.pdf"
            :download="'結膜炎'"
          >
            <img
              src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
              title="結膜炎_紅眼症"
              alt="結膜炎_紅眼症_小冊子"
              srcset=""
            />
          </a>
          <a
            href="https://www.hkeyecmer.com/pdf/conjunctivitis.pdf"
            :download="'結膜炎'"
          >
            <p>
              {{ $t('pages.medical_service.conjunctivitis_con.dow.text1') }}
            </p>
            <p>
              {{ $t('pages.medical_service.conjunctivitis_con.dow.text2') }}
            </p>
          </a>
        </div>
      </div>
    </div>
    <!-- 表单 -->
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#c0c0e6;'}`"
    />
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
@keyframes bgposition {
  0% {
    transform: translate(30%, 30%);
  }
  25% {
    transform: translate(30%, -30%);
  }
  50% {
    transform: translate(-30%, -30%);
  }
  75% {
    transform: translate(-30%, 30%);
  }
  100% {
    transform: translate(30%, 30%);
  }
}
.conjunctivitis_nav {
  max-width: 1200px;
  margin: 100px auto -50%;
  transform: scale(0.9);
  transform-origin: center top;
  & > div:nth-child(1) {
    display: flex;
    justify-content: flex-end;
    position: relative;
    & > div:nth-child(1) {
      position: absolute;
      padding-right: 787px;
      margin-top: 185px;
      & > div:nth-child(1) {
        font-family: 'NotoSansHK-Medium';
        font-size: 50px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 48px;
        letter-spacing: 0px;
        color: #6b709e;
      }
      & > div:nth-child(2) {
        margin-top: 38px;
        font-family: 'Noto Sans HK';
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 42px;
        letter-spacing: 0px;
        color: #6b709e;
      }
    }
    & > div:nth-child(2) {
      transform: scale(0.85);
      & > img {
        z-index: 5;
        position: relative;
      }
    }
    & > div:nth-child(2)::before {
      content: '';
      width: 663px;
      height: 569px;
      background-color: #f2f2f2;
      border-radius: 20px;
      display: inline-block;
      top: 0;
      right: 70px;
      top: 80px;
      position: absolute;
      z-index: 1;
    }
  }
  // 結膜炎症狀
  & > div:nth-child(2) {
    margin-top: 260px;
    & > div:nth-child(2) {
      margin-top: 62px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      & > div {
        margin-right: 105px;
        display: flex;
        flex-direction: column;
        align-items: center;
        & > div:nth-child(2) {
          font-family: 'Noto Sans HK';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #6b709e;
        }
      }
      & > div:nth-child(n + 4) {
        margin-top: 55px;
      }
      & > div:nth-child(3),
      & > div:nth-child(6) {
        margin-right: 0;
      }
    }
    & > div:nth-child(3) {
      // width: 580px;
      // height: 140px;
      margin-top: 120px;
    }
  }
  // 結膜炎種類
  & > div:nth-child(3) {
    margin-top: 180px;
    & > div:nth-child(2) {
      margin-top: 200px;
      & > div {
        margin-bottom: 180px;
        & > div:nth-child(1) {
          position: relative;
          & > div:nth-child(1) {
            border-radius: 50%;
            width: 170px;
            height: 170px;
            background-color: #ffffff;
            border: solid 6px #c0c0e6;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: -125px;
            left: 40px;
            z-index: 5;
          }
          & > div:nth-child(2) {
            width: 445px;
            height: 80px;
            background-color: #ffffff;
            border-radius: 20px;
            border: solid 4px #c0c0e6;
            position: absolute;
            left: 110px;
            bottom: -25px;
            font-family: 'NotoSansHK-Bold';
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #6b709e;
            display: flex;
            justify-content: flex-end;
            padding-right: 30px;
            align-items: center;
          }
        }
        & > div:nth-child(2) {
          border-radius: 20px;
          border: solid 2px #c0c0e6;
          padding: 80px 41px 80px 32px;
          font-family: 'Noto Sans HK';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 1.8;
          letter-spacing: 0px;
          color: #6a6e8e;
        }
      }
      & > :last-child {
        margin-bottom: 0;
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            margin-bottom: 50px;
          }
          & > div:nth-child(3),
          & > div:nth-child(4),
          & > div:nth-child(5) {
            font-family: 'Noto Sans HK';
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.8;
            letter-spacing: -1px;
            color: #6a6e8e;
            & > div > div:nth-child(1) {
              font-family: 'NotoSansHK-Medium';
              font-size: 22px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 34px;
              letter-spacing: 0px;
              color: #232967;
              font-weight: 600;
              margin-bottom: 18px;
              margin-top: 50px;
            }
          }
        }
      }
    }
    & > div:nth-child(3) {
      // width: 580px;
      // height: 140px;
      margin-top: 100px;
    }
  }

  // 傳播途徑
  & > div:nth-child(4) {
    margin-top: 180px;
    & > div:nth-child(2) {
      margin-top: 60px;
      font-family: 'Noto Sans HK';
      font-size: 22px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: #515151;
    }
    & > div:nth-child(3) {
      margin-top: 50px;
      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 34px;
        letter-spacing: 0px;
        color: #515151;
      }
      & > div:nth-child(2) {
        margin-top: 50px;
        padding: 0 72px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        & > div {
          & > div:nth-child(2) {
            width: 260px;
            margin-top: 40px;
            font-family: 'Noto Sans HK';
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #515151;
          }
        }
      }
    }
    & > div:nth-child(4) {
      position: relative;
      margin-top: 100px;
      margin-left: 32px;
      border-radius: 60px;
      border: solid 2px #c0c0e6;
      padding: 27px 61px;
      font-family: 'Noto Sans HK';
      font-size: 26px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: #515151;
      & > svg {
        position: absolute;
        left: -32px;
      }
    }
    & > div:nth-child(5) {
      margin-top: 80px;
    }
  }
  // 高危人士
  & > div:nth-child(5) {
    margin-top: 180px;
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 36px;
        letter-spacing: 0px;
        color: #515151;
      }
      & > div:nth-child(2) {
        margin-top: 56px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        & > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          & > div:nth-child(2) {
            margin-top: 39px;
            font-family: 'Noto Sans HK';
            font-size: 26px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #515151;
          }
        }
        & > div:nth-child(n + 4) {
          margin-top: 77px;
        }
      }
    }
  }
  // 結膜炎治療
  & > div:nth-child(6) {
    margin-top: 180px;
    & > div:nth-child(2) {
      & > div {
        margin-top: 100px;
        & > div:nth-child(1) {
          width: 340px;
          height: 70px;
          margin-bottom: 30px;
          background-color: #c0c0e6;
          border-radius: 35px;
          font-family: 'NotoSansHK-Bold';
          font-size: 30px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & > div:nth-child(2) {
          font-family: 'Noto Sans HK';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 42px;
          letter-spacing: 0px;
          color: #515151;
        }
      }
      & > div:first-child {
        margin-top: 80px;
      }
    }
  }

  // 預防結膜炎
  & > div:nth-child(7) {
    margin-top: 180px;
    & > div:nth-child(2) {
      margin-top: 150px;
      margin-bottom: 266px;
      padding: 0 45px 0 49px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      & > div {
        width: 290px;
        display: flex;
        flex-direction: column;
        align-items: center;
        & > div:nth-child(1) {
          font-family: 'NotoSansHK-Bold';
          font-size: 26px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #515151;
        }
        & > div:nth-child(2) {
          height: 180px;
          padding: 50px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          & > img {
            width: 100%;
          }
        }
        & > div:nth-child(3) {
          font-family: 'Noto Sans HK';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 0px;
          color: #515151;
        }
      }
      & > div:nth-child(4) {
        margin-left: 180px;
      }
      & > div:nth-child(5) {
        margin-right: 180px;
      }
      & > div:nth-child(n + 4) {
        margin-top: 120px;
      }
    }
  }
  &.conjunctivitis-en {
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        margin-top: 100px;
        & > div:nth-child(2) {
          line-height: 1.6;
        }
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(2) {
        & > div {
          width: calc(100% / 4);
          & > div:nth-child(2) {
            text-align: center;
          }
        }
      }
    }
    & > div:nth-child(3) {
      & > div:nth-child(2) {
        & > div {
          & > div:nth-child(1) {
            & > div:nth-child(2) {
              padding-left: 90px;
            }
          }
        }
      }
    }
    & > div:nth-child(5) {
      & > div:nth-child(2) {
        & > div:nth-child(2) {
          & > div {
            width: calc(100% / 3);
            & > div:nth-child(2) {
              text-align: center;
              padding: 0 20px;
            }
          }
        }
      }
    }
    & > div:nth-child(6) {
      & > div:nth-child(2) {
        & > div {
          & > div:nth-child(1) {
            width: max-content;
            padding: 0 30px;
          }
        }
      }
    }
  }
}
.conjun_text_color {
  font-family: 'NotoSansHK-Bold';
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 0px;
  color: #545989;
  text-align: center;
  position: relative;
  padding-bottom: 20px;
}
.conjun_text_color::after {
  content: '';
  width: 57px;
  height: 3px;
  background-color: #c0c0e6;
  border-radius: 1px;
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
// 圆角 矩形按钮样式
.conjun_button_bg_color {
  cursor: pointer;
  background-blend-mode: normal, normal;
  font-family: 'Noto Sans HK';
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 50px;
  letter-spacing: 0px;
  color: #ffffff;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin: auto;
  margin-top: 100px;
  width: 580px;
  height: 140px;
  position: relative;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  // text-shadow: 0 2px 5px #d8d8f4;
  text-shadow: 0 2px 5px rgba($color: #000000, $alpha: 0.5);
  &::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    bottom: -100%;
    right: -100%;
    background: linear-gradient(45deg, #4daadf 0%, #e3efeb 100%);
    background-size: 100% 100%;
    animation: bgposition 5s infinite linear alternate;
    z-index: -1;
  }
}
// 下载
.dow {
  margin-top: -40%;
  margin-bottom: 233px;
  color: #fff;
  font-size: 30px;
  & > div:nth-child(1) {
    & > div {
      width: 62.5%;
      height: 202px;
      background: #c0c0e6;
      position: relative;
      display: flex;
      align-items: center;
      & > a:nth-child(1) {
        margin-left: 37.28433%;
        margin-right: 3.90625%;
        cursor: pointer;
        & > img {
          width: 64px;
          height: auto;
        }
      }
      & > a:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .conjunctivitis_nav {
    transform: scale(1);
    margin: -80px 0 0;
    & > div:nth-child(1) {
      width: calc(100% - 60px);
      margin: 0 auto;
      flex-direction: column;
      & > div:nth-child(1) {
        position: relative;
        margin-top: 0;
        padding-right: 0;
        & > div:nth-child(1) {
          font-size: 24px;
          text-align: center;
        }
        & > div:nth-child(2) {
          font-size: 14px;
          line-height: 1.8;
          margin-top: 20px;
        }
      }
      & > div:nth-child(2) {
        width: calc(100% - 30px);
        margin-top: 30px;
        transform: scale(1);
        img {
          width: 100%;
          margin-left: 30px;
        }
      }
      & > div:nth-child(2)::before {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        top: 30px;
        right: 0px;
      }
    }
    & > div:nth-child(2) {
      width: calc(100% - 60px);
      margin: 100px auto 0;
      & > div:nth-child(2) {
        margin-top: 25px;
        & > div {
          width: calc(50% - 25px);
          margin-right: 0;
          margin-bottom: 25px;
          & > div:nth-child(2) {
            font-size: 16px;
          }
        }
        & > div:nth-child(n + 4) {
          margin-top: 0;
        }
      }
      & > div:nth-child(3) {
        margin-top: 30px;
        // width: max-content;
        // height: 85px;
        // font-size: 18px;
        // line-height: 1.6;
        // padding: 0 50px;
      }
    }
    & > div:nth-child(3) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        margin-top: 50px;
        & > div {
          margin-bottom: 50px;
          & > div:nth-child(1) {
            & > div:nth-child(1) {
              width: 90px;
              height: 90px;
              border: solid 5px #c0c0e6;
              position: relative;
              left: 25px;
              top: 0;
            }
            & > div:nth-child(2) {
              width: 230px;
              border: solid 3px #c0c0e6;
              height: 45px;
              font-size: 16px;
              font-weight: 600;
              position: absolute;
              left: 70px;
              bottom: 15px;
              padding-left: 30px;
              padding-top: 0;
              border-radius: 15px;
              padding-right: 20px;
            }
          }
          & > div:nth-child(2) {
            margin-top: -30px;
            font-size: 14px;
            line-height: 1.8;
            padding: 40px 15px 25px;
          }
        }
        & > :last-child {
          & > div:nth-child(2) {
            & > div:nth-child(2) {
              margin-bottom: 0;
            }
            & > div:nth-child(3),
            & > div:nth-child(4),
            & > div:nth-child(5) {
              font-size: 14px;
              line-height: 1.8;
              & > div > div:nth-child(1) {
                font-size: 16px;
                margin-bottom: 0;
                margin-top: 20px;
                line-height: 1.8;
              }
            }
          }
        }
      }
      & > div:nth-child(3) {
        margin-top: 55px;
        // width: max-content;
        // height: 85px;
        // font-size: 18px;
        // line-height: 1.6;
        // padding: 0 50px;
      }
    }
    // 傳播途徑
    & > div:nth-child(4) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        margin-top: 35px;
        font-size: 14px;
        line-height: 1.8;
      }
      & > div:nth-child(3) {
        margin-top: 20px;
        & > div:nth-child(1) {
          font-size: 14px;
        }
        & > div:nth-child(2) {
          flex-direction: column;
          padding: 0;
          margin-top: 25px;
          & > div {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            & > div:nth-child(1) {
              width: 90px;
              position: relative;
              z-index: 2;
            }
            & > div:nth-child(2) {
              position: relative;
              z-index: 1;
              width: auto;
              flex: 1;
              margin-left: -40px;
              padding: 10px 15px 5px 50px;
              font-size: 13px;
              line-height: 1.6;
              border-radius: 15px;
              border: 2px solid #e5e5e5;
              margin-top: 0;
            }
          }
        }
      }
      & > div:nth-child(4) {
        font-size: 14px;
        line-height: 1.8;
        padding: 25px 20px 20px 30px;
        border-radius: 30px;
        margin-left: 22px;
        margin-top: 0;
        & > svg {
          width: 45px;
          height: 45px;
          top: 50%;
          transform: translate(-50%, -50%);
          left: 0;
          image {
            width: 100%;
            height: 100%;
          }
        }
      }
      & > div:nth-child(5) {
        margin-top: 40px;
      }
    }
    & > div:nth-child(5) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          font-size: 13px;
          margin-top: 35px;
          line-height: 1.8;
        }
        & > div:nth-child(2) {
          margin-top: 32px;
          & > div {
            width: calc(50% - 20px);
            margin-bottom: 50px;
            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 1.6;
              margin-top: 15px;
              width: 120%;
              text-align: center;
            }
          }
          & > div:nth-child(n + 4) {
            margin-top: 0;
          }
        }
      }
    }
    & > div:nth-child(6) {
      width: calc(100% - 60px);
      margin: 20px auto 0;
      & > div:nth-child(2) {
        & > div {
          margin-top: 35px;
          & > div:nth-child(1) {
            width: 180px;
            height: 40px;
            font-size: 16px;
            margin-bottom: 10px;
          }
          & > div:nth-child(2) {
            font-size: 14px;
            margin-top: 5px;
            line-height: 1.8;
          }
        }
        & > div:first-child {
          margin-top: 35px;
        }
      }
    }
    & > div:nth-child(7) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        margin-top: 45px;
        margin-bottom: 0px;
        padding: 0;
        justify-content: center;
        & > div {
          width: 50%;
          margin-bottom: 60px;
          align-content: flex-start;
          & > div:nth-child(1) {
            font-size: 15px;
            font-weight: 600;
            width: calc(100% - 25px);
            text-align: center;
          }
          & > div:nth-child(2) {
            width: calc(100% - 25px);
            padding: 20px 0 25px;
            height: 120px;
            img {
              width: 50%;
            }
          }
          & > div:nth-child(3) {
            width: calc(100% - 25px);
            font-size: 13px;
            line-height: 1.7;
          }
        }
        & > div:nth-child(4) {
          margin-left: 0;
        }
        & > div:nth-child(5) {
          margin-right: 0;
        }
        & > div:nth-child(n + 4) {
          margin-top: 0;
        }
        & > div:last-child {
          width: 80%;
          & > div:nth-child(1) {
            width: 100%;
          }
          & > div:nth-child(2) {
            width: 60%;
          }
          & > div:nth-child(3) {
            width: 100%;
          }
        }
        & > div:nth-child(2n) {
          align-items: flex-end;
        }
      }
    }
    &.conjunctivitis-en {
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          margin-top: 0;
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(2) {
          & > div {
            width: 50%;
            & > div:nth-child(2) {
              line-height: 1.6;
              padding: 0 10px;
            }
          }
        }
        & > div:nth-child(3) {
          padding: 0 30px;
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          & > div {
            & > div:nth-child(1) {
              & > div:nth-child(2) {
                line-height: 1.2;
                padding-left: 50px;
              }
            }
          }
        }
        & > div:nth-child(3) {
          padding: 0 30px;
        }
      }
      & > div:nth-child(5) {
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            & > div {
              justify-content: flex-start;
            }
          }
        }
      }
    }
  }
  .conjun_text_color {
    font-size: 24px;
    padding-bottom: 5px;
  }
  .conjun_button_bg_color {
    margin-top: 55px;
    width: max-content;
    height: 70px;
    font-size: 16px;
    line-height: 1.6;
    padding: 5px 30px;
  }
  .conjun_text_color::after {
    width: 50px;
    height: 2px;
  }
  .dow {
    margin-top: 40px;
    margin-bottom: 100px;
    font-size: 16px;
    & > div:nth-child(1) {
      & > div {
        width: 80%;
        height: 90px;
        & > a:nth-child(1) {
          margin-left: 30%;
          margin-right: 30px;
          & > img {
            width: 55px;
            min-width: 55px;
            height: auto;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .conjunctivitis_nav {
    margin-bottom: -40%;
  }
  .dow {
    margin-top: -25%;
    & > div:nth-child(1) {
      & > div {
        & > div:nth-child(1) {
          margin-left: 32.2vw;
        }
      }
    }
  }
}
</style>

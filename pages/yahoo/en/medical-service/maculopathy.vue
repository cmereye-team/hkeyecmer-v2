<script lang="ts" setup>
import { getPdf } from '@/assets/js/common'
definePageMeta({
  layout: 'page',
})
const locale = useState<string>('locale.setting')
const { t } = useLang()
useHead(() => ({
  title: t('pages.medical_service.maculopathy_head'),
  meta() {
    return [
      {
        hid: 'maculopathyDesc',
        name: 'description',
        content: t('tdk.maculopathy.desc'),
      },
      {
        hid: 'maculopathyKey',
        name: 'keywords',
        content: t('tdk.maculopathy.key'),
      },
    ]
  },
}))
// 传递背景色
const backgd = [
  '#dec692;',
  '-webkit-linear-gradient(to right, #dec692, #eedaaf);',
  'linear-gradient(to right, #dec692, #eedaaf);',
]
// 常見問題
const meetArr = [
  {
    title: 'pages.medical_service.maculopathy_con.faq.q1',
    agree: 'pages.medical_service.maculopathy_con.faq.a1',
  },
  {
    title: 'pages.medical_service.maculopathy_con.faq.q2',
    agree: 'pages.medical_service.maculopathy_con.faq.a2',
  },
  {
    title: 'pages.medical_service.maculopathy_con.faq.q3',
    agree: 'pages.medical_service.maculopathy_con.faq.a3',
  },
  {
    title: 'pages.medical_service.maculopathy_con.faq.q4',
    agree: 'pages.medical_service.maculopathy_con.faq.a4',
  },
]
// 黃斑病變的症狀
const sympotm = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a35e84d4d561b775.png',
    text: 'pages.medical_service.maculopathy_con.sympotm.text1',
    alt: '模擬黃斑病變視力模糊症狀的樹木形狀圖',
    title: '黃斑病變症狀_視力模糊',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/1bc58cb58d984772.png',
    text: 'pages.medical_service.maculopathy_con.sympotm.text2',
    alt: '模擬黃斑病變視野變暗症狀的樹木形狀圖',
    title: '黃斑病變症狀_視野變暗',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/b5d5aa2f6c40815b.png',
    text: 'pages.medical_service.maculopathy_con.sympotm.text3',
    alt: '模擬黃斑病變視物變形症狀的樹木形狀圖',
    title: '黃斑病變症狀_視物變形',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/43227b62cc0bc253.png',
    text: 'pages.medical_service.maculopathy_con.sympotm.text4',
    alt: '模擬黃斑病變視野缺損症狀的樹木形狀圖',
    title: '黃斑病變症狀_視野缺損',
  },
]
// 黃斑病變自我檢查
const examine = [
  {
    title: 'pages.medical_service.maculopathy_con.inspect.title1',
    img_up: 'https://static.cmereye.com/imgs/2023/05/aa1baf80bab50483.png',
    img_down: 'https://static.cmereye.com/imgs/2023/05/9450b89f466321db.png',
    img_up_alt: '模擬無黃斑病變症狀的視覺圖',
    img_up_title: '黃斑病變症狀',
    img_down_alt: '模擬無黃斑病變症狀的阿姆斯勒方格表',
    img_down_title: '黃斑病變症狀_阿姆斯勒方格表',
  },
  {
    title: 'pages.medical_service.maculopathy_con.inspect.title4',
    img_up: 'https://static.cmereye.com/imgs/2023/05/233cb17db72b3823.png',
    img_down: 'https://static.cmereye.com/imgs/2023/05/be3b25f7e3770d9f.png',
    img_up_alt: '模擬黃斑病變視力模糊症狀的視覺圖',
    img_up_title: '黃斑病變症狀_視力模糊',
    img_down_alt: '模擬黃斑病變視力模糊症狀的阿姆斯勒方格表',
    img_down_title: '黃斑病變症狀_視力模糊_阿姆斯勒方格表',
  },
  {
    title: 'pages.medical_service.maculopathy_con.inspect.title3',
    img_up: 'https://static.cmereye.com/imgs/2023/05/940b9c94d772c689.png',
    img_down: 'https://static.cmereye.com/imgs/2023/05/6d3dba4eaa1e1303.png',
    img_up_alt: '模擬黃斑病變視物變形症狀的視覺圖',
    img_up_title: '黃斑病變症狀_視物變形',
    img_down_alt: '模擬黃斑病變視物變形症狀的阿姆斯勒方格表',
    img_down_title: '黃斑病變症狀_視物變形_阿姆斯勒方格表',
  },
  {
    title: 'pages.medical_service.maculopathy_con.inspect.title2',
    img_up: 'https://static.cmereye.com/imgs/2023/05/7e436a4e96ccdc37.png',
    img_down: 'https://static.cmereye.com/imgs/2023/05/98c9fd6f9d13b3cb.png',
    img_up_alt: '模擬黃斑病變視野變暗症狀的視覺圖',
    img_up_title: '黃斑病變症狀_視野變暗',
    img_down_alt: '模擬黃斑病變視野變暗症狀的阿姆斯勒方格表',
    img_down_title: '黃斑病變症狀_視野變暗_阿姆斯勒方格表',
  },
  {
    title: 'pages.medical_service.maculopathy_con.inspect.title5',
    img_up: 'https://static.cmereye.com/imgs/2023/05/89704c6401ded877.png',
    img_down: 'https://static.cmereye.com/imgs/2023/05/8336f08bbc0cda0e.png',
    img_up_alt: '模擬黃斑病變視野缺損症狀的視覺圖',
    img_up_title: '黃斑病變症狀_視野缺損',
    img_down_alt: '模擬黃斑病變視野缺損症狀的阿姆斯勒方格表',
    img_down_title: '黃斑病變症狀_視野缺損_阿姆斯勒方格表',
  },
]
// 老年黃斑病變成因
const factor = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/d318d9ddc48014f0.png',
    text: 'pages.medical_service.maculopathy_con.factor.text1',
    alt: '年紀大為黃斑病變成因',
    title: '黃斑病變成因_年紀大',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/4c30a5bce1f432ab.png',
    text: 'pages.medical_service.maculopathy_con.factor.text2',
    alt: '吸煙為黃斑病變成因',
    title: '黃斑病變成因_吸煙',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/fa056cec9377e0b8.png',
    text: 'pages.medical_service.maculopathy_con.factor.text3',
    alt: '不良飲食習慣為黃斑病變成因',
    title: '黃斑病變成因_不良飲食習慣',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/517d3d0735bb283a.png',
    text: 'pages.medical_service.maculopathy_con.factor.text4',
    alt: '紫外線為黃斑病變成因',
    title: '黃斑病變成因_紫外線',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/26091d94736c22f3.png',
    text: 'pages.medical_service.maculopathy_con.factor.text5',
    alt: '高血壓為黃斑病變成因',
    title: '黃斑病變成因_高血壓',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/3f170433f21acc56.png',
    text: 'pages.medical_service.maculopathy_con.factor.text6',
    alt: '黃斑退化為黃斑病變成因',
    title: '黃斑病變成因_黃斑退化',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/7d119ac9fdaca526.png',
    text: 'pages.medical_service.maculopathy_con.factor.text7',
    alt: '家族遺傳為黃斑病變成因',
    title: '黃斑病變成因_家族遺傳',
  },
]
// 預防黃斑病變
const prevent = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/ef27c15a9ab6f560.png',
    title: 'pages.medical_service.maculopathy_con.prevent.title1',
    text: 'pages.medical_service.maculopathy_con.prevent.text1',
    img_alt: '避免吸煙以預防黃斑病變',
    img_title: '預防黃斑病變_避免吸煙',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/c5572d289a126f73.png',
    title: 'pages.medical_service.maculopathy_con.prevent.title2',
    text: 'pages.medical_service.maculopathy_con.prevent.text2',
    img_alt: '控制體重以預防黃斑病變',
    img_title: '預防黃斑病變_控制體重',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/45fe80f40944cbb0.png',
    title: 'pages.medical_service.maculopathy_con.prevent.title3',
    text: 'pages.medical_service.maculopathy_con.prevent.text3',
    img_alt: '控制近視以預防黃斑病變',
    img_title: '預防黃斑病變_深近視',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/aa448910d3a02a1f.png',
    title: 'pages.medical_service.maculopathy_con.prevent.title4',
    text: 'pages.medical_service.maculopathy_con.prevent.text4',
    img_alt: '年長者定期進行眼睛檢查以預防黃斑病變',
    img_title: '預防黃斑病變_眼睛檢查',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/2078dbb368b52cce.png',
    title: 'pages.medical_service.maculopathy_con.prevent.title5',
    text: 'pages.medical_service.maculopathy_con.prevent.text5',
    img_alt: '保持均衡飲食以預防黃斑病變',
    img_title: '預防黃斑病變_均衡飲食',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/1edb292db5fb5f21.png',
    title: 'pages.medical_service.maculopathy_con.prevent.title6',
    text: 'pages.medical_service.maculopathy_con.prevent.text6',
    img_alt: '避免眼睛受紫外線照射以預防黃斑病變',
    img_title: '預防黃斑病變_紫外線',
  },
]
// 内部导航
const serviceNavigation = [
  {
    anchorName: 'pages.medical_service.maculopathy_con.navLists.name1',
    anchorLink: '/medical-service/maculopathy#maculopathyInfo',
  },
  {
    anchorName: 'pages.medical_service.maculopathy_con.navLists.name2',
    anchorLink: '/medical-service/maculopathy#sympotm',
  },
  {
    anchorName: 'pages.medical_service.maculopathy_con.navLists.name3',
    anchorLink: '/medical-service/maculopathy#inspect',
  },
  {
    anchorName: 'pages.medical_service.maculopathy_con.navLists.name4',
    anchorLink: '/medical-service/maculopathy#able_maculopathy',
  },
  {
    anchorName: 'pages.medical_service.maculopathy_con.navLists.name5',
    anchorLink: '/medical-service/maculopathy#wet_maculopathy',
  },
  {
    anchorName: 'pages.medical_service.maculopathy_con.navLists.name6',
    anchorLink: '/medical-service/maculopathy#prevent',
  },
  {
    anchorName: 'pages.medical_service.maculopathy_con.navLists.name7',
    anchorLink: '/medical-service/maculopathy#faq',
  },
]
// 跳转Whatsapp
const goWhatsApp = () => {
  window.open(
    'https://api.whatsapp.com/send?phone=85265767817&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2',
    '_blank'
  )
}
// 拨打电话
const callTel = () => {
  location.href = 'tel: +852 3956 2025'
}

const bannerData = {
  pcSrc: 'https://static.cmereye.com/static/hkcmereye/bannerzip/黄斑病1.png',
  mbSrc: 'https://static.cmereye.com/static/hkcmereye/bannerzip/黄斑病2.png',
  cnName: '黃斑病變',
  enName: 'MACULAR DEGENERATION',
  textColor: '#EABE5F',
  pageName: 'maculopathy',
}
</script>

<template>
  <div class="maculopathy">
    <!-- 头部 -->
    <PageServiceBanner :bannerData="bannerData" />
    <div class="maculopathy-nav">
      <serviceNav :arrData="serviceNavigation" :pageName="'maculopathy'" />
    </div>
    <div
      class="maculopathy_nav"
      :class="{ 'maculopathyNav-en': locale === 'en' }"
    >
      <!-- 什麼是黃斑病變？ -->
      <div id="maculopathyInfo">
        <div>
          {{ $t('pages.medical_service.maculopathy_con.maculopathyInfo.name') }}
        </div>
        <div>
          {{
            $t('pages.medical_service.maculopathy_con.maculopathyInfo.context')
          }}
        </div>
      </div>
      <!-- 黃斑病變的症狀 -->
      <div id="sympotm">
        <div class="maculopathy_color_title">
          {{ $t('pages.medical_service.maculopathy_con.sympotm.name') }}
        </div>
        <div>
          <div v-for="(item, i) in sympotm" :key="i">
            <div>
              <img :src="item.img" :alt="item.alt" :title="item.title" />
            </div>
            <div>{{ $t(item.text) }}</div>
          </div>
        </div>
      </div>
      <!-- 黃斑病變自我檢查 -->
      <div id="inspect">
        <div class="maculopathy_color_title">
          {{ $t('pages.medical_service.maculopathy_con.inspect.name') }}
        </div>
        <div>
          <div>
            <div>
              {{ $t('pages.medical_service.maculopathy_con.inspect.name1') }}
            </div>
            <div>
              {{ $t('pages.medical_service.maculopathy_con.inspect.name2') }}
            </div>
            <div>
              <span>1</span
              >{{ $t('pages.medical_service.maculopathy_con.inspect.text1') }}
            </div>
            <div>
              <span>2</span
              >{{ $t('pages.medical_service.maculopathy_con.inspect.text2') }}
            </div>
            <div>
              <span>3</span
              >{{ $t('pages.medical_service.maculopathy_con.inspect.text3') }}
            </div>
            <div>
              <span>4</span
              >{{ $t('pages.medical_service.maculopathy_con.inspect.text4') }}
            </div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/05/e46966e16b3b006a.png"
              alt="用於黃斑病變測試的阿姆斯勒方格表"
              title="黃斑病變測試_阿姆斯勒方格表"
            />
            <span>{{
              $t('pages.medical_service.maculopathy_con.inspect.name3')
            }}</span>
          </div>
        </div>
        <div>
          <div>
            {{ $t('pages.medical_service.maculopathy_con.inspect.name3') }}
          </div>
          <div>
            {{ $t('pages.medical_service.maculopathy_con.inspect.context') }}
          </div>
          <div>
            <div v-for="(item, i) in examine" :key="i">
              <div>{{ $t(item.title) }}</div>
              <div>
                <img
                  :src="item.img_up"
                  :alt="item.img_up_alt"
                  :title="item.img_up_title"
                />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="43px"
                height="43px"
              >
                <image
                  x="0px"
                  y="0px"
                  width="43px"
                  height="43px"
                  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAADWg4HyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB/lBMVEVristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristrist9mNHCz+rS3O+uv+JvjcyCnNP3+fz////U3fDH0uuLo9bc4/Ofs918mNG2xua9y+iFn9R5ldDL1u3g5vS7yed0kc6RqNj4+f35+v2Pptjl6vbq7vh3k89ujMzv8vmNpddujczZ4fK8yuiJotb2+PyKo9ZsisvK1ezY4PF6ldD9/v6JodW5yOe1xeWrveL09vvu8fnW3vFti8yvwOO0w+R7l9G2xeX8/P7+//+gtN7AzemxwePF0evH0+vS2+/f5vRxj83Bzun7/P53lM97ltFalhceAAAAZHRSTlMABDp0m8LP3dXJqYFODzaX7fu1WQY9vuFqE6L+0eN3AVf5BWD9rwNN/Joi8Gj3KGkM61BzzDI8kIgh+I9JnEufkip9WCuVAqFHjRlnidfiQ3XDkdKMyhWqcOkK5iAkpvXcfxEJ0Q/ryQAAAAFiS0dEbMwBMDsAAAAHdElNRQfnBREJFDN5f7PcAAACHUlEQVQ4y2NgQAWMTMwsrGzsHJxc3Dy8DPgAH79ACgIICgmL4FIpKpaCDsQlGLGplJSSTsECZJiwGCqbgh0IysmjKVVQTMEJpJRQlCqrpOABqmpIStU1kKVS09IzMlEUayKUamkjS2Rl5+Tk5KKarANTqsaJIp6XAwL5KGK6elC1+qhmFIDVFqIKikECw8CQCLUpRmC1xinEqDUBKZVnJ0ptiilQrVkKcWrNgWotiFQrDlTLSaTaFEsGNSti1fIwWMLZRcUlpahqy8orKqvg8nIIr1XX5OTU1iGrraoH0g2NMAXWDDZQVlMzSEVNC0JtaxuY0Q5Ta8tgB2V1gCVyOrtgart7ICK9MLX2DKJQVl8/VPEEqNqJEH7OJJhaBwZHGHMyVG7KVDDVBuVOmw5T4MQgAk/mM3KwgHpEODgzMHDAOTMxlTbPQoSvCwODK4I3G11pZylCUsANmNeQoqYSVemcaiQ5d2B6EEFO6iXISufOQ45iD1AC9kQS6J6PpHYBslJ2cL730kVWvBCuNA0l5XhD8qYPslj3IqjSxdORhX2hJaaBH7LodEjcLlmKLCjtDy/3UIqd6cuWA+NgBYoLrBEFT0AKKljZ0orCD0Qus4NS8IFglNpAPgSP0tAwtAJYwgqX0nADjILdVAarSm19bBUGY0QkhkpBey8cFVGUvgmKymjPGAY8IFY/ji0eqEwjQShRVI2BMFBLSsYmDADARi0RfmCoiQAAAABJRU5ErkJggg=="
                />
              </svg>
              <div>
                <img
                  :src="item.img_down"
                  :alt="item.img_down_alt"
                  :title="item.img_down_title"
                />
              </div>
            </div>
          </div>
          <!-- <div class="maculopathy_button_bg_color" @click="goWhatsApp()">
            <p>{{$t('pages.medical_service.maculopathy_con.btn.name1_1')}}</p>
            <p>{{$t('pages.medical_service.maculopathy_con.btn.name1_2')}}</p>
          </div> -->
          <div class="serviceBtnStyle">
            <service-button-icon
              :str="
                $t('pages.medical_service.maculopathy_con.btn.name1_1') +
                '\n' +
                $t('pages.medical_service.maculopathy_con.btn.name1_2')
              "
              :link="'https://api.whatsapp.com/send?phone=85265767817&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'"
              :type="'4'"
              :pageName="'maculopathy'"
              :textLine="'2'"
            />
          </div>
        </div>
      </div>
      <!-- 常見類型 -->
      <div>
        <div class="maculopathy_color_title">
          {{ $t('pages.medical_service.maculopathy_con.types.name') }}
        </div>
        <div>
          <div>
            {{ $t('pages.medical_service.maculopathy_con.types.name1') }}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="118px"
            height="20px"
          >
            <path
              fill-rule="evenodd"
              fill="rgb(105, 140, 215)"
              d="M117.042,9.921 L98.770,19.887 L103.400,11.174 L0.007,11.174 L0.007,7.920 L102.772,7.920 L98.533,0.290 L117.042,9.921 Z"
            />
          </svg>
          <div>
            <p>{{ $t('pages.medical_service.maculopathy_con.types.p1') }}</p>
            <p>{{ $t('pages.medical_service.maculopathy_con.types.p2') }}</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="158px"
              height="58px"
            >
              <path
                fill-rule="evenodd"
                fill="rgb(105, 140, 215)"
                d="M157.435,2.771 L143.811,18.556 L145.079,8.741 L1.252,57.986 L0.102,54.937 L143.306,5.905 L136.663,0.278 L157.435,2.771 Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="145px"
              height="79px"
            >
              <path
                fill-rule="evenodd"
                fill="rgb(105, 140, 215)"
                d="M145.000,78.999 L123.000,75.999 L131.215,72.348 L0.480,2.965 L2.787,0.668 L132.239,69.369 L133.000,60.999 L145.000,78.999 Z"
              />
            </svg>
          </div>
          <div>
            <div>
              <p>{{ $t('pages.medical_service.maculopathy_con.types.p3') }}</p>
              <p>{{ $t('pages.medical_service.maculopathy_con.types.p4') }}</p>
            </div>
            <div>
              <p>{{ $t('pages.medical_service.maculopathy_con.types.p5') }}</p>
              <p>{{ $t('pages.medical_service.maculopathy_con.types.p6') }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 老年黃斑病變 -->
      <div>
        <div class="maculopathy_color_title">
          {{ $t('pages.medical_service.maculopathy_con.types.name2') }}
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/05/ebb756d32ecc201b.png"
              alt="老年黃斑病變眼睛結構"
              title="老年黃斑病變"
            />
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="896px"
              height="260px"
            >
              <path
                fill-rule="evenodd"
                stroke="rgb(222, 198, 146)"
                stroke-width="2px"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                fill="none"
                d="M28.000,257.999 L28.000,157.929 L1.005,129.046 L28.000,102.001 L28.000,0.999 L894.000,0.999 L894.000,257.999 L28.000,257.999 Z"
              />
            </svg>
            <div>
              {{ $t('pages.medical_service.maculopathy_con.types.context') }}
            </div>
          </div>
        </div>
      </div>
      <!-- 老年黃斑病變分為乾性和濕性︰ -->
      <div>
        <div class="maculopathy_color_title">
          {{ $t('pages.medical_service.maculopathy_con.types.name3') }}
        </div>
        <div id="able_maculopathy">
          <div>
            {{ $t('pages.medical_service.maculopathy_con.types.name4') }}
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/ff4d52af6af21a3e.png"
                title="乾性黃斑病變_視力模糊"
                alt="乾性黃斑病變導致視力模糊的視覺圖"
              />
            </div>
            <div>
              <div>
                {{ $t('pages.medical_service.maculopathy_con.types.text1') }}
              </div>
              <div>
                {{ $t('pages.medical_service.maculopathy_con.types.text2') }}
              </div>
            </div>
          </div>
        </div>
        <div id="wet_maculopathy">
          <div>
            {{ $t('pages.medical_service.maculopathy_con.types.name5') }}
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/a7c511844cb612a3.png"
                title="濕性黃班病變_視野缺損"
                alt="濕性黃班病變導致視野缺損的視覺圖"
              />
            </div>
            <div>
              <div>
                {{ $t('pages.medical_service.maculopathy_con.types.text3') }}
              </div>
              <div>
                {{ $t('pages.medical_service.maculopathy_con.types.text4') }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 老年黃斑病變治療 -->
      <div id="wet_maculopathy_factor">
        <div class="maculopathy_color_title">
          {{ $t('pages.medical_service.maculopathy_con.factor.name') }}
        </div>
        <div>
          <div v-for="(item, i) in factor" :key="i">
            <div>
              <img :src="item.img" :title="item.title" :alt="item.alt" />
            </div>
            <div>{{ $t(item.text) }}</div>
          </div>
        </div>
      </div>
      <!-- 老年黃斑病變成因s -->
      <div id="wet_maculopathy_cure">
        <div class="maculopathy_color_title">
          {{ $t('pages.medical_service.maculopathy_con.cure.name') }}
        </div>
        <div>
          <div>
            <div>
              {{ $t('pages.medical_service.maculopathy_con.cure.title1') }}
            </div>
            <div>
              {{ $t('pages.medical_service.maculopathy_con.cure.text1') }}
            </div>
          </div>
          <div>
            <div>
              {{ $t('pages.medical_service.maculopathy_con.cure.title2') }}
            </div>
            <div>
              {{ $t('pages.medical_service.maculopathy_con.cure.text2') }}
            </div>
          </div>
          <div>
            <div>
              {{ $t('pages.medical_service.maculopathy_con.cure.title3') }}
            </div>
            <div>
              {{ $t('pages.medical_service.maculopathy_con.cure.text3') }}
            </div>
          </div>
          <div>
            <div>
              {{ $t('pages.medical_service.maculopathy_con.cure.title4') }}
            </div>
            <div>
              {{ $t('pages.medical_service.maculopathy_con.cure.text4') }}
            </div>
          </div>
        </div>
        <!-- <div class="maculopathy_button_bg_color" @click="callTel()">
          <p>{{$t('pages.medical_service.maculopathy_con.btn.name2_1')}}</p>
          <p>{{$t('pages.medical_service.maculopathy_con.btn.name2_2')}}</p>
        </div> -->
        <div class="serviceBtnStyle">
          <service-button
            :str="
              $t('pages.medical_service.maculopathy_con.btn.name2_1') +
              '\n' +
              $t('pages.medical_service.maculopathy_con.btn.name2_2')
            "
            :link="'tel: +852 3956 2025'"
            :pageName="'maculopathy'"
          />
        </div>
      </div>
      <!-- 預防黃斑病變 -->
      <div id="prevent">
        <div class="maculopathy_color_title">
          {{ $t('pages.medical_service.maculopathy_con.prevent.name') }}
        </div>
        <div>
          <div v-for="(item, i) in prevent" :key="i">
            <div>
              <img
                :src="item.img"
                :alt="item.img_alt"
                :title="item.img_title"
              />
            </div>
            <div>{{ $t(item.title) }}</div>
            <div>{{ $t(item.text) }}</div>
          </div>
        </div>
      </div>
      <div id="faq">
        <div class="maculopathy_color_title">
          {{ $t('pages.medical_service.maculopathy_con.faq.name') }}
        </div>
        <div>
          <PageCollapse
            :answer="meetArr"
            :downarr="'maculopathy'"
            :style="{ '--subassembly-color': '#cfb278' }"
          />
        </div>
      </div>
    </div>
    <div></div>
    <!-- 下载 -->
    <div class="dow" :class="{ 'dow-en': locale === 'en' }">
      <div>
        <div>
          <a
            href="https://www.hkeyecmer.com/pdf/maculopathy.pdf"
            :download="'黃斑病變'"
          >
            <img
              src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
              alt="黃斑病變_小冊子"
              title="黃斑病變"
              srcset=""
            />
          </a>
          <a
            href="https://www.hkeyecmer.com/pdf/maculopathy.pdf"
            :download="'黃斑病變'"
          >
            <p>{{ $t('pages.medical_service.maculopathy_con.dow.text1') }}</p>
            <p>{{ $t('pages.medical_service.maculopathy_con.dow.text2') }}</p>
          </a>
        </div>
      </div>
    </div>
    <!-- 表单 -->
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#dec692;'}`"
    />
    <yahooPageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
.maculopathy_nav {
  max-width: 1200px;
  margin: 100px auto -40%;
  transform: scale(0.9);
  transform-origin: center top;
  // 什麼是黃斑病變？
  & > div:nth-child(1) {
    margin-left: 41px;
    & > div:nth-child(1) {
      font-family: 'NotoSansHK-Medium';
      font-size: 50px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 52px;
      letter-spacing: 0px;
      color: #a49b88;
      margin-bottom: 100px;
    }
    & > div:nth-child(2) {
      margin-left: 13px;
      font-family: 'Noto Sans HK';
      font-size: 25px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 42px;
      letter-spacing: -1px;
      color: #a49b88;
    }
  }
  // 黃斑病變的症狀
  & > div:nth-child(2) {
    margin-top: 274px;
    & > div:nth-child(2) {
      margin-top: 80px;
      display: flex;
      justify-content: space-between;
      & > div {
        & > div:nth-child(2) {
          margin-top: 40px;
          white-space: pre-wrap;
          font-family: 'Noto Sans HK';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 32px;
          letter-spacing: 0px;
          color: #a49b88;
          text-align: center;
        }
      }
    }
  }
  // 黃斑病變自我檢查
  & > div:nth-child(3) {
    margin-top: 180px;
    & > div:nth-child(2) {
      margin-top: 84px;
      display: flex;
      justify-content: space-between;
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          font-family: 'NotoSansHK-Medium';
          font-size: 26px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #515151;
        }
        & > div:nth-child(2) {
          width: 163px;
          height: 42px;
          border-radius: 42px;
          background-color: #bfa876;
          font-family: 'Noto Sans HK';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 34px;
          letter-spacing: 0px;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 75px;
          margin-bottom: 62px;
        }
        & > div:nth-child(3),
        & > div:nth-child(4),
        & > div:nth-child(5),
        & > div:nth-child(6) {
          display: flex;
          align-items: center;
          margin-bottom: 67px;
          font-family: 'Noto Sans HK';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 34px;
          letter-spacing: 0px;
          color: #515151;
          & > span {
            margin-right: 15px;
            width: 34px;
            height: 34px;
            background-color: #bfa876;
            border-radius: 50%;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Metropolis-Bold';
            font-size: 26px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 34px;
            letter-spacing: 0px;
            color: #ffffff;
          }
        }
      }
      & > div:nth-child(2) {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        & > span {
          margin-top: 28px;
          font-family: 'Noto Sans HK';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 34px;
          letter-spacing: 0px;
          color: #777777;
        }
      }
    }
    & > div:nth-child(3) {
      & > div:nth-child(1) {
        font-family: 'NotoSansHK-Medium';
        font-size: 28px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 34px;
        letter-spacing: 0px;
        color: #515151;
      }
      & > div:nth-child(2) {
        font-family: 'Noto Sans HK';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 34px;
        letter-spacing: 0px;
        color: #515151;
        margin-top: 68px;
        margin-bottom: 50px;
      }
      & > div:nth-child(3) {
        display: flex;
        justify-content: space-between;
        & > div {
          background-color: #ffffff;
          border: solid 2px #e3dcce;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          & > div:nth-child(1) {
            width: 237px;
            height: 54px;
            background: #bfa876;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
          }
          & > div:nth-child(2) {
            margin-top: 16px;
          }
          & > svg:nth-child(3) {
            position: absolute;
            top: 51%;
          }
          & > div:nth-child(4) {
            margin-top: 12px;
            margin-bottom: 14px;
          }
        }
        & > div:nth-child(2) {
          & > div:nth-child(1) {
            background: #b19a68;
          }
        }
        & > div:nth-child(3) {
          & > div:nth-child(1) {
            background: #a48d5d;
          }
        }
        & > div:nth-child(4) {
          & > div:nth-child(1) {
            background: #8f7848;
          }
        }
        & > div:nth-child(5) {
          & > div:nth-child(1) {
            background: #826b3a;
          }
        }
      }
      & > div:last-child {
        margin-top: 102px;
      }
    }
  }
  // 常見類型
  & > div:nth-child(4) {
    margin-top: 180px;
    & > div:nth-child(2) {
      margin-top: 91px;
      padding: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      & > div:nth-child(1),
      & > div:nth-child(3) {
        width: 292px;
        height: 291px;
        background: #a18a5a;
        border-radius: 50%;
        font-family: 'NotoSansHK-Bold';
        font-size: 54px;
        font-weight: 700;
        font-stretch: normal;
        line-height: 64px;
        letter-spacing: 0px;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      & > div:nth-child(3) {
        background: #85a1c9;
        margin-left: 30px;
        font-family: 'NotoSansHK-Bold';
        font-size: 50px;
        font-weight: 700;
        font-stretch: normal;
        line-height: 64px;
        letter-spacing: 0px;
        color: #ffffff;
      }
      & > div:nth-child(4) {
        display: flex;
        flex-direction: column;
        margin-right: 40px;
      }
      & > div:nth-child(5) {
        & > div {
          width: 209px;
          height: 209px;
          background: #a4b9d7;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          font-family: 'NotoSansHK-Bold';
          font-size: 39px;
          font-weight: 500;
          font-stretch: normal;
          line-height: 50px;
          letter-spacing: 0px;
          color: #ffffff;
        }
        & > div:nth-child(1) {
          margin-bottom: 42px;
        }
      }
    }
  }
  // 老年黃斑病變
  & > div:nth-child(5) {
    margin-top: 180px;
    & > div:nth-child(2) {
      margin-top: 97px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      align-items: center;
      margin-left: -60px;
      & > div:nth-child(1) {
        position: absolute;
        transform: scale(0.85);
      }
      & > div:nth-child(2) {
        margin-left: 428px;
        position: relative;
        display: flex;
        flex-direction: column;
        & > div:nth-child(2) {
          position: absolute;
          padding: 50px 38px 50px 64px;
          font-family: 'Noto Sans HK';
          font-size: 26px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 44px;
          letter-spacing: 0px;
          color: #555555;
        }
      }
    }
  }
  // 老年黃斑病變分為乾性和濕性︰
  & > div:nth-child(6) {
    margin-top: 128px;
    & > div:nth-child(2) {
      margin-top: 107px;
    }
    & > div:nth-child(2),
    & > div:nth-child(3) {
      display: flex;
      flex-direction: column;
      transform: scale(0.85);
      & > div:nth-child(1) {
        font-family: 'NotoSansHK-Bold';
        font-size: 34px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 44px;
        letter-spacing: 0px;
        color: #515151;
        text-align: center;
        margin-bottom: 20px;
      }
      & > div:nth-child(2) {
        position: relative;
        margin-bottom: 180px;
        display: flex;
        justify-content: space-between;
        & > div:nth-child(1) {
          width: 550px;
          height: 360px;
          background: #e4ebf4;
          z-index: 5;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          top: -58px;
          margin-left: -90px;
        }
        & > div:nth-child(2) {
          width: 1000px;
          height: 400px;
          background: #f5f4f3;
          position: absolute;
          right: 0;
          padding-left: 300px;
          padding-top: 40px;
          padding-right: 40px;
          font-family: 'Noto Sans HK';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 1.7;
          letter-spacing: 0px;
          color: #515151;
          & > div:nth-child(2) {
            margin-top: 40px;
          }
        }
      }
    }
    & > div:nth-child(3) {
      & > div:nth-child(2) {
        flex-direction: row-reverse;
        margin-left: 0;
        margin-right: -90px;
        & > div:nth-child(2) {
          position: absolute;
          left: 0;
          padding-left: 30px;
          padding-top: 40px;
          padding-right: 295px;
          letter-spacing: -1px;
        }
      }
    }
  }
  // 老年黃斑病變成因
  & > div:nth-child(7) {
    margin-top: 180px;
    & > div:nth-child(2) {
      margin-top: 110px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      & > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: column;
        & > div:nth-child(2) {
          white-space: pre-wrap;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 28px;
          height: 60px;
          font-size: 20px;
        }
      }
      & > div:nth-child(1) {
        margin-left: 135px;
      }
      & > div:nth-child(3) {
        margin-right: 145px;
      }
      & > div:nth-child(n + 4) {
        margin-top: 96px;
      }
    }
  }
  // 老年黃斑病變治療
  & > div:nth-child(8) {
    margin-top: 180px;
    & > div:nth-child(2) {
      margin-top: 95px;
      margin-bottom: 120px;
      & > div {
        margin-bottom: 100px;
        & > div:nth-child(1) {
          margin-bottom: 30px;
          width: 257px;
          height: 65px;
          background: #e7decd;
          border-radius: 0 34px 0 0;
          font-family: 'NotoSansHK-Bold';
          font-size: 30px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #916b29;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-left: 40px;
        }
        & > div:nth-child(2) {
          font-family: 'Noto Sans HK';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 0px;
          color: #515151;
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(1) {
          width: 320px;
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(1) {
          width: 500px;
        }
      }
    }
  }
  // 預防黃斑病變
  & > div:nth-child(9) {
    margin-top: 180px;
    & > div:nth-child(2) {
      margin-top: 130px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      & > div {
        width: 380px;
        height: 670px;
        background: #fff;
        box-shadow: 7px 7px 29px 0px rgba(6, 0, 1, 0.12);
        border-radius: 170px 170px 0px 0px;
        & > div:nth-child(2) {
          height: 150px;
          font-family: 'NotoSansHK-Medium';
          font-size: 28px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #916b29;
          display: flex;
          justify-content: center;
          align-items: center;
          white-space: pre-wrap;
          text-align: center;
        }
        & > div:nth-child(3) {
          font-family: 'Noto Sans HK';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 0px;
          color: #515151;
          padding: 0 40px;
        }
      }
      & > div:nth-child(n + 4) {
        margin-top: 100px;
        & > div:nth-child(2) {
          height: 130px;
        }
      }
    }
  }
  & > :last-child {
    margin-top: 180px;
    & > div:first-child {
      margin-bottom: 90px;
    }
  }
  &.maculopathyNav-en {
    & > div:nth-child(3) {
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          & > div:nth-child(2) {
            width: max-content;
            padding: 0 30px;
          }
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(3) {
          & > div {
            & > div:nth-child(1) {
              text-align: center;
            }
          }
        }
      }
    }
    & > div:nth-child(4) {
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          text-align: center;
          font-size: 40px;
        }
        & > div:nth-child(3) {
          font-size: 35px;
          text-align: center;
        }
        & > div:nth-child(5) {
          & > div {
            font-size: 30px;
            text-align: center;
          }
          & > div:nth-child(1) {
            font-size: 30px;
            text-align: center;
          }
        }
      }
    }
    & > div:nth-child(5) {
      & > div:nth-child(2) {
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            padding: 15px 38px 15px 64px;
            line-height: 1.6;
            font-size: 24px;
          }
        }
      }
    }
    & > div:nth-child(6) {
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          padding-left: 18%;
        }
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            font-size: 20px;
            padding-top: 20px;
            line-height: 1.4;
            & > div:nth-child(2) {
              margin-top: 20px;
            }
          }
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(1) {
          padding-right: 18%;
        }
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            font-size: 20px;
            padding-top: 20px;
            line-height: 1.5;
            & > div:nth-child(2) {
              margin-top: 20px;
            }
          }
        }
      }
    }
    & > div:nth-child(7) {
      & > div:nth-child(2) {
        & > div {
          max-width: 25%;
          align-items: center;
          & > div:nth-child(2) {
            text-align: center;
          }
        }
      }
    }
    & > div:nth-child(8) {
      & > div:nth-child(2) {
        & > div {
          & > div:nth-child(1) {
            width: max-content;
            padding-right: 30px;
          }
        }
      }
    }
    & > div:nth-child(9) {
      & > div:nth-child(2) {
        & > div {
          height: auto;
          padding-bottom: 30px;
        }
      }
    }
  }
}
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
.maculopathy_button_bg_color {
  cursor: pointer;
  width: 580px;
  height: 140px;
  margin: auto;
  background-blend-mode: normal, normal;
  border-radius: 14px;
  font-family: 'Noto Sans HK';
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 50px;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  // text-shadow: 0 2px 5px #f0a87d;
  text-shadow: 0 2px 5px rgba($color: #000000, $alpha: 0.5);
  &::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    bottom: -100%;
    right: -100%;
    background: linear-gradient(45deg, #d7e9ea 0%, #50ace0 100%);
    background-size: 100% 100%;
    animation: bgposition 5s infinite linear alternate;
    z-index: -1;
  }
}
.maculopathy_color_title {
  text-align: center;
  font-family: 'NotoSansHK-Bold';
  font-size: 38px;
  font-weight: 700;
  font-stretch: normal;
  line-height: 52px;
  letter-spacing: 0px;
  color: #a18a5a;
}
.dow {
  margin-top: -35%;
  margin-bottom: 233px;
  color: #fff;
  font-size: 30px;
  & > div:nth-child(1) {
    & > div {
      width: 62.5%;
      height: 202px;
      background: #dec692;
      position: relative;
      display: flex;
      align-items: center;
      & > a:nth-child(1) {
        margin-left: 520px;
        margin-right: 75px;
        cursor: pointer;
        & > img {
          width: 64px;
          height: auto;
        }
      }
      & > a:nth-child(2) {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .maculopathy_nav {
    transform: scale(1);
    margin: -50px 0 0;
    & > div:nth-child(1) {
      width: calc(100% - 60px);
      margin: 0 auto;
      & > div:nth-child(1) {
        font-size: 24px;
        line-height: 1.6;
        text-align: center;
        margin-bottom: 20px;
      }
      & > div:nth-child(2) {
        font-size: 14px;
        line-height: 2;
        margin-left: 0;
      }
    }
    & > div:nth-child(2) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        margin-top: 45px;
        flex-wrap: wrap;
        & > div {
          width: calc(50% - 30px);
          margin-bottom: 60px;
          & > div:nth-child(2) {
            font-size: 14px;
            line-height: 1.6;
            white-space: initial;
            margin: 20px auto 0;
          }
          &:nth-of-type(1) {
            & > div:nth-child(2) {
              width: 75px;
            }
          }
          &:nth-of-type(2) {
            & > div:nth-child(2) {
              width: 68px;
            }
          }
          &:nth-of-type(4) {
            & > div:nth-child(2) {
              width: 100px;
            }
          }
        }
      }
    }
    & > div:nth-child(3) {
      width: calc(100% - 60px);
      margin: 0 auto;
      & > div:nth-child(2) {
        margin-top: 45px;
        flex-direction: column;
        & > div:nth-child(1) {
          & > div:nth-child(1) {
            font-size: 16px;
            line-height: 1.6;
          }
          & > div:nth-child(2) {
            font-size: 16px;
            width: 120px;
            height: 34px;
            line-height: 34px;
            margin-top: 30px;
            margin-bottom: 35px;
          }
          & > div:nth-child(3),
          & > div:nth-child(4),
          & > div:nth-child(5),
          & > div:nth-child(6) {
            font-size: 14px;
            line-height: 1.8;
            margin-bottom: 35px;
            & > span {
              width: 28px;
              min-width: 28px;
              height: 28px;
              font-size: 20px;
              line-height: 28px;
              margin-top: -5px;
            }
          }
        }
        & > div:nth-child(2) {
          width: 80%;
          margin: 0 auto;
          & > span {
            font-size: 14px;
            margin-top: 10px;
          }
        }
      }
      & > div:nth-child(3) {
        margin-top: 45px;
        & > div:nth-child(1) {
          font-size: 20px;
        }
        & > div:nth-child(2) {
          font-size: 13px;
          margin-top: 22px;
          line-height: 1.8;
          margin-bottom: 22px;
        }
        & > div:nth-child(3) {
          flex-direction: column;
          & > div {
            flex-wrap: wrap;
            flex-direction: row;
            margin-bottom: 40px;
            & > div:nth-child(1) {
              width: 100%;
              height: 50px;
              font-size: 20px;
              line-height: 50px;
            }
            & > div:nth-child(2) {
              width: 50%;
              margin-top: 0;
              padding: 35px 8px 35px 15px;
            }
            & > svg:nth-child(3) {
              width: 32px;
              height: 32px;
              left: 50%;
              transform: translateX(-50%) rotate(-90deg);
              image {
                width: 100%;
                height: 100%;
              }
            }
            & > div:nth-child(4) {
              width: 50%;
              margin: 0;
              padding: 35px 15px 35px 8px;
            }
          }
        }
        & > div:last-child {
          margin-top: 30px;
        }
      }
    }
    & > div:nth-child(4) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        padding: 0;
        margin: 0;
        & > div:nth-child(1) {
          width: 70px;
          height: 70px;
          min-width: 70px;
          font-size: 16px;
          line-height: 1.2;
        }
        & > svg {
          width: 40px;
          height: 10px;
          path {
            transform: scale(0.4) translate(-10vw, 0);
          }
        }
        & > div:nth-child(3) {
          width: 65px;
          height: 65px;
          min-width: 65px;
          font-size: 14px;
          line-height: 1.2;
          margin-left: 0px;
        }
        & > div:nth-child(4) {
          margin-right: 0;
          width: 7vw;
          svg {
            z-index: -1;
            transform-origin: left center;
            // transform: scale(.3) translate(-50vw,30px);
            &:nth-of-type(1) {
              // transform-origin: left center;
              // transform: scale(.3) translate(-50vw,30px);
              transform: scale(0.3) translate(-17vw, 70px) rotate(-10deg);
            }
            &:nth-of-type(2) {
              transform: scale(0.3) translate(-12vw, -30px);
            }
          }
        }
        & > div:nth-child(5) {
          & > div {
            width: 60px;
            height: 60px;
            min-width: 60px;
            font-size: 12px;
            line-height: 1.2;
          }
        }
      }
    }
    & > div:nth-child(5) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        margin-top: 0;
        flex-direction: column;
        margin-left: 0;
        & > div:nth-child(1) {
          position: relative;
          transform: scale(1);
          margin-top: 30px;
          img {
            width: 60%;
            margin: 0 auto;
          }
        }
        & > div:nth-child(2) {
          margin-left: 0;
          border: 2px solid #dec692;
          width: 100%;
          svg {
            display: none;
          }
          & > div:nth-child(2) {
            padding: 22px 12px;
            font-size: 14px;
            line-height: 1.8;
            position: relative;
          }
        }
      }
    }
    & > div:nth-child(6) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        margin-top: 0;
      }
      & > div:nth-child(2),
      & > div:nth-child(3) {
        transform: scale(1);
        & > div:nth-child(1) {
          font-size: 20px;
          text-align: right;
          // margin-right: 20px;
          margin-top: 50px;
          font-size: 6vw;
          margin-left: 50%;
          width: 50%;
          text-align: center;
          margin-bottom: 0;
        }
        & > div:nth-child(2) {
          // margin-top: -5px;
          flex-direction: column;
          margin-bottom: 0;
          & > div:nth-child(1) {
            width: 50%;
            height: auto;
            margin-left: 0;
            margin-top: 0;
            position: absolute;
            top: 0;
            transform: translateY(-70%);
          }
          & > div:nth-child(2) {
            position: relative;
            // margin-top: -10px;
            width: 100%;
            height: auto;
            font-size: 14px;
            padding: 60px 15px 15px;
            line-height: 1.8;
            & > div:nth-child(2) {
              margin-top: 25px;
            }
          }
        }
      }
      & > div:nth-child(3) {
        // margin-top: 100px;
        & > div:nth-child(1) {
          font-size: 20px;
          text-align: left;
          margin-left: 0;
          width: 50%;
          text-align: center;
          font-size: 6vw;
        }
        & > div:nth-child(2) {
          margin-right: 0;
          & > div:nth-child(1) {
            left: auto;
            right: 0;
          }
          & > div:nth-child(2) {
            padding: 60px 15px 15px;
          }
        }
      }
    }
    & > div:nth-child(7) {
      width: calc(100% - 60px);
      margin: 120px auto 0;
      & > div:nth-child(2) {
        margin-top: 40px;
        & > div {
          margin-bottom: 50px;
          align-items: center;
          justify-content: flex-start;
          width: calc(50% - 10px);
          & > div:nth-child(2) {
            font-size: 14px;
            height: auto;
          }
          &:last-child {
            width: 100%;
            & > div:nth-child(1) {
              width: calc(50% - 25px);
            }
          }
        }
        & > div:nth-child(1) {
          margin-left: 0;
        }
        & > div:nth-child(3) {
          margin-right: 0;
        }
        & > div:nth-child(n + 4) {
          margin-top: 0;
        }
      }
    }
    & > div:nth-child(8) {
      width: calc(100% - 60px);
      margin: 20px auto 0;
      & > div:nth-child(2) {
        margin-top: 35px;
        margin-bottom: 0;
        & > div {
          margin-bottom: 50px;
          & > div:nth-child(1) {
            font-size: 18px;
            padding: 0 20px;
            width: max-content;
            // height: 40px;
            height: auto;
            line-height: 40px;
            border-radius: 0 20px 0 0;
            margin-bottom: 15px;
          }
          & > div:nth-child(2) {
            font-size: 14px;
            line-height: 1.8;
          }
        }
        & > div:nth-child(3) {
          & > div:nth-child(1) {
            width: max-content;
          }
        }
        & > div:nth-child(4) {
          & > div:nth-child(1) {
            // width: max-content;
            width: 100%;
            max-width: max-content;
          }
        }
      }
    }
    & > div:nth-child(9) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        margin-top: 45px;
        & > div {
          width: calc(50% - 25px);
          height: auto;
          margin-bottom: 50px;
          & > div:nth-child(2) {
            font-size: 14px;
            height: auto;
            line-height: 1.6;
            margin: 16px 0 10px;
          }
          & > div:nth-child(3) {
            font-size: 12px;
            padding: 0 20px 15px;
            line-height: 1.8;
          }
        }
        & > div:nth-child(n + 4) {
          margin-top: 0;
          & > div:nth-child(2) {
            height: auto;
          }
        }
      }
    }
    & > :last-child {
      width: calc(100% - 60px);
      margin: 20px auto 0;
      & > div:first-child {
        margin-bottom: 30px;
      }
    }
    &.maculopathyNav-en {
      & > div:nth-child(2) {
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            & > div:nth-child(2) {
              width: auto;
            }
          }
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(3) {
          & > div:nth-child(3) {
            & > div {
              & > div:nth-child(1) {
                height: auto;
                min-height: 50px;
                line-height: 1.6;
              }
            }
          }
        }
      }
      & > div:nth-child(4) {
        width: 100%;
        & > div:nth-child(2) {
          & > div:nth-child(1) {
            font-size: 14px;
            width: 100px;
            height: 100px;
            min-width: 100px;
          }
          & > div:nth-child(3) {
            font-size: 12px;
            margin-left: 0;
            width: 90px;
            height: 90px;
            min-width: 90px;
          }
          & > div:nth-child(4) {
            margin-left: 20px;
          }
          & > div:nth-child(5) {
            & > div {
              font-size: 12px;
              width: 80px;
              height: 80px;
            }
            & > div:nth-child(1) {
              font-size: 12px;
            }
          }
        }
      }
      & > div:nth-child(5) {
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            & > div:nth-child(2) {
              padding: 22px 12px;
              font-size: 14px;
            }
          }
        }
      }
      & > div:nth-child(6) {
        & > div:nth-child(2) {
          & > div:nth-child(1) {
            padding-left: 0;
            margin-left: 50%;
            text-align: right;
            width: 50%;
            line-height: 1.6;
          }
          & > div:nth-child(2) {
            & > div:nth-child(2) {
              font-size: 14px;
              padding-top: 40px;
            }
          }
        }
        & > div:nth-child(3) {
          & > div:nth-child(1) {
            padding-right: 0;
            margin-right: 50%;
            margin-left: 0;
            text-align: left;
            width: 50%;
            line-height: 1.6;
          }
          & > div:nth-child(2) {
            & > div:nth-child(2) {
              font-size: 14px;
              padding-top: 40px;
            }
          }
        }
      }
      & > div:nth-child(7) {
        & > div:nth-child(2) {
          & > div {
            max-width: 50%;
            &:last-child {
              width: 100%;
              max-width: 100%;
            }
          }
        }
      }
      & > div:nth-child(8) {
        & > div:nth-child(2) {
          & > div:nth-child(3) {
            & > div:nth-child(1) {
              height: auto;
              max-width: 100%;
            }
          }
        }
      }
      & > div:nth-child(9) {
        & > div:nth-child(2) {
          & > div {
            padding-bottom: 0;
            & > div:nth-child(3) {
              padding: 0 10px 15px;
            }
          }
        }
      }
    }
  }
  .maculopathy_button_bg_color {
    margin-top: 55px;
    width: max-content;
    max-width: 100%;
    height: 70px;
    font-size: 16px;
    line-height: 1.6;
    padding: 5px 30px;
  }
  .maculopathy_color_title {
    font-size: 22px;
    line-height: 1.6;
  }
  .dow {
    margin-top: 100px;
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
    &.dow-en {
      & > div:nth-child(1) {
        & > div {
          & > div:nth-child(2) {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1980px) {
  .dow {
    margin-top: -20%;
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

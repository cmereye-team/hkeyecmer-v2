<script lang="ts" setup>
import { getPdf } from '@/assets/js/common'
definePageMeta({
  layout: 'page',
})
const locale = useState<string>('locale.setting')
// 传递背景色
const backgd = [
  '#b6b3e0;',
  '-webkit-linear-gradient(to right, #b6b3e0, #cfcee6);',
  'linear-gradient(to right, #b6b3e0, #cfcee6);',
]
// 什麼是乾眼症
const xerophthalmiaType = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/e9b7f8f01ed8bafc.png',
    text: 'pages.medical_service.xerophthalmia_con.xerophthalmiaType.text1',
    img_alt: '眼睛乾澀為乾眼症症狀',
    img_title: '乾眼症症狀_眼睛乾澀',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/2429bd6a29fb645c.png',
    text: 'pages.medical_service.xerophthalmia_con.xerophthalmiaType.text2',
    img_alt: '眼睛疲倦為乾眼症症狀',
    img_title: '乾眼症症狀_眼睛疲倦',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/f79ac0c36913185d.png',
    text: 'pages.medical_service.xerophthalmia_con.xerophthalmiaType.text3',
    img_alt: '眼睛異物感為乾眼症症狀',
    img_title: '乾眼症症狀_眼睛異物感',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/c0fd1f575a8b07cc.png',
    text: 'pages.medical_service.xerophthalmia_con.xerophthalmiaType.text4',
    img_alt: '眼睛灼熱感為乾眼症症狀',
    img_title: '乾眼症症狀_眼睛灼熱感',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/4623f3b40418874b.png',
    text: 'pages.medical_service.xerophthalmia_con.xerophthalmiaType.text5',
    img_alt: '眼睛分泌物為乾眼症症狀',
    img_title: '乾眼症症狀_眼睛分泌物',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/4b9fe2d23526754a.png',
    text: 'pages.medical_service.xerophthalmia_con.xerophthalmiaType.text6',
    img_alt: '眼睛紅腫為乾眼症症狀',
    img_title: '乾眼症症狀_眼睛紅腫',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a7e034924424d921.png',
    text: 'pages.medical_service.xerophthalmia_con.xerophthalmiaType.text7',
    img_alt: '畏光為乾眼症症狀',
    img_title: '乾眼症症狀_畏光',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/6271382192cc8a11.png',
    text: 'pages.medical_service.xerophthalmia_con.xerophthalmiaType.text8',
    img_alt: '角膜破皮為乾眼症症狀',
    img_title: '乾眼症症狀_角膜破皮',
  },
]
const factor = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a3f259e078ea72a5.png',
    mbImg: 'https://static.cmereye.com/imgs/2023/07/0aa695d446127914.jpg',
    title: 'pages.medical_service.xerophthalmia_con.factor.title1',
    text: 'pages.medical_service.xerophthalmia_con.factor.text1',
    img_title: '淚膜_脂質層',
    img_alt: '淚膜中的脂質層',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/4636b55143dcbe36.png',
    mbImg: 'https://static.cmereye.com/imgs/2023/07/473ad45c51c10398.jpg',
    title: 'pages.medical_service.xerophthalmia_con.factor.title2',
    text: 'pages.medical_service.xerophthalmia_con.factor.text2',
    img_title: '淚膜_水液層',
    img_alt: '淚膜中的水液層',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/b2645285665a9dfe.png',
    mbImg: 'https://static.cmereye.com/imgs/2023/07/d37cda7797106efa.jpg',
    title: 'pages.medical_service.xerophthalmia_con.factor.title3',
    text: 'pages.medical_service.xerophthalmia_con.factor.text3',
    img_title: '淚膜_黏液層',
    img_alt: '淚膜中的黏液層',
  },
]
const tearFilm = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/4b8a7f27d3efb04c.png',
    title: 'pages.medical_service.xerophthalmia_con.factor.tearFilm[0].title',
    text: ['pages.medical_service.xerophthalmia_con.factor.tearFilm[0].text'],
    img_title: '乾眼症成因',
    img_alt: '脂質層分泌不足為乾眼症成因',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/cb6ed9e181f060df.png',
    title: 'pages.medical_service.xerophthalmia_con.factor.tearFilm[1].title',
    text: [
      'pages.medical_service.xerophthalmia_con.factor.tearFilm[1].text',
      'pages.medical_service.xerophthalmia_con.factor.tearFilm[1].text2',
      'pages.medical_service.xerophthalmia_con.factor.tearFilm[1].text3',
      'pages.medical_service.xerophthalmia_con.factor.tearFilm[1].text4',
      'pages.medical_service.xerophthalmia_con.factor.tearFilm[1].text5',
      'pages.medical_service.xerophthalmia_con.factor.tearFilm[1].text6',
      'pages.medical_service.xerophthalmia_con.factor.tearFilm[1].text7',
    ],
    img_title: '乾眼症成因',
    img_alt: '水液層分泌不足為乾眼症成因',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/f0c095b2a5ff1d8e.png',
    title: 'pages.medical_service.xerophthalmia_con.factor.tearFilm[2].title',
    text: ['pages.medical_service.xerophthalmia_con.factor.tearFilm[2].text'],
    img_title: '乾眼症成因',
    img_alt: '黏液層分泌不足為乾眼症成因',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/2f4d44f6b2c6d83d.png',
    title: 'pages.medical_service.xerophthalmia_con.factor.tearFilm[3].title',
    text: [
      'pages.medical_service.xerophthalmia_con.factor.tearFilm[3].text',
      'pages.medical_service.xerophthalmia_con.factor.tearFilm[3].text2',
      'pages.medical_service.xerophthalmia_con.factor.tearFilm[3].text3',
    ],
    img_title: '乾眼症成因',
    img_alt: '淚水分泌不足為乾眼症成因',
  },
]
const category = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a9e66bca4e6780d0.png',
    title: 'pages.medical_service.xerophthalmia_con.category.title1',
    text: 'pages.medical_service.xerophthalmia_con.category.text1',
    img_title: '缺水型乾眼症',
    img_alt: '缺水型乾眼症為乾眼症類別',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/6b86edd7b9d813ec.png',
    title: 'pages.medical_service.xerophthalmia_con.category.title2',
    text: 'pages.medical_service.xerophthalmia_con.category.text2',
    img_title: '缺油型乾眼症',
    img_alt: '缺油型乾眼症為乾眼症類別',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/bde93bbfe96c35e9.png',
    title: 'pages.medical_service.xerophthalmia_con.category.title3',
    text: 'pages.medical_service.xerophthalmia_con.category.text3',
    img_title: '混合型乾眼症',
    img_alt: '混合型乾眼症為乾眼症類別',
  },
]
const highRisk = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/2b5ce4abba134883.png',
    text: 'pages.medical_service.xerophthalmia_con.highRisk.text1',
    img_title: '乾眼症高危人士_隱形眼鏡',
    img_alt: '長時間佩戴隱形眼鏡為乾眼症高危人士',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/421a73f210b33563.png',
    text: 'pages.medical_service.xerophthalmia_con.highRisk.text2',
    img_title: '乾眼症高危人士_長時間使用電子產品',
    img_alt: '辦公室女職員長時間使用電子產品為乾眼症高危人士',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/8661e3413fd98abf.png',
    text: 'pages.medical_service.xerophthalmia_con.highRisk.text3',
    img_title: '乾眼症高危人士_過量藥物',
    img_alt: '服用過量藥物患者為乾眼症高危人士',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/933a2eee445d7e09.png',
    text: 'pages.medical_service.xerophthalmia_con.highRisk.text4',
    img_title: '乾眼症高危人士_空調環境',
    img_alt: '患者長期處於空調環境下為乾眼症高危人士',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/3d263ab67d6aa0e8.png',
    text: 'pages.medical_service.xerophthalmia_con.highRisk.text5',
    img_title: '乾眼症高危人士_免疫系統疾病',
    img_alt: '免疫系統疾病患者為乾眼症高危人士',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/3267576cc1afabaa.png',
    text: 'pages.medical_service.xerophthalmia_con.highRisk.text6',
    img_title: '乾眼症高危人士_更年期',
    img_alt: '表現疲憊姿態的更年期婦女為乾眼症高危人士',
  },
]
const fourthly = [
  [
    'pages.medical_service.xerophthalmia_con.fourthly.tables.th_1',
    'pages.medical_service.xerophthalmia_con.fourthly.tables.th_2',
    'pages.medical_service.xerophthalmia_con.fourthly.tables.th_3',
    'pages.medical_service.xerophthalmia_con.fourthly.tables.th_4',
    'pages.medical_service.xerophthalmia_con.fourthly.tables.th_5',
  ],
  [
    'pages.medical_service.xerophthalmia_con.fourthly.tables.tb_1',
    'pages.medical_service.xerophthalmia_con.fourthly.tables.tb_2',
    'pages.medical_service.xerophthalmia_con.fourthly.tables.tb_3',
    'pages.medical_service.xerophthalmia_con.fourthly.tables.tb_4',
    'pages.medical_service.xerophthalmia_con.fourthly.tables.tb_5',
  ],
  [
    'pages.medical_service.xerophthalmia_con.fourthly.tables.tb_6',
    'pages.medical_service.xerophthalmia_con.fourthly.tables.tb_7',
    'pages.medical_service.xerophthalmia_con.fourthly.tables.tb_8',
    'pages.medical_service.xerophthalmia_con.fourthly.tables.tb_9',
    'pages.medical_service.xerophthalmia_con.fourthly.tables.tb_10',
  ],
]
const process = [
  {
    id: '1',
    text: 'pages.medical_service.xerophthalmia_con.fourthly.process1',
  },
  {
    id: '2',
    text: 'pages.medical_service.xerophthalmia_con.fourthly.process2',
  },
  {
    id: '3',
    text: 'pages.medical_service.xerophthalmia_con.fourthly.process3',
  },
  {
    id: '4',
    text: 'pages.medical_service.xerophthalmia_con.fourthly.process4',
  },
]
const testMethod = [
  {
    id: '1',
    title:
      'pages.medical_service.xerophthalmia_con.fourthly.testMethod[0].title',
    text: [
      'pages.medical_service.xerophthalmia_con.fourthly.testMethod[0].text1',
      'pages.medical_service.xerophthalmia_con.fourthly.testMethod[0].text2',
    ],
  },
  {
    id: '2',
    title:
      'pages.medical_service.xerophthalmia_con.fourthly.testMethod[1].title',
    text: [
      'pages.medical_service.xerophthalmia_con.fourthly.testMethod[1].text',
    ],
  },
]
const means = [
  {
    title: 'pages.medical_service.xerophthalmia_con.means.name6_1',
    text: 'pages.medical_service.xerophthalmia_con.means.text6_1',
  },
  {
    title: 'pages.medical_service.xerophthalmia_con.means.name6_2',
    text: 'pages.medical_service.xerophthalmia_con.means.text6_2',
  },
  {
    title: 'pages.medical_service.xerophthalmia_con.means.name6_3',
    text: 'pages.medical_service.xerophthalmia_con.means.text6_3',
  },
]
// 其他紓緩眼乾症狀的方法︰
const wayOther = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/7caf90b190bdd2cc.png',
    text: 'pages.medical_service.xerophthalmia_con.means.text5_1',
    img_title: '乾眼症舒緩',
    img_alt: '避免服用減少淚液分泌藥物為乾眼症舒緩方法',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/e69cbe139e039d40.png',
    text: 'pages.medical_service.xerophthalmia_con.means.text5_2',
    img_title: '乾眼症舒緩_免疫抑制劑',
    img_alt: '使用免疫抑制劑為乾眼症舒緩方法',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/82c69bfc9bef143a.png',
    text: 'pages.medical_service.xerophthalmia_con.means.text5_3',
    img_title: '眼症舒緩_隱形眼鏡',
    img_alt: '減少配戴隱形眼鏡為乾眼症舒緩方法',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/d2cfb7e362fe19ea.png',
    text: 'pages.medical_service.xerophthalmia_con.means.text5_4',
    img_title: '乾眼症舒緩_補充水份',
    img_alt: '補充水份為乾眼症舒緩方法',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/20403c32e3ae1ccf.png',
    text: 'pages.medical_service.xerophthalmia_con.means.text5_5',
    img_title: '乾眼症舒緩_護眼食物',
    img_alt: '多吃護眼食物為乾眼症舒緩方法',
  },
]
// 預防乾眼症
const prevent = [
  {
    title: 'pages.medical_service.xerophthalmia_con.prevent.title1',
    text: 'pages.medical_service.xerophthalmia_con.prevent.text1',
  },
  {
    title: 'pages.medical_service.xerophthalmia_con.prevent.title2',
    text: 'pages.medical_service.xerophthalmia_con.prevent.text2',
  },
  {
    title: 'pages.medical_service.xerophthalmia_con.prevent.title3',
    text: 'pages.medical_service.xerophthalmia_con.prevent.text3',
  },
  {
    title: 'pages.medical_service.xerophthalmia_con.prevent.title4',
    text: 'pages.medical_service.xerophthalmia_con.prevent.text4',
  },
  {
    title: 'pages.medical_service.xerophthalmia_con.prevent.title5',
    text: 'pages.medical_service.xerophthalmia_con.prevent.text5',
  },
  {
    title: 'pages.medical_service.xerophthalmia_con.prevent.title6',
    text: 'pages.medical_service.xerophthalmia_con.prevent.text6',
  },
]
const { t } = useLang()
useHead(() => ({
  title: t('pages.medical_service.xerophthalmia_head'),
  meta() {
    return [
      {
        hid: 'xerophthalmiaDesc',
        name: 'description',
        content: t('tdk.xerophthalmia.desc'),
      },
      {
        hid: 'xerophthalmiaKey',
        name: 'keywords',
        content: t('tdk.xerophthalmia.key'),
      },
    ]
  },
}))
// 内部导航
const serviceNavigation = [
  {
    anchorName: 'pages.medical_service.xerophthalmia_con.navLists.name1',
    anchorLink: '/medical-service/xerophthalmia#xerophthalmiaInfo',
  },
  {
    anchorName: 'pages.medical_service.xerophthalmia_con.navLists.name2',
    anchorLink: '/medical-service/xerophthalmia#xerophthalmiaType',
  },
  {
    anchorName: 'pages.medical_service.xerophthalmia_con.navLists.name3',
    anchorLink: '/medical-service/xerophthalmia#factor',
  },
  {
    anchorName: 'pages.medical_service.xerophthalmia_con.navLists.name4',
    anchorLink: '/medical-service/xerophthalmia#category',
  },
  {
    anchorName: 'pages.medical_service.xerophthalmia_con.navLists.name5',
    anchorLink: '/medical-service/xerophthalmia#highRisk',
  },
  {
    anchorName: 'pages.medical_service.xerophthalmia_con.navLists.name6',
    anchorLink: '/medical-service/xerophthalmia#fourthly',
  },
  {
    anchorName: 'pages.medical_service.xerophthalmia_con.navLists.name7',
    anchorLink: '/medical-service/xerophthalmia#means',
  },
  {
    anchorName: 'pages.medical_service.xerophthalmia_con.navLists.name8',
    anchorLink: '/medical-service/xerophthalmia#prevent',
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
  pcSrc: 'https://static.cmereye.com/static/hkcmereye/bannerzip/乾眼症1.png',
  mbSrc: 'https://static.cmereye.com/static/hkcmereye/bannerzip/乾眼症2.png',
  cnName: '乾眼症',
  enName: 'DRY EYES',
  textColor: '#8F8BCA',
}
</script>

<template>
  <div>
    <PageServiceBanner :bannerData="bannerData" />
    <div class="xeroheader">
      <div></div>
      <serviceNav :arrData="serviceNavigation" :pageName="'xeroheader'" />
      <!-- 内容 -->
      <div
        class="xerophthalmia"
        :class="{ 'xerophthalmia-en': locale === 'en' }"
      >
        <!-- 什麼是乾眼症 -->
        <div id="xerophthalmiaInfo">
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.xerophthalmia_con.xerophthalmiaInfo.name'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.medical_service.xerophthalmia_con.xerophthalmiaInfo.text'
                )
              }}
            </div>
          </div>
          <div>
            <div>
              <img
                data-cfsrc="https://static.cmereye.com/imgs/2023/06/84382a189b0f3a65.png"
                srcset="
                  https://static.cmereye.com/imgs/2023/07/4c021489e013750f.jpg 768w,
                  https://static.cmereye.com/imgs/2023/06/84382a189b0f3a65.png
                "
                title="乾眼症症狀"
                alt="女患者眼睛不適為乾眼症症狀表現"
                src="https://static.cmereye.com/imgs/2023/06/84382a189b0f3a65.png"
              />
            </div>
          </div>
        </div>
        <!-- 乾眼症症狀 -->
        <div id="xerophthalmiaType">
          <div>
            {{
              $t(
                'pages.medical_service.xerophthalmia_con.xerophthalmiaType.name'
              )
            }}
          </div>
          <div>
            <div v-for="(item, index) in xerophthalmiaType" :key="index">
              <div>
                <img
                  :src="item.img"
                  :alt="item.img_alt"
                  :title="item.img_title"
                  srcset=""
                />
              </div>
              <div>{{ $t(item.text) }}</div>
            </div>
          </div>
          <!-- <div @click="goWhatsApp()"><span>{{$t('pages.medical_service.xerophthalmia_con.btn.name1_1')}}</span> <span>{{$t('pages.medical_service.xerophthalmia_con.btn.name1_2')}}</span></div> -->
          <div class="serviceBtnStyle">
            <service-button-icon
              :str="
                $t('pages.medical_service.xerophthalmia_con.btn.name1_1') +
                '\n' +
                $t('pages.medical_service.xerophthalmia_con.btn.name1_2')
              "
              :link="'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'"
              :type="'1'"
              :pageName="'xerophthalmia xerophthalmia1'"
            />
          </div>
        </div>
        <div class="youtobuvideo">
          <iframe
            src="https://www.youtube.com/embed/8e3lfr0VpJg?si=TBkLEuj20BQjTJ0K"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/fGC7YH8IG90?si=gqkd5NJ3dV0oOOdP"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <!-- 乾眼症成因 -->
        <div id="factor">
          <div>
            {{ $t('pages.medical_service.xerophthalmia_con.factor.name') }}
          </div>
          <div>
            <div>
              {{ $t('pages.medical_service.xerophthalmia_con.factor.context') }}
            </div>
            <div>
              <img
                src="https://hkcmereye.com/template/default/picture/gyz/Group83.jpg"
                title="乾眼症_淚膜三層"
                alt="乾眼症淚膜三層結構"
                v-if="locale === 'en'"
              />
              <img
                src="https://static.cmereye.com/imgs/2023/10/8bcf58c7b6d0adf8.jpg"
                title="乾眼症_淚膜三層"
                alt="乾眼症淚膜三層結構"
                v-else
              />
            </div>
          </div>
          <div>
            <div v-for="(item, index) in factor" :key="index">
              <div>
                <img
                  :data-cfsrc="item.img"
                  :srcset="`${item.mbImg} 768w, ${item.img}`"
                  :alt="item.img_alt"
                  :title="item.img_title"
                  :src="item.img"
                />
              </div>
              <div>
                <div>{{ $t(item.title) }}</div>
                <div>{{ $t(item.text) }}</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              {{
                $t('pages.medical_service.xerophthalmia_con.factor.context2')
              }}
            </div>
            <div>
              <div v-for="(item, index) in tearFilm" :key="index">
                <div>
                  <img
                    :src="item.img"
                    :alt="item.img_alt"
                    :title="item.img_title"
                  />
                </div>
                <div>
                  <div>{{ $t(item.title) }}</div>
                  <div v-for="(ele, index) in item.text" :key="index">
                    · {{ $t(ele) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 乾眼症的類別 -->
        <div id="category">
          <div>
            {{ $t('pages.medical_service.xerophthalmia_con.category.name') }}
          </div>
          <div>
            <div v-for="(item, index) in category" :key="index">
              <div>
                <img
                  :src="item.img"
                  :alt="item.img_alt"
                  :title="item.img_title"
                />
              </div>
              <div>
                <div>{{ $t(item.title) }}</div>
                <div>{{ $t(item.text) }}</div>
              </div>
            </div>
          </div>
          <!-- <div @click="goWhatsApp()">
            <div>{{$t('pages.medical_service.xerophthalmia_con.btn.name2')}}</div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10px" height="16px">
              <image x="0px" y="0px" width="10px" height="16px"
                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAQAAACFdibLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfnBQ8NHzi6ljvvAAAAe0lEQVQY013OsQ0CQQwF0RGbIRI4UkRKD9AARRDSF4I66ACJiB6ICIgPDcFqZe/Z2bP9ZcSjZ4tE49JRvWbG4kN7Rlz77LnOJtxyGt8sgTgEp0ccfKl6mRG1YwP8uMfe3q86eorMRA0PmSpOSHDhpyfBue+e6vnKbSb5A87Xw8Nh1W2mAAAAAElFTkSuQmCC" />
            </svg>
          </div> -->
          <div class="serviceBtnStyle">
            <service-button
              :str="$t('pages.medical_service.xerophthalmia_con.btn.name2')"
              :link="'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'"
              :pageName="'xerophthalmia'"
            />
          </div>
        </div>
        <!-- 患乾眼症的高危人士 -->
        <div id="highRisk">
          <div>
            {{ $t('pages.medical_service.xerophthalmia_con.highRisk.name') }}
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
          <!-- <div @click="callTel()">
            <div>{{$t('pages.medical_service.xerophthalmia_con.btn.name3')}}</div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10px" height="16px">
              <image x="0px" y="0px" width="10px" height="16px"
                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAQAAACFdibLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfnBQ8NHzi6ljvvAAAAe0lEQVQY013OsQ0CQQwF0RGbIRI4UkRKD9AARRDSF4I66ACJiB6ICIgPDcFqZe/Z2bP9ZcSjZ4tE49JRvWbG4kN7Rlz77LnOJtxyGt8sgTgEp0ccfKl6mRG1YwP8uMfe3q86eorMRA0PmSpOSHDhpyfBue+e6vnKbSb5A87Xw8Nh1W2mAAAAAElFTkSuQmCC" />
            </svg>
          </div> -->
          <div class="serviceBtnStyle">
            <service-button-icon
              :str="$t('pages.medical_service.xerophthalmia_con.btn.name3')"
              :link="'tel: +852 3956 2025'"
              :type="'2'"
              :pageName="'xerophthalmia'"
            />
          </div>
        </div>
        <!-- 乾眼症的診斷 -->
        <div id="fourthly">
          <div>
            {{ $t('pages.medical_service.xerophthalmia_con.fourthly.name') }}
          </div>
          <div>
            <div>
              {{
                $t('pages.medical_service.xerophthalmia_con.fourthly.context1')
              }}
            </div>
            <div>
              {{ $t('pages.medical_service.xerophthalmia_con.fourthly.name2') }}
            </div>
            <div>
              <div v-for="(item, index) in fourthly" :key="index">
                <div v-for="(it, i) in item" :key="i">
                  <div>{{ $t(it) }}</div>
                </div>
              </div>
            </div>
            <div>
              {{ $t('pages.medical_service.xerophthalmia_con.fourthly.name3') }}
            </div>
            <div>
              <div v-for="(item, i) in process" :key="i">
                <div>
                  <div>setp</div>
                  <div>{{ item.id }}</div>
                </div>
                <div>{{ $t(item.text) }}</div>
              </div>
            </div>
            <!-- 常見診斷測試 -->
            <div>
              <div>
                {{
                  $t('pages.medical_service.xerophthalmia_con.fourthly.name4')
                }}
              </div>
              <div>
                <div>
                  <div v-for="(item, i) in testMethod" :key="i">
                    <div>
                      <div>{{ item.id }}</div>
                      <div>{{ $t(item.title) }}</div>
                    </div>
                    <div v-for="(ele, index) in item.text" :key="index">
                      <div>{{ $t(ele) }}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/05/96be300a751eee94.png"
                    title="乾眼症自我檢測_淚液測試"
                    alt="淚液測試試紙為乾眼症自我檢測方法"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- <div @click="callTel()">
            <div>{{$t('pages.medical_service.xerophthalmia_con.btn.name4')}}</div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10px" height="16px">
              <image x="0px" y="0px" width="10px" height="16px"
                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAQAAACFdibLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfnBQ8NHzi6ljvvAAAAe0lEQVQY013OsQ0CQQwF0RGbIRI4UkRKD9AARRDSF4I66ACJiB6ICIgPDcFqZe/Z2bP9ZcSjZ4tE49JRvWbG4kN7Rlz77LnOJtxyGt8sgTgEp0ccfKl6mRG1YwP8uMfe3q86eorMRA0PmSpOSHDhpyfBue+e6vnKbSb5A87Xw8Nh1W2mAAAAAElFTkSuQmCC" />
            </svg>
          </div> -->
          <div class="serviceBtnStyle">
            <service-button-icon
              :str="$t('pages.medical_service.xerophthalmia_con.btn.name4')"
              :link="'tel: +852 3956 2025'"
              :type="'1'"
              :pageName="'xerophthalmia'"
            />
          </div>
        </div>
        <!-- 乾眼症治療 -->
        <div id="means">
          <div>
            {{ $t('pages.medical_service.xerophthalmia_con.means.name') }}
          </div>
          <div>
            {{ $t('pages.medical_service.xerophthalmia_con.means.context') }}
          </div>
          <div>
            <div>
              {{ $t('pages.medical_service.xerophthalmia_con.means.name1') }}
            </div>
            <div v-for="(item, i) in means" :key="i">
              <div>{{ $t(item.title) }}</div>
              <div>{{ $t(item.text) }}</div>
            </div>
            <div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/05/bc830caf2d8498fa.png"
                  title="乾眼症治療_脈衝光治療"
                  alt="脈衝光治療為乾眼症治療方法"
                />
              </div>
              <div>
                <div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="76px"
                      height="63px"
                    >
                      <image
                        x="0px"
                        y="0px"
                        width="76px"
                        height="63px"
                        xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAA/CAMAAAB9/952AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACeVBMVEVtbZ5SUoBgYI9hYZBhYZFiYpJiYpJgYI9SUoBSUoBhYZBjY5NmZpdqappSUoBSUoBhYZBkZJRqaptSUoBhYZFnZ5hSUoBhYZBoaJhSUoBSUoBgYJBlZZVSUoBhYZFSUoBSUoBjY5NSUoBgYI9lZZVSUoBSUoBmZpZSUoBgYI9mZpZSUoBSUoBSUoBSUoBiYpJSUoBsbJ1SUoBSUoBpaZlSUoBkZJRSUoBSUoBgYJBSUoBSUoBSUoBgYJBSUoBkZJRSUoBra5xSUoBSUoBiYpJSUoBmZpZSUoBSUoBqaptSUoBhYZBSUoBSUoBjY5NSUoBlZZVSUoBSUoBnZ5dSUoBpaZpSUoBSUoBSUoBoaJhtbZ5ra5xtbZ5qapptbZ5tbZ5nZ5htbZ5lZZVtbZ5tbZ5jY5NtbZ5hYZFtbZ5tbZ5gYI9sbJxtbZ5nZ5dtbZ5tbZ5jY5NtbZ5gYI9tbZ5tbZ5mZpZtbZ5hYZFtbZ5tbZ5tbZ5hYZFtbZ5mZpZtbZ5tbZ5gYJBtbZ5iYpJtbZ5tbZ5lZZVtbZ5gYI9oaJhtbZ5tbZ5gYJBpaZptbZ5gYJBtbZ5tbZ5oaJltbZ5gYJBnZ5dtbZ5tbZ5tbZ5hYZFtbZ5tbZ5gYI9jY5NtbZ5gYI9kZJRtbZ5gYJBtbZ5hYZBkZJRnZ5dtbZ5gYJBiYpFkZJRlZZVlZZZmZpZoaJhtbZ5tbZ5tbZ5WVoVSUoBkZJRYWIdmZpdaWoloaJlsbJ1cXItqappTU4FeXo1ra5xTU4JgYI9UVINiYpFWVoRXV4ZmZpZZWYhnZ5hbW4ppaZpdXYxqaptfX45UVIJhYZFVVYRjY5NXV4VlZZX///884+zJAAAAsHRSTlMAAApIbX2OglUSUrDl+dIDSsf7RWvrtlnv+yof0ZZk8RaveATQ4AjhWALfyAH+Opar/vgi9ou26xAxbNgELE7Fvf39MYCe2vQa/H9D5QudYcjOAudC+LEnk0vE/k761APtYNPiCKpyYe0PBv6G6PUZnpgh+ybeq1X+Nb1dRtzOAShahtwFzmwM7ugNHfd+NfEW9ZAZ6fkho2f9LwiztSXBPxvIRbTqUTp5w83X49OqgztQCM8AAAABYktHRNLg2K6wAAAAB3RJTUUH5wUPDy8kclWFPQAAAmpJREFUWMOt1wV3FDEQwPHp4VJoixZ3KO5e3N3d4XB3b3F3d3cbDjukuDvfiF7h2Eyy2d1k+H+A39t9ySQvANpCuXLnyeuUL79fBTRQwUKFE1HqbsS7IkXdpKTkFHTpng9WLEGlipdATfc9rZKgYKVKo7YHXlZqGRkrWw69euiBlQcJq5DiaeEjvVWxkoRVjqJPj7VYFSBY1Wp+FOKTpxqreg2ChWr6W4jPNFgtELG02kEszHruatWpS7DkQBbiCzerXn0QsQYBLYy+dMEagoglNQqK4SvVatxExEJNA1sYfa1gzUDEmge3XOa9RUsRaxX8J2O9kbDWIGIBdqvYW2q1aSti6b5TJPWOYO1AxNobWvhetDqAiIU6mmL4wbE6dSZYF2MLPzpYVyBYN3MMP8Wt7j0o1tMC+xw/inoBwXpbWIhf/lh9+lKsnxWW9TUH6w8UG2CF4beYNXCQhA22w6Lfs7EhIGFD7TD8EYkMAxkz37J/+5k6XMFMB/Nfv0aAgtlaiCP/JzZKxUbba2MUbKw9Nm68jE2wx3CijE1iYJOnSFiYgeFUCZvGwabPoNjMWRxtNsVgDgebO49i8zkYLqDYQuvpjLVoMcFgCevTllJsGQtbvoJgvCXAlRRbxcJwNcFgDQtbm0GwTOuzO6d1BIP1LGzDRoLBJpa2mWJbtnKwbdsJBjt2crRdFIPdiQxsz16KQfo+hrZfwuDAQXvs0GEJgzSjxwXtiIwBHLVehmPHFQxOnDR7rTidUjGA02cs7/izLhjAubDBI8/pfIYblt2Fi5fML63LGiy2tFeuhq9dv3Ez3q3bft1J+A1XGwN3dGGhCAAAAABJRU5ErkJggg=="
                      />
                    </svg>
                    <div>1</div>
                  </div>
                  <div>
                    {{
                      $t(
                        'pages.medical_service.xerophthalmia_con.means.name7_1'
                      )
                    }}
                  </div>
                </div>
                <div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="76px"
                      height="63px"
                    >
                      <image
                        x="0px"
                        y="0px"
                        width="76px"
                        height="63px"
                        xlink:href="data:img/png;base64,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"
                      />
                    </svg>
                    <div>2</div>
                  </div>
                  <div>
                    {{
                      $t(
                        'pages.medical_service.xerophthalmia_con.means.name7_2'
                      )
                    }}
                  </div>
                </div>
                <div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="76px"
                      height="63px"
                    >
                      <image
                        x="0px"
                        y="0px"
                        width="76px"
                        height="63px"
                        xlink:href="data:img/png;base64,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"
                      />
                    </svg>
                    <div>3</div>
                  </div>
                  <div>
                    {{
                      $t(
                        'pages.medical_service.xerophthalmia_con.means.name7_3'
                      )
                    }}
                  </div>
                </div>
                <div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="76px"
                      height="63px"
                    >
                      <image
                        x="0px"
                        y="0px"
                        width="76px"
                        height="63px"
                        xlink:href="data:img/png;base64,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"
                      />
                    </svg>
                    <div>4</div>
                  </div>
                  <div>
                    {{
                      $t(
                        'pages.medical_service.xerophthalmia_con.means.name7_4'
                      )
                    }}
                  </div>
                </div>
                <div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="76px"
                      height="63px"
                    >
                      <image
                        x="0px"
                        y="0px"
                        width="76px"
                        height="63px"
                        xlink:href="data:img/png;base64,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"
                      />
                    </svg>
                    <div>5</div>
                  </div>
                  <div>
                    {{
                      $t(
                        'pages.medical_service.xerophthalmia_con.means.name7_5'
                      )
                    }}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                {{ $t('pages.medical_service.xerophthalmia_con.means.text7') }}
              </div>
            </div>
            <!-- 減少淚液流失 -->
            <div>
              <div>
                <div>
                  {{
                    $t('pages.medical_service.xerophthalmia_con.means.name1_2')
                  }}
                </div>
                <div>
                  {{
                    $t(
                      'pages.medical_service.xerophthalmia_con.means.context2_1'
                    )
                  }}
                </div>
                <div>
                  {{
                    $t(
                      'pages.medical_service.xerophthalmia_con.means.context2_2'
                    )
                  }}
                </div>
                <div>
                  {{
                    $t(
                      'pages.medical_service.xerophthalmia_con.means.context2_3'
                    )
                  }}
                </div>
              </div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/05/cf53e666d96890d0.png"
                  title="乾眼症治療_人工淚液"
                  alt="人工淚液為乾眼症治療方法"
                  srcset=""
                />
              </div>
            </div>
            <!-- 眼藥水 -->
            <div>
              <div>
                <div>
                  {{
                    $t('pages.medical_service.xerophthalmia_con.means.title2_1')
                  }}
                </div>
                <div>
                  {{
                    $t('pages.medical_service.xerophthalmia_con.means.text2_1')
                  }}
                </div>
              </div>
              <div>
                <div>
                  {{
                    $t('pages.medical_service.xerophthalmia_con.means.title2_2')
                  }}
                </div>
                <div>
                  {{
                    $t('pages.medical_service.xerophthalmia_con.means.text2_2')
                  }}
                </div>
              </div>
            </div>
            <!-- 減少淚液流失 配戴鞏膜鏡 -->
            <div>
              <div>
                <div>
                  {{
                    $t('pages.medical_service.xerophthalmia_con.means.name1_3')
                  }}
                </div>
                <div>
                  {{
                    $t('pages.medical_service.xerophthalmia_con.means.context3')
                  }}
                </div>
              </div>
              <div>
                <div>
                  {{
                    $t('pages.medical_service.xerophthalmia_con.means.name1_4')
                  }}
                </div>
                <div>
                  {{
                    $t('pages.medical_service.xerophthalmia_con.means.context4')
                  }}
                </div>
              </div>
            </div>
            <!-- 其他紓緩眼乾症狀的方法︰ -->
            <div>
              <div>
                {{
                  $t('pages.medical_service.xerophthalmia_con.means.name1_5')
                }}
              </div>
              <div>
                <div v-for="(item, index) in wayOther" :key="index">
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
          <!-- <div @click="callTel()">
            <div>{{$t('pages.medical_service.xerophthalmia_con.btn.name5_1')}}</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px"
                height="18px">
                <image x="0px" y="0px" width="18px" height="18px"
                  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfnBQ8RKjrjlcJhAAAAvElEQVQoz4XSoQ9BURTH8Z/HBEWU7E16NtL7M0RdsFEEQTSbJKuaJKiKZrpoGkl8mMYmfAV3nue9y++mc/fZzjnbEcJjxZEusj3hcuOVlh2NCVNORo4KCjNRYhxtP6pcMhKld7MAzzaTWBi0tA8uXIPOZOxIDA2b/kJiY1j7F8pzNaxpR6LCw7CR+fGpkYoi4XM3bEuPAQB76lEkqlyIp//dv8guruK7ZJj/R0I0OHyYle3Q0nRYcyJgRvYJKHJ9GjIJFIwAAAAASUVORK5CYII=" />
              </svg>
              <div>{{$t('pages.medical_service.xerophthalmia_con.btn.name5_2')}}</div>
            </div>
          </div> -->
          <div class="serviceBtnStyle">
            <service-button-icon
              :str="
                $t('pages.medical_service.xerophthalmia_con.btn.name5_1') +
                '\n' +
                $t('pages.medical_service.xerophthalmia_con.btn.name5_2')
              "
              :link="'tel: +852 3956 2025'"
              :type="'3'"
              :pageName="'xerophthalmia'"
            />
          </div>
        </div>
        <!-- 預防乾眼症 -->
        <div id="prevent">
          <div>
            {{ $t('pages.medical_service.xerophthalmia_con.prevent.name') }}
          </div>
          <div>
            <div v-for="(item, index) in prevent" :key="index">
              <div>{{ $t(item.title) }}</div>
              <div>{{ $t(item.text) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <!-- 右侧边导航 -->
      <div></div>
      <!-- 下载 -->
      <div class="dow">
        <div>
          <div>
            <a
              href="https://www.hkeyecmer.com/pdf/xerophthalmia.pdf"
              :download="'乾眼症'"
            >
              <img
                src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
                title="乾眼症"
                alt="乾眼症_小冊子"
                srcset=""
              />
            </a>
            <a
              href="https://www.hkeyecmer.com/pdf/xerophthalmia.pdf"
              :download="'乾眼症'"
            >
              <p>
                {{ $t('pages.medical_service.xerophthalmia_con.dow.text1') }}
              </p>
              <p>
                {{ $t('pages.medical_service.xerophthalmia_con.dow.text2') }}
              </p>
            </a>
          </div>
        </div>
      </div>
      <FormFooterInfo
        :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
        :co="`color:${'#b6b3e0;'}`"
      />
    </div>
    <PageFooterMenu />
  </div>
</template>

<style lang="scss" scoped>
.xerophthalmia {
  max-width: 1200px;
  margin: 100px auto -40%;
  position: relative;
  transform: scale(0.9);
  transform-origin: center top;

  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;

    & > div:nth-child(1) {
      width: 577px;
      margin-right: 60px;

      & > div:nth-child(1) {
        margin-bottom: 37px;
        font-family: 'NotoSansHK-Medium';
        font-size: 48px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 52px;
        letter-spacing: 0px;
        color: #525280;
      }

      & > div:nth-child(2) {
        font-family: 'NotoSansHK-Medium';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 42px;
        letter-spacing: 0px;
        color: #525280;
      }
    }
    & > div:nth-child(2) {
      & > div {
        & > img {
          width: 100%;
          position: relative;
          top: 60px;
          left: 60px;
        }
      }
      background: #f2f2f2;
      width: 633px;
      height: 606px;
      transform: scale(0.85);
    }
  }

  & > div:nth-child(2) {
    margin-top: 166px;
    padding: 0 70px;
    min-width: 1175px;

    & > div:nth-child(1) {
      font-family: 'NotoSansHK-Bold';
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #525280;
      text-align: center;
    }

    & > div:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 120px;

      & > div {
        width: 235px;
        white-space: pre-wrap;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > div:nth-child(1) {
          width: 145px;
          height: 120px;
          display: flex;
          align-items: center;

          & > img {
            width: 100%;
          }
        }

        & > div:nth-child(2) {
          margin-top: 33px;
          text-align: center;
          height: 65px;

          font-family: 'Noto Sans HK';
          font-size: 26px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 1.6;
          letter-spacing: 0px;
          color: #a9a6d2;
        }
      }

      & > div:nth-child(n + 5) {
        margin-top: 145px;
      }
    }
    & > div:nth-child(3) {
      // margin: auto;
      // cursor: pointer;
      margin-top: 118px;
      // background-blend-mode: normal, normal;
      // border-radius: 14px;
      // font-family: 'NotoSansHK-Medium';
      // font-size: 32px;
      // font-weight: normal;
      // font-stretch: normal;
      // letter-spacing: 0px;
      // color: #ffffff;
      // display: flex;
      // align-items: center;
      // justify-content: center;
      // flex-direction: column;
      // width: fit-content;
      // padding: 25px 160px;
      // line-height: 50px;
      // position: relative;
      // overflow: hidden;
      // -webkit-backface-visibility: hidden;
      // -webkit-transform: translate3d(0, 0, 0);
      // text-shadow: 0 2px 5px rgba($color: #000000, $alpha: .5);
      // &::before {
      //   content: "";
      //   position: absolute;
      //   top: -100%;
      //   left: -100%;
      //   bottom: -100%;
      //   right: -100%;
      //   background: linear-gradient(45deg,  #62AAEB 0%, #B7DDFF 100%);
      //   background-size: 100% 100%;
      //   animation: bgposition 5s infinite linear alternate;
      //   z-index: -1;
      // }
    }
  }
  & > div:nth-child(4) {
    margin-top: 117px;
    & > div:nth-child(1) {
      text-align: center;
      font-family: 'NotoSansHK-Bold';
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #525280;
    }
    & > div:nth-child(2) {
      margin-top: 68px;
      & > div:nth-child(1) {
        font-family: 'NotoSansHK-Medium';
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 36px;
        letter-spacing: 0px;
        color: #525280;
      }
      & > div:nth-child(2) {
        width: 100%;
        max-width: 1400px;
        margin: 60px auto 0;
        display: flex;
        justify-content: space-between;
        & > img {
          position: relative;
          height: auto;
          width: calc(100% - 280px);
          margin: 0 auto;
        }
      }
    }

    & > div:nth-child(3) {
      margin-top: 195px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      & > div {
        display: flex;
        position: relative;
        & > div:nth-child(1) {
          overflow: hidden;
          box-shadow: 2px 3px 13px 0px rgba(0, 0, 0, 0.15);
          border-radius: 22px;
        }
        & > div:nth-child(2) {
          top: 264px;
          padding: 0 34px;
          position: absolute;
          & > div:nth-child(1) {
            font-family: 'NotoSansHK-Bold';
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #ae7d1f;
            text-align: center;
          }
          & > div:nth-child(2) {
            margin-top: 38px;
            font-family: 'Noto Sans HK';
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 32px;
            letter-spacing: 0px;
            color: #515151;
          }
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(2) {
          & > div:nth-child(1) {
            color: #1b80a0;
          }
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          & > div:nth-child(1) {
            color: #595757;
          }
        }
      }
    }
    & > div:nth-child(4) {
      margin-top: 117px;
      & > div:nth-child(1) {
        margin-bottom: 49px;
        font-family: 'NotoSansHK-Medium';
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 36px;
        letter-spacing: 0px;
        color: #525280;
        text-align: center;
      }
      & > div:nth-child(2) {
        & > div {
          margin-top: 20px;
          background-image: linear-gradient(#f8f8f8, #f8f8f8),
            linear-gradient(#ffffff, #ffffff);
          background-blend-mode: normal, normal;
          border-radius: 15px;
          padding-left: 375px;
          display: flex;
          align-items: center;
          & > div:nth-child(2) {
            margin-left: 80px;
            font-family: 'Noto Sans HK';
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 32px;
            letter-spacing: 0px;
            color: #515151;
            & > div:nth-child(1) {
              font-family: 'NotoSansHK-Medium';
              font-size: 20px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 36px;
              letter-spacing: 0px;
              color: #ae7d1f;
              padding-bottom: 5px;
            }
          }
        }
        & > div:nth-child(1) {
          & > div:nth-child(2) {
            padding: 26px 0;
          }
        }
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            padding: 34px 0;

            & > div:nth-child(1) {
              color: #1b80a0;
            }
          }
        }

        & > div:nth-child(3) {
          & > div:nth-child(2) {
            padding: 29px 0;

            & > div:nth-child(1) {
              color: #1b80a0;
            }
          }
        }

        & > div:nth-child(4) {
          & > div:nth-child(2) {
            padding-top: 33px;
            padding-bottom: 40px;

            & > div:nth-child(1) {
              color: #3aaad2;
            }
          }
        }
      }
    }
  }

  & > div:nth-child(5) {
    margin-top: 180px;

    & > div:nth-child(1) {
      font-family: 'NotoSansHK-Bold';
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #525280;
      text-align: center;
    }

    & > div:nth-child(2) {
      margin-top: 80px;
      padding: 0 100px;

      & > div {
        margin-top: 79px;
        display: flex;
        align-items: center;
        position: relative;

        & > div:nth-child(1) {
          width: 173px;

          & > img {
            width: 100%;
          }
        }

        & > div:nth-child(2) {
          position: absolute;
          margin-left: 218px;

          & > div:nth-child(1) {
            font-family: 'NotoSansHK-Bold';
            font-size: 28px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #525280;
          }

          & > div:nth-child(2) {
            margin-top: 19px;
            font-family: 'Noto Sans HK';
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 30px;
            letter-spacing: 0px;
            color: #515151;
          }
        }
      }
    }

    & > div:nth-child(3) {
      // cursor: pointer;
      // margin: auto;
      margin-top: 148px;
      // background-blend-mode: normal, normal;
      // border-radius: 14px;
      // display: flex;
      // align-items: center;
      // justify-content: center;
      // font-family: 'NotoSansHK-Medium';
      // font-size: 32px;
      // font-weight: normal;
      // font-stretch: normal;
      // letter-spacing: 0px;
      // color: #ffffff;
      // width: fit-content;
      // padding: 25px 105px;
      // line-height: 50px;
      // position: relative;
      // overflow: hidden;
      // -webkit-backface-visibility: hidden;
      // -webkit-transform: translate3d(0, 0, 0);
      // text-shadow: 0 2px 5px rgba($color: #000000, $alpha: .5);
      // &::before {
      //   content: "";
      //   position: absolute;
      //   top: -100%;
      //   left: -100%;
      //   bottom: -100%;
      //   right: -100%;
      //   background: linear-gradient(45deg,  #62AAEB 0%, #B7DDFF 100%);
      //   background-size: 100% 100%;
      //   animation: bgposition 5s infinite linear alternate;
      //   z-index: -1;
      // }
      // svg{
      //   margin-top: 5px;
      //   margin-left: 20px;
      // }
    }
  }

  & > div:nth-child(6) {
    & > div:nth-child(1) {
      text-align: center;
      margin-top: 170px;
      font-family: 'NotoSansHK-Bold';
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #525280;
    }

    & > div:nth-child(2) {
      margin-top: 68px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      white-space: pre-wrap;

      & > div {
        width: 388px;
        height: 356px;
        background: #fff;
        box-shadow: 2px 3px 13px 0px rgba(0, 0, 0, 0.15);
        border-radius: 20px;

        & > div:nth-child(2) {
          margin-top: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;

          font-family: 'Noto Sans HK';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 0px;
          color: #515151;
        }
      }

      & > div:nth-child(n + 4) {
        margin-top: 80px;
      }
    }

    & > div:nth-child(3) {
      // cursor: pointer;
      // margin: auto;
      margin-top: 100px;
      // display: flex;
      // align-items: center;
      // justify-content: center;
      // background-blend-mode: normal, normal;
      // border-radius: 14px;

      // font-family: 'NotoSansHK-Medium';
      // font-size: 32px;
      // font-weight: normal;
      // font-stretch: normal;
      // line-height: 36px;
      // letter-spacing: 0px;
      // color: #ffffff;
      // width: fit-content;
      // padding: 25px 55px;
      // line-height: 50px;

      // &>svg {
      //   margin-top: 5px;
      //   margin-left: 20px;
      // }
      // position: relative;
      // overflow: hidden;
      // -webkit-backface-visibility: hidden;
      // -webkit-transform: translate3d(0, 0, 0);
      // text-shadow: 0 2px 5px rgba($color: #000000, $alpha: .5);
      // &::before {
      //   content: "";
      //   position: absolute;
      //   top: -100%;
      //   left: -100%;
      //   bottom: -100%;
      //   right: -100%;
      //   background: linear-gradient(45deg,  #62AAEB 0%, #B7DDFF 100%);
      //   background-size: 100% 100%;
      //   animation: bgposition 5s infinite linear alternate;
      //   z-index: -1;
      // }
    }
  }

  & > div:nth-child(7) {
    margin-top: 154px;

    & > div:nth-child(1) {
      text-align: center;
      font-family: 'NotoSansHK-Bold';
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #525280;
    }

    & > div:nth-child(2) {
      margin-top: 60px;

      & > div:nth-child(1) {
        border-radius: 10px;
        border: solid 2px #dbd9d9;
        padding: 47px 30px;

        font-family: 'NotoSansHK-Bold';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 44px;
        letter-spacing: 0px;
        color: #525280;
      }

      & > div:nth-child(2) {
        margin-top: 180px;
        text-align: center;

        font-family: 'NotoSansHK-Bold';
        font-size: 36px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 36px;
        letter-spacing: 0px;
        color: #525280;
      }

      & > div:nth-child(3) {
        margin-top: 90px;

        & > div {
          background-image: linear-gradient(-90deg, #a9a6d2 0%, #ffffff 100%);
          height: 121px;
          margin-top: 10px;
          display: flex;
          align-items: center;
          white-space: pre-wrap;
          text-align: center;

          & > div:nth-child(1) {
            font-size: 30px;
            color: #525280;
          }

          & > div:nth-child(2) {
            font-size: 30px;
            color: #8686b5;
          }

          & > div:nth-child(3) {
            font-size: 30px;
            color: #6d6d9e;
          }

          & > div:nth-child(4) {
            font-size: 30px;
            color: #525280;
          }

          & > div:nth-child(5) {
            font-size: 30px;
            color: #3c3c63;
          }

          & > div {
            font-family: 'Noto Sans HK';
            line-height: 36px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        & > div:nth-child(1) {
          font-family: 'NotoSansHK-Bold';
        }
      }

      & > div:nth-child(4) {
        margin-top: 100px;
        text-align: center;
        font-family: 'NotoSansHK-Bold';
        font-size: 36px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 36px;
        letter-spacing: 0px;
        color: #525280;
      }

      & > div:nth-child(5) {
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 43px;
        display: flex;
        justify-content: space-between;
        position: relative;

        & > div {
          width: 330px;
          border: solid 2px #dbd9d9;
          height: 266px;
          border-right: none;
          position: relative;

          & > div:nth-child(1) {
            position: absolute;
            width: 76px;
            height: 77px;
            background-color: #6d6d9e;
            border-radius: 50%;

            & > div:nth-child(1) {
              font-family: 'ArialMT';
              font-size: 12px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              text-transform: uppercase;
            }

            & > div:nth-child(2) {
              font-family: 'Metropolis-SemiBold';
              font-size: 45px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 42px;
              letter-spacing: 0px;
            }

            transform: translate(180%, -50%);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #fff;
            box-shadow: 0px 0px 0px 15px #ffffff;
          }

          & > div:nth-child(2) {
            padding-top: 76px;
            padding-left: 38px;
            padding-right: 35px;
            font-family: 'Noto Sans HK';
            font-size: 26px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 42px;
            letter-spacing: 0px;
            color: #525280;
          }
        }

        & > div::after {
          content: '';
          background: url('https://static.cmereye.com/imgs/2023/05/24a8fecc85da78e0.jpg');
          width: 15px;
          height: 46px;
          position: absolute;
          box-shadow: 0px 0px 0px 15px #ffffff;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        & > div:first-child::after {
          position: relative;
        }

        & > div:last-child {
          border-right: solid 2px #dbd9d9;
        }
      }

      & > div:nth-child(6) {
        margin-top: 134px;
        padding-right: 30px;

        & > div:nth-child(1) {
          font-family: 'NotoSansHK-Bold';
          font-size: 36px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #525280;
        }

        & > div:nth-child(2) {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          position: relative;

          & > div:nth-child(1) {
            position: absolute;
            padding-right: 359px;
            margin-top: 49px;

            & > div:nth-child(2) {
              margin-top: 112px;
            }

            & > div {
              & > div:nth-child(1) {
                display: flex;
                align-items: center;
                margin-bottom: 20px;

                & > div:nth-child(1) {
                  width: 31px;
                  height: 30px;
                  background-color: #6d6d9e;
                  border-radius: 50%;
                  display: flex;
                  align-items: flex-end;
                  justify-content: center;
                  color: #fff;
                  margin-right: 10px;
                }

                & > div:nth-child(2) {
                  font-family: 'NotoSansHK-Medium';
                  font-size: 26px;
                  font-weight: normal;
                  font-stretch: normal;
                  line-height: 36px;
                  letter-spacing: 0px;
                  color: #525280;
                }
              }

              & > div:nth-child(2),
              > div:nth-child(3) {
                color: #515151;
                line-height: 1.8;
                letter-spacing: 0.1em;
              }
            }
          }

          & > div:nth-child(2) {
            margin-top: 5px;
          }
        }
      }
    }

    & > div:nth-child(3) {
      // cursor: pointer;
      // margin: auto;
      margin-top: 100px;
      // background-blend-mode: normal, normal;
      // border-radius: 14px;

      // display: flex;
      // align-items: center;
      // justify-content: center;
      // font-family: 'NotoSansHK-Medium';
      // font-size: 32px;
      // font-weight: normal;
      // font-stretch: normal;
      // line-height: 36px;
      // letter-spacing: 0px;
      // color: #fff;
      // width: fit-content;
      // padding: 25px 160px;
      // line-height: 50px;

      // &>svg {
      //   margin-left: 22px;
      //   margin-top: 5px;
      // }
      // position: relative;
      // overflow: hidden;
      // -webkit-backface-visibility: hidden;
      // -webkit-transform: translate3d(0, 0, 0);
      // text-shadow: 0 2px 5px rgba($color: #000000, $alpha: .5);
      // &::before {
      //   content: "";
      //   position: absolute;
      //   top: -100%;
      //   left: -100%;
      //   bottom: -100%;
      //   right: -100%;
      //   background: linear-gradient(45deg,  #62AAEB 0%, #B7DDFF 100%);
      //   background-size: 100% 100%;
      //   animation: bgposition 5s infinite linear alternate;
      //   z-index: -1;
      // }
    }
  }

  & > div:nth-child(8) {
    margin-top: 182px;

    & > div:nth-child(1) {
      text-align: center;
      font-family: 'NotoSansHK-Bold';
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #525280;
    }

    & > div:nth-child(2) {
      margin-top: 59px;
      border-radius: 10px;
      border: solid 2px #dbd9d9;
      padding: 47px 32px;
      font-family: 'NotoSansHK-Bold';
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 44px;
      letter-spacing: 0px;
      color: #525280;
    }

    & > div:nth-child(3) {
      margin-top: 178px;

      & > div:nth-child(1) {
        font-family: 'NotoSansHK-Bold';
        font-size: 49px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 36px;
        letter-spacing: 0px;
        color: #525280;
      }
      & > div:nth-child(2) {
        padding-left: 14px;

        & > div:nth-child(1) {
          margin-top: 92px;
          font-family: 'NotoSansHK-Bold';
          font-size: 38px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 27px;
          letter-spacing: 1px;
          color: #6d6d9e;
        }

        & > div:nth-child(2) {
          margin-top: 57px;
          font-family: 'Noto Sans HK';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 34px;
          letter-spacing: 0px;
          color: #515151;
        }
      }
      & > div:nth-child(3) {
        padding-left: 14px;

        & > div:nth-child(1) {
          margin-top: 70px;
          font-family: 'NotoSansHK-Bold';
          font-size: 28px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 27px;
          letter-spacing: 1px;
          color: #515151;
          margin-bottom: 33px;
        }

        & > div:nth-child(2) {
          font-family: 'Noto Sans HK';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 34px;
          letter-spacing: 0px;
          color: #515151;
        }
      }
      & > div:nth-child(4) {
        padding-left: 14px;

        & > div:nth-child(1) {
          margin-top: 104px;
          font-family: 'NotoSansHK-Bold';
          font-size: 28px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 27px;
          letter-spacing: 1px;
          color: #515151;
          margin-bottom: 33px;
        }

        & > div:nth-child(2) {
          font-family: 'Noto Sans HK';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 34px;
          letter-spacing: 0px;
          color: #515151;
        }
      }
      & > div:nth-child(5) {
        margin-top: 60px;
        display: flex;
        flex-direction: row;

        & > div:nth-child(2) {
          margin-left: 50px;

          & > div {
            margin-top: 20px;
            display: flex;
            align-items: center;
            width: 457px;
            height: 63px;
            border: 1px solid #a9a6d2;
            border-radius: 34px;
            margin-bottom: 24px;

            & > div:nth-child(1) {
              position: relative;

              & > div:nth-child(2) {
                position: absolute;
                top: 20%;
                left: 25%;
                font-family: 'NotoSansHK-Medium';
                font-size: 40px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 34px;
                letter-spacing: 0px;
                color: #ffffff;
              }
            }

            & > div:nth-child(2) {
              margin-left: 25px;
              font-family: 'Noto Sans HK';
              font-size: 28px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 34px;
              letter-spacing: 0px;
              color: #515151;
            }
          }
        }
      }

      & > div:nth-child(6) {
        margin-top: 68px;
        border: solid 1px #a9a6d2;
        padding: 38px 0;
        padding-left: 45px;
        transform: perspective(492px) rotateX(350deg);

        & > div {
          transform: perspective(180px) rotateX(3deg);
          font-family: 'Noto Sans HK';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 34px;
          letter-spacing: 0px;
          color: #515151;
        }
      }
      & > div:nth-child(6)::after {
        position: absolute;
        right: -15px;
        content: '';
        background: url('https://static.cmereye.com/imgs/2023/05/d77b2eace7e89ae7.jpg');
        width: 30px;
        height: 45px;
        bottom: 13px;
        box-shadow: 0px 0px 0px 10px #fff;
      }
      & > div:nth-child(6)::before {
        position: absolute;
        content: '';
        background: url('https://static.cmereye.com/imgs/2023/05/dd10e67efe7af43c.jpg');
        width: 30px;
        height: 53px;
        top: 30%;
        left: -15px;
        box-shadow: 0px 0px 0px 10px #fff;
      }
      // 使用人工淚液
      & > div:nth-child(7) {
        margin-top: 138px;
        display: flex;
        justify-content: flex-end;
        position: relative;

        & > div:nth-child(1) {
          position: absolute;

          & > div {
            padding-left: 14px;
            padding-right: 632px;
            font-family: 'Noto Sans HK';
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.6;
            letter-spacing: -0.01em;
            color: #515151;
          }

          & > div:nth-child(1) {
            padding-left: 1px;
            margin-top: 24px;
            font-family: 'NotoSansHK-Bold';
            font-size: 38px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #6d6d9e;
          }

          & > div:nth-child(2),
          & > div:nth-child(3) {
            margin-bottom: 45px;
          }

          & > div:nth-child(2) {
            margin-top: 55px;
          }
        }
      }

      // 使用人工淚液
      & > div:nth-child(8) {
        margin-top: 59px;
        background: url('https://static.cmereye.com/imgs/2023/05/3cc8de62b7e69384.png')
          no-repeat;
        height: 257px;
        padding: 42px 60px;
        transform: scale(0.85);
        background-size: 100%;

        & > div {
          margin-bottom: 24px;

          & > div:nth-child(1) {
            font-family: 'Noto Sans HK';
            font-size: 25px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 27px;
            letter-spacing: 0px;
            color: #525280;
          }

          & > div:nth-child(2) {
            margin-top: 5px;
            font-family: 'Noto Sans HK';
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 27px;
            letter-spacing: 0px;
            color: #525280;
          }
        }
      }

      // 減少淚液流失
      & > div:nth-child(9) {
        margin-top: 114px;

        & > div {
          & > div:nth-child(1) {
            font-family: 'NotoSansHK-Bold';
            font-size: 38px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 27px;
            letter-spacing: 1px;
            color: #6d6d9e;
          }

          & > div:nth-child(2) {
            padding-left: 14px;
            font-family: 'Noto Sans HK';
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 27px;
            letter-spacing: 0px;
            color: #515151;
            margin-top: 65px;
            margin-bottom: 102px;
          }
        }
      }

      // 其他紓緩眼乾症狀的方法
      & > div:nth-child(10) {
        & > div:nth-child(1) {
          font-family: 'NotoSansHK-Bold';
          font-size: 38px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 27px;
          letter-spacing: 1px;
          color: #6d6d9e;
        }

        & > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          max-width: 1200px;
          justify-content: space-between;

          & > div {
            display: flex;
            align-items: center;
            margin-top: 70px;

            & > div:nth-child(1) {
              box-shadow: -14px 10px 0px 0px #eae9f1;
              border-radius: 50%;
              width: 15%;
              max-width: 250px;
            }

            & > div:nth-child(2) {
              padding: 0 50px;
              flex: 1;
              font-family: 'Noto Sans HK';
              font-size: 24px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 1.6;
              letter-spacing: 0px;
              color: #515151;
            }
          }

          & > div:first-child {
            margin-left: 0;
          }

          & > div:nth-child(5) {
            margin-left: 0;
          }
        }
      }
    }

    & > div:nth-child(4) {
      // cursor: pointer;
      // margin: auto;
      margin-top: 120px;
      // background-blend-mode: normal, normal;
      // border-radius: 14px;

      // font-family: 'NotoSansHK-Medium';
      // font-size: 32px;
      // font-weight: normal;
      // font-stretch: normal;
      // line-height: 36px;
      // letter-spacing: 0px;
      // color: #fff;

      // display: flex;
      // justify-content: center;
      // align-items: center;
      // flex-direction: column;
      // width: fit-content;
      // padding: 25px 160px;
      // line-height: 50px;

      // &>div:nth-child(2) {
      //   display: flex;
      //   align-items: center;

      //   svg {
      //     margin-top: 6px;
      //     margin-left: 5px;
      //     margin-right: 5px;
      //   }
      // }
      // position: relative;
      // overflow: hidden;
      // -webkit-backface-visibility: hidden;
      // -webkit-transform: translate3d(0, 0, 0);
      // text-shadow: 0 2px 5px rgba($color: #000000, $alpha: .5);
      // &::before {
      //   content: "";
      //   position: absolute;
      //   top: -100%;
      //   left: -100%;
      //   bottom: -100%;
      //   right: -100%;
      //   background: linear-gradient(45deg,  #62AAEB 0%, #B7DDFF 100%);
      //   background-size: 100% 100%;
      //   animation: bgposition 5s infinite linear alternate;
      //   z-index: -1;
      // }
    }
  }
  // 預防乾眼症
  & > div:nth-child(9) {
    margin-top: 180px;

    & > div:nth-child(1) {
      text-align: center;
      font-family: 'NotoSansHK-Bold';
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #525280;
    }

    & > div:nth-child(2) {
      margin-top: 71px;
      padding-left: 46px;

      & > div {
        & > div:nth-child(1) {
          font-family: 'NotoSansHK-Medium';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #525280;
          display: flex;
          align-items: center;
          margin-bottom: 32px;
          margin-top: 61px;
        }

        & > div:nth-child(2) {
          font-family: 'Noto Sans HK';
          font-size: 20px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 27px;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div:nth-child(1)::before {
          content: '';
          background: url('https://static.cmereye.com/imgs/2023/05/2f91d710e3b319e6.png')
            no-repeat;
          width: 15px;
          height: 17px;
          display: block;
          margin-right: 25px;
        }
      }

      & > div:nth-child(2) {
        margin-top: 73px;
      }

      & > div:nth-child(3) {
        margin-top: 96px;
      }

      & > div:nth-child(4) {
        margin-top: 95px;
      }

      & > div:nth-child(5) {
        margin-top: 65px;
      }
    }
  }
  //接手了一堆爛代碼
  &.xerophthalmia-en {
    & > div:nth-child(2) {
      & > div:nth-child(2) {
        & > div {
          & > div:nth-child(2) {
            height: auto;
          }
        }
      }
    }
    & > div:nth-child(4) {
      & > div:nth-child(3) {
        & > div {
          & > div:nth-child(2) {
            top: 170px;
          }
        }
      }
    }
    & > div:nth-child(6) {
      & > div:nth-child(2) {
        & > div {
          height: auto;
          padding-bottom: 20px;
        }
      }
    }
    & > div:nth-child(7) {
      & > div:nth-child(2) {
        & > div:nth-child(5) {
          margin-top: 60px;
          & > div {
            height: auto;
            padding-bottom: 30px;
          }
        }
        & > div:nth-child(6) {
          & > div:nth-child(2) {
            & > div:nth-child(1) {
              & > div {
                & > div:nth-child(1) {
                  & > div:nth-child(1) {
                    line-height: 30px;
                  }
                }
              }
            }
          }
        }
      }
    }
    & > div:nth-child(8) {
      & > div:nth-child(3) {
        & > div:nth-child(8) {
          margin-top: 150px;
          padding: 10px 60px;
          & > div {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
.xeroheader {
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin: 0 auto 0;
    max-width: 1080px;
    width: 100%;
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        font-family: 'NotoSansCJKtc-Bold';
        font-size: 119px;
        font-weight: 700;
        font-stretch: normal;
        line-height: 0.9;
        letter-spacing: 1px;
        color: #a9a6d2;
        position: sticky;
        text-align: right;
      }
      & > div:nth-child(2) {
        position: relative;
        z-index: 5;
        font-family: 'DINCondensed-Bold';
        text-align: right;
      }
      & > div:nth-child(3),
      & > div:nth-child(4) {
        -webkit-text-stroke: 1.5px #a9a6d2;
        font-family: 'DINCondensed-Bold';
        position: relative;
        z-index: 5;
        color: transparent;
        clip-path: polygon(0 30%, 100% 30%, 100% 100%, 0 100%);
        transform: translateY(-45%);
        text-align: right;
      }
      & > div:nth-child(4) {
        clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
        transform: translateY(-115%);
      }
      font-size: 131px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 1.2;
      text-align: justify;
      letter-spacing: 3px;
      color: #a9a6d2;
      margin-left: -0.6vw;
    }
    & > div:nth-child(1)::after {
      content: '';
      background: #f2f2f2;
      width: 40vw;
      height: 300px;
      position: absolute;
      top: 211px;
      right: 0;
    }
    & > div:nth-child(2) {
      position: relative;
      top: -20px;
      left: -5px;

      & > img {
        position: relative;
        z-index: 5;
      }

      & > img:nth-child(1) {
        margin-bottom: 20px;
      }
    }
  }
}
.youtobuvideo {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin: 100px auto 0;
  iframe {
    width: 45%;
    max-width: 100%;
    height: 315px;
  }
}
@media only screen and (max-width: 768px) {
  .youtobuvideo {
    flex-direction: column;
    iframe {
      width: 100%;
      margin-bottom: 30px;
      height: calc(315 / 516 * 100vw);
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
.dow {
  margin-top: -45%;
  margin-bottom: 233px;
  color: #fff;
  font-size: 30px;

  & > div:nth-child(1) {
    & > div {
      width: 62.5%;
      height: 202px;
      background: #a9a6d2;
      position: relative;
      display: flex;
      align-items: center;

      & > a:nth-child(1) {
        margin-left: 37.28433%;
        margin-right: 3.90625%;

        & > img {
          width: 64px;
          height: auto;
          cursor: pointer;
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

//所有此类型样式：--"&>div:nth-child(n)"--;为账号9777777开发者所写,修改者不负任何责任

@media screen and (max-width: 768px) {
  .xeroheader {
    margin-top: -100px;
    & > div:nth-child(1) {
      width: calc(100% - 60px);
      justify-content: flex-end;
      align-items: flex-end;
      display: flex;
      margin: 0 auto;

      & > div:nth-child(1) {
        & > div:nth-child(1) {
          font-size: 40px;
          text-align: right;
        }

        & > div:nth-child(2) {
          font-size: 50px;
          margin-top: 5px;
          text-align: right;
          line-height: 1;
        }

        & > div:nth-child(3),
        & > div:nth-child(4) {
          font-size: 50px;
          line-height: 1;
          margin-top: 5px;
          clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
          transform: translateY(-15%);
          text-align: right;
        }

        & > div:nth-child(4) {
          clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
          transform: translateY(-58%);
        }
      }

      & > div:nth-child(1)::after {
        width: 160px;
        height: 200px;
        top: 190px;
      }

      & > div:nth-child(2) {
        top: 0;
        width: 140px;

        & > img:nth-child(1) {
          margin-bottom: 5px;
        }
      }
    }
  }

  .xerophthalmia {
    transform: scale(1);
    margin: 30px 0 0;

    & > div:nth-child(1) {
      width: calc(100% - 60px);
      margin: 0 auto;
      flex-direction: column;

      & > div:nth-child(1) {
        width: 100%;
        margin-right: 0;

        & > div:nth-child(1) {
          font-size: 24px;
          text-align: center;
          margin-bottom: 20px;
        }

        & > div:nth-child(2) {
          font-size: 14px;
          line-height: 2;
        }
      }

      & > div:nth-child(2) {
        width: calc(100% - 20px);
        height: auto;
        transform: scale(1);
        margin-top: 45px;
        border-radius: 10px;
        margin-left: 20px;

        & > div {
          & > img {
            width: 100%;
            height: auto;
            top: -20px;
            left: -20px;
            border-radius: 10px;
          }
        }
      }
    }

    & > div:nth-child(2) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      min-width: 0;
      padding: 0;

      & > div:nth-child(1) {
        font-size: 24px;
      }

      & > div:nth-child(2) {
        margin-top: 40px;
        justify-content: center;

        & > div {
          width: 33%;
          margin-bottom: 30px;

          & > div:nth-child(1) {
            width: 100px;
            height: 85px;
            justify-content: center;

            img {
              width: 70%;
              max-width: 100px;
            }
          }

          & > div:nth-child(2) {
            font-size: 14px;
            height: auto;
            margin-top: 10px;
            line-height: 1.6;
          }
        }

        & > div:nth-child(n + 5) {
          margin-top: 0;
        }

        & > div:nth-child(n + 7) {
          width: 40%;
        }
      }

      & > div:nth-child(3) {
        // width: max-content;
        // font-size: 16px;
        // height: 50px;
        // line-height: 160%;
        // padding: 0 30px;
        margin-top: 40px;
      }
    }

    & > div:nth-child(4) {
      width: calc(100% - 60px);
      margin: 70px auto 0;

      & > div:nth-child(1) {
        font-size: 24px;
      }

      & > div:nth-child(2) {
        margin-top: 30px;

        & > div:nth-child(1) {
          font-size: 14px;
          line-height: 2;
        }

        & > div:nth-child(2) {
          margin-top: 30px;
          padding-left: 0;

          & > img {
            width: 100%;
          }
        }
      }

      & > div:nth-child(3) {
        margin-top: 60px;
        flex-direction: column;

        & > div {
          margin-bottom: 30px;

          & > div:nth-child(1) {
            width: 100%;

            img {
              width: 100%;
            }
          }

          & > div:nth-child(2) {
            top: 0;
            right: 0;
            padding: 20px 15px 0;
            z-index: 2;
            width: 70%;

            & > div:nth-child(1) {
              font-size: 20px;
            }

            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 1.6;
              margin-top: 5px;
              letter-spacing: -0.043em;
              text-align: justify;
            }
          }
        }
      }

      & > div:nth-child(4) {
        margin-top: 20px;

        & > div:nth-child(1) {
          font-size: 18px;
          line-height: 1.6;
          text-align: left;
        }

        & > div:nth-child(2) {
          & > div {
            padding-left: 0;

            & > div:nth-child(1) {
              margin-left: 10px;
              width: 80px;
              min-width: 80px;
            }

            & > div:nth-child(2) {
              margin-left: 10px;
              font-size: 14px;
              line-height: 1.6;

              & > div:nth-child(1) {
                font-size: 16px;
              }
            }
          }

          & > div:nth-child(1) {
            & > div:nth-child(2) {
              padding: 30px 0;
            }
          }

          & > div:nth-child(2) {
            & > div:nth-child(2) {
              padding: 30px 0;
            }
          }

          & > div:nth-child(3) {
            & > div:nth-child(2) {
              padding: 30px 0;
            }
          }

          & > div:nth-child(4) {
            & > div:nth-child(2) {
              padding: 30px 0;
            }
          }
        }
      }
    }

    & > div:nth-child(5) {
      width: calc(100% - 60px);
      margin: 70px auto 0;

      & > div:nth-child(1) {
        font-size: 24px;
      }

      & > div:nth-child(2) {
        margin-top: 40px;
        padding: 0;

        & > div {
          margin-top: 40px;

          & > div:nth-child(1) {
            position: absolute;
            top: 0;
            left: 0;

            & > img {
              width: 32px;
              height: auto;
            }
          }

          & > div:nth-child(2) {
            position: relative;
            margin-left: 0;

            & > div:nth-child(1) {
              font-size: 18px;
              margin-left: 45px;
              line-height: 32px;
            }

            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 1.6;
            }
          }
        }
      }

      & > div:nth-child(3) {
        // width: max-content;
        // font-size: 18px;
        // padding: 0 30px;
        // height: 50px;
        // line-height: 50px;
        margin-top: 50px;
      }
    }

    & > div:nth-child(6) {
      width: calc(100% - 60px);
      margin: 70px auto 0;

      & > div:nth-child(1) {
        font-size: 24px;
        margin-top: 0;
      }

      & > div:nth-child(2) {
        margin-top: 28px;
        white-space: initial;

        & > div {
          width: calc(50% - 20px);
          height: auto;
          margin: 0 10px 30px;
          border-radius: 10px;

          & > div:nth-child(2) {
            margin-top: 10px;
            font-size: 12px;
            line-height: 1.6;
            padding: 0 15px 10px;
          }
        }

        & > div:nth-child(n + 4) {
          margin-top: 0px;
        }
      }

      & > div:nth-child(3) {
        // width: max-content;
        // font-size: 18px;
        // padding: 0 30px;
        // height: 50px;
        // line-height: 50px;
        margin-top: 30px;
      }
    }

    & > div:nth-child(7) {
      width: calc(100% - 60px);
      margin: 70px auto 0;

      & > div:nth-child(1) {
        font-size: 24px;
        margin-top: 0;
      }

      & > div:nth-child(2) {
        margin-top: 20px;

        & > div:nth-child(1) {
          font-size: 14px;
          padding: 10px 15px;
          line-height: 2;
        }

        & > div:nth-child(2) {
          font-size: 22px;
          margin-top: 50px;
        }

        & > div:nth-child(3) {
          margin-top: 20px;

          & > div {
            margin-top: 5px;
            height: 55px;

            & > div:nth-child(1) {
              font-size: 14px;
            }

            & > div:nth-child(2) {
              font-size: 12px;
            }

            & > div:nth-child(3) {
              font-size: 12px;
            }

            & > div:nth-child(4) {
              font-size: 12px;
            }

            & > div:nth-child(5) {
              font-size: 12px;
            }

            & > div {
              line-height: 1.6;
            }
          }
          & > div:nth-of-type(1) {
            & > div:nth-of-type(2),
            & > div:nth-of-type(3),
            & > div:nth-of-type(4),
            & > div:nth-of-type(5) {
              font-weight: 700;
            }
          }
        }

        & > div:nth-child(4) {
          font-size: 22px;
          margin-top: 50px;
        }

        & > div:nth-child(5) {
          margin-top: 25px;
          flex-direction: column;

          & > div {
            width: 100%;
            height: auto;
            border: none;
            display: flex;
            align-items: center;
            margin-bottom: 22px;

            & > div:nth-child(1) {
              position: relative;
              min-width: 40px;
              width: 40px;
              height: 40px;
              box-shadow: none;
              transform: none;

              & > div:nth-child(1) {
                transform: scale(0.6);
                margin-top: 5px;
              }

              & > div:nth-child(2) {
                font-size: 22px;
                line-height: 1.5;
                margin-top: -8px;
              }
            }

            & > div:nth-child(2) {
              padding: 5px 0 0 12px;
              font-size: 13px;
              line-height: 1.6;
            }
          }

          & > div::after {
            display: none;
          }

          &::before {
            content: '';
            width: 4px;
            height: 80%;
            background: rgba($color: #6d6d9e, $alpha: 0.2);
            box-shadow: none;
            position: absolute;
            top: 20px;
            left: 18px;
          }

          & > div:last-child {
            border-right: none;
          }
        }

        & > div:nth-child(6) {
          margin-top: 50px;
          padding-right: 0;

          & > div:nth-child(1) {
            font-size: 22px;
            text-align: center;
          }

          & > div:nth-child(2) {
            margin-top: 40px;

            & > div:nth-child(1) {
              padding-right: 0;
              margin-top: 0;
              position: relative;

              & > div:nth-child(2) {
                margin-top: 20px;
              }

              & > div:nth-child(1) {
                & > div:nth-child(1) {
                  width: calc(100% - 120px);
                  margin-bottom: 10px;

                  & > div:nth-child(1) {
                    width: 22px;
                    height: 22px;
                    font-size: 14px;
                    line-height: 16px;
                    align-items: center;
                  }

                  & > div:nth-child(2) {
                    font-size: 18px;
                  }
                }

                & > div:nth-child(2) {
                  width: calc(100% - 120px);
                  font-size: 14px;
                  margin-bottom: 15px;
                  text-align: justify;
                  line-height: 1.6;
                }

                & > div:nth-child(3) {
                  width: 100%;
                  font-size: 14px;
                  margin-bottom: 15px;
                  text-align: justify;
                  line-height: 1.6;
                }
              }

              & > div:nth-child(2) {
                & > div:nth-child(1) {
                  margin-bottom: 10px;

                  & > div:nth-child(1) {
                    width: 22px;
                    height: 22px;
                    font-size: 14px;
                    line-height: 16px;
                    align-items: center;
                  }

                  & > div:nth-child(2) {
                    font-size: 18px;
                  }
                }

                & > div:nth-child(2) {
                  width: 100%;
                  font-size: 14px;
                  margin-bottom: 15px;
                  text-align: justify;
                  line-height: 1.6;
                }

                & > div:nth-child(3) {
                  width: 100%;
                  font-size: 14px;
                  margin-bottom: 15px;
                  text-align: justify;
                  line-height: 1.6;
                }
              }

              & > div {
                & > div:nth-child(2),
                > div:nth-child(3) {
                  line-height: 1.6;
                  letter-spacing: 0.06em;
                }
              }
            }

            & > div:nth-child(2) {
              position: absolute;
              right: 0;
              top: 10px;
              margin-top: 0;
              width: 92px;
            }
          }
        }
      }

      & > div:nth-child(3) {
        // width: max-content;
        // font-size: 18px;
        // padding: 0 30px;
        // height: 50px;
        // line-height: 20px;
        margin-top: 20px;

        // &>svg {
        //   margin-top: 0;
        // }
      }
    }

    & > div:nth-child(8) {
      width: calc(100% - 60px);
      margin: 70px auto 0;

      & > div:nth-child(1) {
        font-size: 24px;
        margin-top: 0;
      }

      & > div:nth-child(2) {
        padding: 15px;
        font-size: 14px;
        line-height: 2;
        margin-top: 20px;
      }

      & > div:nth-child(3) {
        margin-top: 70px;

        & > div:nth-child(1) {
          font-size: 24px;
          text-align: center;
        }

        & > div:nth-child(2) {
          & > div:nth-child(1) {
            margin-top: 35px;
            font-size: 22px;
          }

          & > div:nth-child(2) {
            font-size: 14px;
            line-height: 2;
            margin-top: 16px;
            text-align: justify;
          }
        }

        & > div:nth-child(3),
        & > div:nth-child(4) {
          & > div:nth-child(1) {
            font-size: 20px;
            margin: 20px 0 18px;
            font-weight: bold;
          }

          & > div:nth-child(2) {
            font-size: 14px;
            line-height: 2;
          }
        }

        & > div:nth-child(5) {
          margin-top: 30px;
          flex-direction: column;

          & > div:nth-child(2) {
            margin-left: 0;

            & > div {
              width: 100%;
              height: 45px;

              & > div:nth-child(1) {
                & > div:nth-child(2) {
                  font-size: 30px;
                  top: 8%;
                }

                svg {
                  width: 60px;
                  height: 45px;

                  image {
                    width: 54px;
                    height: 45px;
                  }
                }
              }

              & > div:nth-child(2) {
                font-size: 20px;
                margin-left: 10px;
              }
            }
          }
        }

        & > div:nth-child(6) {
          margin-top: 35px;
          padding: 20px 30px;
          transform: none;
          position: relative;

          & > div {
            transform: none;
            font-size: 14px;
          }
        }

        & > div:nth-child(7) {
          margin-top: 100px;
          flex-direction: column;

          & > div:nth-child(1) {
            position: relative;

            & > div {
              padding: 0;
              font-size: 14px;
              line-height: 2;
            }

            & > div:nth-child(1) {
              font-size: 24px;
              margin-top: 0;
            }

            & > div:nth-child(2),
            & > div:nth-child(3) {
              margin-bottom: 20px;
            }

            & > div:nth-child(2) {
              margin-top: 15px;
            }
          }
          & > div:nth-child(2) {
            margin-top: 30px;
          }
        }
        & > div:nth-child(8) {
          width: 100%;
          margin-top: 40px;
          padding: 25px 30px;
          background: url(https://static.cmereye.com/imgs/2023/07/7de6d60faf433c9a.png);
          transform: scale(1);
          background-size: 100% 100%;
          & > div {
            margin-bottom: 10px;
            & > div:nth-child(1) {
              font-size: 16px;
            }
            & > div:nth-child(2) {
              font-size: 12px;
              line-height: 2;
            }
          }
        }
        & > div:nth-child(9) {
          margin-top: 50px;
          & > div {
            & > div:nth-child(1) {
              font-size: 22px;
            }
            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 2;
              padding-left: 0;
              margin: 15px 0 50px;
            }
          }
        }
        & > div:nth-child(10) {
          & > div:nth-child(1) {
            font-size: 22px;
          }
          & > div:nth-child(2) {
            width: 100%;
            padding: 0;

            & > div {
              width: 100%;
              display: flex;
              align-items: center;
              margin-top: 0px;
              margin-left: 0px;
              padding: 20px 0;
              border-bottom: 1px dashed #ddd;

              & > div:nth-child(1) {
                width: 100px;
                min-width: 100px;
                box-shadow: -4px 4px 0px 0px #eae9f1;

                img {
                  width: 100%;
                }
              }

              & > div:nth-child(2) {
                flex: 1;
                width: auto;
                font-size: 14px;
                line-height: 2;
                padding: 0 0 0 15px;
                margin-top: 0;
              }
            }

            & > div:first-child {
              margin-left: 0;
            }

            & > div:nth-child(4) {
              margin-left: 0;
            }

            & > div:nth-child(5) {
              margin-left: 0;
              margin-right: 0;
            }

            & > div:nth-child(even) {
              flex-direction: row-reverse;

              & > div:nth-child(2) {
                padding: 0 15px 0 0;
              }
            }
          }
        }
      }

      & > div:nth-child(4) {
        // width: max-content;
        // font-size: 15px;
        // padding: 0 10px;
        // height: 50px;
        // line-height: 20px;
        margin-top: 20px;

        // &>svg {
        //   margin-top: 0;
        // }
      }
    }

    & > div:nth-child(9) {
      width: calc(100% - 60px);
      margin: 70px auto 0;

      & > div:nth-child(1) {
        font-size: 24px;
      }

      & > div:nth-child(2) {
        margin-top: 35px;
        padding-left: 0;

        & > div {
          margin-top: 0 !important;
          margin-bottom: 50px;

          & > div:nth-child(1) {
            margin-bottom: 10px;
            margin-top: 0;
            font-size: 20px;
            &::before {
              min-width: 15px;
            }
          }

          & > div:nth-child(2) {
            font-size: 14px;
          }
        }
      }
    }
    &.xerophthalmia-en {
      & > div:nth-child(4) {
        & > div:nth-child(3) {
          & > div {
            & > div:nth-child(2) {
              top: 0px;
              padding-top: 0;
              & > div:nth-child(1) {
                font-size: 18px;
              }
              & > div:nth-child(2) {
                font-size: 12px;
                line-height: 1.4;
                margin-top: 0;
              }
            }
          }
        }
      }
      & > div:nth-child(5) {
        & > div:nth-child(3) {
          max-width: 100%;
          line-height: 1.2;
          padding: 0 10px;
          text-align: center;
          svg {
            min-width: 12px;
          }
        }
      }
      & > div:nth-child(6) {
        & > div:nth-child(2) {
          & > div {
            padding-bottom: 0px;
          }
        }
        & > div:nth-child(3) {
          padding: 0 10px;
        }
      }
      & > div:nth-child(7) {
        & > div:nth-child(3) {
          padding: 0 10px;
        }
      }
      & > div:nth-child(8) {
        & > div:nth-child(3) {
          & > div:nth-child(5) {
            & > div:nth-child(2) {
              & > div {
                & > div:nth-child(2) {
                  line-height: 1.2;
                }
              }
            }
          }
          & > div:nth-child(8) {
            margin-top: 150px;
            padding: 10px 30px;
            & > div {
              margin-bottom: 0px;
              & > div:nth-child(2) {
                margin-top: 0;
                line-height: 1.5;
              }
            }
          }
        }
        & > div:nth-child(4) {
          flex-direction: row;
          & > div:nth-child(2) {
            margin-left: 10px;
            margin-top: -5px;
          }
        }
      }
    }
  }

  .dow {
    margin-top: 100px;
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
            max-width: auto;
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
  .dow {
    margin-top: -30%;
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

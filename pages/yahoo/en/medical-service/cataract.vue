<script lang="ts" setup>
import { getPdf } from '@/assets/js/common'
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')
useHead(() => ({
  title: t('pages.medical_service.medical_service_cataract_head'),
  meta() {
    return [
      {
        hid: 'cataractDesc',
        name: 'description',
        content: t('tdk.cataract.desc'),
      },
      {
        hid: 'cataractKey',
        name: 'keywords',
        content: t('tdk.cataract.key'),
      },
    ]
  },
}))
// 传递背景色
const backgd = [
  '#64bcd1;',
  '-webkit-linear-gradient(to right, #83cdd3, #64bcd1);',
  'linear-gradient(to right, #83cdd3, #64bcd1);',
]
// 白內障形成的成因
const fatorArr = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/5b88e2c3d5a24717.png',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator1',
    alt: '陽光中紫外線為白內障成因',
    title: '白內障成因_紫外線',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/77092ee46cf226d9.png',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator2',
    alt: '吸煙為白內障成因',
    title: '白內障成因_吸煙',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a83300c944834450.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator3_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator3_2',
    ],
    alt: '深近視為白內障成因',
    title: '白內障成因_深近視',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/fc3c0ecda42d6dca.png',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator4',
    alt: '高血糖指數為白內障成因',
    title: '白內障成因_糖尿病白內障',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/8e4d13a54786cdcc.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator5_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator5_2',
    ],
    alt: '口服類固醇藥物為白內障成因',
    title: '白內障成因_類固醇白內障',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/027fbbc52748d448.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator6_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator6_2',
    ],
    alt: '家族遺傳為白內障成因',
    title: '白內障成因_家族遺傳',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/6f9105c7d9aeefa2.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator7_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator7_2',
    ],
    alt: '男患者眼睛創傷為白內障成因',
    title: '白內障成因_創傷性白內障',
  },
]
const symptomArr = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/e493e6f5a154cd97.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom1_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom1_2',
    ],
    alt: '視力模糊為常見白內障症狀',
    title: '白內障症狀_視力模糊',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/c864d708858a3f2e.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom2_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom2_2',
    ],
    alt: '眼睛重影為白內障症狀',
    title: '白內障症狀_眼睛重影',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/848679d9bcce652d.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom3_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom3_2',
    ],
    alt: '視物變形為白內障症狀',
    title: '白內障症狀_視物變形',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a4f207cfb55a0903.png',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom4',
    alt: '夜間視力變差為白內障症狀',
    title: '白內障症狀_夜間視力變差',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/03c86d6ac63e3454.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom5_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom5_2',
    ],
    alt: '頻繁更換眼鏡為白內障症狀',
    title: '白內障症狀',
  },
]
const surgeryArr = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/6657fc39bf0d020c.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_array_surgery1_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_array_surgery1_2',
    ],
    lineText:
      'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_lineText1',
    alt: '白內障手術_滴上局部麻醉眼藥水',
    title: '白內障手術_眼藥水',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/55d34019e98d8e65.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_array_surgery2_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_array_surgery2_2',
    ],
    lineText:
      'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_lineText2',
    alt: '白內障手術_切除晶體混濁',
    title: '白內障手術_晶體混濁',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/7b14a5086daa3610.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_array_surgery3_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_array_surgery3_2',
    ],
    lineText:
      'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_lineText3',
    alt: '白內障手術植入人工晶體',
    title: '白內障手術_人工晶體植入',
  },
]
const iclArr = [
  {
    img: '',
    type: 'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl1.icl1_type',
    monofocal: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl1.icl1_monofocal1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl1.icl1_monofocal2',
    ],
    astigmatism: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl1.icl1_astigmatism1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl1.icl1_astigmatism2',
    ],
    multipleFocus: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl1.icl1_multipleFocus1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl1.icl1_multipleFocus2',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/47e6f09498b91509.png',
    type: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl2.icl2_type',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl2.icl2_type2',
    ],
    monofocal:
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl2.icl2_monofocal',
    astigmatism: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl2.icl2_astigmatism1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl2.icl2_astigmatism2',
    ],
    multipleFocus:
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl2.icl2_multipleFocus',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/88fe9f4dae4a48d6.png',
    type: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl3.icl3_type',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl3.icl3_type2',
    ],
    monofocal: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl3.icl3_monofocal',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl3.icl3_monofocal2',
    ],
    astigmatism: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl3.icl3_astigmatism1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl3.icl3_astigmatism2',
    ],
    multipleFocus:
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl3.icl3_multipleFocus',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/0fb789bc099b4c7e.png',
    type: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl4.icl4_type',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl4.icl4_type2',
    ],
    monofocal: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl4.icl4_monofocal',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl4.icl4_monofocal2',
    ],
    astigmatism: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl4.icl4_astigmatism1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl4.icl4_astigmatism2',
    ],
    multipleFocus:
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl4.icl4_multipleFocus',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/5cc8f1f288c60d39.png',
    type: 'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl5.icl5_type',
    monofocal: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl5.icl5_monofocal1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl5.icl5_monofocal2',
    ],
    astigmatism: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl5.icl5_astigmatism1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl5.icl5_astigmatism2',
    ],
    multipleFocus: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl5.icl5_multipleFocus1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl5.icl5_multipleFocus2',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/c08795d5179afc22.png',
    type: 'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_type',
    monofocal: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_monofocal1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_monofocal2',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_monofocal3',
    ],
    astigmatism: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_astigmatism3',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_astigmatism1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_astigmatism2',
    ],
    multipleFocus: [
      [
        'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_multipleFocus1_1',
        'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_multipleFocus1_2',
      ],
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_multipleFocus2',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_multipleFocus3',
    ],
  },
]
const announcementsArr = [
  {
    id: '01',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_announcements.cataract_array_announcements1',
    img: 'https://static.cmereye.com/imgs/2023/05/28e797c56a574cce.png',
    alt: '戴眼罩為白內障手術後護理方法',
    title: '白內障手術後護理',
  },
  {
    id: '02',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_announcements.cataract_array_announcements2',
    img: 'https://static.cmereye.com/imgs/2023/05/37962e24ec481c1c.png',
    alt: '睡前戴眼罩為白內障術後注意事項',
    title: '白內障術後注意事項',
  },
  {
    id: '03',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_announcements.cataract_array_announcements3',
    img: 'https://static.cmereye.com/imgs/2023/05/63d616d8816fc14d.png',
    alt: '白內障術後注意事項_平臥或仰臥洗頭',
    title: '白內障術後注意事項',
  },
  {
    id: '04',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_announcements.cataract_array_announcements4',
    img: 'https://static.cmereye.com/imgs/2023/05/d1539d09a4afe49a.png',
    alt: '白內障手術後護理_保持傷口清潔',
    title: '白內障手術後護理',
  },
  {
    id: '05',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_announcements.cataract_array_announcements5',
    img: 'https://static.cmereye.com/imgs/2023/05/04c51b9d4cdf56e9.png',
    alt: '白內障術後注意事項_避免劇烈運動',
    title: '白內障術後注意事項',
  },
  {
    id: '06',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_announcements.cataract_array_announcements6',
    img: 'https://static.cmereye.com/imgs/2023/05/56cd1f34a7c0da6e.png',
    alt: '白內障手術後護理_滴上眼科醫生處方眼藥水',
    title: '白內障手術後護理',
  },
  {
    id: '07',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_announcements.cataract_array_announcements7',
    img: 'https://static.cmereye.com/imgs/2023/05/aa98a33175063fa3.png',
    alt: '白內障手術後護理_定期眼睛檢查',
    title: '白內障手術後護理',
  },
]
// 折叠问答
const meetArr = [
  {
    title:
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_q1',
    agree: [
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a1_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a1_2',
    ],
  },
  {
    title:
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_q2',
    agree:
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a2',
  },
  {
    title:
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_q3',
    agree:
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a3',
  },
  {
    title:
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_q4',
    agree:
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a4',
  },
  {
    title:
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_q5',
    agree: [
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a5_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a5_2',
    ],
  },
  {
    title:
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_q6',
    agree: [
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a6_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a6_2',
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a6_3',
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a6_4',
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a6_5',
    ],
  },
]
// 内部导航
const serviceNavigation = [
  {
    anchorName: 'pages.medical_service.cataract.cataract',
    anchorLink: '/medical-service/cataract#cataract',
  },
  {
    anchorName:
      'pages.medical_service.service_cataract_title.service_cataract_array_Navigation.cataract_array_Navigation1',
    anchorLink: '/medical-service/cataract#fatorArr',
  },
  {
    anchorName:
      'pages.medical_service.service_cataract_title.service_cataract_array_Navigation.cataract_array_Navigation2',
    anchorLink: '/medical-service/cataract#symptomArr',
  },
  {
    anchorName:
      'pages.medical_service.service_cataract_title.service_cataract_array_Navigation.cataract_array_Navigation3',
    anchorLink: '/medical-service/cataract#surgeryArr',
  },
  {
    anchorName:
      'pages.medical_service.service_cataract_title.service_cataract_array_Navigation.cataract_array_Navigation4',
    anchorLink: '/medical-service/cataract#iclArr',
  },
  {
    anchorName:
      'pages.medical_service.service_cataract_title.service_cataract_array_Navigation.cataract_array_Navigation5',
    anchorLink: '/medical-service/cataract#announcementsArr',
  },
  {
    anchorName:
      'pages.medical_service.service_cataract_title.service_cataract_array_Navigation.cataract_array_Navigation6',
    anchorLink: '/medical-service/cataract#faq',
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
  pcSrc: 'https://static.cmereye.com/imgs/2023/10/172f81e3e63cc3e4.png',
  mbSrc: 'https://static.cmereye.com/imgs/2023/10/5934acd90d66772b.png',
  cnName: '白內障',
  enName: 'CATARACT',
  textColor: '#3DBAD7',
  pageName: 'cataract',
}
</script>

<template>
  <div>
    <PageServiceBanner :bannerData="bannerData" />
    <serviceNav :arrData="serviceNavigation" />
    <div class="cataract" :class="{ 'cataract-en': locale === 'en' }">
      <!-- 白內障 -->
      <div>
        <!-- 请勿删除 -->
      </div>
      <!-- 白內障影響日常生活？ -->
      <div id="cataract">
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_title_son1'
                )
              }}
            </div>
            <!-- <div @click="goWhatsApp()">
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_btn1'
                )
              }}
            </div> -->
            <div>
              <service-button
                :str="
                  $t(
                    'pages.medical_service.service_cataract_title.service_cataract_btn1'
                  )
                "
                :link="'https://api.whatsapp.com/send?phone=85265767817&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'"
              />
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/06/306305535d5e270b.png"
                alt="患有白內障的年長者感到視力模糊"
                title="白內障_視力模糊"
              />
            </div>
          </div>
        </div>
        <div>
          <p>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text1'
              )
            }}
          </p>
          <p>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text2'
              )
            }}
          </p>
        </div>
        <!-- <div @click="goWhatsApp()">
          {{
            $t(
              'pages.medical_service.service_cataract_title.service_cataract_btn2'
            )
          }}
        </div> -->
        <div>
          <service-button-icon
            :str="
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_btn2'
              )
            "
            :link="'https://api.whatsapp.com/send?phone=85265767817&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'"
            :type="'2'"
          />
        </div>
      </div>
      <!-- 白內障形成的成因 -->
      <div id="fatorArr">
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_title_son2'
                )
              }}
            </div>
          </div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text3'
              )
            }}
          </div>
        </div>
        <div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_btn3'
              )
            }}
          </div>
          <div>
            <div>
              <div v-for="(item, index) in fatorArr.slice(0, 3)" :key="index">
                <img :src="item.img" :alt="item.alt" :title="item.title" />
                <div>
                  <div v-if="Array.isArray(item.text)">
                    <div v-for="(ele, i) in item.text" :key="i">
                      {{ $t(ele) }}
                    </div>
                  </div>
                  <div v-else>{{ $t(item.text) }}</div>
                </div>
              </div>
            </div>
            <div>
              <div v-for="(item, index) in fatorArr.slice(3, 7)" :key="index">
                <img :src="item.img" :alt="item.alt" :title="item.title" />
                <div>
                  <div v-if="Array.isArray(item.text)">
                    <div v-for="(ele, i) in item.text" :key="i">
                      {{ $t(ele) }}
                    </div>
                  </div>
                  <div v-else>{{ $t(item.text) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 白內障會引起哪些症狀？ -->
      <div id="symptomArr">
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_title_son3'
                )
              }}
            </div>
          </div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text4'
              )
            }}
          </div>
        </div>
        <div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_btn4'
              )
            }}
          </div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_text12'
                )
              }}
            </div>
            <div>
              <div v-for="(item, index) in symptomArr" :key="index">
                <img :src="item.img" :alt="item.alt" :title="item.title" />
                <div>
                  <div v-if="Array.isArray(item.text)">
                    <div v-for="(ele, i) in item.text" :key="i">
                      {{ $t(ele) }}
                    </div>
                  </div>
                  <div v-else>{{ $t(item.text) }}</div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="37px"
                  height="35px"
                >
                  <path
                    fill-rule="evenodd"
                    fill="rgb(101, 196, 218)"
                    d="M7.117,34.346 L32.201,15.478 L36.862,25.544 L7.117,34.346 ZM14.018,0.341 L27.049,4.716 L0.848,34.890 L14.018,0.341 Z"
                  />
                </svg>
              </div>
              <div>
                {{
                  $t(
                    'pages.medical_service.service_cataract_title.service_cataract_text5'
                  )
                }}
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="34px"
                  height="37px"
                >
                  <path
                    fill-rule="evenodd"
                    fill="rgb(101, 196, 218)"
                    d="M0.413,17.247 L33.150,0.061 L6.306,29.665 L0.413,17.247 ZM28.153,36.931 L17.604,33.501 L33.356,6.351 L28.153,36.931 Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <!-- <div @click="callTel()">
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_btn5'
              )
            }}
          </div> -->
          <div>
            <service-button
              :str="
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_btn5'
                )
              "
              :link="'tel: +852 3956 2025'"
            />
          </div>
        </div>
      </div>
      <!-- 白內障治療，手術 -->
      <div id="surgeryArr">
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_title_son4'
                )
              }}
            </div>
          </div>
        </div>
        <div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text6'
              )
            }}
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/e018dee96aa2c911.png"
                alt="微創白內障手術人工晶體植入過程"
                title="微創白內障手術_人工晶體植入"
              /><img
                src="https://static.cmereye.com/imgs/2023/05/3f1897286d36f0c5.png"
                alt="白內障手術使用的人工晶體"
                title="白內障手術_人工晶體"
              />
            </div>
          </div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text7'
              )
            }}
          </div>
        </div>
        <div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text11'
              )
            }}
          </div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text8'
              )
            }}
          </div>
          <div>
            <div v-for="(item, index) in surgeryArr" :key="index">
              <img :src="item.img" :alt="item.alt" :title="item.title" />
              <div>
                <div v-if="Array.isArray(item.text)">
                  <div v-for="(ele, i) in item.text" :key="i">
                    {{ $t(ele) }}
                  </div>
                </div>
                <div v-else>{{ $t(item.text) }}</div>
              </div>
              <div class="lineText">
                <div>{{ $t(item.lineText) }}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_title_son5'
              )
            }}
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="847px"
              height="100px"
            >
              <defs>
                <linearGradient id="PSgrad_0" x1="0%" x2="0%" y1="100%" y2="0%">
                  <stop
                    offset="0%"
                    stop-color="rgb(44,79,147)"
                    stop-opacity="1"
                  />
                  <stop
                    offset="100%"
                    stop-color="rgb(255,255,255)"
                    stop-opacity="1"
                  />
                </linearGradient>
              </defs>
              <path
                fill-rule="evenodd"
                fill="rgb(102, 197, 220)"
                d="M422.000,84.749 C424.468,84.749 426.469,86.756 426.469,89.234 C426.469,91.710 424.468,93.718 422.000,93.718 C419.532,93.718 417.531,91.710 417.531,89.234 C417.531,86.756 419.532,84.749 422.000,84.749 Z"
              />
              <path
                fill-rule="evenodd"
                fill="rgb(102, 197, 220)"
                d="M422.000,0.874 C424.468,0.874 426.469,2.875 426.469,5.342 C426.469,7.811 424.468,9.812 422.000,9.812 C419.532,9.812 417.531,7.811 417.531,5.342 C417.531,2.875 419.532,0.874 422.000,0.874 Z"
              />
              <path
                fill-rule="evenodd"
                stroke="rgb(102, 197, 220)"
                stroke-width="2px"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                d="M423.118,7.578 L423.118,88.111 "
              />
              <path
                fill-rule="evenodd"
                stroke="rgb(102, 197, 220)"
                stroke-width="2px"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                fill="none"
                d="M501.413,59.030 L820.184,59.030 C832.538,59.030 842.553,69.044 842.553,81.398 L842.553,95.939 "
              />
              <image
                x="473px"
                y="8px"
                width="30px"
                height="53px"
                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAA1CAMAAABhhatlAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA21BMVEVmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdz////wSmGtAAAAR3RSTlMAGzMYh3iFemOjQckT/fYH0ECKkjHqBtNhW9sFBNl2R/MnzwoO2rEDLfA99LY77dw2JPuREIzvHi65wQmk4cy+u1iZ1fkiRGqOvdsAAAABYktHREjwAtTqAAAAB3RJTUUH5wUJCjEd2rGv3QAAAKlJREFUOMvt0McOggAQBFBFUEHB3hEVsTfE3rvz/3+kCYkXZa5emOub3Ww2EBRCARIRks8++/w/DiPCWILIOAqZsYIY47iqJZgnkWKcRoZxFrk88wKKjEsoVwjrVRhsvIZ6g7kMs0nYaqHdId7tQWbn9QcYWsRHY0xs4lMTzmzu7YmFg2V45V1YbwB1a9g7r4K91/CuHI6ns5uvF1yutzs++bVDfwjK080LaLMgvUNGYT8AAAAASUVORK5CYII="
              />
              <path
                fill-rule="evenodd"
                fill="rgb(102, 197, 220)"
                d="M841.437,89.218 C843.905,89.218 845.906,91.226 845.906,93.702 C845.906,96.179 843.905,98.187 841.437,98.187 C838.969,98.187 836.969,96.179 836.969,93.702 C836.969,91.226 838.969,89.218 841.437,89.218 Z"
              />
              <path
                fill-rule="evenodd"
                fill="rgb(102, 197, 220)"
                d="M474.562,0.874 C477.031,0.874 479.031,2.875 479.031,5.342 C479.031,7.811 477.031,9.812 474.562,9.812 C472.094,9.812 470.094,7.811 470.094,5.342 C470.094,2.875 472.094,0.874 474.562,0.874 Z"
              />
              <path
                fill-rule="evenodd"
                stroke="rgb(102, 197, 220)"
                stroke-width="2px"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                fill="none"
                d="M344.493,59.030 L25.723,59.030 C13.368,59.030 3.353,69.044 3.353,81.398 L3.353,95.939 "
              />
              <image
                x="343px"
                y="8px"
                width="30px"
                height="53px"
                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAA1CAMAAABhhatlAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA21BMVEVmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdz////wSmGtAAAAR3RSTlMAGDMbeId6haNjyUEH9v0TQNCSigbqMWHTBdtbdtkEJ/NHCs8DsdoO8C229D023O07EJH7JB7vjAnBuS67vszhpPnVmVhEIk9eauwAAAABYktHREjwAtTqAAAAB3RJTUUH5wUJCjEd2rGv3QAAAK5JREFUOMvt0NcOggAMBVBEUFTAvXGi4sKFe+/7/3+kiYnRSPvqC/exJ23aCgIdn+hnVJAge+yxx//jAIIcy5A4VhDiOIwIo6qmRxmOIc7NTiDJaCqNDMNZ5BjNF1Bk2ECpTGulihqtdRMKrY0mWha9loJ2h1Sri16fVHuA4YjC8cSBOSVwFpzDWahutLSNlQ6sN5/F7Su7/eFJ0I72dw/eOZ0v159jb69ExLvbix9DiSCdm1IkDAAAAABJRU5ErkJggg=="
              />
              <path
                fill-rule="evenodd"
                fill="rgb(102, 197, 220)"
                d="M4.469,89.218 C2.001,89.218 0.000,91.226 0.000,93.702 C0.000,96.179 2.001,98.187 4.469,98.187 C6.937,98.187 8.938,96.179 8.938,93.702 C8.938,91.226 6.937,89.218 4.469,89.218 Z"
              />
              <path
                fill-rule="evenodd"
                fill="rgb(102, 197, 220)"
                d="M371.344,0.874 C368.876,0.874 366.875,2.875 366.875,5.342 C366.875,7.811 368.876,9.812 371.344,9.812 C373.812,9.812 375.813,7.811 375.813,5.342 C375.813,2.875 373.812,0.874 371.344,0.874 Z"
              />
            </svg>
          </div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_text1'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_text2'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_text3'
                )
              }}
              <br />{{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_text4'
                )
              }}
            </div>
          </div>
        </div>
        <!-- <div @click="callTel()">
          {{
            $t(
              'pages.medical_service.service_cataract_title.service_cataract_btn6'
            )
          }}
        </div> -->
        <div>
          <service-button
            :str="
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_btn6'
              )
            "
            :link="'tel: +852 3956 2025'"
            :btnName="'cataractBtn1'"
          />
        </div>
      </div>
      <!-- 選擇人工晶體須知 -->
      <!-- <div></div> -->
      <div id="iclArr">
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_title_son6'
                )
              }}
            </div>
          </div>
        </div>
        <div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text9'
              )
            }}
          </div>
          <div>
            <div v-for="(item, index) in iclArr" :key="index">
              <div>
                <img v-if="item.img" :src="item.img" alt="" srcset="" />
                <div>
                  <!-- {{ $t(item.type) }} -->
                  <div v-if="Array.isArray(item.type)">
                    <div v-for="(ele, eleIndex) in item.type" :key="eleIndex">
                      <!-- <img v-if="index" src="https://static.cmereye.com/imgs/2023/05/5be0ff77c88a5626.png" /> -->
                      <div v-if="Array.isArray(ele)">
                        <div v-for="(el, i) in ele" :key="i">{{ $t(el) }}</div>
                      </div>
                      <div v-else>
                        <strong v-if="index === 5">· </strong>{{ $t(ele) }}
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    {{ $t(item.type) }}
                  </div>
                </div>
              </div>
              <div>
                <div v-if="Array.isArray(item.monofocal)">
                  <div
                    v-for="(ele, eleIndex) in item.monofocal"
                    :key="eleIndex"
                  >
                    <img
                      v-if="index"
                      src="https://static.cmereye.com/imgs/2023/05/5be0ff77c88a5626.png"
                    />
                    <div v-if="Array.isArray(ele)">
                      <div v-for="(el, i) in ele" :key="i">{{ $t(el) }}</div>
                    </div>
                    <div v-else>
                      <strong v-if="index === 5">· </strong>{{ $t(ele) }}
                    </div>
                  </div>
                </div>
                <div v-else>
                  {{ $t(item.monofocal) }}
                </div>
              </div>
              <div>
                <div v-if="Array.isArray(item.astigmatism) && index === 4">
                  <div
                    v-for="(ele, eleIndex) in item.astigmatism"
                    :key="eleIndex"
                  >
                    <img
                      src="https://static.cmereye.com/imgs/2023/05/5be0ff77c88a5626.png"
                    />
                    <div v-if="Array.isArray(ele)">
                      <div v-for="(el, i) in ele" :key="i">{{ $t(el) }}</div>
                    </div>
                    <div v-else>{{ $t(ele) }}</div>
                  </div>
                </div>
                <div v-else>
                  <div
                    v-for="(ele, eleIndex) in item.astigmatism"
                    :key="eleIndex"
                  >
                    <div v-if="Array.isArray(ele)">
                      <div v-for="(el, i) in ele" :key="i">{{ $t(el) }}</div>
                    </div>
                    <div v-else>
                      <strong v-if="index === 5">· </strong>{{ $t(ele) }}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div v-if="Array.isArray(item.multipleFocus) && index === 4">
                  <div
                    v-for="(ele, eleIndex) in item.multipleFocus"
                    :key="eleIndex"
                  >
                    <img
                      src="https://static.cmereye.com/imgs/2023/05/5be0ff77c88a5626.png"
                    />
                    <div v-if="Array.isArray(ele)">
                      <div v-for="(el, i) in ele" :key="i">{{ $t(el) }}</div>
                    </div>
                    <div v-else>{{ $t(ele) }}</div>
                  </div>
                </div>
                <div v-else-if="Array.isArray(item.multipleFocus)">
                  <div
                    v-for="(ele, eleIndex) in item.multipleFocus"
                    :key="eleIndex"
                  >
                    <div v-if="Array.isArray(ele)">
                      <div
                        v-for="(el, i) in ele"
                        :key="i"
                        class="else_multipleFocus"
                      >
                        <strong v-if="index === 5" class="ele_strong">· </strong
                        >{{ $t(el) }}
                      </div>
                    </div>
                    <div v-else>
                      <strong v-if="index === 5">· </strong>{{ $t(ele) }}
                    </div>
                  </div>
                </div>
                <div v-else>
                  {{ $t(item.multipleFocus) }}
                </div>
              </div>
            </div>
          </div>
          <div>
            <!-- {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text10'
              )
            }} -->
            <div v-if="locale === 'zh-hk'">
              <p>*雙眼互補法(Blended Vision)</p>
              <p>
                雙眼互補法又稱為「單眼視覺」(Mono-Vision),原理是透過兩眼不同的屈光度數,
              </p>
              <p>
                使雙眼達至既分工, 又協調的效果, 減低老花的徵狀, 而患者需時適應。
              </p>
              <p>方法是將一隻眼睛的度數調校至零度,主力負責看遠景;</p>
              <p>另一隻眼睛則調校至一百度至二百五十度的近視,負責看近物;</p>
              <p>雙眼相輔相成,互補不足,以至遠近皆能達到不錯的視力效果,</p>
              <p>應付大部分工作和日常生活上的視力需求。</p>
            </div>
            <div v-else-if="locale === 'en'">
              <p>Blended Vision</p>
              <p>
                Blended Vision, also known as Mono-Vision, works by implanting
                two IOL with different powers, both eye work together for
                different visual distance thereby reducing the symptoms of
                presbyopia. A period of adaptation will be needed for the
                patients.
              </p>
              <p>
                In Blended Vision, one eye will be used for far objects (about
                zero diopter) and the other will be used for mid-distant objects
                (about 1.0 to 2.50D myopic diopter). Theoretically, most of the
                daily activities can be done without glasses when seeing with
                both eyes.
              </p>
            </div>
          </div>
        </div>
        <div>
          <service-button-icon
            :str="
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_btn7'
              )
            "
            :link="'https://api.whatsapp.com/send?phone=85265767817&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'"
            :type="'1'"
          />
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/l3Jo-_4VCyQ?si=ODIF1maT_tJISfLu"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <!-- 白內障的術後注意事項 -->
      <div id="announcementsArr">
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_title_son7'
                )
              }}
            </div>
          </div>
        </div>
        <div>
          <div v-for="item in announcementsArr" :key="item.id">
            <div>
              <div>{{ item.id }}</div>
              <img :src="item.img" :alt="item.alt" :title="item.title" />
            </div>
            <div class="announ">{{ $t(item.text) }}</div>
          </div>
        </div>
      </div>
      <!-- 您認識白內障手術嗎？ -->
      <div id="faq">
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_title_son8'
                )
              }}
            </div>
          </div>
        </div>
        <div>
          <PageCollapse
            :answer="meetArr"
            :downarr="'cataract'"
            :style="{ '--subassembly-color': '#66c5dc' }"
          />
        </div>
      </div>
    </div>
    <div></div>
    <!-- 下载 -->
    <div class="dow">
      <div>
        <div>
          <a
            href="https://www.hkeyecmer.com/pdf/白内障3摺頁_2024_E-version.pdf"
            :download="$t(
                  'pages.medical_service.service_cataract_title.service_cataract_down2'
                )"
          >
            <img
              src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
              alt=""
              srcset=""
            />
          </a>
          <a
            href="https://www.hkeyecmer.com/pdf/白内障3摺頁_2024_E-version.pdf"
            :download="$t(
                  'pages.medical_service.service_cataract_title.service_cataract_down2'
                )"
          >
            <p>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_down2'
                )
              }}
            </p>
            <p>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_down_text'
                )
              }}
            </p>
          </a>
        </div>
      </div>
      <div>
        <div>
          <a
            href="https://www.hkeyecmer.com/pdf/人工晶體3摺頁_2024.07 V6_E-version.pdf"
            :download="
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_down1'
              )
            "
          >
            <img
              src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
              alt=""
              srcset=""
            />
          </a>
          <a
            href="https://www.hkeyecmer.com/pdf/人工晶體3摺頁_2024.07 V6_E-version.pdf"
            :download="
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_down1'
              )
            "
          >
            <p>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_down1'
                )
              }}
            </p>
            <p>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_down_text'
                )
              }}
            </p>
          </a>
        </div>
      </div>
    </div>
    <!-- 公共底部表单 -->
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#64bcd1;'}`"
    />
    <yahooPageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
.cataract {
  position: relative;
  max-width: 1200px;
  margin: 100px auto -40%;
  transform: scale(0.9);
  transform-origin: center top;
  & > div:nth-child(2) {
    & > div:nth-child(1) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 78px;
      position: relative;
      & > div:nth-child(1) {
        margin-top: 191px;
        z-index: 2;
      }
      & > div {
        & > div:nth-child(1) {
          font-family: 'NotoSansHK-Medium';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
        }
        & > div:nth-child(2) {
          //   cursor: pointer;
          margin-top: 77px;
          // margin-left: 8px;
          //   width: 375px;
          //   height: 85px;
          //   font-family: 'NotoSansHK-Bold';
          //   font-size: 36px;
          //   font-weight: normal;
          //   font-stretch: normal;
          //   line-height: 85px;
          //   letter-spacing: 0px;
          //   color: #ffffff;
          //   background-blend-mode: normal, normal;
          //   border-radius: 85px;
          //   -webkit-border-radius: 85px;
          //   text-align: center;
          //   position: relative;
          //   overflow: hidden;
          //   -webkit-backface-visibility: hidden;
          //   -webkit-transform: translate3d(0, 0, 0);
          //   // text-shadow: 0 2px 5px rgba($color: #000000, $alpha: .5);
          //   text-shadow: 0 2px 5px rgba($color: #000000, $alpha: .5);
          //   &::before {
          //     content: "";
          //     position: absolute;
          //     top: -100%;
          //     left: -100%;
          //     bottom: -100%;
          //     right: -100%;
          //     background: linear-gradient(45deg, #FBE679 0%, #F5C781 100%);
          //     background-size: 100% 100%;
          //     animation: bgposition 5s infinite linear alternate;
          //     z-index: -1;
          //   }
        }
      }
      & > div:nth-child(2) {
        position: relative;

        & > div > {
          img {
            position: relative;
            z-index: 3;
          }
        }
        & > div::after {
          content: '';
          background-color: #f2f2f2;
          position: absolute;
          width: 653px;
          height: 472px;
          bottom: -30px;
          left: -30px;
          z-index: 1;
          border-radius: 20px;
        }
      }
    }
    & > div:nth-child(2) {
      margin-top: 122px;
      padding-left: 3px;
      font-family: 'Noto Sans HK';
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 1.6;
      letter-spacing: 0px;
      color: #515151;
      & > p {
        margin-bottom: 41px;
      }
    }
    & > div:nth-child(3) {
      //   cursor: pointer;
      display: flex;
      justify-content: center;
      // margin: auto;
      margin-top: 103px;
      //   width: 695px;
      //   height: 85px;
      //   background-blend-mode: normal, normal;
      //   font-family: 'NotoSansHK-Bold';
      //   font-size: 36px;
      //   font-weight: normal;
      //   font-stretch: normal;
      //   line-height: 85px;
      //   letter-spacing: 0px;
      //   color: #ffffff;
      //   border-radius: 85px;
      //   position: relative;
      //   overflow: hidden;
      //   -webkit-backface-visibility: hidden;
      //   -webkit-transform: translate3d(0, 0, 0);
      //   text-shadow: 0 2px 5px rgba($color: #000000, $alpha: .5);
      //   &::before {
      //     content: "";
      //     position: absolute;
      //     top: -100%;
      //     left: -100%;
      //     bottom: -100%;
      //     right: -100%;
      //     background: linear-gradient(45deg, #FBE679 0%, #F5C781 100%);
      //     background-size: 100% 100%;
      //     animation: bgposition 5s infinite linear alternate;
      //     z-index: -1;
      //   }
    }
  }
  & > div:nth-child(3) {
    & > div:nth-child(1) {
      position: relative;
      & > div:nth-child(1) {
        width: 260px;
        height: 108px;
        border-radius: 20px;
        border: solid 2px #66c5dc;
        margin: auto;
        position: relative;
        & > div {
          font-family: 'NotoSansHK-Bold';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
          position: absolute;
          top: 27px;
          width: 450px;
          background: #fff;
          left: -65px;
        }
      }
      & > div:nth-child(2) {
        margin: 0 auto;
        margin-top: 78px;
        width: 100%;
        max-width: 1280px;
        height: 133px;
        border: solid 2px #66c5dc;
        font-family: 'Noto Sans HK';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1.6;
        letter-spacing: 0px;
        color: #515151;
        border-radius: 120px 20px 120px 20px;
        padding-top: 25px;
        padding-left: 75px;
        margin-left: -35px;
      }
    }
    & > div:nth-child(2) {
      margin-top: 94px;
      & > div:nth-child(1) {
        font-family: 'NotoSansHK-Medium';
        font-size: 30px;
        font-weight: bold;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #5ab7d5;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 312px;
        height: 66px;
      }
      & > div:nth-child(2) {
        margin-top: 97px;
        display: flex;
        flex-wrap: wrap;
        & > div {
          display: flex;
          flex-direction: row;
          // align-items: center;
          width: 100%;
          justify-content: space-evenly;
          & > div {
            & > img {
              box-shadow: 8px 8px 8px 2px #d8f1f7;
              border-radius: 50%;
              margin-bottom: 37px;
            }
            & > div {
              white-space: pre-wrap !important;
              text-align: center;
              // height: 54px;
              font-family: 'NotoSansHK-Medium';
              font-size: 24px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 35px;
              letter-spacing: 0px;
              color: #515151;
            }
          }
        }
        & > div:nth-child(2) {
          justify-content: space-between;
        }
      }
    }
  }
  & > div:nth-child(4) {
    margin-top: 200px;
    & > div:nth-child(1) {
      position: relative;
      & > div:nth-child(1) {
        width: 260px;
        height: 108px;
        border-radius: 20px;
        border: solid 2px #66c5dc;
        margin: auto;
        position: relative;
        & > div {
          font-family: 'NotoSansHK-Bold';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
          background: #fff;
          position: absolute;
          top: 27px;
          width: 462px;
          left: -66px;
        }
      }
      & > div:nth-child(2) {
        margin-top: 81px;
        padding-left: 4px;
        font-family: 'Noto Sans HK';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #515151;
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        margin: auto;
        text-align: center;
        margin-top: 75px;
        font-family: 'NotoSansHK-Medium';
        font-size: 30px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 75px;
        letter-spacing: 0px;
        color: #1b80a0;
        width: 501px;
        height: 75px;
        background-blend-mode: normal, normal;
        border-radius: 20px;
      }
      & > div:nth-child(2) {
        margin-top: 52px;
        & > div:nth-child(1) {
          padding-left: 3px;
          font-family: 'NotoSansHK-Bold';
          font-size: 26px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 35px;
          letter-spacing: 0px;
          color: #515151;
        }
        & > div:nth-child(2) {
          display: flex;
          justify-content: space-between;
          padding: 0 10px;
          & > div {
            transform: scale(0.85);
            display: flex;
            flex-direction: column;
            & > div {
              flex: 1;
              margin-top: 31px;
              white-space: pre-wrap !important;
              // height: 51px;
              height: auto;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: 'NotoSansHK-Medium';
              font-size: 22px;
              letter-spacing: 0px;
              color: #515151;
            }
          }
        }
        & > div:nth-child(3) {
          position: relative;
          margin-top: 102px;
          font-family: 'Noto Sans HK';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 1.6;
          letter-spacing: 0px;
          color: #515151;
          border: solid 2px #65c4da;
          border-radius: 143px;
          box-sizing: border-box;
          padding: 27px 80px;
          & > div:first-child {
            position: absolute;
            background: #fff;
            padding: 20px;
            right: 70px;
            top: -50px;
          }
          & > div:last-child {
            position: absolute;
            background: #fff;
            padding: 20px;
            bottom: -50px;
            left: 70px;
          }
        }
      }
      & > div:nth-child(3) {
        //   cursor: pointer;
        //   margin: auto;
        margin-top: 103px;
        display: flex;
        justify-content: center;
        //   width: 556px;
        //   height: 86px;
        //   background-blend-mode: normal, normal;
        //   font-family: 'NotoSansHK-Bold';
        //   font-size: 36px;
        //   font-weight: normal;
        //   font-stretch: normal;
        //   line-height: 86px;
        //   letter-spacing: 0px;
        //   color: #ffffff;
        //   border-radius: 86px;
        //   text-align: center;
        //   position: relative;
        //   overflow: hidden;
        //   -webkit-backface-visibility: hidden;
        //   -webkit-transform: translate3d(0, 0, 0);
        //   &::before {
        //     content: "";
        //     position: absolute;
        //     top: -100%;
        //     left: -100%;
        //     bottom: -100%;
        //     right: -100%;
        //     background: linear-gradient(45deg, #FBE679 0%, #F5C781 100%);
        //     background-size: 100% 100%;
        //     animation: bgposition 5s infinite linear alternate;
        //     z-index: -1;
        //   }
      }
    }
  }
  & > div:nth-child(5) {
    & > div:nth-child(1) {
      position: relative;
      & > div:nth-child(1) {
        width: 829px;
        height: 108px;
        border-radius: 20px;
        border: solid 2px #66c5dc;
        margin: auto;
        position: relative;
        & > div {
          font-family: 'NotoSansHK-Bold';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
          background: #fff;
          position: absolute;
          top: 27px;
          width: 980px;
          left: -66px;
        }
      }
    }
    & > div:nth-child(2) {
      margin-top: 81px;
      & > div:nth-child(1) {
        padding-left: 7px;
        font-family: 'Noto Sans HK';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #515151;
      }
      & > div:nth-child(2) {
        margin-top: 77px;
        margin-bottom: 171px;
        padding-left: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: scale(0.85);
        margin-left: -60px;
        & > div {
          display: flex;
          & > img:nth-child(1) {
            width: 847px;
            width: calc((847 / 1165) * 100%);
            max-width: 847px;
            z-index: 5;
          }
          & > img:nth-child(2) {
            width: calc((565 / 1165) * 100%);
            max-width: 565px;
            position: relative;
            z-index: 2;
            bottom: -80px;
            left: -115px;
          }
        }
      }
      & > div:nth-child(3) {
        border-radius: 20px;
        border: solid 2px #66c5dc;
        padding: 51px 50px;
        text-align: justify;
        font-family: 'Noto Sans HK';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1.6;
        letter-spacing: 0px;
        color: #515151;
      }
    }
    & > div:nth-child(3) {
      margin-top: 123px;
      & > div:nth-child(1) {
        background: linear-gradient(to right, #51d6d8, #2296bb);
        background: -webkit-gradient(
          linear,
          left top,
          right top,
          from(#51d6d8),
          to(#2296bb)
        );
        background: -moz-linear-gradient(to right, #51d6d8, #2296bb);
        background: -ms-linear-gradient(to right, #51d6d8, #2296bb);
        background: -o-linear-gradient(to right, #51d6d8, #2296bb);
        background-clip: text;
        color: transparent;
        font-family: 'NotoSansHK-Bold';
        font-size: 38px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        text-align: center;
        line-height: 1;
      }
      & > div:nth-child(2) {
        margin-top: 68px;
        font-family: 'Noto Sans HK';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1.6;
        letter-spacing: 0px;
        color: #515151;
      }
      & > div:nth-child(3) {
        margin: 48px 30px;
        display: flex;
        justify-content: space-between;
        & > div > div {
          margin-top: 37px;
          white-space: pre-wrap !important;
          text-align: center;
          font-family: 'Noto Sans HK';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 1.6;
          letter-spacing: 0px;
          color: #515151;
        }
        .lineText {
          display: none;
        }
      }
    }
    & > div:nth-child(4) {
      max-width: 1530px;
      margin: 0 auto;
      & > div:nth-child(1) {
        width: 557px;
        height: 98px;
        margin: auto;
        border-radius: 43px;
        border: solid 2px #66c5dc;
        font-family: 'NotoSansHK-Medium';
        font-size: 36px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #66c5dc;
        line-height: 2.5;
        text-align: center;
      }
      & > div:nth-child(2) {
        margin: 10px auto 7px auto;
        display: flex;
        justify-content: center;
      }
      & > div:nth-child(3) {
        display: flex;
        margin: auto 57px;
        justify-content: space-between;
        & > div {
          width: 369px;
          height: 175px;
          border-radius: 17px;
          border: solid 2px #66c5dc;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'NotoSansHK-Medium';
          font-size: 34px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #66c5dc;
          transform: scale(0.85);
          margin-top: -15px;
        }
      }
    }
    & > div:nth-child(5) {
      display: flex;
      justify-content: center;
      //   cursor: pointer;
      //   font-family: 'NotoSansHK-Bold';
      //   margin: auto;
      margin-top: 126px;
      //   font-size: 36px;
      //   text-align: center;
      //   border-radius: 86px;
      //   font-weight: normal;
      //   font-stretch: normal;
      //   line-height: 86px;
      //   letter-spacing: 0px;
      //   color: #f8fcff;
      //   width: 556px;
      //   height: 86px;
      //   background-blend-mode: normal, normal;
      //   position: relative;
      //   overflow: hidden;
      //   -webkit-backface-visibility: hidden;
      //   -webkit-transform: translate3d(0, 0, 0);
      //   text-shadow: 0 2px 5px rgba($color: #000000, $alpha: .5);
      //   &::before {
      //     content: "";
      //     position: absolute;
      //     top: -100%;
      //     left: -100%;
      //     bottom: -100%;
      //     right: -100%;
      //     background: linear-gradient(45deg, #FBE679 0%, #F5C781 100%);
      //     background-size: 100% 100%;
      //     animation: bgposition 5s infinite linear alternate;
      //     z-index: -1;
      //   }
    }
  }
  & > div:nth-child(6) {
    & > div:nth-child(1) {
      position: relative;
      & > div:nth-child(1) {
        width: 204px;
        height: 108px;
        border-radius: 20px;
        border: solid 2px #66c5dc;
        margin: auto;
        position: relative;
        & > div {
          font-family: 'NotoSansHK-Bold';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
          background: #fff;
          position: absolute;
          top: 27px;
          width: 350px;
          left: -66px;
        }
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        padding-left: 2px;
        padding-right: 6px;
        margin: 61px auto;
        font-family: 'Noto Sans HK';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 42px;
        letter-spacing: 0px;
        color: #515151;
      }
      & > div:nth-child(2) {
        max-width: 1530px;
        margin: 0 auto;
        border: #21a1c1 solid 2px;
        border-radius: 20px;
        overflow: hidden;
        font-family: 'NotoSansHK-Medium';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 31px;
        letter-spacing: 0px;
        color: #515151;
        & > div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          height: 142px;
          background: #f6fbfe;
          border-bottom: 2px solid #21a1c1;
          white-space: pre-wrap !important;
          text-align: center;
          & > div {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            border-right: 2px solid #21a1c1;
            & > div {
              & > div {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                & > img {
                  margin-right: 5px;
                }
              }
            }
          }
          & > div:last-child {
            border-right: none;
          }
        }
        .else_multipleFocus {
          display: flex;
        }
        .ele_strong {
          width: 25px;
          display: block;
        }
        & > div:nth-child(1) {
          background: #64bcd1;
          font-family: 'NotoSansHK-Bold';
          font-size: 28px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 42px;
          letter-spacing: 0px;
          color: #ffffff;
          text-align: center;
        }
        & > div:nth-child(3),
        & > div:nth-child(4) {
          & > div:nth-child(2) {
            & > div {
              & > div:nth-child(2) {
                font-size: 18px;
                img {
                  display: none;
                }
              }
            }
          }
        }
        & > div:nth-child(5) {
          & > div:nth-child(2) {
            & > div {
              display: flex;
              flex-direction: column;
              align-items: center;
              & > div {
                display: flex;
                flex-direction: row;
                align-items: center;
              }
              & > div:nth-child(2) {
                font-family: 'Noto Sans HK';
                font-size: 18px;
                & > img {
                  display: none;
                }
              }
            }
          }
          & > div:nth-child(3) {
            & > div {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              & > div {
                display: flex;
                flex-direction: row;
                align-items: center;
                & > img {
                  margin-right: 5px;
                }
              }
              & > div:nth-child(2) {
                margin-top: 20px;
              }
            }
          }
          & > div:nth-child(4) {
            & > div {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              & > div {
                display: flex;
                flex-direction: row;
                align-items: center;
                & > img {
                  margin-right: 5px;
                }
              }
              & > div:nth-child(2) {
                margin-top: 20px;
              }
            }
          }
        }
        & > div:nth-child(6) {
          height: 275px;
          font-family: 'NotoSansHK-Medium';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 1.8;
          letter-spacing: 0px;
          color: #515151;
          & > div:nth-child(2) {
            & > div {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              & > div {
                & > img {
                  display: none;
                }
              }
            }
          }
          & > div:nth-child(3) {
            & > div {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              & > div {
                & > img {
                  display: none;
                }
              }
            }
          }
          & > div:nth-child(4) {
            & > div {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              text-align: left;
              & > div {
                display: flex;
                flex-direction: row;
                align-items: center;
                & > img {
                  margin-right: 5px;
                }
              }
            }
            & > div:nth-child(1) {
              & > div:nth-child(1) {
                & > div:nth-child(1) {
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  text-align: left;
                }
              }
            }
          }
        }
        & > div:last-child {
          border-bottom: none;
        }
      }
      & > div > div > div:nth-child(1) {
        width: 245px;
        margin-left: 44px;
        flex: none;
        display: flex;
        justify-content: flex-start;
        & > div {
          padding-top: 8px;
          display: flex;
          & > div {
            flex-direction: column;

            & > div:nth-child(2) {
              font-size: 18px;
            }
          }
        }
        & > img {
          margin-right: 10px;
        }
      }
      & > div:nth-child(3) {
        margin-top: 45px;
        font-family: 'Noto Sans HK';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 32px;
        letter-spacing: 0px;
        color: #515151;
      }
    }

    & > div:nth-child(3) {
      //   width: 556px;
      //   height: 86px;
      //   background-blend-mode: normal, normal;
      //   margin: auto;
      //   font-family: 'NotoSansHK-Bold';
      //   font-size: 36px;
      //   font-weight: normal;
      //   font-stretch: normal;
      //   line-height: 52px;
      //   letter-spacing: 0px;
      //   color: #f8fcff;
      display: flex;
      //   align-items: center;
      justify-content: center;
      //   border-radius: 85px;
      margin-top: 105px;
      //   cursor: pointer;
      //   position: relative;
      //   overflow: hidden;
      //   -webkit-backface-visibility: hidden;
      //   -webkit-transform: translate3d(0, 0, 0);
      //   text-shadow: 0 2px 5px rgba($color: #000000, $alpha: .5);
      //   &::before {
      //     content: "";
      //     position: absolute;
      //     left: 50%;
      //     top: 50%;
      //     transform: translate(-50%,-50%);
      //     top: -100%;
      //     left: -100%;
      //     bottom: -100%;
      //     right: -100%;
      //     background: linear-gradient(45deg, #FBE679 0%, #F5C781 100%);
      //     background-size: 100% 100%;
      //     animation: bgposition 5s infinite linear alternate;
      //     z-index: -1;
      //   }
    }
    & > div:nth-child(4) {
      margin-top: 100px;
      display: flex;
      justify-content: center;
      iframe {
        width: 760px;
        height: calc(315 / 560 * 760px);
      }
    }
  }
  & > div:nth-child(7) {
    & > div:nth-child(1) {
      position: relative;
      & > div:nth-child(1) {
        width: 306px;
        height: 108px;
        border-radius: 20px;
        border: solid 2px #66c5dc;
        margin: auto;
        position: relative;
        & > div {
          font-family: 'NotoSansHK-Bold';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
          background: #fff;
          position: absolute;
          top: 27px;
          width: 420px;
          left: -66px;
        }
      }
    }
    & > div:nth-child(2) {
      margin-top: 90px;
      & > div {
        display: flex;
        align-items: center;
        margin: 60px;
      }
      & > div:nth-child(2n) {
        flex-direction: row-reverse;
        & > div:nth-child(2) {
          margin-right: 40px;
          font-family: 'Noto Sans HK';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 41px;
          letter-spacing: 0px;
          color: #515151;
        }
        & > div > div:nth-child(1) {
          position: absolute;
          top: -27px;
          right: -43px;
        }
      }
      & > div:nth-child(2n + 1) {
        & > div:nth-child(2) {
          margin-left: 40px;
          font-family: 'Noto Sans HK';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 41px;
          letter-spacing: 0px;
          color: #515151;
        }
        & > div > div:nth-child(1) {
          position: absolute;
          top: -27px;
          left: -40px;
        }
      }
      & > div > div:nth-child(1) {
        position: relative;
        width: calc(210 / 900 * 100%);
        & > div:nth-child(1) {
          font-family: 'AcuminVariableConcept';
          font-size: 120px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 41px;
          letter-spacing: 0px;
          color: #ffffff;
          text-shadow: 0px 0px 5px #66c5dc;
          font-style: oblique;
        }
      }
      & > div > div:nth-child(2) {
        flex: 1;
      }
    }
  }

  & > div:nth-child(8) {
    & > div:nth-child(1) {
      position: relative;
      & > div:nth-child(1) {
        width: 306px;
        height: 108px;
        border-radius: 20px;
        border: solid 2px #66c5dc;
        margin: auto;
        position: relative;
        & > div {
          font-family: 'NotoSansHK-Bold';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
          background: #fff;
          position: absolute;
          top: 27px;
          width: 430px;
          left: -62px;
        }
      }
    }
    & > div:nth-child(2) {
      margin-top: 100px;
    }
  }
  // 公共使用
  & > div {
    margin-top: 200px;
  }
  & > div:first-child {
    margin: 0;
  }

  & > div:nth-child(2) {
    margin: 0;
  }
}
.cataract-en {
  & > div:nth-child(2) {
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        margin-top: 80px;
        max-width: 380px;
      }
      & > div {
        & > div:nth-child(1) {
          font-size: 32px;
        }
        & > div:nth-child(2) {
          max-width: 100%;
        }
      }
    }
  }
  & > div:nth-child(3) {
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        & > div {
          width: max-content;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(2) {
        & > div {
          align-items: start;
          & > div {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            max-width: 216px;
            & > div {
              height: auto;
            }
          }
        }
      }
    }
    & > div:nth-child(1) {
      & > div:nth-child(2) {
        width: 100%;
        max-width: 1280px;
        margin-left: 0;
      }
    }
  }
  & > div:nth-child(4) {
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        & > div {
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        width: auto;
      }
      & > div:nth-child(2) {
        & > div:nth-child(2) {
          & > div {
            flex: 1;
            line-height: 1.2;
          }
        }
      }
      & > div:nth-child(3) {
        // width: max-content;
        max-width: 100%;
        padding: 0 30px;
      }
    }
  }
  & > div:nth-child(5) {
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        height: 160px;
      }
    }
    & > div:nth-child(3) {
      & > div:nth-child(3) {
        & > div {
          flex: 1;
        }
      }
    }
    & > div:nth-child(4) {
      & > div:nth-child(1) {
        line-height: 1.2;
        font-size: 32px;
        line-height: 140%;
      }
      & > div:nth-child(3) {
        & > div {
          text-align: center;
        }
      }
    }
    & > div:nth-child(5) {
      // width: max-content;
      max-width: 100%;
      padding: 0 30px;
    }
  }
  & > div:nth-child(6) {
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        & > div {
          white-space: nowrap;
          width: auto;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(2) {
        & > div {
          height: auto;
          min-height: 144px;
        }
        & > div:nth-of-type(5) {
          & > div:nth-of-type(4) {
            & > div {
              & > div:nth-of-type(2) {
                margin-top: 5px;
              }
            }
          }
        }
        & > div:nth-of-type(6) {
          height: auto;
        }
      }
    }
    & > div:nth-child(3) {
      // width: max-content;
      max-width: 100%;
      padding: 0 30px;
    }
  }
  & > div:nth-child(7) {
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        & > div {
          width: max-content;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    & > div:nth-child(2) {
      & > div {
        & > div:nth-child(1) {
          min-width: 210px;
        }
      }
    }
  }
  & > div:nth-child(8) {
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        & > div {
          white-space: nowrap;
          width: auto;
          left: 50%;
          transform: translateX(-50%);
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
.dow {
  margin-top: -350px;
  margin-bottom: 150px;
  color: #fff;
  font-size: 30px;

  & > div:nth-child(2) {
    margin-top: 88px;
    & > div {
      width: 62.93%;
      height: 202px;
      background: #64bcd1;
      position: relative;
      display: flex;
      align-items: center;

      & > a:nth-child(1) {
        margin-left: 37.28433%;
        margin-right: 3.90625%;
        cursor: pointer;

        & > img {
          width: 120px;
          height: 135px;
        }
      }

      & > a:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        text-align: center;
      }
    }
  }

  & > div:nth-child(1) {
    & > div {
      width: 58.2%;
      height: 202px;
      background: #64bcd1;
      position: relative;
      display: flex;
      align-items: center;

      & > a:nth-child(1) {
        margin-left: 30vw;
        margin-right: 3vw;
        cursor: pointer;

        & > img {
          width: 120px;
          height: 135px;
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
  .cataract {
    transform: scale(1);
    margin: 0;
    & > div:nth-child(2) {
      width: calc(100% - 60px);
      margin: 0 auto;
      & > div:nth-child(1) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        margin-left: 0;
        margin-top: 20px;
        & > div:nth-child(1) {
          margin-top: 0;
          flex: 1;
        }
        & > div {
          & > div:nth-child(1) {
            font-size: 16px;
            line-height: 1.6;
            text-align: center;
          }
          & > div:nth-child(2) {
            // margin-left: 0;
            // font-size: 18px;
            // line-height: 1.6;
            // width: auto;
            // height: 45px;
            // line-height: 35px;
            // padding: 5px 40px;
            margin-top: 20px;
          }
        }
        & > div:nth-child(2) {
          width: 60%;
          margin-top: 34px;
          & > div::after {
            width: 100%;
            height: 100%;
            top: 10px;
            left: -10px;
            border-radius: 5px;
          }
        }
      }
      & > div:nth-child(2) {
        width: 100%;
        font-size: 14px;
        line-height: 160%;
        margin-top: 50px;
        & > p {
          margin-bottom: 20px;
        }
      }
      & > div:nth-child(3) {
        // width: 100%;
        // font-size: 18px;
        // height: 45px;
        // line-height: 45px;
        margin-top: 30px;
      }
    }
    & > div:nth-child(3) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          width: 120px;
          height: 70px;
          border-radius: 15px;
          & > div {
            width: max-content;
            font-size: 22px;
            line-height: 30px;
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
        & > div:nth-child(2) {
          margin-top: 30px;
          width: 100%;
          border-radius: 60px 10px 60px 10px;
          margin-left: 0px;
          font-size: 14px;
          line-height: 1.6;
          padding: 25px 30px 20px;
          height: auto;
        }
      }
      & > div:nth-child(2) {
        margin-top: 30px;
        & > div:nth-child(1) {
          font-size: 18px;
          line-height: 35px;
          height: auto;
          width: max-content;
          padding: 0 15px 2px;
          border-radius: 10px;
        }
        & > div:nth-child(2) {
          margin-top: 50px;
          & > div {
            align-items: flex-start;
            margin-bottom: 20px;
            & > div {
              width: 65px;
              & > img {
                box-shadow: 2px 2px 2px 2px #d8f1f7;
                margin-bottom: 10px;
              }
              & > div {
                font-size: 14px;
                line-height: 1.6;
                height: auto;
                text-align: center;
                & > div {
                  div {
                    display: inline;
                  }
                }
              }
            }
            &:nth-of-type(1) {
              & > div:nth-of-type(3) {
                & > div {
                  width: 120px;
                  margin-left: -25px;
                  & > div {
                    div {
                      display: inline-block;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    & > div:nth-child(4) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          width: 120px;
          height: 70px;
          border-radius: 15px;
          & > div {
            width: max-content;
            font-size: 22px;
            line-height: 30px;
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
        & > div:nth-child(2) {
          margin-top: 30px;
          font-size: 14px;
          line-height: 1.6;
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          // width: max-content;
          width: 100%;
          text-align: center;
          margin-top: 40px;
          height: auto;
          padding: 10px 0;
          font-size: 16px;
          line-height: 1.6;
          border-radius: 10px;
        }
        & > div:nth-child(2) {
          margin-top: 30px;
          & > div:nth-child(1) {
            font-size: 16px;
            line-height: 1.6;
            padding-left: 0;
          }
          & > div:nth-child(2) {
            margin-top: 20px;
            flex-wrap: wrap;
            justify-content: center;
            padding: 0;
            width: calc(100% + 20px);
            margin-left: -10px;
            & > div {
              transform: scale(1);
              width: 33.33%;
              padding: 0 10px;
              margin-bottom: 30px;
              img {
                filter: drop-shadow(2px 1px 7px rgba(0, 0, 0, 0.45));
              }
              & > div {
                text-align: center;
                font-size: 12px;
                margin-top: 5px;
              }
            }
          }
          & > div:nth-child(3) {
            margin-top: 0;
            padding: 20px 30px;
            font-size: 14px;
            line-height: 1.6;
            & > div:first-child {
              right: 50px;
              padding: 5px;
              top: -30px;
              svg {
                transform: scale(0.7);
              }
            }
            & > div:last-child {
              left: 50px;
              padding: 5px;
              bottom: -30px;
              svg {
                transform: scale(0.7);
              }
            }
          }
        }
        & > div:nth-child(3) {
          // width: max-content;
          // height: 44px;
          // padding: 0 30px;
          // line-height: 44px;
          // font-size: 22px;
          margin-top: 50px;
        }
      }
    }
    & > div:nth-child(5) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          width: 200px;
          height: 130px;
          border-radius: 15px;
          & > div {
            // width: 330px;
            width: calc((330 / 200) * 100%);
            max-width: 330px;
            font-size: 22px;
            line-height: 40px;
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
      & > div:nth-child(2) {
        margin-top: 30px;
        & > div:nth-child(1) {
          font-size: 14px;
          line-height: 2;
        }
        & > div:nth-child(2) {
          transform: scale(1);
          margin-top: 30px;
          margin-left: 0px;
          padding-left: 0;
          margin-bottom: 0;
          width: 100%;
          & > div {
            & > img:nth-child(1) {
              // width: 210px;
              width: calc((240 / 390) * 100%);
            }
            & > img:nth-child(2) {
              // width: 150px;
              width: calc((180 / 390) * 100%);
              bottom: -20px;
              left: -30px;
              left: calc((-30 / 390) * 100%);
            }
          }
        }
        & > div:nth-child(3) {
          font-size: 14px;
          line-height: 2;
          padding: 15px 20px;
          margin-top: 40px;
          border: solid 1px #66c5dc;
        }
      }
      & > div:nth-child(3) {
        margin-top: 55px;
        & > div:nth-child(1) {
          font-size: 24px;
        }
        & > div:nth-child(2) {
          margin-top: 30px;
          line-height: 2;
          font-size: 14px;
        }
        & > div:nth-child(3) {
          margin: 48px auto;
          flex-direction: column;
          & > div {
            display: flex;
            align-items: center;
            position: relative;
            &:not(:first-child) {
              margin-top: 30px;
            }
            img {
              // width: 150px;
              width: calc((150 / 330) * 100%);
              max-width: 150px;
              position: relative;
              z-index: 2;
              margin-left: 20px;
            }
          }
          & > div > div:nth-of-type(1) {
            font-size: 16px;
            border: 2px solid #a6def0;
            border-radius: 20px;
            width: 230px;
            justify-content: flex-end;
            padding-right: 10px;
            margin-left: -60px;
            height: 120px;
            display: flex;
            align-items: center;
            margin-top: 0;
            position: relative;
            z-index: 1;
            div {
              width: calc((130 / 200) * 100%);
              max-width: 130px;
              display: initial;
            }
          }
          .lineText {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 3;
            color: #fff;
            font-size: 12px;
            border: 1px solid #51d6d8;
            padding: 5px;
            border-radius: 50%;
            margin-top: 10px;
            & > div {
              width: 45px;
              height: 45px;
              background: linear-gradient(270deg, #2296bb 0%, #51d6d8 100%);
              line-height: 45px;
              text-align: center;
              border-radius: 50%;
            }
          }
        }
      }
      & > div:nth-child(4) {
        max-width: 330px;
        & > div:nth-child(1) {
          width: 100%;
          max-width: max-content;
          font-size: 18px;
          height: auto;
          line-height: 1.6;
          padding: 5px 30px;
        }
        & > div:nth-child(2) {
          display: none;
        }
        & > div:nth-child(3) {
          flex-direction: column;
          font-size: 16px;
          margin: 0 0 0 40px;
          padding-left: 20px;
          border-left: solid 2px #66c5dc;
          & > div {
            width: 100%;
            height: auto;
            border: none;
            margin-top: 20px;
            font-size: 16px;
            transform: scale(1);
            justify-content: flex-start;
            position: relative;
            &::before {
              content: '';
              position: absolute;
              top: 0;
              top: 50%;
              transform: translateY(-50%);
              left: -32px;
              width: 20px;
              height: 20px;
              background: url(https://static.cmereye.com/imgs/2023/07/5f0bd54a3df3bf8f.png);
              background-size: 100% 100%;
            }
            br {
              display: none;
            }
          }
        }
      }
      & > div:nth-child(5) {
        // font-size: 18px;
        margin-top: 55px;
        // width: max-content;
        // height: auto;
        // padding: 5px 30px;
        // line-height: 1.6;
      }
    }
    & > div:nth-child(6) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          width: 120px;
          height: 70px;
          border-radius: 15px;
          & > div {
            // width: max-content;
            width: calc((330 / 120) * 100%);
            max-width: max-content;
            font-size: 22px;
            line-height: 30px;
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            white-space: pre-wrap;
          }
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          margin: 30px auto 10px;
          font-size: 14px;
          line-height: 2;
        }
        & > div:nth-child(2) {
          font-size: 12px;
          line-height: 1.4;
          & > div {
            height: auto;
            & > div {
              & > div {
                & > div {
                  & > img {
                    width: 15px;
                    margin-left: 10px;
                  }
                }
              }
            }
          }
          & > div:nth-child(1) {
            font-size: 16px;
            line-height: 1.2;
            & > div {
              padding: 10px 0;
            }
          }
          & > div:nth-child(3),
          & > div:nth-child(4) {
            & > div:nth-child(2) {
              & > div {
                & > div:nth-child(2) {
                  font-size: 12px;
                }
              }
            }
          }
          & > div:nth-child(5) {
            & > div:nth-child(2) {
              & > div {
                padding: 15px 5px 15px 0;
                & > div {
                  align-items: flex-start;

                  & > img {
                    margin-top: 3px;
                  }
                }
                & > div:nth-child(2) {
                  font-size: 12px;
                }
              }
            }
            & > div:nth-child(3) {
              align-items: flex-start;
              & > div {
                padding: 15px 5px 15px 0;
                & > div {
                  align-items: flex-start;

                  & > img {
                    margin-top: 3px;
                  }
                }
                & > div:nth-child(2) {
                  margin-top: 0px;
                }
              }
            }
            & > div:nth-child(4) {
              align-items: flex-start;
              & > div {
                padding: 15px 5px 15px 0;
                & > div {
                  align-items: flex-start;
                  & > img {
                    margin-top: 3px;
                  }
                }
                & > div:nth-child(2) {
                  margin-top: 0px;
                }
              }
            }
          }
          & > div:nth-child(6) {
            height: auto;
            font-size: 12px;
            & > div {
              padding: 15px 5px;
              &:nth-of-type(n + 2) {
                align-items: flex-start;
              }
            }
          }
        }
        & > div > div > div:nth-child(1) {
          width: 70px;
          margin-left: 0;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px 0;
          & > div {
            & > div {
              & > div:nth-child(2) {
                font-size: 12px;
              }
            }
          }
          & > img {
            margin-right: 0;
          }
        }
        & > div:nth-child(3) {
          margin-top: 14px;
          font-size: 14px;
          line-height: 1.6;
        }
      }
      & > div:nth-child(3) {
        // font-size: 18px;
        margin-top: 55px;
        // width: max-content;
        // height: auto;
        // padding: 5px 30px;
        // line-height: 1.6;
      }
      & > div:nth-child(4) {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        iframe {
          width: 100%;
          height: calc(315 / 560 * (100vw - 60px));
        }
      }
    }
    & > div:nth-child(7) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          width: 120px;
          height: 70px;
          border-radius: 15px;
          & > div {
            // width: max-content;
            width: calc((330 / 120) * 100%);
            max-width: max-content;
            white-space: pre-wrap;
            font-size: 22px;
            line-height: 30px;
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
      & > div:nth-child(2) {
        margin-top: 50px;
        & > div {
          margin: 60px 0;
        }
        & > div:nth-child(2n) {
          & > div:nth-of-type(1) {
            width: 120px;
            img {
              width: 100%;
            }
          }
          & > div:nth-child(2) {
            margin-right: 15px;
            font-size: 14px;
            line-height: 1.6;
            flex: 1;
          }
          & > div > div:nth-child(1) {
            top: -15px;
            right: 0px;
          }
        }
        & > div:nth-child(2n + 1) {
          & > div:nth-of-type(1) {
            width: 120px;
            img {
              width: 100%;
            }
          }
          & > div:nth-child(2) {
            margin-left: 15px;
            font-size: 14px;
            line-height: 1.6;
            flex: 1;
          }
          & > div > div:nth-child(1) {
            left: 0;
            top: -15px;
          }
        }
        & > div > div:nth-child(1) {
          & > div:nth-child(1) {
            font-style: initial;
            font-size: 70px;
          }
        }
      }
    }
    & > div:nth-child(8) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          width: 120px;
          height: 70px;
          border-radius: 15px;
          & > div {
            // width: max-content;
            width: calc((330 / 120) * 100%);
            max-width: max-content;
            white-space: pre-wrap;
            font-size: 22px;
            line-height: 30px;
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
      & > div:nth-child(2) {
        margin-top: 50px;
      }
    }
    & > div {
      margin-top: 70px;
    }
  }
  .cataract-en {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        & > div {
          & > div:nth-child(1) {
            font-size: 20px;
          }
          & > div:nth-child(2) {
            padding: 10px 30px;
            height: auto;
            line-height: 1.2;
          }
        }
      }
      & > div:nth-child(3) {
        // height: auto;
        // line-height: 1.2;
        // text-align: center;
        // padding: 10px 30px;
      }
    }
    & > div:nth-child(3) {
      & > div:nth-child(2) {
        & > div:nth-child(2) {
          & > div:nth-child(1) {
            & > div:nth-child(3) {
              & > div {
                margin-left: 0;
              }
            }
          }
        }
      }
    }
    & > div:nth-child(4) {
      & > div:nth-child(2) {
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            & > div {
              flex: initial;
              // width: ;
              & > div {
                height: auto;
              }
            }
          }
        }
        & > div:nth-child(3) {
          max-width: 100%;
          font-size: 18px !important;
          padding: 10px 30px;
          line-height: 1.6;
          height: auto;
        }
      }
    }
    & > div:nth-child(5) {
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          & > div {
            line-height: 30px !important;
          }
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(1) {
          max-width: 100%;
        }
        & > div:nth-child(3) {
          & > div {
            text-align: left;
          }
        }
      }
    }
    & > div:nth-child(6) {
      width: 100%;
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          padding: 0 30px;
        }
        & > div:nth-child(3) {
          padding: 0 30px;
        }
      }
      & > div:nth-child(3) {
        // max-width: 330px;
        text-align: center;
      }
    }
    & > div:nth-child(7) {
      & > div:nth-child(2) {
        & > div {
          & > div:nth-child(1) {
            min-width: 130px;
          }
        }
      }
    }
  }
  .dow {
    margin-top: 70px;
    font-size: 14px;

    & > div:nth-child(1) {
      & > div {
        width: calc(100% - 30px);
        height: 90px;

        & > a:nth-child(1) {
          cursor: pointer;
          margin-left: 20%;
          margin-right: 8%;

          & > img {
            width: 46px;
            max-width: auto;
            height: auto;
          }
        }
      }
    }

    & > div:nth-child(2) {
      & > div {
        height: 90px;
        width: 65%;
        margin-top: 40px;

        & > a:nth-child(1) {
          cursor: pointer;
          margin-left: 18%;
          margin-right: 8%;

          & > img {
            width: 46px;
            max-width: auto;
            height: auto;
          }
        }
      }
    }
  }
}
@media (min-width: 678px) and (max-width: 1200px) {
  .cataract {
    margin-bottom: -80%;
  }
}
</style>

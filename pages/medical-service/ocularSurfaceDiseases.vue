<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: t('pages.medical_service.ocularSurfaceDiseases_head'),
  meta(){
    return [
      {
        hid: 'ocularSurfaceDiseasesDesc',
        name: 'description',
        content: t('tdk.ocularSurfaceDiseases.desc'),
      },
      {
        hid: 'ocularSurfaceDiseasesKey',
        name: 'keywords',
        content: t('tdk.ocularSurfaceDiseases.key'),
      }
    ]
  },
}))
const locale = useState<string>('locale.setting')
// 传递背景色
const backgd = [
  '#7DBE9C;',
  '-webkit-linear-gradient(to right, #C1DFB4, #68BE92);',
  'linear-gradient(to right, #C1DFB4, #68BE92);',
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
// 内部导航
const serviceNavigation = [
  {
    anchorName:
      'pages.medical_service.ocularSurfaceDiseases_con.navLists.name1',
    anchorLink: '/medical-service/ocularSurfaceDiseases#pterygium',
  },
  {
    anchorName:
      'pages.medical_service.ocularSurfaceDiseases_con.navLists.name2',
    anchorLink: '/medical-service/ocularSurfaceDiseases#blepharitis',
  },
  {
    anchorName:
      'pages.medical_service.ocularSurfaceDiseases_con.navLists.name3',
    anchorLink: '/medical-service/ocularSurfaceDiseases#keratitis',
  },
  {
    anchorName:
      'pages.medical_service.ocularSurfaceDiseases_con.navLists.name4',
    anchorLink: '/medical-service/ocularSurfaceDiseases#iritis',
  },
  {
    anchorName:
      'pages.medical_service.ocularSurfaceDiseases_con.navLists.name5',
    anchorLink: '/medical-service/ocularSurfaceDiseases#episcleritis',
  },
  {
    anchorName:
      'pages.medical_service.ocularSurfaceDiseases_con.navLists.name6',
    anchorLink: '/medical-service/ocularSurfaceDiseases#damage',
  },
  {
    anchorName:
      'pages.medical_service.ocularSurfaceDiseases_con.navLists.name7',
    anchorLink: '/medical-service/ocularSurfaceDiseases#keratoconus',
  },
  {
    anchorName:
      'pages.medical_service.ocularSurfaceDiseases_con.navLists.name8',
    anchorLink: '/medical-service/ocularSurfaceDiseases#keratoplasty',
  },
]
// 常見問題
const meetArr = [
  {
    title: 'pages.medical_service.ocularSurfaceDiseases_con.faq.q1',
    agree: 'pages.medical_service.ocularSurfaceDiseases_con.faq.a1',
  },
  {
    title: 'pages.medical_service.ocularSurfaceDiseases_con.faq.q2',
    agree: 'pages.medical_service.ocularSurfaceDiseases_con.faq.a2',
  },
  {
    title: 'pages.medical_service.ocularSurfaceDiseases_con.faq.q3',
    agree: [
      'pages.medical_service.ocularSurfaceDiseases_con.faq.a3_1',
      'pages.medical_service.ocularSurfaceDiseases_con.faq.a3_2',
      'pages.medical_service.ocularSurfaceDiseases_con.faq.a3_3',
      'pages.medical_service.ocularSurfaceDiseases_con.faq.a3_4',
    ],
  },
]
const pterygiumList1 = [
  {
    id: 0o1,
    text: 'pages.medical_service.ocularSurfaceDiseases_con.pterygium.text3_1',
  },
  {
    id: 0o2,
    text: 'pages.medical_service.ocularSurfaceDiseases_con.pterygium.text3_2',
  },
  {
    id: 0o3,
    text: 'pages.medical_service.ocularSurfaceDiseases_con.pterygium.text3_3',
  },
  {
    id: 0o4,
    text: 'pages.medical_service.ocularSurfaceDiseases_con.pterygium.text3_4',
  },
]
const blepharitisList1 = [
  {
    text: 'pages.medical_service.ocularSurfaceDiseases_con.blepharitis.text1',
  },
  {
    text: 'pages.medical_service.ocularSurfaceDiseases_con.blepharitis.text2',
  },
  {
    text: 'pages.medical_service.ocularSurfaceDiseases_con.blepharitis.text3',
  },
  {
    text: 'pages.medical_service.ocularSurfaceDiseases_con.blepharitis.text4',
  },
  {
    text: 'pages.medical_service.ocularSurfaceDiseases_con.blepharitis.text5',
  },
]
const blepharitisList2 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/b12fb31271ef4c0e.png',
    text: 'pages.medical_service.ocularSurfaceDiseases_con.blepharitis.text1_1',
    img_title: '眼瞼炎症狀_眼瞼紅腫',
    img_alt: '眼臉紅腫為眼臉炎症狀'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/2072d440153d5969.png',
    text: 'pages.medical_service.ocularSurfaceDiseases_con.blepharitis.text1_2',
    img_title: '眼瞼炎症狀_眼睛分泌物',
    img_alt: '眼睛分泌物為眼臉炎症狀'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/7aa1338885c18acb.png',
    text: 'pages.medical_service.ocularSurfaceDiseases_con.blepharitis.text1_3',
    img_title: '眼瞼炎症狀_倒睫',
    img_alt: '倒睫為眼臉炎症狀'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/4f1cd4190fdbe151.png',
    text: 'pages.medical_service.ocularSurfaceDiseases_con.blepharitis.text1_4',
    img_title: '眼瞼炎症狀_結膜炎',
    img_alt: '男患者眼睛紅腫為眼臉炎症狀表現'
  },
]
const blepharitisList3 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/77695fe77bc38fee.png',
    text: 'pages.medical_service.ocularSurfaceDiseases_con.blepharitis.text2_1',
    img_title: '眼瞼炎治療_熱敷',
    img_alt: '老年女患者使用熱敷方式進行眼臉炎治療'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/9ee874c1ff5832b4.png',
    text: 'pages.medical_service.ocularSurfaceDiseases_con.blepharitis.text2_2',
    img_title: '眼瞼炎治療_抗生素眼藥水',
    img_alt: '使用抗生素眼藥水進行眼臉炎治療'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/0ffb423f9bec8c60.png',
    text: 'pages.medical_service.ocularSurfaceDiseases_con.blepharitis.text2_3',
    img_title: '眼瞼炎治療_眼科手術',
    img_alt: '眼科手術為眼臉炎治療方法'
  },
]
const keratitisList = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/658fd4961f627781.png',
    text: 'pages.medical_service.ocularSurfaceDiseases_con.keratitis.text1',
    img_title: '角膜炎症狀_眼睛疼痛',
    img_alt: '女患者眼睛疼痛為角膜炎症狀表現'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/43281acecf701ee5.png',
    text: 'pages.medical_service.ocularSurfaceDiseases_con.keratitis.text2',
    img_title: '角膜炎症狀_畏光',
    img_alt: '患者揉眼睛及產生畏光反應為角膜炎症狀表現'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/43d36f1afbbadf6b.png',
    text: 'pages.medical_service.ocularSurfaceDiseases_con.keratitis.text3',
    img_title: '角膜炎症狀_流眼淚',
    img_alt: '流眼淚為角膜炎症狀'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/a55f6759de9edca4.png',
    text: 'pages.medical_service.ocularSurfaceDiseases_con.keratitis.text4',
    img_title: '角膜炎症狀_眼瞼痙攣',
    img_alt: '老年男患者眼臉痙攣為角膜炎症狀表現'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/ed2c9360e662c9f8.png',
    text: 'pages.medical_service.ocularSurfaceDiseases_con.keratitis.text5',
    img_title: '角膜炎症狀_眼紅',
    img_alt: '女患者眼紅為角膜炎症狀表現'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/4a355851bbe49ff3.png',
    text: 'pages.medical_service.ocularSurfaceDiseases_con.keratitis.text6',
    img_title: '角膜炎症狀',
    img_alt: '男患者眼睛不適為角膜炎症狀表現'
  },
]
const damageList1 = [
  {
    text: ['pages.medical_service.ocularSurfaceDiseases_con.damage.text1_1'],
  },
  {
    text: ['pages.medical_service.ocularSurfaceDiseases_con.damage.text1_2'],
  },
  {
    text: [
      'pages.medical_service.ocularSurfaceDiseases_con.damage.text1_3_1',
      'pages.medical_service.ocularSurfaceDiseases_con.damage.text1_3_2',
      'pages.medical_service.ocularSurfaceDiseases_con.damage.text1_3_3',
    ],
  },
  {
    text: ['pages.medical_service.ocularSurfaceDiseases_con.damage.text1_4'],
  },
  {
    text: [
      'pages.medical_service.ocularSurfaceDiseases_con.damage.text1_5_1',
      'pages.medical_service.ocularSurfaceDiseases_con.damage.text1_5_2',
    ],
  },
  {
    text: ['pages.medical_service.ocularSurfaceDiseases_con.damage.text1_6'],
  },
]
const damageList2 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/5a443e29bcab85f7.png',
    text: [
      'pages.medical_service.ocularSurfaceDiseases_con.damage.text2_1_1',
      'pages.medical_service.ocularSurfaceDiseases_con.damage.text2_1_2',
      'pages.medical_service.ocularSurfaceDiseases_con.damage.text2_1_3',
    ],
    img_title: '角膜破皮症狀_眼神經痛',
    img_alt: '男患者眼神經痛為角膜破皮症狀表現'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/f5488a6cf20b2bfb.png',
    text: ['pages.medical_service.ocularSurfaceDiseases_con.damage.text2_2'],
    img_title: '角膜破皮症狀_畏光_流眼淚',
    img_alt: '女患者畏光及流眼淚為角膜破皮症狀表現'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/35c768eeca793a10.png',
    text: ['pages.medical_service.ocularSurfaceDiseases_con.damage.text2_3'],
    img_title: '角膜破皮症狀_眼瞼痙攣',
    img_alt: '女患者眼瞼痙攣為角膜破皮症狀表現'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/288f34fab3f9a8cf.png',
    text: [
      'pages.medical_service.ocularSurfaceDiseases_con.damage.text2_4_1',
      'pages.medical_service.ocularSurfaceDiseases_con.damage.text2_4_2',
    ],
    img_title: '角膜破皮症狀_結膜充血',
    img_alt: '患者結膜充血為角膜破皮症狀表現'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/f62bc78110c0bf14.png',
    text: [
      'pages.medical_service.ocularSurfaceDiseases_con.damage.text2_5_1',
      'pages.medical_service.ocularSurfaceDiseases_con.damage.text2_5_2',
    ],
    img_title: '角膜破皮症狀_眼睛異物感',
    img_alt: '女患者眼睛異物感為角膜破皮症狀表現'
  },
]
const keratoconusList1 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/125b93956e0ebff8.png',
    text: 'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.text1_1',
    img_title: '錐形角膜成因_家族遺傳',
    img_alt: '家族遺傳為錐形角膜成因'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/efe6bc1656aef6bd.png',
    text: 'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.text1_2',
    img_title: '錐形角膜成因_過敏疾病',
    img_alt: '小朋友患有過敏疾病為錐形角膜成因'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/8d7ccaa7a5447c03.png',
    text: 'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.text1_3',
    img_title: '錐形角膜成因_唐氏綜合症',
    img_alt: '唐氏綜合症為錐形角膜成因'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/664bfc9e4aeef087.png',
    text: 'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.text1_4',
    img_title: '錐形角膜成因_揉眼睛',
    img_alt: '男患者揉眼睛為錐形角膜成因'
  },
]
const keratoplastyList1 = [
  {
    therapy:
      'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.therapy1',
    involve:
      'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.involve1',
    postoperation:
      'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.postoperation1',
  },
  {
    therapy:
      'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.therapy2',
    involve:
      'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.involve2',
    postoperation: [
      'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.postoperation2_1',
      'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.postoperation2_2',
      'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.postoperation2_3',
      'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.postoperation2_4',
    ],
  },
  {
    therapy:
      'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.therapy3',
    involve: [
      'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.involve3_1',
      'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.involve3_2',
    ],
    postoperation: [
      [
        'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.postoperation3_1_1',
        'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.postoperation3_1_2',
        'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.postoperation3_1_3',
      ],
      [
        'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.postoperation3_2_1',
        'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.postoperation3_2_2',
        'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.postoperation3_2_3',
        'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.postoperation3_2_4',
      ],
    ],
  },
]

const bannerData = {
  pcSrc:
    'https://static.cmereye.com/static/hkcmereye/bannerzip/眼表及疾病1.png',
  mbSrc:
    'https://static.cmereye.com/static/hkcmereye/bannerzip/眼表及疾病2.png',
  cnName: '眼表及角膜疾病',
  enName: 'OCULAR SURFACE AND CORNEAL DISEASES',
  textColor: '#93C9AC',
  pageName: 'ocularSurfaceDiseases',
}
</script>

<template>
  <div class="ocularSurfaceDiseases">
    <PageServiceBanner :bannerData="bannerData" />
    <div class="ocularSurfaceDiseases-nav">
      <serviceNav
        :arrData="serviceNavigation"
        :pageName="'ocularSurfaceDiseases'"
      />
    </div>
    <div
      class="ocularSurfaceDiseases_nav"
      :class="{ 'ocularSurfaceDiseasesNav-en': locale === 'en' }"
    >
      <div id="pterygium">
        <div class="ocularSurfaceDiseases_title">
          {{
            $t(
              'pages.medical_service.ocularSurfaceDiseases_con.pterygium.title'
            )
          }}
        </div>
        <div class="ocularSurfaceDiseases_text_p_span">
          <div>
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.pterygium.context'
              )
            }}
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/720e572cb2de6352.png" title="翼狀胬肉症狀" alt="翼狀胬肉發展狀況"
            />
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.pterygium.name'
              )
            }}
          </div>
          <div>
            <div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.pterygium.span1'
                  )
                }}
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.pterygium.span2'
                  )
                }}
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.pterygium.span3'
                  )
                }}
              </div>
            </div>
            <div class="ocularSurfaceDiseases_text_p_span">
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.pterygium.span4'
                )
              }}
            </div>
          </div>
          <!-- <div class="ocularSurfaceDiseases_title_btn" @click="goWhatsApp">
            <span>{{
              $t('pages.medical_service.ocularSurfaceDiseases_con.btn.name1_1')
            }}</span
            ><span>{{
              $t('pages.medical_service.ocularSurfaceDiseases_con.btn.name1_2')
            }}</span>
          </div> -->
          <div class="serviceBtnStyle">
            <service-button-icon
              :str="$t('pages.medical_service.ocularSurfaceDiseases_con.btn.name1_1') + '\n' + $t('pages.medical_service.ocularSurfaceDiseases_con.btn.name1_2')"
              :link="'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'"
              :type="'4'"
              :pageName="'ocularSurfaceDiseases ocularSurfaceDiseasesLong'"
            />
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.pterygium.name2'
              )
            }}
          </div>
          <div>
            <div>
              <div>
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.pterygium.text1'
                  )
                }}
              </div>
            </div>
            <div>
              <div>
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.pterygium.text2'
                  )
                }}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.pterygium.name3'
              )
            }}
          </div>
          <div>
            <div v-for="(item, index) in pterygiumList1" :key="index">
              <div>0{{ item.id }}</div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{ $t(item.text) }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="blepharitis">
        <div class="ocularSurfaceDiseases_title">
          {{
            $t(
              'pages.medical_service.ocularSurfaceDiseases_con.blepharitis.title'
            )
          }}
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/b38916f2f6699954.png"
              title="眼臉炎症狀" alt="眼臉炎眼睛紅腫症狀"
            />
          </div>
          <div class="ocularSurfaceDiseases_text_p_span">
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.blepharitis.context'
              )
            }}
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.blepharitis.name'
              )
            }}
          </div>
          <div>
            <div>
              <div
                v-for="(item, index) in blepharitisList1"
                :key="index"
                class="ocularSurfaceDiseases_text_p_span"
              >
                <span>{{ index + 1 }}</span>
                <span>{{ $t(item.text) }}</span>
              </div>
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/06/4e605cb3a688c00c.png"
                title="眼瞼炎原因_揉眼睛" alt="男患者揉眼睛為眼臉炎原因"
              />
            </div>
          </div>
          <!-- <div class="ocularSurfaceDiseases_title_btn" @click="goWhatsApp">
            <span>{{
              $t('pages.medical_service.ocularSurfaceDiseases_con.btn.name2_1')
            }}</span
            ><span>{{
              $t('pages.medical_service.ocularSurfaceDiseases_con.btn.name2_2')
            }}</span>
          </div> -->
          <div class="serviceBtnStyle">
            <service-button-icon
              :str="$t('pages.medical_service.ocularSurfaceDiseases_con.btn.name2_1') + '\n' + $t('pages.medical_service.ocularSurfaceDiseases_con.btn.name2_2')"
              :link="'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'"
              :type="'1'"
              :pageName="'ocularSurfaceDiseases ocularSurfaceDiseasesLong'"
            />
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.blepharitis.name1'
              )
            }}
          </div>
          <div>
            <div v-for="(item, index) in blepharitisList2" :key="index">
              <div><img :src="item.img" :alt="item.img_alt" :title="item.img_title" /></div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{ $t(item.text) }}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.blepharitis.name2'
              )
            }}
          </div>
          <div>
            <div v-for="(item, index) in blepharitisList3" :key="index">
              <div>
                <div><img :src="item.img" :alt="item.img_alt" :title="item.img_title" /></div>
                <div>{{ index + 1 }}</div>
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{ $t(item.text) }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="keratitis">
        <div class="ocularSurfaceDiseases_title">
          {{
            $t(
              'pages.medical_service.ocularSurfaceDiseases_con.keratitis.title'
            )
          }}
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.keratitis.name'
              )
            }}
          </div>
          <div>
            <div v-for="(item, index) in keratitisList" :key="index">
              <div>
                <img :src="item.img" :alt="item.img_alt" :title="item.img_title" />
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{ $t(item.text) }}
              </div>
            </div>
          </div>
          <!-- <div class="ocularSurfaceDiseases_title_btn" @click="callTel">
            <span>{{
              $t('pages.medical_service.ocularSurfaceDiseases_con.btn.name3_1')
            }}</span
            ><span>{{
              $t('pages.medical_service.ocularSurfaceDiseases_con.btn.name3_2')
            }}</span>
          </div> -->
          <div class="serviceBtnStyle">
            <service-button-icon
              :str="$t('pages.medical_service.ocularSurfaceDiseases_con.btn.name3_1') + '\n' + $t('pages.medical_service.ocularSurfaceDiseases_con.btn.name3_2')"
              :link="'tel: +852 3956 2025'"
              :type="'3'"
              :pageName="'ocularSurfaceDiseases'"
            />
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.keratitis.name2'
              )
            }}
          </div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.keratitis.text2_1'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.keratitis.text2_2'
                )
              }}
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/06/ff742016ad1ea80b.png"
                title="角膜炎症狀" alt="角膜炎初期炎症特徵"
              />
              <div>
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratitis.text2_3'
                  )
                }}
              </div>
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/06/ac72de08eb33f8a2.png"
                title="角膜移植" alt="角膜移植手術"
              />
              <div>
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratitis.text2_4'
                  )
                }}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.keratitis.name3'
              )
            }}
          </div>
          <div class="ocularSurfaceDiseases_text_p_span">
            <div>
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.keratitis.text3_1'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.keratitis.text3_2'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.keratitis.text3_3'
                )
              }}
            </div>
          </div>
        </div>
      </div>
      <div id="iritis">
        <div class="ocularSurfaceDiseases_title">
          {{
            $t('pages.medical_service.ocularSurfaceDiseases_con.iritis.title')
          }}
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t('pages.medical_service.ocularSurfaceDiseases_con.iritis.name')
            }}
          </div>
          <div>
            <div>
              <div>
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.iritis.text1_1'
                  )
                }}
              </div>
              <div>
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.iritis.text1_2'
                  )
                }}
              </div>
              <div>
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.iritis.text1_3'
                  )
                }}
              </div>
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/06/2053b0709ed69a3a.png"
                title="虹膜炎" alt="虹膜炎典型病變細節"
              />
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t('pages.medical_service.ocularSurfaceDiseases_con.iritis.name2')
            }}
          </div>
          <div class="ocularSurfaceDiseases_text_p_span">
            <div>
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.iritis.text2_1'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.iritis.text2_2'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.iritis.text2_3'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.iritis.text2_4_1'
                )
              }}<br />{{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.iritis.text2_4_2'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.iritis.text2_5_1'
                )
              }}<br />{{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.iritis.text2_5_2'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.iritis.text2_6_1'
                )
              }}<br />{{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.iritis.text2_6_2'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.iritis.text2_7'
                )
              }}
            </div>
          </div>
          <!-- <div class="ocularSurfaceDiseases_title_btn" @click="goWhatsApp">
            <span>{{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.iritis.btn1_1'
              )
            }}</span
            ><span>{{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.iritis.btn1_2'
              )
            }}</span>
          </div> -->
          <div class="serviceBtnStyle">
            <service-button
              :str="$t('pages.medical_service.ocularSurfaceDiseases_con.iritis.btn1_1') + '\n' + $t('pages.medical_service.ocularSurfaceDiseases_con.iritis.btn1_2')"
              :link="'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'"
              :pageName="'ocularSurfaceDiseases'"
            />
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t('pages.medical_service.ocularSurfaceDiseases_con.iritis.name3')
            }}
          </div>
          <div class="ocularSurfaceDiseases_text_p_span">
            <div>
              <div>1</div>
              <div>
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.iritis.text3_1'
                  )
                }}
              </div>
            </div>
            <div>
              <div>2</div>
              <div>
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.iritis.text3_2'
                  )
                }}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t('pages.medical_service.ocularSurfaceDiseases_con.iritis.name4')
            }}
          </div>
          <div class="ocularSurfaceDiseases_text_p_span">
            <div>
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.iritis.text4_1'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.iritis.text4_2'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.iritis.text4_3'
                )
              }}
            </div>
          </div>
        </div>
      </div>
      <div id="episcleritis">
        <div class="ocularSurfaceDiseases_title">
          {{
            $t(
              'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.title'
            )
          }}
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.name1'
              )
            }}
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/06/38bb162c73f64fc8.png"
                title="表層鞏膜炎" alt="女患者壓力大導致表層鞏膜炎"
              />
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.text1_1'
                  )
                }}
              </div>
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/06/f978fdcd0118b62a.png"
                title="表層鞏膜炎" alt="女患者內分泌異常導致表層鞏膜炎"
              />
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.text1_2'
                  )
                }}
              </div>
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/06/c3f67ba61c369629.png"
                title="表層鞏膜炎" alt="免疫疾病導致表層鞏膜炎"
              />
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.text1_3'
                  )
                }}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.name2'
              )
            }}
          </div>
          <div>
            <div>
              <div>01</div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.span2_1'
                  )
                }}
              </div>
            </div>
            <div>
              <div>02</div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.span2_2'
                  )
                }}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.name3'
              )
            }}
          </div>
          <div>
            <div class="ocularSurfaceDiseases_text_p_span">
              <span>1</span>
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.span3_1'
                )
              }}
            </div>
            <div class="ocularSurfaceDiseases_text_p_span">
              <span>2</span>
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.span3_2'
                )
              }}
            </div>
            <div class="ocularSurfaceDiseases_text_p_span">
              <span>3</span>
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.span3_3_1'
                )
              }}<br />{{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.span3_3_2'
                )
              }}
            </div>
            <div class="ocularSurfaceDiseases_text_p_span">
              <span>4</span>
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.span3_4'
                )
              }}
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.name4'
              )
            }}
          </div>
          <div>
            <div>
              <div>
                <div>
                  {{
                    $t(
                      'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.name4_1'
                    )
                  }}
                </div>
                <div class="ocularSurfaceDiseases_text_p_span">
                  {{
                    $t(
                      'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.text4_1'
                    )
                  }}
                </div>
              </div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/06/8ed21e35080dbfa1.png"
                  title="單純性表層鞏膜炎" alt="眼紅為單純性表層鞏膜炎症狀表現"
                />
                <div>
                  {{
                    $t(
                      'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.span4_1'
                    )
                  }}
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  {{
                    $t(
                      'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.name4_2'
                    )
                  }}
                </div>
                <div class="ocularSurfaceDiseases_text_p_span">
                  {{
                    $t(
                      'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.text5_2'
                    )
                  }}
                </div>
              </div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/06/db41b40d23dfba06.png"
                  title="結節性表層鞏膜炎" alt="眼紅為結節性表層鞏膜炎症狀表現"
                />
                <div>
                  {{
                    $t(
                      'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.span4_2'
                    )
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.name5'
              )
            }}
          </div>
          <div>
            <div class="ocularSurfaceDiseases_text_p_span">
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.context'
                )
              }}
            </div>
            <div>
              <div>
                <div>
                  {{
                    $t(
                      'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.name5_1'
                    )
                  }}
                </div>
                <div class="ocularSurfaceDiseases_text_p_span">
                  {{
                    $t(
                      'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.text5_1'
                    )
                  }}
                </div>
              </div>
              <div>
                <div>
                  {{
                    $t(
                      'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.name5_2'
                    )
                  }}
                </div>
                <div class="ocularSurfaceDiseases_text_p_span">
                  {{
                    $t(
                      'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.text5_2'
                    )
                  }}
                </div>
              </div>
              <div>
                <div>
                  {{
                    $t(
                      'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.name5_3'
                    )
                  }}
                </div>
                <div class="ocularSurfaceDiseases_text_p_span">
                  {{
                    $t(
                      'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.text5_3'
                    )
                  }}
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="ocularSurfaceDiseases_title_btn" @click="callTel">
            <span>{{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.btn1'
              )
            }}</span
            ><span>{{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.episcleritis.btn2'
              )
            }}</span>
          </div> -->
          <div class="serviceBtnStyle">
            <service-button-icon
              :str="$t('pages.medical_service.ocularSurfaceDiseases_con.episcleritis.btn1') + '\n' + $t('pages.medical_service.ocularSurfaceDiseases_con.episcleritis.btn2')"
              :link="'tel: +852 3956 2025'"
              :type="'3'"
              :pageName="'ocularSurfaceDiseases'"
            />
          </div>
        </div>
      </div>
      <div id="damage">
        <div class="ocularSurfaceDiseases_title">
          {{
            $t('pages.medical_service.ocularSurfaceDiseases_con.damage.title')
          }}
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/2a769c496ebb7f7f.png"
              title="角膜破皮" alt="角膜破皮情況"
              srcset=""
            />
          </div>
          <div class="ocularSurfaceDiseases_text_p_span">
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.damage.context'
              )
            }}
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t('pages.medical_service.ocularSurfaceDiseases_con.damage.name1')
            }}
          </div>
          <div>
            <div v-for="(item, index) in damageList1" :key="index">
              <span>{{ index + 1 }}</span>
              <div>
                <p v-for="(ele, i) in item.text" :key="i">{{ $t(ele) }}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t('pages.medical_service.ocularSurfaceDiseases_con.damage.name2')
            }}
          </div>
          <div>
            <div v-for="(item, index) in damageList2" :key="index">
              <div><img :src="item.img" :alt="item.img_alt" :title="item.img_title" /></div>
              <div>
                <span v-for="(ele, i) in item.text" :key="i">{{
                  $t(ele)
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t('pages.medical_service.ocularSurfaceDiseases_con.damage.name3')
            }}
          </div>
          <div>
            <div>
              <div>
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.damage.name3_1'
                  )
                }}
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.damage.text3_1'
                  )
                }}
              </div>
            </div>
            <div>
              <div>
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.damage.name3_2'
                  )
                }}
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.damage.text3_2'
                  )
                }}
              </div>
            </div>
            <div>
              <div>
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.damage.name3_3'
                  )
                }}
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.damage.text3_3'
                  )
                }}
              </div>
            </div>
          </div>
          <!-- <div class="ocularSurfaceDiseases_title_btn" @click="goWhatsApp">
            <span>{{
              $t('pages.medical_service.ocularSurfaceDiseases_con.damage.btn')
            }}</span>
          </div> -->
           <div class="serviceBtnStyle">
            <service-button-icon
              :str="$t('pages.medical_service.ocularSurfaceDiseases_con.damage.btn')"
              :link="'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'"
              :type="'4'"
              :pageName="'ocularSurfaceDiseases'"
            />
          </div>
        </div>
      </div>
      <div id="keratoconus">
        <div class="ocularSurfaceDiseases_title">
          {{
            $t(
              'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.title1'
            )
          }}
        </div>
        <div>
          <div class="ocularSurfaceDiseases_text_p_span">
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.span1_1'
              )
            }}<span>{{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.span1_2'
              )
            }}</span>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/284424c8276caf65.png" title="錐形角膜" alt="錐形角膜眼睛結構"
            />
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.name1'
              )
            }}
          </div>
          <div>
            <div v-for="(item, index) in keratoconusList1" :key="index">
              <img :src="item.img" :alt="item.img_alt" :title="item.img_title" />
              <div>{{ $t(item.text) }}</div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.name2'
              )
            }}
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/06/5a230949595f4632.png" title="錐形角膜" alt="顯微鏡下錐形角膜特徵"
              />
            </div>
            <div>
              <div>
                <div class="ocularSurfaceDiseases_text_p_span">
                  <span>1</span
                  >{{
                    $t(
                      'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.span2_1'
                    )
                  }}
                </div>
                <div class="ocularSurfaceDiseases_text_p_span">
                  <span>2</span
                  >{{
                    $t(
                      'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.span2_2'
                    )
                  }}
                </div>
                <div class="ocularSurfaceDiseases_text_p_span">
                  <span v-if="locale !== 'en'">3</span
                  >{{
                    $t(
                      'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.span2_3'
                    )
                  }}
                </div>
              </div>
              <!-- <div class="ocularSurfaceDiseases_title_btn" @click="goWhatsApp">
                <span>{{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.btn1'
                  )
                }}</span
                ><span>{{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.btn2'
                  )
                }}</span>
              </div> -->
              <div class="serviceBtnStyle">
            <service-button-icon
              :str="$t('pages.medical_service.ocularSurfaceDiseases_con.keratoconus.btn1') + '\n' + $t('pages.medical_service.ocularSurfaceDiseases_con.keratoconus.btn2')"
              :link="'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'"
              :type="'1'"
              :pageName="'ocularSurfaceDiseases ocularSurfaceDiseasesLong'"
            />
          </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.name3'
              )
            }}
          </div>
          <div>
            <div>
              <div>
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.name3_1'
                  )
                }}
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.span3_1'
                  )
                }}
              </div>
            </div>
            <div>
              <div>
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.name3_2'
                  )
                }}
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                <span>{{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.span3_2_1'
                  )
                }}</span
                >{{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.span3_2_2'
                  )
                }}
              </div>
            </div>
            <div>
              <div>
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.name3_3'
                  )
                }}
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratoconus.span3_3'
                  )
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="keratoplasty">
        <div class="ocularSurfaceDiseases_title">
          {{
            $t(
              'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.title'
            )
          }}
        </div>
        <div>
          <div class="ocularSurfaceDiseases_text_p_span">
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.span'
              )
            }}
          </div>
          <!-- <div class="ocularSurfaceDiseases_title_btn" @click="callTel">
            <span>{{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.btn1'
              )
            }}</span
            ><span>{{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.btn2'
              )
            }}</span>
          </div> -->
          <div class="serviceBtnStyle">
            <service-button
              :str="$t('pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.btn1') + '\n' + $t('pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.btn2')"
              :link="'tel: +852 3956 2025'"
              :pageName="'ocularSurfaceDiseases'"
            />
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.name'
              )
            }}
          </div>
          <div>
            <div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.span1_1'
                  )
                }}
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.span1_2'
                  )
                }}
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.span1_3'
                  )
                }}
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.span1_4'
                  )
                }}
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.span1_5'
                  )
                }}
              </div>
            </div>
            <div>
              <div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/06/ff742016ad1ea80b.png"
                    title="角膜炎症狀" alt="角膜炎初期炎症特徵"
                  />
                </div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/06/ac72de08eb33f8a2.png"
                    title="角膜移植" alt="角膜移植手術"
                  />
                </div>
              </div>
              <div>
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.text1'
                  )
                }}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.name2'
              )
            }}
          </div>
          <div>
            <div class="ocularSurfaceDiseases_text_p_span">
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.span2_1'
                )
              }}
            </div>
            <div class="ocularSurfaceDiseases_text_p_span">
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.span2_2'
                )
              }}
            </div>
            <div class="ocularSurfaceDiseases_text_p_span">
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.span2_3'
                )
              }}
            </div>
            <div class="ocularSurfaceDiseases_text_p_span">
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.span2_4_1'
                )
              }}<br />{{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.span2_4_2'
                )
              }}
            </div>
            <div class="ocularSurfaceDiseases_text_p_span">
              {{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.span2_5_1'
                )
              }}<br />{{
                $t(
                  'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.span2_5_2'
                )
              }}
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            {{
              $t(
                'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.name3'
              )
            }}
          </div>
          <div>
            <div>
              <div>
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.name3_1'
                  )
                }}
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.span3_1'
                  )
                }}
              </div>
            </div>
            <div>
              <div>
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.name3_2'
                  )
                }}
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{
                  $t(
                    'pages.medical_service.ocularSurfaceDiseases_con.keratoplasty.span3_2'
                  )
                }}
              </div>
            </div>
            <div>
              <div v-for="(item, index) in keratoplastyList1" :key="index">
                <div>{{ $t(item.therapy) }}</div>
                <div>
                  <div v-if="Array.isArray(item.involve)">
                    <div v-for="(ele, index) in item.involve" :key="index">
                      <div v-if="Array.isArray(ele)">
                        <div v-for="(e, index) in ele" :key="index">
                          {{ $t(e) }}
                        </div>
                      </div>
                      <div v-else>{{ $t(ele) }}</div>
                    </div>
                  </div>
                  <div v-else>{{ $t(item.involve) }}</div>
                </div>
                <div>
                  <div v-if="Array.isArray(item.postoperation)">
                    <div v-for="(el, index) in item.postoperation" :key="index">
                      <div v-if="Array.isArray(el)">
                        <div v-for="(e, index) in el" :key="index">
                          {{ $t(e) }}
                        </div>
                      </div>
                      <div v-else>{{ $t(el) }}</div>
                    </div>
                  </div>
                  <div v-else>{{ $t(item.postoperation) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="faq">
        <div
          class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
        >
          {{ $t('pages.medical_service.ocularSurfaceDiseases_con.faq.title') }}
        </div>
        <div>
          <PageCollapse
            :answer="meetArr"
            :downarr="'ocularSurfaceDiseases'"
            :style="{ '--subassembly-color': '#7DBE9C' }"
          />
        </div>
      </div>
    </div>
    <div></div>
    <!-- 表单 -->
    <div class="fromTable">
      <FormFooterInfo
        :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
        :co="`color:${'#7DBE9C;'}`"
      />
    </div>
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
.ocularSurfaceDiseases_nav {
  max-width: 1200px;
  margin: 100px auto -120%;
  transform: scale(0.9);
  transform-origin: center top;
  & > #pterygium {
    margin-bottom: 160px;
    & > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 80px auto 120px;
      & > div:nth-child(1) {
        width: 698px;
        line-height: 46px;
        color: #419368;
        margin-right: 65px;
      }
    }
    & > div:nth-child(3) {
      & > div:nth-child(2) {
        margin: 60px auto 120px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        & > div:nth-child(1) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          & > div {
            width: 580px;
            height: 73px;
            border-radius: 10px;
            border: solid 1px #7dbe9c;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 26px;
          }
        }
        & > div:nth-child(2) {
          width: 580px;
          height: 333px;
          border-radius: 10px;
          border: solid 1px #7dbe9c;
          padding: 82px 66px;
          line-height: 48px;
          font-size: 26px;
        }
      }
      & > div:nth-child(3) {
        margin: 120px auto;
      }
    }
    & > div:nth-child(4) {
      & > div:nth-child(2) {
        margin: 80px auto 120px;
        display: flex;
        justify-content: space-between;
        & > div {
          width: 628px;
          height: 261px;
          padding: 97px 31px 61px 280px;
          font-size: 22px;
          transform: scale(0.85);
        }
        & > div:nth-child(1) {
          background: url('https://static.cmereye.com/imgs/2023/06/6d544e0b46ceee84.png');
          background-size: 100% 100%;
        }
        & > div:nth-child(2) {
          background: url('https://static.cmereye.com/imgs/2023/06/85baaef5d466b24b.png');
          background-size: 100% 100%;
        }
      }
    }
    & > div:nth-child(5) {
      & > div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        margin-top: 94px;
        & > div {
          width: 290px;
          height: 292px;
          border-radius: 10px;
          border: solid 1px #7dbe9c;
          position: relative;
          & > div:nth-child(1) {
            position: absolute;
            top: -26px;
            left: 50%;
            transform: translateX(-50%);
            font-family: 'OPPOSans-H';
            font-size: 36px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 42px;
            letter-spacing: 0px;
            color: #515151;
            background: #fff;
            border-left: 5px solid #fff;
            border-right: 5px solid #fff;
          }
          & > div:nth-child(2) {
            padding: 0 41px;
            padding-top: 54px;
            font-size: 22px;
            line-height: 42px;
          }
        }
      }
    }
  }
  & > #blepharitis {
    margin: 160px auto;
    & > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 80px auto 120px;
      & > div:nth-child(2) {
        width: 627px;
        line-height: 46px;
        color: #419368;
        margin-left: 65px;
      }
    }
    & > div:nth-child(3) {
      & > div:nth-child(2) {
        margin: 40px auto 120px;
        padding-left: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & > div:nth-child(1) {
          & > div {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 40px;
            & > span:nth-child(1) {
              display: flex;
              width: 42px;
              height: 42px;
              background: #7dbe9c;
              border-radius: 50%;
              color: #fff;
              justify-content: center;
              align-items: center;
              line-height: 38px;
              margin-right: 20px;
            }
            & > span:nth-child(2) {
              max-width: 552px;
              line-height: 42px;
              font-size: 22px;
            }
          }
        }
      }
    }
    & > div:nth-child(4) {
      margin-top: 120px;
      & > div:nth-child(2) {
        margin: 60px auto 120px;
        display: flex;
        justify-content: space-between;
        & > div {
          & > div:nth-child(2) {
            width: 240px;
            padding-left: 31px;
            font-size: 22px;
            line-height: 42px;
            margin-top: 30px;
          }
        }
      }
    }
    & > div:nth-child(5) {
      & > div:nth-child(2) {
        margin: 46px auto 160px;
        display: flex;
        justify-content: space-between;
        & > div {
          width: 350px;
          position: relative;
          & > div:nth-child(1) {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            & > div:nth-child(2) {
              font-family: 'OPPOSans-M';
              font-size: 120px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 94px;
              letter-spacing: 0px;
              color: #7dbe9c;
              margin-right: 26px;
            }
          }
          & > div:nth-child(2) {
            font-size: 22px;
            line-height: 42px;
            margin-top: 35px;
            max-width: 360px;
          }
        }
        & > div::after {
          content: '';
          background: url('https://static.cmereye.com/imgs/2023/06/897cdf641d33d96d.png');
          width: 28px;
          height: 498px;
          display: inline-block;
          top: 0;
          position: absolute;
          right: -55px;
        }
        & > div:last-child::after {
          width: 0;
        }
      }
    }
  }

  & > #keratitis {
    margin: 160px auto;

    & > div:nth-child(2) {
      & > div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        text-align: center;
        margin: 60px auto 100px;

        & > div {
          display: flex;
          flex-direction: column;
          align-items: center;

          div:nth-child(2) {
            margin-top: 30px;
            max-width: 120px;
            line-height: 38px;
          }
        }
      }
    }

    & > div:nth-child(3) {
      margin: 120px auto;

      & > div:nth-child(2) {
        margin-top: 77px;
        font-size: 22px;
        line-height: 42px;

        & > div::before {
          content: '';
          width: 6px;
          height: 6px;
          margin-right: 12px;
          border-radius: 6px;
          background-color: #515151;
          display: inline-block;
          position: relative;
          top: -50%;
          transform: translateY(-50%);
        }
      }

      & > div:nth-child(3) {
        margin: 60px 0 120px;
        padding: 0 140px 0 184px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & > div {
          & > div:nth-child(2) {
            font-size: 16px;
            line-height: 50px;
            text-align: center;
          }
        }
      }
    }

    & > div:nth-child(4) {
      & > div:nth-child(2) {
        margin-top: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & > div {
          width: 377px;
          height: 145px;
          background-color: #ffffff;
          border-radius: 20px;
          border: solid 2px #7dbe9c;

          font-size: 22px;
          line-height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 43px 25px;
          text-align: center;
        }
      }
    }
  }

  & > #iritis {
    margin-bottom: 160px;

    & > div:nth-child(2) {
      & > div:nth-child(2) {
        padding-left: 46px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & > div:nth-child(1) {
          padding: 41px 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 22px;
          line-height: 38px;
          & > div::before {
            content: '';
            background: url('https://static.cmereye.com/imgs/2023/06/4ec5fda73d711558.png');
            width: 7px;
            height: 9px;
            display: inline-block;
            margin-right: 10px;
            margin-bottom: 3px;
          }
          & > div:nth-child(2) {
            padding: 75px 0 72px;
            border-top: dashed 1px #7dbe9c;
            border-bottom: dashed 1px #7dbe9c;
            width: 667px;
          }
        }
      }
    }

    & > div:nth-child(3) {
      & > div:nth-child(2) {
        padding-left: 26px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        & > div {
          margin: 60px auto 80px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          background: url('https://static.cmereye.com/imgs/2023/06/d4f5b0e6f7aad173.png');
          width: 156px;
          height: 155px;
          text-align: center;
        }
      }
    }
    & > div:nth-child(4) {
      margin-top: 140px;
      & > div:nth-child(2) {
        padding-left: 42px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 50px auto 140px;

        & > div {
          display: flex;
          width: 520px;
          height: 140px;
          border-radius: 10px;
          border: solid 2px #7dbe9c;
          position: relative;
          padding: 40px 45px;

          & > div:nth-child(2) {
            font-size: 22px;
            line-height: 38px;
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          & > div:nth-child(1) {
            position: absolute;
            left: -24px;
            top: 50%;
            transform: translateY(-50%);
            font-family: 'OPPOSans-B';
            font-size: 70px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1;
            letter-spacing: 0px;
            color: #7dbe9c;
            background: #fff;
            border-top: 10px solid #fff;
            border-bottom: 10px solid #fff;
          }
        }
      }
    }

    & > div:nth-child(5) {
      & > div:nth-child(2) {
        margin-top: 50px;
        padding-left: 26px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & > div {
          width: 382px;
          height: 124px;
          background-color: #ffffff;
          box-shadow: 2px 3px 7px 0px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          font-size: 22px;
          line-height: 38px;
          border-top: 10px solid #7dbe9c;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  & > #episcleritis {
    margin: 160px auto;

    & > div:nth-child(2) {
      margin-top: 60px;

      & > div:nth-child(2) {
        width: 1294px;
        height: 242px;
        box-shadow: 2px 3px 21px 0px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        padding: 0 40px;
        justify-content: space-between;

        & > div {
          display: flex;
          align-items: center;
          justify-content: center;

          & > div:nth-child(2) {
            max-width: 155px;
            margin-left: 30px;
            font-size: 22px;
          }
        }

        & > div:nth-child(2) {
          width: 436px;
          border-left: 1px solid #eeeeee;
          border-right: 1px solid #eeeeee;
        }
      }
    }

    & > div:nth-child(3) {
      & > div:nth-child(2) {
        justify-content: space-between;
        padding-left: 26px;
        margin-top: 50px;

        & > div {
          width: 560px;
          height: 220px;
          border-radius: 10px;
          border: solid 4px #eeeeee;
          display: flex;
          align-items: center;
          flex-direction: row;

          & > div:nth-child(1) {
            padding: 58px 42px;
            font-family: 'OPPOSans-B';
            font-size: 52px;
            line-height: 38px;
            letter-spacing: 0px;
            color: #7dbe9c;
            border-right: solid 3px #7dbe9c;
          }

          & > div:nth-child(2) {
            margin-left: 20px;
            font-size: 22px;
            line-height: 42px;
          }
        }
      }
    }

    & > div:nth-child(4) {
      & > div:nth-child(2) {
        padding-left: 26px;
        justify-content: space-between;
        text-align: center;
        margin-top: 50px;
        & > div {
          background: url('https://static.cmereye.com/imgs/2023/06/2a6caa9ee33d9d92.png');
          width: 281px;
          height: 112px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 25px;
          position: relative;

          & > span {
            position: absolute;
            left: 29px;
            top: 50%;
            transform: translateY(-50%);
            font-family: 'OPPOSans-H';
            font-size: 32px;
            line-height: 42px;
            letter-spacing: 0px;
            color: #ffffff;
          }
        }
      }
    }

    & > div:nth-child(5) {
      & > div:nth-child(2) {
        margin-top: 80px;
        flex-direction: column;

        & > div {
          display: flex;
          align-items: flex-start;
          padding-left: 25px;

          & > div:nth-child(1) {
            max-width: 836px;
            margin-right: 60px;

            & > div:nth-child(1) {
              width: 562px;
              height: 60px;
              background-color: #7dbe9c;
              border-radius: 30px;
              margin-bottom: 45px;

              display: flex;
              justify-content: center;
              align-items: center;

              font-size: 28px;
              line-height: 52px;
              color: #ffffff;
            }

            & > div:nth-child(2) {
              font-size: 22px;
              line-height: 42px;
            }
          }

          & > div:nth-child(2) {
            & > div {
              margin-top: 20px;
              font-size: 16px;
              line-height: 28px;
              letter-spacing: 0px;
              color: #999999;
            }
          }
        }

        & > div:nth-child(1) {
          margin-bottom: 140px;
        }
      }
    }

    & > div:nth-child(6) {
      & > div:nth-child(2) {
        flex-direction: column;
        margin-top: 60px;
        padding: 0 26px;

        & > div:nth-child(1) {
          line-height: 46px;
          padding-left: 3px;
          font-size: 22px;
        }

        & > div:nth-child(2) {
          display: flex;
          justify-content: space-between;
          margin-top: 60px;

          & > div {
            width: 446px;
            height: 210px;
            background-color: #ffffff;
            box-shadow: 2px 3px 7px 0px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
            transform: scale(0.85);

            & > div:nth-child(1) {
              width: 100%;
              height: 68px;
              background-color: #7dbe9c;

              font-family: 'Noto Sans HK';
              font-size: 26px;
              line-height: 46px;
              letter-spacing: 0px;
              color: #ffffff;

              display: flex;
              justify-content: center;
              align-items: center;
            }

            & > div:nth-child(2) {
              font-size: 22px;
              line-height: 40px;
              margin-top: 20px;
            }
          }

          & > div:nth-child(1) {
            width: 343px;

            & > div:nth-child(2) {
              padding-left: 18px;
            }
          }

          & > div:nth-child(2) {
            & > div:nth-child(2) {
              padding: 0 25px;
            }
          }

          & > div:nth-child(3) {
            & > div:nth-child(2) {
              padding-left: 25px;
            }
          }
        }
      }
    }

    & > div {
      & > div:nth-child(2) {
        margin-top: 50px;
        margin-bottom: 140px;
        display: flex;
      }
    }

    & > div:last-child {
      & > div:nth-child(2) {
        margin-bottom: 80px;
      }
    }
  }

  & > #damage {
    margin: 160px auto;

    & > div {
      & > div:nth-child(2) {
        display: flex;
        padding-left: 25px;
      }
    }

    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      margin: 80px auto 140px;

      & > div:nth-child(2) {
        max-width: 628px;
        margin-left: 63px;

        font-size: 24px;
        line-height: 46px;
        color: #419368;
        letter-spacing: -1px;
      }
    }
    & > div:nth-child(3) {
      & > div:nth-child(2) {
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 40px auto 140px;
        & > div {
          background: url('https://static.cmereye.com/imgs/2023/06/88cae23e25d33512.png');
          background-size: 100% 100%;
          width: 360px;
          height: 144px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          & > span {
            position: absolute;
            top: 10px;
            left: 19px;
            font-family: 'OPPOSans-B';
            font-size: 18px;
            line-height: 1;
            letter-spacing: 0px;
            color: #ffffff;
          }
          & > div {
            font-size: 22px;
            line-height: 40px;
            text-align: center;
          }
        }
        & > div:nth-child(n + 4) {
          margin-top: 50px;
        }
      }
    }
    & > div:nth-child(4) {
      & > div:nth-child(2) {
        flex-wrap: wrap;
        justify-content: center;
        margin: 50px auto 140px;

        & > div {
          display: flex;
          position: relative;

          & > div:nth-child(1) {
            position: absolute;
            left: -144px;
          }

          & > div:nth-child(2) {
            width: 272px;
            height: 164px;
            border-radius: 10px;
            border: solid 2px #7dbe9c;
            line-height: 1.8;
            font-size: 22px;
            font-family: 'Noto Sans HK';
          }
        }

        & > div:nth-child(1),
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            width: 373px;
          }
        }

        & > div:nth-child(1) {
          margin-left: 95px;
          margin-right: 214px;

          & > div:nth-child(2) {
            padding: 20px 41px 20px 58px;
          }
        }

        & > div:nth-child(2) {
          & > div:nth-child(2) {
            padding-left: 58px;
            display: flex;
            align-items: center;
          }
        }

        & > div:nth-child(3) {
          margin-left: 100px;

          & > div:nth-child(2) {
            padding-left: 68px;
            display: flex;
            align-items: center;
          }
        }

        & > div:nth-child(4) {
          margin-left: 150px;
          margin-right: 135px;

          & > :nth-child(1) {
            left: -113px;
          }

          & > div:nth-child(2) {
            padding-left: 68px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        }

        & > div:nth-child(5) {
          & > :nth-child(1) {
            left: -80px;
          }

          & > div:nth-child(2) {
            padding-left: 90px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        }

        & > div:nth-child(n + 3) {
          margin-top: 80px;
        }
      }
    }

    & > div:nth-child(5) {
      & > div:nth-child(2) {
        flex-direction: column;
        margin-top: 80px;

        & > div {
          margin-bottom: 120px;

          & > div:nth-child(1) {
            font-family: 'NotoSansHK-Medium';
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 52px;
            padding-bottom: 10px;
            position: relative;
            color: #515151;
          }

          & > div:nth-child(1)::after {
            content: '';
            width: 357px;
            border-bottom: dashed 1px #7dbe9c;
            display: inline-block;
            position: absolute;
            bottom: 0;
            left: 0;
          }

          & > div:nth-child(2) {
            margin-top: 30px;
            font-size: 22px;
            line-height: 40px;
          }
        }
      }
    }
  }

  & > #keratoconus {
    & > div {
      & > div:nth-child(2) {
        display: flex;
      }
    }

    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      margin: 80px auto 140px;

      & > div:nth-child(1) {
        max-width: 626px;
        margin-right: 63px;
        color: #7dbe9c;

        & > span {
          letter-spacing: -1px;
        }
      }
    }

    & > div:nth-child(3) {
      & > div:nth-child(2) {
        margin: 50px auto 140px;
        justify-content: space-between;
        padding: 0 50px 0 58px;

        & > div {
          display: flex;
          flex-direction: column;
          align-items: center;

          & > div:nth-child(2) {
            margin-top: 30px;
            max-width: 262px;
            text-align: center;
            font-family: 'Noto Sans HK';
            font-size: 22px;
            line-height: 40px;
            letter-spacing: 0px;
            color: #515151;
          }
        }
      }
    }

    & > div:nth-child(4) {
      & > div:nth-child(2) {
        margin: 50px auto 140px;
        padding-left: 52px;

        & > div:nth-child(2) {
          margin-left: 60px;
          padding-top: 20px;
          padding-bottom: 40px;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          & > div:nth-child(1) {
            & > div {
              line-height: 40px;
              display: flex;
              align-items: center;
              margin-bottom: 27px;

              & > span {
                display: flex;
                width: 40px;
                height: 40px;
                background: #7dbe9c;
                border-radius: 50%;
                font-family: OPPOSans-B;
                font-size: 24px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 40px;
                letter-spacing: 0px;
                color: #ffffff;
                align-items: center;
                justify-content: center;
                margin-right: 17px;
              }
            }
          }

          & > div:nth-child(2) {
            margin: 0;
          }
        }
      }
    }

    & > div:nth-child(5) {
      & > div:nth-child(2) {
        flex-direction: column;
        margin-top: 74px;

        & > div {
          margin-bottom: 88px;
          position: relative;

          & > div:nth-child(1) {
            position: absolute;
            top: -12%;
            left: 32px;
            width: 349px;
            height: 57px;
            background: #7dbe9c;
            border-radius: 29px;

            font-family: 'NotoSansHK-Medium';
            font-size: 30px;
            line-height: 52px;
            letter-spacing: 0px;
            color: #ffffff;
            text-align: center;
          }

          & > div:nth-child(2) {
            width: 1200px;
            height: 206px;
            border-radius: 20px;
            border: solid 2px #7dbe9c;

            font-size: 22px;
            line-height: 40px;
            padding-left: 32px;
            padding-right: 32px;
            padding-top: 66px;
          }
        }

        & > div:nth-child(2) {
          & > div:nth-child(1) {
            width: 713px;
          }
        }

        & > div:nth-child(3) {
          margin-bottom: 0;

          & > div:nth-child(1) {
            width: 577px;
          }
        }
      }
    }
  }

  & > #keratoplasty {
    margin-top: 160px;
    margin-bottom: 140px;

    & > div:nth-child(2) {
      margin-top: 88px;
      margin-bottom: 140px;

      & > div:nth-child(1) {
        margin-bottom: 120px;
        line-height: 46px;
        color: #419368;
      }
    }

    & > div {
      & > div:nth-child(2) {
        padding-left: 26px;
        display: flex;
      }
    }

    & > div:nth-child(3) {
      margin-bottom: 140px;

      & > div:nth-child(2) {
        flex-direction: column;

        & > div:nth-child(1) {
          display: flex;
          justify-content: space-between;
          margin: 50px 0 70px;

          & > div {
            width: 234px;
            height: 160px;
            background-color: #ffffff;
            border-radius: 20px;
            border: solid 2px #7dbe9c;
            font-size: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 20px;
            transform: scale(0.85);
          }
        }

        & > div:nth-child(2) {
          text-align: center;

          & > div:nth-child(1) {
            display: flex;
            justify-content: center;

            & > div:nth-child(1) {
              margin-right: 26px;
            }
          }

          & > div:nth-child(2) {
            font-size: 16px;
            line-height: 36px;
            margin-top: 12px;
          }
        }
      }
    }

    & > div:nth-child(4) {
      & > div:nth-child(2) {
        justify-content: space-between;
        margin: 50px auto 140px;

        & > div {
          position: relative;
          z-index: 5;
          width: 189px;
          height: 188px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        & > div::before {
          content: '';
          width: 189px;
          height: 188px;
          background: url('https://static.cmereye.com/imgs/2023/06/d4f5b0e6f7aad173.png');
          background-size: 100% 100%;
          transform: rotate(-90deg);
          display: inline-block;
          z-index: 1;
          position: absolute;
        }
      }
    }

    & > div:nth-child(5) {
      & > div:nth-child(2) {
        flex-direction: column;

        & > div:nth-child(1) {
          margin-bottom: 60px;

          & > div:nth-child(1) {
            position: relative;
            margin-left: 12px;
            font-family: 'NotoSansHK-Medium';
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 52px;
            letter-spacing: 0px;
            color: #7dbe9c;
            margin-bottom: 30px;
          }

          & > div:nth-child(2) {
            font-size: 22px;
            line-height: 36px;
          }
        }

        & > div:nth-child(2) {
          & > div:nth-child(1) {
            position: relative;
            margin-left: 12px;
            font-family: 'NotoSansHK-Medium';
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 52px;
            letter-spacing: 0px;
            color: #7dbe9c;
            margin-bottom: 30px;
          }

          & > div:nth-child(2) {
            font-size: 22px;
            line-height: 36px;
            margin-bottom: 40px;
          }
        }

        & > div:nth-child(1) {
          & > div:nth-child(1)::before {
            content: '';
            width: 6px;
            height: 6px;
            background: #7dbe9c;
            border-radius: 50%;
            display: flex;
            align-items: center;
            position: absolute;
            left: -10px;
            top: 50%;
          }
        }

        & > div:nth-child(2) {
          & > div:nth-child(1)::before {
            content: '';
            width: 6px;
            height: 6px;
            background: #7dbe9c;
            border-radius: 50%;
            display: flex;
            align-items: center;
            position: absolute;
            left: -10px;
            top: 50%;
          }
        }

        & > div:nth-child(3) {
          max-width: 1294px;
          border: solid 1px #dee2e6;

          & > div {
            display: flex;

            & > div:nth-child(1) {
              width: 370px;
            }

            & > div:nth-child(2) {
              width: 410px;
              border-left: solid 1px #dee2e6;
              border-right: solid 1px #dee2e6;
            }

            & > div:nth-child(3) {
              width: 513px;
            }
          }

          & > div:nth-child(1) {
            height: 80px;
            background: #7dbe9c;

            font-family: 'NotoSansHK-Medium';
            font-size: 26px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #ffffff;

            & > div {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          & > div:nth-child(2) {
            height: 250px;
            background: #ffffff;

            font-family: 'NotoSansHK-Medium';
            font-size: 26px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.8;
            letter-spacing: 0px;
            color: #515151;

            & > div {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          & > div:nth-child(3) {
            height: 410px;
            background: #f8f8f9;

            font-family: 'NotoSansHK-Medium';
            font-size: 26px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.8;
            letter-spacing: 0px;
            color: #515151;

            & > div:nth-child(1) {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            & > div:nth-child(2) {
              display: flex;
              flex-direction: column;

              & > div:nth-child(1) {
                & > div:nth-child(1) {
                  height: 191px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-bottom: solid 1px #dee2e6;
                }

                & > div:nth-child(2) {
                  height: 217px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
              }
            }

            & > div:nth-child(3) {
              display: flex;
              flex-direction: column;

              & > div:nth-child(1) {
                & > div:nth-child(1) {
                  height: 191px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-bottom: solid 1px #dee2e6;
                }

                & > div:nth-child(2) {
                  height: 217px;
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                  padding-left: 88px;
                }
              }
            }
          }
        }
      }
    }
  }

  & > #faq {
    margin-bottom: 260px;

    & > div:nth-child(2) {
      margin-top: 120px;
    }
  }

  &.ocularSurfaceDiseasesNav-en {
    & > #pterygium {
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          & > div:nth-child(1) {
            & > div {
              text-align: center;
            }
          }
          & > div:nth-child(2) {
            padding: 40px 30px;
            line-height: 1.6;
          }
        }
        & > div:nth-child(3) {
          text-align: center;
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(2) {
          & > div {
            padding: 60px 31px 30px 280px;
            font-size: 20px;
          }
        }
      }
      & > div:nth-child(5) {
        & > div:nth-child(2) {
          & > div {
            & > div:nth-child(2) {
              line-height: 1.6;
              padding: 30px 20px;
              font-size: 20px;
            }
          }
        }
      }
    }
    & > #blepharitis {
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          & > div:nth-child(1) {
            & > div {
              & > span:nth-child(1) {
                min-width: 42px;
              }
            }
          }
        }
      }
      & > div:nth-child(5) {
        & > div:nth-child(2) {
          & > div {
            & > div:nth-child(2) {
              line-height: 1.6;
            }
          }
        }
      }
    }
    & > #keratitis {
      & > div:nth-child(2) {
        margin-top: 50px;
      }
      & > div:nth-child(3) {
        & > div:nth-child(3) {
          align-items: flex-start;
          & > div {
            flex: 1;
            &:nth-child(1) {
              margin-right: 30px;
            }
            img {
              width: 100%;
            }
            & > div:nth-child(2) {
              padding: 0 30px;
            }
          }
        }
      }
    }
    & > #iritis {
      & > div:nth-child(2) {
        & > div:nth-child(2) {
          & > div:nth-child(1) {
            padding: 0;
            & > div {
              padding: 30px 0;
            }
          }
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          & > div {
            font-size: 20px;
            line-height: 1.6;
          }
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(2) {
          & > div {
            & > div:nth-child(2) {
              line-height: 1.6;
            }
          }
        }
      }
    }
    & > #episcleritis {
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          & > div {
            padding: 30px 30px 30px 0;
            height: auto;
          }
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(2) {
          & > div {
            padding-left: 40px;
          }
        }
      }
      & > div:nth-child(6) {
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            & > div {
              height: auto;
              & > div:nth-child(1) {
                text-align: center;
                line-height: 1.2;
              }
              & > div:nth-child(2) {
                padding-bottom: 25px;
              }
            }
          }
        }
      }
    }
    & > #damage {
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          & > div {
            & > div {
              line-height: 1.6;
              font-size: 18px;
            }
          }
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(2) {
          & > div:nth-child(1) {
            & > div:nth-child(2) {
              line-height: 1.6;
              font-size: 20px;
              padding: 15px 15px 15px 30px;
            }
          }
          & > div {
            & > div:nth-child(2) {
              line-height: 1.6;
            }
          }
        }
      }
    }
    & > #keratoconus {
      & > div:nth-child(4) {
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            & > div:nth-child(1) {
              & > div {
                & > span {
                  min-width: 40px;
                }
              }
            }
          }
        }
      }
    }
    & > #keratoplasty {
      & > div:nth-child(5) {
        & > div:nth-child(2) {
          & > div:nth-child(3) {
            & > div:nth-child(2) {
              & > div {
                font-size: 22px;
                line-height: 1.6;
                padding: 0 30px;
              }
            }
            & > div:nth-child(3) {
              font-size: 22px;
              line-height: 1.6;
              & > div:nth-child(2) {
                & > div:nth-child(1) {
                  & > div:nth-child(1) {
                    text-align: center;
                    padding: 0 20px;
                  }
                  & > div:nth-child(2) {
                    padding: 0 20px;
                    text-align: center;
                  }
                }
              }
              & > div:nth-child(3) {
                & > div:nth-child(1) {
                  & > div:nth-child(1) {
                    padding: 0 30px;
                  }
                  & > div:nth-child(2) {
                    padding: 0 30px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

.ocularSurfaceDiseases-nav {
  margin-top: 30px;
}

.ocularSurfaceDiseases_title {
  font-family: 'NotoSansHK';
  font-size: 50px;
  font-weight: Bold;
  font-stretch: normal;
  line-height: 48px;
  letter-spacing: 0px;
  color: #7dbe9c;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.ocularSurfaceDiseases_text_p_span {
  font-family: 'Noto Sans HK';
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #515151;
}

.ocularSurfaceDiseases_title_text {
  font-family: 'NotoSansHK';
  font-size: 38px;
  font-weight: Bold;
  font-stretch: normal;
  line-height: 52px;
  letter-spacing: 0px;
  color: #7dbe9c;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.ocularSurfaceDiseases_title_text::before {
  content: '';
  width: 11px;
  height: 14px;
  margin-right: 15px;
  background: url('https://static.cmereye.com/imgs/2023/06/e34a991e03e8c0a4.png');
}
.ocularSurfaceDiseases_title_btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  margin: auto;
  width: 580px;
  height: 140px;
  border-radius: 20px;
  background-blend-mode: normal, normal;
  font-family: 'Noto Sans HK';
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 50px;
  letter-spacing: 0px;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  // text-shadow: 0 2px 5px #68be92;
  text-shadow: 0 2px 5px rgba($color: #000000, $alpha: .5);
  &::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    bottom: -100%;
    right: -100%;
    background: linear-gradient(45deg, #FFD1D7 0%, #B7DCFF 100%);
    background-size: 100% 100%;
    animation: bgposition 5s infinite linear alternate;
    z-index: -1;
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
.fromTable {
  margin-top: -85%;
}
@media screen and (max-width: 768px) {
  .ocularSurfaceDiseases-nav {
    margin-top: -100px;
  }
  .ocularSurfaceDiseases_nav {
    transform: scale(1);
    margin: 30px auto 0;
    & > #pterygium {
      width: calc(100% - 60px);
      margin: 0 auto 0;
      & > div:nth-child(2) {
        flex-direction: column;
        margin: 25px auto 45px;
        & > div:nth-child(1) {
          width: 100%;
          line-height: 1.8;
          margin-right: 0;
          margin-bottom: 40px;
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          margin: 35px auto 50px;
          flex-direction: column;
          & > div:nth-child(1) {
            & > div {
              margin-bottom: 20px;
              width: 100%;
              font-size: 14px;
              line-height: 1.8;
              height: 40px;
            }
          }
          & > div:nth-child(2) {
            width: 100%;
            padding: 15px 12px;
            font-size: 14px;
            line-height: 1.8;
            height: auto;
          }
        }
        & > div:nth-child(3) {
          margin: 40px auto 50px;
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(2) {
          flex-direction: column;
          margin: 25px auto 0;
          justify-content: flex-start;
          width: 100%;
          & > div {
            width: 100%;
            height: auto;
            font-size: 13px;
            line-height: 1.8;
            transform: scale(1);
            min-height: 180px;
          }
          & > div:nth-child(1) {
            background-repeat: no-repeat;
            background-size: 100% auto;
            padding: 14% 10px 20% 45%;
          }
          & > div:nth-child(2) {
            background-repeat: no-repeat;
            background-size: 100% auto;
            padding: 35px 10px 20% 45%;
          }
        }
      }
      & > div:nth-child(5) {
        & > div:nth-child(2) {
          flex-wrap: wrap;
          margin-top: 30px;
          & > div {
            width: calc(50% - 15px);
            height: auto;
            display: flex;
            align-items: center;
            margin-bottom: 40px;
            & > div:nth-child(1) {
              font-size: 20px;
            }
            & > div:nth-child(2) {
              padding: 25px 15px;
              font-size: 14px;
              line-height: 1.8;
            }
          }
        }
      }
    }
    & > #blepharitis {
      width: calc(100% - 60px);
      margin: 30px auto 0;
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column-reverse;
        margin: 25px auto 50px;
        & > div:nth-child(2) {
          width: 100%;
          line-height: 1.8;
          margin-left: 0;
          margin-bottom: 25px;
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          margin: 30px auto 0;
          flex-direction: column;
          padding-left: 0;
          & > div:nth-child(1) {
            & > div {
              margin-bottom: 30px;
              & > span:nth-child(1) {
                width: 22px;
                height: 22px;
                line-height: 22px;
                font-size: 14px;
                min-width: 22px;
                margin-right: 10px;
              }
              & > span:nth-child(2) {
                line-height: 1.8;
                font-size: 14px;
              }
            }
          }
          & > div:nth-child(2) {
            margin-top: 20px;
          }
        }
        & > div:last-child {
          margin-top: 50px;
        }
      }
      & > div:nth-child(4) {
        margin-top: 50px;
        & > div:nth-child(2) {
          margin: 35px 0 0;
          flex-wrap: wrap;
          & > div {
            width: calc(50% - 25px);
            margin-bottom: 25px;
            & > div:nth-child(2) {
              width: 100%;
              padding: 0;
              margin: 12px 0 0;
              font-size: 14px;
              line-height: 1.8;
            }
          }
        }
      }
      & > div:nth-child(5) {
        margin-top: 20px;
        & > div:nth-child(2) {
          margin: 35px 0 0;
          flex-direction: column;
          & > div {
            width: 100%;
            margin-bottom: 35px;
            padding-bottom: 60px;
            & > div:nth-child(1) {
              & > div:nth-child(2) {
                margin-right: 0;
              }
            }
            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 1.8;
              margin-top: 25px;
            }
          }
          & > div::after {
            transform: rotate(90deg);
            background-size: 100% auto;
            height: calc(100vw - 60px);
            right: 0;
            top: 100%;
            transform: rotate(90deg);
            transform-origin: top right;
            background-size: auto 100%;
            background-repeat: no-repeat;
            height: calc(100vw - 60px);
          }
        }
      }
    }
    & > #keratitis {
      width: calc(100% - 60px);
      margin: 0 auto;
      & > div:nth-child(2) {
        margin-top: 30px;
        & > div:nth-child(2) {
          margin: 35px auto 20px;
          flex-wrap: wrap;
          & > div {
            width: 26%;
            margin-bottom: 30px;
            div:nth-child(2) {
              margin-top: 15px;
              line-height: 1.8;
            }
          }
        }
      }
      & > div:nth-child(3) {
        margin: 55px auto;
        & > div:nth-child(2) {
          margin-top: 15px;
          line-height: 1.8;
          font-size: 14px;
          & > div:not(:first-child) {
            margin-top: 15px;
          }
        }
        & > div:nth-child(3) {
          padding: 0;
          margin: 30px 0 0;
          align-items: flex-start;
          & > div {
            width: calc(50% - 15px);
            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 1.8;
              margin-top: 10px;
              text-align: left;
            }
          }
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(2) {
          margin-top: 15px;
          flex-wrap: wrap;
          & > div {
            width: 100%;
            height: auto;
            font-size: 14px;
            line-height: 1.8;
            margin-bottom: 20px;
            padding: 12px 15px;
            &:nth-of-type(2),
            &:nth-of-type(3) {
              width: calc(50% - 10px);
            }
          }
        }
      }
    }
    & > #iritis {
      width: calc(100% - 60px);
      margin: 50px auto 0;
      & > div:nth-child(2) {
        & > div:nth-child(2) {
          flex-direction: column;
          padding-left: 0;
          & > div:nth-child(1) {
            font-size: 13px;
            line-height: 1.8;
            padding: 5px 0 15px;
            & > div {
              padding: 10px 0;
            }
            & > div::before {
              margin-right: 7px;
              margin-bottom: 0;
            }
            & > div:nth-child(2) {
              width: 100%;
              padding: 15px 0 10px;
            }
          }
          & > div:nth-child(2) {
            width: 80%;
            margin: 0 auto;
          }
        }
      }
      & > div:nth-child(3) {
        margin-top: 50px;
        & > div:nth-child(2) {
          padding-left: 0;
          margin-top: 25px;
          flex-wrap: wrap;
          justify-content: center;
          & > div {
            width: calc((100vw - 60px) / 4 - 10px);
            height: calc((100vw - 60px) / 4 - 10px);
            margin: 0 5px 25px;
            background-size: 100% auto;
            background-repeat: no-repeat;
            line-height: 1.4;
            font-size: 13px;
          }
        }
      }
      & > div:nth-child(4) {
        margin-top: 55px;
        & > div:nth-child(2) {
          margin: 25px auto 0;
          padding-left: 0;
          flex-direction: column;
          & > div {
            width: calc(100% - 10px);
            margin-bottom: 30px;
            margin-left: 10px;
            height: auto;
            padding: 15px 20px;
            & > div:nth-child(2) {
              font-size: 14px;
              margin-left: 10px;
              line-height: 1.8;
            }
            & > div:nth-child(1) {
              left: -30px;
              font-size: 40px;
            }
          }
        }
      }
      & > div:nth-child(5) {
        margin-top: 20px;
        & > div:nth-child(2) {
          flex-direction: column;
          padding-left: 0;
          margin-top: 0;
          & > div {
            width: 100%;
            margin-top: 25px;
            height: auto;
            font-size: 14px;
            line-height: 1.8;
            padding: 25px 0;
            border-top: none;
            border-radius: 10px;
            position: relative;
            overflow: hidden;
            &::before {
              content: '';
              height: 5px;
              width: 100%;
              position: absolute;
              background: #7dbe9c;
              top: 0;
              left: 0;
            }
          }
        }
      }
    }
    & > #episcleritis {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        margin-top: 15px;
        & > div:nth-child(2) {
          width: 100%;
          height: auto;
          padding: 0;
          box-shadow: none;
          display: flex;
          align-items: flex-start;
          margin-top: 25px;
          margin-bottom: 10px;
          & > div {
            width: calc(33% - 20px);
            flex-direction: column;
            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 1.8;
              margin-left: 0;
            }
          }
          & > div:nth-child(2) {
            border: none;
            width: calc(33% - 20px);
          }
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          flex-direction: column;
          margin-top: 20px;
          padding-left: 0;
          margin-bottom: 30px;
          & > div {
            width: 100%;
            height: auto;
            padding: 20px 0;
            margin-bottom: 30px;
            & > div:nth-child(1) {
              padding: 25px 20px 30px 15px;
              font-size: 30px;
              line-height: 1;
              border-right: solid 2px #7dbe9c;
            }
            & > div:nth-child(2) {
              margin-left: 15px;
              font-size: 14px;
              line-height: 1.8;
            }
          }
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(2) {
          padding-left: 0;
          flex-wrap: wrap;
          margin-top: 20px;
          margin-bottom: 30px;
          & > div {
            width: 150px;
            height: 60px;
            background-size: 100% 100%;
            margin-bottom: 25px;
            line-height: 1.4;
            & > span {
              font-size: 16px;
              line-height: 1.6;
              left: 16px;
            }
          }
        }
      }
      & > div:nth-child(5) {
        & > div:nth-child(2) {
          margin-top: 25px;
          margin-bottom: 50px;
          & > div {
            flex-direction: column;
            padding-left: 0;
            & > div:nth-child(1) {
              margin-right: 0;
              & > div:nth-child(1) {
                width: 100%;
                height: 40px;
                line-height: 40px;
                font-size: 16px;
                margin-bottom: 20px;
              }
              & > div:nth-child(2) {
                font-size: 14px;
                line-height: 1.8;
              }
            }
            & > div:nth-child(2) {
              width: 80%;
              margin: 25px auto 0;
              & > div {
                font-size: 13px;
                line-height: 1.4;
              }
            }
          }
          & > div:nth-child(1) {
            margin-bottom: 50px;
          }
        }
      }
      & > div:nth-child(6) {
        & > div:nth-child(2) {
          padding: 0;
          margin-top: 15px;
          margin-bottom: 0;
          & > div:nth-child(1) {
            line-height: 1.8;
            font-size: 14px;
            padding-left: 0;
          }
          & > div:nth-child(2) {
            flex-direction: column;
            margin-top: 20px;
            & > div {
              width: 100%;
              transform: scale(1);
              height: auto;
              margin-bottom: 25px;
              & > div:nth-child(1) {
                font-size: 18px;
                line-height: 45px;
                height: 45px;
              }
              & > div:nth-child(2) {
                font-size: 14px;
                line-height: 1.8;
                text-align: center;
                margin-top: 0;
              }
            }
            & > div:nth-child(1) {
              width: 100%;

              & > div:nth-child(2) {
                padding: 20px;
              }
            }
            & > div:nth-child(2) {
              & > div:nth-child(2) {
                padding: 20px;
              }
            }
            & > div:nth-child(3) {
              & > div:nth-child(2) {
                padding: 20px;
              }
            }
          }
        }
      }
    }
    & > #damage {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div {
        & > div:nth-child(2) {
          padding-left: 0;
        }
      }
      & > div:nth-child(2) {
        flex-direction: column-reverse;
        margin: 15px auto 50px;
        & > div:nth-child(1) {
          margin-top: 20px;
        }
        & > div:nth-child(2) {
          font-size: 14px;
          line-height: 1.8;
          margin-left: 0;
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          margin: 20px auto 30px;
          & > div {
            width: 155px;
            background: none;
            height: auto;
            padding: 10px 15px;
            border: solid 4px #eeeeee;
            border-radius: 15px;
            margin-bottom: 25px;
            & > span {
              font-size: 12px;
              background: #acd9c1;
              width: 30px;
              height: 20px;
              display: block;
              text-align: center;
              line-height: 20px;
              border-radius: 20px 2px 30px 0;
              top: -4px;
              left: -4px;
            }
            & > div {
              font-size: 14px;
              line-height: 1.8;
              text-align: left;
              p {
                display: inline;
              }
            }
          }
          & > div:nth-child(n + 4) {
            margin-top: 0;
          }
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(2) {
          margin: 25px auto 30px;
          & > div {
            width: 100%;
            margin-bottom: 30px;
            & > div:nth-child(1) {
              position: relative;
              left: 0;
            }
            & > div:nth-child(2) {
              width: 100%;
              height: auto;
              font-size: 14px;
              line-height: 1.8;
              margin-left: -4px;
              border-radius: 0 10px 10px 0;
              display: flex;
              align-items: flex-start;
              flex-direction: column;
              justify-content: center;
            }
          }
          & > div:nth-child(1),
          & > div:nth-child(2) {
            & > div:nth-child(2) {
              width: 100%;
            }
          }

          & > div:nth-child(1) {
            margin-left: 0;
            margin-right: 0;

            & > div:nth-child(2) {
              padding: 0;
              padding-left: 20px;
            }
          }

          & > div:nth-child(2) {
            & > div:nth-child(2) {
              padding-left: 20px;
              align-items: flex-start;
            }
          }
          & > div:nth-child(3) {
            margin-left: 0;

            & > div:nth-child(2) {
              padding-left: 20px;
              align-items: flex-start;
            }
          }

          & > div:nth-child(4) {
            margin-left: 0;
            margin-right: 0;

            & > :nth-child(1) {
              left: 0;
            }

            & > div:nth-child(2) {
              padding-left: 20px;
              align-items: flex-start;
            }
          }

          & > div:nth-child(5) {
            & > :nth-child(1) {
              left: 0;
            }

            & > div:nth-child(2) {
              padding-left: 20px;
              align-items: flex-start;
            }
          }

          & > div:nth-child(n + 3) {
            margin-top: 0;
          }
        }
      }
      & > div:nth-child(5) {
        & > div:nth-child(2) {
          margin-top: 25px;
          & > div {
            margin-bottom: 45px;
            & > div:nth-child(1) {
              font-size: 20px;
              line-height: 1;
              margin-bottom: 0;
            }
            & > div:nth-child(1)::after {
              width: 100%;
            }
            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 1.8;
              margin-top: 15px;
            }
          }
          &:last-child() {
            margin-bottom: 0;
          }
        }
      }
    }
    & > #keratoconus {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        flex-direction: column;
        margin: 15px auto 50px;
        & > div:nth-child(1) {
          margin-right: 0;
          & > span {
            letter-spacing: 0px;
          }
        }
        & > div:nth-child(2) {
          margin-top: 20px;
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          padding: 0;
          margin: 30px 0 0 0;
          flex-wrap: wrap;
          & > div {
            width: calc(50% - 15px);
            margin-bottom: 45px;
            & > img:nth-child(1) {
              width: 80%;
            }
            & > div:nth-child(2) {
              font-size: 14px;
              margin-top: 10px;
              line-height: 1.8;
            }
          }
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(2) {
          margin: 25px auto 50px;
          padding-left: 0;
          flex-direction: column;
          & > div:nth-child(1) {
            width: 80%;
            margin: 0 auto;
          }
          & > div:nth-child(2) {
            margin-left: 0;
            padding-top: 0;
            padding-bottom: 0;
            & > div:nth-child(1) {
              margin-top: 30px;
              & > div {
                line-height: 1.6;
                & > span {
                  width: 25px;
                  min-width: 25px;
                  height: 25px;
                  line-height: 25px;
                  font-size: 14px;
                  margin-right: 1-px;
                }
              }
            }
            & > div:nth-child(2) {
              margin: 20px auto 0;
            }
          }
        }
      }
      & > div:nth-child(5) {
        & > div:nth-child(2) {
          margin-top: 45px;
          & > div {
            margin-bottom: 50px;
            & > div:nth-child(1) {
              top: -18px;
              left: 15px;
              width: max-content;
              font-size: 14px;
              line-height: 35px;
              height: 35px;
              padding: 0 40px;
            }
            & > div:nth-child(2) {
              width: 100%;
              height: auto;
              font-size: 14px;
              line-height: 1.8;
              padding: 30px 15px 20px;
            }
          }
          & > div:nth-child(2) {
            & > div:nth-child(1) {
              width: max-content;
              padding: 0 10px;
              font-size: 13px;
            }
          }

          & > div:nth-child(3) {
            margin-bottom: 0;

            & > div:nth-child(1) {
              width: max-content;
              padding: 0 20px;
            }
          }
        }
      }
    }
    & > #keratoplasty {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        margin-top: 15px;
        margin-bottom: 0;
        & > div:nth-child(1) {
          margin-bottom: 0;
          line-height: 1.8;
        }
        & > div:nth-child(2) {
          margin-top: 30px;
        }
      }
      & > div:nth-child(3) {
        margin-top: 50px;
        margin-bottom: 50px;
        & > div:nth-child(2) {
          padding-left: 0;
          & > div:nth-child(1) {
            flex-direction: column;
            margin: 30px 0 0 0;
            & > div {
              width: 100%;
              height: auto;
              font-size: 14px;
              line-height: 1.8;
              padding: 15px 25px;
              transform: scale(1);
              margin-bottom: 20px;
            }
          }
          & > div:nth-child(2) {
            margin-top: 25px;
            & > div:nth-child(1) {
              & > div:nth-child(1) {
                margin-right: 10px;
              }
            }
            & > div:nth-child(2) {
              font-size: 12px;
              line-height: 1.8;
              margin-top: 10px;
            }
          }
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(2) {
          padding-left: 0;
          margin: 25px auto 20px;
          flex-wrap: wrap;
          justify-content: center;
          & > div {
            width: 33%;
            height: 90px;
            margin-bottom: 35px;
            line-height: 1.4;
            &:nth-of-type(1),
            &:nth-of-type(2) {
              width: 35%;
            }
          }
          & > div::before {
            width: 90px;
            height: 90px;
          }
        }
      }
      & > div:nth-child(5) {
        & > div:nth-child(2) {
          padding-left: 0;
          & > div:nth-child(1) {
            margin-bottom: 30px;
            margin-top: 20px;

            & > div:nth-child(1) {
              margin-bottom: 15px;
              font-size: 18px;
              line-height: 1.6;
            }
            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 1.8;
            }
          }
          & > div:nth-child(2) {
            margin-bottom: 30px;
            & > div:nth-child(1) {
              margin-bottom: 15px;
              font-size: 18px;
              line-height: 1.6;
            }
            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 1.8;
              margin-bottom: 0;
            }
          }
          & > div:nth-child(3) {
            & > div {
              & > div:nth-child(1) {
                width: 20%;
              }
              & > div:nth-child(2) {
                width: 29%;
              }
              & > div:nth-child(3) {
                width: 51%;
              }
            }
            & > div:nth-child(1) {
              height: 40px;
              font-size: 14px;
            }
            & > div:nth-child(2) {
              font-size: 12px;
              height: auto;
              line-height: 1.8;
              & > div {
                padding: 15px 0;
              }
              & > div:nth-child(1) {
                font-size: 14px;
                text-align: center;
              }
            }
            & > div:nth-child(3) {
              font-size: 12px;
              line-height: 1.8;
              height: auto;
              & > div {
                padding: 15px 0;
              }
              & > div:nth-child(1) {
                font-size: 14px;
                text-align: center;
              }
              & > div:nth-child(2) {
                padding: 0;
                & > div:nth-child(1) {
                  & > div:nth-child(1) {
                    height: 100px;
                    white-space: pre-wrap;
                    text-align: center;
                  }
                  & > div:nth-child(2) {
                    height: 120px;
                    white-space: pre-wrap;
                    text-align: center;
                  }
                }
              }
              & > div:nth-child(3) {
                padding: 0;
                & > div:nth-child(1) {
                  & > div:nth-child(1) {
                    height: 100px;
                  }
                  & > div:nth-child(2) {
                    height: 120px;
                    padding-left: 5px;
                  }
                }
              }
            }
          }
        }
      }
    }
    & > #faq {
      width: calc(100% - 60px);
      margin: 70px auto 200px;
      & > div:nth-child(2) {
        margin-top: 20px;
      }
    }
    &.ocularSurfaceDiseasesNav-en {
      & > #pterygium {
        & > div:nth-child(3) {
          & > div:nth-child(3) {
            max-width: 100%;
          }
        }
        & > div:nth-child(4) {
          & > div:nth-child(2) {
            & > div:nth-child(1) {
              padding: 10% 10px 20% 45%;
            }
            & > div {
              font-size: 12px;
              line-height: 1.4;
            }
          }
        }
        & > div:nth-child(5) {
          & > div:nth-child(2) {
            & > div {
              & > div:nth-child(2) {
                font-size: 14px;
                padding: 25px 15px;
              }
            }
          }
        }
      }
      & > #blepharitis {
        & > div:nth-child(3) {
          & > div:nth-child(2) {
            & > div:nth-child(1) {
              & > div {
                & > span:nth-child(1) {
                  min-width: 22px;
                }
              }
            }
          }
          & > div:last-child {
            max-width: 100%;
          }
        }
      }
      & > #keratitis {
        & > div:nth-child(3) {
          & > div:nth-child(3) {
            & > div {
              & > div:nth-child(2) {
                padding: 0;
              }
            }
          }
        }
      }
      & > #iritis {
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            & > div:nth-child(1) {
              & > div {
                padding: 15px 0;
              }
            }
          }
        }
        & > div:nth-child(3) {
          & > div:nth-child(2) {
            & > div {
              font-size: 12px;
              line-height: 1.4;
            }
          }
        }
        & > div:nth-child(5) {
          & > div:nth-child(2) {
            & > div {
              text-align: center;
            }
          }
        }
      }
      & > #episcleritis {
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            & > div {
              & > div:nth-child(2) {
                line-height: 1.6;
              }
            }
          }
        }
        & > div:nth-child(3) {
          & > div:nth-child(2) {
            & > div {
              padding: 15px 15px 15px 0;
            }
          }
        }
        & > div:nth-child(4) {
          & > div:nth-child(2) {
            & > div {
              padding-left: 30px;
            }
          }
        }
      }
      & > #damage {
        & > div:nth-child(3) {
          & > div:nth-child(1) {
            font-size: 20px;
          }
          & > div:nth-child(2) {
            & > div {
              & > div {
                font-size: 14px;
              }
            }
          }
        }
        & > div:nth-child(4) {
          & > div:nth-child(1) {
            font-size: 20px;
          }
          & > div:nth-child(2) {
            & > div:nth-child(1) {
              & > div:nth-child(2) {
                font-size: 14px;
                padding: 0 10px;
                line-height: 1.4;
              }
            }
          }
        }
        & > div:nth-child(5) {
          & > div:nth-child(1) {
            font-size: 20px;
          }
        }
      }
      & > #keratoconus {
        & > div:nth-child(4) {
          & > div:nth-child(2) {
            & > div:nth-child(2) {
              & > div:nth-child(1) {
                & > div {
                  & > span {
                    min-width: 25px;
                  }
                }
              }
            }
          }
        }
        & > div:nth-child(5) {
          & > div:nth-child(1) {
            font-size: 20px;
          }
        }
      }
      & > #keratoplasty {
        & > div:nth-child(4) {
          & > div:nth-child(2) {
            & > div {
              &::before {
                z-index: -1;
              }
            }
          }
        }
        & > div:nth-child(5) {
          & > div:nth-child(1) {
            font-size: 18px;
          }
          & > div:nth-child(2) {
            & > div:nth-child(3) {
              & > div:nth-child(1) {
                line-height: 1.4;
                font-size: 12px;
                text-align: center;
              }
              & > div:nth-child(2) {
                & > div {
                  font-size: 12px;
                  padding: 0;
                  &:nth-child(1) {
                    font-size: 12px;
                  }
                }
              }
              & > div:nth-child(3) {
                font-size: 12px;
                & > div:nth-child(1) {
                  font-size: 12px;
                }
                & > div:nth-child(2) {
                  & > div:nth-child(1) {
                    & > div:nth-child(1) {
                      padding: 0;
                    }
                    & > div:nth-child(2) {
                      padding: 0;
                    }
                  }
                }
                & > div:nth-child(3) {
                  & > div:nth-child(1) {
                    & > div:nth-child(1) {
                      padding: 0;
                    }
                    & > div:nth-child(2) {
                      padding: 0;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .fromTable {
    margin-top: 0;
  }
  .ocularSurfaceDiseases_text_p_span {
    font-size: 14px;
    line-height: 1.8;
  }
  .ocularSurfaceDiseases_title {
    font-size: 24px;
  }
  .ocularSurfaceDiseases_title_text {
    font-size: 24px;
  }
  .ocularSurfaceDiseases_title_btn {
    margin-top: 30px;
    width: max-content;
    height: 70px;
    font-size: 16px;
    line-height: 1.6;
    padding: 5px 40px;
    border-radius: 10px;
    max-width: 100%;
  }
}
@media screen and (min-width: 1980px) {
  .ocularSurfaceDiseases_nav {
    margin-bottom: -70%;
  }
}
</style>


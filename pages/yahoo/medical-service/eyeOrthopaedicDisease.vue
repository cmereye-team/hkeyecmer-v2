<script lang="ts" setup>
import { useTitle } from '@vueuse/core'
const { t } = useLang()
const locale = useState<string>('locale.setting')
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: t('pages.medical_service.eyeOrthopaedicDisease_head'),
  meta(){
    return [
      {
        hid: 'eyeOrthopaedicDiseaseDesc',
        name: 'description',
        content: t('tdk.eyeOrthopaedicDisease.desc'),
      },
      {
        hid: 'eyeOrthopaedicDiseaseKey',
        name: 'keywords',
        content: t('tdk.eyeOrthopaedicDisease.key'),
      }
    ]
  },
}))
// 传递背景色
const backgd = [
  '#e4c6a9;',
  '-webkit-linear-gradient(to right, #e4c6a9, #f3e2d1);',
  'linear-gradient(to right, #e4c6a9, #f3e2d1);',
]
const ophthalmoplastyList1 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/fbfec5b88d05a4b2.png',
    title: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.title5_1',
    text: [
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.text5_1',
    ],
    img_title: '眼整形_眼瞼',
    img_alt: '進行眼整形前的眼瞼狀況'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/08/225d20699840e2a8.png',
    title: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.title5_2',
    text: [
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.text5_2_1',
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.text5_2_2',
    ],
    img_title: '眼整形_甲亢突眼',
    img_alt: '進行眼整形前的甲亢突眼狀況'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/a539ea055085ea7e.png ',
    title: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.title5_3',
    text: [
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.text5_3_1',
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.text5_3_2',
    ],
    img_title: '眼整形_淚眼',
    img_alt: '進行眼整形前的淚眼狀況'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/37c392f00eda2363.png',
    title: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.title5_4',
    text: [
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.text5_4',
    ],
    img_title: '眼整形_義眼',
    img_alt: '義眼移植為眼整形方案'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/0bc10909ed0c1c1c.png',
    title: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.title5_5',
    text: [
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.text5_5',
    ],
    img_title: '眼整形_眼眶收縮',
    img_alt: '眼眶收縮為眼整形方案'
  },
]
const ophthalmoplastyList2 = [
  {
    operation: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.operation1',
    introduce: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce1'],
    durability: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.durability1'],
    time: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.time1',
    recovery: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.recovery1'],
  },
  {
    operation: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.operation2',
    introduce: [
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce2_1',
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce2_2',
    ],
    durability: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.durability2_1', 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.durability2_2'],
    time: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.time2',
    recovery: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.recovery2'],
  },
  {
    operation: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.operation3',
    introduce: [
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce3_1',
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce3_2',
    ],
    durability: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.durability3'],
    time: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.time3',
    recovery: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.recovery3_1', 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.recovery3_2'],
  },
]
const ophthalmoplastyListMb2 = [
  {
    operation: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.operation2',
    introduce: [
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce2_1',
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce2_2',
    ],
    durability: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.durability2_1', 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.durability2_2'],
    time: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.time2',
    recovery: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.recovery2'],
  },
  {
    operation: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.operation3',
    introduce: [
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce3_1',
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce3_2',
    ],
    durability: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.durability3'],
    time: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.time3',
    recovery: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.recovery3_1', 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.recovery3_2'],
  },
]
const ophthalmoplastyList3 = [
  {
    operation: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.operation12_1',
    introduce: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce12_1'],
    durability: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.durability12_1'],
    time: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.time12_1',
    recovery: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.recovery12_1'],
  },
  {
    operation: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.operation12_2',
    introduce: [
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce12_2_1',
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce12_2_2',
    ],
    durability: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.durability12_2_1', 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.durability12_2_2'],
    time: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.time12_2',
    recovery: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.recovery12_2'],
  },
  {
    operation: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.operation12_3',
    introduce: [
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce12_3_1',
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce12_3_2',
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce12_3_3',
    ],
    durability: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.durability12_3'],
    time: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.time12_3',
    recovery: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.recovery12_3_1', 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.recovery12_3_2'],
  },
]
const ophthalmoplastyListMb3 = [
  {
    operation: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.operation12_2',
    introduce: [
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce12_2_1',
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce12_2_2',
    ],
    durability: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.durability12_2_1', 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.durability12_2_2'],
    time: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.time12_2',
    recovery: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.recovery12_2'],
  },
  {
    operation: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.operation12_3',
    introduce: [
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce12_3_1',
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce12_3_2',
      'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.introduce12_3_3',
    ],
    durability: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.durability12_3'],
    time: 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.time12_3',
    recovery: ['pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.recovery12_3_1', 'pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.recovery12_3_2'],
  },
]
// 内部导航
const serviceNavigation = [
  {
    anchorName: 'pages.medical_service.eyeOrthopaedicDisease_con.navLists.name1',
    anchorLink: '/yahoo/medical-service/eyeOrthopaedicDisease#kind',
  },
  {
    anchorName: 'pages.medical_service.eyeOrthopaedicDisease_con.navLists.name2',
    anchorLink: '/yahoo/medical-service/eyeOrthopaedicDisease#eye-id_0',
  },
  {
    anchorName: 'pages.medical_service.eyeOrthopaedicDisease_con.navLists.name3',
    anchorLink: '/yahoo/medical-service/eyeOrthopaedicDisease#eye-id_1',
  },
  {
    anchorName: 'pages.medical_service.eyeOrthopaedicDisease_con.navLists.name4',
    anchorLink: '/yahoo/medical-service/eyeOrthopaedicDisease#eye-id_2',
  },
  {
    anchorName: 'pages.medical_service.eyeOrthopaedicDisease_con.navLists.name5',
    anchorLink: '/yahoo/medical-service/eyeOrthopaedicDisease#eye-id_3',
  },
  {
    anchorName: 'pages.medical_service.eyeOrthopaedicDisease_con.navLists.name6',
    anchorLink: '/yahoo/medical-service/eyeOrthopaedicDisease#eye-id_4',
  },
  {
    anchorName: 'pages.medical_service.eyeOrthopaedicDisease_con.navLists.name7',
    anchorLink: '/yahoo/medical-service/eyeOrthopaedicDisease#eye_bag_removal',
  },
  {
    anchorName: 'pages.medical_service.eyeOrthopaedicDisease_con.navLists.name8',
    anchorLink: '/yahoo/medical-service/eyeOrthopaedicDisease#double_fold_eyelids',
  },
  {
    anchorName: 'pages.medical_service.eyeOrthopaedicDisease_con.navLists.name9',
    anchorLink: '/yahoo/medical-service/eyeOrthopaedicDisease#open_eye',
  },
  {
    anchorName: 'pages.medical_service.eyeOrthopaedicDisease_con.navLists.name10',
    anchorLink: '/yahoo/medical-service/eyeOrthopaedicDisease#slack',
  },
  {
    anchorName: 'pages.medical_service.eyeOrthopaedicDisease_con.navLists.name11',
    anchorLink: '/yahoo/medical-service/eyeOrthopaedicDisease#eyelid_canceration',
  },
  {
    anchorName: 'pages.medical_service.eyeOrthopaedicDisease_con.navLists.name12',
    anchorLink: '/yahoo/medical-service/eyeOrthopaedicDisease#ocular_surface',
  },
  {
    anchorName: 'pages.medical_service.eyeOrthopaedicDisease_con.navLists.name13',
    anchorLink: '/yahoo/medical-service/eyeOrthopaedicDisease#eye_in_canceration',
  },
  {
    anchorName: 'pages.medical_service.eyeOrthopaedicDisease_con.navLists.name14',
    anchorLink: '/yahoo/medical-service/eyeOrthopaedicDisease#eyeProsthesis',
  },
]
// 跳转Whatsapp
const goWhatsApp = () => {
  window.open(
    'https://api.whatsapp.com/send?phone=85265767817&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2',
    '_blank'
  )
}
const goTel = () =>{
  location.href = 'tel: +852 3956 2025'
}
const bannerData = {
  pcSrc: 'https://static.cmereye.com/static/hkcmereye/bannerzip/眼矯形及眼眶疾病1.png',
  mbSrc: 'https://static.cmereye.com/static/hkcmereye/bannerzip/眼矯形及眼眶疾病2.png',
  cnName: '眼矯形及眼眶疾病',
  enName: 'EYE PLASTIC SURGERY AND ORBITAL DISEASES',
  textColor: '#E4C6A9',
  pageName: 'eyeOrthopaedicDisease'
}
</script>
<template>
  <div class="eyeOrthopaedicDisease">
    <yahooPageServiceBanner :bannerData="bannerData" />
    <div class="eyeOrthopaedicDisease-nav">
      <yahooserviceNav :arrData="serviceNavigation" :pageName="'eyeOrthopaedicDisease'" />
    </div>
    <div class="eyeOrthopaedicDisease_nav" :class="{'eyeOrthopaedicDiseaseNav-en': locale === 'en'}">
      <div id="ophthalmoplasty">
        <div class="eyeOrthopaedicDisease_title_text">{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.title')}}</div>
        <div class="eyeOrthopaedicDisease_p">
          {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.p')}}
        </div>
        <div>
          <div id="kind" class="eyeOrthopaedicDisease_title_text_border">
            {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.name')}}
          </div>
          <div>
            <div>
              <div>
                <div><span>1</span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.name1_1')}}</div>
                <div class="eyeOrthopaedicDisease_text_p_span mb_text_p_span">
                  <p>
                    {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.p1_1')}}
                  </p>
                  <p>
                    {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.p1_2')}}
                  </p>
                </div>
              </div>
              <div>
                <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.name1_2')}}</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <p>
                    {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.p1_3')}}
                  </p>
                </div>
              </div>
            </div>
            <div class="img-size">
              <img src="https://static.cmereye.com/imgs/2023/06/11636c1cbfc3bce0.png" title="眼整形_眼瞼下垂" alt="進行眼整形前的眼瞼下垂狀況" />
            </div>
          </div>
          <div>
            <div class="img-size">
              <img src="https://static.cmereye.com/imgs/2023/06/f2face15bee70403.png" title="眼整形_眼臉內翻" alt="進行眼整形前的眼臉內翻狀況" />
            </div>
            <div>
              <div>
                <div><span>2</span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.name2_1')}}</div>
                <div class="eyeOrthopaedicDisease_text_p_span mb_text_p_span">
                  <p>
                    {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.p2_1')}}
                  </p>
                  <p>
                    {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.p2_2')}}
                  </p>
                </div>
              </div>
              <div>
                <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.name2_2')}}</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <p>
                    {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.p2_3')}}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div><span>3</span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.name3_1')}}</div>
                <div class="eyeOrthopaedicDisease_text_p_span mb_text_p_span">
                  <p>
                    {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.p3_1')}}
                  </p>
                </div>
              </div>
              <div>
                <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.name3_2')}}</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <p>
                    {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.p3_2')}}
                  </p>
                </div>
              </div>
            </div>
            <div class="img-size">
              <img src="https://static.cmereye.com/imgs/2023/06/289a6a1898690149.png" title="眼整形_眼臉外翻" alt="進行眼整形前的眼臉外翻狀況" />
            </div>
          </div>
          <div>
            <div class="img-size">
              <img src="https://static.cmereye.com/imgs/2023/07/5652604220c6e217.png" title="眼整形_兔眼" alt="進行眼整形前的兔眼狀況" />
            </div>
            <div>
              <div>
                <div><span>4</span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.name4_1')}}</div>
                <div class="eyeOrthopaedicDisease_text_p_span mb_text_p_span">
                  <p>
                    {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.p4_1')}}
                  </p>
                </div>
              </div>
              <div>
                <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.name4_2')}}</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <p>
                    {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.p4_2')}}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="eyeOrthopaedicDisease_title_btn" @click="goWhatsApp">
            <span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.btn_1')}}</span><span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.btn_2')}}</span>
          </div> -->
          <div class="serviceBtnStyle">
            <yahoo-service-button-icon
              :str="$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.btn_1') + '\n' + $t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.btn_2')"
              :link="'https://api.whatsapp.com/send?phone=85265767817&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'" 
              :type="'4'"
              :pageName="'eyeOrthopaedicDisease'"
            />
          </div>
        </div>
        <div>
          <div class="eyeOrthopaedicDisease_title_text_border">{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.name5')}}</div>
          <div>
            <div v-for="(item, index) in ophthalmoplastyList1" :id="`eye-id_${index}`" :key="index">
              <div>
                <div class="ophthalmoplasty_bg_text" :class="{'ophthalmoplasty_bg_text_en': locale === 'en'}">{{ $t(item.title) }}</div>
                <div class="eyeOrthopaedicDisease_text_p_span mb_text_p_span">
                  <p v-for="(ele, index) in item.text" :key="index">
                    {{ $t(ele) }}
                  </p>
                </div>
              </div>
              <div class="mb-img"><img :src="item.img" :alt="item.img_alt" :title="item.img_title" /></div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div id="eye_bag_removal" class="ophthalmoplasty_bg_text" :class="{'ophthalmoplasty_bg_text_en': locale === 'en'}">
                  {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.name6')}}
                </div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <p>
                    {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.text6')}}
                  </p>
                </div>
              </div>
              <div class="img-size">
                <img src="https://static.cmereye.com/imgs/2023/06/b44e868ec09d73a2.png" title="眼整形_去眼袋" alt="去眼袋為眼整形方案" />
              </div>
            </div>
            <div>
              <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.name7')}}</div>
              <div>
                <div>
                  <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.title7_1')}}</div>
                  <div class="eyeOrthopaedicDisease_text_p_span">
                    <span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.text7_1_1')}}</span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.text7_1_2')}}
                  </div>
                </div>
                <div>
                  <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.title7_2')}}</div>
                  <div class="eyeOrthopaedicDisease_text_p_span">
                    {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.text7_2')}}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div id="double_fold_eyelids" class="ophthalmoplasty_bg_text" :class="{'ophthalmoplasty_bg_text_en': locale === 'en'}">
                  {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.name8')}}
                </div>
                <div class="eyeOrthopaedicDisease_text_p_span  mb_text_p_span">
                  <p>
                    {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.text8')}}
                  </p>
                </div>
              </div>
              <div class="img-size">
                <img src="https://static.cmereye.com/imgs/2023/06/840d28c965501ab9.png" title="眼整形_割雙眼皮" alt="割雙眼皮為眼整形方案" srcset="" />
              </div>
            </div>
            <div>
              <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.name9')}}</div>
              <div class="pc-table">
                <div v-for="(item, index) in ophthalmoplastyList2" :key="index">
                  <div>{{ $t(item.operation) }}</div>
                  <div>
                    <span v-for="(ele, index) in item.introduce" :key="index">{{
                      $t(ele)
                    }}</span>
                  </div>
                  <div>
                    <span v-for="(ele, index) in item.durability" :key="index">{{ $t(ele) }}</span>
                  </div>
                  <div>{{ $t(item.time) }}</div>
                  <div>
                    <span v-for="(ele, index) in item.recovery" :key="index">{{
                      $t(ele)
                    }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-table-box">
                <div v-for="(item, index) in ophthalmoplastyListMb2" :key="index" class="mb-nav-box">
                  <div class="mb-operation">{{ $t(item.operation) }}</div>
                  <div class="mb-content-box2">
                    <div>
                      <span v-for="(ele, index) in item.introduce" :key="index">{{ $t(ele) }}</span>
                    </div>
                    <div>
                      <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.durability1')}}：<span v-for="el in item.durability" :key="el">{{ $t(el) }}</span></div>
                    </div>
                    <div>
                      <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.time1')}}：<span>{{ $t(item.time) }}</span></div>
                    </div>
                    <div>
                      <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.recovery1')}}：</div>
                      <div><span v-for="el in item.recovery" :key="el">{{ $t(el) }}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div id="open_eye" class="ophthalmoplasty_bg_text" :class="{'ophthalmoplasty_bg_text_en': locale === 'en'}">
                {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.name10')}}
              </div>
              <div>
                <div>
                  {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.text10_1')}}
                </div>
                <div>
                  <div>
                    <img src="https://static.cmereye.com/imgs/2023/06/517c46f42f285adf.png" title="開眼頭" alt="開眼頭手術步驟一" />
                  </div>
                  <div>
                    <img src="https://static.cmereye.com/imgs/2023/06/10ab946964d2b07b.png" title="開眼頭" alt="開眼頭手術步驟二" />
                  </div>
                  <div>
                    <img src="https://static.cmereye.com/imgs/2023/06/9d3d25638a38b884.png" title="開眼頭" alt="開眼頭手術步驟三" />
                  </div>
                  <div>
                    <img src="https://static.cmereye.com/imgs/2023/06/785d0c8842e75e2c.png" title="開眼頭" alt="開眼頭手術步驟四" />
                  </div>
                  <div>
                    <img src="https://static.cmereye.com/imgs/2023/06/c27330f53acabcd1.png" title="開眼頭" alt="開眼頭手術步驟五" />
                  </div>
                </div>
                <div>
                  {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.text10_2')}}
                </div>
              </div>
              <div>
                <p><span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.span10_1')}}</span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.span10_2')}}</p>
                <p><span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.span10_3')}}</span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.span10_4')}}</p>
                <p><span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.span10_5')}}</span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.span10_6')}}</p>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <div id="slack" class="ophthalmoplasty_bg_text" :class="{'ophthalmoplasty_bg_text_en': locale === 'en'}">{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.name11')}}</div>
                  <div class="eyeOrthopaedicDisease_text_p_span mb_text_p_span">
                    <p>
                      {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.p11_1')}}
                    </p>
                    <p>
                      {{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.p11_2')}}
                    </p>
                  </div>
                </div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2023/06/afd80d0148f50d39.png" title="眼整形_眼皮鬆弛" alt="進行眼整形前的眼皮鬆弛狀況" />
                </div>
              </div>
              <div>
                <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.name12')}}</div>
                <div class="pc-table">
                  <div v-for="(item, index) in ophthalmoplastyList3" :key="index">
                    <div>{{ $t(item.operation) }}</div>
                    <div>
                      <span v-for="(ele, index) in item.introduce" :key="index">{{ $t(ele) }}</span>
                    </div>
                    <div>
                      <span v-for="(ele, index) in item.durability" :key="index">{{ $t(ele) }}</span>
                    </div>
                    <div>{{ $t(item.time) }}</div>
                    <div>
                      <span v-for="(ele, index) in item.recovery" :key="index">{{ $t(ele) }}</span>
                    </div>
                  </div>
                </div>
                <div class="mb-table-box">
                  <div v-for="(item, index) in ophthalmoplastyListMb3" :key="index" class="mb-nav-box">
                    <div class="mb-operation">{{ $t(item.operation) }}</div>
                    <div class="mb-content-box2">
                      <div>
                        <span v-for="(ele, index) in item.introduce" :key="index">{{ $t(ele) }}</span>
                      </div>
                      <div>
                        <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.durability12_1')}}<span v-for="el in item.durability" :key="el">{{ $t(el) }}</span></div>
                      </div>
                      <div>
                        <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.time12_1')}}<span>{{ $t(item.time) }}</span></div>
                      </div>
                      <div>
                        <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.ophthalmoplasty.recovery12_1')}}</div>
                        <div><span v-for="el in item.recovery" :key="el">{{ $t(el) }}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div id="eyeNeoplasms">
        <div class="eyeOrthopaedicDisease_title_text">{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.title1')}}</div>
        <div class="eyeOrthopaedicDisease_p">
          {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.p1')}}
        </div>
        <div>
          <div>
            <div class="eyeOrthopaedicDisease_title_text_border">
              {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.title2')}}
            </div>
            <div>
              <div>
                <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.name2_1')}}</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.p2_1')}}
                </div>
              </div>
              <div>
                <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.name2_2')}}</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.p2_2')}}
                </div>
              </div>
              <div>
                <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.name2_3')}}</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.p2_3')}}
                </div>
              </div>
            </div>
            <!-- <div class="eyeOrthopaedicDisease_title_btn" @click="goTel">
              <span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.btn2_1')}}</span><span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.btn2_2')}}</span>
            </div> -->
            <div class="serviceBtnStyle">
              <yahoo-service-button-icon
                :str="$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.btn2_1') + '\n' + $t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.btn2_2')"
                :link="'tel: +852 3956 2025'" 
                :type="'3'"
                :pageName="'eyeOrthopaedicDisease'"
              />
            </div>
          </div>
          <div>
            <div class="eyeOrthopaedicDisease_title_text_border">{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.title3')}}</div>
            <div>
              <div id="eyelid_canceration">{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.name3_1')}}</div>
              <div>
                <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.text3_1')}}<span>VS</span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.text3_2')}}</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <p>
                    {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.p3_1')}}
                  </p>
                  <p>
                    {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.p3_2')}}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div id="ocular_surface">{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.name4')}}</div>
              <div>
                <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.text4_1')}}<span>VS</span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.text4_2')}}</div>
                <div>
                  <div class="eyeOrthopaedicDisease_text_p_span">
                    <p>
                      {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.p4_1')}}
                    </p>
                    <p>
                      {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.p4_2')}}
                    </p>
                  </div>
                  <div>
                    <img src="https://static.cmereye.com/imgs/2023/06/1b07a074afc03c77.png" title="翼狀胬肉症狀" alt="翼狀胬肉良性慢性病變" />
                    <img src="https://static.cmereye.com/imgs/2023/06/1b7f452246c78347.png" title="翼狀胬肉症狀" alt="翼狀胬肉發展狀況" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div id="eye_in_canceration">{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.name5')}}</div>
              <div>
                <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.text5_1')}} <span>VS</span> {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.text5_2')}}</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <p>
                    {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.p5')}}
                  </p>
                </div>
              </div>
              <div>
                <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.text5_3')}}<span>VS</span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.text5_4')}}</div>
                <div>
                  <div class="eyeOrthopaedicDisease_text_p_span">
                    <p>
                      {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.p5_1')}}
                    </p>
                    <p>
                      {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.p5_2')}}
                    </p>
                  </div>
                  <div>
                    <img src="https://static.cmereye.com/imgs/2023/06/1c38390c52af4e77.png" title="眼腫瘤_視網膜母細胞瘤" alt="視網膜母細胞瘤為眼腫瘤之一" />
                    <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.text5_5')}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="eyeOrthopaedicDisease_title_text_border">
              {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.title6')}}
            </div>
            <div>
              <div>
                <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.name6_1')}}</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.text6_1')}}
                </div>
              </div>
              <div>
                <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.name6_2')}}</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.text6_2')}}
                </div>
              </div>
              <div>
                <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.name6_3')}}</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.text6_3')}}
                </div>
              </div>
              <div>
                <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.name6_4')}}</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeNeoplasms.text6_4')}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="eyeProsthesis">
        <div class="eyeOrthopaedicDisease_title_text">{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeProsthesis.title')}}</div>
        <div>
          <div class="eyeOrthopaedicDisease_text_p_span mb_text_p_span">
            {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeProsthesis.context')}}
          </div>
          <div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/06/a08f975a028f344d.png" title="義眼台" alt="矽膠義眼台" />
              <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeProsthesis.text1_1')}}</div>
            </div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/06/87fbb416ef1f926a.png" title="義眼台" alt="羥基磷灰石義眼台" />
              <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeProsthesis.text1_2')}}</div>
            </div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/06/ef3079b59fb31f64.png" title="義眼台" alt="多孔聚乙烯義眼台" />
              <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeProsthesis.text1_3')}}</div>
            </div>
          </div>
          <div>
            <div class="ophthalmoplasty_bg_text" :class="{'ophthalmoplasty_bg_text_en': locale === 'en'}">{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeProsthesis.name1')}}</div>
            <div class="eyeOrthopaedicDisease_text_p_span">
              {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeProsthesis.context1')}}
            </div>
          </div>
          <div>
            <div class="ophthalmoplasty_bg_text" :class="{'ophthalmoplasty_bg_text_en': locale === 'en'}">{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeProsthesis.name2')}}</div>
            <div class="eyeOrthopaedicDisease_text_p_span">
              <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeProsthesis.context2')}}</div>
              <div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <div>01</div>
                  <div>
                    {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeProsthesis.text2_1')}}
                  </div>
                </div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <div>02</div>
                  <div>
                    {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeProsthesis.text2_2')}}
                  </div>
                </div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <div>03</div>
                  <div>
                    {{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeProsthesis.text2_3')}}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="eyeOrthopaedicDisease_title_btn" @click="goWhatsApp">
            <span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeProsthesis.btn1')}}</span><span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeProsthesis.btn2')}}</span>
          </div> -->
          <div class="serviceBtnStyle">
            <yahoo-service-button-icon
              :str="$t('pages.medical_service.eyeOrthopaedicDisease_con.eyeProsthesis.btn1') + '\n' + $t('pages.medical_service.eyeOrthopaedicDisease_con.eyeProsthesis.btn2')"
              :link="'https://api.whatsapp.com/send?phone=85265767817&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'" 
              :type="'1'"
              :pageName="'eyeOrthopaedicDisease'"
            />
          </div>
        </div>
      </div>
      <div id="usage">
        <div class="eyeOrthopaedicDisease_title_text">{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.title')}}</div>
        <div>
          <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.name1')}}</div>
          <div>
            <div>
              <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text1_1')}}</div>
              <div>
                {{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text1_2')}}
              </div>
              <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text1_3')}}</div>
              <div>
                {{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text1_4')}}
              </div>
            </div>
            <div>
              <div></div>
              <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text1_5')}}</div>
              <div>
                {{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text1_6')}}
              </div>
              <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text1_7')}}</div>
            </div>
            <div class="usage_1_Image">
              <img src="https://static.cmereye.com/imgs/2023/07/152ce2771477c508.png" title="義眼片" alt="義眼片安裝過程">
            </div>
          </div>
        </div>
        <div>
          <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.name2')}}</div>
          <div>
            <div>
              <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text2_1')}}</div>
              <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text2_2')}}</div>
              <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text2_3')}}</div>
              <div>
                {{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text2_4')}}
              </div>
            </div>
            <div>
              <div></div>
              <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text2_5')}}</div>
              <div>
                {{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text2_6')}}
              </div>
              <div>
                {{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text2_7')}}
              </div>
              
            </div>
            <div class="usage_2_Image">
                <img src="https://static.cmereye.com/imgs/2023/07/e8bd0efb25794873.png" title="義眼片" alt="義眼片取出過程">
              </div>
          </div>
        </div>
        <div>
          <div>
            {{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.name3')}}
          </div>
          <div>
            {{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text3_1')}}
          </div>
          <div>
            {{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text3_2')}}
            <span
              class="usage-box-text">{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.span3')}}</span>
          </div>
        </div>
        <div>
          <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.name4')}}</div>
          <div class="eye_attention">
            {{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text4')}}
          </div>
          <div>
            <!-- <div>下列出幾點義眼的注意事項：</div> -->
            <div></div>
            <div>
              <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.name5')}}</div>
              <div class="eye_attention">
                {{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text5')}}
              </div>
            </div>
            <div>
              <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.name6')}}</div>
              <div class="eye_attention">
                {{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text6')}}
              </div>
            </div>
            <div>
              <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.name7')}}</div>
              <div>
                <p class="eye_attention">
                  <span>1</span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text7_1')}}
                </p>
                <p class="eye_attention"><span>2</span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text7_2')}}</p>
                <p class="eye_attention">
                  <span>3</span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text7_3')}}
                </p>
              </div>
            </div>
            <div>
              <div>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.name8')}}</div>
              <div>
                <p class="eye_attention"><span>1</span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text8_1')}}</p>
                <p class="eye_attention">
                  <span>2</span> {{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text8_2')}}
                </p>
                <p class="eye_attention">
                  <span>3</span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text8_3')}}
                </p>
                <p class="eye_attention">
                  <span>4</span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text8_4')}}
                </p>
                <p class="eye_attention">
                  <span>5</span>{{$t('pages.medical_service.eyeOrthopaedicDisease_con.usage.text8_5')}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rightSidesNavigation">
    </div>
    <div class="fromTable">
      <yahooFormFooterInfo :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
        :co="`color:${backgd[0]}`" />
    </div>
    <yahooPageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
.eyeOrthopaedicDisease-nav{
  margin-top: 30px;
}
.eyeOrthopaedicDisease_nav {
  max-width: 1200px;
  width: 1200px;
  margin: 100px auto 0;
  transform: scale(0.9);
  transform-origin: center top;
  &>#ophthalmoplasty {
    margin-bottom: 160px;
    &>div:nth-child(2) {
      margin: 60px auto 120px;
    }
    &>div:nth-child(3) {
      margin: 100px auto 160px;
      &>div:nth-child(2),
      &>div:nth-child(4) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 99px;
        &>div:nth-child(1) {
          width: 752px;
          transform: scale(0.85);
          &>div {
            margin-bottom: 78px;
            &>div:nth-child(1) {
              font-family: 'NotoSansHK-Bold';
              font-size: 32px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 52px;
              letter-spacing: 0px;
              color: #d0aa85;
              margin-bottom: 25px;
              display: flex;
              align-items: center;
              &>span {
                width: 34px;
                height: 34px;
                margin-right: 10px;
                background-color: #d0aa85;
                border-radius: 17px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-family: 'OPPOSans-B';
                font-size: 22px;
              }
            }
            &>div:nth-child(2) {
              font-size: 22px;
              line-height: 44px;
            }
          }
          &>div:nth-child(1) {
            &>div:nth-child(2) {
              &>p:nth-child(1) {
                margin-bottom: 23px;
              }
            }
          }
        }
      }
      &>div:nth-child(3),
      &>div:nth-child(5) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 99px;
        &>div:nth-child(2) {
          width: 752px;
          transform: scale(0.85);
          &>div {
            &>div:nth-child(1) {
              font-family: 'NotoSansHK-Bold';
              font-size: 32px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 52px;
              letter-spacing: 0px;
              color: #d0aa85;
              margin-bottom: 25px;
              display: flex;
              align-items: center;
              &>span {
                width: 34px;
                height: 34px;
                margin-right: 10px;
                background-color: #d0aa85;
                border-radius: 17px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-family: 'OPPOSans-B';
                font-size: 22px;
              }
            }
            &>div:nth-child(2) {
              font-size: 22px;
              line-height: 44px;
            }
          }
          &>div:nth-child(1) {
            margin-bottom: 78px;
            &>div:nth-child(2) {
              &>p:nth-child(1) {
                margin-bottom: 23px;
              }
            }
          }
        }
      }
      &>div:nth-child(3),
      &>div:nth-child(4),
      &>div:nth-child(5),
      &>div:nth-child(6) {
        margin-top: 160px;
      }
    }
    &>div:nth-child(4) {
      &>div:nth-child(2) {
        &>div {
          display: flex;
          margin-bottom: 120px;
          &>div:nth-child(1) {
            width: 898px;
            &>div:nth-child(2) {
              margin-top: 28px;
              margin-right: 37px;
              font-size: 22px;
              line-height: 44px;
            }
          }
          &> :nth-child(2) {
            margin-top: 40px;
          }
        }
      }
      &>div:nth-child(3) {
        &>div:nth-child(1) {
          display: flex;
          &>div:nth-child(1) {
            width: 898px;
            &>div:nth-child(2) {
              margin-top: 28px;
              margin-right: 37px;
              font-size: 22px;
              line-height: 44px;
            }
          }
          &> :nth-child(2) {
            margin-top: 40px;
          }
        }
        &>div:nth-child(2) {
          margin-bottom: 120px;
          &>div:nth-child(1) {
            font-family: 'NotoSansHK-Bold';
            font-size: 28px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 52px;
            letter-spacing: 0px;
            color: #d0aa85;
          }
          &>div:nth-child(2) {
            display: flex;
            justify-content: space-between;
            &>div {
              margin-top: 85px;
              width: calc(50% - 30px);
              background-color: #ffffff;
              border-radius: 15px;
              border: solid 2px #e4c6a9;
              position: relative;
              &>div:nth-child(1) {
                position: absolute;
                top: -35px;
                left: 111px;
                width: 370px;
                height: 72px;
                background-color: #ffffff;
                border-radius: 15px;
                border: solid 2px #e4c6a9;
                font-family: 'NotoSansHK-Medium';
                font-size: 26px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 52px;
                letter-spacing: 0px;
                color: #515151;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              &>div:nth-child(2) {
                font-size: 22px;
                line-height: 44px;
                padding: 80px 46px 40px;
                padding-top: 62px;
              }
            }
          }
        }
      }
      &>div:nth-child(4) {
        margin-bottom: 120px;
        &>div:nth-child(1) {
          display: flex;
          margin-bottom: 40px;
          &>div:nth-child(1) {
            width: 898px;
            &>div:nth-child(2) {
              margin-top: 28px;
              margin-right: 37px;
              font-size: 22px;
              line-height: 44px;
            }
          }
          &> :nth-child(2) {
            margin-top: 40px;
          }
        }
        &>div:nth-child(2) {
          &>div:nth-child(1) {
            font-family: Noto Sans HK;
            font-size: 20px;
            font-weight: 700;
            font-weight: normal;
            font-stretch: normal;
            line-height: 52px;
            letter-spacing: 0px;
            color: #d0aa85;
            margin-bottom: 30px;
          }
          &>div {
            &>div {
              display: flex;
              border: 1px solid #e5e5e5;
              &>div {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                font-family: 'Noto Sans HK';
                font-size: 22px;
                font-stretch: normal;
                line-height: 38px;
                letter-spacing: 0px;
                color: #515151;
              }
              &>div:nth-child(1) {
                width: 254px;
                font-family: 'NotoSansHK-Medium';
                font-size: 30px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 52px;
                letter-spacing: 0px;
                color: #515151;
              }
              &>div:nth-child(2) {
                width: 520px;
                border-left: 1px solid #e5e5e5;
                border-right: 1px solid #e5e5e5;
              }
              &>div:nth-child(3) {
                width: 238px;
              }
              &>div:nth-child(4) {
                width: 153px;
                border-left: 1px solid #e5e5e5;
                border-right: 1px solid #e5e5e5;
              }
              &>div:nth-child(5) {
                width: 200px;
              }
            }
            &>div:nth-child(1) {
              height: 76px;
              background-color: #e4c6a9;
              &>div {
                font-family: 'NotoSansHK-Medium';
                font-size: 26px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 52px;
                letter-spacing: 0px;
                color: #ffffff;
              }
            }
            &>div:nth-child(2) {
              height: 295px;
              &>div:nth-child(2) {
                display: block;
                padding: 30px 35px;
                text-align: justify;
                &>span {
                  font-size: 22px;
                  letter-spacing: 0px;
                  color: #515151;
                  font-family: 'Noto Sans HK';
                  line-height: 38px;
                }
                &>span:nth-child(2) {
                  font-size: 22px;
                  font-weight: bold;
                  letter-spacing: 0px;
                  color: #d0aa85;
                }
              }
              border-top: 1px solid #e5e5e5;
              border-bottom: 1px solid #e5e5e5;
              &>div:nth-child(3) {
                &>span:nth-child(1) {
                  font-weight: bold;
                }
              }
            }
            &>div:nth-child(3) {
              height: 305px;
              background-color: #f8f8f9;
              &>div:nth-child(2) {
                display: block;
                padding: 30px 35px;
                text-align: justify;
                &>span {
                  font-size: 22px;
                  letter-spacing: 0px;
                  color: #515151;
                  font-family: 'Noto Sans HK';
                  line-height: 38px;
                }
                &>span:nth-child(2) {
                  font-size: 22px;
                  font-weight: bold;
                  letter-spacing: 0px;
                  color: #d0aa85;
                }
              }
              &>div:nth-child(5) {
                &>span:nth-child(1) {
                  font-weight: bold;
                }
              }
            }
          }
        }
      }
      &>div:nth-child(5) {
        &>div:nth-child(1) {
          margin-bottom: 120px;
          &>div:nth-child(2) {
            margin: 50px 0;
            &>div {
              font-family: 'Noto Sans HK';
              font-size: 22px;
              line-height: 44px;
              letter-spacing: 0px;
              color: #515151;
            }
            &>div:nth-child(2) {
              margin: 50px 0;
              display: flex;
              justify-content: space-between;
              padding: 0 40px;
            }
          }
          &>div:nth-child(3) {
            font-family: 'Noto Sans HK';
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 44px;
            letter-spacing: 0px;
            color: #515151;
            &>p>span {
              color: #d0aa85;
            }
          }
        }
        &>div:nth-child(2) {
          &>div:nth-child(1) {
            display: flex;
            margin-bottom: 40px;
            &>div:nth-child(1) {
              width: 898px;
              &>div:nth-child(2) {
                margin-top: 28px;
                margin-right: 37px;
                font-size: 22px;
                line-height: 44px;
              }
            }
            &> :nth-child(2) {
              margin-top: 40px;
            }
          }
          &>div:nth-child(2) {
            &>div:nth-child(1) {
              font-family: 'NotoSansHK-Bold';
              font-size: 28px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 52px;
              letter-spacing: 0px;
              color: #d0aa85;
              margin-bottom: 50px;
            }
            &>div {
              &>div {
                display: flex;
                border: 1px solid #e5e5e5;
                &>div {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: column;
                  font-family: 'Noto Sans HK';
                  font-size: 22px;
                  font-stretch: normal;
                  line-height: 42px;
                  letter-spacing: 0px;
                  color: #515151;
                }
                &>div:nth-child(1) {
                  width: 254px;
                  font-family: 'NotoSansHK-Medium';
                  font-size: 30px;
                  font-weight: normal;
                  font-stretch: normal;
                  line-height: 52px;
                  letter-spacing: 0px;
                  color: #515151;
                }
                &>div:nth-child(2) {
                  width: 520px;
                  border-left: 1px solid #e5e5e5;
                  border-right: 1px solid #e5e5e5;
                }
                &>div:nth-child(3) {
                  width: 220px;
                }
                &>div:nth-child(4) {
                  width: 153px;
                  border-left: 1px solid #e5e5e5;
                  border-right: 1px solid #e5e5e5;
                }
                &>div:nth-child(5) {
                  width: 175px;
                }
              }
              &>div:nth-child(1) {
                height: 76px;
                background-color: #e4c6a9;
                &>div {
                  font-family: 'NotoSansHK-Medium';
                  font-size: 26px;
                  font-weight: normal;
                  font-stretch: normal;
                  line-height: 52px;
                  letter-spacing: 0px;
                  color: #ffffff;
                }
              }
              &>div:nth-child(2) {
                height: 295px;
                &>div:nth-child(2) {
                  display: block;
                  padding: 30px 35px;
                  text-align: justify;
                  &>span {
                    font-size: 22px;
                    letter-spacing: 0px;
                    color: #515151;
                    font-family: 'Noto Sans HK';
                    line-height: 38px;
                  }
                  &>span:nth-child(2) {
                    font-size: 22px;
                    font-weight: bold;
                    letter-spacing: 0px;
                    color: #d0aa85;
                  }
                }
                border-top: 1px solid #e5e5e5;
                border-bottom: 1px solid #e5e5e5;
                &>div:nth-child(3) {
                  &>span:nth-child(1) {
                    font-weight: bold;
                  }
                }
              }
              &>div:nth-child(3) {
                height: 305px;
                background-color: #f8f8f9;
                &>div:nth-child(2) {
                  display: block;
                  padding: 30px 35px;
                  text-align: justify;
                  &>span {
                    font-size: 22px;
                    letter-spacing: 0px;
                    color: #515151;
                    font-family: 'Noto Sans HK';
                    line-height: 38px;
                  }
                  &>span:nth-child(2) {
                    font-size: 22px;
                    font-weight: bold;
                    letter-spacing: 0px;
                    color: #d0aa85;
                  }
                }
                &>div:nth-child(5) {
                  &>span:nth-child(1) {
                    font-weight: bold;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  &>#eyeNeoplasms {
    &>div:nth-child(2) {
      margin-top: 50px;
      padding-right: 1px;
    }
    &>div:nth-child(3) {
      &>div:nth-child(1) {
        margin-bottom: 150px;
        &>div:nth-child(2) {
          margin: 80px 0 100px;
          display: flex;
          justify-content: space-between;
          &>div {
            transform: scale(0.85);
            width: 398px;
            height: 417px;
            background-color: #ffffff;
            border-radius: 30px;
            border: solid 2px #e4c6a9;
            &>div:nth-child(1) {
              font-family: 'NotoSansHK-Bold';
              font-size: 32px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 42px;
              letter-spacing: 0px;
              color: #d0aa85;
              text-align: center;
              padding: 30px 0;
            }
            &>div:nth-child(2) {
              padding: 0 42px;
              font-size: 22px;
              line-height: 42px;
            }
          }
        }
      }
      &>div:nth-child(2) {
        &>div:nth-child(1) {
          margin-top: 150px;
          margin-bottom: 80px;
        }
        &>div:nth-child(2) {
          margin-bottom: 120px;
          &>div:nth-child(1) {
            font-family: 'NotoSansHK-Bold';
            font-size: 32px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 42px;
            letter-spacing: 0px;
            color: #d0aa85;
            margin-bottom: 90px;
          }
          &>div:nth-child(2) {
            border-radius: 10px;
            border: solid 2px #e4c6a9;
            padding-left: 37px;
            padding-right: 25px;
            padding-top: 80px;
            padding-bottom: 50px;
            position: relative;
            &>div:nth-child(1) {
              position: absolute;
              left: -2px;
              top: -41px;
              width: 513px;
              height: 82px;
              background-color: #ffffff;
              border-radius: 10px 10px 10px 0px;
              border: solid 2px #e4c6a9;
              font-family: 'NotoSansHK-Medium';
              font-size: 28px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 42px;
              letter-spacing: 0px;
              color: #d0aa85;
              display: flex;
              align-items: center;
              justify-content: center;
              &>span {
                font-size: 48px;
                line-height: 42px;
                letter-spacing: 0px;
                color: #d0aa85;
                margin: 0 29px;
              }
            }
            &>div:nth-child(2) {
              &>p {
                font-size: 22px;
                line-height: 42px;
              }
              &>p:nth-child(1) {
                margin-bottom: 29px;
              }
            }
          }
        }
        &>div:nth-child(3) {
          &>div:nth-child(1) {
            font-family: 'NotoSansHK-Bold';
            font-size: 32px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 42px;
            letter-spacing: 0px;
            color: #d0aa85;
            margin-top: 120px;
            margin-bottom: 90px;
          }
          &>div:nth-child(2) {
            margin-bottom: 120px;
            border-radius: 10px;
            border: solid 2px #e4c6a9;
            padding-left: 37px;
            padding-right: 25px;
            padding-top: 80px;
            padding-bottom: 50px;
            position: relative;
            &>div:nth-child(1) {
              position: absolute;
              left: -2px;
              top: -41px;
              width: 513px;
              height: 82px;
              background-color: #ffffff;
              border-radius: 10px 10px 10px 0px;
              border: solid 2px #e4c6a9;
              font-family: 'NotoSansHK-Medium';
              font-size: 28px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 42px;
              letter-spacing: 0px;
              color: #d0aa85;
              display: flex;
              align-items: center;
              justify-content: center;
              &>span {
                font-size: 48px;
                line-height: 42px;
                letter-spacing: 0px;
                color: #d0aa85;
                margin: 0 29px;
              }
            }
            &>div:nth-child(2) {
              display: flex;
              justify-content: space-between;
              &>div:nth-child(1) {
                width: 815px;
                &>p {
                  font-size: 22px;
                  line-height: 42px;
                }
                &>p:nth-child(2) {
                  margin-top: 29px;
                }
              }
              &>div:nth-child(2) {
                display: flex;
                flex-direction: column;
                &>img:nth-child(2) {
                  margin-top: 26px;
                }
              }
            }
          }
        }
        &>div:nth-child(4) {
          margin-bottom: 120px;
          &>div:nth-child(1) {
            font-family: 'NotoSansHK-Bold';
            font-size: 32px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 42px;
            letter-spacing: 0px;
            color: #d0aa85;
            margin-top: 120px;
            margin-bottom: 90px;
          }
          &>div:nth-child(2) {
            margin-bottom: 120px;
            border-radius: 10px;
            border: solid 2px #e4c6a9;
            padding-left: 37px;
            padding-right: 25px;
            padding-top: 80px;
            padding-bottom: 50px;
            position: relative;
            &>div:nth-child(1) {
              position: absolute;
              left: -2px;
              top: -41px;
              width: 513px;
              height: 82px;
              background-color: #ffffff;
              border-radius: 10px 10px 10px 0px;
              border: solid 2px #e4c6a9;
              font-family: 'NotoSansHK-Medium';
              font-size: 28px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 42px;
              letter-spacing: 0px;
              color: #d0aa85;
              display: flex;
              align-items: center;
              justify-content: center;
              &>span {
                font-size: 48px;
                line-height: 42px;
                letter-spacing: 0px;
                color: #d0aa85;
                margin: 0 29px;
              }
            }
            &>div:nth-child(2) {
              &>p {
                font-size: 22px;
                line-height: 42px;
              }
              &>p:nth-child(2) {
                margin-top: 29px;
              }
            }
          }
          &>div:nth-child(3) {
            margin-bottom: 120px;
            border-radius: 10px;
            border: solid 2px #e4c6a9;
            padding-left: 37px;
            padding-right: 25px;
            padding-top: 80px;
            padding-bottom: 50px;
            position: relative;
            &>div:nth-child(1) {
              position: absolute;
              left: -2px;
              top: -41px;
              width: 513px;
              height: 82px;
              background-color: #ffffff;
              border-radius: 10px 10px 10px 0px;
              border: solid 2px #e4c6a9;
              font-family: 'NotoSansHK-Medium';
              font-size: 28px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 42px;
              letter-spacing: 0px;
              color: #d0aa85;
              display: flex;
              align-items: center;
              justify-content: center;
              &>span {
                font-size: 48px;
                line-height: 42px;
                letter-spacing: 0px;
                color: #d0aa85;
                margin: 0 29px;
              }
            }
            &>div:nth-child(2) {
              display: flex;
              &>div:nth-child(1) {
                width: 815px;
                margin-right: 50px;
                &>p {
                  font-size: 22px;
                  line-height: 42px;
                }
                &>p:nth-child(2) {
                  margin-top: 29px;
                }
              }
              &>div:nth-child(2) {
                display: flex;
                flex-direction: column;
                text-align: center;
                &>div {
                  margin-top: 11px;
                  font-family: 'Noto Sans HK';
                  font-size: 20px;
                  line-height: 42px;
                  letter-spacing: 2px;
                  color: #777777;
                }
                &>img:nth-child(2) {
                  margin-top: 26px;
                }
              }
            }
          }
        }
      }
      &>div:nth-child(3) {
        &>div:nth-child(2) {
          margin: 80px auto 160px;
          &>div {
            margin-bottom: 50px;
            position: relative;
            border-radius: 20px;
            border: solid 2px #e4c6a9;
            overflow: hidden;
            &>div:nth-child(1) {
              background-color: #e4c6a9;
              width: 157px;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: 'NotoSansHK-Bold';
              font-size: 28px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 42px;
              letter-spacing: 0px;
              color: #fff;
            }
            &>div:nth-child(2) {
              margin-left: 192px;
              padding: 40px 37px 44px 0;
              font-size: 22px;
              line-height: 42px;
              letter-spacing: -0.7px;
            }
          }
          &>div:nth-child(1) {
            &>duv:nth-child(2) {
              letter-spacing: -0.2px;
            }
          }
        }
      }
    }
  }
  &>#eyeProsthesis {
    margin-bottom: 160px;
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        margin-top: 50px;
        text-indent: 50px;
      }
      &>div:nth-child(2) {
        margin: 60px auto 120px;
        display: flex;
        justify-content: space-between;
        padding: 0 77px 0 78px;
        &>div {
          text-align: center;
          font-family: 'Noto Sans HK';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 46px;
          letter-spacing: 0px;
          color: #515151;
        }
      }
      &>div:nth-child(3),
      &>div:nth-child(4) {
        margin-bottom: 120px;
        &>div:nth-child(1) {
          margin-bottom: 40px;
        }
        &>div:nth-child(2) {
          font-size: 22px;
          line-height: 42px;
        }
      }
      &>div:nth-child(4) {
        &>div:nth-child(2) {
          &>div:nth-child(2) {
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
            &>div {
              display: flex;
              align-items: center;
              width: 413px;
              height: 273px;
              font-size: 22px;
              line-height: 42px;
              padding-right: 20px;
              border-top: 1px solid #e4c6a9;
              border-bottom: 1px solid #e4c6a9;
              &>div:nth-child(1) {
                margin-left: 10px;
                margin-right: 30px;
                font-family: 'OPPOSans-B';
                font-size: 50px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 42px;
                letter-spacing: 0px;
                color: #d5bb96;
              }
              &>div:nth-child(2) {
                width: 304px;
              }
            }
          }
        }
      }
    }
  }
  &>#usage {
    margin-bottom: 160px;
    &>div:nth-child(2) {
      margin-top: 60px;
      margin-bottom: 125px;
      position: relative;
      &>div:nth-child(1) {
        font-family: 'NotoSansHK-Medium';
        font-size: 32px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 52px;
        letter-spacing: 0px;
        color: #d0aa85;
        margin-bottom: 71px;
      }
      &>div:nth-child(2) {
        background: url('https://static.cmereye.com/imgs/2023/10/2440006e8f50e9c8.png');
        background-repeat: no-repeat;
        background-size: 100%;
        width: 1210px;
        min-height: 466px;
        margin-left: 55px;
        display: flex;
        flex-direction: column;
        &>div {
          display: flex;
          justify-content: space-between;
          margin-top: 46px;
          margin-right: 20px;
          &>div {
            width: 205px;
            height: 173px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Noto Sans HK';
            font-size: 22px;
            line-height: 38px;
            letter-spacing: 0px;
            color: #515151;
            position: relative;
          }
          &>div::before {
            position: absolute;
            content: '';
            font-family: 'OPPOSans-B';
            font-size: 40px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 42px;
            letter-spacing: 0px;
            color: #d5bb96;
            top: -64px;
            left: -56px;
          }
        }
        &>div:nth-child(1) {
          &>div:nth-child(1)::before {
            content: '01';
          }
          &>div:nth-child(2)::before {
            content: '02';
          }
          &>div:nth-child(3)::before {
            content: '03';
          }
          &>div:nth-child(4)::before {
            content: '04';
            left: -72px;
          }
        }
        &>div:nth-child(2) {
          margin-top: 72px;
          &>div:nth-child(1)::before {
            content: '';
          }
          &>div:nth-child(2)::before {
            content: '07';
            top: -48px;
          }
          &>div:nth-child(3)::before {
            content: '06';
            top: -48px;
          }
          &>div:nth-child(4)::before {
            content: '05';
            top: -48px;
            left: -72px;
          }
        }
      }
      .usage_1_Image{
        position: absolute;
        bottom: 10px;
        left: 0;
      }
    }
    &>div:nth-child(3) {
      margin-bottom: 100px;
      position: relative;
      &>div:nth-child(1) {
        font-family: 'NotoSansHK-Medium';
        font-size: 32px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 52px;
        letter-spacing: 0px;
        color: #d0aa85;
        margin-bottom: 71px;
      }
      &>div:nth-child(2) {
        background: url('https://static.cmereye.com/imgs/2023/10/2440006e8f50e9c8.png');
        background-repeat: no-repeat;
        background-size: 100%;
        width: 1210px;
        min-height: 466px;
        margin-left: 55px;
        display: flex;
        flex-direction: column;
        &>div {
          display: flex;
          justify-content: space-between;
          margin-top: 46px;
          margin-right: 20px;
          &>div {
            width: 205px;
            height: 173px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Noto Sans HK';
            font-size: 22px;
            line-height: 38px;
            letter-spacing: 0px;
            color: #515151;
            position: relative;
          }
          &>div::before {
            position: absolute;
            content: '';
            font-family: 'OPPOSans-B';
            font-size: 40px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 42px;
            letter-spacing: 0px;
            color: #d5bb96;
            top: -64px;
            left: -56px;
          }
        }
        &>div:nth-child(1) {
          &>div:nth-child(1)::before {
            content: '01';
          }
          &>div:nth-child(2)::before {
            content: '02';
          }
          &>div:nth-child(3)::before {
            content: '03';
          }
          &>div:nth-child(4)::before {
            content: '04';
            left: -72px;
          }
        }
        &>div:nth-child(2) {
          margin-top: 72px;
          &>div:nth-child(1)::before {
            content: '';
          }
          &>div:nth-child(2)::before {
            content: '07';
            top: -48px;
          }
          &>div:nth-child(3)::before {
            content: '06';
            top: -48px;
          }
          &>div:nth-child(4)::before {
            content: '05';
            top: -48px;
            left: -72px;
          }
        }
      }
      .usage_2_Image{
        position: absolute;
        bottom: 10px;
        left: 0;
      }
    }
    &>div:nth-child(4) {
      margin-bottom: 140px;
      &>div {
        font-family: 'Noto Sans HK';
        font-size: 22px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #515151;
        &>span {
          font-family: 'NotoSansHK-Bold';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 1.8;
          letter-spacing: 0px;
          color: #d0aa85;
        }
      }
    }
    &>div:nth-child(5) {
      &>div:nth-child(1) {
        font-family: 'NotoSansHK-Medium';
        font-size: 32px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 52px;
        letter-spacing: 0px;
        color: #d0aa85;
        margin-bottom: 50px;
      }
      &>div:nth-child(3) {
        margin-top: 80px;
        &>div {
          &:nth-of-type(1) {
            font-size: 24px;
          }
          &>div:nth-child(1) {
            width: fit-content;
            height: 44px;
            background-color: #d0aa85;
            border-radius: 10px;
            padding: 10px 19px;
            color: #fff;
            margin-bottom: 16px;
            margin-top: 16px;
          }
          &>div>p {
            display: flex;
            align-items: flex-start;
            &>span {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 34px;
              min-width: 34px;
              height: 34px;
              color: #d5bb96;
              background-color: #ffffff;
              border: solid 2px #decbaf;
              border-radius: 50%;
              padding-top: 0;
              margin-right: 10px;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
  &.eyeOrthopaedicDiseaseNav-en{
    &>#ophthalmoplasty{
      &>div:nth-child(3){
        &>div:nth-child(3),
        &>div:nth-child(4),
        &>div:nth-child(5),
        &>div:nth-child(6) {
          margin-top: 80px;
        }
      }
      &>div:nth-child(4){
        &>div:nth-child(2){
          margin-top: 50px;
        }
        &>div:nth-child(3){
          &>div:nth-child(2){
            margin-top: 50px;
          }
        }
        &>div:nth-child(4){
          &>div:nth-child(2){
            &>div{
              &>div{
                text-align: center;
              }
              &>div:nth-child(1){
                &>div{
                  line-height: 1.6;
                  font-family: initial;
                }
              }
              &>div:nth-child(2){
                height: auto;
              }
              &>div:nth-child(3){
                height: auto;
              }
            }
          }
        }
        &>div:nth-child(5){
          &>div:nth-child(2){
            &>div:nth-child(2){
              &>div{
                &>div{
                  text-align: center;
                }
                &>div:nth-child(1){
                  &>div{
                    line-height: 1.6;
                  }
                }
                &>div:nth-child(2){
                  height: auto;
                }
                &>div:nth-child(3){
                  height: auto;
                }
              }
            }
          }
        }
      }
    }
    &>#eyeNeoplasms{
      &>div:nth-child(2){
        margin-bottom: 70px;
      }
      &>div:nth-child(3){
        &>div:nth-child(1){
          &>div:nth-child(2){
            &>div{
              height: auto;
              &>div:nth-child(2){
                padding-bottom: 30px;
              }
            }
          }
        }
        &>div:nth-child(2){
          &>div:nth-child(2){
            &>div:nth-child(2){
              &>div:nth-child(1){
                width: max-content;
                padding: 0 30px;
              }
            }
          }
          &>div:nth-child(3){
            &>div:nth-child(2){
              &>div:nth-child(1){
                width: max-content;
                padding: 0 30px;
              }
            }
          }
          &>div:nth-child(4){
            &>div:nth-child(2){
              &>div:nth-child(1){
                width: max-content;
                padding: 0 30px;
              }
            }
            &>div:nth-child(3){
              &>div:nth-child(1){
                width: max-content;
                padding: 0 30px;
              }
            }
          }
        }
        &>div:nth-child(3){
          &>div:nth-child(2){
            &>div{
              &>div:nth-child(1){
                text-align: center;
                width: 200px;
              }
              &>div:nth-child(2){
                margin-left: 230px;
              }
            }
          }
        }
      }
    }
    &>#eyeProsthesis{
      &>div:nth-child(2){
        &>div:nth-child(2){
          display: flex;
          &>div{
            flex: 1;
            max-width: 180px;
            justify-content: center;
            display: flex;
            flex-direction: column;
          }
        }
        &>div:nth-child(4){
          &>div:nth-child(2){
            &>div:nth-child(2){
              &>div{
                height: auto;
              }
            }
          }
        }
      }
    }
    &>#usage {
      &>div:nth-child(2){
        &>div:nth-child(2){
          &>div{
            &>div{
              font-size: 16px;
              line-height: 1.4;
            }
          }
        }
      }
      &>div:nth-child(3){
        &>div:nth-child(2){
          &>div{
            &>div{
              font-size: 16px;
              line-height: 1.4;
            }
          }
        }
      }
    }
  }
}
.eye_attention {
  font-family: 'Noto Sans HK';
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 44px;
  letter-spacing: 0px;
  color: #515151;
}
.ophthalmoplasty_bg_text {
  width: 212px;
  height: 58px;
  background-color: #d0aa85;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'NotoSansHK-Bold';
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 52px;
  letter-spacing: 0px;
  color: #ffffff;
  &.ophthalmoplasty_bg_text_en{
    width: max-content;
    padding: 0 30px;
  }
}
.eyeOrthopaedicDisease_p {
  font-family: 'Noto Sans HK';
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  line-height: 46px;
  color: #bead9c;
  text-indent: 50px;
}
.eyeOrthopaedicDisease_text_p_span {
  font-family: 'Noto Sans HK';
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #515151;
}
.eyeOrthopaedicDisease_title_text {
  font-family: 'NotoSansHK-Bold';
  font-size: 38px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 48px;
  letter-spacing: 0px;
  color: #d5bb96;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.eyeOrthopaedicDisease_title_text_border {
  width: fit-content;
  margin: auto;
  border-top: 1px solid #e6d2bfcc;
  border-bottom: 1px solid #e6d2bfcc;
  padding: 20px;
  font-family: 'NotoSansHK-Bold';
  font-size: 38px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 48px;
  letter-spacing: 0px;
  color: #d5bb96;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.eyeOrthopaedicDisease_title_btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  text-shadow: 0 2px 5px rgba($color: #000000, $alpha: .5);
  &::before {
    content: "";
    position: absolute;
    top: -100%;
    left: -100%;
    bottom: -100%;
    right: -100%;
    background: linear-gradient(45deg, #8ACCE0 0%, #B9D7C7 100%);
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
  margin-top: -90%;
}
@media screen and (min-width: 1920px) {
  .eyeOrthopaedicDisease_nav{
    margin-bottom: 20%;
  }
}
@media screen and (min-width: 768px) {
  .mb-table-box {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .ophthalmoplasty_bg_text {
    width: fit-content;
    padding: 4px 32px;
    height: auto;
    font-size: 20px;
    line-height: 1.6;
    &.ophthalmoplasty_bg_text_en{
      font-size: 18px;
      padding: 0 20px;
    }
  }
  .eyeOrthopaedicDisease_title_btn {
    cursor: pointer;
    width: max-content;
    max-width: 100%;
    height: auto;
    font-size: 20px;
    line-height: 1.6;
    padding: 16px 30px;
    text-align: center;
  }
  .eyeOrthopaedicDisease_title_text {
    font-size: 32px;
  }
  .eyeOrthopaedicDisease-nav{
    margin-top: -100px;
  }
  .fromTable {
    margin-top: 0;
  }
  // 內容
  .eyeOrthopaedicDisease_nav {
    max-width: 100%;
    width: 100%;
    margin: 30px 0 0;
    transform: scale(1);
    padding: 0 30px;
    &>#ophthalmoplasty {
      margin-bottom: 75px;
      .img-size {
        width: 100%;
        position: absolute;
        top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        &>img {
          max-width: 260px;
        }
      }
      &>div:nth-child(2) {
        margin: 25px auto 55px;
      }
      &>div:nth-child(3) {
        margin: 55px auto;
        &>div:nth-child(2),
        &>div:nth-child(4) {
          flex-direction: column-reverse;
          margin-top: 42px;
          position: relative;
          &>div:nth-child(1) {
            width: 100%;
            transform: scale(1);
            &>div {
              margin-bottom: 42px;
              position: relative;
              &>div:nth-child(1) {
                font-size: 16px;
                line-height: 1.6;
                margin-bottom: 25px;
                font-weight: 700;
                font-family: Noto Sans HK;
                &>span {
                  width: 26px;
                  height: 26px;
                  font-size: 14px;
                }
              }
              &>div:nth-child(2) {
                font-size: 16px;
                line-height: 1.8;
                font-weight: 400;
              }
            }
            &>div:nth-child(1) {
              &>div:nth-child(2) {
                &>p:nth-child(1) {
                  margin-bottom: 22px;
                }
              }
            }
          }
        }
        &>div:nth-child(3),
        &>div:nth-child(5) {
          flex-direction: column;
          margin-top: 42px;
          position: relative;
          &>div:nth-child(2) {
            width: 100%;
            transform: scale(1);
            &>div {
              position: relative;
              &>div:nth-child(1) {
                font-size: 16px;
                line-height: 1.6;
                margin-bottom: 25px;
                font-weight: 700;
                font-family: Noto Sans HK;
                &>span {
                  width: 26px;
                  height: 26px;
                  font-size: 14px;
                }
              }
              &>div:nth-child(2) {
                font-size: 16px;
                line-height: 1.8;
              }
            }
            &>div:nth-child(1) {
              margin-bottom: 42px;
              &>div:nth-child(2) {
                &>p:nth-child(1) {
                  margin-bottom: 23px;
                }
              }
            }
          }
        }
        &>div:nth-child(3),
        &>div:nth-child(4),
        &>div:nth-child(5),
        &>div:nth-child(6) {
          margin-top: 42px;
        }
      }
      &>div:nth-child(4) {
        .mb-img {
          position: absolute;
          top: 80px;
        }
        &>div:nth-child(2) {
          .mb_text_p_span {
            margin-top: 262px !important;
          }
          margin-bottom: 50px;
          &>div {
            color: pink;
            position: relative;
            display: flex;
            flex-direction: column-reverse;
            margin-bottom: 0;
            &>div:nth-child(1) {
              width: 100%;
              margin-top: 50px;
              position: relative;
              &>div:nth-child(2) {
                margin-top: 25px;
                margin-right: 0;
                font-size: 16px;
                line-height: 1.8;
              }
            }
            &>div:nth-child(2) {
              width: 100%;
              margin-top: 50px;
              &>img {
                max-width: 260px;
                margin: auto;
              }
            }
          }
        }
        &>div:nth-child(3) {
          .mb_text_p_span {
            margin-top: 262px !important;
          }
          margin-bottom: 50px;
          &>div:nth-child(1) {
            position: relative;
            display: flex;
            flex-direction: column;
            &>div:nth-child(1) {
              width: 100%;
            }
            &>div :nth-child(2) {
              position: relative;
              margin-top: 40px;
              margin-right: 0 !important;
              font-size: 16px !important;
              line-height: 1.8 !important;
            }
            .img-size {
              position: unset;
              display: flex;
            }
          }
          &>div:nth-child(2) {
            margin-top: 50px;
            margin-bottom: 0px;
            &>div:nth-child(1) {
              font-family: Noto Sans HK;
              font-size: 20px;
              font-weight: 700;
              font-weight: normal;
              font-stretch: normal;
              line-height: 52px;
              letter-spacing: 0px;
              color: #d0aa85;
            }
            &>div:nth-child(2) {
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              &>div {
                margin-top: 30px;
                width: 100%;
                height: auto;
                position: relative;
                &>div:nth-child(1) {
                  padding: 8px 20px;
                  left: 20px;
                  top: -18px;
                  width: fit-content;
                  height: auto;
                  font-size: 20px;
                  line-height: 1;
                }
                &>div:nth-child(2) {
                  font-size: 14px;
                  line-height: 1.8;
                  padding: 0 20px;
                  padding-right: 30px;
                  padding-top: 46px;
                  padding-bottom: 30px;
                }
              }
              &>div:nth-child(2) {
                &>div:nth-child(1) {
                  left: 50px;
                }
              }
            }
          }
        }
        &>div:nth-child(4) {
          margin-bottom: 50px;
          .img-size {
            position: unset;
          }
          &>div:nth-child(1) {
            display: flex;
            flex-direction: column;
            margin-bottom: 40px;
            position: relative;
            &>div:nth-child(1) {
              width: 100%;
              &>div:nth-child(2) {
                margin-top: 28px;
                margin-right: 0;
                font-size: 16px;
                line-height: 1.8;
              }
            }
            &>div:nth-child(2) {
              margin-top: 40px;
            }
          }
          .pc-table {
            display: none;
          }
          &>div:nth-child(2) {
            &>div:nth-child(3) {
              &>div {
                height: auto;
                display: flex;
                flex-direction: column;
                background: #fff;
                border: none;
              }
              &>div:nth-child(1) {
                position: relative;
                width: 100%;
                border: 2px solid #e4c6a9;
                border-radius: 15px;
                &>div:nth-child(1) {
                  position: absolute;
                  top: -5%;
                  height: auto;
                  padding: 5px 25px;
                  width: fit-content;
                  left: 20%;
                  background: #fff;
                  border-radius: 15px;
                  border: 2px solid #e4c6a9;
                }
                &>div {
                  padding: 30px 10px;
                  text-align: justify;
                  color: #515151;
                  font-family: Noto Sans HK;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: normal;
                  display: flex;
                  align-items: flex-start;
                  width: 100%;
                  border: none;
                  &>div:nth-child(1) {
                    color: #515151;
                    font-family: Noto Sans HK;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    &>span:nth-child(2) {
                      color: #D0AA85;
                    }
                  }
                  &>div:nth-child(2),
                  &>div:nth-child(3),
                  &>div:nth-child(4) {
                    display: flex;
                    margin-top: 10px;
                    &>div {
                      color: #D0AA85;
                      font-size: 18px;
                      line-height: 1.6;
                      &>span {
                        font-size: 16px;
                        color: #515151;
                        line-height: 1.6;
                      }
                    }
                  }
                }
              }
              &>div:nth-child(2) {
                margin-top: 60px;
                border: none;
                color: #515151;
                font-family: Noto Sans HK;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                position: relative;
                border: 2px solid #e4c6a9;
                border-radius: 10px;
                &>div:nth-child(1) {
                  position: absolute;
                  top: -5%;
                  height: auto;
                  padding: 5px 25px;
                  width: fit-content;
                  left: 20%;
                  background: #fff;
                  border-radius: 15px;
                  border: 2px solid #e4c6a9;
                  text-align: justify;
                  color: #515151;
                  font-family: Noto Sans HK;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: normal;
                  display: flex;
                  align-items: flex-start;
                }
                &>div:nth-child(2) {
                  padding: 30px 10px;
                  text-align: justify;
                  color: #515151;
                  font-family: Noto Sans HK;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: normal;
                  display: flex;
                  align-items: flex-start;
                  width: 100%;
                  border: none;
                  &>div:nth-child(1) {
                    color: #515151;
                    font-family: Noto Sans HK;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    &>span:nth-child(2) {
                      color: #D0AA85;
                    }
                  }
                  &>div:nth-child(2),
                  &>div:nth-child(3),
                  &>div:nth-child(4) {
                    display: flex;
                    margin-top: 10px;
                    &>div {
                      color: #D0AA85;
                      font-size: 18px;
                      line-height: 1.6;
                      &>span {
                        font-size: 16px;
                        line-height: 1.6;
                        color: #515151;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        &>div:nth-child(5) {
          &>div:nth-child(1) {
            margin-bottom: 75px;
            &>div:nth-child(2) {
              margin: 27px 0;
              margin-bottom: 25px;
              &>div {
                font-family: 'Noto Sans HK';
                font-size: 14px;
                font-weight: 400;
                line-height: 1.8;
                letter-spacing: 0px;
                color: #515151;
              }
              &>div:nth-child(2) {
                margin: 36px 0;
                display: flex;
                justify-content: space-between;
                padding: 0 0;
                &>div {
                  margin-right: 20px;
                }
                &>div:last-child {
                  margin: 0;
                }
              }
            }
            &>div:nth-child(3) {
              font-family: 'Noto Sans HK';
              font-size: 16px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 1.6;
              letter-spacing: 0px;
              color: #515151;
              &>p {
                margin-top: 12px;
              }
              &>p>span {
                color: #d0aa85;
              }
            }
          }
          &>div:nth-child(2) {
            &>div:nth-child(1) {
              display: flex;
              flex-direction: column;
              margin-bottom: 40px;
              width: 100%;
              &>div:nth-child(1) {
                width: 100%;
                &>div:nth-child(2) {
                  margin-top: 28px;
                  margin-right: 0;
                  font-size: 16px;
                  line-height: 1.8;
                }
              }
              &>div:nth-child(2) {
                margin-top: 40px;
                &>img {
                  width: 80%;
                  margin: auto;
                }
              }
            }
            &>div:nth-child(2) {
              .pc-table {
                display: none;
              }
              &>div:nth-child(1) {
                font-family: Noto Sans HK;
                font-size: 20px;
                font-weight: 700;
                font-weight: normal;
                font-stretch: normal;
                line-height: 52px;
                letter-spacing: 0px;
                color: #d0aa85;
                margin-bottom: 30px;
              }
              &>div:nth-child(3) {
                &>div:nth-child(n) {
                  height: auto;
                  display: flex;
                  flex-direction: column;
                  background: #fff;
                  border: 2px solid #E4C6A9;
                  margin-top: 70px;
                  border-radius: 10px;
                  position: relative;
                  &:first-child{
                    margin-top: 0;
                  }
                  &>div {
                    color: #515151;
                    width: 100%;
                    border: 2px solid #E4C6A9;
                    border-radius: 10px;
                    font-size: 16px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    &>div:nth-child(2),
                    &>div:nth-child(3),
                    &>div:nth-child(4) {
                      display: flex;
                      margin-top: 5px;
                      &>div {
                        color: #D0AA85;
                        font-family: Noto Sans HK;
                        font-size: 18px;
                        &>span {
                          color: #515151;
                          font-family: Noto Sans HK;
                          font-size: 16px;
                        }
                      }
                    }
                    &>div:nth-child(1) {
                      line-height: 1.6;
                      text-align: justify;
                      &>span:last-child {
                        color: #D0AA85;
                      }
                    }
                    &>div:nth-child(2) {
                      margin-top: 14px;
                    }
                  }
                  &>div:nth-child(1) {
                    position: absolute;
                    width: fit-content;
                    top: -7%;
                    line-height: 1.6;
                    left: 15%;
                    font-size: 20px;
                    padding: 8px 0;
                    font-family: Noto Sans HK;
                    font-weight: 500;
                    background: #fff;
                    width: 70%;
                    align-items: center;
                  }
                  &>div:nth-child(2) {
                    border: 0;
                    padding: 45px 26px 30px 20px;
                    line-height: 1.8;
                  }
                }
              }
            }
          }
        }
      }
    }
    &>#eyeNeoplasms {
      &>div:nth-child(2) {
        margin-top: 25px;
        padding-right: 1px;
      }
      &>div:nth-child(3) {
        &>div:nth-child(1) {
          margin-top: 75px;
          margin-bottom: 75px;
          &>div:nth-child(2) {
            margin: 10px 0 50px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            &>div {
              margin-top: 30px;
              transform: scale(1);
              width: 100%;
              height: auto;
              background-color: #ffffff;
              border-radius: 30px;
              border: solid 2px #e4c6a9;
              padding-bottom: 30px;
              &>div:nth-child(1) {
                font-family: 'NotoSansHK-Bold';
                font-size: 24px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 1.8;
                letter-spacing: 0px;
                color: #d0aa85;
                text-align: center;
                padding-top: 28px;
                padding-bottom: 20px;
              }
              &>div:nth-child(2) {
                padding: 0 20px;
                font-size: 14px;
                line-height: 1.6;
              }
            }
          }
        }
        &>div:nth-child(2) {
          &>div:nth-child(1) {
            margin-top: 80px;
            margin-bottom: 50px;
          }
          &>div:nth-child(2) {
            margin-bottom: 0;
            &>div:nth-child(1) {
              font-size: 20px;
              line-height: 1.8;
              margin-bottom: 40px;
            }
            &>div:nth-child(2) {
              border-radius: 10px;
              border: solid 2px #e4c6a9;
              padding: 50px 20px 20px 20px;
              position: relative;
              &>div:nth-child(1) {
                position: absolute;
                left: -2px;
                top: -7%;
                width: fit-content;
                padding: 0 10px;
                height: auto;
                background-color: #ffffff;
                border-radius: 10px 10px 10px 0px;
                border: solid 2px #e4c6a9;
                font-family: 'NotoSansHK-Medium';
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 42px;
                letter-spacing: 0px;
                color: #d0aa85;
                display: flex;
                align-items: center;
                justify-content: center;
                &>span {
                  font-size: 18px;
                  line-height: 1.8;
                  letter-spacing: 0px;
                  color: #d0aa85;
                  margin: 0 10px;
                  margin-top: 7px;
                }
              }
              &>div:nth-child(2) {
                &>p {
                  font-size: 14px;
                  line-height: 1.8;
                }
                &>p:nth-child(1) {
                  margin-bottom: 15px;
                }
              }
            }
          }
          &>div:nth-child(3) {
            &>div:nth-child(1) {
              font-family: 'NotoSansHK-Bold';
              font-size: 20px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 1.8;
              letter-spacing: 0px;
              color: #d0aa85;
              margin-top: 50px;
              margin-bottom: 40px;
            }
            &>div:nth-child(2) {
              margin-bottom: 75px;
              border-radius: 10px;
              border: solid 2px #e4c6a9;
              padding: 40px 26px 30px 20px;
              position: relative;
              &>div:nth-child(1) {
                position: absolute;
                left: -2px;
                top: -4%;
                width: fit-content;
                height: auto;
                background-color: #ffffff;
                border-radius: 10px 10px 10px 0px;
                border: solid 2px #e4c6a9;
                font-family: 'NotoSansHK-Medium';
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 42px;
                letter-spacing: 0px;
                color: #d0aa85;
                padding: 0 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                &>span {
                  font-size: 18px;
                  line-height: 1.8;
                  letter-spacing: 0px;
                  color: #d0aa85;
                  margin: 0 10px;
                  margin-top: 7px;
                }
              }
              &>div:nth-child(2) {
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                &>div:nth-child(1) {
                  width: 100%;
                  &>p {
                    font-size: 14px;
                    line-height: 1.6;
                    text-align: justify;
                  }
                  &>p:nth-child(2) {
                    margin-top: 12px;
                  }
                }
                &>div:nth-child(2) {
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  &>img {
                    width: 48%;
                    margin-top: 26px;
                  }
                }
              }
            }
          }
          &>div:nth-child(4) {
            margin-bottom: 75px;
            &>div:nth-child(1) {
              font-family: 'NotoSansHK-Bold';
              font-size: 20px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 1.8;
              letter-spacing: 0px;
              color: #d0aa85;
              margin-top: 70px;
              margin-bottom: 40px;
            }
            &>div:nth-child(2) {
              margin-bottom: 80px;
              border-radius: 10px;
              border: solid 2px #e4c6a9;
              padding: 40px 26px 30px 20px;
              position: relative;
              text-align: justify;
              &>div:nth-child(1) {
                position: absolute;
                left: -2px;
                top: -6%;
                width: fit-content;
                height: auto;
                background-color: #ffffff;
                border-radius: 10px 10px 10px 0px;
                border: solid 2px #e4c6a9;
                font-family: 'NotoSansHK-Medium';
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 1.8;
                letter-spacing: 0px;
                color: #d0aa85;
                padding: 0 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                &>span {
                  font-size: 18px;
                  line-height: 1.8;
                  letter-spacing: 0px;
                  color: #d0aa85;
                  margin: 0 10px;
                  margin-top: 7px;
                }
              }
              &>div:nth-child(2) {
                &>p {
                  font-size: 14px;
                  line-height: 1.6;
                }
                &>p:nth-child(2) {
                  margin-top: 29px;
                }
              }
            }
            &>div:nth-child(3) {
              margin-bottom: 80px;
              border-radius: 10px;
              border: solid 2px #e4c6a9;
              padding: 40px 28px 35px 20px;
              position: relative;
              &>div:nth-child(1) {
                position: absolute;
                left: -2px;
                top: -3.2%;
                width: fit-content;
                height: auto;
                background-color: #ffffff;
                border-radius: 10px 10px 10px 0px;
                border: solid 2px #e4c6a9;
                padding: 0 10px;
                font-family: 'NotoSansHK-Medium';
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 1.8;
                letter-spacing: 0px;
                color: #d0aa85;
                display: flex;
                align-items: center;
                justify-content: center;
                &>span {
                  font-size: 18px;
                  line-height: 1.8;
                  letter-spacing: 0px;
                  color: #d0aa85;
                  margin: 0 10px;
                  margin-top: 7px;
                }
              }
              &>div:nth-child(2) {
                display: flex;
                flex-direction: column;
                &>div:nth-child(1) {
                  width: 100%;
                  margin-right: 50px;
                  &>p {
                    font-size: 14px;
                    line-height: 1.6;
                  }
                  &>p:nth-child(2) {
                    margin-top: 29px;
                  }
                }
                &>div:nth-child(2) {
                  display: flex;
                  flex-direction: column;
                  text-align: center;
                  width: 50%;
                  margin: auto;
                  max-width: 50%;
                  margin-top: 26px;
                  &>div {
                    margin-top: 11px;
                    font-family: 'Noto Sans HK';
                    font-size: 14px;
                    line-height: 1.6;
                    letter-spacing: 2px;
                    color: #777777;
                  }
                }
              }
            }
          }
        }
        &>div:nth-child(3) {
          &>div:nth-child(2) {
            margin: 30px auto 70px;
            &>div {
              margin-bottom: 50px;
              position: relative;
              border-radius: 0;
              border: none;
              overflow: hidden;
              &>div:nth-child(1) {
                padding: 8.3px 52.5px 9.2px 52.5px;
                border-radius: 55px;
                background-color: #e4c6a9;
                width: fit-content;
                height: auto;
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'NotoSansHK-Bold';
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 1.6;
                letter-spacing: 0px;
                color: #fff;
              }
              &>div:nth-child(2) {
                margin-left: 0;
                padding: 70px 0 0 0;
                font-size: 14px;
                line-height: 1.8;
                text-align: justify;
              }
            }
            &>div:nth-child(1) {
              &>duv:nth-child(2) {
                letter-spacing: -0.2px;
              }
            }
          }
        }
      }
    }
    &>#eyeProsthesis {
      margin-bottom: 80px;
      &>div:nth-child(2) {
        &>div:nth-child(1) {
          margin-top: 30px;
          text-indent: 0;
        }
        &>div:nth-child(2) {
          margin: 20px auto 50px;
          display: flex;
          justify-content: space-between;
          padding: 0;
          &>div {
            text-align: center;
            font-family: 'Noto Sans HK';
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.8;
            letter-spacing: 0px;
            color: #515151;
            &>img {
              width: 100px;
              height: 100px;
            }
          }
        }
        &>div:nth-child(3),
        &>div:nth-child(4) {
          margin-bottom: 50px;
          &>div:nth-child(1) {
            margin-bottom: 28px;
          }
          &>div:nth-child(2) {
            font-size: 14px;
            line-height: 1.8;
          }
        }
        &>div:nth-child(4) {
          &>div:nth-child(2) {
            &>div:nth-child(2) {
              margin-top: 35px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              &>div {
                display: flex;
                align-items: center;
                width: 100%;
                height: auto;
                font-size: 12px;
                line-height: 1.8;
                padding-right: 20px;
                padding-top: 25px;
                padding-bottom: 25px;
                border-top: 1px solid #e4c6a9;
                border-bottom: 1px solid #e4c6a9;
                margin-top: 30px;
                &>div:nth-child(1) {
                  margin-left: 10px;
                  margin-right: 20px;
                  font-family: 'OPPOSans-B';
                  font-size: 35px;
                  font-weight: normal;
                  font-stretch: normal;
                  line-height: 1.8;
                  letter-spacing: 0px;
                  color: #d5bb96;
                }
                &>div:nth-child(2) {
                  width: auto;
                }
              }
              &>div:first-child {
                margin: 0;
              }
            }
          }
        }
      }
    }
    &>#usage {
      margin-bottom: 50px;
      &>div:nth-child(2) {
        width: 100%;
        margin-top: 20px;
        margin-bottom: 70px;
        &>div:nth-child(1) {
          font-family: Noto Sans HK;
          font-size: 20px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #d0aa85;
          margin-bottom: 0;
          font-weight: 500;
        }
        &>div:nth-child(2) {
          background: #fff;
          width: 100%;
          display: flex;
          min-height: auto;
          margin-left: 30px;
          flex-direction: column;
          position: relative;
          &>div {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            margin-top: 0;
            margin-right: 31px;
            text-align: justify;
            &>div {
              width: 100%;
              height: auto;
              display: block;
              font-family: 'Noto Sans HK';
              font-size: 14px;
              line-height: 1.6;
              letter-spacing: 0px;
              color: #515151;
              position: relative;
              margin-bottom: 40px;
            }
            &>div::before {
              position: absolute;
              content: '';
              font-family: 'OPPOSans-B';
              font-size: 20px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 1.2;
              letter-spacing: 0px;
              color: #d5bb96;
              top: 0;
              left: -30px;
            }
            &>div::after {
              content: '';
              background: url('https://static.cmereye.com/imgs/2023/07/f416659264a70115.png') no-repeat;
              width: 10px;
              display: inline-block;
              height: 19px;
              position: absolute;
              left: -22px;
              top: 32px;
            }
          }
          &>div:nth-child(1) {
            &>div {
              margin-top: 5px;
            }
            &>div:nth-child(1)::after {
              background: url('https://static.cmereye.com/imgs/2023/07/e5d62f0f593df732.png') no-repeat;
              height: 40px;
            }
            &>div:nth-child(1)::before {
              content: '01';
            }
            &>div:nth-child(2)::after {
              background: url('https://static.cmereye.com/imgs/2023/07/9f42072f1f97a393.png') no-repeat;
              height: 55px;
            }
            &>div:nth-child(2)::before {
              content: '02';
            }
            &>div:nth-child(3)::after {
              background: url('https://static.cmereye.com/imgs/2023/07/9f42072f1f97a393.png') no-repeat;
              height: 55px;
            }
            &>div:nth-child(3)::before {
              content: '03';
            }
            &>div:nth-child(4)::after {
              background: url('https://static.cmereye.com/imgs/2023/07/9f42072f1f97a393.png') no-repeat;
              height: 55px;
            }
            &>div:nth-child(4)::before {
              content: '04';
              left: -30px;
            }
          }
          &>div:nth-child(2) {
            flex-direction: column-reverse;
            margin-top: 0;
            &>div:nth-child(1) {
              margin: 0;
              padding: 0;
            }
            &>div:nth-child(1)::before {
              content: none;
            }
            &>div:nth-child(1)::after {
              content: none;
            }
            &>div:nth-child(2)::after {
              content: none;
            }
            &>div:nth-child(2) {
              margin: 0;
            }
            &>div:nth-child(2)::before {
              content: '07';
              top: 0;
            }
            &>div:nth-child(3)::after {
              background: url('https://static.cmereye.com/imgs/2023/07/9f42072f1f97a393.png') no-repeat;
              height: 55px;
            }
            &>div:nth-child(3)::before {
              content: '06';
              top: 0;
            }
            &>div:nth-child(4)::before {
              content: '05';
              top: 0;
              left: -30px;
            }
          }
        }
        .usage_1_Image{
          position: relative;
          bottom: 0;
          margin:  30px 46px 0 -15px !important;
        }
      }
      &>div:nth-child(3) {
        margin-bottom: 30px;
        &>div:nth-child(1) {
          font-family: Noto Sans HK;
          font-size: 20px;
          font-weight: 500;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #d0aa85;
          margin-bottom: 10px;
        }
        &>div:nth-child(2) {
          background: #fff;
          width: 100%;
          min-height: auto;
          margin-left: 30px;
          display: flex;
          flex-direction: column;
          &>div {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            margin-top: 0;
            margin-right: 31px;
            &>div {
              width: 100%;
              height: auto;
              display: block;
              font-family: "Noto Sans HK";
              font-size: 14px;
              line-height: 1.6;
              letter-spacing: 0px;
              color: #515151;
              position: relative;
              margin-bottom: 40px;
            }
            &>div::before {
              position: absolute;
              content: '';
              font-family: 'OPPOSans-B';
              font-size: 20px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 1.2;
              letter-spacing: 0px;
              color: #d5bb96;
              top: 0;
              left: -30px;
            }
            &>div::after {
              content: '';
              background: url('https://static.cmereye.com/imgs/2023/07/f416659264a70115.png') no-repeat;
              width: 10px;
              display: inline-block;
              height: 19px;
              position: absolute;
              left: -22px;
              top: 32px;
            }
          }
          &>div:nth-child(1) {
            &>div:nth-child(1)::before {
              content: '01';
            }
            &>div:nth-child(2)::before {
              content: '02';
            }
            &>div:nth-child(3)::after {
              background: url('https://static.cmereye.com/imgs/2023/07/9f42072f1f97a393.png') no-repeat;
              height: 55px;
            }
            &>div:nth-child(3)::before {
              content: '03';
            }
            &>div:nth-child(4)::after {
              background: url('https://static.cmereye.com/imgs/2023/07/9f42072f1f97a393.png') no-repeat;
              height: 55px;
            }
            &>div:nth-child(4)::before {
              content: '04';
              left: -30px;
            }
          }
          &>div:nth-child(2) {
            margin-top: 0;
            flex-direction: column-reverse;
            &>div:nth-child(1) {
              margin: 0;
            }
            &>div:nth-child(1)::after {
              content: none;
            }
            &>div:nth-child(1)::before {
              content: none;
            }
            &>div:nth-child(2) {
              margin: 0;
            }
            &>div:nth-child(2)::after {
              content: none;
            }
            &>div:nth-child(2)::before {
              content: '07';
              top: 0;
            }
            &>div:nth-child(3)::after {
              background: url('https://static.cmereye.com/imgs/2023/07/9f42072f1f97a393.png') no-repeat;
              height: 55px;
            }
            &>div:nth-child(3)::before {
              content: '06';
              top: 0;
            }
            &>div:nth-child(4)::after {
              background: url('https://static.cmereye.com/imgs/2023/07/9f42072f1f97a393.png') no-repeat;
              height: 55px;
            }
            &>div:nth-child(4)::before {
              content: '05';
              top: 0;
              left: -30px;
            }
          }
        }
        .usage_2_Image{
          position: relative;
          bottom: 0;
          margin:  30px 46px 0 -15px !important;
        }
      }
      &>div:nth-child(4) {
        margin-bottom: 75px;
        &>div {
          font-family: 'Noto Sans HK';
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0px;
          color: #515151;
          &>span {
            font-family: 'NotoSansHK-Bold';
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.6;
            letter-spacing: 0px;
            color: #d0aa85;
          }
          &>.usage-box-text {
            font-weight: 400;
            color: #515151;
          }
        }
        &>div:nth-child(2) {
          margin-top: 15px;
        }
      }
      &>div:nth-child(5) {
        &>div:nth-child(1) {
          font-family: 'NotoSansHK-Medium';
          font-size: 20px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 1.8;
          letter-spacing: 0px;
          color: #d0aa85;
          margin-bottom: 20px;
        }
        .eye_attention {
          font-size: 16px;
          line-height: 1.6;
        }
        &>div:nth-child(3) {
          margin-top: 40px;
          &>div {
            display: flex;
            margin-bottom: 14px;
            &>div:nth-child(1) {
              min-width: 120px;
              width: fit-content;
              height: fit-content;
              background-color: #d0aa85;
              border-radius: 10px;
              padding: 10px 19px;
              color: #fff;
              margin-bottom: 0;
              margin-top: 0;
              margin-right: 10px;
            }
            &>div>p {
              display: flex;
              align-items: flex-start;
              &>span {
                display: flex;
                justify-content: center;
                align-items: center;
                min-width: 25px;
                width: 25px;
                height: 25px;
                color: #d5bb96;
                background-color: #ffffff;
                border: solid 2px #decbaf;
                border-radius: 50%;
                padding-top: 8px;
                margin-right: 10px;
                margin-top: 5px;
              }
            }
          }
          &>div:nth-child(4) {
            flex-direction: column;
            &>div:nth-child(2) {
              margin-top: 15px;
              &>p {
                align-items: flex-start;
                margin-bottom: 15px;
              }
              &>p>span {
                padding: 0;
                margin-right: 5px;
                margin-top: 0px;
                font-size: 14px;
              }
            }
          }
          &>div:nth-child(5) {
            flex-direction: column;
            &>div:nth-child(2) {
              margin-top: 15px;
              &>p {
                align-items: flex-start;
                margin-bottom: 15px;
              }
              &>p>span {
                padding: 0;
                margin-right: 5px;
                margin-top: 0px;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
    &.eyeOrthopaedicDiseaseNav-en{
      &>#ophthalmoplasty{
        &>div:nth-child(3){
          &>div:nth-child(3),
          &>div:nth-child(4),
          &>div:nth-child(5),
          &>div:nth-child(6) {
            margin-top: 42px;
          }
        }
        &>div:nth-child(4){
          &>div:nth-child(2){
            margin-top: 0px;
          }
          &>div:nth-child(3){
            &>div:nth-child(2){
              &>div:nth-child(2){
                &>div{
                  &>div:nth-child(1){
                    left: 50px;
                  }
                }
              }
            }
          }
        }
      }
      &>#eyeNeoplasms{
        &>div:nth-child(3){
          &>div:nth-child(1){
            &>div:nth-child(2){
              &>div{
                &>div:nth-child(2){
                  padding-bottom: 0;
                }
              }
            }
          }
          &>div:nth-child(2){
            &>div:nth-child(2){
              &>div:nth-child(2){
                padding: 60px 20px 20px 20px;
                &>div:nth-child(1){
                  max-width: 100%;
                  line-height: 1.6;
                }
              }
            }
            &>div:nth-child(3){
              &>div:nth-child(2){
                padding: 60px 20px 20px 20px;
                &>div:nth-child(1){
                  max-width: 100%;
                  line-height: 1.6;
                }
              }
            }
            &>div:nth-child(4){
              &>div:nth-child(2){
                &>div:nth-child(1){
                  padding: 0 10px;
                  top: -25px;
                }
              }
              &>div:nth-child(3){
                &>div:nth-child(1){
                  padding: 0 10px;
                  top: -25px;
                }
                &>div:nth-child(2){
                  &>div:nth-child(1){
                    margin-right: 0;
                  }
                }
              }
            }
          }
          &>div:nth-child(3){
            &>div:nth-child(2){
              &>div{
                &>div:nth-child(1){
                  width: auto;
                }
                &>div:nth-child(2){
                  margin-left: 0;
                }
              }
            }
          }
        }
      }
      &>#eyeProsthesis{
        &>div:nth-child(2){
          &>div:nth-child(2){
            &>div{
              img{
                width: 100%;
                height: auto;
              }
            }
          }
        }
      }
    }
  }
  .eyeOrthopaedicDisease_p {
    font-size: 16px;
    text-indent: 0;
    line-height: 1.8;
  }
  .eyeOrthopaedicDisease_title_text_border {
    padding: 5px 0;
    font-size: 24px;
    line-height: 1.8;
  }
  .eyeOrthopaedicDisease_text_p_span {
    font-size: 16px;
    line-height: 1.8;
  }
  .mb_text_p_span {
    margin-top: 262px;
  }
  .rightSidesNavigation {
    display: none;
  }
}
</style>

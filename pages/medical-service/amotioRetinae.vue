<script lang="ts" setup>
import { getPdf } from '@/assets/js/common'
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: t('pages.medical_service.amotioRetinae_head'),
  meta() {
    return [
      {
        hid: 'amotioRetinaeDesc',
        name: 'description',
        content: t('tdk.amotioRetinae.desc'),
      },
      {
        hid: 'amotioRetinaeKey',
        name: 'keywords',
        content: t('tdk.amotioRetinae.key'),
      },
    ]
  },
}))

const locale = useState<string>('locale.setting')
// 传递背景色
const backgd = [
  '#f7d6cf;',
  '-webkit-linear-gradient(to right, #eeb8ae, #f7d6cf);',
  'linear-gradient(to right, #eeb8ae, #f7d6cf);',
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
    anchorName: 'pages.medical_service.amotioRetinae_con.navLists.name1',
    anchorLink: '/medical-service/amotioRetinae#intro',
  },
  {
    anchorName: 'pages.medical_service.amotioRetinae_con.navLists.name2',
    anchorLink: '/medical-service/amotioRetinae#factor',
  },
  {
    anchorName: 'pages.medical_service.amotioRetinae_con.navLists.name3',
    anchorLink: '/medical-service/amotioRetinae#styptom',
  },
  {
    anchorName: 'pages.medical_service.amotioRetinae_con.navLists.name4',
    anchorLink: '/medical-service/amotioRetinae#treat',
  },
  {
    anchorName: 'pages.medical_service.amotioRetinae_con.navLists.name5',
    anchorLink: '/medical-service/amotioRetinae#diabetes',
  },
  {
    anchorName: 'pages.medical_service.amotioRetinae_con.navLists.name6',
    anchorLink: '/medical-service/amotioRetinae#prevent',
  },
  {
    anchorName: 'pages.medical_service.amotioRetinae_con.navLists.name7',
    anchorLink: '/medical-service/amotioRetinae#faq',
  },
]
// 常見問題
const meetArr = [
  {
    title: 'pages.medical_service.amotioRetinae_con.faq.q1',
    agree: 'pages.medical_service.amotioRetinae_con.faq.a1',
  },
  {
    title: 'pages.medical_service.amotioRetinae_con.faq.q2',
    agree: 'pages.medical_service.amotioRetinae_con.faq.a2',
  },
  {
    title: 'pages.medical_service.amotioRetinae_con.faq.q3',
    agree: 'pages.medical_service.amotioRetinae_con.faq.a3',
  },
  {
    title: 'pages.medical_service.amotioRetinae_con.faq.q4',
    agree: 'pages.medical_service.amotioRetinae_con.faq.a4',
  },
]
const factorList1 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/fc6ff4f8cb23dfcf.png',
    text: [
      'pages.medical_service.amotioRetinae_con.factor.text1_1',
      'pages.medical_service.amotioRetinae_con.factor.text1_2',
    ],
    title: '視網膜脫落原因_深近視',
    alt: '深近視為視網膜脫落原因',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/1c56f997c3d97b23.png',
    text: [
      'pages.medical_service.amotioRetinae_con.factor.text2_1',
      'pages.medical_service.amotioRetinae_con.factor.text2_2',
    ],
    title: '視網膜脫落原因_家族遺傳',
    alt: '家族遺傳為視網膜脫落原因',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/04455c1207c08c9c.png',
    text: ['pages.medical_service.amotioRetinae_con.factor.text3'],
    title: '視網膜脫落原因_眼睛外傷',
    alt: '眼睛外傷為視網膜脫落原因',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/88711def3ed108f7.png',
    text: ['pages.medical_service.amotioRetinae_con.factor.text4'],
    title: '視網膜脫落原因_眼手術',
    alt: '眼手術史為視網膜脫落原因',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/ec5a01a0dbf9f84a.png',
    text: ['pages.medical_service.amotioRetinae_con.factor.text5'],
    title: '視網膜脫落原因_眼腫瘤',
    alt: '年長者患眼腫瘤為視網膜脫落原因',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/01900705430260c3.png',
    text: ['pages.medical_service.amotioRetinae_con.factor.text6'],
    title: '視網膜脫落原因_眼睛發炎',
    alt: '眼睛發炎為視網膜脫落原因',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/dab35b2868797ff6.png',
    text: [
      'pages.medical_service.amotioRetinae_con.factor.text7_1',
      'pages.medical_service.amotioRetinae_con.factor.text7_2',
    ],
    title: '視網膜脫落原因_糖尿上眼',
    alt: '年長者糖尿上眼為視網膜脫落原因',
  },
]
const styptomList1 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/08/eeb150720a808928.jpg',
    title: 'STEP 1',
    text: [
      'pages.medical_service.amotioRetinae_con.styptom.text1_1',
      'pages.medical_service.amotioRetinae_con.styptom.text1_2',
    ],
    img_title: '視網膜脫落初期',
    img_alt: '視野出現飛蚊為視網膜脫落初期症狀',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/08/23aab65d449ee915.jpg',
    title: 'STEP 2',
    text: [
      'pages.medical_service.amotioRetinae_con.styptom.text2_1',
      'pages.medical_service.amotioRetinae_con.styptom.text2_2',
    ],
    img_title: '視網膜脫落症狀_閃光',
    img_alt: '視野出現閃光或黑影為視網膜脫落症狀',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/10/bf20112897ad33ed.jpg',
    title: 'STEP 3',
    text: ['pages.medical_service.amotioRetinae_con.styptom.text3'],
    img_title: '視網膜脫落症狀_視野收窄',
    img_alt: '視野收窄為視網膜脫落症狀',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/08/e2b2ce4db8b5118d.jpg',
    title: 'STEP 4',
    text: [
      'pages.medical_service.amotioRetinae_con.styptom.text4_1',
      'pages.medical_service.amotioRetinae_con.styptom.text4_2',
    ],
    img_title: '視網膜脫落症狀_視野缺損',
    img_alt: '視野缺損為視網膜脫落症狀',
  },
]
const treatList1 = [
  {
    id: 0o1,
    img: 'https://static.cmereye.com/imgs/2023/06/d596509569404157.png',
    enImg: 'https://static.cmereye.com/imgs/2023/06/d596509569404157.png',
    title: 'pages.medical_service.amotioRetinae_con.treat.title1',
    text: 'pages.medical_service.amotioRetinae_con.treat.text1',
    img_title: '視網膜脫落手術_氣體網膜固定術',
    img_alt: '視網膜脫落手術_氣體網膜固定術手術過程',
  },
  {
    id: 0o2,
    img: 'https://static.cmereye.com/imgs/2023/06/8a3b0247791f8510.png',
    enImg: 'https://static.cmereye.com/imgs/2023/06/8a3b0247791f8510.png',
    title: 'pages.medical_service.amotioRetinae_con.treat.title2',
    text: 'pages.medical_service.amotioRetinae_con.treat.text2',
    img_title: '視網膜脫落手術_鞏膜扣壓術',
    img_alt: '視網膜脫落手術_鞏膜扣壓術前後對比',
  },
  {
    id: 0o3,
    img: 'https://static.cmereye.com/imgs/2023/08/f5055f0dc5249495.png',
    enImg: 'https://hkcmereye.com/template/default/picture/swmtl_img/t3_en.jpg',
    title: 'pages.medical_service.amotioRetinae_con.treat.title3',
    text: 'pages.medical_service.amotioRetinae_con.treat.text3',
    img_title: '視網膜脫落手術_玻璃體切除術',
    img_alt: '視網膜脫落手術_玻璃體切除術操作過程',
  },
]
const preventList1 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/13de992a2503809a.png',
    title: 'pages.medical_service.amotioRetinae_con.prevent.title1',
    text: 'pages.medical_service.amotioRetinae_con.prevent.text1',
    img_title: '視網膜脫落預防_眼睛檢查',
    img_alt: '定期接受眼睛檢查為視網膜脫落預防方法',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/273a3786c416e9c5.png',
    title: 'pages.medical_service.amotioRetinae_con.prevent.title2',
    text: 'pages.medical_service.amotioRetinae_con.prevent.text2',
    img_title: '視網膜脫落預防_劇烈運動',
    img_alt: '避免劇烈運動為視網膜脫落預防方法',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/2af412dd5ff25eb6.png',
    title: 'pages.medical_service.amotioRetinae_con.prevent.title3',
    text: 'pages.medical_service.amotioRetinae_con.prevent.text3',
    img_title: '視網膜脫落預防_全面眼睛檢查',
    img_alt: '接受全面眼睛檢查為視網膜脫落預防方法',
  },
]

const bannerData = {
  pcSrc:
    'https://static.cmereye.com/static/hkcmereye/bannerzip/视网膜脱落1.png',
  mbSrc:
    'https://static.cmereye.com/static/hkcmereye/bannerzip/视网膜脱落2.png',
  cnName: '視網膜脫落',
  enName: 'RETINAL DETACHMENT',
  textColor: '#EAB1A6',
  pageName: 'amotioRetinae',
}
</script>

<template>
  <div class="amotioRetinae">
    <PageServiceBanner :bannerData="bannerData" />
    <serviceNav :arrData="serviceNavigation" :pageName="'amotioRetinae'" />
    <div
      class="amotioRetinae_nav"
      :class="{ 'amotioRetinaeNav-en': locale === 'en' }"
    >
      <div id="intro">
        <div class="amotioRetinae_title_text">
          {{ $t('pages.medical_service.amotioRetinae_con.intro.name') }}
        </div>
        <div>
          <p>
            {{ $t('pages.medical_service.amotioRetinae_con.intro.p1') }}
          </p>
          <p>
            {{ $t('pages.medical_service.amotioRetinae_con.intro.p2')
            }}<span>{{
              $t('pages.medical_service.amotioRetinae_con.intro.p3')
            }}</span
            >{{ $t('pages.medical_service.amotioRetinae_con.intro.p4') }}
          </p>
        </div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/06/51ccf70864582211.png"
            title="視網膜脫落"
            alt="視網膜脫落眼睛結構"
          />
        </div>
        <!-- <div class="amotioRetinae_title_btn" @click="callTel">
          <span>{{$t('pages.medical_service.amotioRetinae_con.btn.name1_1')}}</span><span>{{$t('pages.medical_service.amotioRetinae_con.btn.name1_2')}}</span>
        </div> -->
        <div class="serviceBtnStyle">
          <service-button-icon
            :str="
              $t('pages.medical_service.amotioRetinae_con.btn.name1_1') +
              '\n' +
              $t('pages.medical_service.amotioRetinae_con.btn.name1_2')
            "
            :link="'tel: +852 3956 2025'"
            :type="'3'"
            :pageName="'amotioRetinae'"
          />
        </div>
      </div>
      <div id="factor">
        <div
          class="amotioRetinae_title_text_bg amotioRetinae_title_text"
          :class="{ 'amotioRetinae_title_text_bg-en': locale === 'en' }"
        >
          {{ $t('pages.medical_service.amotioRetinae_con.factor.name') }}
        </div>
        <div>
          <div v-for="(item, index) in factorList1" :key="index">
            <div>
              <img :src="item.img" :alt="item.alt" :title="item.title" />
            </div>
            <div>
              <p v-for="(ele, eleIndex) in item.text" :key="eleIndex">
                {{ $t(ele) }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="styptom">
        <div
          class="amotioRetinae_title_text_bg amotioRetinae_title_text"
          :class="{ 'amotioRetinae_title_text_bg-en': locale === 'en' }"
        >
          {{ $t('pages.medical_service.amotioRetinae_con.styptom.name') }}
        </div>
        <div class="amotioRetinae_text_p_span">
          {{ $t('pages.medical_service.amotioRetinae_con.styptom.context') }}
        </div>
        <div>
          <div v-for="(item, index) in styptomList1" :key="index">
            <div>{{ item.title }}</div>
            <div>
              <p v-for="(ele, eleIndex) in item.text" :key="eleIndex">
                {{ $t(ele) }}
              </p>
            </div>
            <div>
              <img
                :src="item.img"
                :alt="item.img_alt"
                :title="item.img_title"
              />
            </div>
          </div>
        </div>
        <div class="amotioRetinae_text_p_span">
          {{ $t('pages.medical_service.amotioRetinae_con.styptom.span1')
          }}<span>{{
            $t('pages.medical_service.amotioRetinae_con.styptom.span2')
          }}</span>
          {{ $t('pages.medical_service.amotioRetinae_con.styptom.span3')
          }}<span>{{
            $t('pages.medical_service.amotioRetinae_con.styptom.span4')
          }}</span>
        </div>
      </div>
      <div id="treat">
        <div
          class="amotioRetinae_title_text_bg amotioRetinae_title_text"
          :class="{ 'amotioRetinae_title_text_bg-en': locale === 'en' }"
        >
          {{ $t('pages.medical_service.amotioRetinae_con.treat.name') }}
        </div>
        <div>
          <div v-for="(item, index) in treatList1" :key="index">
            <div class="amotioRetinae_img">
              <img
                :src="locale === 'en' ? item.enImg : item.img"
                :alt="item.img_alt"
                :title="item.img_title"
              />
            </div>
            <div>
              <div>
                <p>
                  <span>{{ item.id }}</span
                  ><span>{{ $t(item.title) }}</span>
                </p>
              </div>
              <div class="amotioRetinae_text_p_span amotioRetinae_text_top">
                {{ $t(item.text) }}
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="amotioRetinae_title_btn" @click="goWhatsApp">
          <p>{{$t('pages.medical_service.amotioRetinae_con.btn.name2_1')}}</p>
          <p>{{$t('pages.medical_service.amotioRetinae_con.btn.name2_2')}}</p>
        </div> -->
        <div class="serviceBtnStyle">
          <service-button-icon
            :str="
              $t('pages.medical_service.amotioRetinae_con.btn.name2_1') +
              '\n' +
              $t('pages.medical_service.amotioRetinae_con.btn.name2_2')
            "
            :link="'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'"
            :type="'4'"
            :pageName="'amotioRetinae amotioRetinae2'"
          />
        </div>
      </div>
      <div id="diabetes">
        <div
          class="amotioRetinae_title_text_bg amotioRetinae_title_text"
          :class="{ 'amotioRetinae_title_text_bg-en': locale === 'en' }"
        >
          {{ $t('pages.medical_service.amotioRetinae_con.diabetes.name') }}
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/87ca0bef9c2de97f.png"
              title="糖尿上眼"
              alt="糖尿上眼眼睛結構"
            />
          </div>
          <div class="amotioRetinae_text_p_span">
            <p>
              {{ $t('pages.medical_service.amotioRetinae_con.diabetes.p1') }}
            </p>
            <p>
              {{ $t('pages.medical_service.amotioRetinae_con.diabetes.p2') }}
            </p>
          </div>
        </div>
      </div>
      <div id="prevent">
        <div
          class="amotioRetinae_title_text_bg amotioRetinae_title_text"
          :class="{ 'amotioRetinae_title_text_bg-en': locale === 'en' }"
        >
          {{ $t('pages.medical_service.amotioRetinae_con.prevent.name') }}
        </div>
        <div>
          {{ $t('pages.medical_service.amotioRetinae_con.prevent.context') }}
        </div>
        <div>
          <div v-for="(item, index) in preventList1" :key="index">
            <div>
              <img
                :src="item.img"
                :alt="item.img_alt"
                :title="item.img_title"
              />
            </div>
            <div>
              <div>{{ $t(item.title) }}</div>
              <div class="amotioRetinae_text_p_span">{{ $t(item.text) }}</div>
            </div>
          </div>
        </div>
        <div class="amotioRetinae_text_p_span">
          {{ $t('pages.medical_service.amotioRetinae_con.prevent.span1') }}
          <span>{{
            $t('pages.medical_service.amotioRetinae_con.prevent.span2')
          }}</span>
        </div>
      </div>
      <div id="faq">
        <div
          class="amotioRetinae_title_text_bg amotioRetinae_title_text"
          :class="{ 'amotioRetinae_title_text_bg-en': locale === 'en' }"
        >
          {{ $t('pages.medical_service.amotioRetinae_con.faq.name') }}
        </div>
        <div>
          <PageCollapse
            :answer="meetArr"
            :downarr="'amotioRetinae'"
            :style="{ '--subassembly-color': '#eab1a6' }"
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
            href="https://www.hkeyecmer.com/pdf/amotioRetinae.pdf"
            :download="'視網膜脫落'"
          >
            <img
              src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
              title="視網膜脫落"
              alt="視網膜脫落_小冊子"
              srcset=""
            />
          </a>
          <a
            href="https://www.hkeyecmer.com/pdf/amotioRetinae.pdf"
            :download="'視網膜脫落'"
          >
            <p>{{ $t('pages.medical_service.amotioRetinae_con.dow.text1') }}</p>
            <p>{{ $t('pages.medical_service.amotioRetinae_con.dow.text2') }}</p>
          </a>
        </div>
      </div>
    </div>
    <!-- 表单 -->
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#eab1a6;'}`"
    />
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
.amotioRetinae_nav {
  max-width: 1200px;
  margin: 100px auto -50%;
  transform: scale(0.9);
  transform-origin: center top;
  & > #intro {
    & > div:nth-child(1) {
      font-size: 50px;
    }
    & > div:nth-child(2) {
      margin-top: 64px;
      margin-bottom: 99px;
      font-family: 'Noto Sans HK';
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 46px;
      letter-spacing: 3px;
      color: #988a89;
      text-indent: 54px;
      & > p {
        margin-bottom: 80px;
        & > span {
          color: #e8a89b;
          font-family: 'NotoSansHK-Bold';
        }
      }
    }
    & > div:nth-child(3) {
      width: 824px;
      height: 507px;
      background-color: #f2f2f2;
      border-radius: 20px;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 100px;
    }
  }
  & > #factor {
    margin-top: 160px;
    margin-bottom: 160px;
    & > div:nth-child(1) {
      margin-bottom: 120px;
    }
    & > div:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      & > div {
        width: 260px;
        height: 308px;
        background-color: #ffffff;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
        border-radius: 75px 0;
        & > div:nth-child(2) {
          max-width: 240px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin: auto;
          margin-top: 20px;
          flex-direction: column;
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #515151;
        }
      }
      & > div:nth-child(4) {
        margin-right: 0;
      }
      & > div:nth-child(5) {
        margin-left: 156px;
      }
      & > div:last-child {
        margin-right: 156px;
      }
      & > div:nth-child(n + 5) {
        margin-top: 96px;
      }
    }
  }
  & > #styptom {
    margin-bottom: 160px;
    & > div:nth-child(2) {
      margin: 100px auto 60px;
    }
    & > div:nth-child(3) {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin-bottom: 112px;
      & > div {
        width: 268px;
        height: 309px;
        border: solid 1px #eed3cf;
        position: relative;
        & > div:nth-child(1) {
          height: 50px;
          font-family: 'HelveticaNeue-MediumItalic';
          font-size: 20px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 33px;
          letter-spacing: 0px;
          color: #eed3cf;
          font-style: oblique;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
        & > div:nth-child(2) {
          height: 99px;
          width: 100%;
          background-color: #eab1a6;
          font-family: 'Noto Sans HK';
          font-size: 21px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 1.6;
          letter-spacing: 0px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        & > div:nth-child(3) {
          img {
            width: 100%;
          }
        }
      }
      & > div::after {
        content: '';
        background: url('https://static.cmereye.com/imgs/2023/06/3c18092d03feec4c.png');
        width: 14px;
        height: 25px;
        display: inline-block;
        position: absolute;
        right: -30px;
        top: 50%;
        transform: translateY(-50%);
      }
      & > div:last-child::after {
        content: '';
        width: 0;
      }
    }
    & > div:nth-child(4) {
      background: url('https://static.cmereye.com/imgs/2023/06/938b5475f5e9caea.png');
      width: 1200px;
      height: 304px;
      padding: 70px;
      line-height: 46px;
      background-size: 100% 100%;
      & > span {
        color: #e8a89b;
      }
    }
  }

  & > #treat {
    margin: 160px auto;

    & > div:nth-child(2) {
      margin: 100px auto 140px;

      & > div {
        margin-bottom: 140px;
        display: flex;
        flex-direction: row;

        & > div:nth-child(1) {
          flex: 1;
          & > img {
            width: 100%;
          }
        }

        & > div:nth-child(2) {
          width: 732px;
          margin-left: 50px;

          & > div:nth-child(1) {
            font-family: 'NotoSansHK-Medium';
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 40px;
            letter-spacing: 0px;
            color: #e8a89b;

            & > p {
              display: flex;
              flex-direction: row;
              margin-bottom: 34px;

              > span:nth-child(1) {
                color: #fff;
                background: #eab1a6;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 15px;
              }
            }
          }

          & > div:nth-child(2) {
            line-height: 48px;
            text-indent: 54px;
          }
        }
      }

      & > div:nth-child(2) {
        flex-direction: row-reverse;

        & > div:nth-child(2) {
          margin-left: 0;
          margin-right: 50px;
        }
      }
    }
  }

  & > #diabetes {
    margin: 160px auto;

    & > div:nth-child(2) {
      margin: 100px auto 160px;
      display: flex;
      flex-direction: row;

      & > div:nth-child(2) {
        width: 776px;
        margin-left: 60px;
        line-height: 48px;
        text-indent: 54px;

        & > p:nth-child(2) {
          margin-top: 80px;
        }
      }
    }
  }

  & > #prevent {
    margin: 160px auto;

    & > div:nth-child(2) {
      margin: 100px auto 60px;
      font-size: 24px;
    }

    & > div:nth-child(3) {
      margin-bottom: 100px;
      display: flex;
      justify-content: space-between;

      & > div {
        width: 385px;
        border-radius: 30px 0 30px 0;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);

        & > div:nth-child(2) {
          background: url('https://static.cmereye.com/imgs/2023/06/e26c60861f4311e0.png');
          background-size: 100% 100%;
          height: 456px;
          margin-top: -67px;
          z-index: 5;
          position: relative;
          padding: 0 36px;
          padding-top: 78px;

          & > div:nth-child(1) {
            width: 273px;
            height: 44px;
            background-color: #eab1a6;
            border-radius: 22px;

            font-size: 26px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #ffffff;
            margin: auto;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          & > div:nth-child(2) {
            font-family: 'Noto Sans HK';
            line-height: 46px;
            color: #555555;
          }
        }
      }
    }

    & > div:nth-child(4) {
      background: url('https://static.cmereye.com/imgs/2023/06/a20a2ddf4c85a5f2.png');
      width: 1200px;
      height: 185px;
      padding-top: 55px;
      padding-left: 48px;
      padding-right: 2px;
      background-size: 100% 100%;
      line-height: 1.8;
      text-align: center;
      & > span {
        color: #e8a89b;
        display: block;
      }
    }
  }

  & > #faq {
    margin-bottom: 260px;

    & > div:nth-child(2) {
      margin-top: 120px;
    }
  }
  &.amotioRetinaeNav-en {
    & > #factor {
      & > div:nth-child(2) {
        & > div {
          & > div:nth-child(2) {
            font-size: 20px;
            line-height: 1.4;
          }
        }
      }
    }
    & > #styptom {
      & > div:nth-child(3) {
        & > div {
          & > div:nth-child(2) {
            line-height: 1.4;
            text-align: center;
          }
        }
      }
      & > div:nth-child(4) {
        padding: 50px 70px;
        line-height: 1.8;
      }
    }
    & > #prevent {
      & > div:nth-child(3) {
        & > div {
          & > div:nth-child(2) {
            height: auto;
            padding-bottom: 30px;
            & > div:nth-child(2) {
              line-height: 1.6;
            }
          }
        }
      }
      & > div:nth-child(4) {
        padding-top: 30px;
      }
    }
  }
}

.amotioRetinae_text_p_span {
  font-family: 'Noto Sans HK';
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #515151;
}

.amotioRetinae_title_text {
  font-family: 'NotoSansHK-Bold';
  font-size: 38px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 52px;
  letter-spacing: 0px;
  color: #e8a89b;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.amotioRetinae_title_text_bg {
  background: url('https://static.cmereye.com/imgs/2023/06/b808208feaa07e38.png');
  background-size: 100%;
  width: 609px;
  height: 106px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1.2;
}

.amotioRetinae_title_btn {
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
  // text-shadow: 0 2px 5px #fbddd8;
  text-shadow: 0 2px 5px rgba($color: #000000, $alpha: 0.5);
  &::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    bottom: -100%;
    right: -100%;
    background: linear-gradient(45deg, #b2a2f4 0%, #d0c8ff 100%);
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
      background: #f7d6cf;
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
@media screen and (max-width: 768px) {
  .amotioRetinae_nav {
    max-width: 100%;
    margin: -80px 0 0;
    transform: scale(1);
    padding: 0 40px;

    & > #intro {
      & > div:nth-child(1) {
        font-size: 25px;
      }

      & > div:nth-child(2) {
        margin-top: 25px;
        margin-bottom: 30px;

        font-family: 'Noto Sans HK';
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1.8;
        letter-spacing: 0;
        color: #988a89;
        text-indent: 0;
        text-align: justify;

        & > p {
          margin-bottom: 30px;

          & > span {
            color: #e8a89b;
            font-family: 'NotoSansHK-Bold';
          }
        }
      }

      & > div:nth-child(3) {
        width: 100%;
        height: auto;
        background-color: #f2f2f2;
        border-radius: 20px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 100px;
        padding: 25px 22px 25px 40px;

        & > img {
          width: 80%;
        }
      }
    }

    & > #factor {
      margin-top: 80px;
      margin-bottom: 90px;
      & > div:nth-child(1) {
        margin-bottom: 0;
      }
      & > div:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        & > div {
          // width: 145px;
          width: calc(50% - 10px);
          max-width: 145px;
          height: auto;
          background-color: #ffffff;
          box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
          border-radius: 45px 0;
          & > div:nth-child(2) {
            max-width: 240px;
            padding: 10px;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: auto;
            margin-top: 5px;
            flex-direction: column;
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.4;
            letter-spacing: 0px;
            color: #515151;
          }
        }

        & > div:nth-child(4) {
          margin-right: 0;
        }
        & > div:nth-child(5) {
          margin-left: 0;
        }

        & > div:last-child {
          margin-right: 0;
          margin-left: 25%;
        }

        & > div:nth-child(n) {
          margin-top: 50px;
        }
      }
    }
    & > #styptom {
      margin-bottom: 80px;

      & > div:nth-child(2) {
        margin: 40px auto 25px;
      }
      & > div:nth-child(3) {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-direction: column;
        margin-bottom: 60px;
        & > div {
          width: 100%;
          height: auto;
          border: solid 1px #eed3cf;
          position: relative;
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 45px;
          & > div:nth-child(1) {
            width: 100%;
            height: 50px;
            font-family: 'HelveticaNeue-MediumItalic';
            font-size: 14px;
            font-weight: 500;
            font-stretch: normal;
            line-height: 1.6;
            letter-spacing: 0px;
            color: #eed3cf;
            font-style: oblique;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }
          & > div:nth-child(2) {
            height: auto;
            width: 40%;
            background-color: #eab1a6;
            font-family: 'Noto Sans HK';
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.6;
            letter-spacing: 0px;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding-left: 15px;
          }
          & > div:nth-child(3) {
            width: 60%;
            height: auto;
          }
        }
        & > div:nth-child(1) {
          & > div:nth-child(2) {
            background: #3360a8;
          }
        }
        & > div::after {
          content: '';
          background: url('https://static.cmereye.com/imgs/2023/06/3c18092d03feec4c.png');
          width: 14px;
          height: 25px;
          display: inline-block;
          position: absolute;
          left: 50%;
          right: auto;
          top: auto;
          bottom: -30%;
          transform: translateY(-50%) rotate(90deg);
        }
        & > div:last-child::after {
          content: none;
        }
      }

      & > div:nth-child(4) {
        background: url('https://static.cmereye.com/imgs/2023/07/5b7d7027ccc3fc0d.png')
          no-repeat;
        width: 100%;
        height: auto;
        padding: 28px 24px 24px 24px;
        line-height: 1.9;
        background-size: 100%;
        & > span {
          color: #e8a89b;
        }
      }
    }

    & > #treat {
      margin: 80px auto;
      & > div:nth-child(2) {
        margin: 30px auto 55px;
        & > div {
          margin-bottom: 60px;
          display: flex;
          flex-direction: column;
          position: relative;
          & > div:nth-child(1) {
            & > img {
              width: 100%;
            }
          }
          .amotioRetinae_text_top {
            margin-top: 260px;
          }
          .amotioRetinae_img {
            position: absolute;
            top: 60px;
          }
          & > div:nth-child(2) {
            width: 100%;
            margin-left: 0;
            & > div:nth-child(1) {
              font-family: 'NotoSansHK-Medium';
              font-size: 16px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 36px;
              letter-spacing: 0px;
              color: #e8a89b;
              & > p {
                display: flex;
                flex-direction: row;
                margin-bottom: 34px;
                & > span:nth-child(1) {
                  padding-top: 4px;
                  color: #fff;
                  background: #eab1a6;
                  width: 30px;
                  height: 30px;
                  border-radius: 50%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin-right: 10px;
                }
              }
            }
            & > div:nth-child(2) {
              line-height: 1.8;
              text-indent: 0;
            }
          }
        }
        & > div:nth-child(2) {
          flex-direction: column-reverse;
          & > div:nth-child(2) {
            margin-left: 0;
            margin-right: 50px;
          }
        }
      }

      & > div:nth-child(3) {
        // padding: 16px 20px;
        & > p {
          font-size: 16px;
          line-height: 1.8;
        }
      }
    }
    & > #diabetes {
      margin: 80px auto;
      & > div:nth-child(2) {
        margin: 40px auto 60px;
        display: flex;
        flex-direction: column-reverse;
        & > div:nth-child(2) {
          width: 100%;
          margin-left: 0;
          line-height: 1.8;
          text-indent: 0;
          font-size: 12px;
          & > p:nth-child(2) {
            margin-top: 34px;
          }
        }
        & > div:nth-child(1) {
          padding: 20px 7px 0 7px;
          width: 80%;
          margin: auto;
        }
      }
    }
    & > #prevent {
      margin: 80px auto;
      & > div:nth-child(2) {
        margin: 30px auto 25px;
        font-size: 12px;
      }
      & > div:nth-child(3) {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        & > div {
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: row;
          position: relative;
          padding: 80px 10px 20px;
          margin-bottom: 30px;
          & > div:nth-child(1) {
            width: 40%;
          }
          & > div:nth-child(2) {
            width: 60%;
            background: #fff;
            background-size: 100% 100%;
            height: auto;
            margin-top: -67px;
            z-index: 5;
            position: static;
            padding: 0;
            padding-top: 28px;
            & > div:nth-child(1) {
              width: 70%;
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
              height: auto;
              padding: 4px 10px;
              background-color: #eab1a6;
              border-radius: 22px;
              font-size: 5.5vw;
              font-weight: normal;
              font-stretch: normal;
              line-height: 1.6;
              letter-spacing: 0px;
              color: #ffffff;
              margin-bottom: 0;
              margin: auto;
              margin-top: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            & > div:nth-child(2) {
              font-family: 'Noto Sans HK';
              line-height: 1.8;
              color: #555555;
              margin-top: 35px;
              margin-left: 10px;
              text-align: justify;
            }
          }
        }
      }

      & > div:nth-child(4) {
        background: url('https://static.cmereye.com/imgs/2023/07/7030a59cf91a8775.png')
          no-repeat;
        width: 100%;
        height: auto;
        padding: 33px 28px 28px;
        background-size: 100% auto;
        text-align: justify;
        & > span {
          color: #e8a89b;
          text-indent: 0;
          display: inline;
        }
      }
    }

    & > #faq {
      margin-bottom: 260px;
      & > div:nth-child(2) {
        margin-top: 40px;
      }
    }
    &.amotioRetinaeNav-en {
      & > #intro {
        & > div:nth-child(1) {
          font-size: 20px;
        }
      }
      & > #factor {
        & > div:nth-child(2) {
          & > div {
            & > div:nth-child(2) {
              font-size: 12px;
              line-height: 1.4;
            }
          }
        }
      }
      & > #styptom {
        & > div:nth-child(3) {
          & > div {
            & > div:nth-child(2) {
              padding-right: 15px;
            }
          }
        }
        & > div:nth-child(4) {
          padding: 28px 24px 24px;
          line-height: 1.8;
        }
      }
      & > #prevent {
        & > div:nth-child(3) {
          & > div {
            & > div:nth-child(2) {
              padding-bottom: 0px;
              & > div:nth-child(1) {
                font-size: 18px;
              }
              & > div:nth-child(2) {
                line-height: 1.6;
                text-align: left;
              }
            }
          }
        }
        & > div:nth-child(4) {
          padding: 10px 20px 10px 30px;
          letter-spacing: 0px;
        }
      }
    }
  }

  .amotioRetinae_text_p_span {
    font-family: 'Noto Sans HK';
    font-size: 12px;
    font-weight: 400;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #515151;
  }

  .amotioRetinae_title_text {
    font-family: 'NotoSansHK-Bold';
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 2;
    letter-spacing: 0px;
    color: #e8a89b;

    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .amotioRetinae_title_text_bg {
    background: url('https://static.cmereye.com/imgs/2023/06/b808208feaa07e38.png')
      no-repeat;
    background-size: 100%;
    width: 100%;
    height: auto;
    min-height: 54px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    &.amotioRetinae_title_text_bg-en {
      font-size: 16px;
    }
  }

  .amotioRetinae_title_btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: auto;
    width: 100%;
    padding: 16px 40px;
    height: auto;
    border-radius: 20px;
    background-blend-mode: normal, normal;
    background-image: linear-gradient(-90deg, #f1c0b6 0%, #fbddd8 100%),
      linear-gradient(#eda2a6, #eda2a6);
    font-family: 'Noto Sans HK';
    font-size: 22px;
    text-align: center;
    font-weight: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: 0px;
    color: #ffffff;
  }

  .dow {
    margin-top: -160px;
    margin-bottom: 130px;
    font-size: 14px;
    & > div:nth-child(1) {
      & > div {
        width: 80%;
        height: 94px;
        & > a:nth-child(1) {
          & > img {
            width: 55px;
            min-width: 55px;
            height: auto;
          }
        }
        & > a:nth-child(2) {
          padding-top: 5px;
          margin-left: 10px;
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
@media screen and (min-width: 1920px) {
  .amotioRetinae_nav {
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

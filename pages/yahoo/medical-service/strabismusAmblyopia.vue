<script lang="ts" setup>
import { getPdf } from '@/assets/js/common'
definePageMeta({
  layout: 'page',
})

const { t } = useLang()
useHead(() => ({
  title: t('pages.medical_service.strabismusAmblyopia_con_head'),
  meta() {
    return [
      {
        hid: 'strabismusAmblyopiaDesc',
        name: 'description',
        content: t('tdk.strabismusAmblyopia.desc'),
      },
      {
        hid: 'strabismusAmblyopiaKey',
        name: 'keywords',
        content: t('tdk.strabismusAmblyopia.key'),
      },
    ]
  },
}))

const locale = useState<string>('locale.setting')
// 传递背景色
const backgd = [
  '#fbbfa1;',
  '-webkit-linear-gradient(to right, #fedac8, #fbbfa1);',
  'linear-gradient(to right, #fedac8, #fbbfa1);',
]
const strabismusList1 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/08/714c9a2fceed9b86.jpg',
    text: 'pages.medical_service.strabismusAmblyopia_con.kind.text1_1',
    img_title: '斜視',
    img_alt: '斜視眼睛狀態',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/08/7ea53d3734476d0a.jpg',
    text: 'pages.medical_service.strabismusAmblyopia_con.kind.text1_2',
    img_title: '內斜視',
    img_alt: '內斜視眼睛狀態',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/08/a36770ffa76f3e2e.jpg',
    text: 'pages.medical_service.strabismusAmblyopia_con.kind.text1_3',
    img_title: '外斜視',
    img_alt: '外斜視眼睛狀態',
  },
]
const strabismusList2 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/08/3eed40559da38526.jpg',
    text: 'pages.medical_service.strabismusAmblyopia_con.kind.text2_1',
    img_title: '斜視',
    img_alt: '斜視眼睛狀態',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/08/21b0fa246561c5bd.jpg',
    text: 'pages.medical_service.strabismusAmblyopia_con.kind.text2_2',
    img_title: '上斜視',
    img_alt: '上斜視眼睛狀態',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/08/ff6403d529d952d2.jpg',
    text: 'pages.medical_service.strabismusAmblyopia_con.kind.text2_3',
    img_title: '下斜視',
    img_alt: '下斜視眼睛狀態',
  },
]
const strabismusList3 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/08/f5435fd75e99b400.jpg',
    text: 'pages.medical_service.strabismusAmblyopia_con.kind.text3_1',
    img_title: '斜視',
    img_alt: '斜視眼睛狀態',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/08/18fee48a5021a82e.jpg',
    text: 'pages.medical_service.strabismusAmblyopia_con.kind.text3_2',
    img_title: '假性內斜視',
    img_alt: '假性內斜視眼睛狀態',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/08/fa5db6e208cf321f.jpg',
    text: 'pages.medical_service.strabismusAmblyopia_con.kind.text3_3',
    img_title: '內斜視',
    img_alt: '內斜視眼睛狀態',
  },
]
const strabismusList4 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/f317dab3447cad52.png',
    text: ['pages.medical_service.strabismusAmblyopia_con.kind.text5_1'],
    img_title: '兒童內斜視',
    img_alt: '內斜視狀態下寫作業的女童',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/92abe075389b8af9.png',
    text: [
      'pages.medical_service.strabismusAmblyopia_con.kind.text5_2_1',
      'pages.medical_service.strabismusAmblyopia_con.kind.text5_2_2',
    ],
    img_title: '兒童內斜視',
    img_alt: '內斜視狀態下的可愛男童',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/ee8e638950ef26fd.png',
    text: [
      'pages.medical_service.strabismusAmblyopia_con.kind.text5_3_1',
      'pages.medical_service.strabismusAmblyopia_con.kind.text5_3_2',
    ],
    img_title: '小朋友斜視',
    img_alt: '斜視狀態下的男童遮蓋一隻眼睛',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/37924e5d99c31f51.png',
    text: ['pages.medical_service.strabismusAmblyopia_con.kind.text5_4'],
    img_title: '兒童內斜視',
    img_alt: '斜視狀態下的女童側頭看東西',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/9b92ae8185dfbea8.png',
    text: [
      'pages.medical_service.strabismusAmblyopia_con.kind.text5_5_1',
      'pages.medical_service.strabismusAmblyopia_con.kind.text5_5_2',
    ],
    img_title: '小朋友斜視_揉眼睛',
    img_alt: '斜視狀態下的男童揉眼睛',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/af77985aa7af1b00.png',
    text: ['pages.medical_service.strabismusAmblyopia_con.kind.text5_6'],
    img_title: '小朋友斜視_流眼淚',
    img_alt: '斜視狀態下的男童流眼淚',
  },
]
const strabismusList5 = [
  {
    title: 'pages.medical_service.strabismusAmblyopia_con.cure.title1',
    img: 'https://static.cmereye.com/imgs/2023/06/6a896080eccf672a.png',
    text: 'pages.medical_service.strabismusAmblyopia_con.cure.text1',
    img_title: '兒童斜視矯正',
    img_alt: '兒童斜視矯正前後效果對比',
  },
  {
    title: 'pages.medical_service.strabismusAmblyopia_con.cure.title2',
    img: 'https://static.cmereye.com/imgs/2023/06/9c69590dd98eb332.png',
    text: 'pages.medical_service.strabismusAmblyopia_con.cure.text2',
    img_title: '眼科醫生_斜視矯正訓練',
    img_alt: '眼科醫生為男童進行斜視矯正訓練',
  },
  {
    title: 'pages.medical_service.strabismusAmblyopia_con.cure.title3',
    img: 'https://static.cmereye.com/imgs/2023/06/dd785273b00a7055.png',
    text: 'pages.medical_service.strabismusAmblyopia_con.cure.text3',
    img_title: '斜視矯正_遮眼治療',
    img_alt: '兒童進行遮眼治療的斜視矯正方法',
  },
  {
    title: 'pages.medical_service.strabismusAmblyopia_con.cure.title4',
    img: 'https://static.cmereye.com/imgs/2023/06/fb8d95f43e5c758e.png',
    text: 'pages.medical_service.strabismusAmblyopia_con.cure.text4',
    img_title: '斜視矯正_眼科手術',
    img_alt: '斜視矯正眼科手術步驟及過程',
  },
]
const amblyopiaList1 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/5b9e1baac69abb24.png',
    title: 'pages.medical_service.strabismusAmblyopia_con.amblyopia.title1',
    text: 'pages.medical_service.strabismusAmblyopia_con.amblyopia.text1',
    img_title: '兒童斜視_兒童弱視',
    img_alt: '男童側臉展示斜視及弱視',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/9a3332f88b6d69af.png',
    title: 'pages.medical_service.strabismusAmblyopia_con.amblyopia.title2',
    text: 'pages.medical_service.strabismusAmblyopia_con.amblyopia.text2',
    img_title: '兒童弱視_兒童視力檢查',
    img_alt: '患有弱視的女童配戴驗光眼鏡進行視力檢查',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/7ace87f50adb18dc.png',
    title: 'pages.medical_service.strabismusAmblyopia_con.amblyopia.title3',
    text: 'pages.medical_service.strabismusAmblyopia_con.amblyopia.text3',
    img_title: '兒童弱視_屈光不正',
    img_alt: '患有弱視的男童佩戴眼鏡以改善屈光不正',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/2a48ee959aee43e2.png',
    title: 'pages.medical_service.strabismusAmblyopia_con.amblyopia.title4',
    text: 'pages.medical_service.strabismusAmblyopia_con.amblyopia.text4',
    mg_title: '兒童弱視_剝奪性弱視',
    img_alt: '患有弱視的女童揉眼睛為剝奪性弱視症狀表現',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/1c4c979e78450f83.png',
    title: 'pages.medical_service.strabismusAmblyopia_con.amblyopia.title5',
    text: 'pages.medical_service.strabismusAmblyopia_con.amblyopia.text5',
    img_title: '先天性弱視',
    img_alt: '戴眼罩的幼童接受先天性弱視治療',
  },
]
const treatList1 = [
  {
    svg: 'https://static.cmereye.com/imgs/2023/06/25507be120bacf59.png',
    title: 'pages.medical_service.strabismusAmblyopia_con.treat.title1',
    img: 'https://static.cmereye.com/imgs/2023/06/77e219f43e2c6242.png',
    text: ['pages.medical_service.strabismusAmblyopia_con.treat.text1'],
    img_title: '弱視治療',
    img_alt: '戴眼鏡的女童微笑展現弱視治療成效',
  },
  {
    svg: 'https://static.cmereye.com/imgs/2023/06/af76b91d4e877062.png',
    title: 'pages.medical_service.strabismusAmblyopia_con.treat.title2',
    img: 'https://static.cmereye.com/imgs/2023/06/79189b9514be7577.png',
    text: [
      'pages.medical_service.strabismusAmblyopia_con.treat.text2_1',
      'pages.medical_service.strabismusAmblyopia_con.treat.text2_2',
    ],
    img_title: '弱視治療_遮眼治療',
    img_alt: '女童透過遮眼治療進行弱視治療',
  },
  {
    svg: 'https://static.cmereye.com/imgs/2023/06/333142a79088a1b6.png',
    title: 'pages.medical_service.strabismusAmblyopia_con.treat.title3',
    img: 'https://static.cmereye.com/imgs/2023/06/f632114cdb47d561.png',
    text: ['pages.medical_service.strabismusAmblyopia_con.treat.text3'],
    img_title: '弱視治療_放大瞳孔藥水',
    img_alt: '男童使用放大瞳孔藥水進行弱視治療',
  },
]
// 内部导航
const serviceNavigation = [
  {
    anchorName: 'pages.medical_service.strabismusAmblyopia_con.navLists.name1',
    anchorLink: '/medical-service/strabismusAmblyopia#strabismus',
  },
  {
    anchorName: 'pages.medical_service.strabismusAmblyopia_con.navLists.name2',
    anchorLink: '/medical-service/strabismusAmblyopia#kind',
  },
  {
    anchorName: 'pages.medical_service.strabismusAmblyopia_con.navLists.name3',
    anchorLink: '/medical-service/strabismusAmblyopia#cure',
  },
  {
    anchorName: 'pages.medical_service.strabismusAmblyopia_con.navLists.name4',
    anchorLink: '/medical-service/strabismusAmblyopia#amblyopia',
  },
  {
    anchorName: 'pages.medical_service.strabismusAmblyopia_con.navLists.name5',
    anchorLink: '/medical-service/strabismusAmblyopia#amblyopia_kind',
  },
  {
    anchorName: 'pages.medical_service.strabismusAmblyopia_con.navLists.name6',
    anchorLink: '/medical-service/strabismusAmblyopia#treat',
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
  pcSrc:
    'https://static.cmereye.com/static/hkcmereye/bannerzip/儿童斜弱视1.png',
  mbSrc:
    'https://static.cmereye.com/static/hkcmereye/bannerzip/儿童斜弱视2.png',
  cnName: '兒童斜弱視',
  enName: 'AMBLYOPIA AND STRABISMUS IN CHILDREN',
  textColor: '#F2A178',
  pageName: 'strabismusAmblyopia',
}
</script>

<template>
  <div class="strabismusAmblyopia">
    <PageServiceBanner :bannerData="bannerData" />
    <div class="strabismusAmblyopia-nav">
      <serviceNav
        :arrData="serviceNavigation"
        :pageName="'strabismusAmblyopia'"
      />
    </div>
    <div
      class="strabismusAmblyopia_nav"
      :class="{ 'strabismusAmblyopiaNav-en': locale === 'en' }"
    >
      <div id="strabismus">
        <div class="strabismusAmblyopia_title_text">
          {{
            $t('pages.medical_service.strabismusAmblyopia_con.strabismus.name')
          }}
        </div>
        <div class="strabismusAmblyopia_text_p_span">
          <p>
            {{
              $t('pages.medical_service.strabismusAmblyopia_con.strabismus.p1')
            }}
          </p>
          <p>
            {{
              $t('pages.medical_service.strabismusAmblyopia_con.strabismus.p2')
            }}
          </p>
        </div>
      </div>
      <div id="kind">
        <div class="strabismusAmblyopia_title_text">
          {{ $t('pages.medical_service.strabismusAmblyopia_con.kind.name') }}
        </div>
        <div>
          <div>
            <div>
              {{
                $t('pages.medical_service.strabismusAmblyopia_con.kind.name1')
              }}
            </div>
            <div>
              <div class="strabismusAmblyopia_text_p_span">
                {{
                  $t(
                    'pages.medical_service.strabismusAmblyopia_con.kind.context1'
                  )
                }}
              </div>
              <div>
                <div v-for="(item, index) in strabismusList1" :key="index">
                  <img
                    :src="item.img"
                    :alt="item.img_alt"
                    :title="item.img_title"
                  />
                  <div>{{ $t(item.text) }}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              {{
                $t('pages.medical_service.strabismusAmblyopia_con.kind.name2')
              }}
            </div>
            <div>
              <div class="strabismusAmblyopia_text_p_span">
                {{
                  $t(
                    'pages.medical_service.strabismusAmblyopia_con.kind.context2'
                  )
                }}
              </div>
              <div>
                <div v-for="(item, index) in strabismusList2" :key="index">
                  <img
                    :src="item.img"
                    :alt="item.img_alt"
                    :title="item.img_title"
                  />
                  <div>{{ $t(item.text) }}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              {{
                $t('pages.medical_service.strabismusAmblyopia_con.kind.name3')
              }}
            </div>
            <div>
              <div class="strabismusAmblyopia_text_p_span">
                {{
                  $t(
                    'pages.medical_service.strabismusAmblyopia_con.kind.context3'
                  )
                }}
              </div>
              <div>
                <div v-for="(item, index) in strabismusList3" :key="index">
                  <img
                    :src="item.img"
                    :alt="item.img_alt"
                    :title="item.img_title"
                  />
                  <div>{{ $t(item.text) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="strabismusAmblyopia_title_btn" @click="goWhatsApp">
          <p>{{$t('pages.medical_service.strabismusAmblyopia_con.btn.name1_1')}}</p>
          <p>{{$t('pages.medical_service.strabismusAmblyopia_con.btn.name1_2')}}</p>
        </div> -->
        <div class="serviceBtnStyle">
          <service-button-icon
            :str="
              $t('pages.medical_service.strabismusAmblyopia_con.btn.name1_1') +
              '\n' +
              $t('pages.medical_service.strabismusAmblyopia_con.btn.name1_2')
            "
            :link="'https://api.whatsapp.com/send?phone=85265767817&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'"
            :type="'4'"
            :pageName="'strabismusAmblyopia'"
          />
        </div>
        <div class="strabismusAmblyopia_text_p_span">
          {{
            $t('pages.medical_service.strabismusAmblyopia_con.kind.context4')
          }}
        </div>
        <div>
          <div>
            {{ $t('pages.medical_service.strabismusAmblyopia_con.kind.name5') }}
          </div>
          <div class="strabismusAmblyopia_text_p_span">
            {{
              $t('pages.medical_service.strabismusAmblyopia_con.kind.context5')
            }}
          </div>
          <div>
            <div v-for="(item, index) in strabismusList4" :key="index">
              <div>
                <img
                  :src="item.img"
                  :alt="item.img_alt"
                  :title="item.img_title"
                />
              </div>
              <div class="strabismusAmblyopia_text_p_span">
                <p v-for="(ele, i) in item.text" :key="i">{{ $t(ele) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="cure">
        <div class="strabismusAmblyopia_title_text">
          {{ $t('pages.medical_service.strabismusAmblyopia_con.cure.name') }}
        </div>
        <div>
          <div v-for="(item, index) in strabismusList5" :key="index">
            <div>{{ $t(item.title) }}</div>
            <div>
              <div>
                <img
                  :src="item.img"
                  :title="item.img_title"
                  :alt="item.img_alt"
                />
              </div>
              <div class="strabismusAmblyopia_text_p_span">
                {{ $t(item.text) }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="amblyopia">
        <div class="strabismusAmblyopia_title_text">
          {{
            $t('pages.medical_service.strabismusAmblyopia_con.amblyopia.name')
          }}
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/2ed1badaabb9c9cb.png"
              title="兒童弱視矯正"
              alt="兒童配戴眼鏡以矯正弱視"
            />
          </div>
          <div class="strabismusAmblyopia_text_p_span">
            {{
              $t(
                'pages.medical_service.strabismusAmblyopia_con.amblyopia.context1'
              )
            }}
          </div>
        </div>
        <div id="amblyopia_kind">
          <div class="strabismusAmblyopia_title_text">
            {{
              $t(
                'pages.medical_service.strabismusAmblyopia_con.amblyopia.name1'
              )
            }}
          </div>
          <div>
            <div v-for="(item, index) in amblyopiaList1" :key="index">
              <div>
                <img
                  :src="item.img"
                  :title="item.img_title"
                  :alt="item.img_alt"
                />
              </div>
              <div>
                <div>{{ $t(item.title) }}</div>
                <div class="strabismusAmblyopia_text_p_span">
                  {{ $t(item.text) }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="strabismusAmblyopia_title_btn" @click="callTel">
          <p>{{$t('pages.medical_service.strabismusAmblyopia_con.btn.name2_1')}}</p>
          <p>{{$t('pages.medical_service.strabismusAmblyopia_con.btn.name2_2')}}</p>
        </div> -->
        <div class="serviceBtnStyle">
          <service-button-icon
            :str="
              $t('pages.medical_service.strabismusAmblyopia_con.btn.name2_1') +
              '\n' +
              $t('pages.medical_service.strabismusAmblyopia_con.btn.name2_2')
            "
            :link="'tel: +852 3956 2025'"
            :type="'2'"
            :pageName="'strabismusAmblyopia'"
          />
        </div>
      </div>
      <div id="treat">
        <div class="strabismusAmblyopia_title_text">
          {{ $t('pages.medical_service.strabismusAmblyopia_con.treat.name') }}
        </div>
        <div class="strabismusAmblyopia_text_p_span">
          <p>
            {{ $t('pages.medical_service.strabismusAmblyopia_con.treat.p1') }}
          </p>
          <p>
            {{ $t('pages.medical_service.strabismusAmblyopia_con.treat.p2') }}
          </p>
        </div>
        <div>
          <div v-for="(item, index) in treatList1" :key="index">
            <div>
              <img
                :src="item.svg"
                :alt="item.img_alt"
                :title="item.img_title"
              />
              <div>{{ $t(item.title) }}</div>
            </div>
            <div>
              <div>
                <img
                  :src="item.img"
                  :alt="item.img_alt"
                  :title="item.img_title"
                />
              </div>
              <div class="strabismusAmblyopia_text_p_span">
                <p v-for="(ele, i) in item.text" :key="i">{{ $t(ele) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="bg_strabismusAmblyopia_nav"></div>
    <div id="curativeTime" :class="{ 'curativeTime-en': locale === 'en' }">
      <div>
        {{
          $t('pages.medical_service.strabismusAmblyopia_con.curativeTime.name')
        }}
      </div>
      <div class="strabismusAmblyopia_text_p_span">
        {{
          $t(
            'pages.medical_service.strabismusAmblyopia_con.curativeTime.context'
          )
        }}
      </div>
    </div>
    <div></div>
    <!-- 下载 -->
    <div class="dow">
      <div>
        <div>
          <a
            href="https://www.hkeyecmer.com/pdf/strabismusAmblyopia.pdf"
            :download="'兒童斜弱視'"
          >
            <img
              src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
              title="斜視_弱視"
              alt="斜視_弱視_小冊子"
              srcset=""
            />
          </a>
          <a
            href="https://www.hkeyecmer.com/pdf/strabismusAmblyopia.pdf"
            :download="'兒童斜弱視'"
          >
            <p>
              {{
                $t('pages.medical_service.strabismusAmblyopia_con.dow.text1')
              }}
            </p>
            <p>
              {{
                $t('pages.medical_service.strabismusAmblyopia_con.dow.text2')
              }}
            </p>
          </a>
        </div>
      </div>
    </div>
    <!-- 表单 -->
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#fbbfa1;'}`"
    />
    <yahooPageFooterMenu />
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
.strabismusAmblyopia-nav {
  margin-top: 30px;
}
.strabismusAmblyopia_nav {
  max-width: 1200px;
  transform: scale(0.9);
  transform-origin: center top;
  margin: 100px auto -60%;
  & > #strabismus {
    & > div:nth-child(2) {
      line-height: 46px;
      color: #b4968d;

      & > p {
        margin-top: 50px;
      }
    }
  }

  & > #kind {
    margin-top: 160px;

    & > div:nth-child(2) {
      margin-top: 100px;
      margin-bottom: 120px;

      & > div {
        & > div:nth-child(1) {
          width: 353px;
          height: 93px;
          background: url('https://static.cmereye.com/imgs/2023/06/282e9a23221c6917.png');
          display: flex;
          justify-content: center;
          align-items: center;

          font-family: 'SourceHanSansCN-Medium';
          font-size: 30px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #fefeff;
        }

        & > div:nth-child(2) {
          margin-top: 45px;

          & > div:nth-child(1) {
            line-height: 38px;
          }

          & > div:nth-child(2) {
            display: flex;
            flex-direction: row;
            padding: 0 20px;
            justify-content: space-between;

            & > div {
              margin-top: 103px;

              & > div:nth-child(2) {
                margin: auto;
                margin-top: 51px;
                border-radius: 50%;

                width: 146px;
                height: 49px;
                background-image: linear-gradient(#a3b5fc, #a3b5fc),
                  linear-gradient(#1a7ec5, #1a7ec5);
                background-blend-mode: normal, normal;

                font-family: 'Noto Sans HK';
                font-size: 22px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #fefefe;

                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }
      }

      & > div:nth-child(2) {
        margin-top: 190px;
      }

      & > div:nth-child(3) {
        margin-top: 220px;

        & > div:nth-child(1) {
          width: 544px;
          height: 105px;
          background: url('https://static.cmereye.com/imgs/2023/06/063fecc5281ba0ab.png');
        }

        & > div:nth-child(2) {
          & > div:nth-child(2) {
            & > div {
              & > div:nth-child(2) {
                background: url('https://static.cmereye.com/imgs/2023/06/71124468b48b8228.png');
                border-radius: 0;
                width: 201px;
                height: 60px;
              }
            }
          }
        }
      }
    }

    & > div:nth-child(4) {
      width: 1270px;
      height: 378px;
      margin: auto;
      background: url('https://static.cmereye.com/imgs/2023/06/2f0b833ceb2c7969.png');
      margin-top: 133px;
      margin-bottom: 116px;
      padding: 0 79px;

      line-height: 41px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: 100%;
      transform: scale(0.85);
      margin-left: -40px;
    }

    & > div:nth-child(5) {
      & > div:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'NotoSansHK-Medium';
        font-size: 36px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 38px;
        letter-spacing: 0px;
        color: #ffffff;

        width: 544px;
        height: 105px;
        background: url('https://static.cmereye.com/imgs/2023/06/063fecc5281ba0ab.png');
      }

      & > div:nth-child(2) {
        margin-top: 70px;
        line-height: 42px;
      }

      & > div:nth-child(3) {
        padding: 0 79px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        & > div {
          display: flex;
          align-items: center;
          flex-direction: column;
          margin-bottom: 100px;

          & > div:nth-child(2) {
            text-align: center;
            margin-top: 42px;
          }
        }
      }
    }
  }

  & > #cure {
    & > div:nth-child(2) {
      margin-top: 100px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      & > div {
        width: calc(50% - 30px);
        background-color: #ffffff;
        box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        margin-bottom: 80px;
        padding-bottom: 20px;
        & > div:nth-child(1) {
          width: 100%;
          height: 95px;
          border-radius: 20px 20px 0 0;
          background-image: linear-gradient(#e9a98c, #e9a98c),
            linear-gradient(#fe9f59, #fe9f59);
          background-blend-mode: normal, normal;
          display: flex;
          justify-content: center;
          align-items: center;

          font-family: 'NotoSansHK-Bold';
          font-size: 36px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #fefeff;
        }
        & > div:nth-child(2) {
          padding: 45px 45px 0 45px;
          & > div:nth-child(1) {
            width: 100%;
            min-height: 209px;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #ffefcf;
            margin-bottom: 35px;
            img {
              width: 100%;
            }
          }
          & > div:nth-child(2) {
            line-height: 46px;
          }
        }
      }

      & > div:nth-child(3) {
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            letter-spacing: -1px;
          }
        }
      }
    }
  }

  & > #amblyopia {
    margin-top: 160px;
    margin-bottom: 140px;
    & > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 130px;
      margin-bottom: 160px;
      & > div:nth-child(1) {
        width: 574px;

        & > img {
          width: 100%;
        }
      }

      & > div:nth-child(2) {
        width: 681px;
        line-height: 46px;
        margin-left: 64px;
      }
    }

    & > div:nth-child(3) {
      & > div:nth-child(2) {
        margin: 120px auto;

        & > div {
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: space-between;
          border-bottom: dashed 2px #fbbfa1;
          padding: 61px 36px;
          & > div:nth-child(2) {
            width: 600px;
            & > div:nth-child(1) {
              font-family: 'NotoSansHK-Medium';
              font-size: 34px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
              background: url('https://static.cmereye.com/imgs/2023/06/79e8524bbf129b0f.png');
              width: 235px;
              height: 70px;
              margin: auto;
              margin-bottom: 50px;
            }

            & > div:nth-child(2) {
              line-height: 42px;
              letter-spacing: -1px;
            }
          }
        }

        & > div:nth-child(2) {
          & > div:nth-child(2) {
            & > div:nth-child(1) {
              background: url('https://static.cmereye.com/imgs/2023/06/bcb4a9c8ee54627c.png');
              width: 550px;
              height: 68px;
            }
          }
        }
        & > div:nth-child(3),
        & > div:nth-child(4) {
          & > div:nth-child(2) {
            & > div:nth-child(1) {
              background: url('https://static.cmereye.com/imgs/2023/06/c8d747a586637be1.png');
              width: 309px;
            }
          }
        }
        & > div:nth-child(even) {
          flex-direction: row;
        }
        & > div:last-child {
          border: none;
        }
      }
    }
  }

  & > #treat {
    margin: 140px auto;
    & > div:nth-child(2) {
      background: url('https://static.cmereye.com/imgs/2023/06/91df227071dfbf87.png');
      width: 1319px;
      height: 389px;
      padding: 115px 100px;
      margin: 120px auto 60px;
      line-height: 36px;
      color: #d37f66;
      & > p {
        margin-bottom: 30px;
      }
    }

    & > div:nth-child(3) {
      & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        & > div:nth-child(1) {
          display: flex;
          padding-bottom: 17px;
          position: relative;

          & > div:nth-child(2) {
            margin-left: 12px;
            font-family: 'NotoSansHK-Bold';
            font-size: 34px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #fbbfa1;
          }
        }

        & > div:nth-child(1)::after {
          content: '';
          width: 1000px;
          border-bottom: 2px dashed #fbbfa1;
          display: inline-block;
          position: absolute;
          left: 180px;
          bottom: 0;
        }

        & > div:nth-child(2) {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 49px auto 120px;

          & > div:nth-child(2) {
            width: 1044px;
            margin-left: 41px;

            & > p {
              margin-bottom: 30px;
              line-height: 1.8;
            }
          }
        }
      }

      & > div:last-child {
        & > div:nth-child(2) {
          margin-bottom: 0;
        }
      }
    }
  }
  &.strabismusAmblyopiaNav-en {
    & > #kind {
      & > div:nth-child(2) {
        & > div {
          & > div:nth-child(1) {
            text-align: center;
          }
          & > div:nth-child(2) {
            & > div:nth-child(2) {
              & > div {
                & > div:nth-child(2) {
                  width: max-content;
                  min-width: 150px;
                  padding: 0 30px;
                  background-size: 100% 100%;
                }
              }
            }
          }
        }
      }
      & > div:nth-child(5) {
        & > div:nth-child(3) {
          & > div {
            max-width: calc(100% / 3);
          }
        }
      }
    }
    & > #amblyopia {
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          & > div {
            & > div:nth-child(2) {
              & > div:nth-child(1) {
                line-height: 1.2;
                font-size: 28px;
                text-align: center;
              }
            }
          }
        }
      }
    }
    & > #treat {
      & > div:nth-child(2) {
        padding: 100px 60px;
        line-height: 1.4;
      }
    }
  }
}

#curativeTime {
  max-width: 1020px;
  width: 1020px;
  margin: 82px auto 220px;
  width: 1020px;
  height: 357px;
  background: url('https://static.cmereye.com/imgs/2023/06/fa0a4822c27182ec.png')
    no-repeat;
  background-size: 100% 100%;

  & > div:nth-child(1) {
    font-family: 'NotoSansHK-Medium';
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 3.4;
    text-align: center;
    letter-spacing: 0px;
    color: #d37f66;
    padding-left: 15px;
  }

  & > div:nth-child(2) {
    margin-top: 90px;
    padding: 0 65px;
    line-height: 42px;
  }
  &.curativeTime-en {
    & > div:nth-child(1) {
      line-height: 1.4;
      width: 40%;
      margin: 0 auto;
      padding-top: 10px;
    }
    & > div:nth-child(2) {
      margin-top: 70px;
    }
  }
}

#bg_strabismusAmblyopia_nav {
  background: url('https://static.cmereye.com/imgs/2023/06/81b654ccb67fbf4f.png');
  width: 100%;
  height: 145px;
  margin-top: -50%;
}

.strabismusAmblyopia_text_p_span {
  font-family: 'Noto Sans HK';
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #515151;
}

.strabismusAmblyopia_title_text {
  font-family: 'NotoSansHK-Bold';
  font-size: 38px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 48px;
  letter-spacing: 0px;
  color: #d37f66;

  display: flex;
  flex-direction: row;
  justify-content: center;
}

.strabismusAmblyopia_title_btn {
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
  // text-shadow: 0 2px 5px #ffd6c1;
  text-shadow: 0 2px 5px rgba($color: #000000, $alpha: 0.5);
  &::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    bottom: -100%;
    right: -100%;
    background: linear-gradient(45deg, #acd9c2 0%, #2bbbec 100%);
    background-size: 100% 100%;
    animation: bgposition 5s infinite linear alternate;
    z-index: -1;
  }
}

// 下载
.dow {
  margin-top: 150px;
  margin-bottom: 233px;
  color: #fff;
  font-size: 30px;

  & > div:nth-child(1) {
    & > div {
      width: 62.5%;
      height: 202px;
      background: #fbbfa1;
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
}
@media screen and (max-width: 768px) {
  .strabismusAmblyopia-nav {
    margin-top: -100px;
  }
  .strabismusAmblyopia_nav {
    transform: scale(1);
    margin: 30px 0 0;
    & > #strabismus {
      width: calc(100% - 60px);
      margin: 0 auto 0;
      & > div:nth-child(2) {
        line-height: 1.8;
        & > p {
          margin-top: 25px;
        }
      }
    }
    & > #kind {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        margin-top: 45px;
        margin-bottom: 20px;
        & > div {
          & > div:nth-child(1) {
            width: 200px;
            height: 50px;
            font-size: 18px;
            background-size: 100% 100%;
          }
          & > div:nth-child(2) {
            margin-top: 20px;
            & > div:nth-child(1) {
              line-height: 1.8;
            }
            & > div:nth-child(2) {
              margin-top: 35px;
              flex-direction: column;
              padding: 0;
              & > div {
                display: flex;
                align-items: center;
                justify-content: space-around;
                margin-top: 0;
                margin-bottom: 50px;
                img {
                  width: 55%;
                }
                & > div:nth-child(2) {
                  width: 100px;
                  height: 35px;
                  border-radius: 45%;
                  margin: 0;
                  font-size: 16px;
                  line-height: 35px;
                }
              }
            }
          }
        }
        & > div:nth-child(2) {
          margin-top: 0;
        }
        & > div:nth-child(3) {
          margin-top: 30px;
          & > div:nth-child(1) {
            width: 250px;
            height: 50px;
            background-size: 100% 100%;
          }
          & > div:nth-child(2) {
            & > div:nth-child(2) {
              & > div {
                & > div:nth-child(2) {
                  background: url('https://static.cmereye.com/imgs/2023/06/71124468b48b8228.png');
                  background-size: 100% 100%;
                  border-radius: 0;
                  width: 130px;
                  height: 40px;
                }
              }
            }
          }
        }
      }
      & > div:nth-child(4) {
        width: 100%;
        height: auto;
        padding: 30px 20px;
        background: url('https://static.cmereye.com/imgs/2023/07/40cf5540e35a2cde.jpg');
        background-size: 100% 100%;
        transform: scale(1);
        margin: 50px 0 0;
        font-size: 15px;
        line-height: 1.8;
      }
      & > div:nth-child(5) {
        margin-top: 30px;
        & > div:nth-child(1) {
          width: 250px;
          height: 50px;
          background-size: 100% 100%;
          font-size: 18px;
          line-height: 50px;
        }
        & > div:nth-child(2) {
          margin-top: 25px;
          line-height: 1.6;
        }
        & > div:nth-child(3) {
          padding: 0;
          margin-top: 40px;
          & > div {
            width: calc(50% - 30px);
            margin-bottom: 40px;
            & > div:nth-child(2) {
              margin-top: 15px;
              p {
                display: inline;
              }
            }
          }
        }
      }
    }
    & > #cure {
      width: calc(100% - 60px);
      margin: 30px auto 0;
      & > div:nth-child(2) {
        margin-top: 35px;

        & > div {
          width: 100%;
          height: auto;
          border-radius: 20px;
          margin-bottom: 55px;
          padding-bottom: 0;
          & > div:nth-child(1) {
            border-radius: 15px 15px 0 0;
            height: 60px;
            font-size: 22px;
            background: #e9a98c;
          }
          & > div:nth-child(2) {
            padding: 25px;
            & > div:nth-child(1) {
              width: 100%;
              height: auto;
              margin-bottom: 20px;
              min-height: 110px;
              background: #f2f3f4;
            }
            & > div:nth-child(2) {
              line-height: 1.8;
            }
          }
        }
      }
    }
    & > #amblyopia {
      width: calc(100% - 60px);
      margin: 10px auto 0;
      & > div:nth-child(2) {
        margin: 25px 0 0;
        flex-direction: column;
        & > div:nth-child(1) {
          width: 100%;
          margin-bottom: 25px;
          & > img {
            width: 100%;
          }
        }
        & > div:nth-child(2) {
          width: 100%;
          line-height: 1.8;
          margin-left: 0;
        }
      }
      & > div:nth-child(3) {
        margin-top: 30px;
        & > div:nth-child(2) {
          margin: 35px auto 0;
          & > div {
            border: none;
            padding: 75px 0 0;
            position: relative;
            margin-bottom: 60px;
            & > div:nth-child(1) {
              flex: 1;
              margin-left: 18px;
              img {
                width: 100%;
              }
            }
            & > div:nth-child(2) {
              flex: 1.2;
              & > div:nth-child(1) {
                width: 180px;
                height: auto;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                background-size: 100% 100%;
                font-size: 18px;
                line-height: 45px;
                height: 45px;
              }
              & > div:nth-child(2) {
                line-height: 1.8;
              }
            }
          }
          & > div:nth-child(2),
          & > div:nth-child(3),
          & > div:nth-child(4) {
            & > div:nth-child(2) {
              & > div:nth-child(1) {
                width: 100%;
                height: 45px;
                line-height: 45px;
                background-size: 100% 100%;
              }
            }
          }
          & > div:nth-child(2),
          & > div:nth-child(4) {
            & > div:nth-child(1) {
              margin-right: 18px;
              margin-left: 0;
            }
          }
        }
      }
    }
    & > #treat {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        background: url('https://static.cmereye.com/imgs/2023/07/24a18c74e1189515.jpg');
        background-size: 100% auto;
        background-repeat: no-repeat;
        width: 100%;
        padding: 46px 25px;
        line-height: 1.8;
        margin: 25px 0 0;
        height: auto;
        & > p {
          margin-bottom: 20px;
        }
      }
      & > div:nth-child(3) {
        & > div {
          & > div:nth-child(1) {
            align-items: center;
            padding-bottom: 0;
            width: 100%;
            img {
              width: 30px;
              min-width: 30px;
              height: 21px;
            }
            & > div:nth-child(2) {
              font-size: 18px;
            }
          }
          & > div:nth-child(1)::after {
            width: 62.5vw;
            left: auto;
            right: 0;
          }
          & > div:nth-child(2) {
            margin: 25px auto 55px;
            align-items: flex-start;
            & > div:nth-child(2) {
              width: 100%;
              margin-left: 20px;
              & > p {
                margin-bottom: 0;
                &:not(:first-child) {
                  margin-top: 15px;
                }
              }
            }
          }
        }
      }
    }
    &.strabismusAmblyopiaNav-en {
      & > #kind {
        & > div:nth-child(2) {
          & > div {
            & > div:nth-child(1) {
              line-height: 1.2;
            }
            & > div:nth-child(2) {
              & > div:nth-child(2) {
                & > div {
                  & > div:nth-child(2) {
                    width: 100px;
                    line-height: 1.6;
                    padding: 0;
                    min-width: auto;
                    line-height: 1;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
        & > div:nth-child(5) {
          & > div:nth-child(1) {
            line-height: 1.4;
            text-align: center;
          }
          & > div:nth-child(3) {
            & > div {
              max-width: calc(100% / 2);
            }
          }
        }
      }
      & > #amblyopia {
        & > div:nth-child(3) {
          & > div:nth-child(2) {
            & > div {
              & > div:nth-child(2) {
                & > div:nth-child(1) {
                  font-size: 18px;
                  line-height: 1.2;
                }
              }
            }
          }
        }
      }
      & > #treat {
        & > div:nth-child(2) {
          padding: 30px 25px;
          & > p {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  #curativeTime {
    width: calc(100% - 60px);
    margin: 70px auto 0;
    background: url('https://static.cmereye.com/imgs/2023/07/a5064687f337bf13.jpg');
    background-repeat: no-repeat;
    background-size: 100% auto;
    height: auto;
    padding-bottom: 50px;
    & > div:nth-child(1) {
      font-size: 18px;
      line-height: 1.6;
      padding-left: 0;
      padding-top: 10px;
    }
    & > div:nth-child(2) {
      margin-top: 40px;
      padding: 0 25px;
      line-height: 1.8;
    }
    &.curativeTime-en {
      & > div:nth-child(1) {
        line-height: 1.4;
        width: 60%;
        margin: 0 auto;
        padding-top: 0;
        font-size: 16px;
      }
      & > div:nth-child(2) {
        margin-top: 20px;
        line-height: 1.2;
      }
    }
  }
  #bg_strabismusAmblyopia_nav {
    margin-top: 70px;
    width: 100%;
    background-size: 100% auto;
    background-repeat: no-repeat;
    height: auto;
    min-height: 35px;
  }
  .strabismusAmblyopia_title_btn {
    margin-top: 30px;
    width: max-content;
    height: 70px;
    font-size: 16px;
    line-height: 1.6;
    padding: 5px 40px;
  }
  .strabismusAmblyopia_title_text {
    font-size: 24px;
  }
  .strabismusAmblyopia_text_p_span {
    font-size: 14px;
    line-height: 1.8;
  }
  .dow {
    margin-top: 100px;
    margin-bottom: 150px;
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
@media screen and (min-width: 1980px) {
  .strabismusAmblyopia_nav {
    & > #cure {
      & > div:nth-child(2) {
        & > div {
          width: 575px;
          & > div:nth-child(2) {
            & > div:nth-child(1) {
              width: 480px;
            }
            & > div:nth-child(2) {
              line-height: 46px;
              font-size: 22px;
              text-align: justify;
            }
          }
        }
      }
    }
    & > #treat {
      & > div:nth-child(2) {
        background-size: 100%;
        transform: scale(0.85);
        margin-left: -5%;
      }
    }
  }
  #bg_strabismusAmblyopia_nav {
    margin-top: -25%;
  }
  .dow {
    margin-top: 150px;
    margin-bottom: 233px;
    color: #fff;
    font-size: 30px;
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

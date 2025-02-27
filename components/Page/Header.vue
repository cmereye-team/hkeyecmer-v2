<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { availableLocales } from '~/utils/lang'
const route = useRoute()
const { t } = useLang()

useHead({
  // script: [
  //   {
  //     src: 'https://cdn.userway.org/widget.js',
  //     'data-account': 'eSwu5OqOdn',
  //   },
  // ],
})

const locale = useState<string>('locale.setting')

const menus = computed(() => {
  return [
    {
      type: 'link',
      text: t('pages.index.home'),
      link: '/',
      childMenuList: [],
    },
    {
      type: 'link',
      text: t('pages.about_us.about_us'),
      link: '/about-us', // 关于我们
      childMenuList: [
        {
          type: 'link',
          text: t('pages.about_us.center_profile'),
          link: { path: '/about-us', hash: '#centreIntro' },
        },
        {
          type: 'link', // 发展历程
          text: t('pages.about_us.development_course'),
          link: { path: '/about-us', hash: '#history' },
        },
        {
          type: 'link',
          text: t('pages.about_us.enterprise_vision'),
          link: { path: '/about-us', hash: '#corporate' },
        },
        {
          type: 'link',
          text: t('pages.about_us.equipment_centre'),
          link: { path: '/about-us', hash: '#medicalEquipment' },
        },
        {
          type: 'link',
          text: t('pages.about_us.feedback'),
          link: { path: '/about-us', hash: '#feedback' },
        },
        {
          type: 'link',
          text: t('pages.about_us.enterprise_vision'),
          link: { path: '/about-us', hash: '#awards' },
        },
      ],
    },
    {
      type: 'link',
      text: t('pages.medical_team.medical_team'),
      link: { path: '/medical-team' }, // 醫療團隊
      childMenuList: [],
    },
    {
      type: 'link',
      text: t('pages.medical_service.cataract.cataract'),
      link: { path: '/medical-service/cataract' }, // 白内障
      childMenuList: [
        {
          type: 'link',
          text: t('pages.medical_service.cataract.cataract_title'),
          link: { path: '/medical-service/cataract' },
        },
      ],
    },
    {
      type: 'link',
      text: t('pages.medical_service.medical_service'),
      link: { path: '/medical-service' }, // 醫療服務
      childMenuList: [
        // {
        //   type: 'link',
        //   text: t('pages.medical_service.cataract'),
        //   link: { path: '/medical-service/cataract' },
        // },
        {
          type: 'link',
          text: t('pages.medical_service.maculopathy'),
          link: { path: '/medical-service/maculopathy' },
        },
        {
          type: 'link',
          text: t('pages.medical_service.muscae_volitantes'),
          link: { path: '/medical-service/muscaeVolitantes' },
        },
        {
          type: 'link', // 視網膜脫落
          text: t('pages.medical_service.amotioRetinae'),
          link: { path: '/medical-service/amotioRetinae' },
        },
        {
          type: 'link',
          text: t('pages.medical_service.glaucoma'),
          link: { path: '/medical-service/glaucoma' },
        },
        {
          type: 'link',
          text: t('pages.medical_service.conjunctivitis'),
          link: { path: '/medical-service/conjunctivitis' },
        },
        {
          type: 'link',
          text: t('pages.medical_service.xerophthalmia'),
          link: { path: '/medical-service/xerophthalmia' },
        },
        {
          type: 'link', // 眼表及角膜疾病
          text: t('pages.medical_service.ocularSurfaceDiseases'),
          link: { path: '/medical-service/ocularSurfaceDiseases' },
        },
        {
          type: 'link', // 兒童斜弱視
          text: t('pages.medical_service.strabismusAmblyopia'),
          link: { path: '/medical-service/strabismusAmblyopia' },
        },
        {
          type: 'link', // 阿托品滴眼液
          text: t('pages.medical_service.atropine'),
          link: { path: '/medical-service/atropine' },
        },
        {
          type: 'link', // 眼矯形及眼眶疾病
          text: t('pages.medical_service.eyeOrthopaedicDisease'),
          link: { path: '/medical-service/eyeOrthopaedicDisease' },
        },
        {
          type: 'link', // 醫學驗光配鏡
          text: t('pages.medical_service.medicalOptometry'),
          link: { path: '/medical-service/medicalOptometry' },
        },
        {
          type: 'toPage',
          text: t('pages.medical_service.smileHk'),
          link: 'https://smile.hkcmereye.com/',
        },
      ],
    },
    {
      type: 'link', // 眼科資訊
      text: t('pages.ophthalmic_information.ophthalmic_information'),
      link: { path: '/ophthalmic-information' },
      childMenuList: [
        {
          type: 'link', // 医生小课堂
          text: t('pages.ophthalmic_information.ophthalmic_class'),
          link: { path: '/ophthalmic-information' },
        },
        {
          type: 'link', // 護眼宣傳片
          text: t('pages.ophthalmic_information.ophthalmic_publicity'),
          link: { path: '/ophthalmic-information/publicity' },
        },
        {
          type: 'link', // 希瑪小劇場
          text: t('pages.ophthalmic_information.ophthalmic_little_theatre'),
          link: { path: '/ophthalmic-information/littleTheatre' },
        },
        {
          type: 'link', // 文章推薦
          text: t('pages.ophthalmic_information.ophthalmic_press'),
          link: { path: '/ophthalmic-information/press' },
        },
        {
          type: 'link', // 文章推薦
          text: t('pages.ophthalmic_information.ophthalmic_article'),
          link: { path: '/ophthalmic-information/article' },
        },
        {
          type: 'link', // 健康資訊
          text: t('pages.ophthalmic_information.ophthalmic_message'),
          link: { path: '/ophthalmic-information/healthInfo' },
        },
        {
          type: 'link',
          text: t('pages.ophthalmic_information.ophthalmic_eyesight'),
          link: { path: '/ophthalmic-information/eyesight' },
        },
      ],
    },
    {
      type: 'link',
      text: t('pages.process_cost.process_cost'),
      link: { path: '/process-and-cost' },
      childMenuList: [
        {
          type: 'link', // 費用一覽
          text: t('pages.process_cost.cost'),
          link: { path: '/process-and-cost', hash: '#cost' },
        },
        {
          type: 'link', // 就診流程
          text: t('pages.process_cost.process'),
          link: { path: '/process-and-cost', hash: '#processed' },
        },
      ],
    },
    {
      type: 'link',
      text: t('pages.talent_recruitment.talent_recruitment'),
      link: { path: '/talent-recruitment' },
      childMenuList: [],
    },
    {
      type: 'link',
      text: t('pages.contact_us.contact_us'),
      link: { path: '/contact-us' },
      childMenuList: [
        {
          type: 'link', // 診所資料
          text: t('pages.contact_us.clinic_information'),
          link: { path: '/contact-us' },
        },
        {
          type: 'link', // 電子預約表格
          text: t('pages.contact_us.appointmentForm'),
          link: { path: '/contact-us/appointmentForm' },
        },
      ],
    },
  ]
})

const router = useRouter()
const toIndex = () => {
  router.push({
    path: '/',
  })
  menuBool.value = false
}

const toLinks = (data: any) => {
  if (data.type === 'toPage') {
    location.href = data.link || ''
  } else {
    router.push(data.link || { path: '' })
    menuBool.value = false
  }
}

let menuBool = ref(false)
const handleMuenBtn = () => {
  menuBool.value = !menuBool.value
}

const imgLists = [
  {
    type: 'link',
    link: 'https://www.facebook.com/cmereyecenter/',
  },
  {
    type: 'link',
    link: 'https://www.instagram.com/cmer_eye_center/',
  },
  {
    type: 'link',
    link: 'https://www.youtube.com/channel/UCkYbtBhKYc8XyrgG7SAFzRg',
  },
  {
    type: 'drawer',
    link: '',
  },
  {
    type: 'link',
    link: 'https://weibo.com/u/7083441648?refer_flag=1001030103_&is_all=1',
  },
]

let newMenus: any = computed(() => {
  if (locale.value === 'en') {
    let a: any = JSON.parse(JSON.stringify(menus.value))
    a.splice(4, 1)
    return a
  }
  return JSON.parse(JSON.stringify(menus.value))
})

const handleToLinks = (_link: any) => {
  location.href = _link
}

const handleImgLists = (_link: any) => {
  if (_link.type === 'drawer') {
    drawer.value = true
  } else {
    location.href = _link.link
  }
}
let drawer = ref(false)
const serciceLists = [
  'medical-service-cataract',
  'medical-service-glaucoma',
  'medical-service-xerophthalmia',
  'medical-service-muscaeVolitantes',
  'medical-service-conjunctivitis',
  'medical-service-maculopathy',
  'medical-service-strabismusAmblyopia',
  'medical-service-amotioRetinae',
  'medical-service-ocularSurfaceDiseases',
  'medical-service-ocularSurfaceDiseases',
  'medical-service-eyeOrthopaedicDisease',
  'medical-service-medicalOptometry',
  'medical-service-atropine',
]

watch(menuBool, (o, n) => {
  var a: any = document.getElementById('userwayAccessibilityIcon') || {
    style: { display: 'none' },
  }
  a.style.display = n ? 'none' : 'block'
  var b: any = document.getElementById('mbFooterTop')
  let routeName: any = route.name
  if (route.name === 'index') {
  } else if (serciceLists.includes(routeName)) {
  } else {
    b.style.display = n ? 'block' : 'none'
  }
})

const getBg = () => {
  // let routeName: any = route.name
  let str = ''
  // if (route.name === 'index' && !menuBool.value) {
  //   str =
  //     'linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.3) 30%,rgba(255, 255, 255, 0.4) 50%,rgba(255, 255, 255, 0.3) 70%,rgba(255, 255, 255, 0))'
  // } else if (serciceLists.includes(routeName) && !menuBool.value) {
  //   str = 'rgba(255, 255, 255, 0)'
  // } else {
  //   str = '#fff'
  // }
  str = '#fff'
  return str
}
const getBb = () => {
  let str = ''
  let routeName: any = route.name
  if (route.name === 'index' || menuBool.value) {
    str = 'none'
  } else if (serciceLists.includes(routeName) || menuBool.value) {
    str = 'none'
  } else {
    str = '4px solid rgba(242, 242, 242, 1)'
  }
  return str
}
const changeLang = (_lang: any) => {
  locale.value = _lang
}
</script>

<template>
  <div class="mbHeader">
    <div
      class="mbHeader-in"
      :style="{
        background: getBg(),
        'border-bottom': getBb(),
      }"
    >
      <div class="mbHeader-in-logo" @click="toIndex"></div>
      <div class="mbHeader-in-rightBtn">
        <div class="imgLists">
          <div v-for="(iconItem, iconIndex) in imgLists" :key="iconIndex">
            <div
              class="w-full h-full"
              @click="handleImgLists(iconItem)"
              v-if="iconItem.type === 'drawer'"
            ></div>
            <a class="w-full h-full" v-else :href="iconItem.link"></a>
          </div>
        </div>
        <div
          class="mbHeader-in-muenBtn"
          :style="{
            background: menuBool
              ? 'url(https://static.cmereye.com/imgs/2023/06/6ab28f9f4a11845b.png)no-repeat center'
              : 'url(https://static.cmereye.com/imgs/2023/06/685b262802c0bdf1.png)no-repeat center',
          }"
          @click.stop="handleMuenBtn"
        ></div>
      </div>
    </div>
    <transition name="ddd">
      <div class="mbHeader-content" v-show="menuBool">
        <client-only>
          <el-menu
            default-active="2"
            unique-opened
            class="el-menu-vertical-demo"
          >
            <section
              v-for="(menusItem, menusIndex) in newMenus"
              :key="menusIndex"
            >
              <el-sub-menu
                v-if="menusItem.childMenuList.length"
                :index="String(menusIndex)"
              >
                <template #title>{{ menusItem.text }}</template>
                <el-menu-item
                  v-for="(childItem, childIndex) in menusItem.childMenuList"
                  :key="`${menusIndex}-${childIndex}`"
                  :index="`${menusIndex}-${childIndex}`"
                  @click="toLinks(childItem)"
                >
                  {{ childItem.text }}
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item
                v-else
                :index="String(menusIndex)"
                @click="toLinks(menusItem)"
              >
                <span>{{ menusItem.text }}</span>
              </el-menu-item>
            </section>
            <section>
              <el-sub-menu :index="'8'">
                <template #title>Languages</template>
                <el-menu-item
                  v-for="lang in availableLocales"
                  :key="lang.iso"
                  @click="changeLang(lang.iso)"
                >
                  {{ lang.name }}
                </el-menu-item>
              </el-sub-menu>
            </section>
          </el-menu>
        </client-only>
        <div class="mbHeader-content-btn">
          <a href="tel: +852 3956 2025" id="mbHeader-content-btn">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect width="12" height="12" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_2197_549"
                    transform="scale(0.0833333)"
                  />
                </pattern>
                <image
                  id="image0_2197_549"
                  width="12"
                  height="12"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABHNCSVQICAgIfAhkiAAAAL9JREFUKFNj/P//PwMQ9AFxJBDfBWJbIAYLYgOMQA29QIkiJMlAIHsDPg3fgZIcSArWAdnB+DT8BEqyoSlgBfL/4HLSWaCEEVTyE5BuAOKJQPwPl4ZUoMQsqOQ5IG2MyzkgcZCnQfQzIJYEYhAnHIhX4/MDSM4ciE8gKTIFss/gchJMvBTI6IJyQO6PAGJQiE0GYhsgBvn1CMxJME39QEYBksmPgWxZZJvQNYDkGoC4npAf0OU9gQIdQKyIJvEZAIEAQi93YCN3AAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
            <span>
              {{ $t('components.content.onlinContact.callNow') }}（852）3956
              2025
            </span>
          </a>
        </div>
      </div>
    </transition>
    <div class="hh">
      <client-only>
        <el-drawer v-model="drawer" size="50%" :direction="'btt'">
          <div class="drawerIn">
            <img
              src="https://static.cmereye.com/imgs/2023/05/12bb443b3f92a0d8.jpg"
              alt="微信QR"
              srcset=""
            />
          </div>
        </el-drawer>
      </client-only>
    </div>
  </div>
</template>
<style lang="scss">
// @media screen and (max-width: 768px) {
//   body .uwy.userway_p3 .uai {
//     bottom: 165px !important;
//     display: none;
//   }
//   body .uwy .uai {
//     width: 54px !important;
//     max-width: 54px !important;
//     height: 54px !important;
//     max-height: 54px !important;
//   }
//   .uwy .uai img:not(.check_on),
//   body .uwy .uai img:not(.check_on) {
//     width: 54px !important;
//     height: 54px !important;
//   }
// }
.ddd-enter,
.ddd-leave-to {
  opacity: 0;
}
.ddd-enter-active,
.ddd-leave-active {
  transition: all 0.5s linear;
}
.ddd-enter-to,
.ddd-leave {
  opacity: 1;
}
.mbHeader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 999;
  &-in {
    width: 100%;
    transition: all 0.3s;
    padding: 19px 26px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-logo {
      width: 69px;
      min-width: 69px;
      height: 36px;
      background: url(https://static.cmereye.com/imgs/2023/06/a05a8310283f5a06.png)
        no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
    &-rightBtn {
      display: flex;
    }
    &-muenBtn {
      width: 36px;
      height: 36px;
      transition: all 0.3s;
      background-size: 100% 100%;
      cursor: pointer;
    }
  }
  &-content {
    background: #f2f2f2;
    width: 100%;
    height: calc(100vh - 74px);
    overflow: hidden;
    overflow-y: auto;
    padding: 0 9px 100px;
    &-btn {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      & > a {
        background: #2958a3;
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border-radius: 10px;
        span {
          margin-left: 5px;
          color: #fff;
        }
      }
    }
  }
}
// :deep(.el-menu) {
//   background-color: #f2f2f2;
//   border-right: none;
// }
// :deep(.el-sub-menu) {
//   border-bottom: 1px solid #dcdcdc;
// }
// :deep(.el-menu > section > .el-menu-item) {
//   border-bottom: 1px solid #dcdcdc;
// }
// :deep(.el-menu-item) {
//   color: #2958a3;
//   font-size: 16px;
//   padding: 0 20px !important;
// }
// :deep(.el-sub-menu__title) {
//   color: #2958a3;
//   font-size: 16px;
// }
:deep(.el-menu) {
  background-color: #f2f2f2 !important;
  border-right: none !important;
}
:deep(.el-sub-menu) {
  border-bottom: 1px solid #dcdcdc !important;
}
:deep(.el-menu > section > .el-menu-item) {
  border-bottom: 1px solid #dcdcdc !important;
}
:deep(.el-menu-item) {
  color: #2958a3 !important;
  font-size: 16px !important;
  padding: 0 20px !important;
}
:deep(.el-sub-menu__title) {
  color: #2958a3 !important;
  font-size: 16px !important;
}
.imgLists {
  display: flex;
  justify-content: center;
  margin: 10px 40px 10px 0;
  & > div {
    width: 15px;
    height: 15px;
    & > div,
    & > a {
      background-image: url(https://static.cmereye.com/imgs/2023/07/6cc1329d65ca32ae.png);
      background-repeat: no-repeat;
      background-position: 5px 0;
      background-size: cover;
      display: block;
    }
    &:nth-of-type(2) > a {
      background-position: -27px 0;
    }
    &:nth-of-type(3) > a {
      background-position: -58px 0;
    }
    &:nth-of-type(4) > div {
      background-position: -92px 0;
    }
    &:nth-of-type(5) > a {
      background-position: -125.5px 0;
    }
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
}
.drawerIn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 100px;
}
</style>

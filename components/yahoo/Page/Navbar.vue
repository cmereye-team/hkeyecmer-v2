<script setup lang="ts">
import { AppConfigInput } from '@nuxt/schema'

export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
  childMenuList?: any
}

const { t } = useLang()
const app = useAppConfig() as AppConfigInput
let menus = computed((): IMenuItem[] => [
  {
    type: 'link',
    text: t('pages.index.home'),
    route: { path: '/yahoo' }, // 首页
  },
  {
    type: 'link',
    text: t('pages.about_us.about_us'),
    route: { path: '/yahoo/about-us' }, // 关于我们
    childMenuList: [
      {
        type: 'link',
        text: t('pages.about_us.center_profile'),
        route: { path: '/yahoo/about-us', hash: '#centreIntro' },
      },
      {
        type: 'link', // 发展历程
        text: t('pages.about_us.development_course'),
        route: { path: '/yahoo/about-us', hash: '#history' },
      },
      {
        type: 'link',
        text: t('pages.about_us.enterprise_vision'),
        route: { path: '/yahoo/about-us', hash: '#corporate' },
      },
      {
        type: 'link',
        text: t('pages.about_us.equipment_centre'),
        route: { path: '/yahoo/about-us', hash: '#medicalEquipment' },
      },
      {
        type: 'link',
        text: t('pages.about_us.feedback'),
        route: { path: '/yahoo/about-us', hash: '#feedback' },
      },
      {
        type: 'link',
        text: t('pages.about_us.enterprise_awards'),
        route: { path: '/yahoo/about-us', hash: '#awards' },
      },
    ],
  },
  {
    type: 'link',
    text: t('pages.medical_team.medical_team'),
    route: { path: '/yahoo/medical-team' }, // 醫療團隊
  },
  {
    type: 'link',
    text: t('pages.medical_service.medical_service'),
    route: { path: '/yahoo/medical-service' }, // 醫療服務
    childMenuList: [
      {
        type: 'link',
        text: t('pages.medical_service.cataract.cataract'),
        route: { path: '/yahoo/medical-service/cataract' }, // 白內障
      },
      {
        type: 'link',
        text: t('pages.medical_service.maculopathy'),
        route: { path: '/yahoo/medical-service/maculopathy' },
      },
      {
        type: 'link',
        text: t('pages.medical_service.muscae_volitantes'),
        route: { path: '/yahoo/medical-service/muscaeVolitantes' },
      },
      {
        type: 'link', // 視網膜脫落
        text: t('pages.medical_service.amotioRetinae'),
        route: { path: '/yahoo/medical-service/amotioRetinae' },
      },
      {
        type: 'link',
        text: t('pages.medical_service.glaucoma'),
        route: { path: '/yahoo/medical-service/glaucoma' },
      },
      {
        type: 'link',
        text: t('pages.medical_service.conjunctivitis'),
        route: { path: '/yahoo/medical-service/conjunctivitis' }, // 結膜炎
      },
      {
        type: 'link',
        text: t('pages.medical_service.xerophthalmia'),
        route: { path: '/yahoo/medical-service/xerophthalmia' },
      },
      {
        type: 'link', // 眼表及角膜疾病
        text: t('pages.medical_service.ocularSurfaceDiseases'),
        route: { path: '/yahoo/medical-service/ocularSurfaceDiseases' },
      },
      {
        type: 'link', // 兒童斜弱視
        text: t('pages.medical_service.strabismusAmblyopia'),
        route: { path: '/yahoo/medical-service/strabismusAmblyopia' },
      },
      {
        type: 'link', // 阿托品滴眼液
        text: t('pages.medical_service.atropine'),
        route: { path: '/yahoo/medical-service/atropine' },
      },
      {
        type: 'link', // 眼矯形及眼眶疾病
        text: t('pages.medical_service.eyeOrthopaedicDisease'),
        route: { path: '/yahoo/medical-service/eyeOrthopaedicDisease' },
      },
      {
        type: 'link', // 醫學驗光配鏡
        text: t('pages.medical_service.medicalOptometry'),
        route: { path: '/yahoo/medical-service/medicalOptometry' },
      },
      {
        type: 'link', // 眼矯形及眼眶疾病
        text: t('pages.medical_service.smileHk'),
        route: false,
        href: 'https://smile.hkcmereye.com/',
      },
    ],
  },
  {
    type: 'link', // ophthalmic_information 眼科資訊
    text: t('pages.ophthalmic_information.ophthalmic_information'),
    route: { path: '/yahoo/ophthalmic-information' },
    childMenuList: [
      {
        type: 'link', // 医生小课堂
        text: t('pages.ophthalmic_information.ophthalmic_class'),
        route: { path: '/yahoo/ophthalmic-information' },
      },
      {
        type: 'link', // 護眼宣傳片
        text: t('pages.ophthalmic_information.ophthalmic_publicity'),
        route: { path: '/yahoo/ophthalmic-information/publicity' },
      },
      {
        type: 'link',
         text: t('pages.ophthalmic_information.ophthalmic_eyesight'),
        route: { path: '/yahoo/ophthalmic-information/eyesight' },
      },
      {
        type: 'link', // 希瑪小劇場
        text: t('pages.ophthalmic_information.ophthalmic_little_theatre'),
        route: { path: '/yahoo/ophthalmic-information/littleTheatre' },
      },
      {
        type: 'link', // 新闻资讯
        text: t('pages.ophthalmic_information.ophthalmic_press'),
        route: { path: '/yahoo/ophthalmic-information/press' },
      },
      {
        type: 'link', // 文章推薦
        text: t('pages.ophthalmic_information.ophthalmic_article'),
        route: { path: '/yahoo/ophthalmic-information/article' },
      },
      {
        type: 'link', // 健康資訊
        text: t('pages.ophthalmic_information.ophthalmic_message'),
        route: { path: '/yahoo/ophthalmic-information/healthInfo' },
      },
    ],
  },
  {
    type: 'link',
    text: t('pages.process_cost.process_cost'),
    route: { path: '/yahoo/process-and-cost' },
    childMenuList: [
      {
        type: 'link', // 費用一覽
        text: t('pages.process_cost.cost'),
        route: { path: '/yahoo/process-and-cost', hash: '#cost' },
      },
      {
        type: 'link', // 就診流程
        text: t('pages.process_cost.process'),
        route: { path: '/yahoo/process-and-cost', hash: '#processed' },
      },
    ],
  },
  {
    type: 'link',
    text: t('pages.talent_recruitment.talent_recruitment'),
    route: { path: '/yahoo/talent-recruitment' },
  },
  {
    type: 'link',
    text: t('pages.contact_us.contact_us'),
    route: { path: '/yahoo/contact-us' },
    childMenuList: [
      {
        type: 'link', // 診所資料
        text: t('pages.contact_us.clinic_information'),
        route: { path: '/yahoo/contact-us' },
      },
      {
        type: 'link',
        text: t('pages.about_us.feedback'),
        route: { path: '/yahoo/contact-us', hash: '#feedback' },
      },
      {
        type: 'link', // 電子預約表格
        text: t('pages.contact_us.appointmentForm'),
        route: { path: '/yahoo/contact-us/appointmentForm' },
      },
    ],
  },
])

const locale = useState<string>('locale.setting')

const newMenus = computed(() => {
  if (locale.value === 'en') {
    let a: any = JSON.parse(JSON.stringify(menus.value))
    a.splice(4, 1)
    return a
  }
  return JSON.parse(JSON.stringify(menus.value))
})

const route = useRoute()
const rt = ref(route)

const hashActive = (child: any) => {
  if (
    rt.value.name === child.route.name ||
    rt.value.path === child.route.path
  ) {
    if (child.route.hash) {
      if (child.route.hash === rt.value.hash) {
        return 'activeHash'
      } else {
        return ''
      }
    } else {
      return 'activeHash'
    }
  }
}
</script>

<template>
  <div class="headerTemPage">
    <yahooBuilderNavbar>
      <template #menu>
        <div class="navigtion">
          <div
            v-for="(item, itemIndex) in newMenus"
            :key="itemIndex"
            class="hover:bg-red-901 hover:text-while"
          >
            <yahooAnchor
              v-if="item.type === 'link'"
              :to="item.route ? item.route : undefined"
              :href="item.href ? item.href : undefined"
              class="hover:no-underline fatherBg"
              >{{ item.text }}</yahooAnchor
            >
            <div
              v-if="item.childMenuList && item.childMenuList.length"
              :class="[
                'childpage',
                {
                  ccccc: item.route.name === 'medical-service',
                },
                {
                  child_en: locale === 'en',
                },
              ]"
            >
              <div v-for="(child, i) in item.childMenuList" :key="i">
                <yahooAnchor
                  v-if="child.type === 'link'"
                  :to="child.route ? child.route : undefined"
                  :href="child.href ? child.href : undefined"
                  class="hover:no-underline"
                  :class="hashActive(child)"
                  >{{ child.text }}</yahooAnchor
                >
              </div>
            </div>
          </div>
        </div>
      </template>
    </yahooBuilderNavbar>
  </div>
</template>
<style lang="scss" scoped>
.fatherBg.router-link-active {
  font-weight: bold;
  background: #ffa88c;
  width: 100%;
  height: 100%;
  line-height: 3.5;
  color: #ffffff;
}

.activeHash {
  font-weight: bold;
  background: #ffa88c;
  width: 100%;
  height: 100%;
  line-height: 3.5;
  color: #ffffff;
}

a {
  width: 100%;
  height: 100%;
  line-height: 3.5;
}

.headerTem {
  z-index: 999;
  position: fixed; // 记得改为 fixed
  top: 54px;
  left: 10.0305%;
  background: #ffffffbf;
  transition: all 1s;
  .navigtion {
    & > div {
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 35px;
      /* identical to box height, or 250% */

      text-align: center;
      letter-spacing: 0.05em;

      color: #2958a3;

      width: 130px;
      height: 49px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    a.router-link-exact-active {
      color: #ffffff;
      background: #ffa88c;
    }

    & > div::after {
      position: absolute;
      top: 0;
      content: '';
      width: 76px;
      border-bottom: 0.75px solid #2958a3;
    }

    & > div:nth-child(1)::after {
      content: '';
      width: 0;
      border: 0;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.headerTemPage {
  z-index: 999;
  position: fixed; // 记得改为 fixed
  top: 54px;
  left: 10.0305%;
  background: #2958a3;
  transition: all 1s;
  .navigtion {
    & > div {
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 35px;
      /* identical to box height, or 250% */

      text-align: center;
      letter-spacing: 0.05em;

      color: #ffffff;

      width: 130px;
      height: 49px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      a.router-link-exact-active {
        color: #ffffff;
      }
    }

    & > div::after {
      position: absolute;
      top: 0;
      content: '';
      width: 76px;
      border-bottom: 0.75px solid #ffffff;
    }

    & > div:nth-child(1)::after {
      content: '';
      width: 0;
      border: 0;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.headerTemService {
  z-index: 999;
  position: fixed;
  top: 54px;
  left: 22.4375%;
  background: #2958a3;

  .navigtion {
    & > div {
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 35px;
      /* identical to box height, or 250% */

      text-align: center;
      letter-spacing: 0.05em;

      color: #ffffff;

      width: 130px;
      height: 49px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    & > div::after {
      position: absolute;
      top: 0;
      content: '';
      width: 76px;
      border-bottom: 0.75px solid #ffffff;
    }

    & > div:nth-child(1)::after {
      content: '';
      width: 0;
      border: 0;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.headerTemTalent {
  z-index: 999;
  position: fixed;
  top: 50px;
  left: 350px;
  background: #2958a3;

  .navigtion {
    & > div {
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 35px;
      /* identical to box height, or 250% */

      text-align: center;
      letter-spacing: 0.05em;

      color: #ffffff;

      width: 130px;
      height: 49px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    & > div::after {
      position: absolute;
      top: 0;
      content: '';
      width: 76px;
      border-bottom: 0.75px solid #ffffff;
    }

    & > div:nth-child(1)::after {
      content: '';
      width: 0;
      border: 0;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.headerTemOphthalmic {
  z-index: 999;
  position: fixed;
  top: 54px;
  left: 350px;
  background: #2958a3;

  .navigtion {
    & > div {
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 35px;
      /* identical to box height, or 250% */

      text-align: center;
      letter-spacing: 0.05em;

      color: #ffffff;

      width: 130px;
      height: 49px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    & > div::after {
      position: absolute;
      top: 0;
      content: '';
      width: 76px;
      border-bottom: 0.75px solid #ffffff;
    }

    & > div:nth-child(1)::after {
      content: '';
      width: 0;
      border: 0;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.headerTemDisclaimer {
  z-index: 999;
  position: fixed;
  top: 50px;
  left: 300px;
  background: #2958a3;

  .navigtion {
    & > div {
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 35px;
      /* identical to box height, or 250% */

      text-align: center;
      letter-spacing: 0.05em;

      color: #ffffff;

      width: 130px;
      height: 49px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    & > div::after {
      position: absolute;
      top: 0;
      content: '';
      width: 76px;
      border-bottom: 0.75px solid #ffffff;
    }

    & > div:nth-child(1)::after {
      content: '';
      width: 0;
      border: 0;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.child {
  background: #ffffffbf;
  width: 130px;
  position: absolute;
  right: -130px;
  top: 0;

  & > div {
    font-family: 'Noto Sans HK';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 50px;
    /* identical to box height, or 250% */
    text-align: center;
    letter-spacing: 0.05em;

    color: #2958a3;
    display: flex;
    align-items: center;
    justify-content: center;

    a.router-link-exact-active {
      color: #ffffff;
    }
  }

  & > div > a::after {
    position: absolute;
    left: 26px;
    content: '';
    width: 76px;
    margin-top: -1px;
    border: 0.75px solid #2958a3;
  }

  & > div:nth-child(1) > a::after {
    content: '';
    width: 0;
    border: 0;
  }

  & > div:hover {
    // background: #ffffff80;
    background: #ffa88c;
  }
}

.childpage {
  background: rgba(41, 88, 163, 1);
  width: 130px;
  position: absolute;
  right: -130px;
  top: 0;
  opacity: 82%;
  & > div {
    // height: 49px;
    font-family: 'Noto Sans HK';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 50px;
    /* identical to box height, or 250% */
    text-align: center;
    letter-spacing: 0.05em;

    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;

    a.router-link-exact-active {
      color: #ffffff;
    }
  }

  & > div > a::after {
    position: absolute;
    left: 26px;
    content: '';
    width: 76px;
    margin-top: -1px;
    border: 0.75px solid #8ad8dd;
  }

  & > div:nth-child(1) > a::after {
    content: '';
    width: 0;
    border: 0;
  }

  & > div:hover {
    background: #ffffff80;
  }
}

.child_en {
  &.ccccc {
    & > div {
      height: 70px;
    }
  }
  & > div {
    position: relative;
    height: 50px;
    & > a {
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1.2;
    }
  }
  & > div > a::after {
    top: 0;
  }
}

.ccccc {
  width: 390px;
  right: 0;
  left: 130px;
  // display: flex;
  // flex-wrap: wrap;

  & > div {
    width: 130px;
    float: left;
    position: relative;
  }
  & > div > a::after {
    position: absolute;
    left: 26px;
    content: '';
    width: 76px;
    margin-top: -1px;
    border: 0.75px solid #8ad8dd;
    top: auto;
    bottom: 0;
  }
  & > div:nth-child(1) > a::after {
    content: '';
    width: 76px;
    border: 0.75px solid #8ad8dd;
  }
  & > div:last-child > a::after {
    content: '';
    width: 0;
    border: 0;
  }
}

.navigtion > div:hover .child {
  display: block;
}

.child {
  display: none;
}

.navigtion > div:hover .childpage {
  display: block;
}

.childpage {
  display: none;
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .headerTemPage {
    top: 95px;
    left: 12%;
    transform: scale(1.2);
    margin-top: 4%;
  }

  .headerTem {
    top: 95px;
    left: 12%;
    transform: scale(1.2);
    margin-top: 4%;
  }
}
</style>

<script lang="ts" setup>
defineProps({
  str:{
    type: String,
    default: ''
  }
})
const { t } = useLang()
const menuLists = computed(()=>[
  {
    title: t('components.menus.cmerCenter'),
    lists: [
      {
        name: t('pages.about_us.center_profile'),
        link: '/en/about-us#centreIntro',
        icon: ''
      },{
        name: t('pages.about_us.development_course'),
        link: '/en/about-us#history',
        icon: ''
      },{
        name: t('pages.about_us.enterprise_vision'),
        link: '/en/about-us#corporate',
        icon: ''
      },{
        name: t('pages.medical_team.medical_team'),
        link: '/en/medical-team',
        icon: ''
      },{
        name: t('pages.about_us.equipment_centre'),
        link: '/en/about-us#medicalEquipment',
        icon: ''
      },{
        name: t('pages.talent_recruitment.talent_recruitment'),
        link: '/en/talent-recruitment',
        icon: ''
      }
    ],
  },
  {
    title: t('components.menus.medicalService'),
    lists: [
      {
        name: t('pages.medical_service.cataract.cataract'),
        icon: '',
        link: '/en/medical-service/cataract',
      },{
        name: t('pages.medical_service.maculopathy'),
        icon: '',
        link: '/en/medical-service/maculopathy'
      },{
        name: t('pages.medical_service.muscae_volitantes'),
        icon: '',
        link: '/en/medical-service/muscaeVolitantes'
      },{
        name: t('pages.medical_service.amotioRetinae'),
        icon: '',
        link: '/en/medical-service/amotioRetinae'
      },{
        name: t('pages.medical_service.glaucoma'),
        icon: '',
        link: '/en/medical-service/glaucoma'
      },{
        name: t('pages.medical_service.conjunctivitis'),
        icon: '',
        link: '/en/medical-service/conjunctivitis'
      },{
        name: t('pages.medical_service.xerophthalmia'),
        icon: '',
        link: '/en/medical-service/xerophthalmia'
      },{
        name: t('pages.medical_service.ocularSurfaceDiseases'),
        icon: '',
        link: '/en/medical-service/ocularSurfaceDiseases'
      },{
        name: t('pages.medical_service.strabismusAmblyopia'),
        icon: '',
        link: '/en/medical-service/strabismusAmblyopia'
      },{
        name: t('pages.medical_service.atropine'),
        icon: '',
        link: '/en/medical-service/atropine'
      },{
        name: t('pages.medical_service.eyeOrthopaedicDisease'),
        icon: '',
        link: '/en/medical-service/eyeOrthopaedicDisease'
      },{
        name: t('pages.medical_service.medicalOptometry'),
        icon: '',
        link: '/en/medical-service/medicalOptometry'
      }
    ],
  },
  {
    title: t('components.menus.contactUs'),
    lists: [
      {
        name: 'Tel: (852) 3956 2025',
        icon: 'https://static.cmereye.com/imgs/2023/07/724ec499dbc6fbfd.png',
        link: 'tel: +852 3956 2025'
      },
      {
        name: 'WhatsApp: (852) 9345 1508',
        icon: 'https://static.cmereye.com/imgs/2023/07/4ed161ebeea271cd.png',
        link: 'https://api.whatsapp.com/send?phone=85265767817&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'
      },
      // {
      //   name: 'SMILE專線: (852) 6730 8554',
      //   icon: 'https://static.cmereye.com/imgs/2023/07/e4927ce3113f0a5d.png',
      //   link: '/en'
      // },
      {
        name: 'Facebook: cmereyecenter',
        icon: 'https://static.cmereye.com/imgs/2023/07/28d1674922e892cc.png',
        link: 'https://www.facebook.com/cmereyecenter'
      },
      {
        name: 'Instagram: @cmer_eye_center',
        icon: 'https://static.cmereye.com/imgs/2023/07/28f20047d8233ea4.png',
        link: 'https://www.instagram.com/cmer_eye_center/'
      },
      {
        name: t('components.menus.wechat'),
        icon: 'https://static.cmereye.com/imgs/2023/07/56fb4969e6637ae4.png',
        link: ''
      }
    ]
  },
])

const locale = useState<string>('locale.setting')

const imgLists = [
  {
    type: 'link',
    link: 'https://www.facebook.com/cmereyecenter/'
  },
  {
    type: 'link',
    link: 'https://www.instagram.com/cmer_eye_center/'
  },
  {
    type: 'link',
    link: 'https://www.youtube.com/channel/UCkYbtBhKYc8XyrgG7SAFzRg'
  },
  {
    type: 'drawer',
    link: ''
  },
  {
    type: 'link',
    link: 'https://weibo.com/u/7083441648?refer_flag=1001030103_&is_all=1'
  }
]
const router = useRouter()
const handleToLinks = (_data:any) => {
  // location.href = _data.link
  router.push(_data.link)
}

const handleImgLists = (_link:any) => {
  if(_link.type === 'drawer'){
    drawer.value = true
  }else{
    location.href = _link.link
  }
}
let drawer = ref(false)

</script>

<template>
  <div class="footerMenu">
    <div :class="['footerMenu-in',{ 'footerMenu-in-en':locale === 'en'}]">
      <div class="footerMenu-in-t">
        <div class="t-in" v-for="(item,index) in menuLists" :key="index">
          <div class="t-in-t">
            {{item.title}}
          </div>
          <div class="t-in-b">
            <div>
              <section v-for="(itemChild,itemChildIndex) in item.lists.slice(0,7)" :key="itemChildIndex" >
                <div class="weChatItem" v-if="index===2 && itemChildIndex === 4">
                  <div v-if="index === 2"><img :src="itemChild.icon" alt=""></div>
                  <span>{{itemChild.name}}</span>
                  <div class="drawerIn" v-if="index===2 && itemChildIndex === 4">
                    <img
                      src="https://static.cmereye.com/imgs/2023/05/12bb443b3f92a0d8.jpg"
                      alt="微信QR"
                      srcset=""
                    />
                  </div>
                </div>
                <nuxt-link :id="index===2&&itemChildIndex === 0 ? 'ga-mb-footer-tel' : (index===2 && itemChildIndex === 1?'ga-mb-footer-whatsApp': '')" :to="itemChild.link" v-else>
                  <div v-if="index === 2"><img :src="itemChild.icon" alt=""></div>
                  <span v-if="index === 1">{{`<`}}</span>
                  <span>{{itemChild.name}}</span>
                </nuxt-link>
              </section>
            </div>
            <div class="twoD" v-if="item.lists.length > 7">
              <nuxt-link v-for="(itemChild,itemChildIndex) in item.lists.slice(7,item.lists.length)" :key="itemChildIndex" :to="itemChild.link">
                <div v-if="index === 2"><img :src="itemChild.icon" alt=""></div>
                <span v-if="index === 1">{{`<`}}</span>
                <span>{{itemChild.name}}</span>
              </nuxt-link>
            </div>
          </div>
        </div>  
      </div>
      <div class="footerMenu-in-b">
        <div><span @click="handleToLinks({link: '/en/privacyPolicy'})">{{$t('pages.index.footer.privacy')}}</span> | <span @click="handleToLinks({link: '/en/disclaimer'})">{{$t('pages.index.footer.disclaimer')}}</span></div>
        <div>{{$t('components.menus.footerMenuB1')}}</div>
        <div class="imgLists">
          <div @click="handleImgLists(iconItem)" v-for="(iconItem,iconIndex) in imgLists" :key="iconIndex"></div>
        </div>
        <div>{{$t('components.menus.footerMenuB2')}}</div>
        <div>{{$t('components.menus.footerMenuB3')}}</div>
      </div>
    </div>
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
</template>


<style lang="scss" scoped>
.footerMenu{
  width: 100%;
  padding: 100px 0;
  border-top: 4px solid #F2F2F2;
  &-in{
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    &.footerMenu-in-en{
      .footerMenu-in-t{
        .t-in{
          &-b{
            &>div{
              a,.weChatItem{
                display: flex;
                &>div{
                  margin-top: 5px;
                }
                span{
                  font-size: 16px;
                }
              }
              &.twoD{
                margin-left: 30px;
              }
            }
          }
        }
      }
    }
    &-t{
      display: flex;
      justify-content: space-between;
      .t-in{
        &-t{
          color: #2958A3;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
        &-b{
          margin-top: 5px;
          display: flex;
          &>div{
            a,.weChatItem{
              display: block;
              cursor: pointer;
              margin-top: 15px;
              position: relative;
              &>div{
                display: inline-block;
                vertical-align: middle;
                margin-top: -5px;
                margin-right: 10px;
                width: 25px;
                img{
                  margin: 0 auto;
                }
              }
              span{
                color: #2958A3;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                &:first-child{
                  margin-right: 10px;
                }
              }
              .drawerIn{
                position: absolute;
                left: 0;
                top: 50%;
                transform: translate(-100%,-50%);
                width: 0;
                height: auto;
                margin: 0;
                padding: 0;
                transition: all .3s;
                img{
                  width: 100%;
                }
              }
              &.weChatItem{
                &:hover{
                  .drawerIn{
                    width: 200px;
                  }
                }
              }
            }
            &.twoD{
              margin-left: 60px;
            }

          }
        }
      }
    }
    &-b{
      margin-top: 76px;
      color: #2958A3;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-align: center;
      div{
        span{
          cursor: pointer;
        }
      }
      .imgLists{
        display: none;
      }
    }
  }
}
.drawerIn{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 100px;
}
@media screen and (max-width: 768px) {
  .footerMenu{
    padding: 35px 0 120px;
    &-in{
      max-width: calc(100% - 60px);
      &.footerMenu-in-en{
      .footerMenu-in-t{
        .t-in{
          &-b{
            &>div{
              a,.weChatItem{
                &>div{
                  margin-top: 3px;
                }
                span{
                  font-size: 15px;
                }
              }
              &.twoD{
                margin-left: 0px;
              }
            }
          }
        }
      }
    }
      &-t{
        flex-direction: column;
        .t-in{
          &:not(:last-child){
            margin-bottom: 15px;
          }
          &-t{
            font-size: 19px;
          }
          &-b{
            display: block;
            &>div{
              a,.weChatItem{
                margin-top: 9px;
                span{
                  font-size: 15px;
                   &:first-child{
                    margin-right: 5px;
                  }
                }
                .drawerIn{
                  top: 30px;
                  left: 50%;
                  transform: translateX(-50%);
                }
                &.weChatItem{
                  &:hover{
                    .drawerIn{
                      width: 200px;
                    }
                  }
                }
              }
              &.twoD{
                margin-left: 0px;
              }
            }
          }
        }
      }
      &-b{
        margin-top: 30px;
        font-size: 15px;
        line-height: 1.8;
        .imgLists{
          display: flex;
          justify-content: center;
          margin: 10px 0 10px;
          div{
            background-image: url(https://static.cmereye.com/imgs/2023/07/6cc1329d65ca32ae.png);
            background-repeat: no-repeat;
            background-position: 5px 0;
            background-size: cover;
            width: 20px;
            height: 20px;
            &:nth-of-type(2){
              background-position: -35px 0;
            }
            &:nth-of-type(3){
              background-position: -79px 0;
            }
            &:nth-of-type(4){
              background-position: -122.6px 0;
            }
            &:nth-of-type(5){
              background-position: -168.5px 0;
            }
            &:not(:last-child){
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
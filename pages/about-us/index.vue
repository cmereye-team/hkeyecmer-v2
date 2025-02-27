<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')
useHead(() => ({
  title: `${t('pages.about_us.center_profile')} | ${t('pages.about_us.about_us')}｜${t('pages.index.title')}`,
  meta(){
    return [
      {
        hid: 'description1',
        name: 'description',
        content: t('tdk.about-us.desc1'),
      },
      {
        hid: 'key1',
        name: 'keywords',
        content: t('tdk.about-us.key1'),
      },
      {
        hid: 'description2',
        name: 'description',
        content: t('tdk.about-us.desc2'),
      },
      {
        hid: 'key2',
        name: 'keywords',
        content: t('tdk.about-us.key2'),
      },
      {
        hid: 'description3',
        name: 'description',
        content: t('tdk.about-us.desc3'),
      },
      {
        hid: 'key3',
        name: 'keywords',
        content: t('tdk.about-us.key3'),
      },
    ]
  }
}))



const CORPORATE_Lists = [
  {
    name: 'pages.about_us.enterprise_vision_con.name3_1',
    text: 'pages.about_us.enterprise_vision_con.text3_1'
  },
  {
    name: 'pages.about_us.enterprise_vision_con.name3_2',
    text: 'pages.about_us.enterprise_vision_con.text3_2'
  },
  {
    name: 'pages.about_us.enterprise_vision_con.name3_3',
    text: 'pages.about_us.enterprise_vision_con.text3_3'
  }
]
</script>

<template>
  <div class="about">
    <div class="header mainCon">
      <AboutChildCompsHead />
    </div>
    <div class="textbg en-font whitespace-nowrap overflow-hidden">
      OUR VISION FOR A BETTER FUTURE.
    </div>
    <div class="introduction">
      <AboutChildCompsCentreIntro />
      <AboutChildCompsHistory />
      <div class="CORPORATE_VISION" id="corporate">
        <div class="CORPORATE_VISION-in">
          <div class="CORPORATE_VISION-in-title">
            <AboutTitle
              :zh-title="'pages.about_us.enterprise_vision'"
              :en-ttitle="'CORPORATE VISION'"
              class="title"
            />
          </div>
          <div class="CORPORATE_VISION-in-content">
            <div>
              <div class="name">{{$t('pages.about_us.enterprise_vision_con.name1')}}</div>
              <div class="text">{{$t('pages.about_us.enterprise_vision_con.text1')}}</div>
            </div>
            <div>
              <div class="name">{{$t('pages.about_us.enterprise_vision_con.name2')}}</div>
              <div class="text">{{$t('pages.about_us.enterprise_vision_con.text2')}}</div>
            </div>
            <div>
              <div class="name">{{$t('pages.about_us.enterprise_vision_con.name3')}}</div>
              <div class="textLists">
                <div v-for="(item,index) in CORPORATE_Lists" :key="index">
                  <div>{{$t(item.name)}}</div>
                  <div>{{$t(item.text)}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutChildCompsMedicalEquipment />
      <feedback-con />
      <AboutChildCompsAwards />
      <PageFooterMenu />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.about {
  padding-bottom: 50px;
  overflow: hidden;
}

.textbg {
  font-family: 'Metropolis';
  font-style: normal;
  font-weight: 500;
  font-size: 151.846px;
  line-height: 380px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  animation: textbgAnim 30s linear infinite;
  color: rgba(138, 216, 221, 0.3);
  width: max-content;
  position: relative;
}
@keyframes textbgAnim {
  0%{
    left: 100%;
    transform: translateX(0)
  }
  100%{
    left: 0;
    transform: translateX(-100%);
  }
}
.CORPORATE_VISION{
  margin-top: 180px;
  position: relative;
  width: 100%;
  &::before{
    content: '';
    width: calc((100% - 1080px) / 2 + 580px);
    height: 294px;
    background: #f2f2f2;
    position: absolute;
    top: 0;
    right: 0;
  }
  &::after{
    content: '';
    background: #f2f2f2;
    position: absolute;
    top: -78px;
    right: calc((100% - 860px) / 2);
    width: 395px;
    height: 263px;
    background: url(https://static.cmereye.com/imgs/2023/07/7ec583c939090e3c.jpg);
  }
  &-in{
    position: relative;
    &-title{
      width: 100%;
      max-width: 960px;
      margin: 0 auto;
      z-index: 1;
      :deep(h1){
        width: max-content !important;
      }
    }
    &-content{
      width: 100%;
      max-width: 600px;
      margin: 62px auto 0;
      &>div{
        &:not(:first-child)>.name{
          margin-top: 70px;
        }
        .name{
          font-size: 28px;
          position: relative;
          margin-bottom: 25px;
          color: #515151;
          &::after{
            content: '';
            width: 72px;
            height: 2px;
            background: #8AD8DD;
            position: absolute;
            left: 0;
            bottom: 0;
          }
        }
        .text{
          font-size: 20px;
          line-height: 1.6;
          color: #515151;
          font-family: initial;
        }
        .textLists{
          &>div{
            margin-top: 70px;
            &>div:nth-of-type(1){
              color: #515151;
              font-size: 20px;
              font-style: normal;
              font-weight: 400;
              line-height: 28px;
              letter-spacing: 1px;
              &::before{
                content: '>';
                color: #8AD8DD;
                margin-right: 5px;
                font-size: 24px;
              }
            }
            &>div:nth-of-type(2){
              color: #515151;
              font-size: 18px;
              font-style: normal;
              font-weight: 300;
              line-height: 26px;
              letter-spacing: 1.44px;
              margin-left: 40px;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .textbg {
    width: 100%;
    font-size: 50px;
    line-height: 160px;
  }
  .CORPORATE_VISION{
    margin-top: 0px;
    padding-top: 72px;
    &-in{
      &-title{
        width: calc(100% - 60px);
        margin: 0 auto;
      }
      &-content{
        width: calc(100% - 60px);
        margin: 37px auto 0;
        &>div{
          &:not(:first-child)>.name{
            margin-top: 50px;
          }
          .name{
            font-size: 19.8px;
            margin-bottom: 17.5px;
            &::after{
              content: '';
              width: 72px;
              height: 2px;
              left: 0;
              bottom: 0;
            }
          }
          .text{
            font-size: 14px;
          }
          .textLists{
            &>div{
              margin-top: 40px;
              &>div:nth-of-type(1){
                font-size: 14px;
                &::before{
                  font-size: 16px;
                  margin-right: 2px;
                }
              }
              &>div:nth-of-type(2){
                font-size: 12px;
                margin-top: 5px;
                margin-left: 30px;
              }
            }
          }
        }
      }
    }
    &::before{
      display: none;
    }
    &::after{
      display: none;
    }
  }
}
</style>

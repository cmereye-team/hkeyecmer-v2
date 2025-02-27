<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})

const { t } = useLang()
useHead(() => ({
  title: t('pages.medical_service.atropine_head'),
}))

const locale = useState<string>('locale.setting')
// 传递背景色
const backgd = [
  '#99d3dd;',
  '-webkit-linear-gradient(to right, #e3f8fc, #99d3dd);',
  'linear-gradient(to right, #e3f8fc, #99d3dd);',
]
// 内部导航
const serviceNavigation = [
  {
    anchorName:
      'pages.medical_service.atropine_text.atropine_text1',
    anchorLink: '/medical-service/atropine#introduce',
  },
  {
    anchorName:
      'pages.medical_service.atropine_serviceNavigation.serviceNavigation_anchorName2',
    anchorLink: '/medical-service/atropine#effect',
  },
  {
    anchorName:
      'pages.medical_service.atropine_serviceNavigation.serviceNavigation_anchorName3',
    anchorLink: '/medical-service/atropine#benefit',
  },
  {
    anchorName:
      'pages.medical_service.atropine_serviceNavigation.serviceNavigation_anchorName4',
    anchorLink: '/medical-service/atropine#congruency',
  },
  {
    anchorName:
      'pages.medical_service.atropine_serviceNavigation.serviceNavigation_anchorName6',
    anchorLink: '/medical-service/atropine#method',
  },
  {
    anchorName:
      'pages.medical_service.atropine_serviceNavigation.serviceNavigation_anchorName5',
    anchorLink: '/medical-service/atropine#matters',
  },
]
// 跳转Whatsapp
const goWhatsApp = () => {
  window.open(
    'https://api.whatsapp.com/send?phone=85293451508&text=咨询阿托品眼藥水',
    '_blank'
  )
}

const toWhatsApp = ()=>{
  window.open('https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2')
}

const tozoosnet =()=>{
  window.open('https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&cid=c9dc62b1026349509adfd4cfaeadc550&lng=big5&sid=c663f66caab14ddbad5abbb5ef082d63&p=https%3A//hkcmereye.com/atropine/&rf1=https%3A//hkcmereye&rf2=.com/&msg=&e=hkcmereye.com[youce-goutong]&d=1687852047571')
}

const bannerData = {
  pcSrc: 'https://static.cmereye.com/static/hkcmereye/bannerzip/阿托品1.png',
  mbSrc: 'https://static.cmereye.com/static/hkcmereye/bannerzip/阿托品2.png',
  cnName: '阿托品眼藥水',
  enName: 'ATROPINE EYE DROPS',
  textColor: '#70B8C4',
  pageName: 'atropine'
}
</script>

<template>
  <div class="atropine">
    <PageServiceBanner :bannerData="bannerData" />
    <div class="atropine-nav">
      <serviceNav :arrData="serviceNavigation" :pageName="'atropine'" />
    </div>
    <div class="atropine_nav maxCon" :class="{'atropineNav-en': locale === 'en'}">
      <div id="introduce">
        <div class="atropine_title_text">
          {{ $t('pages.medical_service.atropine_text.atropine_title1_text1') }}
        </div>
        <div>
          <div>
            <p>
              {{
                $t(
                  'pages.medical_service.atropine_text.atropine_title1_p1_span1'
                )
              }}
              <span>{{
                $t(
                  'pages.medical_service.atropine_text.atropine_title1_p1_span2'
                )
              }}</span>
              <span class="up_bid">1</span>
              {{
                $t(
                  'pages.medical_service.atropine_text.atropine_title1_p1_span3'
                )
              }}
            </p>
            <p>
              {{
                $t(
                  'pages.medical_service.atropine_text.atropine_title1_p2_span1'
                )
              }}
              <span>{{
                $t(
                  'pages.medical_service.atropine_text.atropine_title1_p2_span2'
                )
              }}</span>
            </p>
            <p>
              {{
                $t(
                  'pages.medical_service.atropine_text.atropine_title1_p3_span1'
                )
              }}
              <span>{{
                $t(
                  'pages.medical_service.atropine_text.atropine_title1_p3_span2'
                )
              }}</span>
            </p>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/333f38d7d245b86a.png"
              title="阿托品_控制近視眼藥水" alt="控制近視的阿托品眼藥水瓶子"
            />
          </div>
        </div>
        <div>
          1. Chia, A., Lu, Q.S., and Tan, D. Five-year clinical trial on
          atropine for the treatment of myopia 2: myopia control with atropine
          0.01% eyedrops. Ophthalmology. 123:391–399, 2016.
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/8cd93fc952da0965.png"
              title="阿托品_控制近視眼藥水" alt="控制近視的0.01%低濃度阿托品眼藥水"
            />
            <img
              src="https://static.cmereye.com/imgs/2023/06/b9c0bcc3a444bbcb.png"
              title="阿托品_控制近視眼藥水" alt="控制近視的0.05%低濃度阿托品眼藥水"
            />
            <img
              src="https://static.cmereye.com/imgs/2023/06/a6ac6361a91b9218.png"
              title="阿托品_控制近視眼藥水" alt="控制近視的0.125%高濃度阿托品眼藥水"
            />
            <img
              src="https://static.cmereye.com/imgs/2023/06/130f0b399ca1e541.png"
              title="阿托品_控制近視眼藥水" alt="控制近視的1%高濃度阿托品眼藥水"
            />
          </div>
          <div>
            <div>
              <span>{{$t('pages.medical_service.atropine_text.introduce.span1')}}</span>
              <img
                src="https://static.cmereye.com/imgs/2023/06/f294f0db0f83e242.png"
                
              />
            </div>
            <div>
              <span>{{$t('pages.medical_service.atropine_text.introduce.span2')}}</span>
              <img
                src="https://static.cmereye.com/imgs/2023/06/f78528260ec72142.png"
                alt=""
              />
            </div>
          </div>
          <div>
            {{
              $t('pages.medical_service.atropine_text.atropine_title1_text2')
            }}
          </div>
        </div>
      </div>
      <div id="effect">
        <div class="atropine_title_text">
          {{ $t('pages.medical_service.atropine_text.atropine_title2_text2') }}
        </div>
        <div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/06/84575123f01d27c5.jpg"
                title="兒童近視控制_阿托品_眼藥水" alt="女童使用阿托品眼藥水以控制近視"
              />
            </div>
            <div>
              <p>
                {{ $t('pages.medical_service.atropine_text.effect.p1')}}
                <span class="up_bid">2</span>
                {{ $t('pages.medical_service.atropine_text.effect.p2')}}
              </p>
              <p>
                {{ $t('pages.medical_service.atropine_text.effect.p3')}}
                <span class="up_bid">3</span>
                。
                {{ $t('pages.medical_service.atropine_text.effect.p4')}}
              </p>
            </div>
          </div>
          <div>
            <span>{{ $t('pages.medical_service.atropine_text.effect.span')}} </span>
          </div>
        </div>
        <div>
          <p>
            2.Yam JC, Jiang Y, Tang SM, et al. Low-Concentration Atropine for
            Myopia Progression (LAMP) Study: a randomized, double-blinded,
            placebo-controlled trial of 0.05%, 0.025%, and 0.01% atropine eye
            drops in myopia control. Ophthalmology 2019; 126:113-24.
          </p>
          <p>
            3.Yam JC, Zhang XJ, Zhang Y, Yip BHK, Tang F, Wong ES, Bui CHT, Kam
            KW, Ng MPH, Ko ST, Yip WWK, Young AL, Tham CC, Chen LJ, Pang CP.
            Effect of Low-Concentration Atropine Eyedrops vs Placebo on Myopia
            Incidence in Children: The LAMP2 Randomized Clinical Trial. JAMA.
            2023 Feb 14;329(6):472-481. 
          </p>
        </div>
        <!-- <div>
          <div @click="toWhatsApp">{{$t('pages.medical_service.atropine_text.effect.btn1')}}</div>
        </div> -->
        <div class="serviceBtnStyle">
          <service-button-icon
            :str="$t('pages.medical_service.atropine_text.effect.btn1')"
            :link="'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'" 
            :type="'4'"
            :pageName="'atropine'"
          />
        </div>
      </div>
      <div id="benefit">
        <div class="atropine_title_text">
          {{ $t('pages.medical_service.atropine_text.atropine_title3_text3') }}
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/22f52a2cd4375972.png"
              title="眼球拉長" alt="眼部特寫顯示眼球拉長"
            />
            <div>
              {{ $t('pages.medical_service.atropine_text.atropine_title3_p1') }}
            </div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/7e6f87e0e87fa03b.png"
              title="兒童近視控制_視力檢查" alt="男童戴眼鏡進行視力檢查以控制近視"
            />
            <div>
              {{ $t('pages.medical_service.atropine_text.atropine_title3_p2') }}
            </div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/e8f9777b29a81b26.png"
              title="驗眼儀器_屈光檢查" alt="用於屈光檢查的驗眼儀器"
            />
            <div>
              <span>{{
                $t('pages.medical_service.atropine_text.atropine_title3_p3_1')
              }}</span
              >{{
                $t('pages.medical_service.atropine_text.atropine_title3_p3_2')
              }}
            </div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/cc985146128cd086.png"
              title="阿托品_控制近視眼藥水" alt="使用阿托品眼藥水控制近視的患者"
            />
            <div>
              {{ $t('pages.medical_service.atropine_text.atropine_title3_p4') }}
            </div>
          </div>
        </div>
      </div>
      <div id="congruency">
        <div class="atropine_title_text">
          {{ $t('pages.medical_service.atropine_text.atropine_title4_text4') }}
        </div>
        <div>
          <div>
            <div>1</div>
            <div>
              {{ $t('pages.medical_service.atropine_text.atropine_title4_p1') }}
            </div>
          </div>
          <div>
            <div>2</div>
            <div>
              {{ $t('pages.medical_service.atropine_text.atropine_title4_p2') }}
            </div>
          </div>
          <div>
            <div>3</div>
            <div>
              {{ $t('pages.medical_service.atropine_text.atropine_title4_p3') }}
            </div>
          </div>
          <div>
            <div>4</div>
            <div>
              {{ $t('pages.medical_service.atropine_text.atropine_title4_p4') }}
            </div>
          </div>
        </div>
        <!-- <div>
          <div @click="tozoosnet">{{$t('pages.medical_service.atropine_text.congruency.btn1')}}</div>
        </div> -->
        <div class="serviceBtnStyle">
          <service-button-icon
            :str="$t('pages.medical_service.atropine_text.congruency.btn1')"
            :link="'https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&cid=c9dc62b1026349509adfd4cfaeadc550&lng=big5&sid=c663f66caab14ddbad5abbb5ef082d63&p=https%3A//hkcmereye.com/atropine/&rf1=https%3A//hkcmereye&rf2=.com/&msg=&e=hkcmereye.com[youce-goutong]&d=1687852047571'" 
            :type="'2'"
            :pageName="'atropine atropine2'"
          />
        </div>
      </div>
      <div id="method">
        <div class="atropine_title_text">
          {{ $t('pages.medical_service.atropine_text.atropine_title6_text6') }}
        </div>
        <div>
          <div>
            <div>
              <div>
                {{
                  $t('pages.medical_service.atropine_text.atropine_title6_p1')
                }}
              </div>
              <div>
                {{
                  $t('pages.medical_service.atropine_text.atropine_title6_p2')
                }}
                <span>{{
                  $t(
                    'pages.medical_service.atropine_text.atropine_title6_span1'
                  )
                }}</span>
                {{
                  $t('pages.medical_service.atropine_text.atropine_title6_p3')
                }}
              </div>
            </div>
            <div>
              <div>
                {{
                  $t('pages.medical_service.atropine_text.atropine_title6_p4')
                }}
              </div>
              <div>
                {{
                  $t('pages.medical_service.atropine_text.atropine_title6_p5')
                }}
              </div>
            </div>
          </div>
          <div>
            {{ $t('pages.medical_service.atropine_text.atropine_title6_p6') }}
          </div>
        </div>
      </div>
      <div class="matters" id="matters">
        <div class="atropine_title_text">
          {{ $t('pages.medical_service.atropine_text.atropine_title5_text5') }}
        </div>
        <div>
          <div>
            <span>1</span>
            <span>{{
              $t('pages.medical_service.atropine_text.atropine_title5_p1')
            }}</span>
          </div>
          <div>
            <span>2</span>
            <span>{{
              $t('pages.medical_service.atropine_text.atropine_title5_p2')
            }}</span>
          </div>
          <div>
            <span>3</span>
            <span>{{
              $t('pages.medical_service.atropine_text.atropine_title5_p3')
            }}</span>
          </div>
          <div>
            <span>4</span>
            <span>{{
              $t('pages.medical_service.atropine_text.atropine_title5_p4')
            }}</span>
          </div>
          <div>
            <span>5</span>
            <span>{{
              $t('pages.medical_service.atropine_text.atropine_title5_p5')
            }}</span>
          </div>
        </div>
        <!-- <div>
          <div @click="tozoosnet">{{$t('pages.medical_service.atropine_text.matters.btn1')}}</div>
        </div> -->
        <div class="serviceBtnStyle">
          <service-button
            :str="$t('pages.medical_service.atropine_text.matters.btn1')"
            :link="'https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&cid=c9dc62b1026349509adfd4cfaeadc550&lng=big5&sid=c663f66caab14ddbad5abbb5ef082d63&p=https%3A//hkcmereye.com/atropine/&rf1=https%3A//hkcmereye&rf2=.com/&msg=&e=hkcmereye.com[youce-goutong]&d=1687852047571'"
            :pageName="'atropine'"
          />
        </div>
      </div>
    </div>
    <div>
    </div>
    <div class="fromTable">
      <FormFooterInfo
        :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
        :co="`color:${'#99d3dd;'}`"
      />
    </div>
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
.atropine{
  margin-bottom: 50px;
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
.atropine-nav{
  margin-top: 30px;
}
.atropine_nav {
  margin: 100px auto 280px;
  & > #introduce {
    margin-bottom: 164px;
    & > div:nth-child(2) {
      margin-top: 100px;
      display: flex;
      justify-content: space-between;
      & > div:nth-child(1) {
        width: 610px;
        font-family: 'Noto Sans HK';
        font-size: 20px;
        font-weight: normal;
        line-height: 160%;
        color: #7e9da3;
        text-align: justify;
        margin-right: 70px;
        & > p {
          & > span {
            font-weight: bold;
            color: #3a8f9e;
          }
          &:not(:last-child) {
            margin-bottom: 30px;
          }
        }
      }
      & > div:nth-of-type(2) {
        flex: 1;
        img {
          width: 100%;
        }
      }
    }

    & > div:nth-child(3) {
      font-family: 'Noto Sans HK';
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 160%;
      letter-spacing: 0px;
      color: #777777;
      margin-top: 29px;
    }
    & > div:nth-child(4) {
      & > div:nth-child(1) {
        margin-top: 120px;
        padding: 0 180px;
        display: flex;
        justify-content: space-between;
        img {
          width: 120px;
        }
      }
      & > div:nth-child(2) {
        display: flex;
        text-align: center;
        justify-content: space-between;
        margin-top: 33px;
        padding: 0 180px;
        div {
          flex: 1;
          span {
            font-family: 'NotoSansHK-Medium';
            font-size: 24px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 160%;
            letter-spacing: 0px;
            color: #3a8f9e;
          }
          img {
            width: 90%;
          }
          &:last-child {
            img {
              float: right;
            }
          }
        }
      }
      & > div:nth-child(3) {
        margin-top: 48px;
        font-family: 'Noto Sans HK';
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 48px;
        letter-spacing: 0px;
        color: #999999;
        text-align: center;
      }
    }
  }
  & > #effect {
    margin-bottom: 200px;
    & > div:nth-child(2) {
      margin-top: 80px;
      padding: 80px 40px 40px;
      box-shadow: 0px 0px 10px 8px #cecece8f;
      & > div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        & > div:nth-child(1) {
          width: 350px;
          margin-right: 40px;
          img {
            width: 100%;
            border-radius: 10px;
          }
        }
        & > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          & > p {
            font-family: 'Noto Sans HK';
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 40px;
            letter-spacing: 0px;
            color: #777777;
            text-align: justify;
            &:not(:last-child) {
              margin-bottom: 30px;
            }
          }

          & > p:nth-child(2) {
            letter-spacing: -1px;
            & > span:nth-child(2) {
              font-family: 'NotoSansHK-Medium';
              font-size: 24px;
              font-weight: bold;
              color: #555555;
            }
          }
        }
      }
      & > div:nth-of-type(2) {
        margin-top: 50px;
        text-align: center;
        font-family: 'Noto Sans HK';
        font-size: 26px;
        font-weight: 600;
        font-stretch: normal;
        line-height: 160%;
        letter-spacing: 2px;
        color: #3a8f9e;
        span {
          margin: 0 auto;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            bottom: -10px;
            left: -50px;
            background: url(https://static.cmereye.com/imgs/2023/06/f4d7bea70c1e9140.png)
              no-repeat;
            background-size: 100% 100%;
            width: 30px;
            height: 55px;
          }
          &::after {
            content: '';
            position: absolute;
            bottom: -20px;
            right: -25px;
            background: url(https://static.cmereye.com/imgs/2023/06/0b4845048eb8622b.png)
              no-repeat;
            background-size: 100% 100%;
            width: 25px;
            height: 36px;
          }
        }
      }
    }
    & > div:nth-of-type(3) {
      margin-top: 40px;
      p {
        margin-top: 20px;
        font-size: 12px;
      }
    }
    & > div:nth-of-type(4) {
      margin-top: 60px;
      // div {
      //   width: max-content;
      //   padding: 20px 90px;
      //   cursor: pointer;
      //   background-blend-mode: normal, normal;
      //   border-radius: 20px;
      //   font-family: 'Noto Sans HK';
      //   font-size: 30px;
      //   font-weight: normal;
      //   font-stretch: normal;
      //   white-space: pre-wrap;
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;
      //   text-align: center;
      //   line-height: 50px;
      //   letter-spacing: 0px;
      //   color: #ffffff;
      //   margin: 0 auto;
      //   text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
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
      //     background: linear-gradient(45deg,  #AEDBD0 0%, #B1D369 100%);
      //     background-size: 100% 100%;
      //     animation: bgposition 5s infinite linear alternate;
      //     z-index: -1;
      //   }
      // }
    }
  }
  & > #benefit {
    margin-bottom: 200px;
    & > div:nth-child(2) {
      margin-top: 100px;
      display: flex;
      justify-content: space-between;
      & > div {
        width: 20%;
        font-family: 'Noto Sans HK';
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 0;
        color: #777777;
        text-align: center;
        img {
          width: 100%;
        }
        & > div:nth-child(2) {
          margin-top: 50px;
          & > span {
            letter-spacing: 2px;
          }
        }
      }
    }
  }
  & > #congruency {
    margin-bottom: 200px;
    & > div:nth-child(2) {
      & > div {
        display: flex;
        border-bottom: 2px solid #c1e8f3;
        height: 210px;
        align-items: center;
        justify-content: space-between;
        & > div:nth-child(1) {
          font-family: 'OPPOSans-B';
          font-size: 80px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 48px;
          letter-spacing: 0px;
          color: #7bbfcb;
          margin-right: 59px;
        }
        & > div:nth-child(2) {
          font-family: 'Noto Sans HK';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 48px;
          letter-spacing: 0px;
          color: #777777;
        }
      }
      & > div:nth-child(even) {
        flex-direction: row-reverse;
        & > div:nth-child(1) {
          margin-left: 59px;
          margin-right: 0;
        }
      }
    }
    & > div:nth-of-type(3) {
      margin-top: 130px;
      div {
        width: max-content;
        padding: 20px 50px;
        cursor: pointer;
        background-blend-mode: normal, normal;
        border-radius: 20px;
        font-family: 'Noto Sans HK';
        font-size: 30px;
        font-weight: normal;
        font-stretch: normal;
        white-space: pre-wrap;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 50px;
        letter-spacing: 0px;
        color: #ffffff;
        margin: 0 auto;
        text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
        position: relative;
        overflow: hidden;
        -webkit-backface-visibility: hidden;
        -webkit-transform: translate3d(0, 0, 0);
        &::before {
          content: "";
          position: absolute;
          top: -100%;
          left: -100%;
          bottom: -100%;
          right: -100%;
          background: linear-gradient(45deg,  #AEDBD0 0%, #B1D369 100%);
          background-size: 100% 100%;
          animation: bgposition 5s infinite linear alternate;
          z-index: -1;
        }
      }
    }
  }
  & > #method {
    margin-bottom: 200px;
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        margin-top: 163px;
        display: flex;
        justify-content: space-between;
        & > div {
          width: 500px;
          border-radius: 10px;
          border: solid 2px #c1e8f3;
          position: relative;
          & > div:nth-child(2) {
            font-family: 'Noto Sans HK';
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 46px;
            letter-spacing: 0px;
            color: #777777;
            padding: 64px 30px 58px;
            text-align: justify;
            span {
              font-weight: bold;
              color: #555555;
            }
          }
          & > div:nth-child(1) {
            position: absolute;
            width: 410px;
            height: 76px;
            background-color: #99d3dd;
            border-radius: 38px 38px 38px 0px;
            top: -36px;
            font-family: 'NotoSansHK-Bold';
            font-size: 34px;
            font-weight: 600;
            font-stretch: normal;
            line-height: 52px;
            letter-spacing: 0px;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      & > div:nth-child(2) {
        margin-top: 120px;
        margin-bottom: 178px;
        width: 100%;
        height: 145px;
        border-radius: 73px;
        border: solid 1px #98ccef;
        font-family: 'Noto Sans HK';
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: 0px;
        color: #777777;
        padding: 42px 62px 31px;
        position: relative;
      }
      & > div:nth-child(2)::after {
        content: '';
        position: absolute;
        z-index: -1;
        display: inline-block;
        width: 100%;
        height: 145px;
        background-image: linear-gradient(#e8f5f9, #e8f5f9),
          linear-gradient(#daf0f7, #daf0f7);
        background-blend-mode: normal, normal;
        border-radius: 73px;
        top: -8px;
        left: -6px;
      }
      & > div:nth-child(3) {
        margin-top: 170px;
      }
    }
  }
  .matters {
    & > div:nth-of-type(2) {
      margin-top: 87px;
      div {
        display: flex;
        &:not(:last-child) {
          margin-bottom: 76px;
        }
        span {
          &:first-child {
            width: 40px;
            height: 40px;
            background-color: #7bbfcb;
            font-family: 'OPPOSans-B';
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 40px;
            letter-spacing: 0px;
            color: #ffffff;
            border-radius: 50%;
            display: block;
            text-align: center;
            margin-right: 12px;
          }
          &:last-child {
            flex: 1;
            font-family: 'Noto Sans HK';
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 46px;
            letter-spacing: 0px;
            color: #777777;
          }
        }
      }
    }
    & > div:nth-of-type(3) {
      margin-top: 130px;
      div {
        width: max-content;
        padding: 20px 50px;
        cursor: pointer;
        background-blend-mode: normal, normal;
        border-radius: 20px;
        font-family: 'Noto Sans HK';
        font-size: 30px;
        font-weight: normal;
        font-stretch: normal;
        white-space: pre-wrap;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 50px;
        letter-spacing: 0px;
        color: #ffffff;
        margin: 0 auto;
        text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
        position: relative;
        overflow: hidden;
        -webkit-backface-visibility: hidden;
        -webkit-transform: translate3d(0, 0, 0);
        &::before {
          content: "";
          position: absolute;
          top: -100%;
          left: -100%;
          bottom: -100%;
          right: -100%;
          background: linear-gradient(45deg,  #AEDBD0 0%, #B1D369 100%);
          background-size: 100% 100%;
          animation: bgposition 5s infinite linear alternate;
          z-index: -1;
        }
      }
    }
  }
  .up_bid {
    font-size: 12px !important;
    vertical-align: middle;
    display: inline-block;
    margin-top: -17px;
    font-family: 'NotoSansHK-Medium';
    font-weight: 550;
  }
  &.atropineNav-en{
    & > #effect {
      & > div:nth-child(2) {
        & > div:nth-of-type(1) {
          & > div:nth-child(2) {
            &>p{
              line-height: 1.6;
            }
          }
        }
        & > div:nth-of-type(2) {
          font-size: 20px;
        }
      }
    }
    & > #benefit {
      & > div:nth-child(2) {
        & > div{
          font-size: 18px;
          line-height: 1.6;
        }
      }
    }
    & > #method {
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          & > div {
            & > div:nth-child(1) {
              padding: 0 50px;
              text-align: center;
              line-height: 1.2;
            }
          }
        }
        & > div:nth-child(2) {
          padding: 25px 60px;
        }
      }
    }
    .matters {
      & > div:nth-child(2) {
        &>div{
          align-items: center;
        }
      }
    }
  }
}
.atropine_title_btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: auto;
  width: 580px;
  height: 136px;
  border-radius: 20px;
  background-image: linear-gradient(-90deg, #92d0db 0%, #d2f1f6 100%),
    linear-gradient(#529fd3, #529fd3);
  background-blend-mode: normal, normal;
  font-family: 'Noto Sans HK';
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 50px;
  letter-spacing: 0px;
  color: #ffffff;
}
.atropine_title_text {
  font-family: 'NotoSansHK-Bold';
  font-size: 42px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 52px;
  letter-spacing: 0px;
  color: #7bbfcb;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .atropine_title_btn {
    margin-top: 55px;
    width: max-content;
    height: 70px;
    font-size: 16px;
    line-height: 1.6;
    padding: 5px 30px;
  }
  .atropine_title_text {
    font-size: 22px;
    line-height: 1.6;
  }
  .atropine-nav{
    margin-top: -80px;
  }
  .atropine_nav {
    margin: 30px auto 100px;
    & > #introduce {
      margin-bottom: 0;
      width: calc(100% - 60px);
      margin: 0 auto;
      & > div:nth-child(2) {
        flex-direction: column-reverse;
        margin-top: 45px;
        & > div:nth-child(1) {
          width: 100%;
          margin-right: 0;
          margin-top: 45px;
          font-size: 14px;
        }
        & > div:nth-child(2) {
          img{
            width: 80%;
            margin: 0 auto;
          }
        }
      }
      & > div:nth-child(3) {
        letter-spacing: -0.05em;
      }
      & > div:nth-child(4) {
        & > div:nth-child(1) {
          padding: 0;
          margin-top: 20px;
          img{
            width: 70px;
          }
        }
        & > div:nth-child(2) {
          padding: 0;
          margin-top: 15px;
          div {
            flex: 1;
            span {
              font-size: 14px;
            }
            img {
              width: 90%;
            }
            &:last-child {
              img {
                float: right;
              }
            }
          }
        }
        & > div:nth-child(3) {
          font-size: 12px;
          line-height: 1.8;
          margin-top: 10px;
        }
      }
    }
    & > #effect {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        box-shadow: none;
        padding: 0;
        margin-top: 35px;
        & > div:nth-of-type(1) {
          flex-direction: column-reverse;
          & > div:nth-child(1) {
            margin-top: 45px;
            width: calc(100% - 30px);
            position: relative;

            &::before{
              content: '';
              background: #F2F2F2;
              width: 100%;
              height: 100%;
              position: absolute;
              left: 30px;
              top: 30px;
              border-radius: 10px;
            }
            img{
              position: relative;
            }
          }
          & > div:nth-child(2) {
            &>p{
              font-size: 14px;
              line-height: 2;
            }
            & > p:nth-child(2) {
              & > span:nth-child(2) {
                font-size: 14px;
              }
            }
          }
        }
        & > div:nth-of-type(2) {
          font-size: 18px;
          width: 85%;
          margin: 80px auto 0;
          span {
            &::before {
              width: 25px;
              height: 45.5px;
              bottom: 10px;
              left: -40px;
            }
            &::after {
              width: 20px;
              height: 28.8px;
              right: -20px;
            }
          }
        }
      }
      & > div:nth-of-type(3) {
        
        p{
          width: 110%;
          transform: scale(.9);
          margin-left: -5%;
          color: #777;
          margin-top: 10px;
        }
      }
      & > div:nth-of-type(4) {
        margin-top: 60px;
        &>div{
          width: max-content;
          height: 70px;
          font-size: 16px;
          line-height: 1.6;
          padding: 5px 30px;
          border-radius: 15px;
        }
      }
    }
    & > #benefit {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        padding: 0;
        margin-top: 45px;
        flex-wrap: wrap;
        &>div{
          width: calc(50% - 20px);
          margin-bottom: 50px;
          font-size: 14px;
          line-height: 1.6;
          img {
            width: 100%;
          }
          & > div:nth-child(2) {
            width: 80%;
            margin: 10px auto 0;
          }
        }
        & > div:nth-child(n + 3) {
          margin-top: 0;
        }
      }
    }
    & > #congruency {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      
      & > div:nth-child(2) {
        & > div {
          border-bottom: 2px dashed #c1e8f3;
          flex-direction: column;
          padding: 40px 0;
          align-items: flex-start;
          height: auto;
          & > div:nth-child(1) {
            font-size: 24px;
            line-height: 1.6;
            text-align: left;
            border-bottom: 2px solid #7BBFCB;
            &::before{
              content: '0';
            }
          }
          & > div:nth-child(2) {
            font-size: 14px;
            line-height: 1.8;
            margin-top: 12px;
            margin-right: 0;
          }
        }
        & > div:nth-child(even) {
          flex-direction: column;
          align-items: flex-end;
          & > div:nth-child(1) {
            margin-left: 0;
            margin-right: 0;
          }
        }
      }
      & > div:nth-of-type(3) {
        margin-top: 55px;
        &>div{
          width: max-content;
          height: 70px;
          font-size: 16px;
          line-height: 1.6;
          padding: 5px 30px;
          border-radius: 15px;
        }
      }
    }
    & > #method {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        margin-top: 70px;
        & > div:nth-child(1) {
          margin-top: 0;
          flex-direction: column;
          & > div {
            width: 100%;
            &:not(:last-child){
              margin-bottom: 60px;
            }
            & > div:nth-child(1) {
              border-radius: 40px 25px 25px 0px;
              width: 250px;
              font-size: 22px;
              height: 50px;
              line-height: 50px;
              top: -25px;
            }
            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 1.8;
              padding: 50px 30px 20px 20px;
            }
          }
        }
        & > div:nth-child(2) {
          margin-top: 45px;
          font-size: 13px;
          height: auto;
          line-height: 2;
          padding: 25px;
          margin-bottom: 0;
        }
        & > div:nth-child(2)::after {
          height: 100%;
        }
      }
    }
    .matters {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-of-type(2) {
        margin-top: 45px;
        div {
          &:not(:last-child) {
            margin-bottom: 40px;
          }
          span {
            &:first-child {
              width: 35px;
              height: 35px;
              line-height: 35px;
              font-size: 22px;
            }
            &:last-child {
              font-size: 14px;
              line-height: 1.8;
            }
          }
        }
      }
      & > div:nth-of-type(3) {
        margin-top: 55px;
        &>div{
          width: max-content;
          height: 70px;
          font-size: 16px;
          line-height: 1.6;
          padding: 5px 30px;
          border-radius: 15px;
        }
      }
    }
    &.atropineNav-en{
      & > #effect {
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            font-size: 18px;
          }
          & > div:nth-of-type(2) {
            span{
              &::before{
                bottom: 80px;
              }
              &::after{
                bottom: -10px;
                right: -40px;
              }
            }
          }
        }
        & > div:nth-child(4) {
          &>div{
            max-width: 100%;
            height: 90px;
          }
        }
      }
      & > #congruency {
        & > div:nth-child(3) {
          &>div{
            max-width: 100%;
            height: 120px;
          }
        }
      }
      & > #method {
        & > div:nth-child(2) {
          & > div:nth-child(1) {
            & > div {
              & > div:nth-child(1) {
                padding: 0 30px;
              }
            }
          }
        }
      }
      .matters {
        & > div:nth-child(3) {
          &>div{
            max-width: 100%;
            height: 120px;
          }
        }
      }
    }
  }
}
</style>

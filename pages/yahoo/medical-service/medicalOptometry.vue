<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: t('pages.medical_service.medicalOptometry_head'),
  meta(){
    return [
      {
        hid: 'medicalOptometryDesc',
        name: 'description',
        content: t('tdk.medicalOptometry.desc'),
      },
      {
        hid: 'medicalOptometryKey',
        name: 'keywords',
        content: t('tdk.medicalOptometry.key'),
      }
    ]
  }
}))

const locale = useState<string>('locale.setting')
// 传递背景色
const backgd = [
  '#bcd09c;',
  '-webkit-linear-gradient(to right, #ddeac8, #bcd09c);',
  'linear-gradient(to right, #ddeac8, #bcd09c);',
]
// 内部导航
const serviceNavigation = [
  {
    anchorName: 'pages.medical_service.medicalOptometry_con.navLists.name1',
    anchorLink: '/yahoo/medical-service/medicalOptometry#brief_introduction',
  },
  {
    anchorName: 'pages.medical_service.medicalOptometry_con.navLists.name2',
    anchorLink: '/yahoo/medical-service/medicalOptometry#cause',
  }
]
// 跳转Whatsapp
const goWhatsApp = () => {
  window.open(
    'https://api.whatsapp.com/send?phone=85265767817&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2',
    '_blank'
  )
}
const toVision = () =>{
  window.open(
    'https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'
  )
}
// 拨打电话
const callTel = () => {
  location.href = 'tel: +852 3956 2025'
}
const toCmer = () => {
  location.href = 'https://www.cmervision.com/'
}
const goVision = () => {
  location.href = 'https://api.whatsapp.com/send?phone=85269180511&text=你好,我想查詢'
}
const bannerData = {
  pcSrc: 'https://static.cmereye.com/static/hkcmereye/bannerzip/醫學驗光配鏡1.png',
  mbSrc: 'https://static.cmereye.com/static/hkcmereye/bannerzip/醫學驗光配鏡2.png',
  cnName: '醫學驗光配鏡',
  enName: 'MYOPIA CONTROL AND OPHTHALMIC SERVICES',
  textColor: '#B9D38F',
  pageName: 'medicalOptometry'
}
</script>

<template>
  <div>
    <yahooPageServiceBanner :bannerData="bannerData" />
    <div class="medicalOptometry-nav">
      <yahooserviceNav :arrData="serviceNavigation" :pageName="'medicalOptometry'" />
    </div>
    <div class="medicalOptometry_nav" :class="{'medicalOptometryNav-en': locale === 'en'}">
      <div id="brief_introduction">
        <div>
          <div class="medicalOptometry_text_p_span">
            <p>
              {{$t('pages.medical_service.medicalOptometry_con.introduction.p1')}}
            </p>
            <p>
              {{$t('pages.medical_service.medicalOptometry_con.introduction.p2')}}
              <span style="cursor: pointer;" @click="toCmer">{{$t('pages.medical_service.medicalOptometry_con.introduction.span1')}}</span>{{$t('pages.medical_service.medicalOptometry_con.introduction.span2')}}
              <span>{{$t('pages.medical_service.medicalOptometry_con.introduction.span3')}}</span>
              {{$t('pages.medical_service.medicalOptometry_con.introduction.span4')}}
              <span>{{$t('pages.medical_service.medicalOptometry_con.introduction.span5')}}</span> {{$t('pages.medical_service.medicalOptometry_con.introduction.span6')}}
            </p>
          </div>
          <div>
            <img srcset="https://static.cmereye.com/imgs/2024/04/a813e9765c3198e3.png 768w,https://static.cmereye.com/imgs/2024/04/83ce66e13d579b81.png" src="https://static.cmereye.com/imgs/2024/04/83ce66e13d579b81.png" title="兒童近視控制_視力檢查" alt="男童進行視力檢查以控制近視" />
          </div>
        </div>
        <div @click="toVision">
          <div>{{$t('pages.medical_service.medicalOptometry_con.introduction.btn1')}}</div>
          <div>{{$t('pages.medical_service.medicalOptometry_con.introduction.btn2')}}</div>
        </div>
      </div>
      <div id="cause">
        <div>{{$t('pages.medical_service.medicalOptometry_con.cause.name')}}</div>
        <div>
          <div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/06/ba743f1d36fe18f5.png" title="兒童眼睛檢查_驗眼服務" alt="女童透過驗眼服務進行眼睛檢查" srcset="" />
            </div>
            <div>
              <div>{{$t('pages.medical_service.medicalOptometry_con.cause.title1')}}</div>
              <div class="medicalOptometry_text_p_span">
                {{$t('pages.medical_service.medicalOptometry_con.cause.span1')}}
              </div>
              <div class="medicalOptometry_btn_bg" :class="{'Btn-en': locale === 'en'}" @click="toVision">
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.text1')}}</div>
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.btn1')}}</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="https://static.cmereye.com/imgs/2024/04/040397402ce701a0.png" title="兒童眼睛檢查_眼睛健康" alt="戴眼鏡的男童已接受眼睛檢查以確保眼睛健康" srcset="" />
            </div>
            <div>
              <div>{{$t('pages.medical_service.medicalOptometry_con.cause.title2')}}</div>
              <div class="medicalOptometry_text_p_span">
                {{$t('pages.medical_service.medicalOptometry_con.cause.span2')}}
              </div>
              <div class="medicalOptometry_btn_bg" :class="{'Btn-en': locale === 'en'}" @click="toVision">
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.text2')}}</div>
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.btn2')}}</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/06/21855ee228f6d562.png" title="眼保健操_眼睛健康" alt="一家三口做眼保健操以確保眼睛健康" srcset="" />
            </div>
            <div>
              <div></div>
              <div class="medicalOptometry_text_p_span">
                {{$t('pages.medical_service.medicalOptometry_con.cause.span3')}}
              </div>
            </div>
            <div class="contenth2">
              <img src="https://static.cmereye.com/imgs/2024/02/b024232a15daddde.png" alt="">
            </div>
              <div class="page-newNavs">
                <div class="page-newNavs-in">
                  <a class="imgLink" href="https://www.cmervision.com/orthokeratology/">
                    <img data-cfsrc="https://static.cmereye.com/imgs/2024/02/78a53869088df471.png" srcset="https://static.cmereye.com/imgs/2024/02/fa28b47d86133d44.png 768w, https://static.cmereye.com/imgs/2024/02/78a53869088df471.png" src="https://static.cmereye.com/imgs/2024/02/78a53869088df471.png" title="希瑪視光中心_角膜矯形術" alt="希瑪視光中心提拱角膜矯形術服務" />
                  </a>
                </div>
                <div class="page-newNavs-in">
                  <img class="imgLink" data-cfsrc="https://static.cmereye.com/imgs/2024/02/b716d59a6aa89273.png" 
                  srcset="https://static.cmereye.com/imgs/2024/02/201cc4f03dc17ad2.png 768w, https://static.cmereye.com/imgs/2024/02/b716d59a6aa89273.png" src="https://static.cmereye.com/imgs/2024/02/b716d59a6aa89273.png" title="希瑪視光中心_兒童近視控制_隱形眼鏡" alt="希瑪視光中心提供近視控制的隱形眼鏡產品服務">
                  <div class="page-newNavs-in-hover">
                      <div>
                          <img src="https://static.cmereye.com/imgs/2024/02/40234c61800b1127.png" alt="">
                          <p>MiSight® 1 day隱形眼鏡</p>
                          <a class="textLink" href="https://www.cmervision.com/misight/">了解更多</a>
                      </div>
                      <div>
                          <img src="https://static.cmereye.com/imgs/2024/02/f3f9de5f73f1b71a.png" alt="">
                      </div>
                      <div>
                          <img src="https://static.cmereye.com/imgs/2024/02/5e5fea4259b76394.png" alt="">
                      </div>
                  </div>
                </div>
                <div class="page-newNavs-in">
                    <img class="imgLink" data-cfsrc="https://static.cmereye.com/imgs/2024/02/5840782d7636ab10.png" srcset="https://static.cmereye.com/imgs/2024/02/086a88b79db89fa0.png 768w, https://static.cmereye.com/imgs/2024/02/5840782d7636ab10.png" src="https://static.cmereye.com/imgs/2024/02/5840782d7636ab10.png" title="希瑪視光中心_近視控制鏡片" alt="希瑪視光中心提拱兒童近視控制鏡片產品服務">
                    <div class="page-newNavs-in-hover page-newNavs-in-hover-2">
                        <div>
                            <img src="https://static.cmereye.com/imgs/2024/02/5c92bf2ca480b26b.png" alt="">
                            <p>ZEISS兒童近視控制鏡片</p>
                            <a class="textLink" href="https://www.cmervision.com/myopia-control-lenses/zeiss-myovision-pro/">了解更多</a>
                        </div>
                        <div>
                            <img src="https://static.cmereye.com/imgs/2024/02/5b495ef0e1f2a9e8.png" alt="">
                            <p>HOYA MiYOSMART鏡片</p>
                            <a class="textLink" href="https://www.cmervision.com/dims-soft-lens/">了解更多</a>
                        </div>
                    </div>
                </div>
                <div class="page-newNavs-in">
                  <a class="imgLink" href="https://www.hkeyecmer.com/medical-service/atropine">
                  <img data-cfsrc="https://static.cmereye.com/imgs/2024/02/44c702c2ea686335.png" srcset="https://static.cmereye.com/imgs/2024/02/43673cddac52188d.png 768w, https://static.cmereye.com/imgs/2024/02/44c702c2ea686335.png" src="https://static.cmereye.com/imgs/2024/02/44c702c2ea686335.png" title="希瑪視光中心_阿托品_眼藥水" alt="希瑪視光中心提拱阿托品眼藥水產品服務"></a>
                </div>
              </div>
              <div class="contentbtn">
                <div class="medicalOptometry_btn_bg" :class="{'Btn-en': locale === 'en'}" @click="goVision">
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.btn3_1')}}</div>
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.btn3_2')}}</div>
              </div>
              </div>
          </div>
          <div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/06/8cc2d1658a7cb0f6.png" title="眼科醫生_眼睛檢查" alt="眼科醫生為年長者進行眼睛檢查" />
            </div>
            <div>
              <div>{{$t('pages.medical_service.medicalOptometry_con.cause.title4')}}</div>
              <div class="medicalOptometry_text_p_span">
                {{$t('pages.medical_service.medicalOptometry_con.cause.span4')}}
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/06/985c3fa5d6eadb1d.png" title="眼睛檢查_眼睛疾病" alt="定期安排眼睛檢查以預防眼睛疾病" />
            </div>
            <div>
              <div>{{$t('pages.medical_service.medicalOptometry_con.cause.title5')}}</div>
              <div class="medicalOptometry_text_p_span">
                {{$t('pages.medical_service.medicalOptometry_con.cause.span5')}}
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
            <h2>希瑪視光中心更提供成人配鏡服務及鏡片試戴，包括︰</h2>
            <div class="page-newNavs2">
                <div class="page-newNavs2-in">
                    <img src="https://static.cmereye.com/imgs/2024/02/1a1e8435c4c2698b.png" title="希瑪視光中心_隱形眼鏡" alt="希瑪視光中心提供隱形眼鏡產品服務">
                    <p>隱形眼鏡驗配</p>
                    <a href="https://www.cmervision.com/comprehensive/contact-lens-fitting/">了解更多</a>
                </div>
                <div class="page-newNavs2-in">
                    <img src="https://static.cmereye.com/imgs/2024/02/805dd58f9d5c77f9.png" title="希瑪視光中心_漸進老花鏡" alt="希瑪視光中心提供漸進老花鏡產品服務">
                    <p>老花漸進鏡驗配</p>
                    <a href="https://www.cmervision.com/progressive-lens/">了解更多</a>
                </div>
                <div class="page-newNavs2-in">
                    <img src="https://static.cmereye.com/imgs/2024/02/88aaf0b395c69633.png" title="希瑪視光中心_老花隱形眼鏡" alt="希瑪視光中心提供老花隱形眼鏡產品服務">
                    <p>老花隱形眼鏡驗配</p>
                    <a href="https://www.cmervision.com/comprehensive/contact-lens-fitting/multifocal-contact-lenses-fitting/">了解更多</a>
                </div>
                <div class="page-newNavs2-in">
                    <img src="https://static.cmereye.com/imgs/2024/02/ae106a03cf2f371c.png" title="希瑪視光中心_硬式隱形眼鏡" alt="希瑪視光中心提供硬式隱形眼鏡產品服務">
                    <p>硬式隱形眼鏡驗配</p>
                    <a href="https://www.cmervision.com/comprehensive/contact-lens-fitting/rgp/">了解更多</a>
                </div>
            </div>
          </div>
        </div>
        <div class="medicalOptometry_btn_bg" :class="{'Btn-en': locale === 'en'}" @click="toVision">
          <div>{{$t('pages.medical_service.medicalOptometry_con.btn1')}}</div>
          <div>{{$t('pages.medical_service.medicalOptometry_con.btn2')}}</div>
        </div>
      </div>
      <div id="cause-mb">
        <div>&nbsp;&nbsp;{{$t('pages.medical_service.medicalOptometry_con.cause.name')}}</div>
        <div>
          <div>
            <div>{{$t('pages.medical_service.medicalOptometry_con.cause.title1')}}</div>
            <div>
              <div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2023/07/5e23052605a6a862.png  " alt="" srcset="" />
                </div>
                <div class="medicalOptometry_text_p_span">
                  {{$t('pages.medical_service.medicalOptometry_con.cause.span1')}}
                </div>
              </div>
              <div class="medicalOptometry_btn_bg" :class="{'Btn-en': locale === 'en'}" @click="goWhatsApp">
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.text1')}}</div>
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.btn1')}}</div>
              </div>
            </div>
          </div>
          <div>
            <div>{{$t('pages.medical_service.medicalOptometry_con.cause.title2')}}</div>
            <div>
              <div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2024/04/46f32814f4b5f0da.png" alt="" srcset="" />
                </div>
                <div class="medicalOptometry_text_p_span">
                  {{$t('pages.medical_service.medicalOptometry_con.cause.span2')}}
                </div>
              </div>
              <div class="medicalOptometry_btn_bg" :class="{'Btn-en': locale === 'en'}" @click="goWhatsApp">
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.text2')}}</div>
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.btn2')}}</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2023/07/cc9aa29e72e2fe1f.png" alt="" srcset="" />
                </div>
                <div class="medicalOptometry_text_p_span">
                  {{$t('pages.medical_service.medicalOptometry_con.cause.span3')}}
                </div>
              </div>
              <div class="contenth2">
                <img src="https://static.cmereye.com/imgs/2024/02/b024232a15daddde.png" alt="">
              </div>
              <div class="page-newNavs">
                <div class="page-newNavs-in">
                  <a class="imgLink" href="https://www.cmervision.com/orthokeratology/">
                    <img src="https://static.cmereye.com/imgs/2024/02/b4cb7a2dbcde9597.png" alt="角膜矯形術" title="角膜矯形術" />
                  </a>
                </div>
                <div class="page-newNavs-in">
                  <img class="imgLink" src="https://static.cmereye.com/imgs/2024/02/7d4c482c735ee561.png" title="每日即棄近視 控制隱形眼鏡" alt="">
                  <div class="page-newNavs-in-hover">
                      <div>
                          <img src="https://static.cmereye.com/imgs/2024/02/40234c61800b1127.png" alt="">
                          <p>MiSight® 1 day隱形眼鏡</p>
                          <a class="textLink" href="https://www.cmervision.com/misight/">了解更多</a>
                      </div>
                      <div>
                          <img src="https://static.cmereye.com/imgs/2024/02/f3f9de5f73f1b71a.png" alt="">
                      </div>
                      <div>
                          <img src="https://static.cmereye.com/imgs/2024/02/5e5fea4259b76394.png" alt="">
                      </div>
                  </div>
                </div>
                <div class="page-newNavs-in">
                    <img class="imgLink" src="https://static.cmereye.com/imgs/2024/02/d5693952f88b0338.png" title="兒童近視控制鏡片" alt="">
                    <div class="page-newNavs-in-hover page-newNavs-in-hover-2">
                        <div>
                            <img src="https://static.cmereye.com/imgs/2024/02/5c92bf2ca480b26b.png" alt="">
                            <p>ZEISS兒童近視控制鏡片</p>
                            <a class="textLink" href="https://www.cmervision.com/myopia-control-lenses/zeiss-myovision-pro/">了解更多</a>
                        </div>
                        <div>
                            <img src="https://static.cmereye.com/imgs/2024/02/5b495ef0e1f2a9e8.png" alt="">
                            <p>HOYA MiYOSMART鏡片</p>
                            <a class="textLink" href="https://www.cmervision.com/dims-soft-lens/">了解更多</a>
                        </div>
                    </div>
                </div>
                <div class="page-newNavs-in">
                  <a class="imgLink" href="https://www.hkeyecmer.com/medical-service/atropine">
                  <img src="https://static.cmereye.com/imgs/2024/02/9d87712599f6e163.png" title="阿托品眼藥水" alt=""></a>
                </div>
              </div>
              <div class="medicalOptometry_btn_bg" :class="{'Btn-en': locale === 'en'}" @click="goVision">
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.btn3_1')}}</div>
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.btn3_2')}}</div>
              </div>
            </div>
          </div>
          <div>
            <div>{{$t('pages.medical_service.medicalOptometry_con.cause.title4')}}</div>
            <div>
              <div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2023/07/3379ff699f2869d0.png  " alt="" srcset="" />
                </div>
                <div class="medicalOptometry_text_p_span">
                  {{$t('pages.medical_service.medicalOptometry_con.cause.span4')}}
                </div>
              </div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
          <div>
            <div>{{$t('pages.medical_service.medicalOptometry_con.cause.title5')}}</div>
            <div>
              <div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2023/07/3e8d41f263dc003f.png" alt="" srcset="" />
                </div>
                <div class="medicalOptometry_text_p_span">
                  {{$t('pages.medical_service.medicalOptometry_con.cause.span5')}}
                </div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
            <h2>
              希瑪視光中心更提供成人配鏡服務及鏡片試戴，包括︰
            </h2>
            <div class="page-newNavs2">
              <div class="page-newNavs2-in">
                  <img src="https://static.cmereye.com/imgs/2024/02/1a1e8435c4c2698b.png" title="隱形眼鏡驗配" alt="">
                  <p>隱形眼鏡驗配</p>
                  <a href="https://www.cmervision.com/comprehensive/contact-lens-fitting/">了解更多</a>
              </div>
              <div class="page-newNavs2-in">
                  <img src="https://static.cmereye.com/imgs/2024/02/805dd58f9d5c77f9.png" title="老花漸進鏡驗配
                  控制隱形眼鏡" alt="">
                  <p>老花漸進鏡驗配</p>
                  <a href="https://www.cmervision.com/progressive-lens/">了解更多</a>
              </div>
              <div class="page-newNavs2-in">
                  <img src="https://static.cmereye.com/imgs/2024/02/88aaf0b395c69633.png" title="老花隱形眼鏡驗配" alt="">
                  <p>老花隱形眼鏡驗配</p>
                  <a href="https://www.cmervision.com/comprehensive/contact-lens-fitting/multifocal-contact-lenses-fitting/">了解更多</a>
              </div>
              <div class="page-newNavs2-in">
                  <img src="https://static.cmereye.com/imgs/2024/02/ae106a03cf2f371c.png" title="硬式隱形眼鏡驗配" alt="">
                  <p>硬式隱形眼鏡驗配</p>
                  <a href="https://www.cmervision.com/comprehensive/contact-lens-fitting/rgp/">了解更多</a>
              </div>
            </div>
          </div>
        </div>
        <div class="medicalOptometry_btn_bg" :class="{'Btn-en': locale === 'en'}" @click="toVision">
          <div>{{$t('pages.medical_service.medicalOptometry_con.btn1')}}</div>
          <div>{{$t('pages.medical_service.medicalOptometry_con.btn2')}}</div>
        </div>
      </div>
    </div>
    <div>
    </div>
    <!-- 表单 -->
    <div class="fromTable">
      <yahooFormFooterInfo :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
        :co="`color:${'#bcd09c;'}`" :formbgimg="'https://static.cmereye.com/imgs/2024/04/2894df9b213b8a17.png'" />
    </div>
    <yahooPageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
@media screen and(min-width: 768px) {
  // 隐藏手机版布局
  #cause-mb {
    display: none;
  }
}
@import url('../../../assets/font/font.css');
.medicalOptometry-nav{
  margin-top: 30px;
}
.medicalOptometry_nav {
  max-width: 1200px;
  transform: scale(0.9);
  transform-origin: center top;
  margin: 100px auto -40%;
  &>#brief_introduction {
    margin-bottom: 200px;
    &>div:nth-child(1) {
      display: flex;
      justify-content: space-between;
      margin-bottom: 90px;
      &>div:nth-child(1) {
        width: 670px;
        line-height: 1.8;
        &>p {
          text-indent: 50px;
          &>span {
            color: #8ca761;
          }
        }
        &>p:nth-child(2) {
          margin-top: 80px;
        }
      }
    }
    &>div:nth-child(2) {
      width: 629px;
      height: 120px;
      border-radius: 30px;
      border: solid 2px #bcd09c;
      margin: auto;
      display: flex;
      align-items: center;
      font-family: 'NotoSansHK-Medium';
      font-size: 40px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 50px;
      letter-spacing: 0px;
      cursor: pointer;
      &>div:nth-child(1) {
        width: 290px;
        height: 120px;
        background-blend-mode: normal, normal;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        position: relative;
        overflow: hidden;
        -webkit-backface-visibility: hidden;
        -webkit-transform: translate3d(0, 0, 0);
        text-shadow: 0 2px 5px #aac086;
        &::before {
          content: "";
          position: absolute;
          top: -100%;
          left: -100%;
          bottom: -100%;
          right: -100%;
          background: linear-gradient(45deg,  #b1d35f 0%, #aedbd8 100%);
          background-size: 100% 100%;
          animation: bgposition 5s infinite linear alternate;
          z-index: -1;
        }
      }
      &>div:nth-child(2) {
        font-size: 40px;
        line-height: 50px;
        letter-spacing: 0px;
        color: #8ca761;
        margin-left: 53px;
      }
    }
  }
  &>#cause {
    &>div:nth-child(1) {
      margin: 100px auto 75px;
      font-family: 'NotoSansHK-Bold';
      font-size: 42px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 52px;
      letter-spacing: 2px;
      color: #8ca761;
      text-align: center;
      width: fit-content;
      padding: 41px 66px;
      border-radius: 10px;
      border: solid 3px #bcd09c;
      position: relative;
    }
    &>div:nth-child(1)::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -5px;
      width: 5px;
      height: 40px;
      transform: translateY(-50%);
      background: #fff;
    }
    &>div:nth-child(1)::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -5px;
      width: 5px;
      height: 40px;
      transform: translateY(-50%);
      background: #fff;
    }
    &>div:nth-child(2) {
      &>div {
        padding: 100px 0;
        display: flex;
        justify-content: space-between;
        &>div:nth-child(2) {
          width: 675px;
          &>div:nth-child(1) {
            font-family: 'NotoSansHK-Bold';
            font-size: 38px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 52px;
            letter-spacing: 0px;
            color: #8ca761;
            display: flex;
            align-items: center;
          }
          &>div:nth-child(1)::before {
            content: '';
            width: 6px;
            display: inline-block;
            height: 56px;
            background-color: #ccdfae;
            border-radius: 3px;
            margin-right: 36px;
          }
          &>div:nth-child(2) {
            margin-top: 50px;
            margin-bottom: 60px;
            line-height: 46px;
          }
        }
      }
      &>div:nth-child(even) {
        border-top: 1px dashed #bcd09c;
        border-bottom: 1px dashed #bcd09c;
      }
      &>div:nth-child(3) {
        &>div:nth-child(2) {
          &>div:nth-child(1)::before {
            content: none;
          }
          &>div:nth-child(2) {
            margin-top: 0;
          }
        }
      }
      &>div:nth-of-type(3){
        align-items: center;
        flex-wrap: wrap;
        &>div:nth-of-type(1){
          width: calc(467 / 1160 * 100%);
        }
        .contenth2{
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }
        .page-newNavs{
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-top: 80px;
          &-in{
            position: relative;
            cursor: pointer;
            .page-newNavs-in-hover{
              position: absolute;
              background: #fff;
              border-radius: 55px;
              min-width: 1180px;
              left: 50%;
              transform: translateX(-50%);
              filter: drop-shadow(0 3px 5px rgba(0,0,0,.3));
              height: 400px;
              z-index: 9999;
              display: none;
              &>div{
                position: relative;
                display: flex;
                flex: 1;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                p{
                  margin-bottom: 30px !important;
                  font-size: 30.41px;
                }
              }
              .textLink{
                width: max-content;
                border: 3px solid #ACC288 ;
                border-radius: 30px ;
                color: #ACC288 ;
                font-size: 30px ;
                font-style: normal ;
                font-weight: 700 ;
                line-height: normal ;
                padding: 6px 22px ;
                height: auto ;
                letter-spacing: 5.627px ;
                text-align: center;
                transition: all .3s;
                &:hover{
                   background: #ACC288 ;
                   color: #fff ;
                }
              }
              &>div:not(:last-child)::after{
                content: '';
                width: 1px;
                height: 244px;
                display: inline-block;
                background: #ABA2A2;
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
              }
              &::after{
                content: '';
                top: -38px;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border: 20px solid;
                border-color: transparent transparent #fff transparent;
                display: inline-block;
                position: absolute;
              }
              &.page-newNavs-in-hover-2{
                align-items: center;
                div{
                  height: 300px;
                   justify-content: flex-end;
                   p{
                     margin-top: 30px;
                   }
                   &:nth-child(1){
                    img{
                      max-width: 25%;
                    }
                  }
                }
              }
            }
            &:hover{
              .page-newNavs-in-hover{
                display: flex;
                
              }
            }
          }
          .imgLink{
            filter: drop-shadow(0 3px 5px rgba(0,0,0,.3));
          }
          
        }
        .contentbtn{
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 80px;
        }
        .medicalOptometry_text_p_span{
          margin-bottom: 0 !important;
        }
      }
      &>div:nth-of-type(5){
        align-items: center;
        flex-wrap: wrap;
        h2{
          width: 100%;
          color: #8CA761;
          font-size: 30px;
          font-weight: 600;
          margin-top: 60px;
        }
        .page-newNavs2{
          width: 100%;
        }
        .page-newNavs2{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .page-newNavs2-in{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        border-radius: 42px;
        background: #FFF;
        min-width: 282px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        padding: 60px 0 22px;
        margin: 19px 0;
    }
    .page-newNavs2-in p{
        width: 100%;
        text-align: center;
        margin-bottom: 24px ;
        margin-top: 19px ;
        color: #555;
        font-family: "Noto Sans HK";
        font-size: 30.41px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    .page-newNavs2-in img{
        width: initial ;
        height: 151px;
        margin-right: 0 ;
    }
    .page-newNavs2-in a{
        width: auto ;
        border: none ;
        border-radius: 7.402px ;
        background: #A2BF74 ;
        color: #fff ;
        font-family: "Noto Sans HK" ;
        font-size: 22.509px ;
        font-style: normal ;
        font-weight: 700 ;
        line-height: normal ;
        padding: 6px 22px ;
        height: auto ;
        letter-spacing: 5.627px ;
    }
    .page-newNavs2-in a:hover{
        background: #c1d6a0;
    }
      }
    }
    &>div:nth-child(3) {
      margin: 60px auto 462px;
      
    }
    
  }
  &.medicalOptometryNav-en{
    &>#brief_introduction {
      &>div:nth-child(2) {
        width: max-content;
        padding-right: 30px;
      }
    }
  }
}
// 边框按钮样式
.medicalOptometry_btn_bg {
  cursor: pointer;
  font-family: 'NotoSansHK-Bold';
  font-size: 34px;
  line-height: 50px;
  letter-spacing: 0px;
  color: #8ca761;
  display: flex;
  align-items: center;
  width: fit-content;
  height: 100px;
  border-radius: 30px;
  border: solid 2px #bcd09c;
  &>div:nth-child(1) {
    padding: 33px 60px;
  }
  &>div:nth-child(2) {
    width: fit-content;
    min-width: 223px;
    height: 100%;
    background-blend-mode: normal, normal;
    border-radius: 30px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 33px 47px;
    position: relative;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    text-shadow: 0 2px 5px #aac086;
    &::before {
      content: "";
      position: absolute;
      top: -100%;
      left: -100%;
      bottom: -100%;
      right: -100%;
      background: linear-gradient(45deg,  #b1d35f 0%, #aedbd8 100%);
      background-size: 100% 100%;
      animation: bgposition 5s infinite linear alternate;
      z-index: -1;
    }
  }
  &.Btn-en{
    font-size: 26px;
    line-height: 1.6;
    text-align: center;
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
.medicalOptometry_text_p_span {
  font-family: 'Noto Sans HK';
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #515151;
}
.medicalOptometry_title_text {
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
.medicalOptometry_title_btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: auto;
  width: 580px;
  height: 140px;
  border-radius: 20px;
  background-image: linear-gradient(-90deg, #bcd09c 0%, #ffd6c1 100%),
    linear-gradient(#eda2a6, #eda2a6);
  background-blend-mode: normal, normal;
  font-family: 'Noto Sans HK';
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 50px;
  letter-spacing: 0px;
  color: #ffffff;
}
.fromTable {
  margin-top: -28%;
}
@media screen and (max-width: 768px) {
  .medicalOptometry-nav{
    margin-top: -80px;
  }
  .medicalOptometry_nav {
    max-width: 100%;
    margin-top: 0;
    &>#brief_introduction {
      margin-bottom: 0;
      &>div:nth-child(1) {
        flex-direction: column;
        &>div:nth-child(1) {
          width: 100%;
          color: #BEAD9C;
          font-family: 'Noto Sans HK';
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 1.8;
          margin-bottom: 40px;
          &>p {
            text-indent: 0;
            &>span {
              letter-spacing: -1px;
              color: #8ca761;
            }
          }
          &>p:nth-child(2) {
            margin-top: 40px;
          }
        }
        &>div:nth-child(2) {
          img{
            width: 100%;
          }
        }
      }
      &>div:nth-child(2) {
        width: 100%;
        height: 70px;
        padding-right: 28px;
        font-size: 24px;
        line-height: 1.8;
        border-radius: 16px;
        &>div:nth-child(1) {
          width: 175.66px;
          height: 70px;
          border-radius: 16px;
        }
        &>div:nth-child(2) {
          font-size: 24px;
          line-height: 1.8;
          margin-left: 26px;
        }
      }
    }
    &>#cause {
      display: none;
    }
    &>#cause-mb {
      &>div:nth-child(1) {
        margin: 100px auto 15px;
        font-size: 24px;
        line-height: 1.8;
        letter-spacing: 0;
        padding: 16px 66px;
        border: 3px solid #afc58c;
        border-radius: 16px;
        color: #8CA761;
        font-family: 'Noto Sans HK';
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 1.6;
      }
      &>div:nth-child(1)::before {
        content: none;
      }
      &>div:nth-child(1)::after {
        content: none;
      }
      &>div:nth-child(2) {
        &>div {
          &>div:nth-child(1) {
            color: #8CA761;
            font-family: Noto Sans HK;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 1.6;
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          &>div:nth-child(1)::before {
            content: '';
            width: 3px;
            display: inline-block;
            height: 34px;
            background-color: #ccdfae;
            border-radius: 3px;
            margin-right: 6px;
          }
          &>div:nth-child(2) {
            width: 100%;
            &>div:nth-child(1) {
              display: flex;
              font-family: 'NotoSansHK-Bold';
              font-size: 38px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 52px;
              letter-spacing: 0px;
              color: #8ca761;
              display: flex;
              align-items: flex-start;
              margin-top: 22px;
              &>div:nth-child(1) {
                min-width: 125px;
              }
              &>div:nth-child(2) {
                color: #BEAD9C;
                font-family: 'Noto Sans HK';
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 1.6;
                margin-left: 12px;
              }
            }
            &>div:nth-child(2) {
              margin-top: 50px;
              margin-bottom: 0;
              line-height: 46px;
            }
          }
          padding: 50px 0;
          border-bottom: 1px dashed #BCD09C;
        }
        &>div:nth-child(4) {
          &>div:nth-child(2) {
            &>div:nth-child(2) {
              margin: 0;
            }
          }
        }
        &>div:last-child {
          padding-bottom: 0;
          border-bottom: none;
        }
        &>div:nth-child(3) {
          padding-top: 0;
          &>div:nth-child(1) {
            display: flex;
            flex-direction: column;
            &>div:nth-child(1) {
              width: auto;
              display: flex;
              margin-top: 48px;
              margin-bottom: 36px;
              &>div:nth-child(1) {
                min-width: 128px;
              }
              &>div:nth-child(2) {
                color: #BEAD9C;
                font-family: 'Noto Sans HK';
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 1.8;
                margin-left: 12px;
              }
            }
          }
          &>div:nth-child(1)::before {
            content: none;
          }
          .contenth2{
            padding: 0 30px;
          }
          .page-newNavs{
            width: 100%;
            margin-top: 30px;
            
            &-in{
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 30px;
              padding: 0 20px;
              filter: drop-shadow(0 5px 3px rgba(0,0,0,.2));
              .imgLink{
                display: block;
                height: 65px;
                position: relative;
                z-index: 1;
                img{
                  // height: 55px;
                  height: 100%;
                }
              }
            }
            .page-newNavs-in-hover{
              display: flex;
              align-items: center;
              background: #fff;
              border-radius: 15px;
              height: 118px;
              margin-top: -14px;
              &>div{
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                position: relative;
                &:not(:last-child):after{
                  content: '';
                  width: 1px;
                  height: 60px;
                  display: inline-block;
                  background: #ABA2A2;
                  position: absolute;
                  right: 0;
                  top: 50%;
                  transform: translateY(-50%);
                }
                img{
                  width: 70% !important;
                }
                p{
                  margin-bottom: 5px !important;
                  font-size: 8px;
                  color: #000;
                }
                a{
                    width: max-content ;
                    border: 1px solid #8CA761 ;
                    border-radius: 30px ;
                    color: #8CA761 ;
                    font-size: 8px ;
                    font-weight: 700;
                    padding: 2px 10px ;
                    height: auto ;
                    letter-spacing: 3px;
                    text-align: center;
                    transition: all .3s;
                }
              }
              &.page-newNavs-in-hover-2{
                width: 80%;
                // align-items: flex-end;
                &>div{
                  justify-content: flex-end;
                  height: 90px;
                  flex: 1;
                  p{
                    margin-top: 10px;
                  }
                  img{
                    max-width: 40%;
                  }
                  &:nth-child(1){
                    img{
                      // max-width: 80%;
                      max-width: 35%;
                    }
                  }
                }
              }
            }
          }
        }
        &>div:nth-of-type(5){
          h2{
            color: #8CA761;
            font-size: 16px;
            font-weight: 600;
          }
          
        }
      }
      &>div:nth-child(3) {
        margin: 60px auto 0;
        font-size: 18px;
        font-weight: 500;
        &>div:first-child{
          padding: 13px 15px;
        }
        &>div:last-child{
          padding: 13px 15px;
          font-size: 20px;
        }
      }
    }
    &.medicalOptometryNav-en{
      &>#brief_introduction {
        &>div:nth-child(2) {
          max-width: 100%;
          text-align: center;
          &>div:nth-child(1) {
            line-height: 1.2;
          }
          &>div:nth-child(2) {
            line-height: 1.2;
          }
        }
      }
    }
  }
  .medicalOptometry_btn_bg {
    font-size: 22px;
    line-height: 1.8;
    letter-spacing: 0px;
    height: auto;
    border-radius: 18px;
    font-family: 'Noto Sans HK';
    &>div:nth-child(1) {
      padding: 8px 25px;
    }
    &>div:nth-child(2) {
      height: auto;
      min-width: auto;
      padding: 13px 20px;
      border-radius: 16px;
    }
    &.Btn-en{
      font-size: 16px;
      &>div:nth-child(1){
        line-height: 1.6;
      }
      &>div:nth-child(2){
        line-height: 1.6;
      }
    }
  }
  .page-newNavs2{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 30px;
    &-in{
      width: 40%;
      background: #fff;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 20px;
      &:nth-of-type(odd){
        margin-right: 20px;
      }
      &>img{
        height: 70px;
        margin-top: 20px;
      }
      p{
        font-size: 18px;
        font-weight: 600;
        margin-top: 20px;
      }
      a{
        background: #A2BF74;
        color: #fff;
        font-size: 12px;
        font-weight: 600;
        border-radius: 5px;
        letter-spacing: 3px;
        padding: 3px 12px;
        margin-bottom: 15px;
        margin-top: 15px;
      }
    }
  }
}
@media screen and (min-width: 1920px) {
  .medicalOptometry_nav {
    margin-bottom: -20%;
  }
}
</style>

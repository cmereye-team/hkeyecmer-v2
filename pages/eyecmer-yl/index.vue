<template>
  <div>
    <!-- banner -->
    <div class="head_img text-center">
      <div class="head_logo" style="display: none">
        <img
          src="https://static.cmereye.com/imgs/2022/12/6954cd4c6ffe34ed.png"
          alt=""
        />
      </div>
      <div class="head_title"></div>
      <picture>
        <source
          media="(min-width: 768px)"
          srcset="https://hkcmereye.com/static/upload/other/20250915/1757902214362821.webp"
        />
        <img
          class="head_banner"
          src="https://hkcmereye.com/static/upload/other/20250915/1757902218138949.webp"
          title="眼睛健康大使鄭裕玲小姐"
          alt="眼睛健康大使鄭裕玲小姐"
        />
      </picture>
      <!-- 默认banner图勿删，目前用新上代言人banner -->
      <!-- <img
        class="head_banner"
        src="https://static.cmereye.com/imgs/2023/04/93240e6f248cf35d.avif"
        alt=""
      /> -->
    </div>

    <div>
      <div class="container">
        <div
          class="center_title text-center font-weight-bold text-xs-center cener_title fs-md-34 fs-lg-34 fs-xs-26"
        >
          元朗診所地址
        </div>

        <div class="textimgbox">
          <ul class="contentbox">
            <li><i class="fa-1x fa fa-phone"></i>+852 3956 2025</li>

            <li>
              <i class="fa-1x fa fa-home"></i
              >元朗青山公路45及47號誠信商業大廈地鋪（恆香老餅家對面）
            </li>

            <li class="d-flex">
              <i class="fa-1x fa fa-calendar pr-2"></i> 星期一至五：09:30—13:30
              / 14:30—19:00 <br />
              星期六：09:30—13:30 <br />（星期日及公眾假期休息）
            </li>

            <li>
              <i class="fa-1x fa fa-subway"></i
              >以下公共交通線路會停靠誠信大廈附近:<br />
              巴士: 53、68M、68X、B1<br />
              地鐵: 屯馬綫 TUEN MA LINE<br />
              輕鐵: 614、615
            </li>
            <div class="mt-4">
              <div class="mt-4">
                <a
                  href="https://goo.gl/maps/TpF3b2jWo8crsZTz9"
                  target="_blank"
                  class="ui-link"
                  ><span
                    ><button class="menuButton">Google地圖</button>
                  </span></a
                >

                <a
                  href="https://api.whatsapp.com/send?phone=85293451508&text=你好，我想預約"
                  target="_blank"
                  class="ui-link ga4-clinicappointment ml-5"
                  ><span
                    ><button
                      style="background-color: #ef9e28"
                      class="menuButton"
                    >
                      立即預約
                    </button>
                  </span>
                </a>
              </div>
            </div>
          </ul>

          <!-- <img
            src="https://static.cmereye.com/imgs/2023/04/5e78c462acdec1c9.avif"
          /> -->
          <div class="imgBox">
            <swiper
              :loop="true"
              :slides-per-view="1"
              :spaceBetween="20"
              :autoplay="{ delay: 3000 }"
              :pagination="{ clickable: true }"
              :navigation="true"
              :modules="[Autoplay, Navigation]"
            >
              <swiper-slide
                class=""
                v-for="(swiperItem, swiperIndex) in clinicSlides"
                :key="swiperIndex"
              >
                <img :src="swiperItem.image" alt="" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>

    <!-- 中心介绍 -->
    <div>
      <div class="container">
        <div
          class="center_title text-center font-weight-bold text-xs-center cener_title fs-md-34 fs-lg-34 fs-xs-26"
        >
          中心介紹
        </div>
        <div class="center_datails">
          <div class="center_datails_text">
            <p>
              「希瑪眼科中心」是上市公司「香港希瑪眼科集團」旗下的眼科中心。
            </p>
            <strong
              > 我們的集團名稱<span class="text-blue">「C-MER」</span
              >，正正反映著我們的理念與執著：  </strong
            >
            <ul>
              <li>
                <span class="p-border">「C」： </span> 專業臨床服務 Professional
                Clinical Services  
              </li>
              <li>
                <span class="p-border">「Ｍ」：</span> 現代化管理 Modern
                Management  
              </li>
              <li>
                <span class="p-border">「Ｅ」：</span> 優質教育 Quality
                Education 
              </li>
              <li>
                <span class="p-border">「Ｒ」：</span> 開創性科研 Pioneering
                Research  
              </li>
            </ul>
          </div>
          <div class="center_evn">
            <img
              src="https://statichk.cmermedical.com/hkcmereye/TW/TwIntro.avif"
              alt=""
            />
          </div>
        </div>
        <div class="center_details_re">
          <p>
            「希瑪」：「希」望為眼睛帶來希望之光；「希瑪」 與 「喜馬」  
             同音，喜馬拉雅山脈為世界海拔最高的山脈，寓意「希瑪眼科」憑着優質臨床服務、現代化管理、優質教學與培訓以及領先研究，不斷追求卓越，攀登高峰的理念。
          </p>
          <p>
            希瑪眼科中心擴展至全港擁有<strong class="text-blue"
              >10間眼科診所，</strong
            >眼科診所及中心遍佈港、九、新界，交通便利，環境舒適。
          </p>
          <p>
            中心團隊由從事眼科臨床30多年林順潮醫生帶領，加上26名經驗豐富的<strong
              class="text-blue"
              >眼科專科醫生、</strong
            >多名註冊視光師及醫療護理人員組成。
          </p>
          <p>
            中心嚴格遵守香港及國際醫療技術操作規範，設有多間符合國際標準的無菌手術室，配備全面眼科檢查與先進眼科醫療儀器，為客人提供安全、準確、可靠的眼科檢查及醫療服務。此外，我們秉持「度身訂造」的原則，根據客人的實際眼睛狀況制定嚴格且針對性的治療方案。
          </p>
        </div>
      </div>
    </div>

    <!--醫療服務-->
    <div class="background-server">
      <div class="container">
        <div
          class="text-center font-weight-bold text-xs-center cener_title fs-md-34 fs-lg-34 fs-xs-26 server-yiliao"
        >
          醫療服務
        </div>

        <div class="service_box">
          <div class=" ">
            <div class="row">
              <div
                class="wow fadeInLeft service_item col-lg-3"
                data-wow-delay="0.3s"
              >
                <div class="service_hover">
                  <a href="/medical-service/cataract/">
                    <div class="service_pic">
                      <img
                        src="https://hkcmereye.com/template/default/picture/servicse/ser_item1.png"
                        title="希瑪林順潮眼科中心_白內障"
                        alt="希瑪林順潮眼科中心_白內障"
                      />
                    </div>
                    <div class="service_txt">
                      <p class="fs-sm-16">白內障</p>
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="wow fadeInLeft service_item col-lg-3"
                data-wow-delay="0.4s"
              >
                <div class="service_hover">
                  <a href="/medical-service/glaucoma">
                    <div class="service_pic">
                      <img
                        src="https://hkcmereye.com/template/default/picture/servicse/ser_item2.png"
                        title="希瑪林順潮眼科中心_黃斑病變"
                        alt="希瑪林順潮眼科中心_黃斑病變"
                      />
                    </div>
                    <div class="service_txt">
                      <p class=" ">青光眼</p>
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="wow fadeInLeft service_item col-lg-3"
                data-wow-delay="0.5s"
              >
                <div class="service_hover">
                  <a href="/medical-service/xerophthalmia">
                    <div class="service_pic">
                      <img
                        src="https://hkcmereye.com/template/default/picture/servicse/ser_item3.png"
                        title="希瑪林順潮眼科中心_視網膜脫落"
                        alt="希瑪林順潮眼科中心_視網膜脫落"
                      />
                    </div>
                    <div class="service_txt">
                      <p class=" ">乾眼症</p>
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="wow fadeInLeft service_item col-lg-3"
                data-wow-delay="0.6s"
              >
                <div class="service_hover">
                  <a href="/medical-service/muscaeVolitantes">
                    <div class="service_pic">
                      <img
                        src="https://hkcmereye.com/template/default/picture/servicse/ser_item4.png"
                        title="希瑪林順潮眼科中心_青光眼"
                        alt="希瑪林順潮眼科中心_青光眼"
                      />
                    </div>
                    <div class="service_txt">
                      <p class=" ">飛蚊症</p>
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="wow fadeInLeft service_item col-lg-3"
                data-wow-delay="0.7s"
              >
                <div class="service_hover">
                  <a href="/medical-service/maculopathy">
                    <div class="service_pic">
                      <img
                        src="https://hkcmereye.com/template/default/picture/servicse/ser_item5.png"
                        title="希瑪林順潮眼科中心_眼表疾病_眼角膜疾病"
                        alt="希瑪林順潮眼科中心_眼表疾病_眼角膜疾病"
                      />
                    </div>
                    <div class="service_txt">
                      <p class=" ">黃斑病變</p>
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="wow fadeInLeft service_item col-lg-3"
                data-wow-delay="0.8s"
              >
                <div class="service_hover">
                  <a href="/medical-service/conjunctivitis">
                    <div class="service_pic">
                      <img
                        src="https://hkcmereye.com/template/default/picture/servicse/ser_item6.png"
                        title="希瑪林順潮眼科中心_小兒眼疾斜視弱視"
                        alt="希瑪林順潮眼科中心_小兒眼疾斜視弱視"
                      />
                    </div>
                    <div class="service_txt">
                      <p class=" ">結膜炎</p>
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="wow fadeInLeft service_item col-lg-3"
                data-wow-delay="0.9s"
              >
                <div class="service_hover">
                  <a href="/medical-service/strabismusAmblyopia">
                    <div class="service_pic">
                      <img
                        src="https://hkcmereye.com/template/default/picture/servicse/ser_item7.png"
                        title="希瑪林順潮眼科中心_眼整形_眼眶疾病"
                        alt="希瑪林順潮眼科中心_眼整形_眼眶疾病"
                      />
                    </div>
                    <div class="service_txt">
                      <p class=" ">兒童斜弱視</p>
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="wow fadeInLeft service_item col-lg-3"
                data-wow-delay="1s"
              >
                <div class="service_hover">
                  <a href="/medical-service/ocularSurfaceDiseases">
                    <div class="service_pic">
                      <img
                        src="https://hkcmereye.com/template/default/picture/servicse/ser_item8.png"
                        title="希瑪林順潮眼科中心_驗光配鏡"
                        alt="希瑪林順潮眼科中心_驗光配鏡"
                      />
                    </div>
                    <div class="service_txt">
                      <p class=" ">眼表及角膜疾病</p>
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="wow fadeInLeft service_item col-lg-3"
                data-wow-delay="1.1s"
              >
                <div class="service_hover">
                  <a href="/medical-service/amotioRetinae" target="_blank">
                    <div class="service_pic">
                      <img
                        src="https://hkcmereye.com/template/default/picture/servicse/ser_item9.png"
                        title="希瑪林順潮眼科中心_smile矯視"
                        alt="希瑪林順潮眼科中心_smile矯視"
                      />
                    </div>
                    <div class="service_txt">
                      <p class=" ">視網膜脫落及疾病</p>
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="wow fadeInLeft service_item col-lg-3"
                data-wow-delay="0.9s"
              >
                <div class="service_hover">
                  <a href="/medical-service/ocularSurfaceDiseases">
                    <div class="service_pic">
                      <img
                        src="https://hkcmereye.com/template/default/picture/servicse/ser_item10.png"
                        title="希瑪林順潮眼科中心_眼整形_眼眶疾病"
                        alt="希瑪林順潮眼科中心_眼整形_眼眶疾病"
                      />
                    </div>
                    <div class="service_txt">
                      <p class=" ">眼整形及眼眶疾病</p>
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="wow fadeInLeft service_item col-lg-3"
                data-wow-delay="1s"
              >
                <div class="service_hover">
                  <a href="/medical-service/medicalOptometry">
                    <div class="service_pic">
                      <img
                        src="https://hkcmereye.com/template/default/picture/servicse/ser_item11.png"
                        title="希瑪林順潮眼科中心_驗光配鏡"
                        alt="希瑪林順潮眼科中心_驗光配鏡"
                      />
                    </div>
                    <div class="service_txt">
                      <p class=" ">醫學驗光配鏡</p>
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="wow fadeInLeft service_item col-lg-3"
                data-wow-delay="1.1s"
              >
                <div class="service_hover">
                  <a href="https://smile.hkcmereye.com/" target="_blank">
                    <div class="service_pic">
                      <img
                        src="https://hkcmereye.com/template/default/picture/servicse/ser_item12.png"
                        title="希瑪林順潮眼科中心_smile矯視"
                        alt="希瑪林順潮眼科中心_smile矯視"
                      />
                    </div>
                    <div class="service_txt">
                      <p class=" ">屈光矯視</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 诊所环境 -->
    <div class="bg-partTwo py-7 py-xs-2">
      <div
        class="text-center font-weight-bold text-xs-center cener_title fs-md-34 clinic_env fs-lg-34 fs-xs-26"
      >
        真實客戶分享
      </div>
      <swiper
        :loop="false"
        :centered-slides="true"
        :spaceBetween="0"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :pagination="{ clickable: true }"
        :navigation="true"
        :modules="[Autoplay, Navigation, EffectCoverflow]"
        :effect="'coverflow'"
        :coverflow-effect="{
          rotate: 0,
          stretch: 300,
          depth: 210,
          modifier: 2,
          slideShadows: false,
        }"
        id="certify"
        class="pcshow"
      >
        <swiper-slide
          class="slideBox swiper-container"
          v-for="(swiperItem, swiperIndex) in eyeCenterImgList"
          :key="swiperIndex"
        >
          <iframe
            :src="swiperItem.img"
            loading="lazy"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </swiper-slide>
      </swiper>

      <swiper
        :loop="true"
        :slides-per-view="1"
        :spaceBetween="20"
        :autoplay="{ delay: 100000 }"
        :pagination="{ clickable: true }"
        :navigation="true"
        :modules="[Autoplay, Navigation]"
        id="certifyTwo"
        class="mbshow"
      >
        <swiper-slide
          class="slideBox"
          v-for="(swiperItem, swiperIndex) in eyeCenterImgList"
          :key="swiperIndex"
        >
          <iframe
            :src="swiperItem.img"
            loading="lazy"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </swiper-slide>
      </swiper>
    </div>

    <!-- 医疗团队 -->
    <div class="bg-white py-5 pb-0 part-3">
      <div class="container">
        <div
          class="text-center font-weight-bold text-xs-center cener_title fs-md-34 mb-5 fs-lg-34 fs-xs-26"
        >
          醫療團隊
        </div>
        <div style="padding: 30px 0">
          <div class="index_bottom_banner pcshow">
            <swiper
              :loop="true"
              :slides-per-view="4"
              :spaceBetween="20"
              :autoplay="{ delay: 3000 }"
              :pagination="{ clickable: true }"
              :modules="[Autoplay]"
              id="case4"
              class="swiper-container-friend"
            >
              <swiper-slide
                class="slideBox"
                v-for="(swiperItem, swiperIndex) in teamSlides"
                :key="swiperIndex"
              >
                <img :src="swiperItem.image" alt="" />
                <div class="overlay-box">
                  <h3 class="team-name">
                    <a class="team-name"> {{ swiperItem.name }} </a>
                  </h3>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="index_bottom_banner mbshow">
            <swiper
              :loop="true"
              :slides-per-view="1"
              :spaceBetween="20"
              :autoplay="{ delay: 3000 }"
              :pagination="{ clickable: true }"
              :modules="[Autoplay]"
              id="case4"
              class="swiper-container-friend"
            >
              <swiper-slide
                class="slideBox"
                v-for="(swiperItem, swiperIndex) in teamSlides"
                :key="swiperIndex"
              >
                <img :src="swiperItem.image" alt="" />
                <div class="overlay-box">
                  <h3 class="team-name">
                    <a class="team-name"> {{ swiperItem.name }} </a>
                  </h3>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>

    <!-- 客户评分 -->
    <div>
      <div
        class="text-center font-weight-bold text-xs-center cener_title fs-md-34 mb-10 fs-lg-34 fs-xs-26 pingfen_title"
      >
        客戶評分
      </div>
      <div class="person_box">
        <div class="container">
          <div class="pingfen">
            <div class="pingfen_list">
              <div class="item1">
                <img
                  src="https://static.cmereye.com/imgs/2022/12/ac8f98d9a8c790f4.png"
                  alt=""
                />
              </div>
              <div class="item1">
                <img
                  src="https://static.cmereye.com/imgs/2022/12/4f7d7c0523b8eda5.png"
                  alt=""
                />
              </div>
              <div class="item1">
                <img
                  src="https://static.cmereye.com/imgs/2022/12/8c82c0b018270d7c.png"
                  alt=""
                />
              </div>
              <div class="item1">
                <img
                  src="https://static.cmereye.com/imgs/2022/12/ed1709b111c3cf55.png"
                  alt=""
                />
              </div>
              <div class="item1">
                <img
                  src="https://static.cmereye.com/imgs/2022/12/35302f36b3687320.png"
                  alt=""
                />
              </div>
              <div class="item1">
                <img
                  src="https://static.cmereye.com/imgs/2022/12/bf5e84f2da957609.png"
                  alt=""
                />
              </div>
              <div class="item1">
                <img
                  src="https://static.cmereye.com/imgs/2022/12/32788fa8550052da.png"
                  alt=""
                />
              </div>
              <div class="item1">
                <img
                  src="https://static.cmereye.com/imgs/2022/12/49b6a12e9ed5126f.png"
                  alt=""
                />
              </div>
              <div class="item1">
                <img
                  src="https://static.cmereye.com/imgs/2022/12/ac8f98d9a8c790f4.png"
                  alt=""
                />
              </div>
              <div class="item1">
                <img
                  src="https://static.cmereye.com/imgs/2022/12/ed1709b111c3cf55.png"
                  alt=""
                />
              </div>
              <div class="item1">
                <img
                  src="https://static.cmereye.com/imgs/2022/12/49b6a12e9ed5126f.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script   lang="ts" setup>
import { Pagination, Autoplay, Navigation, EffectCoverflow } from 'swiper'

definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: '希瑪眼科中心｜元朗眼科診所',
  meta() {
    return [
      {
        name: 'keywords',
        content: `希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 眼科專科診所 眼科專科中心 香港希瑪眼科 香港希瑪 希瑪 希瑪眼科治療 希瑪驗光 希瑪眼科收費 希瑪眼科治療 希瑪眼科驗光 希瑪眼科矯視中心 希瑪眼科全面眼科檢查 希瑪眼科香港 希瑪眼科治療方案 希瑪林順潮眼科中心 林順潮眼科中心 林順潮眼科醫生 林順潮收費 林順潮眼科診所 眼科希瑪 眼睛疾病 眼科醫生 兒童眼科 香港眼科 眼科醫院 眼睛診所 眼科醫生 眼科診所 將軍澳 將軍澳眼科 將軍澳眼科診所 將軍澳眼科醫生 將軍澳眼科中心`,
      },
      {
        name: 'description',
        content: `香港希瑪眼科中心提供驗光及各種全面眼科檢查，醫療服務包括：白內障、青光眼、小兒眼疾(斜視及弱視)、眼表疾病、眼角膜疾病、黃斑病變、視網膜脫落、眼眶、眼整形及眼腫瘤。眼科診所地點遍佈港、九、新界各區，共有11間眼科診所。香港希瑪眼科中心共有22名經驗豐富的眼科醫生、視光師及醫療護理人員組成，提供專業眼科醫療服務，為客人提供安全、準確、可靠的眼科檢查及眼科醫療服務，立即瀏覽了解更多。眼科醫生方面，一共有22位眼科醫生，包括：林順潮眼科醫生、李佑榮眼科醫生、范愷眼科醫生、黃俊華眼科醫生、劉凱珊眼科醫生、李煒業眼科醫生、邱俊源眼科醫生、李琬微眼科醫生、胡偉君眼科醫生、李少雄眼科醫生、黎浩樺眼科醫生、李德倫眼科醫生、黃禮文眼科醫生、張瀞之眼科醫生、林寶生眼科醫生、林己明眼科醫生、張明權眼科醫生、陳偉樂眼科醫生、梁苑珊眼科醫生、鄒樞韻眼科醫生、尹浩柟醫生、鄒樂韻醫生。強大的眼科醫生團隊，能為大眾提供提供安全、準確、可靠的眼科檢查及醫療服務。`,
      },
    ]
  },
}))
const locale = useState<string>('locale.setting')

const eyeCenterImgList = [
  {
    img: 'https://www.youtube.com/embed/fDo35wPIcBw?si=bQGhAFdkAjNeB0Md',
  },
  {
    img: 'https://www.youtube.com/embed/8ip-wGoPqmQ?si=zOhre5Vjd_8MKccF',
  },
  {
    img: 'https://www.youtube.com/embed/h6H16bsZRAE?si=m93oEuGAIpV4ZNcV',
  },
  {
    img: 'https://www.youtube.com/embed/zbYpdLZtL0c?si=Ut5Rfau6oLzqxpFZ',
  },
  {
    img: 'https://www.youtube.com/embed/Jt0fmKmfiIU?si=0KDi84kmkTi3gZnG',
  },

  {
    img: 'https://www.youtube.com/embed/F5fdrLskDdc?si=LtDK6KFgoIz_BNTR',
  },
  {
    img: 'https://www.youtube.com/embed/Ds5NBkrQLXo?si=dUeT3ar_Q5zEp0Rl',
  },
  {
    img: 'https://www.youtube.com/embed/0Hscxb-v_Ig?si=w3A2HNYwNtygA72K',
  },
]

// 诊所环境轮播图数据
const clinicSlides = [
  {
    image: 'https://static.cmereye.com/imgs/2023/04/e9cb0911aef92773.avif',
    alt: 'TwBg1',
  },
  {
    image: 'https://static.cmereye.com/imgs/2023/04/84c660b6fda6f717.avif',
    alt: 'TwBg2',
  },
  {
    image: 'https://static.cmereye.com/imgs/2023/04/c06975fb899d88de.avif',
    alt: 'TwBg3',
  },
  {
    image: 'https://static.cmereye.com/imgs/2023/04/6ea29f50b56a6bbd.avif',
    alt: 'TwBg4',
  },
  {
    image: 'https://static.cmereye.com/imgs/2023/04/01a1ea937dfa67d8.avif',
    alt: 'TwBg5',
  },

  {
    image: 'https://static.cmereye.com/imgs/2023/04/474baea810e62403.avif',
    alt: 'TwBg5',
  },
  {
    image: 'https://static.cmereye.com/imgs/2023/04/c962078056d20fc0.avif',
    alt: 'TwBg5',
  },
  {
    image: 'https://static.cmereye.com/imgs/2023/04/f3e525e41ae9d7a9.avif',
    alt: 'TwBg5',
  },
  {
    image: 'https://static.cmereye.com/imgs/2023/04/84486308cc48cb63.avif',
    alt: 'TwBg5',
  },
  {
    image: 'https://static.cmereye.com/imgs/2023/04/d75721196bd36c39.avif',
    alt: 'TwBg5',
  },
  {
    image: 'https://static.cmereye.com/imgs/2023/04/bebf0c4a67b3c25c.avif',
    alt: 'TwBg5',
  },
  {
    image: 'https://static.cmereye.com/imgs/2023/04/24dfbcb9b2219437.avif',
    alt: 'TwBg5',
  },
  {
    image: 'https://static.cmereye.com/imgs/2023/04/872fd7d2598f3a2e.avif',
    alt: 'TwBg5',
  },

  {
    image: 'https://static.cmereye.com/imgs/2023/04/20e4703fc932ad18.avif',
    alt: 'TwBg5',
  },

  {
    image: 'https://static.cmereye.com/imgs/2023/04/5f932df4c818491e.avif',
    alt: 'TwBg5',
  },
]

// 医疗团队轮播图数据
const teamSlides = [
  {
    image: 'https://static.cmereye.com/imgs/2022/12/ed18fa038434cd78.png',
    name: '林順潮醫生',
  },
  {
    image: 'https://statichk.cmermedical.com/HKEYECMER/54154895641564.avif',
    name: '李佑榮醫生',
  },
  {
    image: 'https://www.hkcmereye.com/template/default/picture/doctor_fk.jpg',
    name: '范愷醫生',
  },
  {
    image: 'https://www.hkcmereye.com/template/default/picture/doctor_hjh.jpg',
    name: '黃俊華醫生',
  },
  {
    image: 'https://www.hkcmereye.com/template/default/picture/doctor_lks.jpg',
    name: '劉凱珊醫生',
  },
  {
    image: 'https://www.hkcmereye.com/template/default/picture/doctor_lwy.jpg',
    name: '李煒業醫生',
  },
  {
    image: 'https://www.hkcmereye.com/template/default/picture/doctor_qjy.jpg',
    name: '邱俊源醫生',
  },
  {
    image: 'https://static.cmereye.com/imgs/2023/08/7eaf25af1aed62ba.png',
    name: '李琬微醫生',
  },
  {
    image: 'https://www.hkcmereye.com/template/default/picture/doctor_hwj.jpg',
    name: '胡偉君醫生',
  },
  {
    image: 'https://hkcmereye.com/template/default/picture/doctor_lsh.jpg',
    name: '李少雄醫生',
  },
  {
    image:
      'https://static.cmereye.com/static/hkcmereye/doctor/%E9%BB%8E%E6%B5%A9%E6%A8%BA_KennyLai.png',
    name: '黎浩樺醫生',
  },
  {
    image:
      'https://static.cmereye.com/static/hkcmereye/doctor/%E6%9D%8E%E5%BE%B7%E5%80%AB_StephenLi.png',
    name: '李德倫醫生',
  },
  {
    image:
      'https://static.cmereye.com/static/hkcmereye/doctor/%E9%BB%84%E7%A6%AE%E6%96%87_RaymondWong.png',
    name: '黃禮文醫生',
  },
  {
    image: 'https://static.cmereye.com/imgs/2023/08/423d199fdb161409.jpg',
    name: '張瀞之醫生',
  },
  {
    image:
      'https://static.cmereye.com/static/hkcmereye/doctor/%E6%9E%97%E5%AF%B6%E7%94%9F_CarolLam%20.png',
    name: '林寶生醫生',
  },
  {
    image:
      'https://static.cmereye.com/static/hkcmereye/doctor/%E6%9E%97%E5%B7%B1%E6%98%8E_JasmineLam.png',
    name: '林己明醫生',
  },
  {
    image:
      'https://www.hkcmereye.com/static/upload/image/20201028/1603854608124490.jpg',
    name: '張明權醫生',
  },
  {
    image:
      'https://www.hkcmereye.com/static/upload/image/20201028/1603855080360770.jpg',
    name: '陳偉樂醫生',
  },
  {
    image:
      'https://www.hkcmereye.com/static/upload/image/20211018/1634523531823992.jpg',
    name: '梁苑珊醫生',
  },
  {
    image:
      'https://www.hkcmereye.com/static/upload/image/20220406/1649211019454510.jpg',
    name: '鄒樞韻醫生',
  },
  {
    image:
      'https://www.hkcmereye.com/static/upload/image/20220408/1649380369273990.jpg',
    name: '尹浩柟醫生',
  },
  {
    image:
      'https://www.hkcmereye.com/static/upload/image/20220408/1649380438451221.jpg',
    name: '鄒樂韻醫生',
  },
  {
    image: 'https://static.cmereye.com/imgs/2023/08/7dce7444c1c14da4.jpg',
    name: '陳鼎鼐醫生',
  },
  {
    image:
      'https://hkcmereye.com/static/upload/image/20240528/1716881356882191.jpg',
    name: '熊健慧醫生',
  },
  {
    image:
      'https://hkcmereye.com/static/upload/image/20240802/1722560007196049.jpg',
    name: '高德全醫生',
  },
  {
    image:
      'https://hkcmereye.com/static/upload/image/20240902/1725240859365715.jpg',
    name: '吳兆駿醫生',
  },
]
</script>
<style lang="scss" scoped>
@import url('~/assets/sass/bootstrap.css');
@import url('~/assets/sass/aoyun.css');
@import url('~/assets/sass/comm.css');
@import url('~/assets/sass/certify.css');
@import url('~/assets/sass/css.css');

@import url('~/assets/sass/swiper.min.css');

.text-blue {
  color: #1b407a;
}

.service_box {
  max-width: unset;
  margin-top: 61px;
}

.head_banner {
  max-height: 700px;
  object-fit: cover;
}

@media only screen and (min-width: 768px) {
  .mbshow {
    display: none !important;
  }

  .server-yiliao {
    padding-top: 8rem;
  }

  .index_bottom_banner {
    max-width: 1200px;
    position: relative;
  }

  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    right: -47px !important;
  }

  .index_bottom_banner .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: -71px !important;
  }

  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    left: -26px !important;
  }

  .imgBox {
    position: relative;
    width: 500px;
    height: auto;
  }

  .imgBox .swiper-container {
    width: 100%;
  }

  .textimgbox .imgBox img {
    width: 100%;
  }

  .imgBox .swiper-button-next::after,
  .imgBox .swiper-button-prev::after {
    content: 'none';
  }

  .imgBox .swiper-button-next {
    background: url(https://static.cmereye.com/imgs/2022/12/4fd46d52a47c62e5.png)
      no-repeat !important;
    background-size: 80% !important;
  }

  .imgBox .swiper-button-prev {
    left: -47px !important;
    background: url(https://static.cmereye.com/imgs/2022/12/2278de61c32ceb46.png)
      no-repeat !important;
    background-size: 80% !important;
  }

  /* 客户评分  start */
  .person_box {
    background: url(https://static.cmereye.com/imgs/2022/12/19db72a3876114c4.png)
      no-repeat;
    background-size: 100% 100%;
    height: 1000px;
    position: relative;
  }

  .pingfen_list {
    grid-gap: 10px;
    margin: 50px 0;
    border-radius: 10px;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 0fr;
    overflow: hidden;
    width: 90%;
  }

  .pingfen_list img {
    max-width: 100%;
  }

  .pingfen_list .item1 {
    /*width: calc(100% / 4);*/
    display: inline-block;
    height: 100%;
    padding: 7px;
  }

  .pingfen {
    background-color: #dee6fb;
    border-radius: 20px;
    width: 1200px;
    height: fit-content;
    /* padding-top: 39px; */
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    /* margin-top: 187px; */
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  /* 客户评分  end */
  /* 朗眼科診所環境 start */
  #certify {
    margin-top: 54px !important;
    padding-left: 100px;
    padding-right: 100px;
  }

  .clinic_env {
    color: #ffffff !important;
    margin-top: 0 !important;
  }
  :deep(#certify .swiper-button-prev) {
    left: 30px;
  }
  :deep(#certify .swiper-button-next) {
    right: 30px;
  }
  :deep(#certify .swiper-button-next::after) {
    background: rgba(6, 178, 201, 0.4);
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    font-size: 1.3rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
    flex-shrink: 0;
  }
  :deep(#certify .swiper-button-prev::after) {
    background: rgba(6, 178, 201, 0.4);
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    font-size: 1.3rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
    flex-shrink: 0;
  }

  //  :deep(#certify .swiper-button-next)  {

  //     background: url(https://static.cmereye.com/imgs/2022/12/4fd46d52a47c62e5.png)
  //       no-repeat !important;
  //     background-size: 49% !important;
  //     /* width: auto !important; */
  //   }

  //  :deep(#certify .swiper-button-prev){
  //     background: url(https://static.cmereye.com/imgs/2022/12/2278de61c32ceb46.png)
  //       no-repeat !important;
  //     background-size: 49% !important;
  //     /* width: auto !important; */
  //   }

  #certify .swiper-slide {
    background: unset !important;
    box-shadow: unset !important;
    height: auto !important;
    display: flex;
    justify-content: center;
  }

  #certify .swiper-container {
    padding-top: 60px;
  }
  #certify .swiper-slide {
    overflow: visible;
  }
  #certify .swiper-slide img,
  #certify .swiper-slide iframe {
    width: 500px;
    height: 333px;
    flex-shrink: 0;
  }
  .pcshow .swiper-button-next,
  .pcshow .swiper-button-prev {
    color: white !important;
  }

  .bg-partTwo {
    background: url('https://static.cmereye.com/imgs/2022/12/e048b8f98831bbf3.jpg');
  }

  /* 朗眼科診所環境 end */

  /* 眼科服务 start */
  .service_box .service_item .service_hover .service_txt p {
    /*padding-top: 2rem;*/
    margin-top: 1rem;
  }

  .service_box .service_item .service_pic {
    height: auto !important;
  }

  .service_box .service_item .service_pic img {
    max-width: 137px !important;
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;
  }
  .background-server {
    background-color: #e9f0fe;
  }

  /* 眼科服务 end */
  /*医生团队* start*/
  .swiper-container-friend img {
    width: 100%;
  }

  .swiper-container-friend .overlay-box {
    position: absolute;
    left: 10px;
    bottom: 10px;
    right: 10px;
    text-align: center;
  }

  .swiper-container-friend .overlay-box h3 a {
    position: relative;
    padding: 16px 15px;
    display: block;
    font-size: 20px;
    font-family: 'Open Sans';
    color: #ffffff;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 0px 0px 5px 5px;
    background: #00a1fa;
  }

  /*医生团队* end/	
		/* 中心介绍  star*/
  .cener_title {
    color: #1b407a;
    margin-top: 100px;
    position: relative;
  }

  .cener_title:after {
    position: absolute;
    content: '';
    background: url(https://static.cmereye.com/imgs/2022/12/d5f545332ae6097e.png)
      no-repeat;
    bottom: -25px;
    width: 100%;
    height: 16px;
    left: 0;
    right: 0;
    background-position: center;
  }

  .center_datails {
    display: flex;
    justify-content: center;
    margin-top: 88px;
  }

  .center_datails_text {
    flex: 1;
  }

  .center_datails_text ul li {
    font-size: 17px;
    color: #1b407a;
    line-height: 56px;
  }

  .center_datails_text .p-border {
    background-color: #1b407a;
    color: #ffffff;
    padding: 10px 5px;
    border-radius: 60px;
    margin-right: 10px;
  }

  .center_details_re {
    padding-top: 57px;
  }

  .center_details_re p {
    font-size: 17px;
    color: #666;
    line-height: 36px;
  }

  .center_datails_text p {
    font-size: 17px;
    color: #666;
    line-height: 36px;
  }

  .center_datails_text strong {
    font-size: 17px;
    color: #666;
    line-height: 36px;
  }

  .center_evn {
    flex: 1;
  }

  .center_datails .center_evn img {
    width: 100%;
  }

  /* 中心介绍  end*/
  /* 头部banner */
  .head_img img {
    width: 100%;
  }

  .head_title {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin: 0 auto; */
    left: 0;
    right: 0;
    margin-top: 115px;
  }

  .head_title span {
    font-size: 70px;
    line-height: 75px;
    color: #ffffff;
  }

  .head_logo {
    position: absolute;
    padding: 50px;
  }
}

@media screen and (min-width: 100px) and (max-width: 768px) {
  .pcshow {
    display: none !important;
  }

  .cener_title {
    color: #1b407a;
    margin-top: 10px;
    position: relative !important;
  }

  .cener_title:after {
    position: absolute;
    content: '';
    background: url(https://static.cmereye.com/imgs/2022/12/d5f545332ae6097e.png)
      no-repeat;
    bottom: -15px;
    width: 35%;
    height: 16px;
    left: 32vw;
    right: 0;
    background-position: center;
  }

  .service_box {
    margin-top: 29px;
  }

  .imgBox {
    width: 100%;
    position: relative;
  }

  .imgBox .swiper-button-next::after,
  .imgBox .swiper-button-prev::after {
    content: '';
  }

  /*头部banner start  */
  .head_logo {
    padding: unset;
    position: absolute;
  }

  .head_logo img {
    width: 19vw;
    padding: 64px 16px;
  }

  .head_img .head_banner {
    width: 100%;
    margin-top: 12.6vw;
    /*height: 46vw;*/
  }

  .head_title {
    margin-top: 77px;
    position: absolute;
    /* margin: 0 auto; */
    left: 0;
    right: 0;
  }

  .head_title span {
    font-size: 25px;
    line-height: 10px;
    color: #ffffff;
  }

  /*头部banner end*/
  /*中心介绍satr */
  .center_title {
    color: #1b407a;
    margin-top: 10px;
    position: relative;
  }

  .center_datails {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    flex-direction: column;
  }

  .center_datails_text {
    flex: 1;
    padding-bottom: 30px;
  }

  .center_datails_text ul li {
    font-size: 17px;
    color: #1b407a;
    line-height: 56px;
  }

  .center_datails_text .p-border {
    background-color: #1b407a;
    color: #ffffff;
    padding: 10px 5px;
    border-radius: 60px;
    margin-right: 10px;
  }

  .center_details_re {
    padding-top: 57px;
  }

  .center_details_re p {
    font-size: 17px;
    color: #666;
    line-height: 36px;
  }

  .center_datails_text p {
    font-size: 17px;
    color: #666;
    line-height: 36px;
  }

  .center_datails_text strong {
    font-size: 17px;
    color: #666;
    line-height: 36px;
  }

  .center_evn {
    flex: 1;
  }

  .center_datails .center_evn img {
    width: 100%;
  }

  /*中心介绍 end*/
  /* 朗眼科診所環境 start */
  #certifyTwo {
    margin-top: 54px !important;
    position: relative;
  }

  .clinic_env {
    color: #ffffff !important;
    margin-top: 0 !important;
  }
 :deep( #certifyTwo .swiper-button-next::after){
  content: "none";
 }
  :deep( #certifyTwo .swiper-button-prev::after){
  content: "none";
 }
 :deep( #certifyTwo .swiper-button-next) {

    right: 10px;
    background: url(https://static.cmereye.com/imgs/2022/12/4fd46d52a47c62e5.png)
      no-repeat !important;
    background-size: 49% !important;
  }

 :deep(#certifyTwo .swiper-button-prev ) {

    left: 20px;
    background: url(https://static.cmereye.com/imgs/2022/12/2278de61c32ceb46.png)
      no-repeat !important;
    background-size: 49% !important;
  }

  #certifyTwo .swiper-slide {
    background: unset !important;
    box-shadow: unset !important;
    height: auto;
    /* width: 240px !important; */
  }

  #certifyTwo .swiper-slide img {
    width: 100%;
    height: auto;
  }

  #certifyTwo .swiper-slide iframe {
    /* width: 290px;
                height: 200px; */
    width: 74.35vw;
    height: 51.28vw;
    margin: 0 auto;
    display: block;
  }

  // #certifyTwo .swiper-slide {
  //   background: unset !important;
  //   box-shadow: unset !important;
  //   height: auto;
  //   width: 240px !important;
  // }

  // #certifyTwo .swiper-slide img {
  //   width: 100%;
  //   height: auto;
  // }

  // #certifyTwo.swiper-slide {
  //   transition: transform 0.5s, opacity 0.5s;
  //   opacity: 0.6;

  //   transform: scale(0.7);
  // }

  /* 当前活跃幻灯片 */
  // #certifyTwo .swiper-slide-next {
  //   opacity: 1;

  //   transform: scale(1);
  //   /* 恢复到原始大小 */
  //   z-index: 2;
  // }
  // .service_box>div>div{
  //   justify-content: space-between;
  //   gap: 10px;
  // }
  // .service_item{
  //   display: block;
  //  width: auto;
  //  text-align:center;
  // }
  //   .service_item p{
  //     max-width: 75px;
  //   }
  // .service_item img{
  //   margin:  0 auto;
  // }

  #certifyTwo .swiper-slide-active,
  #certifyTwo .swiper-slide-prev {
    // transform: translateY(10%) scale(0.7);
    z-index: 1;
  }

  .bg-partTwo {
    background: url('https://static.cmereye.com/imgs/2022/12/e048b8f98831bbf3.jpg');
  }

  /* 朗眼科診所環境 end */
  /*医生团队 start */

  .index_bottom_banner {
    position: relative;
  }

  .swiper-container-friend img {
    width: 100%;
  }

  .swiper-container-friend .overlay-box {
    position: absolute;
    left: 10px;
    bottom: 10px;
    right: 10px;
    text-align: center;
  }

  .swiper-container-friend .overlay-box h3 a {
    position: relative;
    padding: 16px 15px;
    display: block;
    font-size: 20px;
    font-family: 'Open Sans';
    color: #ffffff;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 0px 0px 5px 5px;
    background: #00a1fa;
  }

  .index_bottom_banner .swiper-button-prev img {
    width: 92%;
  }

  .index_bottom_banner .swiper-button-next img {
    width: 92%;
  }

  .index_bottom_banner .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    background-image: unset !important;
    left: -11px !important;
  }

  .index_bottom_banner .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    background-image: unset !important;
    right: -8px !important;
  }

  /*医生团队 end */
  /* 客户评分  start */
  .person_box {
    background: url(https://static.cmereye.com/imgs/2022/12/19db72a3876114c4.png)
      no-repeat;
    background-size: 100% 100%;
    height: 1247px;
    position: relative;
  }

  .pingfen_list {
    background-color: #ffffff;
    height: 90%;
    width: 90%;
    display: flex;
    overflow: scroll;
    flex-direction: column;
  }

  .pingfen_list img {
    max-width: 100%;
  }

  .pingfen_list .item1 {
    display: inline-block;
    height: 100%;
    padding: 10px;
  }

  .pingfen {
    background-color: #dee6fb;
    border-radius: 20px;

    height: 1070px;
    /* padding-top: 39px; */
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 62px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .pingfen_title {
    margin-bottom: 54px !important;
  }

  /* 客户评分  end */

  .textimgbox {
    flex-flow: column;
    margin-top: 30px;
  }

  .textimgbox img {
    width: 100% !important;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}

.service_box .service_item .service_pic img {
  max-width: 80px;
}

ul.contentbox {
  font-size: 17px;
}

ul.contentbox li {
  margin-bottom: 15px;
  display: flex;
  align-items: self-start;
  justify-content: flex-start;
}

ul.contentbox li i {
  font-size: 20px;
  color: #1b407a;
  margin-right: 15px;
}

.textimgbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
}

.textimgbox img {
  width: 45%;
}

section {
  font-size: 16px;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: #2958a3;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: all 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-5px);
  background-color: #2958a3;
  color: white;
  box-shadow: 0 5px 15px rgba(0, 87, 146, 0.3);
}

.highlight {
  background: linear-gradient(
    120deg,
    rgba(255, 209, 102, 0.2),
    rgba(255, 209, 102, 0.4)
  );
  padding: 1rem 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #29c384;
  font-weight: 500;
}

.highlight-box {
  background-color: rgba(0, 187, 240, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 5px solid #2958a3;
}

.highlight-title {
  font-size: 20px;
  font-weight: 700;
  color: #2958a3;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.highlight-text {
  font-size: 18px;
  margin-bottom: 0;
}

.section-title {
  position: relative;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  font-weight: 700;
  font-size: 2.5rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 3px;
  background-color: #29c384;
}

.section-title.text-center::after {
  left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 991px) {
  .section-title {
    font-size: 2rem;
  }
}
@media (max-width: 767px) {
  .section-title {
    font-size: 1.7rem;
  }
}

.carouselExampleFade {
  padding: 0;
  margin-bottom: 2rem;
  height: 200px;
  border-radius: 15px;
}
.eyeList {
  height: -webkit-fill-available;
}

@media screen and (min-width: 768px) {
  .carouselExampleFade {
    max-width: 546px;
    height: 350px;
    border-radius: 15px;
  }

  .eyeList {
    height: -webkit-fill-available;
  }
}

@media screen and (max-width: 768px) {
  .carouselExampleFade .swiper-pagination {
    bottom: 10px;
  }
}
@media screen and (min-width: 768px) {
  .carouselExampleFade .swiper-pagination {
    bottom: 30px;
  }
}

@media screen and (min-width: 992px) {
  :deep(.carouselExampleFade .swiper-button-next) {
    right: 20px;
  }
  :deep(.carouselExampleFade .swiper-button-prev) {
    left: 20px;
  }

  :deep(.carouselExampleFade .swiper-button-prev:after) {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    padding: 5px;
    width: 50px;
    height: 50px;
    padding-top: 8px;
    border-radius: 50%;
    backdrop-filter: blur(5px);
    flex-shrink: 0;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :deep(.carouselExampleFade .swiper-button-next::after) {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    padding: 5px;
    width: 50px;
    height: 50px;
    padding-top: 8px;
    border-radius: 50%;
    backdrop-filter: blur(5px);
    flex-shrink: 0;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

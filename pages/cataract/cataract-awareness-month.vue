<script lang="ts" setup>
import { Autoplay, Pagination, Navigation } from 'swiper'

definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')

useHead(() => ({
  title: '香港希瑪眼科中心｜眼科診所｜六月白內障關注月',

  meta() {
    return [
      {
        hid: 'description',
        name: 'description',
        content:
          '六月白內障關注月 香港希瑪眼科中心提供驗光及各種全面眼科檢查，醫療服務包括：白內障、青光眼、小兒眼疾(斜視及弱視)、眼表疾病、眼角膜疾病、黃斑病變、視網膜脫落、眼眶、眼整形及眼腫瘤。眼科診所地點遍佈港、九、新界各區，共有11間眼科診所。香港希瑪眼科中心共有22名經驗豐富的眼科醫生、視光師及醫療護理人員組成，提供專業眼科醫療服務，為客人提供安全、準確、可靠的眼科檢查及眼科醫療服務，立即瀏覽了解更多。眼科醫生方面，一共有22位眼科醫生，包括：林順潮眼科醫生、李佑榮眼科醫生、范愷眼科醫生、黃俊華眼科醫生、劉凱珊眼科醫生、李煒業眼科醫生、邱俊源眼科醫生、李琬微眼科醫生、胡偉君眼科醫生、李少雄眼科醫生、黎浩樺眼科醫生、李德倫眼科醫生、黃禮文眼科醫生、張瀞之眼科醫生、林寶生眼科醫生、林己明眼科醫生、張明權眼科醫生、陳偉樂眼科醫生、梁苑珊眼科醫生、鄒樞韻眼科醫生、尹浩柟醫生、鄒樂韻醫生。強大的眼科醫生團隊，能為大眾提供提供安全、準確、可靠的眼科檢查及醫療服務。',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '六月 白內障 關注月  希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 眼科專科診所 眼科專科中心 香港希瑪眼科 香港希瑪 希瑪 希瑪眼科治療 希瑪驗光 希瑪眼科收費 希瑪眼科治療 希瑪眼科驗光 希瑪眼科矯視中心 希瑪眼科全面眼科檢查 希瑪眼科香港 希瑪眼科治療方案 希瑪林順潮眼科中心 林順潮眼科中心 林順潮眼科醫生 林順潮收費 林順潮眼科診所 眼科希瑪 眼睛疾病 眼科醫生 兒童眼科 香港眼科 眼科醫院 眼睛診所 眼科醫生 眼科診所 將軍澳 將軍澳眼科 將軍澳眼科診所 將軍澳眼科醫生 將軍澳眼科中心',
      },
    ]
  },
}))
// 传递背景色
const backgd = [
  '#3a5fb2;',
  '-webkit-linear-gradient(to right, #83cdd3, #3a5fb2);',
  'linear-gradient(to right, #83cdd3, #3a5fb2);',
]

const bannerConfig: any = ref([])

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
    img:"https://www.youtube.com/embed/zbYpdLZtL0c?si=Ut5Rfau6oLzqxpFZ"
  },
    {
    img: 'https://www.youtube.com/embed/Jt0fmKmfiIU?si=0KDi84kmkTi3gZnG',
  },

  {
    img: 'https://www.youtube.com/embed/F5fdrLskDdc?si=LtDK6KFgoIz_BNTR',
  },
  {
    img:"https://www.youtube.com/embed/Ds5NBkrQLXo?si=dUeT3ar_Q5zEp0Rl"
  },
  {
    img: 'https://www.youtube.com/embed/0Hscxb-v_Ig?si=w3A2HNYwNtygA72K',
  },
]

// 折叠问答
const meetArr = [
  {
    title:
      'pages.medical_service.multiFocal_intraocular_lens_meetArr.meetArr_title1',
    agree: [
      'pages.medical_service.multiFocal_intraocular_lens_meetArr.meetArr_agree1',
    ],
  },
  {
    title:
      'pages.medical_service.multiFocal_intraocular_lens_meetArr.meetArr_title2',
    agree:
      'pages.medical_service.multiFocal_intraocular_lens_meetArr.meetArr_agree2',
  },
  {
    title:
      'pages.medical_service.multiFocal_intraocular_lens_meetArr.meetArr_title3',
    agree:
      'pages.medical_service.multiFocal_intraocular_lens_meetArr.meetArr_agree3',
  },
  {
    title:
      'pages.medical_service.multiFocal_intraocular_lens_meetArr.meetArr_title4',
    agree:
      'pages.medical_service.multiFocal_intraocular_lens_meetArr.meetArr_agree4',
  },
]
</script>

<template>
  <div class="page-cataract">
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="row">
          <div
            class="col-lg-8 col-md-10 mx-auto mt-3 hero-content text-center animated fadeIn"
          >
            <h1 class="display-3 font-weight-bold mb-4 fs-xs-26">
              6月國際白內障關注月
            </h1>
            <p class="lead mb-5">
              提升公眾對白內障的認知，希瑪眼科中心推出一系列活動倡導及早治療的重要性。
            </p>
            <div class="">
              <a
                href="#activities"
                class="btn btn-primary btn-lg pulse infinite fadeIn btn-outline-hover"
                >了解活動詳情</a
              >
              <a
                href="#services"
                class="btn btn-outline-light btn-lg mx-3 mt-xs-2"
                style="border: 1px solid white"
                >我們的服務</a
              >
              <a
                href="#video"
                class="btn btn-outline-light btn-lg mt-xs-2"
                style="border: 1px solid white"
                >真實客戶分享影片</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5">
      <div class="container">
        <div class="row bnzv3_container">
          <div class="s2 mx-auto mt-5">
            <h2><span>白內障-致盲主因</span></h2>
          </div>
          <div class="col-lg-8 mx-auto text-center animated fadeIn mb-5">
            <p
              class="lead text-left fs-22 fs-xs-16"
              style="font-family: system-ui"
            >
              六月是全球白內障關注月（Cataract Awareness
              Month）。白內障是全球主要致盲的原因之一，也是香港常見的眼疾。70至79歲年齡層的發病率高達70%，而18歲以上整體人口中近30%患有白內障，顯示白內障眼疾已逐漸影響各個年齡層，值得我們重視。為提升公眾對白內障的認知，希瑪眼科中心將於六月「國際白內障關注月」推出一系列活動，倡導及早治療的重要性。
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="counter-box animated fadeInUp fadeIn">
              <div class="counter-number">70%</div>
              <div class="counter-text">70至79歲年齡層人士的發病率</div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div
              class="counter-box animated fadeInUp fadeIn"
              data-wow-delay="0.2s"
            >
              <div class="counter-number">30%</div>
              <div class="counter-text white-spice">
                18歲以上整體人口患上白內障的發病比率
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div
              class="counter-box animated fadeInUp fadeIn"
              data-wow-delay="0.4s"
            >
              <div class="counter-number">No.1</div>
              <div class="counter-text">主要致盲原因首位</div>
            </div>
          </div>
        </div>
        <p>
          資料來源：<a
            href="https://news.hket.com/article/2177275/7%E6%97%AC%E9%95%B7%E8%80%857%E6%88%90%E6%82%A3%E7%99%BD%E5%85%A7%E9%9A%9C%E3%80%80%E5%83%854.8-%E6%8E%A5%E5%8F%97%E6%89%8B%E8%A1%93"
            target="_blank"
            >*香港經濟日報 2018年</a
          >
          、
          <a
            href="https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=214184&Lang=CHIB5&Dimension=100&Parent_ID=214172"
            target="_blank"
            >*醫院管理局 2023年</a
          >
        </p>
      </div>
    </section>

    <section id="activities" class="py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5">活動詳情及細節</h2>

        <!-- Activity 1 -->
        <div class="row mb-5">
          <div class="col-lg-5">
            <a href="https://pse.is/7f8xxj" target="_blank"
              ><img
                src="https://statichk.cmermedical.com/opd/temporary/CataractAwarenessMonth1.avif"
                alt="術後睛彩禮遇"
                class="img-fluid rounded-lg shadow"
            /></a>
          </div>
          <div class="col-lg-7">
            <div class="activity-content">
              <div class="highlight-title">
                <i class="fa fa-gift activity-emoji"></i> 術後"睛"彩禮遇
              </div>
              <div class="highlight-box">
                <div class="highlight-title">
                  <i class="fa fa-star activity-emoji"></i> 活動內容
                </div>
                <p class="highlight-text">
                  完成白內障手術後，即可獲贈「眼睛新旅程啟航套裝」（精美旅行用品組合）1份
                  <small>(價值HK$150)</small>
                </p>
              </div>
              <div class="highlight-title">
                <i class="fa fa-hand-o-right activity-emoji"></i> 如何參與活動？
              </div>
              <div class="activity-step">
                <div class="step-number">1</div>
                <div class="step-text">
                  掃描活動海報上的 QR Code 或 點擊以下連結進入活動登記表單
                  <a href="https://forms.gle/Eukwemd4UU12XF8w5" target="_blank"
                    ><small>https://forms.gle/Eukwemd4UU12XF8w5</small>
                  </a>
                </div>
              </div>
              <div class="activity-step">
                <div class="step-number">2</div>
                <div class="step-text">
                  填妥基本個人資料及提供已預約的白內障手術資訊
                </div>
              </div>
              <div class="activity-step">
                <div class="step-number">3</div>
                <div class="step-text">
                  希瑪同事將於7月初主動聯繫符合資格的客人，安排於您選擇的指定日期及地點領取專屬禮品包！
                </div>
              </div>

              <div class="activity-note">
                <i class="fa fa-info-circle mr-2"></i>
                禮品數量有限，送完即止。每位患者限獲一份。
              </div>

              <a
                href="https://hkcmereye.com/contact/"
                target="_blank"
                class="mt-4 d-block"
              >
                <div class="location-tag">
                  <i class="fa fa-map-marker mr-1"></i> 中環診所
                </div>
                <div class="location-tag">
                  <i class="fa fa-map-marker mr-1"></i> 旺角診所
                </div>
                <div class="location-tag">
                  <i class="fa fa-map-marker mr-1"></i> 元朗診所
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Activity 2 -->
        <div class="row mb-5">
          <div class="col-lg-5 order-lg-2">
            <img
              src="https://statichk.cmermedical.com/opd/temporary/CataractAwarenessMonth2.avif"
              alt="按讚分享，即送您獎"
              class="img-fluid rounded-lg shadow"
            />
          </div>
          <div class="col-lg-7 order-lg-1">
            <div class="activity-content">
              <div class="highlight-title">
                <i class="fa fa-thumbs-up activity-emoji"></i>
                按讚分享，即送您獎
              </div>
              <div class="highlight-box">
                <div class="highlight-title">
                  <i class="fa fa-star activity-emoji"></i> 活動內容
                </div>
                <p class="highlight-text">
                  完成以下簡單步驟，即可獲得希瑪眼科旅行收納包1個
                </p>
              </div>
              <div class="highlight-title">
                <i class="fa fa-hand-o-right activity-emoji"></i> 如何參與活動？
              </div>
              <div class="activity-step">
                <div class="step-number">1</div>
                <div class="step-text">
                  <a
                    class="fs-xs-12"
                    href="https://www.facebook.com/cmereyecenter/"
                    target="_blank"
                    rel="nofollow"
                    ><button class="fb-text">
                      <svg
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"
                          ></path>
                        </g>
                      </svg>
                      <span>Facebook</span></button
                    >&nbsp;讚好希瑪眼科Facebook專頁（@希瑪眼科 C-MER Eye
                    Center）</a
                  >或<br /><a
                    href="https://www.instagram.com/cmer_eye_center/"
                    target="_blank"
                    rel="nofollow"
                    class="fs-xs-12"
                    ><button class="ins-text">
                      <svg
                        viewBox="0 0 16 16"
                        class="bi bi-instagram"
                        fill="currentColor"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                        ></path>
                      </svg>
                      <span>Instagram</span></button
                    >&nbsp;追蹤Instagram（@cmer_eye_center）</a
                  >
                </div>
              </div>
              <div class="activity-step">
                <div class="step-number">2</div>
                <div class="step-text">
                  於診所內拍攝環境照片並公開分享至個人的Facebook/Instagram
                </div>
              </div>
              <div class="activity-step">
                <div class="step-number">3</div>
                <div class="step-text">
                  將照片公開分享至您的Facebook或Instagram，並標註以下標籤：
                </div>
              </div>

              <div class="my-3 text-center">
                <span class="hashtag">#希瑪眼科</span>
                <span class="hashtag">#2025光明傳遞愛</span>
                <span class="hashtag">#白內障關注月</span>
              </div>

              <div class="activity-step">
                <div class="step-number">4</div>
                <div class="step-text">
                  向我們的前台工作人員出示您的分享，即可獲得旅行袋乙個
                </div>
              </div>

              <div class="activity-note">
                <i class="fa fa-info-circle mr-2"></i>
                如需協助使用社交媒體，我們的工作人員很樂意為您提供幫助。
              </div>

              <a
                href="https://hkcmereye.com/contact/"
                target="_blank"
                class="mt-4 d-block"
              >
                <div class="location-tag">
                  <i class="fa fa-map-marker mr-1"></i> 中環診所
                </div>
                <div class="location-tag">
                  <i class="fa fa-map-marker mr-1"></i> 旺角診所
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Activity 3 -->
        <div class="row">
          <div class="col-lg-5">
            <img
              src="https://statichk.cmermedical.com/opd/temporary/CataractAwarenessMonth3.avif"
              alt="Eye Love希瑪 · 好禮放送"
              class="img-fluid rounded-lg shadow"
            />
          </div>
          <div class="col-lg-7">
            <div class="activity-content">
              <div class="highlight-title">
                <i class="fa fa-heart activity-emoji" style="color: pink"></i>
                <span style="color: pink">Eye Love</span> 希瑪 · 好禮放送
              </div>
              <div class="highlight-box">
                <div class="highlight-title">
                  <i class="fa fa-star activity-emoji"></i> 活動內容
                </div>
                <p class="highlight-text">
                  簡單支持我們的社交媒體，即可獲得希瑪眼科精美卡片套1個
                </p>
              </div>
              <div class="highlight-title">
                <i class="fa fa-hand-o-right activity-emoji"></i> 如何參與活動？
              </div>
              <div class="activity-step">
                <div class="step-number">1</div>
                <div class="step-text">
                  <a
                    class="fs-xs-12"
                    href="https://www.facebook.com/cmereyecenter/"
                    target="_blank"
                    rel="nofollow"
                    ><button class="fb-text">
                      <svg
                        fill="#ffffff"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"
                          ></path>
                        </g>
                      </svg>
                      <span>Facebook</span></button
                    >&nbsp;讚好希瑪眼科Facebook專頁（@希瑪眼科 C-MER Eye
                    Center）</a
                  >或 <br />
                  <a
                    href="https://www.instagram.com/cmer_eye_center/"
                    target="_blank"
                    rel="nofollow"
                    class="fs-xs-12"
                    ><button class="ins-text">
                      <svg
                        viewBox="0 0 16 16"
                        class="bi bi-instagram"
                        fill="currentColor"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                        ></path>
                      </svg>
                      <span>Instagram</span></button
                    >&nbsp;追蹤Instagram（@cmer_eye_center）</a
                  >
                </div>
              </div>
              <div class="activity-step">
                <div class="step-number">2</div>
                <div class="step-text">
                  向我們的前台工作人員出示您已讚好或追蹤的畫面
                </div>
              </div>
              <div class="activity-step">
                <div class="step-number">3</div>
                <div class="step-text">即可獲得希瑪眼科精美卡片套乙個</div>
              </div>

              <div class="activity-note">
                <i class="fa fa-info-circle mr-2"></i>
                禮品數量有限，送完即止。每位訪客限獲一份。如需協助使用社交媒體，我們的工作人員很樂意為您提供幫助。
              </div>

              <!--<a href="https://hkcmereye.com/contact/" target="_blank" class="mt-4 d-block">-->
              <!--    <div class="location-tag"><i class="fa fa-map-marker mr-1"></i> 中環診所</div>-->
              <!--    <div class="location-tag"><i class="fa fa-map-marker mr-1"></i> 旺角診所</div>-->
              <!--</a>-->
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-12 text-center">
            <div class="highlight-box" style="max-width: 800px; margin: 0 auto">
              <div class="highlight-title">
                <i class="fa fa-calendar activity-emoji"></i> 活動時間
              </div>
              <p class="highlight-text text-left">2025年6月2日至6月30日</p>
              <div class="highlight-title mt-3">
                <i class="fa fa-phone activity-emoji"></i> 預約諮詢
              </div>
              <a href="tel:85239562025" class="highlight-text d-block text-left"
                >如欲了解更多白內障治療資訊或預約檢查，請致電 (852) 3956 2025
              </a>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=85260629611&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2"
              target="_blank"
              class="btn btn-primary text-white btn-lg mt-4 animated pulse infinite"
              style="color: white !important"
              >立即預約檢查</a
            >
          </div>
        </div>
      </div>
    </section>
    <!-- Video Sharing Section -->
    <section id="video" class="py-5 video-section">
      <div class="container">
        <div class="row align-items-center">
          <Swiper
            class="carouselExampleFade"
            :navigation="true"
            :modules="[Pagination, Autoplay, Navigation]"
            :pagination="{ clickable: true }"
            :slides-per-view="1"
            :loop="true"
            :effect="'creative'"
            :autoplay="{
              delay: 5000,
              pauseOnMouseEnter: true, // 鼠标悬停时暂停
              disableOnInteraction: false,
            }"
          >
            <SwiperSlide v-for="(slide, idx) in eyeCenterImgList" :key="idx">
              <div class="eyeList">
                <iframe
                  :src="slide.img"
                  frameborder="0"
                  width="100%"
                  height="100%"
                  allowfullscreen
                >
                </iframe>
              </div>
            </SwiperSlide>
          </Swiper>

          <div class="col-lg-6 animated fadeInRight fadeIn">
            <h2 class="section-title">白內障月真實客戶分享影片</h2>
            <p>
              在這個特別的月份，我們將分階段推出一系列真實個案分享影片，帶您走進真實客戶的故事，了解他們的術前心路歷程和術後體驗。
            </p>
            <p>
              同時，我們還準備了精心製作的白內障知識動畫，助您輕鬆掌握有關白內障的症狀、風險及治療方法，提升對白內障的認識。
            </p>
            <div class="highlight mt-4">
              <p class="mb-0 fs-xs-12">
                <i class="fa fa-2x fa-info-circle mr-2 text-success"></i>
                敬請關注我們的社交媒體獲取最新消息！
              </p>
            </div>
            <div class="mt-4">
              <a
                href="https://www.facebook.com/cmereyecenter/"
                target="_blank"
                rel="nofollow"
                class="social-icon"
                ><i class="fa fa-facebook"></i
              ></a>
              <a
                href="https://www.instagram.com/cmer_eye_center/"
                target="_blank"
                rel="nofollow"
                class="social-icon"
                ><i class="fa fa-instagram"></i
              ></a>
              <a
                href="https://www.youtube.com/channel/UCkYbtBhKYc8XyrgG7SAFzRg"
                target="_blank"
                rel="nofollow"
                class="social-icon"
                ><i class="fa fa-youtube"></i
              ></a>
            </div>
          </div>



        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-5 bg-light">
      <div class="container">
        <div class="bnzv3_container">
          <div class="s2 mx-auto mt-3">
            <h2>
              <span style="background-color: #f8f9fa">我們提供的服務</span>
            </h2>
          </div>
        </div>
        <div class="row">
          <!-- Service 1 -->
          <div class="col-lg-6 mb-4">
            <div class="service-item animated fadeInUp fadeIn">
              <div class="service-icon">
                <i class="fa fa-2x fa-user-md"></i>
              </div>
              <h3>專業諮詢</h3>
              <p>
                我們的專家醫生將為您提供有關白內障的詳細資訊及個性化建議，確保您獲得最適合的治療方案。我們會根據您的眼睛狀況、生活習慣和需求，制定最合適的診療計劃。
              </p>
              <a
                style="display: block; color: white !important"
                href="https://api.whatsapp.com/send?phone=85260629611&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2"
                target="_blank"
                class="btn btn-primary text-white mt-3"
                >預約諮詢</a
              >
            </div>
          </div>

          <!-- Service 2 -->
          <div class="col-lg-6 mb-4">
            <div
              class="service-item animated fadeInUp fadeIn"
              data-wow-delay="0.2s"
            >
              <div class="service-icon">
                <i class="fa fa-2x fa-eye"></i>
              </div>
              <h3>先進治療技術</h3>
              <p>
                了解我們的白內障人工晶體選項及治療技術，保障您的視力健康。我們採用最先進的技術，確保手術安全有效。希瑪眼科中心引進全球領先的白內障手術設備，為您提供最優質的治療體驗。
              </p>
              <a
                style="display: block; color: white !important"
                href="/medical-service/cataract#iclArr"
                class="btn btn-primary text-white mt-3"
                >了解技術</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9 text-center animated fadeIn text-white">
            <h2 class="mb-4 fs-xs-22" style="font-size: 2em">
              別讓視力問題影響您的生活！
            </h2>
            <p class="lead mb-4 font-weight-bold white-spice">
              立即預約白內障視力檢查，並了解更多關於白內障的資訊。早期發現，早期治療，讓您重拾清晰視界。
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=85260629611&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2"
              target="_blank"
              class="animated pulse infinite headShake animated-button1"
              >立即預約</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonial-section">
      <div class="container">
        <div class="bnzv3_container">
          <div class="s2 mx-auto mt-3">
            <h2><span style="background-color: #f8f9fa">患者心聲</span></h2>
          </div>
        </div>
        <!-- <h2 class="section-title text-center mb-5">患者心聲</h2> -->
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="testimonial-card animated fadeInUp fadeIn">
              <div class="testimonial-quote">
                <i class="fa fa-2x fa-quote-left"></i>
              </div>
              <p class="mt-4 pt-4">
                多謝李佑榮醫生好細心好詳盡的講解，手術好亦好細心，好多謝希瑪工作人員的幫助。
              </p>
              <div class="d-flex align-items-center mt-4">
                <div class="d-flex justify-content-center align-items-center">
                  <h3 class="mb-0 mr-3 font-weight-bold">so fun</h3>
                  <div class="ti-profile-img">
                    <img
                      decoding="async"
                      src="https://lh3.googleusercontent.com/a-/ALV-UjX7NhBl2Cd706XKt_2Rj287iqrlxLTDlIestHavVVoWKhx8zW8Mcg=w40-h40-c-rp-mo-br100"
                      loading="lazy"
                      alt="so fun"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div
              class="testimonial-card animated fadeInUp fadeIn"
              data-wow-delay="0.2s"
            >
              <div class="testimonial-quote">
                <i class="fa fa-2x fa-quote-left"></i>
              </div>
              <p class="mt-4 pt-4">
                有心思，等見醫生驗眼過程要大約三個鐘，咁中途好多唔同嘅測試，但居然診所會辦一啲活動比客人消磨時間💪🏼…
              </p>
              <div class="d-flex align-items-center mt-4">
                <div class="d-flex justify-content-center align-items-center">
                  <h3 class="mb-0 mr-3 font-weight-bold">Shay Wu</h3>
                  <small class="text-muted"
                    ><div class="ti-profile-img">
                      <img
                        decoding="async"
                        src="https://lh3.googleusercontent.com/a-/ALV-UjWgPC0t6lryZXZIV0RwaZCr-Rji2zIKNJJU7AUpTfBR0X_BNZM=w36-h36-p-rp-mo-ba5-br100"
                        loading="lazy"
                        alt="Shay Wu"
                      /></div
                  ></small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div
              class="testimonial-card animated fadeInUp fadeIn"
              data-wow-delay="0.4s"
            >
              <div class="testimonial-quote">
                <i class="fa fa-2x fa-quote-left"></i>
              </div>
              <p class="mt-4 pt-4 fs-14">
                I Am fortunate to have Dr Stephen Li as my Opthalmologist. His
                reassurance make my experience in CMER a comfortable journey.
                Any surgery is nerve wrecking,, I have both eyes done here.
                Cataract with multifocal.. he answered all my concerns… highly
                recommend
              </p>
              <div class="d-flex align-items-center mt-4">
                <div class="d-flex justify-content-center align-items-center">
                  <h3 class="mb-0 mr-3 font-weight-bold">Jazzy GG</h3>
                  <small class="text-muted"
                    ><img
                      decoding="async"
                      src="https://lh3.googleusercontent.com/a/ACg8ocI3EU2Py6faH84aiLOHa1QZDXrQKs6wzJ2AISCGICwiU6qs=w40-h40-c-rp-mo-br100"
                      loading="lazy"
                      alt="Jazzy GG"
                  /></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 公共底部表单 -->
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#3a5fb2;'}`"
    />
    <PageFooterMenu />
  </div>
</template>
  <style >
:root {
  --primary-color: #2958a3;
  --secondary-color: #00bbf0;
  --accent-color: #29c384;
  --text-color: #333;
  --light-bg: #f8f9fa;
  --dark-bg: #2c3e50;
}
a {
  text-decoration: none !important;
}
.page-cataract .form .info_text {
  color: white;
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
</style>


    <style scoped lang="scss">
@import url('~/assets/sass/bootstrap5.css');
@import url('~/assets/sass/aoyun.css');
a {
  color: initial;
}

/* comon */
.container {
  margin-left: auto;
  margin-right: auto;
}
.mb_hidden {
  display: block;
}
.pc_hidden {
  display: block;
}
body {
  color: #555555;
}

.bt-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}

.dryeye_button {
  text-decoration: none;
  color: white;
  background-image: linear-gradient(90deg, #edd42b 0%, #fe7c75 100%);
  font-weight: 600;
  padding: 16px 40px;
  border-radius: 50px;
  font-size: 36px;

  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-image: linear-gradient(
    -45deg,
    #edd42b,
    #fe7c75,
    #b378ff,
    #72bafd,
    #edd42b,
    #fe7c75
  );
  background-size: 400% 400%;
  -webkit-animation: Gradient 10s ease infinite;
  -moz-animation: Gradient 10s ease infinite;
  animation: Gradient 10s ease infinite;
}

.dryeye_button:hover {
  background: linear-gradient(88.48deg, #b378ff 21.86%, #72bafd 82.92%);
  color: white;
}

.bnzv3_container h2 {
  color: #29c384;
  text-align: center;
  font-weight: 900;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.bnzv3_container h2 span {
  background-color: #fff;
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 10px 0;
}
.bnzv3_container h2::before {
  position: absolute;
  content: ' ';
  border-radius: 20px;
  border: solid 2px #52da9b;
  z-index: 0;
}

.bnzv3_container .imgbg {
  position: absolute;
  z-index: 0;
}
.bnzv3_container .imgbg1 {
  left: 0;
}
.bnzv3_container .imgbg2 {
  right: 0;
}
.bnzv3_container .container {
  position: relative;
  z-index: 66;
}

.banner h1 {
  color: #1ea06b;
}
/* s1 */
.bnzv3_container .s1 {
  position: relative;
  width: 100%;
}
.bnzv3_container .s1 .btn_box {
  background-color: #cff4e3;
  border-radius: 100px 20px 20px 20px;
  border: solid 2px #52da9b;
  position: relative;
}
.bnzv3_container .s1 h2 {
  color: #29c384;
  font-weight: 900;
}

/* s2 */

.bnzv3_container .s2 p {
  background-color: #cff4e3;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
}
.bnzv3_container .s2 p::before {
  position: absolute;
  content: ' ';
  width: 100%;
  height: 100%;
}

/* s3 */
.bnzv3_container .s3 {
  position: relative;
  z-index: 33;
}
.bnzv3_container .s3 h3 {
  background-color: #29c384;
  border-radius: 20px;
  color: white;
  text-align: center;
  display: inline-block;
}

.bnzv3_container .s3 ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.bnzv3_container .s3 ul:nth-child(3) {
  justify-content: space-between;
}

.bnzv3_container .s3 ul li {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}

/* s4 */
.bnzv3_container .s4 {
  /* background: url(/template/default/picture/bnzv3_img/s4_bg.jpg) center / cover no-repeat; */
  /* color: #fff; */
  position: relative;
  z-index: 34;
  text-align: center;
}
.bnzv3_container .s4 p {
  text-align: left;
}

.bnzv3_container .s4 h2 {
  color: #29c384;
}
.bnzv3_container .s4 h2 span {
  background-image: linear-gradient(90deg, #2db378 0%, #048ab6 100%);
  /* background: unset; */
  background: white;
}
.bnzv3_container .s4 h2::before {
  /* border: solid 2px #ffffff;
		display:none; */
}
.bnzv3_container .s4 h2 img {
  position: absolute;
}

.bnzv3_container .s4 h3 {
  background-color: #fff;
  border-radius: 20px;
  color: #29c384;
  text-align: center;
  display: inline-block;
}
.bnzv3_container .s4 ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bnzv3_container .s4 ul li {
  background-color: #fff;
  color: #5f6462;
  border-radius: 14px 68px 20px 20px;
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
}
.bnzv3_container .s4 ul li span {
  background-color: #3dc1ee;
  color: #fff;
  border-radius: 100%;
  display: block;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bnzv3_container .s4 ul li img {
  border-radius: 0 0 20px 20px;
}
.bnzv3_container .s4 ul li p {
  display: flex;
  align-items: center;
  justify-content: center;
}
.bnzv3_container .s4 .end_notice {
  background-color: #cff4e3;
  position: relative;
  /* background: url(/template/default/picture/bnzv3_img/s4_noticebg.png) center / cover no-repeat; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.bnzv3_container .s4 .end_notice::before {
  position: absolute;
  content: ' ';
  width: 100%;
  height: 100%;
}

/* s5 */
.bnzv3_container .s5 .end_p {
  background-color: #cff4e3;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
}
.bnzv3_container .s5 .end_p::before {
  position: absolute;
  content: ' ';
  width: 100%;
  height: 100%;
}

/* s6 */
.bnzv3_container .s6 {
  text-align: center;
}

.bnzv3_container .s6 .imgbg1 {
  bottom: 0;
}
.bnzv3_container .s6 .imgbg2 {
  top: -60px;
  right: -235px;
}
.bnzv3_container .s6 p {
  text-align: left;
}
.bnzv3_container .s6 h3 {
  background-image: linear-gradient(to right, #00ccff, #2ac181);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
.bnzv3_container .s6 ul {
  display: flex;
  text-align: center;
  justify-content: space-between;
}
.bnzv3_container .s6 ul li {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
.bnzv3_container .s6 ul li p {
  text-align: center;
}
.bnzv3_container .s6 ul li span {
  position: absolute;
  background-image: linear-gradient(90deg, #50d99d 0%, #28c6dc 100%);
  color: #fff;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bnzv3_container .s6 .benefit {
  color: #29c7da;
}
.bnzv3_container .s6 .benefit h4 {
  border: solid 2px #29c7da;
  border-radius: 50px;
  display: inline-block;
}
.bnzv3_container .s6 .benefit ul {
  justify-content: space-around;
}
.bnzv3_container .s6 .benefit ul li {
  border-radius: 20px;
  border: solid 2px #29c7da;
  position: relative;
}
.bnzv3_container .s6 .benefit ul li img {
  position: absolute;
}
.bnzv3_container .s6 .benefit .linkimg_box {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* s7 */
.bnzv3_container .s7 {
  background: url(/template/default/picture/bnzv3_img/s7_bg.jpg) center / cover
    no-repeat;
  color: #fff;
}
.bnzv3_container .s7 h2 span {
  background: linear-gradient(to right, #2cb378, #0489b5);
  color: #fff;
  width: 100%;
  background: unset;
}

.bnzv3_container .s7 h2::before {
  border: solid 2px #ffffff;
  display: none;
}

.bnzv3_container .s7 h2 img {
  position: absolute;
}

.bnzv3_container .s7 .sec_con_table table {
  font-size: 19px;
  border-collapse: collapse;
  border-spacing: 0px;
  width: 100%;
  color: #555555;
  border-radius: 20px;
  margin: 50px 0;
}
.bnzv3_container .s7 .sec_con_table table thead {
  border-radius: 20px 20px 0px 0px;
}
.bnzv3_container .s7 .sec_con_table table thead th:nth-child(1) {
  border-radius: 20px 0px 0px 0px;
}
.bnzv3_container .s7 .sec_con_table table thead th:nth-child(4) {
  border-radius: 0px 20px 0px 0px;
}
.bnzv3_container .s7 .sec_con_table table thead tr {
  background-color: #3dc1ee;
  color: #ffffff;
  border-radius: 20px 20px 0px 0px;
}
.bnzv3_container
  .s7
  .sec_con_table
  table
  tbody
  tr:nth-child(5)
  th:nth-child(1) {
  border-radius: 0px 0px 0px 20px;
}
.bnzv3_container
  .s7
  .sec_con_table
  table
  tbody
  tr:nth-child(5)
  th:nth-child(4) {
  border-radius: 0px 0px 20px 0px;
}
.bnzv3_container .s7 .sec_con_table table thead tr,
.bnzv3_container .s7 .sec_con_table table tbody tr {
  height: 120px;
  text-align: center;
}

.bnzv3_container .s7 .sec_con_table table tbody .other_style {
  padding: 0;
}

.bnzv3_container .s7 .sec_con_table table tbody .other_style > div {
  justify-content: center;
}

.bnzv3_container .s7 .sec_con_table table tbody .other_style > span {
  font-size: 14px;
}

.bnzv3_container .s7 .sec_con_table table tbody th {
  width: 200px;
  padding: 0 20px;
}

.bnzv3_container .s7 .sec_con_table table tbody th > div {
  display: flex;
  align-items: center;
}

.bnzv3_container .s7 .sec_con_table table tbody th > div img {
  margin-right: 10px;
  width: 20px;
}

.bnzv3_container .s7 .sec_con_table table tbody tr {
  background-color: #ffffff !important;
}

.bnzv3_container .s7 .sec_con_table table tbody tr:nth-child(5) {
  height: 180px;
}

.bnzv3_container .s7 .sec_con_table table tbody th:nth-child(1) {
  padding-left: 55px;
  padding-right: 0;
}

.bnzv3_container .s7 .sec_con_table table tbody th:nth-child(1),
.bnzv3_container .s7 .sec_con_table table tbody th:nth-child(2),
.bnzv3_container .s7 .sec_con_table table tbody th:nth-child(3),
.bnzv3_container .s7 .sec_con_table table thead th:nth-child(1),
.bnzv3_container .s7 .sec_con_table table thead th:nth-child(2),
.bnzv3_container .s7 .sec_con_table table thead th:nth-child(3) {
  border-right: 1px solid #21a1c1;
  border-bottom: 1px solid #21a1c1;
}
.bnzv3_container .s7 .sec_con_table table thead th:nth-child(4),
.bnzv3_container .s7 .sec_con_table table tbody th:nth-child(4) {
  border-bottom: 1px solid #21a1c1;
}
.bnzv3_container .s7 .sec_con_table table tbody tr:nth-child(5) th {
  border-bottom: none;
}
.bnzv3_container .s7 .sec_con_table table .left {
  text-align: left;
}

/* s8 */
.bnzv3_container .s8 {
  position: relative;
}
.bnzv3_container .s8 ul {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-flow: column;
}
.bnzv3_container .s8 ul li {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bnzv3_container .s8 ul li:nth-child(even) {
  margin-left: auto;
}

/* s9 */

.bnzv3_container .s9 h2 {
  color: #3dc1ee;
}

/* s10 */

.bnzv3_container .s10 {
  background-image: linear-gradient(90deg, #4dd7a4 0%, #2cc8d8 100%);
}

.bnzv3_container .s10 p {
  color: #fff;
  text-align: center;
}
.bnzv3_container .s10 #appoint-form {
  width: 75%;
  margin: 0 auto;
  margin-top: 100px;
}

.bnzv3_container .s10 #appoint-form .box1,
.bnzv3_container .s10 #appoint-form .box2 {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.bnzv3_container .s10 #appoint-form .required {
  width: 335px;
  border-radius: 8px;
  margin-bottom: 50px;
  border: none;
  color: #838383;
  font-size: 22px;
  padding: 10px 20px;
  height: 45px;
}

.bnzv3_container .s10 #appoint-form .required:focus {
  border-color: #3dc1ee 1px solid;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}

.bnzv3_container .s10 #appoint-form select {
}

.bnzv3_container .s10 #appoint-form .info {
  height: 100px;
}

.bnzv3_container .s10 #appoint-form .readmore {
  background-color: #ffffff;
  border-radius: 34px;
  border: none;
  padding: 7px 65px;
}

.bnzv3_container .s10 #appoint-form .readmore span {
  background-image: linear-gradient(to right, #00ccff, #2ac181);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  font-size: 32px;
}

/* btn */

.animated-button {
  background: linear-gradient(-30deg, #0b1b3d 50%, #08142b 50%);
  padding: 20px 40px;
  margin: 12px;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  overflow: hidden;
  color: #d4e0f7;
  font-size: 20px;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.animated-button::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #8592ad;
  opacity: 0;
  -webkit-transition: 0.2s opacity ease-in-out;
  transition: 0.2s opacity ease-in-out;
}

.animated-button:hover::before {
  opacity: 0.2;
}

.animated-button span {
  position: absolute;
}

.animated-button span:nth-child(1) {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(8, 20, 43, 0)),
    to(#2662d9)
  );
  background: linear-gradient(to left, rgba(8, 20, 43, 0), #2662d9);
  -webkit-animation: 2s animateTop linear infinite;
  animation: 2s animateTop linear infinite;
}

@-webkit-keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

@keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

.animated-button span:nth-child(2) {
  top: 0px;
  right: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(8, 20, 43, 0)),
    to(#2662d9)
  );
  background: linear-gradient(to top, rgba(8, 20, 43, 0), #2662d9);
  -webkit-animation: 2s animateRight linear -1s infinite;
  animation: 2s animateRight linear -1s infinite;
}

@-webkit-keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

@keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

.animated-button span:nth-child(3) {
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(8, 20, 43, 0)),
    to(#2662d9)
  );
  background: linear-gradient(to right, rgba(8, 20, 43, 0), #2662d9);
  -webkit-animation: 2s animateBottom linear infinite;
  animation: 2s animateBottom linear infinite;
}

@-webkit-keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

@keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

.animated-button span:nth-child(4) {
  top: 0px;
  left: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(8, 20, 43, 0)),
    to(#2662d9)
  );
  background: linear-gradient(to bottom, rgba(8, 20, 43, 0), #2662d9);
  -webkit-animation: 2s animateLeft linear -1s infinite;
  animation: 2s animateLeft linear -1s infinite;
}

@-webkit-keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}

@keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}

.animated-button1 {
  background-image: linear-gradient(90deg, #edd22d 0%, #fe7d76 100%);
  padding: 10px 15px;
  margin: 12px;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  overflow: hidden;
  color: #f7d4d4;
  font-size: 16px;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 8px 50px rgb(0 0 0 / 21%);
  box-shadow: 0 8px 50px rgb(0 0 0 / 21%);
  font-weight: 900;
  color: #fff;
}

.animated-button1::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #ad8585;
  opacity: 0;
  -webkit-transition: 0.2s opacity ease-in-out;
  transition: 0.2s opacity ease-in-out;
}

.animated-button1:hover::before {
  opacity: 0.2;
}

.animated-button1 span {
  position: absolute;
}

.animated-button1 span:nth-child(1) {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(43, 8, 8, 0)),
    to(#d92626)
  );
  background: linear-gradient(to left, rgba(43, 8, 8, 0), #d92626);
  -webkit-animation: 1.5s animateTop linear infinite;
  animation: 1.5s animateTop linear infinite;
}

@keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

.animated-button1 span:nth-child(2) {
  top: 0px;
  right: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(43, 8, 8, 0)),
    to(#d92626)
  );
  background: linear-gradient(to top, rgba(43, 8, 8, 0), #d92626);
  -webkit-animation: 1.5s animateRight linear -0.75s infinite;
  animation: 1.5s animateRight linear -0.75s infinite;
}

@keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

.animated-button1 span:nth-child(3) {
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(43, 8, 8, 0)),
    to(#d92626)
  );
  background: linear-gradient(to right, rgba(43, 8, 8, 0), #d92626);
  -webkit-animation: 1.5s animateBottom linear infinite;
  animation: 1.5s animateBottom linear infinite;
}

@keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

.animated-button1 span:nth-child(4) {
  top: 0px;
  left: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(43, 8, 8, 0)),
    to(#d92626)
  );
  background: linear-gradient(to bottom, rgba(43, 8, 8, 0), #d92626);
  -webkit-animation: 1.5s animateLeft linear -0.75s infinite;
  animation: 1.5s animateLeft linear -0.75s infinite;
}

@keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}

.animated-button2 {
  background: linear-gradient(-30deg, #3d240b 50%, #2b1a08 50%);
  padding: 20px 40px;
  margin: 12px;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  overflow: hidden;
  color: #f7e6d4;
  font-size: 20px;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.animated-button2::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #ad9985;
  opacity: 0;
  -webkit-transition: 0.2s opacity ease-in-out;
  transition: 0.2s opacity ease-in-out;
}

.animated-button2:hover::before {
  opacity: 0.2;
}

.animated-button2 span {
  position: absolute;
}

.animated-button2 span:nth-child(1) {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(43, 26, 8, 0)),
    to(#d98026)
  );
  background: linear-gradient(to left, rgba(43, 26, 8, 0), #d98026);
  -webkit-animation: 2s animateTop linear infinite;
  animation: 2s animateTop linear infinite;
}

@keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

.animated-button2 span:nth-child(2) {
  top: 0px;
  right: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(43, 26, 8, 0)),
    to(#d98026)
  );
  background: linear-gradient(to top, rgba(43, 26, 8, 0), #d98026);
  -webkit-animation: 2s animateRight linear -1s infinite;
  animation: 2s animateRight linear -1s infinite;
}

@keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

.animated-button2 span:nth-child(3) {
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(43, 26, 8, 0)),
    to(#d98026)
  );
  background: linear-gradient(to right, rgba(43, 26, 8, 0), #d98026);
  -webkit-animation: 2s animateBottom linear infinite;
  animation: 2s animateBottom linear infinite;
}

@keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

.animated-button2 span:nth-child(4) {
  top: 0px;
  left: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(43, 26, 8, 0)),
    to(#d98026)
  );
  background: linear-gradient(to bottom, rgba(43, 26, 8, 0), #d98026);
  -webkit-animation: 2s animateLeft linear -1s infinite;
  animation: 2s animateLeft linear -1s infinite;
}

@keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}

.animated-button3 {
  background: linear-gradient(-30deg, #3d3d0b 50%, #2b2b08 50%);
  padding: 20px 40px;
  margin: 12px;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  overflow: hidden;
  color: #f7f7d4;
  font-size: 20px;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.animated-button3::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #adad85;
  opacity: 0;
  -webkit-transition: 0.2s opacity ease-in-out;
  transition: 0.2s opacity ease-in-out;
}

.animated-button3:hover::before {
  opacity: 0.2;
}

.animated-button3 span {
  position: absolute;
}

.animated-button3 span:nth-child(1) {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(43, 43, 8, 0)),
    to(#d9d926)
  );
  background: linear-gradient(to left, rgba(43, 43, 8, 0), #d9d926);
  -webkit-animation: 2s animateTop linear infinite;
  animation: 2s animateTop linear infinite;
}

@keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

.animated-button3 span:nth-child(2) {
  top: 0px;
  right: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(43, 43, 8, 0)),
    to(#d9d926)
  );
  background: linear-gradient(to top, rgba(43, 43, 8, 0), #d9d926);
  -webkit-animation: 2s animateRight linear -1s infinite;
  animation: 2s animateRight linear -1s infinite;
}

@keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

.animated-button3 span:nth-child(3) {
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(43, 43, 8, 0)),
    to(#d9d926)
  );
  background: linear-gradient(to right, rgba(43, 43, 8, 0), #d9d926);
  -webkit-animation: 2s animateBottom linear infinite;
  animation: 2s animateBottom linear infinite;
}

@keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

.animated-button3 span:nth-child(4) {
  top: 0px;
  left: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(43, 43, 8, 0)),
    to(#d9d926)
  );
  background: linear-gradient(to bottom, rgba(43, 43, 8, 0), #d9d926);
  -webkit-animation: 2s animateLeft linear -1s infinite;
  animation: 2s animateLeft linear -1s infinite;
}

@keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}

.animated-button4 {
  background: linear-gradient(-30deg, #243d0b 50%, #1a2b08 50%);
  padding: 20px 40px;
  margin: 12px;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  overflow: hidden;
  color: #e6f7d4;
  font-size: 20px;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.animated-button4::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #99ad85;
  opacity: 0;
  -webkit-transition: 0.2s opacity ease-in-out;
  transition: 0.2s opacity ease-in-out;
}

.animated-button4:hover::before {
  opacity: 0.2;
}

.animated-button4 span {
  position: absolute;
}

.animated-button4 span:nth-child(1) {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(26, 43, 8, 0)),
    to(#80d926)
  );
  background: linear-gradient(to left, rgba(26, 43, 8, 0), #80d926);
  -webkit-animation: 2s animateTop linear infinite;
  animation: 2s animateTop linear infinite;
}

@keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

.animated-button4 span:nth-child(2) {
  top: 0px;
  right: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(26, 43, 8, 0)),
    to(#80d926)
  );
  background: linear-gradient(to top, rgba(26, 43, 8, 0), #80d926);
  -webkit-animation: 2s animateRight linear -1s infinite;
  animation: 2s animateRight linear -1s infinite;
}

@keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

.animated-button4 span:nth-child(3) {
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(26, 43, 8, 0)),
    to(#80d926)
  );
  background: linear-gradient(to right, rgba(26, 43, 8, 0), #80d926);
  -webkit-animation: 2s animateBottom linear infinite;
  animation: 2s animateBottom linear infinite;
}

@keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

.animated-button4 span:nth-child(4) {
  top: 0px;
  left: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(26, 43, 8, 0)),
    to(#80d926)
  );
  background: linear-gradient(to bottom, rgba(26, 43, 8, 0), #80d926);
  -webkit-animation: 2s animateLeft linear -1s infinite;
  animation: 2s animateLeft linear -1s infinite;
}

@keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}

.animated-button5 {
  background: linear-gradient(-30deg, #0b3d0b 50%, #082b08 50%);
  padding: 20px 40px;
  margin: 12px;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  overflow: hidden;
  color: #d4f7d4;
  font-size: 20px;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.animated-button5::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #85ad85;
  opacity: 0;
  -webkit-transition: 0.2s opacity ease-in-out;
  transition: 0.2s opacity ease-in-out;
}

.animated-button5:hover::before {
  opacity: 0.2;
}

.animated-button5 span {
  position: absolute;
}

.animated-button5 span:nth-child(1) {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(8, 43, 8, 0)),
    to(#26d926)
  );
  background: linear-gradient(to left, rgba(8, 43, 8, 0), #26d926);
  -webkit-animation: 2s animateTop linear infinite;
  animation: 2s animateTop linear infinite;
}

@keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

.animated-button5 span:nth-child(2) {
  top: 0px;
  right: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(8, 43, 8, 0)),
    to(#26d926)
  );
  background: linear-gradient(to top, rgba(8, 43, 8, 0), #26d926);
  -webkit-animation: 2s animateRight linear -1s infinite;
  animation: 2s animateRight linear -1s infinite;
}

@keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

.animated-button5 span:nth-child(3) {
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(8, 43, 8, 0)),
    to(#26d926)
  );
  background: linear-gradient(to right, rgba(8, 43, 8, 0), #26d926);
  -webkit-animation: 2s animateBottom linear infinite;
  animation: 2s animateBottom linear infinite;
}

@keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

.animated-button5 span:nth-child(4) {
  top: 0px;
  left: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(8, 43, 8, 0)),
    to(#26d926)
  );
  background: linear-gradient(to bottom, rgba(8, 43, 8, 0), #26d926);
  -webkit-animation: 2s animateLeft linear -1s infinite;
  animation: 2s animateLeft linear -1s infinite;
}

@keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}

.animated-button6 {
  background: linear-gradient(-30deg, #0b3d24 50%, #082b1a 50%);
  padding: 20px 40px;
  margin: 12px;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  overflow: hidden;
  color: #d4f7e6;
  font-size: 20px;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.animated-button6::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #85ad99;
  opacity: 0;
  -webkit-transition: 0.2s opacity ease-in-out;
  transition: 0.2s opacity ease-in-out;
}

.animated-button6:hover::before {
  opacity: 0.2;
}

.animated-button6 span {
  position: absolute;
}

.animated-button6 span:nth-child(1) {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(8, 43, 26, 0)),
    to(#26d980)
  );
  background: linear-gradient(to left, rgba(8, 43, 26, 0), #26d980);
  -webkit-animation: 2s animateTop linear infinite;
  animation: 2s animateTop linear infinite;
}

@keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

.animated-button6 span:nth-child(2) {
  top: 0px;
  right: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(8, 43, 26, 0)),
    to(#26d980)
  );
  background: linear-gradient(to top, rgba(8, 43, 26, 0), #26d980);
  -webkit-animation: 2s animateRight linear -1s infinite;
  animation: 2s animateRight linear -1s infinite;
}

@keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

.animated-button6 span:nth-child(3) {
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(8, 43, 26, 0)),
    to(#26d980)
  );
  background: linear-gradient(to right, rgba(8, 43, 26, 0), #26d980);
  -webkit-animation: 2s animateBottom linear infinite;
  animation: 2s animateBottom linear infinite;
}

@keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

.animated-button6 span:nth-child(4) {
  top: 0px;
  left: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(8, 43, 26, 0)),
    to(#26d980)
  );
  background: linear-gradient(to bottom, rgba(8, 43, 26, 0), #26d980);
  -webkit-animation: 2s animateLeft linear -1s infinite;
  animation: 2s animateLeft linear -1s infinite;
}

@keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}

.animated-button7 {
  background: linear-gradient(-30deg, #0b3d3d 50%, #082b2b 50%);
  padding: 20px 40px;
  margin: 12px;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  overflow: hidden;
  color: #d4f7f7;
  font-size: 20px;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.animated-button7::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #85adad;
  opacity: 0;
  -webkit-transition: 0.2s opacity ease-in-out;
  transition: 0.2s opacity ease-in-out;
}

.animated-button7:hover::before {
  opacity: 0.2;
}

.animated-button7 span {
  position: absolute;
}

.animated-button7 span:nth-child(1) {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(8, 43, 43, 0)),
    to(#26d9d9)
  );
  background: linear-gradient(to left, rgba(8, 43, 43, 0), #26d9d9);
  -webkit-animation: 2s animateTop linear infinite;
  animation: 2s animateTop linear infinite;
}

@keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

.animated-button7 span:nth-child(2) {
  top: 0px;
  right: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(8, 43, 43, 0)),
    to(#26d9d9)
  );
  background: linear-gradient(to top, rgba(8, 43, 43, 0), #26d9d9);
  -webkit-animation: 2s animateRight linear -1s infinite;
  animation: 2s animateRight linear -1s infinite;
}

@keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

.animated-button7 span:nth-child(3) {
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(8, 43, 43, 0)),
    to(#26d9d9)
  );
  background: linear-gradient(to right, rgba(8, 43, 43, 0), #26d9d9);
  -webkit-animation: 2s animateBottom linear infinite;
  animation: 2s animateBottom linear infinite;
}

@keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

.animated-button7 span:nth-child(4) {
  top: 0px;
  left: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(8, 43, 43, 0)),
    to(#26d9d9)
  );
  background: linear-gradient(to bottom, rgba(8, 43, 43, 0), #26d9d9);
  -webkit-animation: 2s animateLeft linear -1s infinite;
  animation: 2s animateLeft linear -1s infinite;
}

@keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}

.animated-button8 {
  background: linear-gradient(-30deg, #0b243d 50%, #081a2b 50%);
  padding: 20px 40px;
  margin: 12px;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  overflow: hidden;
  color: #d4e6f7;
  font-size: 20px;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.animated-button8::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #8599ad;
  opacity: 0;
  -webkit-transition: 0.2s opacity ease-in-out;
  transition: 0.2s opacity ease-in-out;
}

.animated-button8:hover::before {
  opacity: 0.2;
}

.animated-button8 span {
  position: absolute;
}

.animated-button8 span:nth-child(1) {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(8, 26, 43, 0)),
    to(#2680d9)
  );
  background: linear-gradient(to left, rgba(8, 26, 43, 0), #2680d9);
  -webkit-animation: 2s animateTop linear infinite;
  animation: 2s animateTop linear infinite;
}

@keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

.animated-button8 span:nth-child(2) {
  top: 0px;
  right: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(8, 26, 43, 0)),
    to(#2680d9)
  );
  background: linear-gradient(to top, rgba(8, 26, 43, 0), #2680d9);
  -webkit-animation: 2s animateRight linear -1s infinite;
  animation: 2s animateRight linear -1s infinite;
}

@keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

.animated-button8 span:nth-child(3) {
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(8, 26, 43, 0)),
    to(#2680d9)
  );
  background: linear-gradient(to right, rgba(8, 26, 43, 0), #2680d9);
  -webkit-animation: 2s animateBottom linear infinite;
  animation: 2s animateBottom linear infinite;
}

@keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

.animated-button8 span:nth-child(4) {
  top: 0px;
  left: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(8, 26, 43, 0)),
    to(#2680d9)
  );
  background: linear-gradient(to bottom, rgba(8, 26, 43, 0), #2680d9);
  -webkit-animation: 2s animateLeft linear -1s infinite;
  animation: 2s animateLeft linear -1s infinite;
}

@keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}

.animated-button9 {
  background: linear-gradient(-30deg, #0b0b3d 50%, #08082b 50%);
  padding: 20px 40px;
  margin: 12px;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  overflow: hidden;
  color: #d4d4f7;
  font-size: 20px;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.animated-button9::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #8585ad;
  opacity: 0;
  -webkit-transition: 0.2s opacity ease-in-out;
  transition: 0.2s opacity ease-in-out;
}

.animated-button9:hover::before {
  opacity: 0.2;
}

.animated-button9 span {
  position: absolute;
}

.animated-button9 span:nth-child(1) {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(8, 8, 43, 0)),
    to(#2626d9)
  );
  background: linear-gradient(to left, rgba(8, 8, 43, 0), #2626d9);
  -webkit-animation: 2s animateTop linear infinite;
  animation: 2s animateTop linear infinite;
}

@keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

.animated-button9 span:nth-child(2) {
  top: 0px;
  right: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(8, 8, 43, 0)),
    to(#2626d9)
  );
  background: linear-gradient(to top, rgba(8, 8, 43, 0), #2626d9);
  -webkit-animation: 2s animateRight linear -1s infinite;
  animation: 2s animateRight linear -1s infinite;
}

@keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

.animated-button9 span:nth-child(3) {
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(8, 8, 43, 0)),
    to(#2626d9)
  );
  background: linear-gradient(to right, rgba(8, 8, 43, 0), #2626d9);
  -webkit-animation: 2s animateBottom linear infinite;
  animation: 2s animateBottom linear infinite;
}

@keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

.animated-button9 span:nth-child(4) {
  top: 0px;
  left: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(8, 8, 43, 0)),
    to(#2626d9)
  );
  background: linear-gradient(to bottom, rgba(8, 8, 43, 0), #2626d9);
  -webkit-animation: 2s animateLeft linear -1s infinite;
  animation: 2s animateLeft linear -1s infinite;
}

@keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}

.animated-button10 {
  background: linear-gradient(-30deg, #240b3d 50%, #1a082b 50%);
  padding: 20px 40px;
  margin: 12px;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  overflow: hidden;
  color: #e6d4f7;
  font-size: 20px;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.animated-button10::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #9985ad;
  opacity: 0;
  -webkit-transition: 0.2s opacity ease-in-out;
  transition: 0.2s opacity ease-in-out;
}

.animated-button10:hover::before {
  opacity: 0.2;
}

.animated-button10 span {
  position: absolute;
}

.animated-button10 span:nth-child(1) {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(26, 8, 43, 0)),
    to(#8026d9)
  );
  background: linear-gradient(to left, rgba(26, 8, 43, 0), #8026d9);
  -webkit-animation: 2s animateTop linear infinite;
  animation: 2s animateTop linear infinite;
}

@keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

.animated-button10 span:nth-child(2) {
  top: 0px;
  right: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(26, 8, 43, 0)),
    to(#8026d9)
  );
  background: linear-gradient(to top, rgba(26, 8, 43, 0), #8026d9);
  -webkit-animation: 2s animateRight linear -1s infinite;
  animation: 2s animateRight linear -1s infinite;
}

@keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

.animated-button10 span:nth-child(3) {
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(26, 8, 43, 0)),
    to(#8026d9)
  );
  background: linear-gradient(to right, rgba(26, 8, 43, 0), #8026d9);
  -webkit-animation: 2s animateBottom linear infinite;
  animation: 2s animateBottom linear infinite;
}

@keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

.animated-button10 span:nth-child(4) {
  top: 0px;
  left: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(26, 8, 43, 0)),
    to(#8026d9)
  );
  background: linear-gradient(to bottom, rgba(26, 8, 43, 0), #8026d9);
  -webkit-animation: 2s animateLeft linear -1s infinite;
  animation: 2s animateLeft linear -1s infinite;
}

@keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}

.animated-button11 {
  background: linear-gradient(-30deg, #3d0b3d 50%, #2b082b 50%);
  padding: 20px 40px;
  margin: 12px;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  overflow: hidden;
  color: #f7d4f7;
  font-size: 20px;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.animated-button11::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #ad85ad;
  opacity: 0;
  -webkit-transition: 0.2s opacity ease-in-out;
  transition: 0.2s opacity ease-in-out;
}

.animated-button11:hover::before {
  opacity: 0.2;
}

.animated-button11 span {
  position: absolute;
}

.animated-button11 span:nth-child(1) {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(43, 8, 43, 0)),
    to(#d926d9)
  );
  background: linear-gradient(to left, rgba(43, 8, 43, 0), #d926d9);
  -webkit-animation: 2s animateTop linear infinite;
  animation: 2s animateTop linear infinite;
}

@keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

.animated-button11 span:nth-child(2) {
  top: 0px;
  right: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(43, 8, 43, 0)),
    to(#d926d9)
  );
  background: linear-gradient(to top, rgba(43, 8, 43, 0), #d926d9);
  -webkit-animation: 2s animateRight linear -1s infinite;
  animation: 2s animateRight linear -1s infinite;
}

@keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

.animated-button11 span:nth-child(3) {
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(43, 8, 43, 0)),
    to(#d926d9)
  );
  background: linear-gradient(to right, rgba(43, 8, 43, 0), #d926d9);
  -webkit-animation: 2s animateBottom linear infinite;
  animation: 2s animateBottom linear infinite;
}

@keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

.animated-button11 span:nth-child(4) {
  top: 0px;
  left: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(43, 8, 43, 0)),
    to(#d926d9)
  );
  background: linear-gradient(to bottom, rgba(43, 8, 43, 0), #d926d9);
  -webkit-animation: 2s animateLeft linear -1s infinite;
  animation: 2s animateLeft linear -1s infinite;
}

@keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}

.animated-button12 {
  background: linear-gradient(-30deg, #3d0b24 50%, #2b081a 50%);
  padding: 20px 40px;
  margin: 12px;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  overflow: hidden;
  color: #f7d4e6;
  font-size: 20px;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.animated-button12::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #ad8599;
  opacity: 0;
  -webkit-transition: 0.2s opacity ease-in-out;
  transition: 0.2s opacity ease-in-out;
}

.animated-button12:hover::before {
  opacity: 0.2;
}

.animated-button12 span {
  position: absolute;
}

.animated-button12 span:nth-child(1) {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(43, 8, 26, 0)),
    to(#d92680)
  );
  background: linear-gradient(to left, rgba(43, 8, 26, 0), #d92680);
  -webkit-animation: 2s animateTop linear infinite;
  animation: 2s animateTop linear infinite;
}

@keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

.animated-button12 span:nth-child(2) {
  top: 0px;
  right: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(43, 8, 26, 0)),
    to(#d92680)
  );
  background: linear-gradient(to top, rgba(43, 8, 26, 0), #d92680);
  -webkit-animation: 2s animateRight linear -1s infinite;
  animation: 2s animateRight linear -1s infinite;
}

@keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

.animated-button12 span:nth-child(3) {
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(43, 8, 26, 0)),
    to(#d92680)
  );
  background: linear-gradient(to right, rgba(43, 8, 26, 0), #d92680);
  -webkit-animation: 2s animateBottom linear infinite;
  animation: 2s animateBottom linear infinite;
}

@keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

.animated-button12 span:nth-child(4) {
  top: 0px;
  left: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(43, 8, 26, 0)),
    to(#d92680)
  );
  background: linear-gradient(to bottom, rgba(43, 8, 26, 0), #d92680);
  -webkit-animation: 2s animateLeft linear -1s infinite;
  animation: 2s animateLeft linear -1s infinite;
}

@keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}
/*# sourceMappingURL=button.css.map */
.carouselExampleFade {
  padding: 0;
  margin-bottom: 2rem;
  height: 200px;
  border-radius: 15px;
}
.eyeList {
  height: -webkit-fill-available;
}
@media only screen and (min-width: 768px) {
  .white-spice {
    white-space: nowrap;
  }
  /* common */
  .bnzv3_container .pc_hidden {
    display: none !important;
  }

  .bnzv3_container {
    font-size: 20px;
    color: #555555;
  }
  .bnzv3_container h2 {
    font-size: 42px;
    margin-bottom: 100px;
  }

  .carouselExampleFade {
    max-width: 546px;
    height: 350px;
    border-radius: 15px;
  }

  .eyeList {
    height: -webkit-fill-available;
  }

  /* s1 */
  .bnzv3_container .s1 {
    margin-top: 150px;
  }
  .bnzv3_container .s1 .imgbg2 {
    top: -20px;
    width: 650px;
  }

  .bnzv3_container .s1 .btn_box {
    width: 587px;
    height: 250px;
    padding-left: 50px;
    padding-top: 15px;
    margin: auto;
    transform: translateX(-91px);
  }
  .bnzv3_container .s1 .btn_box img {
    position: absolute;
    right: -258px;
    bottom: -1px;
  }
  .bnzv3_container .s1 .btn_box .bt-box {
    justify-content: flex-start;
    margin-top: 0px;
  }
  .bnzv3_container .s1 .btn_box .bt-box a {
    font-size: 30px;
  }
  /* .bnzv3_container .s1 .animated-button1.new-wabt-ga{line-height: 1;width: 327px;margin: 12px 0;
    max-height: 77px;
    display: flex;
    justify-content: center;
    align-items: center;}
    .bnzv3_container .s1 h1 {
       color: #64B787;

text-align: center;
   text-shadow: rgb(255, 255, 255) 3px 0px 0px, rgb(255, 255, 255) 2.83333px 0.983333px 0px, rgb(255, 255, 255) 2.35px 1.85px 0px, rgb(255, 255, 255) 1.61667px 2.51667px 0px, rgb(255, 255, 255) 0.7px 2.91667px 0px, rgb(255, 255, 255) -0.283333px 2.98333px 0px, rgb(255, 255, 255) -1.25px 2.73333px 0px, rgb(255, 255, 255) -2.06667px 2.16667px 0px, rgb(255, 255, 255) -2.66667px 1.36667px 0px, rgb(255, 255, 255) -2.96667px 0.416667px 0px, rgb(255, 255, 255) -2.95px -0.566667px 0px, rgb(255, 255, 255) -2.6px -1.5px 0px, rgb(255, 255, 255) -1.96667px -2.26667px 0px, rgb(255, 255, 255) -1.11667px -2.78333px 0px, rgb(255, 255, 255) -0.133333px -3px 0px, rgb(255, 255, 255) 0.85px -2.88333px 0px, rgb(255, 255, 255) 1.75px -2.43333px 0px, rgb(255, 255, 255) 2.45px -1.73333px 0px, rgb(255, 255, 255) 2.88333px -0.833333px 0px;
font-family: Arial;
font-size: 42.536px;
font-style: normal;
font-weight: 700;
line-height: 56.148px;
letter-spacing: 8.933px;  display: inline-flex; text-align: center;
    } */

  .bnzv3_container .s1 .animated-button1.new-wabt-ga {
    /* line-height: 1;width: 327px;margin: 12px 0; */
    /* max-height: 77px;
    display: flex;
    justify-content: center;
    align-items: center;*/
  }
  .bnzv3_container .s1 h2 {
    color: #64b787;

    text-align: center;
    text-shadow: rgb(255, 255, 255) 3px 0px 0px,
      rgb(255, 255, 255) 2.83333px 0.983333px 0px,
      rgb(255, 255, 255) 2.35px 1.85px 0px,
      rgb(255, 255, 255) 1.61667px 2.51667px 0px,
      rgb(255, 255, 255) 0.7px 2.91667px 0px,
      rgb(255, 255, 255) -0.283333px 2.98333px 0px,
      rgb(255, 255, 255) -1.25px 2.73333px 0px,
      rgb(255, 255, 255) -2.06667px 2.16667px 0px,
      rgb(255, 255, 255) -2.66667px 1.36667px 0px,
      rgb(255, 255, 255) -2.96667px 0.416667px 0px,
      rgb(255, 255, 255) -2.95px -0.566667px 0px,
      rgb(255, 255, 255) -2.6px -1.5px 0px,
      rgb(255, 255, 255) -1.96667px -2.26667px 0px,
      rgb(255, 255, 255) -1.11667px -2.78333px 0px,
      rgb(255, 255, 255) -0.133333px -3px 0px,
      rgb(255, 255, 255) 0.85px -2.88333px 0px,
      rgb(255, 255, 255) 1.75px -2.43333px 0px,
      rgb(255, 255, 255) 2.45px -1.73333px 0px,
      rgb(255, 255, 255) 2.88333px -0.833333px 0px;
    /* font-family: Arial; */
    /* font-size: 42.536px; */
    font-style: normal;
    font-weight: 700;
    /* line-height: 56.148px; */
    /* letter-spacing: 8.933px;  */
    /* display: inline-flex; text-align: center; */
  }

  .bnzv3_container .s1 p {
    width: 90%;
  }
  .bnzv3_container .s1 .p1 {
    margin-top: 125px;
    margin-bottom: 30px;
  }

  /* s2 */

  .bnzv3_container .s2 {
    margin-top: 150px;
  }
  .bnzv3_container .s2 h2 {
    width: 600px;
  }

  .bnzv3_container .s2 h2::before {
    width: 47%;
    height: 148%;
  }
  .bnzv3_container .s2 p {
    height: 133px;
    border-radius: 100px 20px 100px 20px;
    padding: 0 100px;
    padding-top: 10px;
  }
  .bnzv3_container .s2 p::before {
    border-radius: 100px 20px 100px 20px;
    border: solid 2px #52da9b;
    top: 10px;
    left: 5px;
  }

  /* s3 */
  .bnzv3_container .s3 {
    margin-top: 150px;
    text-align: center;
    padding-bottom: 150px;
  }

  .bnzv3_container .s3 h3 {
    padding: 20px 40px;
    font-size: 30px;
    margin-bottom: 80px;
  }
  .bnzv3_container .s3 ul:nth-child(3) {
    margin-top: 60px;
  }
  .bnzv3_container .s3 .imgbg1 {
    bottom: 0;
    width: 765px;
  }
  .bnzv3_container .s3 .imgbg2 {
    top: 80px;

    width: 965px;
  }

  .bnzv3_container .s3 ul li span {
    display: block;
    height: 60px;
    margin-top: 20px;
  }

  /* s4 */

  .bnzv3_container .s4 {
    /* margin-top: -140px; */
    /* padding-top: 180px; */
    padding-bottom: 200px;
  }

  .bnzv3_container .s4 h2::before {
    width: 26%;
    height: 148%;
  }

  .bnzv3_container .s4 h3 {
    padding: 20px 40px;
    font-size: 30px;
    margin-bottom: 50px;
    font-weight: 900;
    margin-top: 100px;
  }

  .bnzv3_container .s4 .ul_title {
    font-weight: 900;
    font-size: 26px;
  }

  .bnzv3_container .s4 ul {
    margin-top: 40px;
    margin-bottom: 130px;
  }
  .bnzv3_container .s4 ul li,
  .bnzv3_container .s4 ul li img {
    width: 200px;
  }
  .bnzv3_container .s4 ul li span {
    font-size: 28px;
    width: 45px;
    height: 45px;
    top: -20px;
  }
  .bnzv3_container .s4 ul li p {
    width: 100%;
    height: 110px;
    padding-top: 20px;
  }

  .bnzv3_container .s4 .end_notice {
    height: 167px;
    padding: 0 68px;
    text-align: justify;
  }

  .bnzv3_container .s4 .end_notice {
    height: 133px;
    border-radius: 100px 20px 100px 20px;
    padding: 0 100px;
    padding-top: 10px;
  }
  .bnzv3_container .s4 .end_notice::before {
    border-radius: 100px 20px 100px 20px;
    border: solid 2px #52da9b;
    top: 10px;
    left: 5px;
  }

  /* s5 */

  .bnzv3_container .s5 {
    margin-top: 150px;
  }
  .bnzv3_container .s5 h2::before {
    width: 66%;
    height: 130%;
  }

  .bnzv3_container .s5 img {
    width: 100%;
    margin: 60px 0;
  }

  .bnzv3_container .s5 .end_p {
    border-radius: 20px;
    height: 155px;
    padding: 0 35px;
    padding-top: 10px;
  }
  .bnzv3_container .s5 .end_p::before {
    border-radius: 20px;
    border: solid 2px #52da9b;
    top: 10px;
    left: 5px;
  }

  /* s6  */
  .bnzv3_container .s6 {
    margin-top: 250px;
    position: relative;
    padding-bottom: 200px;
  }

  .bnzv3_container .s6 h3 {
    font-size: 38px;
    font-weight: 900;
    margin-bottom: 60px;
  }
  .bnzv3_container .s6 ul {
    margin: 60px 0 160px 0;
  }
  .bnzv3_container .s6 ul li span {
    font-size: 24px;
    width: 100px;
    height: 100px;
    left: 0;
    top: 25px;
  }
  .bnzv3_container .s6 ul li p {
    margin-top: 30px;
  }
  .bnzv3_container .s6 .benefit h4 {
    font-size: 32px;
    font-weight: 900;
    padding: 30px 40px;
    margin-bottom: 10px;
  }
  .bnzv3_container .s6 .benefit ul {
    margin-top: 30px;
  }
  .bnzv3_container .s6 .benefit ul li {
    font-size: 30px;
    width: 320px;
    height: 160px;
    padding-top: 25px;
  }
  .bnzv3_container .s6 .benefit ul li img {
    top: -25px;
  }
  .bnzv3_container .s6 .benefit .linkimg_box img:nth-child(1),
  .bnzv3_container .s6 .benefit .linkimg_box img:nth-child(3) {
    width: 340px;
  }
  .bnzv3_container .s6 .benefit .linkimg_box img:nth-child(2) {
    margin: 0 30px;
    width: 8px;
  }
  .bnzv3_container .s6 .benefit .linkimg_box img:nth-child(3) {
    margin-top: 5px;
  }

  /* s7 */
  .bnzv3_container .s7 {
    padding-top: 180px;
    padding-bottom: 200px;
  }

  .bnzv3_container .s7 h2::before {
    width: 16%;
    height: 148%;
  }

  /* s8 */
  .bnzv3_container .s8 {
    margin-top: 180px;
  }

  .bnzv3_container .s8 h2::before {
    width: 23%;
    height: 148%;
  }
  .bnzv3_container .s8 ul li img {
    margin-right: 30px;
  }
  .bnzv3_container .s8 ul li:nth-child(even) img {
    margin-right: unset;
    margin-left: 30px;
  }
  .bnzv3_container .s8 ul li p {
    width: 565px;
  }
  .bnzv3_container .s8 .imgbg1 {
    top: 850px;
    width: 900px;
  }
  .bnzv3_container .s8 .imgbg2 {
    top: 650px;
  }

  /* s9 */
  .bnzv3_container .s9 {
    width: 70%;
    margin: 0 auto;
    margin-top: 100px;
    padding-bottom: 100px;
  }
  .bnzv3_container .s9 h2::before {
    width: 29%;
    height: 148%;
    border: solid 2px #3dc1ee;
  }
  .bnzv3_container .s9 > h3 {
    width: 270px;
  }

  .bnzv3_container .s9 .accordion {
    margin-top: 50px;
    list-style: none;
    width: 100%;
    text-align: justify;
    font-weight: 600;
  }

  .bnzv3_container .s9 .accordion > div {
    margin: 20px 0;
  }

  .bnzv3_container .s9 .accordion h2 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 2px solid #3dc1ee;
    padding: 0;
    padding-bottom: 10px;
    font-size: 20px;
    font-weight: 900;
    line-height: 27px;
    color: #3dc1ee;
    text-align: left;
  }

  .bnzv3_container .s9 .accordion h2 p {
    display: flex;
    align-items: center;
    font-size: 25px;
  }
  .bnzv3_container .s9 .accordion h2::before {
    display: none;
  }
  .bnzv3_container .s9 .c-1b407a {
    color: #3dc1ee !important;
  }

  /* s10 */

  .bnzv3_container .s10 {
    margin-top: 70px;
    padding: 80px 0;
  }

  .bnzv3_container .s10 p {
    font-size: 28px;
  }

  /* btn*/

  .animated-button1 {
    font-size: 25px;
    padding: 20px 25px;
    -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  }
}

.mb-hero-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
}

@media screen and (min-width: 992px) {
  :deep(.swiper-button-next) {
    right: 20px;
  }
  :deep(.swiper-button-prev) {
    left: 20px;
  }

  :deep(.swiper-button-prev:after) {
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

  :deep(.swiper-button-next::after) {
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

  .container {
    max-width: 1140px !important;
  }
  .new-btn-box {
    width: 864px;
    height: 318px;
    background: url('https://statichk.cmermedical.com/hkcmereye/bnzV2/new-bnz-Box-pc.avif')
      no-repeat;
    background-size: 100% auto;
  }

  .bnzv3_container .new-btn-box h2 {
    padding-top: 37px;
    margin-right: 0px;
    margin-bottom: 0;
    margin-left: 45px;
    color: #78b58b;
    width: fit-content;
    font-size: 54px;
    font-style: normal;
    font-weight: 900;
    letter-spacing: 0;
    font-family: 'Noto Sans HK';
  }

  /* 按钮 */
  .new-btn-box .bt-box {
    margin-top: 0;
    justify-content: left;
    margin-left: 66px;
  }

  .bnzv3_container .s1 .new-btn-box .bt-box .animated-button1 {
    padding: 2px 0;
    margin: 0;
    margin-top: 20px;
    margin-right: 0px;

    width: 276px;

    color: #fff;
    text-align: center;
    font-family: 'Noto Sans HK';
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.26;
    letter-spacing: 2.53px;
  }

  /* 跳转测试 */
  .new-btn-box .new-btn-test {
    position: absolute;

    bottom: 10px;
    right: 10px;
    width: 262px;
    height: 55px;
    flex-shrink: 0;
    padding: 12px 21px;
    color: #fff;
    font-family: 'Noto Sans HK';
    font-size: 22.58px;
    font-style: normal;
    font-weight: 900;
    line-height: 1.3;
    letter-spacing: 2.484px;
    background: linear-gradient(90deg, #65dbff 0%, #b37be0 100%);
  }
  .new-btn-box .new-btn-test svg {
    width: 28px;
    height: 16px;
  }

  .cssbuttons-io-button .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    width: 46px;

    border-radius: 10em;
    right: 11px;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .cssbuttons-io-button:hover .icon {
    width: calc(100% - 22px);
  }
}

@media only screen and (max-width: 768px) {
  /* common */
  .bnzv3_container .mb_hidden {
    display: none !important;
  }
  .bnzv3_container {
    font-size: 17px;
  }
  .bnzv3_container .dryeye_button {
    padding: 6px 20px;
    font-size: 18px;
  }
  .bnzv3_container .bt-box {
    margin-top: 20px;
  }
  .bnzv3_container .s1 .btn_box .bt-box .animated-button1 {
    font-size: 22px;
    margin: auto;
    width: 64vw;
    padding: 3px 0;
  }
  .animated-button1 {
    font-size: 20px;
  }
  .bnzv3_container .imgbg {
    width: 40vw;
  }

  .bnzv3_container h2 {
    margin-bottom: 15vw;
  }
  .bnzv3_container h2 span {
    padding: 5px 0;
  }
  .bnzv3_container h2::before {
    border-radius: 10px;
  }

  .bnzv3_container .container {
    width: 95vw;
    margin: 0 auto;
    padding: unset;
    max-width: 95vw !important;
  }

  /* s1 */
  .bnzv3_container .s1 {
    margin-top: 15vw;
  }
  .bnzv3_container .s1 .container {
    /* padding-top: 15vw; */
  }
  .bnzv3_container .s1 h2 {
    text-shadow: rgb(255 255 255) 3px 0px 0px,
      rgb(255 255 255) 2.83333px 0.983333px 0px,
      rgb(255 255 255) 2.35px 1.85px 0px,
      rgb(255 255 255) 1.61667px 2.51667px 0px,
      rgb(255 255 255) 0.7px 2.91667px 0px,
      rgb(255 255 255) -0.283333px 2.98333px 0px,
      rgb(255 255 255) -1.25px 2.73333px 0px,
      rgb(255 255 255) -2.06667px 2.16667px 0px,
      rgb(255 255 255) -2.66667px 1.36667px 0px,
      rgb(255 255 255) -2.96667px 0.416667px 0px,
      rgb(255 255 255) -2.95px -0.566667px 0px,
      rgb(255 255 255) -2.6px -1.5px 0px,
      rgb(255 255 255) -1.96667px -2.26667px 0px,
      rgb(255 255 255) -1.11667px -2.78333px 0px,
      rgb(255 255 255) -0.133333px -3px 0px,
      rgb(255 255 255) 0.85px -2.88333px 0px,
      rgb(255 255 255) 1.75px -2.43333px 0px,
      rgb(255 255 255) 2.45px -1.73333px 0px,
      rgb(255 255 255) 2.88333px -0.833333px 0px;
    /* font-family: Arial; */
    /* font-size: 32px; */
    text-align: center;
  }
  .bnzv3_container .s1 .btn_box {
    width: 80vw;
    margin: auto;
    padding: 10vw 0vw 5vw;

    border-radius: 50px 20px 20px 20px;
  }
  .bnzv3_container .s1 .btn_box .bt-box {
    justify-content: flex-start;
  }
  .bnzv3_container .s1 .btn_box img {
    width: 49vw;
    position: absolute;
    right: 0;
    top: -24vw;
    left: 0;
    margin: auto;
  }
  .bnzv3_container .s1 .p1 {
    margin-top: 10vw;
    margin-bottom: 5vw;
  }

  .bnzv3_container .s1 .imgbg1 {
    width: 60vw;
    top: 65vw;
  }

  /* s2 */
  .bnzv3_container .s2 {
    margin-top: 15vw;
  }

  .bnzv3_container .s2 h2::before {
    width: 49%;
    height: 158%;
  }
  .bnzv3_container .s2 p {
    width: 90vw;
    margin: 0 auto;
    border-radius: 70px 10px 70px 10px;
    padding: 5vw 8vw;
    padding-top: 7vw;
    padding-left: 9vw;
    text-align: justify;
  }
  .bnzv3_container .s2 p::before {
    border-radius: 70px 10px 70px 10px;
    border: solid 2px #52da9b;
    top: 2vw;
    left: 2vw;
  }

  /* s3 */
  .bnzv3_container .s3 {
    margin-top: 15vw;
  }
  .bnzv3_container .s3 .imgbg1 {
    width: 80vw;
    bottom: 60vw;
  }
  .bnzv3_container .s3 .imgbg2 {
    width: 80vw;
    top: 40vw;
  }
  .bnzv3_container .s3 h3 {
    display: block;
    width: 55vw;
    margin: 0 auto;
    padding: 4vw 0;
    margin-bottom: 10vw;
  }
  .bnzv3_container .s3 ul {
    flex-flow: column;
  }
  .bnzv3_container .s3 ul li {
    flex-flow: row;
    justify-content: flex-start;
    width: 90vw;
    margin: 0 auto;
    margin-bottom: 10vw;
    font-size: 18px;
  }

  .bnzv3_container .s3 ul li img {
    width: 45vw;
    margin-right: 4vw;
  }

  .s11 {
    margin-bottom: 0 !important;
  }
  /* s4 */
  .bnzv3_container .s4 {
    margin-top: 15vw;
    /* padding: 20vw 0; */
  }
  .bnzv3_container .s4 h2::before {
    width: 48%;
    height: 158%;
  }
  .bnzv3_container .s4 h2 img {
    position: absolute;
    width: 53vw;
  }
  .bnzv3_container .s4 h3 {
    padding: 5vw 3vw;
    margin: 10vw 0;
  }

  .bnzv3_container .s4 ul {
    flex-wrap: wrap;
    width: 95vw;
    margin: 5vw auto;
    justify-content: space-around;
    margin-top: 10vw;
  }

  .bnzv3_container .s4 ul li {
    width: 80vw;
    margin-bottom: 10vw;
    border-radius: 20px;
    flex-flow: revert;
  }
  .bnzv3_container .s4 ul li p {
    height: 20vw;
    order: 2;
    font-size: 18px;
    margin-left: 5vw;
  }

  .bnzv3_container .s4 ul li img {
    width: 35vw;
    order: 1;
    border-radius: 20px;
  }
  .bnzv3_container .s4 ul li span {
    width: 10vw;
    height: 10vw;
    top: -5vw;
  }

  /* .bnzv3_container .s4 .end_notice {
        background: unset;
        border: 1px solid #fff;
        border-radius: 100px;
        padding: 5vw 7vw;
        text-align: justify;
    } */

  .bnzv3_container .s4 .end_notice {
    width: 90vw;
    margin: 0 auto;
    border-radius: 70px 10px 70px 10px;
    padding: 5vw 8vw;
    padding-top: 7vw;
    padding-left: 9vw;
    text-align: justify;
  }
  .bnzv3_container .s4 .end_notice::before {
    border-radius: 70px 10px 70px 10px;
    border: solid 2px #52da9b;
    top: 2vw;
    left: 2vw;
  }

  /* s5 */
  .bnzv3_container .s5 {
    margin-top: 15vw;
  }
  .s5 p a i {
    font-size: 0.69em !important;
  }
  .bnzv3_container .s5 h2 span {
    font-size: 6.15vw;
  }
  .bnzv3_container .s5 img {
    width: 95vw;
    margin: 7vw auto;
  }

  .bnzv3_container .s5 .end_p {
    width: 90vw;
    margin: 0 auto;
    border-radius: 70px 10px 70px 10px;
    padding: 5vw 8vw;
    padding-top: 9vw;
    padding-left: 10vw;
    text-align: justify;
  }

  .bnzv3_container .s5 p::before {
    border-radius: 70px 10px 70px 10px;
    border: solid 2px #52da9b;
    top: 2vw;
    left: 2vw;
  }

  /* s6 */

  .bnzv3_container .s6 {
    margin-top: 15vw;
  }
  .bnzv3_container .s6 h3 {
    font-weight: 900;
    font-size: 22px;
    margin-bottom: 5vw;
  }
  .bnzv3_container .s6 ul {
    flex-flow: column;
    margin-top: 2vw;
  }
  .bnzv3_container .s6 ul li {
    flex-flow: row;
    margin-top: 7vw;
    justify-content: flex-start;
  }
  .bnzv3_container .s6 ul li img {
    width: 40vw;
    margin-right: 2vw;
  }
  .bnzv3_container .s6 ul li p {
    text-align: left;
    font-size: 18px;
  }

  .bnzv3_container .s6 ul li span {
    width: 13vw;
    height: 13vw;
    font-size: 14px;
    top: 1vw;
  }

  .bnzv3_container .s6 .benefit {
    margin-top: 10vw;
  }
  .bnzv3_container .s6 .benefit h4 {
    padding: 3vw 2vw;
    width: 90vw;
    font-size: 22px;
  }
  .bnzv3_container .s6 .benefit ul {
    width: 90vw;
    margin: 0 auto;
  }
  .bnzv3_container .s6 .benefit ul li {
    margin-top: 3vw;
    padding: 2vw 1vw;
    padding-left: 8vw;
    font-size: 18px;
  }
  .bnzv3_container .s6 .benefit ul li:nth-child(1) {
    width: 43vw;
  }
  .bnzv3_container .s6 .benefit ul li:nth-child(2) {
    width: 57vw;
  }
  .bnzv3_container .s6 .benefit ul li img {
    width: 5vw;
    left: 2vw;
  }

  /* s7 */
  .bnzv3_container .s7 {
    margin-top: 15vw;
    padding-top: 10vw;
    padding-bottom: 15vw;
  }
  .bnzv3_container .s7 h2 img {
    position: absolute;
    width: 33vw;
  }
  .bnzv3_container .s7 .sec_con_table table {
    margin-left: 0;
    width: 95vw;
    font-size: 13px;
    margin: 5vw auto;
  }
  .bnzv3_container .s7 .sec_con_table table thead tr,
  .bnzv3_container .s7 .sec_con_table table tbody tr {
    height: auto;
  }
  table th,
  .bnzv3_container .s7 .sec_con_table table tbody th,
  .bnzv3_container .s7 .sec_con_table table tbody th:nth-child(1) {
    padding: 5px;
  }

  .bnzv3_container .s7 .sec_con_table table tbody th > div {
    display: block;
  }
  .bnzv3_container .s7 .sec_con_table table tbody th:nth-child(1) > div {
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: center;
  }
  .bnzv3_container .s7 .sec_con_table table tbody th:nth-child(1) > div img {
    width: 20px;
    margin-right: 0px;
  }
  .bnzv3_container .s7 .sec_con_table table tbody th > div img {
    width: 13px;
    margin-right: 5px;
  }
  .bnzv3_container .s7 .sec_con_table table tbody .other_style > span {
    font-size: 10px;
  }

  .bnzv3_container .s7 .sec_con_table .table_img {
    display: none;
    width: 95vw;
    margin: 0 auto;
  }

  /* s8 */

  .bnzv3_container .s8 {
    margin-top: 15vw;
  }

  .bnzv3_container .s8 h2::before {
    width: 41%;
    height: 158%;
  }
  .bnzv3_container .s8 .imgbg1 {
    width: 70vw;
    top: 175vw;
  }
  .bnzv3_container .s8 .imgbg2 {
    width: 70vw;
    top: 65vw;
  }
  .bnzv3_container .s8 ul li {
    margin-bottom: 10vw;
    text-align: justify;
  }
  .bnzv3_container .s8 ul li img {
    width: 40vw;
    margin-right: 3vw;
  }
  .bnzv3_container .s8 ul li:nth-child(even) img {
    margin-right: unset;
    margin-left: 3vw;
  }

  /* s9 */
  .bnzv3_container .s9 {
    margin-top: 15vw;
  }
  .bnzv3_container .s9 h2::before {
    width: 49%;
    height: 158%;
    border: solid 2px #3dc1ee;
  }
  .bnzv3_container .s9 .accordion h2 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 2px solid #3dc1ee;
    padding: 0;
    padding-bottom: 10px;
    font-size: 18px;
    font-weight: 900;
    line-height: 27px;
    color: #3dc1ee;
    text-align: left;
  }
  .bnzv3_container .s9 .accordion h2::before {
    display: none;
  }
  .bnzv3_container .s9 .c-1b407a {
    color: #3dc1ee !important;
  }

  /* s10 */

  .bnzv3_container .s10 {
    margin-top: 15vw;
    padding: 15vw 0;
  }

  .bnzv3_container .s10 #appoint-form {
    width: 80vw;
    margin: 0 auto;
    margin-top: 10vw;
  }

  .bnzv3_container .s10 #appoint-form .required {
    width: 80vw;
    border-radius: 8px;
    margin-bottom: 5vw;
    border: none;
    color: #838383;
    font-size: 14px;
    padding: 8px 15px;
    height: 35px;
  }

  .bnzv3_container .s10 #appoint-form .readmore span {
    font-size: 23px;
  }
}

.new-btn-box {
  width: 80vw;
  height: 80vw;
  margin: 0 auto;
  background: url('https://statichk.cmermedical.com/hkcmereye/bnzV2/new-bnz-Box-MB.webp')
    no-repeat;
  background-size: 100% auto;
  position: relative;
}

/* 文字描述 */
.bnzv3_container .new-btn-box h2 {
  padding-top: 28.95vw;
  margin-right: 4.82vw;
  margin-bottom: 0;
  margin-left: auto;
  color: #78b58b;
  width: fit-content;
  font-size: 6.54vw;
  font-style: normal;
  font-weight: 900;
}

/* 按钮 */
.new-btn-box .bt-box {
  justify-content: flex-end;
  margin-top: 0;
}

.new-btn-box .bt-box .animated-button1 {
  padding: 1.03vw 0;
  margin: 0;
  margin-top: 0.51vw;
  margin-right: 2.82vw;
  width: 43.41vw;
  color: #fff;
  text-align: center;
  font-family: 'Noto Sans HK';
  font-size: 4.03vw;
  font-style: normal;
  font-weight: 700;
  line-height: 1.26;
  letter-spacing: 0.33vw;
}

/* 跳转测试 */
.new-btn-box .new-btn-test {
  position: absolute;
  bottom: 3.85vw;
  right: 0;
  display: flex;
  width: 49.69vw;
  height: 11.46vw;
  padding: 0.51vw 2.05vw;
  color: #fff;
  font-family: 'Noto Sans HK';
  font-size: 4.8vw;
  font-style: normal;
  font-weight: 900;
  line-height: 1.3;
  letter-spacing: 0.38vw;
  background: linear-gradient(90deg, #65dbff 0%, #b37be0 100%);
  box-shadow: 0px 2.368px 2.368px 0px rgba(17, 21, 222, 0.25) !important;
}

.cssbuttons-io-button {
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
  color: white;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 4.36vw;
  border-radius: 10em;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  box-shadow: 0 0 1.6em rgba(183, 33, 255, 0.3),
    0 0 1.6em hsla(191, 98%, 56%, 0.3);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.cssbuttons-io-button .icon {
  background: white;
  margin-left: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 6.9vw;
  width: 6.9vw;
  border-radius: 10em;
  right: 1.28vw;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.cssbuttons-io-button:hover .icon {
  width: calc(100% - 2.56vw);
}

.cssbuttons-io-button .icon svg {
  width: 0.8em;
  height: 0.8em;
  transition: transform 0.3s;
  color: #b721ff;
}

.cssbuttons-io-button:hover .icon svg {
  transform: translateX(0.1em);
}

.cssbuttons-io-button:active .icon {
  transform: scale(0.9);
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
  background-color: var(--accent-color);
}

.section-title.text-center::after {
  left: 50%;
  transform: translateX(-50%);
}

.card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  margin-bottom: 2rem;
  border: none;
  position: relative;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  height: 250px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card:hover .card-img-top {
  transform: scale(1.05);
}

.card-body {
  padding: 2rem;
}

.activity-icon {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.card:hover .activity-icon {
  transform: scale(1.1);
  color: var(--secondary-color);
}

.btn-primary {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  border-radius: 30px;
  padding: 0.75rem 2rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 87, 146, 0.3);
  font-size: 18px;
}

.btn-primary:hover {
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 187, 240, 0.4);
}
.btn-outline-hover {
  color: white;
}
.btn-outline-hover:hover {
  color: rgb(255, 255, 255);
}

.btn-outline-light {
  border-radius: 30px;
  padding: 0.75rem 2rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  font-size: 18px;
  border: 1px solid white;

  color: white;
}
.btn-outline-light:hover {
  color: rgb(33, 37, 41);
}

.btn-outline-light:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(255, 255, 255, 0.2);
}

.activity-card {
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.activity-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.activity-img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.activity-content {
  padding: 2rem;
}

.activity-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.activity-text {
  font-size: 18px;
  margin-bottom: 1.5rem;
}

.activity-step {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: var(--accent-color);
  color: #fff;
  border-radius: 50%;
  font-weight: 700;
  margin-right: 1rem;
  flex-shrink: 0;
  font-size: 18px;
}

.step-text {
  font-size: 18px;
  max-width: 510px;
  cursor: pointer;
}

.activity-note {
  font-size: 16px;
  color: var(--accent-color);
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  border-left: 4px solid var(--accent-color);
}

.activity-icon-large {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: block;
  text-align: center;
}

.activity-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: var(--accent-color);
  color: var(--dark-bg);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-weight: 700;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  font-size: 16px;
}

.activity-emoji {
  font-size: 24px;
  margin-right: 8px;
  vertical-align: middle;
}

.highlight-box {
  background-color: rgba(0, 187, 240, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 5px solid var(--primary-color);
}

.highlight-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.highlight-text {
  font-size: 18px;
  margin-bottom: 0;
}

.location-tag {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 16px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

@media (max-width: 991px) {
  :deep(.swiper-button-next) {
    right: 10px;
  }
  :deep(.swiper-button-prev) {
    left: 10px;
  }

  :deep(.swiper-button-prev:after) {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    padding: 5px;
    width: 35px;
    height: 35px;
    padding-top: 8px;
    border-radius: 50%;
    backdrop-filter: blur(5px);
    flex-shrink: 0;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :deep(.swiper-button-next::after) {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    padding: 5px;
    width: 35px;
    height: 35px;
    padding-top: 8px;
    border-radius: 50%;
    backdrop-filter: blur(5px);
    flex-shrink: 0;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 767px) {
  .hero-section {
    height: auto;
    padding: 5rem 0;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .activity-title {
    font-size: 22px;
  }

  .activity-text,
  .step-text,
  p,
  li {
    font-size: 16px;
  }
}

body {
  font-family: 'Noto Sans TC', sans-serif;
  color: var(--text-color);
  line-height: 1.6;
  overflow-x: hidden;
}
section {
  font-size: 16px;
}

a {
  text-decoration: none;
}

.hero-section {
  position: relative;
  /*height: 30vh;*/
  min-height: 400px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100%;
  z-index: -1;
  right: 0;
  margin: auto;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 87, 146, 0.85),
    rgba(0, 187, 240, 0.7)
  );
  z-index: -1;
}

.hero-content {
  position: relative;
  z-index: 1;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  margin-bottom: 2rem;
  border: none;
  position: relative;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card:hover .card-img-top {
  transform: scale(1.05);
}

.card-body {
  padding: 2rem;
}

.card-body .card-text {
  font-size: 16px;
}

.btn-primary {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  border-radius: 30px;
  padding: 0.75rem 2rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 87, 146, 0.3);
  margin-bottom: 0;
}

.btn-primary:hover {
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 187, 240, 0.4);
}

.btn-outline-light {
  border-radius: 30px;
  padding: 0.75rem 2rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.btn-outline-light:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(255, 255, 255, 0.2);
}

.service-item {
  padding: 2.5rem;
  border-radius: 15px;
  background-color: white;
  margin-bottom: 1.5rem;
  transition: all 0.4s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.service-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background-color: var(--accent-color);
  transition: width 0.3s ease;
}

.service-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.service-item:hover::before {
  width: 10px;
}

.service-icon {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.service-item:hover .service-icon {
  transform: scale(1.1) translate(25px, -5px);
  color: var(--secondary-color);
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--primary-color);
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: all 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-5px);
  background-color: var(--primary-color);
  color: white;
  box-shadow: 0 5px 15px rgba(0, 87, 146, 0.3);
}

.cta-section {
  background: linear-gradient(135deg, var(--accent-color), #ffb347);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
}

.cta-section::after {
  content: '';
  position: absolute;
  bottom: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
}

.testimonial-section {
  background-color: var(--light-bg);
  padding: 5rem 0;
  position: relative;
}

.testimonial-card {
  padding: 2.5rem;
  border-radius: 15px;
  background-color: white;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.testimonial-quote {
  display: block;
  font-size: 2rem;
  color: var(--accent-color);
  opacity: 0.5;
  position: absolute;
  top: 20px;
  left: 20px;
}
.testimonial-card:after {
  position: absolute;
  right: 30px;
  content: '';
  background: url(https://www.gstatic.com/images/branding/searchlogo/ico/favicon.ico);
  width: 30px;
  height: 30px;
  top: 30px;
}

.hashtag {
  color: var(--primary-color);
  font-weight: bold;
  background-color: rgba(0, 187, 240, 0.1);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  display: inline-block;
  margin: 0.2rem 0.2rem;
  font-size: 20px;
}

.highlight {
  background: linear-gradient(
    120deg,
    rgba(255, 209, 102, 0.2),
    rgba(255, 209, 102, 0.4)
  );
  padding: 1rem 1.5rem;
  border-radius: 10px;
  border-left: 4px solid var(--accent-color);
  font-weight: 500;
}

.video-section {
  position: relative;
  overflow: hidden;
}

.video-bg {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  transform: perspective(1000px) rotateY(-5deg);
  transition: all 0.5s ease;
}

.video-bg:hover {
  transform: perspective(1000px) rotateY(0);
}

.video-bg img {
  width: 100%;
  border-radius: 15px;
  transition: all 0.5s ease;
  margin-bottom: 0;
}

.video-bg:hover img {
  transform: scale(1.05);
}
.video-bg {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  transform: perspective(1000px) rotateY(-5deg);
  transition: all 0.5s ease;
  //   width: 640px;
  height: 360px;
}

.video-bg iframe {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: none;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.5s ease;
}

.video-bg:hover {
  transform: perspective(1000px) rotateY(0);
}

.video-bg img {
  width: 100%;
  border-radius: 15px;
  transition: all 0.5s ease;
  margin-bottom: 0;
}

.video-bg:hover img {
  transform: scale(1.05);
}

.video-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: 2rem;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.video-play:hover {
  background-color: rgb(255, 0, 51);
  color: white;
  transform: translate(-50%, -50%) scale(1.1);
}

.video-play i {
  color: rgb(255, 0, 51);
}

.video-play:hover i {
  color: white;
  z-index: 2;
}

.counter-box {
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.counter-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.counter-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.counter-text {
  font-size: 1.1rem;
  color: var(--text-color);
  font-weight: 500;
}

.activity-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: var(--accent-color);
  color: var(--dark-bg);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-weight: 700;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.card:hover .card-overlay {
  opacity: 1;
}

.fb-text {
  background: transparent;
  position: relative;
  padding: 0px 15px;
  display: inline;
  align-items: center;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #0163e0;
  border-radius: 25px;
  outline: none;
  overflow: hidden;
  color: #0163e0;
  transition: color 0.3s 0.1s ease-out;
  text-align: center;
  display: inline-flex;
}

.fb-text svg {
  fill: #0163e0;
  height: 25px;
  width: 25px;
}

.fb-text span {
  margin: 3px 10px;
}

.fb-text::before {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  content: '';
  border-radius: 50%;
  display: block;
  width: 20em;
  height: 20em;
  left: -5em;
  text-align: center;
  transition: box-shadow 0.5s ease-out;
  z-index: -1;
}

.fb-text {
  /* 原背景色过渡改为动画：3秒无限循环 */
  animation: fbHoverAnimate 5s infinite alternate;
}

.fb-text:hover svg {
  fill: currentColor;
  /* 保持图标颜色跟随文字 */
}

.fb-text:hover::before {
  box-shadow: inset 0 0 0 10em #0163e0;
  /* 保持原有伪元素效果 */
}

@keyframes fbHoverAnimate {
  0% {
    color: #0163e0;
    background: transparent;
    border-color: #0163e0;
  }

  30% {
    color: #fff;
    background: #0163e0;
    border-color: #0163e0;
  }

  70% {
    color: #fff;
    background: #0163e0;
    border-color: #0163e0;
  }

  100% {
    color: #0163e0;
    background: transparent;
    border-color: #0163e0;
  }
}

.ins-text {
  background: transparent;
  position: relative;
  padding: 0px 15px;
  display: inline;
  align-items: center;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid rgb(255, 0, 0);
  border-radius: 25px;
  outline: none;
  overflow: hidden;
  color: rgb(255, 0, 0);
  transition: color 0.3s 0.1s ease-out;
  text-align: center;
  display: inline-flex;
}

.ins-text span {
  margin: 3px 10px;
}

.ins-text::before {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  content: '';
  border-radius: 50%;
  display: block;
  width: 20em;
  height: 20em;
  left: -5em;
  text-align: center;
  transition: box-shadow 0.5s ease-out;
  z-index: -1;
}

.ins-text {
  /* 原过渡改为3秒无限循环动画 */
  animation: insHoverAnimate 5s infinite alternate;
}

.ins-text::before {
  box-shadow: inset 0 0 0 10em rgb(255, 0, 0);
  /* 保持原有伪元素效果 */
}

@keyframes insHoverAnimate {
  0% {
    color: rgb(255, 0, 0);
    background: transparent;
    border-color: rgb(255, 0, 0);
  }

  30% {
    color: #fff;
    background: rgb(255, 0, 0);
    border-color: rgb(255, 0, 0);
  }

  70% {
    color: #fff;
    background: rgb(255, 0, 0);
    border-color: rgb(255, 0, 0);
  }

  100% {
    color: rgb(255, 0, 0);
    background: transparent;
    border-color: rgb(255, 0, 0);
  }
}

@media (max-width: 991px) {
  .hero-section {
    height: 80vh;
  }

  .section-title {
    font-size: 2rem;
  }

  .counter-number {
    font-size: 2.5rem;
  }

  .video-bg {
    width: 100%;
    height: 49vw;
  }
}

@media (max-width: 767px) {
  .hero-section {
    height: auto;
    padding: 5rem 0;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .counter-box {
    margin-bottom: 1.5rem;
  }

  .video-play {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }

  .video-bg {
    width: 100%;
    height: 49vw;
  }
}
</style>

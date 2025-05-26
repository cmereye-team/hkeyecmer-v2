<script lang="ts" setup>
const locale = useState<string>('locale.setting')
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: t('pages.ophthalmic_information.ophthalmic_publicity'),
}))
// const eyeDisease = [
//   {
//     img: 'https://static.cmereye.com/imgs/2024/07/821fc091bad9c813.png',
//     title: '【香港兒童壓力街訪】現今學童壓力究竟有幾大❓大人又知唔知佢哋嘅內心世界？',
//     text: `喺現今競爭激烈嘅社會下，家長都希望子女能夠贏在起跑線上🏁，從學術到課外活動，用各種方法提高子女競爭力。然而，小朋友嘅抗壓能力係咪足以承受現今嘅教育同培養模式呢? 家長有冇嘗試聆聽過佢哋嘅內心世界💭？一齊聽吓小朋友真正嘅想法喇🫵！\n\n#街訪 #訪問 #街頭採訪 #街頭訪問 #兒童街訪 #兒童壓力 #兒童壓力調查 #香港兒童壓力 #streetinterview #希瑪眼科 #眼科中心 #眼科診所 #希瑪眼科診所 #希瑪醫療`,
//     link: 'https://youtu.be/833gG0x2KMQ',
//     img_title: '【香港兒童壓力街訪】',
//     img_alt: '【香港兒童壓力街訪】',
//   },
//   {
//     img: 'https://static.cmereye.com/imgs/2024/05/ac6072e9b6f4d10f.jpg',
//     title: '【定期驗眼👁️療癒身心放眼自然🍃】',
//     text: `放慢腳步走進大自然，用雙眼探索奧妙，感受萬物生機，暫忘生活煩囂，係我一直想做嘅事！想要盡情發掘更多美景，捕捉每個動人瞬間，擁有明亮嘅雙眼至關重要！\n\n愛護眼睛，從驗眼開始。定期驗眼，及早發現和治療任何潛在嘅眼睛問題，守護眼睛健康。唯有擁有一雙健康明眸👁️，才能放眼世界，看得更遠，感受大自然嘅療癒力量。\n\n你今年又驗咗眼未呢😉？\n\n#驗眼 #定期驗眼 #眼睛健康 #希瑪眼科 #眼科中心 #眼科診所 #希瑪眼科診所 #希瑪醫療`,
//     link: 'https://youtu.be/6M-WglExU1U',
//     img_title: '【定期驗眼👁️療癒身心放眼自然🍃】',
//     img_alt: '【定期驗眼👁️療癒身心放眼自然🍃】',
//   },
//   {
//     img: 'https://static.cmereye.com/imgs/2024/04/90b2af35639a3a09.webp',
//     title: '【「銀」色浪漫】真實客戶分享｜術後重拾清楚視界👁️',
//     text: `去年嘅「銀」色浪漫活動中，有幸聽到呢位客人嘅真實分享，透過「耀眼行動」接受了白內障治療，並順利完成了手術。術後迅速康復，視力得到了明顯改善，生活質量顯著提升。\n\n希瑪眼科擁有經驗豐富嘅醫療團隊，致力於為每位患者提供周全嘅術前準備和精確嘅手術過程。使用符合國際標準嘅先進設備，確保治療過程安全可靠。\n\n不少人面對白內障手術可能會有所顧慮，透過分享呢位患者嘅親身經歷，希望能給予更多正受白內障困擾嘅患者更多信心和勇氣，勇敢踏出治療嘅第一步，去片！\n\n#白內障  #白內障治療  #白內障手術  #銀色浪漫  #客戶分享  #客戶見證  #希瑪眼科  #眼科中心  #眼科診所  #希瑪眼科診所  #希瑪醫療`,
//     link: 'https://youtu.be/F5fdrLskDdc',
//     img_title: '白內障手術_客戶見證',
//     img_alt: '笑容滿面的真實客戶分享白內障手術體驗',
//   },
//   {
//     img: 'https://static.cmereye.com/imgs/2024/04/f003834bdb76781e.webp',
//     title: '【「銀」色浪漫】真實客戶分享｜清楚見證人生重要時刻💍✨',
//     text: `「能夠清楚見證兒子幸福，係我人生中最大願望🥹！」呢位客人因飽受白內障和黃斑病變困擾，未能親眼目睹兒子婚禮嘅感動瞬間，讓她既期待又遺憾。術後一切都清楚可見，更感受到兒子嘅滿滿孝心🫂。\n\n希瑪眼科醫療團隊經過嚴格培訓和資格認證，提供國際標準嘅眼科服務，並擁有先進醫療技術，堅持高品質、嚴監管。\n\n現代醫療科技嘅進步，讓曾經使人望之卻步嘅眼科手術，變得更安全高效，只需短時間就能享受前所未有嘅清楚視界！\n\n面對白內障和黃斑病變，好多人都會感到害怕猶豫。通過分享呢位客戶嘅經歷，希望能夠啟發和鼓勵同樣受困於眼疾嘅您，放下顧慮，踏出治療嘅第一步，去片！\n\n#白內障 #白內障治療 #白內障手術 #黃斑病變 #黃斑部病變 #黃斑病變治療 #黃斑病變手術 #銀色浪漫 #客戶分享 #客戶見證 #希瑪眼科 #眼科中心 #眼科診所 #希瑪眼科診所 #希瑪醫療`,
//     link: 'https://youtu.be/zbYpdLZtL0c',
//     img_title: '白內障手術_客戶見證',
//     img_alt: '笑容滿面的真實客戶分享白內障手術體驗',
//   },
//   {
//     img: 'https://static.cmereye.com/imgs/2024/02/f93e8e45fa7b2d3b.webp',
//     title: '【「銀」色浪漫】真實客戶見證：術後一切如常，迅速康復！',
//     text: `「真係好似咩事都冇發生過！」去年舉辦嘅「銀」色浪漫活動中，一位曾接受白內障手術嘅客人分享親身體驗，術後視力迅速康復，日常生活幾乎重返正軌↩️，就好似未曾經歷過手術一樣。\n\n是次活動見證客人視力從模糊到明亮嘅奇蹟，每一個轉變都為之動容🥰，希望可以藉此激勵更多同樣受困於白內障嘅患者。\n\n醫療科技嘅進步，白內障治療已變得更安全、高效。曾經讓人望而卻步嘅手術，如今可以輕鬆面對😌👍\n\n如果你對手術仍有顧慮，不妨聽吓呢位客人嘅心聲，或許能為你帶來一點啟發，釋放內心擔憂，勇敢踏出治療嘅第一步，去片🫵！\n\n#白內障 #白內障治療 #白內障手術 #銀色浪漫 #客戶分享 #客戶見證 #希瑪眼科 #眼科中心 #眼科診所 #希瑪眼科診所 #希瑪醫療`,
//     link: 'https://www.youtube.com/watch?v=Ds5NBkrQLXo',
//     img_title: '白內障手術_客戶見證',
//     img_alt: '笑容滿面的真實客戶分享白內障手術體驗',
//   },
//   {
//     img: 'https://static.cmereye.com/imgs/2024/03/af66c27a64482a61.jpg',
//     title: '【「銀」色浪漫】真實客戶分享：重見彩色人生',
//     text: `「原來孫仔嘅笑容係咁燦爛🥹！」呢位客人原本世界只有滿滿灰白黑🩶🤍🖤，術後首次清楚見到孫仔，感激之情難以言喻，還迫不及待完成另一邊眼睛。術後唔單止視力得到康復，更感受到家庭嘅溫暖🫂。\n\n希瑪眼科匯聚經驗豐富嘅醫療團隊，以及提供更安全、可靠、舒適嘅就診環境，親切貼心嘅服務令客人感到賓至如歸。配備符合國際標準嘅先進醫療設備，致力幫助患者重拾明亮視界👁️✨，提升生活質素。\n\n面對白內障，好多人一諗起開刀就會怯步拖延唔做。透過分享呢位客人嘅親身經歷，相信能夠啟發更多正受白內障困擾嘅患者，帶畀你信心，鼓勵你放下顧慮，踏出治療嘅第一步👣，即刻去片！\n\n#白內障 #白內障治療 #白內障手術 #銀色浪漫 #客戶分享 #客戶見證 #希瑪眼科 #眼科中心 #眼科診所 #希瑪眼科診所 #希瑪醫療`,
//     link: 'https://youtu.be/Jt0fmKmfiIU',
//     img_title: '白內障手術_客戶見證',
//     img_alt: '戴口罩的真實客戶分享白內障手術體驗',
//   },
//   {
//     img: 'https://static.cmereye.com/imgs/2023/12/f6ccfdc805fd1912.webp',
//     title: '【顏色敏感度實測】到底邊類人分辨顏色嘅能力最強呢？',
//     text: '可能唔少人都聽過分辨顏色嘅能力或者同性別有關，而為咗證實呢個講法嘅真實性，佩儀嚟到旺角搵咗唔同人一齊做咗個顏色測試遊戲，快啲去片睇吓大家嘅測試結果係點喇！',
//     link: 'https://www.youtube.com/watch?v=UF5okQ4HgOI',
//     img_title: '街頭訪問_顏色敏感度測試',
//     img_alt: '街頭訪問年輕人參與顏色敏感度測試',
//   },
//   {
//     img: 'https://static.cmereye.com/imgs/2023/05/040da0e4cbb6878a.png',
//     title:
//       'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease1_title',
//     text: 'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease1_text',
//     link: 'https://youtu.be/0pN3E5ewLjE',
//     img_title: '過敏性結膜炎_動畫片',
//     img_alt: '動畫片介紹過敏性結膜炎症狀及預防方法',
//   },
//   {
//     img: 'https://static.cmereye.com/imgs/2023/05/195b3f6dc0ff23b9.png',
//     title:
//       'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease2_title',
//     text: 'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease2_text',
//     link: 'https://youtu.be/fM2cCC5zxWw',
//     img_title: '乾眼症_動畫片',
//     img_alt: '動畫片介紹乾眼症症狀及預防方法',
//   },
//   {
//     img: 'https://static.cmereye.com/imgs/2023/06/1664b018cca2148a.webp',
//     title:
//       'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease3_title',
//     text: 'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease3_text',
//     link: 'https://youtu.be/qNF78pbRx6c',
//     img_title: '母親節_動畫片',
//     img_alt: '關於母親節的動畫片',
//   },
//   {
//     img: 'https://static.cmereye.com/imgs/2023/06/53b1b85f90011cda.webp',
//     title:
//       'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease4_title',
//     text: 'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease4_text',
//     link: 'https://youtu.be/oYTtMkqVK4w',
//     img_title: '情人節_動畫片',
//     img_alt: '關於情人節的動畫片',
//   },
//   {
//     img: 'https://static.cmereye.com/imgs/2023/06/c6cd62a4b837e9b1.webp',
//     title:
//       'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease5_title',
//     text: 'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease5_text',
//     link: 'https://youtu.be/L9DHmvCTAZk',
//     img_title: '乾眼症_動畫片',
//     img_alt: '直向動畫片介紹乾眼症症狀及預防方法一',
//   },
//   {
//     img: 'https://static.cmereye.com/imgs/2023/06/56e33eb0198fc5dc.webp',
//     title:
//       'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease6_title',
//     text: 'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease6_text',
//     link: 'https://youtu.be/9CnKIu04Nkk',
//     img_title: '乾眼症_動畫片',
//     img_alt: '直向動畫片介紹乾眼症症狀及預防方法二',
//   },
// ]

interface mainContent {
  img: string
  link: string
  title: string
  text: Array<string>
  img_title: string
  img_alt: string
  img_title_En: string
  img_alt_En: string
}

const eyeDisease = ref<mainContent[]>([])

let errorPage = ref(false)
const getMainContent = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  try {
    const { data }: any = await useFetch(
      'https://hkcmereye.com/api.php/list/203'
    )
    let res = JSON.parse(data.value)
    eyeDisease.value = res.data.map((item: any) => {
      return {
        img: `https://hkcmereye.com${item.ico}`,
        link: item.source,
        title: item.title,
        doctor: item.ext_doctor_name,
        text: delTextBrTag(item.ext_context),
        img_title: item.ext_caseimg_title,
        img_alt: item.ext_caseimg_alt,
        img_title_En: item.ext_EnTitle,
        img_alt_En: item.ext_EnAlt,
      }
    })
  } catch {
    errorPage.value = true
  }
  toTop()
  loading.close()
}

const delTextBrTag = (text: string) => {
  let texts = []
  texts = text.split('<br>')
  texts = texts.filter((item) => item !== '')
  console.log(texts, 'texts')
  return texts
}

const toTop = () => {
  let topHeight: number =
    document.getElementById('doctorClassConetnt')?.offsetTop || 0
  document.body.scrollTop =
    document.documentElement.scrollTop =
    topHeight -=
      100
}

onMounted(() => {
  if (window.location.pathname.includes('/en/')) {
    locale.value = 'en'
  }
  try {
  } catch (e) {}
  getMainContent()
})
</script>

<template>
  <div class="container_publicity">
    <div class="publicity">
      <div>
        <div>
          <div>
            <img
              srcset="
                https://static.cmereye.com/imgs/2023/07/c77bfeb27c892e8e.jpg 768w,
                https://static.cmereye.com/imgs/2023/06/d14944870b7cfec7.png
              "
              src="https://static.cmereye.com/imgs/2023/06/d14944870b7cfec7.png"
              :title="
                locale === 'en'
                  ? 'Promotional Video_Filming'
                  : '宣傳片_影片拍攝'
              "
              :alt="
                locale === 'en'
                  ? 'The Crew is focusing on filming the promotional video'
                  : '拍攝團隊正專注進行宣傳片拍攝工作'
              "
            />
          </div>
        </div>
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_text1'
                )
              }}
            </div>
            <div>promotional video</div>
            <div></div>
          </div>
          <div>
            {{
              $t(
                'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_text2'
              )
            }}
          </div>
          <div>
            <div>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_text3'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_text4'
                )
              }}
            </div>
          </div>
          <svg
            width="9"
            height="144"
            viewBox="0 0 9 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-v-1d8b93bf=""
            data-v-a125a221=""
            data-v-4b343dd3=""
            data-v-ee7ab105=""
            data-v-040e870e=""
          >
            <path
              d="M1 1V143L7.5 130.5"
              stroke="#2958A3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              data-v-1d8b93bf=""
              data-v-a125a221=""
              data-v-4b343dd3=""
              data-v-ee7ab105=""
              data-v-040e870e=""
            ></path>
          </svg>
        </div>
      </div>
      <div class="publicity-content-swiper">
        <div>
          <div>
            {{
              $t(
                'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_text5'
              )
            }}
          </div>
          <div class="videoBorder" v-if="!errorPage">
            <PageVideoSwiper :eye-disease="eyeDisease" />
          </div>
        </div>
      </div>
      <div class="publicity-content-mb">
        <div v-for="(item, index) in eyeDisease" :key="index">
          <div>
            <img
              :src="item.img"
              :title="locale === 'en' ? item.img_title_En : item.img_title"
              :alt="locale === 'en' ? item.img_alt_En : item.img_alt"
            />
          </div>
          <div>
            <div>{{ $t(item.title) }}</div>
            <div>
              <p v-for="(t, i) in item.text" :key="i">{{ t }}</p>
            </div>
            <div>
              <a :href="item.link" target="_blank" rel="noopener noreferrer">{{
                $t(
                  'pages.ophthalmic_information.ophthalmic_little_theatre_text.little_theatre_a1'
                )
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <PageInformation />
    </div>
    <div class="footerMenuPom">
      <PageFooterMenu />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footerMenuPom {
  margin-bottom: 50px;
}
.publicity {
  position: relative;
  &::before {
    content: '';
    background: #f1f1f1;
    position: absolute;
    top: -146px;
    left: 0;
    width: calc((100vw - 1493px) / 2 + 1427px);
    height: 706px;
  }
  & > div:nth-child(1) {
    margin: 179px auto 0;
    display: flex;
    position: relative;
    flex-direction: column;
    height: 706px;
    width: 100%;
    max-width: 1493px;
    & > div:nth-child(1) {
      position: absolute;
      width: 100%;
      img {
        width: 100%;
      }
    }
    & > div:nth-child(2) {
      position: absolute;
      bottom: -50px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 5;
      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 49.14px;
        line-height: 46px;
        text-align: center;
        letter-spacing: 0.2em;
        color: #ffffff;
        & > div:nth-child(2) {
          font-family: 'Metropolis';
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 44px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #8ad8dd;
        }
      }
      & > div:nth-child(2) {
        margin-top: 34px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 60px;
        text-align: right;
        letter-spacing: 0.3em;
        color: #ffffff;
      }
      & > div:nth-child(3) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.3em;
        color: #ffffff;
      }
      & > svg {
        margin-top: 100px;
      }
    }
    & > div:nth-child(1) {
      & > img {
        position: relative;
        z-index: 5;
      }
    }
  }
  & > div:nth-child(2) {
    margin-top: 108px;
    margin-bottom: 277px;
    & > div {
      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 35px;
        letter-spacing: 0.05em;
        color: #515151;
        width: 100%;
        max-width: 1190px;
        margin: 0 auto;
      }
    }
  }
  &-content-mb {
    display: none;
  }
}
.videoBorder {
  width: 1190px;
  border-top: 1.75771px solid #8ad8dd;
  padding-top: 73px;
  padding-bottom: 63px;
  margin: 25px auto 0;
}
:deep(.swiper-wrapper) {
  & > div:nth-child(n) {
    & > div:nth-child(1) {
      margin: 0 75px;
    }
  }
}
:deep(.videoList) {
  & > div:nth-child(3) {
    white-space: pre-wrap;
  }
}
.household {
  border-bottom: 1.75771px solid #8ad8dd;
}
@media screen and (max-width: 768px) {
  .container_publicity {
    max-width: 100vw;
    width: 100vw;
    overflow: hidden;
  }
  .publicity {
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 0 0;
    overflow: hidden;
    &::before {
      content: none;
      width: calc(100% - 50px);
      top: 0;
      left: 0;
      height: 0;
    }
    & > div:nth-child(1) {
      margin-top: 78px;
      overflow: hidden;
      height: 290px;
      width: 100%;
      & > div:nth-child(2) {
        bottom: -90px;
        & > div:nth-child(1) {
          font-size: 28px;
          line-height: 1.6;
          & > div:nth-child(2) {
            font-size: 12px;
            line-height: 1.2;
          }
        }
        & > div:nth-child(2) {
          font-size: 18px;
          line-height: 1.6;
          margin-top: 20px;
        }
        & > div:nth-child(3) {
          font-size: 14px;
          line-height: 1.6;
          letter-spacing: 0em;
        }
        & > svg {
          margin-top: -25px;
          transform: scale(0.5);
        }
      }
    }
    &-content-swiper {
      display: none;
    }
    &-content-mb {
      box-sizing: border-box;
      padding: 0 8vw;
      width: 100vw;
      overflow: hidden;
      max-width: 100%;
      margin-top: 120px;
      min-height: 900px;
      display: block;
      & > div {
        display: flex;
        flex-direction: column-reverse;
        margin-bottom: 80px;
        & > div:nth-child(1) {
          margin-right: 72px;
          width: 100%;
          height: auto;
          background: #f2f2f2;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        & > div:nth-child(2) {
          width: 100%;
          position: relative;
          margin-bottom: 90px;
          & > div:nth-child(1) {
            font-family: 'Noto Sans HK';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            letter-spacing: 0.05em;
            padding-bottom: 5px;
            color: #515151;
            position: relative;
          }
          & > div:nth-child(1)::after {
            content: '';
            width: 65.04px;
            border-bottom: 1.75771px solid #8ad8dd;
            display: inline-block;
            position: absolute;
            left: 0;
            bottom: 0;
          }
          & > div:nth-child(2) {
            margin-top: 25px;
            font-family: 'Noto Sans HK';
            font-style: normal;
            font-weight: 350;
            font-size: 13.1828px;
            line-height: 26px;
            text-align: justify;
            letter-spacing: 0.1em;
            text-indent: 30px;
            text-transform: uppercase;
            color: #232323;
            & > div:nth-child(1) {
              margin-bottom: 20px;
            }
          }
          & > div:nth-child(3) {
            position: absolute;
            bottom: -60px;
            left: 50%;
            transform: translateX(-50%);
            width: 95px;
            height: 37.27px;
            background: #8ad8dd;
            font-family: 'Noto Sans HK';
            font-style: normal;
            font-weight: 500;
            font-size: 13.1538px;
            line-height: 26px;
            text-align: center;
            letter-spacing: 0.1em;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
  .videoBorder {
    width: 100%;
    border-top: 1.75771px solid #8ad8dd;
    padding-top: 73px;
    padding-bottom: 63px;
    box-sizing: border-box;
    margin: 25px auto 0;
  }
}
</style>

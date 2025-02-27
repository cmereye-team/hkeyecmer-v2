<script lang="ts" setup>
import { useRouter } from 'vue-router'
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '新聞資訊｜眼科資訊 | 香港希瑪眼科中心',
  meta: [
    {
      name: 'description',
      content:
        '希瑪眼科中心是一家提供眼科診療服務的機構，提供不同的新聞資訊，分享各種眼科知識的文章，希望透過新聞內容提供日常生活中的眼科知識，包括﹕眼疾成因、治療方法、護眼及預防眼疾方法、分享眼科醫學領域的最新知識和研究成果。這些文章涵蓋讓公眾可以更深入地了解眼科知識和保護眼睛的方法。這些知識可以幫助人們更好地預防眼疾、減少眼睛疾病的發生風險，並且提高對眼睛健康的關注和重視。',
    },
    {
      name: 'keywords',
      content:
        '希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 眼科專科診所 眼科專科中心 香港希瑪眼科 香港希瑪 希瑪 希瑪眼科治療 希瑪眼科收費 希瑪眼科治療 希瑪眼科矯視中心 全面眼睛檢查 希瑪眼科香港 希瑪眼科治療方案 希瑪林順潮眼科中心 林順潮眼科中心 林順潮眼科診所 眼睛疾病 眼科醫生 兒童眼科 香港眼科 眼科醫生 眼科診所 眼科資訊  希瑪醫療集團 希瑪醫療 眼科服務',
    },
  ],
}))
// 新闻列表
const newList = [
  {
    newSource: 'BOWTIE',
    principles: '',
    datumSource: '',
    viewCount: '',
    id: 1,
    img: 'https://static.cmereye.com/imgs/2023/05/829d049493cda56b.png',
    title: [
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList1_title',
    ],
    date: '2020.11.27',
    content: [
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList1_content_1',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList1_content_2',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList1_content_3',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList1_content_4',
    ],
  },
  {
    newSource: '',
    principles: '',
    datumSource: '',
    viewCount: '',
    id: 2,
    img: 'https://static.cmereye.com/imgs/2023/05/1156cbf4a6ece4d6.png',
    title: [
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList1_title',
    ],
    date: '2020.11.22',
    content: [
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList1_content_1',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList1_content_2',
    ],
  },
  {
    newSource: '',
    principles: '',
    datumSource: '',
    viewCount: '',
    id: 3,
    img: 'https://static.cmereye.com/imgs/2023/05/91e2405635ca3e7b.png',
    title: [
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList3_title',
    ],
    date: '2020.09.18',
    content: [
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList3_content_1',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList3_content_2',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList3_content_3',
    ],
  },
  {
    newSource: '',
    principles: '',
    datumSource: '',
    viewCount: '',
    id: 4,
    img: 'https://static.cmereye.com/imgs/2023/05/875d23d64608ef4e.png',
    title: [
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList4_title1',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList4_title2',
    ],
    date: '2020.09.16',
    content: [
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList4_content_1',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList4_content_2',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList4_content_3',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList4_content_4',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList4_content_5',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList4_content_6',
    ],
  },
  {
    newSource: '',
    principles: '',
    datumSource: '',
    viewCount: '',
    id: 5,
    img: 'https://static.cmereye.com/imgs/2023/05/a4d26289335be5c0.jpg',
    title: [
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList5_title',
    ],
    date: '2020.09.13',
    content: [
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList5_content_1',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList5_content_2',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList5_content_3',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList5_content_4',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList5_content_5',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList5_content_6',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList5_content_7',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList5_content_8',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList5_content_9',
    ],
  },
  {
    newSource: '',
    principles: '',
    datumSource: '',
    viewCount: '',
    id: 6,
    img: 'https://static.cmereye.com/imgs/2023/05/9276ab02f3abc115.jpg',
    title: [
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList6_title',
    ],
    date: '2020.06.28',
    content: [
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList6_content_1',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList6_content_2',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList6_content_3',
    ],
  },
  {
    newSource: '',
    principles: '',
    datumSource: '',
    viewCount: '',
    id: 7,
    img: 'https://static.cmereye.com/imgs/2023/05/88621485630632e9.png',
    title: [
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList7_title',
    ],
    date: '2020.05.29',
    content: [
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList7_content_1',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList7_content_2',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList7_content_3',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList7_content_4',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList7_content_5',
    ],
  },
  {
    newSource: '',
    principles: '',
    datumSource: '',
    viewCount: '',
    id: 8,
    img: 'https://static.cmereye.com/imgs/2023/05/1720c9a3331071b2.png',
    title: [
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList8_title',
    ],
    date: '2020.05.24',
    content: [
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList8_content_1',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList8_content_2',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList8_content_3',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList8_content_4',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList8_content_5',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList8_content_6',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList8_content_7',
      'pages.ophthalmic_information.ophthalmic_press_text.press_newList.newList8_content_8',
    ],
  },
]
const isNewLIst = ref(true)
const isDetail = ref(false)
const detail = ref({
  id: '',
  title: '',
  img: '',
  date: '',
  content: '',
  ext_paperRecoFrom: '',
  visits: '',
})
const newId = ref(0)
const newDeatil = (id: number) => {
  newId.value = id
  detail.value = pressLists.value[id]
  isNewLIst.value = false
  isDetail.value = true
}
const showNewList = () => {
  isNewLIst.value = true
  isDetail.value = false
  toTop()
}
const pageTurning = (flag: string) => {
  if (flag === 'up') {
    if (newId.value === 0) {
      ElMessage.error('當前是本页第一條！')
    } else {
      newId.value--
      detail.value = pressLists.value[newId.value]
      toTop()
    }
  } else if (newId.value + 1 >= newList.length) {
    ElMessage.error('當前是本页最後一條！')
  } else {
    newId.value++
    detail.value = pressLists.value[newId.value]
    toTop()
  }
}
let pressLists: any = ref([])
let totalPageNum = ref(0)
let actPageNum = ref(1)
let errorPage = ref(false)
const getPressContent = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  try {
    const { data }: any = await useFetch(
      `https://hkcmereye.com/api.php/list/4/page/${actPageNum.value}/num/8/order/date`
    )
    let res = JSON.parse(data.value)
    totalPageNum.value = Math.ceil(res.rowtotal / 8)
    pressLists.value = res.data.map((item: any) => {
      let date = new Date(item.date)
      let y = date.getFullYear()
      let MM: any = date.getMonth() + 1
      MM = MM < 10 ? '0' + MM : MM
      let d = date.getDate()
      return {
        id: item.id,
        img: `https://hkcmereye.com${item.ico}`,
        content: item.content,
        ext_paperRecoFrom: item.source,
        visits: item.visits,
        title: item.title,
        date: y + '-' + MM + '-' + d,
      }
    })
  } catch {
    errorPage.value = true
  }
  toTop()
  loading.close()
}

const subNum = () => {
  if (actPageNum.value > 1) {
    actPageNum.value--
    sessionStorage.setItem('pressPage', JSON.stringify(actPageNum.value))
    getPressContent()
  }
}

const addNum = () => {
  if (actPageNum.value < totalPageNum.value) {
    actPageNum.value++
    sessionStorage.setItem('pressPage', JSON.stringify(actPageNum.value))
    getPressContent()
  }
}

const toTop = () => {
  let topHeight: number =
    document.getElementById('pressContent')?.offsetTop || 0
  document.body.scrollTop =
    document.documentElement.scrollTop =
    topHeight -=
      100
}

const to_ext_paperRecoFrom = () => {
  location.href = detail.value.ext_paperRecoFrom
}

onMounted(() => {
  setTimeout(() => {
    actPageNum.value = Number(sessionStorage.getItem('pressPage')) || 1
    getPressContent()
  }, 0)
})
</script>

<template>
  <div class="current">
    <div class="press">
      <div>
        <div>
          <img
            data-cfsrc="https://static.cmereye.com/imgs/2023/06/ea78401c4ac3d988.png"
            srcset="
              https://static.cmereye.com/imgs/2023/07/f668cb9e24a8fd3e.jpg 768w,
              https://static.cmereye.com/imgs/2023/06/ea78401c4ac3d988.png
            "
            alt="新聞資訊"
            src="https://static.cmereye.com/imgs/2023/06/ea78401c4ac3d988.png"
          />
          <svg
            width="9"
            height="144"
            viewBox="0 0 9 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-v-1d8b93bf=""
            data-v-a125a221=""
            data-v-4b343dd3=""
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
            ></path>
          </svg>
        </div>
        <div>
          <div>
            {{
              $t(
                'pages.ophthalmic_information.ophthalmic_press_text.press_text1'
              )
            }}
          </div>
          <div>
            <div>NEWS</div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/e3060c56238575c3.png"
              />
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/90e21d8b0b56ea96.png"
              />
            </div>
          </div>
          <div>
            <div>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_press_text.press_text2'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_press_text.press_text3'
                )
              }}
            </div>
          </div>
        </div>
      </div>
      <div id="pressContent" v-if="!errorPage">
        <div
          v-for="(item, index) in pressLists"
          v-show="isNewLIst"
          :key="index"
          @click="newDeatil(index)"
        >
          <div><img :src="item.img" /></div>
          <div>{{ item.date }}</div>
          <div>
            <p>{{ item.title }}</p>
          </div>
          <div>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 16H16V0" stroke="#2958A3" stroke-width="2" />
            </svg>
          </div>
        </div>
      </div>
      <div id="pressContent" v-else>服務異常</div>
    </div>
    <div v-if="isDetail" class="content_press">
      <div>
        <div>
          <div>{{ detail.title }}</div>
        </div>
        <div></div>
        <div>
          <div v-html="detail.content"></div>
          <div>
            <div></div>
            <div></div>
            <div @click="to_ext_paperRecoFrom()">
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_press_text.press_span3'
                )
              }}<span>{{ '原文鏈接' }}</span>
            </div>
            <div>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_press_text.press_span4'
                )
              }}<span>{{ detail.visits }}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div @click="showNewList">
          {{
            $t('pages.ophthalmic_information.ophthalmic_press_text.press_text4')
          }}
        </div>
        <div>
          <div @click="pageTurning('up')">
            {{
              $t(
                'pages.ophthalmic_information.ophthalmic_press_text.press_text5_1'
              )
            }}
          </div>
          <div @click="pageTurning('down')">
            {{
              $t(
                'pages.ophthalmic_information.ophthalmic_press_text.press_text5_2'
              )
            }}
          </div>
        </div>
      </div>
    </div>
    <!-- 预计分页 -->
    <div class="paging" v-show="isNewLIst">
      <div @click="subNum">
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.15198 13.3037L0.999984 7.15172L7.15198 0.999723"
            stroke="#2958A3"
            stroke-width="1.75771"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div>{{ actPageNum }}/{{ totalPageNum }}</div>
      <div @click="addNum">
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7.15199 7.15199L1 13.304"
            stroke="#2958A3"
            stroke-width="1.75771"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div>
      <yahooPageInformation />
    </div>
    <div class="footerMenuPom">
      <yahooPageFooterMenu />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.current {
  margin-bottom: 50px;
}
.press {
  position: relative;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 731px;
    margin-top: 80px;
    position: relative;
    &::before {
      content: '';
      background: #f1f1f1;
      position: absolute;
      top: 0;
      left: 0;
      width: calc((100vw - 1493px) / 2 + 1460px);
      height: 750px;
    }
    & > div:nth-child(1) {
      position: relative;
      margin: 122px auto 0;
      bottom: -2vw;
      width: 100%;
      max-width: 1490px;
      &::before {
        content: '';
        background: rgba($color: #000000, $alpha: 0.2);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 6;
      }
      & > img {
        width: 100%;
        position: relative;
        z-index: 5;
      }
      & > svg {
        position: absolute;
        left: 50%;
        bottom: -100px;
        z-index: 7;
      }
    }
    & > div:nth-child(2) {
      text-align: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      z-index: 7;
      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 40.1431px;
        line-height: 46px;
        text-align: center;
        letter-spacing: 0.2em;
        color: #ffffff;
        margin-bottom: 12px;
      }
      & > div:nth-child(2) {
        margin-bottom: 41px;
        & > div:nth-child(1) {
          font-family: 'Metropolis';
          font-style: normal;
          font-weight: 700;
          font-size: 57.4776px;
          line-height: 56px;
          text-align: center;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #ffffff;
        }
      }
      & > div:nth-child(3) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 700;
        font-size: 23.7037px;
        line-height: 47px;
        text-align: right;
        letter-spacing: 0.3em;
        color: #ffffff;
        & > div:nth-child(2) {
          font-weight: 400;
          font-size: 15.8025px;
          line-height: 24px;
          text-align: center;
          letter-spacing: 0.45em;
        }
      }
    }
  }

  & > div:nth-child(2) {
    width: 100%;
    max-width: 927px;
    margin: 290px auto 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > div {
      cursor: pointer;
      width: 400px;
      height: 420px;
      background: #f2f2f2;
      margin-bottom: 120px;
      position: relative;
      & > div:nth-child(1) {
        margin: 33px 31px 0;
        height: 240px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        overflow: hidden;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }

      & > div:nth-child(2) {
        margin-top: 10px;
        width: 141px;
        height: 38px;
        background: #ffffff;
        line-height: 43px;
        font-family: 'Metropolis';
        font-style: normal;
        font-weight: 500;
        font-size: 17.7815px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #8ad8dd;
        display: flex;
        justify-content: center;
      }

      & > div:nth-child(3) {
        margin: 0 31px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 34px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #515151;
        white-space: pre-wrap;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }

      & > div:nth-child(4) {
        position: absolute;
        bottom: 20px;
        right: 20px;
      }
    }
  }
}
.paging {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #2958a3;
  width: 100%;
  max-width: 927px;
  margin: 0 auto 256px;
  & > div:nth-child(2) {
    margin: 0 33px;
    font-family: 'Metropolis';
    font-style: normal;
    font-weight: 500;
    font-size: 18.6441px;
    letter-spacing: 0.5em;
  }

  & > div:nth-child(1),
  & > div:nth-child(3) {
    cursor: pointer;
  }
}
.content_press {
  position: relative;
  margin: 0 26.0412%;
  margin-bottom: 122px;

  & > div:nth-child(1) {
    & > div:nth-child(1) {
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 400;
      font-size: 64px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #515151;
      margin-bottom: 57px;
      position: relative;
    }

    & > div:nth-child(1)::after {
      content: '';
      border-bottom: 3px solid #515151;
      display: inline-block;
      width: 486px;
      position: absolute;
      bottom: 0;
      left: 0;
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      .height_after {
        width: 780px;
        margin-top: 24px;
        position: static;

        & > img {
          position: relative;
          z-index: 5;
          width: 100%;
        }
      }

      .height_after::after {
        content: '';
        width: 813px;
        height: var(--heightPress);
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        background: #f2f2f2;
      }

      & > div:nth-child(2) {
        position: static;
        font-family: 'Metropolis';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 36px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #8ad8dd;
        display: flex;
        width: 100%;
        justify-content: flex-end;
        padding-right: 10%;
      }
    }

    & > div:nth-child(3) {
      margin-bottom: 80px;
      & > div:nth-child(1) {
        margin-bottom: 120px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 34px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #515151;
        & > p {
          margin-bottom: 35px;
        }
      }
      & > div:nth-child(2) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 34px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #515151;
        & > div:nth-child(3) {
          cursor: pointer;
        }
      }
    }
  }

  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    & > div:nth-child(1) {
      width: fit-content;
      padding: 15px 25px;
      background: #8ad8dd;

      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      text-align: center;
      letter-spacing: 0.1em;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      & > div {
        cursor: pointer;
        margin: 0 60px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .press {
    & > div:nth-child(1) {
      margin-top: 78px;
      height: auto;

      &::before {
        width: calc(100% - 50px);
        height: 300px;
        left: 50px;
      }

      & > div:nth-child(1) {
        margin: 0 auto;
        bottom: 0;

        &::before {
          display: none;
        }

        & > svg {
          transform: scale(0.5);
          bottom: -90px;
        }
      }

      & > div:nth-child(2) {
        bottom: 20px;

        & > div:nth-child(1) {
          font-size: 28px;
          line-height: 120%;
          margin-bottom: 5px;
        }

        & > div:nth-child(2) {
          margin-bottom: 18px;

          & > div:nth-child(1) {
            font-size: 30px;
            line-height: 100%;
          }

          div {
            img {
              width: 110px;
              margin: 0 auto;
            }
          }
        }

        & > div:nth-child(3) {
          font-size: 16px;
          line-height: 160%;
          text-align: center;

          & > div:nth-child(2) {
            font-size: 12px;
            line-height: 120%;
          }
        }
      }
    }

    & > div:nth-child(2) {
      margin: 120px auto 0;
      width: calc(100% - 60px);

      & > div {
        margin-bottom: 60px;
        width: 100%;
        height: auto;
        padding-bottom: 20px;

        & > div:nth-child(1) {
          margin: 20px;
          height: auto;
          min-height: 180px;
        }

        & > div:nth-child(2) {
          margin-top: 0;
        }

        & > div:nth-child(3) {
          font-size: 18px;
          width: calc(100% - 40px);
          margin: 10px auto;
        }
      }
    }
  }

  .content_press {
    margin: 0;
    margin-top: 0;
    margin-bottom: 30px;
    padding: 0 25px;

    & > div:nth-child(1) {
      & > div:nth-child(1) {
        font-size: 24px;
        margin-bottom: 30px;
        display: inline-block;
        padding-bottom: 5px;
      }

      & > div:nth-child(1)::after {
        content: '';
        border-bottom: 3px solid #515151;
        display: inline-block;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
      }

      & > div:nth-child(2) {
        width: 90%;

        & > div:nth-child(1) {
          width: 100%;
          height: auto;
          margin: auto;

          & > img {
            position: relative;
            z-index: 5;
            width: 100%;
            margin: auto;
            right: -30px;
            top: 30px;
          }
        }

        & > div:nth-child(2) {
          margin-top: 20px;
          font-size: 20px;
          line-height: 36px;
        }

        & > div:nth-child(1)::after {
          content: '';
          width: 100%;
          height: 200px;
        }
      }

      & > div:nth-child(3) {
        & > div:nth-child(1) {
          margin-bottom: 72px;
          font-size: 16px;
          line-height: 1.8;
          text-align: justify;
        }
        & > div:nth-child(2) {
          display: none;
          font-size: 16px;
          line-height: 1.8;
        }
      }
    }

    & > div:nth-child(2) {
      & > div:nth-child(1) {
        width: fit-content;
        height: auto;
        padding: 5px 10px;
        font-size: 12px;
        line-height: 1.6;
      }

      & > div:nth-child(2) {
        & > div {
          margin: 0 15px;
        }
      }
    }
  }
  .paging {
    justify-content: center;
  }
}
</style>

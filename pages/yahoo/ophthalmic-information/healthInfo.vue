<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '健康資訊｜眼科資訊 | 香港希瑪眼科中心',
  meta: [
    {
      name: 'description',
      content:
        '希瑪眼科中心有提供眼科健康資訊，講解不同的眼科知識，內容主要分為不同的系列﹕視在希瑪、希瑪小知識、護眼食物字典、放眼逐格睇、關您眼事。眼科資訊文章會提及與不同眼疾內容相關的護眼知識，眼科資訊文章提及多種眼疾知識，包括﹕白內障、青光眼、乾眼症、飛蚊症、結膜炎、黃斑病變、兒童斜視及弱視、眼表疾病、眼角膜疾病、視網膜脫落、眼眶、眼整形、眼腫瘤。',
    },
    {
      name: 'keywords',
      content:
        '希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 眼科專科診所 眼科專科中心 香港希瑪眼科 香港希瑪 希瑪 眼科知識 眼科資訊 眼科保健 香港眼科 眼科醫生 眼科診所 眼疾 老人眼疾 眼睛疾病 眼科專科中心 眼科檢查 白內障 青光眼 乾眼症 飛蚊症 結膜炎 黃斑病變 兒童斜視及弱視 眼表疾病 眼角膜疾病 視網膜脫落 眼眶 眼整形 眼腫瘤 希瑪醫療集團 希瑪醫療 眼科服務',
    },
  ],
}))
const toLinkPage = (_data: any) => {
  window.location.href = `/ophthalmic-information/detail?id=${_data.id}`
}
let healthList = ref([
  {
    id: '',
    img: '',
    title: '',
    text: [],
    link: '',
    date: '',
  },
])
let totalPageNum = ref(0)
let actPageNum = ref(1)
let errorPage = ref(false)
const getMainContent = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  try {
    const { data }: any = await useFetch(
      `https://hkcmereye.com/api.php/list/194/page/${actPageNum.value}/num/4`
    )
    let res = JSON.parse(data.value)
    totalPageNum.value = Math.ceil(res.rowtotal / 4)
    healthList.value = res.data.map((item: any) => {
      let date = new Date(item.date)
      let y = date.getFullYear()
      let MM: any = date.getMonth() + 1
      MM = MM < 10 ? '0' + MM : MM
      let d = date.getDate()
      return {
        id: item.id,
        img: `https://hkcmereye.com${item.ico}`,
        title: item.title,
        text: [item.description],
        link: `/ophthalmic-information/detail?id=${item.id}`,
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
    sessionStorage.setItem('healthInfoPage', JSON.stringify(actPageNum.value))
    getMainContent()
  }
}

const addNum = () => {
  if (actPageNum.value < totalPageNum.value) {
    actPageNum.value++
    sessionStorage.setItem('healthInfoPage', JSON.stringify(actPageNum.value))
    getMainContent()
  }
}

const toTop = () => {
  let topHeight: number =
    document.getElementById('healthInfoContent')?.offsetTop || 0
  document.body.scrollTop =
    document.documentElement.scrollTop =
    topHeight -=
      100
}

onMounted(() => {
  setTimeout(() => {
    actPageNum.value = Number(sessionStorage.getItem('healthInfoPage')) || 1
    getMainContent()
  }, 0)
})
</script>

<template>
  <div>
    <div class="healthInfo">
      <div>
        <img
          data-cfsrc="https://static.cmereye.com/imgs/2023/08/cfbef34814bd88ba.jpg"
          srcset="
            https://static.cmereye.com/imgs/2023/07/bcfa01146d3bc4d6.jpg 768w,
            https://static.cmereye.com/imgs/2023/08/cfbef34814bd88ba.jpg
          "
          alt="健康資訊"
          src="https://static.cmereye.com/imgs/2023/08/cfbef34814bd88ba.jpg"
        />
      </div>
      <div>
        <div>
          {{
            $t(
              'pages.ophthalmic_information.ophthalmic_message_text.message_text1'
            )
          }}
        </div>
        <div>Health topics</div>
        <div>Health topics</div>
        <div>Health topics</div>
      </div>
      <div>
        <img
          data-cfsrc="https://static.cmereye.com/imgs/2023/08/480cb8eb9e698ab2.png"
          srcset="
            https://static.cmereye.com/imgs/2023/08/03053fe9edf3c7ad.png 768w,
            https://static.cmereye.com/imgs/2023/08/480cb8eb9e698ab2.png
          "
          src="https://static.cmereye.com/imgs/2023/08/480cb8eb9e698ab2.png"
          alt=""
        />
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="173"
          viewBox="0 0 11 173"
          fill="none"
        >
          <path
            d="M1 1V172L9.5 159"
            stroke="#1B407A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div>
        <div>
          {{
            $t(
              'pages.ophthalmic_information.ophthalmic_message_text.message_text2'
            )
          }}
        </div>
        <div>
          {{
            $t(
              'pages.ophthalmic_information.ophthalmic_message_text.message_text3'
            )
          }}
        </div>
      </div>
    </div>
    <div class="content_health" id="healthInfoContent" v-if="!errorPage">
      <div
        v-for="(item, index) in healthList"
        :key="index"
        @click="toLinkPage(item)"
      >
        <div>
          <img :src="item.img" :alt="item.title" />
          <div>{{ item.date }}</div>
        </div>
        <div>
          <div>{{ $t(item.title) }}</div>
          <div>
            <div v-for="(ele, i) in item.text" :key="i">{{ $t(ele) }}</div>
          </div>
          <div>
            {{
              $t(
                'pages.ophthalmic_information.ophthalmic_message_text.message_text4'
              )
            }}
          </div>
        </div>
      </div>
    </div>
    <div class="content_health" id="healthInfoContent" v-else>服務異常</div>
    <!-- 预计分页 -->
    <div class="paging">
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
.footerMenuPom {
  margin-bottom: 50px;
}
.healthInfo {
  width: 100vw;
  position: relative;
  &::before {
    content: '';
    background: #f1f1f1;
    position: absolute;
    top: 100px;
    left: 0;
    height: 700%;
    max-height: 550px;
    width: calc(100% - (100% - 1200px) / 2 - 25px);
  }
  & > div:nth-child(1) {
    width: 100%;
    padding: 170px 0 0;
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  & > div:nth-child(2) {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    & > div:nth-of-type(1) {
      color: #fff;
      text-align: center;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-size: 40.1px;
      font-style: normal;
      font-weight: 400;
      line-height: 46.286px;
      letter-spacing: 8.02px;
      margin-bottom: 10px;
    }
    & > div:nth-of-type(n + 2) {
      color: #fff;
      text-align: center;
      font-family: Metropolis;
      font-size: 40.032px;
      font-style: normal;
      font-weight: 700;
      line-height: 50.285px;
      letter-spacing: 0.801px;
      text-transform: uppercase;
    }
    & > div:nth-of-type(3) {
      opacity: 0.6;
      clip-path: polygon(0 20%, 100% 20%, 100% 100%, 0 100%);
      transform: translateY(-20%);
    }
    & > div:nth-of-type(4) {
      opacity: 0.6;
      clip-path: polygon(0 45%, 100% 45%, 100% 100%, 0 100%);
      transform: translateY(-65%);
    }
  }
  & > div:nth-child(3) {
    position: absolute;
    right: calc((100% - 1200px) / 2 + 25px);
    bottom: 40px;
    img {
      width: 100%;
    }
  }
  & > div:nth-child(4) {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 80%);
  }
  & > div:nth-child(5) {
    display: none;
  }
}

.content_health {
  margin-top: 203px;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > div {
    cursor: pointer;
    width: 1120px;
    background: #f2f2f2;
    margin-bottom: 61px;

    display: flex;
    align-items: center;
    padding: 38px 33px 38px 52px;
    position: relative;
    & > div:nth-child(1) {
      width: 321px;
      min-height: 321px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 40px;
      position: relative;

      & > div {
        position: absolute;
        bottom: -21px;
        left: -36px;
        font-family: 'Metropolis';
        font-style: normal;
        font-weight: 500;
        font-size: 17.7815px;
        line-height: 2.4;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;

        color: #8ad8dd;
        width: 141px;
        height: 38px;
        background: #ffffff;
      }
    }

    & > div:nth-child(2) {
      width: 650px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 28.61px;
        line-height: 44px;
        letter-spacing: 0;
        color: #515151;
        position: relative;
        padding-bottom: 20px;
      }

      & > div:nth-child(1)::after {
        content: '';
        border-bottom: solid #8ad8dd;
        width: 312px;
        height: 1.75771px;
        display: inline-block;
        position: absolute;
        left: 0;
        bottom: 0;
      }

      & > div:nth-child(2) {
        margin-top: 31px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 350;
        font-size: 13.1828px;
        line-height: 26px;
        letter-spacing: 0.1em;
        text-indent: 30px;
        text-transform: uppercase;

        color: #232323;

        & > div:nth-child(2) {
          text-indent: 0;
        }
      }

      & > div:nth-child(3) {
        position: absolute;
        bottom: 38px;
        right: 38px;
        width: 95px;
        height: 37.27px;
        background: #8ad8dd;

        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.1em;
        color: #ffffff;
        cursor: pointer;
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
  max-width: 1080px;
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
@media screen and (max-width: 768px) {
  .healthInfo {
    &::before {
      height: 280px;
      top: 100px;
      left: 30px;
      width: calc(100% - 30px);
    }
    & > div:nth-child(1) {
      width: 70%;
      padding: 70px 0 0;
      margin-left: 30%;
      img {
        width: 100%;
      }
    }

    & > div:nth-child(2) {
      margin-left: 10px;
      & > div:nth-of-type(1) {
        font-size: 24px;
        line-height: normal;
        margin-bottom: 0;
      }
      & > div:nth-of-type(n + 2) {
        font-size: 20px;
        line-height: normal;
        letter-spacing: 0;
      }
    }
    & > div:nth-child(3) {
      left: 40px;
      bottom: 10px;
      right: 0;
      img {
        width: max-content;
        transform: scale(1.5);
      }
    }
    & > div:nth-child(4) {
      transform: translate(-50%, 60%) scale(0.5);
    }
    & > div:nth-child(5) {
      position: absolute;
      display: block;
      width: 50%;
      text-align: center;
      left: 0;
      bottom: -100px;
      & > div {
        &:nth-of-type(1) {
          color: #2958a3;
          font-size: 22px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
        &:nth-of-type(2) {
          color: #8ad8dd;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
      }
    }
  }
  .content_health {
    margin-top: 150px;
    & > div {
      width: calc(100% - 60px);
      padding: 25px 20px 57px;
      flex-direction: column-reverse;
      & > div:nth-child(1) {
        width: 100%;
        margin-right: 0;
        min-height: 200px;
        margin-top: 28px;
        & > div {
          bottom: -15px;
          left: -10px;
          font-size: 14px;
          height: auto;
          line-height: 2;
          width: 100px;
          letter-spacing: 0.03em;
        }
        img {
          width: 75%;
          margin: 0 auto;
        }
      }
      & > div:nth-child(2) {
        width: 100%;
        & > div:nth-child(1) {
          font-size: 18px;
          line-height: 1.6;
          padding-bottom: 10px;
        }
        & > div:nth-child(1)::after {
          width: 140px;
          height: 1.5px;
          border: none;
          background: #8ad8dd;
        }
        & > div:nth-child(2) {
          margin-top: 26px;
        }
        & > div:nth-child(3) {
          position: initial;
          margin: 25px auto 0;
        }
      }
    }
  }
  .paging {
    justify-content: center;
  }
}
@media screen and (min-width: 1920px) {
  .healthInfo {
    margin: auto;
  }
}
</style>

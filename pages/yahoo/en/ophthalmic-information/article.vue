<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '文章推薦｜文章推薦 | 香港希瑪眼科中心',
  meta: [
    {
      name: 'description',
      content:
        '希瑪眼科中心有提供不同的眼疾文章推薦，講解各種重要的眼疾問題，和眼疾治療方法，文章推薦的內容主要提及眼疾的資訊、眼科知識，由不同的希瑪眼科醫生撰寫的文章。希瑪眼科醫生擁有豐富的眼科知識和經驗，能夠針對各種眼疾提供專業的治療建議和保健建議。這些文章涵蓋了眼疾的各個方面，通過詳細的解說和豐富的圖片，向讀者介紹各種常見的眼疾，包括症狀、成因、診斷和治療方法等。此外，這些文章還提供了一些實用的保健建議，讓讀者可以更好地保護眼睛健康。',
    },
    {
      name: 'keywords',
      content:
        '希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 眼科專科診所 眼科專科中心 香港希瑪眼科 香港希瑪 希瑪 希瑪眼科治療 希瑪眼科收費 希瑪眼科治療 全面眼睛檢查 希瑪眼科香港 希瑪林順潮眼科中心 林順潮眼科中心 林順潮眼科診所 眼科希瑪 眼睛疾病 眼疾 眼疾症狀 常見眼疾 兒童眼疾 老人眼疾 眼科知識 眼科醫生 兒童眼科 香港眼科 眼科醫院 眼科醫生 眼科診所 眼科資訊 眼科知識 眼疾 眼睛健康 眼科疾病  希瑪醫療集團 希瑪醫療 眼科保健 眼科健康 眼睛保健 眼科服務',
    },
  ],
}))
const toLinkPage = (_data: any) => {
  window.location.href = `/ophthalmic-information/detail?id=${_data.id}`
}
const articleList = ref([
  {
    img: '',
    title: [],
    date: '',
    source: '',
    doctor:'',
  },
])
const getArticleList = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  const { data }:any = await useFetch(`https://hkcmereye.com/api.php/list/204`)
  let res = JSON.parse(data.value)
  articleList.value = res.data.map((item:any) => {
    let date = new Date(item.date);
    let y = date.getFullYear();
    let MM:any = date.getMonth() + 1;
    MM = MM < 10 ? ('0' + MM) : MM;
    let d = date.getDate();
    return {
      id: item.id,
      img: `https://hkcmereye.com${item.ico}`,
      title: [item.title],
      date: y+'-'+MM+'-'+d,
      source: item.ext_paperRecoFrom,
      doctor: item.ext_paperRecoDoctor,
    }
  })
  loading.close()
}

onMounted(()=>{
  setTimeout(()=>{
    getArticleList()
  },0)
})

</script>

<template>
  <div class="article_Out">
    <div class="article">
      <div>
        <div>
           <img data-cfsrc="https://static.cmereye.com/imgs/2023/06/bdd920a086aa2e64.png" 
          srcset="https://static.cmereye.com/imgs/2023/07/a161f8aa946ba13a.jpg 768w, https://static.cmereye.com/imgs/2023/06/bdd920a086aa2e64.png"  
          alt="文章推薦" 
          src="https://static.cmereye.com/imgs/2023/06/bdd920a086aa2e64.png"/>
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
            ></path>
          </svg>
        </div>
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_article_text.article_text1'
                )
              }}
            </div>
            <div>
              <div>Article</div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/05/db7171427f66f1fc.png"
                  alt="文章推薦"
                />
              </div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/05/bb1dda2d4801f96b.png"
                  alt="文章推薦"
                />
              </div>
            </div>
          </div>
          <div>
            <p>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_article_text.article_p1'
                )
              }}
            </p>
            <p>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_article_text.article_p2'
                )
              }}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div v-for="(item, index) in articleList" :key="index" @click="toLinkPage(item)">
          <div><img :src="item.img" /></div>
          <div>
            <p v-for="(ele, index) in item.title" :key="index">{{ $t(ele) }}</p>
          </div>
          <div>
            <span>{{ item.date }}</span
            ><span>{{ item.source }}</span
            ><span v-if="$t(item.doctor)">{{ $t(item.doctor) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <EnInformation />
    </div>
    <div class="footerMenuPom">
      <EnFooterMenu />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footerMenuPom{
  margin-bottom: 50px;
}
.article {
  & > div:nth-child(1) {
    margin-top: 122px;
    position: relative;
    padding: 50px 0;
    &::before{
      content: '';
      width: calc((100% - 1490px)/2 + 1400px);
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: #f2f2f2;
    }
    & > div:nth-child(1) {
      width: 100%;
      max-width: 1490px;
      margin: 0 auto;
      position: relative;
      & > img {
        z-index: 5;
        position: relative;
        width: 100%;
      }

      & > svg {
        z-index: 5;
        left: 45%;
        bottom: 0;
        transform: translateY(50%);
        position: absolute;
      }
    }

    & > div:nth-child(2) {
      position: absolute;
      z-index: 5;
      top: 30%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: flex-start;

      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 40.1431px;
        line-height: 46px;
        letter-spacing: 0.2em;
        color: #ffffff;

        & > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 52px;

          & > div:nth-child(1) {
            font-family: 'Metropolis';
            font-style: normal;
            font-weight: 700;
            font-size: 57.4776px;
            line-height: 56px;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #ffffff;
          }
        }
      }

      & > div:nth-child(2) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 47px;
        letter-spacing: 0.3em;
        color: #ffffff;

        & > p:nth-child(2) {
          margin-top: 10px;
          font-weight: 400;
          font-size: 32px;
          line-height: 24px;
          letter-spacing: 0.45em;
        }
      }
    }
  }

  & > div:nth-child(2) {
    width: 100%;
    max-width: 1140px;
    display: flex;
    flex-wrap: wrap;
    margin: 170px auto 300px;

    & > div {
      width: calc(50% - 66px);
      max-height: 500px;
      background: #f2f2f2;
      padding: 35px 0;
      margin: 0 33px 45px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      & > div:nth-child(1) {
        padding: 0 35px;
        img{
          width: 100%;
        }
      }

      & > div:nth-child(2) {
        margin: 10px 0 5px;
        padding-left: 34px;
        white-space: pre-wrap;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 34px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #515151;
      }

      & > div:nth-child(3) {
        height: 38px;
        background: #ffffff;
        text-align: center;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 34px;
        letter-spacing: 0.1em;
        text-transform: uppercase;

        & > span:nth-child(1) {
          font-family: 'Metropolis';
          font-weight: 500;
          font-size: 17.7815px;
          line-height: 36px;
          color: #8ad8dd;
        }

        & > span:nth-child(2) {
          color: #ffa88c;
        }

        & > span:nth-child(3) {
          color: #6e96d8;
        }

        & > span:nth-child(2)::before,
        & > span:nth-child(3)::before {
          content: '|';
          padding: 0 12px;
          color: #515151;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .article {
    > div:nth-child(1) {
    margin-top: 78px;
    padding: 0;
    &::before{
      width: calc( 100% - 50px);
      height: 300px;
      left: 50px;
    }
    & > div:nth-child(1) {
      & > svg {
        left: 49%;
        bottom: -90px;
        transform: scale(.5);
      }
    }
    & > div:nth-child(2) {
      top: auto;
      bottom: 20px;
      & > div:nth-child(1) {
        font-size: 28px;
        line-height: 120%;
        & > div:nth-child(2) {
          margin-bottom: 20px;
          & > div:nth-child(1) {
            font-weight: 600;
            font-size: 30px;
            line-height: 100%;
          }
          &>div{
            img{
              width: 100px;
            }
          }
        }
      }
      & > div:nth-child(2) {
        font-weight: 600;
        font-size: 18px;
        line-height: 160%;
        & > p:nth-child(2) {
          font-size: 14px;
          line-height: 120%;
          margin-top: 0;
        }
      }
    }
  }
  & > div:nth-child(2) {
    width: 100%;
    margin: 100px auto 200px;
    & > div {
      width: 100%;
      padding: 20px 0;
      margin: 0 30px 45px;
      & > div:nth-child(1) {
        padding: 0 20px;
      }
      & > div:nth-child(2) {
        padding: 0 20px;
        font-size: 18px;
        line-height: 1.6;
      }
      & > div:nth-child(3) {
        font-size: 12px;
        height: 34px;
        & > span:nth-child(1) {
          font-size: 12px;
          letter-spacing: 0.03em;
        }
        & > span:nth-child(2)::before,
        & > span:nth-child(3)::before {
          content: '|';
          padding: 0 8px;
          display: inline-block;
          vertical-align: middle;
          color: #515151;
        }
      }
    }
  }
}
}
</style>

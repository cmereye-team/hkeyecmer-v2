<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')

useHead(() => ({
  title: t('pages.medical_team.medical_team_header_title'),
  meta() {
    return [
      {
        hid: 'medicalTeamDesc',
        name: 'description',
        content: t('tdk.medical_team.desc'),
      },
      {
        hid: 'medicalTeamKey',
        name: 'keywords',
        content: t('tdk.medical_team.key'),
      },
    ]
  },
}))

const doctorList: any = ref([
  {
    doctorName: 'pages.medical_team.doctorList.doctor_1.doctor_1_name',
    doctorIntro: 'pages.medical_team.doctorList.doctor_1.doctor_1_intro',
    doctorEnName: 'pages.medical_team.doctorList.doctor_1.doctor_1_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_1',
      'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_2',
      'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_3',
      'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_4',
      'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_5',
      'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_6',
    ],
    doctorImgUrl:
      'https://statichk.cmermedical.com/hkcmereye/doctor/doctor-DennisLam-01.webp',
  },
])

const handleShare = async (doc: any, index: number) => {
  if (!process.client) return

  const docTitle = doc.doctorName || ''
  const docSub = doc.doctorEnName || ''
  const docId = doc.id || index

  // === 核心優化：解析 HTML 標籤並自動加上「、」號分隔 ===
  let pureBioText = ''
  if (doc.doctorEducation) {
    if (typeof doc.doctorEducation === 'string') {
      // 1. 創建臨時節點解析 HTML
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = doc.doctorEducation

      // 2. 獲取所有段落標籤（p標籤），提取文本並用「、」號拼接
      const paragraphs = tempDiv.querySelectorAll('p')
      const eduList: string[] = []

      paragraphs.forEach((p) => {
        const text = p.innerText || p.textContent || ''
        const cleanText = text.trim()
        // 過濾掉空行或包含 <br> 的空標籤
        if (cleanText && cleanText !== '<br>') {
          eduList.push(cleanText)
        }
      })

      // 使用頓號/逗號進行連接
      pureBioText = eduList.join('、')
    }
  }

  // 清洗換行符與多餘空格，並截取前 80 個字元
  pureBioText = pureBioText.replace(/\s+/g, ' ').trim().substring(0, 80) + '...'

  const route = useRoute()
  const shareUrl = `${window.location.origin}${route.path}?docId=${docId}`

  // === 核心優化：調整格式為「希瑪眼科XX醫生 簡介：...」 ===
  const shareData = {
    title: `希瑪眼科${docTitle}醫生 (${docSub})`,
    text: `希瑪眼科${docTitle}醫生 簡介：${pureBioText}`,
    url: shareUrl,
  }

  if (typeof navigator.share === 'function') {
    try {
      await navigator.share(shareData)
    } catch (err) {
      console.warn('用戶取消分享或環境受限:', err)
    }
  } else {
    // 降級方案：自動複製或彈窗提示
    if (
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === 'function'
    ) {
      try {
        await navigator.clipboard.writeText(
          `${shareData.text} ${shareData.url}`
        )
        alert(`已自動複製 ${docTitle} 的名片連結，快去貼上分享給好友吧！`)
      } catch (clipErr) {
        prompt('請複製以下連結分享：', `${shareData.text} ${shareData.url}`)
      }
    } else {
      prompt(
        '請複製以下連結分享醫生名片：',
        `${shareData.text} ${shareData.url}`
      )
    }
  }
}

watch(
  locale,
  (newValue, oldValue) => {
    getData()
  },
  { deep: true }
)
interface DoctorItem {
  doctorId: number | string
  doctorName: string
  doctorIntro?: string
  doctorEnName: string
  doctorEducation: string[]
  doctorImgUrl: string
  doctorCard: string
  doctorNameDr: string
}
const NewList = ref<DoctorItem[]>([])
const getData = async () => {
  NewList.value.splice(0)
  if (locale.value === 'zh-hk') {
    const { data }: any = await useFetch(
      `https://hkcmereye.com/api.php/list/12/num/100`
    )
    const res: any = JSON.parse(data.value)
    const list: DoctorItem[] = res.data.map((item: any, index: any) => {
      return {
        doctorId: Number(item.id),
        doctorName: item.title,
        doctorEnName: item.subtitle,
        doctorEducation: item.content,
        doctorImgUrl: item.ico,
        doctorCard: item.ext_doctor_card,
        doctorNameDr: `${item.title}${t('pages.medical_team.doctor')}`,
      }
    })
    list.forEach((item: any) => {
      NewList.value.push(item)
    })
  } else {
    // 英文
    const { data }: any = await useFetch(
      `https://hkcmereye.com/api.php/list/96/num/99/acode/en`
    )
    const res: any = JSON.parse(data.value)

    const list: DoctorItem[] = res.data.map((item: any, index: number) => {
      return {
        doctorId: Number(item.id),
        doctorName: item.title,
        doctorEnName: item.subtitle,
        doctorEducation: item.content,
        doctorImgUrl: item.ico,
        doctorCard: item.ext_doctor_card,
        doctorNameDr: `${item.title}${t('pages.medical_team.doctor')}`,
      }
    })

    list.forEach((item: any) => {
      NewList.value.push(item)
    })
  }
  // console.log(`length=${NewList.value.length},list=`, NewList.value)
}

onMounted(() => {
  const route = useRoute()
  const sharedDocId = route.query.docId
  setTimeout(() => {
    getData()
  }, 0)

  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
  if (sharedDocId) {
    // 对应模板绑定的 :id="`doc-${doc.id || index}`"
    const targetDoctor = document.getElementById(`doc-${sharedDocId}`)
    if (targetDoctor) {
      setTimeout(() => {
        targetDoctor.scrollIntoView({ behavior: 'smooth', block: 'center' })
        // WindiCSS 动态高亮
        targetDoctor.classList.add(
          'ring-2',
          'ring-[#8AD8DD]',
          'transition-all',
          'duration-300'
        )
        setTimeout(() => {
          targetDoctor.classList.remove('ring-2', 'ring-[#8AD8DD]')
        }, 3000)
      }, 400)
    }
  }
})

const windowWidth = ref(390)
const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
</script>
<template>
  <div id="medical-team" class="medical-team">
    <div>
      <div class="title">{{ $t('pages.medical_team.medical_team_title') }}</div>
      <div></div>
    </div>
    <div class="mainCon">
      <ul v-if="windowWidth > 768">
        <li class="docList">
          <div class="docDes" :class="{ 'docDes-en': locale === 'en' }">
            <div :class="['docName', { 'docName-en': locale === 'en' }]">
              {{ $t(doctorList[0].doctorName) }}
            </div>
            <div v-if="doctorList[0].doctorIntro" class="doctorIntro">
              {{ $t(doctorList[0].doctorIntro) }}
            </div>
            <div class="docEducation">
              <div class="edutitle" :class="{ 'edutitle-en': locale === 'en' }">
                {{ $t('pages.medical_team.doctor_edu') }}
              </div>
              <div>
                <div v-for="(ele, i) in doctorList[0].doctorEducation" :key="i">
                  <span>{{ $t(ele) }}</span>
                </div>
              </div>
            </div>
            <div class="button-group">
              <a
                id="medicalTeamLink"
                class="button appointment text-white inline-block"
                href="https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&cid=7f3c58ea65c34d9d82c1f6455384212f&lng=big5&sid=cd5457bae7eb4c9db0534553310cb509&p=https%3A//hkcmereye.com/&rf1=&rf2=&msg=&e=hkcmereye.com[youce-goutong]&d=1692676040714"
                :data-doctor="t(doctorList[0].doctorName)"
              >
                <div class="icon">
                  <svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M884.656 211.062C872 198.406 853.72 189.97 835.437 189.97h-52.03c-5.626-25.313-28.126-45-54.844-45h-56.25c-26.72 0-49.22 18.281-54.844 45H417.78c-5.625-25.313-28.125-45-54.844-45h-56.25c-26.718 0-49.218 18.281-54.843 45h-63.281c-18.282 0-36.563 7.031-49.22 21.093-14.062 14.063-21.093 32.344-21.093 50.625v120.938h787.5V261.687c0-18.28-7.031-36.562-21.094-50.625M118.25 452.938v368.437c0 39.375 30.938 70.312 70.313 70.312h646.874c39.376 0 70.313-32.343 70.313-70.312V452.938zm251.719 195.468h112.5V534.5h56.25v113.906h112.5v56.25h-112.5v113.906h-56.25V704.656h-112.5z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <span>{{ $t('pages.medical_team.doctor_order') }}</span>
              </a>
            </div>
          </div>
          <div class="docImg" :class="{ 'docImg-en': locale === 'en' }">
            <div><img :src="doctorList[0].doctorImgUrl" /></div>
            <div class="docEnName">{{ $t(doctorList[0].doctorEnName) }}</div>
          </div>
        </li>
        <li v-for="(doc, index) in NewList" :key="index" class="docList">
          <div class="docDes" :class="{ 'docDes-en': locale === 'en' }">
            <div :class="['docName', { 'docName-en': locale === 'en' }]">
              {{ doc.doctorName }}
            </div>
            <div v-if="doc.doctorIntro" class="doctorIntro">
              {{ doc.doctorIntro }}
            </div>
            <div class="docEducation">
              <div class="edutitle" :class="{ 'edutitle-en': locale === 'en' }">
                {{ $t('pages.medical_team.doctor_edu') }}
              </div>
              <div
                :key="doc.doctorEducation.toString()"
                v-html="doc.doctorEducation"
              ></div>
            </div>
            <div class="button-group">
              <a
                id="medicalTeamLink"
                class="button appointment text-white inline-block"
                href="https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&cid=7f3c58ea65c34d9d82c1f6455384212f&lng=big5&sid=cd5457bae7eb4c9db0534553310cb509&p=https%3A//hkcmereye.com/&rf1=&rf2=&msg=&e=hkcmereye.com[youce-goutong]&d=1692676040714"
                :data-doctor="doc.doctorName"
              >
                <div class="icon">
                  <svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M884.656 211.062C872 198.406 853.72 189.97 835.437 189.97h-52.03c-5.626-25.313-28.126-45-54.844-45h-56.25c-26.72 0-49.22 18.281-54.844 45H417.78c-5.625-25.313-28.125-45-54.844-45h-56.25c-26.718 0-49.218 18.281-54.843 45h-63.281c-18.282 0-36.563 7.031-49.22 21.093-14.062 14.063-21.093 32.344-21.093 50.625v120.938h787.5V261.687c0-18.28-7.031-36.562-21.094-50.625M118.25 452.938v368.437c0 39.375 30.938 70.312 70.313 70.312h646.874c39.376 0 70.313-32.343 70.313-70.312V452.938zm251.719 195.468h112.5V534.5h56.25v113.906h112.5v56.25h-112.5v113.906h-56.25V704.656h-112.5z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <span>{{ $t('pages.medical_team.doctor_order') }}</span>
              </a>
              <button
                @click="handleShare(doc, Number(index))"
                class="button share"
                :data-doctor="doc.doctorName"
              >
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      fill="currentColor"
                      d="M10.25 3a.75.75 0 0 1 0 1.5h-3.5A2.25 2.25 0 0 0 4.5 6.75v10.5l.012.23A2.25 2.25 0 0 0 6.75 19.5h10.5a2.25 2.25 0 0 0 2.25-2.25v-2a.75.75 0 0 1 1.5 0v2A3.75 3.75 0 0 1 17.25 21H6.75a3.75 3.75 0 0 1-3.745-3.557L3 17.25V6.75A3.75 3.75 0 0 1 6.75 3zm4.687-.932a.75.75 0 0 1 .801.113l7 6a.75.75 0 0 1 .032 1.109l-7 6.75a.75.75 0 0 1-1.27-.54v-2.976c-1.014.064-1.97.273-2.94.769c-1.136.581-2.344 1.581-3.689 3.303l-.271.354a.75.75 0 0 1-1.35-.45c0-2.857.687-5.59 2.168-7.628c1.376-1.893 3.41-3.147 6.082-3.344V2.75l.008-.109a.75.75 0 0 1 .429-.573"
                    ></path>
                  </svg>
                </div>
                <span>{{ $t('pages.medical_team.share.button') }}</span>
              </button>
            </div>
          </div>
          <div class="docImg" :class="{ 'docImg-en': locale === 'en' }">
            <div>
              <img
                :src="
                  doc.doctorImgUrl.includes('https')
                    ? doc.doctorImgUrl
                    : 'https://hkcmereye.com' + doc.doctorImgUrl
                "
                :alt="`希瑪眼科中心_眼科醫生_${doc.doctorName}眼科醫生`"
                :title="`希瑪眼科中心_眼科醫生_${doc.doctorName}眼科醫生`"
              />
            </div>
            <div class="docEnName">{{ doc.doctorEnName }}</div>
          </div>
        </li>
      </ul>
      <div v-else>
        <ul>
          <li class="docList relative">
            <div class="docDes" :class="{ 'docDes-en': locale === 'en' }">
              <div :class="['docName', { 'docName-en': locale === 'en' }]">
                {{ $t(doctorList[0].doctorName) }}
              </div>
              <div v-if="doctorList[0].doctorIntro" class="doctorIntro">
                {{ $t(doctorList[0].doctorIntro) }}
              </div>
              <div class="docEducation">
                <div
                  class="edutitle"
                  :class="{ 'edutitle-en': locale === 'en' }"
                >
                  {{ $t('pages.medical_team.doctor_edu') }}
                </div>
                <div>
                  <div
                    v-for="(ele, i) in doctorList[0].doctorEducation"
                    :key="i"
                  >
                    <span>{{ $t(ele) }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="button-group absolute -bottom-[120px]">
              <a
                id="medicalTeamLink"
                class="button appointment text-white inline-block"
                href="https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&cid=7f3c58ea65c34d9d82c1f6455384212f&lng=big5&sid=cd5457bae7eb4c9db0534553310cb509&p=https%3A//hkcmereye.com/&rf1=&rf2=&msg=&e=hkcmereye.com[youce-goutong]&d=1692676040714"
                :data-doctor="t(doctorList[0].doctorName)"
              >
                <div class="icon">
                  <svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M884.656 211.062C872 198.406 853.72 189.97 835.437 189.97h-52.03c-5.626-25.313-28.126-45-54.844-45h-56.25c-26.72 0-49.22 18.281-54.844 45H417.78c-5.625-25.313-28.125-45-54.844-45h-56.25c-26.718 0-49.218 18.281-54.843 45h-63.281c-18.282 0-36.563 7.031-49.22 21.093-14.062 14.063-21.093 32.344-21.093 50.625v120.938h787.5V261.687c0-18.28-7.031-36.562-21.094-50.625M118.25 452.938v368.437c0 39.375 30.938 70.312 70.313 70.312h646.874c39.376 0 70.313-32.343 70.313-70.312V452.938zm251.719 195.468h112.5V534.5h56.25v113.906h112.5v56.25h-112.5v113.906h-56.25V704.656h-112.5z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <span>{{ $t('pages.medical_team.doctor_order') }}</span>
              </a>
            </div>
            <div class="docImg" :class="{ 'docImg-en': locale === 'en' }">
              <div><img :src="doctorList[0].doctorImgUrl" /></div>
              <div class="docEnName">{{ $t(doctorList[0].doctorEnName) }}</div>
            </div>
          </li>
        </ul>
        <PageNewDoctor :list="NewList" />
      </div>
    </div>
    <Footer class="-mt-24" />
    <div class="mt-50">
      <PageFooterMenu />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url(~/assets/font/font.css);

:depp(.footerMenu .footerImg) {
  right: -20vw;
}
.button-group {
  z-index: 10;
  background: #efe8d9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 24px;
  padding: 0 24px;
  width: 100%;
  .button {
    height: 52px;
    font-family: 'Noto Sans HK';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    letter-spacing: 0.1em;
    cursor: pointer;
    z-index: 15;
    display: flex;
    align-items: center;
    gap: 4px;
    border: none;
    &.appointment {
      color: #8ad8dd;
      .icon {
        background: #8ad8dd;
      }
    }
    &.save {
      color: #d7a889;
      .icon {
        background: #d7a889;
      }
    }
    &.share {
      color: #81c4f5;
      .icon {
        background: #81c4f5;
      }
    }
  }
  .icon {
    padding: 4px;
    color: #fff;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    svg {
      width: 100%;
      height: 100%;
    }
  }
}

.medical-team {
  .docImgDS {
    max-width: 312px !important;
    width: 100%;
  }
  margin-bottom: 50px;
  & > div:first-child {
    margin-left: 695px;
    margin-top: 98px;
    position: relative;
    & > .title {
      position: relative;
      -ms-writing-mode: tb-lr;
      writing-mode: vertical-lr;
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 400;
      font-size: 40.1431px;
      line-height: 46px;
      text-align: center;
      letter-spacing: 0.05em;
      color: #515151;
      &::after {
        content: 'medical team';
        color: #8ad8dd;
        text-transform: uppercase;
        font-size: 26px;
        white-space: nowrap;
        position: absolute;
        top: 0;
        left: -40px;
      }
    }
    & > div:last-child {
      background: #f2f2f2;
      width: 738px;
      height: 543px;
      position: absolute;
      top: -98px;
      left: 150px;
    }
  }
  .mainCon {
    margin-left: 30.6vw;
    z-index: 2;
    position: relative;
    margin-top: 71px;
    .docList {
      display: flex;
      flex-direction: row;
      position: relative;
      margin-bottom: 177px;
      width: 745px;
      justify-content: space-between;
      .docDes {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: -45px;
        position: relative;
        z-index: 9;
        flex: 1;
      }
      .docImg {
        max-width: 265px;
        position: relative;
        & > div:first-child {
          & > img {
            z-index: 9;
            width: 100%;
            position: relative;
          }
        }

        .docEnName {
          font-family: 'ButterTangXin';
          font-style: normal;
          font-weight: 400;
          font-size: 32.3948px;
          line-height: 108px;
          text-align: center;
          color: #2958a3;
          position: absolute;
          z-index: 10;
        }
      }
      .docName {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 50px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #515151;
      }
      .doctorIntro {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 350;
        font-size: 15px;
        line-height: 32px;
        text-align: center;
        letter-spacing: 0.1em;
        color: #515151;
      }
      .docEducation {
        display: flex;
        flex-direction: row;
        margin-top: 29px;
        & > div:first-child {
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 350;
          font-size: 15px;
          line-height: 35px;
          text-align: center;
          letter-spacing: 0.1em;
          color: #515151;
          margin-right: 36px;
        }

        & > div:last-child {
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 350;
          font-size: 15px;
          line-height: 35px;
          letter-spacing: 0.1em;
          color: #515151;
          white-space: pre-wrap !important;
        }
      }
    }
  }

  // ul > li:nth-child(2) {
  //   .orderLink {
  //     bottom: -40px !important;
  //   }
  // }

  ul > li:nth-child(10) {
    & > a {
      bottom: -40px;
    }
  }

  ul > li:nth-child(1) {
    // .orderLink {
    //   bottom: -80px !important;
    // }

    & > div:nth-child(2) {
      & > div:nth-child(2) {
        top: 74px;
        left: -124px;
      }
    }
  }

  ul > li:nth-child(2) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 118px;
        left: -148px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -153px;
        bottom: -86px;
        width: 418px;
        height: 316px;
      }
    }
  }

  ul > li:nth-child(3) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 88px;
        left: -158px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -153px;
        bottom: -86px;
        width: 418px;
        height: 316px;
      }
    }
  }

  ul > li:nth-child(4) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        left: -124px;
        top: -20px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        bottom: -68px;
        content: '';
        height: 284px;
        left: -84px;
        position: absolute;
        width: 312px;
      }
    }
  }
  ul > li:nth-child(5) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        left: -153px;
        top: 129px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 202px;
        left: -221px;
        position: absolute;
        top: 83px;
        width: 449px;
      }
    }
  }

  ul > li:nth-child(6) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        left: -144px;
        top: 70px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 284px;
        left: -224px;
        position: absolute;
        top: -47px;
        width: 488px;
      }
    }
  }

  ul > li:nth-child(7) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        left: -124px;
        top: -30px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 281px;
        left: -52px;
        position: absolute;
        top: -44px;
        width: 276px;
      }
    }
  }

  ul > li:nth-child(8) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        right: -98px;
        top: -28px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        bottom: -55px;
        content: '';
        height: 322px;
        left: -298px;
        position: absolute;
        width: 515px;
      }
    }
  }

  ul > li:nth-child(9) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        left: -220px;
        top: 108px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 284px;
        left: -59px;
        position: absolute;
        top: -47px;
        width: 276px;
      }
    }
  }

  ul > li:nth-child(10) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        right: -63px;
        top: -40px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 184px;
        left: -341px;
        position: absolute;
        top: 59px;
        width: 558px;
      }
    }

    & > a {
      bottom: -40px !important;
    }
  }

  ul > li:nth-child(11) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        left: -160px;
        top: 69px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 322px;
        left: -78px;
        position: absolute;
        top: -47px;
        width: 342px;
      }
    }
  }

  ul > li:nth-child(12) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        left: -240px;
        top: 160px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        bottom: -46px;
        content: '';
        height: 250px;
        left: -46px;
        position: absolute;
        width: 267px;
      }
    }
  }

  ul > li:nth-child(13) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        left: -120px;
        top: -54px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 273px;
        left: -54px;
        position: absolute;
        top: -47px;
        width: 275px;
      }
    }
  }

  ul > li:nth-child(14) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        left: -180px;
        top: 2px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 211px;
        left: -222px;
        position: absolute;
        top: 44px;
        width: 443px;
      }
    }
  }

  ul > li:nth-child(15) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        right: -180px;
        top: 30px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 283px;
        left: -72px;
        position: absolute;
        top: -57px;
        width: 336px;
      }
    }
  }

  ul > li:nth-child(16) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        left: -260px;
        top: 240px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        bottom: -50px;
        content: '';
        height: 283px;
        left: -111px;
        position: absolute;
        width: 336px;
      }
    }
  }
  ul > li:nth-child(17) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        left: -140px;
        top: -27px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 283px;
        left: -53px;
        position: absolute;
        top: -39px;
        width: 277px;
      }
    }
  }

  ul > li:nth-child(18) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        right: -220px;
        top: 129px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 245px;
        left: -297px;
        position: absolute;
        top: 45px;
        width: 521px;
      }
    }
  }

  ul > li:nth-child(19) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        left: -180px;
        top: -20px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 285px;
        left: -62px;
        position: absolute;
        top: 45px;
        width: 286px;
      }
    }
  }

  ul > li:nth-child(20) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        left: -120px;
        top: -14px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 286px;
        left: -48px;
        position: absolute;
        top: -50px;
        width: 260px;
      }
    }
  }

  ul > li:nth-child(21) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        left: -212px;
        top: 112px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 277px;
        left: -154px;
        position: absolute;
        top: -32px;
        width: 366px;
      }
    }
  }

  ul > li:nth-child(22) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        left: -276px;
        top: 212px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        bottom: -45px;
        content: '';
        height: 277px;
        left: -44px;
        position: absolute;
        width: 252px;
      }
    }
  }
  ul > li:nth-child(23) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
        width: 252px;
        height: auto;
      }
      & > div:nth-child(2) {
        right: -183px;
        top: 7px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 224px;
        left: -315px;
        position: absolute;
        top: 79px;
        width: 523px;
      }
    }
  }
  ul > li:nth-child(24) {
    & > div:nth-child(1) {
      .docName {
        white-space: nowrap;
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
        // width: 264px;
        // height: 330px;
      }
      & > div:nth-child(2) {
        right: -168px;
        top: 108px;
      }
      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -315px;
        top: 79px;
        width: 523px;
        height: 224px;
      }
    }
  }
  ul > li:nth-child(25) {
    & > div:nth-child(1) {
      .docName {
        white-space: nowrap;
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        left: -138px;
        top: 94px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 224px;
        left: -315px;
        position: absolute;
        top: 79px;
        width: 523px;
      }
    }
  }

  ul > li:nth-child(26) {
    & > div:nth-child(1) {
      .docName {
        white-space: nowrap;
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        left: -168px;
        top: 94px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 224px;
        left: -105px;
        position: absolute;
        top: 145px;
        width: 300px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .medical-team {
    & > div:first-child {
      margin-left: 0px;
      margin-top: 78px;
      & > .title {
        -ms-writing-mode: initial;
        writing-mode: initial;
        font-size: 28px;
        text-align: left;
        letter-spacing: -0.1em;
        padding-top: 30px;
        margin-left: 20px;
        &::after {
          left: 0px;
          top: 60px;
          letter-spacing: 0.01em;
          font-size: 16px;
        }
      }
      & > div:last-child {
        width: calc(100% - 48%);
        top: 0;
        left: 48%;
        height: 220px;
      }
    }
    .mainCon {
      margin-left: 0;
      margin-top: 30.2083vw;
      padding: 0 5vw 0 6.25vw;
      .docList {
        flex-direction: row-reverse;
        width: 100%;
        padding-top: 14.53vw;
        margin-bottom: 10.4165vw;
        .docDes {
          align-items: flex-start;
          margin-top: 0px;
          &.docDes-en {
            max-width: 45%;
          }
        }
        // .orderLink {
        //   width: 90px;
        //   height: 34px;
        //   font-size: 16px;
        //   line-height: 34px;
        //   margin: 24px auto 0 0;
        //   display: block;
        // }

        .docName {
          position: absolute;
          width: calc(100vw - 60px);
          right: 0;
          top: -50px;
          text-align: left;
          font-size: 24px;
          &.docName-en {
            font-size: 18px;
          }
        }

        .doctorIntro {
          position: absolute;
          width: calc(100vw - 60px);
          right: 0;
          top: -20px;
          text-align: left;
          font-size: 12px;
        }

        .docImg {
          max-width: 165px;
          width: 60%;
          margin-top: 29px;
          margin-right: 15px;
          div {
            img {
              max-width: 165px;
            }
          }
          &.docImg-en {
            min-width: 50%;
            max-width: 50%;
            img {
              width: 100%;
            }
          }

          .docEnName {
            font-size: 20px;
            left: 50px;
            width: 100%;
            text-align: right;
            line-height: 25px;
            top: 160px;
            position: relative;
            top: 0 !important;
            left: 0 !important;
            z-index: 5;
          }
        }

        .docEducation {
          & > div:first-child {
            margin-right: 0px;
            font-size: 12px;
            min-width: 40px;
            text-align: left;
            line-height: 16px;
            &.edutitle-en {
              display: none;
            }
          }
          & > div:last-child {
            font-size: 12px;
            line-height: 160%;
            margin-bottom: 6px;
            padding-right: 5px;
          }
        }
      }
    }

    ul > li:nth-child(1) {
      max-height: 266px;
      // .orderLink {
      //   bottom: 10px !important;
      // }

      & > div:nth-child(2) {
        .docEnName {
          top: 150px;
        }
      }

      // & > div:nth-child(2) {
      //   margin-top: 20px !important;
      // }

      &::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: 0;
        bottom: -70px;
        width: 100%;
        height: 200px;
      }
    }

    ul > li:nth-child(3) {
      & > div:nth-child(2) {
        .docEnName {
          top: 150px !important;
        }

        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(4) {
      & > div:nth-child(2) {
        .docEnName {
          bottom: 10px !important;
        }

        & > div:nth-child(1)::before {
          width: 100%;
          left: -30px;
          top: 38px;
          height: 140px;
        }
      }
    }

    ul > li:nth-child(5) {
      & > div:nth-child(2) {
        .docEnName {
          top: 170px !important;
        }

        & > div:nth-child(1)::before {
          width: 100%;
          left: -30px;
          top: 38px;
          height: 120px;
        }
      }
    }

    ul > li:nth-child(6) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }

        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: -30px;
          height: 170px;
        }
      }
    }

    ul > li:nth-child(7) {
      & > div:nth-child(2) {
        .docEnName {
          bottom: 70px !important;
        }

        & > div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: -30px;
          height: 180px;
        }
      }
    }

    ul > li:nth-child(8) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: 100%;
          left: -30px;
          top: 38px;
          height: 170px;
        }
      }
    }

    ul > li:nth-child(9) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: -30px;
          height: 170px;
        }
      }
    }

    ul > li:nth-child(10) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }

        & > div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul > li:nth-child(11) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul > li:nth-child(12) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul > li:nth-child(13) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul > li:nth-child(14) {
      & > div:nth-child(2) {
        & > div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul > li:nth-child(15) {
      .docEnName {
        bottom: 0px !important;
      }

      & > div:nth-child(2) {
        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(16) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(17) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(18) {
      & > div:nth-child(2) {
        .docEnName {
          bottom: -5px !important;
        }

        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(19) {
      & > div:nth-child(2) {
        .docEnName {
          bottom: -5px !important;
        }

        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(20) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(21) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(22) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }

        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(23) {
      .docImg {
        & > div:first-child {
          width: 124px;
          height: auto;
        }
      }
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: calc(100% - 70px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(24) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1) {
          width: 100%;
          height: auto;
        }

        & > div:nth-child(1)::before {
          width: calc(100% + 70px);
          left: -30px;
          top: 0px;
          height: 110px;
        }
      }
    }
    ul > li:nth-child(25) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
          white-space: nowrap;
        }
        & > div:nth-child(1) {
          width: 100%;
          height: auto;
        }

        & > div:nth-child(1)::before {
          width: calc(100% + 70px);
          left: -30px;
          top: 0px;
          height: 110px;
        }
      }
    }
    // ul > li:nth-child(25) {
    //   & > div:nth-child(2) {
    //     .docEnName {
    //       top: 175px !important;
    //     }
    //     & > div:nth-child(1) {
    //       width: 100%;
    //       height: auto;
    //     }

    //     & > div:nth-child(1)::before {
    //       width: calc(100% + 0px);
    //       left: 40px;
    //       top: 50px;
    //       height: 150px;
    //     }
    //   }
    // }

    ul > li:nth-child(26) {
      & > div:nth-child(2) {
        .docEnName {
          bottom: 155px;
          right: -70px;
        }
        & > div:nth-child(1) {
          width: 100%;
          height: auto;
        }

        & > div:nth-child(1)::before {
          height: 150px;
          left: 40px;
          top: 50px;
          width: 100%;
        }
      }
    }
  }
}
@media screen and (min-width: 1920px) {
  .medical-team {
    margin: auto;
    max-width: 1200px;

    .mainCon {
      margin-left: 8.6vw;
    }

    & > div:first-child {
      margin-left: 190px;
    }
  }
}
@media screen and (min-width: 1200px) {
  :deep(.footerMenu .footerImg) {
    right: -3vw;
  }
}
@media screen and (min-width: 1441px) {
  :deep(.footerMenu .footerImg) {
    right: -18vw;
  }
}
</style>

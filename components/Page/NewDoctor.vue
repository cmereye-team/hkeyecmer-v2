<script lang="ts" setup>
const props = defineProps({
  list: {
    type: Object,
    default: () => [],
    required: true,
  },
})

interface NewList {
  doctorName: string
  doctorIntro: string
  doctorEnName: string
  doctorEducation: string[]
  doctorImgUrl: string
}
const isModalOpen = ref(false)
const modalCardImg = ref('')
const modalTips = ref('')

// === 功能 1：核心下載邏輯 (Blob 繞過瀏覽器跨域限制) ===
const triggerDownload = async (url: string, filename: string) => {
  if (!process.client) return
  try {
    const response = await fetch(url, { mode: 'cors' })
    if (!response.ok) throw new Error('圖片下載網絡響應失敗')

    const blob = await response.blob()
    const blobUrl = window.URL.createObjectURL(blob)

    const tempLink = document.createElement('a')
    tempLink.style.display = 'none'
    tempLink.href = blobUrl
    tempLink.download = filename

    document.body.appendChild(tempLink)
    tempLink.click()

    document.body.removeChild(tempLink)
    window.URL.revokeObjectURL(blobUrl)
  } catch (error) {
    console.error('直接下載出錯:', error)
  }
}

// === 點擊“儲存到手機”事件處理 ===
const handleSaveCard = (doc: any) => {
  // 获取名片地址，兜底防止为空
  const cardUrl = doc.doctorCard || ''
  const docTitle = doc.doctorName || '醫生'

  if (!cardUrl) {
    console.warn('該醫生暫無名片圖片')
    return
  }

  // 修正 2：通过 .value 正确更新响应式数据
  modalCardImg.value = cardUrl
  modalTips.value = `${docTitle}醫生的名片開始下載...`
  isModalOpen.value = true

  // 異步觸發下載
  triggerDownload(cardUrl, `希瑪眼科_${docTitle}醫生名片.webp`)
}

// === 功能 2：點擊“分享”觸發原生 Web Share 或 自動複製 ===
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
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`)
        alert(`已自動複製 ${docTitle} 的名片連結，快去貼上分享給好友吧！`)
      } catch (clipErr) {
        prompt('請複製以下連結分享：', `${shareData.text} ${shareData.url}`)
      }
    } else {
      prompt('請複製以下連結分享醫生名片：', `${shareData.text} ${shareData.url}`)
    }
  }
}

// === 功能 3：入參檢測與平滑滾動定位 ===
onMounted(() => {
  const route = useRoute()
  const sharedDocId = route.query.docId

  if (sharedDocId) {
    const targetDoctor = document.getElementById(`doc-${sharedDocId}`)
    if (targetDoctor) {
      setTimeout(() => {
        targetDoctor.scrollIntoView({ behavior: 'smooth', block: 'center' })
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

// 關閉彈窗邏輯
const handleCloseModal = () => {
  isModalOpen.value = false
  modalCardImg.value = ''

  if (process.client) {
    const url = new URL(window.location.href)
    if (url.searchParams.has('docId')) {
      url.searchParams.delete('docId')
      window.history.replaceState({}, '', url.toString())
    }
  }
}
</script>

<template>
  <div>
    <ul class="mobile">
      <li
        v-for="(doc, index) in props.list"
        :key="index"
        class="docList"
        :id="`doc-${doc.id || index}`"
      >
        <div>{{ doc.doctorName }}</div>
        <div>
          <div>
            <img
              :src="
                doc.doctorImgUrl.includes('https')
                  ? doc.doctorImgUrl
                  : 'https://hkcmereye.com' + doc.doctorImgUrl
              "
            />
            <div>
              {{ doc.doctorEnName }}
            </div>
          </div>
          <div>
            <div>{{ $t('pages.medical_team.doctor_edu') }}</div>
            <div v-html="doc.doctorEducation"></div>
          </div>
        </div>
        <div class="button-group">
          <a
            id="medicalTeamLink"
            class="button appointment text-white inline-block"
            href="https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&cid=7f3c58ea65c34d9d82c1f6455384212f&lng=big5&sid=cd5457bae7eb4c9db0534553310cb509&p=https%3A//hkcmereye.com/&rf1=&rf2=&msg=&e=hkcmereye.com[youce-goutong]&d=1692676040714"
          >
            <div class="icon">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M884.656 211.062C872 198.406 853.72 189.97 835.437 189.97h-52.03c-5.626-25.313-28.126-45-54.844-45h-56.25c-26.72 0-49.22 18.281-54.844 45H417.78c-5.625-25.313-28.125-45-54.844-45h-56.25c-26.718 0-49.218 18.281-54.843 45h-63.281c-18.282 0-36.563 7.031-49.22 21.093-14.062 14.063-21.093 32.344-21.093 50.625v120.938h787.5V261.687c0-18.28-7.031-36.562-21.094-50.625M118.25 452.938v368.437c0 39.375 30.938 70.312 70.313 70.312h646.874c39.376 0 70.313-32.343 70.313-70.312V452.938zm251.719 195.468h112.5V534.5h56.25v113.906h112.5v56.25h-112.5v113.906h-56.25V704.656h-112.5z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <span>{{ $t('pages.medical_team.doctor_order') }}</span>
          </a>
          <button @click="handleSaveCard(doc)" class="button save">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="currentColor"
                  d="M21 7v12q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12zm-6.875 10.125Q15 16.25 15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18t2.125-.875M6 10h9V6H6z"
                ></path>
              </svg>
            </div>
            <span>儲存到手機</span>
          </button>
          <button @click="handleShare(doc, Number(index))" class="button share">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  fill="currentColor"
                  d="M10.25 3a.75.75 0 0 1 0 1.5h-3.5A2.25 2.25 0 0 0 4.5 6.75v10.5l.012.23A2.25 2.25 0 0 0 6.75 19.5h10.5a2.25 2.25 0 0 0 2.25-2.25v-2a.75.75 0 0 1 1.5 0v2A3.75 3.75 0 0 1 17.25 21H6.75a3.75 3.75 0 0 1-3.745-3.557L3 17.25V6.75A3.75 3.75 0 0 1 6.75 3zm4.687-.932a.75.75 0 0 1 .801.113l7 6a.75.75 0 0 1 .032 1.109l-7 6.75a.75.75 0 0 1-1.27-.54v-2.976c-1.014.064-1.97.273-2.94.769c-1.136.581-2.344 1.581-3.689 3.303l-.271.354a.75.75 0 0 1-1.35-.45c0-2.857.687-5.59 2.168-7.628c1.376-1.893 3.41-3.147 6.082-3.344V2.75l.008-.109a.75.75 0 0 1 .429-.573"
                ></path>
              </svg>
            </div>
            <span>分享</span>
          </button>
        </div>
      </li>
    </ul>
    <div
      v-if="isModalOpen"
      @click="handleCloseModal"
      class="modal fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-white"
    >
      <div
        @click.stop="handleCloseModal"
        class="absolute top-20 right-5 text-3xl cursor-pointer p-2.5 z-[10000]"
      >
        &times;
      </div>
      <p class="mb-[15px] text-base tracking-wider text-[#8AD8DD] font-sans">
        {{ modalTips }}
      </p>
      <img
        :src="modalCardImg"
        @click.stop
        alt="醫生名片"
        class="w-[85%] max-w-[400px] rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mobile {
  margin-top: 140px;
}
.modal {
  z-index: 90;
}
.button-group {
  z-index: 10;
  background: #efe8d9;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
.docList {
  display: flex;
  flex-direction: column;
  margin-bottom: 75px;
  & > div:nth-child(1) {
    color: #515151;
    font-family: 'Noto Sans HK';
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 45px;
  }
  & > div:nth-child(2) {
    display: flex;
    gap: 0 4.165vw;
    min-height: 212px;
    & > div:nth-child(1) {
      width: 31.25vw;
      min-width: 31.25vw;
      height: fit-content;
      position: relative;
      & > img,
      & > div {
        position: relative;
        z-index: 5;
      }
      & > img {
        width: 100%;
      }
      & > div {
        font-family: 'ButterTangXin';
        color: #2958a3;
        font-size: 5vw;
        font-style: normal;
        font-weight: 100;
        line-height: normal;
        position: absolute;
        right: -8.75vw;
        bottom: -8.75vw;
      }
    }
    & > div:nth-child(1)::after {
      content: '';
      width: 32.29165vw;
      height: 31.25vw;
      display: inline-block;
      background: #f2f2f2;
      position: absolute;
      bottom: 0;
      right: 0;
    }
    & > div:nth-child(2) {
      display: flex;
      gap: 0 2.9165vw;
      & > div:nth-child(1) {
        white-space: nowrap;
        color: #515151;
        font-family: 'Noto Sans HK';
        font-size: 3.33vw;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      & > div:nth-child(2) {
        color: #515151;
        font-family: 'Noto Sans HK';
        font-size: 3.125vw;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        :deep(p) {
          margin-bottom: 1.665vw;
        }
      }
    }
  }
  &:nth-child(11),
  &:nth-child(12),
  &:nth-child(21) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        div {
          bottom: -9vw;
          white-space: nowrap;
        }
      }
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
}
li:nth-child(1) {
  & > div:nth-child(2) {
    & > div:nth-child(1)::after {
      height: 42.703vw;
      bottom: -8.75vw;
      left: -8.75vw;
      right: auto;
    }
  }
}
li:nth-child(2) {
  & > div:nth-child(2) {
    & > div:nth-child(1)::after {
      height: 34.375v;
      bottom: -8.75vw;
      left: -8.75vw;
      right: auto;
    }
  }
}
li:nth-child(4),
li:nth-child(11),
li:nth-child(18) {
  & > div:nth-child(2) {
    & > div:nth-child(1)::after {
      height: 36.4583vw;
      bottom: 8.75vw;
      left: -8.75vw;
      right: auto;
    }
  }
}
li:nth-child(5),
li:nth-child(19) {
  & > div:nth-child(2) {
    & > div:nth-child(1)::after {
      height: 40.625vw;
      bottom: 5.75vw;
      left: -8.75vw;
      right: auto;
    }
  }
}
li:nth-child(6) {
  & > div:nth-child(2) {
    & > div:nth-child(1)::after {
      height: 36.4583vw;
      bottom: -8.75vw;
      left: -8.75vw;
      right: auto;
    }
  }
}
li:nth-child(7),
li:nth-child(15),
li:nth-child(23) {
  & > div:nth-child(2) {
    & > div:nth-child(1)::after {
      height: 40.625vw;
      bottom: 5.75vw;
      left: -8.75vw;
      right: auto;
    }
  }
}
li:nth-child(3),
li:nth-child(8),
li:nth-child(12),
li:nth-child(16),
li:nth-child(21) {
  & > div:nth-child(2) {
    & > div:nth-child(1)::after {
      height: 26.04165vw;
      bottom: 3.75vw;
      left: -8.75vw;
      right: auto;
    }
  }
}
li:nth-child(9),
li:nth-child(13),
li:nth-child(20),
li:nth-child(22) {
  & > div:nth-child(2) {
    & > div:nth-child(1)::after {
      height: 40.625vw;
      bottom: 4.75vw;
      left: -8.75vw;
      right: auto;
    }
  }
}
li:nth-child(10),
li:nth-child(14),
li:nth-child(17),
li:nth-child(24) {
  & > div:nth-child(2) {
    & > div:nth-child(1)::after {
      height: 36.4583vw;
      bottom: -8.75vw;
      left: -8.75vw;
      right: auto;
    }
  }
}
// @media screen and (max-width: 768px) {
//   .docList {
//     .orderLink {
//       width: 90px;
//       height: 34px;
//       font-size: 16px;
//       line-height: 34px;
//       display: block;
//       margin: 20px auto 0 44vw;
//     }
//   }
// }
</style>

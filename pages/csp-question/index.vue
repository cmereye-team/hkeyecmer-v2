<!--
 * @Author: 谭洁莹
 * @Date: 2026-01-12 18:01:04
 * @LastEditTime: 2026-01-14 16:35:05
 * @FilePath: /pages/csp-question/index.vue
 * @Description: 耀眼行动常见问题
-->
<script lang="ts" setup>
import '~/assets/sass/iconfont.css'
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')
useHead(() => ({
  title: '「耀眼行動」白內障手術政府資助計劃 | 申請資格及費用 | 希瑪眼科中心',
  meta() {
    return [
      {
        hid: 'description',
        name: 'description',
        content: t('tdk.csp.desc'),
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: t('tdk.csp.key'),
      },
    ]
  },
}))
// 传递背景色
const backgd = [
  '#64bcd1;',
  '-webkit-linear-gradient(to right, #83cdd3, #64bcd1);',
  'linear-gradient(to right, #83cdd3, #64bcd1);',
]
onMounted(() => {
  const searchInput = document.getElementById(
    'search-input'
  ) as HTMLInputElement
  const faqList = document.getElementById('faq-list')
  const noResults = document.getElementById('no-results')
  const toggleBtn = document.getElementById('faq-toggle-all')

  if (!searchInput || !faqList) return

  const faqItems = Array.from(faqList.querySelectorAll('.faq-item'))

  // FAQ 搜索
  const filterFAQs = () => {
    const term = searchInput.value.trim().toLowerCase()

    if (term === '') {
      faqItems.forEach((item) => {
        item.style.display = ''
        item.hidden = false
      })
      noResults?.classList.add('hidden')
      return
    }

    let hasMatch = false
    faqItems.forEach((item) => {
      let fullText = ''
      const question = item.querySelector('summary h3')
      const answer = item.querySelector('.faq-content')
      if (question) fullText += question.textContent?.toLowerCase() + ' '
      if (answer) fullText += answer.textContent?.toLowerCase() + ' '

      const match = fullText.includes(term)
      item.hidden = !match
      item.style.display = match ? '' : 'none'
      if (match) hasMatch = true
    })

    noResults?.classList.toggle('hidden', hasMatch)
  }

  searchInput.addEventListener('input', filterFAQs)
  searchInput.addEventListener('search', filterFAQs)

  // 展開/摺疊全部
  if (toggleBtn && faqList) {
    let allExpanded = false
    toggleBtn.addEventListener('click', () => {
      allExpanded = !allExpanded
      faqItems.forEach((item) => {
        const details = item.querySelector('details')
        if (details) {
          if (allExpanded) {
            details.setAttribute('open', '')
          } else {
            details.removeAttribute('open')
          }
        }
      })
      toggleBtn.textContent = allExpanded ? '摺疊全部' : '展開全部'
      toggleBtn.setAttribute(
        'aria-label',
        allExpanded ? '摺疊所有問題' : '展開所有問題'
      )
    })
  }

  // 初始執行一次（清空時恢復全部顯示）
  filterFAQs()
})
</script>
<template>
  <main class="faq">
    <CspBanner active="question" />
    <section class="bg-[#f1f6f8] pt-4 pb-[52px] lg:pt-[80px] lg:pb-[108px]">
      <div class="container mx-auto px-3 xl:px-0">
        <div class="flex flex-col justify-center mb-4 lg:mb-[24px]">
          <h2 class="title-normal text-center pb-[28px] lg:pb-[52px]">
            {{ t('csp.nav.question') }}
          </h2>
          <input
            id="search-input"
            type="search"
            placeholder="請輸入搜索"
            class="w-4/5 lg:w-[460px] mx-auto p-2 lg:px-3 border-2 lg:border-3 border-[#C7C5C5] focus:border-[#2958A3] focus:outline-none rounded-2xl lg:rounded-3xl !mb-3 lg:!mb-8"
          />
          <button
            id="faq-toggle-all"
            class="bg-[#2958A3] text-white rounded-sm lg:rounded-lg self-end block px-2 py-[6px] lg:px-4 lg:py-3"
            aria-label="展開所有問題"
          >
            展開全部
          </button>
        </div>
        <ol
          id="faq-list"
          class="faq-list text-[#4B4B4B] text-base lg:text-2xl space-y-6 lg:space-y-8 mb-6 lg:mb-10"
        >
          <li class="faq-item">
            <details>
              <summary
                class="px-3 lg:pl-[13%] lg:pr-[10%] py-4 lg:pt-[52px] lg:pb-12"
              >
                <h3
                  class="pl-9 lg:pl-0 mb-0 text-lg lg:text-2xl font-bold leading-7 lg:leading-none"
                >
                  什麼是耀眼行動（白內障手術計劃）？
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px] !space-y-8 lg:!space-y-10"
              >
                <p>
                  耀眼行動（白內障手術計劃）是由香港政府自2008年起推出的一項政府資助計劃，旨在透過公私營合作模式，為醫管局白內障手術輪候名單上的病人提供白內障手術資助。
                </p>
                <p>
                  該計劃的核心目的是縮短輪候時間，讓白內障患者能更早接受手術，助重拾清楚視力，改善生活質素。
                </p>
                <p>
                  希瑪眼科中心的醫生是耀眼行動的指定醫生之一，擁有豐富的臨床經驗和專業認證，專注於為病人提供安全且貼心的白內障手術服務。
                </p>
                <p>
                  如有任何疑問或需要耀眼行動醫生的推薦，歡迎隨時聯繫本中心查詢。
                </p>
              </div>
            </details>
          </li>
          <li class="faq-item">
            <details>
              <summary
                class="px-3 lg:pl-[13%] lg:pr-[10%] py-4 lg:pt-[52px] lg:pb-12"
              >
                <h3
                  class="pl-9 lg:pl-0 mb-0 text-lg lg:text-2xl font-bold leading-7 lg:leading-none"
                >
                  哪些病人會獲邀參加此計劃？
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px] space-y-8 lg:space-y-10"
              >
                <p>符合以下特定條件的病人將有資格獲邀參加計劃：</p>
                <ul class="!list-decimal space-y-8 lg:space-y-10 mb-0">
                  <li>
                    醫管局轄下醫院的白內障手術輪候名單上輪候18個月或以上，而等候最長時間的病人將優先獲邀請；
                  </li>
                  <li>適合接受局部麻醉手術；及</li>
                  <li>
                    一般輪候個案（至於緊急或前期個案，因此類病人需得到優先處理，醫管局會持續為他們安排手術）
                  </li>
                </ul>
              </div>
            </details>
          </li>
          <li class="faq-item">
            <details>
              <summary
                class="px-3 lg:pl-[13%] lg:pr-[10%] py-4 lg:pt-[52px] lg:pb-12"
              >
                <h3
                  class="pl-9 lg:pl-0 mb-0 text-lg lg:text-2xl font-bold leading-7 lg:leading-none"
                >
                  私家醫生在此計劃下將為病人提供哪些治療？
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px] !space-y-8 lg:!space-y-10"
              >
                <p>
                  參與「耀眼行動」的私家眼科醫生會為病人提供白內障治療，包括一次手術前評估、白內障手術（包括單焦距人工晶體鏡片），以及兩次手術後檢查。
                </p>
                <p>
                  此計劃資助已包括單焦距人工晶體。如果病人希望選擇非單焦距(進階)人工晶體，則需支付額外費用，相關收費將由私家醫生解釋。如有疑問，歡迎向希瑪眼科團隊諮詢。
                </p>
              </div>
            </details>
          </li>
          <li class="faq-item">
            <details>
              <summary
                class="px-3 lg:pl-[13%] lg:pr-[10%] py-4 lg:pt-[52px] lg:pb-12"
              >
                <h3
                  class="pl-9 lg:pl-0 mb-0 text-lg lg:text-2xl font-bold leading-7 lg:leading-none"
                >
                  如病人符合以上條件，應如何申請參加計劃？
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px] !space-y-8 lg:!space-y-10"
              >
                <div>
                  <p>
                    病人毋須自行申請。醫管局會按照白內障手術輪候名單上的優先次序，根據病人的輪候時間，由等待時間最長的個案開始，分批寄發邀請信予合資格人士（即「獲邀請病人」）。
                  </p>
                  <p>如閣下已收到邀請信，可以按照以下步驟申請參加計劃:</p>
                </div>
                <ol class="csp-steps space-y-8">
                  <li>
                    <h4>向醫管局提交參加表格</h4>
                    <div>
                      <p class="serial">
                        收到邀請函後，請閣下仔細閱讀內容，了解計劃詳情及相關期限。
                      </p>
                      <p class="serial">
                        若決定參加計劃，必須在指定時間內向醫管局提交「病人參加表格」，以完成申請程序。
                      </p>
                    </div>
                  </li>
                  <li>
                    <h4>收到確認信</h4>
                    <div>
                      <p class="serial">
                        成功申請後，醫管局會發出「確認信」。請妥善保管「確認信」，以便私家眼科醫生安排手術前評估及手術程序。
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      href="https://www.ehealth.gov.hk/tc/you-and-your-family/mobile-app.html"
                      target="_blank"
                    >
                      <h4 class="text-[#2958a3] underline underline-offset-4">
                        登記醫健通
                      </h4>
                    </a>
                    <div>
                      <p class="serial">
                        計劃病人需先註冊電子健康紀錄互通系統（醫健通），以便醫生查閱和更新相關的醫療資料。
                      </p>
                      <p class="serial">
                        醫健通連結:
                        <a
                          href="https://www.ehealth.gov.hk/tc/you-and-your-family/mobile-app.html"
                          target="_blank"
                          class="!text-[#2958a3]"
                          >https://www.ehealth.gov.hk/tc/you-and-your-family/mobile-app.html</a
                        >
                      </p>
                    </div>
                  </li>
                  <li>
                    <h4>選擇及聯絡醫生並預約術前評估時間</h4>
                    <div>
                      <p class="serial">
                        計劃病人從耀眼行動名單中選擇私家眼科醫生或眼科中心，並預約手術前評估(需於資助到期日前接受術前評估)。
                      </p>
                      <div class="serial">
                        <p>希瑪眼科中心聯絡方法:</p>
                        <p>
                          1. WhatsApp:
                          <a
                            href="https://rebrand.ly/耀眼行動計劃查詢"
                            target="_blank"
                            class="!text-[#2958a3] !underline !underline-offset-4"
                            >https://rebrand.ly/耀眼行動計劃查詢
                          </a>
                        </p>
                        <p>
                          2. 電話:
                          <a
                            href="tel:+852 3956 2026"
                            class="!text-[#2958a3] !underline !underline-offset-4"
                            >3956 2026</a
                          >
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h4>提供邀請信資料</h4>
                    <div>
                      <p class="serial">
                        向眼科醫生提供邀請信上的登記號碼，以便醫生通過醫健通確認資助資格。
                      </p>
                    </div>
                  </li>
                  <li>
                    <h4>安排手術日期</h4>
                    <div>
                      <p class="serial">
                        資助一經確認後，眼科醫生會協助安排白內障手術的日期。
                      </p>
                      <p class="serial">
                        注意:
                        資助到期日已印在邀請信的標籤上，計劃病人需在該日期之前完成手術前評估，並在評估後的3個月內完成白內障手術。
                      </p>
                    </div>
                  </li>
                </ol>
                <div>
                  <p>
                    遵循上述步驟可順利獲得資助並及時接受治療。我們建議閣下在收到邀請信後，儘快與選定的醫生聯絡，以避免錯過資助期限。
                  </p>
                  <p class="font-bold !mt-8 !mb-4 lg:!my-10">
                    如對上述步驟有任何問題，歡迎跟希瑪眼科中心客戶服務員聯絡。
                  </p>
                  <ul class="!list-decimal space-y-2 lg:space-y-0">
                    <li>
                      WhatsApp:
                      <a
                        href="https://rebrand.ly/耀眼行動計劃查詢"
                        target="_blank"
                        class="!text-[#2958a3] !underline underline-offset-4"
                        >https://rebrand.ly/耀眼行動計劃查詢</a
                      >
                    </li>
                    <li>
                      電話:
                      <a
                        href="tel:+852 3956 2026"
                        class="!text-[#2958a3] !underline underline-offset-4"
                        >3956 2026</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </details>
          </li>
          <li class="faq-item">
            <details>
              <summary
                class="px-3 lg:pl-[13%] lg:pr-[10%] py-4 lg:pt-[52px] lg:pb-12"
              >
                <h3
                  class="pl-9 lg:pl-0 mb-0 text-lg lg:text-2xl font-bold leading-7 lg:leading-none"
                >
                  如病人已購買醫療保險，是否可以申請索償？
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px] !space-y-8 lg:!space-y-10"
              >
                <p>
                  參與計劃的病人如已購買醫療保險，病人可直接聯絡相關保險代理或公司查詢。
                </p>
              </div>
            </details>
          </li>
          <li class="faq-item">
            <details>
              <summary
                class="px-3 lg:pl-[13%] lg:pr-[10%] py-4 lg:pt-[52px] lg:pb-12"
              >
                <h3
                  class="pl-9 lg:pl-0 mb-0 text-lg lg:text-2xl font-bold leading-7 lg:leading-none"
                >
                  參加耀眼行動（白內障手術計劃）後，可否使用醫療券支付自付額？
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px] !space-y-8 lg:!space-y-10"
              >
                <p>本計劃自付額不適用長者醫療券支付。</p>
              </div>
            </details>
          </li>
          <li class="faq-item">
            <details>
              <summary
                class="px-3 lg:pl-[13%] lg:pr-[10%] py-4 lg:pt-[52px] lg:pb-12"
              >
                <h3
                  class="pl-9 lg:pl-0 mb-0 text-lg lg:text-2xl font-bold leading-7 lg:leading-none"
                >
                  如成功登記耀眼行動（白內障手術計劃）後，多久可以進行白內障手術？
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px] !space-y-8 lg:!space-y-10"
              >
                <p>
                  一般來說，完成手術前評估並確認資助後，希瑪眼科醫生將協助安排手術日期。實際的排期時間會因醫生和診所的不同情況而有所差異，因此建議儘早與我們聯絡。
                </p>
              </div>
            </details>
          </li>
        </ol>
        <div id="no-results" class="hidden text-center text-gray-500 py-8">
          抱歉，沒有找到符合的問題～
        </div>
      </div>
      <CspButton />
    </section>
    <PageFooterMenu />
  </main>
</template>
<style lang="scss" scoped>
details,
summary {
  list-style: none;
}
summary::-webkit-details-marker {
  display: none; /* 兼容旧版浏览器 */
}
.title-normal {
  font-size: 24px;
  font-weight: bold;
  color: #2958a3;
}
.serial {
  position: relative;
  padding-left: 16px;
  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #4b4b4b;
    left: 0;
    top: 8px;
  }
}
.faq {
  color: #66696f;
  font-size: 16px;
  line-height: 28px;
  .faq-list {
    list-style: none;
    counter-reset: faq-counter;
  }
  .faq-item {
    background-color: #fff;
    list-style: none;
    position: relative;
    counter-increment: faq-counter;
    &::before {
      content: counter(faq-counter);
      position: absolute;
      top: 20px;
      left: 8px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      border: 0.5px solid #000;
    }
  }
}
.csp-steps {
  counter-reset: step-counter;
  li {
    counter-increment: step-counter;
    position: relative;
    &::before {
      content: '步驟' counter(step-counter, cjk-ideographic);
      position: absolute;
      left: 0;
      background-color: #2958a3;
      color: #fff;
      padding: 4px 8px;
      border-radius: 16px;
      font-size: 16px;
      line-height: 1;
    }
    h4 {
      padding-left: 72px;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 40px;
    }
  }
}
@media screen and (max-width: 1023px) {
  .field-value {
    padding-left: 32px;
  }
}
@media screen and (min-width: 1024px) {
  .title-normal {
    font-size: 48px;
  }
  .serial {
    position: relative;
    padding-left: 32px;
    &::before {
      width: 8px;
      height: 8px;
      top: 12px;
    }
  }
  .faq {
    font-size: 30px;
    line-height: 48px;
    .faq-item {
      &::before {
        width: 60px;
        height: 60px;
        top: 36px;
        left: 56px;
        border-width: 1px;
      }
    }
  }
  .csp-steps li {
    &::before {
      padding: 8px 16px;
      font-size: 24px;
    }
    h4 {
      font-size: 24px;
      line-height: 42px;
      padding-left: 120px;
    }
  }
}
</style>

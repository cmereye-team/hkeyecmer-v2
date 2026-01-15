<!--
 * @Author: 谭洁莹
 * @Date: 2026-01-12 18:01:04
 * @LastEditTime: 2026-01-15 10:48:03
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
  title: t('tdk.csp.title_question'),
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
// 搜索关键字与展开状态
const searchKeyword = ref('')
const isAllExpanded = ref(false)

// 搜索过滤逻辑（使用 Tailwind 的 hidden / block）
watch(
  searchKeyword,
  (val) => {
    const term = val.trim().toLowerCase()
    const items = document.querySelectorAll(
      '.faq-item'
    ) as NodeListOf<HTMLElement>
    let hasMatch = false

    items.forEach((item) => {
      const questionEl = item.querySelector('summary h3')
      const contentEl = item.querySelector('.faq-content')
      const questionText = (questionEl?.textContent || '').toLowerCase()
      const answerText = (contentEl?.textContent || '').toLowerCase()

      const match = questionText.includes(term) || answerText.includes(term)

      if (term === '' || match) {
        item.classList.remove('hidden')
        if (term !== '') hasMatch = true
      } else {
        item.classList.add('hidden')
      }
    })

    const noResultsEl = document.getElementById('no-results')
    if (noResultsEl) {
      noResultsEl.classList.toggle('hidden', term === '' || hasMatch)
    }
  },
  { immediate: true }
)

// 全部展开/折叠（只作用于当前可见项）
const toggleAll = () => {
  isAllExpanded.value = !isAllExpanded.value

  const items = document.querySelectorAll(
    '.faq-item'
  ) as NodeListOf<HTMLElement>

  items.forEach((item) => {
    if (item.classList.contains('hidden')) return

    const detailsEl = item.querySelector('details') as HTMLDetailsElement | null
    if (detailsEl) {
      detailsEl.open = isAllExpanded.value
    }
  })
}
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
            v-model="searchKeyword"
            type="search"
            :placeholder="t('csp.faq.search')"
            class="w-4/5 lg:w-[460px] mx-auto p-2 lg:px-3 border-2 lg:border-3 border-[#C7C5C5] focus:border-[#2958A3] focus:outline-none rounded-2xl lg:rounded-3xl !mb-3 lg:!mb-8"
          />
          <button
            id="faq-toggle-all"
            class="bg-[#2958A3] text-white rounded-sm lg:rounded-lg self-end block px-2 py-[6px] lg:px-4 lg:py-3"
            @click="toggleAll"
          >
            {{ isAllExpanded ? t('csp.faq.collapse') : t('csp.faq.expand') }}
          </button>
        </div>
        <ol
          id="faq-list"
          class="faq-list text-[#4B4B4B] text-base lg:text-2xl space-y-6 lg:space-y-8 mb-6 lg:mb-10"
        >
          <li class="faq-item block" data-num="1">
            <details>
              <summary
                class="px-3 lg:pl-[13%] lg:pr-[10%] py-4 lg:pt-[52px] lg:pb-12 cursor-pointer"
              >
                <h3
                  class="pl-9 lg:pl-0 mb-0 text-lg lg:text-2xl font-bold leading-7 lg:leading-none"
                >
                  {{ t('csp.faq.a1') }}
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px] !space-y-8 lg:!space-y-10"
              >
                <p>
                  {{ t('csp.faq.q1.p1') }}
                </p>
                <p>
                  {{ t('csp.faq.q1.p2') }}
                </p>
                <p>
                  {{ t('csp.faq.q1.p3') }}
                </p>
                <p>
                  {{ t('csp.faq.q1.p4') }}
                </p>
              </div>
            </details>
          </li>
          <li class="faq-item block" data-num="2">
            <details>
              <summary
                class="px-3 lg:pl-[13%] lg:pr-[10%] py-4 lg:pt-[52px] lg:pb-12 cursor-pointer"
              >
                <h3
                  class="pl-9 lg:pl-0 mb-0 text-lg lg:text-2xl font-bold leading-7 lg:leading-none"
                >
                  {{ t('csp.faq.a2') }}
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px] space-y-8 lg:space-y-10"
              >
                <p>{{ t('csp.faq.q2.p1') }}</p>
                <ul
                  class="list-decimal list-inside space-y-8 lg:space-y-10 mb-0"
                >
                  <li>
                    {{ t('csp.faq.q2.li1') }}
                  </li>
                  <li>{{ t('csp.faq.q2.li2') }}</li>
                  <li>
                    {{ t('csp.faq.q2.li3') }}
                  </li>
                </ul>
              </div>
            </details>
          </li>
          <li class="faq-item block" data-num="3">
            <details>
              <summary
                class="px-3 lg:pl-[13%] lg:pr-[10%] py-4 lg:pt-[52px] lg:pb-12 cursor-pointer"
              >
                <h3
                  class="pl-9 lg:pl-0 mb-0 text-lg lg:text-2xl font-bold leading-7 lg:leading-none"
                >
                  {{ t('csp.faq.a3') }}
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px] !space-y-8 lg:!space-y-10"
              >
                <p>
                  {{ t('csp.faq.q3.p1') }}
                </p>
                <p>
                  {{ t('csp.faq.q3.p2') }}
                </p>
              </div>
            </details>
          </li>
          <li class="faq-item block" data-num="4">
            <details>
              <summary
                class="px-3 lg:pl-[13%] lg:pr-[10%] py-4 lg:pt-[52px] lg:pb-12 cursor-pointer"
              >
                <h3
                  class="pl-9 lg:pl-0 mb-0 text-lg lg:text-2xl font-bold leading-7 lg:leading-none"
                >
                  {{ t('csp.faq.a4') }}
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px] !space-y-8 lg:!space-y-10"
              >
                <div>
                  <p>
                    {{ t('csp.faq.q4.p1') }}
                  </p>
                  <p>{{ t('csp.faq.q4.p2') }}</p>
                </div>
                <ol class="csp-steps space-y-8">
                  <li>
                    <h4>{{ t('csp.faq.q4.step1.title') }}</h4>
                    <div>
                      <p class="serial">
                        {{ t('csp.faq.q4.step1.p1') }}
                      </p>
                      <p class="serial">
                        {{ t('csp.faq.q4.step1.p2') }}
                      </p>
                    </div>
                  </li>
                  <li>
                    <h4>{{ t('csp.faq.q4.step2.title') }}</h4>
                    <div>
                      <p class="serial">{{ t('csp.faq.q4.step1.p2') }}</p>
                    </div>
                  </li>
                  <li>
                    <a
                      href="https://www.ehealth.gov.hk/tc/you-and-your-family/mobile-app.html"
                      target="_blank"
                    >
                      <h4 class="text-[#2958a3] underline underline-offset-4">
                        {{ t('csp.faq.q4.step3.title') }}
                      </h4>
                    </a>
                    <div>
                      <p class="serial">
                        {{ t('csp.faq.q4.step3.p1') }}
                      </p>
                      <p class="serial">
                        {{ t('csp.faq.q4.step3.p2') }}
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
                    <h4>{{ t('csp.faq.q4.step4.title') }}</h4>
                    <div>
                      <p class="serial">
                        {{ t('csp.faq.q4.step4.p1') }}
                      </p>
                      <div class="serial">
                        <p>{{ t('csp.faq.q4.step4.p1') }}</p>
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
                          2. {{ t('csp.doctor.tel') }}:
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
                    <h4>{{ t('csp.faq.q4.step5.title') }}</h4>
                    <div>
                      <p class="serial">{{ t('csp.faq.q4.step5.p1') }}</p>
                    </div>
                  </li>
                  <li>
                    <h4>{{ t('csp.faq.q4.step6.title') }}</h4>
                    <div>
                      <p class="serial">{{ t('csp.faq.q4.step6.p1') }}</p>
                      <p class="serial">{{ t('csp.faq.q4.step6.p2') }}</p>
                    </div>
                  </li>
                </ol>
                <div>
                  <p>{{ t('csp.faq.q4.p3') }}</p>
                  <p class="font-bold !mt-8 !mb-4 lg:!my-10">
                    {{ t('csp.faq.q4.p4') }}
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
                      {{ t('csp.doctor.tel') }}:
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
          <li class="faq-item block" data-num="5">
            <details>
              <summary
                class="px-3 lg:pl-[13%] lg:pr-[10%] py-4 lg:pt-[52px] lg:pb-12 cursor-pointer"
              >
                <h3
                  class="pl-9 lg:pl-0 mb-0 text-lg lg:text-2xl font-bold leading-7 lg:leading-none"
                >
                  {{ t('csp.faq.a5') }}
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px] !space-y-8 lg:!space-y-10"
              >
                <p>
                  {{ t('csp.faq.q5') }}
                </p>
              </div>
            </details>
          </li>
          <li class="faq-item block" data-num="6">
            <details>
              <summary
                class="px-3 lg:pl-[13%] lg:pr-[10%] py-4 lg:pt-[52px] lg:pb-12 cursor-pointer"
              >
                <h3
                  class="pl-9 lg:pl-0 mb-0 text-lg lg:text-2xl font-bold leading-7 lg:leading-none"
                >
                  {{ t('csp.faq.a6') }}
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px] !space-y-8 lg:!space-y-10"
              >
                <p>{{ t('csp.faq.q6') }}</p>
              </div>
            </details>
          </li>
          <li class="faq-item block" data-num="7">
            <details>
              <summary
                class="px-3 lg:pl-[13%] lg:pr-[10%] py-4 lg:pt-[52px] lg:pb-12 cursor-pointer"
              >
                <h3
                  class="pl-9 lg:pl-0 mb-0 text-lg lg:text-2xl font-bold leading-7 lg:leading-none"
                >
                  {{ t('csp.faq.a7') }}
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px] !space-y-8 lg:!space-y-10"
              >
                <p>
                  {{ t('csp.faq.q7') }}
                </p>
              </div>
            </details>
          </li>
        </ol>
        <div id="no-results" class="hidden text-center text-gray-500 py-8">
          {{ t('csp.faq.noresult') }}
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

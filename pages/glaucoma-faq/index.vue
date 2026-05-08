<!--
 * @Author: 谭洁莹
 * @Date: 2026-05-07 11:48:37
 * @LastEditTime: 2026-05-08 17:07:38
 * @FilePath: /pages/glaucoma-faq/index.vue
 * @Description: 青光眼治疗协作计划常见问题
-->
<script lang="ts" setup>
import '~/assets/plugins/iconfont/iconfont.css'
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')
useHead(() => ({
  title: t('tdk.csp.title_question'),
  meta: [
    {
      name: 'description',
      content: t('tdk.csp.desc'),
    },
    {
      name: 'keywords',
      content: t('tdk.csp.key'),
    },
  ],
}))
const navList = [
  { id: 'intro', path: '/glaucoma-ppp', label: 'ppp.glaucoma.nav.intro' },
  { id: 'doctor', path: '/glaucoma-doctor', label: 'ppp.glaucoma.nav.doctor' },
  { id: 'question', path: '/glaucoma-faq', label: 'ppp.glaucoma.nav.question' },
]
const isEn = computed(() => locale.value.startsWith('en'))
const ehealthLink = computed(() => {
  return isEn.value
    ? 'https://www.ehealth.gov.hk/en/you-and-your-family/mobile-app.html'
    : 'https://www.ehealth.gov.hk/tc/you-and-your-family/mobile-app.html'
})
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

const buttonList = [
  {
    id: 'tel',
    gtm: 'gtm-glaucomappp-tel',
    text: 'ppp.glaucoma.button.tel',
    link: 'tel:+85239562025',
  },
  {
    id: 'whatsapp',
    gtm: 'gtm-glaucomappp-whatsapp',
    text: 'ppp.glaucoma.button.whatsapp',
    link: 'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2%E9%9D%92%E5%85%89%E7%9C%BC%E6%B2%BB%E7%99%82%E5%8D%94%E4%BD%9C%E8%A8%88%E5%8A%83',
  },
]
</script>
<template>
  <main class="faq" :class="{ 'is-en': isEn }">
    <CspBanner active="question" :navList="navList" />
    <section class="bg-[#f1f6f8] pt-4 pb-[52px] lg:pt-[80px] lg:pb-[108px]">
      <div class="container mx-auto px-3 xl:px-0">
        <div class="flex flex-col justify-center mb-4 lg:mb-[24px]">
          <h2 class="title-normal text-center pb-[28px] lg:pb-[52px]">
            {{ t('ppp.csp.nav.question') }}
          </h2>
          <input
            id="search-input"
            v-model="searchKeyword"
            type="search"
            :placeholder="t('ppp.csp.faq.search')"
            class="w-4/5 lg:w-[460px] mx-auto p-2 lg:px-3 border-2 lg:border-3 border-[#C7C5C5] focus:border-[#2958A3] focus:outline-none rounded-2xl lg:rounded-3xl !mb-3 lg:!mb-8"
          />
          <button
            id="faq-toggle-all"
            class="bg-[#2958A3] text-white rounded-sm lg:rounded-lg self-end block px-2 py-[6px] lg:px-4 lg:py-3"
            @click="toggleAll"
          >
            {{ isAllExpanded ? t('ppp.csp.faq.collapse') : t('ppp.csp.faq.expand') }}
          </button>
        </div>
        <ol
          id="faq-list"
          class="faq-list text-[#4B4B4B] text-justify text-base lg:text-2xl space-y-6 lg:space-y-8 mb-6 lg:mb-10"
        >
          <li class="faq-item block" data-num="1">
            <details>
              <summary
                class="px-3 lg:pl-[13%] lg:pr-[10%] py-4 lg:pt-[52px] lg:pb-12 cursor-pointer"
              >
                <h3
                  class="pl-9 lg:pl-0 mb-0 text-lg lg:text-2xl font-bold leading-7 lg:leading-none"
                >
                  {{ t('ppp.glaucoma.faq.q1') }}
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px] !space-y-8 lg:!space-y-10"
              >
                <p>
                  {{ t('ppp.glaucoma.faq.a1') }}
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
                  {{ t('ppp.glaucoma.faq.q2') }}
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px]"
              >
                <p class="mb-8 lg:mb-10">{{ t('ppp.glaucoma.faq.a2.p1') }}</p>
                <p>{{ t('ppp.glaucoma.faq.a2.p2') }}</p>
                <ul
                  class="list-decimal list-inside space-y-1 lg:space-y-2 mb-0"
                >
                  <li>
                    <a href="https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2%E9%9D%92%E5%85%89%E7%9C%BC%E6%B2%BB%E7%99%82%E5%8D%94%E4%BD%9C%E8%A8%88%E5%8A%83" target="_blank" class="text-primary underline underline-offset-4">{{ t('ppp.whatsapp_check') }}9345 1508</a>
                  </li>
                  <li>{{ t('ppp.tel') }} <a href="tel:+85239562026" class="text-primary underline underline-offset-4">3956 2026</a> / <a href="tel:+85239562025" class="text-primary underline underline-offset-4">3956 2025</a></li>
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
                  {{ t('ppp.glaucoma.faq.q3') }}
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px] !space-y-8 lg:!space-y-10"
              >
                <p>
                  {{ t('ppp.glaucoma.faq.a3') }}
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
                  {{ t('ppp.glaucoma.faq.q4') }}
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px] !space-y-8 lg:!space-y-10"
              >
                <div>
                  <p>
                    {{ t('ppp.glaucoma.faq.a4') }}
                  </p>
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
                  {{ t('ppp.glaucoma.faq.q5') }}
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px] !space-y-8 lg:!space-y-10"
              >
                <p>
                  {{ t('ppp.glaucoma.faq.a5') }}
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
                  {{ t('ppp.glaucoma.faq.q6') }}
                </h3>
              </summary>
              <div
                class="faq-content px-3 lg:pl-[13%] lg:pr-[10%] lg:-mt-3 pb-8 lg:pb-[60px] !space-y-8 lg:!space-y-10"
              >
                <p>{{ t('ppp.glaucoma.faq.a6') }}</p>
              </div>
            </details>
          </li>
        </ol>
        <div id="no-results" class="hidden text-center text-gray-500 py-8">
          {{ t('ppp.csp.faq.noresult') }}
        </div>
      </div>
      <CspButton :buttonList="buttonList" />
    </section>
    <PageFooterMenu />
  </main>
</template>
<style lang="scss" scoped>
:deep(.footerMenu-in-t .t-in-b > div a) {
  height: 26px;
}
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
.is-en {
  .csp-steps li::before {
    content: 'Step ' counter(step-counter);
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

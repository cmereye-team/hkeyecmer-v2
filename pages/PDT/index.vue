<!--
 * @Author: 谭洁莹
 * @Date: 2026-09-15 13:54:24
 * @LastEditTime: 2026-09-17 15:26:48
 * @FilePath: /pages/PDT/index.vue
 * @Description: PDT光动力疗法内地推广落地页
-->
<script lang="ts" setup>
/**
 * 仅本页引入简体 Noto Sans SC
 */
import '~/assets/font/noto-sans-sc.css'

definePageMeta({
  layout: 'page',
})

const { t } = useLang()

useHead(() => ({
  title: t('tdk.pdt.title'),
  htmlAttrs: {
    // 本页固定简体语境，便于浏览器按 zh-CN 选择简体字形
    lang: 'zh-CN',
  },
  meta: [
    {
      hid: 'pdtDesc',
      name: 'description',
      content: t('tdk.pdt.desc'),
    },
    {
      hid: 'pdtKey',
      name: 'keywords',
      content: t('tdk.pdt.key'),
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'MedicalProcedure',
            name: '光动力治疗 (Photodynamic Therapy, PDT)',
            alternateName: ['PDT光动力治疗', '光动力疗法'],
            description:
              '光动力疗法（PDT）主要用于治疗老年黄斑点退化、中央浆液性黄斑水肿及特殊眼底血管疾病，是一项成熟且安全的精准治疗方案。',
            procedureType: 'https://schema.org/NoninvasiveProcedure',
            bodyLocation: 'Eye',
            howPerformed:
              '静脉注射光敏感药物后，以特定波长激光活化药物，选择性封闭异常新生血管，减少对正常组织的影响。',
            preparation:
              '需提交或进行光学相干断层扫描(OCT)、眼底萤光血管造影(FFA)、靛青绿血管造影(ICG)等检查，由眼科医生评估适合性。',
            followup: '治疗后可即日返回内地，按医生指示到内地希玛林顺潮眼科医院复诊跟进。',
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '在香港进行光动力治疗有什么优势？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '光动力治疗（PDT）在香港已累积超过十年临床经验，技术成熟，并配备专用光敏感药剂及精准激光系统。配合严谨的医疗监管与标准化流程，为患者提供稳定、安全的治疗选择。',
                },
              },
              {
                '@type': 'Question',
                name: '所有黄斑病变患者都适合接受光动力治疗吗？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '并非所有患者均适合接受光动力治疗。眼科医生会根据患者的临床情况、检查结果及眼底状况作全面评估，并制定合适及个人化的治疗方案。',
                },
              },
              {
                '@type': 'Question',
                name: '内地患者需要自行安排跨境就诊吗？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '内地患者只需联络香港希玛眼科客服中心，专人将协助安排相关检查、香港治疗及后续复诊流程，提供清晰及有序的跨境就诊支援服务。',
                },
              },
              {
                '@type': 'Question',
                name: '整个治疗过程需要住院吗？需要多少时间？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '整个治疗流程（包括前期检查及术后休息）一般可于数小时内完成，患者通常无需留院观察，可于当日完成治疗后返回内地。',
                },
              },
            ],
          },
        ],
      }),
    },
  ],
}))

const CHAT_URL =
  'https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&lng=big5&p=https://hkeyecmer.com/&e=hkeyecmer.com[PDT]'

const meetArr = [
  {
    title: 'pages.medical_service.pdt.faq.q1',
    agree: 'pages.medical_service.pdt.faq.a1',
  },
  {
    title: 'pages.medical_service.pdt.faq.q2',
    agree: 'pages.medical_service.pdt.faq.a2',
  },
  {
    title: 'pages.medical_service.pdt.faq.q3',
    agree: 'pages.medical_service.pdt.faq.a3',
  },
  {
    title: 'pages.medical_service.pdt.faq.q4',
    agree: 'pages.medical_service.pdt.faq.a4',
  },
]

/** 预约路径：a=已备妥报告，b=未备妥报告 */
const activePath = ref<'a' | 'b'>('a')

const pathASteps = [
  {
    title: '提交眼科检查报告',
    desc: '提交已备妥的光学相干断层扫描(OCT)、眼底萤光血管造影(FFA)、靛青绿血管造影(ICG)三份眼科检查报告',
  },
  {
    title: '客人提供可以到诊的月份',
    desc: '客人向客服提供可到香港治疗的月份，预约安排需视乎医生评估结果及当值时间（约需7个工作天）',
    highlight: true,
  },
  {
    title: '医生评估病情',
    desc: '医生根据提交的检查报告，评估是否适合接受光动力治疗',
    branches: [
      { type: 'yes' as const, label: '✅ 适合', text: '确认适合接受光动力治疗后，客服会提供可到港治疗时间及日期' },
      { type: 'no' as const, label: '❌ 不适合', text: '客服将联络确认未能安排治疗' },
    ],
  },
  {
    title: '前往香港接受治疗',
    desc: '按客服提供的时间及日期前往香港希玛眼科中心接受光动力治疗(以文字信息确认通知为准)',
  },
]

const pathBSteps = [
  {
    title: '客人提供可以到诊的月份',
    desc: '客人向客服提供可到香港治疗的月份，预约安排需视乎医生评估结果及当值时间（约需7个工作天）',
    highlight: true,
  },
  {
    title: '客服确认预约',
    desc: '客服确认预约日期及时间（以文字信息确认通知为准）',
    highlight: true,
  },
  {
    title: '到港诊症及进行检查',
    desc: '前往香港希玛眼科中心进行诊症及眼科检查',
  },
  {
    title: '医生评估确认',
    desc: '医生评估病情，确认适合接受光动力治疗',
  },
  {
    title: '即日进行光动力治疗',
    desc: '确认适合后即日进行光动力治疗，同日完成',
  },
]

const tipsList = [
  {
    num: 1,
    html: '需携带的文件：<span class="mark">必须携带</span>护照及有效签证、既往眼科造影及相关检查报告（包括OCT、FFA、ICG造影报告、视力检查报告及肝功能检查单等）、宽檐帽和深色太阳镜（供术后避光使用）。',
  },
  {
    num: 2,
    html: '建议优先选择<span class="mark">香港希瑪眼科中心</span>，以便安排香港内部转诊，流程更顺畅，并由客服中心协助预约及跨境安排。',
  },
  {
    num: 3,
    html: '请确保<span class="mark">港澳通行证及签注有效</span>，可选择即日往返或在港停留1–2晚。',
  },
  {
    num: 4,
    html: '留意口岸通关时间，<span class="mark">预留足够过关时间</span>，特别是早诊安排。',
  },
  {
    num: 5,
    html: '建议由<span class="mark">亲友陪同来港就诊</span>，以便在行程中提供照应。',
  },
  {
    num: 6,
    html: '建议至少<span class="mark">提前一天预约跨境车辆</span>，确保行程顺畅。',
  },
  {
    num: 7,
    html: '支持<span class="mark">多种支付方式</span>，包括现金、银联信用卡、微信支付、内地支付宝、云闪付、FPS（转数快）、AlipayHK、八达通、PayMe、Visa 及 Mastercard。',
  },
]

const highlights = [
  {
    title: '成熟技术 · 丰富临床经验',
    desc: 'PDT 光动力治疗拥有<strong>10+年临床应用经验</strong>，技术成熟，适用于黄斑病变、老年黄斑变性及部分眼底血管等疾病。',
  },
  {
    title: '精准治疗 · 严谨医疗监管',
    desc: '根据患者眼底情况制定合适的治疗方案，针对病变组织进行治疗，尽量减少对正常组织的影响，全程由专业医疗团队评估及跟进。',
  },
  {
    title: '一站式诊疗 · 跨境更省心',
    desc: '从预约、检查、医生诊断到 PDT 治疗及后续安排，提供一站式跨境医疗服务，减少患者往返及沟通成本。',
  },
  {
    title: '治疗便捷 · 完善复诊安排',
    desc: 'PDT 治疗一般无需住院，患者可按医生评估安排治疗及复诊；治疗后亦可配合内地希玛眼科医院进行后续跟进，方便持续管理。',
  },
]

const travelOpen = ref(false)

const switchPath = (path: 'a' | 'b') => {
  if (activePath.value === path) return
  activePath.value = path
  nextTick(() => {
    animatePathSteps()
  })
}

const openApp = (e: Event) => {
  const link = e.currentTarget as HTMLAnchorElement
  const fallback = link.getAttribute('data-fallback')
  if (!fallback) return true
  const timer = setTimeout(() => {
    window.location.href = fallback
  }, 1500)
  const clear = () => {
    clearTimeout(timer)
    document.removeEventListener('visibilitychange', clear)
  }
  document.addEventListener('visibilitychange', clear)
  window.addEventListener('pagehide', clear, { once: true })
  return true
}

const animatePathSteps = () => {
  if (typeof window === 'undefined' || !(window as any).gsap) return
  const gsap = (window as any).gsap
  const panel = document.getElementById(`path-${activePath.value}`)
  if (!panel) return
  const steps = panel.querySelectorAll('.path-step')
  if (!steps.length) return
  gsap.fromTo(
    steps,
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: 'power2.out' },
  )
}

const initReveal = () => {
  if (typeof window === 'undefined') return
  const gsap = (window as any).gsap
  const ScrollTrigger = (window as any).ScrollTrigger
  const els = document.querySelectorAll('.pdt-reveal')
  if (!els.length) return

  if (gsap && ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger)
    els.forEach((el: Element) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        },
      )
    })
  } else {
    els.forEach((el: Element) => {
      ;(el as HTMLElement).style.opacity = '1'
      ;(el as HTMLElement).style.transform = 'none'
    })
  }
}

const initLazyVideo = () => {
  const videos = document.querySelectorAll<HTMLVideoElement>('video[data-src]')
  if (!videos.length || !('IntersectionObserver' in window)) return
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const v = entry.target as HTMLVideoElement
        const src = v.getAttribute('data-src')
        if (src) {
          v.src = src
          v.removeAttribute('data-src')
        }
        obs.unobserve(v)
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
  )
  videos.forEach((v) => obs.observe(v))
}

onMounted(() => {
  initReveal()
  initLazyVideo()
})
</script>

<template>
  <main id="main-content" lang="zh-CN" class="pdt-page">
    <!-- ===== Hero ===== -->
    <section class="banner" aria-labelledby="hero-title">
      <div class="wrapper">
        <p class="banner-label">Photodynamic Therapy</p>
        <div class="banner-title-row">
          <h1 id="hero-title">光动力治疗</h1>
          <span class="banner-badge">
            <span class="badge-dot" aria-hidden="true" />
            香港希玛眼科中心·全方位眼科治疗
          </span>
        </div>
        <p class="banner-desc">
          光动力疗法主要用于治疗
          <strong>老年黄斑点退化</strong>
          、
          <strong>中央浆液性黄斑水肿</strong>
          及特殊眼底血管疾病，是一项
          <strong>成熟且安全</strong>
          的精准治疗方案。
        </p>
        <div class="banner-targets">
          <div>
            <h2>适用对象</h2>
            <ul>
              <li>息肉状脉络膜血管病变（PCV）</li>
              <li>抗VEGF治疗反应欠佳的湿性老年性黄斑部病变（wAMD）</li>
              <li>特定类型的脉络膜新生血管（CNV）</li>
              <li>慢性中心性浆液性脉络膜视网膜病变 (CSCR)</li>
            </ul>
          </div>
          <div>
            <h2>可能不适用的对象</h2>
            <ul>
              <li>对维替泊芬成分过敏者</li>
              <li>重度肝功能不全患者（因药物需经由肝脏代谢）</li>
              <li>卟啉病（紫质症）患者</li>
            </ul>
          </div>
        </div>
        <a
          :href="CHAT_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary"
        >
          内地居民即时预约
        </a>
      </div>
    </section>

    <!-- ===== 治疗流程 ===== -->
    <section class="treatment wrapper" aria-labelledby="treatment-title">
      <div class="treatment-body">
        <div>
          <h2 id="treatment-title">光动力疗法（PDT）治疗流程</h2>
          <ol class="treatment-list">
            <li>
              <h3>静脉注射</h3>
              <p>
                建立静脉通路，依患者体表面积计算剂量（6 mg/m²），于10分钟内缓慢输注维替泊芬。
              </p>
            </li>
            <li>
              <h3>药物蓄积</h3>
              <p>待药物进入及蓄积于血管</p>
            </li>
            <li>
              <h3>雷射照射</h3>
              <p>
                经由裂隙灯配戴接触镜，使用波长689nm的雷射精准照射病变区域83秒（光斑涵盖完整病灶范围）。
              </p>
            </li>
            <li>
              <h3>术后护理/避光</h3>
              <p>
                患者于治疗后48小时内严格避免阳光直射及强光照射，保护皮肤与眼睛。
              </p>
            </li>
          </ol>
          <div class="treatment-note">
            <p>
              一般每3个月定期评估，依据眼底血管造影与光学断层扫描（OCT）结果决定是否需再次治疗。
            </p>
            <p>临床上常搭配玻璃体内注射抗VEGF药物进行联合治疗。</p>
          </div>
        </div>
        <picture class="treatment-img">
          <source
            srcset="https://statichk.cmermedical.com/newopd/services/macular/pdt-process-cover-v2.webp"
            type="image/webp"
          />
          <img
            src="https://statichk.cmermedical.com/newopd/services/macular/pdt-process-cover-v2.jpg"
            alt="光动力治疗示意图"
            width="720"
            height="627"
            loading="lazy"
          />
        </picture>
      </div>
      <a
        :href="CHAT_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary"
      >
        查询香港光动力疗法（PDT）收费
      </a>
    </section>

    <!-- ===== 预约流程 ===== -->
    <section class="appointment" id="process" aria-labelledby="process-title">
      <div class="wrapper">
        <div class="section-head">
          <h2 id="process-title" class="title-normal">
            内地居民预约
            <span class="mark">香港PDT</span>
            治疗流程
          </h2>
          <p class="section-desc">
            经线上联络香港希玛眼科中心客服，全程专业安排，轻松无忧。
          </p>
        </div>

        <div class="process-start pdt-reveal">
          <span aria-hidden="true">💬</span>
          <div>经线上联络 香港希玛眼科中心客服</div>
        </div>

        <div
          class="path-tabs"
          role="tablist"
          aria-label="预约路径选择"
        >
          <button
            type="button"
            role="tab"
            :aria-selected="activePath === 'a'"
            aria-controls="path-a"
            id="tab-a"
            class="path-tab"
            :class="{ active: activePath === 'a' }"
            @click="switchPath('a')"
          >
            <span aria-hidden="true">📋</span>
            <span class="path-tab-title">已备妥检查报告</span>
            <span class="path-tab-sub">光学相干断层扫描、眼底萤光血管造影、靛青绿血管造影</span>
          </button>
          <button
            type="button"
            role="tab"
            :aria-selected="activePath === 'b'"
            aria-controls="path-b"
            id="tab-b"
            class="path-tab"
            :class="{ active: activePath === 'b' }"
            @click="switchPath('b')"
          >
            <span aria-hidden="true">🔍</span>
            <span class="path-tab-title">未备妥检查报告</span>
            <span class="path-tab-sub">需到港检查</span>
          </button>
        </div>

        <!-- Path A -->
        <div
          v-show="activePath === 'a'"
          id="path-a"
          role="tabpanel"
          aria-labelledby="tab-a"
          class="path-panel"
        >
          <ol class="path-steps">
            <li
              v-for="(step, i) in pathASteps"
              :key="'a-' + i"
              class="path-step pdt-reveal"
            >
              <div class="path-step-num" aria-hidden="true">{{ i + 1 }}</div>
              <div class="path-step-card">
                <h3>{{ step.title }}</h3>
                <p>
                  <template v-if="step.highlight">
                    {{ step.desc.replace('（约需7个工作天）', '') }}
                    <span class="mark">（约需7个工作天）</span>
                  </template>
                  <template v-else>{{ step.desc }}</template>
                </p>
                <div v-if="step.branches" class="path-branches">
                  <div
                    v-for="(b, bi) in step.branches"
                    :key="bi"
                    class="path-branch"
                    :class="b.type === 'yes' ? 'path-branch--yes' : 'path-branch--no'"
                  >
                    <span class="path-branch-label">{{ b.label }}</span>
                    <span>{{ b.text }}</span>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>

        <!-- Path B -->
        <div
          v-show="activePath === 'b'"
          id="path-b"
          role="tabpanel"
          aria-labelledby="tab-b"
          class="path-panel"
        >
          <ol class="path-steps">
            <li
              v-for="(step, i) in pathBSteps"
              :key="'b-' + i"
              class="path-step pdt-reveal"
            >
              <div class="path-step-num" aria-hidden="true">{{ i + 1 }}</div>
              <div class="path-step-card">
                <h3>{{ step.title }}</h3>
                <p>
                  <template v-if="step.highlight && step.desc.includes('（约需7个工作天）')">
                    {{ step.desc.replace('（约需7个工作天）', '') }}
                    <span class="mark">（约需7个工作天）</span>
                  </template>
                  <template v-else-if="step.highlight && step.desc.includes('（以文字信息确认通知为准）')">
                    {{ step.desc.replace('（以文字信息确认通知为准）', '') }}
                    <span class="mark">（以文字信息确认通知为准）</span>
                  </template>
                  <template v-else>{{ step.desc }}</template>
                </p>
              </div>
            </li>
          </ol>
        </div>

        <!-- Convergence -->
        <div class="converge pdt-reveal">
          <div class="converge-line" aria-hidden="true" />
          <div class="converge-card">
            <div class="converge-icon" aria-hidden="true">✨</div>
            <h3>完成 PDT 光动力治疗</h3>
            <p>
              治疗一般即日完成，客人可
              <span class="converge-pill">即日返回内地</span>
            </p>
          </div>
          <div class="converge-arrow" aria-hidden="true">↓</div>
          <div class="converge-card converge-card--followup">
            <div class="converge-icon" aria-hidden="true">🔄</div>
            <h3>内地医院复诊及跟进</h3>
            <p>
              按医生指示到内地
              <span class="converge-pill">希玛林顺潮眼科医院</span>
              复诊
            </p>
          </div>
        </div>

        <div class="center mt-6">
          <a
            :href="CHAT_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-process"
          >
            立即预约就诊
          </a>
        </div>
      </div>
    </section>

    <!-- ===== 术后注意事项 ===== -->
    <section class="care wrapper" aria-labelledby="care-title">
      <h2 id="care-title" class="title-normal">
        术后
        <span class="mark">注意事项</span>
      </h2>
      <ol class="care-list">
        <li>术后48小时内须严格避免阳光及室内强光直射</li>
        <li>出门须戴宽檐帽、深色太阳镜、手套并穿长袖衣服</li>
        <li>48小时后可逐步恢复正常光照</li>
        <li>注射部位出现轻微疼痛属正常现象</li>
        <li>如发现视力下降，请务必及时前往医院就诊</li>
      </ol>
    </section>

    <!-- ===== 实用建议 ===== -->
    <section class="tips" id="tips" aria-labelledby="tips-title">
      <div class="wrapper">
        <h2 id="tips-title" class="title-normal">
          就诊
          <span class="mark">实用建议</span>
        </h2>
        <p class="section-desc">为您的香港就诊之旅做好充分准备。</p>

        <div class="tips-block">
          <h3 class="tips-block-title">
            <span aria-hidden="true">📋</span>
            实用建议
          </h3>
          <ol class="tips-grid">
            <li
              v-for="item in tipsList"
              :key="item.num"
              class="tip-item pdt-reveal"
              :class="{ 'tip-item--wide': item.num === 7 }"
            >
              <div class="tip-num" aria-hidden="true">{{ item.num }}</div>
              <p v-html="item.html" />
            </li>
          </ol>
        </div>

        <div class="travel-block">
          <h3 class="tips-block-title">
            <span aria-hidden="true">🚗</span>
            来港交通路线
          </h3>

          <div class="travel-collapse" :class="{ active: travelOpen }">
            <button
              type="button"
              class="travel-trigger"
              :aria-expanded="travelOpen"
              aria-controls="travel-body"
              @click="travelOpen = !travelOpen"
            >
              <div class="travel-trigger-main">
                <span class="travel-icon" aria-hidden="true">🚗</span>
                <div>
                  <div class="travel-trigger-title">来港交通</div>
                  <small>高德、滴滴，直接到诊所附近</small>
                </div>
              </div>
              <span class="travel-toggle" aria-hidden="true">▼</span>
            </button>
            <div id="travel-body" class="travel-body">
              <p class="travel-hint">香港地区支持以下网约车平台</p>
              <div class="travel-apps">
                <a
                  href="https://ditu.amap.com/dir?type=car&from%5Blnglat%5D=114.170406%2C22.301135&from%5Bname%5D=%E8%A5%BF%E4%B9%9D%E9%BE%8D%E7%AB%99(%E9%AB%98%E9%90%B5%E7%AB%99)&to%5Blnglat%5D=114.1582%2C22.2814&to%5Bname%5D=%E7%BD%AE%E5%9C%B0%E5%BB%A3%E5%A0%B4&src=pdt-therapy-hk&innersrc=uriapi&policy=1"
                  data-fallback="https://uri.amap.com/navigation?to=114.1582,22.2814,中環置地广場&mode=car"
                  class="travel-app"
                  @click="openApp"
                >
                  <!-- prettier-ignore -->
                  <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="40" height="40" aria-hidden="true"><path d="M389.12 629.76V0h-230.4C71.68 0 0 71.68 0 158.72v469.333h389.12z" fill="#c4fa9d"/><path d="M1024 633.173H500.053V3.413H865.28c87.04 0 158.72 71.68 158.72 158.72zM389.12 1024h-230.4C71.68 1024 0 952.32 0 865.28V723.627h389.12z" fill="#ebf2f2"/><path d="M1024 863.573V721.92H498.347V1024h365.226C952.32 1024 1024 952.32 1024 863.573" fill="#83e5ff"/><path d="m409.6 725.333 315.733 179.2L880.64 124.587zM71.68 534.187s256 141.653 256 145.066c3.413 3.414 551.253-552.96 551.253-552.96z" fill="#0284fe"/><path d="m411.307 727.04 467.626-600.747-549.546 552.96 58.026 175.787z" fill="#0259f2"/><path d="m409.6 727.04-22.187 128 78.507-97.28z" fill="#0259f2"/></svg>
                  <span>高德打车</span>
                </a>
                <a
                  href="diditaxi://?action=sendorder&dlat=22.2814&dlon=114.1582&dname=中環置地广場"
                  data-fallback="https://webapp.didi.cn/"
                  class="travel-app"
                  @click="openApp"
                >
                  <!-- prettier-ignore -->
                  <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="40" height="40" aria-hidden="true"><path d="M102.4 0h819.2C977.92 0 1024 46.08 1024 102.4v819.2c0 56.32-46.08 102.4-102.4 102.4H102.4C46.08 1024 0 977.92 0 921.6V102.4C0 46.08 46.08 0 102.4 0" fill="#fff"/><path d="M684.8 394.24v81.92c-1.28 93.44-74.24 166.4-165.12 166.4s-163.84-72.96-165.12-166.4v-81.92zV294.4H279.04c-12.8 1.28-23.04 11.52-23.04 24.32V480c0 17.92 1.28 34.56 5.12 52.48 3.84 16.64 7.68 33.28 16.64 48.64 6.4 16.64 15.36 32 24.32 44.8 10.24 12.8 19.2 26.88 30.72 38.4 6.4 6.4 15.36 12.8 21.76 20.48 5.12 5.12 11.52 7.68 16.64 12.8 12.8 10.24 29.44 17.92 44.8 24.32q24.96 9.6 49.92 15.36c24.96 5.76 34.56 5.12 52.48 5.12s35.84-1.28 52.48-5.12 33.28-7.68 49.92-15.36c16.64-6.4 30.72-15.36 44.8-24.32 6.4-5.12 11.52-7.68 16.64-12.8 6.4-6.4 15.36-12.8 21.76-20.48 11.52-11.52 23.04-24.32 30.72-38.4 10.24-12.8 17.92-28.16 24.32-44.8s11.52-33.28 16.64-48.64c3.84-16.64 5.12-34.56 5.12-52.48v-85.76z" fill="#f50"/></svg>
                  <span>滴滴出行</span>
                </a>
              </div>
              <ul class="travel-info">
                <li>
                  <span>📍 到这下车</span>
                  中环毕打街中建大厦
                </li>
                <li>
                  <span>💳 付款</span>
                  支付宝 · 微信
                </li>
              </ul>
              <div class="mtr-block">
                <h4>
                  <span aria-hidden="true">🚇</span>
                  港铁路线
                </h4>
                <p>
                  客人前往中建大厦可搭乘港铁至中环站，并从G出口出站。G出口直通毕打街与皇后大道中交界的商场通道，出站后步行约1分钟即可抵达大厦。您可使用
                  <a
                    href="https://www.mtr.com.hk/ch/customer/services/system_map.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    港铁网站
                    <span aria-hidden="true">↗</span>
                  </a>
                  查询最新的列车与车站资讯。
                </p>
                <a
                  href="https://www.mtr.com.hk/archive/ch/services/routemap.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="点击查看港铁路线图（PDF）"
                  class="mtr-map"
                >
                  <img
                    src="https://www.mtr.com.hk/ch/customer/images/services/MTR_routemap_510.jpg"
                    alt="港铁服务路线图 - 中环站前往中建大厦"
                    loading="lazy"
                    width="510"
                    height="auto"
                  />
                  <span>
                    点击查看完整路线图（PDF）
                    <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div class="walk-video pdt-reveal">
            <p>置地广场站 G 口出发，步行至香港希玛眼科诊所</p>
            <video
              class="walk-video-el"
              data-src="https://static.cmermedical.com.hk/smile/uploads/2026/07/27/y6y0ro4w_ctg.webm"
              poster="https://statichk.cmermedical.com/newopd/services/macular/pdt-address-video.webp"
              controls
              playsinline
              preload="none"
              title="从置地广场站G口步行至香港希玛眼科诊所路线影片"
              aria-label="诊所步行路线示范影片"
            />
            <p class="walk-hint">如有疑问，请通过微信或客服电话联系我们</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 为什么选择 ===== -->
    <section class="why" id="highlights" aria-labelledby="highlights-title">
      <div class="wrapper">
        <div class="why-badge">★ 突出重点</div>
        <h2 id="highlights-title" class="title-normal">
          为什么选择
          <span class="mark mark--green">香港希玛眼科中心</span>
          ？
        </h2>
        <div class="why-intro">
          <p>10+年医疗实力 × 成熟PDT技术 × 全程跨境服务</p>
          <p>四大核心优势，为内地患者提供专业、便捷的跨境眼科治疗服务。</p>
        </div>
        <ul class="highlight-grid">
          <li
            v-for="(item, i) in highlights"
            :key="i"
            class="highlight-card pdt-reveal"
          >
            <h3>{{ item.title }}</h3>
            <p v-html="item.desc" />
          </li>
        </ul>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="follow" id="cta" aria-labelledby="cta-title">
      <div class="wrapper follow-inner">
        <div class="cta-box pdt-reveal">
          <h2 id="cta-title">
            把握治疗
            <span class="cta-pill">黄金期</span>
            ，及早守护视力
          </h2>
          <p>立即点击下方链接预约光动力治疗，守护您的视力健康</p>
          <div class="cta-actions">
            <a
              :href="CHAT_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-cta"
            >
              内地居民即时预约
            </a>
            <NuxtLink to="/medical-service/maculopathy" class="btn-ghost">
              了解更多黄斑病变
            </NuxtLink>
          </div>
        </div>
        <div class="wechat-qr">
          <p>关注我们微信号及预约</p>
          <img
            src="https://statichk.cmermedical.com/newopd/common/wechat-pdt.webp"
            alt="香港希瑪眼科中心微信二维码"
            width="300"
            height="300"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <!-- ===== FAQ ===== -->
    <section class="question" id="faq" aria-labelledby="faq-title">
      <div class="wrapper">
        <h2 id="faq-title" class="title-normal text-center">
          常见问题
          <span class="mark">解答</span>
        </h2>
        <p class="section-desc text-center mb-5 lg:mb-8">如果您有其他疑问，欢迎随时联系我们的客服团队。</p>
        <PageCollapse
          :answer="meetArr"
          :downarr="'pdt'"
          :style="{ '--subassembly-color': '#1b407a' }"
        />
        <div class="wechat-qr wechat-qr--mobile">
          <p>关注我们微信号及预约</p>
          <img
            src="https://statichk.cmermedical.com/newopd/common/wechat-pdt.webp"
            alt="香港希瑪眼科中心微信二维码"
            width="300"
            height="300"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.pdt-page {
  font-family: 'Noto Sans SC', 'Noto Sans CJK SC', 'Source Han Sans SC', 'PingFang SC',
    'Microsoft YaHei', 'Hiragino Sans GB', sans-serif;
  /* 避免浏览器用繁体/系统字体“补字”造成字形混杂 */
  font-synthesis: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ===== 通用布局 ===== */
.wrapper {
  padding-left: 12px;
  padding-right: 12px;
  margin-left: auto;
  margin-right: auto;
  max-width: 72rem;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.section-head {
  text-align: center;
  margin-bottom: 1.5rem;
}
.section-desc {
  font-size: 1.1rem;
  color: #64748b;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.9;
}
.title-normal {
  color: #1e293b;
  font-weight: 800;
  font-size: clamp(1.5rem, 3.5vw, 2.5rem);
  line-height: 1.3;
  margin-bottom: 0.75rem;
}
.mark {
  background: linear-gradient(120deg, #e8f0fa, #dce8f8);
  padding: 2px 12px;
  border-radius: 999px;
  font-weight: 700;
  color: #1b407a;
  white-space: nowrap;
}
.mark--green {
  background: linear-gradient(120deg, #e8f5ee, #f1f8f4);
  color: #2e8b57;
}
.pdt-reveal {
  opacity: 0;
  will-change: opacity, transform;
}

/* ===== 按钮 ===== */
@keyframes btn-float {
  0%,
  100% {
    transform: translateY(0) scale(1);
    box-shadow: 0 6px 24px rgba(27, 64, 122, 0.22);
  }
  50% {
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 14px 44px rgba(27, 64, 122, 0.35);
  }
}
@keyframes btn-shine {
  0%,
  100% {
    transform: translateX(-100%);
  }
  45%,
  100% {
    transform: translateX(100%);
  }
}
@keyframes btn-ring {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.55;
  }
  50% {
    transform: scale(1.12);
    opacity: 0;
  }
}
@keyframes cta-ring {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.15);
    opacity: 0;
  }
}
.btn-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #1b407a;
  color: #fff;
  font-size: 1.05rem;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  min-height: 48px;
  overflow: visible;
  z-index: 1;
  animation: btn-float 3s ease-in-out infinite;
  transition:
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s;
  text-decoration: none;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 9999px;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.15), transparent);
    animation: btn-shine 3s ease-in-out infinite;
    pointer-events: none;
    z-index: -1;
  }
  &::after {
    content: '';
    position: absolute;
    inset: -6px;
    border-radius: 9999px;
    border: 2px solid rgba(27, 64, 122, 0.25);
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }
  &:hover {
    animation: none;
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 12px 40px rgba(27, 64, 122, 0.35);
    color: #fff;
    &::after {
      opacity: 1;
      animation: btn-ring 2s ease-in-out infinite;
    }
  }
}
.btn-process {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #2e8b57, #3cb371);
  color: #fff;
  font-size: 1.05rem;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  min-height: 48px;
  animation: btn-float 3s ease-in-out infinite;
  box-shadow: 0 6px 24px rgba(46, 139, 87, 0.22);
  text-decoration: none;
  transition:
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s;
  &:hover {
    animation: none;
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 12px 40px rgba(46, 139, 87, 0.35);
    color: #fff;
  }
}
.btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  color: #1b407a;
  font-size: 1.1rem;
  font-weight: 800;
  padding: 16px 36px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  position: relative;
  min-height: 52px;
  box-shadow: 0 6px 28px rgba(0, 0, 0, 0.12);
  text-decoration: none;
  transition:
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s;
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.3);
    animation: cta-ring 2s ease-out infinite;
    pointer-events: none;
  }
  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 14px 44px rgba(0, 0, 0, 0.18);
    color: #1b407a;
  }
}
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  font-size: 1.05rem;
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 9999px;
  cursor: pointer;
  min-height: 52px;
  text-decoration: none;
  transition: all 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.4);
    color: #fff;
  }
}
@media (min-width: 768px) {
  .btn-primary,
  .btn-process {
    padding: 20px 44px;
    min-height: 60px;
  }
  .btn-cta,
  .btn-ghost {
    padding: 20px 48px;
    min-height: 64px;
  }
}

/* ===== Hero ===== */
.banner {
  background: linear-gradient(180deg, #fff 0%, #f2f5fb 60%, #f0f5fc 100%);
  padding: 2.5rem 0 1.25rem;
}
.banner-label {
  font-size: 0.875rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 0.75rem;
}
.banner-title-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 900;
    color: #1b407a;
    line-height: 1.15;
    letter-spacing: -0.02em;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 6px;
      left: 0;
      right: 0;
      height: 10px;
      background: rgba(27, 64, 122, 0.12);
      border-radius: 6px;
      z-index: -1;
    }
  }
}
.banner-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  padding: 6px 16px;
  border-radius: 9999px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #1b407a;
  box-shadow: 0 2px 12px rgba(27, 64, 122, 0.04);
}
.badge-dot {
  width: 10px;
  height: 10px;
  background: #e8734a;
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
}
@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.8);
  }
}
.banner-desc {
  font-size: clamp(1.05rem, 1.8vw, 1.2rem);
  color: #3d4d63;
  line-height: 2;
  max-width: 620px;
  margin-bottom: 1.25rem;
}
.banner-targets {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: #3d4d63;
  h2 {
    font-size: 1.15rem;
    font-weight: 700;
    color: #1b407a;
    margin-bottom: 0.5rem;
  }
  ul {
    list-style: disc;
    padding-left: 1.25rem;
    line-height: 1.8;
  }
}
@media (min-width: 768px) {
  .banner {
    padding: 6rem 0 2.5rem;
  }
  .banner-targets {
    flex-direction: row;
    gap: 2rem;
    font-size: 1.1rem;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
    }
    > div {
      width: 50%;
    }
  }
}

/* ===== 治疗流程 ===== */
.treatment {
  padding: 20px 12px;
}
.treatment-body {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1b407a;
    margin-bottom: 1rem;
  }
}
.treatment-list {
  list-style: none;
  counter-reset: treat;
  margin-bottom: 1rem;
  li {
    counter-increment: treat;
    margin-bottom: 1rem;
  }
  h3 {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: #1b407a;
    margin-bottom: 0.35rem;
    &::before {
      content: counter(treat);
      background: #1b407a;
      color: #fff;
      margin-right: 8px;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.85rem;
      flex-shrink: 0;
    }
  }
  p {
    color: #3d4d63;
    line-height: 1.8;
    font-size: 0.95rem;
  }
}
.treatment-note {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.8;
}
.treatment-img {
  display: block;
  width: 100%;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
  }
}
@media (min-width: 1024px) {
  .treatment-body {
    flex-direction: row;
    gap: 2rem;
    h2 {
      font-size: 1.75rem;
    }
    > div {
      flex: 1;
    }
  }
  .treatment-list {
    h3 {
      font-size: 1.35rem;
      &::before {
        width: 32px;
        height: 32px;
        margin-right: 12px;
      }
    }
    p {
      font-size: 1.05rem;
    }
  }
  .treatment-img {
    width: 40%;
    flex-shrink: 0;
  }
  .treatment-note {
    font-size: 1rem;
  }
}

/* ===== 预约流程 ===== */
.appointment {
  background: linear-gradient(to bottom, #fafbfd 0%, #fff 100%);
  padding: 1.5rem 0 2.5rem;
}
.process-start {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  max-width: 620px;
  margin: 0 auto 1.5rem;
  padding: 12px 20px;
  background: linear-gradient(135deg, #1b407a, #2a5ba8);
  border-radius: 20px;
  color: #fff;
  font-weight: 700;
  font-size: 1.05rem;
  box-shadow: 0 8px 32px rgba(27, 64, 122, 0.06);
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -24px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 24px;
    background: #5a9fe0;
  }
}
.path-tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  max-width: 48rem;
  margin: 0 auto 1.5rem;
  background: #e2e8f0;
  border-radius: 16px;
  padding: 8px;
}
.path-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px 8px;
  border-radius: 12px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: center;
  min-height: 110px;
  justify-content: center;
  transition: all 0.3s;
  font-family: inherit;
  color: #1e293b;
  &.active {
    background: linear-gradient(135deg, #1b407a, #2a5ba8);
    color: #fff;
    box-shadow: 0 8px 32px rgba(27, 64, 122, 0.12);
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid #1b407a;
    }
  }
}
.path-tab-title {
  font-size: 1rem;
  font-weight: 800;
}
.path-tab-sub {
  font-size: 0.75rem;
  opacity: 0.85;
  line-height: 1.4;
}
.path-panel {
  animation: fadeIn 0.4s ease;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.path-steps {
  list-style: none;
  max-width: 760px;
  margin: 0 auto;
  position: relative;
  padding-left: 4px;
  &::before {
    content: '';
    position: absolute;
    left: 23px;
    top: 24px;
    bottom: 24px;
    width: 2px;
    background: linear-gradient(to bottom, #5a9fe0, #eaeff8);
  }
}
.path-step {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  align-items: flex-start;
  &:last-child {
    margin-bottom: 0;
  }
}
.path-step-num {
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1b407a, #2a5ba8);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 900;
  box-shadow: 0 4px 16px rgba(27, 64, 122, 0.2);
  z-index: 2;
  position: relative;
}
.path-step-card {
  flex: 1;
  background: #fff;
  border-radius: 16px;
  padding: 14px 16px;
  border: 1.5px solid rgba(27, 64, 122, 0.06);
  box-shadow: 0 2px 12px rgba(27, 64, 122, 0.04);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  h3 {
    font-size: 1.05rem;
    font-weight: 800;
    color: #1e293b;
    margin-bottom: 0.35rem;
    line-height: 1.4;
  }
  p {
    font-size: 0.95rem;
    color: #3d4d63;
    line-height: 1.85;
  }
  &:hover {
    transform: translateX(4px);
    box-shadow: 0 8px 32px rgba(27, 64, 122, 0.06);
  }
}
.path-branches {
  display: grid;
  gap: 8px;
  margin-top: 10px;
}
.path-branch {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #3d4d63;
}
.path-branch--yes {
  background: #e8f5ee;
}
.path-branch--no {
  background: #fff0eb;
}
.path-branch-label {
  font-weight: 700;
  white-space: nowrap;
}
.path-branch--yes .path-branch-label {
  color: #2e8b57;
}
.path-branch--no .path-branch-label {
  color: #e8734a;
}
.converge {
  max-width: 48rem;
  margin: 1.5rem auto 0;
  text-align: center;
}
.converge-line {
  width: 2px;
  height: 16px;
  background: linear-gradient(to bottom, #5a9fe0, #3cb371);
  margin: 0 auto;
}
.converge-card {
  background: linear-gradient(135deg, #2e8b57, #3cb371);
  border-radius: 20px;
  padding: 20px 24px;
  color: #fff;
  box-shadow: 0 8px 32px rgba(27, 64, 122, 0.06);
  position: relative;
  overflow: hidden;
  margin-bottom: 8px;
  h3 {
    font-size: 1.1rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.95rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.9);
  }
}
.converge-card--followup {
  background: linear-gradient(135deg, #1b407a, #2a5ba8);
}
.converge-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.converge-pill {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-weight: 700;
  padding: 2px 12px;
  border-radius: 9999px;
}
.converge-arrow {
  font-size: 1.5rem;
  color: #94a3b8;
  margin: 4px 0;
}
@media (min-width: 768px) {
  .path-steps::before {
    left: 27px;
  }
  .path-step-num {
    width: 48px;
    height: 48px;
    min-width: 48px;
    font-size: 1.3rem;
  }
  .path-step-card {
    padding: 20px 24px;
  }
  .converge-card {
    padding: 28px 32px;
  }
}

/* ===== 术后 ===== */
.care {
  padding-bottom: 20px;
  text-align: center;
}
.care-list {
  list-style: decimal;
  list-style-position: inside;
  text-align: justify;
  width: fit-content;
  margin: 1rem auto 0;
  font-size: 1rem;
  line-height: 2;
  color: #3d4d63;
}
@media (min-width: 1024px) {
  .care-list {
    font-size: 1.25rem;
  }
}

/* ===== 实用建议 ===== */
.tips {
  background: linear-gradient(to bottom, #f0f5fc 0%, #fff 100%);
  padding: 1.5rem 0 2.5rem;
}
.tips-block {
  margin-top: 1.25rem;
}
.tips-block-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1rem;
}
.tips-grid {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}
.tip-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #fff;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1.5px solid rgba(27, 64, 122, 0.06);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  p {
    flex: 1;
    font-size: 0.95rem;
    color: #3d4d63;
    line-height: 1.9;
  }
  &:hover {
    transform: translateX(4px);
    box-shadow: 0 2px 12px rgba(27, 64, 122, 0.04);
  }
}
.tip-num {
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e8734a, #f09060);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.95rem;
  box-shadow: 0 4px 12px rgba(232, 115, 74, 0.25);
}
@media (min-width: 768px) {
  .tips-grid {
    grid-template-columns: 1fr 1fr;
  }
  .tip-item--wide {
    grid-column: span 2;
  }
}

/* ===== 交通 ===== */
.travel-block {
  margin-top: 2rem;
}
.travel-collapse {
  border-radius: 20px;
  overflow: hidden;
  border: 1.5px solid rgba(27, 64, 122, 0.08);
  background: #fff;
  box-shadow: 0 2px 12px rgba(27, 64, 122, 0.04);
}
.travel-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
  gap: 12px;
  min-height: 64px;
  transition: background 0.2s;
  &:hover {
    background: #f2f5fb;
  }
}
.travel-trigger-main {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}
.travel-icon {
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e8f5ee, #f1f8f4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}
.travel-trigger-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.4;
}
.travel-trigger small {
  display: block;
  font-size: 0.82rem;
  font-weight: 400;
  color: #64748b;
  margin-top: 2px;
}
.travel-toggle {
  width: 36px;
  height: 36px;
  min-width: 36px;
  border-radius: 50%;
  background: #eaeff8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1b407a;
  font-size: 0.8rem;
  transition:
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
    background 0.2s,
    color 0.2s;
}
.travel-collapse.active .travel-toggle {
  transform: rotate(180deg);
  background: #1b407a;
  color: #fff;
}
.travel-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0 16px;
}
.travel-collapse.active .travel-body {
  max-height: 1600px;
  padding-bottom: 20px;
}
.travel-hint {
  font-size: 0.875rem;
  color: #64748b;
  text-align: center;
  margin-bottom: 12px;
}
.travel-apps {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 12px;
}
.travel-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 16px;
  border-radius: 16px;
  background: #f2f5fb;
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  span {
    font-size: 1rem;
    font-weight: 800;
    color: #1e293b;
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 12px rgba(27, 64, 122, 0.04);
  }
}
.travel-info {
  list-style: none;
  li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    background: #f2f5fb;
    border-radius: 12px;
    margin-bottom: 8px;
    font-size: 0.95rem;
    color: #3d4d63;
    span {
      font-weight: 700;
      color: #1e293b;
      white-space: nowrap;
    }
  }
}
.mtr-block {
  margin-top: 1rem;
  h4 {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.95rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 8px;
  }
  p {
    font-size: 0.9rem;
    color: #3d4d63;
    line-height: 1.85;
    padding: 12px 16px;
    background: #f2f5fb;
    border-radius: 12px;
    margin-bottom: 12px;
    a {
      color: #1b407a;
      font-weight: 700;
      text-decoration: none;
      border-bottom: 1px solid currentColor;
      &:hover {
        color: #0f2d57;
      }
    }
  }
}
.mtr-map {
  display: block;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  max-width: 36rem;
  margin: 0 auto;
  box-shadow: 0 2px 12px rgba(27, 64, 122, 0.04);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  img {
    display: block;
    width: 100%;
    height: auto;
    min-height: 120px;
    object-fit: cover;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px;
    background: linear-gradient(to right, #1b407a, #2a5ba8);
    color: #fff;
    font-size: 0.875rem;
    font-weight: 700;
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(27, 64, 122, 0.1);
  }
}
.walk-video {
  margin-top: 1.25rem;
  background: linear-gradient(135deg, #f0f5fc, #f2f5fb);
  border-radius: 16px;
  padding: 16px;
  text-align: center;
  p {
    font-size: 0.95rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 12px;
  }
}
.walk-video-el {
  width: 100%;
  max-width: 36rem;
  margin: 0 auto;
  display: block;
  background: #000;
  border-radius: 12px;
  aspect-ratio: 16 / 9;
}
.walk-hint {
  font-size: 0.875rem !important;
  font-weight: 400 !important;
  color: #64748b !important;
  margin-top: 12px !important;
  margin-bottom: 0 !important;
}
@media (min-width: 768px) {
  .travel-app {
    flex-direction: row;
  }
}

/* ===== 为什么选择 ===== */
.why {
  background: linear-gradient(to bottom, #f0f9f4 0%, #fff 100%);
  padding: 1.5rem 0 2.5rem;
}
.why-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #2e8b57;
  background: #e8f5ee;
  padding: 8px 18px;
  border-radius: 9999px;
  margin-bottom: 0.75rem;
}
.why-intro {
  font-size: 1.05rem;
  color: #64748b;
  max-width: 720px;
  line-height: 1.9;
  margin-bottom: 1.25rem;
}
.highlight-grid {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}
.highlight-card {
  background: #fff;
  border-radius: 16px;
  padding: 18px 20px;
  border: 1.5px solid rgba(46, 139, 87, 0.08);
  text-align: center;
  position: relative;
  overflow: hidden;
  transition:
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.4s;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2e8b57, #3cb371);
    opacity: 0;
    transition: opacity 0.4s;
  }
  h3 {
    font-size: 1.1rem;
    font-weight: 800;
    color: #1e293b;
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }
  p {
    font-size: 0.92rem;
    color: #3d4d63;
    line-height: 1.85;
  }
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 32px rgba(27, 64, 122, 0.06);
    &::before {
      opacity: 1;
    }
  }
}
@media (min-width: 768px) {
  .highlight-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }
}

/* ===== CTA ===== */
.follow {
  background: linear-gradient(to bottom, #fff 0%, #f0f5fc 100%);
  padding: 1.5rem 0 2.5rem;
}
.follow-inner {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}
.cta-box {
  background: linear-gradient(135deg, #1b407a 0%, #0f2b52 60%, #0a1e3d 100%);
  border-radius: 28px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 48rem;
  h2 {
    font-size: clamp(1.5rem, 3.5vw, 2.25rem);
    font-weight: 800;
    color: #fff;
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  p {
    font-size: 1.05rem;
    color: rgba(255, 255, 255, 0.78);
    margin-bottom: 1.75rem;
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.9;
  }
}
.cta-pill {
  display: inline-block;
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
  font-weight: 700;
  padding: 2px 12px;
  border-radius: 9999px;
}
.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}
.wechat-qr {
  display: none;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.9;
  img {
    width: 300px;
    max-width: 75vw;
    aspect-ratio: 1;
    margin-top: 0.5rem;
  }
}
.wechat-qr--mobile {
  display: flex;
  margin-top: 2rem;
}
@media (min-width: 1024px) {
  .follow-inner {
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
  }
  .wechat-qr {
    display: flex;
  }
  .wechat-qr--mobile {
    display: none;
  }
  .cta-box {
    padding: 4rem 3rem;
  }
}

/* ===== FAQ ===== */
.question {
  background: linear-gradient(to bottom, #fafbfd 0%, #fff 100%);
  padding: 1.5rem 0 6rem;
}
@media (min-width: 1024px) {
  .question {
    padding-bottom: 8rem;
  }
}
</style>
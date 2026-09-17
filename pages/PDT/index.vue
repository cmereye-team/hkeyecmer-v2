<!--
 * @Author: 谭洁莹
 * @Date: 2026-09-15 13:54:24
 * @LastEditTime: 2026-09-17 11:24:09
 * @FilePath: /pages/PDT/index.vue
 * @Description: PDT光动力疗法内地推广落地页
-->
<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: t('tdk.pdt.title'),
  meta() {
    return [
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
    ]
  },
}))
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
</script>
<template>
  <main>
    <section class="banner mt-18 pt-10 pb-5 lg:pt-25 lg:pb-10">
      <div class="wrapper">
        <p>Photodynamic Therapy</p>
        <div class="center">
          <h1>光动力治疗</h1>
          <span>香港希玛眼科中心·全方位眼科治疗</span>
        </div>
        <p>
          光动力疗法主要用于治疗<strong>老年黄斑点退化</strong>、<strong>中央浆液性黄斑水肿</strong>及特殊眼底血管疾病，是一项<strong>成熟且安全</strong>的精准治疗方案。
        </p>
        <div class="flex">
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
          href="https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&lng=big5&p=https://hkeyecmer.com/&e=hkeyecmer.com[PDT]"
          target="_blank"
          rel="noopener noreferrer"
          class="button-normal"
        >
          内地居民即时预约
        </a>
      </div>
    </section>
    <section class="treatment wrapper">
      <div class="flex flex-col lg:flex-row">
        <div>
          <h2>光动力疗法（PDT）治疗流程</h2>
          <ol>
            <li>
              <h3>静脉注射</h3>
              <!-- prettier-ignore -->
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
          <div class="text-sm lg:text-base text-text-desc">
            <p>
              一般每3个月定期评估，依据眼底血管造影与光学断层扫描（OCT）结果决定是否需再次治疗。
            </p>
            <p>临床上常搭配玻璃体内注射抗VEGF药物进行联合治疗。</p>
          </div>
        </div>
        <picture>
          <source
            srcset="
              https://statichk.cmermedical.com/newopd/services/macular/pdt-process-cover-v2.webp
            "
            type="image/webp"
          />
          <img
            src="https://statichk.cmermedical.com/newopd/services/macular/pdt-process-cover-v2.jpg"
            alt="光动力治疗示意图"
          />
        </picture>
      </div>
      <a
        href="https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&lng=big5&p=https://hkeyecmer.com/&e=hkeyecmer.com[PDT]"
        target="_blank"
        rel="noopener noreferrer"
        class="button-normal"
      >
        查询香港光动力疗法（PDT）收费
      </a>
    </section>
    <section class="appointment">
      <div class="wrapper">
        <h2 class="title-normal">内地居民预约<span class="mark">香港PDT</span>治疗流程</h2>
        <p>经线上联络香港希玛眼科中心客服，全程专业安排，轻松无忧。</p>
      </div>
    </section>
    <section class="care wrapper">
      <h2>术后<span class="mark">注意事项</span></h2>
      <ol
        class="text-default lg:text-xl text-justify list-decimal list-inside w-fit mx-auto"
      >
        <li>术后48小时内须严格避免阳光及室内强光直射</li>
        <li>出门须戴宽檐帽、深色太阳镜、手套并穿长袖衣服</li>
        <li>48小时后可逐步恢复正常光照</li>
        <li>注射部位出现轻微疼痛属正常现象</li>
        <li>如发现视力下降，请务必及时前往医院就诊</li>
      </ol>
    </section>
    <section class="tips">
      <div class="wrapper">
        <h2 class="title-normal">就诊<span class="mark">实用建议</span></h2>
        <p>为您的香港就诊之旅做好充分准备。</p>
        <div>
          <div>
            <span aria-hidden="true">📋</span>
            <h3>实用建议</h3>
          </div>
          <ol>
            <li>
              需携带的文件：<span>必须携带</span>护照及有效签证、既往眼科造影及相关检查报告（包括OCT、FFA、ICG造影报告、视力检查报告及肝功能检查单等）、宽檐帽和深色太阳镜（供术后避光使用）。
            </li>
            <li>
              建议优先选择<span>香港希瑪眼科中心</span>，以便安排香港内部转诊，流程更顺畅，并由客服中心协助预约及跨境安排。
            </li>
            <li>
              请确保<span>港澳通行证及签注有效</span>，可选择即日往返或在港停留1–2晚。
            </li>
            <li>
              留意口岸通关时间，<span>预留足够过关时间</span>，特别是早诊安排。
            </li>
            <li>建议由<span>亲友陪同来港就诊</span>，以便在行程中提供照应。</li>
            <li>建议至少<span>提前一天预约跨境车辆</span>，确保行程顺畅。</li>
            <li>
              支持<span>多种支付方式</span>，包括现金、银联信用卡、微信支付、内地支付宝、云闪付、FPS（转数快）、AlipayHK、八达通、PayMe、Visa
              及 Mastercard。
            </li>
          </ol>
        </div>
        <div>
          <div>
            <span>🚗</span>
            <h3>来港交通路线</h3>
          </div>
          <details>
            <summary>
              <div>
                <span>🚗</span>
                <h4>来港交通</h4>
              </div>
              <small>高德、滴滴，直接到诊所附近</small>
            </summary>
            <div>
              <p>香港地区支持以下网约车平台</p>
              <div class="flex">
                <a
                  href="https://ditu.amap.com/dir?type=car&from%5Blnglat%5D=114.170406%2C22.301135&from%5Bname%5D=%E8%A5%BF%E4%B9%9D%E9%BE%8D%E7%AB%99(%E9%AB%98%E9%90%B5%E7%AB%99)&to%5Blnglat%5D=114.1582%2C22.2814&to%5Bname%5D=%E7%BD%AE%E5%9C%B0%E5%BB%A3%E5%A0%B4&src=pdt-therapy-hk&innersrc=uriapi&policy=1"
                  data-fallback="https://uri.amap.com/navigation?to=114.1582,22.2814,中環置地广場&mode=car"
                >
                  <!-- prettier-ignore -->
                  <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M389.12 629.76V0h-230.4C71.68 0 0 71.68 0 158.72v469.333h389.12z" fill="#c4fa9d"/><path d="M1024 633.173H500.053V3.413H865.28c87.04 0 158.72 71.68 158.72 158.72zM389.12 1024h-230.4C71.68 1024 0 952.32 0 865.28V723.627h389.12z" fill="#ebf2f2"/><path d="M1024 863.573V721.92H498.347V1024h365.226C952.32 1024 1024 952.32 1024 863.573" fill="#83e5ff"/><path d="m409.6 725.333 315.733 179.2L880.64 124.587zM71.68 534.187s256 141.653 256 145.066c3.413 3.414 551.253-552.96 551.253-552.96z" fill="#0284fe"/><path d="m411.307 727.04 467.626-600.747-549.546 552.96 58.026 175.787z" fill="#0259f2"/><path d="m409.6 727.04-22.187 128 78.507-97.28z" fill="#0259f2"/></svg>
                  <span>高德打车</span>
                </a>
                <a
                  href="diditaxi://?action=sendorder&dlat=22.2814&dlon=114.1582&dname=中環置地广場"
                  data-fallback="https://webapp.didi.cn/"
                >
                  <!-- prettier-ignore -->
                  <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M102.4 0h819.2C977.92 0 1024 46.08 1024 102.4v819.2c0 56.32-46.08 102.4-102.4 102.4H102.4C46.08 1024 0 977.92 0 921.6V102.4C0 46.08 46.08 0 102.4 0" fill="#fff"/><path d="M684.8 394.24v81.92c-1.28 93.44-74.24 166.4-165.12 166.4s-163.84-72.96-165.12-166.4v-81.92zV294.4H279.04c-12.8 1.28-23.04 11.52-23.04 24.32V480c0 17.92 1.28 34.56 5.12 52.48 3.84 16.64 7.68 33.28 16.64 48.64 6.4 16.64 15.36 32 24.32 44.8 10.24 12.8 19.2 26.88 30.72 38.4 6.4 6.4 15.36 12.8 21.76 20.48 5.12 5.12 11.52 7.68 16.64 12.8 12.8 10.24 29.44 17.92 44.8 24.32q24.96 9.6 49.92 15.36c24.96 5.76 34.56 5.12 52.48 5.12s35.84-1.28 52.48-5.12 33.28-7.68 49.92-15.36c16.64-6.4 30.72-15.36 44.8-24.32 6.4-5.12 11.52-7.68 16.64-12.8 6.4-6.4 15.36-12.8 21.76-20.48 11.52-11.52 23.04-24.32 30.72-38.4 10.24-12.8 17.92-28.16 24.32-44.8s11.52-33.28 16.64-48.64c3.84-16.64 5.12-34.56 5.12-52.48v-85.76z" fill="#ff5500"/></svg>
                  <span>滴滴出行</span>
                </a>
              </div>
              <ul>
                <li>
                  <p><span>📍 到这下车</span>中环毕打街中建大厦</p>
                </li>
                <li>
                  <p><span>💳 付款</span>支付宝 · 微信</p>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <span>🚇</span>
                <h4>港铁路线</h4>
              </div>
              <p>
                客人前往中建大厦可搭乘港铁至中环站，并从G出口出站。G出口直通毕打街与皇后大道中交界的商场通道，出站后步行约1分钟即可抵达大厦。您可使用<a
                  href="https://www.mtr.com.hk/ch/customer/services/system_map.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  >港铁网站<span aria-hidden="true">↗</span></a
                >查询最新的列车与车站资讯。
              </p>
              <a
                href="https://www.mtr.com.hk/archive/ch/services/routemap.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="点击查看港铁路线图（PDF）"
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
          </details>
          <div>
            <p>置地广场站 G 口出发，步行至香港希玛眼科诊所</p>
            <video
              class="w-full lg:max-w-xl mx-auto block bg-black aspect-video"
              src="https://static.cmermedical.com.hk/smile/uploads/2026/07/27/y6y0ro4w_ctg.webm"
              poster="https://statichk.cmermedical.com/newopd/services/macular/pdt-address-video.webp"
              controls
              playsinline
              preload="none"
              title="从置地广场站G口步行至香港希玛眼科诊所路线影片"
              aria-label="诊所步行路线示范影片"
            ></video>
            <p>如有疑问，请通过微信或客服电话联系我们</p>
          </div>
        </div>
      </div>
    </section>
    <section class="why">
      <div class="wrapper">
        <span>★ 突出重点</span>
        <h2 class="title-normal">为什么选择<span class="mark">香港希玛眼科中心</span>？</h2>
        <div>
          <p>10+年医疗实力 × 成熟PDT技术 × 全程跨境服务</p>
          <p>四大核心优势，为内地患者提供专业、便捷的跨境眼科治疗服务。</p>
        </div>
        <ul class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          <li class="highlight-card">
            <h3 class="highlight-card_title">成熟技术 · 丰富临床经验</h3>
            <p class="highlight-card_desc">
              PDT 光动力治疗拥有
              <strong>10+年临床应用经验</strong>
              ，技术成熟，适用于黄斑病变、老年黄斑变性及部分眼底血管等疾病。
            </p>
          </li>
          <li class="highlight-card">
            <h3 class="highlight-card_title">精准治疗 · 严谨医疗监管</h3>
            <p class="highlight-card_desc">
              根据患者眼底情况制定合适的治疗方案，针对病变组织进行治疗，尽量减少对正常组织的影响，全程由专业医疗团队评估及跟进。
            </p>
          </li>
          <li class="highlight-card">
            <h3 class="highlight-card_title">一站式诊疗 · 跨境更省心</h3>
            <p class="highlight-card_desc">
              从预约、检查、医生诊断到 PDT
              治疗及后续安排，提供一站式跨境医疗服务，减少患者往返及沟通成本。
            </p>
          </li>
          <li class="highlight-card">
            <h3 class="highlight-card_title">治疗便捷 · 完善复诊安排</h3>
            <p class="highlight-card_desc">
              PDT
              治疗一般无需住院，患者可按医生评估安排治疗及复诊；治疗后亦可配合内地希玛眼科医院进行后续跟进，方便持续管理。
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="follow">
      <div class="wrapper">
        <div>
          <h2>把握治疗<span class="mark">黄金期</span>，及早守护视力</h2>
          <p>立即点击下方链接预约光动力治疗，守护您的视力健康</p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a
              href="https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&lng=big5&p=https://hkeyecmer.com/&e=hkeyecmer.com[PDT]"
              class="btn-cta"
            >
              内地居民即时预约
            </a>
            <NuxtLink to="/medical-service/maculopathy" class="btn-ghost"
              >了解更多黄斑病变</NuxtLink
            >
          </div>
        </div>
        <div class="hidden lg:flex">
          <p>关注我们微信号及预约</p>
          <img
            src="https://statichk.cmermedical.com/newopd/common/wechat-pdt.webp"
            alt="香港希瑪眼科中心微信二维码"
            class="w-75 aspect-square"
            loading="lazy"
          />
        </div>
      </div>
    </section>
    <section class="question pb-40 lg:pb-50">
      <div class="wrapper">
        <h2 class="title-normal">常见问题<span class="mark">解答</span></h2>
        <p>如果您有其他疑问，欢迎随时联系我们的客服团队。</p>
        <PageCollapse
          :answer="meetArr"
          :downarr="'pdt'"
          :style="{ '--subassembly-color': '#1b407a' }"
        />
      </div>
    </section>
  </main>
</template>
<style lang="scss" scoped>
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
.mark {
  background: linear-gradient(120deg, #e8f0fa, #dce8f8);
  padding: 2px 12px;
  border-radius: 999px;
  font-weight: 700;
  color: #1b407a;
  white-space: nowrap;
}
.title-normal {
  color: #1e293b;
  font-weight: 600;
}
@keyframes buttonAnimate {
  0%,
  100% {
    transform: translateY(0) scale(1);
    box-shadow: 0 6px 24px rgba($color: #1b407a, $alpha: 0.2);
  }
  50% {
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 6px 24px rgba($color: #1b407a, $alpha: 0.35);
  }
}
.button-normal {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: #1b407a;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  padding: 12px 28px;
  border-radius: 999px;
  animation: buttonAnimate 3s ease-in-out infinite;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s;
  z-index: 1;
  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 9999px;
    pointer-events: none;
  }
  &::before {
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent,
      rgba($color: #fff, $alpha: 0.15),
      transparent
    );
    animation: pdt-btn-shine 3s ease-in-out infinite;
    z-index: -1;
  }
  &::after {
    inset: -6px;
    opacity: 0;
    border: 2px solid rgba($color: #1b407a, $alpha: 0.25);
    transition: opacity 0.3s;
  }
}
.banner {
  background: linear-gradient(180deg, #fff 0%, #f2f5fb 60%, #f0f5fc 100%);
}
.appointment {
  background: linear-gradient(to bottom, #fafbfd 0%, #fff 100%);
}
.tips {
  background: linear-gradient(to bottom, #f0f5fc 0%, #fff 100%);
}
.why {
  background: linear-gradient(to bottom, #f0f9f4 0%, #fff 100%);
}
.follow {
  background: linear-gradient(to bottom, #fff 0%, #f0f5fc 100%);
}
.question {
  background: linear-gradient(to bottom, #fafbfd 0%, #fff 100%);
}
@media screen and (min-width: 768px) {
  .button-normal {
    padding: 20px 44px;
  }
}
</style>

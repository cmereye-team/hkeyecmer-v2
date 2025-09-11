<!--
 * @Author: 谭洁莹
 * @Date: 2025-09-11 08:47:28
 * @LastEditTime: 2025-09-11 09:44:30
 * @FilePath: /pages/2025/eye-health-ambassado/carolcheng.vue
 * @Description: 眼睛健康大使
-->
<script setup lang="ts">
definePageMeta({
  layout: 'page',
  name: 'carolcheng',
})
useHead(() => ({
  title: '眼睛健康大使 | 希瑪眼科中心',
  meta() {
    return [
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '眼科醫生 眼科 眼科專科 眼科醫生 眼科診所 眼科中心 希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 香港希瑪眼科 香港希瑪 希瑪 希瑪眼科全面眼科檢查 希瑪眼科香港 希瑪林順潮眼科中心 林順潮眼科中心 林順潮眼科醫生 林順潮眼科診所 眼科希瑪 眼睛疾病 香港眼科 眼科醫院 眼睛診所 眼科中心 眼科診所 眼科專科診所 眼科專科中心 眼科診所地址 眼科檢查 全面眼科檢查 全面眼睛檢查 眼科服務 醫療服務 眼睛健康 視力健康 驗眼',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '鄭裕玲小姐為希瑪眼科中心的眼睛健康大使，向公眾宣揚對視力保健的認識和重視。希瑪眼科中心提供九大眼科專科服務及全面眼科檢查，醫療團隊由26名經驗豐富的眼科專科醫生組成。建議40歲或以上人士定期進行眼睛檢查，預防眼睛疾病，遠離視力問題，立即查詢及預約。',
      },
    ]
  },
}))
// 頁腳背景色
const backgd = [
  '#64bcd1;',
  '-webkit-linear-gradient(to right, #83cdd3, #64bcd1);',
  'linear-gradient(to right, #83cdd3, #64bcd1);',
]
const bannerData = {
  pcSrc: 'https://statichk.cmermedical.com/hkcmereye/promotion/banner.jpg',
  mbSrc: 'https://cdn.nodeimage.com/i/xQUkffjeDi1N58wxAjY0B7siuXg4Za45.jpg',
}
</script>
<template>
  <div class="page">
    <PageServiceBanner :bannerData="bannerData" />
    <section class="video bg-[#F8F9FA]">
      <div class="video-wrap flex mx-auto flex-col lg:flex-row gap-4">
        <div class="video-info">
          <iframe
            src="https://www.youtube.com/embed/Z5ut-9tIhmo"
            frameborder="0"
          ></iframe>
        </div>
        <div class="video-intro p-7">
          <h2 class="video-intro-title">守護眼睛健康，從定期驗眼開始！</h2>
          <div class="video-intro-text bg-[#fff]">
            <p>
              眼睛是「靈魂之窗」，隨著現代生活習慣改變，眼睛面臨更多挑戰。眼疾初期往往難以察覺，一旦視力受損，可能已錯過最佳治療時機。
            </p>
            <p>透過定期眼科檢查，有助及早發現潛在問題，並及早對症下藥。</p>
            <p>
              關心自己，關心家人。若發現有眼部問題，立即尋找信譽良好的眼科中心預約檢查，為自己及家人送上一份安心！
            </p>
          </div>
          <div class="video-intro-button">立即預約驗眼</div>
        </div>
      </div>
    </section>
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#64bcd1;'}`"
    />
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
@media screen and (min-width: 1200px) {
  .video {
    &-wrap {
      width: 1200px;
    }
  }
}
</style>

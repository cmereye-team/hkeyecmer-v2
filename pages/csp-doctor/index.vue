<script lang="ts" setup>
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
</script>
<template>
  <main>
    <div class="banner"></div>
    <PageFooterMenu />
  </main>
</template>
<style></style>

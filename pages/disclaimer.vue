<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '免責條款',
}))
</script>

<template>
  <div class="disclaimer">
    <div>
      <div>{{$t('pages.disclaimer.name')}}</div>
      <div>
        <div>{{$t('pages.disclaimer.p1')}}</div>
        <div>{{$t('pages.disclaimer.p2')}}</div>
        <div>{{$t('pages.disclaimer.p3')}}</div>
        <div>
          {{$t('pages.disclaimer.p4')}}
        </div>
        <div>{{$t('pages.disclaimer.p5')}}</div>
        <div>{{$t('pages.disclaimer.p6')}}</div>
      </div>
    </div>
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
.disclaimer {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;

  &>div:nth-child(1) {
    margin-top: 20%;
    margin-bottom: 200px;

    &>div:nth-child(1) {
      font-family: 'Noto Sans HK';
      font-size: 22px;
      color: #2958a3;
    }

    &>div:nth-child(2) {
      margin-top: 50px;
      font-family: 'Noto Sans HK';
      font-size: 16px;
      line-height: 1.5;
      color: #555555;

      &>div {
        margin: 10px 0;
      }
    }
  }
}
</style>

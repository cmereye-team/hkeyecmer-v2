<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: t(
    'pages.contact_us.clinic_information_title.clinic_information_serviceNavigation2'
  ),
}))
// 診所資料電子預約表格
const serviceNavigation = [
  {
    anchorName:
      'pages.contact_us.clinic_information_title.clinic_information_serviceNavigation1',
    anchorLink: '/contact-us',
  },
  {
    anchorName:
      'pages.contact_us.clinic_information_title.clinic_information_serviceNavigation2',
    anchorLink: '/contact-us/appointmentForm',
  },
]
</script>

<template>
  <div class="appointmentForm">
    <div>
      <div>
        {{ $t('pages.contact_us.appointmentForm_title.appointmentForm_title') }}
      </div>
      <div>ELECTRONIC APPOINTMENT FORM</div>
    </div>
    <div>
      <FormFooterInfo
        :from-style="'margin: 0 520px;'"
        :form-title-color="'color:#515151'"
        :bg="`background:${'#00000000'}`"
        :co="`color:${'#515151;'};border:1px solid #515151`"
      />
    </div>
    <EnInformation :service-navigation="serviceNavigation" />
    <EnFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
.appointmentForm {
  background: url('https://static.cmereye.com/imgs/2023/03/2e0bad9ed9608023.jpg') no-repeat;
  background-size: auto;
  & > div:nth-child(1) {
    width: 100%;
    max-width: 860px;
    margin: 0 auto;
    padding-top: 100px;
    color: #515151;
    & > div:nth-child(1) {
      font-family: 'Noto Sans HK';
      font-size: 37.5px;
    }
    & > div:nth-child(2) {
      color: #8ad8dd;
      font-size: 21px;
      font-family: 'Metropolis';
      text-transform: uppercase;
      font-weight: 500;
      margin-bottom: 40px;
      letter-spacing: 5px;
    }
  }
}
@media screen and (max-width: 768px) {
  .appointmentForm {
    padding-bottom: 50px;
    & > div:nth-child(1) {
      width: calc(100% - 60px);
      & > div:nth-child(1) {
        font-size: 28px;
        color: #515151;
      }
      & > div:nth-child(2) {
        letter-spacing: -.01em;
        font-size: 16px;
        margin-bottom: 0;
      }
    }
  }
}
</style>

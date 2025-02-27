<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <div class="privacy">
    <div>
      <svg
        width="5"
        height="8"
        color="red"
        viewBox="0 0 5 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L4 4L1 7"
          stroke="white"
          stroke-width="0.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div>
      <div>
        <nuxt-link :to="{ name: 'en-privacyPolicy' }">{{
          $t('pages.index.footer.privacy')
        }}</nuxt-link>
      </div>
      <div>&</div>
      <div>
        <nuxt-link :to="{ name: 'en-disclaimer' }">{{
          $t('pages.index.footer.disclaimer')
        }}</nuxt-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
a.router-link-exact-active {
  color: #f2f2f2;
}
.privacy {
  display: flex;
  flex-direction: row;
  align-items: center;
  & > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 8px;
    font-family: 'Noto Sans HK';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #ffffff;
    & > div:nth-child(2) {
      margin: 0 10px;
    }
  }
}
</style>

<script lang="ts" setup>
const year = new Date().getFullYear()
</script>

<template>
  <div class="footerTem">
    <yahooPageContentBackToTop />
    <yahooPageContentOnlinContact />
    <footer class="bg-blue-900">
      <section class="footer">
        <div>
          {{ $t('pages.index.footer.company') }}
          {{ $t('pages.index.footer.copy_right') }}
        </div>
        <div>
          <yahooPageContentFooterSvg />
          <yahooLanguageSwitcher />
          <yahooPivacyPolicy />
        </div>
      </section>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.footerTem {
  z-index: 99;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 150px;
  height: 46px;
  & > div:nth-child(1) {
    font-family: 'Noto Sans HK';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #ffffff;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: center;
    & > div {
      margin-right: 32px;
    }
  }
}
</style>

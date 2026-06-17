<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')
useHead(() => ({
  title: '多焦點人工晶體 - 香港希瑪眼科中心｜眼科診所｜眼科醫生',
  meta() {
    return [
      {
        hid: 'description',
        name: 'description',
        content:
          '希瑪眼科中心提供白內障手術和人工晶體植入，包括：單焦距人工晶體、散光型人工晶體及多焦點人工晶體。多焦點人工晶體相較於單焦距人工晶體能滿足遠距離、中距離和近距離的需要，適合手術後不想配戴眼鏡或對用眼習慣要求高的患者，手術過程安全可靠且精準度高。立即致電查詢白內障手術-人工晶體方案及手術費用。',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '白內障 白內障收費 白內障症狀 白內障晶體 白內障預防 白內障價錢 白內障手術 白內障矯視 白內障種類 白內障眼藥水 白內障青光眼 白內障微創 白內障激光 白內障治療 白內障手術過程 白內障眼鏡 白內障檢查 眼睛退化 眼睛玻璃體退化 先天性白內障 視力模糊 視力矯正 超聲乳化白內障切除術 人工水晶體 人工晶體 人工晶體價錢 人工晶體種類 單焦點人工晶體 散光型人工晶體 多焦點人工晶體 單焦距人工晶體 多焦距人工晶體 多焦距人工晶體價錢 晶體植入 晶體混濁 眼科檢查 眼睛檢查 眼睛疾病 眼科醫生 香港眼科 眼科醫院 眼科診所 眼科中心',
      },
    ]
  },
}))
// 传递背景色
const backgd = [
  '#3a5fb2;',
  '-webkit-linear-gradient(to right, #83cdd3, #3a5fb2);',
  'linear-gradient(to right, #83cdd3, #3a5fb2);',
]

// 折叠问答
const meetArr = [
  {
    title: 'pages.medical_service.multifocal.faq.q1',
    agree: ['pages.medical_service.multifocal.faq.a1'],
  },
  {
    title: 'pages.medical_service.multifocal.faq.q2',
    agree: 'pages.medical_service.multifocal.faq.a2',
  },
  {
    title: 'pages.medical_service.multifocal.faq.q3',
    agree: 'pages.medical_service.multifocal.faq.a3',
  },
  {
    title: 'pages.medical_service.multifocal.faq.q4',
    agree: 'pages.medical_service.multifocal.faq.a4',
  },
]
</script>

<template>
  <div>
    <div class="multifocal-lens">
      <div class="multifocal-lens-banner">
        <div class="multifocal-lens-banner-in">
          <img
            srcset="
              https://static.cmereye.com/imgs/2024/03/d0980c9700a22204.webp 768w,
              https://static.cmereye.com/imgs/2024/03/ccb03dbf06b45658.webp
            "
            src="https://static.cmereye.com/imgs/2024/03/ccb03dbf06b45658.webp"
            title="多焦點人工晶體"
            alt="植入多焦點人工晶體的夫婦享受戶外陽光"
          />
          <div class="multifocal-lens-banner-text">
            <div
              class="multifocal-lens-banner-text-title wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <span>{{ t('pages.medical_service.multifocal.cataract') }}</span>
              <i> 一 </i>{{ t('pages.medical_service.multifocal.title') }}
            </div>
            <div
              class="multifocal-lens-banner-text-context wow fadeInUp"
              data-wow-delay="1s"
            >
              {{ t('pages.medical_service.multifocal.intro') }}
            </div>
          </div>
        </div>
      </div>
      <div class="multifocal-lens-content">
        <div class="multifocal-lens-content-in wow fadeInUp">
          <img
            src="https://static.cmereye.com/imgs/2024/03/9f118603f0a8059d.png"
            title="眼球"
            alt="眼球插圖"
          />
          <div class="multifocal-lens-content-in-text">
            {{ t('pages.medical_service.multifocal.desc') }}
            <span class="pcBox">{{
              t('pages.medical_service.multifocal.desc_pc')
            }}</span>
          </div>
        </div>
      </div>
      <div class="multifocal-lens-category">
        <div class="multifocal-lens-category-title wow fadeInUp">
          <img
            src="https://static.cmereye.com/imgs/2024/03/81ceac06fb1eb1a6.png"
            title="人工晶體"
            alt="人工晶體插圖"
          />
          <span>{{ t('pages.medical_service.multifocal.table.title') }}</span>
        </div>
        <div class="multifocal-lens-category-in">
          <div class="table">
            <div class="tr">
              <div class="td wow flipInY" data-wow-delay="0.2s">
                <i18n-t
                  keypath="pages.medical_service.multifocal.table.feature.title"
                  tag="span"
                  scope="global"
                >
                  <template #mbr><br class="block md:hidden" /></template>
                </i18n-t>
              </div>
              <div class="td wow flipInY" data-wow-delay="0.4s">
                <img
                  src="https://static.cmereye.com/imgs/2024/03/2f8134c7a000614e.png"
                  title="單焦距人工晶體"
                  alt="單焦距人工晶體插圖"
                />
                <i18n-t
                  keypath="pages.medical_service.multifocal.table.feature.monofocal"
                  tag="span"
                  scope="global"
                >
                  <template #mbr><br class="block md:hidden" /></template>
                </i18n-t>
              </div>
              <div class="td wow flipInY" data-wow-delay="0.6s">
                <img
                  src="https://static.cmereye.com/imgs/2024/03/cd5264dfbc944651.png"
                  title="散光型人工晶體"
                  alt="散光型人工晶體插圖"
                />
                <i18n-t
                  keypath="pages.medical_service.multifocal.table.feature.astigmatism"
                  tag="span"
                  scope="global"
                >
                  <template #mbr><br class="block md:hidden" /></template>
                </i18n-t>
              </div>
              <div class="td wow flipInY" data-wow-delay="0.8s">
                <img
                  src="https://static.cmereye.com/imgs/2024/03/d6c31e6add2067b2.png"
                  title="多焦點人工晶體"
                  alt="多焦點人工晶體插圖"
                />
                <i18n-t
                  keypath="pages.medical_service.multifocal.table.feature.multifocal"
                  tag="span"
                  scope="global"
                >
                  <template #mbr><br class="block md:hidden" /></template>
                </i18n-t>
              </div>
            </div>
            <div class="tr">
              <div class="td wow flipInY" data-wow-delay="0.2s">
                <span>{{
                  t('pages.medical_service.multifocal.table.purpose.title')
                }}</span>
                <i18n-t
                  keypath="pages.medical_service.multifocal.table.purpose.small"
                  tag="span"
                  scope="global"
                  class="fontsmall"
                >
                  <template #mbr><br class="block md:hidden" /></template>
                </i18n-t>
              </div>
              <div class="td wow flipInY" data-wow-delay="0.4s">
                <span>{{
                  t('pages.medical_service.multifocal.table.purpose.monofocal')
                }}</span>
              </div>
              <div class="td wow flipInY" data-wow-delay="0.6s">
                <span>{{
                  t(
                    'pages.medical_service.multifocal.table.purpose.astigmatism'
                  )
                }}</span>
              </div>
              <div class="td wow flipInY" data-wow-delay="0.8s">
                <span>{{
                  t('pages.medical_service.multifocal.table.purpose.multifocal')
                }}</span>
              </div>
            </div>
            <div class="tr">
              <div class="td wow flipInY" data-wow-delay="0.2s">
                <span>{{
                  t('pages.medical_service.multifocal.table.focal.title')
                }}</span>
                <i18n-t
                  keypath="pages.medical_service.multifocal.table.focal.small"
                  tag="span"
                  scope="global"
                  class="fontsmall"
                >
                  <template #mbr><br class="block md:hidden" /></template>
                </i18n-t>
              </div>
              <div class="td wow flipInY" data-wow-delay="0.4s">
                <span>{{
                  t('pages.medical_service.multifocal.table.focal.monofocal')
                }}</span>
                <span class="fontsmall">{{
                  t('pages.medical_service.multifocal.table.small')
                }}</span>
              </div>
              <div class="td wow flipInY" data-wow-delay="0.6s">
                <span>{{
                  t('pages.medical_service.multifocal.table.focal.astigmatism')
                }}</span>
              </div>
              <div class="td wow flipInY" data-wow-delay="0.8s">
                <span>{{
                  t('pages.medical_service.multifocal.table.focal.multifocal')
                }}</span>
              </div>
            </div>
            <div class="tr">
              <div class="td wow flipInY" data-wow-delay="0.2s">
                <span>{{
                  t('pages.medical_service.multifocal.table.low.title')
                }}</span>
                <i18n-t
                  keypath="pages.medical_service.multifocal.table.low.small"
                  tag="span"
                  scope="global"
                  class="fontsmall"
                >
                  <template #mbr><br class="block md:hidden" /></template>
                </i18n-t>
              </div>
              <div class="td wow flipInY" data-wow-delay="0.4s">
                <span>
                  {{
                    t('pages.medical_service.multifocal.table.low.monofocal')
                  }}
                </span>
              </div>
              <div class="td wow flipInY" data-wow-delay="0.6s">
                <span>{{
                  t('pages.medical_service.multifocal.table.low.astigmatism')
                }}</span>
              </div>
              <div class="td wow flipInY" data-wow-delay="0.8s">
                <span>{{
                  t('pages.medical_service.multifocal.table.low.multifocal')
                }}</span>
              </div>
            </div>
            <div class="tr">
              <div class="td wow flipInY" data-wow-delay="0.2s">
                <span>{{
                  t('pages.medical_service.multifocal.table.advantages.title')
                }}</span>
                <span></span>
              </div>
              <div class="td wow flipInY" data-wow-delay="0.4s">
                {{
                  t(
                    'pages.medical_service.multifocal.table.advantages.monofocal'
                  )
                }}
                <span class="fontsmall">{{
                  t('pages.medical_service.multifocal.table.advantages.small')
                }}</span>
              </div>
              <div class="td wow flipInY" data-wow-delay="0.6s">
                <i18n-t
                  keypath="pages.medical_service.multifocal.table.advantages.astigmatism"
                  tag="span"
                  scope="global"
                >
                  <template #br><br /></template>
                </i18n-t>
              </div>
              <div class="td wow flipInY" data-wow-delay="0.8s">
                <i18n-t
                  keypath="pages.medical_service.multifocal.table.advantages.multifocal"
                  tag="span"
                  scope="global"
                >
                  <template #br><br /></template>
                </i18n-t>
              </div>
            </div>
            <div class="tr">
              <div class="td wow flipInY" data-wow-delay="0.2s">
                <i18n-t
                  keypath="pages.medical_service.multifocal.table.suitable.title"
                  tag="span"
                  scope="global"
                >
                  <template #mbr><br class="block md:hidden" /></template>
                </i18n-t>
                <span></span>
              </div>
              <div class="td wow flipInY" data-wow-delay="0.4s">
                <i18n-t
                  keypath="pages.medical_service.multifocal.table.suitable.monofocal"
                  tag="span"
                  scope="global"
                >
                  <template #br><br /></template>
                </i18n-t>
              </div>
              <div class="td wow flipInY" data-wow-delay="0.6s">
                <i18n-t
                  keypath="pages.medical_service.multifocal.table.suitable.astigmatism"
                  tag="span"
                  scope="global"
                >
                  <template #br><br /></template>
                </i18n-t>
              </div>
              <div class="td wow flipInY" data-wow-delay="0.8s">
                <i18n-t
                  keypath="pages.medical_service.multifocal.table.suitable.multifocal"
                  tag="span"
                  scope="global"
                >
                  <template #br><br /></template>
                </i18n-t>
              </div>
            </div>
          </div>
        </div>
        <div class="multifocal-lens-category-context">
          <h2>
            {{ t('pages.medical_service.multifocal.table.blended.title') }}
          </h2>
          <i18n-t
            keypath="pages.medical_service.multifocal.table.blended.intro"
            tag="p"
            scope="global"
          >
            <template #br><br /></template>
          </i18n-t>
        </div>
        <div class="multifocal-lens-btn">
          <i18n-t
            keypath="pages.medical_service.multifocal.table.button"
            tag="a"
            scope="global"
            href="https://api.whatsapp.com/send?phone=85260629611&text=白內障專線查詢"
          >
            <template #br><br /></template>
          </i18n-t>
        </div>
      </div>
      <div class="multifocal-lens-banner2">
        <div class="multifocal-lens-banner2-in">
          <img
            srcset="
              https://static.cmereye.com/imgs/2024/03/4b5b0d71493c5312.jpg  768w,
              https://static.cmereye.com/imgs/2024/03/b61f47dcb6aa83e2.webp
            "
            src="https://static.cmereye.com/imgs/2024/03/b61f47dcb6aa83e2.webp"
            title="多焦點人工晶體"
            alt="多焦點人工晶體在光線下的透明視覺效果圖"
          />
          <div class="multifocal-lens-banner2-text">
            <div
              class="multifocal-lens-banner2-text-title wow fadeInUp"
              data-wow-delay="0.7s"
            >
              {{ t('pages.medical_service.multifocal.provide.title') }}
            </div>
            <div
              class="multifocal-lens-banner2-text-context wow fadeInUp"
              data-wow-delay="1s"
            >
              {{ t('pages.medical_service.multifocal.provide.intro') }}
            </div>
          </div>
        </div>
      </div>
      <div class="multifocal-lens-title">
        <span>{{ t('pages.medical_service.multifocal.benefits.title') }}</span>
      </div>
      <div class="multifocal-lens-benefit">
        <div class="multifocal-lens-benefit-in">
          <div class="multifocal-lens-benefit-in-text wow bounceInLeft">
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/03/e92b94b388f913a7.png"
                title="廣闊視野"
                alt="廣闊視野插圖"
              />
              <span>{{
                t('pages.medical_service.multifocal.benefits.focal.title')
              }}</span>
            </div>
            <div>
              {{ t('pages.medical_service.multifocal.benefits.focal.intro') }}
            </div>
          </div>
          <div
            class="multifocal-lens-benefit-in-img wow bounceInRight"
            data-wow-delay="0.5s"
          >
            <img
              src="https://static.cmereye.com/imgs/2024/03/9d387fa71d1fbba6.webp"
              title="多焦點人工晶體_廣闊視野"
              alt="植入多焦點人工晶體的夫婦戶外遠足享受廣闊視野"
            />
          </div>
        </div>
        <div class="multifocal-lens-benefit-in">
          <div
            class="multifocal-lens-benefit-in-text wow bounceInRight"
            data-wow-delay="0.5s"
          >
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/03/f5d20e392b9f5975.png"
                title="生活品質"
                alt="生活品質插圖"
              />
              <span>{{
                t('pages.medical_service.multifocal.benefits.life.title')
              }}</span>
            </div>
            <div>
              {{ t('pages.medical_service.multifocal.benefits.life.intro') }}
            </div>
          </div>
          <div
            class="multifocal-lens-benefit-in-img wow bounceInLeft"
            data-wow-delay="0.5s"
          >
            <img
              src="https://static.cmereye.com/imgs/2024/03/e3da61a86706090c.webp"
              title="多焦點人工晶體_生活品質"
              alt="植入多焦點人工晶體的夫婦享受踩單車樂趣表現良好生活"
            />
          </div>
        </div>
        <div class="multifocal-lens-benefit-in">
          <div
            class="multifocal-lens-benefit-in-text wow bounceInLeft"
            data-wow-delay="0.5s"
          >
            <div>
              <img
                src="https://static.cmereye.com/imgs/2024/03/f237925060b2e7c3.png"
                title="方案選擇"
                alt="方案選擇插圖"
              />
              <span>{{
                t(
                  'pages.medical_service.multifocal.benefits.personalized.title'
                )
              }}</span>
            </div>
            <div>
              {{
                t(
                  'pages.medical_service.multifocal.benefits.personalized.intro'
                )
              }}
            </div>
          </div>
          <div
            class="multifocal-lens-benefit-in-img wow bounceInRight"
            data-wow-delay="0.5s"
          >
            <img
              src="https://static.cmereye.com/imgs/2024/03/c76caa8b128f8b30.webp"
              title="多焦點人工晶體_眼科醫生_方案選擇"
              alt="眼科醫生為老年患者解釋多焦點人工晶體方案選擇"
            />
          </div>
        </div>
        <div class="multifocal-lens-benefit-in">
          <div
            class="multifocal-lens-benefit-in-text wow bounceInRight"
            data-wow-delay="0.5s"
          >
            <div>
              {{ t('pages.medical_service.multifocal.benefits.intro') }}
            </div>
          </div>
          <div
            class="multifocal-lens-benefit-in-img wow bounceInLeft"
            data-wow-delay="0.5s"
          >
            <img
              src="https://static.cmereye.com/imgs/2024/03/6efbf0c586f1376d.webp"
              title="多焦點人工晶體"
              alt="老年女性微笑展現多焦點人工晶體帶來的清晰視界"
            />
          </div>
        </div>
      </div>
      <div class="multifocal-lens-btn">
        <i18n-t
          keypath="pages.medical_service.multifocal.benefits.button"
          tag="a"
          scope="global"
          href="https://api.whatsapp.com/send?phone=85260629611&text=白內障專線查詢"
        >
          <template #br><br /></template>
        </i18n-t>
      </div>
      <div class="multifocal-lens-title">
        <span>{{ t('pages.medical_service.multifocal.faq.title') }}</span>
      </div>
      <div class="multifocal-lens-meetArr">
        <PageCollapse
          :answer="meetArr"
          :downarr="'muscaeVolitantes'"
          :style="{ '--subassembly-color': '#3a5fb2' }"
        />
      </div>
    </div>
    <!-- 公共底部表单 -->
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#3a5fb2;'}`"
    />
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
html[lang='en'] {
  .multifocal-lens-btn > a {
    font-size: clamp(14px, 5vw, 20px);
    letter-spacing: 0.1em;
  }
  .multifocal-lens-category-in .table .tr .td {
    min-width: 100px;
  }
  .multifocal-lens-benefit-in-text > div {
    text-align: left;
  }
  @media screen and (max-width: 767px) {
    .multifocal-lens-category-in {
      overflow-x: auto;
    }
    .multifocal-lens-meetArr
      :deep(.el-collapse-item:nth-child(4) .el-collapse-item__header) {
      height: 120px;
    }
  }
  @media screen and (min-width: 768px) {
    .multifocal-lens-banner2-text-title {
      font-size: clamp(20px, 3vw, 48px);
      letter-spacing: 0.1em;
    }
    .multifocal-lens-benefit-in-text > div {
      line-height: 1.5;
      letter-spacing: 0.05em;
      text-align: left;
    }
  }
}
@font-face {
  font-family: 'Zeyada';
  src: url(https://static.cmereye.com/static/font/Zeyada-Regular.ttf);
}
.multifocal-lens {
  height: auto;
  margin-top: 50px;
}
.multifocal-lens-banner {
  width: calc(1032 / 1920 * 100%);
  max-width: 1496px;
  height: auto;
  position: relative;
  margin: 0 auto;
}
.multifocal-lens-banner-in {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: calc(776 / 1032 * 100%);
}
.multifocal-lens-banner-in > img {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 1;
}
.multifocal-lens-banner-text {
  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translateY(-25%);
  left: calc(51 / 1032 * 100%);
  width: calc(557 / 1032 * 100%);
}
.multifocal-lens-banner-text-title {
  width: max-content;
  color: #3a5fb2;
  text-shadow: -1.829px 0.61px 2.439px rgba(0, 0, 0, 0.25);
  font-family: Zeyada;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 15.847px;
  font-size: 35.567px;
  margin-bottom: 10px;
}
.multifocal-lens-banner-text-title span {
  font-size: 60.951px;
}
.multifocal-lens-banner-text-context {
  color: #3a5fb2;
  text-shadow: -1.404px 0.468px 1.872px rgba(0, 0, 0, 0.25);
  font-family: Zeyada;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: 54px;
  /* 234.783% */
  letter-spacing: 2.3px;
}
.multifocal-lens-content {
  width: calc(1261 / 1920 * 100%);
  max-width: 1261px;
  margin: 71px auto 0;
  position: relative;
  z-index: 2;
}
.multifocal-lens-content-in {
  border-radius: 91px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  padding: 17px calc(45 / 1261 * 100%);
}
.multifocal-lens-content-in > img {
  width: calc(101 / 1171 * 100%);
}
.multifocal-lens-content-in-text {
  flex: 1;
  text-align: center;
  color: #3a5fb2;
  text-shadow: -1.404px 0.468px 1.872px rgba(0, 0, 0, 0.25);
  font-family: 'Noto Sans HK';
  font-size: 27px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px;
  /* 177.778% */
  letter-spacing: 2.7px;
  margin-left: calc(10 / 1261 * 100%);
}
.multifocal-lens-content-in-text .mbBox {
  display: none;
}
.multifocal-lens-category {
  padding: 130px 0 200px;
  position: relative;
  z-index: 1;
  margin-top: -30px;
  margin-bottom: 20px;
  background: url(https://static.cmereye.com/imgs/2024/03/cc6eb4fe0d7bb9b5.png)
      no-repeat top center,
    url(https://static.cmereye.com/imgs/2024/03/b34e0a520ed9c467.png) no-repeat
      bottom center;
}
.multifocal-lens-category-title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.multifocal-lens-category-title > span {
  color: #3a5fb2;
  text-align: center;
  text-shadow: -1.404px 0.468px 1.872px rgba(0, 0, 0, 0.25);
  font-family: 'Noto Sans HK';
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 5.2px;
  padding-left: 20px;
}
.multifocal-lens-category-in {
  margin: 65px auto 42px;
  width: calc(1346 / 1920 * 100%);
  max-width: 1346px;
}
.multifocal-lens-category-in .table {
  width: 100%;
  border-radius: 61.8px;
  border: 6px solid #bcd7f7;
  overflow: hidden;
}
.multifocal-lens-category-in .table .tr {
  min-height: 121px;
  display: flex;
  width: 100%;
}
.multifocal-lens-category-in .table .tr .td {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #66696f;
  font-family: 'Noto Sans HK';
  text-align: center;
  font-size: 27px;
  font-style: normal;
  font-weight: 500;
  line-height: 38.158px;
  /* 141.325% */
  letter-spacing: 2.7px;
}
.multifocal-lens-category-in .table .tr .td > img {
  width: 98px;
  height: auto;
  margin-top: 5px;
}
.multifocal-lens-category-in .table .tr .td .brshow {
  display: none;
}
.multifocal-lens-category-in .table .tr .td .fontsmall {
  // font-size: 20px;
  line-height: 30.6px;
  letter-spacing: 2px;
}
.multifocal-lens-category-in .table .tr .td:nth-of-type(1) {
  flex: 1;
  color: #3a5fb2;
  font-size: 32px;
  font-weight: 700;
  line-height: 43.609px;
  letter-spacing: 3.2px;
}
.multifocal-lens-category-in .table .tr .td:nth-of-type(2) {
  width: calc(350 / 1346 * 100%);
  background: #f2f7fb;
}
.multifocal-lens-category-in .table .tr .td:nth-of-type(3) {
  width: calc(350 / 1346 * 100%);
  background: #f2fffe;
}
.multifocal-lens-category-in .table .tr .td:nth-of-type(4) {
  width: calc(350 / 1346 * 100%);
  background: #fffff2;
}
.multifocal-lens-category-in .table .tr .td:not(:last-child) {
  border-right: 6px solid #bcd7f7;
}
.multifocal-lens-category-in .table .tr:nth-of-type(1) .td {
  color: #3a5fb2;
  font-size: 32px;
  font-weight: 700;
  line-height: 43.609px;
  letter-spacing: 3.2px;
}
.multifocal-lens-category-in .table .tr:last-child .td {
  padding: 15px 0;
  text-align: left;
}
.multifocal-lens-category-in .table .tr:not(:last-child) {
  border-bottom: 6px solid #bcd7f7;
}
.multifocal-lens-category-context {
  width: calc(1338 / 1920 * 100%);
  max-width: 1338px;
  margin: 0 auto;
}
.multifocal-lens-category-context > h2 {
  color: #3a5fb2;
  text-shadow: -1.404px 0.468px 1.872px rgba(0, 0, 0, 0.25);
  font-family: 'Noto Sans HK';
  font-size: 29px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 2.9px;
}
.multifocal-lens-category-context p {
  color: #66696f;
  font-family: 'Noto Sans HK';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 43.609px;
  letter-spacing: 2.4px;
}
.multifocal-lens-category-context p .mbBox {
  display: none;
}
.multifocal-lens-category-btn {
  display: flex;
  justify-content: center;
}
.multifocal-lens-category-btn > a {
  border: 5px solid #fab87b;
  padding: 15px 10px 20px 60px;
  border-radius: 50px;
  color: #fab87b;
  text-align: center;
  font-family: 'Noto Sans HK';
  font-size: 46px;
  font-style: normal;
  font-weight: 900;
  line-height: 48px;
  /* 104.348% */
  letter-spacing: 4.6px;
  transition: all 0.3s;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
  margin: 100px auto 0;
  display: inline-block;
  position: relative;
}
.multifocal-lens-category-btn > a::before {
  content: '';
  width: 100px;
  height: 137px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  background: url(https://static.cmereye.com/imgs/2024/03/cd3469a45f8c0534.png);
  background-size: 100% 100%;
  animation: categoryBtnAnimation 4s linear infinite;
}
.multifocal-lens-category-btn > a:hover {
  color: #ffa755;
  font-size: 40px;
}
.multifocal-lens-banner2 {
  width: calc(1491 / 1920 * 100%);
  max-width: 1491px;
  height: auto;
  position: relative;
  margin: 0 auto 49px;
}
.multifocal-lens-banner2-in {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: calc(687 / 1491 * 100%);
}
.multifocal-lens-banner2-in > img {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.multifocal-lens-banner2-text {
  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translateY(-35%);
  left: calc(51 / 1491 * 100%);
}
.multifocal-lens-banner2-text-title {
  width: calc(670 / 1491 * 100%);
  color: #3a5fb2;
  text-shadow: -1.829px 0.61px 2.439px rgba(0, 0, 0, 0.25);
  font-family: Zeyada;
  font-size: 60.951px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 15.847px;
  margin-bottom: 10px;
}
.multifocal-lens-banner2-text-context {
  width: calc(757 / 1491 * 100%);
  color: #3a5fb2;
  text-shadow: -1.404px 0.468px 1.872px rgba(0, 0, 0, 0.25);
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: 54px;
  /* 234.783% */
  letter-spacing: 2.3px;
}
.multifocal-lens-title {
  width: calc(1491 / 1920 * 100%);
  max-width: 1491px;
  text-align: center;
  margin: 0 auto;
  position: relative;
}
.multifocal-lens-title > span {
  position: relative;
  z-index: 1;
  color: #3a5fb2;
  text-align: center;
  font-family: 'Noto Sans HK';
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 5.2px;
  background: #fff;
  padding: 0 50px;
  display: inline-block;
}
.multifocal-lens-title > span::before,
.multifocal-lens-title > span::after {
  content: '';
  height: 30px;
  width: 6px;
  background: #bcd7f7;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.multifocal-lens-title > span::after {
  right: 0;
}
.multifocal-lens-title > span::before {
  left: 0;
}
.multifocal-lens-title::after {
  content: '';
  background: #bcd7f7;
  height: 6px;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  border-radius: 3px;
  z-index: 0;
}
.multifocal-lens-meetArr {
  width: calc(1080 / 1920 * 100%);
  max-width: 1080px;
  margin: 50px auto 0;
}
.multifocal-lens-benefit {
  width: calc(1032 / 1920 * 100%);
  max-width: 1496px;
  margin: 0 auto;
}
.multifocal-lens-benefit-in {
  display: flex;
  align-items: center;
  margin-top: 85px;
}
.multifocal-lens-benefit-in-img {
  width: calc(642 / 1032 * 100%);
  margin-left: calc(88 / 1032 * 100%);
}
.multifocal-lens-benefit-in-img img {
  width: 100%;
  height: auto;
}
.multifocal-lens-benefit-in-text {
  flex: 1;
}
.multifocal-lens-benefit-in-text > div {
  display: flex;
  color: #3a5fb2;
  text-align: justify;
  font-family: 'Noto Sans HK';
  font-size: 27px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: 2.7px;
  align-items: center;
}
.multifocal-lens-benefit-in-text > div > img {
  margin-right: 17px;
  width: calc(85 / 700 * 100%);
  height: auto;
}
.multifocal-lens-benefit-in-text > div > span {
  font-size: 37px;
  font-weight: 700;
  letter-spacing: 3.7px;
}
.multifocal-lens-benefit-in:nth-of-type(even) {
  flex-direction: row-reverse;
}
.multifocal-lens-benefit-in:nth-of-type(even) .multifocal-lens-benefit-in-img {
  margin-left: 0;
  margin-right: calc(88 / 1032 * 100%);
}
.multifocal-lens-btn {
  display: flex;
  justify-content: center;
}
.multifocal-lens-btn > a {
  display: inline-block;
  border-radius: 100px;
  border: 9px solid #fff;
  background: linear-gradient(180deg, #f0cf8f 4%, rgba(255, 168, 0, 0.84) 100%);
  padding: 20px 10px 25px 60px;
  color: #fff;
  text-align: center;
  font-family: 'Noto Sans HK';
  font-size: 52px;
  font-style: normal;
  font-weight: 900;
  line-height: 64px;
  /* 123.077% */
  letter-spacing: 9.88px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 139px auto 98px;
  transition: all 0.3s;
  position: relative;
}
.multifocal-lens-btn > a:hover {
  color: #fff;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
  text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.4);
  transform: translateY(-5px);
  font-size: 48px;
}
.multifocal-lens-btn > a::after {
  content: '';
  background: url(https://static.cmereye.com/imgs/2024/03/a1e7771b0dd348dd.png);
  background-size: 100% 100%;
  width: 102px;
  height: 108px;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(50%, 50%);
  animation: btnAnimation 2s linear infinite;
}
.multifocal-lens-problem {
  width: calc(1032 / 1920 * 100%);
  max-width: 1496px;
  margin: 40px auto;
  position: relative;
  padding: 0 0 186px;
}
.multifocal-lens-problem::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #bcd7f7;
}
.multifocal-lens-problem-in {
  padding: 50px 0;
  position: relative;
}
.multifocal-lens-problem-in::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #bcd7f7;
}
.multifocal-lens-problem-h2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.multifocal-lens-problem-h2 > p {
  color: #3a5fb2;
  text-align: justify;
  font-family: 'Noto Sans HK';
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  /* 150% */
  letter-spacing: 3.2px;
  flex: 1;
}
.multifocal-lens-problem-h2 > i {
  width: 38px;
  height: 38px;
  font-size: 45px;
  color: #3a5fb2 !important;
  margin-top: -5px;
}
.multifocal-lens-problem-p {
  display: flex;
  padding-top: 50px;
  padding-bottom: 30px;
}
.multifocal-lens-problem-p > p {
  color: #737373;
  text-align: justify;
  font-family: 'Noto Sans HK';
  font-size: 27px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px;
  /* 177.778% */
  letter-spacing: 2.7px;
}
.multifocal-lens-problem-p::before {
  content: 'A:';
  color: #3a5fb2;
  text-align: justify;
  font-family: 'Noto Sans HK';
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  /* 150% */
  letter-spacing: 3.2px;
}

@keyframes btnAnimation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes categoryBtnAnimation {
  0% {
    width: 160px;
    height: 110px;
  }
  5% {
    width: 75px;
    height: 147px;
  }
  10% {
    width: 130px;
    height: 135px;
  }
  15% {
    width: 90px;
    height: 140px;
  }
  20% {
    width: 110px;
    height: 135px;
  }
  25% {
    width: 100px;
    height: 137px;
  }
  90% {
    width: 100px;
    height: 137px;
  }
  100% {
    width: 160px;
    height: 110px;
  }
}
@media (min-width: 768px) and (max-width: 1920px) {
  .multifocal-lens {
    margin-top: 2.6042vw;
  }
  .multifocal-lens-banner-text-title {
    font-size: 1.8524vw;
    letter-spacing: 0.2254vw;
  }
  .multifocal-lens-banner-text-title span {
    font-size: 3.1745vw;
  }
  .multifocal-lens-banner-text-context {
    font-size: 1.1979vw;
    line-height: 2.2125vw;
    letter-spacing: 0.008vw;
  }
  .multifocal-lens-content {
    margin: 3.6979vw auto 0;
  }
  .multifocal-lens-content-in {
    padding: 0.8854vw calc(45 / 1261 * 100%);
  }
  .multifocal-lens-content-in-text {
    font-size: 1.1867vw;
    line-height: 2.5vw;
    letter-spacing: 0.1406vw;
  }
  .multifocal-lens-category {
    padding: 6.7708vw 0 10.4167vw;
    margin-top: -1.5625vw;
    // margin-bottom: 1.0417vw;
    background-size: 100% auto;
  }
  .multifocal-lens-category-title > img {
    width: 6.4583vw;
  }
  .multifocal-lens-category-title > span {
    font-size: 2.7083vw;
    line-height: 2.5vw;
    letter-spacing: 0.2708vw;
    // padding-left: 1.0417vw;
  }
  .multifocal-lens-category-in {
    margin: 3.3854vw auto 2.1875vw;
  }
  .multifocal-lens-category-in .table {
    border-radius: 3.2188vw;
    border: 0.3125vw solid #bcd7f7;
  }
  .multifocal-lens-category-in .table .tr {
    min-height: 6.3021vw;
  }
  .multifocal-lens-category-in .table .tr .td {
    font-size: 1.1867vw;
    line-height: 1.9874vw;
    /* 141.325% */
    letter-spacing: 0.1406vw;
  }
  .multifocal-lens-category-in .table .tr .td > img {
    width: 5.1042vw;
    margin-top: 0.2604vw;
  }
  .multifocal-lens-category-in .table .tr .td .fontsmall {
    // font-size: 1.0417vw;
    line-height: 1.5938vw;
    letter-spacing: 0.1042vw;
  }
  .multifocal-lens-category-in .table .tr .td:nth-of-type(1) {
    font-size: 1.1867vw;
    line-height: 2.2713vw;
    letter-spacing: 0.1667vw;
  }
  .multifocal-lens-category-in .table .tr .td:not(:last-child) {
    border-right: 0.3125vw solid #bcd7f7;
  }
  .multifocal-lens-category-in .table .tr:nth-of-type(1) .td {
    font-size: 1.1867vw;
    line-height: 2.2713vw;
    letter-spacing: 0.1667vw;
  }
  .multifocal-lens-category-in .table .tr:last-child .td {
    padding: 0.7813vw 0;
  }
  .multifocal-lens-category-in .table .tr:not(:last-child) {
    border-bottom: 0.3125vw solid #bcd7f7;
  }
  .multifocal-lens-category-context > h2 {
    font-size: 1.5104vw;
    line-height: 2.5vw;
    letter-spacing: 0.151vw;
  }
  .multifocal-lens-category-context p {
    font-size: 1.25vw;
    line-height: 2.2713vw;
    letter-spacing: 0.125vw;
  }
  .multifocal-lens-category-btn > a {
    border: 0.2604vw solid #fab87b;
    padding: 0.7813vw 0.5208vw 1.0417vw 3.125vw;
    font-size: 2.3958vw;
    line-height: 2.5vw;
    /* 104.348% */
    letter-spacing: 0.2396vw;
    margin: 5.2083vw auto 0;
  }
  .multifocal-lens-category-btn > a::before {
    width: 5.2083vw;
    height: 7.1354vw;
  }
  .multifocal-lens-category-btn > a:hover {
    font-size: 2.0833vw;
  }
  .multifocal-lens-banner2-text-title {
    font-size: 3.1745vw;
    letter-spacing: 0.8254vw;
  }
  .multifocal-lens-banner2-text-context {
    font-size: 1.1979vw;
    line-height: 2.8125vw;
    letter-spacing: 0.1198vw;
  }
  .multifocal-lens-title > span {
    font-size: 2.7083vw;
    padding: 0 2.6042vw;
  }
  .multifocal-lens-title > span::before,
  .multifocal-lens-title > span::after {
    width: 0.3125vw;
    height: 1.5625vw;
  }
  .multifocal-lens-title::after {
    height: 0.3125vw;
  }
  .multifocal-lens-benefit-in {
    margin-top: 4.4271vw;
  }
  .multifocal-lens-benefit-in-text > div {
    font-size: 1.1867vw;
    line-height: 2.5vw;
    letter-spacing: 0.1406vw;
  }
  .multifocal-lens-benefit-in-text > div > img {
    margin-right: 0.8854vw;
  }
  .multifocal-lens-benefit-in-text > div > span {
    font-size: 1.2271vw;
    letter-spacing: 0.1927vw;
  }
  .multifocal-lens-btn > a {
    border: 0.4688vw solid #fff;
    padding: 0.5208vw 1.5208vw 0.7813vw 3.125vw;
    font-size: clamp(18px, 2.2vw, 40px);
    line-height: 3.3333vw;
    letter-spacing: 0.1em;
    margin: 7.2396vw auto 5.1042vw;
  }
  .multifocal-lens-btn > a:hover {
    color: #fff;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
    text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.4);
    transform: translateY(-5px);
    font-size: 2.5vw;
  }
  .multifocal-lens-btn > a::after {
    width: 5.3125vw;
    height: 5.625vw;
  }
  .multifocal-lens-problem {
    margin: 2.0833vw auto;
    padding: 0 0 11.625rem;
  }
  .multifocal-lens-problem::before {
    height: 0.3125vw;
  }
  .multifocal-lens-problem-in {
    padding: 2.6042vw 0;
  }
  .multifocal-lens-problem-in::after {
    height: 0.3125vw;
  }
  .multifocal-lens-problem-h2 > p {
    font-size: 1.1867vw;
    line-height: 2.5vw;
    letter-spacing: 0.1667vw;
  }
  .multifocal-lens-problem-h2 > i {
    width: 1.9792vw;
    height: 1.9792vw;
    font-size: 2.3438vw;
  }
  .multifocal-lens-problem-p {
    padding-top: 2.6042vw;
    padding-bottom: 1.5625vw;
  }
  .multifocal-lens-problem-p > p {
    font-size: 1.1867vw;
    line-height: 2.5vw;
    letter-spacing: 0.1406vw;
  }
  .multifocal-lens-problem-p::before {
    font-size: 1.1867vw;
    line-height: 2.5vw;
    letter-spacing: 0.1667vw;
  }

  @keyframes categoryBtnAnimation {
    0% {
      width: 8.3333vw;
      height: 5.7292vw;
    }
    5% {
      width: 3.9063vw;
      height: 7.6563vw;
    }
    10% {
      width: 6.7708vw;
      height: 7.0313vw;
    }
    15% {
      width: 4.6875vw;
      height: 7.2917vw;
    }
    20% {
      width: 5.7292vw;
      height: 7.0313vw;
    }
    25% {
      width: 5.2083vw;
      height: 7.1354vw;
    }
    90% {
      width: 5.2083vw;
      height: 7.1354vw;
    }
    100% {
      width: 8.3333vw;
      height: 5.7292vw;
    }
  }
}
@media screen and (max-width: 767px) {
  .multifocal-lens {
    margin-top: 17.6vw;
  }
  .multifocal-lens-banner {
    width: 100%;
  }
  .multifocal-lens-banner-in {
    height: auto;
    padding-bottom: 0;
  }
  .multifocal-lens-banner-in > img {
    width: 100%;
    height: auto;
    position: initial;
  }
  .multifocal-lens-banner-text {
    width: 100%;
    height: 52%;
    top: auto;
    bottom: 0;
    left: 0;
    transform: none;
    padding: 1.2821vw 2.8205vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(
      180deg,
      transparent,
      rgba(255, 255, 255, 0.85) 30%
    );
  }
  .multifocal-lens-banner-text-title {
    font-size: 7.2644vw;
    letter-spacing: 0.7264vw;
    line-height: 1.4;
    margin-bottom: 0;
  }
  .multifocal-lens-banner-text-title span {
    font-size: 9.5067vw;
    letter-spacing: 2.4718vw;
    display: block;
  }
  .multifocal-lens-banner-text-title > i {
    display: none;
  }
  .multifocal-lens-banner-text-context {
    font-size: 3.8462vw;
    line-height: 7.1795vw;
    letter-spacing: 0.3846vw;
  }
  .multifocal-lens-content {
    width: 100%;
    margin: 14.6154vw auto 0;
    padding: 0 3.0769vw;
  }
  .multifocal-lens-content-in {
    position: relative;
    padding: 2.5641vw 5.8974vw;
  }
  .multifocal-lens-content-in::before {
    content: '';
    display: block;
    position: absolute;
    width: 14.6154vw;
    height: 14.6154vw;
    left: 50%;
    top: -12.0513vw;
    transform: translateX(-50%);
    border-radius: 50%;
    background: #fff;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
    z-index: 0;
  }
  .multifocal-lens-content-in > img {
    position: absolute;
    width: 11.2821vw;
    left: 50%;
    top: -10vw;
    transform: translateX(-50%);
    z-index: 1;
  }
  .multifocal-lens-content-in-text {
    font-size: 3.8462vw;
    letter-spacing: 0.3846vw;
    line-height: 6.1538vw;
  }
  .multifocal-lens-content-in-text .mbBox {
    display: inline-block;
  }
  .multifocal-lens-content-in-text .pcBox {
    display: none;
  }
  .multifocal-lens-category {
    padding: 15.641vw 0 9.4872vw;
    margin-top: 0;
    margin-bottom: 0;
    background-size: 100% auto;
    background: url(https://static.cmereye.com/imgs/2024/03/e2319c91faf8c7bb.png)
        no-repeat top center,
      url(https://static.cmereye.com/imgs/2024/03/e9eed05a265bdfbd.png)
        no-repeat bottom center;
    background-size: 100% auto;
  }
  .multifocal-lens-category-title > img {
    width: 20.5128vw;
  }
  .multifocal-lens-category-title > span {
    font-size: 7.2631vw;
    line-height: 6.7044vw;
    letter-spacing: 0.7264vw;
    padding-left: 2.5641vw;
  }
  .multifocal-lens-category-in {
    width: 100%;
    margin: 6.4103vw auto 2.5641vw;
    padding: 0 3.8462vw;
  }
  .multifocal-lens-category-in .table {
    width: 100%;
    border: none;
    border-radius: 0;
    overflow: initial;
  }
  .multifocal-lens-category-in .table .tr {
    min-height: 22.0513vw;
    position: relative;
    perspective: 500px;
    padding: 2px 0;
  }
  .multifocal-lens-category-in .table .tr::after {
    content: '';
    height: 4px;
    width: 100%;
    background: #bcd7f7;
    border-radius: 2px;
    position: absolute;
    bottom: -2px;
    left: 0;
    z-index: 1;
  }
  .multifocal-lens-category-in .table .tr .td {
    font-size: 3.0769vw;
    line-height: 5.0338vw;
    letter-spacing: 0.3077vw;
    padding: 5.1282vw 0.7692vw;
  }
  .multifocal-lens-category-in .table .tr .td > img {
    width: 8.9744vw;
    transform: rotate(90deg);
    margin-top: 0;
  }
  .multifocal-lens-category-in .table .tr .td .brshow {
    display: block;
  }
  .multifocal-lens-category-in .table .tr .td .fontsmall {
    font-size: 2.5641vw;
    line-height: 3.5897vw;
    letter-spacing: 0.2821vw;
  }
  .multifocal-lens-category-in .table .tr .td:nth-of-type(1) {
    font-size: 3.5897vw;
    line-height: 4.1026vw;
    letter-spacing: 0.359vw;
  }
  .multifocal-lens-category-in .table .tr .td:nth-of-type(2),
  .multifocal-lens-category-in .table .tr .td:nth-of-type(3),
  .multifocal-lens-category-in .table .tr .td:nth-of-type(4) {
    width: calc(100 / 360 * 100%);
  }
  .multifocal-lens-category-in .table .tr .td:not(:last-child) {
    border-right: none;
  }
  .multifocal-lens-category-in .table .tr:nth-of-type(1) .td {
    font-size: 3.3333vw;
    line-height: 3.8462vw;
    letter-spacing: 0.3333vw;
    flex-direction: row;
  }
  .multifocal-lens-category-in .table .tr:last-child .td {
    padding: 5.1282vw 0.7692vw;
    text-align: center;
  }
  .multifocal-lens-category-in .table .tr:not(:last-child) {
    border-bottom: none;
  }
  .multifocal-lens-category-context {
    width: 100%;
    padding: 0 3.8462vw;
  }
  .multifocal-lens-category-context > h2 {
    font-size: 3.3333vw;
    line-height: 7.5605vw;
    letter-spacing: 0.3333vw;
  }
  .multifocal-lens-category-context p {
    font-size: 3.8462vw;
    line-height: 6.3077vw;
    letter-spacing: 0.3846vw;
  }
  .multifocal-lens-category-context p .mbBox {
    display: block;
  }
  .multifocal-lens-category-btn > a {
    border: 2px solid #fab87b;
    font-size: 5.4836vw;
    line-height: 5.7221vw;
    letter-spacing: 0.5485vw;
    margin: 10.2564vw auto 0;
    padding: 2.5641vw 1.2821vw 2.5641vw 7.6923vw;
  }
  .multifocal-lens-category-btn > a::before {
    width: 12.5641vw;
    height: 16.4103vw;
  }
  .multifocal-lens-category-btn > a:hover {
    font-size: 5.4836vw;
  }
  .multifocal-lens-banner2 {
    width: 100%;
    height: 420px;
  }
  .multifocal-lens-banner2-in {
    height: 100%;
    padding-bottom: 0;
  }
  .multifocal-lens-banner2-in > img {
    position: initial;
    height: auto;
  }
  .multifocal-lens-banner2-text {
    transform: none;
    left: 0;
    top: auto;
    bottom: 0;
    height: 69.4872vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(
      180deg,
      transparent,
      rgba(255, 255, 255, 0.85) 30%
    );
  }
  .multifocal-lens-banner2-text-title {
    width: calc(260 / 390 * 100%);
    font-size: 7.2897vw;
    line-height: 10.2564vw;
    letter-spacing: 1.8954vw;
    margin: 0 auto;
  }
  .multifocal-lens-banner2-text-context {
    width: calc(100% - 12.8205vw);
    margin: 0 auto;
    font-size: 3.8462vw;
    line-height: 6.4615vw;
    letter-spacing: 0.3846vw;
    text-align: center;
  }
  .multifocal-lens-title {
    width: calc(279 / 390 * 100%);
  }
  .multifocal-lens-title > span {
    font-size: 6.3854vw;
    letter-spacing: 0.6385vw;
    padding: 0 3vw;
    max-width: 61.5385vw;
    display: block;
    margin: 0 auto;
  }
  .multifocal-lens-title > span::before,
  .multifocal-lens-title > span::after {
    width: 0.7692vw;
    height: 3.8462vw;
  }
  .multifocal-lens-title::after {
    height: 0.7692vw;
  }
  .multifocal-lens-meetArr {
    width: 82%;
    max-width: 100vw;
    margin: 20px auto 0;
  }
  .multifocal-lens-benefit {
    width: calc(300 / 390 * 100%);
  }
  .multifocal-lens-benefit-in {
    margin-top: 7.6923vw;
    flex-direction: column-reverse;
  }
  .multifocal-lens-benefit-in-img {
    width: 100%;
    margin-left: 0;
  }
  .multifocal-lens-benefit-in-text {
    margin-top: 2.5641vw;
  }
  .multifocal-lens-benefit-in-text > div {
    font-size: 3.8462vw;
    line-height: 5.3846vw;
    letter-spacing: 0.3846vw;
  }
  .multifocal-lens-benefit-in-text > div > img {
    width: 6.1538vw;
    margin: 0px 2.0513vw 1.2821vw 0;
  }
  .multifocal-lens-benefit-in-text > div > span {
    font-size: 4.359vw;
    letter-spacing: 0.4359vw;
  }
  .multifocal-lens-benefit-in:nth-of-type(even) {
    flex-direction: column-reverse;
  }
  .multifocal-lens-benefit-in:nth-of-type(even)
    .multifocal-lens-benefit-in-img {
    margin-right: 0;
  }
  .multifocal-lens-btn > a {
    border: 1.0256vw solid #fff;
    font-size: 5.1282vw;
    line-height: 6.1538vw;
    letter-spacing: 0.9744vw;
    padding: 2.5641vw 2.5641vw 3.3333vw 7.6923vw;
    margin: 3.8462vw auto 10.2564vw;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }
  .multifocal-lens-btn > a:hover {
    font-size: 5.1282vw;
  }
  .multifocal-lens-btn > a::after {
    width: 11.9487vw;
    height: 12.8205vw;
  }
  .multifocal-lens-problem {
    width: calc(330 / 390 * 100%);
    padding: 0 0 13.3333vw;
    margin: 5.1282vw auto;
  }
  .multifocal-lens-problem::before {
    height: 1.5385vw;
  }
  .multifocal-lens-problem-in {
    padding: 4.6154vw 0;
  }
  .multifocal-lens-problem-in::after {
    height: 1.5385vw;
  }
  .multifocal-lens-problem-h2 {
    flex-direction: row-reverse;
    align-items: flex-start;
  }
  .multifocal-lens-problem-h2 > p {
    font-size: 4.1026vw;
    line-height: 5.641vw;
    letter-spacing: 0.4103vw;
  }
  .multifocal-lens-problem-h2 > i {
    font-size: 6.4103vw;
    margin-right: 1.2821vw;
    margin-top: 0;
  }
  .multifocal-lens-problem-p {
    padding-top: 1.2821vw;
    padding-bottom: 1.2821vw;
  }
  .multifocal-lens-problem-p > p {
    font-size: 3.8462vw;
    line-height: 5.8974vw;
    letter-spacing: 0.3846vw;
  }
  .multifocal-lens-problem-p::before {
    display: none;
  }

  @keyframes categoryBtnAnimation {
    0% {
      width: 20.2564vw;
      height: 10.2564vw;
    }
    5% {
      width: 10.2564vw;
      height: 17.9487vw;
    }
    10% {
      width: 15.3846vw;
      height: 15.3846vw;
    }
    15% {
      width: 11.5385vw;
      height: 17.9487vw;
    }
    20% {
      width: 13.3333vw;
      height: 15.8974vw;
    }
    25% {
      width: 12.5641vw;
      height: 16.4103vw;
    }
    90% {
      width: 12.5641vw;
      height: 16.4103vw;
    }
    100% {
      width: 20.2564vw;
      height: 10.2564vw;
    }
  }
}
</style>

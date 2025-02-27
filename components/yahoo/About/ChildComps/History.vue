<script setup lang="ts">
const locale = useState<string>('locale.setting')
const historyList = ref([
  {
    year: 'pages.about_us.course_year.year_24',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_24.child24_month_3',
        info: 'pages.about_us.course_year.child_24.child24_info_3_1',
      },
      {
        month: 'pages.about_us.course_year.child_24.child24_month_2',
        info: 'pages.about_us.course_year.child_24.child24_info_2',
      },
      {
        month: 'pages.about_us.course_year.child_24.child24_month_1',
        info: 'pages.about_us.course_year.child_24.child24_info_1',
      },
    ],
  },
  {
    year: 'pages.about_us.course_year.year_23',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_23.child23_month_2',
        info: 'pages.about_us.course_year.child_23.child23_info_2',
      },
      {
        month: 'pages.about_us.course_year.child_23.child23_month_1',
        info: 'pages.about_us.course_year.child_23.child23_info_1',
      },
    ],
  },
  {
    year: 'pages.about_us.course_year.year_22',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_22.child22_month_1',
        info: 'pages.about_us.course_year.child_22.child22_info_1',
      },
      {
        month: 'pages.about_us.course_year.child_22.child22_month_2',
        info: 'pages.about_us.course_year.child_22.child22_info_2',
      },
      {
        month: 'pages.about_us.course_year.child_22.child22_month_3',
        info: ['pages.about_us.course_year.child_22.child22_info_3_1'],
      },
    ],
  },
  {
    year: 'pages.about_us.course_year.year_21',
    contentList: [
      // {
      //   month: 'pages.about_us.course_year.child_21.child21_month_4',
      //   info: 'pages.about_us.course_year.child_22.child22_info_3_2',
      // },
      {
        month: 'pages.about_us.course_year.child_21.child21_month_1',
        info: 'pages.about_us.course_year.child_21.child21_info_1',
      },
      {
        month: 'pages.about_us.course_year.child_21.child21_month_2',
        info: [
          'pages.about_us.course_year.child_21.child21_info_2_1',
          'pages.about_us.course_year.child_21.child21_info_2_2',
        ],
      },
      {
        month: 'pages.about_us.course_year.child_21.child21_month_3',
        info: [
          'pages.about_us.course_year.child_21.child21_info_3',
          'pages.about_us.course_year.child_21.child21_info_3_2',
        ],
      },
    ],
  },
  {
    year: 'pages.about_us.course_year.year_20',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_20.child_month',
        info: [
          'pages.about_us.course_year.child_20.child_info_1',
          // 'pages.about_us.course_year.child_20.child_info_2',
          // 'pages.about_us.course_year.child_20.child_info_3',
        ],
      },
      {
        month: 'pages.about_us.course_year.child_20.child_month_2',
        info: [
          // 'pages.about_us.course_year.child_20.child_info_1',
          'pages.about_us.course_year.child_20.child_info_2',
          'pages.about_us.course_year.child_20.child_info_3',
        ],
      },
    ],
  },
  {
    year: 'pages.about_us.course_year.year_19',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_19.child_month_1',
        info: 'pages.about_us.course_year.child_19.child_info_1',
      },
      {
        month: 'pages.about_us.course_year.child_19.child_month_2',
        info: 'pages.about_us.course_year.child_19.child_info_2',
      },
      {
        month: 'pages.about_us.course_year.child_19.child_month_3',
        info: 'pages.about_us.course_year.child_19.child_info_3',
      },
      {
        month: 'pages.about_us.course_year.child_19.child_month_4',
        info: 'pages.about_us.course_year.child_19.child_info_4',
      },
    ],
  },
  {
    year: '2018',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_18.child_month_1',
        info: 'pages.about_us.course_year.child_18.child_info_1',
      },
      {
        month: 'pages.about_us.course_year.child_18.child_month_2',
        info: 'pages.about_us.course_year.child_18.child_info_2',
      },
      {
        month: 'pages.about_us.course_year.child_18.child_month_3',
        info: 'pages.about_us.course_year.child_18.child_info_3',
      },
    ],
  },
  {
    year: 'pages.about_us.course_year.year_17',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_17.child_month',
        info: 'pages.about_us.course_year.child_17.child_info',
      },
    ],
  },
  {
    year: 'pages.about_us.course_year.year_16',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_16.child_month_1',
        info: 'pages.about_us.course_year.child_16.child_info_1',
      },
      {
        month: 'pages.about_us.course_year.child_16.child_month_2',
        info: 'pages.about_us.course_year.child_16.child_info_2',
      },
    ],
  },
  {
    year: 'pages.about_us.course_year.year_14',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_14.child_month',
        info: 'pages.about_us.course_year.child_14.child_info',
      },
    ],
  },
  {
    year: 'pages.about_us.course_year.year_13',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_13.child_month',
        info: 'pages.about_us.course_year.child_13.child_info',
      },
    ],
  },
  {
    year: 'pages.about_us.course_year.year_12',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_12.child_month',
        info: 'pages.about_us.course_year.child_12.child_info',
      },
    ],
  },
])
</script>
<template>
  <div id="history" class="maxCon">
    <div class="history-title">
      <yahooAboutTitle
        :zh-title="$t('pages.about_us.development_course')"
        :en-ttitle="'our history'"
        class="title relative z-50"
      />
    </div>
    <div
      class="mainHistoryBox"
      :class="{ 'mainHistoryBox-en': locale === 'en' }"
    >
      <div
        v-for="(years, i) in historyList"
        :key="i"
        class="historyContent relative z-50"
      >
        <h1 class="year en-font text-center pb-2 mb-5">{{ $t(years.year) }}</h1>
        <div
          v-for="(item, index) in years.contentList"
          :key="index"
          class="content flex items-start justify-start"
        >
          <p class="month">{{ $t(item.month) }}</p>
          <div v-if="Array.isArray(item.info)">
            <div v-for="(ele, i) in item.info" :key="i" class="info">
              <p>{{ $t(ele) }}</p>
            </div>
          </div>
          <div v-else>
            <p class="info">{{ $t(item.info) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#history {
  margin-top: 10rem;
  padding-top: 2.75rem;
  position: relative;
}

.history-title {
  position: absolute;
  top: 2.75rem;
  width: 100%;
  max-width: 960px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  .title {
    width: max-content;
  }
}

.mainHistoryBox {
  width: 100%;
  max-width: 790px;
  position: relative;
  margin-bottom: 34px;
  background: #f2f2f2;
  padding: 110px 0 30px;
  margin-left: 17%;
  .historyContent {
    padding: 0 8%;
    margin-bottom: 3.5rem;
    .year {
      font-family: 'Metropolis';
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      letter-spacing: 0.05em;
      // text-transform: uppercase;

      color: #515151;
      border-bottom: 1.5px solid #515151;
      line-height: 32px;
    }

    .content {
      font-family: 'Metropolis';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 1.5;
      /* or 140% */

      letter-spacing: 0.05em;
      // text-transform: uppercase;

      color: #515151;

      width: 90%;
      margin: 0 auto;
      margin-bottom: 15px;

      .month {
        width: 13%;
        padding-right: 10%;
        // text-align: right;
        box-sizing: content-box;
        min-width: 13%;
      }

      .info {
        // width: 360px;
        // max-width: 400px;
        white-space: pre-wrap !important;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #history {
    margin-top: 0px;
    padding-top: 100px;
  }
  .history-title {
    width: max-content;
    left: 30px;
    transform: none;
  }
  .mainHistoryBox {
    width: calc(100% - 60px);
    margin: 0 auto;
    padding: 80px 0 30px;
    .historyContent {
      margin-bottom: 30px;
      padding: 0 5%;
      .year {
        font-size: 14px;
        line-height: 20px;
      }
      .content {
        width: 90%;
        font-size: 14px;
        .month {
          width: 45px;
          padding-right: 0;
        }
        & > div {
          width: calc(100% - 45px);
        }
        .info {
          width: 100%;
        }
      }
    }
    &.mainHistoryBox {
      .historyContent {
        .content {
          width: 100%;
          .month {
            width: 100px;
          }
          & > div {
            width: calc(100% - 100px);
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
}
</style>

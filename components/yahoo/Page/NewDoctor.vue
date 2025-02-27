<script lang="ts" setup>
const props = defineProps({
  list: {
    type: Object,
    default: () => [],
    required: true,
  },
})

interface NewList {
  doctorName: string
  doctorIntro: string
  doctorEnName: string
  doctorEducation: string[]
  doctorImgUrl: string
}
</script>

<template>
  <div>
    <ul class="mobile">
      <li v-for="(item, index) in props.list" :key="index" class="docList">
        <div>{{ item.doctorName }}</div>
        <div>
          <div>
            <img
              :src="
                item.doctorImgUrl.includes('https')
                  ? item.doctorImgUrl
                  : 'https://hkcmereye.com' + item.doctorImgUrl
              "
            />
            <div>
              {{ item.doctorEnName }}
            </div>
          </div>
          <div>
            <div>{{ $t('pages.medical_team.doctor_edu') }}</div>
            <div v-html="item.doctorEducation"></div>
          </div>
        </div>
        <a
          href="https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&amp;cid=7f3c58ea65c34d9d82c1f6455384212f&amp;lng=big5&amp;sid=cd5457bae7eb4c9db0534553310cb509&amp;p=https%3A//hkcmereye.com/&amp;rf1=&amp;rf2=&amp;msg=&amp;e=hkcmereye.com[youce-goutong]&amp;d=1692676040714"
          rel="noopener noreferrer"
          class="orderLink text-white inline-block"
          id="medicalTeamLink"
          data-v-ba4e2cd6=""
          >預約</a
        >
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.mobile {
  margin-top: 140px;
}
.docList {
  display: flex;
  flex-direction: column;
  margin-bottom: 75px;
  & > div:nth-child(1) {
    color: #515151;
    font-family: 'Noto Sans HK';
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 45px;
  }
  & > div:nth-child(2) {
    display: flex;
    gap: 0 4.165vw;
    & > div:nth-child(1) {
      width: 31.25vw;
      min-width: 31.25vw;
      height: fit-content;
      position: relative;
      &>img,
      &>div {
        position: relative;
        z-index: 5;
      }
      & > img {
        width: 100%;
      }
      & > div {
        font-family: 'ButterTangXin';
        color: #2958a3;
        font-size: 5vw;
        font-style: normal;
        font-weight: 100;
        line-height: normal;
        position: absolute;
        right: -8.75vw;
        bottom: -8.75vw;
      }
    }
    & > div:nth-child(1)::after {
      content: '';
      width: 32.29165vw;
      height: 31.25vw;
      display: inline-block;
      background: #F2F2F2;
      position: absolute;
      bottom: 0;
      right: 0;
    }
    & > div:nth-child(2) {
      display: flex;
      gap: 0 2.9165vw;
      & > div:nth-child(1) {
        white-space: nowrap;
        color: #515151;
        font-family: 'Noto Sans HK';
        font-size: 3.33vw;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      & > div:nth-child(2) {
        color: #515151;
        font-family: 'Noto Sans HK';
        font-size: 3.125vw;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        :deep(p) {
          margin-bottom: 1.665vw;
        }
      }
    }
  }
}
.medical-team .mainCon .docList .orderLink {
  margin: 0 !important;
  margin-right: 17.5vw !important;
  margin-left: auto !important;
}
.docList:last-child {
  margin-bottom: 0;
}
li:nth-child(1) {
  & > div:nth-child(2) {
    & > div:nth-child(1)::after {
      height: 42.703vw;
      bottom: -8.75vw;
      left: -8.75vw;
      right: auto;
    }
  }
}
li:nth-child(2) {
  & > div:nth-child(2) {
    & > div:nth-child(1)::after {
      height: 34.375v;
      bottom: -8.75vw;
      left: -8.75vw;
      right: auto;
    }
  }
}
li:nth-child(4),
li:nth-child(11),
li:nth-child(18) {
  & > div:nth-child(2) {
    & > div:nth-child(1)::after {
      height: 36.4583vw;
      bottom: 8.75vw;
      left: -8.75vw;
      right: auto;
    }
  }
}
li:nth-child(5),
li:nth-child(19) {
  & > div:nth-child(2) {
    & > div:nth-child(1)::after {
      height: 40.625vw;
      bottom: 5.75vw;
      left: -8.75vw;
      right: auto;
    }
  }
}
li:nth-child(6) {
  & > div:nth-child(2) {
    & > div:nth-child(1)::after {
      height: 36.4583vw;
      bottom: -8.75vw;
      left: -8.75vw;
      right: auto;
    }
  }
}
li:nth-child(7),
li:nth-child(15),
li:nth-child(23) {
  & > div:nth-child(2) {
    & > div:nth-child(1)::after {
      height: 40.625vw;
      bottom: 5.75vw;
      left: -8.75vw;
      right: auto;
    }
  }
}
li:nth-child(3),
li:nth-child(8),
li:nth-child(12),
li:nth-child(16),
li:nth-child(21) {
  & > div:nth-child(2) {
    & > div:nth-child(1)::after {
      height: 26.04165vw;
      bottom: 3.75vw;
      left: -8.75vw;
      right: auto;
    }
  }
}
li:nth-child(9),
li:nth-child(13),
li:nth-child(20),
li:nth-child(22) {
  & > div:nth-child(2) {
    & > div:nth-child(1)::after {
      height: 40.625vw;
      bottom: 4.75vw;
      left: -8.75vw;
      right: auto;
    }
  }
}
li:nth-child(10),
li:nth-child(14),
li:nth-child(17),
li:nth-child(24) {
  & > div:nth-child(2) {
    & > div:nth-child(1)::after {
      height: 36.4583vw;
      bottom: -8.75vw;
      left: -8.75vw;
      right: auto;
    }
  }
}

</style>
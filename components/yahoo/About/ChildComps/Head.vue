<script setup lang="ts">
const anchorList = ref([
  {
    anchorName: 'pages.about_us.center_profile',
    anchorLink: '/yahoo/about-us#centreIntro',
  },
  {
    anchorName: 'pages.about_us.development_course',
    anchorLink: '/yahoo/about-us#history',
  },
  {
    anchorName: 'pages.about_us.enterprise_vision',
    anchorLink: '/yahoo/about-us#corporate',
  },
  {
    anchorName: 'pages.about_us.equipment_centre',
    anchorLink: '/yahoo/about-us#medicalEquipment',
  },
  {
    anchorName: 'pages.about_us.feedback',
    anchorLink: '/yahoo/about-us#feedback',
  },
  {
    anchorName: 'pages.about_us.enterprise_awards',
    anchorLink: '/yahoo/about-us#awards',
  },
  // {
  //   anchorName: 'pages.process_cost.cost',
  //   anchorLink: '/yahoo/process-and-cost',
  // },
  // {
  //   anchorName: 'pages.process_cost.process',
  //   anchorLink: '/yahoo/process-and-cost#process',
  // },
])
const acIdex = ref(-1)
const exactIdex = ref(-1)
const changeActive = (index: any) => {
  acIdex.value = index
}
const enterActive = (index: any) => {
  exactIdex.value = index
}
const leaveActive = () => {
  exactIdex.value = -1
}
</script>
<template>
  <div class="aboutHead maxCon">
    <div class="title">{{ $t('pages.about_us.about_us') }}</div>
    <div class="imgBox">
      <img
        src="https://static.cmereye.com/imgs/2023/06/8095216b29f693c7.jpg"
        title="希瑪眼科中心_觀塘診所"
        alt="希瑪眼科中心_觀塘診所明亮舒適的接待區"
      />
      <img
        src="https://static.cmereye.com/imgs/2023/05/fcbe60b94457087b.png"
        title="希瑪眼科中心_眼科儀器"
        alt="希瑪眼科中心配備先進的眼科檢查儀器"
      />
      <img
        src="https://static.cmereye.com/imgs/2023/06/d72dad915e01bf72.jpg"
        title="希瑪眼科中心_中環診所"
        alt="希瑪眼科中心_中環診所接待區"
      />
    </div>
    <div class="dow">
      <svg
        width="9"
        height="144"
        viewBox="0 0 9 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1V143L7.5 130.5"
          stroke="#2958A3"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div>
      <yahoorightSidesNavigation :service-navigation="anchorList" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.aboutHead {
  z-index: 99;
  position: relative;
}
.title {
  position: absolute;
  top: 102px;
  left: 100px;
  -ms-writing-mode: tb-lr;
  writing-mode: vertical-lr;
  font-family: 'Noto Sans HK';
  font-style: normal;
  font-weight: 400;
  font-size: 40.1431px;
  line-height: 46px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #515151;
  &::after {
    content: 'About Us';
    position: absolute;
    bottom: 0;
    text-transform: uppercase;
    left: -50px;
    font-family: 'Metropolis';
    font-style: normal;
    font-weight: 500;
    font-size: 23.0172px;
    line-height: 55px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #8ad8dd;
  }
}

.imgBox {
  width: 100%;
  max-width: 606px;
  position: relative;
  background: #f2f2f2;
  height: 840px;
  margin-bottom: 30px;
  margin-left: 30%;
  img {
    position: absolute;
    &:nth-child(1) {
      left: -146px;
      top: 350px;
    }
    &:nth-child(2) {
      right: -30px;
      top: 130px;
    }
    &:nth-child(3) {
      right: 20px;
      bottom: -50px;
    }
  }
}

.dow {
  position: absolute;
  left: 3.69792%;
}
@media screen and (max-width: 768px) {
  .title {
    z-index: 2;
    -ms-writing-mode: initial;
    writing-mode: initial;
    font-size: 30px;
    top: -35px;
    left: 30px;
    &::after {
      font-size: 16px;
      left: 0;
      bottom: -20px;
      line-height: 20px;
    }
  }
  .imgBox {
    width: calc(100% - 80px);
    height: 300px;
    margin-top: 130px;
    margin-left: 80px;
    img {
      position: absolute;
      &:nth-child(1) {
        left: -65px;
        width: 210px;
        top: 100px;
      }
      &:nth-child(2) {
        width: 120px;
        right: 25px;
        top: 25px;
      }
      &:nth-child(3) {
        right: 40px;
        width: 200px;
      }
    }
  }
}
</style>

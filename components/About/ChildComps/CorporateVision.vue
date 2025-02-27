<template>
  <div id="corporateVision" class="mt-72 relative">
    <div class="absolute top-0 right-0 imgbox">
      <img
        src="https://static.cmereye.com/imgs/hkcmereye-newstyle/about/cor-vision.jpg"
        alt=""
      />
    </div>

    <AboutTitle :zh-title="'企業願景'" :en-ttitle="'CORPORATE VISION'" />

    <div class="mainText relative z-50">
      <ul>
        <li>
          <h2 class="pb-2 mb-6">服務宗旨</h2>
          <p>以客人需求為依歸，提供針對性及達國際水準的眼科醫療服務。</p>
        </li>
        <li>
          <h2 class="pb-2 mb-6">服務理念</h2>
          <p>以人為本，注重細節，團隊合作，精益求精。</p>
        </li>

        <li>
          <h2 class="pb-2 mb-6">服務特色</h2>
          <div class="desBox">
            <p class="flex items-center justify-start">
              <span class="text-sm color1">
                <Iconify icon="akar-icons:chevron-right" />
              </span>
              以客人需求為本，提供一站式眼科醫療服務
            </p>
            <p class="des font-light text-sm">
              中心按客人需要提供全面眼科服務，包括驗光、檢查、治療、矯視及配鏡。
            </p>
          </div>

          <div class="desBox">
            <p class="flex items-center justify-start">
              <span class="text-sm color1">
                <Iconify icon="akar-icons:chevron-right" />
              </span>
              眼科專科診療
            </p>
            <p class="des font-light text-sm">
              除了綜合眼科服務外，我們亦提供眼科專科服務，由24位不同專長且經驗豐富的眼科醫生診治，覆蓋眼科九大專科，為患者提供針對性的治療。
            </p>
          </div>

          <div class="desBox">
            <p class="flex items-center justify-start">
              <span class="text-sm color1">
                <Iconify icon="akar-icons:chevron-right" />
              </span>
              國際認可的先進眼科醫療技術
            </p>
            <p class="des font-light text-sm">
              中心的醫生具豐富臨床經驗，恆常與國際眼科界交流，引入最新醫療技術及設備，為客人提供可靠的眼科醫療服務。
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>
<style scoped lang="scss">
#corporateVision {
  width: 70%;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
}

.mainText {
  width: 83%;

  ul {
    li {
      margin: 100px 0;

      h2 {
        font-size: 28px;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          width: 80px;
          height: 1%;
          border-bottom: 2px solid #8ad8dd;
          bottom: 0;
        }
      }

      .desBox {
        margin-bottom: 30px;

        .des {
          padding-left: 41px;
        }
      }
    }
  }
}

.imgbox {
  top: -50px;
  right: 10%;
  width: 33%;
  img {
    position: relative;
    z-index: 2;
  }
  &::before {
    content: '';
    position: absolute;
    right: 50px;
    top: 50px;
    width: 160%;
    height: 150%;
    background: #f2f2f2;
    z-index: 0;
  }
}
</style>

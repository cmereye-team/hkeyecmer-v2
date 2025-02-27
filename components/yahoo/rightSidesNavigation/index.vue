<script lang="ts" setup>
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
const route = useRoute()
const rt = ref(route)
const props = defineProps({
  serviceNavigation: {
    type: Object,
    default: () => ({}),
  },
})
</script>
<!-- 右侧边导航，文件夹起名的时候 格局小了 rightSidesNavigation -->
<template>
  <div class="navigation">
    <div
      class="seat"
      :class="[
        (rt.name === 'yahoo-medical-service-eyeOrthopaedicDisease' || rt.name === 'yahoo-en-medical-service-eyeOrthopaedicDisease')
          ? 'anchor_top'
          : 'anchor',
      ]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="86px"
        height="29px"
      >
        <image
          x="0px"
          y="0px"
          width="86px"
          height="29px"
          xlink:href="data:img/png;base64,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"
        />
      </svg>
      <div
        v-for="(item, index) in props.serviceNavigation"
        :key="index"
        class="flex flex-col"
        @click="changeActive(Number(index))"
        @mouseenter="enterActive(index)"
        @mouseleave="leaveActive"
      >
        <nuxtLink
          :to="item.anchorLink"
          :class="{
            anchorActive: acIdex === Number(index),
            exactActive: exactIdex === Number(index),
          }"
        >
          {{ $t(item.anchorName) }}
        </nuxtLink>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.navigation {
  position: relative;
  z-index: 999;
}

.seat {
  position: fixed;
  right: 83px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > svg {
    margin-bottom: 5px;
  }
}

.anchor {
  bottom: 600px;

  a {
    width: 165px;
    border: 0.5px solid #515151;
    margin: 5px 0;
    padding: 3px 0;
    font-size: 15px;
    background: #fff;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .anchorActive,
  .exactActive {
    border: 0.5px solid #8ad8dd;
    background: #8ad8dd;
    color: #fff;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 12%;
      height: 100%;
      right: 0;
      top: 0;
      background-color: #ffffff;
    }
  }
}

.anchor_top {
  top: 20px;

  a {
    width: 165px;
    border: 0.5px solid #515151;
    margin: 5px 0;
    padding: 3px 0;
    font-size: 15px;
    background: #fff;
    display: flex;
    justify-content: center;
  }

  .anchorActive,
  .exactActive {
    border: 0.5px solid #8ad8dd;
    background: #8ad8dd;
    color: #fff;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 12%;
      height: 100%;
      right: 0;
      top: 0;
      background-color: #ffffff;
    }
  }
}
@media (min-width: 768px) and (max-width: 1920px){
  .anchor{
    bottom: 550px;
  }
}
@media screen and (max-width: 768px) {
  .anchor{
    display: none;
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .seat {
    right: 12%;
  }
}
</style>

<template>
  <div class="title2 font-normal">
    <h1 class="text-2xl">{{ $t(zhTitle) }}</h1>
    <h2 class="flex items-center justify-start en-font">
      <span class="text-xs">
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.55908L5.54301 6.10209L1 10.6451"
            stroke="#8AD8DD"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      {{ enTtitle }}
    </h2>
  </div>
</template>
<script setup lang="ts">
defineProps({
  zhTitle: {
    type: String,
    default: '',
  },
  enTtitle: {
    type: String,
    default: '',
  },
})
</script>
<style scoped lang="scss">
.title2 {
  margin-right: auto;
  position: relative;
  z-index: 80;

  h1 {
    font-family: 'Noto Sans HK';
    font-style: normal;
    font-weight: 400;
    font-size: 34.6916px;
    line-height: 50px;
    /* identical to box height, or 144% */

    text-align: center;
    letter-spacing: 0.05em;

    color: #515151;
  }
}

h2 {
  font-family: 'Metropolis';
  font-style: normal;
  font-weight: 500;
  font-size: 16.7742px;
  line-height: 2;
  /* identical to box height, or 298% */

  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #8ad8dd;

  & > span {
    margin-right: 3px;
    & > svg {
      margin-top: -4px;
    }
  }
}
@media screen and (max-width: 768px) {
  .title2 {
    h1 {
      font-size: 24px;
      line-height: 30px;
    }
  }
  h2 {
    font-size: 12px;
  }
}
</style>

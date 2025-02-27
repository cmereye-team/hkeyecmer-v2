<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
const activeNames = ref('1')
const handleChange = (val: string) => {
}
const judgeActive = (data: any) => {
  return activeNames.value.indexOf(data)
}

const props = defineProps({
  answer: {
    type: [Object],
    default: undefined,
  },
  downarr: {
    type: String,
    default: 'downArrow',
  },
})
</script>

<template>
  <el-collapse v-model="activeNames" accordion>
    <el-collapse-item
      v-for="(item, index) in props.answer"
      :key="index"
      :name="`${index + 1}`"
    >
      <template #title>
        {{ $t(item.title) }}
        <i
          class="down"
          :class="
            judgeActive(`${index + 1}`) !== -1
              ? `${props.downarr}2`
              : `${props.downarr}1`
          "
        ></i>
      </template>
      <div v-if="Array.isArray(item.agree)">
        <div>{{ item.agree[0] ? 'A：' : '' }}</div>
        <div>
          <div v-for="(ele, i) in item.agree" :key="i">
            {{ $t(ele) }}
          </div>
        </div>
      </div>
      <div v-else><span>A：</span><span v-html="$t(item.agree)"></span></div>
    </el-collapse-item>
  </el-collapse>
</template>

<style lang="scss" scoped>
// :deep 穿透element的样式
:deep(.el-collapse) {
  border-top: 2px solid var(--subassembly-color);
}

:deep(.el-collapse-item__header.is-active) {
  border-top: 2px solid var(--subassembly-color);
}

:deep(.el-collapse-item__header) {
  border-top: 2px solid var(--subassembly-color);
  justify-content: space-between;
  height: 150px;
  font-family: 'NotoSansHK-Medium';
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 41px;
  letter-spacing: 0px;
  color: var(--subassembly-color);
}

:deep(.el-collapse-item):last-child {
  border-bottom: 2px solid var(--subassembly-color);
}

:deep(.el-collapse-item__wrap) {
  // border-bottom: 2px solid var(--subassembly-color);
}

:deep(.el-collapse-item__header.is-active) {
  border-bottom-color: transparent;
}

:deep(.el-collapse-item__content) {
  font-family: 'Noto Sans HK';
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 38px;
  letter-spacing: 0px;
  color: #515151;

  & > div:nth-child(1) {
    display: flex;

    & > div:nth-child(1) {
      color: var(--subassembly-color);
    }

    & > div:nth-child(2) {
      & > div:nth-child(1) {
        margin-bottom: 35px;
      }
    }
  }

  & > div {
    & > span {
      color: var(--subassembly-color);
    }
  }
}

// 多余的边框距离
:deep(.el-collapse-item):nth-child(6) {
  & > div:nth-child(2) {
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        & > div:nth-child(2) {
          & > div:nth-child(1) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}

:deep(.el-collapse-item__arrow) {
  display: none;
}

.down {
  display: inline-block;
  width: 25px;
  height: 25px;
  min-width: 25px;
  background-repeat: round;
}

// 修改el本身 折叠icon
.downArrow1 {
  background-image: url(../../assets/images/+.png);
}

.downArrow2 {
  background-image: url(../../assets/images/-.png);
}

// cataract 白内障
.cataract1 {
  background-image: url(../../assets/images/+.png);
}

.cataract2 {
  background-image: url(../../assets/images/-.png);
}

.maculopathy1 {
  background-image: url(../../assets/images/+maculopathy.png);
}

.maculopathy2 {
  background-image: url(../../assets/images/-maculopathy.png);
}

.muscaeVolitantes1 {
  background-image: url(../../assets/images/+muscaeVolitantes.png);
}

.muscaeVolitantes2 {
  background-image: url(../../assets/images/-muscaeVolitantes.png);
}

.glaucoma1 {
  background-image: url(../../assets/images/+glaucoma.png);
}

.glaucoma2 {
  background-image: url(../../assets/images/-glaucoma.png);
}
.amotioRetinae1 {
  background-image: url(../../assets/images/+amotioRetinae.png);
}
.amotioRetinae2 {
  background-image: url(../../assets/images/-amotioRetinae.png);
}
.ocularSurfaceDiseases1{
  background-image: url(../../assets/images/+ocularSurfaceDiseases.png);
}
.ocularSurfaceDiseases2{
  background-image: url(../../assets/images/-ocularSurfaceDiseases.png);
}
:deep(.el-collapse-item__content){
  padding-bottom: 50px;
}
@media screen and (max-width: 768px) {
  :deep(.el-collapse-item__header) {
    height: 90px;
    font-size: 16px;
    line-height: 1.6;
    i{
      margin-left: 10px;
    }
  }
  :deep(.el-collapse-item__content) {
    font-size: 16px;
    line-height: 1.6;
    color: #515151;
    padding-bottom: 25px;
    & > div:nth-child(1) {
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          margin-bottom: 25px;
        }
      }
    }
  }
}
</style>

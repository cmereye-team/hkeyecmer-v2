<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
const activeNames = ref('1')
const handleChange = (val: string) => {}
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
        <div class="a">{{ item.agree[0] ? 'A：' : '' }}</div>
        <div class="answer space-y-5">
          <div v-for="(ele, i) in item.agree" :key="i">
            {{ $t(ele) }}
          </div>
        </div>
      </div>
      <div v-else>
        <span class="a">A：</span>
        <span class="answer space-y-5" v-html="$t(item.agree)"></span>
      </div>
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
  }

  & > div {
    .a {
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
// 黄斑病变
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
// 青光眼
.glaucoma1 {
  background-image: url(../../assets/images/+glaucoma.png);
}
.glaucoma2 {
  background-image: url(../../assets/images/-glaucoma.png);
}
// 视网膜脱落
.amotioRetinae1 {
  background-image: url(../../assets/images/+amotioRetinae.png);
}
.amotioRetinae2 {
  background-image: url(../../assets/images/-amotioRetinae.png);
}
.ocularSurfaceDiseases1 {
  background-image: url(../../assets/images/+ocularSurfaceDiseases.png);
}
.ocularSurfaceDiseases2 {
  background-image: url(../../assets/images/-ocularSurfaceDiseases.png);
}
// 结膜炎
.conjunctivitis1 {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgdmlld0JveD0iMCAwIDM4IDM4IiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMTkgMzhDMjkuNDkzNCAzOCAzOCAyOS40OTM0IDM4IDE5QzM4IDguNTA2NTkgMjkuNDkzNCAwIDE5IDBDOC41MDY1OSAwIDAgOC41MDY1OSAwIDE5QzAgMjkuNDkzNCA4LjUwNjU5IDM4IDE5IDM4WiIgZmlsbD0iI2MwYzBlNiIvPgogIDxwYXRoIGQ9Ik0xOC4wMDIgMzBDMTcuNDcxNSAzMCAxNi45NjI4IDI5Ljc4OTEgMTYuNTg3OCAyOS40MTQxQzE2LjIxMjcgMjkuMDM5IDE2LjAwMiAyOC41MzA0IDE2LjAwMiAyOFYyMkgxMC4wMDJDOS40NzE1MiAyMiA4Ljk2Mjg0IDIxLjc4OTEgOC41ODc3NyAyMS40MTQxQzguMjEyNyAyMS4wMzkgOC4wMDE5NSAyMC41MzA0IDguMDAxOTUgMjBWMThDOC4wMDE5NSAxNy40Njk2IDguMjEyNyAxNi45NjEgOC41ODc3NyAxNi41ODU5QzguOTYyODQgMTYuMjEwOSA5LjQ3MTUyIDE2IDEwLjAwMiAxNkgxNi4wMDJWMTBDMTYuMDAyIDkuNDY5NTcgMTYuMjEyNyA4Ljk2MTAxIDE2LjU4NzggOC41ODU5NEMxNi45NjI4IDguMjEwODYgMTcuNDcxNSA4IDE4LjAwMiA4SDIwLjAwMkMyMC41MzI0IDggMjEuMDQxMiA4LjIxMDg2IDIxLjQxNjMgOC41ODU5NEMyMS43OTEzIDguOTYxMDEgMjIuMDAyIDkuNDY5NTcgMjIuMDAyIDEwVjE2SDI4LjAwMkMyOC41MzI0IDE2IDI5LjA0MTIgMTYuMjEwOSAyOS40MTYzIDE2LjU4NTlDMjkuNzkxMyAxNi45NjEgMzAuMDAyIDE3LjQ2OTYgMzAuMDAyIDE4VjIwQzMwLjAwMiAyMC41MzA0IDI5Ljc5MTMgMjEuMDM5IDI5LjQxNjMgMjEuNDE0MUMyOS4wNDEyIDIxLjc4OTEgMjguNTMyNCAyMiAyOC4wMDIgMjJIMjIuMDAyVjI4QzIyLjAwMiAyOC41MzA0IDIxLjc5MTMgMjkuMDM5IDIxLjQxNjMgMjkuNDE0MUMyMS4wNDEyIDI5Ljc4OTEgMjAuNTMyNCAzMCAyMC4wMDIgMzBIMTguMDAyWiIgZmlsbD0iI0ZFRkZGRCIvPgo8L3N2Zz4=');
}
.conjunctivitis2 {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzOCIgdmlld0JveD0iMCAwIDM4IDM4IiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNMTkgMzhDMjkuNDkzNCAzOCAzOCAyOS40OTM0IDM4IDE5QzM4IDguNTA2NTkgMjkuNDkzNCAwIDE5IDBDOC41MDY1OSAwIDAgOC41MDY1OSAwIDE5QzAgMjkuNDkzNCA4LjUwNjU5IDM4IDE5IDM4WiIgZmlsbD0iI2MwYzBlNiIvPgogIDxwYXRoIGQ9Ik0yNy45NDA0IDE1LjcxODhIOS45NDA0M0M4LjgzNTg2IDE1LjcxODggNy45NDA0MyAxNi42MTQyIDcuOTQwNDMgMTcuNzE4OFYxOS43MTg4QzcuOTQwNDMgMjAuODIzMyA4LjgzNTg2IDIxLjcxODggOS45NDA0MyAyMS43MTg4SDI3Ljk0MDRDMjkuMDQ1IDIxLjcxODggMjkuOTQwNCAyMC44MjMzIDI5Ljk0MDQgMTkuNzE4OFYxNy43MTg4QzI5Ljk0MDQgMTYuNjE0MiAyOS4wNDUgMTUuNzE4OCAyNy45NDA0IDE1LjcxODhaIiBmaWxsPSIjRkVGRkZEIi8+Cjwvc3ZnPg==');
}
:deep(.el-collapse-item__content) {
  padding-bottom: 50px;
}
.answer {
  color: #515151;
}
@media screen and (max-width: 768px) {
  :deep(.el-collapse-item__header) {
    height: 90px;
    font-size: 16px;
    line-height: 1.6;
    i {
      margin-left: 10px;
    }
  }
  :deep(.el-collapse-item__content) {
    font-size: 16px;
    line-height: 1.6;
    color: #515151;
    padding-bottom: 25px;
  }
}
</style>

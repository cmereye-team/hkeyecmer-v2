<script lang="ts" setup>
defineProps({
  arrData: {
    type: [Array, Object, String],
    default() {
      return []
    },
  },
  pageName: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div :class="['serviceNav', pageName]">
    <div
      v-for="(navItem, navIndex) in arrData"
      :key="navIndex"
      class="serviceNav-in"
    >
      <nuxt-link :to="navItem.anchorLink || '/'">
        <div :class="pageName">{{ $t(navItem.anchorName) }}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.serviceNav {
  width: 100%;
  max-width: 1080px;
  margin: 30px auto 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 100px;
  &.strabismusAmblyopia {
    padding-left: 0;
    .serviceNav-in {
      margin-right: 90px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &.eyeOrthopaedicDisease {
    .serviceNav-in {
      margin-right: 70px;
    }
  }
  &-in {
    margin-right: 100px;
    margin-bottom: 35px;
    div {
      color: #515151;
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-align: center;
      position: relative;
      display: inline-block;
      transition: all 0.3s;
      &::after {
        content: '';
        height: 2px;
        width: 0;
        transition: all 0.3s;
        background: #7ac0d4;
        position: absolute;
        left: -10px;
        bottom: -5px;
      }
      &:hover {
        color: #7ac0d4;
        &::after {
          width: calc(100% + 20px);
        }
      }
      &.muscaeVolitantes {
        &::after {
          background: #90b6d3;
        }
        &:hover {
          color: #90b6d3;
        }
      }
      &.maculopathy {
        &::after {
          background: #d2b982;
        }
        &:hover {
          color: #d2b982;
        }
      }
      &.glaucoma {
        &::after {
          background: #83c9c5;
        }
        &:hover {
          color: #83c9c5;
        }
      }
      &.atropine {
        &::after {
          background: #91ced8;
        }
        &:hover {
          color: #91ced8;
        }
      }
      &.strabismusAmblyopia {
        &::after {
          background: #fbbfa1;
        }
        &:hover {
          color: #fbbfa1;
        }
      }
      &.conjunctivitis {
        &::after {
          background: #a4a4d3;
        }
        &:hover {
          color: #a4a4d3;
        }
      }
      &.xeroheader {
        &::after {
          background: #9792d2;
        }
        &:hover {
          color: #9792d2;
        }
      }
      &.medicalOptometry {
        &::after {
          background: #aac67d;
        }
        &:hover {
          color: #aac67d;
        }
      }
      &.amotioRetinae {
        &::after {
          background: #eab1a6;
        }
        &:hover {
          color: #eab1a6;
        }
      }
      &.ocularSurfaceDiseases {
        &::after {
          background: #88c9a6;
        }
        &:hover {
          color: #88c9a6;
        }
      }
      &.eyeOrthopaedicDisease {
        &::after {
          background: #deb083;
        }
        &:hover {
          color: #deb083;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .serviceNav {
    display: none;
  }
}
</style>

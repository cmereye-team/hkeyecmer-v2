<script lang="ts" setup>
defineProps({
  bannerData: {
    type: Object,
    default() {
      return {
        pcSrc: '',
        mbSrc: '',
        cnName: '',
        enName: '',
        textColor: '',
        pageName: '',
      }
    },
  },
})
</script>

<template>
  <div class="serviceBanner">
    <img
      :data-cfsrc="bannerData.pcSrc"
      :srcset="`${bannerData.mbSrc} 768w, ${bannerData.pcSrc}`"
      :alt="bannerData.cnName"
      :src="bannerData.pcSrc"
    />
    <div
      class="serviceBanner-text"
      :class="bannerData.pageName"
      :style="{ color: bannerData.textColor }"
    >
      <span>{{ bannerData.cnName }}</span>
      <span>{{ bannerData.enName }}</span>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.serviceBanner {
  position: relative;
  width: 100%;
  max-height: 460px;
  img {
    width: 100%;
    height: auto;
  }
  &-text {
    position: absolute;
    left: 50%;
    // top: 200px;
    bottom: 60px;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
    span {
      font-style: normal;
      font-weight: 700;
      line-height: 1.1;
      display: block;
      &:nth-of-type(1) {
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: 'NotoSansCJKtc--Bold';
        font-size: clamp(59px, 6.15vw, 118px);
      }
      &:nth-of-type(2) {
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: 'DINCondensed-Bold';
        font-size: clamp(44.36px, 4.62vw, 88.72px);
      }
    }
    &.cataract {
      span {
        &:nth-of-type(2) {
          letter-spacing: 7.985px;
        }
      }
    }
    &.glaucoma {
      span {
        &:nth-of-type(2) {
          letter-spacing: 5px;
        }
      }
    }
    &.maculopathy {
      span {
        &:nth-of-type(1) {
          font-size: 100px;
        }
        &:nth-of-type(2) {
          font-size: 80px;
        }
      }
    }
    &.strabismusAmblyopia {
      span {
        &:nth-of-type(2) {
          font-size: 75px;
        }
      }
    }
    &.ocularSurfaceDiseases {
      span {
        &:nth-of-type(1) {
          font-size: 100px;
        }
        &:nth-of-type(2) {
          font-size: 75px;
        }
      }
    }
    &.eyeOrthopaedicDisease {
      span {
        &:nth-of-type(1) {
          font-size: 90px;
        }
        &:nth-of-type(2) {
          font-size: 70px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .serviceBanner {
    max-height: 53.85vw;
    &-text {
      top: 23.08vw;
      span {
        line-height: 1.1;
        &:nth-of-type(1) {
          text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
          font-size: clamp(31px, 15.9vw, 62px);
        }
        &:nth-of-type(2) {
          text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
          font-size: clamp(23.3px, 11.95vw, 46.6px);
        }
      }
      &.atropine {
        span {
          &:nth-of-type(1) {
            font-size: 14.87vw;
          }
        }
      }
      &.cataract {
        span {
          &:nth-of-type(2) {
            letter-spacing: 4.195px;
          }
        }
      }
      &.conjunctivitis {
        span {
          &:nth-of-type(1) {
            font-size: 52px;
          }
        }
      }
      &.glaucoma {
        span {
          &:nth-of-type(2) {
            letter-spacing: 3px;
          }
        }
      }
      &.maculopathy {
        span {
          &:nth-of-type(1) {
            font-size: 55px;
          }
          &:nth-of-type(2) {
            font-size: 40px;
          }
        }
      }
      &.strabismusAmblyopia {
        span {
          &:nth-of-type(1) {
            font-size: 14.1vw;
          }
          &:nth-of-type(2) {
            font-size: 7.18vw;
          }
        }
      }
      &.amotioRetinae {
        span {
          &:nth-of-type(1) {
            font-size: 55px;
          }
          &:nth-of-type(2) {
            font-size: 40px;
          }
        }
      }
      &.ocularSurfaceDiseases {
        span {
          &:nth-of-type(1) {
            font-size: 48px;
          }
          &:nth-of-type(2) {
            font-size: 28px;
          }
        }
      }
      &.eyeOrthopaedicDisease {
        span {
          &:nth-of-type(1) {
            font-size: 44px;
          }
          &:nth-of-type(2) {
            font-size: 26px;
          }
        }
      }
      &.medicalOptometry {
        span {
          &:nth-of-type(1) {
            font-size: 56px;
          }
          &:nth-of-type(2) {
            font-size: 26px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 350px) {
  .serviceBanner {
    // max-height: clamp(230px, 117.95vw, 460px);
    &-text {
      // top: 40vw;
      &.ocularSurfaceDiseases,
      &.maculopathy,
      &.conjunctivitis,
      &.atropine {
        span {
          &:nth-of-type(1) {
            font-size: 14vw;
          }
          &:nth-of-type(2) {
            font-size: 10vw;
          }
        }
      }
      &.eyeOrthopaedicDisease {
        span {
          &:nth-of-type(1) {
            font-size: 12vw;
          }
          &:nth-of-type(2) {
            font-size: 9vw;
          }
        }
      }
    }
  }
}
</style>
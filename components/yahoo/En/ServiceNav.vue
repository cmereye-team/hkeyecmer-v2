<script lang="ts" setup>
defineProps({
  arrData:{
    type: [Array,Object,String],
    default(){
      return []
    }
  },
  pageName: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div :class="['serviceNav',pageName]">
    <div class="serviceNav-in" v-for="(navItem,navIndex) in arrData" :key="navIndex">
      <nuxt-link :to="'/en'+navItem.anchorLink || '/en/'">
        <div :class="pageName">{{$t(navItem.anchorName)}}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.serviceNav{
  width: 100%;
  max-width: 1080px;
  margin: 30px auto 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 100px;
  &.strabismusAmblyopia{
    padding-left: 0;
    .serviceNav-in{
      margin-right: 90px;
      &:last-child{
        margin-right: 0;
      }
    }
  }
  &.eyeOrthopaedicDisease{
    .serviceNav-in{
      margin-right: 70px;
    }
  }
  &-in{
    margin-right: 100px;
    margin-bottom: 35px;
    div{
      color: #515151;
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-align: center;
      position: relative;
      display: inline-block;
      transition: all .3s;
      &::after{
        content: '';
        height: 2px;
        width: 0;
        transition: all .3s;
        background: #7AC0D4;
        position: absolute;
        left: -10px;
        bottom: -5px;
      }
      &:hover{
        color: #7AC0D4;
        &::after{
          width: calc(100% + 20px);
        }
      }
      &.muscaeVolitantes{
        &::after{
          background: #90B6D3;
        }
        &:hover{
          color: #90B6D3;
        }
      }  
      &.maculopathy{
        &::after{
          background: #D2B982;
        }
        &:hover{
          color: #D2B982;
        }
      }
      &.glaucoma{
        &::after{
          background: #83C9C5;
        }
        &:hover{
          color: #83C9C5;
        }
      }
      &.atropine{
        &::after{
          background: #91CED8;
        }
        &:hover{
          color: #91CED8;
        }
      }
      &.strabismusAmblyopia{
        &::after{
          background: #FBBFA1;
        }
        &:hover{
          color: #FBBFA1;
        }
      }
      &.conjunctivitis{
        &::after{
          background: #A4A4D3;
        }
        &:hover{
          color: #A4A4D3;
        }
      }
      &.xeroheader{
        &::after{
          background: #9792D2;
        }
        &:hover{
          color: #9792D2;
        }
      }
      &.medicalOptometry{
        &::after{
          background: #AAC67D;
        }
        &:hover{
          color: #AAC67D;
        }
      }
      &.amotioRetinae{
        &::after{
          background: #EAB1A6;
        }
        &:hover{
          color: #EAB1A6;
        }
      }
      &.ocularSurfaceDiseases{
        &::after{
          background: #88C9A6;
        }
        &:hover{
          color: #88C9A6;
        }
      }
      &.eyeOrthopaedicDisease{
        &::after{
          background: #DEB083;
        }
        &:hover{
          color: #DEB083;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .serviceNav{
    display: none;
  }
}
</style>
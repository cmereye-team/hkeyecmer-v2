<!--
 * @Author: 谭洁莹
 * @Date: 2026-04-15 15:30:27
 * @LastEditTime: 2026-04-20 15:45:39
 * @FilePath: /pages/cataract/extended-depth-of-focus-lenses.vue
 * @Description: 扩展景深人工晶体
-->
<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const advantages = [
  {
    icon: 'clear',
    title: '在更大範圍內\n擁有更清晰的視野',
    intro: '從遠距離到中距離都能享受更佳的對焦效果，適合會面和日常生活。',
  },
  {
    icon: 'glare',
    title: '降低光暈和\n眩光的風險',
    intro:
      'EDOF 晶體的設計可將光線散射降至最低，提供更清晰的夜間視力，並減少光線周圍的干擾。',
  },
  {
    icon: 'lowlight',
    title: '弱光環境下\n表現更佳',
    intro:
      '即使在昏暗的光線下，也能保持對比度和清晰度，非常適合夜間行車或室內環境。',
  },
  {
    icon: 'reading',
    title: '非常適合配合\n不同電子螢幕使用',
    intro:
      '無論您使用的是電腦、手機或平板電腦，EDOF 晶體都能針對中間距離進行最佳化。',
  },
  {
    icon: 'glasses',
    title: '不受眼鏡束縛',
    intro: '不需要配戴眼鏡就能享受大部分的日常活動，特別在遠距離和中距離時。',
  },
]
const faqs = [
  {
    title: '使用 EDOF 人工晶體後，是否還需要佩戴眼鏡？',
    agree:
      'EDOF 人工晶體能滿足大部份日常生活需求，但極遠距離時，可能仍需輔助眼鏡。EDOF 人工晶體能滿足大部份日常生活需求，是否需要配戴眼鏡取決於觀看的距離以及生活習慣。',
  },
  {
    title: '是否所有白內障患者都適合 EDOF 人工晶體？',
    agree:
      '並非所有患者都適合 EDOF 人工晶體。醫生會根據患者的眼睛健康狀況、生活方式和視力需求進行詳細評估，推薦最合適的人工晶體類型。',
  },
  {
    title: 'EDOF 人工晶體和多焦點人工晶體有什麼不同？',
    agree:
      'EDOF 人工晶體利用延展焦距技術，能在遠及中距離提供無縫連續視覺，並大幅減少光暈和眩光。相較之下，多焦點人工晶體近距離視力更清楚，但視覺副作用較多。對於夜間活動頻繁或對光線干擾敏感者而言，EDOF晶體是更合適的選擇。建議患者在選擇前向眼科醫生諮詢，制定適合的方案。',
  },
  {
    title: 'EDOF 兩隻眼都必須用 EDOF 人工晶體嗎？可以混搭其他類型晶體嗎？',
    agree:
      '一般情況下，雙眼皆植入 EDOF 人工晶體可獲得更佳整體視覺效果與深度感。然而，也可採用混合方案，例如一隻眼植入單焦鏡片負責遠距離視力，另一隻眼植入 EDOF 鏡片以提升中、近距離視覺，兩眼互相配合以滿足多距離需求。只要雙眼度數差異不大，大部分人都能自然適應。但因雙眼對焦距離略有不同，適應時間稍長，並非所有人士適合。建議患者在選擇前向眼科醫生諮詢意見，制定適合的方案。',
  },
  {
    title: 'EDOF 人工晶體在夜間駕駛時的表現如何？',
    agree:
      'EDOF人工晶體在夜間駕駛方面表現良好。相較於多焦點人工晶體，夜間燈光下更少出現光環或眩光，視覺對比度與清晰度穩定自然，即使在昏暗環境中也能保持舒適視覺。其延長焦距設計使適應期更短，一般數天即可重拾清楚視力。',
  },
]
</script>
<template>
  <div>
    <section
      class="banner mb-4 lg:mb-9 flex flex-col lg:items-center lg:justify-center"
    >
      <div class="text-primary font-medium pt-30 pl-6 lg:p-0">
        <h1
          class="lg:text-center text-3xl lg:text-5xl leading-[1.2] lg:leading-[1.5] tracking-[0.4em]"
        >
          擴展景深<br class="block sm:hidden" />人工晶體
        </h1>
        <p class="text-base lg:text-3xl">Extended Depth of Focus (EDOF)</p>
      </div>
    </section>
    <section class="wrapper intro text-primary mb-10 lg:mb-25">
      <div class="intro-title pl-4 lg:pl-11">
        <h2 class="text-lg lg:text-4xl font-bold tracking-widest">
          擴展景深人工晶體<span class="block text-sm lg:text-xl"
            >(EDOF - Extended Depth of Focus)</span
          >
        </h2>
      </div>
      <div class="flex items-center">
        <p
          class="flex-1 text-justify text-base lg:text-2xl text-primary font-medium leading-[1.6] lg:leading-[2] tracking-widest"
        >
          擴展景深人工晶體
          是一種新型人工晶狀體，主要透過光學原理將入射光線聚焦在擴展的平面上，不但提供了多種距離的無縫連續視覺，而且提供更大範圍的連續視野及將光暈和眩光發生的情況改善。這項技術能幫助白內障患者減少對眼鏡的依賴，提高術後視覺品質，改善生活品質。
        </p>
        <picture class="w-1/3">
          <source
            srcset="
              https://statichk.cmermedical.com/hkcmereye/cataract/edof/edof-intro-cover-v1.webp
            "
            type="image/webp"
          />
          <img
            src="https://statichk.cmermedical.com/hkcmereye/cataract/edof/edof-intro-cover-v1.png"
            alt=""
            class="hidden lg:block -rotate-[10deg]"
          />
        </picture>
      </div>
      <div
        class="intro-desc text-white text-justify text-sm lg:text-2xl font-bold leading-[1.85] lg:leading-[2] tracking-widest py-4 px-6 lg:py-8 lg:px-[72px] rounded-xl"
      >
        <p>
          手術過程中，醫生會從眼睛中取出混濁的晶狀體 (白內障)，
          植入人工晶體代替原本的晶狀體。
          現時EDOF在不同類型的人工晶體在不同特點上亦有不同特色
        </p>
      </div>
    </section>
    <section class="wrapper">
      <h2 class="title-normal">
        擴展景深人工晶體<br class="block md:hidden" />特性及其他晶體比較
      </h2>
      <p>
        *單焦晶體配合EDOF,
        亦可以於近、中、遠距離,減少對老花眼鏡依賴，以及降低夜晚眩光帶來的影響現時客人除了可以選擇多焦晶體解決近、中、遠距離視野，亦有EDOF可供選擇，以配合不同人士需要
      </p>
    </section>
    <section class="wrapper advantage mb-[64px] lg:mb-[112px]">
      <div class="py-8 lg:pt-[68px] lg:pb-[128px]">
        <h2 class="title-normal mb-5 lg:mb-8">EDOF鏡片優點</h2>
        <p>
          EDOF（延伸焦深）鏡片的主要優點是能提供從遠到中距離的連續視覺範圍，減少老花對眼鏡的依賴，並且對比於其他晶體的過渡更為順暢自然，光暈和眩光更少。
        </p>
      </div>
      <div
        class="advantage-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 py-3 lg:py-0 lg:px-3 border-l lg:border-l-0 lg:border-t border-primary"
      >
        <div
          v-for="(item, index) in advantages"
          :key="index"
          class="advantage-item transition-transform duration-300 ease text-primary hover:bg-primary hover:text-white pl-5 pr-3 pt-6 pb-4 lg:pt-8 lg:pb-5 lg:px-3"
        >
          <div
            class="flex lg:flex-col justify-between items-center lg:items-start lg:justify-center lg:gap-4 mb-2"
          >
            <h3
              class="advantage-title flex-1 pl-5 order-1 lg:order-2 text-lg lg:text-2xl font-bold whitespace-pre-line lg:min-h-[64px] flex items-center"
            >
              {{ item.title }}
            </h3>
            <div
              class="order-2 lg:order-1 advantage-icon w-[52px] h-12 lg:w-3/5 mx-auto lg:h-[128px] flex justify-end lg:justify-center items-center"
            >
              <PageIconSvg :name="item.icon" />
            </div>
          </div>
          <p
            class="text-justify text-base lg:text-xl font-medium leading-[1.85]"
          >
            {{ item.intro }}
          </p>
        </div>
      </div>
    </section>
    <section class="wrapper pb-20 lg:pb-40">
      <h2 class="title-normal mb-12 lg:mb-22">擴展景深人工晶體常見問題</h2>
      <PageCollapse
        :answer="faqs"
        downarr="edof"
        :style="{ '--subassembly-color': '#2958a3' }"
      />
    </section>
  </div>
</template>
<style lang="scss" scoped>
%advantage-circle {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: #2958a3;
}
:deep(.el-collapse-item__header) {
  font-weight: 700;
}
:deep(.el-collapse-item__content) {
  font-weight: 500;
}
.wrapper {
  padding-left: 12px;
  padding-right: 12px;
  margin-left: auto;
  margin-right: auto;
  max-width: 72rem;
}
.title-normal {
  color: #2958a3;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0.1em;
  text-align: center;
}
.banner {
  height: 248px;
  background-image: url('https://statichk.cmermedical.com/hkcmereye/cataract/edof/edof-banner-m-v1.webp');
  background-size: cover;
  background-repeat: no-repeat;
}
.intro {
  .intro-title {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 8px;
      height: 100%;
      background-color: #2958a3;
    }
  }
  .intro-desc {
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background: url('https://statichk.cmermedical.com/hkcmereye/cataract/edof/edof-intro-desc-m-v1.webp')
      no-repeat center / cover;
  }
}
.advantage {
  .advantage-list {
    position: relative;
    &::before {
      @extend %advantage-circle;
      width: 4px;
      height: 4px;
      top: 0;
      left: -2px;
    }
    &::after {
      @extend %advantage-circle;
      width: 4px;
      height: 4px;
      bottom: 0;
      left: -2px;
    }
  }
  .advantage-item {
    border: solid #2958a3;
    border-width: 0 1px 1px 0;
    &:first-child {
      border-width: 1px 1px 1px 0;
    }
    &:hover {
      transform: translateX(-8%);
      + .advantage-item {
        border-top-width: 1px;
      }
    }
  }
  .advantage-title {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 8px;
      height: 100%;
      background-color: #2958a3;
      left: 0;
      top: 0;
    }
    &:hover {
      &::before {
        background-color: #fff;
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .title-normal {
    font-size: 36px;
    line-height: 1.65;
  }
  .banner {
    height: 316px;
    background-image: url('https://statichk.cmermedical.com/hkcmereye/cataract/edof/edof-banner-pc-v1.webp');
  }
  .intro {
    .intro-title {
      &::before {
        width: 16px;
      }
    }
    .intro-desc {
      background-image: url('https://statichk.cmermedical.com/hkcmereye/cataract/edof/edof-intro-desc-pc-v1.webp');
    }
  }
  .advantage {
    .advantage-list {
      position: relative;
      &::before {
        @extend %advantage-circle;
        width: 8px;
        height: 8px;
        top: -4px;
        left: -4px;
      }
      &::after {
        @extend %advantage-circle;
        width: 8px;
        height: 8px;
        top: -4px;
        left: unset;
        right: -4px;
      }
    }
    .advantage-item {
      border: solid #2958a3;
      border-width: 0 1px 1px 0;
      &:first-child {
        border-width: 0 1px 1px 1px;
      }
      &:hover {
        transform: translate(0, -8%);

        + .advantage-item {
          border-left-width: 1px;
        }
      }
    }
  }
}
@media screen and (min-width: 1536px) {
  .wrapper {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>

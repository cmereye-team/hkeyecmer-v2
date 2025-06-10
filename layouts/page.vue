<script setup lang="ts">
const route = useRoute()
const rt = ref(route)
const PageNavbar = resolveComponent('PageNavbar')
const PageNewheader = resolveComponent('PageNewheader')
const PageFooter = resolveComponent('PageFooter')
const EnNavbar = resolveComponent('EnNavbar')
const EnNewheader = resolveComponent('EnNewheader')
const EnFooter = resolveComponent('EnFooter')

let showEnCon = ref(false)

// console.log('当前页',rt.value.path)
onMounted(() => {
  if (rt.value.path.includes('/en/')) {
    showEnCon.value = true
  }

  isWhatNavbar()
  isWhatNewheader()
  isWhatFooter()
})

const isWhatNavbar = () => {
  if (rt.value.path.includes('/en/') || rt.value.path.includes('/en')) {
    return EnNavbar
  } else {
    return PageNavbar
  }
}
const isWhatNewheader = () => {
  if (rt.value.path.includes('/en/')) {
    return EnNewheader
  } else {
    return PageNewheader
  }
}
const isWhatFooter = () => {
  if (rt.value.path.includes('/en/') || rt.value.path.includes('/en')) {
    return EnFooter
  } else {
    return PageFooter
  }
}
</script>
<template>
  <div>
    <div>
      <slot name="header">
        <!-- <PageNavbar :rt="rt.name" /> -->
        <!-- <PageNewheader />    -->
        <component :is="isWhatNavbar()" :rt="rt.name"></component>
        <component :is="isWhatNewheader()"></component>
      </slot>
      <div>
        <slot />
      </div>
      <slot name="footer">
        <!-- <PageFooter /> -->
        <component :is="isWhatFooter()"></component>

        <PageMbFooter />
      </slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.headerTem {
  display: block;
}
.headerTemPage {
  display: block;
}
.footerTem {
  display: block;
}
.mbHeader {
  display: none;
}
.headerMbcc {
  display: none;
}

@media screen and (max-width: 768px) {
  .headerTem {
    display: none;
  }
  .headerTemPage {
    display: none;
  }
  .footerTem {
    display: none;
  }
  .mbHeader {
    display: block;
  }
  .headerMbcc {
    display: block;
  }
}
</style>

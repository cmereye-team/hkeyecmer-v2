<script lang="ts" setup>
const route = useRoute()
const toRouter = ref(route)

// compiler macro
const serviceNavigation = [
  {
    anchorName: 'pages.ophthalmic_information.ophthalmic_class',
    anchorLink: '/ophthalmic-information',
  },
  {
    anchorName: 'pages.ophthalmic_information.ophthalmic_publicity',
    anchorLink: '/ophthalmic-information/publicity',
  },
  {
    anchorName: 'pages.ophthalmic_information.ophthalmic_eyesight',
    anchorLink: '/ophthalmic-information/eyesight',
  },
  {
    anchorName: 'pages.ophthalmic_information.ophthalmic_little_theatre',
    anchorLink: '/ophthalmic-information/littleTheatre',
  },
  {
    anchorName: 'pages.ophthalmic_information.ophthalmic_press',
    anchorLink: '/ophthalmic-information/press',
  },
  {
    anchorName: 'pages.ophthalmic_information.ophthalmic_article',
    anchorLink: '/ophthalmic-information/article',
  },
  {
    anchorName: 'pages.ophthalmic_information.ophthalmic_message',
    anchorLink: '/ophthalmic-information/healthInfo',
  },
  
]
</script>

<template>
  <EnRightSidesNavigation :service-navigation="serviceNavigation" />
</template>

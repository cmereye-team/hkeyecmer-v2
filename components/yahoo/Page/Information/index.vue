<script lang="ts" setup>
const route = useRoute()
const toRouter = ref(route)

// compiler macro
const serviceNavigation = [
  {
    anchorName: 'pages.ophthalmic_information.ophthalmic_class',
    anchorLink: '/yahoo/ophthalmic-information',
  },
  {
    anchorName: 'pages.ophthalmic_information.ophthalmic_publicity',
    anchorLink: '/yahoo/ophthalmic-information/publicity',
  },
  {
    anchorName: 'pages.ophthalmic_information.ophthalmic_eyesight',
    anchorLink: '/yahoo/ophthalmic-information/eyesight',
  },
  {
    anchorName: 'pages.ophthalmic_information.ophthalmic_little_theatre',
    anchorLink: '/yahoo/ophthalmic-information/littleTheatre',
  },
  {
    anchorName: 'pages.ophthalmic_information.ophthalmic_press',
    anchorLink: '/yahoo/ophthalmic-information/press',
  },
  {
    anchorName: 'pages.ophthalmic_information.ophthalmic_article',
    anchorLink: '/yahoo/ophthalmic-information/article',
  },
  {
    anchorName: 'pages.ophthalmic_information.ophthalmic_message',
    anchorLink: '/yahoo/ophthalmic-information/healthInfo',
  },
]
</script>

<template>
  <rightSidesNavigation :service-navigation="serviceNavigation" />
</template>

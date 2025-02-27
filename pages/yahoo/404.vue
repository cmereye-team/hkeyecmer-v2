<script lang="ts" setup>
import { capitalize } from '~/utils/str'
const { t } = useLang()
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.404.title')),
}))
</script>

<template>
  <yahooPageWrapper class="flex flex-col items-center justify-center">
    <Error :code="404" />
  </yahooPageWrapper>
</template>

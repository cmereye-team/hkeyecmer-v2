<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { availableLocales } from '~/utils/lang'

const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top',
  },
})

const currentStyle = toRef(props, 'type')
const localeSetting = useState<string>('locale.setting')
</script>

<template>
  <div class="flex items-center">
    <Listbox
      v-if="currentStyle === 'dropdown-right-top'"
      v-model="localeSetting"
      as="div"
      class="relative flex items-center"
    >
      <ListboxButton
        type="button"
        title="Change Language"
        class="transition-colors duration-300"
      >
        <span class="justify-center items-center flex">
          <svg
            width="5"
            height="8"
            color="red"
            viewBox="0 0 5 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L4 4L1 7"
              stroke="white"
              stroke-width="0.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="font">Languages</div>
        </span>
      </ListboxButton>
      <ListboxOptions
        class="p-1 absolute z-50 bottom-full left-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"
      >
        <ListboxOption
          v-for="lang in availableLocales"
          :key="lang.iso"
          :value="lang.iso"
          :class="{
            'py-2 px-2 flex items-center cursor-pointer': true,
            'text-sky-500 bg-gray-100 dark:bg-gray-600/30':
              localeSetting === lang.iso,
            'hover:bg-gray-50 dark:hover:bg-gray-700/30':
              localeSetting !== lang.iso,
          }"
        >
          <span class="text-sm mr-2">
          </span>
          <span class="flex-1 truncate">
            {{ lang.name }}
          </span>
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
    <select
      v-if="currentStyle === 'select-box'"
      v-model="localeSetting"
      class="w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"
    >
      <option
        v-for="lang in availableLocales"
        :key="lang.iso"
        :value="lang.iso"
        class="flex items-center space-x-2"
      >
        {{ lang.flag }} {{ lang.name }} ({{ lang.iso }})
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.font {
  margin-left: 8px;
  font-family: 'Noto Sans HK';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 35px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffffff;
}
</style>

import { useI18n } from 'vue-i18n'

export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    flag: string
  }
}

export const availableLocales: ILocales = {
  'zh-hk': {
    name: '中文（香港）',
    iso: 'zh-hk',
    flag: 'hk',
  },
  // zh: {
  //   name: '简体中文',
  //   iso: 'zh',
  //   flag: 'cn',
  // },
  // Eng 未开发好不展示
  en: {
    name: 'ENG',
    iso: 'en',
    flag: 'en',
  },
}

export function LanguageManager() {
  // composable
  const { locale } = useI18n()
  const localeUserSetting = useCookie('locale')

  // methods
  const getSystemLocale = (): string => {
    try {
      // const foundLang = window
      //   ? window.navigator.language.substring(0, 2)
      //   : 'zh-hk'
      // return availableLocales[foundLang] ? foundLang : 'zh-hk'
      // console.log(window.navigator.language)
      return 'zh-hk'
    } catch (error) {
      return 'zh-hk'
    }
  }
  const getUserLocale = (): string =>
    localeUserSetting.value || getSystemLocale()

  // state
  const localeSetting = useState<string>('locale.setting', () =>
    getUserLocale()
  )

  // watchers
  watch(localeSetting, (localeSetting) => {
    localeUserSetting.value = localeSetting
    locale.value = localeSetting
  })

  // init locale
  const init = () => {
    localeSetting.value = getUserLocale()
  }
  locale.value = localeSetting.value

  // lifecycle
  onBeforeMount(() => init())

  return {
    localeSetting,
    init,
  }
}

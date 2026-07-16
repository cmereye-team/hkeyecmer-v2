/*
 * @Date: 2025-09-11 08:19:38
 * @LastEditTime: 2026-07-16 14:31:30
 * @FilePath: /composables/useLang.ts
 * @Description: 
 */
import { useI18n } from 'vue-i18n'

export const useLang = () => {
  const { t,tm } = useI18n()
  return {
    t,tm
  }
}

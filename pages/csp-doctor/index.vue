<!--
 * @Author: 谭洁莹
 * @Date: 2026-01-12 18:00:41
 * @LastEditTime: 2026-01-15 14:38:28
 * @FilePath: /pages/csp-doctor/index.vue
 * @Description: 耀眼行动医生列表页
-->
<script lang="ts" setup>
import '~/assets/sass/iconfont.css'
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')
useHead(() => ({
  title: t('tdk.csp.title_doctor'),
  meta() {
    return [
      {
        hid: 'description',
        name: 'description',
        content: t('tdk.csp.desc'),
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: t('tdk.csp.key'),
      },
    ]
  },
}))
type TabKey = 'hk' | 'kl' | 'nt'
const tabs = [
  { id: 'hk' as const },
  { id: 'kl' as const },
  { id: 'nt' as const },
] as const
const activeTab = ref<TabKey>(tabs[0].id)
const changeTab = (id: TabKey) => {
  activeTab.value = id
}
interface Doctor {
  id: number
  name: string
  area: TabKey
  regions: string
  districts?: string
  tel: string
  clinic: Array<string>
  surgical: Array<string>
}
const allDoctors = ref<Doctor[]>([
  {
    id: 1,
    name: '陳偉樂',
    area: 'hk',
    regions: '香港',
    districts: '中西區',
    tel: '3956 2026',
    clinic: ['中環畢打街 1-3 號中建大廈 15 樓 1515 室'],
    surgical: [
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
    ],
  },
  {
    id: 2,
    name: '陳偉樂',
    area: 'kl',
    regions: '九龍',
    districts: '觀塘區',
    tel: '3956 2026',
    clinic: ['觀塘開源道79號鱷魚恤中心 16樓1601室'],
    surgical: [
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
    ],
  },
  {
    id: 3,
    name: '陳偉樂',
    area: 'kl',
    regions: '九龍',
    districts: '油尖旺區',
    tel: '3956 2026',
    clinic: ['旺角彌敦道 625 及 639 號雅蘭中心一期 7 樓 702 室'],
    surgical: [
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
    ],
  },
  {
    id: 4,
    name: '陳偉樂',
    area: 'nt',
    regions: '新界',
    districts: '西貢區',
    tel: '3956 2026',
    clinic: ['將軍澳運亨路1號新都城中心一期地下G55-56號鋪'],
    surgical: [
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
    ],
  },
  {
    id: 5,
    name: '陳偉樂',
    area: 'nt',
    regions: '新界',
    districts: '沙田區',
    tel: '3956 2026',
    clinic: ['沙田正街 11-17 號偉華中心 2 樓 1C-1F 號舖及 5A 號舖'],
    surgical: [
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
    ],
  },
  {
    id: 6,
    name: '陳偉樂',
    area: 'nt',
    regions: '新界',
    districts: '荃灣區',
    tel: '3956 2026',
    clinic: ['荃灣沙咀道 255 號思源樓地下'],
    surgical: [
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
    ],
  },
  {
    id: 7,
    name: '陳偉樂',
    area: 'hk',
    regions: '香港',
    districts: '灣仔區',
    tel: '3956 2026',
    clinic: ['銅鑼灣百德新街2-20 號 恆隆中心 16 樓 1614-15 室'],
    surgical: [
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
    ],
  },
  {
    id: 8,
    name: '張瀞之',
    area: 'hk',
    regions: '香港',
    districts: '中西區',
    tel: '3956 2026',
    clinic: ['中環畢打街 1-3 號中建大廈 15 樓 1515 室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈15樓1515室',
      '新界元朗青山公路45-47號誠信大廈地舖',
    ],
  },
  {
    id: 9,
    name: '張瀞之',
    area: 'kl',
    regions: '九龍',
    districts: '油尖旺區',
    tel: '3956 2026',
    clinic: [
      '旺角彌敦道 625 及 639 號 雅蘭中心一期 12樓 1202-03 室',
      '旺角彌敦道 625 及 639 號 雅蘭中心一期 17樓 1725B 室',
    ],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
    ],
  },
  {
    id: 10,
    name: '張瀞之',
    area: 'nt',
    regions: '新界',
    districts: '沙田區',
    tel: '3956 2026',
    clinic: ['沙田正街 11-17 號偉華中心 2 樓1C-1F, 5A 號舖'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
    ],
  },
  {
    id: 11,
    name: '張瀞之',
    area: 'nt',
    regions: '新界',
    districts: '荃灣區',
    tel: '3956 2026',
    clinic: ['荃灣沙咀道 255 號思源樓地下'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
    ],
  },
  {
    id: 12,
    name: '張瀞之',
    area: 'nt',
    regions: '新界',
    districts: '元朗區',
    tel: '3956 2026',
    clinic: ['元朗青山公路 45-47 號誠信大廈地舖'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
    ],
  },
  {
    id: 13,
    name: '熊健慧',
    area: 'kl',
    regions: '九龍',
    districts: '油尖旺區',
    tel: '3956 2026',
    clinic: ['旺角彌敦道 625 及 639 號 雅蘭中心一期 12樓 1202-03 及1208室'],
    surgical: ['旺角彌敦道 625 及 639 號 雅蘭中心一期 1236 室'],
  },
  {
    id: 14,
    name: '熊健慧',
    area: 'nt',
    regions: '新界',
    districts: '沙田區',
    tel: '3956 2026',
    clinic: ['沙田正街 11-17 號偉華中心 2 樓1C-1F, 5A 號舖'],
    surgical: ['旺角彌敦道 625 及 639 號 雅蘭中心一期 1236 室'],
  },
  {
    id: 15,
    name: '高德全',
    area: 'hk',
    regions: '香港',
    districts: '中西區',
    tel: '3956 2026',
    clinic: ['中環畢打街 1-3 號中建大廈 15 樓 1515 室'],
    surgical: [
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
    ],
  },
  {
    id: 16,
    name: '高德全',
    area: 'kl',
    regions: '九龍',
    districts: '油尖旺區',
    tel: '3956 2026',
    clinic: ['旺角彌敦道 625 及 639 號雅蘭中心一期 1202-03 & 1208 室'],
    surgical: [
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
    ],
  },
  {
    id: 17,
    name: '黎浩樺',
    area: 'hk',
    regions: '香港',
    districts: '中西區',
    tel: '3956 2026',
    clinic: ['中環畢打街 1-3 號中建大廈 15 樓 1515 室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路45-47號誠信大廈地舖',
    ],
  },
  {
    id: 18,
    name: '黎浩樺',
    area: 'kl',
    regions: '九龍',
    districts: '油尖旺區',
    tel: '3956 2026',
    clinic: [
      '旺角彌敦道 625 及 639 號 雅蘭中心一期 12樓 1202-03 室',
      '旺角彌敦道 625 及 639 號 雅蘭中心一期 17樓 1725B 室',
    ],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
    ],
  },
  {
    id: 19,
    name: '黎浩樺',
    area: 'nt',
    regions: '新界',
    districts: '沙田區',
    tel: '3956 2026',
    clinic: ['沙田正街 11-17 號偉華中心 2 樓1C-1F, 5A 號舖'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
    ],
  },
  {
    id: 20,
    name: '黎浩樺',
    area: 'nt',
    regions: '新界',
    districts: '元朗區',
    tel: '3956 2026',
    clinic: ['元朗青山公路 45-47 號誠信大廈地舖'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
    ],
  },
  {
    id: 21,
    name: '林己明',
    area: 'hk',
    regions: '香港',
    districts: '中西區',
    tel: '3956 2026',
    clinic: ['中環畢打街 1-3 號中建大廈 15 樓 1515 室'],
    surgical: [
      '中環畢打街1-3號 中建大廈15樓1515室',
      '新界元朗青山公路45-47號誠信大廈地舖',
    ],
  },
  {
    id: 22,
    name: '林己明',
    area: 'kl',
    regions: '九龍',
    districts: '油尖旺區',
    tel: '3956 2026',
    clinic: [
      '旺角彌敦道 625 及 639 號 雅蘭中心一期 12樓 1202-03 室',
      '旺角彌敦道 625 及 639 號 雅蘭中心一期 17樓 1725B 室',
    ],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
    ],
  },
  {
    id: 23,
    name: '林己明',
    area: 'nt',
    regions: '新界',
    districts: '沙田區',
    tel: '3956 2026',
    clinic: ['沙田正街 11-17 號偉華中心 2 樓1C-1F, 5A 號舖'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
    ],
  },
  {
    id: 24,
    name: '林己明',
    area: 'nt',
    regions: '新界',
    districts: '荃灣區',
    tel: '3956 2026',
    clinic: ['荃灣沙咀道 255 號思源樓地下'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
    ],
  },
  {
    id: 25,
    name: '林己明',
    area: 'nt',
    regions: '新界',
    districts: '元朗區',
    tel: '3956 2026',
    clinic: ['元朗青山公路 45-47 號誠信大廈地舖'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
    ],
  },
  {
    id: 26,
    name: '林寶生',
    area: 'hk',
    regions: '香港',
    districts: '中西區',
    tel: '3956 2026',
    clinic: ['香港中環畢打街3號中建大廈15樓1512, 1515, 1518及1525室'],
    surgical: [
      '旺角彌敦道 625 及 639 號雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號誠信大廈地舖',
      '香港中環畢打街3號中建大廈15樓1512, 1515, 1518及1525室',
    ],
  },
  {
    id: 27,
    name: '林寶生',
    area: 'kl',
    regions: '九龍',
    districts: '油尖旺區',
    tel: '3956 2026',
    clinic: [
      '旺角彌敦道 625 及 639 號雅蘭中心一期 17 樓 1725B 室',
      '旺角彌敦道 625 及 639 號 雅蘭中心一期 12樓 1208 室',
    ],
    surgical: [
      '旺角彌敦道 625 及 639 號雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號誠信大廈地舖',
      '香港中環畢打街3號中建大廈15樓1512, 1515, 1518及1525室',
    ],
  },
  {
    id: 28,
    name: '林寶生',
    area: 'nt',
    regions: '新界',
    districts: '沙田區',
    tel: '3956 2026',
    clinic: ['沙田正街 11-17 號偉華中心 2 樓1C-1F, 5A 號舖'],
    surgical: [
      '旺角彌敦道 625 及 639 號雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號誠信大廈地舖',
      '香港中環畢打街3號中建大廈15樓1512, 1515, 1518及1525室',
    ],
  },
  {
    id: 29,
    name: '林寶生',
    area: 'nt',
    regions: '新界',
    districts: '荃灣區',
    tel: '3956 2026',
    clinic: ['荃灣沙咀道 255 號思源樓地下'],
    surgical: [
      '旺角彌敦道 625 及 639 號雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號誠信大廈地舖',
      '香港中環畢打街3號中建大廈15樓1512, 1515, 1518及1525室',
    ],
  },
  {
    id: 30,
    name: '林寶生',
    area: 'nt',
    regions: '新界',
    districts: '元朗區',
    tel: '3956 2026',
    clinic: ['新界元朗青山公路 45-47 號誠信大廈地舖'],
    surgical: [
      '旺角彌敦道 625 及 639 號雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號誠信大廈地舖',
      '香港中環畢打街3號中建大廈15樓1512, 1515, 1518及1525室',
    ],
  },
  {
    id: 31,
    name: '林峯',
    area: 'hk',
    regions: '香港',
    districts: '灣仔區',
    tel: '3956 2026',
    clinic: ['銅鑼灣百德新街2-20 號 恆隆中心 16 樓 1614-15 室'],
    surgical: [
      '中環畢打街 1-3 號中建大廈 15 樓 1515 室',
      '旺角彌敦道 625 及 639 號雅蘭中心一期 1236 室',
    ],
  },
  {
    id: 32,
    name: '林峯',
    area: 'hk',
    regions: '香港',
    districts: '中西區',
    tel: '3956 2026',
    clinic: ['中環畢打街 1-3 號中建大廈 15 樓 1515 室'],
    surgical: [
      '中環畢打街 1-3 號中建大廈 15 樓 1515 室',
      '旺角彌敦道 625 及 639 號雅蘭中心一期 1236 室',
    ],
  },
  {
    id: 33,
    name: '林峯',
    area: 'kl',
    regions: '九龍',
    districts: '油尖旺區',
    tel: '3956 2026',
    clinic: [
      '旺角彌敦道 625 及 639 號 雅蘭中心一期 12樓 1202-03 室及1208室',
      '旺角彌敦道 625 及 639 號 雅蘭中心一期 17樓 1725B 室',
    ],
    surgical: [
      '中環畢打街 1-3 號中建大廈 15 樓 1515 室',
      '旺角彌敦道 625 及 639 號雅蘭中心一期 1236 室',
    ],
  },
  {
    id: 34,
    name: '李煒業',
    area: 'hk',
    regions: '香港',
    districts: '中西區',
    tel: '3956 2026',
    clinic: ['中環畢打街 1-3 號中建大廈 15 樓 1515 室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
    ],
  },
  {
    id: 35,
    name: '李煒業',
    area: 'kl',
    regions: '九龍',
    districts: '油尖旺區',
    tel: '3956 2026',
    clinic: ['旺角彌敦道 625 及 639 號 雅蘭中心一期 12樓 1202-03 室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
    ],
  },
  {
    id: 36,
    name: '李煒業',
    area: 'nt',
    regions: '新界',
    districts: '沙田區',
    tel: '3956 2026',
    clinic: ['沙田正街 11-17 號偉華中心 2 樓1C-1F, 5A 號舖'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
    ],
  },
  {
    id: 37,
    name: '李煒業',
    area: 'nt',
    regions: '新界',
    districts: '元朗區',
    tel: '3956 2026',
    clinic: ['元朗青山公路 45-47 號誠信大廈地舖'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
    ],
  },
  {
    id: 38,
    name: '李佑榮',
    area: 'hk',
    regions: '香港',
    districts: '中西區',
    tel: '3956 2026',
    clinic: ['中環畢打街 1-3 號中建大廈 15 樓 1515 室'],
    surgical: ['中環畢打街 1-3 號中建大廈 15 樓 1515 室'],
  },
  {
    id: 39,
    name: '李佑榮',
    area: 'kl',
    regions: '九龍',
    districts: '油尖旺區',
    tel: '3956 2026',
    clinic: ['旺角彌敦道625及639號雅蘭中心 一期1202-03 及1208室'],
    surgical: ['中環畢打街 1-3 號中建大廈 15 樓 1515 室'],
  },
  {
    id: 40,
    name: '李佑榮',
    area: 'hk',
    regions: '香港',
    districts: '灣仔區',
    tel: '3956 2026',
    clinic: ['銅鑼灣百德新街2-20 號 恆隆中心 16 樓 1614-15 室'],
    surgical: ['中環畢打街 1-3 號中建大廈 15 樓 1515 室'],
  },
  {
    id: 41,
    name: '梁苑珊',
    area: 'hk',
    regions: '香港',
    districts: '中西區',
    tel: '3956 2026',
    clinic: ['中環畢打街 1-3 號中建大廈 15 樓 1515 室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 42,
    name: '梁苑珊',
    area: 'kl',
    regions: '九龍',
    districts: '觀塘區',
    tel: '3956 2026',
    clinic: ['觀塘開源道79號鱷魚恤中心 16樓1601室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 43,
    name: '梁苑珊',
    area: 'kl',
    regions: '九龍',
    districts: '油尖旺區',
    tel: '3956 2026',
    clinic: [
      '旺角彌敦道625及639號雅蘭中心 一期12樓1202-03 及1208室',
      '旺角彌敦道625及639號雅蘭中心 一期17樓1725B室',
    ],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 44,
    name: '梁苑珊',
    area: 'nt',
    regions: '新界',
    districts: '沙田區',
    tel: '3956 2026',
    clinic: ['沙田正街 11-17 號偉華中心 2 樓 1C-1F 號舖及 5A 號舖'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 45,
    name: '梁苑珊',
    area: 'nt',
    regions: '新界',
    districts: '荃灣區',
    tel: '3956 2026',
    clinic: ['荃灣沙咀道 255 號思源樓地下'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 46,
    name: '梁苑珊',
    area: 'hk',
    regions: '香港',
    districts: '灣仔區',
    tel: '3956 2026',
    clinic: ['銅鑼灣百德新街2-20 號 恆隆中心 16 樓 1614-15 室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 47,
    name: '梁苑珊',
    area: 'nt',
    regions: '新界',
    districts: '元朗區',
    tel: '3956 2026',
    clinic: [
      '元朗青山公路 45-47 號誠信大廈地舖',
      '元朗青山公路 21A 號 元美大廈地下1 號舖',
    ],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 48,
    name: '李德倫',
    area: 'hk',
    regions: '香港',
    districts: '中西區',
    tel: '3956 2026',
    clinic: ['中環畢打街 1-3 號中建大廈 15 樓 1515 室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
    ],
  },
  {
    id: 49,
    name: '李德倫',
    area: 'kl',
    regions: '九龍',
    districts: '觀塘區',
    tel: '3956 2026',
    clinic: ['觀塘開源道79號鱷魚恤中心 16樓1601室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
    ],
  },
  {
    id: 50,
    name: '李德倫',
    area: 'kl',
    regions: '九龍',
    districts: '油尖旺區',
    tel: '3956 2026',
    clinic: [
      '旺角彌敦道 625 及 639 號 雅蘭中心一期 12樓 1202-03 室',
      '旺角彌敦道 625 及 639 號 雅蘭中心一期 17樓 1725B 室',
    ],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
    ],
  },
  {
    id: 51,
    name: '李德倫',
    area: 'nt',
    regions: '新界',
    districts: '沙田區',
    tel: '3956 2026',
    clinic: ['沙田正街 11-17 號偉華中心 2 樓1C-1F, 5A 號舖'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
    ],
  },
  {
    id: 52,
    name: '李德倫',
    area: 'nt',
    regions: '新界',
    districts: '西貢區',
    tel: '3956 2026',
    clinic: ['將軍澳運亨路1號新都城中心一期地下G55-56號鋪'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
    ],
  },
  {
    id: 53,
    name: '李德倫',
    area: 'nt',
    regions: '新界',
    districts: '元朗區',
    tel: '3956 2026',
    clinic: ['元朗青山公路 45-47 號誠信大廈地舖'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
    ],
  },
  {
    id: 54,
    name: '吳兆駿',
    area: 'hk',
    regions: '香港',
    districts: '中西區',
    tel: '3956 2026',
    clinic: ['中環畢打街 1-3 號中建大廈 15 樓 1515 室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 55,
    name: '吳兆駿',
    area: 'kl',
    regions: '九龍',
    districts: '油尖旺區',
    tel: '3956 2026',
    clinic: ['旺角彌敦道625及639號雅蘭中心 一期1202-03 及1208室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 56,
    name: '吳兆駿',
    area: 'nt',
    regions: '新界',
    districts: '西貢區',
    tel: '3956 2026',
    clinic: ['將軍澳運亨路1號新都城中心一期地下G55-56號鋪'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 57,
    name: '吳兆駿',
    area: 'hk',
    regions: '香港',
    districts: '灣仔區',
    tel: '3956 2026',
    clinic: ['銅鑼灣百德新街2-20 號 恆隆中心 16 樓 1614-15 室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 58,
    name: '吳兆駿',
    area: 'nt',
    regions: '新界',
    districts: '元朗區',
    tel: '3956 2026',
    clinic: ['元朗青山公路 45-47 號誠信大廈地舖'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 59,
    name: '尹浩柟',
    area: 'hk',
    regions: '香港',
    districts: '中西區',
    tel: '3956 2026',
    clinic: ['中環畢打街 1-3 號中建大廈 15 樓 1515 室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 60,
    name: '尹浩柟',
    area: 'kl',
    regions: '九龍',
    districts: '觀塘區',
    tel: '3956 2026',
    clinic: ['觀塘開源道79號鱷魚恤中心 16樓1601室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 61,
    name: '尹浩柟',
    area: 'kl',
    regions: '九龍',
    districts: '油尖旺區',
    tel: '3956 2026',
    clinic: [
      '旺角彌敦道 625 及 639 號 雅蘭中心一期 12樓 1202-03 室',
      '旺角彌敦道 625 及 639 號 雅蘭中心一期 17樓 1725B 室',
    ],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 62,
    name: '尹浩柟',
    area: 'nt',
    regions: '新界',
    districts: '沙田區',
    tel: '3956 2026',
    clinic: ['沙田正街 11-17 號偉華中心 2 樓 1C-1F 號舖及 5A 號舖'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 63,
    name: '尹浩柟',
    area: 'nt',
    regions: '新界',
    districts: '西貢區',
    tel: '3956 2026',
    clinic: ['將軍澳運亨路1號新都城中心一期地下G55-56號鋪'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 64,
    name: '尹浩柟',
    area: 'nt',
    regions: '新界',
    districts: '荃灣區',
    tel: '3956 2026',
    clinic: ['荃灣沙咀道 255 號思源樓地下'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 65,
    name: '尹浩柟',
    area: 'hk',
    regions: '香港',
    districts: '灣仔區',
    tel: '3956 2026',
    clinic: ['銅鑼灣百德新街2-20 號 恆隆中心 16 樓 1614-15 室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 66,
    name: '尹浩柟',
    area: 'nt',
    regions: '新界',
    districts: '元朗區',
    tel: '3956 2026',
    clinic: [
      '1.元朗青山公路 45-47 號誠信大廈地舖2. 元朗青山公路 21A 號 元美大廈地下1 號舖',
    ],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 67,
    name: '黃俊華',
    area: 'hk',
    regions: '香港',
    districts: '中西區',
    tel: '3956 2026',
    clinic: ['中環畢打街 1-3 號中建大廈 15 樓 1515 室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
    ],
  },
  {
    id: 68,
    name: '黃俊華',
    area: 'kl',
    regions: '九龍',
    districts: '油尖旺區',
    tel: '3956 2026',
    clinic: ['旺角彌敦道 625 及 639 號 雅蘭中心一期 12樓 1202-03 室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
    ],
  },
  {
    id: 69,
    name: '黃俊華',
    area: 'nt',
    regions: '新界',
    districts: '沙田區',
    tel: '3956 2026',
    clinic: ['沙田正街 11-17 號偉華中心 2 樓 5A 號舖'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
    ],
  },
  {
    id: 70,
    name: '黃俊華',
    area: 'nt',
    regions: '新界',
    districts: '元朗區',
    tel: '3956 2026',
    clinic: ['元朗青山公路 45-47 號誠信大廈地舖'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '新界元朗青山公路 45-47號 誠信大廈地舖',
      '旺角彌敦道 625 及 639 號雅蘭中心一期 12 樓 1236 室',
    ],
  },
  {
    id: 71,
    name: '邱俊源',
    area: 'hk',
    regions: '香港',
    districts: '中西區',
    tel: '3956 2026',
    clinic: ['中環畢打街 1-3 號中建大廈 15 樓 1515 室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 72,
    name: '邱俊源',
    area: 'kl',
    regions: '九龍',
    districts: '觀塘區',
    tel: '3956 2026',
    clinic: ['觀塘開源道79號鱷魚恤中心 16樓1601室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 73,
    name: '邱俊源',
    area: 'kl',
    regions: '九龍',
    districts: '油尖旺區',
    tel: '3956 2026',
    clinic: ['旺角彌敦道625及639號雅蘭中心 一期1202-03 及1208室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 74,
    name: '邱俊源',
    area: 'nt',
    regions: '新界',
    districts: '沙田區',
    tel: '3956 2026',
    clinic: ['沙田正街 11-17 號偉華中心 2 樓 1C-1F 號舖及 5A 號舖'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 75,
    name: '邱俊源',
    area: 'nt',
    regions: '新界',
    districts: '西貢區',
    tel: '3956 2026',
    clinic: ['將軍澳運亨路1號新都城中心一期地下G55-56號鋪'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 76,
    name: '邱俊源',
    area: 'nt',
    regions: '新界',
    districts: '荃灣區',
    tel: '3956 2026',
    clinic: ['荃灣沙咀道 255 號思源樓地下'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 77,
    name: '邱俊源',
    area: 'hk',
    regions: '香港',
    districts: '灣仔區',
    tel: '3956 2026',
    clinic: ['銅鑼灣百德新街2-20 號 恆隆中心 16 樓 1614-15 室'],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
  {
    id: 78,
    name: '邱俊源',
    area: 'nt',
    regions: '新界',
    districts: '元朗區',
    tel: '3956 2026',
    clinic: [
      '元朗青山公路 45-47 號誠信大廈地舖',
      '元朗青山公路 21A 號 元美大廈地下1 號舖',
    ],
    surgical: [
      '中環畢打街 1-3 號 中建大廈 15 樓 1515 室',
      '旺角彌敦道625及639號 雅蘭中心一期1236室',
      '新界元朗青山公路 45-47 號 誠信大廈地舖',
    ],
  },
])
const searchKeyword = ref('')
const itemsPerPage = 10
const currentPage = ref<number>(1)
watch([activeTab, searchKeyword], () => {
  currentPage.value = 1
})
// 過濾後的完整列表（搜尋 + 地區）
const displayedDoctors = computed(() => {
  return allDoctors.value.filter((doctor) => {
    // 搜尋名稱
    if (searchKeyword.value.trim()) {
      const kw = searchKeyword.value.trim().toLowerCase()
      if (!doctor.name.toLowerCase().includes(kw)) return false
    }
    // 地區篩選
    return doctor.area === activeTab.value
  })
})
const paginatedDoctors = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return displayedDoctors.value.slice(start, start + itemsPerPage)
})
const totalPages = computed(() =>
  Math.ceil(displayedDoctors.value.length / itemsPerPage)
)
watch(totalPages, (newTotal) => {
  if (currentPage.value > newTotal && newTotal > 0) {
    currentPage.value = newTotal
  }
})
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
const setPage = (page: number) => {
  if (page < 1) page = 1
  if (page > totalPages.value) page = totalPages.value

  currentPage.value = page
  scrollToTop()
}
</script>
<template>
  <main class="doctor">
    <CspBanner active="doctor" />
    <section
      class="container max-w-5xl mx-auto px-3 xl:px-0 sticky top-[150px] lg:static"
    >
      <div
        class="flex flex-col lg:flex-row lg:justify-between pb-2 lg:pb-0 mb-5 lg:mb-18 gap-6 sticky top-[calc(12.6vw+72.5px)] lg:static bg-white pt-7 lg:pt-22"
      >
        <div
          class="search order-1 lg:order-2 border-2 lg:border-3 border-[#C7C5C5] rounded-2xl lg:rounded-3xl flex items-center gap-2 lg:gap-3 py-1 pl-3 pr-2 lg:py-2 lg:px-6"
        >
          <i class="iconfont icon-csp-search !text-2xl lg:!text-4xl"></i>
          <input
            v-model="searchKeyword"
            type="search"
            :placeholder="t('csp.doctor.search')"
            class="size-full focus:outline-[#2958A3] p-2 rounded-2xl lg:rounded-3xl text-xl lg:text-3xl"
          />
        </div>
        <div
          class="doctor-tabs text-xl lg:text-2xl lg:leading-[56px] order-2 lg:order-1 text-[#1B407A] text-center flex items-center justify-between lg:justify-start lg:gap-[3vw]"
        >
          <div
            v-for="tab in tabs"
            :key="tab.id"
            class="tab w-3/10 lg:w-[132px] rounded-md lg:rounded-lg"
            :class="{ active: activeTab === tab.id }"
            @click="changeTab(tab.id)"
          >
            {{ t(`csp.doctor.tab_${tab.id}`) }}
          </div>
        </div>
      </div>
    </section>
    <section>
      <CspDoctor :list="paginatedDoctors" />
      <div
        v-if="displayedDoctors.length > 0"
        class="pagination flex items-center justify-center gap-4 mt-10 mb-20"
      >
        <div
          v-if="currentPage > 1"
          class="page prev cursor-pointer"
          @click="setPage(currentPage - 1)"
        >
          <i class="iconfont icon-arrow-left !text-xs lg:!text-base"></i>
        </div>
        <div
          v-if="currentPage > 1"
          class="page cursor-pointer"
          @click="setPage(currentPage - 1)"
        >
          {{ currentPage - 1 }}
        </div>
        <div class="page active">
          {{ currentPage }}
        </div>
        <span v-if="currentPage + 1 < totalPages">...</span>
        <div
          v-if="currentPage < totalPages"
          class="page cursor-pointer"
          @click="setPage(totalPages)"
        >
          {{ totalPages }}
        </div>
        <div
          v-if="currentPage < totalPages"
          class="page next cursor-pointer"
          @click="setPage(currentPage + 1)"
        >
          <i class="iconfont icon-arrow-right !text-xs lg:!text-base"></i>
        </div>
      </div>
    </section>
    <CspButton clinic />
    <PageFooterMenu />
  </main>
</template>
<style lang="scss" scoped>
.doctor {
  .tab {
    border: 1px solid #1b407a;
    padding: 8px 0;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover,
    &.active {
      background-color: #1b407a;
      color: white;
    }
  }
}
.pagination {
  .page {
    border: 0.6px solid #c7c5c5;
    background-color: #fff;
    width: 36px;
    height: 36px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.active {
      background-color: #e3eaf4;
      font-weight: bold;
    }
  }
}
@media screen and (min-width: 1024px) {
  .pagination {
    .page {
      border-width: 1px;
      width: 60px;
      height: 60px;
      border-radius: 12px;
    }
  }
}
</style>

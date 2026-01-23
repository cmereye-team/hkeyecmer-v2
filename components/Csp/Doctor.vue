<script lang="ts" setup>
const { t } = useLang()
const locale = useState<string>('locale.setting')
type TabKey = 'hk' | 'kl' | 'nt'
interface Doctor {
  id: number
  name: string
  enName: string
  avatar: string
  area: TabKey
  regions: string
  clinic: Array<string>
}
const props = defineProps<{
  list: Doctor[]
}>()
</script>
<template>
  <div
    class="doctor-list container max-w-5xl mx-auto px-3 xl:px-0 space-y-2 lg:space-y-5"
  >
    <li
      v-for="doctor in props.list"
      :key="doctor.id"
      :area="doctor.regions"
      class="doctor-item flex doctor-nt flex-col lg:flex-row"
    >
      <div class="doctor-name">
        <div class="flex items-baseline">
          <h2>{{ doctor.name }}</h2>
          <span>{{ t('csp.doctor.text') }}</span>
        </div>
        <span class="en">{{ doctor.enName }}</span>
      </div>
      <div class="doctor-main items-center flex-1">
        <div class="avatar w-1/5 rounded-full lg:rounded-sm overflow-hidden">
          <img
            :src="doctor.avatar"
            alt="{{ t('csp.plan_title') }}_{{t('csp.nav.doctor')}}_{{ doctor.name }}{{ t('csp.doctor.text') }}"
            loading="lazy"
            class="w-full max-h-[300px] object-contain lg:object-cover object-top"
          />
        </div>
        <div class="field flex-1 px-3 py-2 lg:py-5 lg:space-y-5">
          <div class="field-key">
            <strong class="text-primary">
              {{ t('csp.doctor.clinic.address') }}
            </strong>
          </div>
          <ul class="field-value list-disc list-inside">
            <li v-for="(item, index) in doctor.clinic" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </li>
  </div>
</template>
<style lang="scss" scoped>
.doctor-list .doctor-name {
  background-color: #2958a3;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 8px 0;
  white-space: nowrap;
  gap: 8px;
}
.doctor-list .doctor-name h2 {
  font-size: 24px;
  margin-bottom: 0;
  line-height: 1;
}
.doctor-list .doctor-name span {
  font-size: 16px;
  line-height: 1;
}
.doctor-list .doctor-main {
  background-color: #e3eaf4;
  display: flex;
}
.doctor-list .field-key {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
}
.doctor-list .doctor-icon {
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (min-width: 1024px) {
  .doctor-list .doctor-name {
    width: 316px;
    align-items: center;
    flex-direction: column;
  }
  .doctor-list .doctor-name h2 {
    font-size: 60px;
  }
  .doctor-list .doctor-name span {
    font-size: 36px;
  }
  .doctor-list .doctor-name .en {
    font-size: 30px;
  }
  .doctor-list .doctor-main {
    gap: 5%;
  }
  .doctor-list .field-key {
    gap: 20px;
    font-size: 24px;
  }
}
</style>

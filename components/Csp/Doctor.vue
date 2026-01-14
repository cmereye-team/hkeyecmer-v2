<script lang="ts" setup>
const { t } = useLang()
const locale = useState<string>('locale.setting')
interface Doctor {
  id: number
  name: string
  regions: string
  districts?: string
  tel: string
  clinic: Array<string>
  surgical: Array<string>
}
const props = defineProps<{
  list: Doctor[]
}>()
onMounted(() => {
  console.log(`length=${props.list.length},list=`, props.list)
})
</script>
<template>
  <div
    class="doctor-list container max-w-5xl mx-auto px-3 xl:px-0 space-y-2 lg:space-y-5"
  >
    <li
      v-for="doctor in props.list"
      :key="doctor.id"
      :area="doctor.regions"
      :etdst="doctor.districts"
      class="doctor-item flex doctor-nt flex-col lg:flex-row"
    >
      <div class="doctor-name">
        <h2>{{ doctor.name }}</h2>
        <span>{{ t('csp.doctor.text') }}</span>
      </div>
      <div class="doctor-main flex-1 lg:[&>*]:flex-1">
        <div class="flex flex-col gap-4 lg:gap-13">
          <div class="field space-y-3 lg:space-y-5">
            <div class="field-key">
              <div class="doctor-icon">
                <img
                  src="https://statichk.cmermedical.com/newopd/services/csp/icon-csp-tel.svg"
                  alt="電話圖標"
                  loading="lazy"
                  class="w-6 lg:w-9"
                />
              </div>
              <strong class="text-primary">電話</strong>
            </div>
            <p class="field-value">{{ doctor.tel }}</p>
          </div>
          <div class="field space-y-3 lg:space-y-5">
            <div class="field-key">
              <div class="doctor-icon">
                <img
                  src="https://statichk.cmermedical.com/newopd/services/csp/icon-csp-clinic.svg"
                  alt="診所地址圖標"
                  loading="lazy"
                  class="w-5 lg:w-7"
                />
              </div>
              <strong class="text-primary">診所地址</strong>
            </div>
            <p v-if="doctor.clinic.length === 1" class="field-value">
              {{ doctor.clinic[0] }}
            </p>
            <ul v-else-if="doctor.clinic.length > 1" class="field-value">
              <li v-for="(item, index) in doctor.clinic" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <div class="field space-y-3 lg:space-y-5">
          <div class="field-key">
            <div class="doctor-icon">
              <img
                src="https://statichk.cmermedical.com/newopd/services/csp/icon-csp-surgical.svg"
                alt="手術中心地址圖標"
                loading="lazy"
                class="w-6 lg:w-9"
              />
            </div>
            <strong class="text-primary">手術中心地址</strong>
          </div>
          <p v-if="doctor.surgical.length === 1" class="field-value">
            {{ doctor.surgical[0] }}
          </p>
          <ul
            v-else-if="doctor.surgical.length > 1"
            class="field-value list-decimal space-y-2 lg:space-y-4"
          >
            <li v-for="(item, index) in doctor.surgical" :key="index">
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
  align-items: end;
  padding: 20px 0;
  white-space: nowrap;
}
.doctor-list .doctor-name h2 {
  font-size: 48px;
  margin-bottom: 0;
  line-height: 1;
}
.doctor-list .doctor-name span {
  font-size: 30px;
  line-height: 1;
}
.doctor-list .doctor-main {
  background-color: #e3eaf4;
  display: flex;
  flex-direction: column;
  padding: 32px 24px 16px 24px;
  gap: 16px;
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
@media screen and (max-width: 1023px) {
  .field-value {
    padding-left: 32px;
  }
}
@media screen and (min-width: 1024px) {
  .doctor-list .doctor-name {
    padding: 60px 32px 0 32px;
    justify-content: start;
    align-items: baseline;
    width: 316px;
  }
  .doctor-list .doctor-name h2 {
    font-size: 60px;
  }
  .doctor-list .doctor-name span {
    font-size: 36px;
  }
  .doctor-list .doctor-main {
    flex-direction: row;
    padding: 36px 56px 56px 56px;
    gap: 10%;
  }
  .doctor-list .field-key {
    gap: 20px;
    font-size: 24px;
  }
}
</style>

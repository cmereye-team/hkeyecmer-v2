<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')

useHead(() => ({
  title: t('pages.medical_team.medical_team_header_title'),
  meta(){
    return [
      {
        hid: 'medicalTeamDesc',
        name: 'description',
        content: "Hong Kong CMER Eye Center provides optometry and comprehensive eye examinations. Medical services include: cataract, glaucoma, strabismus, amblyopia, ocular surface diseases, corneal diseases, macular degeneration, retinal detachment, orbital, ophthalmic plastic surgery and eye tumors, myopia control and ophthalmic services. CMER Eye Center has a total of 10 eye clinics, with 22 ophthalmologists, providing professional eye medical services, eye examinations and eye medical services in Hong Kong. The ophthalmologist team consists of 22 ophthalmologists, led by ophthalmologist Dr. LAM Shun Chiu, Dennis.",
      },
      {
        hid: 'medicalTeamKey',
        name: 'keywords',
        content: "CMER Eye Center Hong Kong CMER Eye Center Ophthalmology Specialist Clinic Ophthalmology Specialist Center Vision Center Comprehensive Eye Exam CMER Eye Hong Kong Eye Treatment Solutions Eye Clinic",
      }
    ]
  },
}))
const doctorList = [
  {
    doctorName: 'pages.medical_team.doctorList.doctor_1.doctor_1_name',
    doctorIntro: 'pages.medical_team.doctorList.doctor_1.doctor_1_intro',
    doctorEnName: 'pages.medical_team.doctorList.doctor_1.doctor_1_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_1',
      'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_2',
      'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_3',
      'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_4',
      'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_5',
      'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_6',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor01.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_2.doctor_2_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_2.doctor_2_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_1',
      'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_2',
      'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_3',
      'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_4',
      'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_5',
      'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_6',
      'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_7',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor02.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_3.doctor_3_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_3.doctor_3_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_3.doctor_3_education.doctor_3_education_1',
      'pages.medical_team.doctorList.doctor_3.doctor_3_education.doctor_3_education_2',
      'pages.medical_team.doctorList.doctor_3.doctor_3_education.doctor_3_education_3',
      'pages.medical_team.doctorList.doctor_3.doctor_3_education.doctor_3_education_4',
      'pages.medical_team.doctorList.doctor_3.doctor_3_education.doctor_3_education_5',
      'pages.medical_team.doctorList.doctor_3.doctor_3_education.doctor_3_education_6',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/2023/07/41e0d233e7c04b33.png',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_4.doctor_4_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_4.doctor_4_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_4.doctor_4_education.doctor_4_education_1',
      'pages.medical_team.doctorList.doctor_4.doctor_4_education.doctor_4_education_2',
      'pages.medical_team.doctorList.doctor_4.doctor_4_education.doctor_4_education_3',
      'pages.medical_team.doctorList.doctor_4.doctor_4_education.doctor_4_education_4',
      'pages.medical_team.doctorList.doctor_4.doctor_4_education.doctor_4_education_5',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor04.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_5.doctor_5_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_5.doctor_5_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_5.doctor_5_education.doctor_5_education_1',
      'pages.medical_team.doctorList.doctor_5.doctor_5_education.doctor_5_education_2',
      'pages.medical_team.doctorList.doctor_5.doctor_5_education.doctor_5_education_3',
      'pages.medical_team.doctorList.doctor_5.doctor_5_education.doctor_5_education_4',
      'pages.medical_team.doctorList.doctor_5.doctor_5_education.doctor_5_education_5',
      'pages.medical_team.doctorList.doctor_5.doctor_5_education.doctor_5_education_6',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/2023/07/b875a2f3ff87282d.png',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_6.doctor_6_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_6.doctor_6_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_1',
      'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_2',
      'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_3',
      'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_4',
      'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_5',
      'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_6',
      'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_7',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor06.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_7.doctor_7_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_7.doctor_7_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_7.doctor_7_education.doctor_7_education_1',
      'pages.medical_team.doctorList.doctor_7.doctor_7_education.doctor_7_education_2',
      'pages.medical_team.doctorList.doctor_7.doctor_7_education.doctor_7_education_3',
      'pages.medical_team.doctorList.doctor_7.doctor_7_education.doctor_7_education_4',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor07.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_8.doctor_8_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_8.doctor_8_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_8.doctor_8_education.doctor_8_education_1',
      'pages.medical_team.doctorList.doctor_8.doctor_8_education.doctor_8_education_2',
      'pages.medical_team.doctorList.doctor_8.doctor_8_education.doctor_8_education_3',
      'pages.medical_team.doctorList.doctor_8.doctor_8_education.doctor_8_education_4',
      'pages.medical_team.doctorList.doctor_8.doctor_8_education.doctor_8_education_5',
      'pages.medical_team.doctorList.doctor_8.doctor_8_education.doctor_8_education_6',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/2023/07/124ecdd1faf1791f.png',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_9.doctor_9_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_9.doctor_9_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_9.doctor_9_education.doctor_9_education_1',
      'pages.medical_team.doctorList.doctor_9.doctor_9_education.doctor_9_education_2',
      'pages.medical_team.doctorList.doctor_9.doctor_9_education.doctor_9_education_3',
      'pages.medical_team.doctorList.doctor_9.doctor_9_education.doctor_9_education_4',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor09.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_10.doctor_10_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_10.doctor_10_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_1',
      'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_2',
      'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_3',
      'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_4',
      'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_5',
      'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_6',
      'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_7',
      'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_8',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor10.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_11.doctor_11_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_11.doctor_11_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_11.doctor_11_education.doctor_11_education_1',
      'pages.medical_team.doctorList.doctor_11.doctor_11_education.doctor_11_education_2',
      'pages.medical_team.doctorList.doctor_11.doctor_11_education.doctor_11_education_3',
      'pages.medical_team.doctorList.doctor_11.doctor_11_education.doctor_11_education_4',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor11.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_12.doctor_12_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_12.doctor_12_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_12.doctor_12_education.doctor_12_education_1',
      'pages.medical_team.doctorList.doctor_12.doctor_12_education.doctor_12_education_2',
      'pages.medical_team.doctorList.doctor_12.doctor_12_education.doctor_12_education_3',
      'pages.medical_team.doctorList.doctor_12.doctor_12_education.doctor_12_education_4',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor12.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_13.doctor_13_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_13.doctor_13_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_13.doctor_13_education.doctor_13_education_1',
      'pages.medical_team.doctorList.doctor_13.doctor_13_education.doctor_13_education_2',
      'pages.medical_team.doctorList.doctor_13.doctor_13_education.doctor_13_education_3',
      'pages.medical_team.doctorList.doctor_13.doctor_13_education.doctor_13_education_4',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor13.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_14.doctor_14_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_14.doctor_14_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_14.doctor_14_education.doctor_14_education_1',
      'pages.medical_team.doctorList.doctor_14.doctor_14_education.doctor_14_education_2',
      'pages.medical_team.doctorList.doctor_14.doctor_14_education.doctor_14_education_3',
      'pages.medical_team.doctorList.doctor_14.doctor_14_education.doctor_14_education_4',
      'pages.medical_team.doctorList.doctor_14.doctor_14_education.doctor_14_education_5',
      'pages.medical_team.doctorList.doctor_14.doctor_14_education.doctor_14_education_6',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/2023/08/b9a03d7323a8ee22.png',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_15.doctor_15_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_15.doctor_15_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_15.doctor_15_education.doctor_15_education_1',
      'pages.medical_team.doctorList.doctor_15.doctor_15_education.doctor_15_education_2',
      'pages.medical_team.doctorList.doctor_15.doctor_15_education.doctor_15_education_3',
      'pages.medical_team.doctorList.doctor_15.doctor_15_education.doctor_15_education_4',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor15.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_16.doctor_16_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_16.doctor_16_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_16.doctor_16_education.doctor_16_education_1',
      'pages.medical_team.doctorList.doctor_16.doctor_16_education.doctor_16_education_2',
      'pages.medical_team.doctorList.doctor_16.doctor_16_education.doctor_16_education_3',
      'pages.medical_team.doctorList.doctor_16.doctor_16_education.doctor_16_education_4',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor16.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_17.doctor_17_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_17.doctor_17_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_17.doctor_17_education.doctor_17_education_1',
      'pages.medical_team.doctorList.doctor_17.doctor_17_education.doctor_17_education_2',
      'pages.medical_team.doctorList.doctor_17.doctor_17_education.doctor_17_education_3',
      'pages.medical_team.doctorList.doctor_17.doctor_17_education.doctor_17_education_4',
      'pages.medical_team.doctorList.doctor_17.doctor_17_education.doctor_17_education_5',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor17.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_18.doctor_18_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_18.doctor_18_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_18.doctor_18_education.doctor_18_education_1',
      'pages.medical_team.doctorList.doctor_18.doctor_18_education.doctor_18_education_2',
      'pages.medical_team.doctorList.doctor_18.doctor_18_education.doctor_18_education_3',
      'pages.medical_team.doctorList.doctor_18.doctor_18_education.doctor_18_education_4',
      'pages.medical_team.doctorList.doctor_18.doctor_18_education.doctor_18_education_5',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor18.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_19.doctor_19_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_19.doctor_19_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_19.doctor_19_education.doctor_19_education_1',
      'pages.medical_team.doctorList.doctor_19.doctor_19_education.doctor_19_education_2',
      'pages.medical_team.doctorList.doctor_19.doctor_19_education.doctor_19_education_3',
      'pages.medical_team.doctorList.doctor_19.doctor_19_education.doctor_19_education_4',
      'pages.medical_team.doctorList.doctor_19.doctor_19_education.doctor_19_education_5',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor19.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_20.doctor_20_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_20.doctor_20_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_20.doctor_20_education.doctor_20_education_1',
      'pages.medical_team.doctorList.doctor_20.doctor_20_education.doctor_20_education_2',
      'pages.medical_team.doctorList.doctor_20.doctor_20_education.doctor_20_education_3',
      'pages.medical_team.doctorList.doctor_20.doctor_20_education.doctor_20_education_4',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor20.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_21.doctor_21_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_21.doctor_21_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_21.doctor_21_education.doctor_21_education_1',
      'pages.medical_team.doctorList.doctor_21.doctor_21_education.doctor_21_education_2',
      'pages.medical_team.doctorList.doctor_21.doctor_21_education.doctor_21_education_3',
      'pages.medical_team.doctorList.doctor_21.doctor_21_education.doctor_21_education_4',
      'pages.medical_team.doctorList.doctor_21.doctor_21_education.doctor_21_education_5',
      'pages.medical_team.doctorList.doctor_21.doctor_21_education.doctor_21_education_6',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor21.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_22.doctor_22_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_22.doctor_22_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_22.doctor_22_education.doctor_22_education_1',
      'pages.medical_team.doctorList.doctor_22.doctor_22_education.doctor_22_education_2',
      'pages.medical_team.doctorList.doctor_22.doctor_22_education.doctor_22_education_3',
      'pages.medical_team.doctorList.doctor_22.doctor_22_education.doctor_22_education_4',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor22.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_23.doctor_23_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_23.doctor_23_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_23.doctor_23_education.doctor_23_education_1',
      'pages.medical_team.doctorList.doctor_23.doctor_23_education.doctor_23_education_2',
      'pages.medical_team.doctorList.doctor_23.doctor_23_education.doctor_23_education_3',
      'pages.medical_team.doctorList.doctor_23.doctor_23_education.doctor_23_education_4',
      'pages.medical_team.doctorList.doctor_23.doctor_23_education.doctor_23_education_5',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/2023/07/6b20f513c8d4d402.png',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_24.doctor_24_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_24.doctor_24_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_24.doctor_24_education.doctor_24_education_1',
      'pages.medical_team.doctorList.doctor_24.doctor_24_education.doctor_24_education_2',
      'pages.medical_team.doctorList.doctor_24.doctor_24_education.doctor_24_education_3',
      'pages.medical_team.doctorList.doctor_24.doctor_24_education.doctor_24_education_4',
      'pages.medical_team.doctorList.doctor_24.doctor_24_education.doctor_24_education_5',
      'pages.medical_team.doctorList.doctor_24.doctor_24_education.doctor_24_education_6',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/2024/06/90c786186e3a1f88.png',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_25.doctor_25_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_25.doctor_25_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_25.doctor_25_education.doctor_25_education_1',
      'pages.medical_team.doctorList.doctor_25.doctor_25_education.doctor_25_education_2',
      'pages.medical_team.doctorList.doctor_25.doctor_25_education.doctor_25_education_3',
      'pages.medical_team.doctorList.doctor_25.doctor_25_education.doctor_25_education_4',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/2024/08/cdd92b7eecffa0df.jpg',
  },
]
</script>
<template>
  <div id="medical-team" class="medical-team">
    <div>
      <div class="title">{{ $t('pages.medical_team.medical_team_title') }}</div>
      <div></div>
    </div>
    <div class="mainCon">
      <ul>
        <li v-for="(item, index) in doctorList" :key="index" class="docList">
          <div class="docDes" :class="{'docDes-en': locale === 'en'}">
            <div :class="['docName',{'docName-en': locale === 'en'}]">{{ $t(item.doctorName) }}</div>
            <p v-if="item.doctorIntro" class="doctorIntro">
              {{ $t(item.doctorIntro) }}
            </p>
            <div class="docEducation">
              <div class="edutitle" :class="{'edutitle-en': locale === 'en'}">
                {{ $t('pages.medical_team.doctor_edu') }}
              </div>
              <div>
                <div v-for="(ele, i) in item.doctorEducation" :key="i">
                  <span>{{ $t(ele) }}</span>
                </div>
                <nuxt-link class="orderLink text-white inline-block" id="medicalTeamLink" to="https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&cid=7f3c58ea65c34d9d82c1f6455384212f&lng=big5&sid=cd5457bae7eb4c9db0534553310cb509&p=https%3A//hkcmereye.com/&rf1=&rf2=&msg=&e=hkcmereye.com[youce-goutong]&d=1692676040714">{{
                  $t('pages.medical_team.doctor_order')
                }}</nuxt-link>
              </div>
            </div>
          </div>
          <div class="docImg" :class="{'docImg-en': locale === 'en'}">
            <div><img :src="item.doctorImgUrl" /></div>
            <div class="docEnName">{{ $t(item.doctorEnName) }}</div>
          </div>
        </li>
      </ul>
    </div>
    <Footer class="-mt-24" />
    <div class="mt-50">
      <EnFooterMenu />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url(~/assets/font/font.css);

.medical-team {
  margin-bottom: 50px;
  &>div:first-child {
    margin-left: 695px;
    margin-top: 98px;
    position: relative;
    &>.title {
      position: relative;
      -ms-writing-mode: tb-lr;
      writing-mode: vertical-lr;
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 400;
      font-size: 40.1431px;
      line-height: 46px;
      text-align: center;
      letter-spacing: 0.05em;
      color: #515151;
      &::after {
        content: 'medical team';
        color: #8ad8dd;
        text-transform: uppercase;
        font-size: 26px;
        white-space: nowrap;
        position: absolute;
        top: 0;
        left: -40px;
      }
    }
    &>div:last-child {
      background: #f2f2f2;
      width: 738px;
      height: 543px;
      position: absolute;
      top: -98px;
      left: 150px;
    }
  }
  .mainCon {
    margin-left: 30.6vw;
    z-index: 2;
    position: relative;
    margin-top: 71px;
    .docList {
      display: flex;
      flex-direction: row;
      position: relative;
      margin-bottom: 177px;
      width: 745px;
      justify-content: space-between;
      .docDes {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: -45px;
        position: relative;
        z-index: 9;
      }
      .docImg {
        position: relative;
        &>div:first-child {
          &>img {
            z-index: 9;
            position: relative;
          }
        }
        .docEnName {
          font-family: 'ButterTangXin';
          font-style: normal;
          font-weight: 400;
          font-size: 32.3948px;
          line-height: 108px;
          text-align: center;
          color: #2958a3;
          position: absolute;
          z-index: 10;
        }
      }
      .orderLink {
        width: 130px;
        height: 51px;
        background: #8ad8dd;
        line-height: 51px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        text-align: center;
        letter-spacing: 0.1em;
        color: #ffffff;
        cursor: pointer;
        z-index: 15;
        margin: 43px 0 0 200px;
      }
      .docName {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 50px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #515151;
      }
      .doctorIntro {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 350;
        font-size: 15px;
        line-height: 32px;
        text-align: center;
        letter-spacing: 0.1em;
        color: #515151;
      }
      .docEducation {
        display: flex;
        flex-direction: row;
        margin-top: 29px;
        &>div:first-child {
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 350;
          font-size: 15px;
          line-height: 35px;
          text-align: center;
          letter-spacing: 0.1em;
          color: #515151;
          margin-right: 36px;
        }

        &>div:last-child {
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 350;
          font-size: 15px;
          line-height: 35px;
          letter-spacing: 0.1em;
          color: #515151;
          white-space: pre-wrap !important;
        }
      }
    }
  }

  ul>li:nth-child(2) {
    .orderLink {
      bottom: -40px !important;
    }
  }

  ul>li:nth-child(10) {
    &>a {
      bottom: -40px;
    }
  }

  ul>li:nth-child(1) {
    .orderLink {
      bottom: -80px !important;
    }

    &>div:nth-child(1) {
      margin-top: 65px !important;
    }

    &>div:nth-child(2) {
      &>div:nth-child(2) {
        top: 74px;
        left: -37px;
      }
    }
  }

  ul>li:nth-child(2) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 102px;
        left: -116px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -153px;
        bottom: -86px;
        width: 418px;
        height: 316px;
      }
    }
  }

  ul>li:nth-child(3) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 37px;
        left: -53px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -84px;
        bottom: -68px;
        width: 312px;
        height: 284px;
      }
    }
  }

  ul>li:nth-child(4) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }
      &>div:nth-child(2) {
        top: 129px;
        left: -107px;
      }
      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -221px;
        top: 83px;
        width: 449px;
        height: 202px;
      }
    }
  }
  ul>li:nth-child(5) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }
      &>div:nth-child(2) {
        top: 70px;
        left: -100px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -224px;
        top: -47px;
        width: 488px;
        height: 284px;
      }
    }
  }

  ul>li:nth-child(6) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 102px;
        left: -62px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -52px;
        top: -44px;
        width: 276px;
        height: 281px;
      }
    }
  }

  ul>li:nth-child(7) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 0px;
        right: -66px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -298px;
        bottom: -55px;
        width: 515px;
        height: 322px;
      }
    }
  }

  ul>li:nth-child(8) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 69px;
        left: -80px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -59px;
        top: -47px;
        width: 276px;
        height: 284px;
      }
    }
  }

  ul>li:nth-child(9) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: -3px;
        right: -71px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -341px;
        top: 59px;
        width: 558px;
        height: 184px;
      }
    }
  }

  ul>li:nth-child(10) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 69px;
        left: -100px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -78px;
        top: -47px;
        width: 342px;
        height: 322px;
      }
    }

    &>a {
      bottom: -40px !important;
    }
  }

  ul>li:nth-child(11) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 100px;
        left: -80px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -46px;
        bottom: -46px;
        width: 267px;
        height: 250px;
      }
    }
  }

  ul>li:nth-child(12) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 30px;
        left: -120px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -54px;
        top: -47px;
        width: 275px;
        height: 273px;
      }
    }
  }

  ul>li:nth-child(13) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 135px;
        left: -136px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -222px;
        top: 44px;
        width: 443px;
        height: 211px;
      }
    }
  }

  ul>li:nth-child(14) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 30px;
        left: -100px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -72px;
        top: -57px;
        width: 336px;
        height: 283px;
      }
    }
  }

  ul>li:nth-child(15) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 130px;
        left: -120px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -111px;
        bottom: -50px;
        width: 336px;
        height: 283px;
      }
    }
  }

  ul>li:nth-child(16) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 13px;
        left: -86px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -53px;
        top: -39px;
        width: 277px;
        height: 283px;
      }
    }
  }
  ul>li:nth-child(17) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }
      &>div:nth-child(2) {
        top: 129px;
        left: -111px;
      }
      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -297px;
        top: 45px;
        width: 521px;
        height: 245px;
      }
    }
  }

  ul>li:nth-child(18) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }
      &>div:nth-child(2) {
        top: 40px;
        right: -96px;
      }
      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -62px;
        top: 45px;
        width: 286px;
        height: 285px;
      }
    }
  }

  ul>li:nth-child(19) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }
      &>div:nth-child(2) {
        top: 40px;
        left: -68px;
      }
      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -48px;
        top: -50px;
        width: 260px;
        height: 286px;
      }
    }
  }

  ul>li:nth-child(20) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }
      &>div:nth-child(2) {
        top: 16px;
        left: -120px;
      }
      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -154px;
        top: -32px;
        width: 366px;
        height: 277px;
      }
    }
  }

  ul>li:nth-child(21) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }
      &>div:nth-child(2) {
        top: 156px;
        left: -100px;
      }
      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -44px;
        bottom: -45px;
        width: 252px;
        height: 277px;
      }
    }
  }

  ul>li:nth-child(22) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }
      &>div:nth-child(2) {
        top: 7px;
        left: -103px;
      }
      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -315px;
        top: 79px;
        width: 523px;
        height: 224px;
      }
    }
  }
  ul>li:nth-child(23) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
        width: 264px;
        height: 330px;
      }
      &>div:nth-child(2) {
        top: 157px;
        right: -103px;
      }
      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -315px;
        top: 79px;
        width: 523px;
        height: 224px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .medical-team {
    &>div:first-child {
      margin-left: 0px;
      margin-top: 78px;
      &>.title {
        -ms-writing-mode: initial;
        writing-mode: initial;
        font-size: 28px;
        text-align: left;
        letter-spacing: -0.1em;
        padding-top: 30px;
        margin-left: 20px;
        &::after {
          left: 0px;
          top: 60px;
          letter-spacing: 0.01em;
          font-size: 16px;
        }
      }
      &>div:last-child {
        width: calc(100% - 48%);
        top: 0;
        left: 48%;
        height: 220px;
      }
    }
    .mainCon {
      margin-left: 0;
      margin-top: 145px;
      padding: 0 30px;
      .docList {
        flex-direction: row-reverse;
        width: 100%;
        padding-top: 70px;
        margin-bottom: 50px;
        .docDes {
          margin-top: 0px;
          &.docDes-en{
            max-width: 45%;
          }
        }
        .orderLink {
          width: 90px;
          height: 34px;
          font-size: 16px;
          line-height: 34px;
          margin: 24.5px auto 0;
          display: block;
        }

        .docName {
          position: absolute;
          width: calc(100vw - 60px);
          right: 0;
          top: -50px;
          text-align: left;
          font-size: 24px;
          &.docName-en{
            font-size: 18px;
          }
        }

        .doctorIntro {
          position: absolute;
          width: calc(100vw - 60px);
          right: 0;
          top: -20px;
          text-align: left;
          font-size: 12px;
        }

        .docImg {
          width: 60%;
          margin-top: 29px;
          margin-right: 15px;
          &.docImg-en{
            min-width: 50%;
            max-width: 50%;
            img{
              width: 100%;
            }
          }
          
          .docEnName {
            font-size: 20px;
            left: 50px;
            width: 100%;
            text-align: right;
            line-height: 25px;
            top: 160px;
            position: relative;
            top: 0 !important;
            left: 0 !important;
            z-index: 5;
          }
        }

        .docEducation {
          &>div:first-child {
            margin-right: 0px;
            font-size: 12px;
            min-width: 40px;
            text-align: left;
            line-height: 16px;
            &.edutitle-en{
              display: none;
            }
          }
          &>div:last-child {
            font-size: 12px;
            line-height: 160%;
            margin-bottom: 6px;
            padding-right: 5px;
          }
        }
      }
    }

    ul>li:nth-child(1) {
      .orderLink {
        bottom: 10px !important;
      }

      &>div:nth-child(2) {
        .docEnName {
          top: 150px;
        }
      }

      &>div:nth-child(1) {
        margin-top: 0 !important;
      }

      &::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 200px;
      }
    }

    ul>li:nth-child(2) {
      &>div:nth-child(2) {
        .docEnName {
          top: 150px !important;
        }

        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(3) {
      &>div:nth-child(2) {
        .docEnName {
          bottom: 10px !important;
        }

        &>div:nth-child(1)::before {
          width: 100%;
          left: -30px;
          top: 38px;
          height: 140px;
        }
      }
    }

    ul>li:nth-child(4) {
      &>div:nth-child(2) {
        .docEnName {
          top: 170px !important;
        }

        &>div:nth-child(1)::before {
          width: 100%;
          left: -30px;
          top: 38px;
          height: 120px;
        }
      }
    }

    ul>li:nth-child(5) {
      &>div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }

        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: -30px;
          height: 170px;
        }
      }
    }

    ul>li:nth-child(6) {
      &>div:nth-child(2) {
        .docEnName {
          bottom: 70px !important;
        }

        &>div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: -30px;
          height: 180px;
        }
      }
    }

    ul>li:nth-child(7) {
      &>div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        &>div:nth-child(1)::before {
          width: 100%;
          left: -30px;
          top: 38px;
          height: 170px;
        }
      }
    }

    ul>li:nth-child(8) {
      &>div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        &>div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: -30px;
          height: 170px;
        }
      }
    }

    ul>li:nth-child(9) {
      &>div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }

        &>div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul>li:nth-child(10) {
      &>div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        &>div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul>li:nth-child(11) {
      &>div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        &>div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul>li:nth-child(12) {
      &>div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        &>div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul>li:nth-child(13) {
      &>div:nth-child(2) {
        &>div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul>li:nth-child(14) {
      .docEnName {
        bottom: 0px !important;
      }

      &>div:nth-child(2) {
        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(15) {
      &>div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(16) {
      &>div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(17) {
      &>div:nth-child(2) {
        .docEnName {
          bottom: -5px !important;
        }

        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(18) {
      &>div:nth-child(2) {
        .docEnName {
          bottom: -5px !important;
        }

        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(19) {
      &>div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(20) {
      &>div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(21) {
      &>div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }

        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(22) {
      &>div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(23) {
      &>div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        &>div:nth-child(1) {
          width: 100%;
          height: auto;
        }

        &>div:nth-child(1)::before {
          width: calc(100% + 70px);
          left: -30px;
          top: 0px;
          height: 110px;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .medical-team {
    margin: auto;
    max-width: 1200px;

    .mainCon {
      margin-left: 8.6vw;
    }

    &>div:first-child {
      margin-left: 190px;
    }
  }
}
</style>

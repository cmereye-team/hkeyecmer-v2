<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: `${t('pages.talent_recruitment.talent_recruitment')}｜${t('pages.index.title')}`,
  meta(){
    return [
      {
        hid: 'talentDesc',
        name: 'description',
        content: "Hong Kong CMER Eye Center provides optometry and comprehensive eye examinations. Medical services include: cataract, glaucoma, strabismus, amblyopia, ocular surface diseases, corneal diseases, macular degeneration, retinal detachment, orbital, ophthalmic plastic surgery and eye tumors, myopia control and ophthalmic services. CMER Eye Center has a total of 10 eye clinics, with 22 ophthalmologists, providing professional eye medical services, eye examinations and eye medical services in Hong Kong. The ophthalmologist team consists of 22 ophthalmologists, led by ophthalmologist Dr. LAM Shun Chiu, Dennis.",
      },
      {
        hid: 'talentKey',
        name: 'keywords',
        content: "CMER Eye Center Hong Kong CMER Eye Center Ophthalmology Specialist Clinic Ophthalmology Specialist Center Vision Center Comprehensive Eye Exam CMER Eye Hong Kong Eye Treatment Solutions Eye Clinic",
      }
    ]
  },
}))
</script>

<template>
  <div id="careers" class="careers">
    <div>
      <div>
        <img
          src="https://static.cmereye.com/imgs/2023/06/383e41e9408dc74f.jpg"
          alt="加入我們，攜手未來"
        />
      </div>
      <div>
        <p class="">{{ $t('pages.talent_recruitment.text1') }}</p>
        <img
          class=""
          src="https://static.cmereye.com/imgs/2023/03/f47c6bf2d4a3693a.png"
          alt=""
        />
      </div>
      <svg
        width="9"
        height="144"
        viewBox="0 0 9 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-v-1d8b93bf=""
        data-v-a125a221=""
      >
        <path
          d="M1 1V143L7.5 130.5"
          stroke="#2958A3"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          data-v-1d8b93bf=""
          data-v-a125a221=""
        ></path>
      </svg>
    </div>

    <div class="mianConten mainCon pb-64 flex items-center justify-between">
      <div class="desBox mt-52 mr-10">
        <h1 class="text-4xl mb-10">
          {{ $t('pages.talent_recruitment.text2') }}
        </h1>
        <p class="leading-8">
          {{ $t('pages.talent_recruitment.p1') }}<br />
          {{ $t('pages.talent_recruitment.p2') }}<br />
          {{ $t('pages.talent_recruitment.p3') }}
        </p>
        <a
          href="https://cmermedical.com/joinus/careers"
          target="_blank"
          rel="noopener noreferrer"
          class="linkBtn text-white mt-12 inline-block"
          >{{ $t('pages.talent_recruitment.apply') }}</a
        >
      </div>

      <div class="imgBox">
        <img
          src="https://static.cmereye.com/imgs/2023/02/833b5617b3c72216.png"
          alt=""
          class="right1"
        />
        <img
          src="https://static.cmereye.com/imgs/2023/02/f7e9031c1b6f047d.png"
          alt=""
          class="right2"
        />
        <img class="right3" src="https://static.cmereye.com/imgs/2023/06/677dce366a5a1e7c.jpg" alt="">
      </div>
    </div>
    <EnFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
.careers {
  width: 100%;
  margin-bottom: 50px;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    position: relative;
    &::before{
      content: '';
      top: 56px;
      left: 0;
      width: calc((100vw - 1080px)/2 + 800px);
      position: absolute;
      background: #f1f1f1;
      height: 880px;
    }
    & > div:nth-child(1) {
      width: 100%;
      max-width: 1080px;
      margin: 245px auto 0;
      position: relative;
      & > img {
        width: 100%;
      }
    }

    & > div:nth-child(2),
    & > div:nth-child(3) {
      position: absolute;
    }

    & > div:nth-child(2) {
      z-index: 5;
      left: 50%;
      transform: translateX(-50%);
      right: 0;
      bottom: 10px;
      width: max-content;
      & > p {
        font-size: 55px;
        color: #fff;
        margin-bottom: 30px;
         display: inline-block;
      }
    }

    & > svg:nth-child(3) {
      position: absolute;
      bottom: -150px;
      left: 50%;
    }
  }
}

.desBox {
  h1 {
    font-size: 45px;
    color: #515151;
  }

  p {
    font-size: 20px;
    line-height: 2;
    color: #515151;
  }

  a {
    background: #8ad8dd;
    font-size: 22px;
    padding: 10px 30px;
  }
}

.mianConten {
  width: 100%;
  max-width: 1080px;
  margin: auto;
  font-family: 'Noto Sans HK';

  .imgBox {
    background-color: #f2f2f2;
    width: 55%;
    height: 370px;
    position: relative;
    margin-top: 390px;

    img {
      position: absolute;
    }

    .right1 {
      left: 20px;
      top: -150px;
      z-index: 10;
    }

    .right2 {
      right: 20px;
      top: 50px;
      z-index: 11;
      width: 44%;
    }
    .right3 {
      left: 40px;
      bottom: -35%;
      z-index: 12;
      width: 50%;
    }
  }
}
@media screen and (max-width: 768px) {
  .careers {
    & > div:nth-child(1) {
      &::before{
        width: calc(100% - 30px);
        height: 270px;
        top: 76px;
      }
      & > div:nth-child(1) {
        margin: 70px auto;
      }
      & > div:nth-child(2) {
        left: 30px;
        transform: none;
        width: calc(100% - 60px);
        bottom: 90px;
        &>p{
          font-size: 30px;
          margin-bottom: 0;
          filter: drop-shadow(2px 2px 1px #515151);
        }
        img{
          width: 100%;
          margin-top: -10px;
        }
      }
      & > svg{
        display: none;
      }
    }
  }
  .mianConten {
    flex-direction: column;
    .imgBox{
      width: calc(100% - 60px);
      margin: 130px auto 0;
      height: 180px;
      .right1 {
        width: 55%;
        top: -50px;
      }
      .right2 {
        right: 3px;
        top: 40px;
        width: 50%;
      }
      .right3 {
        left: 30px;
        width: 45%;
      }
    }
  }
  .desBox{  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 20px auto;
    h1{
      font-size: 26px;
      margin-bottom: 20px;
    }
    p{
      font-size: 16px;
      line-height: 250%;
    }
    a{
      font-size: 20px;
      padding: 10px 20px;
      margin-top: 30px;
    }
  }
}
</style>

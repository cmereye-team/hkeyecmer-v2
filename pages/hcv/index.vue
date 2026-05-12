<!--
 * @Author: 谭洁莹
 * @Date: 2026-05-12 11:30:51
 * @LastEditTime: 2026-05-12 17:58:28
 * @FilePath: /pages/hcv/index.vue
 * @Description: 长者医疗券
-->
<script lang="ts" setup>
const { t } = useLang()
definePageMeta({
  layout: 'page',
})
const locale = useState<string>('locale.setting')
const isEn = computed(() => locale.value.startsWith('en'))
interface ServiceItem {
  icon: string;
  text: string;
  link: string;
}
const serviceList = computed<ServiceItem[]>(() => [
  {
    icon: 'https://statichk.cmermedical.com/newopd/ppp/hcv-services-01-v1.svg',
    text: t('ppp.hcv.part4.services.item01'),
    link: '/medical-service/cataract',
  },
  {
    icon: 'https://statichk.cmermedical.com/newopd/ppp/hcv-services-02-v1.svg',
    text: t('ppp.hcv.part4.services.item02'),
    link: '/medical-service/glaucoma',
  },
  {
    icon: 'https://statichk.cmermedical.com/newopd/ppp/hcv-services-03-v1.svg',
    text: t('ppp.hcv.part4.services.item03'),
    link: '/medical-service/muscaeVolitantes',
  },
  {
    icon: 'https://statichk.cmermedical.com/newopd/ppp/hcv-services-04-v1.svg',
    text: t('ppp.hcv.part4.services.item04'),
    link: '/medical-service/amotioRetinae',
  },
  {
    icon: 'https://statichk.cmermedical.com/newopd/ppp/hcv-services-05-v1.svg',
    text: t('ppp.hcv.part4.services.item05'),
    link: '/medical-service/maculopathy',
  },
  {
    icon: 'https://statichk.cmermedical.com/newopd/ppp/hcv-services-06-v2.svg',
    text: t('ppp.hcv.part4.services.item06'),
    link: '/medical-service/conjunctivitis',
  },
  {
    icon: 'https://statichk.cmermedical.com/newopd/ppp/hcv-services-07-v1.svg',
    text: t('ppp.hcv.part4.services.item07'),
    link: '/medical-service/xerophthalmia',
  },
  {
    icon: 'https://statichk.cmermedical.com/newopd/ppp/hcv-services-08-v1.svg',
    text: t('ppp.hcv.part4.services.item08'),
    link: '/medical-service/ocularSurfaceDiseases',
  },
  {
    icon: 'https://statichk.cmermedical.com/newopd/ppp/hcv-services-09-v1.svg',
    text: t('ppp.hcv.part4.services.item09'),
    link: '/medical-service/strabismusAmblyopia',
  },
  {
    icon: 'https://statichk.cmermedical.com/newopd/ppp/hcv-services-10-v1.svg',
    text: t('ppp.hcv.part4.services.item10'),
    link: '/medical-service/atropine',
  },
  {
    icon: 'https://statichk.cmermedical.com/newopd/ppp/hcv-services-11-v1.svg',
    text: t('ppp.hcv.part4.services.item11'),
    link: '/medical-service/eyeOrthopaedicDisease',
  },
  {
    icon: 'https://statichk.cmermedical.com/newopd/ppp/hcv-services-12-v1.svg',
    text: t('ppp.hcv.part4.services.item12'),
    link: '/medical-service/cataract',
  },
])
</script>
<template>
  <main :class="{ 'is-en': isEn }">
    <section class="banner pt-30 py-15 lg:py-40 mb-10 lg:mb-18">
      <h1
        class="page-title text-center text-primary text-2xl md:text-4xl lg:text-6xl font-medium"
      >
        {{ t('ppp.hcv.title') }}
      </h1>
    </section>
    <section class="container px-3 2xl:px-0 max-w-6xl mx-auto mb-10 lg:mb-13">
      <div
        class="flex rounded-xl py-5 px-3 lg:py-7 lg:px-6 gap-4 lg:gap-9 flex-col justify-center items-center lg:flex-row border border-hcv"
      >
        <img
          src="https://statichk.cmermedical.com/newopd/activity/hcv-logo.svg"
          class="w-30 lg:w-34"
          alt=""
        />
        <p
          class="text-hcv text-justify text-base lg:text-xl font-semibold !leading-[1.8] tracking-widest"
        >
          {{ t('ppp.hcv.intro') }}
        </p>
      </div>
    </section>
    <section class="container px-3 2xl:px-0 max-w-6xl mx-auto mb-9 lg:mb-11">
      <h2 class="hcv-title">{{ t('ppp.hcv.part1.title') }}</h2>
      <p class="hcv-intro">{{ t('ppp.hcv.part1.intro') }}</p>
    </section>
    <section class="container px-3 2xl:px-0 max-w-6xl mx-auto mb-9 lg:mb-11">
      <h2 class="hcv-title">{{ t('ppp.hcv.part2.title') }}</h2>
      <ol class="hcv-intro list-decimal list-inside mb-8 lg:mb-12">
        <li>{{ t('ppp.hcv.part2.list.li1') }}</li>
        <i18n-t scope="global" keypath="ppp.hcv.part2.list.li2" tag="li">
          <template #strong1>
            <strong class="text-hcv">{{ t('ppp.hcv.part2.strong1') }}</strong>
          </template>
        </i18n-t>
        <i18n-t scope="global" keypath="ppp.hcv.part2.list.li3" tag="li">
          <template #strong2>
            <strong class="text-hcv">{{ t('ppp.hcv.part2.strong2') }}</strong>
          </template>
        </i18n-t>
        <li>{{ t('ppp.hcv.part2.list.li4') }}</li>
        <li>{{ t('ppp.hcv.part2.list.li5') }}</li>
      </ol>
      <picture>
        <source
          media="(min-width: 1024px)"
          srcset="
            https://hkcmereye.com/static/images/voucher/voucherQuestionPc.webp
          "
        />
        <img
          src="https://hkcmereye.com/static/images/voucher/voucherQuestionPhone.webp"
          alt="長者透過手機或平板了解醫療券使用方法"
          loading="lazy"
          class="w-full"
        />
      </picture>
    </section>
    <section class="container px-3 2xl:px-0 max-w-6xl mx-auto mb-9 lg:mb-11">
      <h2 class="hcv-title">{{ t('ppp.hcv.part3.title') }}</h2>
      <p class="hcv-intro">{{ t('ppp.hcv.part3.intro') }}</p>
    </section>
    <section class="container px-3 2xl:px-0 max-w-6xl mx-auto mb-9 lg:mb-11">
      <h2 class="hcv-title">{{ t('ppp.hcv.part4.title') }}</h2>
      <div
        class="service grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-6 md:gap-y-12 xl:gap-y-20 py-5 md:py-10 xl:py-15"
      >
        <nuxt-link
          :to="item.link"
          class="service-item flex lg:justify-center items-center lg:flex-col gap-3"
          v-for="item in serviceList"
          :key="item.text"
        >
          <div class="icon">
            <img :src="item.icon" :alt="`${item.text}LOGO`" />
          </div>
          <span class="text">{{ item.text }}</span>
        </nuxt-link>
      </div>
    </section>
    <section class="container px-3 2xl:px-0 max-w-6xl mx-auto mb-40 lg:mb-38">
      <div class="mb-12 px-8 lg:pl-38 lg:pr-15 relative">
        <div
          class="notice border border-hcv border-dotted p-3 pl-10 lg:py-3 lg:pl-14 lg:pr-2 text-hcv"
        >
          <div class="font-black">
            <h3 class="inline-block text-center lg:text-left">
              {{ t('ppp.hcv.part5.title') }}
            </h3>
            <p class="inline-block">{{ t('ppp.hcv.part5.p1') }}</p>
          </div>
          <p>
            <small class="font-bold">{{ t('ppp.hcv.part5.p2') }}</small>
          </p>
        </div>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=85293451508&text=%E6%9F%A5%E8%A9%A2%E9%86%AB%E7%99%82%E5%88%B8"
        rel="nofollow"
        class="whatsapp-btn flex justify-around items-center py-2 px-4 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="45"
          viewBox="0 0 43 45"
          fill="none"
        >
          <path
            d="m10.5 41.125-9.81 2.8 3.208-9.146C.904 30.33-.416 24.88.193 19.476S3.297 9.093 7.197 5.498 16.13-.055 21.324 0 31.511 2.122 35.34 5.8c3.829 3.68 6.225 8.71 6.727 14.128s-.924 10.837-4.006 15.22c-3.081 4.38-7.6 7.415-12.688 8.517-5.087 1.103-10.384.2-14.872-2.541m.85-2.523c3.935 2.552 8.639 3.472 13.189 2.58s8.617-3.532 11.405-7.402 4.097-8.693 3.668-13.52c-.428-4.829-2.562-9.315-5.984-12.58s-7.884-5.075-12.513-5.074-9.09 1.815-12.508 5.084c-3.42 3.268-5.55 7.756-5.975 12.585-.425 4.828.887 9.649 3.678 13.517l.415.574-1.999 5.693 6.163-1.76zm17-4.362a8 8 0 0 1-1.225-.136c-.361-.044-.707-.161-1.063-.24a6 6 0 0 1-1.047-.35c-.443-.136-.855-.35-1.283-.527q-.569-.283-1.132-.586c-.518-.316-1.044-.612-1.532-.972-.602-.4-1.174-.87-1.75-1.321a26 26 0 0 1-1.833-1.687c-.55-.527-1.047-1.101-1.565-1.66a25 25 0 0 1-3.893-5.487 11.4 11.4 0 0 1-1.057-3.328 9.2 9.2 0 0 1-.069-2.504 6.26 6.26 0 0 1 1.102-3.122q.067-.146.166-.272l.8-.842c.233-.265.528-.463.855-.574a1.7 1.7 0 0 1 1.433.145q.369.254.663.6l3.188 3.34a1.9 1.9 0 0 1 .524 1.293c.006.4-.104.79-.316 1.123a4 4 0 0 1-.446.526c-.512.54-1.033 1.076-1.544 1.622.147.315.334.63.5.946s.355.63.541.946a15.8 15.8 0 0 0 2.334 3.05 15 15 0 0 0 2.71 2.207c.577.395 1.18.745 1.787 1.088l1.725-1.807c.21-.23.47-.404.756-.508a1.7 1.7 0 0 1 1.364.07c.314.179.594.417.825.703 1.05 1.104 2.107 2.208 3.155 3.305.326.346.514.808.527 1.294v.085a2.3 2.3 0 0 1-.208.814 5 5 0 0 1-.972 1.15q-.211.262-.488.442a5.7 5.7 0 0 1-1.674.9 5.4 5.4 0 0 1-.867.22q-.298.063-.602.063a3 3 0 0 1-.4-.022z"
            fill="#dea941"
          />
        </svg>
        <span>{{ t('ppp.hcv.part5.whatsapp') }}</span>
      </a>
      <div class="hcv-intro !text-left mt-8 lg:mt-12">
        <p>
          <span>{{ t('ppp.hcv.part5.more') }}</span>
          <a
            href="https://www.hcv.gov.hk/tc/index.html"
            target="_blank"
            rel="nofollow"
            >https://www.hcv.gov.hk/tc/index.html</a
          >
        </p>
        <p>{{ t('ppp.hcv.part5.statement') }}</p>
      </div>
    </section>
  </main>
</template>
<style lang="scss" scoped>
.text-hcv {
  color: #22867a;
}
.border-hcv {
  border-color: #22867a;
}
.banner {
  background: url('https://hkcmereye.com/static/upload/other/20250210/1739179154393855.avif')
    no-repeat;
  background-position: 50%;
  background-size: cover;
  @media screen and (min-width: 1024px) {
    background-position: 50% 40%;
  }
  .page-title {
    text-shadow: #fff 3px 0px 0px, #fff 2.83333px 0.983333px 0px,
      #fff 2.35px 1.85px 0px, #fff 1.61667px 2.51667px 0px,
      #fff 0.7px 2.91667px 0px, #fff -0.283333px 2.98333px 0px,
      #fff -1.25px 2.73333px 0px, #fff -2.06667px 2.16667px 0px,
      #fff -2.66667px 1.36667px 0px, #fff -2.96667px 0.416667px 0px,
      #fff -2.95px -0.566667px 0px, #fff -2.6px -1.5px 0px,
      #fff -1.96667px -2.26667px 0px, #fff -1.11667px -2.78333px 0px,
      #fff -0.133333px -3px 0px, #fff 0.85px -2.88333px 0px,
      #fff 1.75px -2.43333px 0px, #fff 2.45px -1.73333px 0px,
      #fff 2.88333px -0.833333px 0px;
  }
}
.hcv-title {
  color: #22867a;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  @media screen and (min-width: 1024px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
}
.hcv-intro {
  color: #66696f;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.8;
  text-align: justify;
  letter-spacing: 0.1em;
  @media screen and (min-width: 1024px) {
    font-size: 20px;
    font-weight: 700;
    line-height: 2;
  }
}
.service {
  .service-item {
    display: flex;
  }
  .icon {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0.05em;
    color: #515151;
    flex: 1;
  }
}
@media screen and (max-width: 639px) {
  .is-en {
    .service .text {
      font-size: 12px;
    }
  }
}
@media screen and (min-width: 1280px) {
  .service {
    .icon {
      width: 112px;
      height: 96px;
    }
    .text {
      font-size: 24px;
      line-height: 1.5;
      text-align: center;
    }
  }
}
.notice {
  font-size: clamp(12px, 3.8vw, 20px);
  small {
    font-size: clamp(8px, 2.3vw, 14px);
  }
  &::before {
    content: '';
    position: absolute;
    width: 56px;
    height: 64px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDYiIGhlaWdodD0iMTE5IiB2aWV3Qm94PSIwIDAgMTA2IDExOSIgZmlsbD0ibm9uZSI+PHBhdGggZD0ibTcxLjUgMi4wMDgtMzUgNDAgMTQgMzUgNTQgNnoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMTA1LjQzOCA3OS42MjYgOTQuNzAyIDUzLjM1OGM1LjQ3LTMuNTIgNy43NjgtMTAuNDE0IDUuMjY2LTE2LjU4MS0yLjUzLTYuMTk3LTguOTktOS40ODMtMTUuMzYxLTguMTc1TDczLjkgMi4zMzRBMy43MiAzLjcyIDAgMCAwIDcxLjAyLjAzNmMtMS4zMzktLjE3NS0yLjYxOS4yOS0zLjQ2MiAxLjMxbC0zMi4yMzggMzguNkwyLjcwNSA1My4yNDFhNC40MDQgNC40MDQgMCAwIDAtMi4zODYgNS43MDFsMTIuOTE4IDMxLjY1YTQuMzggNC4zOCAwIDAgMCA1LjcwMyAyLjQxNWw0LjMzNS0xLjc3NEw0NS41OSAxMTcuMThhMy42IDMuNiAwIDAgMCA0LjEwMy45ODlsMTUuODI3LTYuNDU4YzIuMjk5LS45MzEgMi45OTctMy44MTEgMS4zNjgtNS42NzJsLTcuNjgxLTguOTg5IDUuMjA4LTIuMTIzYTMuODMgMy44MyAwIDAgMCAyLjA2NS0yLjAzNiAzLjggMy44IDAgMCAwIDAtMi44OGwtMy43MjQtOS4xOTIgMzguODQxIDMuOTI3YzIuNzM1LjMyIDQuOTE3LTIuNDc0IDMuODQxLTUuMTJtLTkuNTE0LTQxLjIyMWMxLjYgMy45NTYuMzIgOC4zMi0yLjg4IDEwLjg1LS40MDgtLjk2LTYuNDU5LTE1LjczNy02Ljc1LTE2LjU1MiA0LjA3My0uNDY2IDguMDMgMS43NzUgOS42MyA1LjcwMk0xNy4yODIgODguOTYzIDQuMzY0IDU3LjI4NGwzMS4xMDItMTIuNjgzYzQuNTEgMTEuMDgzIDguMzggMjAuNTk2IDEyLjkxOCAzMS42NzktNy45NDIgMy4yMjktMjUuNjYyIDEwLjQ0My0zMS4xMDIgMTIuNjgzbTQ1LjYyIDE5LjExMi0xNC4zNzMgNS44NDctMjEuMDA2LTI0LjQzNSAxNC4zNzMtNS44NDdjMjEuNzMzIDI1LjI1IDE4LjE1NSAyMS4xMTkgMjEuMDA2IDI0LjQzNU01Ni4yMSA5My41ODggNDYuMTcyIDgxLjg5Nmw1LjM4My0yLjE4MmMuMjkuMDMgNi4xMS42MSA2LjI4NC42MWw0LjM5MyAxMC43OTN6bS0zLjQ2Mi0xOC4xNTJMMzkuMTYxIDQyLjE1OCA3MC4yMzQgNC45MjNsMzAuNzU0IDc1LjM3MnoiIGZpbGw9IiMyMjg2N2EiLz48cGF0aCBkPSJNMzUuNDY2IDQ0LjYwMiA0LjM2MyA1Ny4yODVsMTIuOTE4IDMxLjY3OWM1LjQ0LTIuMjQgMjMuMTYtOS40NTUgMzEuMTAyLTEyLjY4NC00LjUzOS0xMS4wODMtOC40MDgtMjAuNTk1LTEyLjkxOC0zMS42NzhtLTIzLjQ1IDE4LjA2NGMtLjQ2Ny0xLjEzNS4wNTctMi40MTQgMS4xOTItMi44NWwxNy42ODktNy4yNDRjMS4xMzUtLjQzNiAyLjQxNS4wODggMi44NTEgMS4yMjJhMi4xNSAyLjE1IDAgMCAxLTEuMTkyIDIuODIybC0xNy43MiA3LjI0M2MtMS4wNzUuNDM3LTIuMzg1LS4wNTgtMi44MjItMS4xOTJ6bTMuNDkgOC41NTNhMi4xNyAyLjE3IDAgMCAxIDEuMTk0LTIuODVsMTcuNzE4LTcuMjE1YTIuMTUzIDIuMTUzIDAgMCAxIDIuODIyIDEuMTkzIDIuMTcgMi4xNyAwIDAgMS0xLjE5MyAyLjg1TDE4LjMzIDcyLjQxM2EyLjE0IDIuMTQgMCAwIDEtMi44MjMtMS4xOTNtMjQuMDMzIDIuNTMtMTcuNzIgNy4yNDRjLTEuMDc2LjQzNy0yLjM1Ny0uMDg3LTIuODIyLTEuMTkyLS40NjYtMS4xMzUuMDU4LTIuNDE1IDEuMTkzLTIuODUxbDE3LjcxOS03LjI0NGMxLjEwNS0uNDM2IDIuMzg1LjA4OCAyLjgyMiAxLjIyMmEyLjEzIDIuMTMgMCAwIDEtMS4xOTMgMi44MjJtMjMuMzYzIDM0LjMyNC0xNC4zNzMgNS44NDgtMjEuMDA2LTI0LjQzNiAxNC4zNzMtNS44NDZjMjEuNzMzIDI1LjI1IDE4LjE1NSAyMS4xMTkgMjEuMDA2IDI0LjQzNXptMzAuMTQzLTU4LjgyMWMtLjQwOC0uOTYtNi40Ni0xNS43MzgtNi43NS0xNi41NTMgNC4wNzMtLjQ2NSA4LjAzIDEuNzc1IDkuNjMgNS43MDIgMS42IDMuOTU3LjMyIDguMzItMi44OCAxMC44NSIgZmlsbD0iIzg1ZDBiMCIvPjxwYXRoIGQ9Im0zMi41NTYgNTYuNjE0LTE3LjcxOSA3LjI0NGMtMS4wNzYuNDM2LTIuMzg1LS4wNTktMi44MjItMS4xOTMtLjQ2Ni0xLjEzNS4wNTgtMi40MTUgMS4xOTMtMi44NWwxNy42OS03LjI0NGMxLjEzNC0uNDM2IDIuNDE0LjA4OCAyLjg1IDEuMjIyYTIuMTUgMi4xNSAwIDAgMS0xLjE5MiAyLjgyMnptMy40OTEgOC41ODNMMTguMzMgNzIuNDFhMi4xNCAyLjE0IDAgMCAxLTIuODIzLTEuMTkzIDIuMTcgMi4xNyAwIDAgMSAxLjE5NC0yLjg1bDE3LjcxOC03LjIxNGEyLjE1MyAyLjE1MyAwIDAgMSAyLjgyMiAxLjE5MyAyLjE3IDIuMTcgMCAwIDEtMS4xOTMgMi44NW0zLjQ5MSA4LjU1NUwyMS44MiA4MC45OTVjLTEuMDc2LjQzNi0yLjM1Ny0uMDg3LTIuODIyLTEuMTkzLS40NjUtMS4xMzQuMDU4LTIuNDE0IDEuMTkzLTIuODVsMTcuNzE5LTcuMjQ0YzEuMTA1LS40MzcgMi4zODYuMDg3IDIuODIyIDEuMjIyYTIuMTMgMi4xMyAwIDAgMS0xLjE5MyAyLjgyMSIgZmlsbD0iIzIyODY3YSIvPjwvc3ZnPg==');
    background-repeat: no-repeat;
    background-size: contain;
    @media screen and (min-width: 1024px) {
      width: 104px;
      height: 120px;
      left: 92px;
    }
  }
}
.whatsapp-btn {
  width: 84vw;
  max-width: 350px;
  margin: 0 auto;
  border: 1.8px solid #eda941;
  span {
    color: #eda941;
    font-weight: 900;
    font-size: clamp(1.125rem, 6vw, 1.5rem);
  }
}
</style>

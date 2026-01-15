<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')
useHead(() => ({
  title: `${t('pages.talent_recruitment.talent_recruitment')}｜${t(
    'pages.index.title'
  )}`,
  meta() {
    return [
      {
        hid: 'talentDesc',
        name: 'description',
        content: t('tdk.talent-recruitment.desc'),
      },
      {
        hid: 'talentKey',
        name: 'keywords',
        content: t('tdk.talent-recruitment.key'),
      },
    ]
  },
}))
</script>

<template>
  <div class="section_joinus">
    <section class="head">
      <!-- <Menu zhHkLink="/joinus" enLink="/joinus-en" /> -->
      <!-- <div class="fixed_scroll">
        <div class="fixed_scroll_text en_nu_fa">Scroll</div>
      </div> -->
      <div class="banner relative">
        <div class="absolute title_box">
          <span class="block text-white">加入我們</span>
          <span class="en_nu_fa">Work With Us/</span>
          <a href="https://hk.cmermedical.com/joinus/careers/" target="_blank">
            <div class="link_box flex items-center justify-between">
              <span class="link_text">職位空缺</span>
              <span class="link_icon flex items-center justify-center">
                <i class="fa fa-angle-right"></i>
              </span>
            </div>
          </a>
        </div>
        <div class="bluetitle_box text-white absolute">人才為本 共同成長</div>
      </div>
    </section>

    <section class="mainContent">
      <img
        class="mainContent-img"
        src="https://statichk.cmermedical.com/hkcmereye/16546546544.avif"
        alt=""
      />
      <section class="mainContent-img-text relative">
        <p class="text-center flex justify-center mainContent-img-text-en">
          JobsDB The Hong Kong HR Awards 2024/25 | Best Growth In HR<br />
          Initiative Award – Recruitment | Hong Kong (International) Eye Care
          Group Limited
        </p>

        <p class="text-center flex justify-center">
          希瑪醫療集團秉持以人為本的理念，重視團隊合作，並致力於員工的專業<br
            class="text-hidden"
          />培訓，以及積極吸納更多專業醫護人才，確保為客戶提供高質量的專業醫療服務。
        </p>
      </section>

      <section class="section1 relative">
        <p class="text-center flex justify-center" v-if="locale != 'en'">
          希瑪醫療能夠取得長足發展，
          <br />實有賴全體員工堅守專業精神及熱誠工作態度，<br
            class="md:hidden"
          />同心協力， <br />為客人提供「度身訂造」的綜合醫療服務。
        </p>
        <p class="text-center flex justify-center en-text" v-else>
          The remarkable achievement of C-MER Medical is attributable to the
          professionalism and <br class="mb_hidden" />
          commitment of our staff team. Together, we work as one team to provide
          tailor-made and <br class="mb_hidden" />
          integrated specialty medical services for our customers
        </p>
      </section>
      <section class="section2">
        <h2
          class="flex items-center justify-center font-black wow animate__animated animate__fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0s"
          v-if="locale != 'en'"
        >
          員工文化
        </h2>
        <h2
          v-else
          class="flex items-center justify-center font-black wow animate__animated animate__fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0s"
        >
          OUR WORK CULTURE
        </h2>

        <ul class="flex flex-col md:justify-end" v-if="locale != 'en'">
          <li class="md:ml-auto relative">
            <img
              src="https://static.cmereye.com/imgs/cmermedical/images/joinus/section2_1.jpg"
              alt=""
            />
            <div class="text absolute">
              <h3>共同成長</h3>
              <p>
                希瑪醫療重視員工的發展及培訓，為新加入的醫生及護士提供指導，幫助他們掌握嶄新技術，熟悉公司的服務標準、政策及程序。
              </p>
            </div>
          </li>

          <li class="relative">
            <img
              src="https://static.cmereye.com/imgs/cmermedical/images/joinus/section2_2.jpg"
              alt=""
            />
            <div class="text absolute">
              <h3>各顯才能</h3>
              <p>
                希瑪醫療網羅不同學科的人才，令團隊更多元創新，抱著以客戶為中心的共同目標，為顧客提供度身訂造的專科醫療服務。
              </p>
            </div>
          </li>

          <li class="md:ml-auto relative">
            <img
              src="https://static.cmereye.com/imgs/cmermedical/images/joinus/section2_3.jpg"
              alt=""
            />
            <div class="text absolute">
              <h3>熱誠投入</h3>
              <p>
                希瑪醫療相信我們的人才優勢在於團隊合作，對工作充滿熱誠和全情投入，更對美好生活滿懷熱情。我們致力為員工締造開心工作環境，達致工作生活平衡及提升生產力。
              </p>
            </div>
          </li>
        </ul>

        <ul class="flex flex-col md:justify-end" v-else>
          <li class="md:ml-auto relative">
            <img
              src="https://static.cmereye.com/imgs/cmermedical/images/joinus/section2_1.jpg"
              alt=""
            />
            <div class="text absolute">
              <h3>GROWTH</h3>
              <p class="en-text">
                C-MER Medical invests in you. We value the development and
                training of our staffs and invest substantial resources in
                providing guidance to newly joined medical practitioners and
                nurses. They are empowered with new techniques and get familiar
                with the service standards, policies and procedures of the
                Company.
              </p>
            </div>
          </li>

          <li class="relative">
            <img
              src="https://static.cmereye.com/imgs/cmermedical/images/joinus/section2_2.jpg"
              alt=""
            />
            <div class="text absolute">
              <h3>TALENT</h3>
              <p class="en-text">
                C-MER Medical employs talents in multiple disciplines to ensure
                our team has the flexibility to think outside the box. Shared
                the common belief of patient centricity, we are dedicated to
                providing customized specialty medical services for our
                customers.
              </p>
            </div>
          </li>

          <li class="md:ml-auto relative">
            <img
              src="https://static.cmereye.com/imgs/cmermedical/images/joinus/section2_3.jpg"
              alt=""
            />
            <div class="text absolute">
              <h3>Commitment</h3>
              <p class="en-text">
                C-MER Medical believes that our talent advantage lies in our
                team spirit. It is imperative important to be not only
                passionate about work, but also to have passion for life. We aim
                to create happy workplaces for employees, help them to strike a
                work-life balance and enhance their productivity.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section
        class="section3 flex items-center justify-center flex-col"
        v-if="locale != 'en'"
      >
        <div class="text_box text-center">
          我們希望吸納更多醫護及不同學科的專才，
          <br />加入希瑪醫療，盡展所長！
        </div>

        <a
          href="https://hk.cmermedical.com/joinus/careers/"
          target="_blank"
          class=""
        >
          <div class="link_box flex items-center justify-between">
            <span class="link_text">職位空缺</span>
            <span class="link_icon flex items-center justify-center">
              <i class="fa fa-angle-right"></i>
            </span>
          </div>
        </a>
      </section>

      <section
        class="section3 flex items-center justify-center flex-col"
        v-else
      >
        <div class="text_box text-center en-text">
          We are looking for professionals of healthcare and multiple
          disciplines <br />
          to join us. Be a member of C-MER Medical to reach your full potential.
        </div>

        <a href="mailto:hr@cmereye.com">
          <div class="link_box flex items-center justify-between">
            <span class="link_text">JOIN US</span>
            <span class="link_icon flex items-center justify-center">
              <i class="fa fa-angle-right"></i>
            </span>
          </div>
        </a>
      </section>
    </section>
  </div>

  <PageFooterMenu />
</template>


<style scoped>
.section_joinus .banner {
  background-image: url('https://static.cmereye.com/imgs/cmermedical/images/joinus/banner_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.section_joinus .head .banner .bluetitle_box {
  background: rgba(128, 197, 222, 0.8);
}

.section_joinus .mainContent .mainContent-img {
  max-width: 300px;
  margin: 30px auto 0;
}
.section_joinus .mainContent .mainContent-img-text {
  font-size: 0.8rem;
  text-indent: 0;
  color: #404040;
  font-weight: 300;
}
.section_joinus .mainContent .mainContent-img-text p {
  margin-top: 20px;
  padding: 0 10px;
}

.section_joinus .mainContent .mainContent-img-text-en {
  font-size: 0.6rem;
  font-weight: 300;
}
.section_joinus .mainContent .section1 {
}

.section_joinus .mainContent .section1 p::before {
  content: ' ';
  position: absolute;
  border-bottom: 5px solid #f09038;
}

.section_joinus .mainContent .section2 ul li img {
  position: relative;
  z-index: 0;
}

.section_joinus .mainContent .section2 h2 {
  color: #114678;
}

.section_joinus .mainContent .section2 .text {
  z-index: 2;
}

.section_joinus .mainContent .section2 .text h3 {
  color: #114678;
  position: relative;
}

.section_joinus .mainContent .section2 .text h3::before {
  content: ' ';
  position: absolute;
  border: 2px solid #f09038;
  border-right: none;
  border-bottom: none;
  top: 0;
  left: 0;
}

.section_joinus .mainContent .section2 .text p {
  background: rgba(255, 255, 255, 0.7);
}

.section_joinus .mainContent .section3 .text_box {
  color: #f09038;
}

.section_joinus .link_box {
  background-color: #fff;
}

@media only screen and (max-width: 768px) {
  .text-hidden {
    display: none;
  }
  .section_joinus {
    margin-top: 70px;
    padding-bottom: 50px;
  }
  .section_joinus .head .banner {
    width: 90vw;
    margin: 0 auto;
    height: 55vw;
  }

  .section_joinus .mainContent .section2 h2 {
    font-size: 25px;
    margin-bottom: 5vw;
  }

  .section_joinus .mainContent .section2 h2::before {
    position: absolute;
    content: 'CMER';
    color: rgba(240, 144, 56, 0.1);
    font-size: 24px;
    top: -3vw;
    font-weight: 900;
    font-family: 'Metropolis';
  }

  .section_joinus .mainContent .section2 h2 img {
    width: 12vw;
  }

  .en-text {
    font-size: 0.6rem !important;
    white-space: normal;
  }
}

/* pc */
@media only screen and (min-width: 768px) {
  .en-text {
    font-size: 1rem !important;
  }
  .section_joinus {
    padding-bottom: 50px;
  }

  .section_joinus .head .banner {
    height: 33vw;
    width: 85vw;
    margin: 0 auto;
  }

  .section_joinus .head .banner .title_box {
    font-size: 3vw;
    color: #404040;
    right: 11vw;
    top: 3.5vw;
  }

  .section_joinus .head .banner .title_box span {
    font-size: 3.5vw;
  }

  .section_joinus .head .banner .bluetitle_box {
    font-size: 2.7vw;
    padding: 2vw 3vw 4vw 5vw;
    left: -7vw;
    top: 32vw;
    letter-spacing: 0.2vw;
  }
  .section_joinus .mainContent .mainContent-img {
    max-width: 600px;
    margin: 40px auto 0;
  }

  .section_joinus .mainContent .mainContent-img-text {
    font-size: 1.7rem;
    text-indent: 0;
    color: #404040;
    font-weight: 100;
  }
  .section_joinus .mainContent .mainContent-img-text p {
    margin-top: 20px;
  }
  .section_joinus .mainContent .mainContent-img-text-en {
    font-size: 0.7rem;
    font-weight: 300;
  }
  .section_joinus .mainContent .section1 {
    margin: 45px 0;
  }

  .section_joinus .mainContent .section1 p::before {
    width: 3vw;
    top: 0;
  }

  .section_joinus .mainContent .section1 p {
    text-indent: 0;
    color: #404040;
    padding-top: 45px;
    line-height: 1.5;
    font-size: 1.7rem;
    font-weight: 100;
    letter-spacing: 2px;
  }

  .section_joinus .mainContent .section2 h2 {
    font-size: 2.7vw;
  }

  .section_joinus .mainContent .section2 h2::before {
    position: absolute;
    content: 'CMER';
    color: rgba(240, 144, 56, 0.1);
    font-size: 2.5vw;
    top: -1vw;
    font-weight: 900;
    font-family: 'Metropolis';
  }

  .section_joinus .mainContent .section2 h2 img {
    width: 5vw;
  }

  .section_joinus .mainContent .section2 ul {
    width: 80vw;
    margin: 0 auto;
  }

  .section_joinus .mainContent .section2 ul li {
    margin-top: 4vw;
    margin-bottom: 4vw;
  }

  .section_joinus .mainContent .section2 ul li img {
    width: 60vw;
  }

  .section_joinus .mainContent .section2 .text {
    width: 40vw;
    top: 7vw;
    left: -12vw;
  }

  .section_joinus .mainContent .section2 .text h3 {
    padding-top: 2vw;
    padding-left: 2vw;
    font-size: 2vw;
    margin-left: -0.5vw;
  }

  .section_joinus .mainContent .section2 .text h3::before {
    width: 1vw;
    height: 1vw;
  }

  .section_joinus .mainContent .section2 .text p {
    padding: 1vw 2vw;
    font-size: 24px;
  }

  .section_joinus .mainContent .section2 ul li:nth-child(2) .text {
    left: unset;
    right: 7vw;
  }

  .section_joinus .mainContent .section2 ul li:nth-child(2) .text p {
    padding-right: 1vw;
  }

  .section_joinus .mainContent .section2 ul li:nth-child(2) .text h3 {
    text-align: right;
    margin-left: 0vw;
    padding-left: 0vw;
    padding-right: 2vw;
    padding-top: 2vw;
  }

  .section_joinus .mainContent .section2 ul li:nth-child(2) .text h3::before {
    right: 0;
    left: unset;
    border: 2px solid #f09038;
    border-bottom: none;
    border-left: none;
  }

  .section_joinus .mainContent .section2 ul li:nth-child(3) .text {
    width: 47vw;
  }

  .section_joinus .mainContent .section3 {
    /* margin-top: 3vw; */
  }

  .section_joinus .mainContent .section3 .text_box {
    font-size: 2rem;
    letter-spacing: 0.2vw;
  }

  .section_joinus a:hover .link_box {
    box-shadow: 10px 10px 0 #80c5de;
    transform: translate(-12px, -12px) !important;
  }

  .section_joinus .link_box {
    color: #114678;
    border: #80c5de 2px solid;
    font-size: 1.5vw;
    width: 22vw;
    height: 5vw;
    margin-top: 2vw;
    transition: all 0.5s;
  }

  .section_joinus .banner .link_box {
    width: 10vw;
    height: 3vw;
    margin-right: -8vw;
    margin-left: auto;
    margin-top: 1vw;
  }

  .section_joinus .link_box .link_text {
    width: 17vw;
    text-align: center;
  }

  .section_joinus .banner .link_box .link_text {
    font-size: 1.2vw !important;
  }

  .section_joinus .link_box .link_icon {
    width: 5vw;
    border-left: solid 2px #80c5de;
    height: 100%;
    font-size: 3vw;
  }

  .section_joinus .banner .link_box .link_icon {
    font-size: 1vw !important;
  }

  .section_joinus .mainContent .section3 .link_box .link_icon i {
  }
}

/* mb */
@media only screen and (max-width: 768px) {
  .section_joinus .head .banner .bluetitle_box {
    top: 40vw;
    padding: 2vw;
    width: fit-content;
    text-align: right;
    left: -5vw;
    font-weight: 400;
    letter-spacing: 0.15em;
  }

  .section_joinus .head .banner .title_box {
    top: 3vw;
    right: 4vw;
    font-size: 22px;
    line-height: 22px;
    font-weight: 400;
  }

  .section_joinus .head .banner .title_box .en_nu_fa {
    font-size: 20px;
  }

  .section_joinus .mainContent .section1 {
    margin: 15vw auto;
    width: 84vw;
    margin-top: 20vw;
    letter-spacing: 0.15em;
    white-space: nowrap;
  }

  .section_joinus .mainContent .section1 p::before {
    width: 13vw;
    top: -8vw;
  }

  .section2 {
    width: 90vw;
    margin: 0 auto;
  }

  .section2 ul li {
    margin: 20vw 0;
  }

  .section_joinus .mainContent .section2 .text h3 {
    margin-top: -42vw;
    font-size: 16px;
    padding: 2vw;
    font-weight: 400;
  }

  .section_joinus .mainContent .section2 .text p {
    margin-top: 35vw;
    letter-spacing: 0.08em;
  }

  .section_joinus .mainContent .section2 .text h3::before {
    width: 10px;
    height: 10px;
    border: 1px solid #f09038;
    border-right: none;
    border-bottom: none;
  }

  .section_joinus .mainContent .section2 ul li:nth-child(2) .text h3 {
    text-align: right;
  }

  .section_joinus .mainContent .section2 ul li:nth-child(2) .text h3::before {
    right: 0;
    left: unset;
    border-left: none;
    border-right: 1px solid #f09038;
  }

  section.section3 {
    margin-top: 23vw;
  }

  .section_joinus .mainContent .section3 a:hover .link_box {
    /* box-shadow: 10px 10px 0 #80c5de; */
  }

  .section_joinus .mainContent .section3 .text_box {
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0.15em;
  }

  .section_joinus .link_box {
    color: #114678;
    border: #80c5de 1px solid;
    font-size: 16px;
    width: 45vw;
    height: 11vw;
    margin-top: 8vw;
  }

  .section_joinus .link_box .link_text {
    width: 32.5vw;
    text-align: center;
    font-weight: 400;
  }

  .section_joinus .link_box .link_icon {
    width: 11vw;
    border-left: solid 1px #80c5de;
    height: 101%;
    font-size: 16px;
  }

  .footer {
    margin-top: 30vw;
  }
}
</style>



<style lang="scss" scoped>
.careers {
  width: 100%;
  margin-bottom: 50px;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    position: relative;
    &::before {
      content: '';
      top: 56px;
      left: 0;
      width: calc((100vw - 1080px) / 2 + 800px);
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
      &::before {
        width: calc(100% - 30px);
        height: 290px;
      }
      & > div:nth-child(1) {
        margin: 70px auto;
      }
      & > div:nth-child(2) {
        left: 30px;
        transform: none;
        width: calc(100% - 60px);
        bottom: 90px;
        & > p {
          font-size: 30px;
          margin-bottom: 0;
          filter: drop-shadow(2px 2px 1px #515151);
        }
        img {
          width: 100%;
          margin-top: -10px;
        }
      }
      & > svg {
        display: none;
      }
    }
  }
  .mianConten {
    flex-direction: column;
    .imgBox {
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
  .desBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 20px auto;
    h1 {
      font-size: 26px;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
      line-height: 250%;
    }
    a {
      font-size: 20px;
      padding: 10px 20px;
      margin-top: 30px;
    }
  }
}
</style>

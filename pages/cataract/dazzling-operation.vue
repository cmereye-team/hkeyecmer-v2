<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')
useHead(() => ({
  title: t('pages.medical_service.medical_service_cataract_head'),
  meta() {
    return [
      {
        hid: 'cataractDesc',
        name: 'description',
        content: t('tdk.cataract.desc'),
      },
      {
        hid: 'cataractKey',
        name: 'keywords',
        content: t('tdk.cataract.key'),
      },
    ]
  },
}))
// 传递背景色
const backgd = [
  '#64bcd1;',
  '-webkit-linear-gradient(to right, #83cdd3, #64bcd1);',
  'linear-gradient(to right, #83cdd3, #64bcd1);',
]

</script>

<template>
  <div>
    <div class="banner">
      <div class="programme-img">
        <img
          src="https://static.cmereye.com/imgs/2024/07/1c2cf71f2b8c2cbc.png"
          title="耀眼行動_白內障手術_希瑪眼科中心"
          alt="耀眼行動_白內障手術_希瑪眼科中心"
        />
      </div>
      <h1>
        「耀眼行動」 <br />
        白內障手術計劃
      </h1>
    </div>
    <div class="eyesight-programme pt-7 pt-xs-2">
      <div class="programme-plan">
        <div class="plan-bg-img">計劃內容</div>
        <div class="plan-content">
          <div>
            <img
              src="https://static.cmereye.com/imgs/2024/07/738b1f518acf70da.png"
              title="長者白內障資助_白內障手術_希瑪眼科中心"
              alt="長者白內障資助_白內障手術_希瑪眼科中心"
            />
          </div>
          <div>
            <p>
              由於人口老齡化，香港公立醫院的白內障患者數量持續上升，輪候白內障手術的時間不斷延長。為此，香港特區政府於2007年撥款推出首個公私營協作計劃
              - 「耀眼行動」白內障手術計劃。
            </p>
            <p>
              該計劃於2008年2月啟動，醫管局轄下醫院輪候名單上的適合局部麻醉手術的白內障患者，會被優先邀請參與該計劃。參與計劃的患者可選擇計劃下的私家眼科醫生進行手術，<span
                >病人自付額最高8,000港元。</span
              >
            </p>
          </div>
        </div>
        <p class="plan-content-explain">
          該計劃旨在通過公私營合作模式提供更多白內障手術，滿足不斷增加的服務需求，縮短公立醫院的白內障手術輪候時間，有效利用私營醫療界別的資源，紓緩公私營醫療服務的失衡。
        </p>
        <div>
          <div class="plan-content-title">· 合資格人士</div>
          <p class="plan-content-text">
            <span
              >1.
              醫管局轄下醫院的白內障手術輪候名單上輪候18個月或以上；而等候最長時間的病人將優先獲邀請；及
            </span>
            <span>2. 適合接受局部麻醉手術；及 </span>
            <span
              >3.
              一般輪候個案（至於緊急或前期個案，因此類病人需得到優先處理，醫管局會持續為他們安排手術）</span
            >
            <span>*病人不需另行前往私家醫療機構</span>
          </p>
        </div>
        <div>
          <div class="plan-content-title">· 計劃收費</div>
          <div class="plan-content-text">
            <span>病人自付的費用不多於8,000港元的自付額</span>
            <span>*如選用非單焦距人工晶體鏡片，需支付額外費用</span>
            <span>*受邀請的病人不能使用長者醫療券支付此計劃的自付額</span>
          </div>
        </div>
        <!--<div class="charged-item">-->
        <!--  <div class="plan-content-title">．希瑪眼科參加計劃的病人</div>-->
        <!--  <div class="plan-content-text">-->
        <!--    <span><i><img src="https://static.cmereye.com/imgs/2024/07/09037acd78e758d9.png" alt="说明"></i>-->
        <!--      病人與私家醫生商討和確定整個治療的費用</span>-->
        <!--    <span>符合豁免條件的病人亦可選擇自付不多於8,000港元的自付額選擇希瑪眼科醫生</span>-->
        <!--    <span>（如選用非單焦距人工晶體鏡片，需支付額外費用）</span>-->
        <!--  </div>-->
        <!--</div>-->
        <div>
          <div class="plan-content-title">· 希瑪眼科參加計劃的病人</div>
          <div class="plan-content-text">
            <span>希瑪眼科有<i>超過10位醫生</i>為「耀眼行動」參與醫生</span>
            <span
              >歡迎收到醫管局附有資助到期日的邀請信的病人，透過以下途徑預約：</span
            >
            <span
              >1. 致電<a href="tel:3956 2026"> 3956 2026</a> /
              <a href="tel:3956 2025">3956 2025</a></span
            >
            <span
              >2.
              <a
                href="https://api.whatsapp.com/send?phone=85260629611&text=白內障專線查詢"
                target="_blank"
                >白內障WhatsApp專線：6062 9611</a
              ></span
            >
          </div>
        </div>
        <div>
          <div class="plan-content-title">· 私家醫生提供治療方案</div>
          <div class="plan-content-items">
            <div class="plan-item">
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2024/07/4d7813cdebf4d8ae.png"
                  title="術前評估"
                  alt="手術前評估"
                />
              </div>
              <div><span>一次手術前評估</span></div>
            </div>
            <div class="plan-item">
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2024/07/fc16cb318b375354.png"
                  title="白內障手術治療"
                  alt="白內障手術及治療"
                />
              </div>
              <div>
                <span>白內障手術</span>
                <span
                  >（包含單焦距人工晶體鏡片<i
                    ><img
                      src="https://static.cmereye.com/imgs/2024/07/5d1948facf60e1d2.png"
                      alt="包含單焦距人工晶體鏡片" /></i
                  >）</span
                >
              </div>
            </div>
            <div class="plan-item">
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2024/07/6528cdccb6c59532.png"
                  title="術後檢查"
                  alt="術後追蹤"
                />
              </div>
              <div>
                <span>兩次手術後檢查</span>
              </div>
            </div>
          </div>
          <div class="plan-content-text">
            <span>* 如客人選擇非單焦距人工晶體鏡片，需支付額外費用</span>
          </div>
        </div>
        <div>
          <div class="plan-content-title">· 醫療保險索償</div>
          <div class="plan-content-text">
            <span>可依照保險條款向保險公司申請索償</span>
          </div>
        </div>
        <div>
          <div class="plan-content-title">· 申請耀眼行動詳情</div>
          <div class="plan-content-text">
            <span>合資格人士： </span>
            <span
              >毋需自行申請，醫管局會優先邀約輪候時間最長及符合條件的病人</span
            >
            <br />
            <span>參加計劃後續步驟：</span>
            <span>1. 病人須登記電子健康紀錄互通系統（醫健通）</span>
            <span
              >2.
              選定私家醫生並聯絡安排手術前評估並提供邀請信上的登記號碼給醫生以確認資助</span
            >
            <span
              >3.
              於資助到期日前完成手術前評估及於完成手術前評估後3個月內完成手術</span
            >
            <span>4. 完成兩次術後覆診</span>
          </div>
        </div>
        <div class="plan-content-btn">
          <a href="tel:3956 2026" target="_blank">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="56"
                viewBox="0 0 55 56"
                fill="none"
              >
                <g clip-path="url(#clip0_88_1499)">
                  <path
                    d="M3.27021 10.7136C3.04408 10.9697 2.82898 11.2368 2.63042 11.5206C0.832387 13.1235 -0.590598 16.6576 0.24775 21.0098C3.83279 39.8657 19.5739 54.2302 38.5249 55.9444C38.9331 55.9834 39.3412 56.0001 39.7438 56.0001C41.9224 56.0001 43.9742 55.4602 45.6123 54.4473C46.401 53.9854 47.107 53.4121 47.7026 52.7442L49.3297 50.9299C52.5011 47.3902 52.2308 41.9027 48.723 38.6969L45.9763 36.1925C44.3934 34.751 42.3526 33.9551 40.2237 33.9551C37.8024 33.9551 35.4804 34.9959 33.8589 36.8047L32.2318 38.619C31.5975 39.3258 31.0846 40.1273 30.7151 40.9955C24.2289 38.2406 18.9065 33.3262 15.6138 27.0484C16.8051 26.5586 17.8806 25.8017 18.7521 24.8333L20.3791 23.0189C21.9179 21.3048 22.7011 19.0841 22.5853 16.7745C22.4695 14.4648 21.4712 12.3388 19.7724 10.786L17.0257 8.28152C15.4428 6.84006 13.4021 6.04419 11.2731 6.04419C8.85184 6.04419 6.52984 7.08494 4.90278 8.89372L3.27573 10.7081L3.27021 10.7136ZM6.52984 10.3853C7.73772 9.03843 9.45854 8.27039 11.2621 8.27039C12.845 8.27039 14.3618 8.86033 15.5366 9.93447L18.2833 12.4389C19.5463 13.591 20.2909 15.1716 20.3736 16.8913C20.4618 18.6055 19.8772 20.2585 18.7355 21.533L17.1085 23.3473C16.3253 24.2211 15.3325 24.8556 14.2239 25.1951L13.7275 25.3453C13.4186 25.4399 13.1649 25.6681 13.0325 25.9687C12.9057 26.2692 12.9112 26.6143 13.0546 26.9092L13.2863 27.3767C16.8878 34.6731 23.01 40.3443 30.522 43.3386L30.9522 43.5055C31.2335 43.6168 31.5479 43.6057 31.8237 43.4777C32.0994 43.3497 32.309 43.1104 32.4028 42.821L32.5462 42.3869C32.8275 41.5465 33.2687 40.784 33.8589 40.1217L35.4859 38.3074C36.6938 36.9605 38.4201 36.1869 40.2182 36.1869C41.8011 36.1869 43.3178 36.7768 44.4926 37.851L47.2393 40.3555C49.8481 42.7319 50.0467 46.8114 47.6916 49.4439L46.0645 51.2583C45.6178 51.7536 45.0938 52.1821 44.4816 52.5439C42.9207 53.5123 40.88 53.9353 38.7235 53.7405C20.7487 52.1153 5.81835 38.4855 2.41532 20.6035C1.69831 16.8524 3.0496 14.0975 4.13614 13.1625C4.16923 13.1346 4.20232 13.1012 4.23542 13.0623L4.31263 12.9788C4.34572 12.9398 4.3733 12.9064 4.40088 12.8675C4.55531 12.6393 4.72629 12.4222 4.9083 12.2163L6.53536 10.402L6.52984 10.3853Z"
                    fill="#2958A3"
                  />
                  <path
                    d="M53.802 28.6677C53.802 13.9727 41.957 2.01743 27.395 2.01743C26.015 2.01743 24.8919 3.15337 24.8919 4.54132C24.8919 5.92927 26.015 7.06521 27.395 7.06521C39.1968 7.06521 48.7959 16.7541 48.7959 28.6677C48.7959 30.0557 49.9189 31.1916 51.2989 31.1916C52.679 31.1916 53.802 30.0557 53.802 28.6677ZM51.2989 29.6612C50.7596 29.6612 50.3163 29.2166 50.3163 28.6677C50.3163 15.9151 40.0377 5.53482 27.395 5.53482C26.8557 5.53482 26.4123 5.09016 26.4123 4.54132C26.4123 3.99248 26.8557 3.54782 27.395 3.54782C41.1162 3.54782 52.2816 14.8118 52.2816 28.6677C52.2816 29.2166 51.8383 29.6612 51.2989 29.6612Z"
                    fill="#2958A3"
                    stroke="#2958A3"
                    stroke-width="0.417293"
                  />
                  <path
                    d="M27.1138 10.6273C25.7337 10.6273 24.6107 11.7632 24.6107 13.1512C24.6107 14.5391 25.7337 15.6751 27.1138 15.6751C34.3654 15.6751 40.269 21.6296 40.269 28.9516C40.269 30.3396 41.3921 31.4755 42.7721 31.4755C44.1521 31.4755 45.2752 30.3396 45.2752 28.9516C45.2752 18.8481 37.131 10.6273 27.1138 10.6273ZM42.7666 29.9451C42.2273 29.9451 41.7839 29.5005 41.7839 28.9516C41.7839 20.7905 35.2062 14.1447 27.1082 14.1447C26.5689 14.1447 26.1256 13.7 26.1256 13.1512C26.1256 12.6023 26.5689 12.1577 27.1082 12.1577C36.2793 12.1577 43.7493 19.6873 43.7493 28.9516C43.7493 29.5005 43.3059 29.9451 42.7666 29.9451Z"
                    fill="#2958A3"
                    stroke="#2958A3"
                    stroke-width="0.417293"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_88_1499">
                    <rect width="55" height="56" fill="white" />
                  </clipPath>
                </defs></svg
            ></span>
            <span>立即致電<br />查詢/預約</span>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=85260629611&text=%E7%99%BD%E5%85%A7%E9%9A%9C%E5%B0%88%E7%B7%9A%E6%9F%A5%E8%A9%A2"
            target="_blank"
          >
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="61"
                viewBox="0 0 58 61"
                fill="none"
              >
                <path
                  d="M14.3298 56.3774L0.879213 60.2172L5.27882 47.6783C1.17349 41.5813 -0.635702 34.1096 0.199055 26.6998C1.03381 19.29 4.45359 12.4653 9.80098 7.537C15.1484 2.60874 22.0459 -0.0753539 29.1677 0.00161043C36.2894 0.0785748 43.1326 2.91066 48.3818 7.95343C53.6311 12.9962 56.9157 19.8942 57.6044 27.3205C58.293 34.7468 56.3371 42.1774 52.1126 48.1844C47.8881 54.1914 41.6931 58.3504 34.7187 59.862C27.7443 61.3736 20.4826 60.1353 14.3298 56.3774ZM15.4936 52.9188C20.889 56.4173 27.3371 57.6789 33.5741 56.4561C39.8112 55.2333 45.3874 51.6144 49.21 46.3086C53.0327 41.0028 54.826 34.3923 54.2387 27.7734C53.6513 21.1545 50.7256 15.0042 46.0349 10.5275C41.3442 6.05085 35.2268 3.57064 28.8815 3.57323C22.5362 3.57582 16.4205 6.06127 11.7332 10.5418C7.04582 15.0223 4.12467 21.1751 3.54225 27.7945C2.95983 34.4138 4.75814 41.0223 8.58471 46.325L9.15426 47.1119L6.41379 54.9165L14.8622 52.5034L15.4936 52.9188ZM38.8 46.9388C38.2365 46.9194 37.6751 46.8574 37.1202 46.753C36.6249 46.6925 36.1503 46.5323 35.6633 46.4242C35.1763 46.3161 34.6893 46.1433 34.227 45.9444C33.6203 45.7585 33.0549 45.4645 32.4688 45.2224C31.9488 44.963 31.4315 44.6948 30.917 44.418C30.2071 43.9857 29.4849 43.5793 28.8163 43.0864C27.9908 42.5373 27.2066 41.8933 26.4184 41.275C25.5475 40.54 24.7056 39.7788 23.9049 38.9616C23.1496 38.2396 22.4686 37.4527 21.7587 36.6874C19.6586 34.4482 17.8629 31.9167 16.4223 29.1641C15.7105 27.7342 15.2214 26.194 14.9736 24.6023C14.7861 23.4686 14.7541 22.3128 14.8787 21.1695C14.9926 19.6233 15.5157 18.141 16.3892 16.8891C16.4511 16.7565 16.5273 16.6314 16.6162 16.517L17.7141 15.3627C18.0335 14.9989 18.4373 14.7278 18.8862 14.5757C19.2087 14.4631 19.5502 14.4227 19.8886 14.457C20.227 14.4912 20.5548 14.5995 20.8508 14.7747C21.1865 15.0056 21.4918 15.2816 21.7587 15.596L26.1294 20.1752C26.5815 20.6446 26.8394 21.2813 26.8476 21.948C26.856 22.4954 26.7048 23.0322 26.4142 23.4871C26.2307 23.7457 26.0264 23.9872 25.8034 24.2091C25.1018 24.9485 24.3878 25.6837 23.6861 26.4317C23.8884 26.8641 24.1443 27.2961 24.3713 27.7285C24.5983 28.1609 24.8583 28.5934 25.1142 29.0258C26.0124 30.5518 27.0867 31.9557 28.3127 33.2065C29.4355 34.3619 30.6819 35.3778 32.0272 36.2335C32.8197 36.7739 33.6451 37.2537 34.4788 37.725L36.8437 35.2475C37.1312 34.9325 37.4864 34.6938 37.8796 34.5514C38.1816 34.4363 38.5025 34.3857 38.8236 34.402C39.1446 34.4183 39.4593 34.5012 39.7492 34.6464C40.1797 34.892 40.5631 35.2189 40.8801 35.6106C42.3205 37.124 43.7691 38.6371 45.2054 40.1418C45.6521 40.6154 45.9102 41.2492 45.9277 41.9147V42.0313C45.9019 42.4189 45.8053 42.7978 45.6429 43.1471C45.279 43.7421 44.8293 44.2745 44.3098 44.7252C44.1186 44.9625 43.893 45.1668 43.6412 45.3306C42.9462 45.8708 42.1709 46.2873 41.3465 46.563C40.9586 46.6969 40.5611 46.7979 40.1578 46.8654C39.8861 46.9226 39.6096 46.9517 39.3324 46.952C39.149 46.9539 38.9657 46.944 38.7835 46.9219L38.8 46.9388Z"
                  fill="#33AB38"
                /></svg
            ></span>
            <span>白內障<br />WhatsApp專線</span>
          </a>
        </div>
        <div>
          <div class="plan-content-text">
            <span>補充資料︰</span>
            <a
              href="https://www4.ha.org.hk/ppp/ppp-programmes/csp/programme-intro"
              target="_blank"
              >醫院管理局 - 耀眼行動計劃</a
            >
            <a
              href="https://www.ha.org.hk/visitor/sopc_waiting_time.asp?id=2&lang=CHIB5"
              target="_blank"
              >公營眼科門診新症輪候時間</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- 公共底部表单 -->
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#64bcd1;'}`"
    />
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
@font-face {
  font-family: 'ButterTangXin';
  src: url('https://static.cmereye.com/static/loffee/font/ButterTangXin-Italic.woff2');
}

.doctorlist {
  width: 100%;
  margin-top: 150px;
}

.newDoctorlist {
  width: 100%;
  max-width: 746px;
  margin: 0 auto;
}

.newDoctorlist-in {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 200px;
}

.newDoctorlist-in-title {
  display: flex;
  flex-direction: column;
  color: #515151;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 50px;
  /* 166.667% */
  letter-spacing: 1.5px;
  position: relative;
  z-index: 1;
}

.newDoctorlist-in-title > div:nth-of-type(2) {
  font-size: 15px;
  line-height: 20px;
}

.newDoctorlist-in-content {
  display: flex;
  width: 100%;
  margin-top: 34px;
}

.content-text > div:nth-of-type(1) {
  color: #515151;
  font-size: 15px;
  font-style: normal;
  font-weight: 350;
  line-height: 35px;
  /* 233.333% */
  letter-spacing: 1.5px;
}

.content-text > a {
  background: #8ad8dd;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 51px;
  /* 194.444% */
  letter-spacing: 1.8px;
  text-align: center;
  width: 100%;
  max-width: 130px;
  height: 51px;
  margin: 63px auto 0;
  display: block;
}

.content-textLeft {
  width: 100%;
  max-width: 68px;
  color: #515151;
  font-size: 15px;
  font-style: normal;
  font-weight: 350;
  line-height: 35px;
  letter-spacing: 1.5px;
  position: relative;
  z-index: 2;
}

.content-text {
  flex: 1;
  position: relative;
  z-index: 1;
}

.content-image {
  width: 100%;
  max-width: 256px;
  position: relative;
}

.newDoctorlist-in:nth-of-type(1) .content-image {
  max-width: 312px;
  margin-top: -20%;
}

.content-image > img {
  width: 100%;
  position: relative;
  z-index: 1;
}

.newDoctorlist-in > .newDoctorlist-in-content > .content-image::after {
  content: '';
  position: absolute;
  z-index: 0;
  right: 0;
  top: calc((57 / 332) * 100%);
  background: #f2f2f2;
  width: calc((418 / 265) * 100%);
  height: calc((332 / 361) * 100%);
}

.newDoctorlist-in:nth-of-type(1)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: calc((50 / 265) * -100%);
  top: -10%;
  bottom: 70%;
  width: calc((522 / 265) * 100%);
  height: auto;
}

.newDoctorlist-in:nth-of-type(3)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: calc((37 / 265) * 100%);
  top: calc((105 / 332) * 100%);
  width: calc((312 / 265) * 100%);
  height: calc((284 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(4)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: calc((37 / 265) * 100%);
  top: calc((83 / 332) * 100%);
  width: calc((449 / 265) * 100%);
  height: calc((202 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(5)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: 0;
  top: calc((47 / 332) * -100%);
  width: calc((488 / 265) * 100%);
  height: calc((284 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(6)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: calc((40 / 265) * 100%);
  top: calc((44 / 332) * -100%);
  width: calc((276 / 265) * 100%);
  height: calc((250 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(7)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: calc((47 / 265) * 100%);
  top: calc((63 / 332) * 100%);
  width: calc((515 / 265) * 100%);
  height: calc((322 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(8)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: calc((16 / 265) * 100%);
  top: calc((71 / 332) * -100%);
  width: calc((276 / 265) * 100%);
  height: calc((250 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(9)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: calc((37 / 265) * 100%);
  top: calc((105 / 332) * 100%);
  width: calc((558 / 265) * 100%);
  height: calc((184 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(10)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: 0;
  top: calc((47 / 332) * -100%);
  width: calc((342 / 265) * 100%);
  height: calc((280 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(11)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: calc((43 / 265) * 100%);
  top: calc((126 / 332) * 100%);
  width: calc((267 / 265) * 100%);
  height: calc((250 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(12)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: calc((43 / 265) * 100%);
  top: calc((47 / 332) * -100%);
  width: calc((275 / 265) * 100%);
  height: calc((273 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(13)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: calc((43 / 265) * 100%);
  top: calc((44 / 332) * 100%);
  width: calc((443 / 265) * 100%);
  height: calc((211 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(14)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: 0;
  top: calc((56 / 332) * -100%);
  width: calc((336 / 265) * 100%);
  height: calc((250 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(15)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: calc((39 / 265) * 100%);
  top: calc((97 / 332) * 100%);
  width: calc((336 / 265) * 100%);
  height: calc((283 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(16)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: calc((40 / 265) * 100%);
  top: calc((39 / 332) * -100%);
  width: calc((277 / 265) * 100%);
  height: calc((283 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(17)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: calc((40 / 265) * 100%);
  top: calc((45 / 332) * 100%);
  width: calc((521 / 265) * 100%);
  height: calc((245 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(18)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: calc((40 / 265) * 100%);
  top: calc((45 / 332) * 100%);
  width: calc((286 / 265) * 100%);
  height: calc((285 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(19)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: calc((52 / 265) * 100%);
  top: calc((50 / 332) * -100%);
  width: calc((260 / 265) * 100%);
  height: calc((286 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(20)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: calc((52 / 265) * 100%);
  top: calc((32 / 332) * -100%);
  width: calc((366 / 265) * 100%);
  height: calc((277 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(21)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: calc((56 / 265) * 100%);
  top: calc((98 / 332) * 100%);
  width: calc((252 / 265) * 100%);
  height: calc((277 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(22)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: calc((56 / 265) * 100%);
  top: calc((79 / 332) * 100%);
  width: calc((523 / 265) * 100%);
  height: calc((224 / 330) * 100%);
}

.newDoctorlist-in:nth-of-type(23)
  > .newDoctorlist-in-content
  > .content-image::after {
  right: calc((56 / 265) * 100%);
  top: calc((79 / 332) * 100%);
  width: calc((523 / 265) * 100%);
  height: calc((224 / 330) * 100%);
}

.content-enName {
  width: 100%;
  position: absolute;
  z-index: 1;
  top: calc((102 / 332) * 100%);
  right: calc((218 / 265) * 100%);
  width: max-content;
  color: #2958a3;
  text-align: center;
  font-family: ButterTangXin;
  font-size: 32.395px;
  font-style: normal;
  font-weight: 400;
}

.newDoctorlist-in:nth-of-type(1) .content-enName {
  top: calc((74 / 332) * 100%);
  right: calc((191 / 265) * 100%);
}

.newDoctorlist-in:nth-of-type(3) .content-enName {
  top: calc((40 / 332) * 100%);
  right: calc((224 / 265) * 100%);
}

.newDoctorlist-in:nth-of-type(4) .content-enName {
  top: calc((140 / 332) * 100%);
  right: calc((224 / 265) * 100%);
}

.newDoctorlist-in:nth-of-type(5) .content-enName {
  top: calc((70 / 332) * 100%);
  right: calc((224 / 265) * 100%);
}

.newDoctorlist-in:nth-of-type(6) .content-enName {
  top: calc((120 / 332) * 100%);
  right: calc((185 / 265) * 100%);
}

.newDoctorlist-in:nth-of-type(7) .content-enName {
  top: calc((110 / 332) * 100%);
  right: calc((66 / 265) * -100%);
}

.newDoctorlist-in:nth-of-type(8) .content-enName {
  top: calc((120 / 332) * 100%);
  right: calc((210 / 265) * 100%);
}

.newDoctorlist-in:nth-of-type(9) .content-enName {
  top: calc((20 / 332) * 100%);
  right: calc((71 / 265) * -100%);
}

.newDoctorlist-in:nth-of-type(10) .content-enName {
  top: calc((70 / 332) * 100%);
  right: calc((173 / 265) * 100%);
}

.newDoctorlist-in:nth-of-type(11) .content-enName {
  top: calc((60 / 332) * 100%);
  right: calc((195 / 265) * 100%);
}

.newDoctorlist-in:nth-of-type(12) .content-enName {
  top: calc((100 / 332) * 100%);
  right: calc((68 / 265) * -100%);
}

.newDoctorlist-in:nth-of-type(13) .content-enName {
  top: calc((160 / 332) * 100%);
  right: calc((209 / 265) * 100%);
}

.newDoctorlist-in:nth-of-type(14) .content-enName {
  top: calc((20 / 332) * 100%);
  right: calc((209 / 265) * 100%);
}

.newDoctorlist-in:nth-of-type(15) .content-enName {
  top: calc((40 / 332) * 100%);
  right: calc((43 / 265) * -100%);
}

.newDoctorlist-in:nth-of-type(16) .content-enName {
  top: calc((40 / 332) * 100%);
  right: calc((178 / 265) * 100%);
}

.newDoctorlist-in:nth-of-type(17) .content-enName {
  top: calc((150 / 332) * 100%);
  right: calc((201 / 265) * 100%);
}

.newDoctorlist-in:nth-of-type(18) .content-enName {
  top: calc((60 / 332) * 100%);
  right: calc((56 / 265) * -100%);
}

.newDoctorlist-in:nth-of-type(19) .content-enName {
  top: calc((60 / 332) * 100%);
  right: calc((161 / 265) * 100%);
}

.newDoctorlist-in:nth-of-type(20) .content-enName {
  top: calc((30 / 332) * 100%);
  right: calc((92 / 265) * -100%);
}

.newDoctorlist-in:nth-of-type(21) .content-enName {
  top: calc((190 / 332) * 100%);
  right: calc((182 / 265) * 100%);
}

.newDoctorlist-in:nth-of-type(22) .content-enName {
  top: calc((30 / 332) * 100%);
  right: calc((189 / 265) * 100%);
}

.newDoctorlist-in:nth-of-type(23) .content-enName {
  top: calc((200 / 332) * 100%);
  right: calc((98 / 265) * -100%);
}

@media only screen and (max-width: 768px) {
  .doctorlist {
    margin-top: 50px;
    padding: 0 10px 0 20px;
    overflow: hidden;
  }

  .newDoctorlist-in {
    margin-bottom: 90px;
  }

  .newDoctorlist-in-title {
    font-size: 28px;
    font-weight: 400;
  }

  .content-textLeft {
    order: 2;
    max-width: 62px;
    text-align: center;
    font-size: 14px;
    line-height: 1.6;
  }

  .content-text {
    order: 3;
  }

  .content-text > div:nth-of-type(1) {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.8;
  }

  .content-text > a {
    max-width: 100px;
    height: 38px;
    line-height: 38px;
    font-size: 20px;
    font-weight: 400;
    margin: 24px auto 0;
  }

  .content-image {
    max-width: 130px;
    order: 1;
  }

  .newDoctorlist-in:nth-of-type(1) .content-image {
    max-width: 150px;
    margin-top: 0;
  }

  .content-enName {
    position: relative;
    font-size: 22px;
    text-align: right;
    width: 100%;
    transform: translateX(30px);
    margin-top: 10px;
    z-index: 2;
    top: auto !important;
    right: auto !important;
  }

  .newDoctorlist-in > .newDoctorlist-in-content > .content-image::after {
    right: 0;
    top: calc((38 / 350) * 100%);
    width: calc((246 / 150) * 100%);
    height: calc((198 / 350) * 100%);
  }

  .newDoctorlist-in:nth-of-type(1)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((234 / 150) * -100%);
    top: calc((140 / 350) * 100%);
    bottom: -10px;
    left: 0;
    width: auto;
    height: auto;
  }

  .newDoctorlist-in:nth-of-type(3)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((30 / 150) * 100%);
    top: calc((50 / 300) * 100%);
    width: calc((157 / 150) * 100%);
    height: calc((164 / 300) * 100%);
  }

  .newDoctorlist-in:nth-of-type(4)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((35 / 150) * 100%);
    top: calc((50 / 300) * 100%);
    width: calc((209 / 150) * 100%);
    height: calc((127 / 300) * 100%);
  }

  .newDoctorlist-in:nth-of-type(5)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: 0;
    top: calc((-21 / 280) * 100%);
    width: calc((240 / 150) * 100%);
    height: calc((177 / 280) * 100%);
  }

  .newDoctorlist-in:nth-of-type(6)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((20 / 150) * 100%);
    top: calc((-20 / 350) * 100%);
    width: calc((184 / 150) * 100%);
    height: calc((196 / 350) * 100%);
  }

  .newDoctorlist-in:nth-of-type(7)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((38 / 150) * 100%);
    top: calc((50 / 250) * 100%);
    width: calc((308 / 150) * 100%);
    height: calc((173 / 250) * 100%);
  }

  .newDoctorlist-in:nth-of-type(8)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((20 / 150) * 100%);
    top: calc((-30 / 300) * 100%);
    width: calc((165 / 150) * 100%);
    height: calc((200 / 300) * 100%);
  }

  .newDoctorlist-in:nth-of-type(9)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((30 / 150) * 100%);
    top: calc((35 / 250) * 100%);
    width: calc((312 / 150) * 100%);
    height: calc((120 / 250) * 100%);
  }

  .newDoctorlist-in:nth-of-type(10)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: 0;
    top: calc((-16 / 400) * 100%);
    width: calc((187 / 150) * 100%);
    height: calc((163 / 400) * 100%);
  }

  .newDoctorlist-in:nth-of-type(11)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((20 / 150) * 100%);
    top: calc((60 / 250) * 100%);
    width: calc((163 / 150) * 100%);
    height: calc((159 / 250) * 100%);
  }

  .newDoctorlist-in:nth-of-type(12)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((29 / 150) * 100%);
    top: calc((-30 / 250) * 100%);
    width: calc((160 / 150) * 100%);
    height: calc((179 / 250) * 100%);
  }

  .newDoctorlist-in:nth-of-type(13)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((30 / 150) * 100%);
    top: calc((48 / 250) * 100%);
    width: calc((271 / 150) * 100%);
    height: calc((111 / 250) * 100%);
  }

  .newDoctorlist-in:nth-of-type(14)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((5 / 150) * 100%);
    top: calc((-28 / 300) * 100%);
    width: calc((184 / 150) * 100%);
    height: calc((180 / 300) * 100%);
  }

  .newDoctorlist-in:nth-of-type(15)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((35 / 150) * 100%);
    top: calc((70 / 250) * 100%);
    width: calc((184 / 150) * 100%);
    height: calc((145 / 250) * 100%);
  }

  .newDoctorlist-in:nth-of-type(16)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((25 / 150) * 100%);
    top: calc((-30 / 250) * 100%);
    width: calc((159 / 150) * 100%);
    height: calc((200 / 250) * 100%);
  }

  .newDoctorlist-in:nth-of-type(17)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((25 / 150) * 100%);
    top: calc((40 / 250) * 100%);
    width: calc((255 / 150) * 100%);
    height: calc((125 / 250) * 100%);
  }

  .newDoctorlist-in:nth-of-type(18)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((20 / 150) * 100%);
    top: calc((30 / 250) * 100%);
    width: calc((166 / 150) * 100%);
    height: calc((150 / 250) * 100%);
  }

  .newDoctorlist-in:nth-of-type(19)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((18 / 150) * 100%);
    top: calc((-20 / 300) * 100%);
    width: calc((163 / 150) * 100%);
    height: calc((171 / 300) * 100%);
  }

  .newDoctorlist-in:nth-of-type(20)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((15 / 150) * 100%);
    top: calc((-20 / 250) * 100%);
    width: calc((234 / 150) * 100%);
    height: calc((170 / 250) * 100%);
  }

  .newDoctorlist-in:nth-of-type(21)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((30 / 150) * 100%);
    top: calc((70 / 300) * 100%);
    width: calc((152 / 150) * 100%);
    height: calc((137 / 300) * 100%);
  }

  .newDoctorlist-in:nth-of-type(22)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((30 / 150) * 100%);
    top: calc((46 / 250) * 100%);
    width: calc((295 / 150) * 100%);
    height: calc((127 / 250) * 100%);
  }

  .newDoctorlist-in:nth-of-type(23)
    > .newDoctorlist-in-content
    > .content-image::after {
    right: calc((-45 / 150) * 100%);
    top: 0;
    width: calc((295 / 150) * 100%);
    height: calc((127 / 300) * 100%);
  }
}

.banner {
  background-image: url(https://hkcmereye.com/static/upload/image/20240718/1721288711518422.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 89%;
  padding: 60px 0;
}

.banner h1 {
  color: #2958a3;
  line-height: 1.5;
  padding-left: 15px;
  font-weight: bold;
}

.banner h1 {
  text-align: center;
  font-size: 54px;
  line-height: 60px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #2958a3;
  text-shadow: rgb(255, 255, 255) 3px 0px 0px,
    rgb(255, 255, 255) 2.83333px 0.983333px 0px,
    rgb(255, 255, 255) 2.35px 1.85px 0px,
    rgb(255, 255, 255) 1.61667px 2.51667px 0px,
    rgb(255, 255, 255) 0.7px 2.91667px 0px,
    rgb(255, 255, 255) -0.283333px 2.98333px 0px,
    rgb(255, 255, 255) -1.25px 2.73333px 0px,
    rgb(255, 255, 255) -2.06667px 2.16667px 0px,
    rgb(255, 255, 255) -2.66667px 1.36667px 0px,
    rgb(255, 255, 255) -2.96667px 0.416667px 0px,
    rgb(255, 255, 255) -2.95px -0.566667px 0px,
    rgb(255, 255, 255) -2.6px -1.5px 0px,
    rgb(255, 255, 255) -1.96667px -2.26667px 0px,
    rgb(255, 255, 255) -1.11667px -2.78333px 0px,
    rgb(255, 255, 255) -0.133333px -3px 0px,
    rgb(255, 255, 255) 0.85px -2.88333px 0px,
    rgb(255, 255, 255) 1.75px -2.43333px 0px,
    rgb(255, 255, 255) 2.45px -1.73333px 0px,
    rgb(255, 255, 255) 2.88333px -0.833333px 0px;
}

.eyesight-programme {
  max-width: 1080px;
  margin: 160px auto 160px;
}

.programme-img {
  display: flex;
  justify-content: center;
}

.plan-bg-img {
  background: url('https://static.cmereye.com/imgs/2024/07/c8b147ec60d4cdd9.png')
    no-repeat;
  background-position: center center;
  padding-bottom: 20px;
  padding-left: 70px;
  color: #2958a3;
  text-align: center;
  font-family: 'Noto Sans HK';
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
}

.plan-content {
  margin-top: 45px;
  margin-bottom: 55px;
  display: flex;
  gap: 0 41px;
  align-items: center;
}

.plan-content > div:nth-child(2) > p {
  color: #66696f;
  text-align: justify;
  font-family: 'Noto Sans HK';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  margin-bottom: 20px;
}

.plan-content > div:nth-child(2) > p > span {
  color: #ff6b2c;
  font-family: 'Noto Sans HK';
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 40px;
}

.plan-content > div:nth-child(2) > p:last-child {
  margin-bottom: 0;
}

.plan-content-explain {
  color: #66696f;
  text-align: justify;
  font-family: 'Noto Sans HK';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
}

.plan-content-title {
  color: #2958a3;
  font-family: 'Noto Sans HK';
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  margin-top: 50px;
  margin-bottom: 20px;
}

.plan-content-text {
  display: flex;
  flex-direction: column;
}

.plan-content-text > span {
  color: #66696f;
  text-align: justify;
  font-family: 'Noto Sans HK';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
}

.plan-content-text > span > i {
  color: #ff6b2c;
  font-family: 'Noto Sans HK';
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 40px;
}

.charged-item .plan-content-text > span > i {
  display: inline-block;
}

.charged-item .plan-content-text > span > i > img {
  width: 100%;
  height: 100%;
}

.plan-content-text > a {
  color: #66696f;
  font-family: 'Noto Sans HK';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  text-decoration: none;
}

.plan-content-text > a:hover {
  color: #ff6b2c;
}

.plan-content-items {
  display: flex;
  gap: 0 200px;
  margin: 50px auto 0px;
  justify-content: center;
}

.plan-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.plan-item > div:nth-child(2) {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.plan-item > div:nth-child(2) > span:nth-child(1) {
  color: #66696f;
  text-align: justify;
  font-family: 'Noto Sans HK';
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 56px;
}

.plan-item > div:nth-child(2) > span:nth-child(2) {
  color: #66696f;
  font-family: 'Noto Sans HK';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 41px;
  display: flex;
  align-items: center;
  min-width: max-content;
}

.plan-item > div:nth-child(2) > span:nth-child(2) > i {
  display: inline-block;
}

.plan-item > div:nth-child(2) > span:nth-child(2) > i > img {
  width: 100%;
  height: 100%;
}

.plan-content-btn {
  display: flex;
  gap: 0 42px;
  margin: 130px 0 65px;
}

.plan-content-btn > a {
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 15px 35px;
  border-radius: 60px;
  border: 2.504px solid #2958a3;
  background: #fff;
  gap: 0 20px;
}

.plan-content-btn > a > span:nth-child(2) {
  color: #2958a3;
  text-align: center;
  font-family: 'Noto Sans HK';
  font-size: 31.714px;
  font-style: normal;
  font-weight: 900;
  line-height: 46.737px;
}

.plan-content-btn > a:nth-child(2) {
  border: 2.504px solid #33ab38;
  gap: 0 10px;
}

.plan-content-btn > a:nth-child(2) > span:nth-child(2) {
  color: #33ab38;
}
.plan-item > div > img {
  max-height: 110px;
}
.plan-content-text a {
  text-decoration: underline;
}
.banner {
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .eyesight-programme {
    box-sizing: border-box;
    padding: 0 5.128vw;
    margin-bottom: 7.692vw;
    width: 100%;
    margin-top: 20.5128vw;
  }
  
  .banner {
    margin-top: 20.5128vw;
    padding: 6.41025vw 0;
    background-image: url(https://hkcmereye.com/static/upload/image/20240718/1721288711518422.png);
    height: 99.48vw;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 89%;
  }

  .banner h1 {
    color: #2958a3;
    font-size: 6.15vw;
    line-height: 1.5;
  }

  .banner h1 {
    color: #2958a3;
    text-align: center;
    line-height: 7.692vw;
    font-weight: 400;
    letter-spacing: 1px;
    text-shadow: rgb(255, 255, 255) 3px 0px 0px,
      rgb(255, 255, 255) 2.83333px 0.983333px 0px,
      rgb(255, 255, 255) 2.35px 1.85px 0px,
      rgb(255, 255, 255) 1.61667px 2.51667px 0px,
      rgb(255, 255, 255) 0.7px 2.91667px 0px,
      rgb(255, 255, 255) -0.283333px 2.98333px 0px,
      rgb(255, 255, 255) -1.25px 2.73333px 0px,
      rgb(255, 255, 255) -2.06667px 2.16667px 0px,
      rgb(255, 255, 255) -2.66667px 1.36667px 0px,
      rgb(255, 255, 255) -2.96667px 0.416667px 0px,
      rgb(255, 255, 255) -2.95px -0.566667px 0px,
      rgb(255, 255, 255) -2.6px -1.5px 0px,
      rgb(255, 255, 255) -1.96667px -2.26667px 0px,
      rgb(255, 255, 255) -1.11667px -2.78333px 0px,
      rgb(255, 255, 255) -0.133333px -3px 0px,
      rgb(255, 255, 255) 0.85px -2.88333px 0px,
      rgb(255, 255, 255) 1.75px -2.43333px 0px,
      rgb(255, 255, 255) 2.45px -1.73333px 0px,
      rgb(255, 255, 255) 2.88333px -0.833333px 0px;
    font-size: 6.15vw;
  }

  .programme-img > img {
    width: 100%;
    height: 100%;
  }

  .plan-bg-img {
    color: #2958a3;
    text-align: center;
    font-family: 'Noto Sans HK';
    font-size: 6.4vw;
    font-style: normal;
    font-weight: 700;
    line-height: 6.4vw;
    background-size: contain;
    padding-bottom: 2.564vw;
    padding-left: 10.25vw;
  }

  .plan-content {
    display: flex;
    flex-direction: column;
    gap: 7.692vw 0;
    margin-bottom: 4.35vw;
  }

  .plan-content > div:nth-child(1) {
    width: 75.64vw;
    margin: 0 auto;
  }

  .plan-content > div:nth-child(1) > img {
    width: 100%;
  }

  .plan-content > div:nth-child(2) > p {
    color: #66696f;
    text-align: justify;
    font-family: 'Noto Sans HK';
    font-size: 3.846vw;
    font-style: normal;
    font-weight: 500;
    line-height: 7.28vw;
    margin-bottom: 4.35vw;
  }

  .plan-content > div:nth-child(2) > p:last-child {
    margin-bottom: 0;
  }

  .plan-content > div:nth-child(2) > p > span {
    color: #ff6b2c;
    font-family: 'Noto Sans HK';
    font-size: 3.846vw;
    font-style: normal;
    font-weight: 900;
    line-height: 7.28vw;
  }

  .plan-content-explain {
    color: #66696f;
    text-align: justify;
    font-family: 'Noto Sans HK';
    font-size: 3.846vw;
    font-style: normal;
    font-weight: 500;
    line-height: 7.28vw;
  }

  .plan-content-title {
    color: #2958a3;
    font-family: 'Noto Sans HK';
    font-size: 6.49vw;
    font-style: normal;
    font-weight: 700;
    line-height: 3.07vw;
  }

  .plan-content-text {
    display: flex;
    flex-direction: column;
  }

  .plan-content-text > span {
    color: #66696f;
    font-family: 'Noto Sans HK';
    font-size: 3.846vw;
    font-style: normal;
    font-weight: 500;
    line-height: 7.27vw;
  }

  .plan-content-text > a {
    color: #66696f;
    font-family: 'Noto Sans HK';
    font-size: 3.846vw;
    font-style: normal;
    font-weight: 500;
    line-height: 7.28vw;
    text-decoration: none;
  }

  .plan-content-text > span > i {
    color: #ff6b2c;
    font-family: 'Noto Sans HK';
    font-size: 3.846vw;
    font-style: normal;
    font-weight: 900;
    line-height: 7.28vw;
  }

  .plan-content-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8.2vw 0;
  }

  .plan-item:nth-child(1) > div:nth-child(1) > img {
    width: 17.015vw;
    height: 22.864vw;
  }

  .plan-item:nth-child(2) > div:nth-child(1) > img {
    width: 23.64vw;
    height: 22.53vw;
  }

  .plan-item:nth-child(3) > div:nth-child(1) > img {
    width: 20.263vw;
    height: 20.162vw;
  }

  .plan-item > div:nth-child(2) > span:nth-child(1) {
    color: #66696f;
    text-align: justify;
    font-family: 'Noto Sans HK';
    font-size: 4.54vw;
    font-style: normal;
    font-weight: 900;
    line-height: 7.27vw;
  }

  .plan-item > div:nth-child(2) > span:nth-child(2) {
    color: #66696f;
    font-family: 'Noto Sans HK';
    font-size: 3.63vw;
    font-style: normal;
    font-weight: 500;
    line-height: 5.325vw;
  }

  .plan-content-btn {
    gap: 0 3.07vw;
    margin: 19.23vw auto 15.38vw;
  }

  .plan-content-btn > a {
    padding: 2.05vw 3.846vw;
    border-radius: 6.4vw;
    border: 1.247px solid #2958a3;
    background: #fff;
    gap: 0 10px;
  }

  .plan-content-btn > a:nth-child(1) > span:nth-child(1) > svg {
    width: 7.025vw;
    height: 7.025vw;
  }

  .plan-content-btn > a:nth-child(2) > span:nth-child(1) > svg {
    width: 7.625vw;
    height: 7.72vw;
  }

  .plan-content-btn > a > span:nth-child(2) {
    font-size: 4.04vw;
    font-style: normal;
    font-weight: 900;
    line-height: 5.96vw;
  }

  .plan-content-btn > a:nth-child(2) {
    border: 1.247px solid #33ab38;
  }

  .charged-item .plan-content-text > span > i {
    width: 7.69vw;
    height: 3.589vw;
    display: inline-block;
  }
  .plan-item > div:nth-child(2) > span:nth-child(2) > i {
    width: 7.179vw;
    height: 5.897vw;
    display: inline-block;
  }
  .banner .programme-img img {
    max-height: 16.154vw;
    max-width: 16.154vw;
  }
}
</style>

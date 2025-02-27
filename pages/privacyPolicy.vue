<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '私隱政策',
}))
</script>

<template>
  <div class="privacyPolicy">
    <div>
      <div>
        <div>{{$t('pages.privacyPolicy.name')}}</div>
        <div>
          <div>
            {{$t('pages.privacyPolicy.p1')}}
          </div>
          <div>
            {{$t('pages.privacyPolicy.p2')}}
          </div>
          <div>
            {{$t('pages.privacyPolicy.p3')}}
          </div>
          <div>
            {{$t('pages.privacyPolicy.p4')}}
          </div>
          <div>
            {{$t('pages.privacyPolicy.p5')}}
          </div>
          <div>
            {{$t('pages.privacyPolicy.p6')}}
          </div>
          <div>
            {{$t('pages.privacyPolicy.p7')}}
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>{{$t('pages.privacyPolicy.name2')}}</div>
          <div>
            {{$t('pages.privacyPolicy.p2_1')}}
          </div>
        </div>
        <div>
          <div>{{$t('pages.privacyPolicy.p2_2')}}</div>
          <div>
            <div>{{$t('pages.privacyPolicy.p2_3')}}</div>
            <div>
              <p>{{$t('pages.privacyPolicy.p2_4')}}</p>
              <p>{{$t('pages.privacyPolicy.p2_5')}}</p>
              <p>{{$t('pages.privacyPolicy.p2_6')}}</p>
              <p>{{$t('pages.privacyPolicy.p2_7')}}</p>
              <p>
                {{$t('pages.privacyPolicy.p2_8')}}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>{{$t('pages.privacyPolicy.name3')}}</div>
          <div>
            {{$t('pages.privacyPolicy.p3_1')}}
          </div>
        </div>
        <div>
          <div>{{$t('pages.privacyPolicy.name4')}}</div>
          <div>
            <div>
              {{$t('pages.privacyPolicy.p4_1')}}
            </div>
            <div>
              {{$t('pages.privacyPolicy.p4_2')}}
            </div>
            <div>
              {{$t('pages.privacyPolicy.p4_3')}}
            </div>
            <div>{{$t('pages.privacyPolicy.p4_4')}}</div>
          </div>
        </div>
      </div>
    </div>
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
.privacyPolicy {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  margin-bottom: 50px;
  & > div:nth-child(1) {
    margin-top: 20%;
    margin-bottom: 200px;
    & > div:nth-child(1) {
      font-family: 'Noto Sans HK';
      font-size: 22px;
      color: #2958a3;
      & > div:nth-child(2) {
        margin-top: 50px;
        font-family: 'Noto Sans HK';
        line-height: 25px;
        font-size: 18px;
        color: #5f5f5f;
        letter-spacing: 0.1em;
        & > div {
          margin: 10px 0;
        }
      }
    }
    & > div:nth-child(2) {
      & > div {
        & > div:nth-child(1) {
          margin: 40px 0;
          font-family: 'Noto Sans HK';
          font-size: 22px;
          color: #2958a3;
        }
        & > div:nth-child(2) {
          margin-top: 50px;
          font-family: 'Noto Sans HK';
          line-height: 25px;
          font-size: 18px;
          color: #5f5f5f;
          letter-spacing: 0.1em;
          & > div {
            margin: 10px 0;
            & > p {
              margin: 10px 0;
            }
          }
        }
      }
    }
  }
}
</style>

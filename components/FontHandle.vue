<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})

let fontSizeNum = ref(1)
const setFontSize = (type:string) => {
  const tags = ['h1','h2','h3','h4','h5','h6','p','span','div'];
  tags.forEach(item=>{
    const elements:any = document.getElementsByTagName(item);
    for(let i = 0; i < elements.length; i++){
      let oldFontSize = getComputedStyle(elements[i]).fontSize
      let newFontSize = 0
      if(type === 'add')
        newFontSize = Number(oldFontSize.slice(0,oldFontSize.length - 2)) + 2
      else
        newFontSize = Number(oldFontSize.slice(0,oldFontSize.length - 2)) - 2
      elements[i].style.fontSize = `${newFontSize}px`
    }
  })
}

const addFont = () =>{
  if(fontSizeNum.value < 7){
    fontSizeNum.value ++
    setFontSize('add')
  }
}
const ellFont = () =>{
  if(fontSizeNum.value > 1){
    fontSizeNum.value --
    setFontSize('obb')
  }
  
}
const refature = () => {
  location.reload()
}
</script>

<template>
  <div class="fonthandle">
    <div>
      <svg
        width="5"
        height="8"
        color="red"
        viewBox="0 0 5 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L4 4L1 7"
          stroke="white"
          stroke-width="0.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="fontTitle">
      {{ $t('pages.index.footer.fonts') }}
      <div class="fontTitle-in">
        <span @click="refature">
          默認大小
        </span>
      </div>
    </div>
    <div>
      <div @click="addFont">+</div>
      <div @click="ellFont">-</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.fonthandle {
  display: flex;
  flex-direction: row;
  align-items: center;

  & > div:nth-child(2) {
    margin-left: 8px;
    margin-right: 12px;
    font-family: 'Noto Sans HK';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 35px;
    width: max-content;
    white-space: nowrap;
    /* identical to box height, or 250% */

    text-align: center;
    letter-spacing: 0.05em;

    color: #ffffff;
  }
  .fontTitle{
    position: relative;
    cursor: pointer;
    &-in{
      position: absolute;
      bottom: 100%;
      left: 0;
      background: #fff;
      border-radius: 8px;
      height: 44px;
      color: #4d4d4d;
      line-height: 36px;
      display: none;
      padding: 4px;
      border: 1px solid #f3f3f3;
      span{
        padding: 0 20px;
        background: #f3f3f3;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
    &:hover{
      .fontTitle-in{
        display: block;
      }
    }
  }
  & > div:nth-child(3) {
    position: relative;
    display: flex;

    & > div:nth-child(1) {
      margin-right: 11px;
    }

    & > div {
      width: 11px;
      height: 11px;
      line-height: 9px;
      border-radius: 3px;
      background: #fff;
      cursor: pointer;
      font-size: 9px !important;
      // font-size: var(--allTextFootSize);
      color: #2958a3;
      font-weight: 500;
      font-style: normal;
      text-align: center;
    }
  }
}
</style>

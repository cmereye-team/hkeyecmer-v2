<template>
  <div class="form mt-8 md:mt-0" :style="bg">
    <div class="form-img">
      <img :src="formImg" :alt="formImgAlt" :title="formImgAlt" />
    </div>
    <div class="form-main p-5">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        class="demo-ruleForm"
        :class="{ 'demo-ruleForm-en': locale === 'en' }"
        :size="'default'"
        status-icon
      >
        <!-- 姓名 -->
        <el-form-item prop="name">
          <el-input
            v-model="ruleForm.name"
            :placeholder="$t('components.footerInfo.placeholder1')"
            clearable
          />
        </el-form-item>
        <!-- 号码 -->
        <el-form-item prop="phone">
          <el-input
            v-model="ruleForm.phone"
            maxlength="12"
            :placeholder="$t('components.footerInfo.placeholder2')"
            clearable
          />
        </el-form-item>
        <!-- 讯息 -->
        <el-form-item prop="desc">
          <el-input
            v-model="ruleForm.desc"
            type="textarea"
            :rows="1"
            :placeholder="$t('components.footerInfo.placeholder5')"
          />
        </el-form-item>
        <!-- 获知渠道 -->
        <el-form-item class="flex-col items-start" prop="type">
          <el-select
            v-model="ruleForm.type"
            class="w-full"
            :placeholder="$t('components.footerInfo.label1One')"
          >
            <el-option
              v-for="serve in cities"
              :key="serve"
              :label="serve"
              :value="serve"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <p class="form-text">{{ $t('components.footerInfo.infoText') }}</p>
      <div class="flex justify-center">
        <button class="form-submit" @click="submitForm(ruleFormRef)">
          {{ $t('components.footerInfo.submitForm') }}
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
:deep(.el-form-item__content) {
  width: 100%;
}
.form-text {
  text-align: center;
  font-size: 16px;
  color: #5b5b5b;
  letter-spacing: 3px;
  line-height: 28px;
  margin-bottom: 18px;
}
.form-submit {
  background-color: #ef9f28;
  color: #fff;
  width: 260px;
  height: 40px;
  border: none;
  border-radius: 3px;
}
@media screen and (min-width: 768px) {
  .form {
    width: 400px;
  }
}
</style>
<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
defineProps({
  bg: {
    type: [String, Object],
    default: 'background-color:#E6E6E6;',
  },
  formImg: {
    type: [String],
    default: 'https://statichk.cmermedical.com/opd/imgs/form-headimg.webp',
  },
  formImgAlt: {
    type: String,
    default: '快速預約/查詢：(852)39562026',
  },
})
const { t } = useLang()
const locale = useState<string>('locale.setting')
/**
 * @description: 获知渠道
 */
const cities = computed(() => [
  t('components.footerInfo.Instagram'),
  t('components.footerInfo.YouTube'),
  t('components.footerInfo.Google'),
  t('components.footerInfo.Facebook'),
  t('components.footerInfo.sidekicker'),
  t('components.footerInfo.staff'),
  t('components.footerInfo.website'),
  t('components.footerInfo.leaflet'),
])
const ruleFormRef = ref<FormInstance>()
/**
 * @description: 表单项
 */
const ruleForm = reactive({
  name: '',
  phone: '+852',
  desc: '',
  type: '',
})
/**
 * @description: 手机号码校验
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 * @return {Boolean}
 */
const telValidator = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('請輸入手機號'))
  } else if (value === '+852') {
    callback(new Error('請輸入手機號'))
  } else {
    callback()
  }
}
/**
 * @description: 表单校验规则
 */
const rules = reactive<FormRules>({
  name: [{ required: true, message: '請輸入姓名', trigger: 'change' }],
  phone: [{ required: true, validator: telValidator, trigger: 'change' }],
  desc: [{ required: true, message: '請輸入訊息', trigger: 'change' }],
})
/**
 * @description: 点击提交
 * @param {*} formEl
 */
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      postData()
      commitToCms()
      resetForm(formEl) // 成功提交清空表单内容
    }
  })
}
/**
 * @description: 处理表单数据
 */
const postData = async () => {
  let _message = `姓名：${ruleForm.name}
電話號碼：${ruleForm.phone}
從哪裏找到網站：${ruleForm.type}
訊息：${ruleForm.desc}
來源：${location.href}`
  let _data = 'message=' + encodeURIComponent(_message)
  let { data }: any = await useFetch('/proxy/robot/send', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    query: {
      access_token:
        '45e9c7b82a844734579e37790bf19b638f2b7cb4844bd039a87775dd7b2f7028',
    },
    body: {
      msgtype: 'text',
      text: {
        content: _message,
      },
    },
  })
}
/**
 * @description: 提交数据到后台
 */
const commitToCms = async () => {
  let _formData = new FormData()
  _formData.append('contacts', ruleForm.name)
  _formData.append('mobile', ruleForm.phone)
  _formData.append('content', ruleForm.desc)
  _formData.append('ly', location.href)
  _formData.append('dz', ruleForm.type)
  _formData.append('paramsNoCheck', '1')
  let { data }: any = await useFetch(
    'https://hkcmereye.com/api.php/cms/addmsg',
    {
      method: 'post',
      body: _formData,
    }
  )
  let res = JSON.parse(data.value)
  if (res) {
    if (res.code) {
      ElMessage({
        showClose: true,
        message: '表單提交成功！我們會盡快回覆閣下。',
        type: 'success',
        duration: 0,
      })
      localStorage.setItem('contactForm', JSON.stringify(ruleForm))
    } else {
      ElMessage({
        showClose: true,
        message: res.data,
        type: 'error',
      })
    }
  } else {
    ElMessage({
      showClose: true,
      message: '服务异常，请稍后重试',
      type: 'error',
    })
  }
}

/**
 * @description: 提交后清空表单
 * @param {*} formEl
 */
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<template>
  <div class="modify-introduce">
    <el-form
      :model="personalForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      style="width: 800px"
    >
      <el-form-item label="姓名" prop="name">
        <el-input
          v-model="personalForm.name"
          :placeholder="personalForm.myName"
        ></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input
          v-model="personalForm.phone"
          :placeholder="personalForm.phone"
        ></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="personalForm.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input
          v-model="personalForm.email"
          :placeholder="personalForm.email"
        ></el-input>
      </el-form-item>
      <el-form-item label="出生" prop="birthday">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="personalForm.birthday"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="Q Q" prop="qqNumber">
        <el-input
          v-model="personalForm.qqNumber"
          :placeholder="personalForm.qqNumber"
        ></el-input>
      </el-form-item>
      <el-form-item label="居住" prop="address">
        <el-input
          v-model="personalForm.address"
          :placeholder="personalForm.address"
        ></el-input>
      </el-form-item>
      <el-form-item label="户籍" prop="koseki">
        <el-input
          v-model="personalForm.koseki"
          :placeholder="personalForm.koseki"
        ></el-input>
      </el-form-item>
      <el-form-item label="学历" prop="education">
        <el-input
          v-model="personalForm.education"
          :placeholder="personalForm.education"
        ></el-input>
      </el-form-item>
      <el-form-item label="学校" prop="school">
        <el-input
          v-model="personalForm.school"
          :placeholder="personalForm.school"
        ></el-input>
      </el-form-item>
      <el-form-item label="专业" prop="professional">
        <el-input
          v-model="personalForm.professional"
          :placeholder="personalForm.professional"
        ></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="studyState">
        <el-radio-group v-model="personalForm.studyState">
          <el-radio label="学生就读"></el-radio>
          <el-radio label="已就业"></el-radio>
          <el-radio label="其他"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="签名" prop="signature">
        <el-input
          type="textarea"
          v-model="personalForm.signature"
          :placeholder="personalForm.signature"
        ></el-input>
      </el-form-item>
      <el-form-item label="爱好" prop="hobbies">
        <el-input
          type="textarea"
          v-model="personalForm.hobbies"
          :placeholder="personalForm.hobbies"
        ></el-input>
      </el-form-item>
      <!-- 按钮 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personalForm: {
        myName: "陶继鑫",
        phone: "18581766104",
        sex: "男",
        email: "491675919@qq.com",
        birthday: "2001.07.24",
        qqNumber: "491675919",
        address: "四川省资阳市",
        koseki: "四川省资阳市", // 户籍
        education: "本科",
        school: "四川工商学院",
        professional: "软件工程",
        studyState: "学生就读",
        signature:
          "如果debugging是一种消灭bug的过程，那编程就一定是把bug放进去的过程。",
        hobbies: "吃饭睡觉打豆豆！",
      },
      rules: [],
    };
  },
};
</script>

<style lang="less">
.modify-introduce {
  height: 650px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
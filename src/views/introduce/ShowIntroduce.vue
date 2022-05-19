<template>
  <div class="show-introduce">
    <el-descriptions
      class="margin-top"
      column="1"
      size="medium"
      border
    >
      <!-- 姓名 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          姓名
        </template>
        {{ personal.myName }}
      </el-descriptions-item>
      <!-- 电话 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          电话
        </template>
        {{ personal.phone }}
      </el-descriptions-item>
      <!-- 性别 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-male"></i>
          性别
        </template>
        <el-tag>{{ personal.sex }}</el-tag>
      </el-descriptions-item>
      <!-- 邮箱 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-message"></i>
          邮箱
        </template>
        {{ personal.email }}
      </el-descriptions-item>
      <!-- 出生 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-date"></i>
          出生
        </template>
        {{ personal.birthday }}
      </el-descriptions-item>
      <!-- qq -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          Q Q
        </template>
        {{ personal.qqNumber }}
      </el-descriptions-item>
      <!-- 居住 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-information"></i>
          居住
        </template>
        {{ personal.address }}
      </el-descriptions-item>
      <!-- 户籍 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-house"></i>
          户籍
        </template>
        {{ personal.koseki }}
      </el-descriptions-item>
      <!-- 学历 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-medal-1"></i>
          学历
        </template>
        <el-tag>{{ personal.education }}</el-tag>
      </el-descriptions-item>
      <!-- 学校 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-school"></i>
          学校
        </template>
        <el-tag>{{ personal.school }}</el-tag>
      </el-descriptions-item>
      <!-- 专业 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-discount"></i>
          专业
        </template>
        <el-tag>{{ personal.professional }}</el-tag>
      </el-descriptions-item>
      <!-- 状态 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-turn-off"></i>
          状态
        </template>
        <el-tag type="success">{{ personal.studyState }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-turn-off"></i>
          个性签名
        </template>
        {{ personal.signature }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-turn-off"></i>
          兴趣爱好
        </template>
        {{ personal.hobbies }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  data() {
    return {
      personal: {
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
    };
  },
};
</script>

<style lang="less">
</style>
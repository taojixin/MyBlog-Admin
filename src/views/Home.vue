<template>
  <el-container class="home-container">
    <el-header>
      <h1>后台管理系统</h1>
    </el-header>
    <el-container class="content-container">
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :unique-opened="true"
          :router="true"
        >
          <!-- 个人信息管理 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>个人信息管理</span>
            </template>
            <el-menu-item index="1-1" >选项1</el-menu-item>
            <el-menu-item index="1-1">选项1</el-menu-item>
          </el-submenu>
          <!-- 笔记管理 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>笔记管理</span>
            </template>
            <el-menu-item index="managenote">管理笔记</el-menu-item>
            <el-menu-item index="modifynote">修改笔记</el-menu-item>
            <el-menu-item index="addnote">添加笔记</el-menu-item>
          </el-submenu>
          <!-- 留言管理 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-comment"></i>
              <span>留言管理</span>
            </template>
            <el-menu-item index="modifymes">修改留言</el-menu-item>
            <el-menu-item index="managemes">管理留言</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
  }
};
</script>

<style lang="less">
.home-container {
  width: 1200px;
  margin: 0 auto;
  height: 100vh;
  border: 1px solid pink;
  background-color: #93a0b8;
}
.el-header {
  background-color: #b1c5ea;
  display: flex;
  h1 {
    margin: 0;
  }
}
.el-main {
  background-color: #dee5f3;
}
</style>
<template>
  <el-container class="home-container">
    <el-header>
      <h1>后台管理系统</h1>
    </el-header>
    <el-container class="content-container">
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
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
.content-container {
}

</style>
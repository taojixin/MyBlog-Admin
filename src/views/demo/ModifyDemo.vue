<template>
  <div class="modify-demo">
    <el-table :data="demoData" border style="width: 100%">
      <el-table-column type="index" label="#" width="60"> </el-table-column>
      <el-table-column prop="demo_describe" label="描述" width="200"> </el-table-column>
      <el-table-column prop="demo_knowkedge" label="知识点" width="250"> </el-table-column>
      <el-table-column prop="demo_createtime" label="时间" width="200"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scoped">
          <!-- 查看demo按钮 -->
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-search"
          ></el-button>
          <!-- 修改demo信息按钮 -->
          <el-button
            size="mini"
            type="info"
            icon="el-icon-edit"
          ></el-button>
          <!-- 删除demo按钮 -->
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="deleteNote(scoped.row.id)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
const {getDemoAll} = require('@/api/index')
export default {
  data() {
    return {
      demoData: []
    }
  },
  async created() {
    this.demoData = await getDemoAll()

  },
  methods: {
    deleteNote() {

    }
  }
};
</script>

<style>
</style>
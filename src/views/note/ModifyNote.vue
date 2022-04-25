<template>
  <div class="modify-note">
    <el-table :data="tableNoteData" style="width: 100%" border>
      <el-table-column type="index" label="#" width="50"></el-table-column>
      <el-table-column
        prop="note_title"
        label="标题"
        width="127"
      ></el-table-column>
      <el-table-column
        prop="note_createtime"
        label="时间"
        width="100"
      ></el-table-column>
      <el-table-column
        prop="note_sort"
        label="分类"
        width="100"
      ></el-table-column>
      <el-table-column
        prop="note_describe"
        label="描述"
        width="400"
      ></el-table-column>
      <el-table-column label="操作" width="180">
        <el-button size="mini" type="primary" icon="el-icon-search"></el-button>
        <el-button
          size="mini"
          type="info"
          icon="el-icon-edit"
          @click="lookInfo"
        ></el-button>
        <el-button size="mini" type="danger" icon="el-icon-delete"></el-button>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination background layout="prev, pager, next" :total="20">
    </el-pagination>
  </div>
</template>

<script>
import { getAllNote } from "@/api/index";
export default {
  created() {
    this.getAllNotes();
  },
  data() {
    return {
      // 所有笔记信息
      tableNoteData: [],
      // 笔记总数
      a: 10
    };
  },
  methods: {
    // 获取所有笔记信息（出内容）
    async getAllNotes() {
      const result = await getAllNote();
      result.forEach((item) => {
        item.note_createtime = item.note_createtime.substr(0, 10);
      });
      this.tableNoteData = result;
      console.log(result);
    },
    async lookInfo() {},
  },
};
</script>

<style lang="less">
.el-table-column {
  font-size: 13px;
}
</style>
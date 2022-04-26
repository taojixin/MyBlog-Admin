<template>
  <div class="modify-note">
    <!-- 表格 -->
    <el-table
      :data="tableNoteData"
      ref="tableNoteRef"
      style="width: 100%"
      border
    >
      <!-- 序号 -->
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
        <template slot-scope="scoped">
          <!-- 查看笔记按钮 -->
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-search"
          ></el-button>
          <!-- 修改笔记信息按钮 -->
          <el-button
            size="mini"
            type="info"
            icon="el-icon-edit"
          ></el-button>
          <!-- 删除笔记按钮 -->
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="deleteNote(scoped.row.id)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="pageChange"
      :current-page="currentPage"
      :total="allTotal"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getAllNote, deleteNote, getSomeNote } from "@/api/index";
export default {
  created() {
    this.getSomeNote(this.pageSizes, this.currentPage);
  },
  data() {
    return {
      // 所有笔记信息
      tableNoteData: [],
      // 笔记总数
      allTotal: 0,
      // 当前处于第几页
      currentPage: 1,
      // 当前页显示数
      pageSizes: 10,
    };
  },
  methods: {
    // 根据页数条数查询笔记
    async getSomeNote(num, page) {
      const result = await getSomeNote(num, page);
      // 对时间尽心截取(去掉时分秒)
      result.forEach((item) => {
        item.note_createtime = item.note_createtime.substr(0, 10);
      });
      this.tableNoteData = result;
      const resultAll = await getAllNote();
      this.allTotal = resultAll.length;
    },
    // 删除笔记按钮
    async deleteNote(id) {
      // 如何获取要删除的那一行的id(tableNoteData.id)：通过作用域插槽的slot-scope="scoped"，scoped是一个对象，存储了这个子组件的所有属性，再通过scoped.row.id获取id
      const result = await deleteNote(id);
      if (result.meta.status == 200) {
        this.$message.success("删除成功！");
        this.getSomeNote(this.pageSizes, this.currentPage);
      }
    },
    // 当前页数改表时触发
    pageChange(newPage) {
      this.currentPage = newPage
      this.getSomeNote(10, newPage);
    },
  },
};
</script>

<style lang="less">
.el-table-column {
  font-size: 13px;
}
.modify-note {
  position: relative;

  .el-pagination {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
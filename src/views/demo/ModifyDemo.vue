<template>
  <div class="modify-demo">
    <!-- demo信息表格 -->
    <el-table :data="demoData" border style="width: 100%">
      <el-table-column type="index" label="#" width="60"> </el-table-column>
      <el-table-column prop="demo_describe" label="描述" width="200">
      </el-table-column>
      <el-table-column prop="demo_knowkedge" label="知识点" width="250">
      </el-table-column>
      <el-table-column prop="demo_createtime" label="时间" width="200">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scoped">
          <!-- 查看demo按钮 -->
          <el-tooltip effect="dark" content="查看" placement="top">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-search"
              @click="checkDemo(scoped.row.id)"
            ></el-button>
          </el-tooltip>
          <!-- 修改demo信息按钮 -->
          <el-tooltip effect="dark" content="修改" placement="top">
            <el-button
              size="mini"
              type="info"
              icon="el-icon-edit"
              @click="modifyDemo(scoped.row.id)"
            ></el-button>
          </el-tooltip>
          <!-- 删除demo按钮 -->
          <el-tooltip effect="dark" content="删除" placement="top">
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="deleteDemo(scoped.row.id)"
            ></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <!-- 查看对话框 -->
    <el-dialog title="代码" :visible.sync="checkDiaVisible" width="80%">
      <span v-html="someData.demo_code"></span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="checkDiaVisible = false">取 消</el-button>
        <el-button type="primary" @click="checkDiaVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 修改对话框 -->
    <el-dialog title="代码" :visible.sync="modifykDiaVisible" width="60%">
      <el-form
        ref="demoform"
        :rules="demoRules"
        :model="someData"
        label-width="80px"
      >
        <el-form-item label="描述" prop="demo_describe">
          <el-input v-model="someData.demo_describe"></el-input>
        </el-form-item>
        <el-form-item label="知识点" prop="demo_knowkedge">
          <el-input v-model="someData.demo_knowkedge"></el-input>
        </el-form-item>
        <el-form-item label="代码" prop="demo_code">
          <el-input
            type="textarea"
            rows="10"
            resize="none"
            v-model="someData.demo_code"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modifykDiaVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit()">修 改</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
const {
  getDemoAll,
  deleteDemo,
  getDemoSome,
  modifyDemo,
} = require("@/api/index");
export default {
  data() {
    return {
      // 所有demo信息
      demoData: [],
      // 查看某个demo的信息
      someData: {},
      // 查看 对话框的显示与隐藏
      checkDiaVisible: false,
      // 修改 对话框的显示与隐藏
      modifykDiaVisible: false,
      // 表单验证规则
      demoRules: {
        demo_describe: [
          { required: true, message: "请输入demo描述", trigger: "blur" },
          {
            min: 3,
            max: 100,
            message: "长度在 3 到 100 个字符",
            trigger: "blur",
          },
        ],
        demo_knowkedge: [
          { required: true, message: "请输入知识点", trigger: "blur" },
          {
            min: 3,
            max: 100,
            message: "长度在 3 到 100 个字符",
            trigger: "blur",
          },
        ],
        demo_code: [{ required: true, message: "请输入代码", trigger: "blur" }],
      },
    };
  },
  async created() {
    const data = await getDemoAll();
    console.log(data);
    const newData = data.map((value) => {
      value.demo_createtime = value.demo_createtime.slice(0,16).replace('T',' ')
      return value
    })
    this.demoData = newData
    
  },
  methods: {
    // 查看demo
    async checkDemo(id) {
      const data = await getDemoSome(id);
      this.someData = data[0]
      this.checkDiaVisible = true;
    },
    // 修改demo
    async modifyDemo(id) {
      const data = await getDemoSome(id);
      this.someData = data[0]
      this.modifykDiaVisible = true;
    },
    // 删除demo
    deleteDemo(id) {
      this.$confirm("此操作将永久删除该demo, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        showCancelButton: true,
      })
        .then(() => {
          deleteDemo(id)
            .then(async (res) => {
              this.$message.success("删除成功！");
              this.demoData = await getDemoAll();
            })
            .catch((err) => {
              this.$message.error("删除失败！");
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 对话框中的修改按钮
    submit() {
      this.$refs.demoform.validate(async valid => {
        if (valid) {
          modifyDemo(this.someData.id,this.someData.demo_describe,this.someData.demo_knowkedge,this.someData.demo_code)
            .then(resolve => {
              this.modifykDiaVisible = false;
              this.$message.success("修改成功！");
            })
            .catch(error => {
              console.log(error);
              this.$message.error("修改失败！");
            });
        } else {
          this.$message.error("信息填写不正确！");
        }
      });
    },
  },
};
</script>

<style>
</style>
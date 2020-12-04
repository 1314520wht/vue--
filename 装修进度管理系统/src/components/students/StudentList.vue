<template>
	<div class="studen-list">
		<el-card>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item>
          <el-button type="primary" @click="addStudent">新增</el-button>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="formInline.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="岗位">
          <el-input v-model="formInline.number" placeholder="岗位"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column prop="name" label="姓名" align="center" width="110px"></el-table-column>
				<el-table-column prop="number" label="编号" align="center" width="110px"></el-table-column>
				<el-table-column prop="age" label="年龄" align="center" width="110px"></el-table-column>
				<el-table-column prop="sex_text" label="性别" align="center" width="110pxx"></el-table-column>
				<el-table-column prop="class" label="岗位" align="center" width="110px"></el-table-column>
				<el-table-column prop="address" label="地址" align="center" width="110px"></el-table-column>
				<el-table-column prop="phone" label="联系方式" align="center" width="160px"></el-table-column>
				<el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" icon="el-icon-edit" @click="updateInfo(scope.row)"></el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="del"></el-button>
            <el-button type="warning" size="mini" icon="fa fa-cog" @click="jur()"></el-button>
          </template>
        </el-table-column>
			</el-table>
      <!-- 弹窗区域 -->
      <el-dialog :title="state ? '修改人员信息' : '新增人员信息' " :visible.sync="dialogFormVisible" width="500px">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="编号" :label-width="formLabelWidth">
            <el-input v-model="form.number" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth">
            <el-input v-model="form.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-radio v-model="form.sex" label="1">男</el-radio>
            <el-radio v-model="form.sex" label="2">女</el-radio>
          </el-form-item>
          <el-form-item label="岗位" :label-width="formLabelWidth">
            <el-select  v-model="form.class" placeholder="请选择岗位">
              <el-option label="进度编制部" value="1"></el-option>
              <el-option label="采购部" value="2"></el-option>
              <el-option label="项目执行部" value="3"></el-option>
              <el-option label="审核部门" value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="sure">确 定</el-button>
        </div>
      </el-dialog>
      <Page :total="total"></Page>
		</el-card>
	</div>
</template>
<script>
import Page from '../common/Pageing'
export default {
  components: {
    Page
  },
	data() {
		return {
      total: 0,
      formInline: {
        user: ''
      },
			tableData: [
        {
          name:"李兴",
          number:"001", 
          age:"21",
          sex_text:"男",
          class:"项目执行部门",
          address:"甘肃 兰州",
          phone:"13689357233",       
        },
        {
          name:"李武",
          number:"002", 
          age:"22",
          sex_text:"男",
          class:"进度编制部门",
          address:"甘肃 武威",
          phone:"16472188634",       
        },
        {
          name:"王婷",
          number:"003", 
          age:"24",
          sex_text:"女",
          class:"审核部门",
          address:"甘肃 兰州",
          phone:"17318729921",       
        }
      ],
      dialogFormVisible: false,
      form: {},
      formLabelWidth: '80px',
      state: false
		};
	},
	created() {
    this.getDataList()
  },
  methods: {
    sure() {
      console.log(this.form)
      if(this.state) {
        // 调用修改接口
        // this.service.put('接口地址', this.form)
        // .then(res => {

        // })
        // .catch(err => {
        //   console.log(err)
        // })
      } else {
        // 调用新增接口
        // this.service.post('接口地址', this.form)
        // .then(res => {

        // })
        // .catch(err => {
        //   console.log(err)
        // })
      }
      this.dialogFormVisible = false
    },
    addStudent() {
      this.state = false
      this.form = {
        sex: '1'
      }
      this.dialogFormVisible = true
    },
    updateInfo(row) {
      this.state = true
      this.form = {...row}
      this.dialogFormVisible = true
      console.log(row)
    },
    jur() {
      this.$confirm('此操作将更改权限, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '更改成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消更改权限'
          });          
        });
    },
    del() {
      this.$alert('您确定要删除吗？', '删除提示', {
        confirmButtonText: '确定',
        callback: action => {
          // 对接删除接口
        }
      })
    },
    onSubmit() {
      console.log('submit!');
    },
    getDataList() {
      this.service
      .get("student")
      .then((res) => {
        if(res.data.status === '200') {
          res.data.data.forEach(item => {
            item.sex === '1' ? item.sex_text = "男" : item.sex_text = "女"
          })
          this.tableData = [...res.data.data]
          this.total = res.data.total
        }
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
};
</script>
<style lang="scss">
.studen-list {
  margin: 20px 0;
  .demo-form-inline {
    text-align: left;
  }
  .el-form {
    text-align: left;
    .el-select {
      width: 100%;
    } 
  }
}
</style>
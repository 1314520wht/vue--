<template>
	<div class="jindu-list">
		<el-card>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item>
          <el-button type="primary" @click="addStudent">新增进度编制单</el-button>
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
				<el-table-column prop="name" label="项目编号" align="center" width="110px"></el-table-column>
				<el-table-column prop="number" label="创建人" align="center" width="110px"></el-table-column>
				<el-table-column prop="age" label="所需工期(周)" align="center" width="110px"></el-table-column>
				<el-table-column prop="sex_text" label="预算" align="center" width="110pxx"></el-table-column>
				<el-table-column prop="class" label="材料" align="center" width="110px"></el-table-column>
				<el-table-column prop="address" label="开始时间" align="center" width="110px"></el-table-column>
				<el-table-column prop="phone" label="项目执行人" align="center" width="160px"></el-table-column>
				<el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini"  @click="updateInfo(scope.row)">查看单据</el-button>
                        <el-button type="primary" size="mini"  @click="updateInfo(scope.row)">发布任务</el-button>
                        <el-button type="danger" size="mini"  @click="del">提交审核</el-button>
                    </template>
                </el-table-column>
			</el-table>
      <!-- 弹窗区域 -->
      <el-dialog :title="state ? '修改项目信息' : '新增项目信息' " :visible.sync="dialogFormVisible" width="500px">
        <el-form :model="form">
          <el-form-item label="项目编号" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="创建人" :label-width="formLabelWidth">
            <el-input v-model="form.number" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="所需工期" :label-width="formLabelWidth">
            <el-input v-model="form.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="预算" :label-width="formLabelWidth">
            <el-input v-model="form.sex" label="20000"></el-input>
          </el-form-item>
          <el-form-item label="材料" :label-width="formLabelWidth">
            <el-select  v-model="form.class" placeholder="请选择材料">
              <el-option label="地砖" value="1"></el-option>
              <el-option label="油漆" value="2"></el-option>
              <el-option label="踢脚线" value="3"></el-option>
              <el-option label="石膏线" value="4"></el-option>
              <el-option label="插座" value="5"></el-option>
              <el-option label="吊顶" value="6"></el-option>
              <el-option label="主灯" value="7"></el-option>
              <el-option label="木龙骨" value="8"></el-option>
              <el-option label="木线" value="9"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="开始时间" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="项目执行人" :label-width="formLabelWidth">
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
          name:"z11",
          number:"001", 
          age:"6",
          sex_text:"60k",
          class:"原木，吊顶，地砖，油漆...",
          address:"2020-11-01",
          phone:"李武，张兴，王振",       
        },
        {
          name:"z12",
          number:"002", 
          age:"7",
          sex_text:"65k",
          class:"原木，吊顶，地砖，油漆...",
          address:"2020-12-01",
          phone:"刘利，振南",       
        },
        {
          name:"z13",
          number:"003", 
          age:"5",
          sex_text:"60k",
          class:"原木，吊顶，地砖，油漆...",
          address:"2020-12-04",
          phone:"李翔，杜昂强，刘子健",       
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
.jindu-list {
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
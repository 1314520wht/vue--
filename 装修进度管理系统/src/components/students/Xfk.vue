<template>
	<div class="jindu-list">
		<el-card>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item>
          <el-button type="primary" @click="addStudent">新增反馈单</el-button>
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
				<el-table-column prop="name" label="任务编号" align="center" width="90px"></el-table-column>
				<el-table-column prop="number" label="开始日期" align="center" width="100px"></el-table-column>
				<el-table-column prop="age" label="结束日期" align="center" width="100px"></el-table-column>
				<el-table-column prop="sex_text" label="材料使用情况" align="center" width="110pxx"></el-table-column>
				<el-table-column prop="class" label="完成百分比" align="center" width="110px"></el-table-column>
				<el-table-column prop="address" label="实际工期（周）" align="center" width="110px"></el-table-column>
				<el-table-column prop="phone" label="突发情况" align="center" width="220px"></el-table-column>
				<el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini"  @click="updateInfo(scope.row)">查看单据</el-button>
                    <el-button type="primary" size="mini"  @click="submitxx()">提交审核</el-button>
                </template>
                </el-table-column>
			</el-table>
      <!-- 弹窗区域 -->
      <el-dialog :title="state ? '修改反馈单' : '新增反馈单' " :visible.sync="dialogFormVisible" width="500px">
        <el-form :model="form">
          <el-form-item label="任务编号" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="开始日期" :label-width="formLabelWidth">
            <el-input v-model="form.number" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="结束日期" :label-width="formLabelWidth">
            <el-input v-model="form.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="材料使用情况" :label-width="formLabelWidth">
            <el-input v-model="form.sex" label="1"></el-input>
          </el-form-item>
          <el-form-item label="完成百分比" :label-width="formLabelWidth">
            <el-input v-model="form.class" label="2">填写完成情况</el-input>
          </el-form-item>
          <el-form-item label="实际工期" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="突发情况" :label-width="formLabelWidth">
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
          number:"2020-11-01", 
          age:"2020-12-15",
          sex_text:"4张樟木板，1桶油漆",
          class:"100%",
          address:"6",
          phone:"施工正常，未发生突发情况",       
        },
        {
          name:"z12",
          number:"2020-12-01", 
          age:"未结束",
          sex_text:"原木使用将近一半...",
          class:"50%左右",
          address:"目前已有3个周期",
          phone:"客户要求增加电脑桌，操作台",       
        },
        {
          name:"z13",
          number:"2020-12-04", 
          age:"未结束",
          sex_text:"原木等基本已使用40%",
          class:"40%左右",
          address:"目前已有2个半周期",
          phone:"一切按计划进行中，无突发情况",       
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
     submitxx() {
      // alert("消息推送成功")
        this.$message({
          message: '提交审核成功',
          type: 'success'
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
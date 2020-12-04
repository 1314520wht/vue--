<template>
	<div class="jindu-list">
		<el-card>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item>
          <el-button type="primary" @click="addStudent">查看进度单</el-button>
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
				<el-table-column prop="name" label="任务编码" align="center" width="130px"></el-table-column>
				<el-table-column prop="number" label="任务名称" align="center" width="160px"></el-table-column>
				<el-table-column prop="age" label="审核人" align="center" width="110px"></el-table-column>
				<el-table-column prop="sex_text" label="审核时间" align="center" width="200px"></el-table-column>
				<el-table-column prop="class" label="备注" align="center" width="160px"></el-table-column>
				<el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini"  @click="updateInfo(scope.row)">查看单据</el-button>
            <el-button type="primary" size="mini"  @click="submitxx()">审核成功推送信息</el-button>
          </template>
        </el-table-column>
			</el-table>
      <!-- 弹窗区域 -->
      <el-dialog :title="state ? '查看单据' : '查看单据' " :visible.sync="dialogFormVisible" width="500px">
        <el-form :model="form">
          <el-form-item label="任务编码" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="任务名称" :label-width="formLabelWidth">
            <el-input v-model="form.number" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="审核人" :label-width="formLabelWidth">
            <el-input v-model="form.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="审核时间" :label-width="formLabelWidth">
            <el-input v-model="form.sex" ></el-input>
          </el-form-item>
          <el-form-item label="备注" :label-width="formLabelWidth">
            <el-input v-model="form.class" >请备注</el-input>
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
          name:"z11",
          number:"兴盛家园三单元5号楼", 
          age:"李宝",
          sex_text:"2020-11-01",
          class:"急需审核",
          address:"甘肃 兰州",
          phone:"13689357233",       
        },
        {
          name:"z12",
          number:"万达影院", 
          age:"李宝",
          sex_text:"2020-12-01",
          class:"一般审核",
          address:"甘肃 武威",
          phone:"16472188634",       
        },
        {
          name:"z13",
          number:"恒大3单元3号楼", 
          age:"王宝",
          sex_text:"2020-12-04",
          class:"急需审核",
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
    submitxx() {
      // alert("消息推送成功")
        this.$message({
          message: '审核通过，消息推送成功',
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
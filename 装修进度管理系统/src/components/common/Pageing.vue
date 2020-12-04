<template>
  <div class="pageing">
    <el-pagination
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :page-size="pageSize"
      :page-sizes="[10 , 20, 30, 40, 50]"
      @size-change="handleSizeChange"
      :current-page="currentPage"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>
<script>
export default {
  props: {
    'total': Number
  },
  data() {
    return {
      pageSize: 10, // 每页显示条数
      currentPage: 0 // 当前页数
    }
  },
  methods: {
    // 改变页数
    handleCurrentChange (val) {
      let vals = val - 1
      this.currentPage = val
    },
    // 每页多少条
    handleSizeChange (val) {
      this.pageSize = val
      this.currentPage = 1
    }
  }
}
</script>
<style lang="scss">
.pageing {
  text-align: right;
  margin-top: 20px;
}
</style>
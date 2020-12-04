<template>
  <div class="home" v-title data-title="装修进度管理系统">
    <el-container>
      <el-header>
        <div class="header-left">
          <img src="../assets/home_logo.jpg" alt="这是home的logo" width="50px" >
          <span>装修进度管理系统</span>
          <!-- <span v-show="!isCollapse">教务系统管理后台</span>
          <i :class="isCollapse ? 'coll el-icon-s-unfold' : 'coll el-icon-s-fold'" @click="isCollapse = !isCollapse"></i> -->
        </div>
        <div>
          {{username}}
          <span class="login-out" @click="loginOut">退出</span>
        </div>
      </el-header>
      <el-container class="main">
        <Menu></Menu>
        <el-main>
          <el-card>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index">
                <strong>{{item.name}}</strong>
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-card>
          <router-view></router-view>
          <Foot></Foot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from './common/Menu'
import Foot from './common/Footer'
export default {
  name: 'Home',
  components: {
    Menu,
    Foot
  },
  data () {
    return {
      username: ''
    }
  },
  created() {
    this.username = localStorage.getItem('username')
  },
  methods: {
    loginOut() {
      this.$alert('您确定要退出吗？', '退出提示', {
        confirmButtonText: '确定',
        callback: action => {
          // this.$message({
          //   type: 'info',
          //   message: `action: ${ action }`
          // });
          // localStorage.removeItem('token')
          localStorage.clear()
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  .el-header {
    background-color: #373d41;
    color: #fff;
    text-align: center;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    .header-left {
      .coll {
        cursor: pointer;
      }
    }
    .login-out {
      cursor: pointer;
    }
    img {
      vertical-align:-webkit-baseline-middle;
      border-radius: 50%;
      margin-top:-12px
    }
  }
  
  .main {
    width: 100%;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
    }
  }
}
</style>

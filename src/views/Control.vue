<template>
  <div class="main">
    <div class="menu">
      <el-col>
        <el-menu
          default-active="2"
          style="height: 100vh"
          class="el-menu-vertical-demo"
          :router="true"
        >
          <el-menu-item index="/control/Main">
            <i class="el-icon-setting"></i>
            <span slot="title">官网主页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>主页</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/control/slogen">关于公司</el-menu-item>
              <el-menu-item index="/control/Team">团队介绍</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/control/Banner">
            <i class="el-icon-menu"></i>
            <span slot="title">轮播图</span>
          </el-menu-item>
          <el-menu-item index="/control/News">
            <i class="el-icon-setting"></i>
            <span slot="title">公司新闻</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>页脚</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/control/Info">公司信息</el-menu-item>
              <el-menu-item index="/control/Link">友情链接</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/control/User">
            <i class="el-icon-setting"></i>
            <span slot="title">用户留言</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>

    <div class="info">
      <div class="nav">
        <h3>酒店软件管理系统</h3>
      </div>

      <div>
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Control",
  data() {
    return {};
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  display: flex;
  gap: 20px;
  background-color: #f5f5f5;
}
.menu {
  width: 15%;
}
.info {
  width: 80%;
  margin-top: 10px;
}
.nav {
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
.nav h3 {
  margin-left: 20px;
}
</style>
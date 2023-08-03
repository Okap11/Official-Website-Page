<template>
  <div class="main">
    <el-descriptions
      class="margin-top"
      title="公司信息"
      :column="3"
      :size="size"
      border
    >
      <template slot="extra">
        <el-button type="primary" size="small" @click="changeInfo = true">操作</el-button>
      </template>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          公司名
        </template>
        {{ info.name }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          联系方式
        </template>
        {{ info.phone }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          所在地
        </template>
        {{ info.city }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          备注
        </template>
        <el-tag size="small">公司</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          联系地址
        </template>
        {{ info.address }}
      </el-descriptions-item>
    </el-descriptions>


    <el-dialog title="更改信息" :visible.sync="changeInfo" width="30%">
      <div>
        <label for="">公司名：</label><input type="text" v-model="info.name"><br><br>
        <label for="">联系方式：</label><input type="text" v-model="info.phone"><br><br>
        <label for="">所在地：</label><input type="text" v-model="info.city"><br><br>
        <label for="">联系地址：</label><input type="text" v-model="info.address"><br><br> 
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="changeInfo = false">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
        info: {},
        changeInfo: false
    }
  },
  mounted() {
    this.$axios({
      method: "GET",
      url: "/getInfo",
    }).then((result) => {
      this.info = result.data.result;
    });
  },
  methods: {
    submit(){
      this.$axios({
        method: 'PUT',
        url: '/changeInfo',
        data: {
          info: this.info
        }
      }).then( result => {
        alert(result.data.msg)
        this.changeInfo = false
      })
    }
  }
};
</script>

<style scoped>
.main {
  background-color: white;
}
.margin-top {
  width: 100%;
  margin: 20px;
}
label{
    display: inline-block;
    width: 70px;
}
input{
    width: 260px;
    height: 27px;
    text-indent: 10px;
}
</style>
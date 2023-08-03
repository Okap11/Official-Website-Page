<template>
  <div class="main">
    <div class="menu">
      <el-button type="primary" @click="addImg = true">添加图片</el-button>
    </div>
    <div class="banner">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item, index) in imgArr" :key="index">
          <img :src="item.img" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>

    <el-dialog title="添加图片" :visible.sync="addImg" width="30%">
      <div>
        <input type="file" ref="input" />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addImg = false">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      addImg: false,
      imgArr: []
    };
  },
  mounted(){
    this.$axios({
      method: 'GET',
      url: '/getBanner'
    }).then( result => {
      this.imgArr = result.data.result
    })
  },
  methods: {
    submit() {
      const formData = new FormData();
      const file = this.$refs.input.files[0];
      formData.append("file", file);
      this.$axios
        .post("/getImgUrl", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then( result => {
          alert(result.data.msg)
          this.addImg = false
          this.$axios({
            method: 'POST',
            url: '/addBanner',
          }).then( result => {
            console.log(result.data.msg);
          })
        })
    },
  },
};
</script>

<style scoped>
.main {
  background-color: white;
  display: block;
  padding-top: 20px;
}
.menu {
  margin-right: 20px;
  display: flex;
  flex-direction: row-reverse;
}
.banner {
  margin-top: 20px;
}
.banner{
  width: 100%;
  height: 500px;
}
.banner img {
  width: 100%;
  height: 500px;
}
/deep/ .el-carousel__container{
  height: 500px;
}
</style>
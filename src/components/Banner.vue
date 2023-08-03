<template>
  <div>
    <div class="banner">
      <el-carousel indicator-position="never" style="height: 800px;">
        <el-carousel-item v-for="(item, index) in imgArr" :key="index">
          <img :src="item.img" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      imgArr: []
    }
  },
  mounted(){
    this.$axios({
      method: 'GET',
      url: '/getBanner'
    }).then( result => {
      this.imgArr = result.data.result
    })
  }
};
</script>

<style scoped>
.banner{
  width: 100%;
  height: 800px;
}
.banner img {
  width: 100%;
  height: 100%;
}
/deep/ .el-carousel__container{
  height: 800px;
}
</style>
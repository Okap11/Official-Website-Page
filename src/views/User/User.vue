<template>
  <div>
    <el-table :data="tokeArr" stripe style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"> </el-table-column>
      <el-table-column prop="content" label="留言"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      tokeArr: [],
    };
  },
  mounted() {
    this.$axios({
        method: 'GET',
        url: '/getToke'
    }).then( result => {
        this.tokeArr = result.data.result
    })
  },
};
</script>

<style>
</style>
<template>
  <div class="main">
    <div class="slogen">
      <el-button type="primary" @click="changeInfo = true">修改</el-button>
      <h4 style="line-height: 40px; margin-top: 20px">公司标语</h4>
      <label for=""> 英文标语: </label
      ><input type="text" disabled v-model="english_slogen" /> <br /><br />
      <label for=""> 中文标语: </label
      ><input type="text" disabled v-model="slogen" /><br /><br />
    </div>
    <div class="slogen">
      <h4 style="line-height: 40px">公司简介</h4>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        v-model="info"
        disabled
      ></textarea
      ><br />
    </div>
    <el-dialog title="更改信息" :visible.sync="changeInfo" width="30%">
      <div>
        <label for=""> 英文标语: </label
        ><input type="text" v-model="english_slogen" /> <br /><br />
        <label for=""> 中文标语: </label
        ><input type="text" v-model="slogen" /><br /><br />
        <label for="">公司简介：</label>
        <textarea
          cols="30"
          rows="10"
          style="min-width: 200px;min-height: 150px;"
          v-model="info"
        ></textarea>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="changeInfo = false">取 消</el-button>
        <el-button type="primary" @click="handelChange()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Slogen",
  data() {
    return {
      info: "",
      slogen: "",
      english_slogen: "",
      changeInfo: false,
    };
  },
  mounted() {
    this.$axios({
      method: "GET",
      url: "/getAbout",
    }).then((result) => {
      this.info = result.data.result[0].about;
    });
    this.$axios({
      method: "GET",
      url: "/getSlogen",
    }).then((result) => {
      if (result.data.code == 1) {
        this.slogen = result.data.data.slogen;
        this.english_slogen = result.data.data.english_slogen;
      } else {
        alert("服务器出错，请稍后重试！");
      }
    });
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 500px;
  background-color: white;
}
.slogen {
  width: 780px;
  margin: 0 auto;
  padding: 20px;
}
input {
  width: 240px;
  height: 30px;
  border: 1px solid #999;
  border-radius: 8px;
  margin: 0px 20px 0px;
  text-indent: 10px;
}
textarea {
  resize: none;
  padding: 20px;
  min-width: 260px;
  min-height: 110px;
}
</style>
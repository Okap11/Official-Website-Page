<template>
  <div class="main">
    <div class="wrapper">
      <div style="margin: 20px">
        <el-button type="primary" @click="addNews = true">添加</el-button>
      </div>
      <el-table :data="news" stripe height="600">
        <el-table-column prop="img" label="图片">
          <template slot-scope="scope">
            <!-- scope.row获取当前行所有数据 作用域插槽获取当前行的数据（可以是图片连接如下：:src="scope.row.iconImgLarge"） -->
            <el-image :src="scope.row.img" fit=""></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题"> </el-table-column>
        <el-table-column prop="time" label="日期"> </el-table-column>
        <el-table-column prop="content" label="内容"> </el-table-column>
      </el-table>
    </div>

    <el-dialog title="添加图片" :visible.sync="addNews" width="30%">
      <div>
        <input type="file" ref="input" /><br /><br />
        <label for="">标题：</label
        ><input type="text" v-model="title" /><br /><br />
        <label for="">时间：</label
        ><input type="date" v-model="time" /><br /><br />
        <label for="" style="vertical-align: top">内容：</label
        ><textarea
          name=""
          id=""
          cols="30"
          rows="10"
          v-model="content"
        ></textarea
        ><br /><br />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addNews = false">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      news: [],
      addNews: false,
      title: "",
      time: "",
      content: "",
    };
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
        })
        .then((result) => {
          alert(result.data.msg);
          this.addImg = false;
          this.$axios({
            method: "POST",
            url: "/addNews",
            data: {
              title: this.title,
              time: this.time,
              content: this.content
            }
          }).then((result) => {
            console.log(result.data.msg);
            this.addNews = false
            location.reload()
          });
        });
    },
  },
  mounted() {
    this.$axios({
      method: "GET",
      url: "/getNews",
    }).then((result) => {
      this.news = result.data.result;
    });
  },
};
</script>

<style scoped>
.main {
  background-color: white;
}
.wrapper {
  width: 100%;
}
input[type="text"] {
  width: 170px;
  height: 30px;
  text-indent: 10px;
}
textarea {
  resize: none;
  max-width: 270px;
  height: 100px;
}
</style>
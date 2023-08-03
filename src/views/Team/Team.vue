<template>
  <div class="main">
    <div class="wrapper">
      <div class="item" v-for="(item, index) in peopleArr" :key="index">
        <div>
          <img :src="item.img" alt="" />
        </div>
        <div>
          <p class="name">{{ item.name }}</p>
          <p class="content">{{ item.content }}</p>
        </div>
      </div>
      <div class="item add" @click="addTeam = true">
        <div>
          <p style="text-align: center">
            <i class="el-icon-circle-plus-outline"></i>
          </p>
          <p style="font-size: 20px">添加团队</p>
        </div>
      </div>
    </div>

    <el-dialog title="提示" :visible.sync="addTeam" width="30%">
      <div>
        <input type="file" ref="input" /><br /><br />
        <label for="">姓名：</label
        ><input type="text" v-model="name" /><br /><br />
        <label for="" style="vertical-align: top">内容：</label
        ><textarea
          name=""
          id=""
          cols="30"
          rows="10"
          v-model="content"
        ></textarea>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addTeam = false">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      peopleArr: [],
      addTeam: false,
      name: "",
      content: "",
    };
  },
  mounted() {
    this.$axios({
      method: "GET",
      url: "/getPeople",
    }).then((result) => {
      this.peopleArr = result.data.result;
    });
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
            url: '/addTeam',
            data: {
              name: this.name,
              content: this.content
            }
          }).then( result => {
            console.log(result.data.msg);
            this.addTeam = false
            location.reload()
          })
        })
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  background-color: white;
  display: block;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 20px;
  gap: 20px;
}
.item {
  width: 280px;
  height: 400px;
  position: relative;
}
.change {
  position: absolute;
  right: 20px;
}
.item img {
  width: 280px;
}
.add {
  height: 200px;
  transition: all 0.2s;
  font-size: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.add:hover {
  outline: 1px solid #999;
  border-radius: 8px;
  color: #409eff;
}
input {
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
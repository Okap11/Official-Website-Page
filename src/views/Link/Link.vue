<template>
  <div class="main">
    <div style="margin-left: 20px">
      <el-button type="primary" @click="addLink = true">添加链接</el-button>
    </div>
    <table border="1">
      <tr>
        <th>操作</th>
        <th>链接名</th>
        <th>链接地址</th>
      </tr>
      <tr v-for="(item, index) in urlArr" :key="index">
        <td>
          <el-button type="danger" @click="omit(item.id)">删除</el-button>
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.link }}</td>
      </tr>
    </table>

    <el-dialog title="添加链接" :visible.sync="addLink" width="30%">
      <div>
        <label for="">链接名：</label
        ><input type="text" v-model="name" /><br /><br />
        <label for="">链接地址：</label
        ><input type="text" v-model="link" /><br /><br />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addLink = false">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Link",
  data() {
    return {
      urlArr: [],
      addLink: false,
      name: "",
      link: "",
    };
  },
  mounted() {
    this.$axios({
      method: "GET",
      url: "/getLink",
    }).then((result) => {
      this.urlArr = result.data.result;
    });
  },
  methods: {
    omit(id) {
      console.log(id);
      this.$axios({
        method: "POST",
        url: "/deleteLink",
        data: {
          id: id,
        },
      }).then((result) => {
        alert(result.data.msg);
        location.reload();
      });
    },
    submit() {
      if (this.name == "" || this.link == "") {
        alert("输入的值不能为空！");
      } else {
        this.$axios({
          method: "PUT",
          url: "/addLink",
          data: {
            name: this.name,
            link: this.link,
          },
        }).then( result => {
            alert(result.data.msg);
            this.addLink = false
            location.reload()
        });
      }
    },
  },
};
</script>

<style scoped>
.main {
  display: block;
  padding-top: 20px;
  background-color: white;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border: 2px solid #999;
}
td {
  padding: 10px;
  text-align: center;
}
label {
  display: inline-block;
  width: 70px;
}
input {
  width: 260px;
  height: 27px;
  text-indent: 10px;
}
</style>
<template>
  <div>
    <div class="us">
      <p
        style="
          font-size: 32px;
          font-weight: 900;
          letter-spacing: 0px;
          line-height: 42.67px;
          color: rgba(0, 0, 0, 1);
          margin-left: 24px;
        "
      >
        联系我们
      </p>
      <div
        style="display: flex; margin-top: 40px; justify-content: space-around"
      >
        <div class="phone">
          <p class="us-title">联系方式</p>
          <div class="phone-item">
            <p>
              <i class="el-icon-info"></i>
              <span>{{ info.address }}</span>
            </p>
            <p>
              <i class="el-icon-phone"></i>
              <span>{{ info.phone }}</span>
            </p>
            <p>
              <i class="el-icon-s-comment"></i>
              <span>{{ info.email }}</span>
            </p>
          </div>
        </div>
        <div class="toke">
          <p class="us-title">在线留言</p>
          <div>
            <label for="">姓名</label><br />
            <input type="text" v-model="name"/><br />
            <label for="">邮箱</label><br />
            <input type="email" v-model="email" /><br />
            <label for="">留言内容</label><br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              style="resize: none"
              v-model="content"
            ></textarea>
          </div>
          <div>
            <el-button type="primary" @click="submit">提交留言</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Us',
  data() {
    return {
      info: {},
      name: '',
      email: '',
      content: ''
    }
  },
  mounted(){
    this.$axios({
      method: 'GET',
      url: '/getInfo'
    }).then( result => {
      this.info = result.data.result;
    })
  },
  methods: {
    submit(){
      this.$axios({
        method: 'POST',
        url: '/addToke',
        data: {
          name: this.name,
          email: this.email,
          content: this.content
        }
      }).then( result => {
        alert(result.data.msg)
      })
    }
  }
}
</script>

<style scoped>
.us {
  width: 100%;
  height: 610px;
  background-color: white;
  padding-top: 40px;
}
.phone,
.toke {
  width: 640px;
  height: 450px;
  background-color: #f3f4f6;
  border-radius: 8px;
  padding: 24px;
}
.us-title {
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 37.33px;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 16px;
}
.us label {
  font-size: 21.33px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 32px;
  color: rgba(107, 114, 128, 1);
}
.us input,
.us textarea {
  min-width: 576px;
  min-height: 40px;
  border-radius: 8px;
  background-color: white;
  margin-bottom: 16px;
  text-indent: 10px;
}
.us input{
  border: 1px solid #999;
}
.phone-item p {
  width: 640px;
  height: 24px;
  margin-bottom: 10px;
}
.phone-item p span {
  margin-left: 16px;
  display: inline-block;
}
button{
  width: 96px;
  height: 40px;
}

</style>
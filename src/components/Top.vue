<template>
  <div>
    <div class="top">
      <div style="background-color: #1e202c">
        <nav>
          <img src="@/assets/logo.png" alt="" />
          <div class="wrapper">
            <ul>
              <li>首页</li>
              <li>产品</li>
              <li>关于我们</li>
              <li>联系我们</li>
            </ul>
            <div style="display: flex; align-items: center; overflow: hidden">
              <input type="text" placeholder="搜索" />
            </div>
          </div>
        </nav>
      </div>

      <div class="title">
        <h1>{{ slogen }}</h1>
        <h5>{{ english_slogen }}</h5>
      </div>

      <div class="people">
        <div
          class="people-item"
          v-for="(item, index) in peopleArr"
          :key="index"
        >
          <div>
            <img :src="item.img" alt="" />
          </div>
          <div class="about">
            <p class="people-name">{{ item.name }}</p>
            <p class="people-content">
              {{ item.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      slogen: "",
      english_slogen: "",
      peopleArr: [],
    };
  },
  mounted() {
    this.$axios({
      method: "GET",
      url: "/getSlogen",
    }).then((result) => {
      if (result.data.code == 1) {
      this.slogen = result.data.data.slogen
        this.english_slogen = result.data.data.english_slogen;
      } else {
        alert("服务器出错，请稍后重试！");
      }
      this.$axios({
        method: "GET",
        url: "/getPeople",
      }).then((result) => {
        this.peopleArr = result.data.result;
      });
    });
  },
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 800px;
  margin: 0 auto;
  background-image: url(https://img.js.design/assets/img/645ceeb63424d3dc04a6b0d0.png);
  background-size: 100% 100%;
  background-color: rgba(33, 36, 49, 1);
  display: flex;
  flex-direction: column;
  position: relative;
}
nav {
  width: 980px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
  color: white;
  background-color: #1e202c;
}
nav img {
  height: 40px;
}
ul {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 10px;
}
li {
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  transition: all 0.2s;
}
li:hover {
  color: #f58a07;
  text-decoration: underline;
  cursor: pointer;
}
input {
  width: 120px;
  height: 35px;
  text-indent: 10px;
  border-style: hidden;
  border-radius: 35px;
  background-color: #fef3e6;
}
::-webkit-input-placeholder {
  text-align: center;
  text-indent: 0px;
  color: #f58a07;
  font-size: 15px;
  font-weight: 900;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.title {
  margin: 223px auto;
  text-align: center;
  color: #d7b98d;
}
h1 {
  font-size: 50px;
  margin-bottom: 10px;
}
.people {
  width: 1002px;
  height: 326px;
  position: absolute;
  left: 50%;
  bottom: -40%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 99;
  display: flex;
  gap: 27px;
}
.people-item {
  width: 317px;
  height: 325px;
  display: flex;
  align-items: center;
  position: relative;
}
.people-item img {
  width: 317px;
}
.about {
  position: absolute;
  right: 18px;
}
.people-name {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -0.15px;
  line-height: 34.75px;
  color: rgba(255, 255, 255, 1);
}
.people-content {
  width: 113px;
  height: 147px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 21px;
  color: rgba(255, 255, 255, 1);
}
</style>
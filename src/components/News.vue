<template>
  <div>
    <div class="news">
      <div class="item-wrapper">
        <div class="item" v-for="(item, index) in news" :key="index">
          <img
            :src="item.img"
            alt=""
          />
          <div class="content-wrapper">
            <p class="content-title">{{ item.title }}</p>
            <p class="content-time">{{ item.time }}</p>
            <p class="content">
              {{ item.content }}
            </p>
            <p class="menu"><button>阅读全文</button></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      news: []
    }
  },
  mounted(){
    this.$axios({
      method: 'GET',
      url: '/getNews'
    }).then( result => {
      this.news = result.data.result
    })
  }
};
</script>

<style scoped>
.news {
  width: 100%;
  height: 1170px;
  background-color: #f5f5f5;
  overflow: hidden;
}
.item-wrapper {
  width: 1062px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin: 60px auto;
}
.item {
  width: 480px;
  height: 511px;
  display: flex;
  flex-direction: column;
  position: relative;
}
.item img {
  width: 100%;
  height: 242px;
}
.content-wrapper {
  width: 400px;
  height: 300px;
  position: absolute;
  top: 211px;
  left: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
}
.content-title {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 34.75px;
  margin-top: 17px;
  color: rgba(32, 35, 48, 1);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.content-time {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 16.41px;
  color: rgba(32, 35, 48, 1);
  margin: 20px 0px;
}
.content {
  width: 347px;
  height: 110px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 27px;
  color: rgba(143, 143, 143, 1);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.menu {
  width: 100%;
  text-align: right;
  margin-top: 20px;
}
.menu button {
  width: 150px;
  height: 40px;
  background-color: white;
  border: 1px solid #d9ba87;
  margin-right: 34px;
  cursor: pointer;
}
</style>
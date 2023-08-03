<template>
  <div>
    <div class="footer-wrapper">
      <div class="footer">
        <div class="footer-info">
          <p class="footer-title">版权信息</p>
          <p class="footer-content">© 2021 企业名称.版权所有</p>
          <p class="footer-content">粤ICP备12345678号</p>
        </div>

        <div class="footer-info">
          <p class="footer-title">友情链接</p>
          <p v-for="(item, index) in urlArr" :key="index">
            <a :href="item.link" class="footer-content">{{ item.name }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
  data() {
    return {
      urlArr: []
    }
  },
  mounted() {
    this.$axios({
      method: "GET",
      url: "/getLink",
    }).then((result) => {
      this.urlArr = result.data.result;
    });
  },
};
</script>

<style scoped>
.footer-wrapper {
  width: 100%;
  height: 185px;
  padding-top: 40px;
  background-color: #212431;
}
.footer {
  width: 980px;
  display: flex;
  margin-left: 96px;
  gap: 32px;
}
.footer-info {
  width: 288px;
  height: 124px;
}
.footer-content {
  font-size: 18.67px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 26.67px;
  color: rgba(156, 163, 175, 1);
}
.footer-title {
  font-size: 26.67px;
  font-weight: 900;
  letter-spacing: 0px;
  line-height: 37.33px;
  color: rgba(255, 255, 255, 1);
}
a:hover{
  color: #F58C2B;
  text-decoration: underline;
}
</style>
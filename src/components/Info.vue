<template>
  <div>
    <div class="info-wrapper">
      <p class="info">
        {{ info }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data() {
    return {
      info: ''
    }
  },
  mounted(){
    this.$axios({
      method: 'GET',
      url: '/getAbout'
    }).then ( result => {
      this.info = result.data.result[0].about
    })
  }
};
</script>

<style scoped>
.info-wrapper {
  width: 100%;
  height: 669px;
  background-image: url(https://img.js.design/assets/img/645ceeb52e603202e4980bf3.png);
  background-size: 100% 100%;
  background-color: white;
  position: relative;
}
.info {
  height: 81px;
  width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 27px;
  color: rgba(32, 35, 48, 1);
}
</style>
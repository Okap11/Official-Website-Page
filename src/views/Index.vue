<template>
  <div class="main">
    <Top></Top>
    <Info></Info>
    <Banner></Banner>
    <News></News>
    <Us></Us>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from "@/components/Top";
import Info from "@/components/Info";
import Banner from "@/components/Banner";
import News from "@/components/News";
import Us from "@/components/Us";
import Bottom from "@/components/Bottom";

export default {
  name: "Index",
  components: {
    Top,
    Info,
    Banner,
    News,
    Us,
    Bottom,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
<template>
  <!--首页-->
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <my-menu />
      </el-col>
      <el-col :span="19">
        <my-life />
      </el-col>
    </el-row>
    <!--有格调-->
    <el-row>
      <el-col :span="24">
        <my-container :nav="iStyle"/>
      </el-col>
    </el-row>
<!--猫眼电影-->
    <el-row>
      <el-col :span="24">
        <my-container :nav="movie"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MyMenu from "@/components/index/menu.vue";
import MyLife from "@/components/index/life.vue";
import MyContainer from "@/components/index/container.vue";
export default {
  data() {
    return {
      iStyle: {
        class:'istyle',
        title: "有格调",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "约会聚餐",
            tab: "food"
          },
          {
            text: "丽人spa",
            tab: "spa"
          },
          {
            text: "电影出演",
            tab: "movie"
          },
          {
            text: "品质出游",
            tab: "travel"
          }
        ]
      },
      movie: {
        class:'movie',
        title: "猫眼电影",
        list: [
          {
            text: "正在热映",
            tab: "all"
          },
          {
            text: "即将上映",
            tab: "food"
          },
        ]
      },
    };
  },
  components: {
    MyMenu,
    MyLife,
    MyContainer,
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>

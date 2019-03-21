<template>
  <!-- 头部分为一行两列,geo地图列，nav菜单列 -->
  <div>
    <el-row class="m-header m-header-topbar">
      <el-col :span="10">
        <geo/>
      </el-col>
      <el-col :span="14">
        <m-nav/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import geo from "./geo";
import mNav from "./nav";
export default {
  components: {
    geo,
    mNav
  }
};
</script>

// <style lang='scss'>
// @import '@/assets/css/public/header/topBar.scss';
// </style>
<template>
<!-- 头部分为两行(2个组件），一行为topbar,一行为搜索框searchBar -->
  <div class='m-header'>
    <el-row >
        <top-bar />
    </el-row>
    <el-row>
        <search-bar />
    </el-row>
  </div>
</template>

<script>
import topBar from './topBar'
import searchBar from './searchBar'

export default {
    components:{
        topBar,
        searchBar
    }
};
</script>
<style lang='scss'>
@import '@/assets/css/public/header/index.scss';
</style>
<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot title="热门城市" :list="hotCityList"/>
    </el-row>
    <el-row>
      <hot title="最近访问" :list="rencentVisit"/>
    </el-row>
    <el-row>
      <catagory />
    </el-row>
  </div>
</template>
<script>
  import Province from  '@/components/changeCity/province.vue'
  import Hot from  '@/components/changeCity/hot.vue'
  import catagory from  '@/components/changeCity/category.vue'
  export default{
    data(){
      return {
        hotCityList:['重庆','四川','北京','上海','广州','西安'],
        rencentVisit:['重庆','四川']
      }
    },
    components:{
      Province,
      Hot,
      catagory
    }
  }
</script>

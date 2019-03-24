<template>
  <div>
    <span class="name">按省份选择</span>
    <my-select
      :list="provinceList"
      :value="province"
      title="省份"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
    />
    <my-select
      :list="cityList"
      :value="city"
      title="城市"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
    />
    <span>直接搜索</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入城市中文或拼音"
      :remote-method="remoteMethod"
      :loading="loading">
      <el-option
        v-for="item in searchList"
        :key="item"
        :label="item"
        :value="item">
      </el-option>
    </el-select>
  </div>
</template>
<script>
import MySelect from "./select.vue";
export default {
  data() {
    return {
      provinceList: ["山东", "甘肃", "重庆"],
      province: "省份",
      cityList: ['重庆','四川','北京','上海','广州','西安'],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList:["哈尔滨", "三亚", "重庆"],
      searchWord:'',
      loading:false

    };
  },
  components: {
    MySelect
  },
  methods: {
    changeProvinceActive(flag){
      this.provinceActive = flag;
      if(flag){
        this.cityActive = false;
      }
    },
    changeCityActive(flag){
      this.cityActive = flag;
      if(flag){
        this.provinceActive = false;
      }
    },
    // 远程搜索
    remoteMethod(val){
      // val为搜索框中的值
      //请求后端接口
      console.log(val)
    },
    changeProvince(value){
        this.province = value;
    },
    changeCity(val){
      this.city = val;
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changeCity/iselect.scss";
</style>

<template>
<!--分两列-->
  <div class='search-panel'>
    <el-row class='m-header-searchbar'>
      <!--图片-->
      <el-col :span="3" class="left">
          <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
      </el-col>
      <!--搜索框-->
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input placeholder="搜索商家或地点" v-model="searchWord"
           @focus="focus" @blur="blur"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
           <dl class='hotPlace' v-if='isHotPlace'>
               <dt>热门搜索</dt>
               <dd v-for='(item,index) in hotPlaceList' :key='index'>
                   <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
               </dd>

           </dl>
            <dl class='searchList' v-if='isSearchList'>

              <dd v-for='(item,index) in searchList' :key='index'>
                   <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
               </dd>

           </dl>
        </div>
        <p class="suggest">
         <a v-for='(item,index) in suggestList' :key='index'>
                   <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
               </a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    data(){
        return {
            searchWord:'',
            isFocus:false,
            hotPlaceList: ['京东第一温','京东第一温泉度假村'],
            searchList: ['京东第','京东第一温泉度假村'],
            suggestList: ['重庆欢乐谷','南山植物园','天赐温泉','欢乐迪','萌秀KTV','重庆园博园','融汇温泉']

        }

    },
    computed:{
      // 当onfocus触发并且输入框无内容时显示热搜
        isHotPlace:function(){
            return this.isFocus && !this.searchWord
        },
      // 当onfocus触发并且输入框有内容时显示搜索提示
        isSearchList:function(){
             return this.isFocus && this.searchWord
        }
    },
    methods:{
        focus(){

            this.isFocus = true;
        },
        blur(){
            var self = this;
            // 解决点击关键字时触发blur事件，所以延迟触发blur
            setTimeout(function() {
                self.isFocus = false;
            }, 200)

        }
    },

};
</script>



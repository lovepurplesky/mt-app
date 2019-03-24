<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList " :key="index" @mouseenter="menuEnter(item)">
        <i :class="item.icon"></i>
       {{item.title}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <!--鼠标移动到nav上显示区域，动态渲染-->
    <div v-if ='curDetail' class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item,index) in curDetail.children">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="(v,i) in item.children " :key="v+'_'+i"> {{v}}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      curDetail:null,
      menuList:[
        {
          title:'美食',
          icon:'food',
          children:[
            // 此处存储hover后的数据
            {
              title:'美食',
              children:["代金券","小吃","快餐","中餐",'西餐','日本莱欧丽','烧烤']
            }
          ]
        },
        {
          title:'外卖',
          icon:'takeout',
          children:[
            // 此处存储hover后的数据
            {
              title:'外卖',
              children:["美团外卖"]
            }
          ]
        },
        {
          title:'酒店',
          icon:'hotel',
          children:[
            // 此处存储hover后的数据
            {
              title:'酒店星级',
              children:["经济型","舒适/三星","高档/四星","豪华/五星"]
            }
          ]
        },
      ]
    }
  },
  methods:{
    menuEnter(item){
      // console.log(item)
      this.curDetail = item;
    },
    menuLeave(){
      var self = this;
      this.timer = setTimeout(function () {
        self.curDetail = null;
      },200)

    },
    detailEnter(){
      clearTimeout(this.timer);
    },
    detailLeave(){
      this.curDetail = null ;
    }
  }
};
</script>

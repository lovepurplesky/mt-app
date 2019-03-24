<template>
  <div class="categroy">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item,index) in list" :key="index">
        <a :href="'#city-'+ item" >{{item}}</a></dd>
    </dl>
    <dl class="m-categroy-section" v-for="(item,index) in cityGroup " :key="index" :id="'city-'+index">
      <dt>{{index}}</dt>
      <dd >
        <span v-for="city in item" :key="city.id"> {{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
  export  default{
    data(){
      return {
        list:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
      }
    },
    created(){
      var data = [{
          'id':1,
          'name':'北京',
          "pinyin":'beijing',
          'rank':'S',
          'firstChar':'b'
        },
          {
            'id':2,
            'name':'上海',
            "pinyin":'上海',
            'rank':'S',
            'firstChar':'s'
          },{
            'id':3,
            'name':'天津',
            "pinyin":'tianjin',
            'rank':'S',
            'firstChar':'t'
          },{
            'id':4,
            'name':'北京',
            "pinyin":'beijing',
            'rank':'S',
            'firstChar':'b'
          },
          {
            'id':5,
            'name':'北京',
            "pinyin":'beijing',
            'rank':'S',
            'firstChar':'x'
          },
        {
          'id':6,
          'name':'北京',
          "pinyin":'beijing',
          'rank':'S',
          'firstChar':'y'
        },{
          'id':7,
          'name':'北京',
          "pinyin":'beijing',
          'rank':'S',
          'firstChar':'z'
        },
        {
          'id':8,
          'name':'北京',
          "pinyin":'beijing',
          'rank':'S',
          'firstChar':'w'
        }

        ]

      var obj={};
      data.forEach((item,index)=> {
        if(!obj[item.firstChar.toUpperCase()]){
          obj[item.firstChar.toUpperCase()] =[];
        }
        obj[item.firstChar.toUpperCase()].push(item);
      })
      this.cityGroup = obj;
    }

  }
</script>
<style lang="scss">
  @import "@/assets/css/changecity/categroy.scss";
</style>

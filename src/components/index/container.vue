<template>
  <!--定义的data-type需要和后端约定-->
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{ active: kind == item.tab }"
        data-type="item.tab"
      >
        {{ item.text }}
      </dd>
      <!--<dd :class="{active:kind=='food'}" data-type="food">约会聚餐</dd>-->
      <!--<dd :class="{active:kind=='spa'}" data-type="spa">丽人spa</dd>-->
      <!--<dd :class="{active:kind=='movie'}" data-type="movie">电影出演</dd>-->
      <!--<dd :class="{active:kind=='travel'}" data-type="travel">品质出游</dd>-->
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in list" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" title="item.title">{{ item.title }}</div>
            <div class="sub-title" title="item.sub_title">
              {{ item.sub_title }}
            </div>
            <div class="price-info" v-if="item.rentNum && item.price_info.current_price">
              <span class="current-price-wrapper"
                ><span class="price-symbol numfont">¥</span
                ><span class="current-price numfont">{{
                  item.price_info.current_price
                }}</span></span
              ><span class="old-price"
                >门市价¥{{ item.price_info.old_price }}</span
              ><span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
            <div class="price-info" v-else-if="!item.rentNum">
                 <span class="current-price-wrapper"
                 ><span class="price-symbol numfont">¥</span
                 ><span class="current-price numfont">抢光了</span></span>
            </div>
            <div class="price-info" v-else>
                 <span class="current-price-wrapper"
                 ><span class="price-symbol numfont">¥</span
                 ><span class="current-price numfont">{{item.price_info.avg_price}}</span>
                 <span class="units">/{{item.price_info.units}}均</span>
                 </span>
            </div>

          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kind: "all",
      list: [
        {
          image:
            "//p1.meituan.net/msmerchant/ec7b3d830db0565e660fc9877e771d3057436.jpg@368w_208h_1e_1c",
          title: "木子手工蛋糕",
          sub_title: "芒果千层6寸1个，约6英寸，圆",
          price_info: {
            current_price: 18,
            old_price: 26,
            avg_price:10,
            units:'人'
          },
          rentNum:10,
          address: "大坪"
        },
        {
          image:
            "//p1.meituan.net/bbia/a9049011b4cef4c5caed51293e60bff2164918.jpg@368w_208h_1e_1c",
          title: "约定蛋糕坊（时代天街店）",
          sub_title: "蛋糕14选1,约10英寸",
          price_info: {
            current_price: null,
            old_price: 188,
            avg_price:11,
            units:'人'
          },
          rentNum:0,
          address: "龙湖时代天街"
        },
        {
          image:
            "//p1.meituan.net/bbia/71e86fc344e27961754bc67c992e4a8637158.jpg@368w_208h_1e_1c",
          title: "半暖时光翻糖蛋糕",
          sub_title: "特价兔子翻糖蛋糕1个，约6英寸，圆形",
          price_info: {
            current_price: null,
            old_price: 298,
            avg_price:12,
            units:'人'
          },
          rentNum:11,
          address: "龙湖时代天街"
        }
      ],
    };
  },
  props: ["nav"],
  methods: {
    over(e) {
      // console.log(e)
      let dom = e.target;
      // 把DD转为dd
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      // 获取我们设置的data-type
      this.kind = dom.getAttribute("data-type");
      // 动态获取数据 发送ajax
    }
  }
};

</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>

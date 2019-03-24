<template>
  <div
    class="choose-wrap"
    @click="showWrapper"
    v-document-click="documentClick"
  >
    <div class="choose">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{ 'mt-content': true, active: showWrapperActive }">
        <h2>{{ title }}</h2>
        <div class="wrapper">
          <!--按列排序-->
          <div class="col">
            <span
              class="mt-item"
              v-for="(item, index) in list"
              :key="index"
              @click="changeValue(item)"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  props: ["list", "value", "title", "showWrapperActive"],
  methods: {
    showWrapper(e) {
      // 阻止冒泡，不阻止的话会触发documentClick
      e.stopPropagation();
      // this.showWrapperActive = true;
      this.$emit("change_active", true);
    },
    documentClick() {
      // this.showWrapperActive = false;
      this.$emit("change_active", false);
    },
    changeValue(item) {
      this.$emit("change", item);
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changeCity/select.scss";
</style>

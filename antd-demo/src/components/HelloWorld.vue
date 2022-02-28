<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-content :style="{height: screenHeight,width: screenWidth}">
        <LoginPanel></LoginPanel>
      </a-layout-content>
      <a-layout-footer :style="footer_style"><Footer></Footer></a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      // header,footer高度
      // header_style: [{ height: 160 + "px", padding: 0 + "px" }],
      footer_style: [{ height: 60 + "px", padding: 0 + "px" }],
      // 屏幕大小信息
      screenHeight: "",
      screenWidth: ""
    };
  },
  methods: {
    getViewPortHeight() {
      const screenHeight = this.$getViewportSize().height - 60 + 'px';
      this.screenHeight = screenHeight;
    }
  },
  mounted() {
    this.getViewPortHeight();
    window.addEventListener('resize',this.getViewPortHeight);
  },
  destoryed() {
    window.addEventListener('resize',this.getViewPortHeight,false);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgb(255,255,255);
  color: rgb(0,21,41);
}
</style>

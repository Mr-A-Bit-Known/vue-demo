<template>
  <div class="HomePageWrapper">
    <div id="components-layout-demo-basic">
      <a-layout>
        <a-layout-header :style="headerHeight">Header</a-layout-header>
        <a-layout>
          <a-layout-sider><Sider :style="{height: screenHeight}" /></a-layout-sider>
          <a-layout-content :style="{ height: screenHeight }"><Tabs /></a-layout-content>
        </a-layout>
        <a-layout-footer :style="footerHeight"><Footer /></a-layout-footer>
      </a-layout>
    </div>
  </div>
</template>

<script>
export default {
  created() {
  },
  data() {
    this.headerHeight= [{
      height: 35 + 'px',
      padding: 0 + 'px',
      num_height: 35,
      lineHeight: 35 + 'px'
    }],
    this.footerHeight = [{
      height: 30 + 'px',
      padding: 0 + 'px',
      num_height: 30,
    }]
    return {
      // 屏幕高度
      screenHeight: "",
      // 屏幕宽度
      screenWidth: "",
      // header计算高度
      headerNumHeight: "",
      // footer计算高度
      footNumHeight: "",
      dataInfo: '123'
    };
  },
  methods: {
    // 动态匹配高度
    getViewPortHeight() {
      for (const item of this.headerHeight) {
        const headerNumHeight = item.num_height;
        this.headerNumHeight = headerNumHeight;
        for (const item of this.footerHeight) {
          const footNumHeight = item.num_height;
          this.footNumHeight = footNumHeight;
          const screenHeight = this.$getViewportSize().height - (this.headerNumHeight + this.footNumHeight) + "px";
          this.screenHeight = screenHeight;
        }
      }
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

<style scoped>
.HomePageWrapper {
  position: relative;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}

#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;

}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  z-index: 2;
}
</style>
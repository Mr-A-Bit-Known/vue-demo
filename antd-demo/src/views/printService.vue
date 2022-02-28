<template>
  <div class="printServiceWrapper">
    <div class="content_wrapper">
      <div :class="{ static: isStatic, active: isActive }">
        <a-input :style="height" placeholder="请输入对应的组装批查询" @keyup.enter.native="scan" />
        <a-button :style="height" type="primary">确定</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    this.height = [
      {
        height: 40 + "px",
      },
    ];
    return {
      isStatic: true,
      isActive: true,
    };
  },
  methods: {
      
  },
};
</script>

<style scoped>
.content_wrapper {
  display: flex;
  justify-content: center;
  border: 1px solid black;
}
.static {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.static >>> .ant-input {
  width: 600px;
  text-align: center;
  border-radius: 0;
}
.static >>> .ant-btn {
  border-radius: 0;
}
</style>
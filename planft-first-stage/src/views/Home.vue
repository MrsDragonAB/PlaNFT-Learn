<template>
  <div class="whole">
    <dailog :centerDialogVisible="centerDialogVisible"></dailog>
    <div class="header">
      <div class="left"><span>PlaNFT-Learn</span></div>
      <div class="right">
        <button @click="connect()">
          {{ walletInfo.account ? walletInfo.account : "Connect Wallet" }}
        </button>
      </div>
    </div>
    <div class="health">
      <div class="nav">
        <el-col :span="12">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1" @click="send()">
              <i class="el-icon-location"></i>
              <span slot="title">发送请求</span>
            </el-menu-item>
            <el-menu-item index="2" @click="from()">
              <i class="el-icon-menu"></i>
              <span slot="title">表单</span>
            </el-menu-item>
            <el-menu-item index="3" @click="table()">
              <i class="el-icon-document"></i>
              <span slot="title">表格</span>
            </el-menu-item>
            <el-menu-item index="4" @click="animation()">
              <i class="el-icon-setting"></i>
              <span slot="title">商品列表</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import dailog from "../components/connect/index.vue";
export default {
  components: {
    dailog,
  },
  data() {
    return {
      walletInfo: "",
      centerDialogVisible: false,
    };
  },
  watch: {
    "$store.state.walletInfo"(newVal) {
      this.walletInfo = newVal;
      console.log(",,,,,", newVal);
    },
  },
  methods: {
    send() {
      this.$router.push("send");
    },
    from() {
      this.$router.push("from");
    },
    table() {
      this.$router.push("table");
    },
    animation() {
      this.$router.push("shopping");
    },
    connect() {
      this.centerDialogVisible = true;
    },
   
  },
};
</script>
<style lang="less" scoped>
@import "./home.less";
</style>
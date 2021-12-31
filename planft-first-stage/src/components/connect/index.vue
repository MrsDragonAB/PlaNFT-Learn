<template>
  <el-dialog
    title="To Get Verified"
    :visible.sync="centerDialogVisible2"
    width="348px"
    :before-close="handleClose"
  >
    <div class="frame">
      <ul class="list">
        <li @click="handleClose('Metamask')">
          <span class="size1">Metamask</span
          ><img src="../../assets/组 3172.png" alt="" />
        </li>
        <li>
          <span class="size2">WalletConnect</span
          ><img src="../../assets/组 3171.png" alt="" />
        </li>
        <li>
          <span class="size3">Coinbase Wallet</span
          ><img src="../../assets/组 3170.png" alt="" />
        </li>
        <li>
          <span class="size4">Fortmatic</span
          ><img src="../../assets/组 3169.png" alt="" />
        </li>
        <li>
          <span class="size5">Portis</span
          ><img src="../../assets/组 3168.png" alt="" />
        </li>
        <li>
          <span class="size6">Ledger</span
          ><img src="../../assets/路径 3701.png" alt="" />
        </li>
      </ul>
      <div class="footer">
        <span class="footer_icon"></span>
        <span class="footer_span">Learn how to connect</span>
      </div>
    </div>
  </el-dialog>
</template>
<script>
import connectMetaMask from "../../WalletConnect/metamask";
export default {
  props: ["centerDialogVisible"],
  data() {
    return {
      centerDialogVisible2: false,
    };
  },
  watch: {
    centerDialogVisible: {
      handler(newVal) {
        this.centerDialogVisible2 = newVal;
      },
    },
  },
  methods: {
    async handleClose(walletType) {
      if (walletType === "Metamask") {
        let obj = {};
        obj = await connectMetaMask();
        this.$store.commit("SET_USER_WALLETINFO", obj);
        this.centerDialogVisible2 = false;
      }
    },
  },
};
</script>

<style  lang="less" scoped>
@import "./dailog.less";
</style>


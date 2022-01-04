<template>
  <div>
    <div>
      <button @click="reduce" class="box">-</button>
      <span>{{ $store.state.count }}</span>
      <button @click="increment" class="box">+</button>
    </div>
    <div>
      <button @click="sendRequest">发送GET请求</button>
      <p>返回结果</p>
      <textarea rows="10" cols="30" v-model="val"></textarea>
    </div>
    <button @click="sendPost">点击发送post请求</button>
    <div><button @click="balance()">查询余额</button></div>
  </div>
</template>

<script>
import { ethers } from "ethers";
import { getList, postlist } from "../../request/api";

let provider = new ethers.providers.Web3Provider(window.ethereum);
export default {
  data() {
    return {
      val: null,
    };
  },
  methods: {
    reduce() {
      if (this.$store.state.count <= 0) {
        alert("已经是最少值了不能在减了");
      } else {
        this.$store.commit("reduce");
      }
    },
    increment() {
      this.$store.commit("increment");
    },
    balance() {
      const list = this.$store.state.walletInfo.account;
      provider.getBalance(list).then((balance) => {
        let String = ethers.utils.formatEther(balance);
        console.log(String);
      });
    },
    async sendRequest() {
      const res = await getList({});
      this.val = JSON.stringify(res.data);
    },
    async sendPost() {
      const res = await postlist({});
      console.log(res);
    },
  },
};
</script>

<style lang="less" scope>
.box {
  width: 50px;
  height: 30px;
  font-size: 15px;
  text-align: center;
}
</style>
<template>
  <div class="about">
    <button @click="reduce">-</button><span>{{ $store.state.count }}</span
    ><button @click="increment">+</button><br />
    <button @click="sendRequest">发送GET请求</button>
    <div>
      <span>返回结果</span><br /><textarea
        rows="10"
        cols="30"
        v-model="val"
      ></textarea>
    </div>
    <div>
      <input type="text" v-model="value" /><input
        type="text"
        v-model="value"
      /><button @click="sendPost">点击发送post请求</button>
    </div>
  </div>
</template>
<script>
import {getRequest,postRequest} from '../request/api'
import axios from "axios";
export default {
  data() {
    return {
      val: null,
      value: null,
    };
  },

  methods: {
    async sendRequest(){
      const res = await getRequest({});
      this.val=JSON.stringify(res.data)
      console.log(this.val)
    },
    async sendPost(){
      const res = await postRequest({});
      console.log(res)
    },
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
    reduce() {
      this.$store.commit("reduce");
      console.log(this.$store.state.count);
    },
    // sell() {
    //   axios
    //     .get(
    //       "api/market/sales"
    //     )
    //     .then((response) => {
    //       this.val = JSON.stringify(response.data);
    //     });
    // },
    // sort() {
    //   axios
    //     .post("api/user/follow", {
    //      followAddress: "0x80D79a2D29089442C3D8E4aF6b98080E59802d8c",
    //      userAddress: "0x6dbaca0d939efa084da29a2dd7ec9400db41e2a5"
    //     })
    //     .then((response) => {
    //       // this.value = JSON.stringify(response.data);
    //       this.value = response.data.userAddress

    //       console.log(response);
    //     });
    // },
  },
};
</script>
<style>
input {
  display: inline-block;
}
</style>
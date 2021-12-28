<template>
  <div class="home">
    <button @click="sendRequest">发送get请求</button>
   
  </div>
</template>

<script>
import {getRequest,postRequest} from '../request/api'
export default {
   methods:{
    async sendRequest(){
      let res = await getRequest({});
      console.log(res);
    }
  }
}
</script>

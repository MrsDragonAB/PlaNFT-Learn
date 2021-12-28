<template>
  <div class="home">
    <button @click="sent">发送请求</button>
  </div>
</template>

<script>
import {getList,post} from '../request/api.js'
export default {
  data(){
    return{
      rest:[]
    }
  }, 
  methods:{
    async sent(){
         let res = await getList({});
         console.log(res)
       }
  
  }
}
</script>

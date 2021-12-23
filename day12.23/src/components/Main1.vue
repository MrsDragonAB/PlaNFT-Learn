<template>
    <div class="about">
    <button @click="reduce">-</button><span>{{$store.state.count}}</span><button @click="increment">+</button>
    <button @click="sell">发送GET请求</button>
    <div><span>返回结果</span><br><textarea rows="10" cols="30" v-model="val"></textarea></div>
    <div><input type="text" v-model="value"/><input type="text" v-model="value"/><button @click="sort">点击发送post请求</button></div>

  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      val:null,
      value:null
      }
  },
 
  methods: {
    increment() {
       this.$store.commit('increment')
      console.log(this.$store.state.count)
    },
     reduce() {
       this.$store.commit('reduce')
      console.log(this.$store.state.count)
    },
    sell(){
      axios.get('http://localhost:3000/posts')
      .then(response =>{
        this.val = JSON.stringify(response.data)
      })
    },
    sort(){
      axios.post('http://localhost:3000/comments',{

      }).then(response => {
        this.value = JSON.stringify(response.data)
        
        console.log(response)
        
      })
    }

  }
}
</script>
<style>
input{
    display: inline-block;
}
</style>
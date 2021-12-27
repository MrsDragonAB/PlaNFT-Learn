<template>
  <div class="hello">
    <div class="sacle" >
      <ul  v-for="(list,index) in lists" :key="index">
      <div class="title">
        <img src="../assets/ranify.png" alt="" /><span>{{list.name}}</span><hr>
      </div>
      <div class="label"><span>Karin en el mundo</span></div>
      <div class="content">
        <div><span>Karin en Ostrovnoy </span></div>
        <div><span># 249046</span></div>
      </div>
      <div class="sacle-connect"><img :src="list.url" alt="" /></div>
      </ul>
    </div>
    <div>
     <el-row :gutter="20">
  <el-col :span="6" v-for="(list,index) in lists" :key="index"><div class="grid-content bg-purple"><div class="title">
        <img src="../assets/ranify.png" alt="" /><span>{{list.name}}</span><hr>
      </div>
      <div class="label"><span>Karin en el mundo</span></div>
      <div class="content">
        <div><span>Karin en Ostrovnoy </span></div>
        <div><span># 249046</span></div>
      </div>
      <div class="sacle-connect"><img :src="list.url" alt="" /></div></div></el-col> </el-row>  
</div>
<div><div class="demo-image__preview">
  <el-image 
    style="width: 100px; height: 100px"
    :src="url" 
    :preview-src-list="srcList">
  </el-image>
</div></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      url:require('../assets/sacle.jpg'),
      srcList:[require('../assets/sacle.jpg')],
      lists:[
        {
          name:'Rinkeby',
          url:require('../assets/list.png')

        },
        {
          name:'adasd',
          url:require('../assets/list.png')
        },
        {
          name:'fdgnkj',
          url:require('../assets/list.png')
        },
        {
          name:'ksdkfjdk',
          url:require('../assets/list.png')
        },
        {
          name:'asfasf',
          url:require('../assets/list.png')
        },
        {
          name:'ajshflas',
          url:require('../assets/list.png')
        }
        
      ]

    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("//unpkg.com/element-ui@2.15.7/lib/theme-chalk/index.css");
.title{
  text-align: center;
}
.title img {
  width: 22px;
  height: 22px;
}
.title hr{
  border-color: 	Snow;
  width: 250px;
}
.sacle-connect img {
  margin: 5px 0;
  border: 1px solid red;
  width: 270px;
  height: 270px;
}
.sacle {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-wrap: wrap;
  width: 100%;
}

.label{
text-align: left;

}
.label span{
  
  color: #c1c1c1;
}
.content{
  display: flex;
  justify-content: space-between;
}

.sacle :hover {
  cursor: pointer;
  position: relative;
  /* 第一种动画效果 */
  transform: translateY(-10px);
  /* 第二种动画效果 */
  /* animation: myfirst 1s; */
  box-shadow: 0 3px 18px rgb(0 0 0 / 10%);
}
/* @keyframes myfirst {
  from {
    bottom: 0px;
  }
  to {
    bottom: 10px;
  }
} */
</style>

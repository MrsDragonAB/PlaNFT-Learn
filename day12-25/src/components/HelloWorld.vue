<template>
  <div>
    <div class="home">
       <el-container>
         <div class="nav">
        <el-aside style="width:250px">
      <el-row class="box">
        <el-col :span="12" class="box-size">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            text-color="#000"
            active-text-color="#ffd04b"
          >
            <el-menu-item
              v-for="(site, index) in sites"
              :key="index"
              @click="text(site)"
            >
              <span slot="title">{{ site.val }}</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row></el-aside
        >
        </div>
    
    <div class="connect">
      <el-main><router-view /></el-main>
    </div>
    </el-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sites: [
        {
          val: "页面一",
          url: "main1",
        },
        {
          val: "页面二",
          url: "main2",
        },
        {
          val: "页面三",
          url: "main3",
        },
        {
          val: "页面四",
          url: "main4",
        },
      ],
    };
  },
  methods: {
    text(site) {
      this.$router.push(site.url);
    },
  },
};
</script>
<style  scoped>
.nav{
   width: 250px; 
  border: rgb(218, 213, 213) 1px solid;
}
.box {
  
  width: 150px;
  margin: 0 auto;
}
.box-size {
  height: 600px;
}
.el-menu{
  border: none;
}
li {
    width: 150px;
    text-align: center;
    list-style: none;
    margin: 75px 0;
    border: 1px solid Silver;
}

</style>



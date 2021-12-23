<template>
  <div>
    <el-container
      ><el-header class="headerBox">Header</el-header>

      <el-container>
        <el-aside width="20%" class="navBox"
          ><el-row class="tac">
            <el-col :span="12">
              <el-menu class="el-menu-vertical-demo">
                <el-menu-item
                  @click="text(site)"
                  v-for="(site, index) in sites"
                  :key="index"
                >
                  <span slot="title">{{ site.val }}</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row></el-aside
        >
        <el-main width="80%" class="contentBox"
          ><router-view /></el-main
        >
      </el-container>
    </el-container>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      sites: [
        {
          val: "页面一",
          url:'main1'
        },
        {
          val: "页面二",
          url:'main2'
        },
        {
          val: "页面三",
          url:'main3'
        },
        {
          val: "页面四",
          url:'main4'
        },
      ],
    };
  },
  methods: {
    text(site) {
     
      this.$router.push(site.url);
 
    },
 
  },
}
</script>
<style scoped>
@import url("//unpkg.com/element-ui@2.15.7/lib/theme-chalk/index.css");
.headerBox {
  border: 1px solid black;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.navBox {
  background-color: #d3dce6;
  color: #333;
  text-align: center;

  border: 1px solid black;
}
.contentBox {
  border: 1px solid black;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-menu-item{
  width: 100%;
}
</style>

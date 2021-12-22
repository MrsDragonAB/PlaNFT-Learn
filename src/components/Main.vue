<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
         
        >
          <el-submenu index="1">
            <template slot="title">
              <span>导航一</span>
            </template>
          </el-submenu>
          <el-menu-item index="2">
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <router-view/>
  </div>
</template>
<script>
export default {
  
    methods:{

        
    }
}
</script>
<style scoped>
@import url("//unpkg.com/element-ui@2.15.7/lib/theme-chalk/index.css");
</style>
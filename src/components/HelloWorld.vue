<template>
<div>
  <div>
  <el-container
    ><el-header class="headerBox">Header</el-header>

    <el-container>
      <el-aside width="20%" class="navBox"
        ><ul>
          <li
            v-for="(item, index) in items"
            :key="index"
            @click="button(index)"
            :class="{ active: index == isActive }"
          >
            {{ item.val }}
          </li>
        </ul></el-aside
      >
      <el-main width="80%" class="contentBox"
        ><ul>
          <li v-for="(item, index) in array" :key="index">{{ item.val }}</li>
        </ul></el-main
      >
    </el-container>
  </el-container>
  </div>
  <div><button @click="shose()">任务二</button></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 0,
      items: [
        {
          val: "页面一",
        },
        {
          val: "页面二",
        },
        {
          val: "页面三",
        },
        {
          val: "页面四",
        },
      ],
      site: [
        {
          val: "Vuex用例",
        },
        {
          val: "页面二内容",
        },
        {
          val: "页面三内容",
        },
        {
          val: "页面四内容",
        },
      ],
      array: [],
    };
  },
  created() {
    this.array.push(this.site[0]);
  },
  methods: {
    button(index) {
      this.array = [];
      this.isActive = index;
      this.array.push(this.site[index]);
    },
    shose(){
      this.$router.push('/Main')
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
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

li {
  padding: 10px 0;
  margin-bottom: 10px;
  margin-right: 25px;
  border-bottom: 1px solid #e0e0e0;
  list-style: none;
}
</style>

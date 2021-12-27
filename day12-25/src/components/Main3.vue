<template>
  <div>
    <!-- 查询 -->
    <div>
      <el-form
        :inline="true"
        :model="formInline"
        ref="formInline"
        class="demo-form-inline"
      >
        <el-form-item label="Title" prop="user">
          <el-input v-model="formInline.user" placeholder="Title"></el-input>
        </el-form-item>
        <el-form-item label="sortBy" prop="region">
          <el-input v-model="formInline.sortBy" placeholder="sortBy"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="query()">查询</el-button>
          <el-button @click="clear('formInline')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格 -->
    <div>
      <el-table
        style="width: 100%"
        :data="
          record.slice((currentPage - 1) * pagesize, currentPage * pagesize)
        "
      >
        <el-table-column prop="userAddress" label="用户地址" width="180">
        </el-table-column>
        <el-table-column prop="chainSymbol" label="链标识" width="180">
        </el-table-column>
        <el-table-column prop="collectNum" label="收藏数" width="180">
        </el-table-column>
        <el-table-column prop="lastTraded" label="过期时间" width="180">
        </el-table-column>
        <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="500"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: [],
      },
      record: [],
      currentPage: 1,
      page: 1,
      pagesize: 4,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const params = {
        page: this.page,
        pageSize: this.pageSize,
        title: "",
        sortBy: 1,
      };
      axios.get("api/market/sales", params).then((response) => {
        this.record = response.data.data.content;
        console.log(this.record);
      });
    },
    handleSizeChange() {
      this.pagesize = this.currentPage;
    },
    //点击第几页
    handleCurrentChange(currentPage) {
      //   this.currentPage = currentPage;
      this.currentPage = currentPage;
      this.getData();
    },
    clear(id) {
      this.$refs[id].resetFields();
    },
    query() {
      axios.get("api/market/sales").then((response) => {
        this.formInline.user = JSON.stringify(response.data.data.content);
        console.log(this.formInline.user );
        
      });
    },
  },
};
</script>
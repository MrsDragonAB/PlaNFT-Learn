<template>
  <div>
    <div class="from-box">
      <div></div>
      <div class="chainBox">
        <div class="select-box">
          <div class="selectBoxImg"></div>
          <el-select v-model="formInline.region" placeholder="ALL Chains">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </div>
      </div>
      
        <div class="select-box">
          <el-select  placeholder="fsefwsfwsfwe" style="width:190px">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </div>
      
      <div>
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </div>
    </div>
    <div class="shopping">
      <div class="content">
        <div class="order-list">
          <div class="item-box" v-for="(list, index) in lists" :key="index">
            <div class="item">
              <div class="chainBox">
                <img src="../../assets/ranify.png" alt="" class="chainLogo" />
                <span class="chainName">Rinkeby</span>
              </div>
              <div class="titleBox">
                <span class="topt1">cp punks</span>
              </div>
              <div class="titleBox">
                <span>Cigar punk</span>
                <span>#5</span>
              </div>
              <div class="img-box">
                <div class="img">
                  <img src="../../assets/list.png" alt="" class="el-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          name: "Rinkeby",
          url: require("../../assets/list.png"),
        },
        {
          name: "adasd",
          url: require("../../assets/list.png"),
        },
        {
          name: "fdgnkj",
          url: require("../../assets/list.png"),
        },
        {
          name: "ksdkfjdk",
          url: require("../../assets/list.png"),
        },
        {
          name: "asfasf",
          url: require("../../assets/list.png"),
        },
        {
          name: "ajshflas",
          url: require("../../assets/list.png"),
        },
      ],
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="less" scoped>
.from-box {
  display: flex;
  align-items: center;
  margin: 0 0 61px;
  .select-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    width: 261px;
    height: 48px;
    border: 1px solid #dcdcdc;
    border-radius: 6px;
    /deep/.el-input__inner {
      border: none;
      line-height: 48px;
      text-align: center;
    }
  }
  .chainBox {
    .select-box {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      width: 261px;
      height: 48px;
      border: 1px solid #dcdcdc;
      border-radius: 6px;
      .selectBoxImg {
        position: absolute;
        top: 12px;
        left: 20px;
        min-width: 24px;
        max-width: 24px;
        height: 24px;
      }
      /deep/.el-input__inner {
        border: none;
        line-height: 48px;
        text-align: center;
      }
    }
    .el-select {
      width: 100%;
      .el-input {
        width: 100%;
        position: relative;
      }
    }
  }
}

.shopping {
  width: 100%;
  .content {
    margin: 0 auto;
    max-width: 1300px;
    padding: 0 30px;

    .order-list {
      max-width: 1300px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .item-box {
        max-width: 1300px;
        display: flex;
        justify-content: center;
        // margin: 0 48px;
        width: 33.3%;
        margin-bottom: 100px;
        .item {
          width: 300px;
          background: skyblue;
          border-radius: 2px;
          padding: 10px 12px 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            transform: translateY(-10px);
            box-shadow: 0 3px 18px rgb(0 0 0 / 10%);
          }
          .chainBox {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 0 10px;
            border-bottom: 1px solid #f3f3f3;
            margin: 0 0 9px;
            .chainLogo {
              width: 23px;
              height: 23px;
              border-radius: 50%;
              margin-right: 7px;
              & .chainName {
                font-size: 14px;
                color: #696969;
                line-height: 18px;
                font-weight: 500;
              }
            }
          }
          .titleBox {
            height: 19px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 7px 0;
            font-size: 14px;
            font-weight: 700;
            .topt1 {
              color: #c1c1c1;
            }
          }
          .img-box {
            width: 100%;
            height: 276px;
            .img {
              width: 100%;
              height: 100%;
              .el-img {
                width: 300px;
                height: 276px;
              }
            }
          }
        }
      }
      .item-box:nth-child(3n + 1) {
        justify-content: start;
      }
      .item-box:nth-child(3n) {
        justify-content: flex-end;
      }
    }
  }
}
@media screen and (max-width: 1260px) {
  .shopping {
    .content {
      .order-list {
        min-width: 750px;
        padding: 0 0 100px;
        .item-box:nth-child(3n + 1) {
          justify-content: center;
        }
        .item-box:nth-child(3n) {
          justify-content: center;
        }
        .item-box {
          width: 50%;
          display: flex;
          justify-content: center;
          margin-bottom: 50px;
        }
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .shopping {
    .content {
      .order-list {
        max-width: 100%;
        min-width: 100%;
        padding: 0 0 100px;
        .item-box:nth-child(3n + 1) {
          justify-content: center;
        }
        .item-box:nth-child(3n) {
          justify-content: center;
        }
        .item-box {
          width: 100%;
          margin: 0 0 50px 0;
        }
      }
    }
  }
}
</style>
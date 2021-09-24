<template>
  <div class="box">
    <div class="Footer">
      <div class="top">
        <div class="left">
          <div class="top">下载QQ音乐客户端</div>
          <!-- pc版、mac版 -->
          <div class="bottom">
            <a href="">
              <svg class="icon" aria-hidden="true">
                <use
                  xlink:href="#icon-PC
"
                ></use>
              </svg>
              <p>PC版</p></a
            >
            <a href="">
              <svg class="icon" aria-hidden="true">
                <use
                  xlink:href="#icon-Mac
"
                ></use>
              </svg>
              <p>MAC版</p></a
            >
            <a href="">
              <svg class="icon" aria-hidden="true">
                <use
                  xlink:href="#icon-Androidban
"
                ></use>
              </svg>
              <p class="android">Android版</p></a
            >
            <a href="">
              <svg class="icon" aria-hidden="true">
                <use
                  xlink:href="
#icon-iphone-copy
"
                ></use>
              </svg>
              <p class="iphone">iPhone版</p></a
            >
          </div>
        </div>
        <!-- 上面的中间部分 特色产品 -->
        <div class="middle_top">
          <p class="product_title">特色产品</p>
          <!-- 存放图标 -->
          <div class="icon_top_middle">
            <a href="">
              <svg class="icon" aria-hidden="true">
                <use
                  xlink:href="#icon-quanminkge
"
                ></use>
              </svg>
              <p>全民K歌</p></a
            >
            <a href="">
              <svg class="icon" aria-hidden="true">
                <use
                  xlink:href="#icon-chaojifuwuhao
"
                ></use>
              </svg>
              <p class="superSound">Super Sound</p></a
            >
            <a href="">
              <svg class="icon" aria-hidden="true">
                <use
                  xlink:href="#icon-Play
"
                ></use>
              </svg>
              <p class="qplay">QPlay</p></a
            >
            <a href="">
              <svg class="icon" aria-hidden="true">
                <use
                  xlink:href="
#icon-zhibobofangshexiangjiguankanmianxing
"
                ></use>
              </svg>
              <p class="fanPlay">Fan直播伴侣</p></a
            >
          </div>
        </div>
        <!-- 右边部分 合作链接 -->
        <div class="right">
          <p>合作链接</p>
          <div class="href_title">
            <div
              class="for_href_title"
              v-for="(item, index) in 15"
              :key="index"
            >
              <a href="">腾讯视频</a>
            </div>
          </div>
        </div>
      </div>

      <!-- 开发平台 中间部分  （从上往下看） -->
      <div class="middle">
        <div class="middle_left">
          <p class="p1">开放平台</p>
          <p class="p2"><span>QQ音乐开发平台</span><span>腾讯音乐人</span></p>
        </div>
        <!-- TM集团官网 -->
        <div class="middle_content">
          <p class="p1">TM集团官网</p>
          <p class="p2">腾讯音乐</p>
        </div>
      </div>
      <!-- 底部的关于腾讯介绍 -->
      <div class="footer_content">
        <!-- 导航 -->
        <div class="p1">
          <!-- 循环遍历 -->
          <a href="">关于腾讯</a>
          <span v-for="(item, index) in 10" :key="index">
            <a href="">|关于腾讯</a>
          </span>
        </div>
        <div class="p2">
          <span>Copyright © 1998 - 2021 Tencent. All Rights Reserved.</span>
        </div>
        <div class="p3">
          <span>腾讯公司</span>
          <span><a href="">版权所有</a></span>
          <span><a href="">|营业执照</a></span>
          <span>|网络文化经营许可证:</span>
          <span><a href="">粤网文|2020|3396-159号</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/font_ali_index/iconfont.js";
export default {
  name: "Footer",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang='less' scoped>
.box {
  height: 120%;
  width: 100%;
  margin-top: 5%;
  background-color: #333333;
  padding-top: 70px;
  .Footer {
    height: 100%;
    width: 100%;
    background-color: #333333;
    // 下载QQ客户端
    .top {
      display: flex;
      height: 30%;
      width: 100%;
      color: #7f7f7f;
      background-color: #333333;
      .left {
        color: #7f7f7f;
        height: 100%;
        width: 40%;
        margin-left: -10px;
        background-color: #333333;
        .top {
          color: #7f7f7f;
          background-color: #333333;
          height: 20px;
          width: 200px;
          margin-left: 55px;
        }
        .bottom {
          display: flex;
          margin-top: 7%;
          a {
            color: #7f7f7f;
            margin-left: 50px;
            .android {
              margin-left: -10px;
            }
            .iphone {
              margin-left: -10px;
            }
            p {
              margin-top: 15px;
            }
          }
        }
      }
      // 特色产品
      .middle_top {
        color: #7f7f7f;
        height: 100%;
        width: 35%;
        background-color: #333333;
        margin-left: -6%;
        .product_title {
          margin-left: 50px;
        }
        .icon_top_middle {
          color: #7f7f7f;
          display: flex;
          margin-top: 8%;
          a {
            color:#7f7f7f;
            margin-left: 50px;
            .android {
              margin-left: -10px;
            }
            .iphone {
              margin-left: -10px;
            }
            p {
              margin-top: 15px;
            }
            .superSound {
              margin-left: -17px;
            }
            .qplay {
              margin-left: 3px;
            }
            .fanPlay {
              margin-left: -20px;
            }
          }
        }
      }
      // 合作链接
      .right {
        color: #7f7f7f;
        height: 100%;
        width: 25%;
        background-color: #333333;
        margin-left: 5%;
        // 合作链接标题
        p {
          margin-left: 39px;
        }
        .href_title {
          display: flex;
          flex-wrap: wrap;
          margin-top: 6%;
          .for_href_title {
            a {
              margin-left: 40px;             
              display: inline-block;
              margin-top: 20px; 
            }
            a:link {
              color: #7f7f7f;
            }
            a:visited {
              color: #7f7f7f;
            }
            a:hover {
              color: #31c27c;
              cursor: pointer;
            }
            a:active {
              color: #31c27c;
            }
          }
        }
      }
    }
    // 从上往下看 中间部分
    .middle {
      color: #7f7f7f;
      height: 30%;
      width: 100%;
      display: flex;
      margin-top: 5%;
      .middle_left {
        height: 80%;
        width: 20%;
        // background-color:#999;
        margin-left: 5%;
        .p2 {
          margin-top: 10%;
        }
      }
      .middle_content {
        height: 80%;
        width: 20%;
        // background-color:#999;
        margin-left: 12%;
        .p2 {
          margin-top: 10%;
        }
      }
    }
    // 底部介绍
    .footer_content {
      height: 25%;
      width: 50%;
      color: #7f7f7f;
      // background-color:red;
      margin-left: 25%;
      font-size: 13px;
      text-align: center;
      .p1 {
        color: #7f7f7f;
        a {
          margin-left: 5px;
        }
      }
      .p2 {
        margin-top: 20px;
      }
      .p3 {
        margin-top: 15px;
      }
      a:link {
        color: #7f7f7f;
      }
      a:visited {
        color: #7f7f7f;
      }
      a:hover {
        color: #31c27c;
        cursor: pointer;
      }
      a:active {
        color: #31c27c;
      }
    }
  }
  .icon {
    color: #7f7f7f;
    width: 3em;
    height: 3em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
<!--  
  坑：
  ---1.注意表单必须绑定v-model，不然会输入框无法进行输入
     2.绑定图片的时候，图片的路径需要用require()引入
 -->

<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <!-- 最左边的qq音乐图片 -->
      <div class="left_img">
        <img src="@/assets/musicqq.png" alt="qq图片" />
      </div>
      <!-- 中间导航菜单 -->
      <el-menu>
        <!-- 之间的间距为60 -->
        <div @click="changColor">
          <el-menu-item index="1">音乐馆</el-menu-item>
        </div>
        <div @click="changColor">
          <el-menu-item index="1">我的音乐</el-menu-item>
        </div>
        <div @click="changColor">
          <el-menu-item index="3">客户端</el-menu-item>
        </div>
        <div @click="changColor">
          <el-menu-item index="4">开发平台</el-menu-item>
        </div>
        <div @click="changColor">
          <el-menu-item index="5">VIP</el-menu-item>
        </div>
      </el-menu>
      <!-- 右侧表单 -->
      <el-input
        v-model="input"
        suffix-icon="el-icon-search"
        placeholder="搜索音乐、MV、歌单、用户"
      >
      </el-input>
      <!-- 登录按钮 -->
      <div class="login">
        <a href="/login">登录</a>
      </div>
      <!-- 开通按钮 -->
      <el-dropdown placement="bottom">
        <el-button type="primary">
          开通VIP<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>绿钻豪华版</el-dropdown-item>
          <el-dropdown-item>开通付费包</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- 充值 -->
      <el-dropdown placement="bottom">
        <el-button type="primary" class="rechargeTop">
          充值<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>购买乐币</el-dropdown-item>
          <el-dropdown-item>充值饭票</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <!-- body -->
    <el-main>
      <!-- 第二阶导航 -->
      <div class="two_navigator">
        <div><a href="#">首页</a></div>
        <div><a href="#">歌手</a></div>
        <div><a href="#">新碟</a></div>
        <div><a href="#">排行榜</a></div>
        <div><a href="#">分类歌单</a></div>
        <div><a href="#">电台</a></div>
        <div><a href="#">MV</a></div>
        <div><a href="#">数字专辑</a></div>
        <div><a href="#">票务</a></div>
      </div>
      <!-- 标题 -->
      <div class="son_title">歌单推荐</div>
      <!-- 歌单推荐列表 -->
      <div class="son_title_navigator">
        <div><a href="#">为你推荐</a></div>
        <div><a href="#">情歌</a></div>
        <div><a href="#">纯音</a></div>
        <div><a href="#">萨克斯</a></div>
        <div><a href="#">官方歌单</a></div>
        <div><a href="#">网络歌曲</a></div>
      </div>
      <!-- 轮播图 -->
      <el-carousel type="card" height="286px" :autoplay="false">
        <el-carousel-item v-for="(item, index) in imgData" :key="index">
          <div>
            <div>
              <img :src="item.url" style="width:450px;height:286px;"/>
              <!-- 放图片文字说明   -->
              <div class="carousel_recommend">
                <!-- 具体介绍 -->
                <div>欧美｜解锁盐系沙棉雾感女嗓</div>
                <!-- 播放量 -->
                <div>播放量：10.1万</div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
      <!-- 新歌首发 -->
      <div id="newSon">
        <div class="son_title hr_title">新歌首发</div>
        <!-- 歌单推荐列表 -->
        <div class="son_title_navigator">
          <!-- <a class="all_play">全部播放</a> -->
          <div><a href="#">最新</a></div>
          <div><a href="#">内地</a></div>
          <div><a href="#">港台</a></div>
          <div><a href="#">欧美</a></div>
          <div><a href="#">韩国</a></div>
          <div><a href="#">日本</a></div>
        </div>
        <!-- 全部播放 -->
        <a href="#" class="all_play" style="vertical-align: center">
          <img
            src="@/assets/play_music.png"
            style="hegiht: 30px; width: 30px"
          />
          <span class="all_play_text">全部播放</span>
        </a>

        <!-- 新歌首发内容 -->
        <div class="new_son_content">
          <div
            class="new_son_content_detail"
            v-for="(item, index) in newsongDebut"
            :key="index"
          >
            <!-- 图片 -->
            <div class="new_son_img">
              <img :src="item.url" style="height: 110px" />
            </div>
            <!-- 介绍 -->
            <div class="new_son_introduce">
              <!-- 标题 -->
              <div class="new_son_title" style="width: 100%">这样就很好</div>
              <!-- 歌手 -->
              <div class="new_son_singer" style="width: 100%">周杰伦</div>
            </div>
          </div>
        </div>


      </div>
      <!-- 精彩推荐 -->
      <div class="wonderful_recommend">
        <!-- 标题 -->
        <div class="son_title">精彩推荐</div>
        <!-- 图片 轮播图  -->
        <div>
          <el-carousel
            height="280px"
            loop
            autoplay
            :interval="2000"
            style="width: 100%; background-color: #f4f4f4"
          >
            <div >
              <el-carousel-item
                style="width: 100%"
                class="wonderful_recommend_loop"
              >
                <!-- 图片 -->
                <div v-for="(item, index) in wonderfulRecommendData" :key="index">
                  <img
                    :src="item.url"
                    alt="girl1"
                    style="width: 650px;height:250px; margin-left: 25px"
                  />
                </div>                
              </el-carousel-item>
            </div>
          </el-carousel>
        </div>
      </div>
      <Neopterin></Neopterin>
      <Ranking></Ranking>
      <Mv></Mv>
      <Footer></Footer>
    </el-main>
    <!-- 底部 -->
    <!-- <el-footer> </el-footer> -->
  </el-container>
</template>

<script>
import Vue from "vue";
import Neopterin from "../components/index/neopterin.vue";
import Ranking from "../components/index/ranking.vue";
import Mv from "../components/index/MV.vue";
import Footer from "../components/index/footer.vue";
export default {
  name: "index",
  data() {
    return {
      imgData: [
        { url: require("../assets/1.jpg") },
        { url: require("../assets/2.jpg") },
        { url: require("../assets/3.jpg") },
        { url: require("../assets/6.jpg") },
        { url: require("../assets/5.jpg") },
      ],
      input: "",
      requestURL_debut:'findDebut',
      params:{
        //请求第几页
        currentPage:1,
        //每页的条数
        pageSize:9
      },
      // 用于存放新歌首发内容
      newsongDebut:[],
      requestURL_wonderful:'findWonderful',
      wonderfulRecommendData:[],
      params_wonderful:{
          currentPage:1,
          pageSize:2
      }
    };
  },
  components: {
    Neopterin,
    Ranking,
    Mv,
    Footer,
  },
  mounted() {
    // 异步请求新歌首发
    this
        .RequestMessage("/spring/"+this.requestURL_debut,this.params)
        .then((res) => {                      
            //调用外部工具类对url进行require包裹
            // this.HandlerUrl(res)   这里不用require可以正常输出，用来反而无法输出，不知道怎么回事，反正其他地方是需要被require包裹的。
            // 此时的res已经是通过url包裹了 打印输出以下
            console.log("首发:")
            console.log(res)
            this.newsongDebut=res.data.list
        })
        .catch((err)=>{
            console.log(err)
        })

    // 请求精彩推荐
    this
        .RequestMessage("/spring/"+this.requestURL_wonderful,this.params_wonderful)
        .then((res) => {        
            console.log("精彩:")                         
            console.log(res)
            this.wonderfulRecommendData=res.data.list
        })
        .catch((err)=>{
            console.log(err)
        })
    
  },
  methods: {
    changColor(e) {
      console.log(e);
      // 改变背景颜色
      e.target.style.backgroundColor = "#32CD32";
      //改变字体颜色
      e.target.style.color = "white";
    },
  },
};
</script>

<style lang='less'  scoped>
.el-container {
  height: 100%;
  background-color: rgb(94, 163, 243);
}
.el-header {
  height: 16% !important;
  background-color: rgb(253, 253, 253);
  display: flex;
  align-items: center;
}
.el-header .left_img {
  margin-left: 25px;
}
.el-menu {
  list-style: none;
  display: flex;
  font-size: 20px;
}
.el-menu .el-menu-item:hover {
  cursor: pointer;
  color: rgb(119, 240, 119);
}
.el-menu .el-menu-item {
  margin-left: 20px;
  font-size: 18px;
}
.el-menu .el-menu-item:hover {
  background-color: white !important;
}

/* 头部中间导航菜单的div */
.el-header .el-menu div {
  height: 100px;
  display: flex;
  align-items: center;
}
.el-header .el-menu div:visited {
  background-color: rgb(89, 224, 89);
}
.el-header .el-input {
  width: 245px;
  font-size: 15px;
  border-style: 1px solid black;
}
.login {
  font-size: 15px;
  margin-left: 10px;
  font-weight: bold;
  font-family: fantasy;
}
.login a:link {
  color: black;
}
.login a:visited {
  color: black;
}
.login a:hover {
  color: rgb(104, 201, 91);
  cursor: pointer;
}
.login a:active {
  color: black;
}
.el-dropdown {
  margin-left: 15px;
}
.el-dropdown .el-button {
  width: 150px;
  background-color: rgb(21, 196, 114);
}
.rechargeTop {
  width: 100% !important;
}

.el-main {
  height: 2000px !important;
  background-color: #f3f3f3;
  padding: 0px;
  /* overflow-x: hidden;
  overflow-y: visible; */
  overflow-x: hidden;
}
.two_navigator {
  border-top: 1px solid rgb(207, 201, 201);
  border-bottom: 1px solid rgb(207, 201, 201);
  height: 57px;
  width: 100%;
  background-color: white;
  display: flex;
  /* 设置水平居中 */
  justify-content: center;
  /* 设置垂直居中 */
  align-items: center;
}
.two_navigator div {
  margin-left: 45px;
}
.son_title {
  font-size: 30px;
  font-family: fantasy;
  font-weight: bold;
  letter-spacing: 18px;
  text-align: center;
  margin-top: 35px;
}
.hr_title {
  border-top: 1px solid rgb(207, 201, 201);
}
.son_title_navigator {
  display: flex;
  justify-content: center;
  margin-top: 23px;
}
.son_title_navigator div {
  margin-left: 60px;
}
.el-carousel {
  margin-top: 30px;
}
.el-carousel__item {
  overflow: visible !important;
}

.el-carousel__indicators {
  margin: 74px !important;
}
.el-carousel--horizontal {
  overflow-x: visible;
}
.carousel_recommend {
  height: 50px;
  width: 450px;
  background-color: white;
}
.all_play {
  padding: 10px 23px;
  border: 1px solid rgb(153, 147, 147);
  border-radius: 2px;
  /* margin:-20px 10px; */
  display: inline-block;
  position: relative;
  top: -35px;
  left: 25px;
}
.all_play_text {
  display: inline-block;
  position: relative;
  top: -7px;
}
.new_son_content {
  height: 360px;
  width: 100%;
  background-color: #f3f3f3;
  display: flex;
  flex-wrap: wrap;
}
.new_son_content_detail {
  margin-left: 40px;
  height: 110px;
  width: 400px;
  background-color: #f3f3f3;
  display: flex;
}
.new_son_introduce {
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.wonderful_recommend {
  height: 80%;
  background-color: #f3f3f3;
}
/* 精彩推荐图片 */
.wonderful_recommend_loop {
  display: flex;
  justify-content: center;
  background-color: #f4f4f4;
}
.el-footer {
  height: 100px !important;
  background-color: aquamarine;
}
</style>
<style lang='less'>
.el-main {
  ul.el-carousel__indicators.el-carousel__indicators--horizontal {
    top: 75%;
    left: 45%;
    // 对轮播图的下面的横线变换成圆形
    .el-carousel__button {
      width: 13px;
      height: 12px;
      border-radius: 50%;
      margin-left: 20px;
    }
  }
  .el-carousel {
    .el-carousel__container {
      margin-left: 10% !important;
    }
    .el-carousel__button {
      background-color: #e3e3e3;
    }
    .el-carousel__button:hover {
      background-color: #b1b1b1;
    }
  }
}
</style>
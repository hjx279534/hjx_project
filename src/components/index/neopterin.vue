<!-- 排行榜页面 -->
<template>
  <div class="box" @mouseleave="mouseLeave" @mouseenter="mouseEnter">
    <div class="neopterin">
      <div class="title">新碟首发</div>
      <div class="navgator_content">
        <a href="#">内地</a>
        <a href="#">港台</a>
        <a href="#">欧美</a>
        <a href="#">韩国</a>
        <a href="#">日本</a>
        <a href="#">其他</a>
      </div>
      <!-- 存放新碟首发的内容 -->
      <div class="container">
        <div
          class="for_imgContent"
          v-for="(item, index) in 2"
          :key="index"
          :id="index"
        >
          <!-- 图片内容 -->
          <div class="all_img_content">
            <!-- 放单独的图片 -->
            <div
              class="single_img_content"
              v-for="(item, index) in neopterinData"
              :key="index"
            >
              <!-- 图片内容 -->
              <div class="only_img">
                <img :src="item.url" alt="girl" />
              </div>
              <!-- 每张图片的文本描述 -->
              <div class="text_description">
                <!-- 歌名 -->
                <div class="sont_title">时光万年</div>
                <!-- 歌手 -->
                <div class="singer">黄雅莉</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 存放底部的切换原点 -->
      <div class="footer_change_circle">
        <span id="0" @click="getCircleId" class="neopterin_span"></span>
        <span id="1" @click="getCircleId" class="neopterin_span"></span>
      </div>

      <!-- 左右切换的< 和 >   -->
      <div class="left_fit" @click="leftFit">
        <img src="@/assets/left_switch.png" alt="left" />
      </div>
      <div class="right_fit" @click="leftFit">
        <img src="@/assets/right_switch .png" alt="right" />
      </div>
    </div>
  </div>
</template>

<script>
var i = 0;
var count = 0;
var index = 0;
var imageIndex = 0;
export default {
  name: "Neopterin",
  data() {
    return {
      //标记位，用于记录当前显示在主页的图片，0：代表第一张图片显示在主页。0:代表第1页
      flag: 0,
      circle_color:{
        original:'#e1e1e1',//点击之前的颜色
        hover:'#afafaf',//点击之后的颜色
      },
      params:{
        currentPage:1,
        pageSize:10
      },
      //用于存放新碟首发的内容
      neopterinData:[],
      //请求url
      requestURL:'findDisc',
    };
  },
  components: {},
  methods: {
    // 鼠标离开该组件的事件
    mouseLeave(e) {
      $(function () {
        $(".left_fit").animate({ left: "-200px" });
        $(".right_fit").animate({ right: "-200px" });
      });
    },
    // 鼠标进入该组件的事件
    mouseEnter() {
      $(".left_fit").animate({ left: "0px" });
      $(".right_fit").animate({ right: "0" });
    },
    // 左点击
    leftFit() {
      if (count > 1) {
        count = 0;
      }
      if (count == 0) {
        $(".container").animate({ left: "-100%" });
        // 图片向左移动flag++
        this.flag++;
        $(".neopterin_span").css("background-color", this.circle_color.original);
        $(".neopterin_span").eq(this.flag).css("background-color", this.circle_color.hover);
        console.log("hhahhah")
      }
      if (count == 1) {
        $(".container").css("left", "0%");
        // 图片向右移动flag--
        this.flag--;
        $(".neopterin_span").css("background-color", this.circle_color.original);
        $(".neopterin_span").eq(this.flag).css("background-color", this.circle_color.hover);
      }
      count++;
    },
    // 右点击
    rightFit() {
      if (count > 1) {
        count = 0;
      }
      if (count == 0) {      
        $(".container").animate({ left: "-100%" });
        this.flag++;
        $(".neopterin_span").css("background-color", this.circle_color.original);   //当使用jquery时，当组件合并时，页面上所有的span元素均会受影响 这点要注意
        $(".neopterin_span").eq(this.flag).css("background-color", this.circle_color.hover);
        // console.log("woowoowoo")
      }
      if (count == 1) {
        $(".container").animate({ left: "0%" });
        this.flag--;
        $(".neopterin_span").css("background-color", this.circle_color.original);
        $(".neopterin_span").eq(this.flag).css("background-color", this.circle_color.hover);
      }
      count++;
      console.log("完毕后count=" + count);
    },
    // 用于获取下方circle的id值
    getCircleId(e) {
      index = e.target.id;
      //同步circle的颜色变化
      $(".neopterin_span").css("background-color", this.circle_color.original);
      $(".neopterin_span").eq(index).css("background-color",this.circle_color.hover);

      //获取当前展示图片的id  ----for_imgContent
      imageIndex = $(".for_imgContent").eq(this.flag)[0].id;
      
      //将当前点击circle的id和图片的id作比较
      if (index - imageIndex > 0) {
        //contatiner向左移动
        $(".container").css("left", "-100%");       
        // $(".container").css("left","(-100%)*(index-imageIndex)")  因为css不支持表达式，所以该句无效果
        this.flag = index;        
      } else if (index - imageIndex < 0) {
        $(".container").css("left", "0%");
        // $(".container").css("left","(100%)*(index-imageIndex-1)")  因为css不支持表达式，所以该句无效果        
        this.flag = index;
      }
    },
  },
  mounted() {
    // 初始化
    $(".neopterin_span").eq(0).css("background-color", this.circle_color.hover);
    this.flag=0;

     console.log("hello:~~~~~~~")
     // 新碟首发
    this
        .RequestMessage("/spring/"+this.requestURL,this.params)
        .then((res) => {        
            console.log("新碟:")                         
            console.log(res)
            // this.HandlerUrl(res)
            this.neopterinData=res.data.list
        })
        .catch((err)=>{
            console.log(err)
        })
  },
};
</script>

<style lang='less' scoped>
.box {
  border: 1px solid white;  
  height: 160%;
  width: 100%;
  background-color: #f3f3f3;
  .neopterin {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    .title {
      letter-spacing: 18px;
      font-size: 30px;
      text-align: center;
    }
    .navgator_content {
      display: flex;
      justify-content: center;
      height: 10%;
      a {
        font-size: 16px;
        margin: 24px;
      }
    }
    .for_imgContent {
      height: 100%;
      width: 50%;
      float: left;
      .all_img_content {
        height: 80%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        background-color: #f3f3f3;
        .single_img_content {
          width: 18%;
          height: 45%;
          background-color: #f3f3f3;
          margin-left: 20px;
          .only_img {
            img {
              height: 250px;
              width: 100%;
            }
          }
        }
      }
    }

    .footer_change_circle {
      position: absolute;
      left:40%;
      top: 94%;
      height: 3%;
      width: 20%;
      background-color: #f3f3f3;
      margin-top: 12px;
      display: flex;
      justify-content: center;
      span {
        height: 15px;
        width: 15px;
        background-color: #e1e1e1;
        border-radius: 50%;
        margin-top: 10px;
        margin-left: 20px;
        cursor: pointer;
      }
    }
    .left_fit {
      position: absolute;
      top: 40%;
      height: 17%;
      width: 6%;
      left: 0;
      background-color: rgb(188, 190, 184);
      opacity: 0.5;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 35px;
        width: 35px;
      }
    }
    .left_fit:hover {
      opacity: 0.8;
    }

    .right_fit {
      cursor: pointer;
      position: absolute;
      background-color: rgb(233, 236, 227);
      display: flex;
      align-items: center;
      opacity: 0.5;
      justify-content: center;
      height: 13%;
      top: 40%;
      height: 17%;
      width: 6%;
      right: 0;
      img {
        height: 35px;
        width: 35px;
      }
    }
    .right_fit:hover {
      opacity: 0.8;
    }
    // 存放图片的容器
    .container {
      left: 0;
      top: 0;
      position: relative;
      width: 200%;
      height: 100%;
      transition: left 0.5s;
    }
  }
}
</style>

<!-- MV页面 -->
<template>
  <div class="box">
    <div class="mv">
      <div class="title">MV</div>
      <div class="title_content">
          <a href="">精选</a>
          <a href="">内地</a>
          <a href="">港台</a>
          <a href="">欧美</a>
          <a href="">韩国</a>
          <a href="">日本</a>
      </div>
      <!-- mv具体内容 -->
      <div class="mv_content">
        <!-- 每个mv的内容 -->
        <div class="mv_content_song" v-for="(item,index) in MvData" :key="index">
            <!-- 图片内容 -->
          <div class="img">
              <img :src="item.url" alt="singer" style="height:144px;width:240px">
          </div>
          <!-- mv的内容 -->
          <div class="mv_name">最用过的心</div>
          <div class="song_singer">张杰</div>
          <!-- 播放情况 -->
          <div class="play">
            <!-- 播放量 -->
            <div class="play_count">
              <img src="" alt="" />
              <span>4.4万</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 下面的小圆点 用于切换图片 -->
      <div class="change_img">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mv",
  data() {
    return {
      requestURL:'findMv',
      params:{
        currentPage:1,
        pageSize:10,
      },
      MvData:[],
    };
  },
  components: {},
  mounted() {
     this
        .RequestMessage("/spring/"+this.requestURL,this.params)
        .then((res) => {        
            console.log("MV:")                         
            console.log(res)
            // this.HandlerUrl(res)
            this.MvData=res.data.list
        })
        .catch((err)=>{
            console.log(err)
        })
  },
  methods: {},
};
</script>

<style lang='less' scoped>
.box{
    height: 130%;
    width: 100%;
    margin-top: 50px;
    .mv{
        height: 100%;
        width: 100%;
        background-color:#f3f3f3 ;
        .title{
            font-size: 36px;
            text-align: center;
        }
        .title_content{
            font-size: 18px;            
            display: flex;
            margin-top: 30px;
            justify-content: center;            
            a{
                margin-left: 55px;
            }
        }
        .mv_content{            
            height: 87%;
            width: 100%;
            display: flex;
            flex-wrap: wrap;      
            margin-top: 50px;      
            // justify-content: center;
            background-color: #f3f3f3;
            .mv_content_song{
                height: 38%;
                width: 17%;
                background-color: rgb(205, 231, 162);
                margin-left: 2%;
                .img{
                    height: 62%;
                    width: 100%;
                    background-color: rgb(231, 192, 192);
                    img{
                        width: 100%;
                        height: 100%;                        
                    }
                }
                .mv_name{
                    margin-top: 15px;
                }
                .song_singer{

                }
                .play{
                    .play_count{

                    }
                }
            }
        }
        .change_img{
            display: flex;
            justify-content: center;
            margin-top: -30px;
            span{
                border-radius: 50%;
                height: 10px;
                width: 10px;
                background-color:#e1e1e1;
                margin-left: 20px;                
            }
            span:hover{
              background-color:#afafaf;
              cursor: pointer;
            }            
        }

    }
}
</style>
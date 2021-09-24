<!-- 新碟首发页面 -->
<template>
  <div class="box">
    <div class="ranking">
      <!-- 标题 -->
      <div class="title">排行榜</div>
      <!-- 排行榜主题 -->
      <div class="ranking_item">
        <!-- 每个排行榜主题   需要一个背景图片-->
        <div
          class="ranking_item_content"
          v-for="(item, index) in rankingImage"
          :key="index"
          :style="{
            backgroundImage:url+item+kuohao,
            backgroundRepeat: isRepeat,
            backgroundSize: isCover,            
          }"
        >
          <div class="ranking_name">巅峰榜</div>
          <div class="classfiy">
            <a href="#">热歌</a>
          </div>
          <!-- 中间的横线 -->
          <div class="change_state">——</div>
          <!-- 歌曲 -->
          <div class="song_content">
            <!-- 遍历每个歌曲内容 -->
            <div class="for_song_content">
              <div class="every_song" v-for="(item, index) in 3" :key="index">
                <div class="song_name">花海</div>
                <div class="song_singer">周杰伦</div>
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
  name: "ranking",
  data() {
    return {
      //背景（4张图片）
      rankingImage: [
        require("@/assets/ranking_bg/qq_red.png"),
        require("@/assets/ranking_bg/qq_red.png"),
        require("@/assets/ranking_bg/qq_red.png"),
        require("@/assets/ranking_bg/qq_blue.png"),
        require("@/assets/ranking_bg/qq_green.png"),
        require("@/assets/ranking_bg/qq_navy_blue.png"),
      ],
      url: 'url(',
      kuohao:')',
      isCover: "cover",
      isRepeat: "no-repeat",
    };
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang='less' scoped>
.box {
  height: 100%;
  width: 100%;
  .ranking {
    height: 120%;
    width: 100%;
    background-color: #f3f3f3;
    .title {
      font-size: 36px;
      letter-spacing: 18px;
      text-align: center;
    }
    .ranking_item {
      height: 85%;
      width: 100%;
      display: flex;
      background-color: #f3f3f3;
      .ranking_item_content {
        background-image: url("../../assets/ranking_bg/qq_red.png") no-repeat;
        background-size: cover;
        height: 80%;
        width: 18%;
        background-color: #d27590;
        margin-top: 30px;
        margin-left: 22px;
        .ranking_name {
          text-align: center;
          font-size: 18px;
        }
        .classfiy {
          text-align: center;
          font-size: 26px;
        }
        .change_state {
          text-align: center;
          margin-top: 27px;
        }
        .song_content {
          height: 50%;
          width: 50%;
          //   background-color: blue;
          margin-left: 60px;
          .every_song {
            margin-top: 30px;
          }
        }
      }
    }
  }
}
</style>
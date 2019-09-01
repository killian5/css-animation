<template>
  <div>
    <img
      src="http://img06.ichuye.cn/wxapp/camera/1371843/170800ae0babc7556861dbf8b6c6b9aa.jpg"
      class="bgimg"
    />
    <img v-for="item in raindropList" :key="item.unique" :src="item.src" :style="item.style" />
  </div>
</template>
<script>
import { constants } from "crypto";
const { range } = require("@/utils/random");
const { Style, px } = require("@/utils/style");
export default {
  data() {
    return {
      raindropList: [],
      raindropImg: [
        ["01", "http://img06.ichuye.cn/paster/jlvv4tqt8tf.png", 33, 41],
        ["02", "http://img06.ichuye.cn/paster/jlvv4tr0m7w.png", 35, 51],
        ["03", "http://img06.ichuye.cn/paster/jlvv4tr1h3i.png", 29, 79],
        ["04", "http://img06.ichuye.cn/paster/jlvv4tr1tx6.png", 9, 14],
        ["05", "http://img06.ichuye.cn/paster/jlvv4tr1kw6.png", 56, 95],
        ["06", "http://img06.ichuye.cn/paster/jlvv4tr3p34.png", 34, 29],
        ["07", "http://img06.ichuye.cn/paster/jlvv4tr3iex.png", 25, 26],
        ["08", "http://img06.ichuye.cn/paster/jlvv4tr33eb.png", 13, 14],
        ["09", "http://img06.ichuye.cn/paster/jlvv4tr4sgo.png", 8, 9],
        ["10", "http://img06.ichuye.cn/paster/jlvv4tr5nzi.png", 16, 15]
      ]
    };
  },
  mounted() {
    const { offsetWidth, offsetHeight } = document.body;

    var id = 0;
    for (let i = 0; i < 50; i++) {
      let time = range(0, 6),
        raindrop = this.raindropImg[i % 10];

      this.raindropList.push({
        style: Style({
          opacity: 0,
          "z-index": 9,
          top: range(0, offsetHeight) + "px",
          left: range(0, offsetWidth) + "px",
          width: raindrop[2] / 2 + "px",
          height: raindrop[3] / 2 + "px",
          position: "absolute",
          transform: "translate3d(0," + range(-50, -100) + "px,0)",
          animation: "raindrop 3s " + time + "s both"
        }),
        unique: ++id,
        src: raindrop[1]
      });
    }
  }
};
</script >
<style>
@keyframes raindrop {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  50% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
}
</style>
<style scopde>
.bgimg {
  height: 100%;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  filter: grayscale(100%) blur(10px);
  animation: filter 7s linear 2s both;
}
@keyframes filter {
  0% {
    filter: grayscale(100%) blur(10px);
  }
  70% {
    filter: grayscale(100%) blur(10px);
  }
  100% {
    filter: grayscale(0%) blur(0px);
  }
}
</style>
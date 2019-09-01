<template>
  <div class="wrapper">
    <div :is="currentView"></div>
    <div class="effect-list-wrapper">
      <div class="effect-list" :style="setWidth">
        <div
          v-for="(item,index) in EffectBtnList"
          :key="item.name"
          class="list-btn"
          @click="tabChange(index)"
        >{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import E1 from "@/components/effect/E1";
export default {
  data() {
    return {
      currentView: "E1",
      EffectBtnList: [
        { name: "效果一" },
        { name: "效果二" },
        { name: "效果三" },
        { name: "效果四" },
        { name: "效果五" },
        { name: "效果六" },
        { name: "效果七" },
        { name: "效果八" },
        { name: "效果九" },
        { name: "效果十" },
        { name: "效果十一" },
        { name: "效果十二" },
        { name: "效果十三" }
      ]
    };
  },
  components: {
    E1
  },
  methods: {
    tabChange(i) {
      this.currentView = "E" + (i + 1);
    }
  },
  computed: {
    setWidth() {
      return "width:" + this.EffectBtnList.length * 0.45 + "rem";
    }
  }
};
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
.effect-list-wrapper {
  position: absolute;
  width: 100%;
  height: 0.4rem;
  z-index: 99;
  bottom: 0;
  overflow-x: scroll;
}
.effect-list {
  overflow: hidden;
}
.list-btn {
  float: left;
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.05rem;
  border: 1px solid #000000;
  box-sizing: border-box;
  font-size: 0.18rem;
  line-height: 0.2rem;
  text-align: center;
}
</style>

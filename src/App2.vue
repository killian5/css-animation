<template>
  <svg />
</template>
<script>
import d3 from "./assets/js/d3.min";
let { select, arc } = window.d3;
export default {
  mounted() {
    const w = 600,
      h = 500;
    let svg = select("svg");
    svg.style("width", w).style("height", h);
    let g = svg.append("g").attr("transform", `translate(${w / 2}, ${h / 2})`);
    let circle = g
      .append("circle")
      .attr("r", h / 2)
      .attr("fill", "yellow")
      .attr("stroke", "black");

    const eyeSpacing = 100;

    const eyeYOffset = -70;
    const eyeRadius = 40;
    const eyeG = g.append("g").attr("transform", `translate(0,${eyeYOffset})`);
    const eyeBrow = g
      .append("g")
      .attr("transform", `translate(0,${eyeYOffset - 70})`)
      .attr("class", "animate-line");
    const eyeBrowLeft = eyeBrow
      .append("rect")
      .attr("width", 100)
      .attr("height", 20)
      .attr("x", -eyeSpacing - 50)
      .attr("fill", "black");
    const eyeBrowright = eyeBrow
      .append("rect")
      .attr("width", 100)
      .attr("height", 20)
      .attr("x", eyeSpacing - 50)
      .attr("fill", "black");
    const eyeLeft = eyeG
      .append("circle")
      .attr("fill", "black")
      .attr("r", eyeRadius)
      .attr("cx", -eyeSpacing);
    const eyeRight = eyeG
      .append("circle")
      .attr("fill", "black")
      .attr("r", eyeRadius)
      .attr("cx", eyeSpacing);

    const mouth = g.append("path").attr(
      "d",
      arc()({
        innerRadius: 150,
        outerRadius: 170,
        startAngle: Math.PI / 2,
        endAngle: (Math.PI * 3) / 2
      })
    );
  }
};
</script>
<style >
.animate-line {
  animation: move 1s linear infinite;
}
@keyframes move {
  50% {
    transform: translate(0, -160px);
  }
}
</style>
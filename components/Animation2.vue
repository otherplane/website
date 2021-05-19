<template>
  <svg
    viewBox="0 0 725 718"
    fill="none"
    @mouseenter="flip(1)"
    @mouseleave="flip(-1)"
  >
    <rect
      id="rect-1"
      ref="rect-1"
      class="path"
      :x="p1.x"
      :y="p1.y"
      width="721"
      height="714"
      stroke="#FFCC00"
      stroke-width="4"
    />
    <rect
      id="rect-2"
      ref="rect-2"
      class="path"
      :x="p0.x"
      :y="p0.y"
      width="354"
      height="336"
      stroke="#FFCC00"
      stroke-width="4"
    />
    <path
      id="rect-3"
      ref="rect-3"
      class="path"
      d="M443 271H281V318H353V395H281V443.5H443V271Z"
      stroke="#FFCC00"
      stroke-width="4"
    />
  </svg>
</template>

<script>
export default {
  data() {
    return {
      p0: { x: 185, y: 191 },
      p1: { x: 2, y: 2 },
    }
  },
  mounted() {
    this.flip(-1)
  },
  methods: {
    flip(direction) {
      for (let i = 0; i < 3; i++) {
        const refId = `rect-${i + 1}`
        const path = this.$refs[refId]
        this.$gsap.killTweensOf(path)
        this.$gsap.to(path, 1 + i, {
          scaleX: direction,
          transformOrigin: '50%, 0%',
        })
      }
    },
  },
}
</script>

<style lang="scss">
svg {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

#path {
  fill: none;
  stroke: #fc0;
  stroke-width: 4;
}

@media (max-width: 1200px) {
  #rect-1 {
    fill: none;
    stroke-width: 40;
  }
  #rect-2 {
    fill: #fc0;
    stroke: #fc0;
    stroke-width: 4;
  }
  #rect-3 {
    fill: $dark-blue;
    stroke: $dark-blue;
    stroke-width: 8;
  }
}
</style>

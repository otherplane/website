<template>
  <svg
    viewBox="0 0 720 718"
    fill="none"
    class="overflow"
    @mousemove="(e) => move(e)"
    @mouseleave="update()"
    @click="update()"
  >
    <rect
      v-for="(rect, index) in newRects"
      :id="rect.id"
      :ref="rect.id"
      :key="index"
      class="path"
      :x="rect.x"
      :y="rect.y"
      :width="rect.width"
      :height="rect.height"
      stroke="#FFCC00"
      stroke-width="4"
    />
    <rect
      id="rect-1"
      ref="rect-1"
      class="path"
      x="2"
      y="2"
      width="721"
      height="714"
      stroke="#FFCC00"
      stroke-width="4"
    />
    <rect
      id="rect-2"
      ref="rect-2"
      class="path"
      x="185"
      y="191"
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
      defaultPaths: [
        { x: 2, y: 2 },
        { x: 2, y: 2 },
        { x: null, y: null },
      ],
      overflow: true,
      newRects: [],
    }
  },
  methods: {
    update() {
      this.newRects = []
      this.defaultPaths.forEach((path, i) => {
        const refId = `rect-${i + 1}`
        const el = this.$refs[refId]
        this.$gsap.killTweensOf(el)
        this.$gsap.to(el, 1, {
          x: path.x,
          y: path.y,
          transform: '0, 0',
        })
      })
    },
    move(e) {
      let newWidth = 721 + 400
      let newHeight = 714 + 200
      let x = this.defaultPaths[0].x - 100
      let y = this.defaultPaths[0].y - 50
      let id = 4
      if (this.newRects.length) {
        newWidth = this.newRects[this.newRects.length - 1].width * 4
        newHeight = this.newRects[this.newRects.length - 1].height * 4
        x = this.newRects[this.newRects.length - 1].x - 200
        y = this.newRects[this.newRects.length - 1].y - 50
        id += 1
      }
      if (this.newRects.length < 2) {
        this.newRects.push({
          x,
          y,
          width: newWidth,
          height: newHeight,
          id: `rect-${id}`,
        })
      }
      this.defaultPaths.forEach((path, i) => {
        const refId = `rect-${i + 1}`
        const el = this.$refs[refId]
        this.$gsap.killTweensOf(el)
        this.$gsap.to(el, 0.5 + i, {
          x: path.x + e.clientX / 3,
          y: path.y + e.clientY / 3,
        })
      })
      if (this.newRects.length) {
        this.newRects.forEach((rect, i) => {
          const refId = `rect-${i + 4}`
          const el = this.$refs[refId]
          this.$gsap.killTweensOf(el)
          this.$gsap.to(el, 0.5 + i, {
            x: rect.x + e.clientX / 3,
            y: rect.y + e.clientY / 3,
          })
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
.overflow {
  position: absolute;
  overflow: visible;
  max-width: 56vw;
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

  .overflow {
    position: relative;
    overflow: initial;
    max-width: max-content;
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

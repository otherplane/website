<template>
  <div class="section">
    <SideBar :open="isSideBarOpen" @close="closeSideBar" />
    <div class="big-logo">
      <Animation />
    </div>
    <div class="main">
      <h1 class="title-container">
        <Animation class="logo-responsive" />
        <img
          class="title"
          src="~/assets/svg/other-plane-title.svg"
          alt="OtherPlane"
        />
      </h1>
      <p>
        <i18n class="text" path="hero.text.main" tag="span">
          <span
            v-for="(link, index) in links"
            :key="`link-${index}`"
            class="link"
            :class="{ selected: link.selected, dimmed: link.dimmed }"
            @click="openSideBar"
            @mouseover="selectLink(index)"
            @mouseleave="selectLink(-1)"
          >
            <span
              v-for="(char, charIndex) in link.chars"
              :key="`char-${charIndex}`"
              :ref="`char-${index}-${charIndex}`"
              class="link char"
              >{{ char }}</span
            >
          </span>
        </i18n>
      </p>
    </div>
  </div>
</template>

<script>
const itemsList = ['About', 'Works', 'News/Blog', 'Contact us']
const LEFT = -1
const RIGHT = 1

export default {
  data() {
    return {
      isSideBarOpen: false,
      selectedLink: -1,
      displayLogo: true,
      displayMain: true,
    }
  },
  computed: {
    links() {
      return itemsList.map((link, index) => {
        const isSelected = this.selectedLink === index
        const otherSelected = this.selectedLink !== -1
        return {
          label: link,
          selected: isSelected,
          dimmed: !isSelected && otherSelected,
          chars: link.split(''),
        }
      })
    },
  },
  methods: {
    toggle() {
      this.toggleUpdate = !this.toggleUpdate
    },
    selectLink(id) {
      this.selectedLink = id
      this.links.forEach((link, index) => {
        const direction = link.selected ? LEFT : RIGHT
        this.animateChars(index, link.label.length, direction)
      })
    },
    animateChars(id, charLength, direction) {
      for (let i = 0; i < charLength; i++) {
        const refId = `char-${id}-${i}`
        const char = this.$refs[refId]
        this.$gsap.killTweensOf(char)
        this.$gsap.to(char, 0.5, { scaleX: direction })
      }
    },
    openSideBar() {
      this.isSideBarOpen = true
    },
    closeSideBar() {
      this.isSideBarOpen = false
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  color: $white;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 44vw;
  overflow-x: initial;

  .big-logo {
    height: 100vh;
  }
  .logo-responsive {
    display: none;
  }

  .main {
    overflow: auto;
    position: relative;
    z-index: 50;
    padding: 2vw 2vw 0 2vw;
    .title {
      width: 100%;
    }
    .text {
      padding-bottom: 2vw;
      line-height: 1.5;
    }
  }
  .link {
    cursor: pointer;
    color: $red;
    transition: margin-left 0.5s ease-out, opacity 0.5s ease-out;
    white-space: nowrap;
    .char {
      display: inline-block;
      min-width: 0.3em;
    }
  }
}
@media (max-width: 1200px) {
  .section {
    padding: 0 0;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    .title-container {
      display: grid;
      grid-template-columns: 20vw 1fr;
      align-items: center;
      padding-bottom: 16px;
    }
    .big-logo {
      display: none;
    }
    .logo-responsive {
      display: block;
      padding-right: 16px;
    }
    .main {
      padding: 16px;
      max-width: 100%;
    }
  }
}
</style>

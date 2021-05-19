<template>
  <FrameOutside @click="close" @focus="close">
    <div :class="['sidebar', open ? 'expanded' : 'collapsed']">
      <div class="content">
        <p>{{ $t('contact_text') }}</p>
        <img
          v-show="open"
          class="logo"
          src="~/assets/svg/dark-logo.svg"
          alt="OtherPlane logo"
        />
      </div>
    </div>
  </FrameOutside>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
.sidebar {
  overflow: hidden;
  background-color: $red;
  min-height: 100vh;
  position: fixed;
  z-index: 200;
  right: 0;
  top: 0;

  .content {
    color: $dark-blue;
    display: grid;
    grid-template-rows: 1fr max-content;
    justify-content: center;
    padding: 24px;
    height: 100vh;
  }

  &.expanded {
    -webkit-transition: all 0.4s ease-in ease-out;
    -o-transition: all 0.4s ease-in ease-out;
    -moz-transition: all 0.4s ease-in ease-out;
    transition: width 0.4s ease;
    width: 20vw;
  }

  &.collapsed {
    -webkit-transition: all 0.4s ease-in ease-out;
    -o-transition: all 0.4s ease-in ease-out;
    -moz-transition: all 0.4s ease-in ease-out;
    transition: width 0.4s ease;
    width: 0;
  }
}
@media (max-width: 1200px) {
  .sidebar {
    &.expanded {
      -webkit-transition: all 0.4s ease-in ease-out;
      -o-transition: all 0.4s ease-in ease-out;
      -moz-transition: all 0.4s ease-in ease-out;
      transition: width 0.4s ease;
      width: 60vw;
    }
  }
}
</style>

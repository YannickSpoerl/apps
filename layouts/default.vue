<template>
  <div id="vuepress-theme-blog__global-layout">
    <Header />
    <MobileHeader
      :is-open="isMobileHeaderOpen"
      @toggle-sidebar="isMobileHeaderOpen = !isMobileHeaderOpen"
    />
    <div class="content-wrapper">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>

export default {
  data () {
    return {
      isMobileHeaderOpen: false
    }
  },
  mounted () {
    this.isMobileHeaderOpen = false
  }
}
</script>

<style lang="stylus">
@import '~assets/style/index'

#vuepress-theme-blog__global-layout
  word-wrap break-word
</style>

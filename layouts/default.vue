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
    <nuxt />
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

.content-wrapper-main
  padding-top: 80px
  width: 100%
  height: 100%
  margin 0

  @media (max-width: $MQMobile)
    &
      padding 65px 0 0 0
      min-height calc(100vh - 20px - 60px - 60px)

#vuepress-theme-blog__global-layout
  word-wrap break-word
</style>

<template>
  <div style="text-align: center">
    <h1>{{ $t('error.title') }}</h1>
    <br>
    <a class="button nav-link" :href="localePath('/')">
      {{ $t('error.button') }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      default: null,
      type: Object
    }
  },
  layout: 'default'
}
</script>
<style lang="stylus">
@import '~assets/style/index'
.content-wrapper
  padding 160px 15px 80px 15px
  min-height calc(100vh - 80px - 60px - 160px)
  max-width $contentWidth
  margin 0 auto

  @media (max-width: $MQMobile)
    &
      padding 100px 15px 20px 15px
      min-height calc(100vh - 20px - 60px - 100px)

.button
    display inline-block
    font-size 1.2rem
    color #fff
    background-color $accentColor
    padding 0.8rem 1.6rem
    border-radius 4px
    transition background-color .1s ease
    box-sizing border-box
    border-bottom 1px solid darken($accentColor, 10%)

    &:hover
      background-color lighten($accentColor, 10%)

      @media (max-width: $MQMobileNarrow)
        font-size 1rem
        padding 0.6rem 1.2rem

.button.nav-link
  &:hover, &.router-link-active
    color #fff

</style>

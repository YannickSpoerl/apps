<template>
  <div>
    <div class="content__default">
      <h1>{{ $t('about.title') }}</h1>
      <p>{{ $t('about.text') }}</p>
      <h3>{{ $t('about.link') }}<a class="link" href="https://blog.yannickspoerl.de/2020/07/17/apps/"> blog.yannickspoerl.de</a></h3>
      <h1>{{ $t('about.title2') }}</h1>
      <p>{{ $t('about.text2') }}</p>
      <h3>{{ $t('about.link2') }}<a class="link" href="https://www.yannickspoerl.de"> www.yannickspoerl.de</a></h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Privacy'
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
  .link
    text-decoration-line none
</style>

<template>
  <article
    class="ui-post"
    itemprop="blogPost"
    itemscope
  >
    <AlertCircleIcon
      class="info-button"
      :class="selected ? 'selected' : ''"
      size="2.5x"
      @click="selected = !selected"
    />
    <header class="ui-post-title" itemprop="name headline">
      <p>
        {{ app.name }}
      </p>
    </header>
    <p v-if="!selected" class="ui-post-summary" itemprop="description">
      {{ $i18n.locale === 'de' ? app.description.de : app.description.en }}
    </p>
    <div style="margin: 20px 0">
      <div v-if="selected && app.published" class="ui-post-meta ui-post-date">
        <ClockIcon />
        {{ $t('common.published') + ': ' + app.published }}
      </div>
      <div
        v-if="selected"
        class="ui-post-meta ui-post-date"
      >
        <FlagIcon />
        {{ $t('common.languages') + ': ' + locales }}
      </div>
      <div
        v-if="selected"
        class="ui-post-meta ui-post-date"
      >
        <TagIcon />
        {{ 'Tags: ' + tags }}
      </div>
    </div>
    <div v-if="selected" style="margin-left: 5px">
      <ul style="list-style: none;" class="feature-list">
        <li :class="app.features.desktop ? 'selected' : ''" class="feature">
          <MonitorIcon />
          {{ app.features.desktop ? $t('features.is.desktop') : $t('features.not.desktop') }}
        </li>
        <li :class="app.features.mobile ? 'selected' : ''" class="feature">
          <SmartphoneIcon />
          {{ app.features.mobile ? $t('features.is.mobile') : $t('features.not.mobile') }}
        </li>
        <li :class="app.features.offline ? 'selected' : ''" class="feature">
          <WifiOffIcon />
          {{ app.features.offline ? $t('features.is.offline') : $t('features.not.offline') }}
        </li>
        <li :class="app.features.db ? 'selected' : ''" class="feature">
          <DatabaseIcon />
          {{ app.features.db ? $t('features.is.db') : $t('features.not.db') }}
        </li>
        <li :class="app.features.auth ? 'selected' : ''" class="feature">
          <UserIcon />
          {{ app.features.auth ? $t('features.is.auth') : $t('features.not.auth') }}
        </li>
        <li :class="app.features.realtime ? 'selected' : ''" class="feature">
          <RefreshCcwIcon />
          {{ app.features.realtime ? $t('features.is.realtime') : $t('features.not.realtime') }}
        </li>
      </ul>
    </div>
    <footer>
      <a v-if="app.urls.de.demo" class="button nav-link" :href="$i18n.locale === 'de' ? app.urls.de.demo : app.urls.en.demo" target="blank">
        {{ $t('buttons.demo') }}
      </a>
      <a v-if="app.urls.de.code" class="button nav-link" :href="$i18n.locale === 'de' ? app.urls.de.code : app.urls.en.code" target="blank">
        {{ $t('buttons.code') }}
      </a>
      <a v-if="app.urls.de.blog" class="button nav-link" :href="$i18n.locale === 'de' ? app.urls.de.blog : app.urls.en.blog" target="blank">
        {{ $t('buttons.blog') }}
      </a>
    </footer>
  </article>
</template>

<script>
import {
  AlertCircleIcon,
  RefreshCcwIcon,
  UserIcon,
  ClockIcon,
  FlagIcon,
  TagIcon,
  MonitorIcon,
  SmartphoneIcon,
  WifiOffIcon,
  DatabaseIcon
} from 'vue-feather-icons'

export default {
  components: {
    UserIcon,
    AlertCircleIcon,
    ClockIcon,
    FlagIcon,
    TagIcon,
    WifiOffIcon,
    MonitorIcon,
    SmartphoneIcon,
    DatabaseIcon,
    RefreshCcwIcon
  },
  props: {
    app: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      selected: false
    }
  },
  computed: {
    tags () {
      let str = ''
      this.app.tags.forEach((tag) => {
        if (!str) {
          str += tag
        } else {
          str += ', ' + tag
        }
      })
      return str
    },
    locales () {
      let str = ''
      if (this.app.languages.includes('de')) {
        str += '🇩🇪 '
      }
      if (this.app.languages.includes('en')) {
        str += '🇬🇧 '
      }
      return str
    }
  },
  watch: {
    app () {
      this.selected = false
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/style/index'

.feature
    width 32%
    margin 5px 0
    @media (max-width: $MQMobile)
        width 100%

.feature-list
  padding 0
  flex-wrap wrap
  display inline-flex
  font-size 20px
  line-height 20px
  text-align center
  @media (max-width: $MQMobile)
    width 100%
    display block
    text-align left

  svg
    margin-right 5px
    width 18px
    height 18px
    font-size 20px

.info-button
    cursor pointer
    margin-right 15px
    margin-top 10px
    float right

.selected
    color $accentColor

footer < a
    text-decoration-line none

.button.nav-link
    margin 5px
    color #fff
    text-decoration-line none
    &:hover, &.router-link-active
        color #fff

.common-layout
    background-color: $headerBgColor
  .content-wrapper
    padding-bottom 80px

.ui-post
  padding-bottom 25px
  margin-bottom 25px
  border-bottom 1px solid $borderColor

  &:last-child
    margin-bottom 0px

.ui-post-title
  font-size 30px
  margin-left 5px
  border-bottom 0

  p
    margin: 6px 0
    color $darkTextColor
    transition all 0.2s
    text-decoration none
    font-weight 500

.ui-post-summary
  font-size 20px
  color rgba($darkTextColor, 0.75)
  font-weight 400
  margin-left 5px

.ui-post-meta
  display inline-flex
  align-items center
  font-size 20px
  line-height 20px

  &:not(:last-child)
    margin-bottom 3px
    margin-right 20px

  svg
    margin-right 5px
    width 18px
    height 18px

  @media (max-width: $MQMobile)
    display flex

    &:not(:last-child)
      margin-bottom 10px

.ui-post-author
  color rgba($darkTextColor, 0.84)
  font-weight 400

.ui-post-date
  margin-left 5px
  color rgba($darkTextColor, 0.84)
  font-weight 400

.ui-post-tag
  color rgba($darkTextColor, 0.84)
  font-weight 400

  p
    color inherit
    font-weight 400
    text-decoration none
    margin-right 10px
</style>

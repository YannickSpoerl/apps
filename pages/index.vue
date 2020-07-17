<template>
  <div>
    <h1 style="margin-bottom: 50px">
      {{ $t('common.welcomeMessage') }}
    </h1>
    <p style="font-size: 20px; font-weight: 500">
      {{ $t('common.chooseTabs') }}
    </p>
    <ul class="post-meta-tags">
      <li
        v-for="(tag, index) in tags"
        :key="index"
        :class="selectedTags.includes(tag) ? 'post-tag-selected' : 'post-tag'"
        @click="toggle(tag)"
      >
        {{ tag }}
      </li>
    </ul>
    <div v-if="selectedApps.length < 1">
      <p class="noApps">
        {{ $t('common.noAppsMatching') }}
      </p>
    </div>
    <div v-if="selectedApps.length > 0" class="ui-posts">
      <app-component
        v-for="(app, index) in selectedApps"
        :key="index"
        :app="app"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Main',
  data () {
    return {
      selectedTags: []
    }
  },
  computed: {
    selectedApps () {
      let appSet = []
      if (this.selectedTags.length === 0) {
        appSet = this.$apps.apps
        appSet.sort(this.sortApps)
        return appSet
      }
      this.$apps.apps.forEach((app) => {
        let isSelected = true
        this.selectedTags.forEach((tag) => {
          if (!app.tags.includes(tag)) {
            isSelected = false
          }
        })
        if (isSelected && !appSet.includes(app)) {
          appSet.push(app)
        }
      })
      appSet.sort(this.sortApps)
      return appSet
    },
    tags () {
      if (!this.$apps) {
        return []
      }
      const tagSet = []
      this.$apps.apps.forEach((app) => {
        app.tags.forEach((tag) => {
          if (!tagSet.includes(tag)) {
            tagSet.push(tag)
          }
        })
      })
      tagSet.sort()
      return tagSet
    }
  },
  methods: {
    sortApps (app1, app2) {
      if (app1.name < app2.name) {
        return -1
      }
      return 1
    },
    toggle (tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags.splice(this.selectedTags.indexOf(tag), 1)
      } else {
        this.selectedTags.push(tag)
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/style/index'

.content-wrapper
  padding-top 100px

.noApps
  text-align center
  font-size 30px
  @media (max-width: $MQMobile)
    font-size 16px

.post-meta
  @media (max-width: $MQMobile) {
    margin-bottom: 50px
  }
  &-tags
    border-bottom 1px solid $borderColor
    display flex
    flex-wrap wrap
    list-style none
    overflow hidden
    padding 0

    > li
      margin-bottom 10px

  > div
    display inline-flex
    line-height 12px
    font-size 12px
    margin-right 20px

  svg
    margin-right 5px
    width 14px
    height 14px

.post-tag
  background-color $postTagBgColor
  border-radius 3px 0 0 3px
  height 26px
  padding 0 20px 0 23px
  position relative
  cursor pointer

  &:not(:last-child)
    margin-right 10px

  a
    color $postTagColor
    text-decoration none
    transition color 0.2s

  &:before
    position absolute
    left 10px
    top 10px
    background #fff
    border-radius 50%
    box-shadow inset 0 1px rgba(0, 0, 0, 0.25)
    content ''
    height 6px
    width 6px

  &:after
    position absolute
    right 0
    top 0
    background $bgColor
    border-bottom 13px solid transparent
    border-left 10px solid $postTagBgColor
    border-top 13px solid transparent
    content ''

.post-tag-selected
  background-color $accentColor
  border-radius 3px 0 0 3px
  height 26px
  padding 0 20px 0 23px
  position relative
  cursor pointer
  color #fff

  &:not(:last-child)
    margin-right 10px

  a
    color $postTagColor
    text-decoration none
    transition color 0.2s

  &:before
    position absolute
    left 10px
    top 10px
    background #fff
    border-radius 50%
    box-shadow inset 0 1px rgba(0, 0, 0, 0.25)
    content ''
    height 6px
    width 6px

  &:after
    position absolute
    right 0
    top 0
    background $bgColor
    border-bottom 13px solid transparent
    border-left 10px solid $accentColor
    border-top 13px solid transparent
    content ''
</style>

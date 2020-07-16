<template>
  <section id="header-wrapper">
    <header id="header">
      <div class="header-wrapper">
        <div class="title">
          <NavLink link="/" class="home-link">
            <img src="@yannickspoerl/corporate-design-yannickspoerl/logo.png" width="6%" alt="Logo">
              &#160;&#160;
            {{ $site.title }}
          </NavLink>
        </div>
        <div class="header-right-wrap">
          <ul v-if="$site.navbar" class="nav">
            <li
              v-for="item in $site.navbar"
              :key="item.text"
              class="nav-item"
            >
              <NavLink :link="item.link">
                {{ $t('navbar.' + item.text) }}
              </NavLink>
            </li>
            <li class="nav-item" style="cursor: pointer">
              <nuxt-link v-if="$i18n.locale === 'de'" :to="switchLocalePath('en')">
                English 🇬🇧
              </nuxt-link>
              <nuxt-link v-if="$i18n.locale === 'en'" :to="switchLocalePath('de')">
                Deutsch 🇩🇪
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
@import '~assets/style/index'
.activeLink
  color $accentColor

#header
  z-index 12
  position fixed
  top 0
  width 100vw
  height $headerHeight
  box-sizing border-box
  background-color $headerBgColor
  padding 20px 32px 20px
  margin auto
  box-shadow 0 5px 20px rgba(0, 0, 0, 0.03), 0 6px 6px rgba(0, 0, 0, 0.05)
  transition all 1s cubic-bezier(0.25, 0.8, 0.25, 1)

  ol, ul
    list-style none
    margin 0
    padding 0

  &:hover
    box-shadow 0 5px 20px rgba(0, 0, 0, 0.08), 0 6px 6px rgba(0, 0, 0, 0.1)

// border-bottom 5px solid lighten(#3eaf7c, 50%)
.header-wrapper
  display flex
  line-height 40px
  height 40px

  .title
    /* flex 0 0 200px */
    font-size 30px
    margin 0
    letter-spacing 2px
    display block
    text-transform uppercase

    a
      color $darkTextColor
      font-weight bold
      text-decoration none

  .header-right-wrap
    flex 1
    display flex
    justify-content flex-end
    align-items center

    .nav
      flex 0 0 auto
      display flex
      margin 0

      .nav-item
        margin-left 20px

        a
          font-size 20px
          // color lighten(#3eaf7c, 30%)
          text-decoration none
          transition color 0.3s

    .search-box
      margin-left 20px

      input
        border-radius 5px
        transition all 0.5s
        border 1px solid #cecece

        &:hover
          border 1px solid $accentColor
          box-shadow 0 0 5px $accentColor

      .suggestions
        border 1px solid $darkBorderColor
        top 40px
        right 0

        a
          color $darkTextColor
          text-decoration none

          &.focused
            color $accentColor

@media (max-width: $MQMobile)
  #header
    display none

  .header-wrapper
    flex-direction column

    .header-right-wrap
      display none
</style>

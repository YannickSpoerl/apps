<template>
  <div id="mobile-header">
    <div class="mobile-header-bar">
      <div class="mobile-header-title">
        <NavLink link="/" class="mobile-home-link">
          <img src="@yannickspoerl/corporate-design-yannickspoerl/logo.png" width="6%" alt="Logo">
          &#160;&#160;
          {{ $site.title }}
        </NavLink>
        <component :is="isOpen ? 'XIcon' : 'MenuIcon'" @click="$emit('toggle-sidebar')" />
      </div>
      <div class="mobile-menu-wrapper" :class="{ open: isOpen }">
        <hr class="menu-divider">
        <ul v-if="$site.navbar" class="mobile-nav">
          <li
            v-for="item in $site.navbar"
            :key="item.text"
            class="mobile-nav-item"
            @click="$emit('toggle-sidebar')"
          >
            <NavLink :link="item.link">
              {{ $t('navbar.' + item.text) }}
            </NavLink>
          </li>
          <li class="mobile-nav-item" style="cursor: pointer" @click="$emit('toggle-sidebar')">
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
  </div>
</template>

<script>
import { MenuIcon, XIcon } from 'vue-feather-icons'

export default {
  components: {
    MenuIcon, XIcon
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/style/index'

.mobile-header-bar
  z-index 12
  position fixed
  top 0
  width 100vw
  box-sizing border-box
  background-color $headerBgColor
  margin auto
  box-shadow 0 5px 20px rgba(0, 0, 0, 0.03), 0 6px 6px rgba(0, 0, 0, 0.05)
  transition all 1s cubic-bezier(0.25, 0.8, 0.25, 1)

#mobile-header
  .mobile-header-title
    display flex
    align-items center
    justify-content space-between
    padding 1.2em

    .mobile-home-link
      text-decoration none
      text-transform uppercase
      color $darkTextColor
      font-weight bold

.mobile-nav-item
  padding 10px 0
  list-style none

  a
    text-decoration none

.menu-divider
  margin 0

.mobile-menu-wrapper
  max-height 0
  overflow hidden
  transition 0.3s ease
  background-color $headerBgColor

.mobile-menu-wrapper.open
  max-height 450px
  transition 0.3s ease

@media (min-width: $MQMobile)
  #mobile-header
    display none
</style>

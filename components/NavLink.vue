<template>
  <nuxt-link
    v-if="!isExternal(link) && link[0] !== '#'"
    class="nav-link"
    :to="localePath(link)"
  >
    <slot />
  </nuxt-link>
  <a
    v-else
    :href="computedLink"
    :target="isMailto(normalizedlink) || isTel(normalizedlink) || link[0] === '#' ? null : '_blank'"
    :rel=" isMailto(normalizedlink) || isTel(normalizedlink) ? null : 'noopener noreferrer'"
    class="nav-link external"
  >
    <slot />
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from './util'

export default {
  props: {
    link: {
      required: true,
      type: String
    }
  },
  computed: {
    computedLink () {
      if (isExternal(this.link)) { return this.link }
      return this.localePath('/') + this.link
    },
    normalizedlink () {
      if (!this.link) { return }
      if (this.$router.currentRoute.path !== '/') { return '/' + this.link }
      return ensureExt(this.link)
    }
  },

  methods: {
    isExternal,
    isMailto,
    isTel
  }
}
</script>

<style lang="stylus">
@import '~assets/style/index'

.nav-link
  color $darkTextColor

.nav-link
  &:hover, &.router-link-active
    color $accentColor
</style>

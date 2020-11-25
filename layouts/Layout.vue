<template>
  <ParentLayout />
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  components: {
    ParentLayout
  },
  computed: {
    defaultTheme() {
      const _overrideTheme = this.$themeConfig.overrideTheme
      const _prefersTheme = this.$themeConfig.prefersTheme
      const _noPreference =
        !window.matchMedia('(prefers-color-scheme: light)').matches &&
        !window.matchMedia('(prefers-color-scheme: dark)').matches

      if (typeof _overrideTheme === 'object') {
        const hours = new Date().getHours()
        let _key = false
        for (const key in _overrideTheme) {
          const value = _overrideTheme[key]
          if (value[0] <= value[1]) {
            if (value[0] <= hours && hours < value[1]) {
              _key = key
              break
            }
          } else {
            if ((value[0] <= hours && hours < 24) || (0 <= hours && hours < value[1])) {
              _key = key
              break
            }
          }
        }
        return _key
      } else if (typeof _overrideTheme === 'string') {
        return _overrideTheme
      } else if (_prefersTheme && _noPreference) {
        return _prefersTheme
      } else {
        return false
      }
    }
  },
  beforeMount() {
    if (this.defaultTheme) {
      document.getElementsByTagName('html')[0].setAttribute('theme', this.defaultTheme)
    }
  }
}


</script>

<style lang="stylus">
@require '../styles/components.styl'
</style>

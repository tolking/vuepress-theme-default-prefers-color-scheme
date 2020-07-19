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
      const _defaultTheme = this.$themeConfig.defaultTheme
      if (typeof _defaultTheme === 'object') {
        const hours = new Date().getHours()
        let _key = false
        for (const key in _defaultTheme) {
          const value = _defaultTheme[key]
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
      } else {
        return _defaultTheme || false
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

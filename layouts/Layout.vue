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
    overrideTheme() {
      const _overrideTheme = this.$themeConfig.overrideTheme
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
      } else {
        return _overrideTheme || false
      }
    }
  },
  beforeMount() {
    if (this.overrideTheme) {
      document.getElementsByTagName('html')[0].setAttribute('theme', this.overrideTheme)
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/components.styl'
</style>

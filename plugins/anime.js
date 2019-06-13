(function () {
  'use strict'

  let anime = require('animejs')

  if (anime.default) {
    anime = anime.default
  }

  function install(Vue) {
    Vue.directive('anime', {
      bind: function bind(targets, binding) {
        const opts = Object.assign({}, binding.value, { targets: targets })
        anime(opts)
      }
    })
    Vue.prototype.$anime = anime
  }

  module.exports = {
    install: install
  }
})()

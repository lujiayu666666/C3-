// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './common/common.styl'

Vue.config.productionTip = false

Vue.directive('hearts', {
  inserted (el, binding) {
    el.addEventListener('click', (e) => {
      const span = document.createElement('span')
      const wrap = document.createElement('span')
      const before = document.createElement('span')
      const after = document.createElement('span')
      const {pageX, pageY} = e
      let bgColor = '#' + (~~(Math.random() * (1 << 24))).toString(16)
      while (bgColor.length < 7) {
        bgColor = '#' + (~~(Math.random() * (1 << 24))).toString(16)
      }
      span.style.left = pageX - 5 + 'px'
      span.style.top = pageY - 5 + 'px'
      wrap.style.backgroundColor = bgColor
      before.style.backgroundColor = bgColor
      after.style.backgroundColor = bgColor

      before.className = 'before'
      after.className = 'after'
      wrap.className = 'js-wrap'
      span.className = 'js-hearts'
      wrap.appendChild(before)
      wrap.appendChild(after)
      span.appendChild(wrap)
      document.body.appendChild(span)
      setTimeout(() => {
        document.body.removeChild(span)
      }, 950)
    }, false)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

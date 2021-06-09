import Vue from 'vue';
import {VueLoading} from 'vue-loading-template'

// Vue.use(VueLoading, /** options **/)

// var app5 = new Vue({
//     el: '#app',
//     data: {
//       message: 'Hello Vue.js!'
//     },
    // methods: {
    //   reverseMessage: function () {
    //     this.message = this.message.split('').reverse().join('')
    //   }
    // }
// });


// var vm = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello'
//   },
//   computed: {
//     // 计算属性的 getter
//     reversedMessage: function () {
//       // `this` 指向 vm 实例
//       return this.message.split('').reverse().join('')
//     }
//   },
//   methods: {
//     reverseMessageHandle: function () {
//       this.message = this.message.split('').reverse().join('')
//     }
//   }
// })

// Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新。这些方法如下：
// push()
// pop()
// shift()
// unshift()
// splice()
// sort()
// reverse()

var vm = new Vue({
  el: '#app',
  data: {
    items: ['a', 'b', 'c']
  },
  methods: {
    changeValue: function () {
      // this.items[1] = 'x';
      Vue.set(this.items, 1, 'x');
    }
  },
  components:{
    VueLoading
  }
})

// vm.items[1] = 'x' // 不是响应性的
// vm.items.length = 2 // 不是响应性的
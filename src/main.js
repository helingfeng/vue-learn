import Vue from 'vue';

// var app5 = new Vue({
//     el: '#app-5',
//     data: {
//       message: 'Hello Vue.js!'
//     },
    // methods: {
    //   reverseMessage: function () {
    //     this.message = this.message.split('').reverse().join('')
    //   }
    // }
// });


var vm = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    reverseMessageHandle: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
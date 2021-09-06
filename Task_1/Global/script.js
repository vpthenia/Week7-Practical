Vue.component('prompt-compo', {
  template: '<div><p>${message}</p><button @click="sayHi">Click me</button></div>',
  delimiters: ['${','}'],
  data: function(){
    return {
      message: 'Global Registration'
    }
  },
  methods: {
    sayHi: function() {
      alert('hi this is global registration');
    }
  }
});

let vm = new Vue({
  el:'#app',
  template: `<prompt-compo/>`
});
const PromptComponent = {
  template:'<div><p>${message}</p><button @click="sayHi">Click me</button></div>',
  delimiters: ['${','}'],
  data: function() {
    return {
      message: 'Local Registration'
    }
  },
  methods: {
    sayHi: function(){
      alert('hi this is local registration');
    }
  }
};
let vm = new Vue({
  el:'#app',
  components: {
    'prompt-component':PromptComponent
  },
  data: {
    num: 1
  },
  template: `<prompt-component/>`
});
Vue.component('todo-item', {
  props: ['todo'],
  data: function() {
    return {
      editing: false
    }
  },
  template: `
    <todo-edit :todo="todo" @update="onUpdate"></todo-edit>
  `,
  methods: {
    onUpdate: function() {
      this.$emit("update", this.todo);
    }
  }
});
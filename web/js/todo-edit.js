Vue.component('todo-edit', {
  props: ['todo'],
  template: `
    <editable v-model="todo.text" @update="onUpdate"></editable>
  `,
  methods: {
    onUpdate: function(text) {
      this.todo.text = text;
      this.$emit("update", this.todo);
    }
  }
});
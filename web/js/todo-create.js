Vue.component('todo-create', {
  data: function() {
    return {
      todo: null,
      errors: []
    }
  },
  template: `
    <form @submit="onSubmit">
        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>
        <p>
            <label for="name">TODO</label>
            <input type="text" name="todo" id="todo" v-model="todo">
        </p>
        <input type="submit" value="Add" />
    </form>
  `,
  methods: {
    onSubmit: function(e) {
      this.errors = [];

      if (this.todo && this.todo.trim().length > 0) {
        this.$emit("add", this.todo);
        this.todo = null;
      }
      else {
        this.errors.push('Text is required');
      }

      e.preventDefault();
      return false;
    }
  }
});
var app = new Vue({
  el: '#app',
  data: {
    todos: [],
  },
  methods: {
    addTodo: function(str) {
      var todos = this.todos;

      var newTodo = {};
      newTodo.text = str;
      fetch('//rem-rest-api.herokuapp.com/api/todos', {credentials: 'include', method: 'post', body: JSON.stringify(newTodo)})
      .then(
        function(response) {
          response.json().then(function(server) {
            console.log(server);

            todos.push(server);
          });
        }
      );
    },
    updateTodo: function(updateTodo) {
      fetch('//rem-rest-api.herokuapp.com/api/todos/' + updateTodo.id, {credentials: 'include', method: 'put', body: JSON.stringify(updateTodo)})
      .then(
        function(response) {
          response.json().then(function(server) {
            console.log(server);

            //var i = this.todos.findIndex(t => t.id == serverTodo.id);
            //this.todos[i] = serverTodo;

          });
        }
      );
    },
    listTodos: function() {
      var todos = this.todos;

      fetch('//rem-rest-api.herokuapp.com/api/todos', {credentials: 'include'})
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
          }

          response.json().then(function(server) {

            console.log(server.data);

            if (server.data != null && server.data.length > 0) {
              var i;
              for (i = 0; i < server.data.length; i++) {
                var todo = server.data[i];
                todos.push(todo);
              }
            }

          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
    }
  },
  created: function() {
      this.listTodos();
  }
});
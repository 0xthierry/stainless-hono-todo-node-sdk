# Todos

Types:

- <code><a href="./src/resources/todos.ts">TodoCreateResponse</a></code>
- <code><a href="./src/resources/todos.ts">TodoRetrieveResponse</a></code>
- <code><a href="./src/resources/todos.ts">TodoUpdateResponse</a></code>
- <code><a href="./src/resources/todos.ts">TodoListResponse</a></code>
- <code><a href="./src/resources/todos.ts">TodoUploadResponse</a></code>

Methods:

- <code title="post /todos">client.todos.<a href="./src/resources/todos.ts">create</a>({ ...params }) -> TodoCreateResponse</code>
- <code title="get /todos/:id">client.todos.<a href="./src/resources/todos.ts">retrieve</a>() -> TodoRetrieveResponse</code>
- <code title="put /todos/:id">client.todos.<a href="./src/resources/todos.ts">update</a>({ ...params }) -> TodoUpdateResponse</code>
- <code title="get /todos">client.todos.<a href="./src/resources/todos.ts">list</a>() -> TodoListResponse</code>
- <code title="delete /todos/:id">client.todos.<a href="./src/resources/todos.ts">delete</a>() -> void</code>
- <code title="get /todos/:id/progress">client.todos.<a href="./src/resources/todos.ts">progress</a>() -> void</code>
- <code title="post /todos/:id/upload">client.todos.<a href="./src/resources/todos.ts">upload</a>({ ...params }) -> TodoUploadResponse</code>

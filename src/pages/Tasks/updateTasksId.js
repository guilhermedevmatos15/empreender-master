export default function updateTasksId(todos) {
   return todos.map((todo, index) => {
      return {
         id: index,
         task: todo.task
      }
   });
}
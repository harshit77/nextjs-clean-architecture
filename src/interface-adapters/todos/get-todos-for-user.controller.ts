
import { Todo } from "@/src/entities/models/todo"
import getTodosForUserUseCase from "@/src/application/use-cases/get-todo-use-case"

const presenter=(todos:Todo[])=>{
    return todos.map(todo=>({
        id:todo.id,
        todo:todo.todo,
        completed: todo.completed
    }))
}


export default async function getTodosForUserController():Promise<ReturnType<typeof presenter>>{
const todos= await getTodosForUserUseCase();
return presenter(todos)
}
import { InsertTodo } from "@/src/entities/models/todo";
import {getInjection} from "@/di/container"

export default async function createTodoUseCase(input:InsertTodo){
    const todoReposistory= getInjection("ITodoReposistory");
   // HINT: this is where you'd do authorization checks - is this user authorized to create a todo
      // for example: free users are allowed only 5 todos, throw an UnauthorizedError if more than 5


    const newTodo= await todoReposistory.createTodo({
      todo:input.todo,
    })

    return newTodo
  }
import { InputParseError } from "@/src/entities/errors/common";
import type { Todo } from "@/src/entities/models/todo"
import {z} from "zod";
import toggleTodoUseCase from "@/src/application/use-cases/toggle-todo-use-case"

function presenter(todo: Todo) {
  return {
    id: todo.id,
    todo: todo.todo,
    completed: todo.completed,
  };
}



const toggleTodo= z.number()

export default async function(input:z.infer<typeof toggleTodo>){
    const {data, error:inputParseError}= toggleTodo.safeParse(input);
    if(inputParseError) {
            throw new InputParseError("Invalid data", { cause: inputParseError });
    }
    const todo = await toggleTodoUseCase(data);
    return presenter(todo)
}
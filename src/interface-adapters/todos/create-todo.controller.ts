// Here you'd do input validation and authentication;

import type {Todo} from "@/src/entities/models/todo";
import {insertSchema} from "@/src/entities/models/todo"
import { InputParseError } from "@/src/entities/errors/common";
import createTodoUseCase from "@/src/application/use-cases/create-todo.use-case"

const presenter=(todo:Todo)=>{
    return {
        id:todo.id,
        completed:todo.completed,
        todo:todo.todo,
    }
}

export default async function createTodoController(input:any):Promise<ReturnType<typeof presenter>>{
    const {data, error:inputParseError}= insertSchema.safeParse(input)
    if(inputParseError) {
        throw new InputParseError("Invalid Data",{cause:inputParseError})
    }
    const todo = await createTodoUseCase(data);
return presenter(todo)  
}
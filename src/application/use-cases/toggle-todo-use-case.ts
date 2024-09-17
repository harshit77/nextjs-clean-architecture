import { getInjection } from "@/di/container";
import { NotFoundError } from "@/src/entities/errors/common";

export default async function(todoId:number) {
    const todoReposistory= getInjection("ITodoReposistory");
    const todo= await todoReposistory.getTodo(todoId);
    if(!todoId){
        throw new NotFoundError("Todo doesn't exist")
    }
    const updatedTodo= await todoReposistory.toggleTodo(todoId,{completed:!todo});

    return updatedTodo;
}
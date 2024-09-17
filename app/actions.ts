"use server";

import {DatabaseOperationError, InputParseError,NotFoundError} from "@/src/entities/errors/common"
import { revalidatePath } from "next/cache";
import createTodoController from "@/src/interface-adapters/todos/create-todo.controller"
import toggleTodoController from "@/src/interface-adapters/todos/toggle-todo-controller";

export const createTodo=async (formData:FormData)=> {
    try{
    const data= Object.fromEntries((formData.entries()));
    await createTodoController(data);
    }
    catch(error) {
        if(error instanceof InputParseError) {
            return {error:error.message}
        }

         if (error instanceof NotFoundError) {
          return { error: "Todo does not exist" };
        }

         if(error instanceof DatabaseOperationError) {
            return {error:error.message}
        }
        return {
            error:"Something went wrong"
        }
    }
    revalidatePath("/")
    return {success:true}
}

export const toggleTodo= async(todoId:number)=>{
    try{
     await toggleTodoController(todoId)
    }
    catch(error) {
        if(error instanceof InputParseError) {
            return {error:error.message}
        }

         if(error instanceof DatabaseOperationError) {
            return {error:error.message}
        }
        return {
            error:"Something went wrong"
        }
    }
    revalidatePath("/");
    return {success:true}
}
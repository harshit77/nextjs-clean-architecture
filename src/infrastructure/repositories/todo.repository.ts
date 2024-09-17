import { injectable } from "inversify";
import { ITodoReposistory } from "@/src/application/repositories/todo.repository.interface";
import type { InsertTodo,Todo } from "@/src/entities/models/todo";
import prisma from "@/lib/db";
import { DatabaseOperationError } from "@/src/entities/errors/common";

@injectable()
export class TodoRepository implements ITodoReposistory {
    async createTodo(todo:InsertTodo):Promise<Todo> {
       try{
        const todoResult= await prisma.todo.create({
            data:{
                todo:todo.todo,
                completed:false
            }
        })
        return todoResult
    }
    catch(error) {
        throw new DatabaseOperationError("Failed to create Todo",{cause:error})
        }
    }

    async toggleTodo(todoId:number,input:Partial<Todo>):Promise<Todo> {
       try{
            
            const updatedTodo=await prisma.todo.update({
                where:{
                    id:todoId
                },
                data:input
            });
            return updatedTodo;
        }
        catch(error) {
        throw new DatabaseOperationError("Failed to create Todo",{cause:error})
        }
    }

    async getTodo(todoId:number):Promise<Todo| undefined> {
            const findTodoById= await prisma.todo.findUnique({
                            where:{
                                id:todoId
                            }
                        })
      return findTodoById ?? undefined
    }
}
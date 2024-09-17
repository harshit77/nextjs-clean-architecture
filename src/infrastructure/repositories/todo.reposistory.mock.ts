import {InsertTodo, Todo} from "@/src/entities/models/todo";
import { ITodoReposistory } from "@/src/application/repositories/todo.repository.interface";
import { injectable } from "inversify";


@injectable()
export class MockTodoReposistory implements ITodoReposistory {
    private _todos:Todo[];
    constructor() {
        this._todos=[]
    }
    async createTodo(todo: InsertTodo): Promise<Todo> {
        const id= this._todos.length+1;
        const created= {...todo,id,completed:false};
        this._todos.push(created);
        return created;
    }
   async getTodo(todoId: number): Promise<Todo | undefined> {
        const findTodo= this._todos.find(t=> t.id===todoId)
        return findTodo;
    }
   async  toggleTodo(todoId: number, input: Partial<Todo>): Promise<Todo> {
         const existingTodoIndex= this._todos.findIndex(t=> t.id===todoId)
        const updatedTodo={
            ...this._todos[existingTodoIndex],
            input
        }
        this._todos[existingTodoIndex]= updatedTodo;
        return updatedTodo;

    }
}
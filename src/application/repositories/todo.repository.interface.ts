import type {Todo,InsertTodo} from "@/src/entities/models/todo"

export interface ITodoReposistory {
    createTodo(todo:InsertTodo): Promise<Todo>;
     toggleTodo(todoId:number,input:Partial<Todo>): Promise<Todo>;
     getTodo(todoId:number): Promise<Todo|undefined >;

}
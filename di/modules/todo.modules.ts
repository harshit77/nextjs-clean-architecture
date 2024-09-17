import { ContainerModule,interfaces } from "inversify";
import { DI_SYMBOLS } from "../types";
import {TodoRepository} from "@/src/infrastructure/repositories/todo.repository"
import { ITodoReposistory } from "@/src/application/repositories/todo.repository.interface";
import { MockTodoReposistory } from "@/src/infrastructure/repositories/todo.reposistory.mock";

const initializeModule= (bind:interfaces.Bind)=>{
    bind<ITodoReposistory>(DI_SYMBOLS.ITodoReposistory).to(process.env.NODE_ENV  === "test" ? MockTodoReposistory:TodoRepository);
}


export const TodoModule= new ContainerModule(initializeModule)
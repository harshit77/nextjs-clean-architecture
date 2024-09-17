import "reflect-metadata"
import {afterEach,beforeEach,expect,test} from "vitest";
import { initializeContainer,destoryContainer } from "@/di/container";
import createTodoUseCase from "@/src/application/use-cases/create-todo.use-case"

beforeEach(()=> initializeContainer());
afterEach(()=>destoryContainer());


test("Create todo ",async ()=>{
    expect(createTodoUseCase({todo:"Write unit test"})).resolves.toMatchObject({
        id:1,
        todo:"Write unit test",
        completed:false
    })
})




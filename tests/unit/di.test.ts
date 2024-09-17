import "reflect-metadata"
import { initializeContainer,destoryContainer, getInjection } from "@/di/container";
import { MockTodoReposistory } from "@/src/infrastructure/repositories/todo.reposistory.mock";
import { beforeEach,afterEach,test,expect } from "vitest";


beforeEach(()=> initializeContainer());
afterEach(()=> destoryContainer());

test("Mock reposistory version",()=>{
    const mockITodoRepsository= getInjection("ITodoReposistory");
    expect(mockITodoRepsository).toBeInstanceOf(MockTodoReposistory);
})
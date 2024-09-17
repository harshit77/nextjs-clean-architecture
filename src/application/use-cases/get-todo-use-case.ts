import { getInjection } from "@/di/container"


export default async function getTodosForUserUseCase() {
    const todoRepository= getInjection("ITodoReposistory");
    const todos= await todoRepository.getTodosForUser();
    return todos;
}
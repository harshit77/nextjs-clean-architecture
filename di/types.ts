import {ITodoReposistory} from "@/src/application/repositories/todo.repository.interface"

export const DI_SYMBOLS={
    ITodoReposistory:Symbol.for("ITodoReposistory")
}


export interface DI_RETURN_TYPES {
ITodoReposistory:ITodoReposistory
}
import { Container } from "inversify";
import { TodoModule } from "./modules/todo.modules";
import {DI_SYMBOLS,DI_RETURN_TYPES} from "./types"

const ApplicationContainer= new Container({
    defaultScope:"Singleton"
});

export const initializeContainer=()=>{
    ApplicationContainer.load(TodoModule);
}

export const destoryContainer=()=>{
    ApplicationContainer.unload(TodoModule)
}

if(process.env.NODE_ENV !=="test")
    initializeContainer();


export const getInjection=<T extends keyof typeof DI_SYMBOLS> (symbol:T): DI_RETURN_TYPES[T]=>{
    return ApplicationContainer.get(DI_SYMBOLS[symbol])
}

export {ApplicationContainer}


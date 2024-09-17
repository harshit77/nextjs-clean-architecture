"use client"

import { Checkbox } from "@/app/_components/ui/checkbox";
import type {Todo} from "@/src/entities/models/todo"
import { useCallback } from "react";
import { toast } from "sonner";
import {toggleTodo} from "./actions"
import { cn } from "@/lib/utils";


export default function Todos({todos}:{todos:Todo[]}) {

    const handleTodo=useCallback(async(id:number)=>{
        const response= await toggleTodo(id);
        if(response){
            if(response.error) {
                toast.error(response.error)
            }
            else if(response.success)
                toast.success("Todo toggled")
        }
    },[])

    return (
        <ul className="w-full">
            {todos.length>0 ? (todos.map((todo,index)=>{
                return <li key={index} className="flex items-center gap-4 hover:bg-muted/50 p-1 cursor-pointer">
                    <Checkbox id={`checbox-${todo.id}`} checked={todo.completed} onCheckedChange={()=> handleTodo(todo.id)} />
                    <label className={cn("flex-1",{"line-through text-muted-foreground":todo.completed})} htmlFor={`checkbox-${todo.id}`}>{todo.todo}</label>
                </li>
            })):<p>No record found</p>}

        </ul>
    )
}
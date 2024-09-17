"use client"

import { useRef } from "react";
import {Input} from "@/app/_components/ui/input";
import {Button} from "@/app/_components/ui/button";
import {toast} from "sonner";
import {createTodo} from "./actions"

export default function AddTodo() {
    const todoRef= useRef<HTMLInputElement>(null);
    const handleSubmit=async (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const formData= new FormData(event.currentTarget);
        const response= await createTodo(formData);
        if(response){
            if(response.error)
                toast.error("Error occur during Adding todo");
            else if(response.success) {
                toast.success("Added Todo");
                 if(todoRef.current)
                    todoRef.current.value=""
            }
        }
       
     
    }
    return (
        <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <Input type="text" ref={todoRef} name="todo" placeholder="Add Todos" className="flex-1"  />
        <Button variant="outline" type="submit">+</Button>
        </form>
    )
}   
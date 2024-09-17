
import { Card,CardContent,CardHeader,CardTitle } from "@/app/_components/ui/card"
import UserMenu from "@/app/_components/ui/user-menu";
import { Separator } from "@/app/_components/ui/separator";
import AddTodo from "@/app/add-todo";
import Todos from "@/app/todos";
import getTodosForUserController from "@/src/interface-adapters/todos/get-todos-for-user.controller"

const getTodosForUser=async()=>{
  try{
      const todos= await getTodosForUserController();
      return todos
  }
  catch(error){
    throw new Error("Faild to fetch User")
  }
}


export  default async function Home() {
  const todos= await getTodosForUser();
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="flex flex-row items-center">
        <CardTitle className="flex-1">Todos</CardTitle>
        <UserMenu/>
      </CardHeader>
      <Separator/>
    
      <CardContent className="flex flex-col p-6 gap-4">
        <AddTodo/>
        <Todos todos={todos}/>
      </CardContent>
      </Card>
  );
}

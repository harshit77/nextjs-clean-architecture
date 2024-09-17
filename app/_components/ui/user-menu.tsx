"use client"

import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger} from "./dropdown-menu"
import { Avatar,AvatarFallback } from "./avatar"

export default function UserMenu() {
    return (
    <DropdownMenu>
        <DropdownMenuTrigger>
        <Avatar>
            <AvatarFallback></AvatarFallback>
        </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>SignOut</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    )
}
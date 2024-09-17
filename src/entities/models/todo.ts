import {z} from "zod"

export const selectSchema=z.object({
    id:z.number(),
    todo: z.string(),
    completed: z.boolean(),
})

export type Todo= z.infer<typeof selectSchema>

export const insertSchema=selectSchema.pick({
    todo:true,
})

export type InsertTodo= z.infer<typeof insertSchema>
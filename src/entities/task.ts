import { z } from 'zod'

export type Task = {
  id: string
  title: string
  description: string
  status: 'not-started' | 'in-progress' | 'completed'
  deadline: Date
}

export type CreateTaskDto = {
  title: string
  description: string
  status: 'not-started' | 'in-progress' | 'completed'
  deadline: Date
}

export const AddTaskSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'タイトルを入力してください' })
    .max(20, { message: 'タイトルは20文字以内で入力してください' }),
  description: z
    .string()
    .min(1, { message: '説明を入力してください' })
    .max(140, { message: '説明は140文字以内で入力してください' }),
  deadline: z.string().min(1, { message: '期限を入力してください' }),
})

export type AddTaskSchemaType = z.infer<typeof AddTaskSchema>

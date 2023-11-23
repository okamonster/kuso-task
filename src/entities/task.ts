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

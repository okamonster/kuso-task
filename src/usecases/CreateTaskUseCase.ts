import { CreateTaskDto } from '~/entities/task'
import TaskRepository from '~/infrastructures/TaskRepository'

export default class CreateTaskUseCase {
  taskRepository: TaskRepository
  constructor() {
    this.taskRepository = new TaskRepository()
  }

  async execute(data: CreateTaskDto) {
    const id = await this.taskRepository.create(data)
    return id
  }
}

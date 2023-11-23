import TaskRepository from '~/infrastructures/TaskRepository'

export default class FetchTasksUseCase {
  taskRepository: TaskRepository
  constructor() {
    this.taskRepository = new TaskRepository()
  }
  execute() {
    return this.taskRepository.fetchAll()
  }
}

import { useEffect, useState } from 'react'

import styles from './style.module.scss'

import { BasicButton } from '~/components/Buttons/BasicButton'
import { AddTaskForm } from '~/components/Forms/AddTaskForm'
import { TaskList } from '~/components/List/TaskList'
import { ModalBase } from '~/components/Modal/ModalBase'
import { Yabai } from '~/components/Yabai'
import { Task } from '~/entities/task'
import FetchTasksUseCase from '~/usecases/FetchTasksUseCase'

const fetchTasksUseCase = new FetchTasksUseCase()

export const TopContainer = (): React.ReactElement => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isYabai, setIsYabai] = useState(false)
  const [tasks, setTasks] = useState<Array<Task>>([])
  const [deadline, setDeadline] = useState<Date>(new Date())
  useEffect(() => {
    const func = async () => {
      const tasks = await fetchTasksUseCase.execute()
      setTasks(tasks)
    }
    func()
  }, [tasks])
  return (
    <div className={styles.topContainer}>
      <BasicButton
        onClick={() => {
          setIsFormOpen(!isFormOpen)
        }}
      >
        Add Task
      </BasicButton>
      <TaskList status="not-started" tasks={tasks} />
      <TaskList status="in-progress" tasks={tasks} />
      <TaskList status="complete" tasks={tasks} />
      {isYabai && <Yabai deadline={deadline} />}
      {isFormOpen && (
        <ModalBase
          label="タスクを追加"
          close={() => {
            setIsFormOpen(!isFormOpen)
          }}
        >
          <AddTaskForm
            onChangeYabai={() => setIsYabai(!isYabai)}
            setDeadline={setDeadline}
          />
        </ModalBase>
      )}
    </div>
  )
}

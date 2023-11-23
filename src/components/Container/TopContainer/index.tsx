import { useEffect, useState } from 'react'

import styles from './style.module.scss'

import { BasicButton } from '~/components/Buttons/BasicButton'
import { TaskList } from '~/components/List/TaskList'
import { Yabai } from '~/components/Yabai'
import { Task } from '~/entities/task'
import FetchTasksUseCase from '~/usecases/FetchTasksUseCase'

const fetchTasksUseCase = new FetchTasksUseCase()

export const TopContainer = (): React.ReactElement => {
  const [isYabai, setIsYabai] = useState(false)
  const [tasks, setTasks] = useState<Array<Task>>([])
  useEffect(() => {
    const func = async () => {
      const tasks = await fetchTasksUseCase.execute()
      setTasks(tasks)
    }
    func()
  }, [])
  console.log(tasks)
  return (
    <div className={styles.topContainer}>
      <BasicButton
        onClick={() => {
          setIsYabai(!isYabai)
        }}
      >
        Add Task
      </BasicButton>
      <TaskList status="not-started" tasks={tasks} />
      <TaskList status="in-progress" tasks={tasks} />
      <TaskList status="complete" tasks={tasks} />
      {isYabai && <Yabai />}
    </div>
  )
}

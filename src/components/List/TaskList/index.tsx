import classNames from 'classnames'

import styles from './style.module.scss'

import { TaskCard } from '~/components/Cards/TaskCard'
import { Task } from '~/entities/task'

type Props = {
  status: 'not-started' | 'in-progress' | 'complete'
  tasks: Array<Task>
}
export const TaskList = ({ status, tasks = [] }: Props): React.ReactElement => {
  const badgeClass = classNames(styles.badge, styles[status])

  const filterdTasks = tasks.filter((task) => task.status === status)
  return (
    <div className={styles.listContainer}>
      <div className={styles.status}>
        <div className={badgeClass}></div>
        {status === 'not-started' && <p>未着手</p>}
        {status === 'in-progress' && <p>進行中</p>}
        {status === 'complete' && <p>完了</p>}
      </div>
      <div className={styles.taskList}>
        {filterdTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}

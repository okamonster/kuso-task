import dayjs from 'dayjs'

import styles from './style.module.scss'

import { StatusButton } from '~/components/Buttons/StatusButton'
import { Task } from '~/entities/task'

type Props = {
  task: Task
}

export const TaskCard = ({ task }: Props): React.ReactElement => {
  return (
    <div className={styles.taskCard}>
      <div>
        <h1>{task.title}</h1>
        <p>期限:{dayjs(task.deadline).format('YYYY/MM/DD')}</p>
      </div>
      <StatusButton status="not-start" onClick={() => {}}>
        未完了
      </StatusButton>
    </div>
  )
}

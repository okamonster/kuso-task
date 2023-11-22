import classNames from 'classnames'

import styles from './style.module.scss'

import { TaskCard } from '~/components/Cards/TaskCard'

type Props = {
  status: 'not-start' | 'in-progress' | 'complete'
}
export const TaskList = ({ status }: Props): React.ReactElement => {
  const badgeClass = classNames(styles.badge, styles[status])
  return (
    <div className={styles.listContainer}>
      <div className={styles.status}>
        <div className={badgeClass}></div>
        {status === 'not-start' && <p>未着手</p>}
        {status === 'in-progress' && <p>進行中</p>}
        {status === 'complete' && <p>完了</p>}
      </div>
      <div className={styles.taskList}>
        <TaskCard />
      </div>
    </div>
  )
}

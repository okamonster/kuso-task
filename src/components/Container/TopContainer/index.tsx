import styles from './style.module.scss'

import { BasicButton } from '~/components/Buttons/BasicButton'
import { TaskList } from '~/components/List/TaskList'

export const TopContainer = (): React.ReactElement => {
  return (
    <div className={styles.topContainer}>
      <BasicButton>Add Task</BasicButton>
      <TaskList status="not-start" />
    </div>
  )
}

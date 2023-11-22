import styles from './style.module.scss'

import { StatusButton } from '~/components/Buttons/StatusButton'

export const TaskCard = (): React.ReactElement => {
  return (
    <div className={styles.taskCard}>
      <div>
        <h1>タイトル</h1>
        <p>期限:</p>
      </div>
      <StatusButton status="not-start" onClick={() => {}}>
        未完了
      </StatusButton>
    </div>
  )
}

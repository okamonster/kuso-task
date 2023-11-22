import styles from './style.module.scss'

export const TaskCard = (): React.ReactElement => {
  return (
    <div className={styles.taskCard}>
      <div>
        <h1>タイトル</h1>
        <p>期限:</p>
      </div>
    </div>
  )
}

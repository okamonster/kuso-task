import styles from './style.module.scss'

import { Header } from '~/components/Header'

export const TopContainer = (): React.ReactElement => {
  return (
    <div className={styles.topContainer}>
      <Header>SimpleTask</Header>
    </div>
  )
}

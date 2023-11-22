import styles from './style.module.scss'

type Props = {
  children: React.ReactNode
}

export const Header = ({ children }: Props): React.ReactElement => {
  return (
    <div className={styles.header}>
      <h1>{children}</h1>
    </div>
  )
}

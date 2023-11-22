import classNames from 'classnames'

import styles from './style.module.scss'

type Props = {
  children: React.ReactNode
  onClick: () => void
  status: 'not-start' | 'in-progress' | 'complete'
}
export const StatusButton = ({
  children,
  onClick,
  status,
}: Props): React.ReactElement => {
  const buttonClass = classNames(styles.statusButton, styles[status])
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}▷
    </button>
  )
}

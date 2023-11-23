import styles from './style.module.scss'

type Props = {
  label: string
  children: React.ReactNode
  close: () => void
}
export const ModalBase = ({
  label,
  children,
  close,
}: Props): React.ReactElement => {
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <div className={styles.labelArea}>
          <h1>{label}</h1>
          <button className={styles.closeButton} onClick={close}>
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

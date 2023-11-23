import styles from './style.module.scss'
export const Yabai = (): React.ReactElement => {
  return (
    <div className={styles.yabaiPage}>
      <h1>ご登録ありがとうざいます！</h1>
      <div className={styles.odosiSection}>
        <div className={styles.odosiBox}>
          <p>期日内に振り込み手続きをする必要があります。</p>
        </div>
        <p className={styles.deadline}>振り込み期日まで : 〜日~時間~秒</p>
      </div>

      <div className={styles.priceSection}>
        <p>請求金額</p>
        <h1 className={styles.price}>￥85,000 -</h1>
        <p className={styles.doukatsuMessage}>
          ※ 期日内にご入金が確認できなかった場合、
          <br />
          <span>法的措置</span>を取らせていただきます。
        </p>
      </div>
    </div>
  )
}

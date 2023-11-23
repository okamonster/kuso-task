import { useState } from 'react'

import styles from './style.module.scss'

type Props = {
  deadline: Date
}
export const Yabai = ({ deadline }: Props): React.ReactElement => {
  const [now, setNow] = useState(new Date())

  setInterval(() => {
    setNow(new Date())
  }, 1000)

  const diffSecond = Math.floor((deadline.getTime() - now.getTime()) / 1000)
  const diffDay = Math.floor(diffSecond / 60 / 60 / 24)
  const diffHour = Math.floor((diffSecond / 60 / 60) % 24)
  const diffMinute = Math.floor((diffSecond / 60) % 60)
  const diffSecond2 = Math.floor(diffSecond % 60)

  return (
    <div className={styles.yabaiPage}>
      <h1>ご登録ありがとうざいます！</h1>
      <div className={styles.odosiSection}>
        <div className={styles.odosiBox}>
          <p>期日内に振り込み手続きをする必要があります。</p>
        </div>
        <p className={styles.deadline}>
          振り込み期日まで : {diffDay}日{diffHour}時間{diffMinute}分
          {diffSecond2}秒
        </p>
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

import { useState } from 'react'

import styles from './style.module.scss'

import { BasicButton } from '~/components/Buttons/BasicButton'
import { TaskList } from '~/components/List/TaskList'
import { Yabai } from '~/components/Yabai'

export const TopContainer = (): React.ReactElement => {
  const [isYabai, setIsYabai] = useState(false)
  return (
    <div className={styles.topContainer}>
      <BasicButton
        onClick={() => {
          setIsYabai(!isYabai)
        }}
      >
        Add Task
      </BasicButton>
      <TaskList status="not-start" />
      <TaskList status="in-progress" />
      <TaskList status="complete" />
      {isYabai && <Yabai />}
    </div>
  )
}

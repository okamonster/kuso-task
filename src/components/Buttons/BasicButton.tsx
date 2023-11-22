import { ComponentPropsWithoutRef } from 'react'

import classNames from 'classnames'

import styles from './style.module.scss'

type Props = {
  varient?: 'primary' | 'secondary' | 'tertiary'
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
} & ComponentPropsWithoutRef<'button'>

export const BasicButton = ({
  varient = 'primary',
  children,
  size = 'md',
}: Props): React.ReactElement => {
  const buttonClass = classNames(
    styles.basicButton,
    styles[varient],
    styles[size],
  )
  return <button className={buttonClass}>{children}</button>
}

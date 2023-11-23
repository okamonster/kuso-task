import { Dispatch, SetStateAction } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import styles from './style.module.scss'

import { BasicButton } from '~/components/Buttons/BasicButton'
import { AddTaskSchema, AddTaskSchemaType } from '~/entities/task'
import CreateTaskUseCase from '~/usecases/CreateTaskUseCase'

const createTaskUseCase = new CreateTaskUseCase()

type Props = {
  onChangeYabai: () => void
  setDeadline: Dispatch<SetStateAction<Date>>
}

export const AddTaskForm = ({
  onChangeYabai,
  setDeadline,
}: Props): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddTaskSchemaType>({
    resolver: zodResolver(AddTaskSchema),
  })
  const onSubmit = async (data: AddTaskSchemaType) => {
    await createTaskUseCase.execute({
      ...data,
      deadline: new Date(data.deadline),
      status: 'not-started',
    })
    setDeadline(new Date(data.deadline))
    onChangeYabai()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputContainer}>
        <label htmlFor="title">タイトル</label>
        <input type="text" id="title" {...register('title')} />
        {errors.title?.message && <p>{errors.title?.message}</p>}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="description">詳細</label>
        <textarea id="description" {...register('description')} />
        {errors.description?.message && <p>{errors.description?.message}</p>}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="deadline">期限</label>
        <input type="date" id="deadline" {...register('deadline')} />
        {errors.deadline?.message && <p>{errors.deadline?.message}</p>}
      </div>
      <BasicButton varient="secondary" type="submit">
        追加
      </BasicButton>
    </form>
  )
}

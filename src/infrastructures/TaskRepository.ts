import { addDoc, collection, getDocs, query } from 'firebase/firestore'

import { CreateTaskDto, Task } from '~/entities/task'
import { firestore } from '~/libs/firebase'

const TaskCollection = 'tasks'

export default class TaskRepository {
  async fetchAll() {
    const res = await getDocs(query(collection(firestore, TaskCollection)))
    return res.docChanges().map((snapshot) => {
      const docData = snapshot.doc.data()

      const Task = {
        id: snapshot.doc.id,
        title: docData.title,
        description: docData.description,
        status: docData.status,
        deadline: docData.deadline.toDate(),
      } as Task
      return Task
    })
  }

  async create(data: CreateTaskDto) {
    const dto = {
      ...data,
      deadline: new Date(data.deadline),
    }

    const docRef = await addDoc(collection(firestore, TaskCollection), dto)

    return docRef.id
  }
}

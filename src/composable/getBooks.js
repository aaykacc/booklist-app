import { ref } from 'vue'
import { firebaseApp } from '../firebase/config'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const getBooks = async () => {
  const database = getFirestore()
  const firebaseFef = collection(database, 'books')
  const firebaseDocs = await getDocs(firebaseFef)
  const doc = firebaseDocs.docs.map((doc) => doc.id)
  const data = firebaseDocs.docs.map((doc) => doc.data())

  return { data, doc }
}

export default getBooks
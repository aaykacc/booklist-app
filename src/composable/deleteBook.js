import { ref } from 'vue'
import { firebaseApp } from '../firebase/config'
import { getFirestore, collection, doc, deleteDoc, getDocs } from 'firebase/firestore/lite'

const deleteBook = async (id) => {
  const database = getFirestore()
  const firebaseFef = collection(database, 'books')
  const firebaseDocs = await getDocs(firebaseFef)
  const data = firebaseDocs.docs.map((doc) => doc.data())
  const docRef = doc(database, 'books', id)
  await deleteDoc(docRef);

  return data
}

export default deleteBook
import { store } from './FirebaseService.js'
import { doc, getDoc, getDocs, query, collection } from 'firebase/firestore'

class DatabaseService {
    static async loadAllPublishedBuilds() {
        let q = query(collection(store, 'published-builds'))
        const querySnapshot = await getDocs(q)
        let data = []
		querySnapshot.forEach((doc) => {
			let build = doc.data()
			build.id = doc.id
			data.push(build)
		})
        return data
    }

    static async loadPublishedBuildWithId(id) {
        const docRef = doc(store, 'published-builds', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            let build = docSnap.data()
            build.id = docSnap.id
            return build
        } else {
            throw new Error(`No build with id ${id}`)
        }
    }
}
export default DatabaseService
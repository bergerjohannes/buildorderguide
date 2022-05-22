import { store } from './FirebaseService.js'
import { doc, getDoc, getDocs, updateDoc, query, collection } from 'firebase/firestore'

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

    static async loadProfileInfo(user) {
        const docRef = doc(store, 'users', user.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            let userData = docSnap.data()
            return userData
        } else {
            throw new Error(`No user with id ${user.uid} found`)
        }
    }

    static async saveProfileInfo(user, email, profileId) {
        const docRef = doc(store, 'users', user.uid)

        const userData = { 'email': email, 'profile_id': profileId }

        await updateDoc(docRef, userData).then(() => {
            console.log('Saved profile info')
        })
            .catch((error) => {
                console.error(`Error saving profile info for user with id ${user.uid}: ${error}`)
            })
    }
}
export default DatabaseService
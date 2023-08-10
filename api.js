import { initializeApp } from "firebase/app"
import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc, 
    getDocs, 
    query,
    where
} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBTJFCU1mN2zLEa8t3QajnFyGfwD3Q8SHA",
  authDomain: "vanlife-e6801.firebaseapp.com",
  projectId: "vanlife-e6801",
  storageBucket: "vanlife-e6801.appspot.com",
  messagingSenderId: "633047999208",
  appId: "1:633047999208:web:f6e5430fb3451535c39f5d"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")


function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

export async function getVans(){
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans(){
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
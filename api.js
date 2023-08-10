import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore/lite"

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

// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
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
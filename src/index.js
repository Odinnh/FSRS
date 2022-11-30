// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import {
    getFirestore, doc, docs, collection,
    setDoc, getDoc, getDocs, query
} from 'firebase/firestore'

import { propigate } from './js/app.js'
let loadouts = []
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9ehr9yYkmaMmBq6YruoL427ayejRnALc",
    authDomain: "osfs-bad35.firebaseapp.com",
    projectId: "osfs-bad35",
    storageBucket: "osfs-bad35.appspot.com",
    messagingSenderId: "871488353236",
    appId: "1:871488353236:web:8b25447afcd304a7bc5c41",
    measurementId: "G-RGC4CQSETR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore()
const auth = getAuth(app);
//detect auth state

let remoteLoadouts = doc(firestore, 'loadouts/DADnhxi0KuL4tDzN9EIx')


let loadoutIndex = 0
// async function propLoadouts() {
//     const mySnapshot = await getDoc(remoteLoadouts)
//     if (mySnapshot.exists()) {
//         const docData = mySnapshot.data()
//         loadouts.push(docData)
//         console.log(loadouts)
//     }

// }

async function queryForDocuments() {
    const playerLoadouts = query(
        collection(firestore, 'loadouts')
    )

    const querySnapshot = await getDocs(playerLoadouts)
    console.log(querySnapshot.docs)
    const allLoadouts = querySnapshot.docs.foreach((snap) => { 
        loadouts.push(snap.data())
    })
}

document.querySelector('.load-loadout').addEventListener('click', (e) => {
    loadoutIndex += 1
    let i = loadoutIndex % loadouts.length

    propigate(loadouts[i])
})

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in')
    } else {
        console.log('no user')
    }
})

queryForDocuments()

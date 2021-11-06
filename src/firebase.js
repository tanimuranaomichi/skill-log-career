import { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const {
    REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_DATABASE_URL,
    REACT_APP_FIREBASE_PROJECT_ID,
    REACT_APP_FIREBASE_STORAGE_BUCKET,
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    REACT_APP_FIREBASE_APP_ID,
} = process.env;

const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig)
const database = firebase.database()
export const DataRef = (name) => {
    const [Data, setData] = useState([])
    database.ref(name).orderByKey().limitToLast(10).on("value", (snapshot) => {
        const Data = snapshot.val()
        if (Data === null) return
        const entries = Object.entries(Data)
        const newData = entries.map((data) => {
            const [detail, skill] = data
            return { detail, ...skill }
        })
        setData(newData)
    });
    console.log(Data)
    return Data;
}
//export const messagesRef = database.ref('messages')
// export const pushMessage = ({ name, text }) => {
//   messagesRef.push({ name, text })
// }
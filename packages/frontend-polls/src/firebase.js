import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyB8U4vgCKgTF_eA8iiLzklXs__oIPtmOyk',
  authDomain: 'whats-next-javascript.firebaseapp.com',
  databaseURL: 'https://whats-next-javascript.firebaseio.com',
  projectId: 'whats-next-javascript',
  storageBucket: 'whats-next-javascript.appspot.com',
  messagingSenderId: '543827701875'
}

firebase.initializeApp(config)
const db = firebase.firestore()
db.settings({timestampsInSnapshots: true})

export {firebase, db}

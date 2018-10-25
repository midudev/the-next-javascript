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

const votesCollection = db.collection('votes')

function onAuthStateChanged(handler) {
  firebase.auth().onAuthStateChanged(userObject => {
    const user = userObject ? userObject.uid : false
    handler(user)
  })
}

function onGetVotesByProposal({proposal}, handler) {
  votesCollection
    .where('proposal', '==', proposal)
    .onSnapshot(querySnapshot => {
      let votes = []
      if (querySnapshot.docs.length > 0) {
        querySnapshot.forEach(function(doc) {
          const {vote} = doc.data()
          votes.push(vote)
        })
      }
      handler(votes)
    })
}

function onGetVotesByUser({user}, handler) {
  votesCollection.where('user', '==', user).onSnapshot(querySnapshot => {
    let votes = {}
    if (querySnapshot.docs.length > 0) {
      querySnapshot.forEach(function(doc) {
        const {proposal, vote} = doc.data()
        votes[proposal] = vote
      })
    }
    handler(votes)
  })
}

function setVote({proposal, user, vote}) {
  const votesPath = `${proposal}_${user}`
  votesCollection.doc(votesPath).set({proposal, user, vote})
}

function signInAnonymously() {
  return firebase.auth().signInAnonymously()
}

export {
  firebase,
  db,
  onAuthStateChanged,
  onGetVotesByProposal,
  onGetVotesByUser,
  setVote,
  signInAnonymously
}

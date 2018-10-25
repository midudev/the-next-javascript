/* eslint-disable react/prop-types */

import React, {Component} from 'react'
import {Score} from '../components/Score'

import {db} from '../firebase'

export class Iframe extends Component {
  state = {isReady: false, votes: []}

  componentDidMount() {
    db.collection('votes')
      .where('proposal', '==', this.props.match.params.proposal)
      .onSnapshot(querySnapshot => {
        let votes = []
        if (querySnapshot.docs.length > 0) {
          querySnapshot.forEach(function(doc) {
            const {vote} = doc.data()
            votes.push(vote)
          })
        }
        console.log(votes)
        this.setState({isReady: true, votes})
      })
  }
  render() {
    const {isReady} = this.state

    return (
      <div className="js-IframePage">
        {!isReady && (
          <h2 className="js-IframePage-loading">Loading scores... 🐭</h2>
        )}
        {isReady && <Score votes={this.state.votes} />}
      </div>
    )
  }
}

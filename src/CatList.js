// write your CatList component here

import React, { Component } from 'react'

class CatList extends Component {
  render() {
    const cats = this.props.catPics.map(
      cat => <img height="200" src={cat.url} key={cat.id} />
    )

    return (
      <div>
        {cats}
      </div>
    )
  }
}

export default CatList

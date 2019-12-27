// write your CatList component here
import React from 'react';

class CatList extends React.Component {

  listCats = () => {
    return this.props.catPics.map(pic=><img key={pic.id} src={pic.url} alt={pic.id} height="200px" border="10px"/>)
  }

  render(){
    return (
      <div>
      {this.listCats()}
      </div>
    )
  }
}

export default CatList;

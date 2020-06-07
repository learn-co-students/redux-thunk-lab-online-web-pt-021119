import React from 'react'

const CatList = props => {
    console.log(props.catPics)

  return(
    <div>
        {props.catPics.map(catPic => <img src={catPic.url} key={ catPic.id }/ >)}

    </div>
    
  )
}

export default CatList;
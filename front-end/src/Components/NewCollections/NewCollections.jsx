import React from 'react'
import './NewCollections.css'
import new_collections from '../Products/new_collections'
import Item from '../Items/Item_cover'
const NewCollections = () => {
  return (
    <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="new-collections-item">
            {new_collections.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections
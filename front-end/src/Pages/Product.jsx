import React,{useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Descriptionbox from '../Components/Descriptionbox/Descriptionbox'
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productID} = useParams(); // gets the product id from the url associated with the product route
  const product = all_product.find((e)=> e.id === Number(productID));
  return (
    <div>
      <Breadcrumb product={product}/>
      <ProductDisplay product={product}/>
      <Descriptionbox product={product}/>
    </div>
  )
}

export default Product
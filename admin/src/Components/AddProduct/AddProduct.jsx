import react from 'react'
import './AddProduct.css'
import upload_icon from '../../assets/upload_icon.png'
import { useState } from 'react'

const AddProduct = () => {
    const [is_discount, set_discount] = useState(true);
    const [image,setImage] = useState(false);
    const [productDetails,setProductDetails] = useState({
        name: "",
        image: "",
        category: "",
        old_price: "",
        new_price: "",
        is_discount: 'true',
        type: "",
        color: "",
        description: ""
    })
    
    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }
    const changeHandler = (e) => {
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const addProduct = async () => {
        console.log(productDetails);
        let responseData;
        let product = {...productDetails};

        product.is_discount = product.is_discount === 'true';

        let formData = new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        }).then((resp)=> resp.json()).then((data)=>{responseData = data});

        if(responseData.success){
            product.image = responseData.image_url;
            console.log(product);

            await fetch('http://localhost:4000/addproduct',{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp) => resp.json()).then((data) => {
                data.success?alert("Product Added"):alert("Failed")
            })
        }
    }
    return(
        <div className="add-product">
            <div className="addproduct-itemfield">
                <p>Product Title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder='Enter Here'/>
            </div>
            <div className='addproduct-price'>
                <div className="addproduct-itemfield">
                    <p>Listing Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Enter Here'/>
                </div>
                <div className="addproduct-itemfield">
                    <p>Discount</p>
                    <select value={productDetails.is_discount} name="is_discount" className='addproduct-selector' onChange={(e)=> {
                        set_discount(e.target.value === 'true');
                        changeHandler(e);
                    }}>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                </div>
                {is_discount === true && (
                    <div className="addproduct-itemfield">
                        <p>Old Price</p>
                        <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Enter Here'/>
                    </div>
                )}
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img className="upload_icon" src={image?URL.createObjectURL(image):upload_icon} alt="" />
                </label>
                <input onChange={imageHandler} type="file" name="image" id='file-input' hidden/>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className='addproduct-selector'>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <p>Type</p>
                <select value={productDetails.type} onChange={changeHandler} name="type" className='addproduct-selector'>
                    <option value="shoe">Footwear</option>
                    <option value="clothing">Clothing</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Colour</p>
                <input value={productDetails.color} onChange={changeHandler} type="text" name="color" placeholder='Enter Here'/>
            </div>
            <div className="addproduct-itemfield">
                    <p>Product Description</p>
                    <input value={productDetails.description} onChange={changeHandler} type="text" name="description" placeholder='Enter Here'/>
            </div>
            <button onClick={addProduct} className='addproduct-btn'>Add Product</button>
        </div>
    )
}
export default AddProduct

const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { Console } = require("console");
const { response } = require("express");

// res = response
// req = request

app.use(express.json());
app.use(cors());

// Database Connect With MongoDB
mongoose.connect("mongodb+srv://admin:test123@cluster0.vwnbtxr.mongodb.net/Jordan-Ecommerce");

//API Creation
app.get("/",(req,res)=>{
    res.send("Express app is running")
})

//Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req,file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//Creating Upload Endpoint For Images
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

//Schema For Creating Products

const Product = mongoose.model("Product",{
    id: {
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    is_discount: {
        type: Boolean,
        required: true,
    },
    new_price: {
        type: String,
        required: true,
    },
    old_price: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    }
})

app.post("/addproduct", async(req, res) => {
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        type: req.body.type,
        is_discount: req.body.is_discount,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
        description: req.body.description,
        color: req.body.color,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    })
});

// Creating API For Deleting Products
app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
});

// Creating API For Getting All Products
app.get('/allproducts', async (req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

//Schema for Creating User Model
const Users = mongoose.model('Users',{
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    Date: {
        type: Date,
        default: Date.now,
    }
})

// Creating Endpoint for User Sign-up
app.post('/signup',async(req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if (check) {
        return res.status(400).json({
            success:false,
            errors:"Existing user found with same email address"
        })
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,'secret_ecom');

    res.json({
        success: true,
        token
    })
})

// Creating Endpoint for User Login
app.post('/login',async(req,res)=> {
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const valid_password = user.password === req.body.password;
        if(valid_password){
            const data = {
                user: {
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({
                success: true,
                token
            })
        }
        else{
            res.json({
                success: false,
                errors: "Incorrect Password"
            })
        }
    }
    else{
        res.json({
            success: false,
            errors: "Wrong Email Address",
        })
    }
})

//Creating Middleware to Fetch User
    const fetchuser = async(req,res,next)=>{
        const token = req.header('auth-token');
        if(!token){
            res.status(401).send({errors:"Please authenticate using valid token"})
        }
        else{
            try{
                const data = jwt.verify(token,'secret_ecom')
                req.user = data.user;
                next();
            } 
            catch(error){
                res.status(401).send({errors:"Please authenticate using valid token"});
            }
        }
    }

//Creating Endpoint for Adding Cart Data
app.post('/addtocart',fetchuser,async (req, res)=>{
    console.log("Added",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.json({
        success:true,
    })
})

//Creating Endpoint to Remove Product from cartData
app.post('/removefromcart',fetchuser,async(req,res)=>{
    console.log("Removed",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed");
})

//Creating Endpoint to get Cart Data
app.post('/getcart',fetchuser,async(req,res)=>{
    console.log("Retrieving Cart Data");
    let userData = await Users.findOne({_id:req.user.id}); // get from middle ware which is fetchuser
    res.json(userData.cartData);
})

app.listen(port, (error)=> {
    if(!error){
        console.log("Server Running on " +port)
    }
    else{
        console.log("Error: "+error)
    }
});
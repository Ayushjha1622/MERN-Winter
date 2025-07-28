const Product = require('../Models/productModel')


// business logic


const getProducts = async(req, res) => {
    try {

        const allProducts = await Product.find();

        if (!allProducts || allProducts.length === 0) {
            res.json({
                message: "there is no product"
            })
        }

        // if we have products >= 1
        res.status(200).json({
            succcess: true,
            Products:allProducts
        })
    
    }
    catch(err){
        res.status(500).json({
            succcess: false,
            message:"Internal Server Error"
        })

    }

}


const createProduct = async (req, res) => {
    try {
        const {name, price, description, category} = req.body
        const newProduct = new Product({
            name, price, description, category
            })
            await newProduct.save()
            res.status(200).json({
                success: true,
                message: "Product created successfully",
            })

        }
        catch(err){
            res.status(500).json({
                succcess: false,
                message:"Internal Server Error"
            })
    
    }
}



const updateProduct = async(req, res) =>{
    try{
        const {id} = req.params
        const {name, price, description, category} = req.body
        const updatedProduct = await Product.findByIdAndUpdate(id, {name, price, description, category},{new:true})


        res.status(200).json({
            Product: updateProduct
        })
}

catch(err){
    res.status(500).json({
        succcess: false,
        message:"Internal Server Error"
    })

}
}
module.exports = {getProducts, updateProduct}
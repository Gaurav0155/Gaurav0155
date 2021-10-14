let productModule = require('../modules/product.moduls');
let helper = require("../utils/helper");
const {validationResult} = require('express-validator')
// product create--
exports.productCreate =  async (req,res)=>{
    try {
        console.log(req.body);
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                message:"place validate fields ",
                errors:errors
            })
        }
        else{
            let payload = req.body;
            // console.log(payload);
            let img = req.file
            if (!img) return res.json({
                status: 500,
                error: "please upload an image"
            });
            let options = {
                category_id :payload.category_id,
                product_name :payload.product_name,
                price :payload.price,
                description :payload.desc,
                img :img
            };
            console.log(options);
           let result =  await productModule.Create(options);
           console.log(result);
            res.status(201).json({
                status:201,
                result:result
            });
        }
        
    } catch (error) {
        
        res.json({
            error:error.message
        })
    }
}

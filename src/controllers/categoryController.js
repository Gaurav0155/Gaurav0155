let categoryModule = require('../modules/category.module');
let helper = require("../utils/helper");
const {validationResult} = require('express-validator');
// product create--


exports.categoryCreate = async (req, res) => {
    try {
        let category_name = req.body.category;
        let slug =    helper.autoGenrateSlug(category_name);
        let options = {
            category_name :category_name,
            category_slug : slug
        };
        console.log(options);
        let result =  await categoryModule.categoryCreate(options);
        res.json({ status:201, message:"created"})

    } catch (error) {
        console.log(error);
        res.json({
            error:error
        })
    }
}

exports.get = async (req,res)=>{
    try {
        let result = await categoryModule.findAll();
        res.json({
            data:result
        })
    } catch (error) {
        res.json({
            error:error
        })
    }
}
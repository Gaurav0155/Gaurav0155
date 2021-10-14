const {check} = require('express-validator')

exports.UserRegister = [
    check("firstname","min length 3 characters").isLength({min:3}),
    check("lastname","min length 3 characters").isLength({min:3}),
    check("department","min length 3 characters").isLength({min:3}),
    check("email","min length 3 characters").isEmail(),
    check("password","min length 3 characters").isLength({min:3}),
   
]

exports.ProductCreate = [
    check("category_id","Category is required").isLength({min:1}),
    check("product_name","").isString().isLength({min:256}),
    check("price"," only 0 and 1 ").isNumeric(),
    check("desc","min length 3 characters").isLength({max:2}),
   
]
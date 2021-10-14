const db = require('../config/conn');

exports.categoryCreate = (data)=>{
    return new Promise((resolve,reject)=>{
        Query = `INSERT into products_category set ?`
        db.query(Query,[data],(err,res)=>{
            if(err){
                var ErrorMessage = {
                    error:err
                }
                reject(ErrorMessage)
            }
            else{
                resolve(res)
               
            }
        })
    })
} 

exports.findAll = ()=>{
    return new Promise((resolve,reject)=>{
        Query = `SELECT * FROM products_category`
        db.query(Query,[data],(err,res)=>{
            if(err){
                var ErrorMessage = {
                    error:err
                }
                reject(ErrorMessage)
            }
            else{
                resolve(res)
               
            }
        })
    })   
}
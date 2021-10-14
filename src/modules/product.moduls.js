const db = require('../config/conn');
exports.Create = (data)=>{
    return new Promise((resolve,reject)=>{
        Query = `INSERT into products set ?`
        db.query(Query,[data],(err,res)=>{
            if(err){
                var ErrorMessage = {
                    error:"try agin"
                }
                reject(ErrorMessage)
            }
            else{
                resolve(res)
               
            }
        })
    })
} 


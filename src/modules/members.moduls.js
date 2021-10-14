const db = require('../config/conn');


exports.userPermission = (data)=>{
    return new Promise((resolve,reject)=>{
        Query = `INSERT into member_module set ?`
        db.query(Query,[data],(err,res)=>{
            if(err){
                var ErrorMessage = {
                    error:"try agin"
                }
                reject(ErrorMessage)
            }
            else{
                resolve(res)
                console.log(res);
            }
        })
    })
}

exports.delete = (id )=>{
    return new Promise((resolve,reject)=>{
        Query = `DELETE FROM member_module WHERE  user_id= ${id}`
        db.query(Query,(err,res)=>{
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

exports.update = (id , data)=>{
    console.log(data);
    return new Promise((resolve,reject)=>{
        Query = `Update member_module SET ? WHERE id= ${id}`
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
 
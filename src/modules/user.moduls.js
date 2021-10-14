const db = require('../config/conn');

exports.Create = (data)=>{
    return new Promise((resolve,reject)=>{
        Query = `INSERT into users set ?`
        db.query(Query,[data],(err,res)=>{
            if(err){
                reject(err.sqlMessage);
                // console.log(err.sqlMessage);
            }
            else{
                resolve(res);
            }
        })
    })
} 

exports.fidAll = ()=>{
    return new Promise((resolve,reject)=>{
        Query = `SELECT * FROM users `
        db.query(Query,(err,res)=>{
            if(err){
                var ErrorMessage = {
                    error:err.message
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
    return new Promise((resolve,reject)=>{
        Query = `Update users SET ? WHERE user_id= ${id}`
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
};

exports.delete = (id )=>{
    return new Promise((resolve,reject)=>{
        Query = `DELETE FROM users WHERE  user_id= ${id}`
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


exports.sideBar = ()=>{
    return new Promise((resolve,reject)=>{
        Query = `SELECT mm.module_link , mm.user_module , u.user_id ,mm.id FROM master_modules as mm JOIN member_module AS mu ON mm.id = mu.module_id JOIN users AS u ON u.user_id = mu.user_id; `
        db.query(Query,(err,res)=>{
            if(err){
                var ErrorMessage = {
                    error:err.message
                }
                reject(ErrorMessage)
            }
            else{
                resolve(res)
            
            }
        })
    })
}

exports.findModules = (data)=>{
    return new Promise((resolve,reject)=>{
        Query = `SELECT * FROM master_modules`
        db.query(Query,(err,res)=>{
            if(err){
              
                reject(err)
            }
            else{
                resolve(res)
            }
        })
    })
}


exports.findByid = (id)=>{
    return new Promise((resolve,reject)=>{
        Query = `SELECT * FROM users WHERE user_id = "${id} "`
        db.query(Query,(err,res)=>{
            if(err){
               console.log(err);
                reject(err)
            }
            else{
                resolve(res)
            }
        })
    })
}

exports.find = (data)=>{
    return new Promise((resolve,reject)=>{
        Query = `SELECT * FROM users WHERE email = "${data} "`
        db.query(Query,(err,res)=>{
            if(err){
               
                reject(err)
            }
            else{
                resolve(res)
            }
        })
    })
}

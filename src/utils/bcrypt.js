const bcrypt = require("bcrypt")


module.exports = {
    hashPassword:(value)=>{
        return new Promise( async (resolve, reject)=>{
           await bcrypt.hash(value,10,(err,res)=>{
              if(err){
                reject(err)
              }
              else{
                  resolve(res)
              }
            })
        })
    }
}

module.exports = {
    checkPassword:(plain,hash)=>{
        return new Promise((resolve, reject)=>{
            bcrypt.compare(plain,hash,(err,res)=>{
              if(err){
                reject(err)
              }
              else{
                  resolve(res)
              }
            })
        })
    }
}
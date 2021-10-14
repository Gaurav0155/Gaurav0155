const jwt = require('jsonwebtoken')


module.exports = {
    genrateToken:(value)=>{ 
        return new Promise( async (resolve, reject)=>{
              await   jwt.sign(value,'seecret key',(err,res)=>{
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
const userDbo = require('../dbo/users_dbo').User;
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const saveUser = async (req, resp) =>{
     try{
        let result = await userDbo.registerUser(req);
         resp.status(200).send(result);
     }catch(e){
       console.log('db error'+ e);
     }
    
}

// user login
const loginUser = async (req, resp) =>{
  try{
     let result = await userDbo.loginUser(req);
     let token = null;
      if(result===true){
        token = jwt.sign({ result }, config.jwtKey, {expiresIn: '30d'});
      }
      resp.status(200).send({status:result, token});
  }catch(e){
    console.log('db error'+ e);
  }
 
}



module.exports = {
    saveUser,
    loginUser
}
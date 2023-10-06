'use strict';

var sql_conn = require('../models');
const { Sequelize, Op, Model } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");
const date = require('date-and-time');
const now = new Date();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = {
    registerUser: async (req)=>{
        let status = false;
        // Create a new data
        const hash = bcrypt.hashSync(req.body.password, saltRounds);
        const dataSet = {
                            full_name: req.body.full_name,
                            email_id: req.body.email_id,
                            password: hash,
                            createdAt: date.format(now, 'YYYY-MM-DD HH:mm:ss')
                        }
        let result = await sql_conn.userModel.create(dataSet).then(()=>{
            status = true;
        }).catch((err)=>{
            console.log('DB Error: ', err);
            status = false;
        });
        return status;
    },


    loginUser: async (req)=>{
        let status = false;
        let result = await sql_conn.userModel.findOne({
            attributes:['password'],
            where:{
                email_id: req.body.email_id
            }
          });
          if(result !==null){
            status = bcrypt.compareSync(req.body.password, result.password);
          }
        return status;
    }

}


module.exports = {User};
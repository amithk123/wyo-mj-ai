'use strict';

var sql_conn = require('../models');
const { Sequelize, Op, Model } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");
const date = require('date-and-time');
const now = new Date();

const mjImages = {
    savePromptImageL1: async (file_name, type)=>{
        let status = false;
      // Create a new data
        const dataSet = {
                            file_name: file_name,
                            image_type: type,
                            createdAt: date.format(now, 'YYYY-MM-DD HH:mm:ss')
                        }
        let result = await sql_conn.mjImagesModel.create(dataSet).then(()=>{
            status = true;
        }).catch((err)=>{
            console.log('DB Error: ', err);
            status = false;
        });
        return status;
    },

    saveRecentPromptImage: async (prompt, file_name, message_id, message_hash)=>{
        let status = false;
      // Create a new data
        const dataSet = {
                            user_id: 0,
                            image: file_name,
                            prompt: prompt,
                            message_id: message_id,
                            message_hash: message_hash,
                            createdAt: date.format(now, 'YYYY-MM-DD HH:mm:ss')
                        }
        let result = await sql_conn.recentPromptImgModel.create(dataSet).then(()=>{
            status = true;
        }).catch((err)=>{
            console.log('DB Error: ', err);
            status = false;
        });
        return status;
    },

    //all recent design
    getRecentPromptImage: async (userId)=>{
        let result = await sql_conn.recentPromptImgModel.findAll({
            limit:4,
            where:{
                user_id: userId
            },
            order:[
              ['id', 'DESC']
            ]
          });
          return result;
    }
}


module.exports = {mjImages};
'use strict';

var sql_conn = require('../models');
const { Sequelize, Op, Model } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

const themeData = {
    getThemes: async (req)=>{
      let result = await sql_conn.themeModel.findAll({});
      return result;
    }, 

    //get theme levels
    getThemeLevels: async (themeId)=>{
      let result = await sql_conn.themeLevelsModel.findAll({
        attributes:['selection_order', 'table_name'],
        where:{
          theme_id: themeId
        },
        order:[
          ['selection_order', 'ASC']
        ]
      });
      return result;
    }
}


 


module.exports = {themeData};
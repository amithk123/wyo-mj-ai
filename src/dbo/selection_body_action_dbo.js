'use strict';

var sql_conn = require('../models');
const { Sequelize, Op, Model } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

const bodyActionData = {
    getBodyActionDataByThemeId: async (theme_id)=>{
      if(theme_id===''){
        let result = await sql_conn.selectionBodyActionModel.findAll();
        return result;
      }else{
        let result = await sql_conn.selectionBodyActionModel.findAll({
          where:{
              theme_id: theme_id
          }
        });
        return result;
      }
    }

}



module.exports = {bodyActionData};
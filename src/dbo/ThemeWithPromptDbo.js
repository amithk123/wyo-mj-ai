'use strict';

var sql_conn = require('../models');
const { Sequelize, Op, Model } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

const promptData = {
    //get theme prompt
    getPrompt: async (theme)=>{
      
      const whereClause = (theme==='')? {prompt: {[Op.ne]: ''}}: {theme: theme};
      let result = await sql_conn.themeWithPromptModel.findOne({
        attributes:['prompt'],
        where:
        whereClause
        ,
        order:[
          sequelize.random()
        ]
      });
      return result;
    },

    //get themes
    getThemes: async (print_type)=>{
      
      let result = await sql_conn.themeWithPromptModel.findAll({
        attributes:['theme', 'icon_image'],
        // where:{
        //   print_type: print_type
        // },
        order:[
         
            ['theme', 'ASC']
          
        ],
        group: ['theme']
      });
      return result;
    },

    //get suggestion by theme
    getSuggestionByTheme: async (theme)=>{
      
      let result = await sql_conn.themeWithPromptModel.findOne({
        attributes:['prompt'],
        where:{
          theme: theme
        },
        order:[
          sequelize.random()
        ]
      });
      return result;
    }
}


 


module.exports = {promptData};
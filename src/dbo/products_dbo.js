'use strict';

var sql_conn = require('../models');
const { Sequelize, Op, Model, col } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

const productData = {
    //get parent product
    getParentProduct: async (category)=>{
      let result = await sql_conn.productBaseModel.findAll({
        attributes:['product_type', 'style', 'product_img', 'product_title', 'parent_sku', 'print_type', 'filter_available', 'product_type_icon'],
        where:{
            main_category: category
        },
        order:[
          ['product_type', 'DESC']
        ]
      });
      return result;
    },

     //get product
     getProduct: async (parentSku)=>{
      let result = await sql_conn.productModel.findAll({
        where:{
            parent_sku: parentSku
        },
        order:[
          ['size_number', 'ASC']
        ]
      });
      return result;
    },

    //get themes
    // getThemes: async (theme)=>{
      
    //   let result = await sql_conn.themeWithPromptModel.findAll({
    //     attributes:['theme'],
    //     order:[
         
    //         ['theme', 'ASC']
          
    //     ],
    //     group: ['theme']
    //   });
    //   return result;
    // }



    //get style
    getStyle: async (parentSku)=>{
      let result = await sql_conn.styleModel.findAll({
        order:[
          ['style_name', 'ASC']
        ]
      });
      return result;
    },


    
    //get style
    getFilter: async (parentSku, color)=>{
      let result = await sql_conn.filterModel.findAll({
        where:{
          parent_sku: parentSku,
          color: color
        },
         
      });
      return result;
    },

}


 


module.exports = {productData};
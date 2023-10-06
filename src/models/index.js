const {Sequelize, DataTypes} = require('sequelize');
const dbConfig = require('../config/config');
const fs= require('fs');
const sequelize = new Sequelize(dbConfig.db_name, dbConfig.db_user_name, dbConfig.db_password, {
	host: dbConfig.db_host,
	dialect: dbConfig.db_dialect,
	operatorsAliases: 0,
	define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true
    },
	logging: false,
	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		//acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle
	}
});


 
sequelize.authenticate()
.then(()=>{
   // console.log('Connection has been established successfully.');
})
.catch (error=>{
    console.log('error'+error);
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.themeWithPromptModel = require('./ThemeWithPrompt')(sequelize, DataTypes);
db.themeLevelsModel = require('./selection_levels')(sequelize, DataTypes);
db.selectionBaseModel = require('./selection_base')(sequelize, DataTypes);
db.selectionExpressionModel = require('./selection_expression')(sequelize, DataTypes);
db.selectionBodyActionModel = require('./selection_body_action')(sequelize, DataTypes);
db.selectionBackgroundModel = require('./selection_background')(sequelize, DataTypes);
db.selectionDesignStyleModel = require('./selection_design_style')(sequelize, DataTypes);
db.mjImagesModel = require('./mj_image')(sequelize, DataTypes);
db.userModel = require('./users')(sequelize, DataTypes);
db.productBaseModel = require('./product_base')(sequelize, DataTypes);
db.productModel = require('./product')(sequelize, DataTypes);
db.styleModel = require('./style')(sequelize, DataTypes);
db.filterModel = require('./product_filter')(sequelize, DataTypes);
db.chatGptPromptModel = require('./chatGptGeneratedPrompts')(sequelize, DataTypes);
db.recentPromptImgModel = require('./recentPromptImages')(sequelize, DataTypes);
 
//  db.sequelize.sync({ force: true }).then(()=>{
// 	console.log('success')
// });



module.exports = db;

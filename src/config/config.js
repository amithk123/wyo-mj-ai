const path = require('path');
module.exports = {
	db_host: 'localhost',
	db_user_name: 'root',
	db_password: '',
	db_name: 'wyo-mid-journey',
	db_dialect: process.env.DB_DIALECT,
	pool: {
		max: 5,
		min: 0,
		//acquire: process.env.DB_POOL_ACQUIRE | 0,
		idle: 1000,
	},

	// midjourney api config
	midApiConfig:{
		_user_token: process.env.MJ_USER_TOKEN,
		_server_id: process.env.MJ_SERVER_ID,
		_channel_id: process.env.MJ_CHANNEL_ID,
		_proxy: process.env.MJ_PROXY,
		_proxies: process.env.MJ_PROXIES,
		_header: { authorization: process.env.MJ_HEADER_AUTH },

		// 
		application_id: process.env.MJ_APP_ID,
		session_id: process.env.MJ_SESSION_ID,
		version: process.env.MJ_VERSION,
		id: process.env.MJ_ID,
		
	},

	//background removal API
	bgRemove:{
		api_key: process.env.BG_REMOVE_API_KEY
	},
	//path
	
	imgPath: path.join(__dirname, '/../../public/images/'),
	jwtKey: process.env.JWT_KEY,
}

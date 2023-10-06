'use strict';
const axios = require('axios');
const config = require('../config/config').midApiConfig;
const fs = require('fs');
console.log('config', config)
const MidjourneyBot = {
  // config: async()=> {
  //   this._config = this._parse_json('abc.json');
  //   this._user_token = this._config.user_token || null;
  //   this._server_id = this._config.server_id || null;
  //   this._channel_id = this._config.channel_id || null;
  //   this._proxy = this._config.proxy || null;
  //   this._proxies = this._proxy ? { http: this._proxy, https: this._proxy } : null;
  //   this._header = { authorization: this._user_token };
  // },
   
  // _parse_json: async(config) =>{
  //   const data = fs.readFileSync(config, 'utf-8');
  //   return JSON.parse(data);
  // },

  content: async(message) => {
    return message.content;
  },

  message_id: async(message) => {
    return message.id;
  },

  message_hash: async(message) =>{
    let url =  await MidjourneyBot.get_image_url(message);
    let msgHash = url.toString().split('_').pop().split('.')[0];
    return msgHash;
  },

  get_image_url: async(message)=> {
    return message.attachments[0].url;
  },

  validate_image_url: async(message) => {
   if (message.attachments.length > 0) {
      if(message.attachments[0].content_type === 'image/png'){
        return true;
      }else{
        return false;
      }
      // const pattern =[/Waiting to start/g, /%/g];
      // let string =processStatus;
      // const matches = [];
      // pattern.forEach(pattern => {
      //   let match;
      //   while ((match = pattern.exec(string)) !== null) {
      //     matches.push(match[0]);
      //   }
      // });
      // console.log(matches);
     
    }
    return false;
  },

  ask: async(prompt) =>{
    const payload = {
      type: 2,
      application_id:  config.application_id,
      guild_id: config._server_id,
      channel_id: config._channel_id,
      session_id: config.session_id,
      data: {
        version: config.version,
        id: config.id,
        name: 'imagine',
        type: 1,
        options: [
          {
            type: 3,
            name: 'prompt',
            value: prompt,
          },
        ],
        application_command: {
          id: config.id,
          application_id: config.application_id,
          version: config.version,
          default_permission: true,
          default_member_permissions: null,
          type: 1,
          nsfw: false,
          name: 'imagine',
          description: 'Create images with Midjourney',
          dm_permission: true,
          options: [
            {
              type: 3,
              name: 'prompt',
              description: 'The prompt to imagine',
              required: true,
            },
          ],
        },
        attachments: [],
      },
    };
    const url = 'https://discord.com/api/v9/interactions';
    const response = await axios.post(url, payload, {
      headers: config._header,
      proxies: config._proxies,
      timeout: 90000,
    });

    //console.log(response);
    
    return response.status;
  },

  up_scale: async(index, message_id, message_hash)=> {
    let payload = {
      type: 3,
      guild_id: config._server_id,
      channel_id: config._channel_id,
      message_flags: 0,
      message_id: message_id,
      application_id: config.application_id,
      session_id: config.session_id,
      data:{
        component_type: 2,
        custom_id: `MJ::JOB::upsample::${index}::${message_hash}`
      }
    }; 
    const url = 'https://discord.com/api/v9/interactions';
    const response = await axios.post(url, payload, {
      headers: config._header,
      proxies: config._proxies,
      timeout: 10000,
    });
    console.log("up scale log: ",response);
    return response.status;
  },

  max_up_scale: async(message) =>{
    const payload = {
      type: 3,
      guild_id: config._server_id,
      channel_id: config._channel_id,
      message_flags: 0,
      message_id: MidjourneyBot.message_id(message),
      application_id: '936929561302675456',
      session_id: '1f3dbdf09efdf93d81a3a6420882c92c',
      data: {
        component_type: 2,
        custom_id: `MJ::JOB::upsample_max::1::${MidjourneyBot.message_hash(message)}::SOLO`,
      },
    };

    const url = 'https://discord.com/api/v9/interactions';
    const response = await axios.post(url, payload, {
      headers: config._header,
      proxies: config._proxies,
      timeout: 900000,
    });
    return response.status;
  },

  messages: async(limit = 1)=> {
    const url = `https://discord.com/api/v9/channels/${config._channel_id}/messages?limit=${limit}`;
    const response = await axios.get(url, {
      headers: config._header,
      proxies: config._proxies,
      timeout: 90000,
    });
    return response.data;
  },

  save_image: async(image_url, image_filename)=> {
    const response = await axios.get(image_url, {
      headers: config._header,
      proxies: config._proxies,
      timeout: 900000,
      responseType: 'arraybuffer',
    });
    fs.writeFileSync(image_filename, response.data);
  },
}

module.exports = {MidjourneyBot}
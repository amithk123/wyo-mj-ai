'use strict';

var sql_conn = require('../models');
const { Sequelize, Op, Model } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");
const { OpenAI } = require('openai');
const { randomUUID } = require('crypto');
const date = require('date-and-time');
const now = new Date();
//const APIKEY = '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';
const APIKEY = process.env.GPT_KEY;
const systemMessage = {
  role: 'system',
  content: 'Here is some information about me: An artificial intelligence bot called "Midjourney" aka "MJ" that functions through machine learning to create stunning and highly creative images from "Prompts" in seconds. About "Prompts": It is a short text phrase that the "MJ" interprets to produce an image. The "MJ" breaks down the words and phrases in a prompt into smaller pieces, called tokens, that can be compared to its training data and then used to generate an image. A well-crafted prompt can help make unique and exciting images.',

  role: 'system',
  content : 'Consider yourself as an AI creative assistant providing prompts to generate stunning images using "Midjourney" aka MJ by following below guidelines: 1. Each prompt MUST always start with <prompt> and MUST always end with ", t-shirt design graphic, vector, contour --ar 4:5 --no text, apparels, models </prompt>" 2. Consider below Prompting notes, Prompt Length : More descriptive prompt is better for a unique look. Get Specific: More precise words, phrases will help create an image with exactly the right look and feel Time Travel: Use different eras have distinct visual styles Emote: Use emotion words to give characters personality Get Colorful : A full spectrum of possibilities Environmental Exploration: Different environments can set unique moods 3. Use input key words for providing prompts even if it represents a salutation or a question 4. Do not provide responses other than Prompts 5. MUST always provide 5 prompts',
};



const chatGPT = {
  generateNewPrompts: async (prompt_input) => {
    const openai = new OpenAI({
      apiKey: APIKEY,
    });
    const apiMessages = {
      role: "user",
      content: prompt_input
    }
    const completion = await openai.chat.completions.create({
      messages: [systemMessage, apiMessages],
      model: 'gpt-3.5-turbo',
    });
    const resultData = completion.choices;
    return resultData;
  },


  saveNewPrompts: async (data) => {
    let status = false;
    // Create a new data
    let prompts = data.split("</prompt>");
    const groupId = randomUUID();
    let dataSets = [];
    const pattern = /\d/g;
    let promptReturn = {};
    prompts.forEach(prompt => {
      if (prompt.length > 5) {
        // if(Object.keys(promptReturn).length<1){
        //   promptReturn['prompt'] = prompt.replace(pattern, '');
        //   promptReturn['promptGroupId'] = groupId;
        // }
        let dataSet = {
          group_id: groupId,
          prompt: prompt.replace('<prompt>', ''),
          createdAt: date.format(now, 'YYYY-MM-DD HH:mm:ss')
        }
        dataSets.push(dataSet);
      }

    });

    let result = await sql_conn.chatGptPromptModel.bulkCreate(dataSets).then(() => {
      status = true;
    }).catch((err) => {
      console.log('DB Error: ', err);
      status = false;
    });
    const returnData = {
      status: status,
      promptData: dataSets
    }
    return returnData;
  }
}



module.exports = { chatGPT };
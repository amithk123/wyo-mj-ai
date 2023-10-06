module.exports = (sequelize, DataTypes)=>{
    const ChatGptPrompts = sequelize.define('chatgpt_generated_prompts', {
        group_id: DataTypes.INTEGER,
        prompt: DataTypes.STRING,
    }, {
        updatedAt: false
    });

   return ChatGptPrompts;
}
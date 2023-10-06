module.exports = (sequelize, DataTypes)=>{
    const RecentPromptImage = sequelize.define('recent_prompt_image', {
        user_id: DataTypes.INTEGER,
        prompt: DataTypes.STRING,
        image: DataTypes.STRING,
        message_id: DataTypes.STRING,
        message_hash: DataTypes.STRING,
    }, {
        updatedAt: false
    });

   return RecentPromptImage;
}
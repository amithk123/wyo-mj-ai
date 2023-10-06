
module.exports = (sequelize, DataTypes)=>{
    const ThemeWithPrompt = sequelize.define('theme_with_prompt', {
        theme: DataTypes.STRING,
        prompt: DataTypes.STRING,
        print_type: DataTypes.STRING,
        style: DataTypes.STRING,
        icon_image: DataTypes.STRING,
    },
    {
        updatedAt: false
    });

   return ThemeWithPrompt;
}


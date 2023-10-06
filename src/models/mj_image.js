module.exports = (sequelize, DataTypes)=>{
    const MjImages = sequelize.define('midjourney_images', {
        file_name: DataTypes.STRING,
        image_type: DataTypes.STRING,
    }, {
        updatedAt: false
    });

   return MjImages;
}
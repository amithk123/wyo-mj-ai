
module.exports = (sequelize, DataTypes)=>{
    const Styles = sequelize.define('styles', {
        style_name: DataTypes.STRING,
        style_icon: DataTypes.STRING,
    },
    {
        updatedAt: false
    });

   return Styles;
}


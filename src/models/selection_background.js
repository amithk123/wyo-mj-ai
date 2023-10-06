module.exports = (sequelize, DataTypes)=>{
    const SelectionBackground = sequelize.define('selection_background', {
        theme_id: DataTypes.INTEGER,
        field_value: DataTypes.STRING,
        selection_type: DataTypes.STRING,
        value_type: DataTypes.STRING,
    }, {
        updatedAt: false
    });

   return SelectionBackground;
}

module.exports = (sequelize, DataTypes)=>{
    const SelectionBodyStyle = sequelize.define('selection_body_action', {
        theme_id: DataTypes.INTEGER,
        field_value: DataTypes.STRING,
        selection_type: DataTypes.STRING,
        value_type: DataTypes.STRING,
    }, {
        updatedAt: false
    });

   return SelectionBodyStyle;
}

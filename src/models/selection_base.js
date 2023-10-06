module.exports = (sequelize, DataTypes)=>{
    const SelectionBase = sequelize.define('selection_base', {
        theme_id: DataTypes.INTEGER,
        field_value: DataTypes.STRING,
        selection_type: DataTypes.STRING,
        value_type: DataTypes.STRING,
    }, {
        updatedAt: false
    });

   return SelectionBase;
}

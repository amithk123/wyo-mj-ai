module.exports = (sequelize, DataTypes)=>{
    const SelectionExpression = sequelize.define('selection_expression', {
        theme_id: DataTypes.INTEGER,
        field_value: DataTypes.STRING,
        selection_type: DataTypes.STRING,
        value_type: DataTypes.STRING,
    }, {
        updatedAt: false
    });

   return SelectionExpression;
}

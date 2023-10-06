module.exports = (sequelize, DataTypes)=>{
    const SelectionDesignStyle = sequelize.define('selection_design_style', {
        theme_id: DataTypes.INTEGER,
        field_value: DataTypes.STRING,
        selection_type: DataTypes.STRING,
        value_type: DataTypes.STRING,
    }, {
        updatedAt: false
    });

   return SelectionDesignStyle;
}

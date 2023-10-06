
module.exports = (sequelize, DataTypes)=>{
    const ThemeLevels = sequelize.define('selection_levels', {
        theme_id: {
            type: DataTypes.INTEGER,
			references: {
				model: "theme",//table name
				key: 'id' //theme table id
			}
        },
        selection_order: DataTypes.INTEGER,
        table_name: DataTypes.STRING
    },{
        updatedAt: false
    });

   return ThemeLevels;
}


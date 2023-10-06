module.exports = (sequelize, DataTypes)=>{
    const ProductFilter = sequelize.define('product_filters', {
        parent_sku: DataTypes.STRING,
        color: DataTypes.STRING,
        image: DataTypes.STRING,
        

    }, {
        updatedAt: false
    });

   return ProductFilter;
}
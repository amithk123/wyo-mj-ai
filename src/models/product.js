module.exports = (sequelize, DataTypes)=>{
    const Products = sequelize.define('products', {
        product_title: DataTypes.INTEGER,
        sku: DataTypes.STRING,
        parent_sku: DataTypes.STRING,
        size: DataTypes.STRING,
        size_number : DataTypes.INTEGER,
        color: DataTypes.STRING,
        color_code: DataTypes.STRING,
        color_icon: DataTypes.STRING,
        image_link: DataTypes.STRING,
        stock: DataTypes.STRING,
        pattern_img: DataTypes.STRING,
    }, {
        updatedAt: false
    });

   return Products;
}

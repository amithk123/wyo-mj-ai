module.exports = (sequelize, DataTypes)=>{
    const ProductBase = sequelize.define('product_base', {
        product_title: DataTypes.INTEGER,
        parent_sku: DataTypes.STRING,
        main_category: DataTypes.STRING,
        product_type: DataTypes.STRING,
        product_type_icon: DataTypes.STRING,
        style: DataTypes.STRING,
        print_type: DataTypes.STRING,
        filter_available: DataTypes.STRING,
        product_img: DataTypes.STRING,
        scaling_avaliable: DataTypes.STRING,
        shifting_available: DataTypes.STRING,

    }, {
        updatedAt: false
    });

   return ProductBase;
}

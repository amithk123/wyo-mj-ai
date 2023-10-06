module.exports = (sequelize, DataTypes)=>{
    const Users = sequelize.define('users', {
        full_name: DataTypes.STRING,
        email_id: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        updatedAt: false
    });

   return Users;
}

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');


const Message=sequelize.define('Message', {
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    timestamp:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW,
    },
});

Message.belongsTo(User, {foreignKey:'userId'});
User.hasMany(Message, {foreigNKey:'userId'});

module.exports=Message;
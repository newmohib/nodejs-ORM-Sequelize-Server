'use strict';
module.exports = (sequelize, DataTypes) => {
  const userDetail = sequelize.define('userDetail', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  userDetail.associate = function(models) {
    // associations can be defined here
  };
  return userDetail;
};
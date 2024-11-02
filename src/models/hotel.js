'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      hotel.belongsTo(models.city)
      hotel.hasMany(models.image)
      hotel.hasMany(models.booking)
      hotel.hasMany(models.review)
      
    }
  }
  hotel.init({
    name: {
     type:DataTypes.STRING,
     allowNull: false
    },

    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    countryId: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'hotel',
  });
  return hotel;
};
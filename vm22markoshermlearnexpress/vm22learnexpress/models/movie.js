'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {

    static associate(models) {
      this.belongsTo(models.User);
    }
  }
  Movie.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};